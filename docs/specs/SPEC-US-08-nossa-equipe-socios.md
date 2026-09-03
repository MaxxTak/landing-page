# SPEC — US-08: Nossa Equipe (Cards dos Sócios Responsáveis)

> **PRD de Origem:** [US-08-nossa-equipe-socios.md](../../spike-salescosta/PRDs/US-08-nossa-equipe-socios.md)  
> **Componente:** Componente 8 (Nossa Equipe)  
> **Stack:** HTML5 Semântico / Vanilla CSS3 / Vanilla JS (ES6+)  
> **Status:** Ready for Development

---

## 1. System Architecture & Component Overview

A seção **Nossa Equipe** (`<section id="equipe">`) destaca os 4 sócios-fundadores e responsáveis pelas áreas de atuação do Sales Costa Advogados. O layout em fundo Branco Puro (`#FFFFFF`) apresenta cards individuais com placeholders elegantes de inicial de nome (*AS*, *CC*, *FR*, *LM*) sobre fundo bege Off-White (`#F8F6F4`), preparados para substituição transparente por imagens reais de ensaio fotográfico profissional.

- **Desktop (≥ 1024px):** 4 colunas horizontais em linha (`repeat(4, 1fr)`).
- **Tablet (768px – 1023px):** Grid 2×2 (`repeat(2, 1fr)`).
- **Mobile (< 768px):** 1 coluna vertical empilhada (`1fr`).

---

## 2. HTML Structure

```html
<section id="equipe" class="equipe" aria-labelledby="equipe-title">
  <div class="equipe__container">
    <header class="equipe__header">
      <span class="equipe__eyebrow">NOSSA EQUIPE</span>
      <h2 id="equipe-title" class="equipe__title">Os sócios responsáveis por cada caso.</h2>
    </header>

    <div class="equipe__grid">
      <!-- Sócio 1 -->
      <article class="socio-card">
        <div class="socio-card__avatar">
          <span class="socio-card__initials" aria-hidden="true">AS</span>
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
          <span class="socio-card__initials" aria-hidden="true">CC</span>
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
          <span class="socio-card__initials" aria-hidden="true">FR</span>
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
          <span class="socio-card__initials" aria-hidden="true">LM</span>
        </div>
        <div class="socio-card__info">
          <h3 class="socio-card__name">Luisa Martins</h3>
          <p class="socio-card__role">Sócia</p>
          <p class="socio-card__area">Societário & Compliance</p>
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

.equipe__eyebrow {
  display: inline-block;
  font-size: var(--text-eyebrow);
  font-weight: 500;
  color: var(--color-taupe);
  letter-spacing: 4px;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.equipe__title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  line-height: 1.25;
  font-weight: 400;
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
}

.socio-card__avatar {
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

.socio-card__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.socio-card__initials {
  font-family: var(--font-body);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-taupe);
  letter-spacing: 2px;
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

Esta seção é totalmente estática do ponto de vista de script, ativando animações suaves de entrada no scroll via `js/animations.js`:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const socios = document.querySelectorAll('.socio-card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, idx * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    socios.forEach(socio => observer.observe(socio));
  }
});
```

---

## 5. Accessibility (A11y) Requirements

- **Iniciais:** `aria-hidden="true"` no container de texto das iniciais `AS`, `CC`, `FR`, `LM`.
- **Nomes:** Rótulo do socio estruturado em `<h3 class="socio-card__name">`.
- **Contraste:** Texto escuro `#2B2B2B` sobre fundo branco `#FFFFFF` = 16:1.

---

## 6. Content Data Model

```json
{
  "equipe": [
    { "name": "Antônio Sales", "role": "Sócio-fundador", "area": "Direito Empresarial", "oab": "OAB/SP 000.000", "initials": "AS" },
    { "name": "Camila Costa", "role": "Sócia-fundadora", "area": "Direito Tributário", "oab": "OAB/SP 000.000", "initials": "CC" },
    { "name": "Felipe Ramos", "role": "Sócio", "area": "Direito Trabalhista", "oab": "OAB/SP 000.000", "initials": "FR" },
    { "name": "Luisa Martins", "role": "Sócia", "area": "Societário & Compliance", "oab": "OAB/SP 000.000", "initials": "LM" }
  ]
}
```

---

## 7. Acceptance Criteria (Technical)

### CA-01: Exibição dos 4 Sócios
- Todos os 4 cards exibem Nome, Cargo, Área e Inscrição OAB.

### CA-02: Empilhamento no Mobile
- Viewports < 768px organizam os cards em 1 coluna vertical mantendo `aspect-ratio: 1 / 1` nos avatares sem distorção.

---

## 8. Dependencies & Integration Points

- **CSS Variables:** `--color-white`, `--color-off-white`, `--color-taupe`, `--color-text-dark`.
- **Files Affected:** `index.html`, `css/sections.css`, `js/animations.js`.

