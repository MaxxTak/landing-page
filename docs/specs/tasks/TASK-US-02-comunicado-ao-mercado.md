# Task Breakdown — US-02: Comunicado ao Mercado (União das Bancas)

> **SPEC de Referência:** [`SPEC-US-02-comunicado-ao-mercado.md`](../SPEC-US-02-comunicado-ao-mercado.md)  
> **Componente:** Componente 2 (Comunicado ao Mercado)  
> **Target Files:** `index.html`, `css/sections.css`, `js/animations.js`

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="comunicado">` contendo o monograma "S" decorativo, eyebrow Lima, H2, 5 parágrafos e 2 blockquotes. |
| `css/sections.css` | **[MODIFY]** | Adicionar regras CSS para `.comunicado`, `.comunicado__watermark`, `.comunicado__quote` e marca d'água sutil. |
| `js/animations.js` | **[MODIFY]** | Adicionar IntersectionObserver para revelar a seção com fade-in suave na rolagem. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, logo após a seção `#hero`, insira a tag `<section id="comunicado" class="comunicado">`.
- Inclua a div `<div class="comunicado__watermark" aria-hidden="true">S</div>`.
- Dentro do container de 860px, insira a eyebrow em tom Lima `COMUNICADO AO MERCADO`, a headline H2, os parágrafos de contexto e os dois blocos `<blockquote class="comunicado__quote">` com os depoimentos dos sócios Dilson Higasi Sales e Rodrigo Moreira da Costa.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`, aplique `background-color: var(--color-dark)` e `position: relative` na classe `.comunicado`.
- Configure a `.comunicado__watermark` com `position: absolute; right: -20px; font-size: 32rem; color: rgba(255,255,255,0.03); z-index: 0; pointer-events: none`.
- Estilize as citações `.comunicado__quote` com `border-left: 3px solid var(--color-taupe); padding-left: 20px; font-style: italic`.
- Adicione media query para telas desktop (≥ 1024px) ampliando o tamanho da marca d'água para `40rem` e ajustando o padding interno.

### Passo 3: Comportamento JavaScript
- Em `js/animations.js`, inclua a observação da classe `.comunicado__container` via `IntersectionObserver` para aplicar a classe `.is-visible` ao entrar no campo de visão.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Todos os 5 parágrafos institucionais e as 2 citações dos fundadores são exibidos com legibilidade em fundo `#404347`.
- [ ] **[CA-02]** Em telas de 320px, o container possui padding de 20px sem gerar rolagem horizontal (`overflow-x: hidden`).
- [ ] **[A11y]** A marca d'água possui `aria-hidden="true"` e `pointer-events: none`, sendo ignorada por leitores de tela.
- [ ] **[A11y]** O contraste do texto atinge a métrica WCAG AAA (9.8:1 sobre o fundo dark).
