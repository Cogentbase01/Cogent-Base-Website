/* Cogent Base — interactions
   1) Nav scroll state + mobile menu
   2) Quiet scroll reveals
   3) Signature split-screen "verify" micro-interaction
   4) Confidential demo form (client-side, no real submission)
*/
(function () {
  'use strict';

  /* ---------------------------------------------------- nav scroll */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------- mobile menu */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  var closeMenu = document.getElementById('closeMenu');
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', function () { setMenu(true); });
  if (closeMenu) closeMenu.addEventListener('click', function () { setMenu(false); });
  if (menu) menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });

  /* ---------------------------------------------------- scroll reveals */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------------------------------------------- split-screen verify */
  var split = document.getElementById('split');
  if (split) {
    var cites = split.querySelectorAll('.cite[data-src]');
    var srcScroll = document.getElementById('srcScroll');
    var srcDocName = document.getElementById('srcDocName');
    var verifyPill = document.getElementById('verifyPill');
    var verifyCount = document.getElementById('verifyCount');
    var verifyHint = document.getElementById('verifyHint');
    var verified = {};
    var total = cites.length;

    function refreshCount() {
      var n = Object.keys(verified).length;
      if (verifyCount) verifyCount.textContent = n + ' / ' + total + ' verified';
      if (verifyPill) verifyPill.style.opacity = n === 0 ? '0.35' : '1';
      if (verifyHint && n === total) {
        verifyHint.innerHTML = 'All claims traced · <b>fully verified</b>';
      }
    }

    function activate(srcId, citeEl) {
      var block = document.getElementById(srcId);
      if (!block) return;

      // clear other active citations
      cites.forEach(function (c) { c.classList.remove('active'); });
      citeEl.classList.add('active');

      // unlight other blocks, light this one
      srcScroll.querySelectorAll('.src-block').forEach(function (b) { b.classList.remove('lit'); });
      block.classList.add('lit');
      verified[srcId] = true;

      // update doc name in header
      if (srcDocName && block.dataset.doc) srcDocName.textContent = block.dataset.doc;

      // scroll the source block into view within its pane (no page scroll)
      var top = block.offsetTop - srcScroll.offsetTop - 14;
      srcScroll.scrollTo({ top: top, behavior: 'smooth' });

      refreshCount();
    }

    cites.forEach(function (c) {
      c.setAttribute('role', 'button');
      c.setAttribute('tabindex', '0');
      c.setAttribute('aria-label', 'Verify citation ' + c.textContent);
      c.addEventListener('click', function () { activate(c.dataset.src, c); });
      c.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(c.dataset.src, c); }
      });
    });
  }

  /* ---------------------------------------------------- demo form */
  var form = document.getElementById('demoForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('formNote');
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.innerHTML = 'Request received'; btn.style.background = 'var(--verify)'; btn.style.borderColor = 'var(--verify)'; btn.style.color = '#0a1a12'; }
      if (note) { note.innerHTML = 'Thank you. We will be in touch confidentially within two business days.'; note.style.color = 'var(--verify)'; }
    });
  }
})();
