# PRD — US-04: Áreas de Atuação (Grid de Especialidades)

> **Origem:** US-04 em [05-goals-and-not-goals.md](../05-goals-and-not-goals.md)  
> **Componente:** Componente 4 em [06-visual-layout.md](../06-visual-layout.md)  
> **Status:** Pronta para Desenvolvimento

---

## 1. Contexto e Problema

### 1.1 Contexto
Visitantes corporativos acessam o portal para confirmar se o escritório possui capacidade técnica e especialização direta na área jurídica específica de seu interesse.

### 1.2 Problema
Apresentar áreas de atuação em listas de texto simples sem ícones ou descrições dificulta a navegação rápida e reduz a percepção de especialização do escritório.

### 1.3 Persona Afetada
- Gestores jurídicos, diretores administrativos, CFOs e empreendedores.

---

## 2. Objetivos

- **O01:** Exibir de forma visualmente organizada e categorizada as 6 especialidades jurídicas do escritório.
- **O02:** Permitir o acesso imediato à síntese descritiva de cada área com chamadas de interatividade (*Saiba mais →*).

---

## 3. Métricas de Sucesso

- **M01:** Interação com os cards de especialidades (hover/touch) em $> 40\%$ dos acessos.
- **M02:** Identificação imediata da área de interesse em $< 5\text{s}$.

---

## 4. Solução Proposta

Desenvolvimento de um grid de cards responsivo (3 colunas no desktop, 2 no tablet, 1 no mobile) em fundo Branco Puro (`#FFFFFF`), exibindo as 6 áreas de atuação:
1. **Direito Empresarial:** Estruturação societária, contratos comerciais e assessoria contínua.
2. **Direito Tributário:** Planejamento fiscal, consultoria preventiva e defesa.
3. **Direito Trabalhista:** Gestão de risco trabalhista, compliance de RH e representação.
4. **Direito Civil:** Contratos, responsabilidade civil e patrimônio.
5. **Direito Societário:** Fusões, aquisições, governança e reestruturação.
6. **Compliance & Governança:** Programas de integridade e auditoria de conformidade.

---

## 5. Handoff de Design

- **Layout de Referência:** [sales-costa-layout-previa.png](../../images/sales-costa-layout-previa.png)
- **Componente Visual:** `images/components/04_areas.png`
- **Esquema de Cores:** Fundo Branco `#FFFFFF`, Ícones em tom Taupe `#AA9B8F`, Borda de Hover em Taupe.
- **Responsividade:** Desktop `repeat(3, 1fr)`; Tablet `repeat(2, 1fr)`; Mobile `1fr` empilhado. Links *Saiba mais →* com alvo tátil $\ge 44\text{px}$.

---

## 6. Regras de Negócio

- **RN-01:** Cada card deve conter obrigatoriamente: Ícone SVG em linha fina, Título em DM Sans 500, Breve Descrição e Link interativo *"Saiba mais →"*.
- **RN-02:** O passar do cursor (hover no desktop ou toque no mobile) deve elevar visualmente o card com uma borda inferior em tom Taupe `#AA9B8F`.

---

## 7. Critérios de Aceitação (Testáveis)

### CA-01: Renderização dos 6 Cards de Especialidades
- **Dado** que o usuário acessa a seção `#areas`,
- **Quando** a seção carrega,
- **Então** os 6 cards (*Empresarial*, *Tributário*, *Trabalhista*, *Civil*, *Societário*, *Compliance*) são exibidos com ícone, título, descrição e botão.

### CA-02: Reordenamento Automático no Mobile
- **Dado** um viewport móvel com largura de 375px,
- **Quando** a seção é exibida,
- **Então** os cards são organizados em 1 coluna vertical sem estouro de margens.

---

## 8. Fora de Escopo e Riscos

### Fora de Escopo
- Modais com artigos jurídicos completos por área (links de *Saiba mais* direcionam ao formulário de contato ou scroll).

### Riscos
- N/A.
