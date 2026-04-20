export const posts = [
  {
    id: "1",
    author: {
      username: "@msalembe",
      role: "Full Stack Developer",
      avatar_color: "#b7e538",
    },
    tags: ["Open Source", "React", "Node.js"],
    contributors: [
      { id: "c1", avatar_color: "#e5384b" },
      { id: "c2", avatar_color: "#38a9e5" },
      { id: "c3", avatar_color: "#e5a038" },
    ],
    posted_at: "há 2h",
    tag: "Open Source",
    images: [
      "https://i.pinimg.com/736x/64/83/e2/6483e2cb739e4f9ac22b4310a6d0bdf7.jpg",
    ],
    title: "Dravo - Gerenciador de Tarefas Open Source",
    description:
      "Projecto open source para gestão de tarefas, com foco em simplicidade e eficiência. O projeto é construído utilizando React para o frontend e Node.js para o backend, proporcionando uma experiência fluida e responsiva.",
    stats: {
      upvotes: 12,
      downvotes: 5,
      likes: 20,
      shares: 33,
    },
  },
  {
    id: "2",
    author: {
      username: "@jpcorreia",
      role: "Frontend Engineer",
      avatar_color: "#e53870",
    },
    images: [
      "https://i.pinimg.com/736x/64/83/e2/6483e2cb739e4f9ac22b4310a6d0bdf7.jpg",
    ],
    tags: ["Open Source", "React", "Tailwind CSS"],
    contributors: [
      { id: "c4", avatar_color: "#b7e538" },
      { id: "c5", avatar_color: "#9b38e5" },
    ],
    posted_at: "há 5h",
    tag: "Open Source",
    title: "FlowUI - Biblioteca de Componentes para React",
    description:
      "Uma biblioteca de componentes React minimalista e acessível, construída com Tailwind CSS. Inclui mais de 40 componentes prontos a usar, com suporte a dark mode e temas personalizáveis.",
    stats: {
      upvotes: 47,
      downvotes: 2,
      likes: 89,
      shares: 14,
    },
  },
  {
    id: "3",
    images: [
      "https://i.pinimg.com/736x/64/83/e2/6483e2cb739e4f9ac22b4310a6d0bdf7.jpg",
    ],
    author: {
      username: "@anadsilva",
      role: "Backend Developer",
      avatar_color: "#38c9e5",
    },
    tags: ["API", "Node.js", "Security"],
    contributors: [
      { id: "c6", avatar_color: "#e5c438" },
      { id: "c7", avatar_color: "#e57d38" },
      { id: "c8", avatar_color: "#38e57a" },
      { id: "c9", avatar_color: "#3857e5" },
    ],
    posted_at: "há 1d",
    tag: "API",
    title: "NodeVault - Gestão Segura de Secrets em Node.js",
    description:
      "Solução simples e segura para gerir variáveis de ambiente e secrets em aplicações Node.js. Suporta encriptação AES-256, rotação automática de chaves e integração com Docker e CI/CD pipelines.",
    stats: {
      upvotes: 31,
      downvotes: 1,
      likes: 55,
      shares: 22,
    },
  },
  {
    id: "4",
    images: [
      "https://i.pinimg.com/736x/64/83/e2/6483e2cb739e4f9ac22b4310a6d0bdf7.jpg",
    ],
    author: {
      username: "@rkafumba",
      role: "DevOps Engineer",
      avatar_color: "#e5a038",
    },
    contributors: [
      { id: "c10", avatar_color: "#e53838" },
      { id: "c11", avatar_color: "#38e5c4" },
    ],
    tags: ["DevOps", "CI/CD", "Docker"],
    posted_at: "há 3d",
    tag: "DevOps",
    title: "DockerFlow - Templates de CI/CD para Projectos Next.js",
    description:
      "Conjunto de templates prontos para configurar pipelines de CI/CD com GitHub Actions, Docker e Vercel. Reduz o tempo de setup de horas para minutos, com suporte a preview deployments automáticos.",
    stats: {
      upvotes: 19,
      downvotes: 3,
      likes: 41,
      shares: 67,
    },
  },
  {
    id: "5",
    images: [
      "https://i.pinimg.com/736x/64/83/e2/6483e2cb739e4f9ac22b4310a6d0bdf7.jpg",
    ],
    author: {
      username: "@tmbanza",
      role: "Mobile Developer",
      avatar_color: "#9b38e5",
    },
    tags: ["Mobile", "React Native", "Expo"],
    contributors: [
      { id: "c12", avatar_color: "#e538d4" },
      { id: "c13", avatar_color: "#b7e538" },
      { id: "c14", avatar_color: "#38a9e5" },
    ],
    posted_at: "há 1sem",
    tag: "Mobile",
    title: "ReactNative Starter - Boilerplate com Expo e NativeWind",
    description:
      "Boilerplate completo para React Native com Expo, NativeWind, Zustand e React Query já configurados. Inclui autenticação com JWT, navegação com Expo Router e suporte a notificações push.",
    stats: {
      upvotes: 88,
      downvotes: 4,
      likes: 134,
      shares: 91,
    },
  },
];
