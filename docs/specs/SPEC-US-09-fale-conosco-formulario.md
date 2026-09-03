# SPEC — US-09: Fale Conosco (Formulário de Contato & Informações)

> **PRD de Origem:** [US-09-fale-conosco-formulario.md](../../spike-salescosta/PRDs/US-09-fale-conosco-formulario.md)  
> **Componente:** Componente 9 (Fale Conosco)  
> **Stack:** HTML5 Semântico / Vanilla CSS3 / Vanilla JS (ES6+)  
> **Status:** Ready for Development

---

## 1. System Architecture & Component Overview

A seção **Fale Conosco** (`<section id="contato">`) é o ponto crítico de conversão de leads da landing page. Em fundo escuro **`var(--color-footer-dark)` (`#2B2D30`)** — o mesmo tom do `<footer>`, dando continuidade visual entre contato e rodapé —, a seção combina as informações institucionais de contato e localização à esquerda com um formulário minimalista de alta conversão à direita.

- **Desktop (≥ 1024px):** Layout em 2 colunas assimétricas (45% Dados de Contato / 55% Formulário).
- **Mobile/Tablet (< 1024px):** Layout empilhado em 1 coluna vertical (Dados no topo / Formulário abaixo).

### Ajustes aplicados (fora da spec original)

| Ajuste | Descrição |
|---|---|
| **Fundo `--color-footer-dark`** | `.contato { background-color: var(--color-footer-dark) }` (`#2B2D30`) — mesmo tom do rodapé. Histórico: era `var(--color-dark)` na spec original, passou por `#2B2B2B` literal e agora usa o token do footer. |
| **Eyebrow com marcador verde, texto Lima** | `.contato__eyebrow` vira `inline-flex` com `<img class="contato__eyebrow-mark" src="assets/marcador_verde.png">` (render 10×10) à esquerda de "FALE CONOSCO". Cor do texto: **`var(--color-lima)`** (era Taupe). |
| **Ícones de contato em Lima** | `.contato__detail-item svg { color: var(--color-lima) }` (era Taupe) — ícones de endereço, e-mail e telefone. |
| **Estrutura preparada para backend** | `<form data-endpoint="">` + `const CONTACT_ENDPOINT_FALLBACK = ''` em `js/main.js`. Vazio ⇒ **modo simulação** (valida no cliente, mostra `.contato__success`, zero rede). Com endpoint ⇒ `POST` de `FormData` e trata `res.ok`. Botão recebe `aria-busy="true"` durante o envio. |
| **`.btn--full` no desktop** | micro-fix `align-self: flex-start` (senão o botão estica por ser flex item em coluna com `align-items: stretch`). |

### Diretriz Crítica de UX/Mobile (iOS Safari):
Todos os elementos de entrada (`<input>`, `<select>`, `<textarea>`) possuem obrigatoriamente `font-size: 16px` para impedir o zoom automático indesejado no iOS Safari.

### Mermaid Diagram: Form Flow

```mermaid
graph TD
    A[Form Submit Event] --> B{Campos Obrigatórios Preenchidos?}
    B -- Não --> C[Navegador exibe mensagem nativa de erro HTML5]
    B -- Sim --> D{E-mail Corporativo Válido?}
    D -- Não --> E[Exibe erro de formato de e-mail]
    D -- Sim --> F[Dispara POST fetch API / Serverless]
    F --> G[Oculta Formulário e exibe Div .form-success]
```

---

## 2. HTML Structure

```html
<section id="contato" class="contato" aria-labelledby="contato-title">
  <div class="contato__container">
    <!-- Coluna Esquerda: Informações de Contato -->
    <div class="contato__info">
      <span class="contato__eyebrow">
        <img class="contato__eyebrow-mark" src="assets/marcador_verde.png" alt="" width="15" height="15">
        FALE CONOSCO
      </span>
      <h2 id="contato-title" class="contato__title">Entre em contato com nossos advogados.</h2>
      <p class="contato__subtitle">
        Respondemos em até um dia útil. Para casos urgentes, prefira o telefone.
      </p>

      <div class="contato__details">
        <div class="contato__detail-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Av. Paulista, 1000 — 12º andar, São Paulo/SP</span>
        </div>

        <div class="contato__detail-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:contato@salescosta.com.br" class="contato__link">contato@salescosta.com.br</a>
        </div>

        <div class="contato__detail-item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <a href="tel:+551130000000" class="contato__link">+55 (11) 3000-0000</a>
        </div>
      </div>
    </div>

    <!-- Coluna Direita: Formulário de Mensagem -->
    <div class="contato__form-wrapper">
      <!-- data-endpoint vazio = modo simulação; preencher para ativar o POST real -->
      <form id="contact-form" class="contato__form" method="post" action="" data-endpoint="" novalidate>
        <div class="form-group">
          <label for="nome" class="form-label">Nome Completo *</label>
          <input type="text" id="nome" name="nome" class="form-input" required autocomplete="name" placeholder="Seu nome completo">
        </div>

        <div class="form-group">
          <label for="email" class="form-label">E-mail Corporativo *</label>
          <input type="email" id="email" name="email" class="form-input" required autocomplete="email" placeholder="seuemail@empresa.com.br">
        </div>

        <div class="form-group">
          <label for="telefone" class="form-label">Telefone</label>
          <input type="tel" id="telefone" name="telefone" class="form-input" autocomplete="tel" placeholder="(11) 90000-0000">
        </div>

        <div class="form-group">
          <label for="area" class="form-label">Área de Interesse</label>
          <select id="area" name="area" class="form-select">
            <option value="empresarial">Direito Empresarial</option>
            <option value="tributario">Direito Tributário</option>
            <option value="trabalhista">Direito Trabalhista</option>
            <option value="civil">Direito Civil</option>
            <option value="societario">Direito Societário</option>
            <option value="compliance">Compliance & Governança</option>
          </select>
        </div>

        <div class="form-group">
          <label for="mensagem" class="form-label">Mensagem *</label>
          <textarea id="mensagem" name="mensagem" class="form-textarea" rows="4" required placeholder="Como podemos ajudar o seu negócio?"></textarea>
        </div>

        <button type="submit" class="btn btn--primary btn--full">
          Enviar mensagem
          <svg class="btn__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </form>

      <!-- Mensagem Inline de Sucesso -->
      <div id="form-success" class="contato__success" role="status" tabindex="-1" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <h3>Mensagem enviada com sucesso!</h3>
        <p>Agradecemos o contato. Nossa equipe jurídica retornará em até um dia útil.</p>
      </div>
    </div>
  </div>
</section>

---

## 3. CSS Specification

```css
/* ==========================================================================
   3.1 Base Styles (Mobile First: < 768px)
   ========================================================================== */
.contato {
  /* ajuste: mesmo tom do rodapé (#2B2D30) — continuidade visual contato → footer */
  background-color: var(--color-footer-dark);
  color: var(--color-white);
  padding: var(--section-pad-y) var(--section-pad-x);
}

.contato__container {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

/* ajuste: eyebrow com marcador verde à esquerda, texto em Lima */
.contato__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: var(--text-eyebrow);
  font-weight: 500;
  color: var(--color-lima); /* ajuste: era var(--color-taupe) */
  letter-spacing: var(--eyebrow-tracking); /* 3px — token global */
  margin-bottom: 16px;
  text-transform: uppercase;
}

.contato__eyebrow-mark {
  flex: 0 0 auto;
  display: block;
  width: 10px;
  height: 10px;
}

.contato__title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  line-height: 1.25;
  font-weight: 400;
  color: var(--color-white);
  margin-bottom: 16px;
}

.contato__subtitle {
  font-size: var(--text-body);
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 36px;
  font-weight: 300;
}

.contato__details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contato__detail-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text-light);
  font-size: 0.9375rem;
}

.contato__detail-item svg {
  color: var(--color-lima); /* ajuste: era var(--color-taupe) */
  flex-shrink: 0;
}

.contato__link {
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contato__link:hover {
  color: var(--color-taupe);
}

/* Estilização do Formulário Minimalista */
.contato__form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-light);
}

/* Regra Obrigatória: font-size: 16px evita o zoom automático no iOS Safari */
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  font-size: 16px !important;
  font-family: var(--font-body);
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 12px 0;
  color: var(--color-white);
  border-radius: 0;
  transition: border-color 0.3s ease;
}

/* opções legíveis sobre o fundo escuro da seção */
.form-select option {
  background-color: var(--color-footer-dark); /* acompanha o fundo da .contato */
  color: var(--color-white);
}

.form-textarea {
  resize: vertical;
  min-height: 96px;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.45);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-bottom-color: var(--color-taupe);
}

.btn--full {
  width: 100%;
  margin-top: 12px;
}

/* estado de envio (JS adiciona aria-busy durante o POST) */
.btn--full[aria-busy="true"] {
  opacity: 0.7;
  pointer-events: none;
}

/* Sucesso do Formulário */
.contato__success {
  display: none;
  text-align: center;
  padding: 40px 24px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 4px;
  border: 1px solid var(--color-taupe);
}

.contato__success--active {
  display: block;
}

.contato__success svg {
  color: var(--color-lima);
  margin-bottom: 16px;
}

.contato__success h3 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  margin-bottom: 8px;
}

/* ==========================================================================
   3.2 Desktop Breakpoint (≥ 1024px)
   ========================================================================== */
@media (min-width: 1024px) {
  .contato__container {
    flex-direction: row;
    align-items: flex-start;
  }

  .contato__info {
    flex: 0 0 45%;
  }

  .contato__form-wrapper {
    flex: 0 0 55%;
  }

  .btn--full {
    width: auto;
    align-self: flex-start; /* micro-fix: senão estica (flex item em coluna) */
  }
}
```

---

## 4. JavaScript Specification

Transcrição fiel da validação da spec, **estendida com o ponto de integração de backend** (endpoint plugável). `js/main.js`, listener `DOMContentLoaded` próprio.

```javascript
// >>> PONTO DE INTEGRAÇÃO DO FORMULÁRIO <<<
// Ative o envio real definindo a URL do serviço em UMA destas formas:
//   1. no HTML:  <form id="contact-form" data-endpoint="https://formspree.io/f/XXXX">
//   2. aqui:     const CONTACT_ENDPOINT_FALLBACK = 'https://...';
// Com endpoint  -> POST de FormData + trata res.ok.
// Sem endpoint  -> MODO SIMULAÇÃO: valida no cliente e mostra .contato__success (zero rede).
const CONTACT_ENDPOINT_FALLBACK = '';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successDiv = document.getElementById('form-success');
  if (!form || !successDiv) return;

  const endpoint = (form.dataset.endpoint || CONTACT_ENDPOINT_FALLBACK || '').trim();
  const submitBtn = form.querySelector('[type="submit"]');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const showSuccess = () => {
    form.style.display = 'none';
    successDiv.classList.add('contato__success--active');
    successDiv.setAttribute('aria-hidden', 'false');
    successDiv.focus?.();
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail corporativo válido.');
      return;
    }

    if (submitBtn) submitBtn.setAttribute('aria-busy', 'true');

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 300)); // simulação
      }
      showSuccess();
    } catch (err) {
      if (submitBtn) submitBtn.removeAttribute('aria-busy');
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    }
  });
});
```

---

## 5. Accessibility (A11y) Requirements

- **Entradas e Rótulos:** Todo `<input>` possui seu `<label>` correspondente vinculado via `id`.
- **Prevenção de Zoom iOS:** `font-size: 16px !important` aplicado em todos os controles do formulário.
- **Campos Obrigatórios:** Marcados explicitamente com o atributo `required` e indicativo `*`.
- **Mensagem de sucesso:** `<div id="form-success" role="status" tabindex="-1">` — `role="status"` anuncia via leitor de tela; `tabindex="-1"` + `.focus()` movem o foco para a confirmação após o envio.
- **Estado de envio:** botão recebe `aria-busy="true"` durante o `POST` (e `pointer-events: none` via CSS).
- **Marcador do eyebrow:** `.contato__eyebrow-mark` é decorativo (`alt=""`).

---

## 6. Content Data Model

```json
{
  "contato": {
    "title": "Entre em contato com nossos advogados.",
    "address": "Av. Paulista, 1000 — 12º andar, São Paulo/SP",
    "email": "contato@salescosta.com.br",
    "phone": "+55 (11) 3000-0000",
    "areas": ["Empresarial", "Tributário", "Trabalhista", "Civil", "Societário", "Compliance"]
  }
}
```

---

## 7. Acceptance Criteria (Technical)

### CA-01: Validação de Campos Obrigatórios
- O envio do formulário sem `Nome`, `E-mail` ou `Mensagem` aciona alerta e bloqueia a submissão. E-mail sem formato válido também.

### CA-02: Prevenção de Auto-Zoom no iOS
- Todos os campos de texto possuem `font-size: 16px`, prevenindo o zoom automático no Safari em dispositivos iOS.

### CA-03: Layout responsivo
- `< 1024px` → 1 coluna, botão `width: 100%`. `≥ 1024px` → 2 colunas 45/55, botão com largura automática (não esticado). Sem rolagem horizontal em 375px / 1313px.

### CA-04: Envio bem-sucedido
- Com dados válidos e `data-endpoint=""` (simulação), o `<form>` some e a `#form-success` aparece (`.contato__success--active`, `aria-hidden="false"`). Sem requisição de rede.

### CA-05: Ponto de integração de backend
- Definir `data-endpoint` (ou `CONTACT_ENDPOINT_FALLBACK`) faz o submit disparar `fetch(endpoint, { method: 'POST', body: FormData })`; `!res.ok` → alerta de erro e botão reativado.

### CA-06: Ajustes visuais
- `.contato` computa `background-color: rgb(43, 45, 48)` (`--color-footer-dark` `#2B2D30`, igual ao `.site-footer`). `.contato__eyebrow` é `inline-flex`, `color: rgb(228, 255, 143)` (Lima), com `.contato__eyebrow-mark` (`marcador_verde.png`) 10×10 à esquerda. `.contato__detail-item svg` computa `color: rgb(228, 255, 143)` (Lima).

---

## 8. Dependencies & Integration Points

- **CSS Variables:** `--color-footer-dark` (fundo da seção + `option` do select), `--color-lima` (eyebrow + ícones de contato), `--color-taupe` (foco de inputs, hover de links, borda do sucesso), `--color-white`, `--color-text-light`, `--font-display`, `--eyebrow-tracking`.
- **Tipografia:** fonte única **Montserrat** (`--font-body` e `--font-display`), definida em `css/variables.css`. Inputs mantêm `font-size: 16px` (anti-zoom iOS) independentemente da fonte.
- **Assets:** `assets/marcador_verde.png` — marcador do eyebrow.
- **Navbar:** o item "Fale conosco" (`<a href="#contato" class="navbar__link--cta">`) já existe no menu — âncora consumida.
- **Ordem na página:** inserir **após `<section id="equipe">`** (… → depoimentos → equipe → contato).
- **Files Affected:** `index.html`, `css/components.css` (inputs, `.btn--full`, `.contato__success`), `css/sections.css` (`.contato*` layout/colunas/eyebrow), `js/main.js` (validação + envio).
- **Ponto de integração de backend:** `<form data-endpoint="">` + `CONTACT_ENDPOINT_FALLBACK` em `js/main.js`. Enquanto vazio, o formulário roda em **modo simulação**. Serviço a definir (Formspree / EmailJS / função serverless) — risco R01 em aberto.
- **Placeholders:** `Av. Paulista, 1000`, `contato@salescosta.com.br`, `+55 (11) 3000-0000` — confirmar/substituir antes de publicar.

