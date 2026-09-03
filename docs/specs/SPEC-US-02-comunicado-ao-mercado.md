# SPEC — US-02: Comunicado ao Mercado (União das Bancas)

> **PRD de Origem:** [US-02-comunicado-ao-mercado.md](../../spike-salescosta/PRDs/US-02-comunicado-ao-mercado.md)  
> **Componente:** Componente 2 (Comunicado ao Mercado)  
> **Stack:** HTML5 Semântico / Vanilla CSS3 / Vanilla JS (ES6+)  
> **Status:** Ready for Development

---

## 1. System Architecture & Component Overview

A seção **Comunicado ao Mercado** (`<section id="comunicado">`) é um bloco institucional dark focado em storytelling e posicionamento corporativo. Ela oficializa a união estratégica entre a **Higasi Sales Advogados** e **Rodrigo Moreira da Costa**, dando origem ao **Sales Costa Advogados**.

### Características Arquiteturais:
- **Fundo Dark Institucional:** Fundo `#404347` contínuo à Hero Section.
- **Sem marca d'água** nesta seção (decisão de design — removida).
- **Eyebrow Lima com marcador:** anúncio oficial em cor Lima `#E4FF8F`, precedido do marcador verde `assets/marcador_verde.png` (render ~10px) à esquerda do texto.
- **Título (`H2`) peso 600**, com o nome **"Sales Costa Advogados"** destacado em Lima.
- **Destaque da marca:** toda ocorrência de "Sales Costa Advogados" no texto da seção usa `<span class="comunicado__brand">` (cor Lima).
- **Citações com Destaque:** Parágrafos 3 e 4 formatados como elementos `<blockquote class="comunicado__quote">` com borda lateral Taupe `#AA9B8F`.
- **Fade-in de entrada:** `.comunicado__container` inicia com `opacity: 0` e recebe `.is-visible` via `IntersectionObserver` (desativado sob `prefers-reduced-motion`).

### Mermaid Diagram: Layout Structure

```mermaid
graph TD
    A[Section #comunicado] --> C[Container max-width 860px]
    C --> D[Eyebrow 'COMUNICADO AO MERCADO']
    C --> E[H2 Headline Oficial]
    C --> F[Parágrafo 1 - Contexto da Fusão]
    C --> G[Parágrafo 2 - Consolidação da Década]
    C --> H[Blockquote 1 - Citação Dilson Higasi Sales]
    C --> I[Blockquote 2 - Citação Rodrigo Moreira da Costa]
    C --> J[Parágrafo 5 - Integração SP e Florianópolis]
```

---

## 2. HTML Structure

```html
<section id="comunicado" class="comunicado" aria-labelledby="comunicado-title">
  <div class="comunicado__container">
    <span class="comunicado__eyebrow">
      <img class="comunicado__eyebrow-mark" src="assets/marcador_verde.png" alt="" width="15" height="15">
      COMUNICADO AO MERCADO
    </span>

    <h2 id="comunicado-title" class="comunicado__title">
      Dilson Higasi Sales e Rodrigo Moreira da Costa se unem e dão origem ao <span class="comunicado__brand">Sales Costa Advogados</span>
    </h2>

    <div class="comunicado__content">
      <p class="comunicado__paragraph">
        O mercado jurídico ganha uma nova banca desenvolvida para atuar nas áreas mais críticas das decisões empresariais e familiares. A Higasi Sales Advogados e Rodrigo Moreira da Costa unem suas trajetórias e expertises para celebrar o início do <span class="comunicado__brand">Sales Costa Advogados</span>.
      </p>

      <p class="comunicado__paragraph">
        A nova banca consolida mais de uma década de atuação estratégica dos fundadores no acompanhamento de litígios de alta complexidade, consultoria tributária preventiva, reestruturações societárias e planejamento patrimonial.
      </p>

      <blockquote class="comunicado__quote">
        <p class="comunicado__quote-text">
          "A ideia surgiu de uma constatação simples: nossos clientes exigiam um modelo de advocacia que combinasse rigor técnico artesanal com agilidade e visão de negócios. Unir nossas forças foi o passo natural para oferecer esse padrão de entrega."
        </p>
        <cite class="comunicado__quote-author">— Dilson Higasi Sales, Sócio-Fundador</cite>
      </blockquote>

      <blockquote class="comunicado__quote">
        <p class="comunicado__quote-text">
          "A união reflete uma evolução necessária no atendimento jurídico corporativo. Consolidados entre São Paulo e Florianópolis, aproximamos nossa estrutura física dos principais centros de decisão dos nossos clientes."
        </p>
        <cite class="comunicado__quote-author">— Rodrigo Moreira da Costa, Sócio-Fundador</cite>
      </blockquote>

      <p class="comunicado__paragraph">
        O <span class="comunicado__brand">Sales Costa Advogados</span> inicia suas atividades de forma totalmente integrada entre as sedes de São Paulo e Florianópolis, atuando de forma transversal nas frentes tributária, societária, cível, imobiliária e trabalhista.
      </p>
    </div>
  </div>
</section>

---

## 3. CSS Specification

```css
/* ==========================================================================
   3.1 Base Styles (Mobile First: < 768px)
   ========================================================================== */
.comunicado {
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: var(--section-pad-y) var(--section-pad-x);
  position: relative;
  overflow: hidden;
}

.comunicado__container {
  max-width: 860px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  /* fade-in de entrada (JS adiciona .is-visible via IntersectionObserver) */
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.comunicado__container.is-visible {
  opacity: 1;
  transform: none;
}

.comunicado__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: var(--text-eyebrow);
  font-weight: 500;
  color: var(--color-lima);
  letter-spacing: var(--eyebrow-tracking); /* 3px — token global */
  margin-bottom: 16px;
  text-transform: uppercase;
}

/* Marcador verde à esquerda do texto — assets/marcador_verde.png (15x15) */
.comunicado__eyebrow-mark {
  flex: 0 0 auto;
  display: block;
  width: 10px;
  height: 10px;
}

.comunicado__title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  line-height: 1.25;
  font-weight: 600;
  margin-bottom: 32px;
  color: var(--color-white);
}

/* "Sales Costa Advogados" destacado em Lima ao longo do texto da seção */
.comunicado__brand {
  color: var(--color-lima);
}

.comunicado__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.comunicado__paragraph {
  font-size: var(--text-body);
  line-height: 1.7;
  color: var(--color-text-light);
  font-weight: 300;
}

.comunicado__quote {
  border-left: 3px solid var(--color-taupe);
  padding-left: 20px;
  margin: 12px 0;
  background: rgba(255, 255, 255, 0.02);
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 16px;
  border-radius: 0 4px 4px 0;
}

.comunicado__quote-text {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.6;
  color: var(--color-white);
  margin-bottom: 8px;
}

.comunicado__quote-author {
  display: block;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  color: var(--color-taupe);
}

/* ==========================================================================
   3.2 Desktop Breakpoint (≥ 1024px)
   ========================================================================== */
@media (min-width: 1024px) {
  .comunicado__quote {
    padding-left: 28px;
    margin: 20px 0;
  }

  .comunicado__quote-text {
    font-size: 1.25rem;
  }
}

/* ==========================================================================
   3.3 Reduced Motion
   ========================================================================== */
@media (prefers-reduced-motion: reduce) {
  .comunicado__container {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

---

## 4. JavaScript Specification

Esta seção não requer dependências de script ativas complexas além do disparo de classe de animação suave via `IntersectionObserver` genérico do arquivo `js/animations.js`:

```javascript
// js/animations.js — Disparo de entrada da seção Comunicado
document.addEventListener('DOMContentLoaded', () => {
  const comunicadoSection = document.querySelector('.comunicado__container');
  if (comunicadoSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(comunicadoSection);
  }
});
```

---

## 5. Accessibility (A11y) Requirements

- **Contraste de Cor:** Texto branco `#FFFFFF` sobre `#404347` ≈ 9.5:1 (AAA). Texto claro `#D1D5DB` sobre `#404347` ≈ 7.5:1 (AA/AAA para texto grande). Autoria das citações em Taupe `#AA9B8F` ≈ 4.6:1 (AA).
- **Movimento:** o fade-in de `.comunicado__container` é desativado sob `prefers-reduced-motion: reduce` (conteúdo já visível, sem `transition`).
- **Semântica HTML:** Elementos `<blockquote>` e `<cite>` estruturam as citações formais dos sócios.

---

## 6. Content Data Model

```json
{
  "comunicado": {
    "eyebrow": "COMUNICADO AO MERCADO",
    "title": "Dilson Higasi Sales e Rodrigo Moreira da Costa se unem e dão origem ao Sales Costa Advogados",
    "paragraphs": [
      "O mercado jurídico ganha uma nova banca...",
      "A nova banca consolida mais de uma década...",
      "O Sales Costa Advogados inicia suas atividades..."
    ],
    "quotes": [
      {
        "text": "A ideia surgiu de uma constatação simples...",
        "author": "Dilson Higasi Sales, Sócio-Fundador"
      },
      {
        "text": "A união reflete uma evolução necessária...",
        "author": "Rodrigo Moreira da Costa, Sócio-Fundador"
      }
    ]
  }
}
```

---

## 7. Acceptance Criteria (Technical)

### CA-01: Exibição do Texto do Comunicado
- Todos os 5 parágrafos e 2 citações dos fundadores devem ser renderizados com legibilidade completa em fundo `#404347`.

### CA-02: Comportamento Responsivo no Mobile
- Em viewports de 320px, o container de texto ocupa 100% da largura com padding lateral (`--section-pad-x`) sem gerar rolagem horizontal (`overflow-x: hidden`).

### CA-03: Fade-in de entrada
- Ao entrar no viewport (≥ 20% visível), `.comunicado__container` recebe `.is-visible` (uma única vez — `observer.unobserve`). Sob `prefers-reduced-motion: reduce`, o conteúdo já aparece visível sem animação.

---

## 8. Dependencies & Integration Points

- **CSS Variables:** `--color-dark`, `--color-lima`, `--color-taupe`, `--color-white`, `--color-text-light`, `--text-h2`, `--text-body`, `--text-eyebrow`, `--font-display`, `--section-pad-x`, `--section-pad-y`.
- **Tipografia:** `--font-display` e `--font-body` resolvem ambos para **Montserrat** (fonte única do site, definida em `css/variables.css`). O `.comunicado__quote-text` mantém `font-style: italic` para diferenciação das citações.
- **JS:** `index.html` deve carregar `js/animations.js` (`<script defer>`) — hospeda o `IntersectionObserver` do `.comunicado__container`.
- **Asset:** `assets/marcador_verde.png` (15×15) — marcador verde do eyebrow, render `10×10px` (reutiliza a pasta `assets/` da US-01; copiar de `images/`).
- **Files Affected:** `index.html`, `css/sections.css`, `js/animations.js`, `assets/marcador_verde.png`.

