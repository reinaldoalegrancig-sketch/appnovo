import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

// ─── MAPEAMENTO: ID do produto no Hotmart → ID do produto no app ──────────────
// Preencha com os IDs reais dos seus produtos no Hotmart
// Encontre em: Hotmart → Produtos → clique no produto → o número na URL
const PRODUCT_MAP: Record<string, string> = {
  'HOTMART_ID_PAES_200':       'paes-200',
  'HOTMART_ID_FRIGIDEIRA_15':  'frigideira-15',
  'HOTMART_ID_AIRFRYER_25':    'airfryer-25',
  'HOTMART_ID_BISCOITOS_30':   'biscoitos-30',
  'HOTMART_ID_MAQUINA_PAO_40': 'maquina-pao-40',
};

const DEFAULT_PASSWORD = 'receitas123';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verificar token de segurança (configure HOTMART_WEBHOOK_TOKEN no Vercel)
  const webhookToken = process.env.HOTMART_WEBHOOK_TOKEN;
  if (webhookToken) {
    const received = req.headers['x-hotmart-webhook-token'] ?? req.headers['hottok'];
    if (received !== webhookToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  try {
    const payload = req.body;
    const event: string = payload?.event ?? '';

    console.log(`[Hotmart Webhook] Evento recebido: ${event}`);

    // Processar apenas compras pagas
    if (event !== 'PURCHASE_COMPLETE') {
      return res.status(200).json({ message: `Evento "${event}" ignorado.` });
    }

    const buyerEmail: string | undefined = payload?.data?.buyer?.email;
    const hotmartProductId: string = String(payload?.data?.product?.id ?? '');
    const hotmartProductName: string = payload?.data?.product?.name ?? '';

    if (!buyerEmail) {
      console.error('[Hotmart Webhook] Email do comprador não encontrado no payload.');
      return res.status(400).json({ error: 'Email do comprador não encontrado.' });
    }

    // Mapear produto Hotmart → produto do app
    const appProductId: string | undefined = PRODUCT_MAP[hotmartProductId];

    if (!appProductId) {
      console.warn(`[Hotmart Webhook] Produto não mapeado: ID=${hotmartProductId} | Nome="${hotmartProductName}"`);
      // Continua para criar o usuário, mas sem produto liberado
    } else {
      console.log(`[Hotmart Webhook] Produto mapeado: ${hotmartProductId} → ${appProductId}`);
    }

    // Buscar se o usuário já existe
    const { data: listData } = await supabase.auth.admin.listUsers();
    const existing = listData?.users?.find(u => u.email === buyerEmail);

    if (existing) {
      // Usuário já existe → adicionar novo produto sem remover os anteriores
      const currentProducts: string[] = existing.user_metadata?.unlocked_products ?? [];
      const updatedProducts =
        appProductId && !currentProducts.includes(appProductId)
          ? [...currentProducts, appProductId]
          : currentProducts;

      await supabase.auth.admin.updateUserById(existing.id, {
        user_metadata: { unlocked_products: updatedProducts },
      });

      console.log(`[Hotmart Webhook] Aluno atualizado: ${buyerEmail} → produtos: ${updatedProducts.join(', ')}`);
      return res.status(200).json({ success: true, action: 'updated', email: buyerEmail, products: updatedProducts });
    } else {
      // Usuário novo → criar com o produto comprado
      const { error } = await supabase.auth.admin.createUser({
        email: buyerEmail,
        password: DEFAULT_PASSWORD,
        email_confirm: true,
        user_metadata: {
          unlocked_products: appProductId ? [appProductId] : [],
        },
      });

      if (error) throw error;

      console.log(`[Hotmart Webhook] Novo aluno criado: ${buyerEmail} → produto: ${appProductId}`);
      return res.status(200).json({ success: true, action: 'created', email: buyerEmail, product: appProductId });
    }
  } catch (err: any) {
    console.error('[Hotmart Webhook] Erro:', err?.message ?? err);
    return res.status(500).json({ error: err?.message ?? 'Erro interno.' });
  }
}
