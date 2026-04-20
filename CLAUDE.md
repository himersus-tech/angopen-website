Vou dividir em dois diagramas para ficar legível: primeiro o mapa de funcionalidades, depois o modelo de dados.Agora o modelo de dados — as tabelas principais com os campos essenciais de cada uma.---

### As 4 novas ideias que valem mais a pena implementar

**Badges e sistema de XP** — cada acção na plataforma ganha pontos: publicar um projecto, colaborar, comentar, participar num evento. O dev sobe de nível e ganha badges visíveis no perfil ("Primeiro Projecto", "5 Colaborações", "Hackathon 2025"). Cria vício saudável e incentiva actividade contínua. É a tabela `badges` + campo `xp_points` na `users`.

**Mentoria** — devs seniores marcam-se como mentores, disponíveis numa área específica. Devs júniores enviam pedido de mentoria. A relação fica registada com sessões feitas e área de foco. É a funcionalidade que nenhuma plataforma angolana tem e que cria valor real para quem está a começar.

**Showcase semanal** — todo sábado, um projecto é destacado na homepage. Pode ser votado pela comunidade ou curado manualmente. Dá visibilidade a projectos bons e cria um ritual semanal que traz devs de volta à plataforma.

**Blog / newsletter da comunidade** — artigos escritos por devs angolanos, curados pela Angopen. "Como construí X em Angola", "Stack que uso no dia-a-dia em Luanda". Gera SEO, credibilidade e torna a Angopen uma fonte de conhecimento, não só uma rede social.

### Enums importantes para definir já

Na tabela `posts`, o campo `type` deve suportar: `project_update`, `open_question`, `achievement`, `job_share`, `event_share`. Na tabela `jobs`, o `type`: `full_project`, `task`, `internship`. No `status` das colaborações: `pending`, `accepted`, `rejected`, `active`, `completed`.

Queres avançar para o schema SQL completo no Supabase ou para o sistema de XP e ranking em detalhe?