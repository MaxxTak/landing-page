# PRD — US-08: Nossa Equipe (Cards dos Sócios Responsáveis)

> **Origem:** US-08 em [05-goals-and-not-goals.md](../05-goals-and-not-goals.md)  
> **Componente:** Componente 8 em [06-visual-layout.md](../06-visual-layout.md)  
> **Status:** Pronta para Desenvolvimento

---

## 1. Contexto e Problema

### 1.1 Contexto
No meio jurídico corporativo, clientes contratam pessoas e reputações individuais. Apresentar os sócios fundadores e responsáveis por cada área reforça a transparência e a promessa de atendimento direto.

### 1.2 Problema
A ausência de fotos ou de apresentações claras da equipe gera sensação de obscuridade institucional e falta de pessoalidade no atendimento.

### 1.3 Persona Afetada
- Clientes corporativos, parceiros e potenciais contratantes de assessoria contínua.

---

## 2. Objetivos

- **O01:** Apresentar individualmente os 4 sócios da banca Sales Costa Advogados.
- **O02:** Disponibilizar avatares elegantes de iniciais (*AS*, *CC*, *FR*, *LM*) com suporte a substituição direta por fotografias reais de ensaio profissional.

---

## 3. Métricas de Sucesso

- **M01:** Identificação imediata da liderança responsável por cada área de atuação.
- **M02:** Transição transparente de avatares para fotos reais sem alteração na estrutura HTML/CSS.

---

## 4. Solução Proposta

Desenvolvimento da seção *"Nossa Equipe"* em fundo Branco Puro (`#FFFFFF`), com eyebrow `NOSSA EQUIPE`, H2 *"Os sócios responsáveis por cada caso."* e grid de 4 cards:
1. **Antônio Sales:** Sócio-fundador · Direito Empresarial | OAB/SP 000.000 (Avatar *AS*)
2. **Camila Costa:** Sócia-fundadora · Direito Tributário | OAB/SP 000.000 (Avatar *CC*)
3. **Felipe Ramos:** Sócio · Direito Trabalhista | OAB/SP 000.000 (Avatar *FR*)
4. **Luisa Martins:** Sócia · Societário & Compliance | OAB/SP 000.000 (Avatar *LM*)

---

## 5. Handoff de Design

- **Layout de Referência:** [sales-costa-layout-previa.png](../../images/sales-costa-layout-previa.png)
- **Componente Visual:** `images/components/08_equipe.png`
- **Esquema de Cores:** Fundo Branco `#FFFFFF`, Avatares em fundo Off-White `#F8F6F4` com iniciais em Taupe `#AA9B8F`.
- **Responsividade:** 4 colunas horizontais no desktop; Grid 2x2 no tablet; 1 coluna empilhada no mobile (< 768px). Proporção do avatar travada em `aspect-ratio: 1/1`.

---

## 6. Regras de Negócio

- **RN-01:** Os avatares de iniciais (*AS*, *CC*, *FR*, *LM*) devem ser centralizados sobre o container quadrado bege `#F8F6F4`.
- **RN-02:** Cada card deve exibir obrigatoriamente: Nome do Sócio, Cargo/Título, Área de Atuação e Registro OAB.

---

## 7. Critérios de Aceitação (Testáveis)

### CA-01: Exibição dos 4 Sócios
- **Dado** que o visitante navega até a seção `#equipe`,
- **Quando** a seção é renderizada,
- **Então** os 4 sócios (*Antônio Sales*, *Camila Costa*, *Felipe Ramos*, *Luisa Martins*) são exibidos com suas áreas e OAB.

### CA-02: Empilhamento 1 Coluna no Mobile
- **Dado** um smartphone (< 768px),
- **Quando** a seção é aberta,
- **Então** os cards da equipe são empilhados em 1 coluna sem distorção das caixas de avatar.

---

## 8. Fora de Escopo e Riscos

### Fora de Escopo
- Modais com biografia estendida ou currículo Lattes dos advogados (dados mantidos nos cards principais).

### Riscos
- **Risco:** Inscrições reais da OAB ainda constam como `OAB/SP 000.000`.
- **Mitigação:** Marcar como "Pergunta em aberto (não coberta por `spike-salescosta/`)" até o envio dos registros finais.
