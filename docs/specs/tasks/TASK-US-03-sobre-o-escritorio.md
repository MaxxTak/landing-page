# Task Breakdown — US-03: Sobre o Escritório & Pilares Estratégicos

> **SPEC de Referência:** [`SPEC-US-03-sobre-o-escritorio.md`](../SPEC-US-03-sobre-o-escritorio.md)  
> **Componente:** Componente 3 (Sobre o Escritório)  
> **Target Files:** `index.html`, `css/variables.css`, `css/sections.css`, `js/animations.js` · assets: `assets/logo_s_background.png` (já copiado na US-01), `assets/marcador_ciano.png` (copiar de `images/`)

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="sobre">` com layout em 2 colunas, H2 institucional, parágrafos de apresentação e os 3 pilares estratégicos. |
| `css/sections.css` | **[MODIFY]** | Adicionar regras CSS para `.sobre`, `.sobre__container`, `.pillar` em fundo Off-White `#F8F6F4` e divisores finos. |
| `js/animations.js` | **[MODIFY]** | Implementar disparo de animação com stagger (`data-delay`) nos cartões de pilares. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, crie a tag `<section id="sobre" class="sobre">` em fundo Off-White.
- Estruture a coluna esquerda com o H2 *"Uma trajetória construída sobre confiança e critério técnico."*.
- Estruture a coluna direita com o texto institucional e os 3 pilares (*Comprometimento*, *Confidencialidade* e *Excelência*), usando `<article class="pillar">` com atributos `data-delay`.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`, configure `.sobre` com `background-color: var(--color-off-white)` e `color: var(--color-text-dark)`.
- No mobile (< 768px), utilize `flex-direction: column` com os pilares organizados em 1 coluna vertical separados por linhas horizontais `border-top: 1px solid #D9D3CE` e espaçamento interno mínimo de `16px`.
- No desktop (≥ 1024px), utilize `display: flex` em 2 colunas proporcionais (40% H2 / 60% conteúdo e pilares).

### Passo 3: Comportamento JavaScript
- Em `js/animations.js`, registre o `IntersectionObserver` para os elementos `.pillar` para aplicar a classe `.is-visible` com atraso sequencial baseado no atributo `data-delay`.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Os 3 pilares (*Comprometimento*, *Confidencialidade*, *Excelência*) são exibidos com nome em `font-weight: 500` e descrição em `font-style: italic`.
- [ ] **[CA-02]** Em telas < 768px, o layout colapsa para 1 coluna empilhada sem quebra de margens nem rolagem horizontal.
- [ ] **[RN-01]** Divisores finos `border-top: 1px solid #D9D3CE` separam visualmente os pilares.
- [ ] **[RN-02]** `gap: 1rem` (≥ 16px) entre pilares no mobile.
- [ ] **[Estilo]** Eyebrow "SOBRE" acima do H2, cor ciano `#3DD6D0` (`--color-cyan`), com `assets/marcador_ciano.png` (render ~10px) à esquerda.
- [ ] **[Estilo]** `.sobre__headline` com `font-weight: 600`.
- [ ] **[Estilo]** Fundo Off-White `#F8F6F4`; `.sobre__watermark` (`logo_s_background.png`) com `opacity: var(--watermark-opacity)` (**0.3**) + `filter: brightness(0)`, clipada por `overflow: hidden`.
- [ ] **[Desktop]** ≥1024px: 2 colunas 40/60 com a coluna esquerda `position: sticky` (`top: calc(80px + 2rem)`).
- [ ] **[Anim]** `.animate-fade-up` recebe `.is-visible` ao entrar no viewport com stagger por `data-delay`; sob `prefers-reduced-motion` aparecem visíveis sem animação.
