# PRD — US-03: Sobre o Escritório & Pilares Estratégicos

> **Origem:** US-03 em [05-goals-and-not-goals.md](../05-goals-and-not-goals.md)  
> **Componente:** Componente 3 em [06-visual-layout.md](../06-visual-layout.md)  
> **Status:** Pronta para Desenvolvimento

---

## 1. Contexto e Problema

### 1.1 Contexto
Clientes empresariais que buscam contratação de serviços jurídicos de alto valor necessitam de provas claras sobre os princípios de atuação, o histórico de experiência e o modelo de relacionamento do escritório antes de tomar a decisão de contato.

### 1.2 Problema
Apresentações institucionais longas e prolixas sem pilares objetivos geram desconfiança sobre a verdadeira capacidade técnica e ética do escritório.

### 1.3 Persona Afetada
- Diretores, empresários, investidores e famílias de alta renda.

---

## 2. Objetivos

- **O01:** Apresentar a trajetória de mais de 15 anos do escritório com foco em confiança e critério técnico.
- **O02:** Destacar os 3 pilares de atuação: *Comprometimento*, *Confidencialidade* e *Excelência*.

---

## 3. Métricas de Sucesso

- **M01:** Taxa de leitura da seção Sobre $> 70\%$.
- **M02:** Índice de clareza percebida nos pilares em pesquisas com clientes $> 90\%$.

---

## 4. Solução Proposta

Desenvolvimento da seção *"Sobre o Escritório"* em fundo Off-White Quente (`#F8F6F4`), disposta em 2 colunas no desktop (40% para o H2 *"Uma trajetória construída sobre confiança e critério técnico."* e 60% para o texto introdutório e os 3 pilares estruturados).

---

## 5. Handoff de Design

- **Layout de Referência:** [sales-costa-layout1.png](../../images/sales-costa-layout1.png)
- **Componente Visual:** `images/components/03_sobre.png`
- **Esquema de Cores:** Fundo Off-White `#F8F6F4`, Texto Dark `#2B2B2B`, Linha Divisória Taupe `#D9D3CE`.
- **Pilares:**
  - **Comprometimento:** *Disponibilidade real com cada cliente e cada causa.*
  - **Confidencialidade:** *Sigilo absoluto sobre informações estratégicas.*
  - **Excelência:** *Rigor técnico em cada peça, parecer e negociação.*
- **Responsividade:** Grid de 2 colunas no desktop que migra para 1 coluna vertical empilhada no mobile (`< 768px`) com divisores horizontais.

---

## 6. Regras de Negócio

- **RN-01:** Os 3 pilares devem possuir destaque em negrito e descrição curta em itálico/subtítulo.
- **RN-02:** No mobile, os pilares devem empilhar verticalmente mantendo espaçamento mínimo de `16px` entre cartões.

---

## 7. Critérios de Aceitação (Testáveis)

### CA-01: Exibição dos Pilares Estratégicos
- **Dado** que o visitante visualiza a seção `#sobre`,
- **Quando** a seção é renderizada,
- **Então** os 3 pilares (*Comprometimento*, *Confidencialidade*, *Excelência*) são exibidos com suas descrições associadas.

### CA-02: Adaptação Responsiva 1 Coluna no Mobile
- **Dado** um dispositivo com largura $< 768\text{px}$,
- **Quando** a seção Sobre é acessada,
- **Então** o layout colapsa para 1 coluna vertical sem estouro de texto.

---

## 8. Fora de Escopo e Riscos

### Fora de Escopo
- Linha do tempo interativa ano a ano (mantida a apresentação simplificada em parágrafos e pilares).

### Riscos
- N/A.
