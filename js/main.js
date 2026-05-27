/* ============================================
   Vision Wellbeing — Main JS
   Lenis, GSAP, ScrollTrigger, Barba, Vanta
   ============================================ */

(function () {
  'use strict';

  // --- Preloader ---
  function dismissPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('loaded');
      setTimeout(() => { preloader.style.display = 'none'; }, 800);
    }
  }

  window.addEventListener('load', function () {
    setTimeout(dismissPreloader, 1600);
  });

  // Fallback if load event already fired
  if (document.readyState === 'complete') {
    setTimeout(dismissPreloader, 1600);
  }

  // --- Copyright Year ---
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Lenis Smooth Scroll ---
  let lenis;
  function initLenis() {
    if (typeof Lenis === 'undefined') return;
    lenis = new Lenis({
      duration: 1.2,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      orientation: 'vertical',
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync with GSAP ticker
    if (typeof gsap !== 'undefined') {
      gsap.ticker.add(function (time) {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // --- Vanta.js Hero Background ---
  let vantaEffect;
  function initVanta() {
    if (typeof VANTA === 'undefined' || typeof THREE === 'undefined') return;
    const heroEl = document.getElementById('hero-bg');
    if (!heroEl) return;

    if (vantaEffect) { vantaEffect.destroy(); vantaEffect = null; }

    try {
      vantaEffect = VANTA.FOG({
        el: heroEl,
        THREE: THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        highlightColor: 0x5B7553,
        midtoneColor: 0x1A1F1C,
        lowlightColor: 0x0F1210,
        baseColor: 0x0F1210,
        speed: 0.6,
        zoom: 1.4
      });
    } catch (e) {
      // Graceful fallback — CSS gradient already handles it
    }
  }

  // --- Navigation Scroll Effect ---
  function initNavScroll() {
    var nav = document.getElementById('nav');
    if (!nav) return;

    var scrolled = false;
    function checkScroll() {
      var shouldBeScrolled = window.scrollY > 80;
      if (shouldBeScrolled !== scrolled) {
        scrolled = shouldBeScrolled;
        nav.classList.toggle('scrolled', scrolled);
      }
    }
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  // --- Mobile Menu ---
  function initMobileMenu() {
    var hamburger = document.getElementById('hamburger');
    var menu = document.getElementById('mobile-menu');
    var overlay = document.getElementById('mobile-overlay');
    if (!hamburger || !menu) return;

    function toggleMenu() {
      var isOpen = menu.classList.contains('open');
      menu.classList.toggle('open');
      if (overlay) overlay.classList.toggle('open');
      document.body.style.overflow = isOpen ? '' : 'hidden';

      // Animate hamburger
      var spans = hamburger.querySelectorAll('span');
      if (!isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    }

    hamburger.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);

    // Close on link click
    var links = menu.querySelectorAll('.mobile-menu__link, .mobile-menu__cta');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        if (menu.classList.contains('open')) toggleMenu();
      });
    });
  }

  // --- Sticky Mobile CTA ---
  function initStickyCTA() {
    var cta = document.getElementById('sticky-cta');
    var hero = document.querySelector('.hero');
    if (!cta || !hero) return;

    function checkCTA() {
      var heroBottom = hero.getBoundingClientRect().bottom;
      cta.classList.toggle('visible', heroBottom < 0);
    }
    window.addEventListener('scroll', checkCTA, { passive: true });
  }

  // --- Scroll to Top ---
  function initScrollTop() {
    var btn = document.getElementById('scroll-top');
    if (!btn) return;

    function checkVisibility() {
      btn.classList.toggle('visible', window.scrollY > 600);
    }
    window.addEventListener('scroll', checkVisibility, { passive: true });

    btn.addEventListener('click', function () {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // --- Rotating Words ---
  function initRotatingWords() {
    var el = document.getElementById('rotating-words');
    if (!el) return;

    var words = ['worry', 'overthinking', 'low mood', 'self-doubt', 'burnout', 'perfectionism', 'panic'];
    var index = 0;

    function rotate() {
      if (typeof gsap === 'undefined') {
        el.textContent = words[index];
        index = (index + 1) % words.length;
        return;
      }

      gsap.to(el, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: function () {
          index = (index + 1) % words.length;
          el.textContent = words[index];
          gsap.fromTo(el,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
          );
        }
      });
    }

    setInterval(rotate, 2500);
  }

  // --- GSAP Scroll Animations ---
  function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Fade up animations
    var fadeUpEls = document.querySelectorAll('.anim-fade-up');
    fadeUpEls.forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // Fade in animations
    var fadeInEls = document.querySelectorAll('.anim-fade-in');
    fadeInEls.forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // Scale in animations
    var scaleInEls = document.querySelectorAll('.anim-scale-in');
    scaleInEls.forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // Stagger bento cards
    var bentoGrids = document.querySelectorAll('.bento-grid');
    bentoGrids.forEach(function (grid) {
      var cards = grid.querySelectorAll('.bento-card');
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // Stagger testimonial cards
    var testimonialTracks = document.querySelectorAll('.testimonials-track');
    testimonialTracks.forEach(function (track) {
      var cards = track.querySelectorAll('.testimonial-card');
      gsap.fromTo(cards,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: track,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // Stagger pricing cards
    var pricingGrids = document.querySelectorAll('.pricing-grid');
    pricingGrids.forEach(function (grid) {
      var cards = grid.querySelectorAll('.pricing-card');
      gsap.fromTo(cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // Stagger resource cards
    var resourceGrids = document.querySelectorAll('.resource-grid');
    resourceGrids.forEach(function (grid) {
      var cards = grid.querySelectorAll('.resource-card, .course-card');
      gsap.fromTo(cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    // Steps stagger
    var stepGroups = document.querySelectorAll('.steps');
    stepGroups.forEach(function (group) {
      var steps = group.querySelectorAll('.step');
      gsap.fromTo(steps,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            once: true
          }
        }
      );
    });
  }

  // --- FAQ Accordion ---
  function initFAQ() {
    var items = document.querySelectorAll('.faq-item');
    items.forEach(function (item) {
      var question = item.querySelector('.faq-item__question');
      var answer = item.querySelector('.faq-item__answer');
      if (!question || !answer) return;

      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');

        // Close all others
        items.forEach(function (other) {
          if (other !== item && other.classList.contains('open')) {
            other.classList.remove('open');
            other.querySelector('.faq-item__answer').style.maxHeight = '0';
          }
        });

        item.classList.toggle('open');
        if (!isOpen) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = '0';
        }
      });
    });
  }

  // --- Contact Form (basic client-side) ---
  function initContactForm() {
    var forms = document.querySelectorAll('[data-contact-form]');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var success = form.querySelector('.form-success');
        if (success) {
          success.style.display = 'block';
          form.querySelector('button[type="submit"]').style.display = 'none';
        }
      });
    });
  }

  // --- Waitlist Form ---
  function initWaitlistForm() {
    var forms = document.querySelectorAll('[data-waitlist-form]');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = form.querySelector('input');
        var btn = form.querySelector('button');
        if (input && btn) {
          input.value = '';
          btn.textContent = 'Joined!';
          btn.disabled = true;
          btn.style.opacity = '0.7';
        }
      });
    });
  }

  // --- Barba.js Page Transitions ---
  function initBarba() {
    if (typeof barba === 'undefined') return;

    barba.init({
      transitions: [{
        name: 'fade',
        leave: function (data) {
          return gsap.to(data.current.container, {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.inOut'
          });
        },
        enter: function (data) {
          window.scrollTo(0, 0);
          return gsap.from(data.next.container, {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.inOut'
          });
        },
        after: function () {
          reinitAfterTransition();
        }
      }]
    });
  }

  // --- Re-initialize after Barba transition ---
  function reinitAfterTransition() {
    // Kill old ScrollTriggers
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.getAll().forEach(function (st) { st.kill(); });
    }

    // Re-init everything
    initScrollAnimations();
    initRotatingWords();
    initVanta();
    initFAQ();
    initContactForm();
    initWaitlistForm();
    initStickyCTA();

    // Update copyright year
    var yearEl = document.getElementById('copyright-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Refresh Lenis
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }

  // --- Initialize Everything ---
  function init() {
    initLenis();
    initNavScroll();
    initMobileMenu();
    initStickyCTA();
    initScrollTop();
    initRotatingWords();
    initScrollAnimations();
    initFAQ();
    initContactForm();
    initWaitlistForm();
    initVanta();
    initBarba();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
