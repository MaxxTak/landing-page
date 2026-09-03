# Task Breakdown — US-08: Nossa Equipe (Cards dos Sócios Responsáveis)

> **SPEC de Referência:** [`SPEC-US-08-nossa-equipe-socios.md`](../SPEC-US-08-nossa-equipe-socios.md)  
> **Componente:** Componente 8 (Nossa Equipe)  
> **Target Files:** `index.html`, `css/components.css`, `css/sections.css`, `js/animations.js`  
> **Ordem:** inserir **após `<section id="depoimentos">`** (… → numeros → depoimentos → equipe)

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="equipe">` após `#depoimentos`: eyebrow ciano com marcador + H2 (weight 600) + grid de 4 cards com **fotos reais** (`advogado1..4.png`) e link "Ver LinkedIn". |
| `css/components.css` | **[MODIFY]** | `.socio-card` — avatar quadrado `aspect-ratio: 1 / 1`, foto `object-fit: cover`; hover: overlay + zoom `scale(1.05)` + revelar "Ver LinkedIn" (`@media (hover: hover)`); fallback touch (`@media (hover: none)`); fade-in `.is-visible`; `prefers-reduced-motion`. |
| `css/sections.css` | **[MODIFY]** | `.equipe*` — fundo branco, eyebrow `var(--color-cyan)` + `.equipe__eyebrow-mark` 10×10, `.equipe__title { font-weight: 600 }`, grid responsivo (1 → 2×2 → 4 colunas). |
| `js/animations.js` | **[MODIFY]** | `initEquipeAnimation()` — revelação em cascata com `IntersectionObserver` (`threshold: 0.2`, `setTimeout(idx*100)`), guards de `prefers-reduced-motion` / no-IO, bootstrap por `document.readyState`. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, crie a tag `<section id="equipe" class="equipe">` em fundo Branco Puro (`#FFFFFF`), **após `#depoimentos`**.
- Eyebrow: `<span class="equipe__eyebrow">` com `<img class="equipe__eyebrow-mark" src="assets/marcador_ciano.png">` + texto `NOSSA EQUIPE`. H2 `Os sócios responsáveis por cada caso.`.
- Grid de 4 sócios (*Antônio Sales*, *Camila Costa*, *Felipe Ramos*, *Luísa Martins*): cada avatar contém `<img class="socio-card__photo" src="assets/advogadoN.png" alt="Retrato de …">` + `<a class="socio-card__linkedin" href="#" aria-label="Ver LinkedIn de …">Ver LinkedIn</a>`; abaixo, nome, cargo, área e registro OAB.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/components.css`, `.socio-card__avatar`: `position: relative; width: 100%; aspect-ratio: 1 / 1; background-color: var(--color-off-white); border-radius: 4px; overflow: hidden`.
- `.socio-card__photo`: `width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.45s ease`.
- `.socio-card__initials` (fallback): `font-size: 2.5rem; font-weight: 700; color: var(--color-taupe)`.
- **Hover** (`@media (hover: hover)`): `.socio-card:hover .socio-card__photo { transform: scale(1.05) }`; overlay via `.socio-card__avatar::after` → `rgba(43,43,43,0.45)`; `.socio-card__linkedin` de `opacity: 0` → `1` (sem underline/borda, `font-weight: 400`, branco → lima no `:hover`). Fallback `@media (hover: none)`: overlay `0.35` + link visível. `:focus-visible` no link com outline lima.
- `.socio-card` com `opacity: 0; transform: translateY(20px)` → `.is-visible`; `@media (prefers-reduced-motion: reduce)` neutraliza tudo.
- Em `css/sections.css`: `.equipe__eyebrow` `color: var(--color-cyan)`, `inline-flex`; `.equipe__eyebrow-mark` 10×10; `.equipe__title { font-weight: 600 }`; grid 1 col (< 768px) → `repeat(2,1fr)` (768–1023px) → `repeat(4,1fr)` (≥ 1024px).

### Passo 3: Comportamento JavaScript
- Em `js/animations.js`, adicione `initEquipeAnimation()` — `IntersectionObserver` (`threshold: 0.2`) que adiciona `.is-visible` aos `.socio-card` em cascata (`setTimeout(idx * 100)`), `unobserve` após 1×; guards `prefers-reduced-motion` / sem `IntersectionObserver` → aplica `.is-visible` direto; bootstrap por `document.readyState`.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Os 4 sócios são exibidos com foto, nome, cargo, área e registro OAB. As 4 fotos (`advogado1..4.png`) carregam sem distorção.
- [ ] **[CA-02]** Em telas móveis (< 768px), os cards empilham-se em 1 coluna sem distorção das caixas quadradas de avatar.
- [ ] **[CA-03]** Grid 1 → 2×2 → 4 colunas; sem rolagem horizontal em 375px / 1313px.
- [ ] **[CA-04]** Hover: foto com zoom `scale(1.05)` + overlay escuro + "Ver LinkedIn" revelado; em touch, overlay/link já visíveis; `Tab` mostra outline lima no link.
- [ ] **[CA-05]** Cascata de fade-in dos 4 cards via `IntersectionObserver` (uma vez); `prefers-reduced-motion` → aparecem estáticos.
- [ ] **[CA-06]** Eyebrow computa `#3DD6D0` + marcador ciano 10×10; `.equipe__title` `font-weight: 600`.
- [ ] **[Pendência]** `href="#"` dos "Ver LinkedIn" e `OAB/SP 000.000` são placeholders.
