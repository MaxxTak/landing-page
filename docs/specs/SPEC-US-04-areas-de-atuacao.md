# SPEC — US-04: Áreas de Atuação (Grid de Especialidades)

> **PRD de Origem:** [US-04-areas-de-atuacao.md](../../spike-salescosta/PRDs/US-04-areas-de-atuacao.md)  
> **Componente:** Componente 4 (Grid de Áreas de Atuação)  
> **Stack:** HTML5 Semântico / Vanilla CSS3 / Vanilla JS (ES6+)  
> **Status:** Ready for Development

---

## 1. System Architecture & Component Overview

A seção **Áreas de Atuação** (`<section id="areas">`) apresenta o portfólio de 6 especialidades jurídicas do escritório Sales Costa Advogados. O layout em fundo Branco Puro (`#FFFFFF`) é estruturado em um grid responsivo que adapta a quantidade de colunas conforme o viewport:
- **Desktop (≥ 1024px):** 3 colunas × 2 linhas.
- **Tablet (768px – 1023px):** 2 colunas × 3 linhas.
- **Mobile (< 768px):** 1 coluna × 6 linhas empilhadas.

**Detalhes visuais:**
- Eyebrow **"ÁREAS DE ATUAÇÃO"** (Taupe) precedido do marcador `assets/marcador_areia.png` à esquerda.
- H2 com `font-weight: 600`; o trecho **"cada frente"** recebe `color: var(--color-taupe)` via `<span class="areas__title-accent">`.
- Cada card exibe o marcador `assets/marcador_areia.png` no **canto superior direito** (`opacity: 0.5`).
- **Sem link "Saiba mais"** — os cards são puramente informativos.

### Mermaid Diagram: Component Structure

```mermaid
graph TD
    A[Section #areas] --> B[Eyebrow + marcador areia]
    A --> C["H2 (weight 600, 'cada frente' em Taupe)"]
    A --> D[Grid Container]
    D --> E1[Card 1: Direito Empresarial]
    D --> E2[Card 2: Direito Tributário]
    D --> E3[Card 3: Direito Trabalhista]
    D --> E4[Card 4: Direito Civil]
    D --> E5[Card 5: Direito Societário]
    D --> E6[Card 6: Compliance & Governança]
    E1 & E2 & E3 & E4 & E5 & E6 --> F["Marcador areia no canto sup. direito (opacity 0.5)"]
```

---

## 2. HTML Structure

```html
<section id="areas" class="areas" aria-labelledby="areas-title">
  <div class="areas__container">
    <header class="areas__header">
      <span class="areas__eyebrow">
        <img class="areas__eyebrow-mark" src="assets/marcador_areia.png" alt="" width="15" height="15">
        ÁREAS DE ATUAÇÃO
      </span>
      <h2 id="areas-title" class="areas__title">
        Especialização que cobre <span class="areas__title-accent">cada frente</span> do seu negócio.
      </h2>
    </header>

    <div class="areas__grid">
      <!-- Cada card: marcador (assets/marcador_areia.png) no canto superior direito +
           ícone + título + descrição. SEM link "Saiba mais" — cards informativos. -->

      <!-- Card 1 -->
      <article class="area-card">
        <img class="area-card__corner" src="assets/marcador_areia.png" alt="" aria-hidden="true" width="15" height="15">
        <div class="area-card__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        <h3 class="area-card__title">Direito Empresarial</h3>
        <p class="area-card__desc">Estruturação societária, contratos comerciais e assessoria contínua para negócios em crescimento.</p>
      </article>

      <!-- Card 2 -->
      <article class="area-card">
        <img class="area-card__corner" src="assets/marcador_areia.png" alt="" aria-hidden="true" width="15" height="15">
        <div class="area-card__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <h3 class="area-card__title">Direito Tributário</h3>
        <p class="area-card__desc">Planejamento fiscal, consultoria preventiva e defesa em processos administrativos e judiciais.</p>
      </article>

      <!-- Card 3 -->
      <article class="area-card">
        <img class="area-card__corner" src="assets/marcador_areia.png" alt="" aria-hidden="true" width="15" height="15">
        <div class="area-card__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3 class="area-card__title">Direito Trabalhista</h3>
        <p class="area-card__desc">Gestão de risco trabalhista, compliance de RH e representação em ações individuais e coletivas.</p>
      </article>

      <!-- Card 4 -->
      <article class="area-card">
        <img class="area-card__corner" src="assets/marcador_areia.png" alt="" aria-hidden="true" width="15" height="15">
        <div class="area-card__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </div>
        <h3 class="area-card__title">Direito Civil</h3>
        <p class="area-card__desc">Contratos, responsabilidade civil e patrimônio, com foco em prevenção e solução célere de conflitos.</p>
      </article>

      <!-- Card 5 -->
      <article class="area-card">
        <img class="area-card__corner" src="assets/marcador_areia.png" alt="" aria-hidden="true" width="15" height="15">
        <div class="area-card__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <h3 class="area-card__title">Direito Societário</h3>
        <p class="area-card__desc">Fusões, aquisições, governança e reestruturação de grupos empresariais e familiares.</p>
      </article>

      <!-- Card 6 -->
      <article class="area-card">
        <img class="area-card__corner" src="assets/marcador_areia.png" alt="" aria-hidden="true" width="15" height="15">
        <div class="area-card__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3 class="area-card__title">Compliance & Governança</h3>
        <p class="area-card__desc">Programas de integridade, auditoria de conformidade e assessoria em governança corporativa.</p>
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
.areas {
  background-color: var(--color-white);
  color: var(--color-text-dark);
  padding: var(--section-pad-y) var(--section-pad-x);
}

.areas__container {
  max-width: var(--container-max);
  margin: 0 auto;
}

.areas__header {
  margin-bottom: 48px;
}

.areas__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: var(--text-eyebrow);
  font-weight: 500;
  color: var(--color-taupe);
  letter-spacing: var(--eyebrow-tracking); /* 3px — token global */
  margin-bottom: 16px;
  text-transform: uppercase;
}

.areas__eyebrow-mark {
  flex: 0 0 auto;
  display: block;
  width: 10px;
  height: 10px;
}

.areas__title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  line-height: 1.25;
  font-weight: 600;
  color: var(--color-text-dark);
  max-width: 700px;
}

.areas__title-accent {
  color: var(--color-taupe);
}

.areas__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.area-card {
  position: relative;
  background-color: var(--color-off-white);
  padding: 32px 28px;
  border-radius: 4px;
  border-bottom: 2px solid transparent;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.area-card:hover {
  transform: translateY(-4px);
  border-bottom-color: var(--color-taupe);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
}

/* Marcador decorativo no canto superior direito — assets/marcador_areia.png (15x15) */
.area-card__corner {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 15px;
  height: 15px;
  opacity: 0.5;
  pointer-events: none;
  user-select: none;
}

.area-card__icon {
  color: var(--color-taupe);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.area-card__title {
  font-family: var(--font-body);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--color-text-dark);
}

.area-card__desc {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #555555;
  flex-grow: 1;
  font-weight: 300;
}

@media (prefers-reduced-motion: reduce) {
  .area-card {
    transition: none;
  }
}

/* ==========================================================================
   3.2 Tablet Breakpoint (≥ 768px)
   ========================================================================== */
@media (min-width: 768px) {
  .areas__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ==========================================================================
   3.3 Desktop Breakpoint (≥ 1024px)
   ========================================================================== */
@media (min-width: 1024px) {
  .areas__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}
```

---

## 4. JavaScript Specification

**Nenhum JavaScript é necessário** para esta seção — os cards são puramente
informativos (sem link "Saiba mais"). Não há observers, handlers ou fetch.
Apenas manter um comentário em `js/main.js` indicando que a US-04 não adiciona JS.

---

## 5. Accessibility (A11y) Requirements

- **Contraste:** texto do card `#555555` sobre `#F8F6F4` ≈ 7:1 (AAA); título `#2B2B2B` ≈ 15:1.
- **Ícones e marcador:** `<svg>` do ícone e `<img class="area-card__corner">` marcados como `aria-hidden="true"` / `alt=""` — decorativos, ignorados por leitores de tela.
- **Sem elementos interativos** na seção — o foco de teclado passa pelo conteúdo textual sem paradas.
- **Nota de contraste:** eyebrow "ÁREAS DE ATUAÇÃO" em Taupe `#AA9B8F` sobre branco ≈ 2.8:1 — abaixo de AA para texto (mantido conforme design; candidato a cor distinta em revisão futura).

---

## 6. Content Data Model

```json
{
  "eyebrow": "ÁREAS DE ATUAÇÃO",
  "eyebrowMark": "assets/marcador_areia.png",
  "title": "Especialização que cobre <cada frente> do seu negócio.",
  "titleAccent": "cada frente",
  "areas": [
    { "title": "Direito Empresarial", "desc": "Estruturação societária, contratos comerciais e assessoria contínua para negócios em crescimento." },
    { "title": "Direito Tributário", "desc": "Planejamento fiscal, consultoria preventiva e defesa em processos administrativos e judiciais." },
    { "title": "Direito Trabalhista", "desc": "Gestão de risco trabalhista, compliance de RH e representação em ações individuais e coletivas." },
    { "title": "Direito Civil", "desc": "Contratos, responsabilidade civil e patrimônio, com foco em prevenção e solução célere de conflitos." },
    { "title": "Direito Societário", "desc": "Fusões, aquisições, governança e reestruturação de grupos empresariais e familiares." },
    { "title": "Compliance & Governança", "desc": "Programas de integridade, auditoria de conformidade e assessoria em governança corporativa." }
  ]
}
```

---

## 7. Acceptance Criteria (Technical)

### CA-01: Renderização dos 6 Cards
- Todos os 6 cards renderizados com **ícone SVG + título + descrição** (sem link "Saiba mais") e com o marcador `area-card__corner` no canto superior direito (`opacity: 0.5`).

### CA-02: Reordenamento no Mobile
- Viewport de 375px renderiza grid de 1 coluna sem estouro lateral (`overflow-x: hidden`); 2 colunas em ≥ 768px; 3 colunas em ≥ 1024px.

### CA-03: Eyebrow e título
- `.areas__eyebrow` com `marcador_areia.png` (render ~10px) à esquerda do texto.
- `.areas__title` com `font-weight: 600`; `.areas__title-accent` ("cada frente") com `color` = `rgb(170, 155, 143)` (`--color-taupe`).

---

## 8. Dependencies & Integration Points

- **CSS Variables:** `--color-white`, `--color-off-white`, `--color-taupe`, `--color-text-dark`.
- **Tipografia:** fonte única **Montserrat** (`--font-body` e `--font-display`), definida em `css/variables.css`.
- **Assets:** `assets/marcador_areia.png` (15×15) — reutilizado no eyebrow (render 10×10) e no canto de cada card (render 15×15, `opacity: 0.5`). Copiar de `images/`.
- **Ordem na página:** inserir `<section id="areas">` após `<section id="sobre">` (hero → comunicado → sobre → areas).
- **Split de CSS:** layout da seção (`.areas`, `.areas__*`, `.areas__grid` + breakpoints) em `css/sections.css`; card reutilizável (`.area-card`, `.area-card__*` + hover) em `css/components.css`.
- **Files Affected:** `index.html`, `css/sections.css`, `css/components.css`, `js/main.js` (apenas comentário — sem JS).

