/* Akenius — shared WebGL "ink in water" hero background.
   AkeniusShader.mount(canvasEl, opts) -> { teardown } | null
   opts: { intensity=1.0, fps=30, static=false, halfRes=false }
   - Slow 3-octave fBm with one domain-warp pass; ink base, faint brass in ridges.
   - Radial vignette + centre suppression baked in (keeps H1 contrast high).
   - No external deps. WebGL1. Falls back to a static CSS gradient on failure.
   - Zero mouse interaction by design. */
(function () {
  "use strict";

  var VERT =
    "attribute vec2 a_pos;" +
    "void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }";

  var FRAG = [
    "#ifdef GL_FRAGMENT_PRECISION_HIGH",
    "precision highp float;",
    "#else",
    "precision mediump float;",
    "#endif",
    "uniform float u_time;",
    "uniform vec2 u_resolution;",
    "uniform float u_intensity;",
    "vec2 hash2(vec2 p){",
    "  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));",
    "  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);",
    "}",
    "float vnoise(vec2 p){",
    "  vec2 i = floor(p); vec2 f = fract(p);",
    "  vec2 u = f*f*(3.0-2.0*f);",
    "  float a = dot(hash2(i + vec2(0.0,0.0)), f - vec2(0.0,0.0));",
    "  float b = dot(hash2(i + vec2(1.0,0.0)), f - vec2(1.0,0.0));",
    "  float c = dot(hash2(i + vec2(0.0,1.0)), f - vec2(0.0,1.0));",
    "  float d = dot(hash2(i + vec2(1.0,1.0)), f - vec2(1.0,1.0));",
    "  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);",
    "}",
    "float fbm(vec2 p){",
    "  float v = 0.0; float amp = 0.5;",
    "  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);",
    "  for(int i=0;i<3;i++){ v += amp * vnoise(p); p = m * p; amp *= 0.5; }",
    "  return v;",
    "}",
    "void main(){",
    "  vec2 uv = gl_FragCoord.xy / u_resolution.xy;",
    "  float aspect = u_resolution.x / max(u_resolution.y, 1.0);",
    "  vec2 p = uv; p.x *= aspect;",
    "  float t = u_time * 0.03;",             // very slow drift (~45-60s to read)
    "  vec2 q = vec2(fbm(p*1.5 + vec2(0.0, t)), fbm(p*1.5 + vec2(5.2, -t)));",
    "  vec2 r = vec2(fbm(p*1.5 + 2.0*q + vec2(1.7, 9.2) + 0.15*t), fbm(p*1.5 + 2.0*q + vec2(8.3, 2.8) - 0.12*t));",
    "  float n = fbm(p*1.5 + 2.0*r); n = n*0.5 + 0.5;",
    "  vec3 ink = vec3(24.0, 43.0, 54.0)/255.0;",
    "  vec3 midv = mix(ink, vec3(242.0,243.0,241.0)/255.0, 0.09);",  // ink lifted ~9% toward paper
    "  vec3 brass = vec3(168.0, 118.0, 62.0)/255.0;",
    "  float tonal = smoothstep(0.35, 0.75, n) * (0.65 + 0.35*u_intensity);",
    "  vec3 col = mix(ink, midv, tonal);",
    "  vec2 c = uv - 0.5; c.x *= aspect;",
    "  float cd = length(c);",
    "  float centre = smoothstep(0.0, 0.55, cd);",  // 0 centre -> 1 outer
    "  float ridge = smoothstep(0.72, 0.95, n);",
    "  float brassAmt = ridge * 0.07 * u_intensity * centre;",  // max ~7%, never in centre
    "  col = mix(col, brass, brassAmt);",
    "  float vig = smoothstep(1.15, 0.2, cd);",     // 1 centre -> 0 edge
    "  col *= mix(0.5, 1.0, vig);",                 // darken edges
    "  col = mix(ink, col, mix(0.32, 1.0, centre));", // pull centre toward clean ink (text contrast)
    "  gl_FragColor = vec4(col, 1.0);",
    "}"
  ].join("\n");

  function fallbackGradient(canvas) {
    // Static CSS gradient in the same palette: ink centre, near-black edges,
    // a whisper of brass off-centre. Applied to the hero (canvas parent).
    var host = canvas && canvas.parentElement;
    if (host) {
      host.style.background =
        "radial-gradient(60% 55% at 72% 28%, rgba(168,118,62,0.10), rgba(168,118,62,0) 60%)," +
        "radial-gradient(125% 125% at 50% 42%, #1e3646 0%, #182B36 46%, #0c151b 100%)";
    }
    if (canvas) canvas.style.display = "none";
  }

  function compile(gl, type, src) {
    var sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      gl.deleteShader(sh);
      return null;
    }
    return sh;
  }

  function mount(canvas, opts) {
    if (!canvas) return null;
    opts = opts || {};
    var intensity = opts.intensity == null ? 1.0 : opts.intensity;
    var fps = opts.fps == null ? 30 : opts.fps;
    var isStatic = !!opts["static"];
    var halfRes = !!opts.halfRes;

    var gl = null;
    try {
      var glOpts = { antialias: false, alpha: false, depth: false, stencil: false, powerPreference: "low-power" };
      gl = canvas.getContext("webgl", glOpts) || canvas.getContext("experimental-webgl", glOpts);
    } catch (e) { gl = null; }
    if (!gl) { fallbackGradient(canvas); return null; }

    var vs = compile(gl, gl.VERTEX_SHADER, VERT);
    var fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { fallbackGradient(canvas); return null; }
    var prog = gl.createProgram();
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { fallbackGradient(canvas); return null; }
    gl.useProgram(prog);

    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    var uTime = gl.getUniformLocation(prog, "u_time");
    var uRes = gl.getUniformLocation(prog, "u_resolution");
    var uInt = gl.getUniformLocation(prog, "u_intensity");

    function size() {
      var scale = Math.min(window.devicePixelRatio || 1, 2) * (halfRes ? 0.5 : 1);
      var host = canvas.parentElement || canvas;
      var rect = host.getBoundingClientRect();
      var w = Math.max(1, Math.round((rect.width || 1) * scale));
      var h = Math.max(1, Math.round((rect.height || 1) * scale));
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    size();

    function render(tSeconds) {
      gl.uniform1f(uTime, tSeconds);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uInt, intensity);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    var onResize = function () { size(); if (isStatic) render(10.0); };
    window.addEventListener("resize", onResize);

    if (isStatic) {
      render(10.0);
      var teardownStatic = function () {
        window.removeEventListener("resize", onResize);
        var ext = gl.getExtension("WEBGL_lose_context"); if (ext) ext.loseContext();
      };
      return { teardown: teardownStatic };
    }

    var visible = true, raf = 0, last = -1e9, prev = null, elapsed = 0;
    var frameInterval = 1000 / Math.max(1, fps);
    function loop(now) {
      raf = window.requestAnimationFrame(loop);
      if (prev === null) prev = now;
      var dt = now - prev; prev = now;
      // A gap > 100ms means the tab was backgrounded (rAF paused, wall-clock advanced).
      // Absorb it as a single frame so the ink doesn't visibly snap on refocus.
      if (dt > 100) dt = frameInterval;
      elapsed += dt;                        // advances continuously (off-screen scroll included)
      if (!visible) return;                 // scrolled away: keep time, skip painting
      if (now - last < frameInterval) return;
      last = now;
      render(elapsed / 1000);
    }
    var io = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0.02 });
      io.observe(canvas);
    }
    raf = window.requestAnimationFrame(loop);

    function teardown() {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (io) io.disconnect();
      var ext = gl.getExtension("WEBGL_lose_context"); if (ext) ext.loseContext();
    }
    return { teardown: teardown };
  }

  // Declarative auto-mount for static pages: any <canvas data-akenius-shader>
  // mounts on DOMContentLoaded. opts read from data-* attributes.
  // (index.html mounts manually through its React lifecycle instead.)
  function autoInit() {
    var reduce = false;
    try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    var nodes = document.querySelectorAll("canvas[data-akenius-shader]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      mount(el, {
        intensity: parseFloat(el.getAttribute("data-intensity")) || 1.0,
        fps: parseFloat(el.getAttribute("data-fps")) || 30,
        halfRes: el.getAttribute("data-halfres") === "1",
        "static": reduce
      });
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInit);
  } else {
    autoInit();
  }

  window.AkeniusShader = { mount: mount };
})();
