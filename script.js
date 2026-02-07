(function () {
  'use strict';

  var STORAGE_THEME = 'learner-site-theme';
  var STORAGE_ACCENT = 'learner-site-accent';

  function getStored(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v !== null ? v : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function setStored(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  }

  function setAccent(hex) {
    hex = hex || getStored(STORAGE_ACCENT, '#a78bfa');
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    var dim = 'rgba(' + r + ',' + g + ',' + b + ',0.18)';
    var glow = 'rgba(' + r + ',' + g + ',' + b + ',0.25)';
    document.documentElement.style.setProperty('--accent', hex);
    document.documentElement.style.setProperty('--accent-dim', dim);
    document.documentElement.style.setProperty('--accent-glow', glow);
    setStored(STORAGE_ACCENT, hex);
    // Sync picker and swatches
    var picker = document.getElementById('accent-picker');
    if (picker) picker.value = hex;
    document.querySelectorAll('.accent-swatch').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-accent') === hex);
    });
  }

  function setTheme(theme) {
    theme = theme || getStored(STORAGE_THEME, 'dark');
    document.documentElement.setAttribute('data-theme', theme === 'system' ? '' : theme);
    setStored(STORAGE_THEME, theme);
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-theme') === theme ? 'true' : 'false');
    });
  }

  // Apply stored theme and accent on load
  setTheme(getStored(STORAGE_THEME, 'dark'));
  setAccent(getStored(STORAGE_ACCENT, '#a78bfa'));

  // Theme pane open/close
  var pane = document.getElementById('theme-pane');
  var openBtn = document.getElementById('theme-pane-toggle');
  var closeBtn = document.getElementById('theme-pane-close');
  if (pane && openBtn) {
    openBtn.addEventListener('click', function () {
      var open = !pane.classList.contains('is-open');
      pane.classList.toggle('is-open', open);
      openBtn.setAttribute('aria-expanded', open);
    });
  }
  if (pane && closeBtn) {
    closeBtn.addEventListener('click', function () {
      pane.classList.remove('is-open');
      if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // Theme buttons
  document.querySelectorAll('.theme-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var t = this.getAttribute('data-theme');
      setTheme(t);
    });
  });

  // Accent swatches
  document.querySelectorAll('.accent-swatch').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setAccent(this.getAttribute('data-accent'));
    });
  });

  // Custom accent picker
  var picker = document.getElementById('accent-picker');
  if (picker) {
    picker.addEventListener('input', function () {
      setAccent(this.value);
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      var el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (pane) pane.classList.remove('is-open');
      if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Scroll reveal for cards
  var reveal = document.querySelectorAll('[data-reveal]');
  if (reveal.length) {
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -24px 0px' }
    );
    reveal.forEach(function (el) { obs.observe(el); });
  }

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
    });
  }
})();
