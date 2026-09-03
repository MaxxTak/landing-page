# Task Breakdown — US-02: Comunicado ao Mercado (União das Bancas)

> **SPEC de Referência:** [`SPEC-US-02-comunicado-ao-mercado.md`](../SPEC-US-02-comunicado-ao-mercado.md)  
> **Componente:** Componente 2 (Comunicado ao Mercado)  
> **Target Files:** `index.html`, `css/sections.css`, `js/animations.js`, `assets/marcador_verde.png`

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="comunicado">` (após `#hero`) com eyebrow Lima, H2, 3 parágrafos e 2 blockquotes. Carregar `js/animations.js` (`<script defer>`). |
| `css/sections.css` | **[MODIFY]** | Adicionar regras CSS para `.comunicado`, `.comunicado__container` (incl. fade-in `opacity/transform` + `.is-visible` + `prefers-reduced-motion`), `.comunicado__quote`, `.comunicado__quote-text`, etc. |
| `js/animations.js` | **[MODIFY]** | Adicionar IntersectionObserver em `.comunicado__container` para aplicar `.is-visible` (threshold 0.2, `unobserve` após 1x). |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, logo após a seção `#hero`, insira `<section id="comunicado" class="comunicado" aria-labelledby="comunicado-title">`.
- Dentro do `<div class="comunicado__container">` (max 860px), insira a eyebrow em tom Lima `COMUNICADO AO MERCADO`, a headline H2 (`id="comunicado-title"`), os 3 parágrafos de contexto e os dois blocos `<blockquote class="comunicado__quote">` com os depoimentos dos sócios Dilson Higasi Sales e Rodrigo Moreira da Costa (ordem: P1, P2, blockquote 1, blockquote 2, P3).
- Adicione `<script src="js/animations.js" defer></script>` antes de `</body>`.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`, aplique `background-color: var(--color-dark)`, `position: relative` e `overflow: hidden` na classe `.comunicado`.
- Configure `.comunicado__container` com `max-width: 860px; margin: 0 auto` e o estado inicial de fade-in: `opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease`; adicione `.comunicado__container.is-visible { opacity: 1; transform: none }`.
- Estilize as citações `.comunicado__quote` com `border-left: 3px solid var(--color-taupe); padding-left: 20px`; `.comunicado__quote-text` em `font-style: italic`.
- Adicione media query desktop (≥ 1024px) ajustando o padding interno das citações e o `font-size` do `.comunicado__quote-text`.
- Adicione `@media (prefers-reduced-motion: reduce)` forçando `.comunicado__container` visível sem `transition`.

### Passo 3: Comportamento JavaScript
- Em `js/animations.js`, observe `.comunicado__container` via `IntersectionObserver` (`threshold: 0.2`) e aplique `.is-visible` ao entrar no campo de visão, com `observer.unobserve(entry.target)` para disparar apenas uma vez.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Os 3 parágrafos institucionais e as 2 citações dos fundadores são exibidos com legibilidade em fundo `#404347`.
- [ ] **[CA-02]** Em telas de 320px, o container ocupa 100% da largura com padding lateral sem gerar rolagem horizontal (`overflow-x: hidden`).
- [ ] **[CA-03]** `.comunicado__container` recebe `.is-visible` ao entrar no viewport (uma única vez); sob `prefers-reduced-motion` aparece visível sem animação.
- [ ] **[A11y]** `<blockquote>` + `<cite>` estruturam as citações; texto branco `#FFFFFF` sobre `#404347` ≈ 9.5:1.
- [ ] **[Estilo]** Eyebrow com `assets/marcador_verde.png` (render ~10px) à esquerda do texto, alinhado ao centro (`inline-flex`, `gap: 8px`).
- [ ] **[Estilo]** `.comunicado__title` com `font-weight: 600`.
- [ ] **[Estilo]** Toda ocorrência de "Sales Costa Advogados" no texto da seção envolta em `<span class="comunicado__brand">` (cor `--color-lima`) — H2, P1 e P3.
