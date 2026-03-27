import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

// ─── MAPEAMENTO: Nome do produto na Korvex → ID do produto no app ────────────
// Use o nome exato como aparece na Korvex (a comparação ignora maiúsculas)
const PRODUCT_NAME_MAP: Record<string, string> = {
  '200 receitas de pães':        'paes-200',
  '+15 frigideira/micro-ondas':  'frigideira-15',
  '+25 air fryer':               'airfryer-25',
  '+30 bolachas e biscoitos':    'biscoitos-30',
  '+40 máquina de pão':          'maquina-pao-40',
};

function findProductByName(name: string): string | undefined {
  return PRODUCT_NAME_MAP[name.toLowerCase().trim()];
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
      const appProductId = findProductByName(korvexProductName);

      if (appProductId) {
        appProductIds.push(appProductId);
        console.log(`[Korvex Webhook] Produto mapeado: "${korvexProductName}" → ${appProductId}`);
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
