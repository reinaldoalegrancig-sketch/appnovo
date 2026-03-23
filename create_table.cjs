const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const env = fs.readFileSync('.env', 'utf8');
const SUPABASE_URL = env.match(/VITE_SUPABASE_URL=(.+)/)[1].trim();
const SERVICE_KEY = 'sb_secret_BepuuPuyhemcl0jWcpZFEA_4gXKMZHp';

const sb = createClient(SUPABASE_URL, SERVICE_KEY);

// Supabase Management API para criar tabela via SQL
async function createTable() {
  const projectRef = SUPABASE_URL.replace('https://', '').replace('.supabase.co', '');
  console.log('Project Ref:', projectRef);
  
  const sql = `
CREATE TABLE IF NOT EXISTS user_products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL,
  product_id TEXT NOT NULL REFERENCES products(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_email, product_id)
);

ALTER TABLE user_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "read_own_access"
ON user_products FOR SELECT
USING (auth.email() = user_email);

CREATE POLICY IF NOT EXISTS "admin_manage_all"
ON user_products FOR ALL
USING (auth.email() = 'admin@adminfe.com.br');
  `;

  const res = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/database/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SERVICE_KEY}`
    },
    body: JSON.stringify({ query: sql })
  });
  
  const text = await res.text();
  console.log('Status:', res.status);
  console.log('Response:', text);
}

createTable();
