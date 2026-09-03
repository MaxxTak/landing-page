# Task Breakdown — US-01: Hero Banner & Proposta de Valor

> **SPEC de Referência:** [`SPEC-US-01-hero-banner.md`](../SPEC-US-01-hero-banner.md)  
> **Componente:** Componente 1 (Navbar Sticky & Hero Banner)  
> **Target Files:** `index.html`, `css/components.css`, `css/sections.css`, `js/main.js`

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir estrutura `<header class="header">` com `<nav>` e `<aside id="nav-drawer">`, e a `<section id="hero">`. |
| `css/components.css` | **[MODIFY]** | Adicionar estilos da `.navbar`, `.btn`, `.btn--primary`, `.btn--outline`, `.navbar__hamburger` e `.nav-drawer`. |
| `css/sections.css` | **[MODIFY]** | Adicionar estilos da `.hero`, `.hero__eyebrow`, `.hero__title`, `.hero__subtitle` e `.hero__scroll-indicator`. |
| `js/main.js` | **[MODIFY]** | Implementar lógica de sticky navbar (`window.scrollY > 80`), toggle do drawer mobile e scroll suave com offset de 80px. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, crie a tag `<header class="header">` contendo o logo `SALES COSTA`, o menu desktop (`<ul class="navbar__menu">`), o botão hambúrguer mobile e o elemento `<aside id="nav-drawer">`.
- Em seguida, adicione o bloco `<section id="hero">` com a eyebrow `SALES COSTA ADVOGADOS`, o título H1 `Junto nas decisões que constroem o futuro.`, o subtítulo e a dupla de botões CTA (*Conheça o escritório* e *Fale conosco*).

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/components.css`, defina a `.navbar` fixa com `height: 80px` e transição de fundo.
- Estilize os botões `.btn` com `min-height: 48px`, garantindo área de toque confortável.
- Estilize o `.nav-drawer` com `position: fixed; right: 0; width: 280px; transform: translateX(100%)` e transição suave.
- Em `css/sections.css`, configure `.hero` com `min-height: 100vh`, `background-color: var(--color-dark)` e a tipografia fluida H1 via `font-size: var(--text-hero)`.

### Passo 3: Comportamento JavaScript
- Em `js/main.js`, adicione escutador de `scroll` para alternar a classe `.navbar--scrolled` quando `window.scrollY > 80`.
- Adicione evento de clique no hambúrguer para abrir o `.nav-drawer` alterando `aria-expanded` e aplicando a classe `.nav-drawer--active`.
- Adicione manipulador de clique para todos os links `a[href^="#"]` para aplicar `window.scrollTo()` suave compensando a altura de 80px do header.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** O H1 *"Junto nas decisões que constroem o futuro."* é exibido com destaque sem quebra ou sobreposição em viewports de 320px a 2560px.
- [ ] **[CA-02]** O clique no botão *"Fale conosco →"* faz a rolagem suave até `#contato` compensando 80px da navbar.
- [ ] **[CA-03]** Em telas móveis (< 1024px), o menu colapsa no botão hambúrguer (área tátil $\ge 44\times 44\text{px}$) e os CTAs ficam empilhados a 100% de largura.
- [ ] **[A11y]** O botão hambúrguer atualiza o atributo `aria-expanded` entre `true` e `false`.
- [ ] **[Performance]** Fontes serifadas/sans-serif possuem `<link rel="preconnect">` e `font-display: swap`.
