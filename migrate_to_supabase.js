const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://BepuuPuyhemcl0jWcpZF.supabase.co';
const SUPABASE_SERVICE_KEY = 'sb_secret_BepuuPuyhemcl0jWcpZFEA_4gXKMZHp';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const recipesData = [
  // ... will insert recipes here via a separate process or by reading the file
];

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

  // 1. Migrar Produtos
  console.log('Migrando Produtos...');
  const { error: pError } = await supabase
    .from('products')
    .upsert(productsData);
  
  if (pError) {
    console.error('Erro ao migrar produtos:', pError);
    return;
  }
  console.log('✅ Produtos migrados com sucesso!');

  // 2. Migrar Receitas (Vou carregar as receitas do arquivo .ts dinamicamente no comando de execução)
}

// Nota: O script real será executado via node com os dados injetados ou lidos.
