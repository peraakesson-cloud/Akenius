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
    "  for(int i=0;i<5;i++){ v += amp * vnoise(p); p = m * p; amp *= 0.5; }",
    "  return v;",
    "}",
    "void main(){",
    "  vec2 uv = gl_FragCoord.xy / u_resolution.xy;",
    "  float aspect = u_resolution.x / max(u_resolution.y, 1.0);",
    "  vec2 p = uv; p.x *= aspect;",
    "  float t = u_time * 0.035;",
    "  vec2 q = vec2(fbm(p*1.1 + vec2(t, 0.0)), fbm(p*1.1 + vec2(5.2, 1.3) - vec2(0.0, t*0.6)));",
    "  float n1 = fbm(p*1.1 + 2.2*q + vec2(t*1.4, 0.0)); n1 = n1*0.5 + 0.5;",
    "  vec2 r = vec2(fbm(p*2.1 + vec2(-t*1.8, 3.1)), fbm(p*2.1 + vec2(7.7, -t)));",
    "  float n2 = fbm(p*2.1 + 1.6*r + vec2(-t*2.2, t*0.5)); n2 = n2*0.5 + 0.5;",
    "  vec3 ink = vec3(24.0, 43.0, 54.0)/255.0;",
    "  vec3 deep = vec3(12.0, 21.0, 27.0)/255.0;",
    "  vec3 mist = vec3(70.0, 96.0, 112.0)/255.0;",
    "  vec3 brass = vec3(168.0, 118.0, 62.0)/255.0;",
    "  float d1 = smoothstep(0.32, 0.72, n1);",
    "  float d2 = smoothstep(0.45, 0.85, n2) * 0.55;",
    "  float dens = clamp(d1*0.8 + d2*0.5, 0.0, 1.0) * u_intensity;",
    "  vec3 col = mix(deep, ink, 0.6 + 0.4*uv.y);",
    "  col = mix(col, mist, dens * 0.85);",
    "  col = mix(col, brass, smoothstep(0.78, 0.98, n1) * 0.05 * u_intensity);",
    "  vec2 c = uv - 0.5; c.x *= aspect;",
    "  float cd = length(c);",
    "  float vig = smoothstep(1.2, 0.15, cd);",
    "  col *= mix(0.55, 1.0, vig);",
    "  col = mix(col, ink, 0.18 * (1.0 - smoothstep(0.0, 0.5, cd)));",
    "  gl_FragColor = vec4(col, 1.0);",
    "}"
  ].join("\n");

  function fallbackGradient(canvas) {
    // The hero already has a static CSS gradient behind the canvas.
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
      var scale = Math.min(window.devicePixelRatio || 1, 1.5) * (halfRes ? 0.5 : 1);
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
      if (!visible || document.hidden) return;                 // scrolled away: keep time, skip painting
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

  window.AkeniusShader = { mount: mount };
})();
