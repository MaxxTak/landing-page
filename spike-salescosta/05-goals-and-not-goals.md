# 05. Goals & Not Goals · Objetivos, Não-Objetivos e Critérios

> **Spike de Solução:** Landing Page — Sales Costa Advogados  
> **Data:** 2026-09-01  
> **Status:** Atualizado com Diretriz Estrita de Responsividade Universal sem Quebra de Layout

---

## 1. Objetivos do Projeto (Goals)

O escopo contemplado nesta solução visa à implementação fiel do layout oficial ([sales-costa-layout-previa.png](../images/sales-costa-layout-previa.png)), com a seguinte prioridade estrutural:

- [x] **Responsividade Universal e Adaptabilidade sem Quebra:** A landing page DEVE ser totalmente responsiva e utilizável em TODOS os tipos de dispositivos (smartphones de 320px, phablets, tablets, laptops, monitores 4K e dobráveis) sem nenhum tipo de quebra de layout, sobreposição de texto ou rolagem horizontal indesejada (`overflow-x: hidden`).
- [x] **Fidelidade Visual 1:1 aos 10 Componentes:** Aplicação estrita do esquema cromático oficial (`#404347` Dark, `#AA9B8F` Taupe, `#E4FF8F` Lima, `#F8F6F4` Off-White e `#FFFFFF` Branco).
- [x] **Construção dos 10 Componentes Visuais Mapeados:**
  - **Componente 1 (Navbar & Hero Banner):** Header fixo responsivo com drawer mobile e H1 *"Junto nas decisões que constroem o futuro."*.
  - **Componente 2 (Comunicado ao Mercado):** Seção dark `#404347` com a notícia da união entre Dilson Higasi Sales e Rodrigo Moreira da Costa, 5 parágrafos e marca d'água "S".
  - **Componente 3 (Sobre o Escritório):** *"Uma trajetória construída sobre confiança e critério técnico."* + 3 pilares (*Comprometimento*, *Confidencialidade*, *Excelência*).
  - **Componente 4 (Áreas de Atuação):** Grid 2x3 de especialidades colapsável (3 colunas no desktop, 2 no tablet, 1 no mobile).
  - **Componente 5 (Por Que Sales Costa):** 4 diferenciais adaptáveis para visualização empilhada em telas pequenas.
  - **Componente 6 (Em Números):** Banner com 4 métricas (grid 2x2 no mobile, 4 colunas no desktop).
  - **Componente 7 (Depoimentos):** Citação de cliente com suporte a gestos de toque (swipe) em dispositivos móveis.
  - **Componente 8 (Nossa Equipe):** Cards dos sócios (*AS*, *CC*, *FR*, *LM*) com redimensionamento fluido de imagem e texto.
  - **Componente 9 (Fale Conosco):** Formulário de linha fina com inputs confortáveis para toque ($\ge 44\text{px}$) e teclado virtual.
  - **Componente 10 (Rodapé Institucional):** Fundo dark `#2B2D30` com alinhamento vertical automático em smartphones.
- [x] **Performance e Acessibilidade:** Solução nativa leve (HTML/CSS/JS Vanilla) atingindo nota $\ge 90$ em auditoria Lighthouse em dispositivos móveis e desktop.

---

## 2. Não-Objetivos (Not Goals V1)

- [ ] **Sem Painel CMS / Gestor de Conteúdo:** Conteúdo estático de alta performance.
- [ ] **Sem Blog Corporativo Externo:** Notícias e comunicados diretamente na página.
- [ ] **Sem Suporte Multi-Idioma (i18n):** Entrega inicial exclusivamente em Português (PT-BR).

---

## 3. Mapeamento Completo de User Stories (US-01 a US-10)

| Código | História de Usuário (User Story) | Garantia de Responsividade |
|---|---|---|
| **US-01** | Como visitante em qualquer tela, quero ver o Hero Banner sem cortes de imagem ou texto. | Adaptabilidade fluida de tipografia (`clamp()`) |
| **US-02** | Como cliente em smartphone, quero ler o Comunicado ao Mercado com tamanho de fonte confortável. | Parágrafos com espaçamento tátil |
| **US-03** | Como usuário em tablet, quero visualizar a seção Sobre em 2 colunas proporcionais. | Grid flexível com media queries |
| **US-04** | Como visitante mobile, quero navegar pelas 6 áreas de atuação em cards empilhados. | Grid 1 coluna em telas pequenas |
| **US-05** | Como visitante, quero ver os diferenciais organizados sem quebra de caixa. | Flexbox wrappable |
| **US-06** | Como usuário mobile, quero visualizar as métricas organizadas em grid 2x2. | Disposição 2x2 no mobile |
| **US-07** | Como visitante em smartphone, quero navegar pelo depoimento com botões táteis. | Alvo de clique $\ge 44\text{px}$ |
| **US-08** | Como usuário em qualquer dispositivo, quero ver a equipe de sócios sem overflow. | Image aspect-ratio mantido |
| **US-09** | Como cliente mobile, quero preencher o formulário facilmente pelo teclado virtual. | Touch target amplo nos inputs |
| **US-10** | Como visitante, quero acessar o rodapé perfeitamente alinhado em dispositivos móveis. | Reorganização vertical automática |

---

## 4. Critérios de Aceitação e Testes de Responsividade

| Métrica / Critério | Meta Alvo | Método de Verificação |
|---|---|---|
| **Zero Rolagem Horizontal** | $0\text{px}$ de estravazamento horizontal | Chrome DevTools responsive view em 320px–2560px |
| **Integridade de Layout** | $100\%$ de adaptação sem quebra | Testes em iPhone SE (375px), iPad (768px), Full HD (1920px) |
| **Tamanho de Alvo Tátil** | $\ge 44\times 44\text{px}$ nos botões e links | Teste de acessibilidade Lighthouse Touch Targets |
| **Lighthouse Performance Mobile** | $\ge 90$ | Audit Lighthouse com throttling 4G e CPU 4x |
