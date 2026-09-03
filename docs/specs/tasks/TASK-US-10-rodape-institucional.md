# Task Breakdown — US-10: Rodapé Institucional & Navegação Global

> **SPEC de Referência:** [`SPEC-US-10-rodape-institucional.md`](../SPEC-US-10-rodape-institucional.md)  
> **Componente:** Componente 10 (Rodapé Institucional)  
> **Target Files:** `index.html`, `css/sections.css`, `js/main.js`

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a tag `<footer class="rodape">` com a marca `SALES COSTA`, links de navegação global e copyright. |
| `css/sections.css` | **[MODIFY]** | Adicionar regras CSS para o rodapé em fundo Dark `#2B2D30`, alinhamento vertical no mobile e horizontal no desktop. |
| `js/main.js` | **[MODIFY]** | Garantir que todos os links de atalho do rodapé executem a rolagem suave compensando a altura de 80px do header. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, encerre a página com a tag `<footer class="rodape" id="rodape">`.
- Monte a estrutura com o logo `SALES COSTA`, os links de atalho institucionais (`Sobre`, `Áreas de atuação`, `Equipe`, `Contato`) e o texto de copyright contendo a titulação oficial do escritório.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`, aplique `background-color: var(--color-footer-dark)` (`#2B2D30`) e `color: var(--color-white)`.
- No mobile (< 768px), utilize alinhamento vertical centralizado (`flex-direction: column; align-items: center; text-align: center`) com os links empilhados e área de toque tátil mínima de $44\times 44\text{px}$.
- No desktop (≥ 768px), altere para layout horizontal com `display: flex; justify-content: space-between; align-items: center`.

### Passo 3: Comportamento JavaScript
- Em `js/main.js`, assegure que os manipuladores de scroll suave funcionem perfeitamente para todos os links do rodapé apontando para `#sobre`, `#areas`, `#equipe` e `#contato`.
- Adicione script dinâmico para garantir a atualização automática do ano corrente no copyright via `new Date().getFullYear()`.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** A marca `SALES COSTA` e a lista de links institucionais são apresentadas no rodapé da página.
- [ ] **[CA-02]** O clique no link *"Equipe"* no rodapé realiza a rolagem suave até a seção `#equipe` compensando 80px do header.
- [ ] **[A11y]** Todos os links do rodapé possuem alvos de clique táteis de no mínimo $44\times 44\text{px}$ em dispositivos móveis.
- [ ] **[A11y]** O rodapé encerra a página com $0\text{px}$ de estravazamento ou rolagem horizontal.
