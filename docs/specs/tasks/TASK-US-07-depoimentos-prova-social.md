# Task Breakdown — US-07: Depoimentos (Prova Social & Validação de Clientes)

> **SPEC de Referência:** [`SPEC-US-07-depoimentos-prova-social.md`](../SPEC-US-07-depoimentos-prova-social.md)  
> **Componente:** Componente 7 (Depoimentos)  
> **Target Files:** `index.html`, `css/sections.css`, `js/main.js`  
> **Ordem:** inserir **após `<section id="numeros">`** (hero → comunicado → sobre → areas → diferenciais → numeros → depoimentos)

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir a `<section id="depoimentos">` contendo o card de citação, identificação do cliente e dots de navegação. |
| `css/sections.css` | **[MODIFY]** | Adicionar estilização do card de depoimentos em fundo Off-White `#F8F6F4`, aspas estilizadas em Taupe `#AA9B8F` e dots de navegação. |
| `js/main.js` | **[MODIFY]** | Adicionar `TESTIMONIALS_DATA` (3 itens — 1 real + 2 placeholders) + classe `TestimonialsCarousel` (render de slides/dots, `_goTo()`, touch-swipe `touchstart`/`touchend` `{ passive: true }`, navegação por teclado, IntersectionObserver) + instanciação no `DOMContentLoaded`. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- No arquivo `index.html`, insira a tag `<section id="depoimentos" class="testimonials-section">` em fundo Off-White `#F8F6F4`, **após `<section id="numeros">`**.
- Inclua `<img class="testimonials-watermark" src="assets/logo_s_background.png">` como marca d'água decorativa.
- Monte o card centralizado com aspas decorativas topo, o texto da citação em itálico *"A equipe conduziu uma reestruturação societária complexa com clareza e agilidade que não encontrávamos em outros escritórios."*, o nome de **Marina Albuquerque** (*Diretora Financeira, Grupo Vantis*) e o container de dots de controle.
- O HTML estático serve como fallback sem-JS (1 slide). Com JS, `_renderSlides()`/`_renderDots()` regeneram o conteúdo a partir de `TESTIMONIALS_DATA` (**3 itens na Fase 17**: 1 real + 2 placeholders).

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`, centralize o card de depoimento com `max-width: 800px` no desktop e `width: 100%` no mobile.
- Estilize as aspas decorativas conforme SPEC §3.1: `font-family: var(--font-display); font-size: 7.5rem` (base) `→ 9rem` (≥768px) `→ 10rem` (≥1024px); `color: var(--color-taupe); opacity: 0.55`.
- Configure os dots de navegação com área de toque mínima de $44\times 44\text{px}$ para celulares.

### Passo 3: Comportamento JavaScript
- Em `js/main.js`, registre os manipuladores de eventos `touchstart` e `touchend` no container do carousel com a opção `{ passive: true }`.
- Calcule a variação horizontal `touchendX - touchstartX`: se for menor que -50px, avance para o próximo depoimento; se maior que 50px, retorne ao anterior.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** A citação e a identificação de Marina Albuquerque (Diretora Financeira, Grupo Vantis) são apresentadas com clareza.
- [ ] **[CA-02]** Em smartphones, o gesto de deslizar o dedo para a esquerda no card aciona a transição do depoimento.
- [ ] **[Carrossel]** Com os 3 itens da Fase 17, renderizam-se 3 slides e 3 dots; clique no dot e swipe navegam entre eles; `is-single` **não** é aplicado.
- [ ] **[A11y]** Os botões de navegação (dots) possuem área tátil $\ge 44\times 44\text{px}$ e rótulos `aria-label`.
- [ ] **[Layout]** Sem rolagem horizontal em 375px e 1313px (`.testimonials-section { overflow: hidden }`).
