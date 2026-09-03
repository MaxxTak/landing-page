# Task Breakdown — US-10: Rodapé Institucional & Navegação Global

> **SPEC de Referência:** [`SPEC-US-10-rodape-institucional.md`](../SPEC-US-10-rodape-institucional.md)  
> **Componente:** Componente 10 (Rodapé Institucional)  
> **Target Files:** `index.html`, `css/sections.css`, `js/main.js`, `js/animations.js`  
> **Ordem:** `<footer id="rodape">` **após `<section id="contato">`**, antes dos `<script>` (fim do conteúdo).

---

## 📋 Resumo das Alterações de Código

| Arquivo | Ação | Descrição |
|---|---|---|
| `index.html` | **[MODIFY]** | Inserir `<footer id="rodape" class="site-footer">` com o lockup de logo (`logo_s_verde.png` + `logo_salescosta.png`), nav de 4 links (`data-smooth-scroll`), `<hr>` e copyright com `<span id="footer-year">`. |
| `css/sections.css` | **[MODIFY]** | Bloco `/* US-10 */` ao final: fundo `var(--color-footer-dark)` `#2B2D30`, fade-in `.is-visible`, coluna centralizada no mobile → linha `space-between` no tablet/desktop, links com alvo ≥ 44px, focus ring lima, reduced-motion. |
| `js/main.js` | **[MODIFY]** | Apenas injeção do ano em `#footer-year` (`new Date().getFullYear()`). O smooth scroll dos links do footer já é coberto pelo handler `a[href^="#"]` de US-01 — **não** adicionar handler novo. |
| `js/animations.js` | **[MODIFY]** | `initFooterAnimation()` — `IntersectionObserver` (`threshold: 0.1`) → `.is-visible`, `unobserve` após 1×; guards de no-IO / reduced-motion; bootstrap `document.readyState`. |

---

## 🛠️ Passo a Passo de Implementação para Agente de IA

### Passo 1: Inserção do HTML Semântico
- Em `index.html`, **após `#contato`**, insira `<footer id="rodape" class="site-footer" role="contentinfo" aria-label="Rodapé do site">`.
- `.footer__top`: `<a class="footer__logo" href="#hero" data-smooth-scroll>` com `<img class="footer__logo-mark" src="assets/logo_s_verde.png">` + `<img class="footer__logo-word" src="assets/logo_salescosta.png">`; e `<nav class="footer__nav">` com `<ul role="list">` de 4 links (`#sobre`, `#areas`, `#equipe`, `#contato`), cada um `data-smooth-scroll` + `aria-label`.
- `<hr class="footer__divider" role="separator" aria-hidden="true">`.
- `.footer__bottom`: `<p class="footer__copyright">&copy; <span id="footer-year" aria-live="off"></span> Sales Costa Advogados. Todos os direitos reservados.</p>`.

### Passo 2: Estilização CSS (Mobile-First)
- Em `css/sections.css`, `.site-footer`: `background-color: var(--color-footer-dark)` (`#2B2D30`), `color: var(--color-text-light)`; fade-in `opacity: 0; transform: translateY(20px)` → `.site-footer.is-visible`.
- Mobile (< 768px): `.footer__top { flex-direction: column; align-items: center; text-align: center }`, `.footer__nav-list { flex-direction: column }`; `.footer__nav-link { min-height: 44px }`.
- Tablet (≥ 768px): `.footer__top { flex-direction: row; justify-content: space-between }`, `.footer__nav-list { flex-direction: row }`, `.footer__bottom { text-align: left }`. Desktop (≥ 1024px): `gap` e `padding-inline` maiores, `font-size: 0.9375rem`.
- States: `.footer__nav-link:hover { color: var(--color-white) }`; `:focus-visible` outline `var(--color-lima)`. `@media (prefers-reduced-motion: reduce)` neutraliza o fade-in.

### Passo 3: Comportamento JavaScript
- Em `js/main.js` (listener `DOMContentLoaded` existente): `const footerYear = document.getElementById('footer-year'); if (footerYear) footerYear.textContent = new Date().getFullYear();`.
- **Não** adicionar handler de scroll — os `<a href="#…">` do footer já são capturados pelo handler genérico `a[href^="#"]` de US-01 (offset 80 px). Adicionar segundo handler causaria `scrollTo` duplo.
- Em `js/animations.js`: `initFooterAnimation()` com `IntersectionObserver` (`threshold: 0.1`) → adiciona `.is-visible` e `unobserve`; guards `!('IntersectionObserver' in window)` e `prefers-reduced-motion` aplicam `.is-visible` direto; bootstrap por `document.readyState`.

---

## ✅ Checklist de Verificação do Desenvolvedor / Agente

- [ ] **[CA-01]** O lockup de logo (monograma verde + wordmark) e os 4 links (`Sobre`, `Áreas de atuação`, `Equipe`, `Contato`) aparecem no rodapé.
- [ ] **[CA-02]** Clique em *"Equipe"* no rodapé rola suave até `#equipe` com `getBoundingClientRect().top ≈ 80`.
- [ ] **[RN-02]** `#footer-year` contém o ano corrente (`new Date().getFullYear()`), injetado por JS.
- [ ] **[Anim]** Ao entrar no viewport, `.site-footer` recebe `.is-visible` (fade-in), uma vez; com reduced-motion/sem IO aparece estático.
- [ ] **[A11y]** Links do rodapé com alvo tátil ≥ 44px no mobile; `role="contentinfo"`; nav com `aria-label` distinto.
- [ ] **[Layout]** Fundo `#2B2D30`; coluna centralizada (< 768px) → linha `space-between` (≥ 768px); sem rolagem horizontal em 375px / 1313px.
