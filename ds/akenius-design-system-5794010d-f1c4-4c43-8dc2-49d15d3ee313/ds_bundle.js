/* @ds-bundle: {"format":4,"namespace":"AkeniusDesignSystem_579401","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/display/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"AKENIUS_ICONS","sourcePath":"components/icons/Icon.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"8441b8614e53","components/core/Button.jsx":"514c72fd4495","components/core/TextLink.jsx":"0c91e45d0d4c","components/display/Card.jsx":"89f000616644","components/display/Divider.jsx":"b342fa797d06","components/display/Eyebrow.jsx":"f4a342ae25e3","components/display/Tag.jsx":"d203c4429452","components/feedback/Dialog.jsx":"57a0406444b2","components/feedback/Toast.jsx":"2e01da1dd096","components/forms/Checkbox.jsx":"a0abec65c1c6","components/forms/Input.jsx":"7b4db705edb7","components/forms/Radio.jsx":"b75aa156b701","components/forms/Select.jsx":"9397f0c6aa6c","components/forms/Switch.jsx":"d65fcc32f9cc","components/icons/Icon.jsx":"a715c36bb4c6","components/navigation/Breadcrumb.jsx":"02c8011af9e2","components/navigation/Tabs.jsx":"bbf33da01e20","ui_kits/website/ContactScreen.js":"294f92d5ff88","ui_kits/website/HomeScreen.js":"3b7e83e2fcab","ui_kits/website/ServiceScreen.js":"dc8e987d66f8","ui_kits/website/SiteChrome.js":"9ee4d5667d5e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AkeniusDesignSystem_579401 = window.AkeniusDesignSystem_579401 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
const INK = "var(--ink, #182B36)";
const PAPER = "var(--paper, #F2F3F1)";
const BRASS = "var(--brass, #A8763E)";
const LINE = "var(--line, #D8DCDA)";
const SLATE = "var(--slate, #3E5462)";

/** The Akenius lockup: crown, A, wordmark, divider - plus an optional brass descriptor. */
function Logo({
  descriptor,
  height = 120,
  tone = "ink",
  markOnly = false,
  variant = "stacked",
  style
}) {
  const ink = tone === "inverse" ? PAPER : INK;
  const divider = tone === "inverse" ? SLATE : LINE;
  if (variant === "wordmark") {
    // Horizontal wordmark: the A is the mark itself - thin-stroke A with the brass
    // crown integrated at its apex - followed by KENIUS in the wordmark serif.
    const vw = descriptor ? 215 : 148;
    return /*#__PURE__*/React.createElement("svg", {
      width: vw / 25 * height,
      height: height,
      viewBox: `0 5 ${vw} 25`,
      style: style,
      "aria-label": `Akenius${descriptor ? " " + descriptor : ""}`
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "7.5",
      cy: "10.3",
      r: "2.2",
      fill: "none",
      stroke: BRASS,
      strokeWidth: "1.3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 0.8 28 L 6.7 13.6 M 8.3 13.6 L 14.2 28",
      fill: "none",
      stroke: ink,
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3.6",
      y1: "22.3",
      x2: "11.4",
      y2: "22.3",
      stroke: ink,
      strokeWidth: "1.5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("text", {
      x: "20",
      y: "28",
      fontSize: "21",
      letterSpacing: "7.5",
      fill: ink,
      fontWeight: "500",
      fontFamily: "Georgia, serif"
    }, "KENIUS"), descriptor ? /*#__PURE__*/React.createElement("text", {
      x: "152",
      y: "28",
      fontSize: "10",
      letterSpacing: "3",
      fill: BRASS,
      fontWeight: "500",
      fontFamily: "IBM Plex Sans, sans-serif"
    }, String(descriptor).toUpperCase()) : null);
  }
  if (markOnly) {
    return /*#__PURE__*/React.createElement("svg", {
      width: 72 / 88 * height,
      height: height,
      viewBox: "64 6 72 88",
      style: style,
      "aria-label": "Akenius"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "100",
      cy: "22",
      r: "7.5",
      fill: "none",
      stroke: BRASS,
      strokeWidth: "2.8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M 72 88 L 97 32 M 103 32 L 128 88",
      fill: "none",
      stroke: ink,
      strokeWidth: "3.2",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "84",
      y1: "66",
      x2: "116",
      y2: "66",
      stroke: ink,
      strokeWidth: "3.2",
      strokeLinecap: "round"
    }));
  }
  const vh = descriptor ? 168 : 144;
  return /*#__PURE__*/React.createElement("svg", {
    width: 200 / vh * height,
    height: height,
    viewBox: `0 0 200 ${vh}`,
    style: style,
    "aria-label": `Akenius${descriptor ? " " + descriptor : ""}`
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "22",
    r: "7.5",
    fill: "none",
    stroke: BRASS,
    strokeWidth: "2.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 72 88 L 97 32 M 103 32 L 128 88",
    fill: "none",
    stroke: ink,
    strokeWidth: "3.2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "84",
    y1: "66",
    x2: "116",
    y2: "66",
    stroke: ink,
    strokeWidth: "3.2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "122",
    textAnchor: "middle",
    fontSize: "21",
    letterSpacing: "7.5",
    fill: ink,
    fontWeight: "500",
    fontFamily: "Georgia, serif"
  }, "AKENIUS"), /*#__PURE__*/React.createElement("line", {
    x1: "52",
    y1: "138",
    x2: "148",
    y2: "138",
    stroke: divider,
    strokeWidth: "1"
  }), descriptor ? /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "158",
    textAnchor: "middle",
    fontSize: "10",
    letterSpacing: "5",
    fill: BRASS,
    fontWeight: "500",
    fontFamily: "IBM Plex Sans, sans-serif"
  }, String(descriptor).toUpperCase()) : null);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
const sizes = {
  sm: {
    padding: "8px 16px",
    fontSize: 13
  },
  md: {
    padding: "12px 24px",
    fontSize: 14
  },
  lg: {
    padding: "16px 32px",
    fontSize: 15
  }
};

/** Akenius button - square corners, no shadow, three variants. */
function Button({
  variant = "primary",
  size = "md",
  disabled,
  children,
  onClick,
  style,
  type = "button"
}) {
  const [hover, setHover] = useState(false);
  const s = sizes[size] || sizes.md;
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    letterSpacing: "0.02em",
    borderRadius: "var(--radius, 0px)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background 150ms var(--ease-out), color 150ms var(--ease-out), border-color 150ms var(--ease-out)",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    ...s
  };
  const variants = {
    primary: {
      background: hover && !disabled ? "var(--button-primary-bg-hover, var(--ink-soft))" : "var(--button-primary-bg, var(--ink))",
      color: "var(--button-primary-fg, var(--paper))",
      border: "1px solid var(--button-primary-bg, var(--ink))"
    },
    secondary: {
      background: hover && !disabled ? "var(--paper-deep)" : "transparent",
      color: "var(--ink)",
      border: "1px solid var(--button-outline-border, var(--ink))"
    },
    ghost: {
      background: "transparent",
      color: hover && !disabled ? "var(--button-ghost-fg-hover, var(--brass-deep))" : "var(--button-ghost-fg, var(--brass))",
      border: "1px solid transparent",
      paddingLeft: 0,
      paddingRight: 0
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
const {
  useState
} = React;
/** Brass arrow link - the primary navigation gesture. */
function TextLink({
  href = "#",
  children,
  arrow = true,
  muted = false,
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 500,
      color: muted ? hover ? "var(--ink)" : "var(--slate)" : hover ? "var(--link-fg-hover, var(--brass-deep))" : "var(--link-fg, var(--brass))",
      textDecoration: "none",
      borderBottom: hover ? "1px solid currentColor" : "1px solid transparent",
      transition: "color 150ms var(--ease-out)",
      display: "inline-flex",
      alignItems: "baseline",
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, children), arrow ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      transition: "transform 150ms var(--ease-out)",
      transform: hover ? "translateX(3px)" : "none"
    }
  }, "→") : null);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
/** Hairline divider, optionally with an eyebrow label sitting on it. */
function Divider({
  label,
  spacing = 32,
  style
}) {
  if (!label) {
    return /*#__PURE__*/React.createElement("hr", {
      style: {
        border: "none",
        borderTop: "1px solid var(--line)",
        margin: `${spacing}px 0`,
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      margin: `${spacing}px 0`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--brass)",
      whiteSpace: "nowrap"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      borderTop: "1px solid var(--line)"
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/Eyebrow.jsx
try { (() => {
/** Brass uppercase letterspaced label - the most-used brand gesture. */
function Eyebrow({
  children,
  tone = "brass",
  as = "div",
  style
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-eyebrow, 11px)",
      fontWeight: 600,
      letterSpacing: "var(--track-eyebrow, 0.22em)",
      textTransform: "uppercase",
      color: tone === "slate" ? "var(--slate)" : tone === "inverse" ? "var(--paper)" : "var(--brass)",
      margin: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
const {
  useState
} = React;
/** Akenius card - white, hairline border, square, no shadow. From the descriptor artifact. */
function Card({
  eyebrow,
  number,
  title,
  children,
  footer,
  hoverable = false,
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--card-bg, var(--card))",
      border: `1px solid ${hoverable && hover ? "var(--card-border-hover, var(--ink))" : "var(--card-border, var(--line))"}`,
      borderRadius: "var(--radius, 0px)",
      padding: "24px 20px 18px",
      display: "flex",
      flexDirection: "column",
      cursor: onClick ? "pointer" : "default",
      transition: "border-color 150ms var(--ease-out)",
      ...style
    }
  }, number ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      letterSpacing: "0.18em",
      color: "var(--brass)",
      fontWeight: 600,
      marginBottom: 4
    }
  }, number) : null, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    style: {
      marginBottom: 8
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: 21,
      margin: "0 0 5px",
      color: "var(--ink)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      lineHeight: 1.5,
      color: "var(--slate)",
      flex: 1
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/** Pill tag - the single rounded exception. Quiet by default, brass when active. */
function Tag({
  children,
  active = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "0.04em",
      padding: "5px 14px",
      borderRadius: "var(--radius-pill, 999px)",
      border: `1px solid ${active ? "var(--brass)" : "var(--line)"}`,
      color: active ? "var(--brass)" : "var(--slate)",
      background: "transparent",
      cursor: onClick ? "pointer" : "default",
      display: "inline-block",
      transition: "color 150ms var(--ease-out), border-color 150ms var(--ease-out)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const {
  useEffect
} = React;
/** Modal dialog - white sheet, hairline border, square, dim ink scrim. */
function Dialog({
  open,
  onClose,
  eyebrow,
  title,
  children,
  actions,
  width = 480
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(24,43,54,0.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      background: "var(--card)",
      border: "1px solid var(--line)",
      width,
      maxWidth: "100%",
      padding: "32px 32px 28px"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--brass)",
      marginBottom: 10
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: 28,
      margin: "0 0 12px",
      color: "var(--ink)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--slate)"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 24,
      justifyContent: "flex-end"
    }
  }, actions || /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onClose
  }, "Close"))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/** Toast - ink bar, paper text, brass eyebrow. Render fixed at bottom-left. */
function Toast({
  open = true,
  eyebrow,
  children,
  onDismiss,
  fixed = true,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...(fixed ? {
        position: "fixed",
        left: 24,
        bottom: 24,
        zIndex: 120
      } : {}),
      background: "var(--ink)",
      color: "var(--paper)",
      padding: "16px 20px",
      maxWidth: 380,
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--brass)",
      marginBottom: 6
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.5
    }
  }, children)), onDismiss ? /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: "none",
      border: "none",
      color: "var(--paper)",
      cursor: "pointer",
      fontSize: 16,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Square checkbox with brass check. */
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      cursor: "inherit",
      margin: 0,
      width: "100%",
      height: "100%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: checked ? "var(--ink)" : "var(--card)",
      border: `1px solid ${checked ? "var(--ink)" : "var(--line)"}`,
      transition: "background 150ms var(--ease-out)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked ? /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "9",
    viewBox: "0 0 11 9"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4.5 L4 7.5 L10 1",
    fill: "none",
    stroke: "var(--paper)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null)), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--ink)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const labelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-eyebrow, 11px)",
  fontWeight: 600,
  letterSpacing: "var(--track-eyebrow, 0.22em)",
  textTransform: "uppercase",
  color: "var(--slate)",
  display: "block",
  marginBottom: 8
};

/** Akenius text input - square, hairline border, brass focus. */
function Input({
  label,
  error,
  hint,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--ink)",
      background: "var(--input-bg, var(--card))",
      border: `1px solid ${error ? "var(--input-border-error, var(--error))" : focus ? "var(--input-border-focus, var(--brass))" : "var(--input-border, var(--line))"}`,
      borderRadius: "var(--radius, 0px)",
      padding: "12px 14px",
      width: "100%",
      boxSizing: "border-box",
      outline: "none",
      transition: "border-color 150ms var(--ease-out)",
      ...inputStyle
    }
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--error)",
      display: "block",
      marginTop: 6
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--slate)",
      display: "block",
      marginTop: 6
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Radio group - circular (the one round exception), brass dot. */
function Radio({
  options = [],
  value,
  onChange,
  name,
  direction = "column",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "column" ? 12 : 24,
      ...style
    }
  }, options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    const active = v === value;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        width: 18,
        height: 18,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: active,
      onChange: () => onChange && onChange(v),
      style: {
        position: "absolute",
        inset: 0,
        opacity: 0,
        cursor: "inherit",
        margin: 0,
        width: "100%",
        height: "100%"
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: `1px solid ${active ? "var(--brass)" : "var(--line)"}`,
        background: "var(--card)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color 150ms var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--brass)",
        transform: active ? "scale(1)" : "scale(0)",
        transition: "transform 150ms var(--ease-out)"
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: "var(--ink)"
      }
    }, l));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Akenius select - square, hairline border, chevron drawn as a thin stroke. */
function Select({
  label,
  options = [],
  style,
  selectStyle,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--slate)",
      display: "block",
      marginBottom: 8
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--ink)",
      background: "var(--card)",
      border: `1px solid ${focus ? "var(--brass)" : "var(--line)"}`,
      borderRadius: "var(--radius, 0px)",
      padding: "12px 40px 12px 14px",
      width: "100%",
      boxSizing: "border-box",
      outline: "none",
      appearance: "none",
      WebkitAppearance: "none",
      cursor: "pointer",
      ...selectStyle
    }
  }), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1.5 L6 6.5 L11 1.5",
    fill: "none",
    stroke: "var(--slate)",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Switch - rectangular track (square corners), ink when on. */
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": !!checked,
    tabIndex: disabled ? -1 : 0,
    onClick: () => !disabled && onChange && onChange(!checked),
    onKeyDown: e => {
      if (!disabled && (e.key === " " || e.key === "Enter")) {
        e.preventDefault();
        onChange && onChange(!checked);
      }
    },
    style: {
      width: 36,
      height: 20,
      flexShrink: 0,
      background: checked ? "var(--ink)" : "var(--line)",
      transition: "background 150ms var(--ease-out)",
      position: "relative",
      outline: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 19 : 3,
      width: 14,
      height: 14,
      background: "var(--card)",
      transition: "left 150ms var(--ease-out)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--ink)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
/* GENERATED - icon geometry copied from Lucide (ISC license, lucide.dev).
   Do not hand-edit paths; re-run the extraction instead. */
const AKENIUS_ICONS = {
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  "arrow-down": '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "plus": '<path d="M5 12h14"/><path d="M12 5v14"/>',
  "minus": '<path d="M5 12h14"/>',
  "briefcase": '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
  "building-2": '<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>',
  "landmark": '<path d="M10 18v-7"/><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/>',
  "handshake": '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  "scale": '<path d="M12 3v18"/><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"/><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"/><path d="M7 21h10"/>',
  "target": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  "flag": '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/>',
  "award": '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
  "trending-up": '<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',
  "trending-down": '<path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/>',
  "chart-column": '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  "chart-pie": '<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>',
  "chart-line": '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
  "percent": '<line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
  "calculator": '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
  "coins": '<path d="M13.744 17.736a6 6 0 1 1-7.48-7.48"/><path d="M15 6h1v4"/><path d="m6.134 14.768.866-.5 2 3.464"/><circle cx="16" cy="8" r="6"/>',
  "wallet": '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  "banknote": '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  "credit-card": '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  "bitcoin": '<path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"/>',
  "user": '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',
  "presentation": '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>',
  "message-circle": '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>',
  "mail": '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
  "phone": '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>',
  "calendar": '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  "clock": '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  "hourglass": '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
  "refresh-cw": '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  "settings": '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
  "search": '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  "filter": '<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/>',
  "file-text": '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  "clipboard-list": '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  "folder": '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  "book-open": '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  "pen-line": '<path d="M13 21h8"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>',
  "plane": '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  "globe": '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  "wrench": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',
  "server": '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
  "cloud": '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  "shield": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  "lock": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  "lightbulb": '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  "zap": '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  "house": '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  "truck": '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  "layers": '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
  "compass": '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/>',
  "key": '<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/>'
};

/** Thin-stroke icon (Lucide geometry). Defaults to 1.5px stroke - the Akenius weight. */
function Icon({
  name,
  size = 24,
  color = "currentColor",
  strokeWidth = 1.5,
  style
}) {
  const inner = AKENIUS_ICONS[name];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: inner
    }
  });
}
Object.assign(__ds_scope, { AKENIUS_ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Breadcrumb trail - slate links, ink current page, slash separators. */
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--slate)",
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      alignItems: "center",
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === "string" ? it : it.label;
    const href = typeof it === "string" ? "#" : it.href || "#";
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ink)"
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        color: "var(--slate)",
        textDecoration: "none"
      }
    }, label), !last ? /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "/") : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tabs - hairline base, ink underline on the active tab. Controlled. */
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      borderBottom: "1px solid var(--line)",
      ...style
    }
  }, tabs.map(t => {
    const v = typeof t === "string" ? t : t.value;
    const l = typeof t === "string" ? t : t.label;
    const active = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => onChange && onChange(v),
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 500,
        color: active ? "var(--ink)" : "var(--slate)",
        background: "none",
        border: "none",
        borderBottom: `2px solid ${active ? "var(--ink)" : "transparent"}`,
        marginBottom: -1,
        padding: "0 0 12px",
        cursor: "pointer",
        transition: "color 150ms var(--ease-out), border-color 150ms var(--ease-out)"
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.js
try { (() => {
const {
  Eyebrow,
  Input,
  Select,
  Radio,
  Checkbox,
  Button,
  Dialog,
  Toast
} = window.AkeniusDesignSystem_579401;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const [timeframe, setTimeframe] = React.useState("This quarter");
  const [letter, setLetter] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Contact"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "96px var(--page-pad) 112px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 16
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: "var(--text-h1)",
      lineHeight: 1.05,
      color: "var(--ink)",
      margin: 0
    }
  }, "Maybe we should talk."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--slate)",
      maxWidth: 480,
      margin: "24px 0 0"
    }
  }, "Describe the situation in a few sentences. You will hear back within two working days — from the person who would do the work."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      borderTop: "1px solid var(--line)",
      paddingTop: 24,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.9,
      color: "var(--slate)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 21,
      fontWeight: 600,
      color: "var(--ink)",
      marginBottom: 4
    }
  }, "Helsingborg"), "E: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@akenius.se",
    style: {
      color: "var(--brass)",
      textDecoration: "none"
    }
  }, "info@akenius.se"))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      background: "var(--card)",
      border: "1px solid var(--line)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Full name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "name@company.se",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service line",
    options: ["Advisory", "Interim", "Operations", "Digital", "Governance", "Not sure yet"]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "slate",
    style: {
      marginBottom: 10
    }
  }, "Timeframe"), /*#__PURE__*/React.createElement(Radio, {
    direction: "row",
    options: ["This quarter", "This year"],
    value: timeframe,
    onChange: setTimeframe,
    name: "timeframe"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the annual letter",
    checked: letter,
    onChange: setLetter
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    style: {
      alignSelf: "flex-start"
    }
  }, "Send"))), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    onClose: () => {
      setSent(false);
      setToast(true);
    },
    eyebrow: "Akenius \xB7 Group",
    title: "Thank you",
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setSent(false);
        setToast(true);
      }
    }, "Done")
  }, "Your message has been received. We will reply within two working days."), toast ? /*#__PURE__*/React.createElement(Toast, {
    eyebrow: "Sent",
    onDismiss: () => setToast(false)
  }, "Your message is on its way.") : null);
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.js
try { (() => {
const {
  Card,
  TextLink,
  Eyebrow,
  Button,
  Divider
} = window.AkeniusDesignSystem_579401;
const LINES = [["01", "Advisory", "Profitability and commercial advisory for mid-sized companies."], ["02", "Interim", "Interim executive assignments for larger and PE-owned companies."], ["03", "Operations", "Hands-on support for installers and family firms."], ["04", "Digital", "Webhosting, web services and digital infrastructure."], ["05", "Ventures", "Product collaborations and part-ownership alongside partners."], ["06", "Governance", "Board work and ownership advisory."]];
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Home hero",
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "112px var(--page-pad) 96px"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 18
    }
  }, "Akenius AB \xB7 Advisory"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: "var(--text-display)",
      lineHeight: "var(--leading-display)",
      color: "var(--ink)",
      margin: 0,
      maxWidth: 820,
      textWrap: "balance"
    }
  }, "Plans into progress."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--slate)",
      maxWidth: 560,
      margin: "28px 0 36px"
    }
  }, "Senior advisory for owners and executives who want results they can see in the numbers — and in how the company works day to day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go("contact")
  }, "Get in touch"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go("advisory")
  }, "See the service lines →"))), /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Service lines",
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "80px var(--page-pad) 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: "var(--text-h1)",
      color: "var(--ink)",
      margin: 0
    }
  }, "One mark, ten doors"), /*#__PURE__*/React.createElement(TextLink, {
    onClick: e => {
      e.preventDefault();
      go("advisory");
    }
  }, "All ten")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, LINES.map(([num, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: num,
    number: num,
    title: title,
    hoverable: true,
    onClick: () => go("advisory"),
    footer: /*#__PURE__*/React.createElement(TextLink, {
      onClick: e => e.preventDefault()
    }, "Read more")
  }, body))))), /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Statement",
    style: {
      background: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "112px var(--page-pad)",
      display: "grid",
      gridTemplateColumns: "220px 1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How we work"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 500,
      fontSize: 36,
      lineHeight: 1.2,
      color: "var(--paper)",
      margin: 0,
      maxWidth: 760,
      textWrap: "balance"
    }
  }, "Sleeves rolled up rather than slide decks. We start with a solid plan — and stay long enough to see it work."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      borderColor: "var(--paper)",
      color: "var(--paper)"
    },
    onClick: () => go("advisory")
  }, "Our approach"))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceScreen.js
try { (() => {
const {
  Breadcrumb,
  Eyebrow,
  Tabs,
  Card,
  TextLink,
  Button,
  Logo,
  Divider
} = window.AkeniusDesignSystem_579401;
function ServiceScreen({
  go
}) {
  const [tab, setTab] = React.useState("Approach");
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Service line — Advisory"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "40px var(--page-pad) 0"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Home"
    }, {
      label: "Service lines"
    }, "Advisory"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "56px 0 64px",
      display: "grid",
      gridTemplateColumns: "1fr 260px",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 16
    }
  }, "01 \xB7 Advisory"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 600,
      fontSize: "var(--text-h1)",
      lineHeight: 1.05,
      color: "var(--ink)",
      margin: 0,
      maxWidth: 640
    }
  }, "Difficult — but still possible"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--slate)",
      maxWidth: 560,
      margin: "24px 0 0"
    }
  }, "The consulting core: profitability and commercial advisory for mid-sized companies. Proposals, reports, engagement letters — and the follow-through.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    descriptor: "Advisory",
    height: 200
  }))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Approach", "Engagements", "Contact"],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "56px var(--page-pad) 96px"
    }
  }, tab === "Approach" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "220px 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The approach"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "There is no blueprint. The honest truth is that it always depends — which is why having seen it before actually helps."), /*#__PURE__*/React.createElement("p", null, "We start with a solid plan, then improvise and deviate as reality answers back. Insight first, then listening. Numbers first, then the story they tell."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 0
    }
  }, "Every engagement ends with the organisation able to continue without us."))) : tab === "Engagements" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    number: "A",
    title: "Profitability review",
    footer: /*#__PURE__*/React.createElement(TextLink, {
      onClick: e => e.preventDefault()
    }, "Typical scope")
  }, "Eight weeks. Margin map, pricing actions, a plan the owner signs."), /*#__PURE__*/React.createElement(Card, {
    number: "B",
    title: "Commercial advisory",
    footer: /*#__PURE__*/React.createElement(TextLink, {
      onClick: e => e.preventDefault()
    }, "Typical scope")
  }, "Retained. Pipeline, pricing and key-account decisions, month by month."), /*#__PURE__*/React.createElement(Card, {
    number: "C",
    title: "Owner's counsel",
    footer: /*#__PURE__*/React.createElement(TextLink, {
      onClick: e => e.preventDefault()
    }, "Typical scope")
  }, "Quiet, ongoing. The call before the board call.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "220px 1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Start a conversation"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 28,
      fontWeight: 600,
      color: "var(--ink)",
      margin: "0 0 24px",
      maxWidth: 560
    }
  }, "Two working days to a first answer."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact")
  }, "Get in touch")))));
}
Object.assign(window, {
  ServiceScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceScreen.js", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.js
try { (() => {
const {
  Logo,
  Button,
  TextLink,
  Eyebrow
} = window.AkeniusDesignSystem_579401;
function Header({
  page,
  go
}) {
  const nav = [["home", "Home"], ["advisory", "Service lines"], ["contact", "Contact"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--paper)",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 var(--page-pad)",
      height: 68,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    height: 24
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, nav.map(([key, label]) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(key);
    },
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      textDecoration: "none",
      color: page === key ? "var(--ink)" : "var(--slate)",
      borderBottom: page === key ? "2px solid var(--brass)" : "2px solid transparent",
      paddingBottom: 2
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("contact")
  }, "Get in touch"))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ink)",
      color: "var(--paper)",
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "72px var(--page-pad) 48px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    tone: "inverse",
    descriptor: "Group",
    height: 140
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 16
    }
  }, "Service lines"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontSize: 14
    }
  }, ["Advisory", "Interim", "Operations", "Digital", "Governance"].map(d => /*#__PURE__*/React.createElement("a", {
    key: d,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go("advisory");
    },
    style: {
      color: "var(--paper)",
      textDecoration: "none",
      opacity: 0.85
    }
  }, d)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 16
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.8,
      opacity: 0.85
    }
  }, "Akenius AB", /*#__PURE__*/React.createElement("br", null), "Helsingborg, Sweden", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@akenius.se",
    style: {
      color: "var(--paper)"
    }
  }, "info@akenius.se")))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--slate)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "16px var(--page-pad)",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--slate)",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--paper)",
      opacity: 0.6
    }
  }, "\xA9 2026 Akenius AB"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--paper)",
      opacity: 0.6
    }
  }, "One mark, ten doors."))));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.AKENIUS_ICONS = __ds_scope.AKENIUS_ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
