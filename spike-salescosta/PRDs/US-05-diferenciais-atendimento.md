# PRD — US-05: Por Que Sales Costa (Diferenciais de Atendimento)

> **Origem:** US-05 em [05-goals-and-not-goals.md](../05-goals-and-not-goals.md)  
> **Componente:** Componente 5 em [06-visual-layout.md](../06-visual-layout.md)  
> **Status:** Pronta para Desenvolvimento

---

## 1. Contexto e Problema

### 1.1 Contexto
Em um mercado jurídico altamente competitivo, demonstrar diferenciais concretos de atendimento e metodologia de acompanhamento é essencial para converter a intenção do visitante em contato direto.

### 1.2 Problema
Escritórios de advocacia frequentemente utilizam jargões genéricos ("qualidade", "agilidade") sem detalhar como o acompanhamento do caso é de fato executado.

### 1.3 Persona Afetada
- Clientes corporativos em busca de atendimento direto e transparente pelos sócios.

---

## 2. Objetivos

- **O01:** Apresentar os 4 pilares de diferenciação do Sales Costa Advogados em um ambiente visual de destaque.
- **O02:** Reforçar a premissa de acompanhamento direto pelos sócios-fundadores sem delegação generalista.

---

## 3. Métricas de Sucesso

- **M01:** Leitura completa dos 4 diferenciais (tempo na seção $> 30\text{s}$).
- **M02:** Aumento na percepção de valor e transparência corporativa.

---

## 4. Solução Proposta

Desenvolvimento de uma seção em ambiente Dark Charcoal (`#404347`), com eyebrow em Lima (`#E4FF8F`), H2 *"O diferencial está em como acompanhamos cada caso."* e grid de 4 colunas:
1. **Atendimento personalizado:** Acompanhamento direto pelos sócios responsáveis.
2. **Equipe especializada:** Formação dedicada por área, sem generalismo.
3. **Resultados comprovados:** Histórico consistente de êxito em negociações e operações.
4. **Ética & transparência:** Comunicação clara sobre riscos, prazos e honorários.

---

## 5. Handoff de Design

- **Layout de Referência:** [sales-costa-layout-previa.png](../../images/sales-costa-layout-previa.png)
- **Componente Visual:** `images/components/05_diferenciais.png`
- **Esquema de Cores:** Fundo Dark `#404347`, Eyebrow Lima `#E4FF8F`, H2 Branco `#FFFFFF`.
- **Responsividade:** 4 colunas no desktop; 2x2 no tablet; 1 coluna empilhada no mobile (< 768px).

---

## 6. Regras de Negócio

- **RN-01:** Os 4 diferenciais devem possuir o mesmo peso visual e alinhamento vertical.
- **RN-02:** O texto descritivo deve evidenciar a atuação direta dos sócios e a transparência de honorários.

---

## 7. Critérios de Aceitação (Testáveis)

### CA-01: Exibição dos 4 Diferenciais
- **Dado** que o usuário navega até a seção `#diferenciais`,
- **Quando** a seção é renderizada,
- **Então** os 4 diferenciais (*Atendimento personalizado*, *Equipe especializada*, *Resultados comprovados*, *Ética & transparência*) são exibidos.

### CA-02: Empilhamento no Mobile
- **Dado** um dispositivo mobile (< 768px),
- **Quando** a seção é exibida,
- **Então** os cartões empilham-se em 1 coluna vertical com padding interno de 24px.

---

## 8. Fora de Escopo e Riscos

### Fora de Escopo
- Animações complexas em 3D (mantidas animações CSS suaves de fade-in no scroll).

### Riscos
- N/A.
