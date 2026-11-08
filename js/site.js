/* Akenius AB — site behaviour. Vanilla JS, no dependencies.
   The experience tier (.xp-desktop / .xp-mobile) and .js are set by the inline <head> script before first paint. */
(function () {
  "use strict";
  var d = document, h = d.documentElement, w = window;
  w.__akReady = true;
  var desktop = h.classList.contains("xp-desktop");
  var $ = function (s, r) { return (r || d).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); };
  var params = new URLSearchParams(w.location.search);
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };

  /* ---------- hero background: WebGL on desktop only, loaded conditionally ---------- */
  function initShader() {
    return new Promise(function (resolve) {
      var bg = $(".hero-bg[data-shader]");
      if (!desktop || !bg) return resolve();
      var s = d.createElement("script");
      s.src = "js/akenius-shader.js";
      s.async = true;
      s.onload = function () {
        try {
          var c = d.createElement("canvas");
          c.setAttribute("aria-hidden", "true");
          bg.insertBefore(c, bg.firstChild);
          if (w.AkeniusShader) w.AkeniusShader.mount(c, { intensity: 0.55, fps: 24 });
        } catch (e) {}
        resolve();
      };
      s.onerror = function () { resolve(); };
      d.head.appendChild(s);
    });
  }

  /* ---------- hero entrance ---------- */
  var heroStarted = false;
  function heroStart() {
    if (heroStarted) return;
    heroStarted = true;
    h.classList.add("hero-in");
  }

  /* ---------- launch loader ---------- */
  function runLoader(shaderP) {
    var el = $(".loader");
    if (!el || !h.classList.contains("loader-on")) { heroStart(); return; }
    var status = $("#loader-status");
    if (status) status.textContent = "Loading";
    var parts = $$(".m", el), ring = $(".ring", el), count = $(".loader-count", el);
    var minMs = desktop ? 1200 : 900, maxMs = desktop ? 2500 : 1200;
    var tasks = 3, done = 0;
    var tick = function () { done++; };
    (d.fonts && d.fonts.ready ? d.fonts.ready : Promise.resolve()).then(tick, tick);
    (d.readyState === "complete" ? Promise.resolve() : new Promise(function (r) { w.addEventListener("load", r, { once: true }); })).then(tick, tick);
    shaderP.then(tick, tick);

    var frozen = params.has("t") ? parseFloat(params.get("t")) * 1000 : null;
    var t0 = null, shown = 0, finished = false;
    function paint(p) {
      var off = String(1 - p);
      parts.forEach(function (n) { n.style.strokeDashoffset = off; });
      if (ring) ring.style.strokeDashoffset = off;
      count.textContent = Math.round(p * 100) + "%";
    }
    function finish() {
      finished = true;
      paint(1);
      el.classList.add("is-done");
      setTimeout(function () {
        el.classList.add("is-leaving");
        setTimeout(heroStart, 150);
        setTimeout(function () {
          h.classList.remove("loader-on");
          if (status) status.textContent = "";
          try { sessionStorage.setItem("ak-loaded", "1"); } catch (e) {}
        }, desktop ? 750 : 450);
      }, 200);
    }
    function frame(now) {
      if (finished) return;
      if (t0 === null) t0 = now;
      var elapsed = frozen !== null ? frozen : now - t0;
      var timeP = clamp(elapsed / minMs, 0, 1);
      timeP = 1 - Math.pow(1 - timeP, 2);
      var real = done / tasks;
      var cap = elapsed >= maxMs ? 1 : (real >= 1 ? 1 : 0.15 + 0.8 * real);
      var target = Math.min(timeP, cap);
      shown += (target - shown) * 0.25;
      if (target >= 1 && shown > 0.995) shown = 1;
      paint(shown);
      if (frozen !== null) { if (shown < target - 0.001) w.requestAnimationFrame(frame); return; }
      if (shown >= 1) finish(); else w.requestAnimationFrame(frame);
    }
    w.requestAnimationFrame(frame);
  }

  /* ---------- nav ---------- */
  function initNav() {
    var nav = $(".site-nav");
    if (!nav) return;
    var toggle = $(".nav-toggle", nav), links = $(".nav-links", nav);
    var open = false;
    function setOpen(v, focusBack) {
      open = v;
      if (!toggle) return;
      toggle.setAttribute("aria-expanded", v ? "true" : "false");
      links.classList.toggle("is-open", v);
      if (v) { var a = $("a", links); if (a) a.focus(); }
      else if (focusBack) toggle.focus();
    }
    if (toggle) {
      toggle.addEventListener("click", function () { setOpen(!open); });
      d.addEventListener("keydown", function (e) { if (e.key === "Escape" && open) setOpen(false, true); });
      links.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
      d.addEventListener("click", function (e) { if (open && !nav.contains(e.target)) setOpen(false); });
    }
    nav.addEventListener("focusin", function () { nav.classList.remove("is-hidden"); });

    // current section underline (home: #about / #contact)
    var anchors = $$('.nav-links a[href*="#"]', nav);
    var map = [];
    anchors.forEach(function (a) {
      var id = a.hash && a.hash.slice(1), sec = id && d.getElementById(id);
      if (sec && /\/(index\.html)?$/.test(w.location.pathname)) map.push({ a: a, sec: sec });
    });
    if (map.length && "IntersectionObserver" in w) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          var m = map.filter(function (x) { return x.sec === e.target; })[0];
          if (!m) return;
          if (e.isIntersecting) { map.forEach(function (x) { x.a.removeAttribute("aria-current"); }); m.a.setAttribute("aria-current", "location"); }
          else if (m.a.getAttribute("aria-current") === "location") m.a.removeAttribute("aria-current");
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      map.forEach(function (x) { io.observe(x.sec); });
    }
    // Jumping to an anchor is navigation, not reading: keep the nav visible while it scrolls.
    var holdUntil = 0;
    d.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href*="#"]');
      if (a && a.hash) holdUntil = Date.now() + 1500;
    });
    if (w.location.hash) holdUntil = Date.now() + 1500;
    return { isOpen: function () { return open; }, held: function () { return Date.now() < holdUntil; }, el: nav };
  }

  /* ---------- scroll handling (nav hide/show, rotating squares) ---------- */
  function initScroll(navApi) {
    var lastY = w.scrollY, ticking = false;
    var sqSvg = desktop ? $(".sq-wrap svg") : null, sqSec = sqSvg && sqSvg.closest("section");
    function update() {
      ticking = false;
      var y = w.scrollY;
      if (navApi) {
        if (navApi.held()) navApi.el.classList.remove("is-hidden");
        else if (y > 240 && y > lastY + 4 && !navApi.isOpen()) navApi.el.classList.add("is-hidden");
        else if (y < lastY - 4 || y <= 240) navApi.el.classList.remove("is-hidden");
      }
      lastY = y;
      if (sqSec) {
        var r = sqSec.getBoundingClientRect(), vh = w.innerHeight;
        var p = clamp((vh - r.top) / (vh + r.height), 0, 1);
        sqSvg.style.setProperty("--rot", (p * 180).toFixed(1));
      }
    }
    w.addEventListener("scroll", function () { if (!ticking) { ticking = true; w.requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ---------- reveals, draws, counters ---------- */
  function initObservers() {
    var cap = desktop ? 99 : 2;
    $$("[data-stagger]").forEach(function (g) {
      $$("[data-reveal]", g).forEach(function (c, i) { c.style.setProperty("--d", Math.min(i, cap) * 100 + "ms"); });
    });
    var counters = $$("[data-count]");
    counters.forEach(function (c) { c.textContent = (c.getAttribute("data-from") || "0") + (c.getAttribute("data-suffix") || ""); });
    if (!("IntersectionObserver" in w)) {
      h.classList.add("reveal-all");
      $$("[data-draw]").forEach(function (s) { s.classList.add("is-drawn"); });
      counters.forEach(function (c) { c.textContent = c.getAttribute("data-count") + (c.getAttribute("data-suffix") || ""); });
      return;
    }
    function once(sel, opts, fn) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); fn(e.target); } });
      }, opts);
      $$(sel).forEach(function (n) { io.observe(n); });
    }
    once("[data-reveal]", { threshold: 0.12 }, function (n) { n.classList.add("is-in"); });
    once("[data-draw]", { threshold: 0.25 }, function (n) { n.classList.add("is-drawn"); });
    once("[data-count]", { threshold: 0.6 }, function (n) {
      var to = parseFloat(n.getAttribute("data-count")), from = parseFloat(n.getAttribute("data-from") || "0");
      var suf = n.getAttribute("data-suffix") || "", t0 = null;
      function step(now) {
        if (t0 === null) t0 = now;
        var p = clamp((now - t0) / 1400, 0, 1), e = 1 - Math.pow(1 - p, 3);
        n.textContent = Math.round(from + (to - from) * e) + suf;
        if (p < 1) w.requestAnimationFrame(step);
      }
      w.requestAnimationFrame(step);
    });
  }

  /* ---------- descriptor crossfade ---------- */
  function initDescriptor() {
    $$("[data-descriptor]").forEach(function (box) {
      var items = $$(".d", box);
      if (items.length < 2) return;
      var i = 0;
      items[0].classList.add("is-on");
      setInterval(function () {
        items[i].classList.remove("is-on");
        i = (i + 1) % items.length;
        items[i].classList.add("is-on");
      }, 5000);
    });
  }

  /* ---------- copy email + toast ---------- */
  function initCopy() {
    var btn = $("[data-copy]");
    if (!btn) return;
    var toast = d.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    d.body.appendChild(toast);
    var timer;
    function show(msg) {
      toast.textContent = msg;
      toast.classList.add("is-on");
      clearTimeout(timer);
      timer = setTimeout(function () { toast.classList.remove("is-on"); }, 2200);
    }
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      function fallback() {
        var ta = d.createElement("textarea");
        ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        d.body.appendChild(ta); ta.select();
        var ok = false;
        try { ok = d.execCommand("copy"); } catch (e) {}
        d.body.removeChild(ta);
        show(ok ? "Email copied" : "Copy failed — " + text);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { show("Email copied"); }, fallback);
      } else fallback();
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    var shaderP = initShader();
    runLoader(shaderP);
    var navApi = initNav();
    initScroll(navApi);
    initObservers();
    initDescriptor();
    initCopy();
  }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", boot); else boot();
})();
