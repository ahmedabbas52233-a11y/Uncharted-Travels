/* ═══════════════════════════════════════════════════════
   UNCHARTED TRAVELS — main.js
   Nav scroll · Hamburger · Scroll-reveal · Scroll-to-top
═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV SCROLL BEHAVIOUR ── */
  const nav = document.getElementById('mainNav');
  if (nav) {
    // Index page: nav starts transparent, darkens on scroll
    const isIndex = document.body.dataset.page === 'index';
    if (isIndex) {
      nav.classList.add('transparent');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
          nav.classList.remove('transparent');
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
          nav.classList.add('transparent');
        }
      }, { passive: true });
    }
  }

  /* ── HAMBURGER MENU ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      hamburger.innerHTML = isOpen
        ? '<i class="fas fa-times" aria-hidden="true"></i>'
        : '<i class="fas fa-bars"  aria-hidden="true"></i>';
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open navigation menu');
        hamburger.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
      });
    });
    // Close on outside click
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
      }
    });
  }

  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 70);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });
    reveals.forEach(el => revealObs.observe(el));
  }

  /* ── SCROLL TO TOP ── */
  const scrollTop = document.getElementById('scrollTop');
  if (scrollTop) {
    window.addEventListener('scroll', () => {
      scrollTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── FAQ ACCORDION ── */
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── TOUR TYPE SELECTOR (contact page) ── */
  document.querySelectorAll('.tt-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.tt-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });

  /* ── BOOKING FORM (contact page) ── */
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    const fields = bookingForm.querySelectorAll('input, select, textarea');
    fields.forEach(f => f.addEventListener('input', updateProgress));
    function updateProgress() {
      const filled = [...fields].filter(f => f.value && f.value.trim()).length;
      const pct = filled / fields.length;
      const s1 = document.getElementById('fp1');
      const s2 = document.getElementById('fp2');
      const s3 = document.getElementById('fp3');
      if (s1) s1.className = 'fp-step ' + (pct > 0 ? (pct > 0.33 ? 'done' : 'active') : '');
      if (s2) s2.className = 'fp-step ' + (pct > 0.33 ? (pct > 0.66 ? 'done' : 'active') : '');
      if (s3) s3.className = 'fp-step ' + (pct > 0.66 ? (pct >= 1 ? 'done' : 'active') : '');
    }
    bookingForm.addEventListener('submit', e => {
      e.preventDefault();
      bookingForm.style.display = 'none';
      const msg = document.getElementById('successMsg');
      if (msg) msg.style.display = 'block';
    });
  }

  /* ── NEWSLETTER FORM (index page) ── */
  const nlForm = document.querySelector('.newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', e => {
      e.preventDefault();
      nlForm.innerHTML = '<p class="nl-success">Thank you — first dispatch arrives within 24 hours.</p>';
    });
  }

  /* ── REGION TABS (destinations page) ── */
  document.querySelectorAll('.rtab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.rtab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  /* ── FILTER BUTTONS (historical-sites page) ── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  /* ── GROUP SIZE SLIDER display ── */
  const groupSlider = document.getElementById('group_size');
  if (groupSlider) {
    groupSlider.addEventListener('input', function () {
      const val = document.getElementById('groupVal');
      if (val) val.textContent = this.value;
    });
  }

});
