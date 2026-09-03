# Task Breakdown — US-01: Hero Banner & Proposta de Valor

> **SPEC de Referência:** [`SPEC-US-01-hero-banner.md`](../SPEC-US-01-hero-banner.md)  
> **Componente:** Componente 1 (Navbar Sticky & Hero Banner)  
> **Target Files:** `index.html`, `css/components.css`, `css/sections.css`, `js/main.js`, `assets/`  
> **Fase 0 (pré-requisito):** `css/reset.css` + `css/variables.css` (design tokens; fonte única Montserrat).  
> **Atualização (Fase 24):** o hero virou **banner rotativo de 3 telas** (gradiente da marca → foto SP → foto Floripa), crossfade suave, giro automático a cada 4 s. Ver `SPEC-US-01` §1.3 / §3 / §4.

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir estrutura `<header class="header">` com `<nav>` e `<aside id="nav-drawer">`, e a `<section id="hero">`. |
| `css/components.css` | **[MODIFY]** | Adicionar estilos da `.navbar`, `.btn`, `.btn--primary`, `.btn--outline`, `.navbar__hamburger` e `.nav-drawer`. |
| `css/sections.css` | **[MODIFY]** | Adicionar estilos da `.hero`, `.hero__eyebrow`, `.hero__title`, `.hero__subtitle` e `.hero__scroll-indicator`. |
| `js/main.js` | **[MODIFY]** | Sticky navbar (`window.scrollY > 80`), toggle do drawer mobile, scroll suave com offset de 80px, e `initHeroCarousel()` (banner rotativo 3 telas / 4 s / crossfade / pausa no hover-foco-aba / guard reduced-motion). |
| `assets/` | **[ADD]** | `logo_salescosta.png`, `logo_s_background.png`, `banner_saopaulo.png` (1280×720), `banner_floripa.png` (1280×720). |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, crie a tag `<header class="header">` contendo o logo (`<img class="navbar__logo-img" src="assets/logo_salescosta.png" alt="">` dentro do `<a class="navbar__logo">`), o menu desktop (`<ul class="navbar__menu">`), o botão hambúrguer mobile e o elemento `<aside id="nav-drawer">` (com `<img class="nav-drawer__logo-img">` no header do drawer).
- Em seguida, adicione o bloco `<section id="hero">` iniciando pelo fundo rotativo `<div class="hero__bg" aria-hidden="true">` com 3 `.hero__slide`: `--brand` (contendo `<img class="hero__watermark" src="assets/logo_s_background.png" alt="">`), `--sp` e `--floripa`. Depois o `.hero__container` > `.hero__content` com a eyebrow `SALES COSTA ADVOGADOS`, o H1 `Junto nas decisões que constroem o futuro.`, o subtítulo e a dupla de CTAs (*Conheça o escritório* / *Fale conosco*), seguido do `.hero__scroll-indicator`.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/components.css`, defina a `.navbar` fixa com `height: 80px` e transição de fundo.
- Estilize os botões `.btn` com `min-height: 48px`, garantindo área de toque confortável.
- Estilize o `.nav-drawer` com `position: fixed; right: 0; width: 280px; transform: translateX(100%)` e transição suave.
- Em `css/sections.css`, configure `.hero` com `min-height: 100vh`, `background-color: var(--hero-grad-bottom)` (fallback) e a tipografia fluida H1 via `font-size: var(--text-hero)`.
- **Fundo rotativo:** `.hero__bg { position: absolute; inset: 0; z-index: 0 }`; `.hero__slide { position: absolute; inset: 0; opacity: 0; transition: opacity 1.2s ease-in-out }` → `.hero__slide.is-active { opacity: 1 }`. `.hero__slide--brand` recebe o degradê `#4D4F52 → #3B3636`; `.hero__slide--photo { background-size: cover; background-position: center }` com `.hero__slide--sp` / `.hero__slide--floripa` apontando para `url('../assets/banner_*.png')`. Overlay `.hero__slide--photo::after` com degradê `rgba(0,0,0,0.12) → 0.40 (45%) → 0.75`. Em `@media (prefers-reduced-motion: reduce)`, `.hero__slide { transition: none }`.

### Passo 3: Comportamento JavaScript
- Em `js/main.js`, adicione escutador de `scroll` para alternar a classe `.navbar--scrolled` quando `window.scrollY > 80`.
- Adicione evento de clique no hambúrguer para abrir o `.nav-drawer` alterando `aria-expanded` e aplicando a classe `.nav-drawer--active`.
- Adicione manipulador de clique para todos os links `a[href^="#"]` para aplicar `window.scrollTo()` suave compensando a altura de 80px do header.
- **`initHeroCarousel()`:** pega os `.hero__slide`; se `prefers-reduced-motion`, fixa `.is-active` no índice 0 e retorna. Senão, `setInterval(4000)` chamando `goTo(current + 1)` (remove/adiciona `.is-active` com wrap por módulo). `stop()`/`start()` em `mouseenter`/`mouseleave`, `focusin`/`focusout` do `.hero` e em `visibilitychange` (`document.hidden`). Bootstrap por `document.readyState`.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** O H1 *"Junto nas decisões que constroem o futuro."* é exibido com destaque sem quebra ou sobreposição em viewports de 320px a 2560px.
- [ ] **[CA-02]** O clique no botão *"Fale conosco →"* faz a rolagem suave até `#contato` compensando 80px da navbar.
- [ ] **[CA-03]** Em telas móveis (< 1024px), o menu colapsa no botão hambúrguer (área tátil $\ge 44\times 44\text{px}$) e os CTAs ficam empilhados a 100% de largura.
- [ ] **[A11y]** O botão hambúrguer atualiza o atributo `aria-expanded` entre `true` e `false`.
- [ ] **[Performance]** A fonte **Montserrat** é carregada com `<link rel="preconnect">` (googleapis + gstatic) e `display=swap`.
- [ ] **[Assets]** `assets/logo_salescosta.png` renderiza na navbar a `18px` (mobile) / `22px` (≥1024px); `assets/logo_s_background.png` aparece como marca d'água da Tela 1 (`opacity 0.3`, ancorada à direita, proporção preservada, clipada por `overflow: hidden`); `banner_saopaulo.png` / `banner_floripa.png` carregam nas Telas 2 e 3.
- [ ] **[Estilo]** "Fale conosco" no menu (e no drawer) tem o mesmo peso visual do `.btn--primary` (fundo Taupe, borda, radius 4px).
- [ ] **[Estilo]** Conteúdo do `.hero__content` centralizado horizontalmente (`text-align: center`; título/subtítulo com `margin-inline: auto`; CTAs centralizados).
- [ ] **[Estilo]** `.hero__eyebrow` na cor Lima (`--color-lima`); `.hero__title` com `font-weight: 800` (peso 800 presente no `<link>` do Google Fonts).
- [ ] **[Estilo]** Tela 1 (`.hero__slide--brand`) com **degradê linear vertical** `#4D4F52` (topo) → `#3B3636` (base) via `--hero-grad-top` / `--hero-grad-bottom`.
- [ ] **[Estilo]** `.hero__scroll-indicator` posicionado na **base do hero** (`bottom: 24px`, `z-index: 2`) — não sobrepõe os CTAs; permanece visível nas 3 telas.
- [ ] **[CA-04]** Banner gira 1→2→3→1 a cada 4 s com crossfade suave; `.hero__content` (eyebrow/título/subtítulo/CTAs) fixo nas 3 telas; Telas 2 e 3 com overlay escurecendo para baixo; pausa no hover/foco; congela na Tela 1 com `prefers-reduced-motion`.
