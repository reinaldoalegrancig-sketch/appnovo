const recipes = [
  {
    id: "recipe-1",
    productId: "paes-200",
    title: "Pão de Forma Clássico Super Fofinho",
    time: "1h 30 min",
    yield: "1 pão médio (10 a 12 fatias)",
    description: "Um clássico da panificação inclusive que traz maciez superior e sabor equilibrado. A base perfeita para suas torradas e sanduíches.",
    category: "tradicionais",
    ingredients: [
      "1 xícara de farinha de arroz",
      "½ xícara de fécula de batata",
      "½ xícara de polvilho doce",
      "1 colher de chá de goma xantana",
      "1 envelope (10g) de fermento biológico seco",
      "2 ovos em temperatura ambiente",
      "¼ xícara de óleo de girassol (ou azeite de sabor suave)",
      "1 xícara de água morna",
      "1 colher de sopa de açúcar demerara",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Em uma tigela grande, misture todos os ingredientes secos: a farinha de arroz, a fécula de batata, o polvilho doce, a goma xantana, o fermento e o açúcar.",
      "Em outro recipiente, bata levemente os ovos com o óleo e a água morna (cuidado para não estar muito quente).",
      "Despeje os líquidos sobre os secos e misture bem com um fouet ou batedeira até obter uma massa homogênea.",
      "Por último, incorpore o sal.",
      "Despeje a massa em uma forma de pão inglês untada e polvilhada com farinha de arroz.",
      "Cubra e deixe descansar em local quente por 40 a 50 minutos.",
      "Asse em forno preaquecido a 180°C por cerca de 35 a 40 minutos."
    ],
    tip: "Espere o pão esfriar completamente antes de fatiar. Isso evita que a massa esfarele ou fique embatumada."
  },
  {
    id: "recipe-2",
    productId: "paes-200",
    title: "Pão Francês Crocante",
    time: "1h 45 min",
    yield: "6 pães médios",
    description: "Sem trigo e sem lactose, este pão traz a casquinha crocante e o miolo aerado que você tanto sentia falta no café da manhã.",
    category: "tradicionais",
    ingredients: [
      "1 xícara de farinha de arroz",
      "½ xícara de polvilho doce",
      "¼ xícara de farinha de grão-de-bico",
      "1 colher de sopa de psyllium em pó",
      "1 colher de chá de goma xantana",
      "1 envelope (10g) de fermento biológico seco",
      "1 colher de sopa de azeite de oliva",
      "1 e ¼ xícara de água morna",
      "1 colher de sopa de açúcar",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Hidrate o psyllium com ¼ de xícara da água morna e deixe descansar por 5 minutos até formar um gel.",
      "Em uma bacia, junte as farinhas, a goma xantana, o fermento e o açúcar.",
      "Adicione o gel de psyllium, o azeite e o restante da água morna aos poucos.",
      "Misture com as mãos ou espátula firme. Adicione o sal.",
      "Sove levemente até a massa ficar modelável e levemente pegajosa.",
      "Molde os pães, faça um corte superficial no topo e deixe crescer por 45 minutos.",
      "Asse em forno preaquecido a 200°C por 30 a 35 minutos."
    ],
    tip: "Borrife um pouco de água dentro do forno nos primeiros 5 minutos de assamento para gerar vapor e garantir a crocância!"
  },
  {
    id: "recipe-3",
    productId: "paes-200",
    title: "Pão de Hambúrguer Macio com Gergelim",
    time: "1h 20 min",
    yield: "4 pães",
    description: "Perfeito para lanches de elite. Uma massa leve, aromática e com o toque clássico do gergelim.",
    category: "tradicionais",
    ingredients: [
      "1 xícara de farinha de arroz",
      "½ xícara de polvilho doce",
      "1 colher de sopa de farinha de linhaça dourada",
      "1 colher de chá de goma xantana",
      "5g de fermento biológico seco",
      "1 ovo",
      "2 colheres de sopa de óleo vegetal",
      "¾ xícara de água morna",
      "1 colher de sobremesa de açúcar",
      "1 colher de chá de sal",
      "Gergelim branco para polvilhar",
      "1 gema pincelar"
    ],
    instructions: [
      "Misture as farinhas, a linhaça, a xantana, o fermento e o açúcar em um recipiente.",
      "Adicione o ovo, o óleo e a água morna. Misture até formar massa homogênea.",
      "Incorpore o sal.",
      "Unte as mãos e divida a massa em 4, moldando em bolas achatadas.",
      "Coloque na assadeira, cubra e deixe crescer por 40 minutos.",
      "Pincele a gema e polvilhe o gergelim.",
      "Asse em forno preaquecido a 180°C por 25 a 30 minutos."
    ]
  },
  {
    id: "recipe-4",
    productId: "paes-200",
    title: "Pãozinho de Batata Doce Leve e Nutritivo",
    time: "1h",
    yield: "8 pãezinhos",
    description: "Uma opção saudável que utiliza a batata doce para garantir umidade e nutrientes sem pesar no estômago.",
    category: "funcionais",
    ingredients: [
      "1 xícara de purê de batata doce",
      "1 xícara de polvilho azedo",
      "½ xícara de polvilho doce",
      "¼ xícara de azeite de oliva",
      "¼ xícara de água morna",
      "1 colher de chá de sal",
      "1 colher de sopa de chia (opcional)"
    ],
    instructions: [
      "Em uma tigela grande, misture o purê de batata morno com o azeite e a água.",
      "Vá acrescentando os polvilhos, sal e chia aos poucos.",
      "Amasse com as mãos até obter uma massa lisa que não grude.",
      "Faça bolinhas e distribua em uma assadeira.",
      "Asse em forno preaquecido a 180°C por cerca de 30 a 35 minutos."
    ]
  },
  {
    id: "recipe-5",
    productId: "paes-200",
    title: "Pão de Mandioquinha que Derrete na Boca",
    time: "1h",
    yield: "10 pãezinhos",
    description: "Crocante por fora e macio por dentro. Uma textura surpreendente que lembra o clássico pão de queijo brasileiro.",
    category: "funcionais",
    ingredients: [
      "1 xícara de purê de mandioquinha",
      "1 xícara de polvilho doce",
      "½ xícara de polvilho azedo",
      "3 colheres de sopa de azeite ou óleo de coco",
      "¼ xícara de água morna",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Misture o purê de mandioquinha morno com o azeite e a água.",
      "Adicione o sal e os polvilhos gradualmente.",
      "Sove com as mãos até que fique elástica, lisa e desgrude da tigela.",
      "Modele em bolinhas ou meia-lua.",
      "Leve ao forno preaquecido a 180°C por 25 a 30 minutos."
    ]
  },
  {
    id: "recipe-6",
    productId: "paes-200",
    title: "Baguete Francesa Rústica",
    time: "1h 50 min",
    yield: "2 baguetes médias",
    description: "Com o psyllium garantindo a elasticidade e um segredo de padaria para a crosta estaladiça.",
    category: "rusticos",
    ingredients: [
      "1 e ½ xícara de farinha de arroz",
      "½ xícara de fécula de batata",
      "¼ xícara de polvilho doce",
      "1 colher de sopa cheia de psyllium em pó",
      "1 colher de chá de goma xantana",
      "1 envelope (10g) de fermento biológico seco",
      "1 e ½ xícara de água morna",
      "1 colher de sopa de azeite extra virgem",
      "1 colher de sopa de açúcar mascavado",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Hidrate o psyllium com água morna por 5 min até formar um gel espesso.",
      "Misture as farinhas, goma, fermento e açúcar.",
      "Adicione o gel, azeite e resto da água. Misture vigorosamente por 2 min.",
      "Incorpore o sal. Modele duas baguetes com as mãos untadas em azeite.",
      "Faça cortes diagonais e deixe levedar em local morno por 45 a 60 min.",
      "Asse a 220°C por cerca de 35 minutos."
    ],
    tip: "Coloque um pequeno recipiente com água a ferver na parte de baixo do forno para gerar a humidade necessária para uma crosta perfeita!"
  },
  {
    id: "recipe-7",
    productId: "paes-200",
    title: "Bisnaguinha Saudável para o Lanche",
    time: "1h 30 min",
    yield: "12 a 15 bisnaguinhas",
    description: "Macias e nutritivas, perfeitas para o lanche das crianças ou um café da tarde nostálgico.",
    category: "tradicionais",
    ingredients: [
      "1 xícara de farinha de arroz",
      "1 xícara de polvilho doce",
      "¼ xícara de farinha de amêndoa",
      "1 colher de chá de goma xantana",
      "5g de fermento biológico seco",
      "¼ xícara de óleo de coco derretido",
      "1 ovo",
      "¾ xícara de leite vegetal morno",
      "2 colheres de sopa de açúcar",
      "1 pitada de sal"
    ],
    instructions: [
      "Misture os secos em uma bacia.",
      "Adicione o ovo, óleo e leite morno aos poucos. Misture até ficar homogênea.",
      "Incorpore o sal. Modele pequenos cilindros fofinhos.",
      "Deixe descansar por 40 minutos coberto.",
      "Asse a 180°C por 20 a 25 minutos."
    ]
  },
  {
    id: "recipe-8",
    productId: "paes-200",
    title: "Pão de Liquidificador Prático",
    time: "50 min",
    yield: "1 pão de forma médio",
    description: "A solução perfeita para quem tem pressa. Uma massa mole, rápida e surpreendentemente fofinha.",
    category: "rapidos",
    ingredients: [
      "1 e ½ xícara de farinha de aveia (sem glúten)",
      "½ xícara de farinha de arroz",
      "½ xícara de polvilho doce",
      "1 colher de sopa de fermento químico (bolo)",
      "3 ovos",
      "⅓ xícara de azeite",
      "1 xícara de água ou leite vegetal",
      "1 colher de chá de sal",
      "Sementes para decorar"
    ],
    instructions: [
      "Bata ovos, óleo, água e sal no liquidificador.",
      "Adicione as farinhas aos poucos e bata até misturar bem.",
      "Por último, misture o fermento químico delicadamente com uma espátula.",
      "Despeje na forma de pão untada.",
      "Decore o topo com sementes e asse imediatamente a 180°C por 35 a 40 min."
    ]
  },
  {
    id: "recipe-9",
    productId: "paes-200",
    title: "Pão de Milho Fofinho (Estilo Broa)",
    time: "1h 20 min",
    yield: "1 pão médio ou 8 pequenos",
    description: "Aquele aroma de padaria antiga em uma versão inclusiva. Doce na medida certa e muito aromático.",
    category: "tradicionais",
    ingredients: [
      "1 xícara de fubá mimoso",
      "1 xícara de farinha de arroz",
      "½ xícara de polvilho doce",
      "1 colher de chá de goma xantana",
      "1 envelope (10g) de fermento biológico seco",
      "¼ xícara de azeite",
      "1 xícara de leite de coco morno",
      "2 colheres de sopa de açúcar mascavado",
      "1 colher de chá de erva-doce",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Misture todos os ingredientes secos em uma tigela.",
      "Adicione o azeite e o leite de coco morno e misture até formar massa consistente.",
      "Incorpore o sal. Modele bolas ou coloque na forma untada.",
      "Deixe levedar por 40 minutos.",
      "Asse a 180°C por cerca de 30 a 35 minutos."
    ]
  },
  {
    id: "recipe-10",
    productId: "paes-200",
    title: "Pão Sírio (Pita) Perfeito",
    time: "1h 10 min",
    yield: "6 pães",
    description: "Um clássico da culinária árabe redesenhado. Maleável, abre massa e é ideal para wraps e sanduíches.",
    category: "tradicionais",
    ingredients: [
      "1 e ½ xícara de farinha de arroz",
      "½ xícara de polvilho doce",
      "1 colher de sopa de psyllium",
      "1 colher de chá de goma xantana",
      "5g de fermento biológico seco",
      "1 colher de sopa de azeite",
      "1 xícara de água morna",
      "1 colher de chá de açúcar",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Hidrate o psyllium com metade da água morna por 5 min.",
      "Junte secos, gel de psyllium, azeite e resto da água. Misture até desgrudar das mãos.",
      "Deixe descansar por 30 minutos em local protegido.",
      "Abra discos finos em papel vegetal polvilhado.",
      "Aqueça a frigideira e cozinhe por 2 min de cada lado até fazer bolhas."
    ],
    tip: "Assim que retirar da frigideira, guarde-os dentro de um pano de prato fechado para mantê-los maleáveis com o vapor."
  },
  {
    id: "recipe-11",
    productId: "paes-200",
    title: "Pão Australiano Adaptado",
    time: "1h 40 min",
    yield: "4 pãezinhos ou 1 médio",
    description: "Cacau e melado trazem a cor profunda e o sabor característico deste clássico gourmet.",
    category: "rusticos",
    ingredients: [
      "1 xícara de arroz integral",
      "½ xícara de amêndoas",
      "½ xícara de polvilho doce",
      "2 colheres de sopa de cacau 100%",
      "3 colheres de sopa melado cana",
      "1 colher chá goma xantana",
      "10g fermento biológico seco",
      "¼ xícara óleo coco",
      "1 xícara água morna",
      "1 colher chá sal",
      "Fubá para polvilhar"
    ],
    instructions: [
      "Misture secos e cacau.",
      "Dissolva melado na água morna com óleo.",
      "Misture vigorosamente até massa homogênea escura. Adicione sal.",
      "Modele alongado, polvilhe fubá e faça um corte no centro.",
      "Leve fermentar por 45 minutos.",
      "Asse a 180°C por 30 a 35 minutos."
    ],
    tip: "Sirva morninho com manteiga ghee ou creme de castanhas para o contraste perfeito!"
  },
  {
    id: "recipe-12",
    productId: "paes-200",
    title: "Pão de Frigideira Ultra Rápido",
    time: "10 min",
    yield: "1 porção individual",
    description: "O campeão da praticidade. Pronto em 5 minutos de fogão para um café da manhã sem esperas.",
    category: "rapidos",
    ingredients: [
      "1 ovo",
      "2 colheres de sopa de farinha aveia",
      "1 colher de sopa de polvilho doce",
      "1 colher de sopa de azeite",
      "2 colheres de sopa de água",
      "1 colher café fermento químico",
      "1 pitada de sal",
      "Especiarias a gosto"
    ],
    instructions: [
      "Bata bem o ovo com um garfo.",
      "Adicione azeite, água, farinha, polvilho e sal. Misture bem.",
      "Incorpore o fermento químico.",
      "Despeje na frigideira untada, tampe e deixe cozinhar em fogo baixo por 3-4 min.",
      "Vire e doure o outro lado por 1 min."
    ]
  },
  {
    id: "recipe-13",
    productId: "paes-200",
    title: "Pão de Alho Caseiro Assado",
    time: "50 min",
    yield: "4 a 6 pães",
    description: "Uma baguete caseira pré-assada e recheada com pasta de alho aromática sem lactose.",
    category: "rusticos",
    ingredients: [
      "Massa clássica (arroz, polvilho, xantana, fermento)",
      "3 colheres maionese vegana",
      "1 colher azeite",
      "3 dentes de alho amassados",
      "Salsinha e sal a gosto"
    ],
    instructions: [
      "Prepare a massa clássica, sove levemente e modele baguetes. Deixe crescer por 30 min.",
      "Pré-asse por 20 min a 180°C. Deixe amornar.",
      "Prepare a pasta de alho misturando os ingredientes.",
      "Faça cortes transversais no pão e preencha com a pasta.",
      "Asse por mais 10 a 15 minutos até dourar."
    ]
  },
  {
    id: "recipe-14",
    productId: "paes-200",
    title: "Pão de Cebola de Liquidificador",
    time: "55 min",
    yield: "1 pão de forma",
    description: "Fofinho e extremamente aromático. O creme de cebola batido no liquidificador garante sabor em cada fatia.",
    category: "rapidos",
    ingredients: [
      "½ cebola média",
      "3 ovos",
      "⅓ xícara óleo",
      "½ xícara água",
      "1 xícara farinha arroz",
      "1 xícara polvilho doce",
      "1 colher fermento químico",
      "1 colher de chá sal",
      "Orégano"
    ],
    instructions: [
      "Bata cebola, ovos, óleo e água no liquidificador até homogeneizar.",
      "Misture secos em uma tigela e adicione o líquido batido.",
      "Adicione o fermento delicadamente.",
      "Despeje na forma e polvilhe orégano.",
      "Asse a 180°C por 35 a 40 minutos."
    ]
  },
  {
    id: "recipe-15",
    productId: "paes-200",
    title: "Pãozinho de Tapioca e Levedura",
    time: "45 min",
    yield: "12 a 15 pãezinhos",
    description: "Crocante por fora e 'puxento' por dentro. Sabor de queijo garantido pela levedura nutricional sem laticínios.",
    category: "funcionais",
    ingredients: [
      "1 e ½ xícara goma de tapioca hidratada",
      "½ xícara polvilho azedo",
      "¼ xícara azeite",
      "⅓ xícara água fervente",
      "1 colher chia",
      "2 colheres levedura nutricional",
      "1 colher chá sal"
    ],
    instructions: [
      "Misture secos, chia e levedura.",
      "Escalde com azeite e água fervente.",
      "Amasse até formar massa lisa que desgrude.",
      "Faça bolinhas.",
      "Asse a 200°C por cerca de 25 a 30 minutos."
    ]
  },
  {
    id: "recipe-16",
    productId: "paes-200",
    title: "Pão de Aveia Micro-ondas",
    time: "5 min",
    yield: "1 porção individual",
    description: "O rei da agilidade matinal. Rico em fibras e pronto no tempo de um café.",
    category: "rapidos",
    ingredients: [
      "1 ovo",
      "2 colheres sopa aveia (sem glúten)",
      "1 colher sopa água",
      "1 colher sopa azeite",
      "1 colher café fermento químico",
      "Sal e gergelim"
    ],
    instructions: [
      "Bata o ovo em um ramequim.",
      "Misture a aveia, água, azeite e sal.",
      "Incorpore o fermento e polvilhe gergelim.",
      "Leve ao micro-ondas em potência alta por 2 minutos.",
      "Opcional: doure na frigideira após desenformar."
    ]
  },
  {
    id: "recipe-17",
    productId: "paes-200",
    title: "Pão Sovado Inclusivo",
    time: "1h 40 min",
    yield: "1 pão grande",
    description: "A textura clássica do pão sovado, agora na sua cozinha. Massa modelável e muito macia.",
    category: "tradicionais",
    ingredients: [
      "1 e ½ xícara arroz",
      "½ xícara fécula batata",
      "½ xícara polvilho doce",
      "1 colher sopa psyllium em pó",
      "1 colher chá goma xantana",
      "10g fermento biológico seco",
      "¼ xícara óleo",
      "1 e ½ xícara água morna",
      "2 colheres açúcar demerara",
      "1 colher chá sal"
    ],
    instructions: [
      "Forme o gel de psyllium por 5 min.",
      "Misture os secos na bacia.",
      "Incorpore gel, óleo, água e sal.",
      "Sove por 5 minutos manualmente. Modele no formato oval.",
      "Faça cortes paralelos e deixe crescer por 45 min.",
      "Asse a 180°C por 35 a 40 minutos."
    ]
  },
  {
    id: "recipe-18",
    productId: "paes-200",
    title: "Pão de Inhame Nutritivo",
    time: "55 min",
    yield: "10 pãezinhos",
    description: "A base de inhame traz uma umidade inigualável e muita saúde. Toque suave de alecrim fresco.",
    category: "funcionais",
    ingredients: [
      "1 xícara purê de inhame",
      "1 xícara polvilho doce",
      "½ xícara polvilho azedo",
      "¼ xícara azeite",
      "Água morna (ponto)",
      "Alecrim e sal"
    ],
    instructions: [
      "Misture purê morno, azeite, sal e alecrim.",
      "Vá incorporando os polvilhos aos poucos.",
      "Dê o ponto com água morna até ficar lisa e desgrudar.",
      "Faça bolinhas.",
      "Asse a 180°C por cerca de 30 minutos."
    ]
  },
  {
    id: "recipe-19",
    productId: "paes-200",
    title: "Pão Ciabatta Leve e Aerado",
    time: "2h",
    yield: "2 pães médios",
    description: "Alta hidratação para um interior cheio de alvéolos e uma crosta rústica enfarinhada.",
    category: "rusticos",
    ingredients: [
      "1 e ½ xícara arroz",
      "1 xícara fécula batata",
      "1 colher sopa psyllium",
      "1 colher chá goma xantana",
      "10g fermento biológico seco",
      "2 xícaras água morna",
      "2 colheres sopa azeite",
      "1 colher sopa açúcar",
      "1 colher chá sal"
    ],
    instructions: [
      "Crie o gel de psyllium (5 min).",
      "Bata os secos e adicione gel, azeite e água (massa mole).",
      "Incorpore sal e deixe fermentar por 1 hora completa.",
      "Divida a massa em superfície enfarinhada (sem bater).",
      "Modele rústico e asse a 220°C por 35 a 40 minutos."
    ]
  },
  {
    id: "recipe-20",
    productId: "paes-200",
    title: "Pão de Abóbora Dourado",
    time: "1h 30 min",
    yield: "1 pão de forma",
    description: "Visual vibrante e sabor levemente adocicado. A abóbora cabotiá é o segredo da maciez.",
    category: "funcionais",
    ingredients: [
      "1 xícara purê abóbora",
      "1 xícara arroz",
      "½ xícara polvilho doce",
      "½ xícara fécula batata",
      "1 colher xantana",
      "10g fermento biológico",
      "¼ xícara óleo coco",
      "½ xícara água morna",
      "Sementes de abóbora"
    ],
    instructions: [
      "Misture tudo (exceto sementes) até formar creme espesso.",
      "Despeje na forma e decore com sementes.",
      "Deixe crescer por 45 minutos em local morno.",
      "Asse a 180°C por cerca de 40 minutos."
    ]
  },
  {
    id: "recipe-21",
    productId: "paes-200",
    title: "Pão de Forma Branco Fatiável",
    time: "1h 30 min",
    yield: "1 pão médio",
    description: "Ideal para torradas. Uma cor clara impecável e textura firme que permite fatias finas.",
    category: "tradicionais",
    ingredients: [
      "1 e ½ xícara arroz branca",
      "1 xícara fécula batata",
      "½ xícara polvilho doce",
      "1 colher xantana",
      "10g fermento",
      "3 claras de ovo",
      "¼ xícara óleo",
      "1 e ¼ xícara água morna",
      "1 colher açúcar demerara",
      "1 colher sal"
    ],
    instructions: [
      "Misture os secos na bacia.",
      "Bata as claras e junte óleo e água. Una aos secos.",
      "Misture com batedeira até massa lisa.",
      "Incorpore sal e leve para a forma.",
      "Deixe crescer por 50 min e asse a 180°C por 40 min."
    ]
  },
  {
    id: "recipe-22",
    productId: "paes-200",
    title: "Pãozinho de Leite de Coco",
    time: "1h 20 min",
    yield: "8 pãezinhos",
    description: "A base de leite e farinha de coco traz um aroma tropical e uma leveza surpreendente.",
    category: "tradicionais",
    ingredients: [
      "1 xícara arroz",
      "½ xícara polvilho doce",
      "¼ xícara farinha coco",
      "1 colher xantana",
      "5g fermento",
      "1 ovo",
      "1 xícara leite coco",
      "2 colheres óleo coco",
      "2 colheres açúcar"
    ],
    instructions: [
      "Junte secos em uma bacia.",
      "Adicione ovo, óleo e leite morno gradualmente.",
      "Sove com as mãos untadas em óleo de coco. Modele bolinhas.",
      "Cresça por 40 min e asse a 180°C por 25 min."
    ]
  },
  {
    id: "recipe-23",
    productId: "paes-200",
    title: "Pão de Cenoura Vibrante",
    time: "55 min",
    yield: "1 pão de forma",
    description: "Rico em betacaroteno e fibras. O creme de cenoura garante uma cor linda em cada fatia.",
    category: "funcionais",
    ingredients: [
      "1 cenoura média",
      "3 ovos",
      "⅓ xícara óleo",
      "½ xícara água",
      "1 e ½ xícara aveia",
      "½ xícara polvilho doce",
      "1 colher fermento bolo",
      "Gergelim preto"
    ],
    instructions: [
      "Bata cenoura, ovos, óleo e água no liquidificador.",
      "Integre aveia e polvilho na tigela com o líquido.",
      "Adicione fermento químico, decore e asse por 40 min a 180°C."
    ]
  },
  {
    id: "recipe-24",
    productId: "paes-200",
    title: "Pão Caseiro de Vó",
    time: "1h 45 min",
    yield: "1 pão grande",
    description: "Aquele sabor de infância. Uma casca rústica e um interior fofo para um café da tarde autêntico.",
    category: "tradicionais",
    ingredients: [
      "1 e ½ xícara arroz",
      "½ xícara polvilho doce",
      "½ xícara fécula batata",
      "1 colher psyllium",
      "1 colher xantana",
      "10g fermento",
      "¼ xícara azeite",
      "1 e ½ xícara água morna",
      "Açúcar mascavo"
    ],
    instructions: [
      "Gere o gel de psyllium (5 min).",
      "Misture secos e una ao gel, azeite e água.",
      "Amasse manualmente até massa unida pegajosa.",
      "Modele rústico, cresça por 50 min e faça um corte lateral.",
      "Asse a 200°C por 45 minutos."
    ]
  },
  {
    id: "recipe-25",
    productId: "paes-200",
    title: "Pão de Aipim (Mandioca)",
    time: "1h",
    yield: "10 pãezinhos",
    description: "Casquinha crocante e miolo 'puxento'. Uma textura única que apenas a mandioca pode proporcionar.",
    category: "funcionais",
    ingredients: [
      "1 e ½ xícara aipim purê",
      "1 xícara polvilho azedo",
      "½ xícara polvilho doce",
      "¼ xícara azeite",
      "Água morna (ponto)",
      "Sal"
    ],
    instructions: [
      "Misture aipim morno, azeite e sal.",
      "Vá sovando com os polvilhos até desgrudar dos dedos.",
      "Modele bolinhas ou meia-lua.",
      "Asse a 180°C por 35 minutos até rachar."
    ]
  },
  {
    id: "recipe-26",
    productId: "paes-200",
    title: "Pão de Cachorro-Quente (Massa Base)",
    time: "1h 30 min",
    yield: "6 pães alongados",
    description: "Macios e perfeitos para seu hot-dog inclusivo. Uma massa base que não esfarela.",
    category: "tradicionais",
    ingredients: [
      "1 xícara de farinha de arroz branca",
      "½ xícara de fécula de batata",
      "¼ xícara de polvilho doce",
      "1 colher de chá de goma xantana",
      "1 envelope (10g) de fermento biológico seco",
      "1 ovo",
      "3 colheres de sopa de óleo de girassol",
      "¾ xícara de água morna",
      "1 colher de sopa de açúcar",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Misture as farinhas, goma, fermento e açúcar em um recipiente.",
      "Em outra tigela, bata levemente o ovo, óleo e água morna.",
      "Junte os líquidos aos secos e misture vigorosamente até formar massa lisa. Adicione sal por último.",
      "Unte as mãos e molde no formato alongado. Coloque na assadeira untada.",
      "Deixe descansar por 40 a 50 minutos.",
      "Opcional: pincele gema e asse a 180°C por 25 a 30 minutos."
    ]
  },
  {
    id: "recipe-27",
    productId: "paes-200",
    title: "Pãozinho de Minuto (Rápido)",
    time: "25 min",
    yield: "4 pãezinhos",
    description: "A salvação para um café da manhã rápido. Usa fermento químico garantindo velocidade sem perder a fofura.",
    category: "rapidos",
    ingredients: [
      "1 xícara de farinha de aveia (sem glúten)",
      "½ xícara de polvilho doce",
      "1 colher de sopa de fermento químico (bolo)",
      "1 ovo",
      "½ xícara de iogurte natural sem lactose (ou leite de coco)",
      "2 colheres de sopa de azeite",
      "1 colher de café de sal"
    ],
    instructions: [
      "Bata o ovo com o iogurte, azeite e sal.",
      "Adicione farinha de aveia e polvilho doce, misturando até massa espessa.",
      "Incorpore o fermento químico delicadamente.",
      "Com colheres, coloque porções da massa em assadeira untada.",
      "Asse a 200°C por cerca de 15 a 20 minutos."
    ]
  },
  {
    id: "recipe-28",
    productId: "paes-200",
    title: "Pão de Grão-de-Bico Proteico",
    time: "1h 40 min",
    yield: "1 pão de forma",
    description: "Sabor rústico e excelente saciedade. Uma opção nutritiva e rica em proteínas vegetais.",
    category: "rusticos",
    ingredients: [
      "1 xícara de farinha de grão-de-bico",
      "½ xícara de farinha de arroz",
      "½ xícara de fécula de batata",
      "1 colher de chá de goma xantana",
      "1 envelope (10g) de fermento biológico seco",
      "¼ xícara de azeite",
      "1 e ¼ xícara de água morna",
      "1 colher de sopa de açúcar mascavo",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Misture os secos na vasilha.",
      "Faça um buraco e despeje azeite e água morna.",
      "Misture bem até não restar grumos (massa tipo bolo engrossada). Adicione sal.",
      "Despeje na forma de pão untada e decore com gergelim.",
      "Deixe levedar por 45 minutos.",
      "Asse a 180°C por 35 a 40 minutos."
    ]
  },
  {
    id: "recipe-29",
    productId: "paes-200",
    title: "Pão de Forma Rico em Fibras",
    time: "1h 35 min",
    yield: "1 pão de forma",
    description: "Enriquecido com chia e linhaça. Auxilia no funcionamento do intestino e traz saciedade prolongada.",
    category: "funcionais",
    ingredients: [
      "1 xícara de farinha de arroz",
      "½ xícara de farinha de linhaça dourada",
      "½ xícara de polvilho doce",
      "2 colheres de sopa de sementes de chia",
      "1 colher de chá de goma xantana",
      "1 envelope (10g) de fermento biológico seco",
      "3 ovos",
      "¼ xícara de óleo ou azeite",
      "1 xícara de água morna",
      "1 colher de sopa de açúcar demerara",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Misture farinhas, sementes, goma, fermento e açúcar na tigela.",
      "Bata ovos, óleo e água morna (liquidificador ou fouet).",
      "Misture tudo até massa espessa gelatinosa. Incorpore sal.",
      "Transfira para a forma e deixe crescer por 40 minutos em local morno.",
      "Asse a 180°C por cerca de 40 minutos."
    ],
    tip: "A chia e a linhaça puxam muita água! Se a massa ficar dura demais, adicione 2 ou 3 colheres de água morna antes de ir para a forma."
  },
  {
    id: "recipe-30",
    productId: "paes-200",
    title: "Pão Funcional de Arroz Integral",
    time: "1h 40 min",
    yield: "1 pão de forma",
    description: "Textura incrível para sanduíches naturais com o benefício dos grãos integrais.",
    category: "funcionais",
    ingredients: [
      "1 e ½ xícara de farinha de arroz integral",
      "½ xícara de polvilho doce",
      "½ xícara de amido de milho",
      "1 colher de sopa de psyllium em pó",
      "1 colher de chá de goma xantana",
      "1 envelope (10g) de fermento biológico seco",
      "¼ xícara de azeite",
      "1 e ½ xícara de água morna",
      "2 colheres de sopa de melado de cana",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Hidrate o psyllium com meia xícara de água por 5 min.",
      "Misture as farinhas, goma e fermento.",
      "Dissolva melado na água e adicione azeite.",
      "Junte líquidos, gel de psyllium e farinhas. Amasse bem até uniforme. Adicione sal.",
      "Coloque na forma untada e deixe fermentar por 45 a 50 minutos.",
      "Asse a 180°C por 40 a 45 minutos."
    ]
  },
  {
    id: "recipe-31",
    productId: "paes-200",
    title: "Pão Falso de Centeio",
    time: "1h 45 min",
    yield: "1 pão de forma",
    description: "Sabor terroso do trigo sarraceno (100% sem glúten) que remete perfeitamente ao clássico centeio.",
    category: "rusticos",
    ingredients: [
      "1 xícara de farinha de trigo sarraceno",
      "½ xícara de farinha de arroz",
      "½ xícara de polvilho doce",
      "1 colher de sopa de cacau 100%",
      "1 colher de chá de goma xantana",
      "1 envelope (10g) de fermento biológico seco",
      "¼ xícara de azeite",
      "1 e ½ xícara de água morna",
      "1 colher de sopa de melado"
    ],
    instructions: [
      "Misture farinhas, polvilho, cacau, goma, fermento e sementes (alcarávia opcional).",
      "Dissolva melado na água morna com azeite.",
      "Misture vigorosamente até obter massa espessa e homogênea. Adicione sal.",
      "Transfira para forma de pão untada e alise o topo.",
      "Deixe fermentar por 45 minutos em local morno.",
      "Asse a 180°C por 40 a 45 minutos."
    ]
  },
  {
    id: "recipe-32",
    productId: "paes-200",
    title: "Pão Brioche Adaptado",
    time: "1h 50 min",
    yield: "1 pão ou 8 pãezinhos",
    description: "Massa rica, amanteigada e brilhante. O equilíbrio perfeito entre o doce e o salgado.",
    category: "doces",
    ingredients: [
      "1 xícara arroz branca fina",
      "½ xícara fécula batata",
      "½ xícara polvilho doce",
      "1 colher xantana",
      "3 ovos",
      "⅓ xícara óleo coco derretido",
      "½ xícara leite amêndoas",
      "3 colheres açúcar demerara"
    ],
    instructions: [
      "Misture secos e adicione açúcar.",
      "Bata levemente ovos, óleo e leite vegetal morno. Junte aos secos.",
      "Bata na batedeira ou fouet até massa brilhante e elástica. Adicione sal.",
      "Despeje na forma (massa mole) e deixe crescer por 50 a 60 min.",
      "Pincele gema e asse a 180°C por 30 a 35 min."
    ]
  },
  {
    id: "recipe-33",
    productId: "paes-200",
    title: "Pão de Forma com Crosta de Sementes",
    time: "1h 35 min",
    yield: "1 pão de forma",
    description: "Multigrãos, nutritivo e intensamente crocante por fora. Um visual de padaria boutique.",
    category: "funcionais",
    ingredients: [
      "1 e ½ xícara aveia",
      "1 xícara polvilho doce",
      "¼ xícara semente girassol",
      "¼ xícara semente abóbora",
      "2 colheres chia ou linhaça",
      "10g fermento biológico"
    ],
    instructions: [
      "Misture secos e sementes (guarde um pouco para o topo).",
      "Adicione azeite e água morna até formar massa densa. Adicione sal.",
      "Pincele água no topo e cubra generosamente com o mix de sementes.",
      "Deixe levedar por 45 minutos.",
      "Asse a 180°C por 40 minutos."
    ]
  },
  {
    id: "recipe-34",
    productId: "paes-200",
    title: "Pãozinho de Iogurte (Macio)",
    time: "1h 20 min",
    yield: "8 a 10 pãezinhos",
    description: "O iogurte sem lactose garante uma umidade que derrete na boca. Perfeito para sanduíches frios.",
    category: "tradicionais",
    ingredients: [
      "1 xícara arroz",
      "1 xícara polvilho doce",
      "1 pote iogurte zero lactose (170g)",
      "1 ovo",
      "2 colheres azeite",
      "Fermento biológico",
      "Sal e açúcar"
    ],
    instructions: [
      "Misture secos (arroz, polvilho, xantana, fermento, açúcar).",
      "Adicione iogurte, ovo e azeite. Sove manualmente até massa lisa.",
      "Incorpore o sal. Modele redondos.",
      "Cresça por 40 minutos.",
      "Asse a 180°C por cerca de 25 a 30 minutos."
    ]
  },
  {
    id: "recipe-35",
    productId: "paes-200",
    title: "Pão Rústico de Panela de Ferro",
    time: "2h 30 min",
    yield: "1 pão redondo grande",
    description: "Casca rústica e barulhenta com interior aerado. O ápice da panificação artesanal sem glúten.",
    category: "rusticos",
    ingredients: [
      "1 e ½ xícara arroz",
      "1 xícara fécula batata",
      "½ xícara polvilho doce",
      "1 e ½ colher psyllium",
      "2 xícaras água morna"
    ],
    instructions: [
      "Gere o gel de psyllium espesso.",
      "Misture secos e una ao gel, azeite e água restante. Sove até formar bola.",
      "Cresça por 1 hora.",
      "Asse em panela de ferro pré-aquecida a 230°C: 30 min tampada (vapor) e 20 min destampada (cor)."
    ],
    tip: "O barulho da casca crocante ao cortar é o grande charme! Deixe esfriar antes de fatiar para não encolher o miolo."
  },
  {
    id: "recipe-36",
    productId: "paes-200",
    title: "Pão de Sorgo com Fubá Mimoso",
    time: "1h 30 min",
    yield: "1 pão de forma",
    description: "Uma combinação rústica e dourada. O sorgo traz um valor nutricional elevado e sabor único.",
    category: "tradicionais",
    ingredients: [
      "1 xícara de farinha de sorgo",
      "½ xícara de fubá mimoso",
      "½ xícara de polvilho doce",
      "1 colher de chá de goma xantana",
      "1 envelope (10g) de fermento biológico seco",
      "¼ xícara de azeite",
      "1 e ¼ xícara de água morna",
      "1 colher de sopa de açúcar mascavo",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Misture as farinhas, goma, fermento e açúcar.",
      "Adicione azeite e água morna. Misture vigorosamente até massa espessa sem grumos.",
      "Incorpore o sal por último.",
      "Despeje na forma untada com azeite e polvilhada com fubá.",
      "Cresça por 45 a 50 min e asse a 180°C por 35 a 40 min."
    ]
  },
  {
    id: "recipe-37",
    productId: "paes-200",
    title: "Pãozinho Redondo de Lanche Escolar",
    time: "1h 20 min",
    yield: "8 a 10 pãezinhos",
    description: "Formato perfeito para mãos pequenas. Macios e lisinhas, ideais para o lanche das crianças.",
    category: "tradicionais",
    ingredients: [
      "1 e ½ xícara farinha arroz",
      "½ xícara fécula batata",
      "½ xícara polvilho doce",
      "1 colher xantana",
      "1 ovo",
      "3 colheres óleo",
      "1 xícara água morna",
      "Açúcar demerara"
    ],
    instructions: [
      "Misture os secos na bacia.",
      "Bata ovo com óleo e água. Junte aos secos.",
      "Misture até massa pegajosa. Adicione sal.",
      "Unte mãos com óleo e modele bolas lisas.",
      "Deixe crescer por 40 min e asse a 180°C por 20 a 25 min."
    ]
  },
  {
    id: "recipe-38",
    productId: "paes-200",
    title: "Pão de Massa Lêveda (Fermentação Rápida)",
    time: "1h",
    yield: "1 pão médio",
    description: "O vinagre de maçã é o segredo para uma estrutura rápida e aerada. Ideal para urgências culinárias.",
    category: "rapidos",
    ingredients: [
      "1 xícara arroz",
      "½ xícara grão-de-bico",
      "½ xícara polvilho doce",
      "1 colher vinagre maçã",
      "1 colher xantana",
      "10g fermento seco",
      "1 e ½ xícara água morna"
    ],
    instructions: [
      "Junte secos em tigela grande.",
      "Adicione água morna, azeite e vinagre. Bata com fouet até massa tipo bolo.",
      "Incorpore sal e coloque imediatamente na forma.",
      "Descanse por 25 a 30 min em local quentinho.",
      "Asse a 180°C por 35 a 40 minutos."
    ]
  },
  {
    id: "recipe-39",
    productId: "paes-200",
    title: "Pão de Batata Inglesa Recheável",
    time: "1h 30 min",
    yield: "8 pães",
    description: "Massa elástica e saborosa que aceita qualquer recheio. Batata inglesa traz a estrutura perfeita.",
    category: "tradicionais",
    ingredients: [
      "1 xícara purê batata inglesa",
      "1 xícara arroz",
      "1 xícara polvilho doce",
      "5g fermento biológico",
      "½ xícara água morna",
      "Açúcar e sal"
    ],
    instructions: [
      "Misture purê morno com arroz, polvilho, xantana e fermento.",
      "Adicione óleo e água aos poucos até massa desgrudar e ficar elástica.",
      "Divida em 8. Achate, recheie e feche bem.",
      "Descanse por 30 min e asse a 180°C por 30 min."
    ]
  },
  {
    id: "recipe-40",
    productId: "paes-200",
    title: "Pão de Farinha de Amêndoas (Low-Carb)",
    time: "45 min",
    yield: "1 pão pequeno",
    description: "Baseada em psyllium e amêndoas, esta opção traz saciedade máxima e baixíssimo carbo.",
    category: "funcionais",
    ingredients: [
      "2 xícaras farinha amêndoas",
      "¼ xícara psyllium",
      "1 colher fermento bolo",
      "4 ovos",
      "½ xícara água morna"
    ],
    instructions: [
      "Bata ovos até espumarem. Adicione óleo e água.",
      "Misture secos e junte aos líquidos. A massa engrossa rápido (psyllium).",
      "Incorpore fermento químico delicadamente.",
      "Asse em forma untada a 180°C por 30 a 35 min."
    ],
    tip: "Perfeito para saciedade com poucos carboidratos. Toste na frigideira para um sabor amendoado extra!"
  },
  {
    id: "recipe-rapid-1",
    productId: "frigideira-15",
    title: "Pãozinho de Aveia de Frigideira",
    time: "8 min",
    yield: "1 porção",
    description: "O campeão do café da manhã ágil. Saudável, fofinho e pronto em minutos.",
    category: "rapidos",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) de farinha de aveia (sem glúten)",
      "1 colher (sopa) de água",
      "1 pitada de sal",
      "1 colher (café) de fermento químico"
    ],
    instructions: [
      "Bata bem o ovo com um garfo.",
      "Adicione a aveia, a água e o sal. Misture até ficar homogêneo.",
      "Incorpore o fermento.",
      "Despeje em uma frigideira pequena untada com azeite.",
      "Tampe e asse em fogo bem baixo por 3 minutos de cada lado."
    ]
  },
  {
    id: "recipe-rapid-2",
    productId: "frigideira-15",
    title: "Crepioca Fit Temperada",
    time: "10 min",
    yield: "1 porção",
    description: "Versátil e nutritiva. As sementes de chia trazem crocância e fibras extras.",
    category: "rapidos",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) de goma de tapioca",
      "1 colher (sopa) de chia",
      "1 pitada de sal",
      "Orégano a gosto"
    ],
    instructions: [
      "Misture todos os ingredientes em um prato fundo.",
      "Despeje em uma frigideira antiaderente pré-aquecida.",
      "Quando as bordas soltarem e o centro firmar, vire e doure do outro lado.",
      "Recheie como preferir e feche ao meio."
    ]
  },
  {
    id: "recipe-rapid-3",
    productId: "frigideira-15",
    title: "Pão 'Falso Queijo' de Frigideira",
    time: "10 min",
    yield: "1 porção",
    description: "Textura 'puxenta' que lembra o pão de queijo clássico, mas pronto na frigideira.",
    category: "rapidos",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) de polvilho azedo",
      "1 colher (sopa) de polvilho doce",
      "1 colher (sopa) de água",
      "1 colher (sopa) de levedura nutricional (sabor queijo)",
      "sal a gosto"
    ],
    instructions: [
      "Bata todos os ingredientes até formar um líquido liso.",
      "Despeje na frigideira untada em fogo baixo.",
      "Tampe e deixe firmar.",
      "Vire para dourar e sinta a elasticidade do queijo."
    ]
  },
  {
    id: "recipe-rapid-4",
    productId: "frigideira-15",
    title: "Wrap Low-Carb de Linhaça",
    time: "12 min",
    yield: "1 wrap",
    description: "Massa fininha e maleável baseada em fibras. Perfeita para recheios frescos.",
    category: "funcionais",
    ingredients: [
      "2 colheres (sopa) de farinha de linhaça dourada",
      "3 colheres (sopa) de água quente",
      "1 pitada de sal",
      "azeite para untar"
    ],
    instructions: [
      "Misture a linhaça com a água quente e o sal até formar massa modelável.",
      "Deixe descansar por 2 min para hidratar.",
      "Abra a massa com as mãos úmidas na frigideira fria e untada (disco fino).",
      "Ligue o fogo baixo e doure dos dois lados até ficar crocante."
    ]
  },
  {
    id: "recipe-rapid-5",
    productId: "frigideira-15",
    title: "Pãozinho de Batata Doce Rápido",
    time: "15 min",
    yield: "1 porção",
    description: "Utiliza purê de batata doce para garantir umidade e um sabor levemente adocicado.",
    category: "rapidos",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) de purê de batata doce",
      "1 colher (sopa) de polvilho doce",
      "1 colher (café) de fermento em pó",
      "sal a gosto"
    ],
    instructions: [
      "Amasse bem o purê com o ovo e o polvilho até virar um creme.",
      "Adicione o sal e o fermento.",
      "Asse em frigideira pequena, tampada, em fogo bem baixinho.",
      "Vire quando estiver firme e dourado."
    ]
  },
  {
    id: "recipe-rapid-6",
    productId: "frigideira-15",
    title: "Panqueca Pão de Farinha de Coco",
    time: "10 min",
    yield: "1 porção",
    description: "Opção Low-Carb aromática. A farinha de coco traz uma estrutura única de panqueca americana.",
    category: "rapidos",
    ingredients: [
      "1 ovo",
      "1 colher (sopa) de farinha de coco",
      "1 colher (sopa) de leite de coco",
      "1 colher (café) de azeite",
      "1 colher (café) de fermento",
      "sal"
    ],
    instructions: [
      "Misture tudo vigorosamente. Se ficar duro, adicione gotas de leite de coco.",
      "Espalhe na frigideira untada.",
      "Tampe e doure dos dois lados em fogo mínimo."
    ]
  },
  {
    id: "recipe-rapid-7",
    productId: "frigideira-15",
    title: "Pão Chato de Grão-de-bico",
    time: "15 min",
    yield: "1 porção",
    description: "Inspirado na farinata italiana. Rico em proteína vegetal e com bordas crocantes.",
    category: "rapidos",
    ingredients: [
      "3 colheres (sopa) de farinha de grão-de-bico",
      "3 colheres (sopa) de água",
      "1 colher (chá) de azeite",
      "sal e alecrim a gosto"
    ],
    instructions: [
      "Misture tudo e deixe a massa descansar por 5 minutos.",
      "Despeje na frigideira untada com azeite, espalhando como uma panqueca.",
      "Doure bem dos dois lados até as bordas ficarem crocantes."
    ]
  },
  {
    id: "recipe-rapid-8",
    productId: "frigideira-15",
    title: "Mini Bolo Fit de Maçã",
    time: "15 min",
    yield: "1 porção",
    description: "Um agrado doce e saudável para a frigideira. O aroma de maçã com canela é o destaque.",
    category: "doces",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) de farinha de amêndoas",
      "1 colher (sopa) de purê de maçã ou ralada",
      "1 colher (chá) de óleo de coco",
      "canela a gosto",
      "1 colher (café) de fermento"
    ],
    instructions: [
      "Bata o ovo e adicione os demais ingredientes (fermento por último).",
      "Asse em frigideira bem pequena e untada.",
      "Tampada, em fogo mínimo. Vire com cuidado para assar o topo."
    ]
  },
  {
    id: "recipe-rapid-9",
    productId: "frigideira-15",
    title: "Pãozinho Low-Carb de Micro-ondas",
    time: "3 min",
    yield: "1 porção",
    description: "O mais rápido da lista. Amêndoas garantem a estrutura e saciedade no micro-ondas.",
    category: "rapidos",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) de farinha de amêndoas",
      "1 colher (sopa) de azeite",
      "1 colher (sopa) de água",
      "sal e 1 colher café fermento"
    ],
    instructions: [
      "Em uma caneca ou pote de vidro, bata o ovo e misture líquidos.",
      "Adicione farinha e sal, mexendo bem.",
      "Incorpore o fermento.",
      "Leve ao micro-ondas por 1 minuto e 30 segundos. Desenforme e toste se desejar."
    ]
  },
  {
    id: "recipe-rapid-10",
    productId: "frigideira-15",
    title: "Pão de Caneca de Fubá com Erva-Doce",
    time: "4 min",
    yield: "1 porção",
    description: "Gostinho de broa de milho caseira pronta em um piscar de olhos.",
    category: "rapidos",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) de fubá fino",
      "1 colher (sopa) de leite de coco",
      "pitada de sal",
      "erva-doce a gosto",
      "1 colher café fermento"
    ],
    instructions: [
      "Bata bem os ingredientes na caneca.",
      "Adicione o fermento por último.",
      "Aqueça no micro-ondas por 2 minutos."
    ]
  },
  {
    id: "recipe-rapid-11",
    productId: "frigideira-15",
    title: "Bolo Fit de Cacau Rápido",
    time: "4 min",
    yield: "1 porção",
    description: "Prazer imediato de chocolate 100%. Úmido, intenso e saudável.",
    category: "doces",
    ingredients: [
      "1 ovo",
      "1 colher (sopa) de farinha de aveia",
      "1 colher (sopa) de cacau em pó 100%",
      "xilitol ou açúcar demerara",
      "1 colher (sopa) de óleo de coco",
      "1 colher café fermento"
    ],
    instructions: [
      "Misture tudo na caneca até virar um creme de chocolate liso.",
      "Leve ao micro-ondas por 1 minuto e 45 segundos."
    ],
    tip: "Fure o bolinho e jogue um pouco de leite de coco quente por cima para ele ficar molhadinho!"
  },
  {
    id: "recipe-rapid-12",
    productId: "frigideira-15",
    title: "Pão Funcional de Sementes",
    time: "5 min",
    yield: "1 porção",
    description: "Rico em ômega-3. Chia e linhaça transformam uma caneca em um pão de forma funcional.",
    category: "funcionais",
    ingredients: [
      "1 ovo",
      "1 colher (sopa) de farinha de linhaça",
      "1 colher (sopa) de chia",
      "1 colher (sopa) de farinha de arroz",
      "azeite e sal",
      "1 colher café fermento"
    ],
    instructions: [
      "Misture todos os ingredientes rapidamente.",
      "Leve ao micro-ondas em recipiente quadrado por 2 minutos.",
      "Cortado ao meio e tostado, vira um pão de forma perfeito."
    ]
  },
  {
    id: "recipe-rapid-13",
    productId: "frigideira-15",
    title: "Bolinho Fit de Banana e Aveia",
    time: "5 min",
    yield: "1 porção",
    description: "Doce natural da banana com a energia da aveia. O lanche pré-treino ideal.",
    category: "doces",
    ingredients: [
      "1 ovo",
      "½ banana madura amassada",
      "2 colheres (sopa) de farelo de aveia",
      "canela a gosto",
      "1 colher (café) de fermento"
    ],
    instructions: [
      "Amasse a banana no fundo da caneca.",
      "Adicione o ovo e bata bem.",
      "Junte aveia e canela, finalizando com o fermento.",
      "Micro-ondas por 2 minutos."
    ]
  },
  {
    id: "recipe-rapid-14",
    productId: "frigideira-15",
    title: "Pão de Cebola de Caneca",
    time: "4 min",
    yield: "1 porção",
    description: "Aroma irresistível de cebola fresca em uma massa de caneca aerada.",
    category: "rapidos",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) de farinha de arroz",
      "1 colher (sopa) de azeite",
      "cebola ralada ou picada",
      "sal, orégano e fermento"
    ],
    instructions: [
      "Bata o ovo com azeite e cebola.",
      "Adicione arroz, temperos e fermento.",
      "Leve ao micro-ondas por 1 minuto e 45 segundos."
    ]
  },
  {
    id: "recipe-rapid-15",
    productId: "frigideira-15",
    title: "Mini Bolo Fit de Cenoura",
    time: "5 min",
    yield: "1 porção",
    description: "Vibrante e úmido. O clássico bolo de cenoura em porção individual ultrarrápida.",
    category: "doces",
    ingredients: [
      "1 ovo",
      "1 colher (sopa) de cenoura ralada fina",
      "2 colheres (sopa) de farinha de arroz",
      "óleo de coco e açúcar demerara",
      "1 colher (café) de fermento"
    ],
    instructions: [
      "Misture tudo muito bem na caneca.",
      "A cenoura vai soltar água, deixando a massa úmida.",
      "Adicione fermento e leve ao micro-ondas por 2 minutos."
    ]
  },
  {
    id: "recipe-air-1",
    productId: "airfryer-25",
    title: "Pão de Queijo Fake de Batata Doce",
    time: "15 min",
    yield: "8 bolinhas",
    description: "Massa elástica e saborosa que não leva queijo, mas engana o paladar com perfeição. Ultra nutritivo.",
    category: "funcionais",
    ingredients: [
      "1 xícara de purê de batata doce",
      "1 xícara de polvilho azedo",
      "2 colheres (sopa) de azeite",
      "1 colher (chá) de sal",
      "1 colher (sopa) de chia"
    ],
    instructions: [
      "Amasse tudo em uma tigela até a massa desgrudar das mãos.",
      "Faça pequenas bolinhas uniformes.",
      "Asse na Air Fryer a 180°C por 12 a 15 minutos até dourar levemente."
    ]
  },
  {
    id: "recipe-air-2",
    productId: "airfryer-25",
    title: "Pãozinho de Tapioca em 10 Minutos",
    time: "10 min",
    yield: "4 pãezinhos",
    description: "Rápido, prático e com aquela casquinha crocante que só a Air Fryer proporciona.",
    category: "rapidos",
    ingredients: [
      "4 colheres (sopa) de goma de tapioca",
      "1 ovo",
      "1 colher (sopa) de azeite",
      "sal a gosto",
      "1 colher (café) de fermento"
    ],
    instructions: [
      "Misture bem todos os ingredientes com um garfo.",
      "Coloque em forminhas de silicone, preenchendo apenas até a metade.",
      "Asse a 180°C por exatos 10 minutos."
    ]
  },
  {
    id: "recipe-air-3",
    productId: "airfryer-25",
    title: "Pão Low-Carb de Amêndoas",
    time: "8 min",
    yield: "1 porção",
    description: "Formato de pão de hambúrguer, ideal para lanches rápidos com baixíssimo carboidrato.",
    category: "funcionais",
    ingredients: [
      "1 ovo",
      "3 colheres (sopa) de farinha de amêndoas",
      "1 colher (sopa) de água",
      "1 colher (café) de fermento",
      "sal"
    ],
    instructions: [
      "Bata todos os ingredientes em um ramequim pequeno untado.",
      "Asse na Air Fryer a 160°C por 8 minutos.",
      "Desenforme, corte ao meio e recheie como desejar."
    ]
  },
  {
    id: "recipe-air-4",
    productId: "airfryer-25",
    title: "Mini Pão Sírio Crocante",
    time: "5 min",
    yield: "1 pão",
    description: "Massa fininha que infla levemente na Air Fryer. Perfeito para servir com homus ou coalhada.",
    category: "rapidos",
    ingredients: [
      "3 colheres (sopa) de farinha de arroz",
      "1 colher (sopa) de polvilho doce",
      "2 colheres (sopa) de água",
      "sal"
    ],
    instructions: [
      "Misture até formar uma massa modelável e lisa.",
      "Abra um disco fino diretamente com as mãos.",
      "Asse na cesta da Air Fryer a 200°C por 5 minutos, virando na metade do tempo."
    ]
  },
  {
    id: "recipe-air-5",
    productId: "airfryer-25",
    title: "Pão de Alho Express",
    time: "4 min",
    yield: "1 pão",
    description: "Transforme um pãozinho comum em um acompanhamento gourmet em apenas 4 minutos.",
    category: "rapidos",
    ingredients: [
      "1 pãozinho sem glúten (já assado)",
      "1 colher (sopa) de maionese vegana",
      "1 dente de alho amassado",
      "orégano"
    ],
    instructions: [
      "Faça cortes transversais no pãozinho sem chegar ao fundo.",
      "Misture a maionese com o alho e o orégano.",
      "Passe generosamente nas fendas.",
      "Asse a 180°C por 4 minutos até gratinar."
    ]
  },
  {
    id: "recipe-air-6",
    productId: "airfryer-25",
    title: "Pãozinho de Grão-de-Bico",
    time: "12 min",
    yield: "6 pãezinhos",
    description: "Sabor rústico e alto teor proteico. O alecrim traz o aroma de padaria artesanal.",
    category: "tradicionais",
    ingredients: [
      "1 xícara de farinha de grão-de-bico",
      "1 colher (sopa) de azeite",
      "água morna (ponto)",
      "sal e alecrim"
    ],
    instructions: [
      "Misture farinha, azeite e sal. Adicione água morna aos poucos até conseguir modelar.",
      "Faça pequenas bolinhas achatadas.",
      "Pincele azeite no topo e asse a 180°C por 12 minutos."
    ]
  },
  {
    id: "recipe-air-7",
    productId: "airfryer-25",
    title: "Pão de Cebola Assado",
    time: "10 min",
    yield: "4 pãezinhos",
    description: "Massa fofinha com o toque adocicado da cebola ralada. Um lanche perfumado.",
    category: "rapidos",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) de farinha de aveia",
      "1 colher (sopa) de cebola ralada",
      "1 colher (café) de fermento"
    ],
    instructions: [
      "Misture todos os ingredientes vigorosamente.",
      "Coloque em forminhas de silicone pequenas.",
      "Asse a 180°C por 8 a 10 minutos."
    ]
  },
  {
    id: "recipe-air-8",
    productId: "airfryer-25",
    title: "Pão Rústico de Linhaça",
    time: "10 min",
    yield: "1 porção",
    description: "Rico em ômega-3. Uma massa densa e funcional para começar o dia com energia.",
    category: "funcionais",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) de farinha de linhaça dourada",
      "1 colher (sopa) de água",
      "sal e 1 colher café fermento"
    ],
    instructions: [
      "Misture tudo em um recipiente pequeno adequado para Air Fryer.",
      "Asse a 160°C por 10 minutos."
    ]
  },
  {
    id: "recipe-air-9",
    productId: "airfryer-25",
    title: "Muffin Fit de Banana",
    time: "12 min",
    yield: "2 muffins",
    description: "Doce natural da fruta com a crocância da Air Fryer. Lanche escolar ou pré-treino perfeito.",
    category: "doces",
    ingredients: [
      "1 banana madura amassada",
      "1 ovo",
      "2 colheres (sopa) de farelo de aveia",
      "canela a gosto",
      "1 colher (café) de fermento"
    ],
    instructions: [
      "Misture todos os ingredientes até obter massa homogênea.",
      "Despeje em 2 forminhas de silicone.",
      "Asse a 160°C por 12 minutos."
    ]
  },
  {
    id: "recipe-air-10",
    productId: "airfryer-25",
    title: "Mini Bolo de Cenoura",
    time: "15 min",
    yield: "2 mini bolos",
    description: "Sem leite e sem glúten, mas com toda a cor e umidade do clássico bolo de cenoura.",
    category: "doces",
    ingredients: [
      "½ cenoura ralada",
      "1 ovo",
      "2 colheres (sopa) de farinha de arroz",
      "óleo de coco e açúcar demerara",
      "1 colher (café) de fermento"
    ],
    instructions: [
      "Bata os ingredientes no mixer ou liquidificador.",
      "Coloque em forminhas de silicone.",
      "Asse a 160°C por 15 minutos até passar no teste do palito."
    ]
  },
  {
    id: "recipe-air-11",
    productId: "airfryer-25",
    title: "Petit Gâteau Fit de Cacau",
    time: "7 min",
    yield: "1 unidade",
    description: "Coração cremoso em minutos. O segredo está no tempo exato de Air Fryer.",
    category: "doces",
    ingredients: [
      "1 ovo",
      "1 colher (sopa) de óleo de coco",
      "1 colher (sopa) de cacau 100%",
      "adoçante natural"
    ],
    instructions: [
      "Misture bem os ingredientes manualmente (não leva fermento).",
      "Asse na forminha untada a 200°C por exatos 6 a 7 minutos."
    ]
  },
  {
    id: "recipe-air-12",
    productId: "airfryer-25",
    title: "Bolinho de Fubá com Goiabada",
    time: "12 min",
    yield: "2 bolinhos",
    description: "O clássico mineiro em versão express. A goiabada derretida no centro é irresistível.",
    category: "doces",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) de fubá",
      "1 colher (sopa) de leite de coco",
      "açúcar demerara e fermento",
      "cubos de goiabada zero açúcar"
    ],
    instructions: [
      "Misture a massa básica de fubá.",
      "Coloque na forminha e afunde um cubo de goiabada no centro.",
      "Asse a 180°C por 12 minutos."
    ]
  },
  {
    id: "recipe-air-13",
    productId: "airfryer-25",
    title: "Brownie de Batata Doce",
    time: "15 min",
    yield: "1 porção individual",
    description: "Denso, úmido e achocolatado. Ninguém acredita que a base é batata doce.",
    category: "doces",
    ingredients: [
      "½ xícara purê batata doce",
      "1 ovo",
      "2 colheres (sopa) cacau em pó",
      "melado e gotas de chocolate"
    ],
    instructions: [
      "Misture os ingredientes até virar um creme denso e brilhante.",
      "Coloque em refratário pequeno forrado.",
      "Asse a 160°C por 15 minutos."
    ]
  },
  {
    id: "recipe-air-14",
    productId: "airfryer-25",
    title: "Cupcake Low-Carb de Coco",
    time: "10 min",
    yield: "2 cupcakes",
    description: "Leveza tropical com baixas calorias. Perfeito para acompanhar um café coado.",
    category: "doces",
    ingredients: [
      "1 ovo",
      "2 colheres (sopa) farinha coco",
      "2 colheres (sopa) leite coco",
      "xilitol e fermento"
    ],
    instructions: [
      "Misture vigorosamente (farinha de coco absorve rápido).",
      "Coloque na forminha e asse a 160°C por 10 minutos."
    ]
  },
  {
    id: "recipe-air-15",
    productId: "airfryer-25",
    title: "Bolo Formigueiro Fit",
    time: "12 min",
    yield: "1 porção",
    description: "Visual clássico com nibs de cacau para garantir a crocância e saúde do chocolate amargo.",
    category: "doces",
    ingredients: [
      "1 ovo",
      "2 colheres aveia",
      "1 colher leite coco",
      "fermento e cacau nibs"
    ],
    instructions: [
      "Misture a massa base branca.",
      "Adicione os nibs por último para o efeito formigueiro.",
      "Asse a 160°C por 12 minutos."
    ]
  },
  {
    id: "recipe-air-16",
    productId: "airfryer-25",
    title: "Bolo Fit de Maçã em Pedaços",
    time: "15 min",
    yield: "2 porções",
    description: "Pedacinhos de fruta fresca que trazem explosões de sabor a cada mordida.",
    category: "doces",
    ingredients: [
      "½ maçã picada (sem casca)",
      "1 ovo",
      "2 colheres amêndoas",
      "açúcar mascavo, canela e fermento"
    ],
    instructions: [
      "Misture a massa e incorpore os cubos de maçã.",
      "Asse em forminha na Air Fryer a 160°C por 15 minutos."
    ]
  },
  {
    id: "recipe-air-17",
    productId: "airfryer-25",
    title: "Dadinhos de Tapioca Assados",
    time: "15 min",
    yield: "12 dadinhos",
    description: "O petisco queridinho das festas, agora na versão Air Fryer: crocante por fora e macio por dentro.",
    category: "tradicionais",
    ingredients: [
      "4 colheres tapioca granulada",
      "4 colheres leite coco quente",
      "sal e levedura nutricional"
    ],
    instructions: [
      "Hidrate a tapioca com o leite quente e temperos.",
      "Modele em quadradinhos e deixe esfriar completamente.",
      "Asse a 200°C por 15 minutos até dourar."
    ]
  },
  {
    id: "recipe-air-18",
    productId: "airfryer-25",
    title: "Mini Focaccia de Tomate Cereja",
    time: "12 min",
    yield: "1 unidade",
    description: "Um clássico italiano em miniatura. Aromática, rústica e deliciosa.",
    category: "rusticos",
    ingredients: [
      "3 colheres farinha arroz",
      "azeite, água e fermento",
      "tomatinhos cereja e sal grosso"
    ],
    instructions: [
      "Misture a massa e coloque na forminha.",
      "Afunde os tomatinhos, regue com azeite e sal grosso.",
      "Asse a 180°C por 12 minutos."
    ]
  },
  {
    id: "recipe-air-19",
    productId: "airfryer-25",
    title: "Salgado Maromba Rápido",
    time: "15 min",
    yield: "2 unidades",
    description: "Massa de batata doce com recheio proteico de frango. O lanche pré-treino definitivo.",
    category: "funcionais",
    ingredients: [
      "½ xícara frango desfiado temperado",
      "½ xícara purê batata doce"
    ],
    instructions: [
      "Misture purê e frango até formar massa modelável.",
      "Modele os salgados e empane em farinha de linhaça.",
      "Asse a 200°C por 15 minutos."
    ]
  },
  {
    id: "recipe-air-20",
    productId: "airfryer-25",
    title: "Enroladinho Fit de Salsicha",
    time: "12 min",
    yield: "6 unidades",
    description: "Visual divertido e sabor de festa. Utiliza a massa de 'pão de queijo fake' para envolver a proteína.",
    category: "tradicionais",
    ingredients: [
      "Massa pão de queijo fake (receita air-1)",
      "mini salsichas de frango cozidas"
    ],
    instructions: [
      "Abra porções finas da massa.",
      "Envolva as salsichinhas individualmente.",
      "Asse a 180°C por 12 minutos."
    ]
  },
  {
    id: "recipe-air-21",
    productId: "airfryer-25",
    title: "Chips Rústicos de Batata Doce",
    time: "15 min",
    yield: "1 porção",
    description: "Snack natural e crocante. Muito melhor que chips industrializados e sem gorduras ruins.",
    category: "rapidos",
    ingredients: [
      "1 batata doce fatiada fina",
      "azeite, sal e páprica"
    ],
    instructions: [
      "Tempere as fatias finas uniformemente.",
      "Distribua na cesta sem sobrepor excessivamente.",
      "Asse a 160°C por 15 minutos, virando na metade."
    ]
  },
  {
    id: "recipe-air-22",
    productId: "airfryer-25",
    title: "Biscoito de Polvilho Air Fryer",
    time: "12 min",
    yield: "15 biscoitos",
    description: "Leves, ocos e estaladiços. Lembra os biscoitos de praia, mas feito de forma saudável.",
    category: "tradicionais",
    ingredients: [
      "1 xícara polvilho azedo",
      "1 ovo",
      "azeite, água quente e sal"
    ],
    instructions: [
      "Escalde polvilho com água quente e azeite.",
      "Adicione o ovo e amasse bem.",
      "Modele palitinhos finos e asse a 180°C por 10 a 12 minutos."
    ]
  },
  {
    id: "recipe-air-23",
    productId: "airfryer-25",
    title: "Empadinha de Farinha de Arroz",
    time: "15 min",
    yield: "4 empadinhas",
    description: "Massa que desmancha na boca. Aceita qualquer recheio e é perfeita para marmitas.",
    category: "tradicionais",
    ingredients: [
      "4 colheres farinha arroz",
      "1 ovo",
      "azeite e sal",
      "recheio a gosto"
    ],
    instructions: [
      "Misture a massa base.",
      "Forre as forminhas, coloque recheio e feche com mais massa.",
      "Asse a 180°C por 15 minutos."
    ]
  },
  {
    id: "recipe-air-24",
    productId: "airfryer-25",
    title: "Bolinha de Frango com Chia",
    time: "15 min",
    yield: "8 bolinhas",
    description: "Crosta super crocante de chia envolvendo um interior suculento de frango processado.",
    category: "funcionais",
    ingredients: [
      "1 xícara frango processado cru",
      "temperos a gosto",
      "chia para empanar"
    ],
    instructions: [
      "Modele as bolinhas e tempere bem.",
      "Passe na chia pressionando levemente.",
      "Asse na Air Fryer a 180°C por 15 minutos."
    ]
  },
  {
    id: "recipe-air-25",
    productId: "airfryer-25",
    title: "Torta Salgada de Liquidificador",
    time: "18 min",
    yield: "2 unidades",
    description: "Praticidade de liquidificador em porção individual rústica. Úmida e saborosa.",
    category: "rapidos",
    ingredients: [
      "1 ovo, óleo e água",
      "arroz, amido e fermento",
      "recheio de legumes ou frango"
    ],
    instructions: [
      "Bata a massa e coloque metade em ramequins.",
      "Adicione recheio e cubra com o restante da massa.",
      "Asse a 160°C por 15 a 18 minutos."
    ],
    tip: "As forminhas de silicone são indispensáveis para garantir que desenformem com perfeição. Unte levemente com óleo de coco!"
  },
  {
    id: "recipe-cookie-1",
    productId: "biscoitos-30",
    title: "Biscoito de Polvilho Assado",
    time: "15 min",
    yield: "20 unidades",
    description: "Crocante, leve e oco por dentro. O clássico inconfundível das padarias brasileiras.",
    category: "tradicionais",
    ingredients: [
      "2 xícaras de polvilho azedo",
      "½ xícara de óleo de girassol",
      "½ xícara de água fervente",
      "1 ovo",
      "1 colher (chá) de sal"
    ],
    instructions: [
      "Escalde o polvilho com a água e o óleo ferventes.",
      "Adicione o ovo e amasse bem até ficar homogêneo.",
      "Modele argolas ou palitos na assadeira.",
      "Asse a 200°C por cerca de 15 minutos até inflarem."
    ]
  },
  {
    id: "recipe-cookie-2",
    productId: "biscoitos-30",
    title: "Cracker Rústico de Sementes",
    time: "30 min",
    yield: "1 assadeira",
    description: "Um mix potente de sementes que vira um cracker crocante e nutritivo. Zero carboidratos líquidos.",
    category: "funcionais",
    ingredients: [
      "¼ xícara chia, linhaça e gergelim",
      "¼ xícara semente girassol",
      "1 xícara de água",
      "sal e orégano"
    ],
    instructions: [
      "Misture as sementes com água e deixe hidratar por 15 min (vai virar gel).",
      "Espalhe bem fino em assadeira com papel manteiga.",
      "Asse a 160°C por 30 minutos. Quebre em pedaços rústicos após esfriar."
    ]
  },
  {
    id: "recipe-cookie-3",
    productId: "biscoitos-30",
    title: "Bolacha Água e Sal Saudável",
    time: "12 min",
    yield: "20 bolachas",
    description: "Versão caseira e limpa da bolacha industrializada. Crocante e versátil para patês.",
    category: "tradicionais",
    ingredients: [
      "1 xícara de farinha de arroz",
      "½ xícara de polvilho doce",
      "3 colheres (sopa) de azeite",
      "⅓ xícara de água e sal"
    ],
    instructions: [
      "Amasse os ingredientes até a massa ficar lisa.",
      "Abra bem fina com um rolo e corte em quadrados.",
      "Faça furinhos com um garfo.",
      "Asse a 180°C por 12 minutos."
    ]
  },
  {
    id: "recipe-cookie-4",
    productId: "biscoitos-30",
    title: "Biscoitinho de Cebola e Orégano",
    time: "15 min",
    yield: "15 biscoitos",
    description: "Aroma marcante de cebola fresca em um biscoito que derrete na boca. Ideal para o lanche.",
    category: "tradicionais",
    ingredients: [
      "1 xícara farinha arroz",
      "½ cebola pequena ralada",
      "2 colheres azeite",
      "1 ovo",
      "sal e orégano"
    ],
    instructions: [
      "Esprema a cebola ralada para tirar o excesso de líquido.",
      "Misture tudo, abra a massa e corte nos formatos desejados.",
      "Asse a 180°C por 15 minutos."
    ]
  },
  {
    id: "recipe-cookie-5",
    productId: "biscoitos-30",
    title: "Palitos de Grão-de-Bico",
    time: "12 min",
    yield: "12 palitos",
    description: "Petisco proteico e rústico. O alecrim fresco eleva o sabor para um nível gourmet.",
    category: "rusticos",
    ingredients: [
      "1 xícara farinha grão-de-bico",
      "2 colheres azeite",
      "água (ponto)",
      "sal e alecrim fresco"
    ],
    instructions: [
      "Misture ingredientes e adicione água até massa modelável.",
      "Modele palitinhos finos e pincele azeite.",
      "Asse a 180°C por 10 a 12 minutos."
    ]
  },
  {
    id: "recipe-cookie-6",
    productId: "biscoitos-30",
    title: "Biscoito de Batata Doce",
    time: "15 min",
    yield: "15 biscoitos",
    description: "Utiliza a doçura natural da batata para criar um Snack salgado vibrante e nutritivo.",
    category: "funcionais",
    ingredients: [
      "1 xícara purê batata doce",
      "1 xícara polvilho azedo",
      "2 colheres azeite",
      "sal"
    ],
    instructions: [
      "Amasse bem o purê com polvilho e azeite.",
      "Abra a massa fina e corte os biscoitos.",
      "Asse a 180°C por 15 minutos."
    ]
  },
  {
    id: "recipe-cookie-7",
    productId: "biscoitos-30",
    title: "Bolachinha de Alho com Ervas",
    time: "12 min",
    yield: "12 bolachinhas",
    description: "Amêndoas garantem a crocância e gordura boa. O toque de alho é viciante.",
    category: "rapidos",
    ingredients: [
      "1 xícara farinha amêndoas",
      "1 ovo",
      "1 colher azeite",
      "alho em pó e ervas finas"
    ],
    instructions: [
      "Misture, faça bolinhas e achate com um garfo.",
      "Asse a 160°C por 12 minutos."
    ]
  },
  {
    id: "recipe-cookie-8",
    productId: "biscoitos-30",
    title: "Biscoito de Arroz e Gergelim",
    time: "15 min",
    yield: "15 biscoitos",
    description: "Snack leve e super crocante. O gergelim torrado traz uma nota de nozes maravilhosa.",
    category: "tradicionais",
    ingredients: [
      "1 xícara arroz",
      "¼ xícara gergelim torrado",
      "1 ovo",
      "2 colheres óleo e sal"
    ],
    instructions: [
      "Amasse e abra a massa entre dois plásticos para não grudar.",
      "Corte em círculos e asse a 180°C por 15 minutos."
    ]
  },
  {
    id: "recipe-cookie-9",
    productId: "biscoitos-30",
    title: "Snack de Tapioca com Levedura",
    time: "15 min",
    yield: "15 unidades",
    description: "Sabor de queijo sem derivados animais. Uma opção inteligente para quem ama snacks.",
    category: "funcionais",
    ingredients: [
      "1 xícara goma tapioca",
      "2 colheres azeite",
      "2 colheres levedura nutricional",
      "água fervente (ponto)"
    ],
    instructions: [
      "Escalde a goma com água fervente e azeite.",
      "Adicione levedura e sal. Faça bolinhas pequenas.",
      "Asse a 200°C por 15 minutos."
    ]
  },
  {
    id: "recipe-cookie-10",
    productId: "biscoitos-30",
    title: "Bolachinha de Fubá Salgada",
    time: "15 min",
    yield: "12 bolachinhas",
    description: "A alma da fazenda em formato de biscoito. A erva-doce completa o perfil clássico.",
    category: "tradicionais",
    ingredients: [
      "1 xícara fubá",
      "½ xícara polvilho doce",
      "1 ovo",
      "água quente (ponto)",
      "erva-doce e sal"
    ],
    instructions: [
      "Misture secos e escalde com um pouco de água quente.",
      "Adicione ovo e modele meias-luas.",
      "Asse a 180°C por 15 minutos."
    ]
  },
  {
    id: "recipe-cookie-11",
    productId: "biscoitos-30",
    title: "Sequilhos de Leite de Coco",
    time: "12 min",
    yield: "20 sequilhos",
    description: "Derrete na boca instantaneamente. O clássico amido de milho com o toque suave do coco.",
    category: "doces",
    ingredients: [
      "2 xícaras amido de milho",
      "½ xícara açúcar demerara",
      "½ xícara leite de coco",
      "3 colheres óleo coco firme"
    ],
    instructions: [
      "Amasse bem até formar massa lisa e macia.",
      "Faça bolinhas e achate com o garfo.",
      "Asse a 180°C por 12 minutos (não deixe dourar muito)."
    ]
  },
  {
    id: "recipe-cookie-12",
    productId: "biscoitos-30",
    title: "Bolacha Maria Sem Glúten",
    time: "10 min",
    yield: "15 bolachas",
    description: "Formatada para ser a companheira perfeita do chá. Leve, doce na medida e deliciosa.",
    category: "doces",
    ingredients: [
      "1 xícara arroz",
      "½ xícara amido",
      "1 ovo",
      "óleo coco, açúcar e baunilha"
    ],
    instructions: [
      "Amasse e abra com rolo.",
      "Corte em rodelas e faça furinhos característicos.",
      "Asse a 180°C por apenas 10 minutos."
    ]
  },
  {
    id: "recipe-cookie-13",
    productId: "biscoitos-30",
    title: "Biscoito 'Amanteigado' Fake",
    time: "12 min",
    yield: "15 unidades",
    description: "Zero lactose com textura de amanteigado real. O óleo de coco gelado é o segredo aqui.",
    category: "doces",
    ingredients: [
      "1 e ½ xícara arroz fina",
      "½ xícara óleo coco gelado",
      "⅓ xícara açúcar e 1 ovo"
    ],
    instructions: [
      "Misture com as pontas dos dedos até virar uma farofa úmida.",
      "Aperte para modelar formatos variados.",
      "Asse a 180°C por 12 minutos."
    ]
  },
  {
    id: "recipe-cookie-14",
    productId: "biscoitos-30",
    title: "Casadinho com Goiabada Fit",
    time: "15 min",
    yield: "10 casadinhos",
    description: "Dois biscoitos unidos por um coração de goiabada derretida. Um clássico de vitrine.",
    category: "doces",
    ingredients: [
      "Massa biscoito amanteigado fake (receita cookie-13)",
      "goiabada sem açúcar derretida"
    ],
    instructions: [
      "Asse os biscoitos em formato de moedas.",
      "Depois de frios, una os pares com uma colher de goiabada morna."
    ]
  },
  {
    id: "recipe-cookie-15",
    productId: "biscoitos-30",
    title: "Bolachinha de Araruta",
    time: "15 min",
    yield: "12 rosquinhas",
    description: "Receita afetiva que remete às cozinhas das avós. Extremamente leve e digestiva.",
    category: "tradicionais",
    ingredients: [
      "2 xícaras fécula araruta ou polvilho doce",
      "1 ovo",
      "½ xícara açúcar mascavo",
      "3 colheres azeite suave"
    ],
    instructions: [
      "Amasse bem os ingredientes até homogeneizar.",
      "Modele rosquinhas charmosas na assadeira.",
      "Asse a 180°C por 15 minutos."
    ]
  },
  {
    id: "recipe-cookie-16",
    productId: "biscoitos-30",
    title: "Rosquinha de Canela Crocante",
    time: "15 min",
    yield: "15 rosquinhas",
    description: "Perfuma a casa toda enquanto assa. A crosta de açúcar e canela é o ponto alto.",
    category: "doces",
    ingredients: [
      "Farinha arroz e polvilho doce",
      "1 ovo e 2 colheres óleo",
      "açúcar e canela em pó"
    ],
    instructions: [
      "Faça cordinhas e una formando rosquinhas.",
      "Passe na mistura de açúcar e canela.",
      "Asse a 180°C por 15 minutos."
    ]
  },
  {
    id: "recipe-cookie-17",
    productId: "biscoitos-30",
    title: "Biscoito de Limão Siciliano",
    time: "12 min",
    yield: "12 unidades",
    description: "Refrescante, cítrico e sofisticado. Amêndoas e mel garantem um sabor de confeitaria fina.",
    category: "doces",
    ingredients: [
      "Farinha amêndoas e arroz",
      "1 ovo, mel e óleo de coco",
      "raspas de 1 limão siciliano"
    ],
    instructions: [
      "Misture, faça bolinhas e achate levemente.",
      "Asse a 160°C por cerca de 12 minutos."
    ]
  },
  {
    id: "recipe-cookie-18",
    productId: "biscoitos-30",
    title: "Biscoitinho de Amendoim",
    time: "10 min",
    yield: "10 unidades",
    description: "Apenas 3 ingredientes! Sabor intenso de amendoim com uma textura que dissolve.",
    category: "doces",
    ingredients: [
      "1 xícara farinha amendoim",
      "1 ovo",
      "3 colheres açúcar demerara"
    ],
    instructions: [
      "Misture os 3 ingredientes até massa uniforme.",
      "Modele pequenos círculos e asse a 180°C por 10 minutos."
    ]
  },
  {
    id: "recipe-cookie-19",
    productId: "biscoitos-30",
    title: "Bolachinha de Coco Ralado",
    time: "10 min",
    yield: "10 unidades",
    description: "Massa leve baseada em claras, focada totalmente no aroma do coco natural.",
    category: "doces",
    ingredients: [
      "1 xícara coco ralado",
      "1 clara de ovo",
      "2 colheres xilitol ou açúcar"
    ],
    instructions: [
      "Misture e molde pequenos montinhos.",
      "Asse a 160°C até dourarem (cerca de 10 a 12 min)."
    ]
  },
  {
    id: "recipe-cookie-20",
    productId: "biscoitos-30",
    title: "Gingerbread Fit",
    time: "10 min",
    yield: "10 bonequinhos",
    description: "Os clássicos bonequinhos de gengibre agora em versão saudável e sem glúten.",
    category: "doces",
    ingredients: [
      "Arroz e amêndoas",
      "melado de cana",
      "gengibre e cravo em pó"
    ],
    instructions: [
      "Amasse e abra com rolo.",
      "Corte com forminhas e asse a 180°C por 10 minutos."
    ]
  },
  {
    id: "recipe-cookie-21",
    productId: "biscoitos-30",
    title: "Cookie com Gotas de Chocolate",
    time: "12 min",
    yield: "12 cookies",
    description: "O favorito de todos os tempos. Gotas de chocolate 70% em uma base de amêndoas.",
    category: "doces",
    ingredients: [
      "1 xícara amêndoas",
      "açúcar mascavo",
      "gotas chocolate 70%"
    ],
    instructions: [
      "Misture massa e incorpore as gotas.",
      "Coloque colheradas na assadeira.",
      "Asse a 180°C por 12 minutos."
    ]
  },
  {
    id: "recipe-cookie-22",
    productId: "biscoitos-30",
    title: "Cookie de Aveia e Passas",
    time: "15 min",
    yield: "10 cookies",
    description: "Saciedade e energia. O doce natural da banana com a fibra da aveia.",
    category: "funcionais",
    ingredients: [
      "1 xícara aveia flocos",
      "1 banana madura",
      "uvas-passas e canela"
    ],
    instructions: [
      "Amasse banana e misture o restante.",
      "Molde cookies e asse a 180°C por 15 minutos."
    ]
  },
  {
    id: "recipe-cookie-23",
    productId: "biscoitos-30",
    title: "Cookie Duplo Chocolate",
    time: "12 min",
    yield: "10 cookies",
    description: "Para os chocólatras: massa de cacau + gotas de chocolate. Dupla explosão de sabor.",
    category: "doces",
    ingredients: [
      "Aveia e cacau em pó",
      "1 ovo e mel",
      "gotas chocolate"
    ],
    instructions: [
      "Misture tudo e modele.",
      "Asse a 180°C por 12 minutos."
    ]
  },
  {
    id: "recipe-cookie-24",
    productId: "biscoitos-30",
    title: "Cookie Proteico de Pasta de Amendoim",
    time: "12 min",
    yield: "12 unidades",
    description: "Alto teor proteico e gorduras boas. Uma marcação de garfo icônica no topo.",
    category: "funcionais",
    ingredients: [
      "1 xícara pasta amendoim",
      "1 ovo",
      "açúcar ou xilitol"
    ],
    instructions: [
      "Misture, faça bolinhas e marque um 'x' com garfo.",
      "Asse a 180°C por 10 a 12 minutos."
    ]
  },
  {
    id: "recipe-cookie-25",
    productId: "biscoitos-30",
    title: "Cookie de Maçã e Canela",
    time: "15 min",
    yield: "10 cookies",
    description: "Combinação clássica de outono. A maçã ralada garante uma massa úmida e aromática.",
    category: "doces",
    ingredients: [
      "Aveia e maçã ralada",
      "1 ovo, azeite e mel",
      "canela"
    ],
    instructions: [
      "Misture, modele e asse a 180°C por 15 minutos."
    ]
  },
  {
    id: "recipe-cookie-26",
    productId: "biscoitos-30",
    title: "Cookie Funcional de Abóbora",
    time: "15 min",
    yield: "10 cookies",
    description: "Vibrante e super nutritivo. As especiarias trazem um sabor reconfortante e único.",
    category: "funcionais",
    ingredients: [
      "purê abóbora",
      "aveia e melado",
      "semente abóbora e especiarias"
    ],
    instructions: [
      "Misture tudo e asse a 180°C por 15 min."
    ]
  },
  {
    id: "recipe-cookie-27",
    productId: "biscoitos-30",
    title: "Bolacha de Banana com Gergelim",
    time: "15 min",
    yield: "10 bolachas",
    description: "Dois ingredientes que fazem mágica. Um cracker doce inesperado e delicioso.",
    category: "rapidos",
    ingredients: [
      "1 banana amassada",
      "1 xícara gergelim torrado"
    ],
    instructions: [
      "Misture bem, abra discos finos.",
      "Asse a 160°C por 15 min até ficarem crocantes."
    ]
  },
  {
    id: "recipe-cookie-28",
    productId: "biscoitos-30",
    title: "Cookie Macio de Castanhas",
    time: "12 min",
    yield: "10 unidades",
    description: "Gordura nobre das castanhas que derrete na boca. Textura macia incomparável.",
    category: "doces",
    ingredients: [
      "farinha castanhas",
      "ovo e óleo coco",
      "xilitol"
    ],
    instructions: [
      "Misture, achate bolinhas e asse a 160°C por 10 a 12 min."
    ]
  },
  {
    id: "recipe-cookie-29",
    productId: "biscoitos-30",
    title: "Cookie Sensação",
    time: "12 min",
    yield: "10 unidades",
    description: "Recheio surpresa de morango envolto em uma massa de chocolate. Uma sobremesa em formato de cookie.",
    category: "doces",
    ingredients: [
      "Aveia e cacau em pó",
      "recheio: geleia de morango 100% fruta"
    ],
    instructions: [
      "Faça bolas de cacau, afunde o centro.",
      "Coloque pingo de geleia e asse a 180°C por 12 min."
    ]
  },
  {
    id: "recipe-cookie-30",
    productId: "biscoitos-30",
    title: "Cookie Energético",
    time: "15 min",
    yield: "10 unidades",
    description: "Explosão de damasco, sementes e pasta de amendoim. O combustível perfeito para o seu dia.",
    category: "funcionais",
    ingredients: [
      "aveia e semente girassol",
      "damasco e banana",
      "pasta amendoim"
    ],
    instructions: [
      "Misture tudo, faça discos rústicos.",
      "Asse a 180°C por 15 minutos."
    ]
  },
  {
    id: "recipe-machine-1",
    productId: "maquina-pao-40",
    title: "Pão Branco Básico de Máquina",
    time: "3h",
    yield: "1 pão grande",
    description: "O pilar da panificação automática. Estrutura perfeita para torradas e sanduíches diários.",
    category: "tradicionais",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xícara água morna, 2 ovos, 3 col. azeite",
      "SECOS: 2 xíc. arroz, 1 xíc. polvilho doce, 1 col. xantana",
      "OUTROS: 1 col. açúcar, 1 col. sal",
      "TOP: 10g fermento biológico seco"
    ],
    instructions: [
      "Coloque os líquidos no fundo da forma.",
      "Cubra com os secos, garantindo que os líquidos fiquem isolados.",
      "Faça um buraquinho no topo e coloque o fermento sem tocar no líquido.",
      "Ciclo: Básico ou Sem Glúten (Crosta Clara)."
    ]
  },
  {
    id: "recipe-machine-2",
    productId: "maquina-pao-40",
    title: "Pão de Forma Extra Macio",
    time: "3h",
    yield: "1 pão grande",
    description: "Utiliza claras de ovo para uma leveza superior. Ideal para quem prefere pães brancos e aerados.",
    category: "tradicionais",
    ingredients: [
      "LÍQUIDOS: 1 e ¼ xícara água, 3 claras de ovo, ¼ xícara óleo",
      "SECOS: 1 e ½ xíc. arroz, 1 xíc. fécula batata, ½ xíc. polvilho doce",
      "OUTROS: 1 col. xantana, 2 col. açúcar, sal",
      "FERMENTO: 10g biológico"
    ],
    instructions: [
      "Adicione líquidos, seguidos pelos secos bem nivelados.",
      "Fermento por último no centro seco.",
      "Ciclo: Básico (Light Crust)."
    ]
  },
  {
    id: "recipe-machine-3",
    productId: "maquina-pao-40",
    title: "Pão de Leite de Coco",
    time: "3h 15 min",
    yield: "1 pão",
    description: "Sabor suave e tropical com uma gordura boa que garante umidade prolongada à massa.",
    category: "tradicionais",
    ingredients: [
      "LÍQUIDOS: 1 xíc. leite coco, ½ xíc. água, 2 ovos, 2 col. óleo coco",
      "SECOS: 2 xíc. arroz, ½ xíc. polvilho doce",
      "OUTROS: 1 col. xantana, 2 col. açúcar, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos nivelados e fermento no topo.",
      "Ciclo: Francês ou Básico."
    ]
  },
  {
    id: "recipe-machine-4",
    productId: "maquina-pao-40",
    title: "Pão de Aveia de Máquina",
    time: "3h",
    yield: "1 pão",
    description: "Rico em fibras e com o toque sutil do mel. Um excelente pão para o café da manhã nutritivo.",
    category: "funcionais",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xícara água, 2 ovos, 3 col. azeite",
      "SECOS: 1 e ½ xíc. aveia (SG), 1 xíc. polvilho doce",
      "OUTROS: 1 col. xantana, 1 col. mel, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos e mel.",
      "Fermento por cima sem contato com líquidos.",
      "Ciclo: Grãos Integrais ou Básico."
    ]
  },
  {
    id: "recipe-machine-5",
    productId: "maquina-pao-40",
    title: "Pão de Cebola de Máquina",
    time: "3h",
    yield: "1 pão",
    description: "Aromático e irresistível. A cebola batida no líquido perfuma toda a casa durante o ciclo.",
    category: "tradicionais",
    ingredients: [
      "LÍQUIDOS: 1 xíc. água, 3 ovos, ¼ xíc. óleo (bater c/ ½ cebola)",
      "SECOS: 2 xíc. arroz, ½ xíc. polvilho doce",
      "OUTROS: 1 col. xantana, sal, orégano",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Bata os líquidos com a cebola antes de despejar na máquina.",
      "Secos e fermento seguem o padrão.",
      "Ciclo: Básico."
    ]
  },
  {
    id: "recipe-machine-6",
    productId: "maquina-pao-40",
    title: "Pão de Milho Fofinho (Fubá)",
    time: "3h 10 min",
    yield: "1 pão",
    description: "Cor vibrante e sabor de interior. A textura do fubá granulado é o grande diferencial.",
    category: "tradicionais",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xíc. leite vegetal, 2 ovos, ¼ xíc. óleo",
      "SECOS: 1 xíc. fubá, 1 xíc. arroz, ½ xíc. polvilho doce",
      "OUTROS: 1 col. xantana, 2 col. açúcar demerara, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos e fermento.",
      "Ciclo: Básico ou Pão de Milho."
    ]
  },
  {
    id: "recipe-machine-7",
    productId: "maquina-pao-40",
    title: "Pão de Batata Prático",
    time: "3h 20 min",
    yield: "1 pão",
    description: "A batata inglesa traz uma resiliência incrível à massa sem glúten. Maciez garantida por dias.",
    category: "tradicionais",
    ingredients: [
      "LÍQUIDOS: 1 xíc. água batata, 2 ovos, 3 col. óleo",
      "SECOS: 1 xíc. purê batata inglesa frio, 2 xíc. arroz, ½ xíc. polvilho doce",
      "OUTROS: 1 col. xantana, 1 col. açúcar, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Combine líquidos e purê no fundo.",
      "Secos e fermento por cima.",
      "Ciclo: Básico ou Francês."
    ]
  },
  {
    id: "recipe-machine-8",
    productId: "maquina-pao-40",
    title: "Pão de Mandioquinha",
    time: "3h 20 min",
    yield: "1 pão",
    description: "Variante gourmet do pão de batata. Sabor mais adocicado e cor amarela intensa.",
    category: "tradicionais",
    ingredients: [
      "Mesma base da receita 7, substituindo batata por mandioquinha."
    ],
    instructions: [
      "Siga o processo da receita #7.",
      "Ciclo: Básico."
    ]
  },
  {
    id: "recipe-machine-9",
    productId: "maquina-pao-40",
    title: "Pão de Iogurte (Zero Lactose)",
    time: "3h 10 min",
    yield: "1 pão",
    description: "O iogurte age como um condicionador de massa natural, deixando o miolo incrivelmente fofo.",
    category: "tradicionais",
    ingredients: [
      "LÍQUIDOS: 1 pote iogurte zero lact., ½ xíc. água, 2 ovos, 2 col. azeite",
      "SECOS: 2 xíc. arroz, 1 xíc. polvilho doce",
      "OUTROS: 1 col. xantana, 1 col. açúcar, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos e fermento.",
      "Ciclo: Básico."
    ]
  },
  {
    id: "recipe-machine-10",
    productId: "maquina-pao-40",
    title: "Pão de Grão-de-Bico Rápido",
    time: "2h 45 min",
    yield: "1 pão",
    description: "Proteico e prático. Uma opção para quem precisa de um pão nutritivo e estruturado em menos tempo.",
    category: "rapidos",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xíc. água, 2 ovos, ¼ xíc. azeite",
      "SECOS: 1 xíc. grão-de-bico, 1 xíc. arroz, ½ xíc. fécula batata",
      "OUTROS: 1 col. xantana, 1 col. açúcar, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos e fermento.",
      "Ciclo: Rápido ou Sem Glúten."
    ]
  },
  {
    id: "recipe-machine-11",
    productId: "maquina-pao-40",
    title: "Pão 100% Integral de Arroz",
    time: "3h 30 min",
    yield: "1 pão",
    description: "Fibra máxima com arroz integral e psyllium. O pão saudável definitivo para sua máquina.",
    category: "funcionais",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xícara água, 2 ovos, 3 col. azeite",
      "SECOS: 2 xíc. arroz integral, 1 xíc. polvilho doce",
      "OUTROS: 1 col. psyllium, 1 col. xantana, açúcar mascavo, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos e fermento.",
      "Ciclo: Pão Integral ou Grãos."
    ]
  },
  {
    id: "recipe-machine-12",
    productId: "maquina-pao-40",
    title: "Pão Funcional de Linhaça",
    time: "3h 15 min",
    yield: "1 pão",
    description: "Enriquecido com ômega-3. A linhaça dourada traz uma cor linda e textura rica à fatia.",
    category: "funcionais",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xícara água, 3 ovos, ¼ xícara azeite",
      "SECOS: 1 xíc. arroz, ½ xíc. linhaça dourada, ½ xíc. polvilho doce",
      "OUTROS: 1 col. xantana, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos e fermento.",
      "Ciclo: Grãos Integrais."
    ]
  },
  {
    id: "recipe-machine-13",
    productId: "maquina-pao-40",
    title: "Pão Low-Carb de Amêndoas",
    time: "1h 10 min",
    yield: "1 pão pequeno",
    description: "Versão automática do ícone low-carb. Utiliza fermento químico e um ciclo mais curto de cozimento.",
    category: "funcionais",
    ingredients: [
      "LÍQUIDOS: 1 xíc. água morna, 4 ovos bem batidos, ¼ xíc. óleo coco",
      "SECOS: 2 xíc. farinha amêndoas, ¼ xíc. psyllium, sal",
      "FERMENTO: 1 colher sopa químico"
    ],
    instructions: [
      "Misture ovos e óleo antes de colocar.",
      "Cubra com secos e fermento químico.",
      "Ciclo: Cozimento Rápido ou 'Assar' (40 min)."
    ]
  },
  {
    id: "recipe-machine-14",
    productId: "maquina-pao-40",
    title: "Pão de Sementes (Girassol & Abóbora)",
    time: "3h 20 min",
    yield: "1 pão",
    description: "Crocância em cada mordida. O mix de sementes fica perfeitamente distribuído pela máquina.",
    category: "funcionais",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xícara água, 2 ovos, ¼ xícara azeite",
      "SECOS: 2 xíc. arroz, ½ xíc. polvilho doce, ¼ xíc. mix sementes",
      "OUTROS: 1 col. xantana, açúcar mascavo, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos (sementes inclusas) e fermento.",
      "Ciclo: Grãos Integrais."
    ]
  },
  {
    id: "recipe-machine-15",
    productId: "maquina-pao-40",
    title: "Pão Australiano de Máquina",
    time: "3h 30 min",
    yield: "1 pão",
    description: "Sabor denso com melado e cacau. Traz a sofisticação da steakhouse para sua mesa.",
    category: "rusticos",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xícara água, 2 ovos, ¼ xícara óleo, 3 col. melado",
      "SECOS: 1 xíc. arroz, 1 xíc. amêndoas, ½ xíc. polvilho doce",
      "OUTROS: 2 col. cacau 100%, 1 col. xantana, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos com melado no fundo.",
      "Secos por cima e fermento.",
      "Ciclo: Básico (Crosta Media)."
    ]
  },
  {
    id: "recipe-machine-16",
    productId: "maquina-pao-40",
    title: "Pão Proteico Rústico",
    time: "3h 15 min",
    yield: "1 pão",
    description: "Combina claras e grão-de-bico para um pão estruturado e com perfil nutricional de alta performance.",
    category: "rusticos",
    ingredients: [
      "LÍQUIDOS: 1 xícara água, 4 claras de ovo, 2 col. azeite",
      "SECOS: 1 xíc. arroz, 1 xíc. grão-de-bico, ½ xíc. fécula batata",
      "OUTROS: 1 col. xantana, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos e fermento.",
      "Ciclo: Francês ou Rústico."
    ]
  },
  {
    id: "recipe-machine-17",
    productId: "maquina-pao-40",
    title: "Pão de Beterraba Colorido",
    time: "3h",
    yield: "1 pão",
    description: "Cor rosa vibrante e sabor terroso sutil. As crianças adoram a cor e os adultos os benefícios.",
    category: "funcionais",
    ingredients: [
      "LÍQUIDOS: 1 xíc. suco beterraba coado, 2 ovos, 3 col. óleo",
      "SECOS: 2 xíc. aveia (SG), 1 xíc. polvilho doce",
      "OUTROS: 1 col. xantana, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos e fermento.",
      "Ciclo: Básico."
    ]
  },
  {
    id: "recipe-machine-18",
    productId: "maquina-pao-40",
    title: "Pão de Cenoura de Máquina",
    time: "3h",
    yield: "1 pão",
    description: "Maciez dourada. A cenoura batida no líquido garante um miolo úmido e cor de sol.",
    category: "tradicionais",
    ingredients: [
      "LÍQUIDOS: Bata 1 cenoura c/ 1 xíc. água, 2 ovos e ¼ xíc. óleo",
      "SECOS: 2 xíc. arroz, 1 xíc. polvilho doce",
      "OUTROS: 1 col. xantana, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Bata cenoura, água, ovos e óleo e coloque na forma.",
      "Adicione secos e fermento.",
      "Ciclo: Básico."
    ]
  },
  {
    id: "recipe-machine-19",
    productId: "maquina-pao-40",
    title: "Pão Falso Centeio (Sarraceno)",
    time: "3h 20 min",
    yield: "1 pão",
    description: "O sabor clássico do centeio sem o glúten. Denso, escuro e muito rico em minerais.",
    category: "rusticos",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xícara água, 2 ovos, ¼ xícara azeite",
      "SECOS: 1 e ½ xíc. sarraceno, 1 xíc. polvilho doce",
      "OUTROS: 1 col. xantana, 1 col. cacau, açúcar mascavo, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos e fermento.",
      "Ciclo: Grãos Integrais."
    ]
  },
  {
    id: "recipe-machine-20",
    productId: "maquina-pao-40",
    title: "Pão de Sorgo Funcional",
    time: "3h 15 min",
    yield: "1 pão",
    description: "Utiliza a farinha de sorgo para uma textura mais próxima ao pão de trigo. Saudável e fatiável.",
    category: "funcionais",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xícara água, 2 ovos, ¼ xícara azeite",
      "SECOS: 1 xíc. sorgo, 1 xíc. arroz, ½ xíc. polvilho doce",
      "OUTROS: 1 col. xantana, 1 col. açúcar, sal",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos, secos e fermento.",
      "Ciclo: Básico."
    ]
  },
  {
    id: "recipe-machine-21",
    productId: "maquina-pao-40",
    title: "Bolo Fit de Fubá com Erva-Doce",
    time: "1h 30 min",
    yield: "1 bolo de máquina",
    description: "Sabor de fazenda automatizado. O ciclo Bolo faz todo o trabalho de bater e assar.",
    category: "doces",
    ingredients: [
      "LÍQUIDOS: 3 ovos, 1 xíc. leite coco, ½ xíc. óleo coco, 1 xíc. xilitol",
      "SECOS: 1 xíc. fubá, 1 xíc. arroz, erva-doce",
      "FERMENTO: 1 colcher sopa químico"
    ],
    instructions: [
      "Bata os líquidos no liquidificador e vá para a forma.",
      "Adicione secos e fermento químico.",
      "Ciclo: BOLO (ou Sweet)."
    ]
  },
  {
    id: "recipe-machine-22",
    productId: "maquina-pao-40",
    title: "Bolo Fit de Banana e Aveia",
    time: "1h 30 min",
    yield: "1 bolo",
    description: "Hmedecido pelas bananas maduras no fundo da forma. Um lanche escolar perfeito.",
    category: "doces",
    ingredients: [
      "LÍQUIDOS: 3 bananas maduras amassadas, 3 ovos, ¼ xíc. óleo",
      "SECOS: 2 xícaras de farinha aveia, canela, ½ xíc. passas",
      "FERMENTO: 1 colher sopa químico"
    ],
    instructions: [
      "Bananas amassadas, ovos e óleo no fundo.",
      "Adicione aveia, canela e passas por cima.",
      "Fermento por último.",
      "Ciclo: BOLO."
    ]
  },
  {
    id: "recipe-machine-23",
    productId: "maquina-pao-40",
    title: "Bolo Fit de Cacau Intenso",
    time: "1h 40 min",
    yield: "1 bolo",
    description: "Chocolate 100% em uma massa úmida e fofa de máquina de pão.",
    category: "doces",
    ingredients: [
      "LÍQUIDOS: 3 ovos, 1 xíc. água morna, ½ xíc. óleo, 1 xíc. demerara",
      "SECOS: 1 xíc. aveia, 1 xíc. arroz, ½ xíc. cacau 100%",
      "FERMENTO: 1 colher sopa químico"
    ],
    instructions: [
      "Adicione líquidos batidos, seguidos pelos secos.",
      "Ciclo: BOLO."
    ]
  },
  {
    id: "recipe-machine-24",
    productId: "maquina-pao-40",
    title: "Bolo de Cenoura com Gotas",
    time: "1h 45 min",
    yield: "1 bolo",
    description: "O favorito nacional na versão fit. Gotas de chocolate 70% trazem o charme extra.",
    category: "doces",
    ingredients: [
      "LÍQUIDOS: Cenoura batida c/ 3 ovos, ½ xíc óleo e 1 xíc demerara",
      "SECOS: 2 xíc. arroz, ½ xíc polvilho doce",
      "OUTROS: Gotas chocolate sem leite",
      "FERMENTO: 1 col. químico"
    ],
    instructions: [
      "Líquido batido no fundo.",
      "Secos por cima e gotas ao ouvir o 'bip'.",
      "Ciclo: BOLO."
    ]
  },
  {
    id: "recipe-machine-25",
    productId: "maquina-pao-40",
    title: "Bolo Fit de Maçã e Canela",
    time: "1h 40 min",
    yield: "1 bolo",
    description: "Pedaços de maçã no fundo que viram uma cobertura deliciosa ao desenformar o bolo invertido.",
    category: "doces",
    ingredients: [
      "BASE: 1 maçã picadinha no fundo",
      "LÍQUIDOS: 3 ovos, ½ xíc. óleo",
      "SECOS: 1 e ½ xíc. arroz, ½ xíc. amêndoas, ½ xíc. mascavo, canela",
      "FERMENTO: 1 col. químico"
    ],
    instructions: [
      "Forre o fundo com maçã e melado.",
      "Coloque líquidos e secos por cima.",
      "Ciclo: BOLO."
    ]
  },
  {
    id: "recipe-machine-26",
    productId: "maquina-pao-40",
    title: "Pão Doce de Coco Fatiado",
    time: "3h 15 min",
    yield: "1 pão doce",
    description: "Aroma de coco irresistível em uma massa leve e açucarada para o café da tarde.",
    category: "doces",
    ingredients: [
      "LÍQUIDOS: 1 xíc. leite coco, 2 ovos, 3 col. óleo coco",
      "SECOS: 2 xíc. arroz, ½ xíc. polvilho doce",
      "OUTROS: 3 col. açúcar, 3 col. coco ralado, 1 col. xantana",
      "FERMENTO: 10g biológico"
    ],
    instructions: [
      "Líquidos, secos e fermento biológico.",
      "Ciclo: Doce (ou Sweet)."
    ]
  },
  {
    id: "recipe-machine-27",
    productId: "maquina-pao-40",
    title: "Brioche Sem Glúten de Máquina",
    time: "3h 25 min",
    yield: "1 pão",
    description: "Massinha amanteigada com essência de baunilha. Um toque de luxo na sua panificadora.",
    category: "doces",
    ingredients: [
      "LÍQUIDOS: 1 xíc. leite vegetal, 3 ovos, ⅓ xíc. óleo coco, baunilha",
      "SECOS: 1 e ½ xíc arroz, 1 xíc fécula batata, ½ xíc polvilho doce",
      "OUTROS: 4 col. açúcar, 1 col. xantana",
      "FERMENTO: 10g biológico"
    ],
    instructions: [
      "Líquidos saborizados, secos e fermento.",
      "Ciclo: Básico (ou Pão Branco) - Crosta Clara."
    ]
  },
  {
    id: "recipe-machine-28",
    productId: "maquina-pao-40",
    title: "Pão de Mel e Especiarias",
    time: "3h 20 min",
    yield: "1 pão",
    description: "Inspirado no pão de mel tradicional, mas em formato de fatia fofa e aromática.",
    category: "doces",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xíc água, 2 ovos, ¼ xíc azeite, 4 col. mel",
      "SECOS: 2 xíc. aveia (SG), ½ xíc polvilho",
      "OUTROS: Cravo, canela, noz-moscada, 1 col. xantana",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Líquidos com mel, secos com especiarias.",
      "Ciclo: Doce ou Básico."
    ]
  },
  {
    id: "recipe-machine-29",
    productId: "maquina-pao-40",
    title: "Pão Doce com Gotas de Chocolate",
    time: "3h 15 min",
    yield: "1 pão doce",
    description: "Alegria garantida. Base de coco com gotas de chocolate que derretem suavemente na massa.",
    category: "doces",
    ingredients: [
      "MESMA BASE DO PÃO DE COCO (#26)",
      "ADICIONAL: ½ xícara gotas chocolate sem leite"
    ],
    instructions: [
      "Siga a receita #26.",
      "Adicione as gotas ao ouvir o 'bip' da máquina ou 15 min antes de assar.",
      "Ciclo: Doce."
    ]
  },
  {
    id: "recipe-machine-30",
    productId: "maquina-pao-40",
    title: "Pão de Batata Doce com Canela",
    time: "3h 30 min",
    yield: "1 pão",
    description: "Umidade da batata doce harmonizada com o perfume clássico da canela em pó.",
    category: "doces",
    ingredients: [
      "LÍQUIDOS: 1 xíc purê batata doce, 1 xíc água, 2 ovos, 3 col azeite",
      "SECOS: 2 xíc arroz, ½ xíc polvilho doce",
      "OUTROS: 1 col xantana, 3 col açúcar mascavo, canela",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Combine purê e líquidos. Cubra com secos açucarados.",
      "Ciclo: Básico."
    ]
  },
  {
    id: "recipe-machine-31",
    productId: "maquina-pao-40",
    title: "Pão de Alho Caseiro de Máquina",
    time: "3h",
    yield: "1 pão",
    description: "Base branca robusta com infusão potente de alho e orégano nos secos.",
    category: "rusticos",
    ingredients: [
      "BASE DO PÃO BRANCO (#1)",
      "ADICIONAL: 2 col. alho em pó, 1 col. orégano nos secos"
    ],
    instructions: [
      "Adicione os temperos junto às farinhas.",
      "Ciclo: Básico."
    ]
  },
  {
    id: "recipe-machine-32",
    productId: "maquina-pao-40",
    title: "Pão de Ervas Finas",
    time: "3h",
    yield: "1 pão",
    description: "Base de aveia perfumada por um mix de ervas secas e alecrim fresco.",
    category: "rusticos",
    ingredients: [
      "BASE DO PÃO DE AVEIA (#4)",
      "ADICIONAL: 1 col. ervas finas e alecrim na farinha"
    ],
    instructions: [
      "Incorpore as ervas nos secos para distribuição uniforme.",
      "Ciclo: Básico ou Grãos."
    ]
  },
  {
    id: "recipe-machine-33",
    productId: "maquina-pao-40",
    title: "Pão de Tomate Seco & Manjericão",
    time: "3h 10 min",
    yield: "1 pão",
    description: "Sofisticação mediterrânea. Pedaços de tomate seco que explodem sabor na fatia.",
    category: "rusticos",
    ingredients: [
      "BASE DO PÃO BRANCO (#1)",
      "ADICIONAL: ¼ xíc tomate seco picado, manjericão desidratado"
    ],
    instructions: [
      "Adicione o tomate seco picado ao ouvir o 'bip' da máquina.",
      "Ciclo: Básico."
    ]
  },
  {
    id: "recipe-machine-34",
    productId: "maquina-pao-40",
    title: "Pão de Azeitonas Pretas",
    time: "3h 25 min",
    yield: "1 pão",
    description: "Salino e rústico. A base de mandioquinha sustenta perfeitamente a umidade das azeitonas.",
    category: "rusticos",
    ingredients: [
      "BASE DO PÃO DE MANDIOQUINHA (#8)",
      "ADICIONAL: ⅓ xíc azeitonas pretas picadas"
    ],
    instructions: [
      "Adicione as azeitonas ao 'bip' ou 20 min de mistura.",
      "Ciclo: Básico."
    ]
  },
  {
    id: "recipe-machine-35",
    productId: "maquina-pao-40",
    title: "Pão Sabor Queijo (Vegan)",
    time: "3h 30 min",
    yield: "1 pão",
    description: "A levedura nutricional traz o sabor de queijo envelhecido sem usar lácteos. Rico em complexo B.",
    category: "funcionais",
    ingredients: [
      "BASE DO PÃO IOGURTE (#9)",
      "ADICIONAL: 3 col. levedura nutricional, 1 col. chia"
    ],
    instructions: [
      "Misture levedura e chia nos secos.",
      "Ciclo: Básico."
    ]
  },
  {
    id: "recipe-machine-36",
    productId: "maquina-pao-40",
    title: "Massa de Pizza de Máquina",
    time: "1h 30 min",
    yield: "2 discos grandes",
    description: "Use sua máquina para o trabalho pesado de amassar. Discos perfeitos e elásticos.",
    category: "rapidos",
    ingredients: [
      "LÍQUIDOS: 1 xíc água, 2 col. azeite",
      "SECOS: 1 e ½ xíc arroz, ½ xíc polvilho doce, 1 col xantana",
      "FERMENTO: 5g biológico"
    ],
    instructions: [
      "Coloque na máquina e use o ciclo AMASSAR (Dough).",
      "Retire a massa ao final, abra discos e asse em forno convencional."
    ]
  },
  {
    id: "recipe-machine-37",
    productId: "maquina-pao-40",
    title: "Pão de Castanhas",
    time: "3h 30 min",
    yield: "1 pão",
    description: "Textura nobre com castanhas-do-pará trituradas. Elevado teor de gorduras boas.",
    category: "rusticos",
    ingredients: [
      "BASE DO PÃO INTEGRAL (#11)",
      "ADICIONAL: ⅓ xíc castanhas-do-pará ou nozes trituradas"
    ],
    instructions: [
      "Adicione as castanhas ao 'bip'.",
      "Ciclo: Grãos Integrais."
    ]
  },
  {
    id: "recipe-machine-38",
    productId: "maquina-pao-40",
    title: "Pão com Crosta de Gergelim",
    time: "3h 20 min",
    yield: "1 pão",
    description: "Pão rústico com cobertura generosa de sementes. Visual de padaria artesanal.",
    category: "rusticos",
    ingredients: [
      "BASE DO PÃO PROTEICO (#16)",
      "ADICIONAL: Gergelim abundante para o topo"
    ],
    instructions: [
      "Inicie o ciclo normal.",
      "Quando parar de bater e iniciar crescimento, pincele água e jogue o gergelim.",
      "Ciclo: Rústico ou Básico."
    ]
  },
  {
    id: "recipe-machine-39",
    productId: "maquina-pao-40",
    title: "Massa de Focaccia de Máquina",
    time: "1h 45 min",
    yield: "1 focaccia grande",
    description: "Utilize o ciclo amassar para uma focaccia aerada. Finalização rústica no forno.",
    category: "rusticos",
    ingredients: [
      "LÍQUIDOS: 1 e ½ xíc água, ¼ xíc azeite",
      "SECOS: 1 e ½ xíc arroz, 1 xíc fécula batata, 1 col xantana",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Ciclo AMASSAR.",
      "Retire, coloque em assadeira, afunde dedos, regue azeite, sal grosso e alecrim.",
      "Asse em forno pré-aquecido."
    ]
  },
  {
    id: "recipe-machine-40",
    productId: "maquina-pao-40",
    title: "Pão de Abóbora com Especiarias",
    time: "3h 35 min",
    yield: "1 pão",
    description: "Purê de abóbora cabotiá garante cor e umidade superiores. Finalizado com sementes nutritivas.",
    category: "funcionais",
    ingredients: [
      "LÍQUIDOS: 1 xíc purê abóbora, ¾ xíc água, 2 ovos, 3 col azeite",
      "SECOS: 2 xíc arroz, ½ xíc polvilho doce, 1 col xantana",
      "OUTROS: sementes de abóbora",
      "FERMENTO: 10g"
    ],
    instructions: [
      "Misture purê e líquidos. Secos e sementes por cima.",
      "Fermento central.",
      "Ciclo: Sem Glúten."
    ],
    tip: "A regra de ouro: Líquidos embaixo, secos no meio e fermento em um buraquinho no topo sem tocar o líquido!"
  }
]; module.exports = recipes;