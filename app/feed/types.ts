export const posts = [
  {
    id: "1",
    author: {
      username: "@angocode",
      role: "Founder & Lead",
      avatar_color: "#b7e538",
    },
    tags: ["Open Source", "Africa", "Digital Public Goods"],
    contributors: [
      { id: "c1", avatar_color: "#e5384b" },
      { id: "c2", avatar_color: "#38a9e5" },
      { id: "c3", avatar_color: "#e5a038" },
    ],
    posted_at: "há 2h",
    tag: "Inovação",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    ],
    title: "EcoPulse: Plataforma de Monitorização Agrícola em Tempo Real",
    description:
      "EcoPulse é um projecto que utiliza sensores IoT de baixo custo para recolher dados de humidade e temperatura do solo em províncias periféricas de Luanda. O objectivo é democratizar o acesso a tecnologias de precisão para pequenos agricultores, permitindo um uso eficiente da água e previsão de colheitas.",
    stats: { upvotes: 156, downvotes: 2, likes: 210, shares: 45 },
  },
  {
    id: "2",
    author: {
      username: "@mariosalembe",
      role: "Lead UI/UX",
      avatar_color: "#e53870",
    },
    tags: ["Design System", "Next.js", "Accessibility"],
    contributors: [
      { id: "c4", avatar_color: "#b7e538" },
      { id: "c5", avatar_color: "#9b38e5" },
    ],
    posted_at: "há 5h",
    tag: "Design",
    images: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
    ],
    title: "AngoDesign: O Primeiro Design System com Foco Cultural Angolano",
    description:
      "Lançamos a versão beta do AngoDesign, um design system que integra padrões visuais inspirados na tecelagem Sona e cores vibrantes da fauna nacional. Totalmente acessível e compatível com Tailwind CSS, focado em criar interfaces amigáveis para aplicações de governo digital.",
    stats: { upvotes: 112, downvotes: 1, likes: 340, shares: 89 },
  },
  {
    id: "3",
    author: {
      username: "@kianu_dev",
      role: "Backend Engineer",
      avatar_color: "#38c9e5",
    },
    tags: ["Payments", "Fintech", "Security"],
    contributors: [
      { id: "c6", avatar_color: "#e5c438" },
      { id: "c7", avatar_color: "#e57d38" },
    ],
    posted_at: "há 8h",
    tag: "Fintech",
    images: [
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    ],
    title: "KwanzaPay: Gateway de Pagamentos para Microempreendedores",
    description:
      "Resolvemos o problema da integração de pagamentos informais. O KwanzaPay permite que pequenos vendedores recebam confirmações de pagamentos multicaixa via SMS e gerem faturas simplificadas através de uma API REST robusta e segura.",
    stats: { upvotes: 89, downvotes: 4, likes: 156, shares: 32 },
  },
  {
    id: "4",
    author: {
      username: "@luanda_cloud",
      role: "SRE Expert",
      avatar_color: "#e5a038",
    },
    tags: ["Infrastructure", "Cloud", "Self-Hosted"],
    contributors: [
      { id: "c10", avatar_color: "#e53838" },
      { id: "c11", avatar_color: "#38e5c4" },
    ],
    posted_at: "há 12h",
    tag: "DevOps",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    ],
    title: "ProxyAO: Reduzindo a Latência de CDN em Angola",
    description:
      "Uma solução baseada em Nginx e Redis para caching estratégico de bibliotecas populares (como React e FontAwesome) em servidores locais. Ideal para ambientes corporativos com largura de banda limitada para o tráfego internacional.",
    stats: { upvotes: 75, downvotes: 0, likes: 120, shares: 56 },
  },
  {
    id: "5",
    author: {
      username: "@tech_queen",
      role: "Data Scientist",
      avatar_color: "#9b38e5",
    },
    tags: ["AI", "NLP", "Bantu Languages"],
    contributors: [{ id: "c12", avatar_color: "#f4f4f4" }],
    posted_at: "há 1d",
    tag: "Inteligência Artificial",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    ],
    title: "UmbumduNLP: Primeiro Tradutor de IA para Línguas Nacionais",
    description:
      "O UmbumduNLP é um modelo transformer treinado para reconhecer dialetos regionais de Angola. Começámos com o Umbundu e Kimbundu, permitindo que serviços públicos integrem chatbots que falam a língua do povo em zonas rurais.",
    stats: { upvotes: 450, downvotes: 3, likes: 890, shares: 210 },
  },
  {
    id: "6",
    author: {
      username: "@dev_moxico",
      role: "Junior Dev",
      avatar_color: "#38e5b7",
    },
    tags: ["Education", "Learning", "Python"],
    contributors: [],
    posted_at: "há 1d",
    tag: "Comunidade",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    ],
    title: "AngoCode: Bootcamp Gratuito para Jovens do Cazenga",
    description:
      "Iniciámos um workshop presencial de 12 semanas ensinando os fundamentos de Python e lógica de programação. Procuramos mentores para ajudar na revisão de código dos alunos. Toda a ementa está disponível no GitHub!",
    stats: { upvotes: 612, downvotes: 0, likes: 1200, shares: 450 },
  },
  {
    id: "7",
    author: {
      username: "@security_ao",
      role: "Security Researcher",
      avatar_color: "#e53838",
    },
    tags: ["Cybersecurity", "Zero Trust", "Firewall"],
    contributors: [{ id: "c13", avatar_color: "#333333" }],
    posted_at: "há 2d",
    tag: "Segurança",
    images: [
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    ],
    title: "ShieldAO: IDS para Bancos de Dados Públicos",
    description:
      "Um sistema de detecção de intrusão desenhado especificamente para as vulnerabilidades mais comuns encontradas em sites institucionais angolanos. Protege contra SQL Injection e ataques de força bruta rudimentares.",
    stats: { upvotes: 45, downvotes: 12, likes: 67, shares: 12 },
  },
  {
    id: "8",
    author: {
      username: "@startup_flow",
      role: "Product Manager",
      avatar_color: "#3857e5",
    },
    tags: ["Open Source", "CRM", "Sass"],
    contributors: [{ id: "c14", avatar_color: "#e5384b" }],
    posted_at: "há 2d",
    tag: "Produto",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    ],
    title: "Kuzola: O ERP para Gestão de Organizações Sem Fins Lucrativos",
    description:
      "Kuzola permite gerir doadores, voluntários e stock de donativos de forma transparente. Construído com Go e PostgreSQL para aguentar grandes picos de acesso durante campanhas nacionais de solidariedade.",
    stats: { upvotes: 134, downvotes: 1, likes: 230, shares: 98 },
  },
  {
    id: "9",
    author: {
      username: "@blockchain_ao",
      role: "Web3 Architect",
      avatar_color: "#fdbb2d",
    },
    tags: ["Web3", "Blockchain", "Identity"],
    contributors: [
      { id: "c15", avatar_color: "#b7e538" },
      { id: "c16", avatar_color: "#e5384b" },
    ],
    posted_at: "há 3d",
    tag: "Blockchain",
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    ],
    title: "IdentidadeDigital: SSI para Estagiários Angolanos",
    description:
      "Proof of concept de identidade soberana descentralizada. Permite que universidades emitam certificados digitais de estágio verificáveis na blockchain, eliminando a burocracia de carimbos físicos.",
    stats: { upvotes: 67, downvotes: 23, likes: 45, shares: 10 },
  },
  {
    id: "10",
    author: {
      username: "@health_stack",
      role: "Health IT Specialist",
      avatar_color: "#38e5e1",
    },
    tags: ["Healthcare", "Dicom", "Python"],
    contributors: [{ id: "c17", avatar_color: "#3857e5" }],
    posted_at: "há 3d",
    tag: "Saúde",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    ],
    title: "DoutorAO: Triagem Offline Baseada em Sintomas",
    description:
      "Uma aplicação PWA que funciona sem internet para ajudar enfermeiros em centros de saúde remotos a fazer uma triagem rápida. Inclui base de dados local sobre doenças endémicas nacionais.",
    stats: { upvotes: 210, downvotes: 1, likes: 450, shares: 178 },
  },
  {
    id: "11",
    author: {
      username: "@gis_master",
      role: "Cartographer",
      avatar_color: "#97ef38",
    },
    tags: ["Maps", "GIS", "Geography"],
    contributors: [],
    posted_at: "há 4d",
    tag: "Mapeamento",
    images: [
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
    ],
    title: "RuaAberta: Mapeamento Comunitário dos Musseques",
    description:
      "Projecto colaborativo para mapear ruas sem nome formal nos distritos urbanos de Luanda. Utiliza OpenStreetMap e contribuições via Telegram para localizar pontos de interesse e serviços básicos.",
    stats: { upvotes: 189, downvotes: 4, likes: 320, shares: 120 },
  },
  {
    id: "12",
    author: {
      username: "@game_dev_ao",
      role: "Game Designer",
      avatar_color: "#ef38ca",
    },
    tags: ["Unity", "Game Dev", "Culture"],
    contributors: [{ id: "c18", avatar_color: "#38e5b7" }],
    posted_at: "há 5d",
    tag: "Gaming",
    images: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    ],
    title: "O Desafio da Samanhonga: RPG Baseado em Mitos Angolanos",
    description:
      "Um RPG tático que ensina provérbios angolanos enquanto o jogador viaja por cenários baseados na Serra da Leba e Quedas de Kalandula. O código para o sistema de combate está aberto para a comunidade.",
    stats: { upvotes: 345, downvotes: 2, likes: 671, shares: 204 },
  },
  {
    id: "13",
    author: {
      username: "@linux_user",
      role: "System Admin",
      avatar_color: "#3e38ef",
    },
    tags: ["Linux", "Desktop", "Customization"],
    contributors: [],
    posted_at: "há 1 sem",
    tag: "OS",
    images: [
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800",
    ],
    title: "PaloOS: Customização Linux focada em Estabilidade",
    description:
      "Apresentamos o PaloOS, um 'skin' para Debian que pré-configura drivers comuns de modems USB usados em Angola e optimiza o consumo de dados móveis para updates de sistema.",
    stats: { upvotes: 56, downvotes: 12, likes: 89, shares: 34 },
  },
  {
    id: "14",
    author: {
      username: "@eco_coder",
      role: "Sustainability Eng",
      avatar_color: "#38ef4e",
    },
    tags: ["GreenTech", "Waste", "App"],
    contributors: [{ id: "c19", avatar_color: "#e5a038" }],
    posted_at: "há 1 sem",
    tag: "Meio Ambiente",
    images: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    ],
    title: "ReciclaAO: Onde Deitar o seu Lixo?",
    description:
      "Liga cidadãos a cooperativas de reciclagem em Luanda. Mapas de pontos de recolha selectiva e sistema de pontos que podem ser trocados por saldo de recarga telefónica.",
    stats: { upvotes: 278, downvotes: 3, likes: 567, shares: 145 },
  },
  {
    id: "15",
    author: {
      username: "@art_meets_tech",
      role: "Multimedia Artist",
      avatar_color: "#ef9e38",
    },
    tags: ["WebAudio", "Music", "JavaScript"],
    contributors: [],
    posted_at: "há 2 sem",
    tag: "Arte",
    images: [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    ],
    title: "BatidaJS: Drum Machine de Semba em JavaScript",
    description:
      "Um sintetizador web simples que utiliza samples de instrumentos tradicionais como o dikanza e o hungu. Permite criar beats de semba e kizomba directamente no browser e exportar como MIDI.",
    stats: { upvotes: 145, downvotes: 5, likes: 230, shares: 67 },
  },
  {
    id: "16",
    author: {
      username: "@legal_tech",
      role: "Lawyer & Coder",
      avatar_color: "#3857e5",
    },
    tags: ["Legal", "Contract", "Automation"],
    contributors: [{ id: "c20", avatar_color: "#e5384b" }],
    posted_at: "há 2 sem",
    tag: "Direito",
    images: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    ],
    title: "AngoLaw: Repositório de Modelos de Contrato Open Source",
    description:
      "Cansado de pagar fortunas por minutas básicas? O AngoLaw oferece modelos de contratos de prestação de serviços, arrendamento e NDAs adaptados à legislação vigente em Angola.",
    stats: { upvotes: 560, downvotes: 2, likes: 980, shares: 740 },
  },
  {
    id: "17",
    author: {
      username: "@mobile_king",
      role: "Flutter Developer",
      avatar_color: "#38a9e5",
    },
    tags: ["Flutter", "Dart", "UX"],
    contributors: [],
    posted_at: "há 3 sem",
    tag: "Mobile",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    ],
    title: "AngoBus: Onde Está o Próximo Autocarro?",
    description:
      "Aplicativo para gerir horários e rotas dos autocarros públicos em Luanda. Inclui um sistema comunitário de report de trânsito e lotação em tempo real.",
    stats: { upvotes: 890, downvotes: 11, likes: 1200, shares: 350 },
  },
  {
    id: "18",
    author: {
      username: "@hardware_fan",
      role: "Maker",
      avatar_color: "#e57d38",
    },
    tags: ["Arduino", "Hardware", "Solar"],
    contributors: [{ id: "c21", avatar_color: "#38e57a" }],
    posted_at: "há 3 sem",
    tag: "Hardware",
    images: [
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=800",
    ],
    title: "SunChargerAO: Carregador Solar DIY de Baterias",
    description:
      "Esquema eléctrico e código Arduino para construir um carregador de baterias solar usando componentes reciclados de computadores antigos. Ideal para zonas sem rede eléctrica.",
    stats: { upvotes: 145, downvotes: 2, likes: 210, shares: 56 },
  },
  {
    id: "19",
    author: {
      username: "@kizomba_dev",
      role: "Web Developer",
      avatar_color: "#e538c4",
    },
    tags: ["E-commerce", "Shopify", "Local"],
    contributors: [],
    posted_at: "há 1 mês",
    tag: "E-commerce",
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    ],
    title: "DikanzaShop: Marketplace de Artesanato Angolano",
    description:
      "Conectamos artesãos da Ilha do Mussulo com compradores internacionais. O projecto foca em logística de exportação simplificada e pagamentos via PayPal integrados com bancos nacionais.",
    stats: { upvotes: 120, downvotes: 1, likes: 190, shares: 43 },
  },
  {
    id: "20",
    author: {
      username: "@open_gov_ao",
      role: "Data Advocate",
      avatar_color: "#38c9e5",
    },
    tags: ["Transparency", "Data", "Dashboard"],
    contributors: [
      { id: "c22", avatar_color: "#e5a038" },
      { id: "c23", avatar_color: "#e5384b" },
    ],
    posted_at: "há 1 mês",
    tag: "Transparência",
    images: [
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
    ],
    title: "AngoBudget: Onde Vaio o Nosso Orçamento?",
    description:
      "Plataforma de visualização de dados do Orçamento Geral do Estado (OGE). Transforma tabelas complexas do PDF oficial em gráficos interactivos e fáceis de entender pelo cidadão comum.",
    stats: { upvotes: 950, downvotes: 15, likes: 2100, shares: 1200 },
  },
];
