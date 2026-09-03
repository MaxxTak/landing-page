# Changelog — Landing Page Sales Costa Advogados

Registro das decisões e alterações de implementação.
Projeto **não versionado em git** — este arquivo é o histórico de auditoria.

- **Implementação:** `site/` (`index.html`, `css/`, `js/`, `assets/`)
- **Especificação:** `docs/specs/SPEC-US-*.md` + `docs/specs/tasks/TASK-US-*.md` (mantidas em sincronia com o `site/`)

---

## Estado atual

| Componente | Status | Seção |
|---|---|---|
| US-01 — Navbar & Hero | ✅ Implementado | `#hero` |
| US-02 — Comunicado ao Mercado | ✅ Implementado | `#comunicado` |
| US-03 — Sobre o Escritório | ✅ Implementado | `#sobre` |
| US-04 — Áreas de Atuação | ✅ Implementado | `#areas` |
| US-05 — Por Que Sales Costa | ✅ Implementado | `#diferenciais` |
| US-06 — Em Números | ✅ Implementado | `#numeros` |
| US-07 — Depoimentos | ✅ Implementado | `#depoimentos` |
| US-08 — Nossa Equipe | ✅ Implementado | `#equipe` |
| US-09 — Fale Conosco | ✅ Implementado | `#contato` |
| US-10 — Rodapé Institucional | ✅ Implementado | `#rodape` |

**Todas as 10 seções implementadas.**

**Ordem das seções no DOM:** hero → comunicado → sobre → areas → diferenciais → numeros → depoimentos → equipe → contato → **rodape** (`<footer>`)

### Decisões globais

- **Tipografia:** fonte **única Montserrat** (`--font-body` e `--font-display`). Sem serifada. Pesos carregados: `300;400;500;600;700;800` + `italic 400`.
- **Pasta de implementação:** `site/` (sobrescreveu a 1ª versão exploratória).
- **Fidelidade:** SPEC ao pé da letra, com microajustes documentados quando a spec estava incompleta (ex.: fade-in do Comunicado) ou conflitante (ex.: handler duplicado na US-04).
- **Assets** (`site/assets/`): `logo_salescosta.png` (520×44), `logo_s_background.png` (1634×2102), `logo_s_verde.png` (64×72), `marcador_verde.png` / `marcador_ciano.png` / `marcador_areia.png` (15×15), `advogado1.png` … `advogado4.png` (500×500 — fotos dos sócios, US-08), `banner_saopaulo.png` / `banner_floripa.png` (1280×720 — telas 2 e 3 do hero rotativo, US-01).

### Tokens de design relevantes (`site/css/variables.css`)

| Token | Valor | Uso |
|---|---|---|
| `--color-cyan` | `#3DD6D0` | Eyebrow da seção Sobre |
| `--hero-grad-top` / `--hero-grad-bottom` | `#4D4F52` / `#3B3636` | Degradê vertical do Hero |
| `--watermark-opacity` | `0.3` | Opacidade de todas as marcas d'água |
| `--eyebrow-tracking` | `3px` | `letter-spacing` de todos os eyebrows |
| `--color-lima` | `#E4FF8F` | Fundo da seção `#numeros` (Fase 17); acentos de texto (Hero, Comunicado, Diferenciais) |

---

## 2026-09-03

### 1. Comparação da base documental

- Reidentificado que `docs/index.html` foi atualizado após a leitura inicial:
  - Imagem de referência única `sales-costa-layout-previa.png` → **duas**: `sales-costa-layout1.png` (desktop, 1658×6400) + `sales-costa-layout1-mobi.png` (mobile, 420×10080).
  - Novos recortes mobile em `images/components/mobile/`.
  - Seção 06 (Visual Layout) reescrita como comparação Desktop | Mobile.
  - **Nova pasta `docs/specs/`** com 10 `SPEC-US-*.md` + `tasks/` (master plan + 10 `TASK-US-*.md`) — passou a ser o alvo de implementação.

### 2. Revisão por skills (1ª build)

- `modern-web-guidance` + `web-design-guidelines` aplicados à primeira versão: skip link, `scroll-margin-top`, `text-wrap: balance/pretty`, foco visível, `inert` + focus-trap no drawer, `overscroll-behavior: contain`, `touch-action`, `font-variant-numeric: tabular-nums`, correção de contraste, etc.

### 3. Specs como alvo + Fonte única + TASK-US-01

- **Fonte:** trocada para **Montserrat única** em `SPEC-US-01`…`SPEC-US-10` (§8), `00-master-execution-plan.md` e `TASK-US-01`.
- **Fase 0 (baseline):** criados `site/css/reset.css` + `site/css/variables.css` (tokens `--color-*`, `--font-*`, `--text-*`, `--section-pad-*`, `--container-max`, `--nav-height`).
- **TASK-US-01 implementada** (`site/`): `<header class="header">` + `<nav>` desktop + `<aside id="nav-drawer">` + `<section id="hero">`; sticky navbar (`scrollY > 80`), drawer com `aria-expanded`/`aria-hidden`, scroll suave `a[href^="#"]` com offset 80px.
- Arquivos: `index.html`, `css/{reset,variables,components,sections}.css`, `js/main.js`, `js/animations.js` (stub).

### 4. Caminho das imagens / logos

- Copiados para `site/assets/`: `logo_salescosta.png`, `logo_s_background.png`, `logo_s_verde.png`.
- **Navbar/drawer:** wordmark passou a `<img src="assets/logo_salescosta.png">` — `height: 18px` (mobile) / `22px` (≥1024px) / `20px` (drawer).
- **Hero:** `<img class="hero__watermark" src="assets/logo_s_background.png">` — ancorada à direita, sangrando topo/base, clipada por `overflow: hidden`.
- Specs atualizadas: `SPEC-US-01` (navbar + hero watermark), `SPEC-US-03` (`.sobre__watermark`), `SPEC-US-07` (`.testimonials-watermark`), `SPEC-US-10` (lockup de rodapé `logo_s_verde` + `logo_salescosta`; registrado como adição — o layout do rodapé não mostra logo).

### 5. Ajustes SPEC-US-01

- Item **"Fale conosco" no menu** (e no drawer) recebe o peso visual do `.btn--primary` (`.navbar__link--cta` / `.nav-drawer__link--cta`).
- **Conteúdo do hero centralizado horizontalmente** (`.hero__content { text-align: center }`; título/subtítulo `margin-inline: auto`; CTAs centralizados).
- **Eyebrow do hero** → cor **Lima** (`--color-lima`), era Taupe.
- **`.hero__title` `font-weight: 800`** — peso 800 adicionado ao `<link>` do Google Fonts (`SPEC-US-01` §8, `SPEC-US-03` §8, master plan).

### 6. Indicador de scroll + TASK-US-02

- **Correção:** `.hero__scroll-indicator` não ficava na base — `position: relative; z-index: 1` movido de `.hero__container` para `.hero__content`; indicador ganhou `z-index: 2`. Agora resolve contra o `.hero` (`bottom: 24px`).
- **TASK-US-02 implementada** (`site/`): `<section id="comunicado">` (eyebrow Lima, H2, 3 parágrafos + 2 `<blockquote>`); `IntersectionObserver` em `.comunicado__container` (`threshold: 0.2`) em `js/animations.js`.
- **Marca d'água "S" REMOVIDA da `SPEC-US-02`** (decisão de design) — §1 (características + diagrama), §2 (HTML), §3 (CSS), §5, §7 e §8 ajustados.
- **Fade-in adicionado à `SPEC-US-02`:** o JS da própria spec adicionava `.is-visible` sem o CSS correspondente — incluído `.comunicado__container` (`opacity: 0` → `.is-visible`) + `@media (prefers-reduced-motion)`.

### 7. Ajustes Hero + Comunicado

- **Hero:** fundo passou a **degradê linear vertical** `#4D4F52` (topo) → `#3B3636` (base) — tokens `--hero-grad-top` / `--hero-grad-bottom` em `variables.css`.
- **Comunicado — eyebrow:** adicionado o **marcador verde** (`assets/marcador_verde.png`, render 10×10) à esquerda de "COMUNICADO AO MERCADO"; `.comunicado__eyebrow` vira `inline-flex`.
- **Comunicado — título:** `.comunicado__title` `font-weight: 600` (era 400).
- **Comunicado — marca:** toda ocorrência de **"Sales Costa Advogados"** no texto da seção envolta em `<span class="comunicado__brand">` → `color: var(--color-lima)` (H2, P1, P3).
- Copiado `site/assets/marcador_verde.png`. Specs: `SPEC-US-01` §1/§3/§8, `SPEC-US-02` §1/§2/§3/§8, `TASK-US-01`/`TASK-US-02`.

### 8. TASK-US-03 (Sobre o Escritório)

- **Implementada** (`site/`): `<section id="sobre">` após `#comunicado` — `.sobre__watermark` (`logo_s_background.png`), coluna esquerda (H2 `id="sobre-heading"`), coluna direita (3 parágrafos + 3 pilares `Comprometimento`/`Confidencialidade`/`Excelência` com `data-delay`).
- Grid: 1 coluna (<768px) → pilares em linha (≥768px) → **2 colunas 40/60** (≥1024px, coluna esquerda `position: sticky` — adição da spec, confirmada).
- Divisores dos pilares `border-top: 1px solid #D9D3CE` (RN-01); `gap: 1rem` (RN-02); descrição em `font-style: italic`.
- `js/animations.js`: anexado o `IntersectionObserver` genérico de `.animate-fade-up` (SPEC-US-03 §4.2) com suporte a `data-delay`. Observer do Comunicado mantido separado (alvos distintos).
- Marca d'água em fundo claro: `filter: brightness(0)` + opacidade baixa.

### 9. Ajustes Sobre

- **Eyebrow "SOBRE"** acima do H2, cor **ciano `#3DD6D0`** (novo token `--color-cyan`), com o **marcador ciano** (`assets/marcador_ciano.png`, render 10×10) à esquerda.
- **`.sobre__headline` `font-weight: 600`** (era 400).
- **Opacidade da marca d'água → `0.3`** via novo token `--watermark-opacity`, aplicado a `.hero__watermark`, `.sobre__watermark` e `.testimonials-watermark` (SPEC-US-01 §3/§8, SPEC-US-03 §3/§8, SPEC-US-07 §3/§8).
- Copiado `site/assets/marcador_ciano.png`. Specs: `SPEC-US-03` §1/§2/§3/§6/§7/§8, `TASK-US-03`.

### 10. TASK-US-04 (Áreas de Atuação)

- **Implementada** (`site/`): `<section id="areas">` após `#sobre`, fundo Branco `#FFFFFF`. Header (eyebrow + H2) + `.areas__grid` com **6 `<article class="area-card">`** (ícone SVG linha fina + título + descrição).
- Grid: **1 → 2 (≥768px) → 3 colunas (≥1024px)**.
- Card: fundo `#F8F6F4`, `border-bottom: 2px transparent`, `:hover` → `translateY(-4px)` + `border-bottom` Taupe + sombra (RN-01).
- Split de CSS: layout em `sections.css`, card em `components.css`.
- **Sem JS novo** — links `.area-card__link` (`href="#contato"`) já cobertos pelo handler genérico `a[href^="#"]` da US-01 (evita `scrollTo` duplo). `SPEC-US-04` §4 reescrito.

### 11. Ajustes Áreas de Atuação

- **Eyebrow:** adicionado o **marcador marrom** (`assets/marcador_areia.png`, render 10×10) à esquerda de "ÁREAS DE ATUAÇÃO".
- **"Saiba mais" removido** de todos os 6 cards (`.area-card__link` e regras CSS eliminadas — cards puramente informativos).
- **Marcador marrom no canto superior direito de cada card** (`.area-card__corner`, `assets/marcador_areia.png`, 15×15, `opacity: 0.5`, `position: absolute; top/right: 20px`). `.area-card` recebeu `position: relative`.
- **`.areas__title` `font-weight: 600`** (era 400).
- **"cada frente"** no H2 envolto em `<span class="areas__title-accent">` → `color: var(--color-taupe)`.
- Copiado `site/assets/marcador_areia.png`. Specs: `SPEC-US-04` §1/§2/§3/§4/§5/§6/§7/§8, `TASK-US-04`.

### 12. TASK-US-05 (Por Que Sales Costa / Diferenciais) + ajustes

- **Implementada** (`site/`): `<section id="diferenciais">` após `#areas`, fundo Dark `#404347`. Header (eyebrow + H2) + `.diferenciais__grid` com **4 `<article class="diferencial-card">`** (ícone SVG + título + descrição). Grid **1 → 2×2 (≥768px) → 4 colunas (≥1024px)**; card padding `24px` → `2rem` → `2.5rem 2rem`.
- Card: fundo `--color-dark-alt`, `:hover` → borda Lima 35%, `:focus-visible` → outline Lima.
- `js/animations.js`: adicionado `initDiferenciaisAnimation()` (SPEC-US-05 §4.2) — fade-up com stagger via `data-delay` (0/100/200/300ms) aplicado em `style.transitionDelay`; `IntersectionObserver` (`threshold: 0.2`, `rootMargin: '0px 0px -40px 0px'`), `unobserve` após 1x; guard `prefers-reduced-motion`; auto-invoca via `document.readyState`. Observer independente dos demais.
- **Ajustes solicitados (já na implementação):**
  1. **Marcador verde** (`assets/marcador_verde.png`, render 10×10) à esquerda do eyebrow "POR QUE SALES COSTA"; `.diferenciais__eyebrow` vira `inline-flex`.
  2. **`.diferenciais__heading` `font-weight: 600`** (era 400).
  3. Trechos **"diferencial"** e **"cada caso"** no H2 envoltos em `<span class="diferenciais__heading-accent">` → `color: var(--color-lima)`.
  4. **Marcador verde no canto superior direito** de cada card (`.diferencial-card__corner`, 15×15, `opacity: 0.5`, `position: absolute; top/right: 20px`); `.diferencial-card` recebeu `position: relative`.
- Specs: `SPEC-US-05` §1/§2/§3/§7/§8, `TASK-US-05`.

### 13. Diferenciais — ícones → números

- Os **4 ícones SVG** dos cards de Diferenciais foram **substituídos por números** (`1`, `2`, `3`, `4`).
- `.diferencial-card__icon` (+ regras `svg`) removido; novo `.diferencial-card__num` — `font-family: var(--font-display)`, `font-size: clamp(2rem, 4vw, 2.5rem)`, **`font-weight: 600`**, `line-height: 1`, **`color: var(--color-taupe)`**. Marcado `aria-hidden="true"` (decorativo).
- Specs: `SPEC-US-05` §1/§2/§3/§5/§6/§7/§8, `TASK-US-05`.

### 14. Eyebrows — letter-spacing 3px + TASK-US-06 (Em Números)

- **`letter-spacing` de todos os eyebrows → 3px** (era 4px). Novo token `--eyebrow-tracking: 3px` em `variables.css`; `.hero__eyebrow`, `.comunicado__eyebrow`, `.sobre__eyebrow`, `.areas__eyebrow`, `.diferenciais__eyebrow` passam a usar `var(--eyebrow-tracking)`. Specs `SPEC-US-01/02/03/04/05` + `SPEC-US-08/09` (eyebrows ainda não implementados) atualizadas.
- **TASK-US-06 implementada** (`site/`): `<section id="numeros">` após `#diferenciais`, fundo Off-White `#F8F6F4`. 4 `<article class="numeros__item">` (o 4º com `--no-divider`): `.numeros__count[data-target]` + `.numeros__suffix` (`+`) + `.numeros__label`.
- Grid: **2×2 sem divisores** (<768px) → **4 colunas em linha com `border-right: 1px solid #D9D3CE`** (≥768px). Número `font-weight: 700` + `font-variant-numeric: tabular-nums` + `min-width: 2ch` (anti-shift); sufixo e label em Taupe.
- `js/animations.js`: `initCounters()` + `animateCounter()` (SPEC-US-06 §4.2, adaptado — funções autônomas, sem `export`/`import`; auto-invoca via `document.readyState`). `IntersectionObserver` `threshold: 0.4` → contagem 0→alvo em ~2s (easeOutCubic), `observer.disconnect()` após 1x (RN-01). Guard `prefers-reduced-motion` (RN-02).
- **Nota de conflito não resolvido:** a SPEC-US-06 usa fundo `#F8F6F4`, mas o `sales-costa-layout1.png` mostra esta faixa em **lima**. Implementado conforme a spec (off-white). *(Resolvido na Fase 17 — ver abaixo.)*
- Specs: `SPEC-US-06` §4/§8, `TASK-US-06`.

### 15. Em Números → fundo Lima (Fase 17)

- **Conflito da entrada 14 resolvido:** por decisão do cliente, `#numeros` passa a usar **fundo Lima `#E4FF8F`** (`--color-lima`), alinhado ao `sales-costa-layout1.png`.
- Medição por canvas `getImageData` na faixa lima do layout1: números `[0,0,0]`, labels `[14,16,9]`, **sem divisores verticais** (amostra entre itens = lima puro `[228,255,143]`).
- `site/css/sections.css`: `.numeros { background-color: var(--color-lima) }`; `.numeros__suffix` e `.numeros__label` de `--color-taupe` → `--color-text-dark` (`#2B2B2B`); **removido** o `border-right` do `@media (min-width: 768px)`.
- Contraste agora ≈ 15.9:1 (AA/AAA) para todos os elementos da seção — some a pendência de contraste Taupe aqui.
- A classe `.numeros__item--no-divider` no 4º `<article>` do `index.html` ficou inócua (mantida, sem efeito).
- Specs: `SPEC-US-06` §1/§3.1/§3.2/§5/§7/§8, `TASK-US-06`.

### 16. TASK-US-07 (Depoimentos / Prova Social)

- **Implementada** (`site/`): `<section id="depoimentos" class="testimonials-section">` após `#numeros`, fundo Off-White `#F8F6F4`, com `.testimonials-watermark` (`logo_s_background.png`, `filter: brightness(0)`, `opacity: 0.3`). Eyebrow "DEPOIMENTOS" + H2 "O que nossos clientes dizem" + carrossel + dots.
- **Carrossel** (`.testimonials-carousel` > `.testimonials-track` > `.testimonial-slide`): slides `flex: 0 0 100%`, track deslocado por `translateX` (`transition: transform 0.4s ease`). Aspas decorativas `.quote-deco` `7.5rem → 9rem → 10rem` Taupe `opacity: 0.55`. Citação em itálico `var(--font-display)`; autor com linha separadora `::before`. `.testimonials-dot` **44×44px** com dot visual em `::after`; `.testimonials-dots.is-single` esconde os dots quando `total <= 1`.
- `js/main.js`: adicionados `TESTIMONIALS_DATA` + classe `TestimonialsCarousel` (SPEC-US-07 §4.2, transcrição fiel) — `_renderSlides()`/`_renderDots()` regeneram o DOM a partir do array; `_goTo(i)` atualiza `translateX` + `aria-selected`/`aria-hidden`; touch-swipe `touchstart`/`touchend` `{ passive: true }` (limiar 50px); navegação por teclado ←/→ nos dots; `_setupIntersectionObserver()` (`anim-fade-up` → `is-visible`); `_escape()` anti-XSS. Instanciada em `DOMContentLoaded` próprio (`window.testimonialsCarousel`).
- **3 depoimentos** criados (a pedido, para ver o efeito de carrossel): **1 real** — Marina Albuquerque, Diretora Financeira, Grupo Vantis — + **2 placeholders** (Ricardo Menezes / Nortlar Indústria; Helena Prado / Prado & Filhos Participações), marcados com `// PLACEHOLDER` no código e na SPEC. Com 3 itens, `is-single` não é aplicado e os 3 dots ficam visíveis.
- **Sem link na navbar** para `#depoimentos` (igual a `#numeros` — não está entre os 6 itens do menu). `SPEC-US-07` §8 ajustado (era `<a href="#depoimentos">`).
- Specs: `SPEC-US-07` §1/§4.2/§6/§7/§8, `TASK-US-07`.

### 17. Depoimentos — heading removido

- Removido o `<h2 id="testimonials-heading">O que nossos clientes dizem</h2>` de `#depoimentos` a pedido — a seção passa a ter **apenas o eyebrow "DEPOIMENTOS"** como título.
- `site/index.html`: `<section>` trocou `aria-labelledby="testimonials-heading"` por `aria-label="Depoimentos de clientes"`.
- `site/css/sections.css`: regra `.testimonials-heading` excluída. `site/js/main.js`: `_setupIntersectionObserver()` não observa mais `.testimonials-heading`.
- Specs: `SPEC-US-07` §1 (mermaid) / §2 / §3.1 / §5 / §6 / §8.

### 18. TASK-US-08 (Nossa Equipe / Sócios)

- **Implementada** (`site/`): `<section id="equipe" class="equipe">` após `#depoimentos`, fundo Branco `#FFFFFF`. Header (eyebrow + H2) + `.equipe__grid` com **4 `<article class="socio-card">`** (Antônio Sales, Camila Costa, Felipe Ramos, Luísa Martins). Grid **1 → 2×2 (≥768px) → 4 colunas (≥1024px)**.
- **Ajustes solicitados (já na implementação):**
  1. **Eyebrow ciano:** `.equipe__eyebrow` em `var(--color-cyan)` (`#3DD6D0`), `inline-flex`, com `.equipe__eyebrow-mark` (`assets/marcador_ciano.png`, render 10×10) à esquerda de "NOSSA EQUIPE".
  2. **Fotos reais:** `<img class="socio-card__photo">` com `assets/advogado1.png` … `advogado4.png` (500×500), `object-fit: cover`, `loading="lazy"`. `.socio-card__initials` mantido no CSS como fallback.
  3. **Hover do card:** overlay escuro (`.socio-card__avatar::after` → `rgba(43,43,43,0.45)`) + botão **"Ver LinkedIn"** revelado (canto inferior esquerdo, borda inferior lima) + **zoom leve na foto** (`transform: scale(1.05)`). Gated por `@media (hover: hover)`; em `@media (hover: none)` overlay/link ficam visíveis. `:focus-visible` no link com outline lima.
  4. **`.equipe__title` `font-weight: 600`** (a spec previa 400).
- CSS split: `.socio-card` em `components.css`, `.equipe*` layout/grid em `sections.css`.
- `js/animations.js`: `initEquipeAnimation()` — `IntersectionObserver` (`threshold: 0.2`) revela os 4 cards em cascata (`setTimeout(idx * 100)`), `unobserve` após 1×; guards `prefers-reduced-motion` / sem `IntersectionObserver`; auto-invoca via `document.readyState`. Hover é 100% CSS.
- Navbar: item "Equipe" (`<a href="#equipe">`) já existia — âncora consumida.
- **Placeholders:** `href="#"` dos 4 "Ver LinkedIn" e `OAB/SP 000.000` — substituir antes de publicar.
- Specs: `SPEC-US-08` §1/§2/§3/§4/§5/§6/§7/§8, `TASK-US-08`.

### 19. Equipe — "Ver LinkedIn" sem underline + weight 400

- `.socio-card__linkedin`: removido o `border-bottom: 2px solid var(--color-lima)` e `font-weight` de `600` → `400`. Continua branco → lima no `:hover`. Docs: `SPEC-US-08` §1/§3.

### 20. TASK-US-09 (Fale Conosco / Formulário de Contato)

- **Implementada** (`site/`): `<section id="contato" class="contato">` após `#equipe`. Coluna esquerda (eyebrow + H2 + subtítulo + 3 dados de contato com ícones SVG) / coluna direita (`<form>` de 5 campos + `#form-success`). Layout **1 coluna (< 1024px) → 2 colunas 45/55 (≥ 1024px)**.
- **Ajustes solicitados (já na implementação):**
  1. **Fundo escuro** — a spec previa `var(--color-dark)` `#404347`; ajustado para `#2B2B2B` literal e, na Fase seguinte, para **`var(--color-footer-dark)` (`#2B2D30`)** — mesmo tom do `<footer>`, criando um bloco escuro contínuo contato → rodapé (ver entrada 23).
  2. **Marcador verde no eyebrow:** `.contato__eyebrow` vira `inline-flex` com `.contato__eyebrow-mark` (`assets/marcador_verde.png`, render 10×10) à esquerda de "FALE CONOSCO".
  3. **Eyebrow e ícones de contato em Lima:** `.contato__eyebrow { color: var(--color-lima) }` e `.contato__detail-item svg { color: var(--color-lima) }` (ambos eram Taupe).
  4. **Estrutura preparada para backend:** `<form data-endpoint="">` + `const CONTACT_ENDPOINT_FALLBACK = ''` em `js/main.js`. Vazio ⇒ **modo simulação** (valida no cliente, mostra `.contato__success`, zero rede); com endpoint ⇒ `fetch POST` de `FormData` + trata `res.ok`. Comentário-guia no HTML e no JS marcando o ponto de integração.
- CSS split: inputs (`.form-input/.form-select/.form-textarea` com `font-size: 16px !important` anti-zoom iOS), `.btn--full`, `.contato__success` em `components.css`; `.contato*` layout/colunas/eyebrow em `sections.css`.
- **Micro-fix:** `.btn--full` no desktop recebeu `align-self: flex-start` (sem isto o botão estica — flex item em coluna com `align-items: stretch`).
- **A11y:** `#form-success` com `role="status"` + `tabindex="-1"` (foco movido após envio); botão com `aria-busy` durante o `POST`.
- `js/main.js`: validação de obrigatórios + regex de e-mail (`alert` + bloqueio), envio via endpoint/simulação, exibição da confirmação. Listener `DOMContentLoaded` próprio.
- Navbar: item "Fale conosco" (`<a href="#contato" class="navbar__link--cta">`) já existia — âncora consumida.
- **Placeholders:** endereço / e-mail / telefone institucionais; endpoint do formulário (Formspree/EmailJS/serverless) a definir — R01 em aberto.
- Specs: `SPEC-US-09` §1/§2/§3/§4/§5/§7/§8, `TASK-US-09`.

### 21. Fale Conosco em Lima + TASK-US-10 (Rodapé Institucional)

- **Fale Conosco — ajustes:** `.contato__eyebrow { color: var(--color-lima) }` e `.contato__detail-item svg { color: var(--color-lima) }` (eram Taupe). `SPEC-US-09` §1/§3/§7/§8 e `TASK-US-09` atualizadas.
- **TASK-US-10 implementada** (`site/`): `<footer id="rodape" class="site-footer" role="contentinfo">` após `#contato`. `.footer__top` = lockup de logo (`logo_s_verde.png` `height: 28px` + `logo_salescosta.png` `height: 18px`, `gap: 12px`) + `<nav>` com 4 links (`Sobre`, `Áreas de atuação`, `Equipe`, `Contato`); `<hr class="footer__divider">`; copyright com `<span id="footer-year">`.
- Layout: **coluna centralizada (< 768px) → linha `space-between` (≥ 768px)**; links `min-height: 44px`; `:focus-visible` outline lima; fade-in `.site-footer` (`opacity: 0` → `.is-visible`).
- `js/main.js`: só injeção do ano em `#footer-year` (`new Date().getFullYear()` → "2026"). **Sem handler de scroll novo** — os `<a href="#…">` do footer já são cobertos pelo handler genérico `a[href^="#"]` de US-01 (mesmo caso da US-04: evita `scrollTo` duplo). Sem `history.pushState`. Desvio documentado em `SPEC-US-10` §4.1.
- `js/animations.js`: `initFooterAnimation()` — `IntersectionObserver` (`threshold: 0.1`) → `.is-visible`, `unobserve` após 1×. **Guard de no-IO adicionado** (além do reduced-motion): como o rodapé é o último elemento, nunca pode ficar preso em `opacity: 0`. Auto-invoca via `document.readyState`.
- Verificado (tab ativa): âncora do footer "Equipe" rola até `getBoundingClientRect().top ≈ 80`; ano = 2026; fade-in atinge `opacity: 1`; sem rolagem horizontal em 375/1313px. (Fade-in não dispara com a tab do preview em background — artefato de throttling do `IntersectionObserver`, já conhecido.)
- **Nota (adição do cliente):** o lockup de logo no rodapé não aparece no `sales-costa-layout1.png` (que mostra só links + copyright) — tamanhos propostos.
- Specs: `SPEC-US-10` §1/§4/§7/§8, `TASK-US-10`.

### 22. Correções de mobile (US-01)

- **Marca d'água do hero deformava o "S" no mobile:** o `img { max-width: 100% }` do `reset.css` limitava a largura de `.hero__watermark` (que usa `height: 118%; width: auto`) à largura do `.hero`, comprimindo a imagem. Adicionado **`max-width: none`** — a proporção nativa é preservada, o excesso horizontal vaza e é recortado pelo `overflow: hidden` do `.hero`. Verificado: `renderRatio == naturalRatio` (0.8839).
- **Navbar mobile sem fundo ao rolar:** a regra `.navbar--scrolled { background-color: var(--color-dark); box-shadow: … }` estava **só dentro de `@media (min-width: 1024px)`** — no mobile o header ficava transparente sobre as seções claras após o scroll. Movida para o **escopo base** de `components.css` (removida a duplicata no bloco desktop). O gatilho JS (`scrollY > 80` → `header.classList.add('navbar--scrolled')`) não mudou. Verificado por screenshot: header fica sólido (`#404347`) com a classe aplicada, em 375px.
- Specs: `SPEC-US-01` §3.1 (`.navbar--scrolled` no base + `.hero__watermark` com `max-width: none`), §3.3, §8.

### 23. Fale Conosco — fundo `--color-footer-dark`

- `.contato` (e `.form-select option`): `background-color` de `#2B2B2B` (literal) → **`var(--color-footer-dark)` (`#2B2D30`)**, a pedido. A seção de contato passa a ter o mesmo tom do `<footer>`, formando um bloco escuro contínuo até o fim da página.
- Contraste inalterado na prática (ambos quase-pretos): texto branco e Lima seguem AA/AAA.
- Arquivos: `site/css/sections.css`, `site/css/components.css`. Specs: `SPEC-US-09` §1/§3/§7/§8, `TASK-US-09`.

### 24. Hero → banner rotativo de 3 telas (US-01)

- O hero passou de fundo estático para **banner rotativo de 3 telas em crossfade** (`opacity 1.2s ease-in-out`), giro automático **a cada 4 s**:
  - **Tela 1** — o hero atual: degradê `#4D4F52 → #3B3636` + marca d'água "S". Sem alterações de conteúdo.
  - **Tela 2** — foto `assets/banner_saopaulo.png` (1280×720).
  - **Tela 3** — foto `assets/banner_floripa.png` (1280×720).
- **Estrutura** (`site/index.html`): novo `<div class="hero__bg" aria-hidden="true">` com 3 `.hero__slide` (`--brand` contendo o `.hero__watermark`, `--sp`, `--floripa`). O `.hero__content` (eyebrow, título, subtítulo, 2 CTAs) e o `.hero__scroll-indicator` **ficam fixos sobre as 3 telas** — só o fundo troca (decisão do cliente).
- **CSS** (`site/css/sections.css`): `.hero` perde o `background` degradê (movido para `.hero__slide--brand`) e ganha `background-color: var(--hero-grad-bottom)` como fallback. `.hero__slide` absoluto `inset: 0`, `opacity: 0` → `.is-active { opacity: 1 }`. Fotos via `background-image: url('../assets/…')` + `background-size: cover`. Overlay `.hero__slide--photo::after` em degradê **`rgba(0,0,0,0.12)` (topo) → `0.40` (45%) → `0.75` (base)** — leve em cima, escurece embaixo, conforme pedido. `@media (prefers-reduced-motion: reduce)` → `.hero__slide { transition: none }`.
- **JS** (`site/js/main.js`): `initHeroCarousel()` — `setInterval(4000)` alternando `.is-active` (wrap por módulo); `stop()`/`start()` em `mouseenter`/`mouseleave`, `focusin`/`focusout` do `.hero` e em `visibilitychange`; guard `prefers-reduced-motion` fixa a Tela 1 sem timer. Bootstrap por `document.readyState`.
- **A11y:** `.hero__bg` é `aria-hidden` (decorativo); o conteúdo semântico não muda entre telas → sem live region / `aria-roledescription`. Verificado: estrutura (3 slides, transição 1.2s, overlay), ciclo `0→1→2→0→1`, crossfade de opacidade, conteúdo fixo legível sobre SP e Floripa, sem rolagem horizontal (375/1313px). O giro automático via `setInterval` não é observável no preview (timers throttled na aba sempre "hidden" do painel) — lógica confirmada manualmente.
- Specs: `SPEC-US-01` §1/§2/§3/§4/§5/§7/§8, `TASK-US-01`.

---

## Pendências conhecidas (de revisões anteriores)

- **Contraste:** eyebrow "ÁREAS DE ATUAÇÃO" e "cada frente" em Taupe `#AA9B8F` sobre fundo claro ≈ 2.8:1 (abaixo de AA para texto). Mantido conforme design. *(Não se aplica mais a `#numeros`, agora em fundo lima com texto quase-preto.)*
- **Placeholders:** `OAB/SP 000.000` (US-06 e US-08), `Av. Paulista, 1000`, `+55 (11) 3000-0000`, números redondos (15+/500+/300+) — substituir antes de publicar.
- **Equipe (US-08):** `href="#"` dos 4 links "Ver LinkedIn" são placeholders — trocar pelas URLs reais dos perfis. Nomes dos sócios (Antônio Sales, Camila Costa, Felipe Ramos, Luísa Martins) vêm da spec — confirmar.
- **Depoimentos (US-07):** 2 dos 3 depoimentos são **placeholders** (Ricardo Menezes / Nortlar Indústria; Helena Prado / Prado & Filhos Participações) — substituir por depoimentos reais antes de publicar. Marcados com `// PLACEHOLDER` em `js/main.js` e na `SPEC-US-07` §4.2/§6.
- **Backend do formulário (US-09):** ponto de integração pronto (`<form data-endpoint="">` + `CONTACT_ENDPOINT_FALLBACK`), mas o serviço em si (Formspree/EmailJS/serverless) segue **indefinido** — enquanto vazio, o form roda em modo simulação. Risco R01 em aberto.
- **Contato (US-09):** endereço `Av. Paulista, 1000`, `contato@salescosta.com.br` e `+55 (11) 3000-0000` são placeholders.
- **Hero — peso das imagens (US-01):** `banner_saopaulo.png` e `banner_floripa.png` têm ~1,2 MB cada (PNG, ~2,4 MB somados no hero). Converter para JPG/WebP otimizado (~150–250 KB) antes de publicar; opcionalmente `<link rel="preload">` da Tela 2.
- **Preview instável:** os screenshots do painel de preview falham com frequência nesta sessão; verificação feita majoritariamente via inspeção de DOM/CSS computado. Timers (`setInterval`) e `IntersectionObserver` ficam throttled porque a aba do painel se reporta como `hidden`.
