# PRD — US-07: Depoimentos (Prova Social & Validação de Clientes)

> **Origem:** US-07 em [05-goals-and-not-goals.md](../05-goals-and-not-goals.md)  
> **Componente:** Componente 7 em [06-visual-layout.md](../06-visual-layout.md)  
> **Status:** Pronta para Desenvolvimento

---

## 1. Contexto e Problema

### 1.1 Contexto
Depoimentos reais de executivos e diretores financeiros servem como validação de confiança, comprovando a capacidade técnica do escritório em casos societários e estratégicos de grande porte.

### 1.2 Problema
A ausência de depoimentos com nome, cargo e empresa identificada enfraquece a credibilidade da landing page frente a clientes corporativos exigentes.

### 1.3 Persona Afetada
- CFOs, diretores jurídicos e investidores avaliando a contratação do escritório.

---

## 2. Objetivos

- **O01:** Exibir depoimentos reais de clientes corporativos com destaque para a liderança técnica e agilidade do escritório.
- **O02:** Disponibilizar navegação simples por dots e suporte a gestos de deslizamento tátil (*touch swipe*) em celulares.

---

## 3. Métricas de Sucesso

- **M01:** Interação com o carousel de depoimentos $> 25\%$.
- **M02:** Aumento do índice de confiança na avaliação inicial do escritório.

---

## 4. Solução Proposta

Desenvolvimento de um módulo de citação em fundo Off-White Quente (`#F8F6F4`), exibindo aspas em tom Taupe no topo, a citação *"A equipe conduziu uma reestruturação societária complexa com clareza e agilidade que não encontrávamos em outros escritórios."*, a identificação de **Marina Albuquerque** (*Diretora Financeira, Grupo Vantis*) e os pontos de navegação (dots).

---

## 5. Handoff de Design

- **Layout de Referência:** [sales-costa-layout1.png](../../images/sales-costa-layout1.png)
- **Componente Visual:** `images/components/07_depoimentos.png`
- **Esquema de Cores:** Fundo Off-White `#F8F6F4`, Aspas Taupe `#AA9B8F`, Citação em itálico Dark `#2B2B2B`.
- **Responsividade:** Card centralizado; suporte a touch swipe em mobile; dots com alvo tátil $\ge 44\times 44\text{px}$.

---

## 6. Regras de Negócio

- **RN-01:** O depoimento deve exibir explicitamente a autoridade do autor (Nome, Cargo e Nome da Empresa).
- **RN-02:** Em smartphones, a transição entre depoimentos deve aceitar gestos laterais de deslizamento (*swipe*).

---

## 7. Critérios de Aceitação (Testáveis)

### CA-01: Exibição da Citação e Autor
- **Dado** que o visitante visualiza a seção de depoimentos,
- **Quando** o card é renderizado,
- **Então** a citação da reestruturação societária e a identificação de Marina Albuquerque (Grupo Vantis) são apresentadas.

### CA-02: Navegação por Gestos no Mobile
- **Dado** um usuário navegando em um smartphone,
- **Quando** ele desliza o dedo para a esquerda no card,
- **Então** o próximo depoimento do carousel é exibido.

---

## 8. Fora de Escopo e Riscos

### Fora de Escopo
- Vídeos de depoimento de clientes (mantido formato texto estático refinado).

### Riscos
- N/A.
