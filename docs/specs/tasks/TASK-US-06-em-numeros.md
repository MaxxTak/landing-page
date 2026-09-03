# Task Breakdown — US-06: Em Números (Métricas de Autoridade)

> **SPEC de Referência:** [`SPEC-US-06-em-numeros.md`](../SPEC-US-06-em-numeros.md)  
> **Componente:** Componente 6 (Métricas em Números)  
> **Target Files:** `index.html`, `css/sections.css`, `js/animations.js`  
> **Ordem:** inserir após `<section id="diferenciais">` (hero → comunicado → sobre → areas → diferenciais → numeros)

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="numeros">` contendo os 4 contadores com atributos `data-target` (15, 500, 300, 5). |
| `css/sections.css` | **[MODIFY]** | Adicionar regras do banner **Lima `#E4FF8F`** (Fase 17), grid 2×2 no mobile e 4 colunas em linha no desktop, **sem divisores** em nenhum breakpoint. Números/labels/sufixo em quase-preto `#2B2B2B`. |
| `js/animations.js` | **[MODIFY]** | Implementar função `initCounters()` acionando incremento numérico de 0 ao valor alvo via `requestAnimationFrame`. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, crie a tag `<section id="numeros" class="numeros">` em fundo Lima `#E4FF8F` (Fase 17 — referência `sales-costa-layout1.png`).
- Monte os 4 blocos de métricas com os atributos `data-target`:
  1. `<span class="numeros__count" data-target="15">0</span>` + `ANOS DE EXPERIÊNCIA`
  2. `<span class="numeros__count" data-target="500">0</span>` + `CLIENTES ATENDIDOS`
  3. `<span class="numeros__count" data-target="300">0</span>` + `CASOS CONCLUÍDOS`
  4. `<span class="numeros__count" data-target="5">0</span>` + `ÁREAS DE ESPECIALIZAÇÃO`

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`, aplique `background-color: var(--color-lima)` (Fase 17).
- Números (`.numeros__count`), sufixo (`.numeros__suffix`) e labels (`.numeros__label`) em `var(--color-text-dark)` `#2B2B2B`.
- No mobile (< 768px), utilize `display: grid; grid-template-columns: repeat(2, 1fr)` (grid 2×2).
- No tablet/desktop (≥ 768px), altere para `grid-template-columns: repeat(4, 1fr)` **sem divisores verticais** (o layout1 mostra faixa lima limpa).
- Formate a fonte dos números em grande escala via `font-size: clamp(2.5rem, 8vw, 4rem)`.

### Passo 3: Comportamento JavaScript
- Em `js/animations.js`, adicione `animateCounter(el, target, duration=2000)` — `requestAnimationFrame` + easeOutCubic, `el.textContent = Math.round(eased * target)`, valor exato ao final.
- `initCounters()`: pega `#numeros`, os `.numeros__count` e `.numeros__item`. `IntersectionObserver` (`threshold: 0.4`) → adiciona `.is-visible` aos itens + dispara `animateCounter` em cada contador, depois `observer.disconnect()` (RN-01, uma vez só).
- Guard `window.matchMedia('(prefers-reduced-motion: reduce)')` → escreve `data-target` direto e `.is-visible`, sem observer (RN-02).
- Bootstrap: `if (document.readyState === 'loading') { addEventListener('DOMContentLoaded', initCounters) } else { initCounters() }` (função autônoma, sem `export`/`import`).

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Ao rolar até `#numeros`, os contadores vão de 0 → 15 / 500 / 300 / 5 em ~2s (easeOutCubic).
- [ ] **[CA-02]** `< 768px`: grid **2×2**; `≥ 768px`: 4 colunas em linha, **sem divisores** em nenhum breakpoint (Fase 17).
- [ ] **[RN-01]** Animação dispara **uma única vez** (`observer.disconnect()`).
- [ ] **[RN-02]** Com `prefers-reduced-motion: reduce`, números finais aparecem estáticos, sem observer.
- [ ] **[Layout]** Fundo Lima `#E4FF8F` (Fase 17); número `font-weight: 700` + `font-variant-numeric: tabular-nums`; sufixo `+` e label uppercase em `#2B2B2B` `letter-spacing: 2px`. Sem rolagem horizontal.
