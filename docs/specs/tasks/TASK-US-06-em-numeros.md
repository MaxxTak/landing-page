# Task Breakdown — US-06: Em Números (Métricas de Autoridade)

> **SPEC de Referência:** [`SPEC-US-06-em-numeros.md`](../SPEC-US-06-em-numeros.md)  
> **Componente:** Componente 6 (Métricas em Números)  
> **Target Files:** `index.html`, `css/sections.css`, `js/animations.js`

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="numeros">` contendo os 4 contadores com atributos `data-target` (15, 500, 300, 5). |
| `css/sections.css` | **[MODIFY]** | Adicionar regras do banner Off-White, grid 2×2 no mobile (sem divisores) e 4 colunas em linha no desktop (com divisores). |
| `js/animations.js` | **[MODIFY]** | Implementar função `initCounters()` acionando incremento numérico de 0 ao valor alvo via `requestAnimationFrame`. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, crie a tag `<section id="numeros" class="numeros">` em fundo Off-White `#F8F6F4`.
- Monte os 4 blocos de métricas com os atributos `data-target`:
  1. `<span class="numeros__count" data-target="15">0</span>` + `ANOS DE EXPERIÊNCIA`
  2. `<span class="numeros__count" data-target="500">0</span>` + `CLIENTES ATENDIDOS`
  3. `<span class="numeros__count" data-target="300">0</span>` + `CASOS CONCLUÍDOS`
  4. `<span class="numeros__count" data-target="5">0</span>` + `ÁREAS DE ESPECIALIZAÇÃO`

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`, aplique `background-color: var(--color-off-white)`.
- No mobile (< 768px), utilize `display: grid; grid-template-columns: repeat(2, 1fr)` (grid 2×2, sem divisores verticais).
- No desktop (≥ 1024px), altere para `grid-template-columns: repeat(4, 1fr)` com divisores verticais `border-right: 1px solid #D9D3CE` entre os itens.
- Formate a fonte dos números em grande escala via `font-size: clamp(2.5rem, 8vw, 4rem)`.

### Passo 3: Comportamento JavaScript
- Em `js/animations.js`, crie a função de animação de contagem com `requestAnimationFrame` em duração de ~2000ms.
- Registre o `IntersectionObserver` para disparar a animação uma única vez quando a seção entrar no campo de visão e em seguida desconectar o observador.
- Verifique a media query `window.matchMedia('(prefers-reduced-motion: reduce)')` para exibir os valores finais imediatamente em caso de preferência de movimento reduzido.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Ao rolar a página até a seção `#numeros`, os contadores iniciam em 0 e incrementam suavemente até os valores 15, 500, 300 e 5 em ~2s.
- [ ] **[CA-02]** Em dispositivos móveis (< 768px), as 4 métricas organizam-se em grid 2×2 sem divisores verticais.
- [ ] **[RN-01]** A animação é executada apenas uma única vez no primeiro scroll.
- [ ] **[RN-02]** Usuários com `prefers-reduced-motion: reduce` visualizam os números estáticos finais sem animação.
