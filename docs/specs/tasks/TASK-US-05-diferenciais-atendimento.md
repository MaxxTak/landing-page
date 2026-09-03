# Task Breakdown — US-05: Por Que Sales Costa (Diferenciais de Atendimento)

> **SPEC de Referência:** [`SPEC-US-05-diferenciais-atendimento.md`](../SPEC-US-05-diferenciais-atendimento.md)  
> **Componente:** Componente 5 (Por Que Sales Costa / Diferenciais)  
> **Target Files:** `index.html`, `css/sections.css`, `js/animations.js` · asset `assets/marcador_verde.png` (já copiado na US-02)  
> **Ordem:** inserir após `<section id="areas">` (hero → comunicado → sobre → areas → diferenciais)

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="diferenciais">` em fundo Dark contendo o H2 e os 4 cartões de diferenciais. |
| `css/sections.css` | **[MODIFY]** | Adicionar regras CSS para o grid de diferenciais (1 coluna no mobile, 2×2 no tablet, 4 colunas no desktop). |
| `js/animations.js` | **[MODIFY]** | Adicionar revelação progressiva com fade-in em cascata (stagger 100ms) ao rolar a página. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- Em `index.html` (após `#areas`), insira `<section id="diferenciais" class="diferenciais" aria-labelledby="diferenciais-heading">` em ambiente Dark `#404347`.
- Eyebrow `<p class="diferenciais__eyebrow" aria-hidden="true">` com `<img class="diferenciais__eyebrow-mark" src="assets/marcador_verde.png" alt="">` + texto `Por que Sales Costa`.
- H2 `id="diferenciais-heading"`: `O <span class="diferenciais__heading-accent">diferencial</span> está em como acompanhamos <span class="diferenciais__heading-accent">cada caso</span>.`
- 4 `<article class="diferencial-card" data-animate="fade-up" data-delay="0|100|200|300">`: *Atendimento personalizado*, *Equipe especializada*, *Resultados comprovados*, *Ética & transparência*. Cada card: `<img class="diferencial-card__corner" ...>` + `<div class="diferencial-card__num" aria-hidden="true">1..4</div>` (número indicador — **sem ícone SVG**) + título + descrição.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`: `.diferenciais` fundo `var(--color-dark)`; grid `1fr` → `repeat(2, 1fr)` (≥768px) → `repeat(4, 1fr)` (≥1024px); card padding `24px` → `2rem` → `2.5rem 2rem`.
- `.diferenciais__eyebrow` `inline-flex; gap: 8px` + `.diferenciais__eyebrow-mark { width: 10px; height: 10px }`.
- `.diferenciais__heading { font-weight: 600 }` + `.diferenciais__heading-accent { color: var(--color-lima) }`.
- `.diferencial-card` com `position: relative`, fundo `var(--color-dark-alt)`, estado inicial `opacity: 0; transform: translateY(20px)`; `:hover` → `border-color: rgba(228,255,143,0.35)`; `:focus-visible` → `outline: 2px solid var(--color-lima)`.
- `.diferencial-card__corner { position: absolute; top: 20px; right: 20px; width/height: 15px; opacity: 0.5; pointer-events: none }`.
- `.diferencial-card__num { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 600; line-height: 1; color: var(--color-taupe) }` (substitui as regras `.diferencial-card__icon`).

### Passo 3: Comportamento JavaScript
- Em `js/animations.js`, adicione `initDiferenciaisAnimation()` (SPEC-US-05 §4.2): lê `data-delay` de cada `.diferencial-card[data-animate="fade-up"]`, aplica `style.transitionDelay`, e um `IntersectionObserver` (`threshold: 0.2`, `rootMargin: '0px 0px -40px 0px'`) adiciona `.is-visible` (`unobserve` após 1x). Guard para `prefers-reduced-motion`. Auto-invoca via `document.readyState`.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Os 4 diferenciais são exibidos com **número indicador** (`1`–`4`, `font-weight: 600`, cor Taupe), título e descrição + `.diferencial-card__corner` no canto superior direito.
- [ ] **[CA-02]** Em < 768px, os cartões empilham em 1 coluna com `padding: 24px`; grid 2×2 (≥768px); 4 colunas (≥1024px). Sem rolagem horizontal.
- [ ] **[CA-00]** Eyebrow "Por que Sales Costa" com `marcador_verde.png` (~10px) à esquerda; `.diferenciais__heading` `font-weight: 600`; "diferencial" e "cada caso" em Lima (`rgb(228,255,143)`).
- [ ] **[Anim]** Cards iniciam `opacity: 0` / `translateY(20px)` e recebem `.is-visible` ao entrar no viewport com stagger (0/100/200/300ms via `transitionDelay`); sob `prefers-reduced-motion` já aparecem visíveis.
- [ ] **[States]** `:hover` → borda Lima 35%; `:focus-visible` → outline Lima.
- [ ] **[A11y]** Texto branco sobre `#404347` ≈ 9.5:1; `.diferencial-card__num` e `.diferencial-card__corner` decorativos (`aria-hidden="true"` / `alt=""`) — o `<h3>` carrega o significado.
