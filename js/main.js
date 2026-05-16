/* ═══════════════════════════════════════════════
   UNCHARTED TRAVELS — SHARED JS
   Handles: hamburger menu, active nav, image
   loading, scroll reveal
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. HAMBURGER MENU ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      // swap icon bars ↔ times
      hamburger.querySelector('i').className = isOpen
        ? 'fas fa-times'
        : 'fas fa-bars';
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.querySelector('i').className = 'fas fa-bars';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // close menu on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav')) {
        navLinks.classList.remove('open');
        hamburger.querySelector('i').className = 'fas fa-bars';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── 2. STICKY NAV (index.html uses its own — skip if already set) ── */
  const nav = document.getElementById('mainNav');
  if (nav && !nav.classList.contains('always-dark')) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  /* ── 3. AUTO ACTIVE NAV LINK ── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      // remove any hardcoded active classes first
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });

  /* ── 4. SMOOTH IMAGE LOADING ── */
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalWidth > 0) return; // already loaded
    img.style.opacity   = '0';
    img.style.transition = 'opacity 0.6s ease';
    img.addEventListener('load',  () => { img.style.opacity = '1'; });
    img.addEventListener('error', () => { img.style.opacity = '1'; }); // don't hide broken imgs
  });
  // handle already-loaded images after the loop
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.style.opacity === '0') img.style.opacity = '1';
  });

  /* ── 5. SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 70);
          revealObs.unobserve(entry.target); // fire once only
        }
      });
    }, { threshold: 0.07 });
    reveals.forEach(el => revealObs.observe(el));
  }

  /* ── 6. SCROLL-TO-TOP BUTTON ── */
  const topBtn = document.getElementById('scrollTop');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('visible', window.scrollY > 600);
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
