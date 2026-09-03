# SPEC — US-08: Nossa Equipe (Cards dos Sócios Responsáveis)

> **PRD de Origem:** [US-08-nossa-equipe-socios.md](../../spike-salescosta/PRDs/US-08-nossa-equipe-socios.md)  
> **Componente:** Componente 8 (Nossa Equipe)  
> **Stack:** HTML5 Semântico / Vanilla CSS3 / Vanilla JS (ES6+)  
> **Status:** Ready for Development

---

## 1. System Architecture & Component Overview

A seção **Nossa Equipe** (`<section id="equipe">`) destaca os 4 sócios-fundadores e responsáveis pelas áreas de atuação do Sales Costa Advogados. O layout em fundo Branco Puro (`#FFFFFF`) apresenta cards individuais com **fotos reais** dos advogados (`assets/advogado1.png` … `advogado4.png`, 500×500) recortadas em quadrado (`aspect-ratio: 1 / 1`, `object-fit: cover`) sobre fundo bege Off-White (`#F8F6F4`). A `.socio-card__initials` permanece no CSS como fallback para o caso de a `<img>` estar ausente.

- **Desktop (≥ 1024px):** 4 colunas horizontais em linha (`repeat(4, 1fr)`).
- **Tablet (768px – 1023px):** Grid 2×2 (`repeat(2, 1fr)`).
- **Mobile (< 768px):** 1 coluna vertical empilhada (`1fr`).

### Ajustes aplicados (fora da spec original)

| Ajuste | Descrição |
|---|---|
| **Eyebrow ciano** | `.equipe__eyebrow` em `var(--color-cyan)` (`#3DD6D0`), `inline-flex`, com `<img class="equipe__eyebrow-mark" src="assets/marcador_ciano.png">` (render 10×10) à esquerda de "NOSSA EQUIPE". |
| **Título `font-weight: 600`** | `.equipe__title` passa de `400` → `600`. |
| **Fotos reais** | `<img class="socio-card__photo">` com `assets/advogado{1..4}.png` substitui o placeholder de iniciais. |
| **Hover do card** | Além do overlay + botão "Ver LinkedIn" (referência `sales-costa-layout1.png`), a foto recebe **zoom leve** (`transform: scale(1.05)`). Em telas touch (`@media (hover: none)`) o overlay e o "Ver LinkedIn" ficam sempre visíveis. |
| **"Ver LinkedIn"** | `<a class="socio-card__linkedin" href="#">` — sem underline/borda, `font-weight: 400`, cor branca (→ lima no `:hover`). `href` **placeholder** até termos as URLs reais dos perfis. |

---

## 2. HTML Structure

```html
<section id="equipe" class="equipe" aria-labelledby="equipe-title">
  <div class="equipe__container">
    <header class="equipe__header">
      <span class="equipe__eyebrow">
        <img class="equipe__eyebrow-mark" src="assets/marcador_ciano.png" alt="" width="15" height="15">
        NOSSA EQUIPE
      </span>
      <h2 id="equipe-title" class="equipe__title">Os sócios responsáveis por cada caso.</h2>
    </header>

    <div class="equipe__grid">
      <!-- Sócio 1 -->
      <article class="socio-card">
        <div class="socio-card__avatar">
          <img class="socio-card__photo" src="assets/advogado1.png" alt="Retrato de Antônio Sales" width="500" height="500" loading="lazy">
          <a class="socio-card__linkedin" href="#" aria-label="Ver LinkedIn de Antônio Sales">Ver LinkedIn</a>
        </div>
        <div class="socio-card__info">
          <h3 class="socio-card__name">Antônio Sales</h3>
          <p class="socio-card__role">Sócio-fundador</p>
          <p class="socio-card__area">Direito Empresarial</p>
          <span class="socio-card__oab">OAB/SP 000.000</span>
        </div>
      </article>

      <!-- Sócio 2 -->
      <article class="socio-card">
        <div class="socio-card__avatar">
          <img class="socio-card__photo" src="assets/advogado2.png" alt="Retrato de Camila Costa" width="500" height="500" loading="lazy">
          <a class="socio-card__linkedin" href="#" aria-label="Ver LinkedIn de Camila Costa">Ver LinkedIn</a>
        </div>
        <div class="socio-card__info">
          <h3 class="socio-card__name">Camila Costa</h3>
          <p class="socio-card__role">Sócia-fundadora</p>
          <p class="socio-card__area">Direito Tributário</p>
          <span class="socio-card__oab">OAB/SP 000.000</span>
        </div>
      </article>

      <!-- Sócio 3 -->
      <article class="socio-card">
        <div class="socio-card__avatar">
          <img class="socio-card__photo" src="assets/advogado3.png" alt="Retrato de Felipe Ramos" width="500" height="500" loading="lazy">
          <a class="socio-card__linkedin" href="#" aria-label="Ver LinkedIn de Felipe Ramos">Ver LinkedIn</a>
        </div>
        <div class="socio-card__info">
          <h3 class="socio-card__name">Felipe Ramos</h3>
          <p class="socio-card__role">Sócio</p>
          <p class="socio-card__area">Direito Trabalhista</p>
          <span class="socio-card__oab">OAB/SP 000.000</span>
        </div>
      </article>

      <!-- Sócio 4 -->
      <article class="socio-card">
        <div class="socio-card__avatar">
          <img class="socio-card__photo" src="assets/advogado4.png" alt="Retrato de Luísa Martins" width="500" height="500" loading="lazy">
          <a class="socio-card__linkedin" href="#" aria-label="Ver LinkedIn de Luísa Martins">Ver LinkedIn</a>
        </div>
        <div class="socio-card__info">
          <h3 class="socio-card__name">Luísa Martins</h3>
          <p class="socio-card__role">Sócia</p>
          <p class="socio-card__area">Societário &amp; Compliance</p>
          <span class="socio-card__oab">OAB/SP 000.000</span>
        </div>
      </article>
    </div>
  </div>
</section>

---

## 3. CSS Specification

```css
/* ==========================================================================
   3.1 Base Styles (Mobile First: < 768px)
   ========================================================================== */
.equipe {
  background-color: var(--color-white);
  color: var(--color-text-dark);
  padding: var(--section-pad-y) var(--section-pad-x);
}

.equipe__container {
  max-width: var(--container-max);
  margin: 0 auto;
}

.equipe__header {
  margin-bottom: 48px;
}

/* Ajuste: eyebrow em ciano (#3DD6D0) + marcador ciano à esquerda */
.equipe__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: var(--text-eyebrow);
  font-weight: 500;
  color: var(--color-cyan); /* #3DD6D0 (era --color-taupe) */
  letter-spacing: var(--eyebrow-tracking); /* 3px — token global */
  margin-bottom: 16px;
  text-transform: uppercase;
}

.equipe__eyebrow-mark {
  flex: 0 0 auto;
  display: block;
  width: 10px;
  height: 10px;
}

.equipe__title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  line-height: 1.25;
  font-weight: 600; /* ajuste — a spec previa 400 */
  color: var(--color-text-dark);
}

.equipe__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

.socio-card {
  display: flex;
  flex-direction: column;
  /* Ajuste: estado inicial do fade-in em cascata (JS adiciona .is-visible) */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.socio-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.socio-card__avatar {
  position: relative; /* ajuste: âncora do overlay + "Ver LinkedIn" */
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: var(--color-off-white);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden;
}

.socio-card__avatar img,
.socio-card__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease; /* ajuste: base do zoom no hover */
}

/* Ajuste: overlay escurecido revelado no hover (ref. sales-costa-layout1.png) */
.socio-card__avatar::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(43, 43, 43, 0);
  transition: background-color 0.35s ease;
  pointer-events: none;
}

/* Placeholder de iniciais — fallback quando não há <img> */
.socio-card__initials {
  font-family: var(--font-body);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-taupe);
  letter-spacing: 2px;
}

/* Ajuste: botão "Ver LinkedIn" — canto inferior esquerdo, revelado no hover */
.socio-card__linkedin {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 2;
  display: inline-block;
  padding: 7px 12px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 400;               /* ajuste: era 600 */
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;          /* ajuste: sem underline / sem borda inferior */
  color: var(--color-white);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.socio-card__linkedin:hover { color: var(--color-lima); }

.socio-card__linkedin:focus-visible {
  outline: 2px solid var(--color-lima);
  outline-offset: 2px;
  opacity: 1;
  transform: translateY(0);
}

/* Ajuste: hover → overlay + zoom na foto + revelar "Ver LinkedIn" */
@media (hover: hover) {
  .socio-card:hover .socio-card__photo,
  .socio-card:hover .socio-card__avatar img { transform: scale(1.05); }

  .socio-card:hover .socio-card__avatar::after {
    background-color: rgba(43, 43, 43, 0.45);
  }

  .socio-card:hover .socio-card__linkedin,
  .socio-card__linkedin:focus-visible { opacity: 1; transform: translateY(0); }
}

/* Ajuste: touch (sem hover) → overlay + "Ver LinkedIn" sempre visíveis */
@media (hover: none) {
  .socio-card__avatar::after { background-color: rgba(43, 43, 43, 0.35); }
  .socio-card__linkedin { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .socio-card,
  .socio-card.is-visible { opacity: 1; transform: none; transition: none; }

  .socio-card__photo,
  .socio-card__avatar img,
  .socio-card__linkedin,
  .socio-card__avatar::after { transition: none; }

  .socio-card:hover .socio-card__photo,
  .socio-card:hover .socio-card__avatar img { transform: none; }
}

.socio-card__name {
  font-family: var(--font-body);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 4px;
}

.socio-card__role {
  font-size: 0.875rem;
  font-style: italic;
  color: var(--color-taupe);
  margin-bottom: 8px;
}

.socio-card__area {
  font-size: 0.9375rem;
  color: var(--color-text-dark);
  margin-bottom: 8px;
  font-weight: 400;
}

.socio-card__oab {
  font-size: 0.75rem;
  color: #6B7280;
  letter-spacing: 1px;
}

/* ==========================================================================
   3.2 Tablet Breakpoint (≥ 768px)
   ========================================================================== */
@media (min-width: 768px) {
  .equipe__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }
}

/* ==========================================================================
   3.3 Desktop Breakpoint (≥ 1024px)
   ========================================================================== */
@media (min-width: 1024px) {
  .equipe__grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
}
```

---

## 4. JavaScript Specification

Esta seção é estática do ponto de vista de script, ativando apenas a revelação em cascata dos cards no scroll via `js/animations.js`. Adaptado ao padrão do arquivo (função autônoma + guard `document.readyState`, como `initDiferenciaisAnimation()` / `initCounters()`), com guards de `prefers-reduced-motion` e ausência de `IntersectionObserver`:

```javascript
// js/animations.js
function initEquipeAnimation() {
  var socios = document.querySelectorAll('.socio-card');
  if (!socios.length) return;

  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    socios.forEach(function (socio) { socio.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, idx) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('is-visible');
        }, idx * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  socios.forEach(function (socio) { observer.observe(socio); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEquipeAnimation);
} else {
  initEquipeAnimation();
}
```

> O hover do card (overlay + "Ver LinkedIn" + zoom) é **100% CSS** — sem JS.

---

## 5. Accessibility (A11y) Requirements

- **Fotos:** cada `<img class="socio-card__photo">` tem `alt="Retrato de <Nome>"`. O fallback `.socio-card__initials` recebe `aria-hidden="true"` quando presente.
- **Nomes:** Rótulo do sócio estruturado em `<h3 class="socio-card__name">`.
- **"Ver LinkedIn":** `<a>` com `aria-label="Ver LinkedIn de <Nome>"` e `:focus-visible` com outline lima (aparece via teclado, não só no hover). `href="#"` é **placeholder** — substituir pelas URLs reais.
- **Eyebrow:** `.equipe__eyebrow-mark` é decorativo (`alt=""`); o texto "NOSSA EQUIPE" permanece legível.
- **Contraste:** texto escuro `#2B2B2B` sobre branco `#FFFFFF` ≈ 16:1. Eyebrow ciano `#3DD6D0` sobre branco ≈ 1.9:1 — **decorativo/curto** (rótulo de seção); mitigado pelo `<h2>` logo abaixo. "Ver LinkedIn" branco sobre overlay `rgba(43,43,43,0.45)` + foto: legível; reforçado pela borda lima.
- **`prefers-reduced-motion`:** desativa fade-in em cascata, zoom e transições.

---

## 6. Content Data Model

```json
{
  "equipe": [
    { "name": "Antônio Sales", "role": "Sócio-fundador", "area": "Direito Empresarial", "oab": "OAB/SP 000.000", "initials": "AS", "photo": "assets/advogado1.png", "linkedin": "#" },
    { "name": "Camila Costa", "role": "Sócia-fundadora", "area": "Direito Tributário", "oab": "OAB/SP 000.000", "initials": "CC", "photo": "assets/advogado2.png", "linkedin": "#" },
    { "name": "Felipe Ramos", "role": "Sócio", "area": "Direito Trabalhista", "oab": "OAB/SP 000.000", "initials": "FR", "photo": "assets/advogado3.png", "linkedin": "#" },
    { "name": "Luísa Martins", "role": "Sócia", "area": "Societário & Compliance", "oab": "OAB/SP 000.000", "initials": "LM", "photo": "assets/advogado4.png", "linkedin": "#" }
  ]
}
```

> `oab` e `linkedin` são **placeholders** — substituir antes de publicar.

---

## 7. Acceptance Criteria (Technical)

### CA-01: Exibição dos 4 Sócios
- Todos os 4 cards exibem foto, Nome, Cargo, Área e Inscrição OAB.
- As 4 fotos (`advogado1..4.png`) carregam e preenchem o quadrado sem distorção (`object-fit: cover`).

### CA-02: Empilhamento no Mobile
- Viewports < 768px organizam os cards em 1 coluna vertical mantendo `aspect-ratio: 1 / 1` nos avatares sem distorção.

### CA-03: Grid responsivo
- `< 768px` → 1 coluna; `768–1023px` → `repeat(2, 1fr)`; `≥ 1024px` → `repeat(4, 1fr)`. Sem rolagem horizontal em nenhum breakpoint.

### CA-04: Hover do card (≥ hover: hover)
- Ao passar o mouse: a foto amplia levemente (`scale(1.05)`), surge um overlay `rgba(43,43,43,0.45)` e o link "Ver LinkedIn" aparece (`opacity: 0 → 1`).
- Em `@media (hover: none)`: overlay e "Ver LinkedIn" já visíveis; sem zoom.
- `Tab` até o "Ver LinkedIn" mostra o outline lima mesmo sem hover.

### CA-05: Fade-in em cascata
- Ao entrar no viewport, os 4 cards recebem `.is-visible` de forma escalonada (`IntersectionObserver`, `threshold: 0.2`, `setTimeout(idx * 100)`), uma única vez. Com `prefers-reduced-motion`, aparecem imediatamente.

### CA-06: Eyebrow ciano
- `.equipe__eyebrow` computa `color: rgb(61, 214, 208)` (#3DD6D0), `display: inline-flex`, com o `.equipe__eyebrow-mark` (`marcador_ciano.png`) 10×10 à esquerda. `.equipe__title` computa `font-weight: 600`.

---

## 8. Dependencies & Integration Points

- **CSS Variables:** `--color-white`, `--color-off-white`, `--color-taupe`, `--color-text-dark`, `--color-cyan` (eyebrow), `--color-lima` (borda/realce do "Ver LinkedIn"), `--eyebrow-tracking`.
- **Tipografia:** fonte única **Montserrat** (`--font-body` e `--font-display`), definida em `css/variables.css`. As iniciais dos avatares (`.socio-card__initials`, fallback) usam `font-weight: 700`.
- **Assets:** `assets/advogado1.png` … `assets/advogado4.png` (500×500) — fotos dos sócios; `assets/marcador_ciano.png` — marcador do eyebrow.
- **Navbar:** o item "Equipe" (`<a href="#equipe">`) já existe no menu — âncora consumida.
- **Ordem na página:** inserir **após `<section id="depoimentos">`** (… → numeros → depoimentos → equipe).
- **Files Affected:** `index.html`, `css/components.css` (`.socio-card`), `css/sections.css` (`.equipe*` layout/grid), `js/animations.js` (`initEquipeAnimation()`).
- **Pendências:** `href="#"` dos 4 "Ver LinkedIn" e `OAB/SP 000.000` são placeholders.

