/* Akenius AB — site behaviour. Vanilla JS, no dependencies.
   The experience tier (.xp-desktop / .xp-mobile) and .js are set by the inline <head> script before first paint. */
(function () {
  "use strict";
  var d = document, h = d.documentElement, w = window;
  w.__akReady = true;
  var desktop = h.classList.contains("xp-desktop");
  var $$ = function (s) { return Array.prototype.slice.call(d.querySelectorAll(s)); };

  /* Mist background: WebGL on desktop only, script loaded conditionally. Hero mounts at once, other dark sections lazily. */
  function initShader() {
    var bgs = $$("[data-shader]");
    if (!desktop || !bgs.length) return;
    function mountOn(bg, intensity) {
      try {
        var c = d.createElement("canvas");
        c.setAttribute("aria-hidden", "true");
        bg.insertBefore(c, bg.firstChild);
        if (w.AkeniusShader) w.AkeniusShader.mount(c, { intensity: intensity, fps: 30, halfRes: true });
      } catch (e) {}
    }
    var s = d.createElement("script");
    s.src = "/js/akenius-shader.js";
    s.async = true;
    s.onload = function () {
      var lazy = [];
      bgs.forEach(function (bg) { if (bg.classList.contains("hero-bg")) mountOn(bg, 1.0); else lazy.push(bg); });
      if (!lazy.length) return;
      if ("IntersectionObserver" in w) {
        var io = new IntersectionObserver(function (es) {
          es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); mountOn(e.target, 0.75); } });
        }, { rootMargin: "400px 0px" });
        lazy.forEach(function (bg) { io.observe(bg); });
      } else lazy.forEach(function (bg) { mountOn(bg, 0.75); });
    };
    d.head.appendChild(s);
  }

  /* Fade-up reveals */
  function initReveals() {
    var items = $$("[data-reveal]");
    if (!("IntersectionObserver" in w)) { h.classList.add("reveal-all"); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); e.target.classList.add("is-in"); } });
    }, { threshold: 0.12 });
    items.forEach(function (n) { io.observe(n); });
  }

  function boot() {
    h.classList.add("hero-in");
    initShader();
    initReveals();
  }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", boot); else boot();
})();
