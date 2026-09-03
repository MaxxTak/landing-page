# Task Breakdown — US-03: Sobre o Escritório & Pilares Estratégicos

> **SPEC de Referência:** [`SPEC-US-03-sobre-o-escritorio.md`](../SPEC-US-03-sobre-o-escritorio.md)  
> **Componente:** Componente 3 (Sobre o Escritório)  
> **Target Files:** `index.html`, `css/sections.css`, `js/animations.js`

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

- [ ] **[CA-01]** Os 3 pilares (*Comprometimento*, *Confidencialidade*, *Excelência*) são exibidos com título em negrito e descrição em itálico.
- [ ] **[CA-02]** Em telas < 768px, o layout colapsa suavemente para 1 coluna empilhada sem quebra de margens.
- [ ] **[RN-01]** Divisores finos em tom Taupe/Bege (`#D9D3CE`) separam visualmente os pilares.
- [ ] **[RN-02]** Espaçamento mínimo de `16px` entre cartões de pilares no mobile.
