import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseServiceKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY;

// Este cliente usa a service_role key e pode fazer operações de admin.
// ⚠️  Só use em páginas protegidas por autenticação (como AdminStudents).
// A service_role key DEVE ser configurada como env var no Vercel (não publicar no git).
export const supabaseAdmin = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      }
    })
  : null;
