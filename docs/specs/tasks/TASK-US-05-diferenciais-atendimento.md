# Task Breakdown — US-05: Por Que Sales Costa (Diferenciais de Atendimento)

> **SPEC de Referência:** [`SPEC-US-05-diferenciais-atendimento.md`](../SPEC-US-05-diferenciais-atendimento.md)  
> **Componente:** Componente 5 (Por Que Sales Costa / Diferenciais)  
> **Target Files:** `index.html`, `css/sections.css`, `js/animations.js`

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
- No arquivo `index.html`, insira a tag `<section id="diferenciais" class="diferenciais">` em ambiente Dark `#404347`.
- Adicione a eyebrow em tom Lima `POR QUE SALES COSTA` e o H2 `O diferencial está em como acompanhamos cada caso.`.
- Crie a estrutura dos 4 diferenciais: *Atendimento personalizado*, *Equipe especializada*, *Resultados comprovados* e *Ética & transparência*, cada um contendo ícone/número indicador, título e descrição.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`, aplique `background-color: var(--color-dark)` e `color: var(--color-white)`.
- Configure o layout responsivo: 1 coluna vertical no mobile (< 768px) com padding interno de 24px entre cartões; grid 2×2 no tablet (768px – 1023px); 4 colunas horizontais em linha no desktop (≥ 1024px).
- Garanta alinhamento visual uniforme entre todos os cartões.

### Passo 3: Comportamento JavaScript
- Em `js/animations.js`, adicione observador `IntersectionObserver` nos cartões `.diferencial-card` aplicando transição CSS `opacity` e `translateY` com atraso intercalado de 100ms.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Os 4 diferenciais de atendimento são exibidos com clareza visual e peso uniforme.
- [ ] **[CA-02]** Em dispositivos móveis (< 768px), os cartões empilham-se em 1 coluna vertical com padding interno de 24px.
- [ ] **[RN-01]** O texto descritivo evidencia a atuação direta dos sócios sem delegação generalista.
- [ ] **[A11y]** O contraste da tipografia atinge a aprovação WCAG AA (texto branco sobre `#404347`).
