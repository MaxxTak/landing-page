# PRD — US-02: Comunicado ao Mercado (União das Bancas)

> **Origem:** US-02 em [05-goals-and-not-goals.md](../05-goals-and-not-goals.md)  
> **Componente:** Componente 2 em [06-visual-layout.md](../06-visual-layout.md)  
> **Status:** Pronta para Desenvolvimento

---

## 1. Contexto e Problema

### 1.1 Contexto
A nova marca **Sales Costa Advogados** é fruto da união estratégica entre a **Higasi Sales Advogados** e **Rodrigo Moreira da Costa**. Mercado, clientes existentes e parceiros comerciais precisam entender a evolução institucional, a fusão de expertises e os valores que fundamentam o nascimento da banca.

### 1.2 Problema
A ausência de uma declaração institucional clara sobre a origem da nova marca pode gerar dúvidas em clientes atuais sobre a continuidade dos serviços e a composição societária.

### 1.3 Persona Afetada
- Clientes ativos da Higasi Sales, novos clientes empresariais, mercado jurídico e veículos de imprensa.

---

## 2. Objetivos

- **O01:** Comunicar formalmente a união dos sócios-fundadores Dilson Higasi Sales e Rodrigo Moreira da Costa.
- **O02:** Apresentar a visão integrada de atendimento Cobrindo São Paulo e Florianópolis nas áreas tributária, societária, cível, imobiliária e trabalhista.

---

## 3. Métricas de Sucesso

- **M01:** Leitura completa do comunicado (tempo médio na seção $> 45\text{s}$).
- **M02:** Redução a zero de dúvidas sobre a transição de marca por clientes antigos.

---

## 4. Solução Proposta

Desenvolvimento de uma seção institucional em fundo dark (`#404347`), destacando o eyebrow em tom Lima (`#E4FF8F`), o titular sobre a fundação do Sales Costa Advogados, a marca d'água "S" decorativa e a publicação dos 5 parágrafos oficiais com as citações dos fundadores.

---

## 5. Handoff de Design

- **Layout de Referência:** [sales-costa-layout1.png](../../images/sales-costa-layout1.png)
- **Componente Visual:** `images/components/02_comunicado.png`
- **Esquema de Cores:** Fundo Dark `#404347`, Eyebrow Lima `#E4FF8F`, Texto Cinza Claro `#D1D5DB`.
- **Marca d'água:** Monograma "S" posicionado à direita no desktop (opacidade 5%, `z-index: 0`).
- **Responsividade:** Container de texto max-width 860px no desktop; largura 100% com padding 20px no mobile; marca d'água atua como overlay sutil no fundo em telas pequenas.

---

## 6. Regras de Negócio

- **RN-01:** O texto do comunicado deve ser exatamente o aprovado pelos sócios-fundadores, sem alterações na declaração oficial.
- **RN-02:** As citações de Dilson Higasi Sales e Rodrigo Moreira da Costa devem possuir destaque tipográfico.
- **RN-03:** A marca d'água "S" nunca deve comprometer a taxa de contraste de leitura do texto (WCAG AAA).

---

## 7. Critérios de Aceitação (Testáveis)

### CA-01: Exibição do Texto do Comunicado
- **Dado** que o visitante navega até a seção `#comunicado`,
- **Quando** o conteúdo é renderizado,
- **Então** os 5 parágrafos institucionais e as citações dos sócios são exibidos com legibilidade em fundo `#404347`.

### CA-02: Comportamento Responsivo no Mobile
- **Dado** um smartphone com largura de 320px,
- **Quando** o comunicado é visualizado,
- **Então** o texto ajusta-se com padding lateral de 20px sem causar rolagem horizontal.

---

## 8. Fora de Escopo e Riscos

### Fora de Escopo
- Módulo de comentários ou compartilhamento social na seção de comunicado.

### Riscos
- **Risco:** Texto extenso causar fadiga visual em smartphones.
- **Mitigação:** Tipografia com `line-height: 1.65` e espaçamento entre parágrafos de 20px.
