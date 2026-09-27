(() => {
  'use strict';

  const body = document.body;
  const preloader = document.querySelector('.preloader');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Preloader ---------- */
  body.classList.add('overflow-hidden');

  const hidePreloader = () => {
    body.classList.remove('overflow-hidden');
    if (preloader) {
      preloader.classList.add('is-hidden');
      preloader.addEventListener('transitionend', () => {
        preloader.classList.add('d-none');
      }, { once: true });
    }
  };

  // Show a brief, real loading state — skip the artificial delay if the
  // page (and its assets) are already loaded, and respect reduced motion.
  if (document.readyState === 'complete') {
    hidePreloader();
  } else {
    window.addEventListener('load', () => {
      setTimeout(hidePreloader, prefersReducedMotion ? 0 : 400);
    });
    // Safety net in case 'load' never fires (slow/broken asset)
    setTimeout(hidePreloader, 3000);
  }

  /* ---------- Accessible dropdown menus (desktop hover + keyboard/touch) ---------- */
  const navItems = document.querySelectorAll('.menu .item');

  const closeAllDropdowns = (except) => {
    navItems.forEach((item) => {
      if (item === except) return;
      const btn = item.querySelector('.linkBtn');
      const list = item.querySelector('.item_list');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      if (list) list.classList.remove('is-open');
    });
  };

  navItems.forEach((item) => {
    const btn = item.querySelector('.linkBtn');
    const list = item.querySelector('.item_list');
    if (!btn || !list) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = list.classList.contains('is-open');
      closeAllDropdowns(item);
      list.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  document.addEventListener('click', () => closeAllDropdowns());

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllDropdowns();
  });

  /* ---------- Scroll reveal (one restrained treatment, IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && !prefersReducedMotion && revealEls.length) {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    const toggleBackToTop = () => {
      backToTop.classList.toggle('is-visible', window.scrollY > 600);
    };
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Newsletter form ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMsg = document.getElementById('newsletterMsg');

  if (newsletterForm && newsletterMsg) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const email = emailInput ? emailInput.value.trim() : '';
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!isValid) {
        newsletterMsg.textContent = 'Please enter a valid email address.';
        newsletterMsg.classList.add('is-error');
        emailInput.focus();
        return;
      }

      newsletterMsg.classList.remove('is-error');
      newsletterMsg.textContent = `Thanks — we'll send updates to ${email}.`;
      newsletterForm.reset();
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  document.querySelectorAll('.year-mobile').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
