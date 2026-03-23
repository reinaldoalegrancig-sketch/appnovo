const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const env = fs.readFileSync('.env', 'utf8');
const SUPABASE_URL = env.match(/VITE_SUPABASE_URL=(.+)/)[1].trim();
const SERVICE_KEY = 'sb_secret_BepuuPuyhemcl0jWcpZFEA_4gXKMZHp';

const sb = createClient(SUPABASE_URL, SERVICE_KEY);

// Criar um aluno com produtos liberados nos metadados
async function createStudent(email, productIds) {
  // 1. Verificar se usuário já existe
  const { data: listData } = await sb.auth.admin.listUsers();
  const existing = listData?.users?.find(u => u.email === email);

  if (existing) {
    // Atualizar metadados do usuário existente
    const { error } = await sb.auth.admin.updateUserById(existing.id, {
      user_metadata: { unlocked_products: productIds }
    });
    if (error) {
      console.error('Erro ao atualizar:', error.message);
    } else {
      console.log(`✅ Aluno atualizado: ${email} | Produtos: ${productIds.join(', ')}`);
    }
  } else {
    // Criar novo usuário
    const { data, error } = await sb.auth.admin.createUser({
      email,
      password: 'receitas123',
      email_confirm: true,
      user_metadata: { unlocked_products: productIds }
    });
    if (error) {
      console.error('Erro ao criar:', error.message);
    } else {
      console.log(`✅ Aluno criado: ${email} | Produtos: ${productIds.join(', ')}`);
    }
  }
}

// Teste: criar aluno com acesso total
createStudent('teste.aluno@gmail.com', ['paes-200', 'airfryer-25', 'frigideira-15', 'biscoitos-30', 'maquina-pao-40']);
