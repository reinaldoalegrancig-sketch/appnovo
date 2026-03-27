import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

// ─── MAPEAMENTO: Nome do produto na Korvex → ID(s) do produto no app ─────────
// Cada nome pode liberar um ou mais produtos (ex: bundle libera tudo)
const PRODUCT_NAME_MAP: Record<string, string[]> = {
  // Curso principal
  'curso online de pães sem glúten - fernanda oliveira': ['paes-200'],

  // Bônus individuais
  '+15 receitas de frigideira e micro-ondas sem glúten': ['frigideira-15'],
  '+25 receitas de air fryer sem glúten':                ['airfryer-25'],
  '+30 bolachas e biscoitos sem glúten':                 ['biscoitos-30'],
  '+40 receitas máquina de pão sem glúten - fernanda oliveira': ['maquina-pao-40'],
  '+40 receitas na máquina de pão sem glúten':           ['maquina-pao-40'],

  // Acesso vitalício → libera tudo
  'acesso vitalício + atualizações': ['paes-200', 'frigideira-15', 'airfryer-25', 'biscoitos-30', 'maquina-pao-40'],
};

function findProductsByName(name: string): string[] {
  return PRODUCT_NAME_MAP[name.toLowerCase().trim()] ?? [];
}

// Status da Korvex que indicam pagamento confirmado
const PAID_STATUSES = ['paid', 'PAID', 'approved', 'APPROVED', 'completed', 'COMPLETED'];

const DEFAULT_PASSWORD = 'receitas123';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verificar token de segurança da Korvex (campo "token" no payload)
  const webhookToken = process.env.KORVEX_WEBHOOK_TOKEN;
  if (webhookToken) {
    const receivedToken = req.body?.token;
    if (receivedToken !== webhookToken) {
      console.warn('[Korvex Webhook] Token inválido recebido:', receivedToken);
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  try {
    const payload = req.body;
    const event: string = payload?.event ?? '';
    const status: string = payload?.transaction?.status ?? '';

    console.log(`[Korvex Webhook] Evento: "${event}" | Status: "${status}"`);

    // Processar apenas transações pagas
    if (!PAID_STATUSES.includes(status)) {
      return res.status(200).json({ message: `Status "${status}" ignorado.` });
    }

    // Dados do comprador
    const buyerEmail: string | undefined = payload?.client?.email;
    const buyerName: string | undefined = payload?.client?.name;

    if (!buyerEmail) {
      console.error('[Korvex Webhook] Email do comprador não encontrado.');
      return res.status(400).json({ error: 'Email do comprador não encontrado.' });
    }

    // Coletar todos os produtos comprados (orderItems)
    const orderItems: any[] = payload?.orderItems ?? [];
    const appProductIds: string[] = [];

    for (const item of orderItems) {
      const korvexProductName: string = item?.product?.name ?? '';
      const mapped = findProductsByName(korvexProductName);

      if (mapped.length > 0) {
        appProductIds.push(...mapped);
        console.log(`[Korvex Webhook] Produto mapeado: "${korvexProductName}" → [${mapped.join(', ')}]`);
      } else {
        console.warn(`[Korvex Webhook] Produto não mapeado: "${korvexProductName}"`);
      }
    }

    // Buscar se o usuário já existe
    const { data: listData } = await supabase.auth.admin.listUsers();
    const existing = listData?.users?.find(u => u.email === buyerEmail);

    if (existing) {
      // Usuário existe → mesclar produtos sem remover os anteriores
      const currentProducts: string[] = existing.user_metadata?.unlocked_products ?? [];
      const updatedProducts = Array.from(new Set([...currentProducts, ...appProductIds]));

      await supabase.auth.admin.updateUserById(existing.id, {
        user_metadata: { unlocked_products: updatedProducts },
      });

      console.log(`[Korvex Webhook] Aluno atualizado: ${buyerEmail} → ${updatedProducts.join(', ')}`);
      return res.status(200).json({ success: true, action: 'updated', email: buyerEmail, products: updatedProducts });
    } else {
      // Novo usuário → criar com os produtos comprados
      const { error } = await supabase.auth.admin.createUser({
        email: buyerEmail,
        password: DEFAULT_PASSWORD,
        email_confirm: true,
        user_metadata: {
          name: buyerName,
          unlocked_products: appProductIds,
        },
      });

      if (error) throw error;

      console.log(`[Korvex Webhook] Novo aluno criado: ${buyerEmail} → ${appProductIds.join(', ')}`);
      return res.status(200).json({ success: true, action: 'created', email: buyerEmail, products: appProductIds });
    }
  } catch (err: any) {
    console.error('[Korvex Webhook] Erro:', err?.message ?? err);
    return res.status(500).json({ error: err?.message ?? 'Erro interno.' });
  }
}
