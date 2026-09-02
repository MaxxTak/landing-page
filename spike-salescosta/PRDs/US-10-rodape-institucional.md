# PRD — US-10: Rodapé Institucional & Navegação Global

> **Origem:** US-10 em [05-goals-and-not-goals.md](../05-goals-and-not-goals.md)  
> **Componente:** Componente 10 em [06-visual-layout.md](../06-visual-layout.md)  
> **Status:** Pronta para Desenvolvimento

---

## 1. Contexto e Problema

### 1.1 Contexto
O rodapé fecha a navegação da landing page, oferecendo ao visitante que rolou até a base da página os links de acesso rápido às seções principais e o encerramento da identidade visual da banca.

### 1.2 Problema
Rodapés poluídos ou desalinhados em telefones celulares transmitem amadorismo e dificultam o retorno às seções superiores da página.

### 1.3 Persona Afetada
- Todos os visitantes da landing page.

---

## 2. Objetivos

- **O01:** Proporcionar fecho institucional elegante com a marca `SALES COSTA` e os links de atalho global (`Sobre`, `Áreas de atuação`, `Equipe`, `Contato`).
- **O02:** Garantir alinhamento automático em telas pequenas sem rolagem lateral.

---

## 3. Métricas de Sucesso

- **M01:** Taxa de retenção e navegação no rodapé.
- **M02:** Ausência total de erros de layout no encerramento da página.

---

## 4. Solução Proposta

Desenvolvimento do rodapé institucional em fundo Dark `#2B2D30`, posicionando a marca `SALES COSTA` em tom claro à esquerda e a lista de links navegáveis à direita.

---

## 5. Handoff de Design

- **Layout de Referência:** [sales-costa-layout1.png](../../images/sales-costa-layout1.png)
- **Componente Visual:** `images/components/10_rodape.png`
- **Esquema de Cores:** Fundo Dark Charcoal `#2B2D30`, Marca e Links em tom Taupe/Branco.
- **Responsividade:** Alinhado horizontalmente no desktop; alinhado verticalmente no mobile (< 768px) com alvos de clique táteis $\ge 44\text{px}$.

---

## 6. Regras de Negócio

- **RN-01:** Todos os links do rodapé devem acionar o scroll suave até as seções correspondentes na landing page.
- **RN-02:** O texto de copyright deve exibir o ano corrente e a titulação institucional.

---

## 7. Critérios de Aceitação (Testáveis)

### CA-01: Exibição da Marca e Links
- **Dado** que o usuário atinge o fim da página,
- **Quando** o rodapé é renderizado,
- **Então** a marca `SALES COSTA` e os links da nav são exibidos.

### CA-02: Navegação Suave pelas Âncoras
- **Dado** que o usuário clica no link *"Equipe"* no rodapé,
- **Quando** o clique ocorre,
- **Então** a página rola suavemente até a seção `#equipe`.

---

## 8. Fora de Escopo e Riscos

### Fora de Escopo
- Links para páginas internas secundárias (toda a estrutura é concentrada na landing page single-page).

### Riscos
- N/A.
