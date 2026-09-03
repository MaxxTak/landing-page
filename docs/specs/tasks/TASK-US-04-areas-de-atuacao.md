# Task Breakdown — US-04: Áreas de Atuação (Grid de Especialidades)

> **SPEC de Referência:** [`SPEC-US-04-areas-de-atuacao.md`](../SPEC-US-04-areas-de-atuacao.md)  
> **Componente:** Componente 4 (Grid de Áreas de Atuação)  
> **Target Files:** `index.html`, `css/components.css`, `css/sections.css`, `js/main.js`

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="areas">` com grid de 6 cards de especialidades jurídicas. |
| `css/components.css` | **[MODIFY]** | Adicionar estilização dos cards `.area-card`, ícones SVG em tom Taupe e efeitos de hover (`translateY(-4px)` e borda inferior Taupe). |
| `css/sections.css` | **[MODIFY]** | Adicionar regras do layout `.areas__grid` com `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`. |
| `js/main.js` | **[MODIFY]** | Adicionar suporte a scroll suave nos links *"Saiba mais →"* direcionando ao formulário `#contato`. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, insira a tag `<section id="areas" class="areas">` em fundo Branco Puro (`#FFFFFF`).
- Crie o cabeçalho da seção com eyebrow `ÁREAS DE ATUAÇÃO` e H2 `Especialização que cobre cada frente do seu negócio.`.
- Monte o grid de 6 `<article class="area-card">` cobrindo as especialidades: *Direito Empresarial*, *Direito Tributário*, *Direito Trabalhista*, *Direito Civil*, *Direito Societário* e *Compliance & Governança*.
- Cada card deve incluir um ícone SVG em linha fina, título, breve descrição e botão/link *"Saiba mais →"*.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`, defina o grid responsivo: `display: grid; grid-template-columns: 1fr; gap: 24px` no mobile.
- Em breakpoint tablet (≥ 768px), altere para `grid-template-columns: repeat(2, 1fr)`.
- Em breakpoint desktop (≥ 1024px), altere para `grid-template-columns: repeat(3, 1fr)`.
- Em `css/components.css`, estilize `.area-card` com fundo Off-White `#F8F6F4`, `border-bottom: 2px solid transparent` e transição suave.
- Defina o estado `:hover` elevando o card (`transform: translateY(-4px)`) e alterando a borda inferior para Taupe `#AA9B8F`.
- Garanta que o link *"Saiba mais →"* possua altura mínima de 44px para facilidade de toque tátil.

### Passo 3: Comportamento JavaScript
- Em `js/main.js`, vincule evento de clique aos links `.area-card__link` direcionando a rolagem da página até a seção `#contato`.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Os 6 cards de especialidades são exibidos com ícone, título, descrição e link *"Saiba mais →"*.
- [ ] **[CA-02]** Em telas de 375px, os cards empilham-se em 1 coluna vertical sem estouro de margem.
- [ ] **[RN-01]** O passar do cursor ou toque eleva o card com borda inferior em tom Taupe `#AA9B8F`.
- [ ] **[A11y]** Links *"Saiba mais →"* possuem rótulos descritivos `aria-label` para leitores de tela.
