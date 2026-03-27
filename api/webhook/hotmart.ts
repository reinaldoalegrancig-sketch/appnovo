import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

// ─── MAPEAMENTO: ID do produto na Korvex → ID do produto no app ───────────────
// Preencha com os IDs reais dos seus produtos na Korvex
// Encontre em: Korvex → Produtos → clique no produto → "identificador do produto"
const PRODUCT_MAP: Record<string, string> = {
  'KORVEX_ID_PAES_200':       'paes-200',
  'KORVEX_ID_FRIGIDEIRA_15':  'frigideira-15',
  'KORVEX_ID_AIRFRYER_25':    'airfryer-25',
  'KORVEX_ID_BISCOITOS_30':   'biscoitos-30',
  'KORVEX_ID_MAQUINA_PAO_40': 'maquina-pao-40',
};

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
      const korvexProductId: string = String(item?.product?.id ?? '');
      const korvexProductName: string = item?.product?.name ?? '';
      const appProductId = PRODUCT_MAP[korvexProductId];

      if (appProductId) {
        appProductIds.push(appProductId);
        console.log(`[Korvex Webhook] Produto mapeado: "${korvexProductName}" (${korvexProductId}) → ${appProductId}`);
      } else {
        console.warn(`[Korvex Webhook] Produto não mapeado: "${korvexProductName}" (${korvexProductId})`);
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
