# PRD — US-09: Fale Conosco (Formulário de Contato & Informações)

> **Origem:** US-09 em [05-goals-and-not-goals.md](../05-goals-and-not-goals.md)  
> **Componente:** Componente 9 em [06-visual-layout.md](../06-visual-layout.md)  
> **Status:** Pronta para Desenvolvimento

---

## 1. Contexto e Problema

### 1.1 Contexto
O objetivo final da landing page é a conversão do visitante em um ponto de contato direto (*lead qualificado*), permitindo que potenciais clientes solicitem reuniões, façam tiragem de dúvidas ou iniciem processos de contratação.

### 1.2 Problema
Formulários com excesso de campos ou com estilização genérica reduzem drasticamente a taxa de conversão. Além disso, a ausência de telefones ou endereço físico gera desconfiança sobre a existência da sede do escritório.

### 1.3 Persona Afetada
- Diretores, empresários, executivos e clientes em busca de atendimento jurídico corporativo.

---

## 2. Objetivos

- **O01:** Disponibilizar formulário minimalista de contato com 5 campos essenciais (`Nome Completo`, `E-mail Corporativo`, `Telefone`, `Área de Interesse`, `Mensagem`).
- **O02:** Exibir claramente os dados da sede física (*Av. Paulista, 1000 — 12º andar, São Paulo/SP*), e-mail (*contato@salescosta.com.br*) e telefone de atendimento (*+55 11 3000-0000*).

---

## 3. Métricas de Sucesso

- **M01:** Taxa de conversão do formulário de contato $> 5\%$ dos visitantes totais.
- **M02:** Redução a zero de erros de validação por preenchimento incorreto.

---

## 4. Solução Proposta

Desenvolvimento da seção em fundo Dark Charcoal (`#404347`), com layout em 2 colunas:
- **Coluna Esquerda (Dados de Contato):** H2 *"Entre em contato com nossos advogados."*, subtítulo *"Respondemos em até um dia útil. Para casos urgentes, prefira o telefone."*, dados da sede na Av. Paulista, e-mail institucional, telefone e links de redes sociais.
- **Coluna Direita (Formulário):** Inputs minimalistas de linha sublinhada (`border-bottom`), seletor de áreas jurídicas e botão CTA *"Enviar mensagem →"*.

---

## 5. Handoff de Design

- **Layout de Referência:** [sales-costa-layout-previa.png](../../images/sales-costa-layout-previa.png)
- **Componente Visual:** `images/components/09_contato.png`
- **Esquema de Cores:** Fundo Dark `#404347`, Inputs transparentes com `border-bottom: 1px solid rgba(255,255,255,0.4)`, Botão Taupe `#AA9B8F`.
- **Prevenção de Zoom iOS:** Inputs e select configurados obrigatoriamente com `font-size: 16px` para impedir o zoom automático de tela no iOS Safari.
- **Responsividade:** 2 colunas no desktop; empilhado em 1 coluna no mobile (Dados no topo / Form abaixo; botão full width `100%`).

---

## 6. Regras de Negócio

- **RN-01:** Os campos `Nome Completo`, `E-mail Corporativo` e `Mensagem` são de preenchimento obrigatorio.
- **RN-02:** O campo `E-mail Corporativo` deve validar o formato de e-mail válido antes da submissão.
- **RN-03:** A seleção de `Área de Interesse` deve conter as 6 especialidades (*Empresarial*, *Tributário*, *Trabalhista*, *Civil*, *Societário*, *Compliance*).
- **RN-04:** O envio deve exibir mensagem de confirmação de recebimento ou redirecionar o usuário com feedback de sucesso.

---

## 7. Critérios de Aceitação (Testáveis)

### CA-01: Validação de Campos Obrigatórios
- **Dado** que o usuário tenta enviar o formulário sem preencher o e-mail,
- **Quando** o botão *"Enviar mensagem →"* é clicado,
- **Então** o navegador deve exibir a validação nativa de campo obrigatório e impedir a submissão.

### CA-02: Prevenção de Zoom Automático no Mobile
- **Dado** que o formulário é acessado através de um iPhone (iOS Safari),
- **Quando** o usuário clica no campo `Nome Completo`,
- **Então** o teclado virtual abre sem causar zoom ou deslocamento lateral na página (`font-size: 16px`).

---

## 8. Fora de Escopo e Riscos

### Fora de Escopo
- Desenvolvimento de backend próprio de e-mail (utilização de endpoint serverless terceirizado ou Formspree).

### Riscos
- **Risco:** Definição final do serviço de backend de envio de e-mail.
- **Mitigação:** Marcar como "Pergunta em aberto (não coberta por `spike-salescosta/`)" até definição da plataforma de e-mail corporativo.
