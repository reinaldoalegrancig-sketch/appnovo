const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const recipesData = require('./temp_recipes.cjs');

const SUPABASE_URL = 'https://epuupuyhemcl0jwcpzfe.supabase.co'; // Corrigido de BepuuPuyhemcl0jWcpZF (provavelmente era o ID)
// Pera, o URL correto deve ser encontrado no supabaseClient.ts ou no .env
// Vou verificar o URL primeiro.

const SUPABASE_SERVICE_KEY = 'sb_secret_BepuuPuyhemcl0jWcpZFEA_4gXKMZHp';

// Vamos ler o URL do .env ou de um arquivo
const envContent = fs.readFileSync('.env', 'utf8');
const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.+)/);
const SUPABASE_URL_REAL = urlMatch ? urlMatch[1].trim() : 'https://BepuuPuyhemcl0jWcpZF.supabase.co';

const supabase = createClient(SUPABASE_URL_REAL, SUPABASE_SERVICE_KEY);

const productsData = [
  {
    id: "paes-200",
    title: "200 Receitas De Pães Sem Glúten",
    subtitle: "A Bíblia da Panificação Inclusiva",
    category: "Ebook Master",
    count: "200 Receitas",
    description: "O acervo mais completo do Brasil. De pães tradicionais a técnicas avançadas, 100% testadas pela Chef Fernanda Oliveira.",
    featured: true
  },
  {
    id: "frigideira-15",
    title: "+15 Receitas de Frigideira e Micro-ondas Sem Glúten",
    subtitle: "Praticidade e Sabor em Minutos",
    category: "Bônus Ágil",
    count: "15 Receitas",
    description: "Ideal para quem tem pouco tempo mas não abre mão de um pão quentinho e saudável no café da manhã.",
    featured: false
  },
  {
    id: "airfryer-25",
    title: "+25 Receitas de Air Fryer Sem Glúten",
    subtitle: "Crocância e Rapidez Digital",
    category: "Bônus Moderno",
    count: "25 Receitas",
    description: "Aprenda a usar sua Air Fryer para criar pães, bolos e salgados com texturas surpreendentes.",
    featured: false
  },
  {
    id: "biscoitos-30",
    title: "+30 Bolachas e Biscoitos Sem Glúten",
    subtitle: "Confeitaria de Elite",
    category: "Bônus Confeitaria",
    count: "30 Receitas",
    description: "Bolachas crocantes e biscoitos que derretem na boca. O acompanhamento perfeito para o seu café.",
    featured: false
  },
  {
    id: "maquina-pao-40",
    title: "+40 Receitas na Máquina de Pão Sem Glúten",
    subtitle: "Automação com Sabor Real",
    category: "Bônus Automático",
    count: "40 Receitas",
    description: "Proporções exatas para sua máquina de pão. Coloque os ingredientes, aperte o botão e sinta o aroma.",
    featured: false
  }
];

async function migrate() {
  console.log('--- Iniciando Migração Master para Supabase ---');
  console.log('URL:', SUPABASE_URL_REAL);

  // 1. Migrar Produtos
  console.log('Migrando Produtos...');
  const { error: pError } = await supabase
    .from('products')
    .upsert(productsData);
  
  if (pError) {
    console.error('❌ Erro ao migrar produtos:', pError);
    return;
  }
  console.log('✅ Produtos migrados com sucesso!');

  // 2. Migrar Receitas
  console.log(`Preparando ${recipesData.length} receitas...`);
  
  const mappedRecipes = recipesData.map(r => ({
    id: r.id,
    product_id: r.productId,
    title: r.title,
    time: r.time,
    yield: r.yield,
    description: r.description,
    category: r.category,
    ingredients: r.ingredients,
    instructions: r.instructions,
    tip: r.tip || ''
  }));

  // Inserir em lotes para não estourar limite de payload
  const CHUNK_SIZE = 50;
  for (let i = 0; i < mappedRecipes.length; i += CHUNK_SIZE) {
    const chunk = mappedRecipes.slice(i, i + CHUNK_SIZE);
    console.log(`Enviando lote ${i / CHUNK_SIZE + 1}...`);
    const { error: rError } = await supabase
      .from('recipes')
      .upsert(chunk);
    
    if (rError) {
      console.error(`❌ Erro no lote ${i / CHUNK_SIZE + 1}:`, rError);
      return;
    }
  }

  console.log('✅ TODAS AS RECEITAS FORAM MIGRADAS COM SUCESSO! 🛡️💎');
}

migrate();
