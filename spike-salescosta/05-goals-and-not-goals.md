# 05. Goals & Not Goals · Objetivos, Não-Objetivos e Critérios

> **Spike de Solução:** Landing Page — Sales Costa Advogados  
> **Data:** 2026-08-31  
> **Status:** Concluído / Pronto para Implementação

---

## 1. Objetivos do Projeto (Goals)

O escopo principal contemplado nesta solução inclui:

- [x] **Identidade Visual Fiel e Elegante:** Implementar uma landing page que traduza a identidade corporativa do escritório Sales Costa Advogados utilizando as cores oficiais (Taupe `#AA9B8F`, Cinza Chumbo `#53565A`, Lima `#E4FF8F`) e tipografia refinada (`Cormorant Garamond` e `DM Sans`).
- [x] **Arquitetura One-Page Fluida:** Estruturar uma única página com 10 seções altamente coesas e navegação por ancoragem sem recarregamento da página.
- [x] **Sticky Navbar Inteligente:** Desenvolver barra de navegação responsiva com alteração de background ao scroll (transparente para dark).
- [x] **Interações e Micro-Animações:** Incorporar animações de entrada ao scroll (*reveal on scroll* via Intersection Observer), contadores numéricos animados e carousel de depoimentos.
- [x] **Design Totalmente Responsivo:** Garantir adaptação perfeita em dispositivos móveis (320px), tablets (768px) e monitores wide (1280px+).
- [x] **Alta Performance e SEO Nativo:** Construir uma solução leve (HTML/CSS/JS Vanilla) que alcance nota máxima nos testes de performance do Google Lighthouse e suporte tags Open Graph/meta SEO.

---

## 2. Não-Objetivos (Not Goals / Fora de Escopo da V1)

Para evitar desvio de escopo (*scope creep*), os seguintes itens estão **explicitamente fora do escopo desta versão**:

- [ ] **Desenvolvimento de Painel CMS / Gestor de Conteúdo:** Não haverá painel administrativo nesta fase (conteúdo é estático e gerenciado via código).
- [ ] **Blog Corporativo ou Área de Artigos:** Módulos de notícias ou artigos jurídicos não fazem parte do MVP.
- [ ] **Suporte Multi-Idioma (i18n):** A versão inicial será entregue exclusivamente em Língua Portuguesa (PT-BR).
- [ ] **Área de Cliente / Portal Restrito:** Não haverá sistema de autenticação, login de clientes ou consulta de processos.
- [ ] **Redesenho de Marcas ou Logos:** A spike utiliza as imagens provisórias existentes e não prevê alteração na identidade gráfica oficial da marca.

---

## 3. Mapeamento de User Stories

| Código | História de Usuário (User Story) | Seção Relacionada |
|---|---|---|
| **US-01** | Como potencial cliente, quero visualizar imediatamente o posicionamento do escritório no Hero Banner para entender a proposta de valor. | Hero Banner |
| **US-02** | Como visitante, quero navegar pelas seções da página através de links de ancoragem na navbar para acessar dados específicos rapidamente. | Navbar Sticky |
| **US-03** | Como cliente corporativo, quero conhecer a história e os valores do escritório para avaliar sua reputação e autoridade. | Sobre o Escritório |
| **US-04** | Como visitante, quero visualizar a lista de áreas de atuação com descrições objetivas para saber se o escritório atende à minha necessidade. | Áreas de Atuação |
| **US-05** | Como visitante, quero observar os números e depoimentos de outros clientes para obter prova social antes de entrar em contato. | Em Números / Depoimentos |
| **US-06** | Como potencial cliente, quero consultar o perfil dos advogados e sócios para identificar a equipe responsável. | Nossa Equipe |
| **US-07** | Como usuário em dispositivo móvel, quero enviar uma mensagem pelo formulário de contato simplificado sem sair da página. | Fale Conosco |
| **US-08** | Como visitante, quero acessar os canais oficiais de comunicação e redes sociais no rodapé da página. | Rodapé |

---

## 4. Critérios de Aceitação e Metas de Qualidade

| Métrica / Critério | Meta Alvo | Método de Verificação |
|---|---|---|
| **Lighthouse Performance** | $\ge 90$ | Audit Chrome DevTools em ambiente de produção |
| **Lighthouse Acessibilidade** | $\ge 90$ | Audit Chrome DevTools (contraste, aria-labels, alt em imagens) |
| **Lighthouse SEO** | $\ge 90$ | Audit Chrome DevTools (meta tags, títulos H1-H3 semânticos) |
| **First Contentful Paint (FCP)** | $< 1.5\text{s}$ | Chrome Performance Profiler |
| **Layout Responsivo** | $100\%$ sem overflow horizontal | Testes em 320px, 480px, 768px, 1024px e 1440px |
| **Validação de Formulário** | Impede envio de campos obrigatórios vazios ou e-mails inválidos | Validação nativa HTML5 + JS |
