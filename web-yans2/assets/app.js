/* ============================================================
   智慧教育 AI 产品 Demo · 共享交互脚本
   ============================================================ */
(function () {
  'use strict';

  /* 滚动进入视口时触发 reveal 动画 */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* 数字滚动动画 */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var dur = 1400;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = val.toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* 进度条动画 */
  var bars = document.querySelectorAll('.bar[data-width]');
  if ('IntersectionObserver' in window) {
    var bio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.querySelector('i').style.width = e.target.getAttribute('data-width') + '%';
          bio.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { bio.observe(b); });
  } else {
    bars.forEach(function (b) { b.querySelector('i').style.width = b.getAttribute('data-width') + '%'; });
  }

  /* 环形进度动画 */
  var rings = document.querySelectorAll('.ring[data-p]');
  if ('IntersectionObserver' in window) {
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var r = e.target; var p = r.getAttribute('data-p');
          var cur = 0; var t0 = null;
          function tick(ts) {
            if (!t0) t0 = ts;
            var prog = Math.min((ts - t0) / 1200, 1);
            cur = p * (1 - Math.pow(1 - prog, 3));
            r.style.setProperty('--p', cur);
            var label = r.querySelector('span');
            if (label) label.textContent = Math.round(cur) + '%';
            if (prog < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          rio.unobserve(r);
        }
      });
    }, { threshold: 0.4 });
    rings.forEach(function (r) { rio.observe(r); });
  }

  /* 移动端导航菜单 */
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (nav && toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      if (open) {
        links.style.display = 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = '56px';
        links.style.left = '0';
        links.style.right = '0';
        links.style.background = 'rgba(20,20,22,.96)';
        links.style.backdropFilter = 'blur(20px)';
        links.style.padding = '20px 24px';
        links.style.gap = '16px';
        links.style.borderBottom = '1px solid rgba(255,255,255,.08)';
      } else {
        links.removeAttribute('style');
        links.style.display = 'none';
      }
    });
  }

  /* 平滑锚点滚动 */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length > 1) {
        var t = document.querySelector(id);
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
})();
