import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

// Dias de acesso para produtos sem plano vitalício
const ACCESS_DAYS = 7;

// ─── MAPEAMENTO: Nome do produto na Korvex → ID(s) do produto no app ─────────
const PRODUCT_NAME_MAP: Record<string, string[]> = {
  'curso online de pães sem glúten - fernanda oliveira': ['paes-200'],
  '+15 receitas de frigideira e micro-ondas sem glúten': ['frigideira-15'],
  '+25 receitas de air fryer sem glúten':                ['airfryer-25'],
  '+30 bolachas e biscoitos sem glúten':                 ['biscoitos-30'],
  '+40 receitas máquina de pão sem glúten - fernanda oliveira': ['maquina-pao-40'],
  '+40 receitas na máquina de pão sem glúten':           ['maquina-pao-40'],

  // Acesso vitalício → remove expiração de todos os produtos
  'acesso vitalício + atualizações': ['paes-200', 'frigideira-15', 'airfryer-25', 'biscoitos-30', 'maquina-pao-40'],
};

// Produtos cujo acesso é vitalício ao comprar (remove qualquer expiração)
const LIFETIME_PRODUCTS = new Set(
  PRODUCT_NAME_MAP['acesso vitalício + atualizações']
);

const LIFETIME_PRODUCT_NAME = 'acesso vitalício + atualizações';

function findProductsByName(name: string): string[] {
  return PRODUCT_NAME_MAP[name.toLowerCase().trim()] ?? [];
}

function isLifetimePurchase(korvexName: string): boolean {
  return korvexName.toLowerCase().trim() === LIFETIME_PRODUCT_NAME;
}

function expiryDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + ACCESS_DAYS);
  return d.toISOString();
}

const PAID_STATUSES = ['paid', 'PAID', 'approved', 'APPROVED', 'completed', 'COMPLETED'];
const DEFAULT_PASSWORD = 'receitas123';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookToken = process.env.KORVEX_WEBHOOK_TOKEN;
  if (webhookToken) {
    const receivedToken = req.body?.token;
    if (receivedToken !== webhookToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  try {
    const payload = req.body;
    const status: string = payload?.transaction?.status ?? '';

    if (!PAID_STATUSES.includes(status)) {
      return res.status(200).json({ message: `Status "${status}" ignorado.` });
    }

    const buyerEmail: string | undefined = payload?.client?.email;
    const buyerName: string | undefined = payload?.client?.name;

    if (!buyerEmail) {
      return res.status(400).json({ error: 'Email do comprador não encontrado.' });
    }

    // Processar itens do pedido
    const orderItems: any[] = payload?.orderItems ?? [];
    const newProductIds: string[] = [];
    let isLifetime = false;

    for (const item of orderItems) {
      const name: string = item?.product?.name ?? '';
      const mapped = findProductsByName(name);
      if (mapped.length > 0) {
        newProductIds.push(...mapped);
        if (isLifetimePurchase(name)) isLifetime = true;
      } else {
        console.warn(`[Korvex] Produto não mapeado: "${name}"`);
      }
    }

    // Buscar usuário existente
    const { data: listData } = await supabase.auth.admin.listUsers();
    const existing = listData?.users?.find(u => u.email === buyerEmail);

    if (existing) {
      const currentProducts: string[] = existing.user_metadata?.unlocked_products ?? [];
      const currentExpiry: Record<string, string> = existing.user_metadata?.product_expiry ?? {};

      const updatedProducts = Array.from(new Set([...currentProducts, ...newProductIds]));
      const updatedExpiry = { ...currentExpiry };

      if (isLifetime) {
        // Vitalício: remove expiração de todos os produtos desbloqueados
        for (const id of updatedProducts) {
          delete updatedExpiry[id];
        }
      } else {
        // Temporário: define expiração de 7 dias apenas para produtos SEM expiração prévia
        for (const id of newProductIds) {
          if (!updatedExpiry[id]) {
            updatedExpiry[id] = expiryDate();
          }
        }
      }

      await supabase.auth.admin.updateUserById(existing.id, {
        user_metadata: {
          ...existing.user_metadata,
          unlocked_products: updatedProducts,
          product_expiry: updatedExpiry,
        },
      });

      console.log(`[Korvex] Aluno atualizado: ${buyerEmail} | lifetime=${isLifetime} | produtos=${updatedProducts.join(', ')}`);
      return res.status(200).json({ success: true, action: 'updated', email: buyerEmail, lifetime: isLifetime, products: updatedProducts });

    } else {
      // Novo usuário
      const productExpiry: Record<string, string> = {};
      if (!isLifetime) {
        for (const id of newProductIds) {
          productExpiry[id] = expiryDate();
        }
      }

      const { error } = await supabase.auth.admin.createUser({
        email: buyerEmail,
        password: DEFAULT_PASSWORD,
        email_confirm: true,
        user_metadata: {
          name: buyerName,
          unlocked_products: newProductIds,
          product_expiry: productExpiry,
        },
      });

      if (error) throw error;

      console.log(`[Korvex] Novo aluno: ${buyerEmail} | lifetime=${isLifetime} | produtos=${newProductIds.join(', ')}`);
      return res.status(200).json({ success: true, action: 'created', email: buyerEmail, lifetime: isLifetime, products: newProductIds });
    }

  } catch (err: any) {
    console.error('[Korvex] Erro:', err?.message ?? err);
    return res.status(500).json({ error: err?.message ?? 'Erro interno.' });
  }
}
