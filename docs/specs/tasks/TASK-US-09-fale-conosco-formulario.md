# Task Breakdown — US-09: Fale Conosco (Formulário de Contato & Informações)

> **SPEC de Referência:** [`SPEC-US-09-fale-conosco-formulario.md`](../SPEC-US-09-fale-conosco-formulario.md)  
> **Componente:** Componente 9 (Fale Conosco / Formulário)  
> **Target Files:** `index.html`, `css/components.css`, `css/sections.css`, `js/main.js`

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="contato">` com dados institucionais na esquerda e formulário com 5 campos e div de sucesso na direita. |
| `css/components.css` | **[MODIFY]** | Adicionar estilização dos inputs minimalistas sublinhados (`border-bottom`), botões full width e estado de sucesso `.contato__success`. |
| `css/sections.css` | **[MODIFY]** | Configurar layout em 2 colunas no desktop (45/55) e empilhamento em 1 coluna no mobile. |
| `js/main.js` | **[MODIFY]** | Implementar validação dos campos obrigatórios, formato de e-mail e exibição da div de confirmação de envio. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, crie a tag `<section id="contato" class="contato">` em fundo Dark `#404347`.
- Estruture a coluna esquerda com o H2 *"Entre em contato com nossos advogados."*, dados da sede na Av. Paulista, e-mail institucional e telefone.
- Estruture a coluna direita com o formulário `<form id="contact-form">` contendo os 5 campos: `Nome Completo` (required), `E-mail Corporativo` (required), `Telefone` (opcional), `Área de Interesse` (select com as 6 especialidades) e `Mensagem` (required).
- Inclua a div `<div id="form-success" class="contato__success">` para mensagem de confirmação pós-envio.

### Passo 2: Estilização CSS (Mobile-First & iOS Safari Rule)
- Em `css/components.css`, estilize `.form-input`, `.form-select` e `.form-textarea` com fundo transparente e `border-bottom: 1px solid rgba(255,255,255,0.4)`.
- **REGRA CRÍTICA iOS:** Aplique `font-size: 16px !important` em todos os elementos de entrada (`input`, `select`, `textarea`) para impedir o zoom automático de tela no Safari móvel.
- Em `css/sections.css`, defina empilhamento em 1 coluna no mobile (< 1024px) com botão full width `100%`, e 2 colunas lado a lado no desktop (≥ 1024px).

### Passo 3: Comportamento JavaScript
- Em `js/main.js`, adicione manipulador de evento `submit` ao `#contact-form`.
- Valide o preenchimento dos campos obrigatórios (`Nome`, `E-mail`, `Mensagem`) e aplique expressão regular de e-mail corporativo válido.
- Ao validar com sucesso, oculte os campos do formulário e ative a div de confirmação `.contato__success--active`.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** A tentativa de enviar o formulário sem preencher os campos obrigatórios exibe alerta de validação e bloqueia o envio.
- [ ] **[CA-02]** Em dispositivos iOS (iPhone / Safari), a digitação nos campos ocorre sem acionar zoom automático de tela (`font-size: 16px`).
- [ ] **[RN-01]** O campo `Área de Interesse` exibe as 6 especialidades da banca.
- [ ] **[RN-02]** A submissão bem-sucedida exibe a mensagem de confirmação de recebimento.
