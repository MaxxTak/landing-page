# PRD — US-06: Em Números (Métricas de Autoridade)

> **Origem:** US-06 em [05-goals-and-not-goals.md](../05-goals-and-not-goals.md)  
> **Componente:** Componente 6 em [06-visual-layout.md](../06-visual-layout.md)  
> **Status:** Pronta para Desenvolvimento

---

## 1. Contexto e Problema

### 1.1 Contexto
Métricas numéricas de volume de clientes, anos de atuação e histórico de casos atuam como gatilho de prova social e autoridade instantânea para clientes em fase de avaliação.

### 1.2 Problema
Apresentar números estáticos e sem destaque visual perde a oportunidade de capturar o interesse do usuário durante a rolagem da página.

### 1.3 Persona Afetada
- Novos clientes e tomadores de decisão corporativos.

---

## 2. Objetivos

- **O01:** Exibir em destaque 4 indicadores consolidados da banca Sales Costa Advogados.
- **O02:** Animar a contagem numérica progressiva (0 ao alvo) quando a seção entrar na viewport do usuário.

---

## 3. Métricas de Sucesso

- **M01:** Execução da animação do contador em $100\%$ dos dispositivos compatíveis.
- **M02:** Aumento do tempo de permanência na página.

---

## 4. Solução Proposta

Desenvolvimento de um banner em fundo Off-White Quente (`#F8F6F4`) disposta em 4 colunas com divisores verticais sutis no desktop:
- `15` &nbsp;&nbsp; `+ ANOS DE EXPERIÊNCIA`
- `500` &nbsp;&nbsp; `+ CLIENTES ATENDIDOS`
- `300` &nbsp;&nbsp; `+ CASOS CONCLUÍDOS`
- `5` &nbsp;&nbsp; `ÁREAS DE ESPECIALIZAÇÃO`

---

## 5. Handoff de Design

- **Layout de Referência:** [sales-costa-layout1.png](../../images/sales-costa-layout1.png)
- **Componente Visual:** `images/components/06_numeros.png`
- **Esquema de Cores:** Fundo Off-White `#F8F6F4`, Números Dark `#2B2B2B`, Labels em caixa alta com `letter-spacing: 2px`.
- **Responsividade:** 4 colunas em linha no desktop; Grid 2x2 no mobile sem divisores verticais. Fonte ajustada via `clamp(2.5rem, 8vw, 4rem)`.

---

## 6. Regras de Negócio

- **RN-01:** A contagem animada deve ser disparada apenas uma única vez quando a seção entrar no campo de visão (via `IntersectionObserver`).
- **RN-02:** Em dispositivos com preferência por movimento reduzido (`prefers-reduced-motion: reduce`), o número final deve ser exibido estaticamente sem animação.

---

## 7. Critérios de Aceitação (Testáveis)

### CA-01: Animação do Contador Numérico
- **Dado** que a seção `#numeros` entra na tela do usuário,
- **Quando** o observador dispara o evento,
- **Então** os valores iniciam em 0 e incrementam suavemente até atingir 15, 500, 300 e 5 em ~2 segundos.

### CA-02: Disposição Grid 2x2 no Mobile
- **Dado** uma tela mobile com largura $< 768\text{px}$,
- **Quando** a seção é visualizada,
- **Então** as 4 métricas são organizadas em um grid de 2 linhas x 2 colunas.

---

## 8. Fora de Escopo e Riscos

### Fora de Escopo
- Atualização em tempo real via API dinâmica (valores estáticos definidos pelo escritório).

### Riscos
- N/A.
