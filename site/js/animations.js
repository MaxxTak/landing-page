// ============================================================
// js/animations.js
// IntersectionObserver, contadores e touch-swipe.
// ============================================================

// --- US-02 — Comunicado ao Mercado: fade-in de entrada ---
// Fonte: SPEC-US-02-comunicado-ao-mercado.md §4 (transcrição fiel)
document.addEventListener('DOMContentLoaded', () => {
  const comunicadoSection = document.querySelector('.comunicado__container');
  if (comunicadoSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(comunicadoSection);
  }
});


// --- US-03+ — Fade-up genérico via IntersectionObserver ---
// Fonte: SPEC-US-03-sobre-o-escritorio.md §4.2 (transcrição fiel)
// Observa todos os elementos .animate-fade-up da página; suporta data-delay (stagger).
(function initScrollAnimations() {
  'use strict';

  // Guard: IntersectionObserver não suportado — degradação graciosa
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.animate-fade-up').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  // Guard: prefers-reduced-motion também no nível do JS
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('.animate-fade-up').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const delay = parseInt(el.dataset.delay, 10) || 0;

      setTimeout(function () {
        el.classList.add('is-visible');
      }, delay);

      // Dispara apenas uma vez
      observer.unobserve(el);
    });
  }, observerOptions);

  document.querySelectorAll('.animate-fade-up').forEach(function (el) {
    observer.observe(el);
  });
})();


// --- US-05 — Diferenciais: fade-up com stagger (data-delay via transitionDelay) ---
// Fonte: SPEC-US-05-diferenciais-atendimento.md §4.2 (transcrição fiel)
function initDiferenciaisAnimation() {
  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  var cards = document.querySelectorAll(
    '#diferenciais .diferencial-card[data-animate="fade-up"]'
  );

  if (!cards.length) return;

  if (prefersReducedMotion) {
    cards.forEach(function (card) { card.classList.add('is-visible'); });
    return;
  }

  cards.forEach(function (card) {
    var delay = parseInt(card.dataset.delay || '0', 10);
    card.style.transitionDelay = delay + 'ms';
  });

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  cards.forEach(function (card) { observer.observe(card); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDiferenciaisAnimation);
} else {
  initDiferenciaisAnimation();
}


// --- US-06 — Em Números: contador progressivo (0 -> alvo) via requestAnimationFrame ---
// Fonte: SPEC-US-06-em-numeros.md §4.2 (adaptado — função autônoma, sem export/import)
function animateCounter(el, target, duration) {
  duration = duration || 2000;
  var startTime = performance.now();

  function tick(currentTime) {
    var progress = Math.min((currentTime - startTime) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    el.textContent = Math.round(eased * target);
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target; // garante o valor exato
    }
  }

  requestAnimationFrame(tick);
}

function initCounters() {
  var section = document.getElementById('numeros');
  if (!section) return;

  var counterEls = section.querySelectorAll('.numeros__count');
  var itemEls = section.querySelectorAll('.numeros__item');

  var prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // RN-02: prefers-reduced-motion — exibe valores finais sem animar
  if (prefersReduced) {
    counterEls.forEach(function (el) { el.textContent = el.dataset.target; });
    itemEls.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  // RN-01: IntersectionObserver — dispara ao >= 40% de visibilidade, uma única vez
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        itemEls.forEach(function (el) { el.classList.add('is-visible'); });

        counterEls.forEach(function (el) {
          var target = parseInt(el.dataset.target, 10);
          if (!Number.isFinite(target)) return;
          animateCounter(el, target, 2000);
        });

        observer.disconnect(); // nunca re-anima
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(section);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCounters);
} else {
  initCounters();
}


// --- US-08 — Nossa Equipe: revelação em cascata dos cards de sócio ---
// Fonte: SPEC-US-08-nossa-equipe-socios.md §4 (transcrição fiel)
function initEquipeAnimation() {
  var socios = document.querySelectorAll('.socio-card');
  if (!socios.length) return;

  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    socios.forEach(function (socio) { socio.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, idx) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('is-visible');
        }, idx * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  socios.forEach(function (socio) { observer.observe(socio); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEquipeAnimation);
} else {
  initEquipeAnimation();
}


// --- US-10 — Rodapé: fade-in de entrada via IntersectionObserver ---
// Fonte: SPEC-US-10-rodape-institucional.md §4.2 (transcrição fiel)
function initFooterAnimation() {
  var footer = document.querySelector('.site-footer');
  if (!footer) return;

  // Guards: sem IntersectionObserver ou com reduced-motion → exibe direto
  // (mesmo padrão de initScrollAnimations; o rodapé é o último elemento da
  // página, então nunca pode ficar preso em opacity: 0).
  if (
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    footer.classList.add('is-visible');
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target); // dispara uma única vez
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(footer);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooterAnimation);
} else {
  initFooterAnimation();
}
