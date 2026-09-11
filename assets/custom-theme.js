/* ========================================
   Gold Parallax Background
   Creates a gold-on-charcoal gradient background
   that moves with parallax on scroll
   ======================================== */
(function () {
  'use strict';

  var bg = document.createElement('div');
  bg.className = 'gold-parallax-bg';
  document.body.insertBefore(bg, document.body.firstChild);

  var ticking = false;

  function updateParallax() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    bg.style.transform = 'translate3d(0, ' + (scrollY * 0.2) + 'px, 0)';
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  updateParallax();
})();
