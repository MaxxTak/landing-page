# Task Breakdown — US-09: Fale Conosco (Formulário de Contato & Informações)

> **SPEC de Referência:** [`SPEC-US-09-fale-conosco-formulario.md`](../SPEC-US-09-fale-conosco-formulario.md)  
> **Componente:** Componente 9 (Fale Conosco / Formulário)  
> **Target Files:** `index.html`, `css/components.css`, `css/sections.css`, `js/main.js`  
> **Ordem:** inserir **após `<section id="equipe">`** (… → depoimentos → equipe → contato)

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="contato">` após `#equipe`: eyebrow com **marcador verde**, dados institucionais à esquerda, `<form data-endpoint="">` com 5 campos e `#form-success` (`role="status"`, `tabindex="-1"`) à direita. |
| `css/components.css` | **[MODIFY]** | Inputs minimalistas sublinhados (`border-bottom`, `font-size: 16px !important`), `.btn--full` (100% → `auto` + `align-self: flex-start` no desktop), `[aria-busy]`, `.contato__success`. |
| `css/sections.css` | **[MODIFY]** | `.contato` fundo **`var(--color-footer-dark)`** (`#2B2D30`, mesmo tom do rodapé); `.contato__eyebrow` `inline-flex` + `.contato__eyebrow-mark` 10×10; 2 colunas 45/55 no desktop, 1 coluna no mobile. |
| `js/main.js` | **[MODIFY]** | Validação (obrigatórios + regex de e-mail) + envio: `const CONTACT_ENDPOINT_FALLBACK` / `form.dataset.endpoint`; com endpoint → `fetch POST FormData`; sem endpoint → simulação; `aria-busy` no botão; foco em `#form-success`. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, crie a tag `<section id="contato" class="contato">` em fundo **`var(--color-footer-dark)`** (`#2B2D30`), **após `#equipe`**.
- Eyebrow: `<span class="contato__eyebrow">` (texto em **Lima**) com `<img class="contato__eyebrow-mark" src="assets/marcador_verde.png">` + texto `FALE CONOSCO`.
- Coluna esquerda: H2 *"Entre em contato com nossos advogados."*, subtítulo, dados da sede (Av. Paulista), e-mail institucional e telefone.
- Coluna direita: `<form id="contact-form" method="post" action="" data-endpoint="" novalidate>` com os 5 campos: `Nome Completo` (required), `E-mail Corporativo` (required), `Telefone` (opcional), `Área de Interesse` (select com as 6 especialidades) e `Mensagem` (required). Botão `.btn.btn--primary.btn--full`.
- Inclua `<div id="form-success" class="contato__success" role="status" tabindex="-1" aria-hidden="true">` para a confirmação pós-envio.
- Comentário no HTML documentando o **ponto de integração de backend** (`data-endpoint`).

### Passo 2: Estilização CSS (Mobile-First & iOS Safari Rule)
- Em `css/components.css`, estilize `.form-input`, `.form-select` e `.form-textarea` com fundo transparente e `border-bottom: 1px solid rgba(255,255,255,0.4)`; `.form-select option { background-color: var(--color-footer-dark) }`.
- **REGRA CRÍTICA iOS:** `font-size: 16px !important` em todos os elementos de entrada (`input`, `select`, `textarea`).
- `.btn--full`: `width: 100%` (mobile) → `width: auto; align-self: flex-start` (≥ 1024px). `.btn--full[aria-busy="true"] { opacity: .7; pointer-events: none }`. `.contato__success` oculto (`display: none`) → `.contato__success--active { display: block }`.
- Em `css/sections.css`: `.contato { background-color: var(--color-footer-dark) }`; `.contato__eyebrow` `inline-flex`, `color: var(--color-lima)` + `.contato__eyebrow-mark` 10×10; `.contato__detail-item svg { color: var(--color-lima) }`; empilhamento 1 coluna (< 1024px), 2 colunas 45/55 (≥ 1024px).

### Passo 3: Comportamento JavaScript
- Em `js/main.js`, listener `submit` do `#contact-form` (novo `DOMContentLoaded`).
- Valide obrigatórios (`Nome`, `E-mail`, `Mensagem`) + regex de e-mail — `alert` e `return` em falha.
- `endpoint = form.dataset.endpoint || CONTACT_ENDPOINT_FALLBACK`: se definido, `await fetch(endpoint, { method:'POST', body: new FormData(form) })` e checa `res.ok`; senão, simula (`setTimeout` curto).
- Em sucesso: `form.style.display = 'none'`, `.contato__success--active`, `aria-hidden="false"`, `.focus()` na div. Botão recebe `aria-busy` durante o envio; em erro, `alert` + remove `aria-busy`.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** Enviar sem campos obrigatórios (ou com e-mail inválido) exibe alerta e bloqueia o envio.
- [ ] **[CA-02]** Campos com `font-size: 16px` (sem zoom automático no Safari iOS).
- [ ] **[CA-03]** `< 1024px`: 1 coluna, botão 100%; `≥ 1024px`: 2 colunas 45/55, botão largura automática. Sem rolagem horizontal em 375px / 1313px.
- [ ] **[CA-04]** Envio válido em modo simulação (`data-endpoint=""`) oculta o form e exibe `#form-success` sem requisição de rede.
- [ ] **[RN-01]** O campo `Área de Interesse` exibe as 6 especialidades da banca.
- [ ] **[Backend]** `data-endpoint` / `CONTACT_ENDPOINT_FALLBACK` documentado como ponto de integração; definir o serviço antes de publicar.
- [ ] **[Layout]** `.contato` fundo `var(--color-footer-dark)` (`#2B2D30`, igual ao rodapé); eyebrow em Lima com marcador verde 10×10 `inline-flex`; ícones de contato em Lima.
