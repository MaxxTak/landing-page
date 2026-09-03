# Task Breakdown — US-07: Depoimentos (Prova Social & Validação de Clientes)

> **SPEC de Referência:** [`SPEC-US-07-depoimentos-prova-social.md`](../SPEC-US-07-depoimentos-prova-social.md)  
> **Componente:** Componente 7 (Depoimentos)  
> **Target Files:** `index.html`, `css/sections.css`, `js/main.js`

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="depoimentos">` contendo o card de citação, identificação do cliente e dots de navegação. |
| `css/sections.css` | **[MODIFY]** | Adicionar estilização do card de depoimentos em fundo Off-White `#F8F6F4`, aspas estilizadas em Taupe `#AA9B8F` e dots de navegação. |
| `js/main.js` | **[MODIFY]** | Implementar manipuladores de eventos de toque `touchstart` e `touchend` para suporte a gestos de deslizamento (*touch swipe*) no mobile. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, insira a tag `<section id="depoimentos" class="depoimentos">` em fundo Off-White `#F8F6F4`.
- Monte o card centralizado com aspas decorativas topo, o texto da citação em itálico *"A equipe conduziu uma reestruturação societária complexa com clareza e agilidade que não encontrávamos em outros escritórios."*, o nome de **Marina Albuquerque** (*Diretora Financeira, Grupo Vantis*) e o container de dots de controle.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`, centralize o card de depoimento com `max-width: 800px` no desktop e `width: 100%` no mobile.
- Estilize as aspas decorativas em `font-family: var(--font-display); font-size: 6rem; color: var(--color-taupe)`.
- Configure os dots de navegação com área de toque mínima de $44\times 44\text{px}$ para celulares.

### Passo 3: Comportamento JavaScript
- Em `js/main.js`, registre os manipuladores de eventos `touchstart` e `touchend` no container do carousel com a opção `{ passive: true }`.
- Calcule a variação horizontal `touchendX - touchstartX`: se for menor que -50px, avance para o próximo depoimento; se maior que 50px, retorne ao anterior.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** A citação e a identificação de Marina Albuquerque (Diretora Financeira, Grupo Vantis) são apresentadas com clareza.
- [ ] **[CA-02]** Em smartphones, o gesto de deslizar o dedo para a esquerda no card aciona a transição do depoimento.
- [ ] **[A11y]** Os botões de navegação (dots) possuem área tátil $\ge 44\times 44\text{px}$ e rótulos `aria-label`.
