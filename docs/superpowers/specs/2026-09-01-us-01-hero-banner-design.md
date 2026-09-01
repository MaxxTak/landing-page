# US-01 Hero Banner Technical Specification & Visual Design

> **Feature:** Hero Banner & Proposta de Valor  
> **PRD de Origem:** [US-01-hero-banner.md](../../../spike-salescosta/PRDs/US-01-hero-banner.md)  
> **Layout de Referência:** [sales-costa-layout-previa.png](../../../images/sales-costa-layout-previa.png)  
> **Componente Visual:** `images/components/01_navbar_hero.png`  
> **Data:** 2026-09-01  
> **Status:** Aprovado pelo Usuário

---

## 1. Visão Geral e Objetivos

Esta especificação define o design visual, a arquitetura de componentes, a estratégia de responsividade e a suíte de testes automatizados para o **Hero Banner (US-01)** da landing page do **Sales Costa Advogados**.

### Objetivos Principais:
1. Apresentar a proposta de valor principal do escritório (*"Junto nas decisões que constroem o futuro."*) nos primeiros 3 segundos de acesso.
2. Garantir 100% de responsividade sem rolagem horizontal (`overflow-x: hidden`) em dispositivos de 320px a 2560px+.
3. Disponibilizar chamadas para ação (CTAs) táteis interativas com scroll suave compensando o offset de 80px da navbar.

---

## 2. Arquitetura Visual e Componentes

### 2.1 Layout do Container (`<section id="hero">`)
- **Altura & Exibição:** `min-height: 100vh`, `position: relative`, alinhamento flexbox em coluna centralizada.
- **Cor de Fundo & Textura:** Dark Charcoal (`#404347`) com iluminação radial centralizada:
  ```css
  background-color: #404347;
  background-image: radial-gradient(circle at center, rgba(170, 155, 143, 0.08) 0%, transparent 70%);
  ```
- **Espaçamento Interno:** Padding topo `120px` (compensação da navbar fixed) / padding base `80px` / padding lateral `20px`.

### 2.2 Hierarquia Tipográfica e Textos
- **Eyebrow Tag:**
  - **Texto:** `"SALES COSTA ADVOGADOS"`
  - **Estilo:** `font-family: 'DM Sans'`, `font-size: 0.75rem` (12px), `font-weight: 500`, cor Taupe `#AA9B8F`, `letter-spacing: 4px`, caixa alta.
- **Headline Principal (H1):**
  - **Texto:** *"Junto nas decisões que constroem o futuro."*
  - **Estilo:** `font-family: 'DM Sans'`, cor Branca `#FFFFFF`, `font-weight: 400`, `line-height: 1.15`, escala fluida via `font-size: clamp(2rem, 5vw, 4rem)`.
- **Subtítulo Corporativo:**
  - **Texto:** *"Advocacia estratégica e personalizada, com foco em excelência técnica e resultados corporativos de alto impacto."*
  - **Estilo:** `font-family: 'DM Sans'`, `font-size: clamp(1rem, 2vw, 1.125rem)`, cor `rgba(255, 255, 255, 0.8)`, `max-width: 680px`, `line-height: 1.6`.

### 2.3 Botões CTA Interativos (`.btn`)
- **Container de Ações (`.hero-actions`):** Flexbox com alinhamento centralizado e `gap: 20px`.
- **Botão Primário (`.btn-primary`):**
  - **Texto:** *"Fale conosco →"* (`href="#contato"`)
  - **Estilo:** Fundo Taupe `#AA9B8F`, texto Branco `#FFFFFF`, padding `12px 28px`, `min-height: 44px`, `letter-spacing: 2px`. Hover: escurecimento `#988a7e`.
- **Botão Secundário (`.btn-outline`):**
  - **Texto:** *"Conheça o escritório →"* (`href="#sobre"`)
  - **Estilo:** Fundo transparente, borda `1px solid #AA9B8F`, texto Branco `#FFFFFF`, `min-height: 44px`, `letter-spacing: 2px`. Hover: preenchimento `#AA9B8F`.
- **Regra Responsiva Mobile (`< 768px`):** Botões são dispostos em **1 coluna empilhada** (`width: 100%`), mantendo alvo tátil $\ge 44 \times 44\text{px}$.

### 2.4 Indicador de Scroll Animado (`.scroll-indicator`)
- **Posição:** `position: absolute`, `bottom: 30px`, `left: 50%`, `transform: translateX(-50%)`.
- **Animação:** Cápsula oval transparente com ponto interno (`.dot`) em animação contínua `@keyframes bounce` (ciclo de 1,8 segundos).

---

## 3. Matriz de Responsividade por Breakpoint

| Breakpoint | Resolução de Tela | Layout & Comportamento Tipográfico |
|---|---|---|
| **Mobile P** | 320px – 374px | H1 em 28px (clamp), subtítulo 14px, CTAs empilhados 100% largura, zero overflow. |
| **Mobile M** | 375px – 479px | H1 em 32px, CTAs empilhados com altura tátil $\ge 44\text{px}$. |
| **Tablet P** | 480px – 767px | H1 em 38px, CTAs em 1 coluna centralizada. |
| **Tablet G** | 768px – 1023px | H1 em 44px, CTAs dispostos em 1 linha horizontal. |
| **Desktop** | 1024px – 1439px | H1 em 56px, CTAs em linha, gradiente radial sutil expandido. |
| **Ultra-Wide** | >= 1440px | H1 no limite máximo do clamp (64px), container limitado a max-width de 860px. |

---

## 4. Interatividade JavaScript & Offset de Scroll

```javascript
// main.js - Compensação de offset da navbar sticky (80px)
document.addEventListener('DOMContentLoaded', () => {
  const NAVBAR_OFFSET = 80;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_OFFSET;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
```

---

## 5. Estratégia de Testes Automatizados

O arquivo `tests/us01_hero_banner.test.js` executa verificações determinísticas via Node.js:
1. **Tokens CSS:** Existência e valores exatos das variáveis de cor (`--color-dark: #404347`, `--color-primary: #AA9B8F`).
2. **Reset CSS:** Verificação de `box-sizing: border-box` e `overflow-x: hidden`.
3. **Marcação HTML:** Existência de `<section id="hero">`, eyebrow tag, H1, links CTA (`#sobre` e `#contato`), `.scroll-indicator` e âncoras de destino.
4. **Regras CSS:** Alvo tátil mínimo `min-height: 44px`, `clamp()` e `@keyframes bounce`.
5. **Comportamento JS:** Offset de 80px no manipulador de scroll.

---

## 6. Auto-Revisão da Espec (Checklist)

- [x] **Placeholders:** NENHUM "TBD", "TODO" ou trecho vago.
- [x] **Consistência Interna:** Cores, seletores CSS e IDs de ancoragem perfeitamente alinhados entre todas as seções.
- [x] **Verificação de Escopo:** Foco estrito na US-01 Hero Banner.
- [x] **Clareza de Requisitos:** Sem ambiguidades de layout ou comportamento responsivo.
