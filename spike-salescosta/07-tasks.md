# 07. Tasks · Checklist de Desenvolvimento e Implementação

> **Spike de Solução:** Landing Page — Sales Costa Advogados  
> **Data:** 2026-08-31  
> **Status:** Pronto para Execução  
> **Estimativa de Fases:** 7 Épicos de Desenvolvimento

---

## 1. Visão Geral da Roadmap de Tarefas

O plano de execução está estruturado em 7 épicos sequenciais. Cada tarefa especifica seus arquivos-alvo, critérios de aceitação e verificações necessárias.

---

## 2. Épico 1: Setup do Projeto & Design System Tokens (Dia 1)

- [ ] **Task 1.1 — Estruturação de Pastas e Arquivos Base**
  - **Arquivos:** `index.html`, `css/reset.css`, `css/variables.css`, `css/components.css`, `css/sections.css`, `js/main.js`, `js/animations.js`
  - **Descrição:** Criar a árvore de diretórios e arquivos em branco no projeto.
  - **Aceite:** Todos os arquivos criados e vinculados no `index.html`.

- [ ] **Task 1.2 — Definição dos Design Tokens (`css/variables.css`)**
  - **Arquivos:** `css/variables.css`
  - **Descrição:** Declarar as variáveis CSS para cores (`--color-primary`, `--color-dark`, `--color-accent`, etc.), tipografia (`--font-serif`, `--font-sans`), espaçamentos (`--space-xs` a `--space-2xl`) e transições.
  - **Aceite:** Todas as variáveis acessíveis globalmente no `:root`.

- [ ] **Task 1.3 — Reset CSS e Integração Google Fonts**
  - **Arquivos:** `index.html`, `css/reset.css`
  - **Descrição:** Configurar reset CSS de caixa (`box-sizing: border-border`) e importar `Cormorant Garamond` + `DM Sans` via CDN.
  - **Aceite:** Fontes renderizando corretamente sem FOUT (*Flash of Unstyled Text*).

- [ ] **Task 1.4 — Favicon e Meta Tags SEO**
  - **Arquivos:** `index.html`, `images/260701_sales_costa_marca_BRASAO_COR_temp.png`
  - **Descrição:** Adicionar tag `<link rel="icon">` e meta tags de viewport, descrição e Open Graph.
  - **Aceite:** Ícone exibido na aba do navegador e meta tags presentes no `<head>`.

---

## 3. Épico 2: Header & Sticky Navigation (Dia 1-2)

- [ ] **Task 2.1 — Marcação Semântica da Navbar**
  - **Arquivos:** `index.html`
  - **Descrição:** Criar elemento `<header class="navbar">` contendo o logo em `<img>`, lista de links `<nav>` e botão CTA "Fale Conosco".
  - **Aceite:** Estrutura HTML limpa e semântica.

- [ ] **Task 2.2 — Estilização da Navbar (Transparente x Dark Scrolled)**
  - **Arquivos:** `css/components.css`
  - **Descrição:** Estilizar a navbar fixa (`position: fixed`) com transparência inicial e transição para background `#53565A` na classe `.scrolled`.
  - **Aceite:** Navbar fixa no topo com transição de cor de 300ms.

- [ ] **Task 2.3 — JavaScript da Sticky Navbar**
  - **Arquivos:** `js/main.js`
  - **Descrição:** Escrever listener de scroll para alternar a classe `.scrolled` quando `window.scrollY > 80`.
  - **Aceite:** Alternância automática de classe ao rolar a página.

- [ ] **Task 2.4 — Drawer e Hambúrguer Mobile**
  - **Arquivos:** `index.html`, `css/components.css`, `js/main.js`
  - **Descrição:** Desenvolver o botão hambúrguer visível em `< 1024px` e o painel de navegação lateral com animação de slide.
  - **Aceite:** Menu mobile abre/fecha com suporte a atributo `aria-expanded`.

- [ ] **Task 2.5 — Script de Smooth Scroll por Âncoras**
  - **Arquivos:** `js/main.js`
  - **Descrição:** Interceptar cliques em `a[href^="#"]` para rolar suavemente a página com compensação da altura da navbar (80px).
  - **Aceite:** Clique nos links de navegação leva exatamente à seção correspondente.

---

## 4. Épico 3: Hero Banner Section (Dia 2)

- [ ] **Task 3.1 — Estrutura HTML do Hero**
  - **Arquivos:** `index.html`
  - **Descrição:** Criar `<section id="hero">` com eyebrow tag, H1 "Junto nas decisões que constroem o futuro.", subtítulo e dupla de botões CTA.
  - **Aceite:** Conteúdo textual completo na marcação.

- [ ] **Task 3.2 — Estilização Visual e Overlay Dark**
  - **Arquivos:** `css/sections.css`
  - **Descrição:** Definir altura de `100vh`, background `#53565A` com overlay, H1 em `Cormorant Garamond 64px` na cor branca.
  - **Aceite:** Layout refinado com alto contraste de leitura.

- [ ] **Task 3.3 — Estilização dos Botões CTA**
  - **Arquivos:** `css/components.css`
  - **Descrição:** Estilizar botão primário (preenchimento Taupe `#AA9B8F`) e botão secundário (vazado com `border: 1px solid #AA9B8F` e uppercase com letter-spacing).
  - **Aceite:** Hover states fluidos nos botões.

- [ ] **Task 3.4 — Seta Animada de Scroll**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Criar indicador de scroll no rodape da hero section com animação CSS `@keyframes bounce`.
  - **Aceite:** Seta pulsando suavemente e levando à seção "Sobre" ao ser clicada.

---

## 5. Épico 4: Seções Institucionais — Sobre & Diferenciais (Dia 2-3)

- [ ] **Task 4.1 — Seção "Sobre o Escritório"**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Montar layout em 2 colunas (40% / 60%) em fundo Off-White `#F8F6F4`, com parágrafos institucionais, linha divisória Taupe e os 3 pilares da marca.
  - **Aceite:** Layout responsivo colapsando para 1 coluna no mobile.

- [ ] **Task 4.2 — Seção "Por Que Sales Costa" (Diferenciais)**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Criar seção com fundo Dark `#53565A`, eyebrow em cor Lima `#E4FF8F` e grid de 4 diferenciais com ícones em SVG.
  - **Aceite:** Grid 4 colunas no desktop e 1 coluna no mobile.

---

## 6. Épico 5: Módulos Funcionais Interativos (Dia 3-4)

- [ ] **Task 5.1 — Seção "Áreas de Atuação" (Cards Grid)**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Criar grid de 6 cards de especialidades com ícone, título, descrição e link "Saiba mais".
  - **Aceite:** Hover state nos cards elevando a borda inferior em Taupe `#AA9B8F`.

- [ ] **Task 5.2 — Seção "Em Números" (Contadores JS)**
  - **Arquivos:** `index.html`, `css/sections.css`, `js/animations.js`
  - **Descrição:** Criar banner com fundo Taupe `#AA9B8F` e 4 contadores numéricos. Escrever script de counter-up animado disparado ao entrar na tela.
  - **Aceite:** Números contam de 0 até o valor alvo em ~2 segundos.

- [ ] **Task 5.3 — Seção "Depoimentos" (Carousel)**
  - **Arquivos:** `index.html`, `css/sections.css`, `js/main.js`
  - **Descrição:** Desenvolver carousel funcional de depoimentos em fundo Off-White com aspas decorativas, controle por setas e autoplay de 5 segundos.
  - **Aceite:** Transição suave entre depoimentos com pausa no hover.

- [ ] **Task 5.4 — Seção "Nossa Equipe" (Cards de Advogados)**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Construir grid de 4 cards de advogados com imagem 1:1, nome, registro OAB e link para o LinkedIn.
  - **Aceite:** Overlay sutil na foto ao passar o cursor.

---

## 7. Épico 6: Formulário de Contato & Rodapé (Dia 4-5)

- [ ] **Task 6.1 — Seção "Fale Conosco" (Formulário Minimalista)**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Desenvolver layout 2 colunas com dados de contato à esquerda e formulário com inputs de linha fina (`border-bottom`) à direita.
  - **Aceite:** Estilização alinhada à estética da marca.

- [ ] **Task 6.2 — Script de Validação e Feedback do Formulário**
  - **Arquivos:** `js/main.js`
  - **Descrição:** Implementar validação HTML5 nativa + JavaScript para checagem de campos obrigatórios e exibição de alerta/mensagem de sucesso.
  - **Aceite:** Envio bloqueado para campos vazios ou e-mails em formato inválido.

- [ ] **Task 6.3 — Rodapé Institucional**
  - **Arquivos:** `index.html`, `css/sections.css`
  - **Descrição:** Montar rodapé em fundo `#2B2B2B` com logo claro, links institucionais, copyright e redes sociais.
  - **Aceite:** Todos os links operacionais e responsivos.

---

## 8. Épico 7: Polimento, Animações & Qualidade (Dia 5-6)

- [ ] **Task 7.1 — Animações com Intersection Observer**
  - **Arquivos:** `js/animations.js`, `css/sections.css`
  - **Descrição:** Adicionar atributo `data-animate` nos elementos principais e aplicar efeito de fade-in e subida (`translateY(30px) -> 0`).
  - **Aceite:** Elementos surgem suavemente à medida que a página é rolada.

- [ ] **Task 7.2 — Suporte a `prefers-reduced-motion`**
  - **Arquivos:** `css/sections.css`
  - **Descrição:** Adicionar media query para desativar animações caso o usuário prefira movimentos reduzidos no sistema operacional.
  - **Aceite:** Animações são desativadas instantaneamente sob a media query.

- [ ] **Task 7.3 — Auditoria e Otimização Google Lighthouse**
  - **Arquivos:** Todos os arquivos do projeto
  - **Descrição:** Executar o Lighthouse no Chrome DevTools e resolver apontamentos de performance, acessibilidade e SEO.
  - **Aceite:** Notas $\ge 90$ nas categorias Performance, Acessibilidade e SEO.
