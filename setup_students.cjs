const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const env = fs.readFileSync('.env', 'utf8');
const SUPABASE_URL = env.match(/VITE_SUPABASE_URL=(.+)/)[1].trim();
const SERVICE_KEY = 'sb_secret_BepuuPuyhemcl0jWcpZFEA_4gXKMZHp';

const sb = createClient(SUPABASE_URL, SERVICE_KEY);

async function setupStudentTable() {
  console.log('Criando tabela user_products...');
  
  // Insere um registro de teste para forçar a criação da estrutura
  // A tabela precisa ser criada via SQL no Supabase Dashboard
  // Vamos verificar se já existe
  const { data, error } = await sb.from('user_products').select('*').limit(1);
  
  if (error && error.code === '42P01') {
    console.log('❌ Tabela user_products não existe ainda.');
    console.log('📋 Execute este SQL no Supabase Dashboard > SQL Editor:\n');
    console.log(`
-- Tabela de acesso de alunos
CREATE TABLE IF NOT EXISTS user_products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL,
  product_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_email, product_id)
);

-- Liberar leitura para usuários autenticados (apenas os próprios dados)
ALTER TABLE user_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários veem apenas seus próprios acessos"
ON user_products FOR SELECT
USING (auth.email() = user_email);

CREATE POLICY "Admins gerenciam todos os acessos"
ON user_products FOR ALL
USING (auth.email() = 'admin@adminfe.com.br');
    `);
  } else if (error) {
    console.error('Erro:', error);
  } else {
    console.log('✅ Tabela user_products já existe!', data);
  }
}

setupStudentTable();
