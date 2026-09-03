// ============================================================
// js/main.js — Sticky Navbar, Drawer & Smooth Scroll
// Fonte: SPEC-US-01-hero-banner.md §4 (transcrição fiel)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.navbar__hamburger');
  const drawer = document.getElementById('nav-drawer');
  const drawerClose = document.querySelector('.nav-drawer__close');
  const navLinks = document.querySelectorAll('a[href^="#"]');

  // 1. Sticky Navbar Solid Transition
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.add('navbar--scrolled');
    } else {
      header.classList.remove('navbar--scrolled');
    }
  }, { passive: true });

  // 2. Drawer Toggle Logic
  const openDrawer = () => {
    drawer.classList.add('nav-drawer--active');
    drawer.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('nav-drawer--active');
    drawer.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);

  // 3. Smooth Scroll with 80px Navbar Offset Compensation
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        closeDrawer();

        const navHeight = 80;
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // US-04 — os cards de Áreas de Atuação são puramente informativos
  // (sem link "Saiba mais"). Nenhum JS adicional é necessário.

  // US-10 — Rodapé: injeção do ano corrente no copyright.
  // Obs.: o smooth scroll dos links do rodapé (`[data-smooth-scroll]`,
  // href="#sobre|#areas|#equipe|#contato|#hero") já é coberto pelo handler
  // genérico `a[href^="#"]` acima — NÃO adicionamos um segundo handler
  // delegado (evita `scrollTo` duplo, mesmo caso da US-04). Sem `history.pushState`
  // por consistência com o restante do site.
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
});


// ============================================================
// js/main.js — Hero: banner rotativo (3 telas, crossfade, 4s) — US-01
// Fonte: SPEC-US-01-hero-banner.md §4
// ============================================================
function initHeroCarousel() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const slides = hero.querySelectorAll('.hero__slide');
  if (slides.length < 2) return;

  // prefers-reduced-motion: congela na tela 1, sem giro automático
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  if (prefersReduced) {
    slides.forEach((s, i) => s.classList.toggle('is-active', i === 0));
    return;
  }

  const INTERVAL = 4000;
  let current = 0;
  let timer = null;

  function goTo(index) {
    slides[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
  }

  function start() {
    if (timer) return;
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  function stop() {
    clearInterval(timer);
    timer = null;
  }

  // Pausa ao interagir; retoma ao sair. Também pausa com a aba em segundo plano.
  hero.addEventListener('mouseenter', stop);
  hero.addEventListener('mouseleave', start);
  hero.addEventListener('focusin', stop);
  hero.addEventListener('focusout', start);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  start();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroCarousel);
} else {
  initHeroCarousel();
}


// ============================================================
// js/main.js — Fale Conosco: validação + envio — US-09
// Fonte: SPEC-US-09-fale-conosco-formulario.md §4 (transcrição fiel)
// + preparação de backend: endpoint plugável via data-endpoint.
//
// >>> PONTO DE INTEGRAÇÃO DO FORMULÁRIO <<<
// Para ativar o envio real, defina a URL do serviço em UMA destas formas:
//   1. no HTML:  <form id="contact-form" data-endpoint="https://formspree.io/f/XXXX">
//   2. aqui:     const CONTACT_ENDPOINT_FALLBACK = 'https://...';
// Com endpoint definido, o form faz POST de FormData e trata res.ok.
// Sem endpoint (padrão atual), roda em MODO SIMULAÇÃO: valida no cliente
// e exibe .contato__success sem nenhuma requisição de rede.
// ============================================================
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
        // --- Envio real (backend plugado) ---
        const res = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
      } else {
        // --- Modo simulação (sem endpoint configurado) ---
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      showSuccess();
    } catch (err) {
      if (submitBtn) submitBtn.removeAttribute('aria-busy');
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    }
  });
});


// ============================================================
// js/main.js — TestimonialsCarousel — US-07
// Fonte: SPEC-US-07-depoimentos-prova-social.md §4.2 (transcrição fiel)
// ============================================================

/**
 * Static testimonials data.
 * Adding an object here automatically creates a new slide + dot.
 *
 * NOTA (Fase 17): 1 depoimento real (Marina Albuquerque / Grupo Vantis)
 * + 2 placeholders para demonstrar o efeito de carrossel. Substituir os
 * placeholders por depoimentos reais quando disponíveis.
 *
 * @type {Array<{quote: string, name: string, role: string, company: string}>}
 */
const TESTIMONIALS_DATA = [
  {
    quote:
      "A equipe conduziu uma reestruturação societária complexa com clareza e " +
      "agilidade que não encontrávamos em outros escritórios.",
    name: "Marina Albuquerque",
    role: "Diretora Financeira",
    company: "Grupo Vantis",
  },
  // --- PLACEHOLDER — substituir por depoimento real ---
  {
    quote:
      "O acompanhamento próximo dos sócios fez diferença real na condução do " +
      "nosso contencioso tributário. Sentimos segurança em cada etapa.",
    name: "Ricardo Menezes",
    role: "Diretor Jurídico",
    company: "Nortlar Indústria",
  },
  // --- PLACEHOLDER — substituir por depoimento real ---
  {
    quote:
      "Recebemos orientação estratégica clara sobre governança e sucessão " +
      "familiar, com uma linguagem acessível e sem rodeios.",
    name: "Helena Prado",
    role: "Sócia-administradora",
    company: "Prado & Filhos Participações",
  },
];

/**
 * TestimonialsCarousel
 * Manages rendering, navigation, touch-swipe, and ARIA state
 * for the #depoimentos section.
 */
class TestimonialsCarousel {
  /**
   * @param {Object} opts
   * @param {string} opts.sectionSelector  - Root section selector
   * @param {number} opts.swipeThreshold   - Minimum px delta for swipe (default 50)
   * @param {Array}  opts.data             - Testimonials data array
   */
  constructor({
    sectionSelector = "#depoimentos",
    swipeThreshold = 50,
    data = TESTIMONIALS_DATA,
  } = {}) {
    this.section = document.querySelector(sectionSelector);
    if (!this.section) return; // Guard: section absent from DOM

    this.carousel      = this.section.querySelector(".testimonials-carousel");
    this.track         = this.section.querySelector(".testimonials-track");
    this.dotsContainer = this.section.querySelector(".testimonials-dots");

    this.data           = data;
    this.total          = data.length;
    this.current        = 0;
    this.swipeThreshold = swipeThreshold;
    this._touchStartX   = 0;
    this._touchEndX     = 0;

    this._init();
  }

  // ── Private: Initialization ──────────────────────

  _init() {
    this._renderSlides();
    this._renderDots();
    this._bindEvents();
    this._goTo(0, /* animate= */ false); // Set initial state without transition
    this._handleSingleSlide();
    this._setupIntersectionObserver();
  }

  /** Renders all slides from TESTIMONIALS_DATA into the track. */
  _renderSlides() {
    this.track.innerHTML = "";

    // Widen track so all slides fit side-by-side
    this.track.style.width = `${this.total * 100}%`;

    this.data.forEach((item, i) => {
      const article = document.createElement("article");
      article.className          = "testimonial-slide";
      article.id                 = `testimonial-slide-${i}`;
      article.dataset.index      = i;
      article.setAttribute("role",              "group");
      article.setAttribute("aria-roledescription", "slide");
      article.setAttribute("aria-label",        `Depoimento ${i + 1} de ${this.total}`);
      article.setAttribute("aria-hidden",       i === 0 ? "false" : "true");

      // Each slide occupies an equal share of the widened track
      const pct = 100 / this.total;
      article.style.flex  = `0 0 ${pct}%`;
      article.style.width = `${pct}%`;

      article.innerHTML = `
        <span class="quote-deco" aria-hidden="true">&ldquo;</span>
        <blockquote class="testimonial-quote" cite="">
          <p>${this._escape(item.quote)}</p>
        </blockquote>
        <cite class="testimonial-author">
          <strong class="testimonial-name">${this._escape(item.name)}</strong>
          <span class="testimonial-role">
            ${this._escape(item.role)}, ${this._escape(item.company)}
          </span>
        </cite>
      `;

      this.track.appendChild(article);
    });

    this.slides = Array.from(
      this.track.querySelectorAll(".testimonial-slide")
    );
  }

  /** Renders navigation dots from TESTIMONIALS_DATA. */
  _renderDots() {
    this.dotsContainer.innerHTML = "";

    this.data.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.className = "testimonials-dot";
      btn.setAttribute("role",         "tab");
      btn.setAttribute("aria-selected", i === 0 ? "true" : "false");
      btn.setAttribute("aria-controls", `testimonial-slide-${i}`);
      btn.setAttribute("aria-label",    `Ir para depoimento ${i + 1}`);
      btn.dataset.index = i;
      btn.tabIndex      = i === 0 ? 0 : -1;

      btn.addEventListener("click", () => this._goTo(i));
      this.dotsContainer.appendChild(btn);
    });

    this.dots = Array.from(
      this.dotsContainer.querySelectorAll(".testimonials-dot")
    );
  }

  /**
   * Binds touch and keyboard events.
   * Touch events use { passive: true } for scroll performance.
   */
  _bindEvents() {
    this.carousel.addEventListener(
      "touchstart",
      (e) => { this._touchStartX = e.changedTouches[0].screenX; },
      { passive: true }
    );

    this.carousel.addEventListener(
      "touchend",
      (e) => {
        this._touchEndX = e.changedTouches[0].screenX;
        this._handleSwipe();
      },
      { passive: true }
    );

    // Keyboard navigation within dots container
    this.dotsContainer.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const next = (this.current + 1) % this.total;
        this._goTo(next);
        this.dots[next].focus();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = (this.current - 1 + this.total) % this.total;
        this._goTo(prev);
        this.dots[prev].focus();
      }
    });
  }

  // ── Private: Navigation ──────────────────────────

  /**
   * Navigates to a slide by index.
   * @param {number}  index   - 0-based target slide
   * @param {boolean} animate - Play transition (default true)
   */
  _goTo(index, animate = true) {
    if (index < 0 || index >= this.total) return;

    const reducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!animate || reducedMotion) {
      this.track.style.transition = "none";
    } else {
      this.track.style.transition = "transform 0.4s ease";
    }

    // Shift track: each slide is (100/total)% of track width,
    // equivalent to 100% of the carousel viewport width
    const offset = -(index * (100 / this.total));
    this.track.style.transform = `translateX(${offset}%)`;

    // Force reflow to prevent transition bleeding after no-animate call
    if (!animate) void this.track.offsetHeight;

    // ARIA + class updates
    this.slides.forEach((slide, i) => {
      const active = i === index;
      slide.setAttribute("aria-hidden", active ? "false" : "true");

      if (active) {
        slide.classList.add("is-entering");
        slide.addEventListener(
          "animationend",
          () => slide.classList.remove("is-entering"),
          { once: true }
        );
      }
    });

    this.dots.forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle("active", active);
      dot.setAttribute("aria-selected", active ? "true" : "false");
      dot.tabIndex = active ? 0 : -1;
    });

    this.carousel.setAttribute(
      "aria-label",
      `Depoimento ${index + 1} de ${this.total}`
    );

    this.current = index;
  }

  // ── Private: Swipe ───────────────────────────────

  /** Evaluates swipe direction and triggers navigation. */
  _handleSwipe() {
    const delta = this._touchEndX - this._touchStartX;
    if (Math.abs(delta) < this.swipeThreshold) return; // Ignore micro-swipes

    if (delta < 0) {
      // Swipe left → next
      this._goTo((this.current + 1) % this.total);
    } else {
      // Swipe right → previous
      this._goTo((this.current - 1 + this.total) % this.total);
    }
  }

  // ── Private: Single-slide handling ───────────────

  _handleSingleSlide() {
    if (this.total <= 1) {
      this.dotsContainer.classList.add("is-single");
    }
  }

  // ── Private: Intersection Observer ───────────────

  _setupIntersectionObserver() {
    const targets = this.section.querySelectorAll(
      ".section-eyebrow, .testimonials-carousel, .testimonials-dots"
    );
    targets.forEach((el) => el.classList.add("anim-fade-up"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
  }

  // ── Private: Utility ─────────────────────────────

  /** Escapes HTML entities in dynamic content to prevent XSS. */
  _escape(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ── Public API ───────────────────────────────────

  /** Navigate to index from external code. */
  goTo(index) { this._goTo(index); }

  /** @returns {number} Current active slide index. */
  get currentIndex() { return this.current; }
}

// ── Instantiation ────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  window.testimonialsCarousel = new TestimonialsCarousel({
    data: TESTIMONIALS_DATA,
    swipeThreshold: 50,
  });
});
