# Task Breakdown — US-04: Áreas de Atuação (Grid de Especialidades)

> **SPEC de Referência:** [`SPEC-US-04-areas-de-atuacao.md`](../SPEC-US-04-areas-de-atuacao.md)  
> **Componente:** Componente 4 (Grid de Áreas de Atuação)  
> **Target Files:** `index.html`, `css/components.css` (card), `css/sections.css` (layout + grid), `js/main.js` (só comentário), `assets/marcador_areia.png`  
> **Ordem:** inserir após `<section id="sobre">` (hero → comunicado → sobre → areas)

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="areas">` com grid de 6 cards. Eyebrow com marcador `areia`; H2 `weight 600` com "cada frente" em `<span class="areas__title-accent">`; cada card com `<img class="area-card__corner">` no canto superior direito. **Sem link "Saiba mais".** |
| `css/components.css` | **[MODIFY]** | `.area-card` (`position: relative`, fundo Off-White, `border-bottom: 2px transparent`, hover `translateY(-4px)` + borda Taupe) + `.area-card__corner` (`position: absolute; top/right: 20px; opacity: 0.5`). |
| `css/sections.css` | **[MODIFY]** | `.areas__grid` — `1fr` → `repeat(2, 1fr)` (≥768px) → `repeat(3, 1fr)` (≥1024px). `.areas__eyebrow` `inline-flex` + `.areas__eyebrow-mark`; `.areas__title { font-weight: 600 }` + `.areas__title-accent { color: var(--color-taupe) }`. |
| `js/main.js` | **[MODIFY]** | Apenas comentário — a US-04 não adiciona JS (cards informativos, sem link). |
| `assets/marcador_areia.png` | **[ADD]** | Copiar de `images/` (15×15). |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- Em `index.html` (após `#sobre`), insira `<section id="areas" class="areas" aria-labelledby="areas-title">` em fundo Branco Puro (`#FFFFFF`).
- Cabeçalho: `<span class="areas__eyebrow">` com `<img class="areas__eyebrow-mark" src="assets/marcador_areia.png" alt="">` + texto `ÁREAS DE ATUAÇÃO`; H2 `Especialização que cobre <span class="areas__title-accent">cada frente</span> do seu negócio.`.
- Grid de 6 `<article class="area-card">` (Empresarial, Tributário, Trabalhista, Civil, Societário, Compliance & Governança). Cada card: `<img class="area-card__corner" src="assets/marcador_areia.png" alt="" aria-hidden="true">` + ícone SVG linha fina + título + descrição. **Sem link "Saiba mais".**

### Passo 2: Estilização CSS (Mobile-First)
- `css/sections.css`: `.areas__grid` — `grid-template-columns: 1fr; gap: 24px` (mobile) → `repeat(2, 1fr)` (≥768px) → `repeat(3, 1fr); gap: 32px` (≥1024px). `.areas__eyebrow` `inline-flex; align-items: center; gap: 8px` + `.areas__eyebrow-mark { width: 10px; height: 10px }`. `.areas__title { font-weight: 600 }` + `.areas__title-accent { color: var(--color-taupe) }`.
- `css/components.css`: `.area-card` com `position: relative`, fundo `#F8F6F4`, `border-bottom: 2px solid transparent`, transição; `:hover` → `translateY(-4px)` + `border-bottom-color: var(--color-taupe)` + sombra. `.area-card__corner` → `position: absolute; top: 20px; right: 20px; width/height: 15px; opacity: 0.5; pointer-events: none`.

### Passo 3: Comportamento JavaScript
- **Nenhum JS.** Apenas comentário em `js/main.js` indicando que a US-04 não adiciona lógica (cards informativos, sem link).

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Os 6 cards são exibidos com ícone SVG, título e descrição — **sem link "Saiba mais"** — e com o marcador `area-card__corner` no canto superior direito (`opacity: 0.5`).
- [ ] **[CA-02]** Em 375px, os cards empilham-se em 1 coluna sem estouro nem rolagem horizontal.
- [ ] **[Grid]** 1 coluna (<768px) → 2 colunas (≥768px) → 3 colunas (≥1024px).
- [ ] **[CA-03]** Eyebrow com `marcador_areia.png` (~10px) à esquerda; `.areas__title` `font-weight: 600`; "cada frente" em Taupe (`rgb(170,155,143)`).
- [ ] **[RN-01]** `:hover` eleva o card (`translateY(-4px)`) e muda a `border-bottom` para Taupe `#AA9B8F`.
- [ ] **[A11y]** Ícones e `area-card__corner` com `aria-hidden="true"` / `alt=""`; sem elementos interativos na seção.
