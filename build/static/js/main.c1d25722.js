/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 730
(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


var aa = __webpack_require__(43),
  ca = __webpack_require__(853);
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = new Set(),
  ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++) da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
  ja = Object.prototype.hasOwnProperty,
  ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  ma = {};
function oa(a) {
  if (ja.call(ma, a)) return !0;
  if (ja.call(la, a)) return !1;
  if (ka.test(a)) return ma[a] = !0;
  la[a] = !0;
  return !1;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;
  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return !1;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;
    case 4:
      return !1 === b;
    case 5:
      return isNaN(b);
    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}
function v(a, b, c, d, e, f, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  z[a] = new v(a, 0, !1, a, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];
  z[b] = new v(b, 1, !1, a[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  z[a] = new v(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  z[a] = new v(a, 3, !0, a, null, !1, !1);
});
["capture", "download"].forEach(function (a) {
  z[a] = new v(a, 4, !1, a, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  z[a] = new v(a, 6, !1, a, null, !1, !1);
});
["rowSpan", "start"].forEach(function (a) {
  z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (a) {
  z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  va = Symbol.for("react.element"),
  wa = Symbol.for("react.portal"),
  ya = Symbol.for("react.fragment"),
  za = Symbol.for("react.strict_mode"),
  Aa = Symbol.for("react.profiler"),
  Ba = Symbol.for("react.provider"),
  Ca = Symbol.for("react.context"),
  Da = Symbol.for("react.forward_ref"),
  Ea = Symbol.for("react.suspense"),
  Fa = Symbol.for("react.suspense_list"),
  Ga = Symbol.for("react.memo"),
  Ha = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var Ia = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign,
  La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c) {
    var b = c.stack.trim().match(/\n( *(at )?)/);
    La = b && b[1] || "";
  }
  return "\n" + La + a;
}
var Na = !1;
function Oa(a, b) {
  if (!a || Na) return "";
  Na = !0;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b) {
      if (b = function () {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", {
        set: function () {
          throw Error();
        }
      }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l) {
          var d = l;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l) {
          d = l;
        }
        a.call(b.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (l) {
        d = l;
      }
      a();
    }
  } catch (l) {
    if (l && d && "string" === typeof l.stack) {
      for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
        if (1 !== g || 1 !== h) {
          do if (g--, h--, 0 > h || e[g] !== f[h]) {
            var k = "\n" + e[g].replace(" at new ", " at ");
            a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
            return k;
          } while (1 <= g && 0 <= h);
        }
        break;
      }
    }
  } finally {
    Na = !1, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, !1), a;
    case 11:
      return a = Oa(a.type.render, !1), a;
    case 1:
      return a = Oa(a.type, !0), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b = a.render;
      a = a.displayName;
      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
    case Ha:
      b = a._payload;
      a = a._init;
      try {
        return Qa(a(b));
      } catch (c) {}
  }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b) return b.displayName || b.name || null;
      if ("string" === typeof b) return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value",
    c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
    d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get,
      f = c.set;
    Object.defineProperty(a, b, {
      configurable: !0,
      get: function () {
        return e.call(this);
      },
      set: function (a) {
        d = "" + a;
        f.call(this, a);
      }
    });
    Object.defineProperty(a, b, {
      enumerable: c.enumerable
    });
    return {
      getValue: function () {
        return d;
      },
      setValue: function (a) {
        d = "" + a;
      },
      stopTracking: function () {
        a._valueTracker = null;
        delete a[b];
      }
    };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return !1;
  var b = a._valueTracker;
  if (!b) return !0;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), !0) : !1;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != c ? c : a._wrapperState.initialChecked
  });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue,
    d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = {
    initialChecked: d,
    initialValue: c,
    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
  };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, !1);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value),
    d = b.type;
  if (null != c) {
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;
        d && (a[e].defaultSelected = !0);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = !0);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
  return A({}, b, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue
  });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b) throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length) throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = {
    initialValue: Sa(c)
  };
}
function ib(a, b) {
  var c = Sa(b.value),
    d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb,
  nb = function (a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function () {
        return a(b, c, d, e);
      });
    } : a;
  }(function (a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
      for (; b.firstChild;) a.appendChild(b.firstChild);
    }
  });
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function (a) {
  qb.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"),
      e = rb(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}
var tb = A({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null,
  zb = null,
  Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb,
      b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {}
var Ib = !1;
function Jb(a, b, c) {
  if (Ib) return a(b, c);
  Ib = !0;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c) return null;
  var d = Db(c);
  if (null === d) return null;
  c = d[b];
  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = !1;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
  return c;
}
var Lb = !1;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", {
    get: function () {
      Lb = !0;
    }
  });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = !1;
}
function Nb(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l);
  } catch (m) {
    this.onError(m);
  }
}
var Ob = !1,
  Pb = null,
  Qb = !1,
  Rb = null,
  Sb = {
    onError: function (a) {
      Ob = !0;
      Pb = a;
    }
  };
function Tb(a, b, c, d, e, f, g, h, k) {
  Ob = !1;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f, g, h, k) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l = Pb;
      Ob = !1;
      Pb = null;
    } else throw Error(p(198));
    Qb || (Qb = !0, Rb = l);
  }
}
function Vb(a) {
  var b = a,
    c = a;
  if (a.alternate) for (; b.return;) b = b.return;else {
    a = b;
    do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b) return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b) throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b;;) {
    var e = c.return;
    if (null === e) break;
    var f = e.alternate;
    if (null === f) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f;) {
        if (f === c) return Xb(e), a;
        if (f === d) return Xb(e), b;
        f = f.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return) c = e, d = f;else {
      for (var g = !1, h = e.child; h;) {
        if (h === c) {
          g = !0;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = !0;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = !0;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (c.alternate !== d) throw Error(p(190));
  }
  if (3 !== c.tag) throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a;) {
    var b = $b(a);
    if (null !== b) return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback,
  bc = ca.unstable_cancelCallback,
  cc = ca.unstable_shouldYield,
  dc = ca.unstable_requestPaint,
  B = ca.unstable_now,
  ec = ca.unstable_getCurrentPriorityLevel,
  fc = ca.unstable_ImmediatePriority,
  gc = ca.unstable_UserBlockingPriority,
  hc = ca.unstable_NormalPriority,
  ic = ca.unstable_LowPriority,
  jc = ca.unstable_IdlePriority,
  kc = null,
  lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b) {}
}
var oc = Math.clz32 ? Math.clz32 : nc,
  pc = Math.log,
  qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64,
  sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c) return 0;
  var d = 0,
    e = a.suspendedLanes,
    f = a.pingedLanes,
    g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
  if (0 === d) return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5E3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
    var g = 31 - oc(f),
      h = 1 << g,
      k = e[g];
    if (-1 === k) {
      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
    } else k <= b && (a.expiredLanes |= h);
    f &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++) b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c;) {
    var e = 31 - oc(c),
      f = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c;) {
    var d = 31 - oc(c),
      e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc = !1,
  Kc = [],
  Lc = null,
  Mc = null,
  Nc = null,
  Oc = new Map(),
  Pc = new Map(),
  Qc = [],
  Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f) {
  if (null === a || a.nativeEvent !== f) return a = {
    blockedOn: b,
    domEventName: c,
    eventSystemFlags: d,
    nativeEvent: f,
    targetContainers: [e]
  }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), !0;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), !0;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), !0;
    case "pointerover":
      var f = e.pointerId;
      Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
      return !0;
    case "gotpointercapture":
      return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
  }
  return !1;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) if (b = c.tag, 13 === b) {
      if (b = Wb(c), null !== b) {
        a.blockedOn = b;
        Ic(a.priority, function () {
          Gc(c);
        });
        return;
      }
    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
      return;
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return !1;
  for (var b = a.targetContainers; 0 < b.length;) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
    b.shift();
  }
  return !0;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = !1;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b) {
    return ad(b, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig,
  dd = !0;
function ed(a, b, c, d) {
  var e = C,
    f = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f;
  }
}
function gd(a, b, c, d) {
  var e = C,
    f = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e) hd(a, b, d, id, c), Sc(a, d);else if (Uc(e, a, b, c, d)) d.stopPropagation();else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e;) {
        var f = Cb(e);
        null !== f && Ec(f);
        f = Yc(a, b, c, d);
        null === f && hd(a, b, d, id, c);
        if (f === e) break;
        e = f;
      }
      null !== e && d.stopPropagation();
    } else hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a) if (b = Vb(a), null === b) a = null;else if (c = b.tag, 13 === c) {
    a = Wb(b);
    if (null !== a) return a;
    a = null;
  } else if (3 === c) {
    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
    a = null;
  } else b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null,
  ld = null,
  md = null;
function nd() {
  if (md) return md;
  var a,
    b = ld,
    c = b.length,
    d,
    e = "value" in kd ? kd.value : kd.textContent,
    f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++);
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return !0;
}
function qd() {
  return !1;
}
function rd(a) {
  function b(b, d, e, f, g) {
    this._reactName = b;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
    },
    stopPropagation: function () {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
    },
    persist: function () {},
    isPersistent: pd
  });
  return b;
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (a) {
      return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  td = rd(sd),
  ud = A({}, sd, {
    view: 0,
    detail: 0
  }),
  vd = rd(ud),
  wd,
  xd,
  yd,
  Ad = A({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function (a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function (a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    },
    movementY: function (a) {
      return "movementY" in a ? a.movementY : xd;
    }
  }),
  Bd = rd(Ad),
  Cd = A({}, Ad, {
    dataTransfer: 0
  }),
  Dd = rd(Cd),
  Ed = A({}, ud, {
    relatedTarget: 0
  }),
  Fd = rd(Ed),
  Gd = A({}, sd, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Hd = rd(Gd),
  Id = A({}, sd, {
    clipboardData: function (a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
  }),
  Jd = rd(Id),
  Kd = A({}, sd, {
    data: 0
  }),
  Ld = rd(Kd),
  Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, {
    key: function (a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function (a) {
      return "keypress" === a.type ? od(a) : 0;
    },
    keyCode: function (a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function (a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
  }),
  Rd = rd(Qd),
  Sd = A({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Td = rd(Sd),
  Ud = A({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd
  }),
  Vd = rd(Ud),
  Wd = A({}, sd, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Xd = rd(Wd),
  Yd = A({}, Ad, {
    deltaX: function (a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function (a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  Zd = rd(Yd),
  $d = [9, 13, 27, 32],
  ae = ia && "CompositionEvent" in window,
  be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be,
  de = ia && (!ae || be && 8 < be && 11 >= be),
  ee = String.fromCharCode(32),
  fe = !1;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = !1;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which) return null;
      fe = !0;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
    event: c,
    listeners: b
  }));
}
var pe = null,
  qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b)) return a;
}
function ve(a, b) {
  if ("change" === a) return b;
}
var we = !1;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = !1;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b) {
  if ("click" === a) return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a) return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b)) return !0;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
  var c = Object.keys(a),
    d = Object.keys(b);
  if (c.length !== d.length) return !1;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
  }
  return !0;
}
function Je(a) {
  for (; a && a.firstChild;) a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return {
        node: c,
        offset: b - a
      };
      a = d;
    }
    a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = !1;
    }
    if (c) a = b.contentWindow;else break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(),
    c = a.focusedElem,
    d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
      a = a.getSelection();
      var e = c.textContent.length,
        f = Math.min(d.start, e);
      d = void 0 === d.end ? f : Math.min(d.end, e);
      !a.extend && f > d && (e = d, d = f, f = e);
      e = Ke(c, f);
      var g = Ke(c, d);
      e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
    }
    b = [];
    for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
      element: a,
      left: a.scrollLeft,
      top: a.scrollTop
    });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
  Qe = null,
  Re = null,
  Se = null,
  Te = !1;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
    start: d.selectionStart,
    end: d.selectionEnd
  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
    anchorNode: d.anchorNode,
    anchorOffset: d.anchorOffset,
    focusNode: d.focusNode,
    focusOffset: d.focusOffset
  }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
    event: b,
    listeners: d
  }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = {
    animationend: Ve("Animation", "AnimationEnd"),
    animationiteration: Ve("Animation", "AnimationIteration"),
    animationstart: Ve("Animation", "AnimationStart"),
    transitionend: Ve("Transition", "TransitionEnd")
  },
  Xe = {},
  Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a]) return Xe[a];
  if (!We[a]) return a;
  var b = We[a],
    c;
  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"),
  af = Ze("animationiteration"),
  bf = Ze("animationstart"),
  cf = Ze("transitionend"),
  df = new Map(),
  ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf],
    jf = hf.toLowerCase(),
    kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c],
      e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b) for (var g = d.length - 1; 0 <= g; g--) {
        var h = d[g],
          k = h.instance,
          l = h.currentTarget;
        h = h.listener;
        if (k !== f && e.isPropagationStopped()) break a;
        nf(e, h, l);
        f = k;
      } else for (g = 0; g < d.length; g++) {
        h = d[g];
        k = h.instance;
        l = h.currentTarget;
        h = h.listener;
        if (k !== f && e.isPropagationStopped()) break a;
        nf(e, h, l);
        f = k;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, !1), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = !0;
    da.forEach(function (b) {
      "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
  d ? void 0 !== e ? a.addEventListener(b, c, {
    capture: !0,
    passive: e
  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
    passive: e
  }) : a.addEventListener(b, c, !1);
}
function hd(a, b, c, d, e) {
  var f = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
    if (null === d) return;
    var g = d.tag;
    if (3 === g || 4 === g) {
      var h = d.stateNode.containerInfo;
      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
      if (4 === g) for (g = d.return; null !== g;) {
        var k = g.tag;
        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
        g = g.return;
      }
      for (; null !== h;) {
        g = Wc(h);
        if (null === g) return;
        k = g.tag;
        if (5 === k || 6 === k) {
          d = f = g;
          continue a;
        }
        h = h.parentNode;
      }
    }
    d = d.return;
  }
  Jb(function () {
    var d = f,
      e = xb(c),
      g = [];
    a: {
      var h = df.get(a);
      if (void 0 !== h) {
        var k = td,
          n = a;
        switch (a) {
          case "keypress":
            if (0 === od(c)) break a;
          case "keydown":
          case "keyup":
            k = Rd;
            break;
          case "focusin":
            n = "focus";
            k = Fd;
            break;
          case "focusout":
            n = "blur";
            k = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k = Fd;
            break;
          case "click":
            if (2 === c.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Vd;
            break;
          case $e:
          case af:
          case bf:
            k = Hd;
            break;
          case cf:
            k = Xd;
            break;
          case "scroll":
            k = vd;
            break;
          case "wheel":
            k = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Td;
        }
        var t = 0 !== (b & 4),
          J = !t && "scroll" === a,
          x = t ? null !== h ? h + "Capture" : null : h;
        t = [];
        for (var w = d, u; null !== w;) {
          u = w;
          var F = u.stateNode;
          5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
          if (J) break;
          w = w.return;
        }
        0 < t.length && (h = new k(h, n, null, c, e), g.push({
          event: h,
          listeners: t
        }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h = "mouseover" === a || "pointerover" === a;
        k = "mouseout" === a || "pointerout" === a;
        if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
        if (k || h) {
          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
          if (k) {
            if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
          } else k = null, n = d;
          if (k !== n) {
            t = Bd;
            F = "onMouseLeave";
            x = "onMouseEnter";
            w = "mouse";
            if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
            J = null == k ? h : ue(k);
            u = null == n ? h : ue(n);
            h = new t(F, w + "leave", k, c, e);
            h.target = J;
            h.relatedTarget = u;
            F = null;
            Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
            J = F;
            if (k && n) b: {
              t = k;
              x = n;
              w = 0;
              for (u = t; u; u = vf(u)) w++;
              u = 0;
              for (F = x; F; F = vf(F)) u++;
              for (; 0 < w - u;) t = vf(t), w--;
              for (; 0 < u - w;) x = vf(x), u--;
              for (; w--;) {
                if (t === x || null !== x && t === x.alternate) break b;
                t = vf(t);
                x = vf(x);
              }
              t = null;
            } else t = null;
            null !== k && wf(g, h, k, t, !1);
            null !== n && null !== J && wf(g, J, n, t, !0);
          }
        }
      }
      a: {
        h = d ? ue(d) : window;
        k = h.nodeName && h.nodeName.toLowerCase();
        if ("select" === k || "input" === k && "file" === h.type) var na = ve;else if (me(h)) {
          if (we) na = Fe;else {
            na = De;
            var xa = Ce;
          }
        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
        if (na && (na = na(a, d))) {
          ne(g, na, c, e);
          break a;
        }
        xa && xa(a, h, d);
        "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
      }
      xa = d ? ue(d) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = !1;
          Ue(g, c, e);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g, c, e);
      }
      var $a;
      if (ae) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
        event: ba,
        listeners: xa
      }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
        event: e,
        listeners: d
      }), e.data = $a);
    }
    se(g, b);
  });
}
function tf(a, b, c) {
  return {
    instance: a,
    listener: b,
    currentTarget: c
  };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a;) {
    var e = a,
      f = e.stateNode;
    5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a) return null;
  do a = a.return; while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; null !== c && c !== d;) {
    var h = c,
      k = h.alternate,
      l = h.stateNode;
    if (null !== k && k === d) break;
    5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
    c = c.return;
  }
  0 !== g.length && a.push({
    event: b,
    listeners: g
  });
}
var xf = /\r\n?/g,
  yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c) throw Error(p(425));
}
function Bf() {}
var Cf = null,
  Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0,
  Gf = "function" === typeof clearTimeout ? clearTimeout : void 0,
  Hf = "function" === typeof Promise ? Promise : void 0,
  Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function (a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
function If(a) {
  setTimeout(function () {
    throw a;
  });
}
function Kf(a, b) {
  var c = b,
    d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
      if (0 === d) {
        a.removeChild(e);
        bd(b);
        return;
      }
      d--;
    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b) break;
      if ("/$" === b) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a;) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b) return a;
        b--;
      } else "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2),
  Of = "__reactFiber$" + Nf,
  Pf = "__reactProps$" + Nf,
  uf = "__reactContainer$" + Nf,
  of = "__reactEvents$" + Nf,
  Qf = "__reactListeners$" + Nf,
  Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b) return b;
  for (var c = a.parentNode; c;) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
        if (c = a[Of]) return c;
        a = Mf(a);
      }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [],
  Tf = -1;
function Uf(a) {
  return {
    current: a
  };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {},
  H = Uf(Vf),
  Wf = Uf(!1),
  Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {},
    f;
  for (f in c) e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();
  for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return !0;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d) throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null,
  fg = !1,
  gg = !1;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = !0;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = !0;
    var a = 0,
      b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do d = d(!0); while (null !== d);
      }
      eg = null;
      fg = !1;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = !1;
    }
  }
  return null;
}
var kg = [],
  lg = 0,
  mg = null,
  ng = 0,
  og = [],
  pg = 0,
  qg = null,
  rg = 1,
  sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f = 32 - oc(b) + e;
  if (30 < f) {
    var g = e - e % 5;
    f = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f + a;
  } else rg = 1 << f | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null,
  yg = null,
  I = !1,
  zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
        id: rg,
        overflow: sg
      } : null, a.memoizedState = {
        dehydrated: b,
        treeContext: c,
        retryLane: 1073741824
      }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
    default:
      return !1;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a)) throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = !1;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return !1;
  if (!I) return Fg(a), I = !0, !1;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a)) throw Hg(), Error(p(418));
    for (; b;) Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a;) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var a = yg; a;) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = !1;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag) throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d) throw Error(p(147, a));
      var e = d,
        f = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
      b = function (a) {
        var b = e.refs;
        null === a ? delete b[f] : b[f] = a;
      };
      b._stringRef = f;
      return b;
    }
    if ("string" !== typeof a) throw Error(p(284));
    if (!c._owner) throw Error(p(290, a));
  }
  return a;
}
function Mg(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function Ng(a) {
  var b = a._init;
  return b(a._payload);
}
function Og(a) {
  function b(b, c) {
    if (a) {
      var d = b.deletions;
      null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
    }
  }
  function c(c, d) {
    if (!a) return null;
    for (; null !== d;) b(c, d), d = d.sibling;
    return null;
  }
  function d(a, b) {
    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
    return a;
  }
  function e(a, b) {
    a = Pg(a, b);
    a.index = 0;
    a.sibling = null;
    return a;
  }
  function f(b, c, d) {
    b.index = d;
    if (!a) return b.flags |= 1048576, c;
    d = b.alternate;
    if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
    b.flags |= 2;
    return c;
  }
  function g(b) {
    a && null === b.alternate && (b.flags |= 2);
    return b;
  }
  function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
    b = e(b, c);
    b.return = a;
    return b;
  }
  function k(a, b, c, d) {
    var f = c.type;
    if (f === ya) return m(a, b, c.props.children, d, c.key);
    if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), d.ref = Lg(a, b, c), d.return = a, d;
    d = Rg(c.type, c.key, c.props, null, a.mode, d);
    d.ref = Lg(a, b, c);
    d.return = a;
    return d;
  }
  function l(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), b.return = a, b;
    b = e(b, c.children || []);
    b.return = a;
    return b;
  }
  function m(a, b, c, d, f) {
    if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
    b = e(b, c);
    b.return = a;
    return b;
  }
  function q(a, b, c) {
    if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), b.return = a, b;
    if ("object" === typeof b && null !== b) {
      switch (b.$$typeof) {
        case va:
          return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), c.return = a, c;
        case wa:
          return b = Sg(b, a.mode, c), b.return = a, b;
        case Ha:
          var d = b._init;
          return q(a, d(b._payload), c);
      }
      if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
      Mg(a, b);
    }
    return null;
  }
  function r(a, b, c, d) {
    var e = null !== b ? b.key : null;
    if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case va:
          return c.key === e ? k(a, b, c, d) : null;
        case wa:
          return c.key === e ? l(a, b, c, d) : null;
        case Ha:
          return e = c._init, r(a, b, e(c._payload), d);
      }
      if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
      Mg(a, c);
    }
    return null;
  }
  function y(a, b, c, d, e) {
    if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
    if ("object" === typeof d && null !== d) {
      switch (d.$$typeof) {
        case va:
          return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
        case wa:
          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
        case Ha:
          var f = d._init;
          return y(a, b, c, f(d._payload), e);
      }
      if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
      Mg(b, d);
    }
    return null;
  }
  function n(e, g, h, k) {
    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
      u.index > w ? (x = u, u = null) : x = u.sibling;
      var n = r(e, u, h[w], k);
      if (null === n) {
        null === u && (u = x);
        break;
      }
      a && u && null === n.alternate && b(e, u);
      g = f(n, g, w);
      null === m ? l = n : m.sibling = n;
      m = n;
      u = x;
    }
    if (w === h.length) return c(e, u), I && tg(e, w), l;
    if (null === u) {
      for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
      I && tg(e, w);
      return l;
    }
    for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
    a && u.forEach(function (a) {
      return b(e, a);
    });
    I && tg(e, w);
    return l;
  }
  function t(e, g, h, k) {
    var l = Ka(h);
    if ("function" !== typeof l) throw Error(p(150));
    h = l.call(h);
    if (null == h) throw Error(p(151));
    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
      m.index > w ? (x = m, m = null) : x = m.sibling;
      var t = r(e, m, n.value, k);
      if (null === t) {
        null === m && (m = x);
        break;
      }
      a && m && null === t.alternate && b(e, m);
      g = f(t, g, w);
      null === u ? l = t : u.sibling = t;
      u = t;
      m = x;
    }
    if (n.done) return c(e, m), I && tg(e, w), l;
    if (null === m) {
      for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
      I && tg(e, w);
      return l;
    }
    for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
    a && m.forEach(function (a) {
      return b(e, a);
    });
    I && tg(e, w);
    return l;
  }
  function J(a, d, f, h) {
    "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
    if ("object" === typeof f && null !== f) {
      switch (f.$$typeof) {
        case va:
          a: {
            for (var k = f.key, l = d; null !== l;) {
              if (l.key === k) {
                k = f.type;
                if (k === ya) {
                  if (7 === l.tag) {
                    c(a, l.sibling);
                    d = e(l, f.props.children);
                    d.return = a;
                    a = d;
                    break a;
                  }
                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
                  c(a, l.sibling);
                  d = e(l, f.props);
                  d.ref = Lg(a, l, f);
                  d.return = a;
                  a = d;
                  break a;
                }
                c(a, l);
                break;
              } else b(a, l);
              l = l.sibling;
            }
            f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), h.ref = Lg(a, d, f), h.return = a, a = h);
          }
          return g(a);
        case wa:
          a: {
            for (l = f.key; null !== d;) {
              if (d.key === l) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);
                  d = e(d, f.children || []);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, d);
                  break;
                }
              } else b(a, d);
              d = d.sibling;
            }
            d = Sg(f, a.mode, h);
            d.return = a;
            a = d;
          }
          return g(a);
        case Ha:
          return l = f._init, J(a, d, l(f._payload), h);
      }
      if (eb(f)) return n(a, d, f, h);
      if (Ka(f)) return t(a, d, f, h);
      Mg(a, f);
    }
    return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
  }
  return J;
}
var Ug = Og(!0),
  Vg = Og(!1),
  Wg = Uf(null),
  Xg = null,
  Yg = null,
  Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a) {
  var b = Wg.current;
  E(Wg);
  a._currentValue = b;
}
function bh(a, b, c) {
  for (; null !== a;) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c) break;
    a = a.return;
  }
}
function ch(a, b) {
  Xg = a;
  Zg = Yg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = !0), a.firstContext = null);
}
function eh(a) {
  var b = a._currentValue;
  if (Zg !== a) if (a = {
    context: a,
    memoizedValue: b,
    next: null
  }, null === Yg) {
    if (null === Xg) throw Error(p(308));
    Yg = a;
    Xg.dependencies = {
      lanes: 0,
      firstContext: a
    };
  } else Yg = Yg.next = a;
  return b;
}
var fh = null;
function gh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function hh(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return ih(a, d);
}
function ih(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var jh = !1;
function kh(a) {
  a.updateQueue = {
    baseState: a.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  };
}
function lh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = {
    baseState: a.baseState,
    firstBaseUpdate: a.firstBaseUpdate,
    lastBaseUpdate: a.lastBaseUpdate,
    shared: a.shared,
    effects: a.effects
  });
}
function mh(a, b) {
  return {
    eventTime: a,
    lane: b,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function nh(a, b, c) {
  var d = a.updateQueue;
  if (null === d) return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return ih(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return ih(a, c);
}
function oh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function ph(a, b) {
  var c = a.updateQueue,
    d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null,
      f = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = {
          eventTime: c.eventTime,
          lane: c.lane,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        };
        null === f ? e = f = g : f = f.next = g;
        c = c.next;
      } while (null !== c);
      null === f ? e = f = b : f = f.next = b;
    } else e = f = b;
    c = {
      baseState: d.baseState,
      firstBaseUpdate: e,
      lastBaseUpdate: f,
      shared: d.shared,
      effects: d.effects
    };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function qh(a, b, c, d) {
  var e = a.updateQueue;
  jh = !1;
  var f = e.firstBaseUpdate,
    g = e.lastBaseUpdate,
    h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k = h,
      l = k.next;
    k.next = null;
    null === g ? f = l : g.next = l;
    g = k;
    var m = a.alternate;
    null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
  }
  if (null !== f) {
    var q = e.baseState;
    g = 0;
    m = l = k = null;
    h = f;
    do {
      var r = h.lane,
        y = h.eventTime;
      if ((d & r) === r) {
        null !== m && (m = m.next = {
          eventTime: y,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n = a,
            t = h;
          r = b;
          y = c;
          switch (t.tag) {
            case 1:
              n = t.payload;
              if ("function" === typeof n) {
                q = n.call(y, q, r);
                break a;
              }
              q = n;
              break a;
            case 3:
              n.flags = n.flags & -65537 | 128;
            case 0:
              n = t.payload;
              r = "function" === typeof n ? n.call(y, q, r) : n;
              if (null === r || void 0 === r) break a;
              q = A({}, q, r);
              break a;
            case 2:
              jh = !0;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
      } else y = {
        eventTime: y,
        lane: r,
        tag: h.tag,
        payload: h.payload,
        callback: h.callback,
        next: null
      }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
      h = h.next;
      if (null === h) if (h = e.shared.pending, null === h) break;else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
    } while (1);
    null === m && (k = q);
    e.baseState = k;
    e.firstBaseUpdate = l;
    e.lastBaseUpdate = m;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do g |= e.lane, e = e.next; while (e !== b);
    } else null === f && (e.shared.lanes = 0);
    rh |= g;
    a.lanes = g;
    a.memoizedState = q;
  }
}
function sh(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a) for (b = 0; b < a.length; b++) {
    var d = a[b],
      e = d.callback;
    if (null !== e) {
      d.callback = null;
      d = c;
      if ("function" !== typeof e) throw Error(p(191, e));
      e.call(d);
    }
  }
}
var th = {},
  uh = Uf(th),
  vh = Uf(th),
  wh = Uf(th);
function xh(a) {
  if (a === th) throw Error(p(174));
  return a;
}
function yh(a, b) {
  G(wh, b);
  G(vh, a);
  G(uh, th);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(uh);
  G(uh, b);
}
function zh() {
  E(uh);
  E(vh);
  E(wh);
}
function Ah(a) {
  xh(wh.current);
  var b = xh(uh.current);
  var c = lb(b, a.type);
  b !== c && (G(vh, a), G(uh, c));
}
function Bh(a) {
  vh.current === a && (E(uh), E(vh));
}
var L = Uf(0);
function Ch(a) {
  for (var b = a; null !== b;) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a) break;
    for (; null === b.sibling;) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher,
  Gh = ua.ReactCurrentBatchConfig,
  Hh = 0,
  M = null,
  N = null,
  O = null,
  Ih = !1,
  Jh = !1,
  Kh = 0,
  Lh = 0;
function P() {
  throw Error(p(321));
}
function Mh(a, b) {
  if (null === b) return !1;
  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
  return !0;
}
function Nh(a, b, c, d, e, f) {
  Hh = f;
  M = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
  a = c(d, e);
  if (Jh) {
    f = 0;
    do {
      Jh = !1;
      Kh = 0;
      if (25 <= f) throw Error(p(301));
      f += 1;
      O = N = null;
      b.updateQueue = null;
      Fh.current = Qh;
      a = c(d, e);
    } while (Jh);
  }
  Fh.current = Rh;
  b = null !== N && null !== N.next;
  Hh = 0;
  O = N = M = null;
  Ih = !1;
  if (b) throw Error(p(300));
  return a;
}
function Sh() {
  var a = 0 !== Kh;
  Kh = 0;
  return a;
}
function Th() {
  var a = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === O ? M.memoizedState = O = a : O = O.next = a;
  return O;
}
function Uh() {
  if (null === N) {
    var a = M.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = N.next;
  var b = null === O ? M.memoizedState : O.next;
  if (null !== b) O = b, N = a;else {
    if (null === a) throw Error(p(310));
    N = a;
    a = {
      memoizedState: N.memoizedState,
      baseState: N.baseState,
      baseQueue: N.baseQueue,
      queue: N.queue,
      next: null
    };
    null === O ? M.memoizedState = O = a : O = O.next = a;
  }
  return O;
}
function Vh(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function Wh(a) {
  var b = Uh(),
    c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = N,
    e = d.baseQueue,
    f = c.pending;
  if (null !== f) {
    if (null !== e) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (null !== e) {
    f = e.next;
    d = d.baseState;
    var h = g = null,
      k = null,
      l = f;
    do {
      var m = l.lane;
      if ((Hh & m) === m) null !== k && (k = k.next = {
        lane: 0,
        action: l.action,
        hasEagerState: l.hasEagerState,
        eagerState: l.eagerState,
        next: null
      }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
        var q = {
          lane: m,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        };
        null === k ? (h = k = q, g = d) : k = k.next = q;
        M.lanes |= m;
        rh |= m;
      }
      l = l.next;
    } while (null !== l && l !== f);
    null === k ? g = d : k.next = h;
    He(d, b.memoizedState) || (dh = !0);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do f = e.lane, M.lanes |= f, rh |= f, e = e.next; while (e !== a);
  } else null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function Xh(a) {
  var b = Uh(),
    c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch,
    e = c.pending,
    f = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do f = a(f, g.action), g = g.next; while (g !== e);
    He(f, b.memoizedState) || (dh = !0);
    b.memoizedState = f;
    null === b.baseQueue && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function Yh() {}
function Zh(a, b) {
  var c = M,
    d = Uh(),
    e = b(),
    f = !He(d.memoizedState, e);
  f && (d.memoizedState = e, dh = !0);
  d = d.queue;
  $h(ai.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
    c.flags |= 2048;
    bi(9, ci.bind(null, c, d, e, b), void 0, null);
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(c, b, e);
  }
  return e;
}
function di(a, b, c) {
  a.flags |= 16384;
  a = {
    getSnapshot: b,
    value: c
  };
  b = M.updateQueue;
  null === b ? (b = {
    lastEffect: null,
    stores: null
  }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function ci(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  ei(b) && fi(a);
}
function ai(a, b, c) {
  return c(function () {
    ei(b) && fi(a);
  });
}
function ei(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return !0;
  }
}
function fi(a) {
  var b = ih(a, 1);
  null !== b && gi(b, a, 1, -1);
}
function hi(a) {
  var b = Th();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: Vh,
    lastRenderedState: a
  };
  b.queue = a;
  a = a.dispatch = ii.bind(null, M, a);
  return [b.memoizedState, a];
}
function bi(a, b, c, d) {
  a = {
    tag: a,
    create: b,
    destroy: c,
    deps: d,
    next: null
  };
  b = M.updateQueue;
  null === b ? (b = {
    lastEffect: null,
    stores: null
  }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a, b, c, d) {
  var e = Th();
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
}
function li(a, b, c, d) {
  var e = Uh();
  d = void 0 === d ? null : d;
  var f = void 0;
  if (null !== N) {
    var g = N.memoizedState;
    f = g.destroy;
    if (null !== d && Mh(d, g.deps)) {
      e.memoizedState = bi(b, c, f, d);
      return;
    }
  }
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, f, d);
}
function mi(a, b) {
  return ki(8390656, 8, a, b);
}
function $h(a, b) {
  return li(2048, 8, a, b);
}
function ni(a, b) {
  return li(4, 2, a, b);
}
function oi(a, b) {
  return li(4, 4, a, b);
}
function pi(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function () {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
    b.current = null;
  };
}
function qi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return li(4, 4, pi.bind(null, b, a), c);
}
function ri() {}
function si(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ti(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function ui(a, b, c) {
  if (0 === (Hh & 21)) return a.baseState && (a.baseState = !1, dh = !0), a.memoizedState = c;
  He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = !0);
  return b;
}
function vi(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(!0);
  var d = Gh.transition;
  Gh.transition = {};
  try {
    a(!1), b();
  } finally {
    C = c, Gh.transition = d;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a, b, c) {
  var d = yi(a);
  c = {
    lane: d,
    action: c,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (zi(a)) Ai(b, c);else if (c = hh(a, b, c, d), null !== c) {
    var e = R();
    gi(c, a, d, e);
    Bi(c, b, d);
  }
}
function ii(a, b, c) {
  var d = yi(a),
    e = {
      lane: d,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (zi(a)) Ai(b, e);else {
    var f = a.alternate;
    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
      var g = b.lastRenderedState,
        h = f(g, c);
      e.hasEagerState = !0;
      e.eagerState = h;
      if (He(h, g)) {
        var k = b.interleaved;
        null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
        b.interleaved = e;
        return;
      }
    } catch (l) {} finally {}
    c = hh(a, b, e, d);
    null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
  }
}
function zi(a) {
  var b = a.alternate;
  return a === M || null !== b && b === M;
}
function Ai(a, b) {
  Jh = Ih = !0;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Bi(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var Rh = {
    readContext: eh,
    useCallback: P,
    useContext: P,
    useEffect: P,
    useImperativeHandle: P,
    useInsertionEffect: P,
    useLayoutEffect: P,
    useMemo: P,
    useReducer: P,
    useRef: P,
    useState: P,
    useDebugValue: P,
    useDeferredValue: P,
    useTransition: P,
    useMutableSource: P,
    useSyncExternalStore: P,
    useId: P,
    unstable_isNewReconciler: !1
  },
  Oh = {
    readContext: eh,
    useCallback: function (a, b) {
      Th().memoizedState = [a, void 0 === b ? null : b];
      return a;
    },
    useContext: eh,
    useEffect: mi,
    useImperativeHandle: function (a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return ki(4194308, 4, pi.bind(null, b, a), c);
    },
    useLayoutEffect: function (a, b) {
      return ki(4194308, 4, a, b);
    },
    useInsertionEffect: function (a, b) {
      return ki(4, 2, a, b);
    },
    useMemo: function (a, b) {
      var c = Th();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function (a, b, c) {
      var d = Th();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      d.queue = a;
      a = a.dispatch = xi.bind(null, M, a);
      return [d.memoizedState, a];
    },
    useRef: function (a) {
      var b = Th();
      a = {
        current: a
      };
      return b.memoizedState = a;
    },
    useState: hi,
    useDebugValue: ri,
    useDeferredValue: function (a) {
      return Th().memoizedState = a;
    },
    useTransition: function () {
      var a = hi(!1),
        b = a[0];
      a = vi.bind(null, a[1]);
      Th().memoizedState = a;
      return [b, a];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (a, b, c) {
      var d = M,
        e = Th();
      if (I) {
        if (void 0 === c) throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(d, b, c);
      }
      e.memoizedState = c;
      var f = {
        value: c,
        getSnapshot: b
      };
      e.queue = f;
      mi(ai.bind(null, d, f, a), [a]);
      d.flags |= 2048;
      bi(9, ci.bind(null, d, f, c, b), void 0, null);
      return c;
    },
    useId: function () {
      var a = Th(),
        b = Q.identifierPrefix;
      if (I) {
        var c = sg;
        var d = rg;
        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Kh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    },
    unstable_isNewReconciler: !1
  },
  Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function () {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function (a) {
      var b = Uh();
      return ui(b, N.memoizedState, a);
    },
    useTransition: function () {
      var a = Wh(Vh)[0],
        b = Uh().memoizedState;
      return [a, b];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: !1
  },
  Qh = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Xh,
    useRef: ji,
    useState: function () {
      return Xh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function (a) {
      var b = Uh();
      return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
    },
    useTransition: function () {
      var a = Xh(Vh)[0],
        b = Uh().memoizedState;
      return [a, b];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: !1
  };
function Ci(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Di(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Ei = {
  isMounted: function (a) {
    return (a = a._reactInternals) ? Vb(a) === a : !1;
  },
  enqueueSetState: function (a, b, c) {
    a = a._reactInternals;
    var d = R(),
      e = yi(a),
      f = mh(d, e);
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  },
  enqueueReplaceState: function (a, b, c) {
    a = a._reactInternals;
    var d = R(),
      e = yi(a),
      f = mh(d, e);
    f.tag = 1;
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  },
  enqueueForceUpdate: function (a, b) {
    a = a._reactInternals;
    var c = R(),
      d = yi(a),
      e = mh(c, d);
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    b = nh(a, e, d);
    null !== b && (gi(b, a, d, c), oh(b, a, d));
  }
};
function Fi(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
}
function Gi(a, b, c) {
  var d = !1,
    e = Vf;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Ei;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function Hi(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
}
function Ii(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = {};
  kh(a);
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function Ji(a, b) {
  try {
    var c = "",
      d = b;
    do c += Pa(d), d = d.return; while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return {
    value: a,
    source: b,
    stack: e,
    digest: null
  };
}
function Ki(a, b, c) {
  return {
    value: a,
    source: null,
    stack: null != c ? c : null,
    digest: null != b ? b : null
  };
}
function Li(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function () {
      throw c;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  c.payload = {
    element: null
  };
  var d = b.value;
  c.callback = function () {
    Oi || (Oi = !0, Pi = d);
    Li(a, b);
  };
  return c;
}
function Qi(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function () {
      return d(e);
    };
    c.callback = function () {
      Li(a, b);
    };
  }
  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
    Li(a, b);
    "function" !== typeof d && (null === Ri ? Ri = new Set([this]) : Ri.add(this));
    var c = b.stack;
    this.componentDidCatch(b.value, {
      componentStack: null !== c ? c : ""
    });
  });
  return c;
}
function Si(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Mi();
    var e = new Set();
    d.set(b, e);
  } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
}
function Ui(a) {
  do {
    var b;
    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
    if (b) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Vi(a, b, c, d, e) {
  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Wi = ua.ReactCurrentOwner,
  dh = !1;
function Xi(a, b, c, d) {
  b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
}
function Yi(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  ch(b, e);
  d = Nh(a, b, c, d, f, e);
  c = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Xi(a, b, d, e);
  return b.child;
}
function $i(a, b, c, d, e) {
  if (null === a) {
    var f = c.type;
    if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
    a = Rg(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f = a.child;
  if (0 === (a.lanes & e)) {
    var g = f.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
  }
  b.flags |= 1;
  a = Pg(f, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function bj(a, b, c, d, e) {
  if (null !== a) {
    var f = a.memoizedProps;
    if (Ie(f, d) && a.ref === b.ref) if (dh = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = !0);else return b.lanes = a.lanes, Zi(a, b, e);
  }
  return cj(a, b, c, d, e);
}
function dj(a, b, c) {
  var d = b.pendingProps,
    e = d.children,
    f = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode) {
    if (0 === (b.mode & 1)) b.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, G(ej, fj), fj |= c;else {
      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
        baseLanes: a,
        cachePool: null,
        transitions: null
      }, b.updateQueue = null, G(ej, fj), fj |= a, null;
      b.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      };
      d = null !== f ? f.baseLanes : c;
      G(ej, fj);
      fj |= d;
    }
  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
  Xi(a, b, e, c);
  return b.child;
}
function gj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function cj(a, b, c, d, e) {
  var f = Zf(c) ? Xf : H.current;
  f = Yf(b, f);
  ch(b, e);
  c = Nh(a, b, c, d, f, e);
  d = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Xi(a, b, c, e);
  return b.child;
}
function hj(a, b, c, d, e) {
  if (Zf(c)) {
    var f = !0;
    cg(b);
  } else f = !1;
  ch(b, e);
  if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = !0;else if (null === a) {
    var g = b.stateNode,
      h = b.memoizedProps;
    g.props = h;
    var k = g.context,
      l = c.contextType;
    "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
    var m = c.getDerivedStateFromProps,
      q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
    jh = !1;
    var r = b.memoizedState;
    g.state = r;
    qh(b, d, g, e);
    k = b.memoizedState;
    h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
  } else {
    g = b.stateNode;
    lh(a, b);
    h = b.memoizedProps;
    l = b.type === b.elementType ? h : Ci(b.type, h);
    g.props = l;
    q = b.pendingProps;
    r = g.context;
    k = c.contextType;
    "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
    var y = c.getDerivedStateFromProps;
    (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
    jh = !1;
    r = b.memoizedState;
    g.state = r;
    qh(b, d, g, e);
    var n = b.memoizedState;
    h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
  }
  return jj(a, b, c, d, f, e);
}
function jj(a, b, c, d, e, f) {
  gj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g) return e && dg(b, c, !1), Zi(a, b, f);
  d = b.stateNode;
  Wi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
  b.memoizedState = d.state;
  e && dg(b, c, !0);
  return b.child;
}
function kj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
  yh(a, b.containerInfo);
}
function lj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Xi(a, b, c, d);
  return b.child;
}
var mj = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function nj(a) {
  return {
    baseLanes: a,
    cachePool: null,
    transitions: null
  };
}
function oj(a, b, c) {
  var d = b.pendingProps,
    e = L.current,
    f = !1,
    g = 0 !== (b.flags & 128),
    h;
  (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
  if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
  G(L, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f ? (d = b.mode, f = b.child, g = {
      mode: "hidden",
      children: g
    }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
  if (f) {
    f = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k = {
      mode: "hidden",
      children: d.children
    };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
    f.return = b;
    d.return = b;
    d.sibling = f;
    b.child = d;
    d = f;
    f = b.child;
    g = a.child.memoizedState;
    g = null === g ? nj(c) : {
      baseLanes: g.baseLanes | c,
      cachePool: null,
      transitions: g.transitions
    };
    f.memoizedState = g;
    f.childLanes = a.childLanes & ~c;
    b.memoizedState = mj;
    return d;
  }
  f = a.child;
  a = f.sibling;
  d = Pg(f, {
    mode: "visible",
    children: d.children
  });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function qj(a, b) {
  b = pj({
    mode: "visible",
    children: b
  }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function sj(a, b, c, d) {
  null !== d && Jg(d);
  Ug(b, a.child, null, c);
  a = qj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function rj(a, b, c, d, e, f, g) {
  if (c) {
    if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
    f = d.fallback;
    e = b.mode;
    d = pj({
      mode: "visible",
      children: d.children
    }, e, 0, null);
    f = Tg(f, e, g, null);
    f.flags |= 2;
    d.return = b;
    f.return = b;
    d.sibling = f;
    b.child = d;
    0 !== (b.mode & 1) && Ug(b, a.child, null, g);
    b.child.memoizedState = nj(g);
    b.memoizedState = mj;
    return f;
  }
  if (0 === (b.mode & 1)) return sj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d) var h = d.dgst;
    d = h;
    f = Error(p(419));
    d = Ki(f, d, void 0);
    return sj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (dh || h) {
    d = Q;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
    }
    tj();
    d = Ki(Error(p(421)));
    return sj(a, b, g, d);
  }
  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
  a = f.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = !0;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = qj(b, d.children);
  b.flags |= 4096;
  return b;
}
function vj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  bh(a.return, b, c);
}
function wj(a, b, c, d, e) {
  var f = a.memoizedState;
  null === f ? a.memoizedState = {
    isBackwards: b,
    rendering: null,
    renderingStartTime: 0,
    last: d,
    tail: c,
    tailMode: e
  } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
}
function xj(a, b, c) {
  var d = b.pendingProps,
    e = d.revealOrder,
    f = d.tail;
  Xi(a, b, d.children, c);
  d = L.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
      if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);else if (19 === a.tag) vj(a, c, b);else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b) break a;
      for (; null === a.sibling;) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  G(L, d);
  if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
    case "forwards":
      c = b.child;
      for (e = null; null !== c;) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      wj(b, !1, e, c, f);
      break;
    case "backwards":
      c = null;
      e = b.child;
      for (b.child = null; null !== e;) {
        a = e.alternate;
        if (null !== a && null === Ch(a)) {
          b.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }
      wj(b, !0, c, null, f);
      break;
    case "together":
      wj(b, !1, null, null, void 0);
      break;
    default:
      b.memoizedState = null;
  }
  return b.child;
}
function ij(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function Zi(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  rh |= b.lanes;
  if (0 === (c & b.childLanes)) return null;
  if (null !== a && b.child !== a.child) throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = Pg(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function yj(a, b, c) {
  switch (b.tag) {
    case 3:
      kj(b);
      Ig();
      break;
    case 5:
      Ah(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      yh(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context,
        e = b.memoizedProps.value;
      G(Wg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
        G(L, L.current & 1);
        a = Zi(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(L, L.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d) return xj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(L, L.current);
      if (d) break;else return null;
    case 22:
    case 23:
      return b.lanes = 0, dj(a, b, c);
  }
  return Zi(a, b, c);
}
var zj, Aj, Bj, Cj;
zj = function (a, b) {
  for (var c = b.child; null !== c;) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;
    for (; null === c.sibling;) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Aj = function () {};
Bj = function (a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    xh(uh.current);
    var f = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f = [];
        break;
      case "select":
        e = A({}, e, {
          value: void 0
        });
        d = A({}, d, {
          value: void 0
        });
        f = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
      var h = e[l];
      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
    for (l in d) {
      var k = d[l];
      h = null != e ? e[l] : void 0;
      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
        if (h) {
          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
        } else c || (f || (f = []), f.push(l, c)), c = k;
      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
    }
    c && (f = f || []).push("style", c);
    var l = f;
    if (b.updateQueue = l) b.flags |= 4;
  }
};
Cj = function (a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Dj(a, b) {
  if (!I) switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
      null === c ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child,
    c = 0,
    d = 0;
  if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Ej(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      zh();
      E(Wf);
      E(H);
      Eh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a, b);
      S(b);
      return null;
    case 5:
      Bh(b);
      var e = xh(wh.current);
      c = b.type;
      if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
        if (!d) {
          if (null === b.stateNode) throw Error(p(166));
          S(b);
          return null;
        }
        a = xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++) D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D("error", d);
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = {
                wasMultiple: !!f.multiple
              };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f), D("invalid", d);
          }
          ub(c, f);
          e = null;
          for (var g in f) if (f.hasOwnProperty(g)) {
            var h = f[g];
            "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
          }
          switch (c) {
            case "input":
              Va(d);
              db(d, f, !0);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
            is: d.is
          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          zj(a, b, !1, !1);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D("error", a);
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = {
                  wasMultiple: !!d.multiple
                };
                e = A({}, d, {
                  value: void 0
                });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f in h) if (h.hasOwnProperty(f)) {
              var k = h[f];
              "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
            }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, !1);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f = d.value;
                null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = !0;
                break a;
              default:
                d = !1;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);else {
        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
        c = xh(wh.current);
        xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
            case 3:
              Af(d.nodeValue, c, 0 !== (a.mode & 1));
              break;
            case 5:
              !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
          }
          f && (b.flags |= 4);
        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(L);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;else if (f = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f) throw Error(p(318));
            f = b.memoizedState;
            f = null !== f ? f.dehydrated : null;
            if (!f) throw Error(p(317));
            f[Of] = b;
          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f = !1;
        } else null !== zg && (Fj(zg), zg = null), f = !0;
        if (!f) return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128)) return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return ah(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(L);
      f = b.memoizedState;
      if (null === f) return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f.rendering;
      if (null === g) {
        if (d) Dj(f, !1);else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
            g = Ch(a);
            if (null !== g) {
              b.flags |= 128;
              Dj(f, !1);
              d = g.updateQueue;
              null !== d && (b.updateQueue = d, b.flags |= 4);
              b.subtreeFlags = 0;
              d = c;
              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                lanes: a.lanes,
                firstContext: a.firstContext
              }), c = c.sibling;
              G(L, L.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== f.tail && B() > Gj && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
        }
      } else {
        if (!d) if (a = Ch(g), null !== a) {
          if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
        } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
      }
      if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Ij(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Bh(b), null;
    case 13:
      E(L);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate) throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(L), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = !1,
  U = !1,
  Kj = "function" === typeof WeakSet ? WeakSet : Set,
  V = null;
function Lj(a, b) {
  var c = a.ref;
  if (null !== c) if ("function" === typeof c) try {
    c(null);
  } catch (d) {
    W(a, b, d);
  } else c.current = null;
}
function Mj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Nj = !1;
function Oj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a) var c = {
      start: a.selectionStart,
      end: a.selectionEnd
    };else a: {
      c = (c = a.ownerDocument) && c.defaultView || window;
      var d = c.getSelection && c.getSelection();
      if (d && 0 !== d.rangeCount) {
        c = d.anchorNode;
        var e = d.anchorOffset,
          f = d.focusNode;
        d = d.focusOffset;
        try {
          c.nodeType, f.nodeType;
        } catch (F) {
          c = null;
          break a;
        }
        var g = 0,
          h = -1,
          k = -1,
          l = 0,
          m = 0,
          q = a,
          r = null;
        b: for (;;) {
          for (var y;;) {
            q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
            q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
            3 === q.nodeType && (g += q.nodeValue.length);
            if (null === (y = q.firstChild)) break;
            r = q;
            q = y;
          }
          for (;;) {
            if (q === a) break b;
            r === c && ++l === e && (h = g);
            r === f && ++m === d && (k = g);
            if (null !== (y = q.nextSibling)) break;
            q = r;
            r = q.parentNode;
          }
          q = y;
        }
        c = -1 === h || -1 === k ? null : {
          start: h,
          end: k
        };
      } else c = null;
    }
    c = c || {
      start: 0,
      end: 0
    };
  } else c = null;
  Df = {
    focusedElem: a,
    selectionRange: c
  };
  dd = !1;
  for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;else for (; null !== V;) {
    b = V;
    try {
      var n = b.alternate;
      if (0 !== (b.flags & 1024)) switch (b.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n) {
            var t = n.memoizedProps,
              J = n.memoizedState,
              x = b.stateNode,
              w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
            x.__reactInternalSnapshotBeforeUpdate = w;
          }
          break;
        case 3:
          var u = b.stateNode.containerInfo;
          1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p(163));
      }
    } catch (F) {
      W(b, b.return, F);
    }
    a = b.sibling;
    if (null !== a) {
      a.return = b.return;
      V = a;
      break;
    }
    V = b.return;
  }
  n = Nj;
  Nj = !1;
  return n;
}
function Pj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f = e.destroy;
        e.destroy = void 0;
        void 0 !== f && Mj(b, c, f);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Qj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Rj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Sj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Sj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Tj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Uj(a) {
  a: for (;;) {
    for (; null === a.sibling;) {
      if (null === a.return || Tj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Vj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a;) Vj(a, b, c), a = a.sibling;
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
}
var X = null,
  Xj = !1;
function Yj(a, b, c) {
  for (c = c.child; null !== c;) Zj(a, b, c), c = c.sibling;
}
function Zj(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c);
  } catch (h) {}
  switch (c.tag) {
    case 5:
      U || Lj(c, b);
    case 6:
      var d = X,
        e = Xj;
      X = null;
      Yj(a, b, c);
      X = d;
      Xj = e;
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Xj;
      X = c.stateNode.containerInfo;
      Xj = !0;
      Yj(a, b, c);
      X = d;
      Xj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f = e,
            g = f.destroy;
          f = f.tag;
          void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Yj(a, b, c);
      break;
    case 1:
      if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
      } catch (h) {
        W(c, b, h);
      }
      Yj(a, b, c);
      break;
    case 21:
      Yj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
      break;
    default:
      Yj(a, b, c);
  }
}
function ak(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Kj());
    b.forEach(function (b) {
      var d = bk.bind(null, a, b);
      c.has(b) || (c.add(b), b.then(d, d));
    });
  }
}
function ck(a, b) {
  var c = b.deletions;
  if (null !== c) for (var d = 0; d < c.length; d++) {
    var e = c[d];
    try {
      var f = a,
        g = b,
        h = g;
      a: for (; null !== h;) {
        switch (h.tag) {
          case 5:
            X = h.stateNode;
            Xj = !1;
            break a;
          case 3:
            X = h.stateNode.containerInfo;
            Xj = !0;
            break a;
          case 4:
            X = h.stateNode.containerInfo;
            Xj = !0;
            break a;
        }
        h = h.return;
      }
      if (null === X) throw Error(p(160));
      Zj(f, g, e);
      X = null;
      Xj = !1;
      var k = e.alternate;
      null !== k && (k.return = null);
      e.return = null;
    } catch (l) {
      W(e, b, l);
    }
  }
  if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) dk(b, a), b = b.sibling;
}
function dk(a, b) {
  var c = a.alternate,
    d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b, a);
      ek(a);
      if (d & 4) {
        try {
          Pj(3, a, a.return), Qj(3, a);
        } catch (t) {
          W(a, a.return, t);
        }
        try {
          Pj(5, a, a.return);
        } catch (t) {
          W(a, a.return, t);
        }
      }
      break;
    case 1:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      break;
    case 5:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t) {
          W(a, a.return, t);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f = a.memoizedProps,
          g = null !== c ? c.memoizedProps : f,
          h = a.type,
          k = a.updateQueue;
        a.updateQueue = null;
        if (null !== k) try {
          "input" === h && "radio" === f.type && null != f.name && ab(e, f);
          vb(h, g);
          var l = vb(h, f);
          for (g = 0; g < k.length; g += 2) {
            var m = k[g],
              q = k[g + 1];
            "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
          }
          switch (h) {
            case "input":
              bb(e, f);
              break;
            case "textarea":
              ib(e, f);
              break;
            case "select":
              var r = e._wrapperState.wasMultiple;
              e._wrapperState.wasMultiple = !!f.multiple;
              var y = f.value;
              null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
          }
          e[Pf] = f;
        } catch (t) {
          W(a, a.return, t);
        }
      }
      break;
    case 6:
      ck(b, a);
      ek(a);
      if (d & 4) {
        if (null === a.stateNode) throw Error(p(162));
        e = a.stateNode;
        f = a.memoizedProps;
        try {
          e.nodeValue = f;
        } catch (t) {
          W(a, a.return, t);
        }
      }
      break;
    case 3:
      ck(b, a);
      ek(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
        bd(b.containerInfo);
      } catch (t) {
        W(a, a.return, t);
      }
      break;
    case 4:
      ck(b, a);
      ek(a);
      break;
    case 13:
      ck(b, a);
      ek(a);
      e = a.child;
      e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
      d & 4 && ak(a);
      break;
    case 22:
      m = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
      ek(a);
      if (d & 8192) {
        l = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
          for (q = V = m; null !== V;) {
            r = V;
            y = r.child;
            switch (r.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r, r.return);
                break;
              case 1:
                Lj(r, r.return);
                var n = r.stateNode;
                if ("function" === typeof n.componentWillUnmount) {
                  d = r;
                  c = r.return;
                  try {
                    b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                  } catch (t) {
                    W(d, c, t);
                  }
                }
                break;
              case 5:
                Lj(r, r.return);
                break;
              case 22:
                if (null !== r.memoizedState) {
                  gk(q);
                  continue;
                }
            }
            null !== y ? (y.return = r, V = y) : gk(q);
          }
          m = m.sibling;
        }
        a: for (m = null, q = a;;) {
          if (5 === q.tag) {
            if (null === m) {
              m = q;
              try {
                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
              } catch (t) {
                W(a, a.return, t);
              }
            }
          } else if (6 === q.tag) {
            if (null === m) try {
              q.stateNode.nodeValue = l ? "" : q.memoizedProps;
            } catch (t) {
              W(a, a.return, t);
            }
          } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
            q.child.return = q;
            q = q.child;
            continue;
          }
          if (q === a) break a;
          for (; null === q.sibling;) {
            if (null === q.return || q.return === a) break a;
            m === q && (m = null);
            q = q.return;
          }
          m === q && (m = null);
          q.sibling.return = q.return;
          q = q.sibling;
        }
      }
      break;
    case 19:
      ck(b, a);
      ek(a);
      d & 4 && ak(a);
      break;
    case 21:
      break;
    default:
      ck(b, a), ek(a);
  }
}
function ek(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c;) {
          if (Tj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f = Uj(a);
          Wj(a, f, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo,
            h = Uj(a);
          Vj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k) {
      W(a, a.return, k);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function hk(a, b, c) {
  V = a;
  ik(a, b, c);
}
function ik(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V;) {
    var e = V,
      f = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Jj;
      if (!g) {
        var h = e.alternate,
          k = null !== h && null !== h.memoizedState || U;
        h = Jj;
        var l = U;
        Jj = g;
        if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
        for (; null !== f;) V = f, ik(f, b, c), f = f.sibling;
        V = e;
        Jj = h;
        U = l;
      }
      kk(a, b, c);
    } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
  }
}
function kk(a) {
  for (; null !== V;) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            U || Qj(5, b);
            break;
          case 1:
            var d = b.stateNode;
            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();else {
              var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
            }
            var f = b.updateQueue;
            null !== f && sh(b, f, d);
            break;
          case 3:
            var g = b.updateQueue;
            if (null !== g) {
              c = null;
              if (null !== b.child) switch (b.child.tag) {
                case 5:
                  c = b.child.stateNode;
                  break;
                case 1:
                  c = b.child.stateNode;
              }
              sh(b, g, c);
            }
            break;
          case 5:
            var h = b.stateNode;
            if (null === c && b.flags & 4) {
              c = h;
              var k = b.memoizedProps;
              switch (b.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k.autoFocus && c.focus();
                  break;
                case "img":
                  k.src && (c.src = k.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b.memoizedState) {
              var l = b.alternate;
              if (null !== l) {
                var m = l.memoizedState;
                if (null !== m) {
                  var q = m.dehydrated;
                  null !== q && bd(q);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p(163));
        }
        U || b.flags & 512 && Rj(b);
      } catch (r) {
        W(b, b.return, r);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function gk(a) {
  for (; null !== V;) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function jk(a) {
  for (; null !== V;) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Qj(4, b);
          } catch (k) {
            W(b, c, k);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k) {
              W(b, e, k);
            }
          }
          var f = b.return;
          try {
            Rj(b);
          } catch (k) {
            W(b, f, k);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Rj(b);
          } catch (k) {
            W(b, g, k);
          }
      }
    } catch (k) {
      W(b, b.return, k);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var lk = Math.ceil,
  mk = ua.ReactCurrentDispatcher,
  nk = ua.ReactCurrentOwner,
  ok = ua.ReactCurrentBatchConfig,
  K = 0,
  Q = null,
  Y = null,
  Z = 0,
  fj = 0,
  ej = Uf(0),
  T = 0,
  pk = null,
  rh = 0,
  qk = 0,
  rk = 0,
  sk = null,
  tk = null,
  fk = 0,
  Gj = Infinity,
  uk = null,
  Oi = !1,
  Pi = null,
  Ri = null,
  vk = !1,
  wk = null,
  xk = 0,
  yk = 0,
  zk = null,
  Ak = -1,
  Bk = 0;
function R() {
  return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
}
function yi(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a = C;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function gi(a, b, c, d) {
  if (50 < yk) throw yk = 0, zk = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
}
function Dk(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function () {
      0 === (K & 6) && jg();
    }), c = null;else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Fk(c, Gk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Gk(a, b) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K & 6)) throw Error(p(327));
  var c = a.callbackNode;
  if (Hk() && a.callbackNode !== c) return null;
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);else {
    b = d;
    var e = K;
    K |= 2;
    var f = Jk();
    if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
    do try {
      Lk();
      break;
    } catch (h) {
      Mk(a, h);
    } while (1);
    $g();
    mk.current = f;
    K = e;
    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
    if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
    if (6 === b) Ck(a, d);else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(a, tk, uk);
          break;
        case 3:
          Ck(a, d);
          if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              R();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 4:
          Ck(a, d);
          if ((d & 4194240) === d) break;
          b = a.eventTimes;
          for (e = -1; 0 < d;) {
            var g = 31 - oc(d);
            f = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 5:
          Pk(a, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Dk(a, B());
  return a.callbackNode === c ? Gk.bind(null, a) : null;
}
function Nk(a, b) {
  var c = sk;
  a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
  a = Ik(a, b);
  2 !== a && (b = tk, tk = c, null !== b && Fj(b));
  return a;
}
function Fj(a) {
  null === tk ? tk = a : tk.push.apply(tk, a);
}
function Ok(a) {
  for (var b = a;;) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
        var e = c[d],
          f = e.getSnapshot;
        e = e.value;
        try {
          if (!He(f(), e)) return !1;
        } catch (g) {
          return !1;
        }
      }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
      if (b === a) break;
      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return !0;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return !0;
}
function Ck(a, b) {
  b &= ~rk;
  b &= ~qk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b;) {
    var c = 31 - oc(b),
      d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Ek(a) {
  if (0 !== (K & 6)) throw Error(p(327));
  Hk();
  var b = uc(a, 0);
  if (0 === (b & 1)) return Dk(a, B()), null;
  var c = Ik(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Nk(a, d));
  }
  if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
  if (6 === c) throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Pk(a, tk, uk);
  Dk(a, B());
  return null;
}
function Qk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Gj = B() + 500, fg && jg());
  }
}
function Rk(a) {
  null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
  var b = K;
  K |= 1;
  var c = ok.transition,
    d = C;
  try {
    if (ok.transition = null, C = 1, a) return a();
  } finally {
    C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E(ej);
}
function Kk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y) for (c = Y.return; null !== c;) {
    var d = c;
    wg(d);
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && $f();
        break;
      case 3:
        zh();
        E(Wf);
        E(H);
        Eh();
        break;
      case 5:
        Bh(d);
        break;
      case 4:
        zh();
        break;
      case 13:
        E(L);
        break;
      case 19:
        E(L);
        break;
      case 10:
        ah(d.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c = c.return;
  }
  Q = a;
  Y = a = Pg(a.current, null);
  Z = fj = b;
  T = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
      c.interleaved = null;
      var e = d.next,
        f = c.pending;
      if (null !== f) {
        var g = f.next;
        f.next = e;
        d.next = g;
      }
      c.pending = d;
    }
    fh = null;
  }
  return a;
}
function Mk(a, b) {
  do {
    var c = Y;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d = M.memoizedState; null !== d;) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Ih = !1;
      }
      Hh = 0;
      O = N = M = null;
      Jh = !1;
      Kh = 0;
      nk.current = null;
      if (null === c || null === c.return) {
        T = 1;
        pk = b;
        Y = null;
        break;
      }
      a: {
        var f = a,
          g = c.return,
          h = c,
          k = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
          var l = k,
            m = h,
            q = m.tag;
          if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
            var r = m.alternate;
            r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y = Ui(g);
          if (null !== y) {
            y.flags &= -257;
            Vi(y, g, h, f, b);
            y.mode & 1 && Si(f, l, b);
            b = y;
            k = l;
            var n = b.updateQueue;
            if (null === n) {
              var t = new Set();
              t.add(k);
              b.updateQueue = t;
            } else n.add(k);
            break a;
          } else {
            if (0 === (b & 1)) {
              Si(f, l, b);
              tj();
              break a;
            }
            k = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J = Ui(g);
          if (null !== J) {
            0 === (J.flags & 65536) && (J.flags |= 256);
            Vi(J, g, h, f, b);
            Jg(Ji(k, h));
            break a;
          }
        }
        f = k = Ji(k, h);
        4 !== T && (T = 2);
        null === sk ? sk = [f] : sk.push(f);
        f = g;
        do {
          switch (f.tag) {
            case 3:
              f.flags |= 65536;
              b &= -b;
              f.lanes |= b;
              var x = Ni(f, k, b);
              ph(f, x);
              break a;
            case 1:
              h = k;
              var w = f.type,
                u = f.stateNode;
              if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var F = Qi(f, h, b);
                ph(f, F);
                break a;
              }
          }
          f = f.return;
        } while (null !== f);
      }
      Sk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a = mk.current;
  mk.current = Rh;
  return null === a ? Rh : a;
}
function tj() {
  if (0 === T || 3 === T || 2 === T) T = 4;
  null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
}
function Ik(a, b) {
  var c = K;
  K |= 2;
  var d = Jk();
  if (Q !== a || Z !== b) uk = null, Kk(a, b);
  do try {
    Tk();
    break;
  } catch (e) {
    Mk(a, e);
  } while (1);
  $g();
  K = c;
  mk.current = d;
  if (null !== Y) throw Error(p(261));
  Q = null;
  Z = 0;
  return T;
}
function Tk() {
  for (; null !== Y;) Uk(Y);
}
function Lk() {
  for (; null !== Y && !cc();) Uk(Y);
}
function Uk(a) {
  var b = Vk(a.alternate, a, fj);
  a.memoizedProps = a.pendingProps;
  null === b ? Sk(a) : Y = b;
  nk.current = null;
}
function Sk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Ej(c, b, fj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Ij(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Pk(a, b, c) {
  var d = C,
    e = ok.transition;
  try {
    ok.transition = null, C = 1, Wk(a, b, c, d);
  } finally {
    ok.transition = e, C = d;
  }
  return null;
}
function Wk(a, b, c, d) {
  do Hk(); while (null !== wk);
  if (0 !== (K & 6)) throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current) throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f = c.lanes | c.childLanes;
  Bc(a, f);
  a === Q && (Y = Q = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = !0, Fk(hc, function () {
    Hk();
    return null;
  }));
  f = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f) {
    f = ok.transition;
    ok.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    nk.current = null;
    Oj(a, c);
    dk(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    hk(c, a, e);
    dc();
    K = h;
    C = g;
    ok.transition = f;
  } else a.current = c;
  vk && (vk = !1, wk = a, xk = e);
  f = a.pendingLanes;
  0 === f && (Ri = null);
  mc(c.stateNode, d);
  Dk(a, B());
  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
    componentStack: e.stack,
    digest: e.digest
  });
  if (Oi) throw Oi = !1, a = Pi, Pi = null, a;
  0 !== (xk & 1) && 0 !== a.tag && Hk();
  f = a.pendingLanes;
  0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a = Dc(xk),
      b = ok.transition,
      c = C;
    try {
      ok.transition = null;
      C = 16 > a ? 16 : a;
      if (null === wk) var d = !1;else {
        a = wk;
        wk = null;
        xk = 0;
        if (0 !== (K & 6)) throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V;) {
          var f = V,
            g = f.child;
          if (0 !== (V.flags & 16)) {
            var h = f.deletions;
            if (null !== h) {
              for (var k = 0; k < h.length; k++) {
                var l = h[k];
                for (V = l; null !== V;) {
                  var m = V;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m, f);
                  }
                  var q = m.child;
                  if (null !== q) q.return = m, V = q;else for (; null !== V;) {
                    m = V;
                    var r = m.sibling,
                      y = m.return;
                    Sj(m);
                    if (m === l) {
                      V = null;
                      break;
                    }
                    if (null !== r) {
                      r.return = y;
                      V = r;
                      break;
                    }
                    V = y;
                  }
                }
              }
              var n = f.alternate;
              if (null !== n) {
                var t = n.child;
                if (null !== t) {
                  n.child = null;
                  do {
                    var J = t.sibling;
                    t.sibling = null;
                    t = J;
                  } while (null !== t);
                }
              }
              V = f;
            }
          }
          if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;else b: for (; null !== V;) {
            f = V;
            if (0 !== (f.flags & 2048)) switch (f.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f, f.return);
            }
            var x = f.sibling;
            if (null !== x) {
              x.return = f.return;
              V = x;
              break b;
            }
            V = f.return;
          }
        }
        var w = a.current;
        for (V = w; null !== V;) {
          g = V;
          var u = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;else b: for (g = w; null !== V;) {
            h = V;
            if (0 !== (h.flags & 2048)) try {
              switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h);
              }
            } catch (na) {
              W(h, h.return, na);
            }
            if (h === g) {
              V = null;
              break b;
            }
            var F = h.sibling;
            if (null !== F) {
              F.return = h.return;
              V = F;
              break b;
            }
            V = h.return;
          }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {}
        d = !0;
      }
      return d;
    } finally {
      C = c, ok.transition = b;
    }
  }
  return !1;
}
function Xk(a, b, c) {
  b = Ji(c, b);
  b = Ni(a, b, 1);
  a = nh(a, b, 1);
  b = R();
  null !== a && (Ac(a, 1, b), Dk(a, b));
}
function W(a, b, c) {
  if (3 === a.tag) Xk(a, a, c);else for (; null !== b;) {
    if (3 === b.tag) {
      Xk(b, a, c);
      break;
    } else if (1 === b.tag) {
      var d = b.stateNode;
      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
        a = Ji(c, a);
        a = Qi(b, a, 1);
        b = nh(b, a, 1);
        a = R();
        null !== b && (Ac(b, 1, a), Dk(b, a));
        break;
      }
    }
    b = b.return;
  }
}
function Ti(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = R();
  a.pingedLanes |= a.suspendedLanes & c;
  Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
  Dk(a, b);
}
function Yk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = R();
  a = ih(a, b);
  null !== a && (Ac(a, b, c), Dk(a, c));
}
function uj(a) {
  var b = a.memoizedState,
    c = 0;
  null !== b && (c = b.retryLane);
  Yk(a, c);
}
function bk(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Yk(a, c);
}
var Vk;
Vk = function (a, b, c) {
  if (null !== a) {
    if (a.memoizedProps !== b.pendingProps || Wf.current) dh = !0;else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = !1, yj(a, b, c);
      dh = 0 !== (a.flags & 131072) ? !0 : !1;
    }
  } else dh = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      ij(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      ch(b, c);
      e = Nh(null, b, d, a, e, c);
      var f = Sh();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        ij(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = Zk(d);
        a = Ci(d, a);
        switch (e) {
          case 0:
            b = cj(null, b, d, a, c);
            break a;
          case 1:
            b = hj(null, b, d, a, c);
            break a;
          case 11:
            b = Yi(null, b, d, a, c);
            break a;
          case 14:
            b = $i(null, b, d, Ci(d.type, a), c);
            break a;
        }
        throw Error(p(306, d, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
    case 3:
      a: {
        kj(b);
        if (null === a) throw Error(p(387));
        d = b.pendingProps;
        f = b.memoizedState;
        e = f.element;
        lh(a, b);
        qh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f.isDehydrated) {
          if (f = {
            element: d,
            isDehydrated: !1,
            cache: g.cache,
            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
            transitions: g.transitions
          }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
            e = Ji(Error(p(423)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ji(Error(p(424)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Vg(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
        } else {
          Ig();
          if (d === e) {
            b = Zi(a, b, c);
            break a;
          }
          Xi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return oj(a, b, c);
    case 4:
      return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
    case 7:
      return Xi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f = b.memoizedProps;
        g = e.value;
        G(Wg, d._currentValue);
        d._currentValue = g;
        if (null !== f) if (He(f.value, g)) {
          if (f.children === e.children && !Wf.current) {
            b = Zi(a, b, c);
            break a;
          }
        } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
          var h = f.dependencies;
          if (null !== h) {
            g = f.child;
            for (var k = h.firstContext; null !== k;) {
              if (k.context === d) {
                if (1 === f.tag) {
                  k = mh(-1, c & -c);
                  k.tag = 2;
                  var l = f.updateQueue;
                  if (null !== l) {
                    l = l.shared;
                    var m = l.pending;
                    null === m ? k.next = k : (k.next = m.next, m.next = k);
                    l.pending = k;
                  }
                }
                f.lanes |= c;
                k = f.alternate;
                null !== k && (k.lanes |= c);
                bh(f.return, c, b);
                h.lanes |= c;
                break;
              }
              k = k.next;
            }
          } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
            g = f.return;
            if (null === g) throw Error(p(341));
            g.lanes |= c;
            h = g.alternate;
            null !== h && (h.lanes |= c);
            bh(g, c, b);
            g = f.sibling;
          } else g = f.child;
          if (null !== g) g.return = f;else for (g = f; null !== g;) {
            if (g === b) {
              g = null;
              break;
            }
            f = g.sibling;
            if (null !== f) {
              f.return = g.return;
              g = f;
              break;
            }
            g = g.return;
          }
          f = g;
        }
        Xi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
    case 15:
      return bj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, !0, a, c);
    case 19:
      return xj(a, b, c);
    case 22:
      return dj(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Fk(a, b) {
  return ac(a, b);
}
function $k(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new $k(a, b, c, d);
}
function aj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Zk(a) {
  if ("function" === typeof a) return aj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function Pg(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : {
    lanes: b.lanes,
    firstContext: b.firstContext
  };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Rg(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if ("function" === typeof a) aj(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
    case ya:
      return Tg(c.children, e, f, b);
    case za:
      g = 8;
      e |= 8;
      break;
    case Aa:
      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
    case Ea:
      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
    case Fa:
      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
    case Ia:
      return pj(c, e, f, b);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g = 10;
          break a;
        case Ca:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga:
          g = 14;
          break a;
        case Ha:
          g = 16;
          d = null;
          break a;
      }
      throw Error(p(130, null == a ? a : typeof a, ""));
  }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function Tg(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function pj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = {
    isHidden: !1
  };
  return a;
}
function Qg(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function Sg(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = {
    containerInfo: a.containerInfo,
    pendingChildren: null,
    implementation: a.implementation
  };
  return b;
}
function al(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a, b, c, d, e, f, g, h, k) {
  a = new al(a, b, c, h, k);
  1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
  f = Bg(3, null, null, b);
  a.current = f;
  f.stateNode = a;
  f.memoizedState = {
    element: d,
    isDehydrated: c,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  };
  kh(f);
  return a;
}
function cl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: wa,
    key: null == d ? null : "" + d,
    children: a,
    containerInfo: b,
    implementation: c
  };
}
function dl(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c)) return bg(a, c, b);
  }
  return b;
}
function el(a, b, c, d, e, f, g, h, k) {
  a = bl(c, d, !0, a, e, f, g, h, k);
  a.context = dl(null);
  c = a.current;
  d = R();
  e = yi(c);
  f = mh(d, e);
  f.callback = void 0 !== b && null !== b ? b : null;
  nh(c, f, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Dk(a, d);
  return a;
}
function fl(a, b, c, d) {
  var e = b.current,
    f = R(),
    g = yi(e);
  c = dl(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = mh(f, g);
  b.payload = {
    element: a
  };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = nh(e, b, g);
  null !== a && (gi(a, e, g, f), oh(a, e, g));
  return g;
}
function gl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hl(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function il(a, b) {
  hl(a, b);
  (a = a.alternate) && hl(a, b);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function (a) {
  console.error(a);
};
function ll(a) {
  this._internalRoot = a;
}
ml.prototype.render = ll.prototype.render = function (a) {
  var b = this._internalRoot;
  if (null === b) throw Error(p(409));
  fl(a, b, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function () {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Rk(function () {
      fl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function ml(a) {
  this._internalRoot = a;
}
ml.prototype.unstable_scheduleHydration = function (a) {
  if (a) {
    var b = Hc();
    a = {
      blockedOn: null,
      target: a,
      priority: b
    };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function pl() {}
function ql(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f = d;
      d = function () {
        var a = gl(g);
        f.call(a);
      };
    }
    var g = el(b, d, a, 0, null, !1, !1, "", pl);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk();
    return g;
  }
  for (; e = a.lastChild;) a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function () {
      var a = gl(k);
      h.call(a);
    };
  }
  var k = bl(a, 0, !1, null, null, !1, !1, "", pl);
  a._reactRootContainer = k;
  a[uf] = k.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Rk(function () {
    fl(b, k, c, d);
  });
  return k;
}
function rl(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f;
    if ("function" === typeof e) {
      var h = e;
      e = function () {
        var a = gl(g);
        h.call(a);
      };
    }
    fl(b, g, a, e);
  } else g = ql(c, b, a, e, d);
  return gl(g);
}
Ec = function (a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
      }
      break;
    case 13:
      Rk(function () {
        var b = ih(a, 1);
        if (null !== b) {
          var c = R();
          gi(b, a, 1, c);
        }
      }), il(a, 1);
  }
};
Fc = function (a) {
  if (13 === a.tag) {
    var b = ih(a, 134217728);
    if (null !== b) {
      var c = R();
      gi(b, a, 134217728, c);
    }
    il(a, 134217728);
  }
};
Gc = function (a) {
  if (13 === a.tag) {
    var b = yi(a),
      c = ih(a, b);
    if (null !== c) {
      var d = R();
      gi(c, a, b, d);
    }
    il(a, b);
  }
};
Hc = function () {
  return C;
};
Ic = function (a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function (a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode;) c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e) throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, !1);
  }
};
Gb = Qk;
Hb = Rk;
var sl = {
    usingClientEntryPoint: !1,
    Events: [Cb, ue, Db, Eb, Fb, Qk]
  },
  tl = {
    findFiberByHostInstance: Wc,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  };
var ul = {
  bundleType: tl.bundleType,
  version: tl.version,
  rendererPackageName: tl.rendererPackageName,
  rendererConfig: tl.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: ua.ReactCurrentDispatcher,
  findHostInstanceByFiber: function (a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  },
  findFiberByHostInstance: tl.findFiberByHostInstance || jl,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a) {}
}
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
exports.createPortal = function (a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b)) throw Error(p(200));
  return cl(a, b, null, c);
};
exports.createRoot = function (a, b) {
  if (!nl(a)) throw Error(p(299));
  var c = !1,
    d = "",
    e = kl;
  null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = bl(a, 1, !1, null, null, c, !1, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ll(b);
};
exports.findDOMNode = function (a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render) throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
exports.flushSync = function (a) {
  return Rk(a);
};
exports.hydrate = function (a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, !0, c);
};
exports.hydrateRoot = function (a, b, c) {
  if (!nl(a)) throw Error(p(405));
  var d = null != c && c.hydratedSources || null,
    e = !1,
    f = "",
    g = kl;
  null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = el(b, null, a, 1, null != c ? c : null, e, !1, f, g);
  a[uf] = b.current;
  sf(a);
  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
  return new ml(b);
};
exports.render = function (a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, !1, c);
};
exports.unmountComponentAtNode = function (a) {
  if (!ol(a)) throw Error(p(40));
  return a._reactRootContainer ? (Rk(function () {
    rl(null, null, a, !1, function () {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), !0) : !1;
};
exports.unstable_batchedUpdates = Qk;
exports.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
  if (!ol(c)) throw Error(p(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
  return rl(a, b, c, !1, d);
};
exports.version = "18.3.1-next-f1338f8080-20240426";

/***/ },

/***/ 391
(__unused_webpack_module, exports, __webpack_require__) {



var m = __webpack_require__(950);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else // removed by dead control flow
{ var i; }

/***/ },

/***/ 950
(module, __unused_webpack_exports, __webpack_require__) {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }
  if (false) // removed by dead control flow
{}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}
if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(730);
} else // removed by dead control flow
{}

/***/ },

/***/ 153
(__unused_webpack_module, exports, __webpack_require__) {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__(43),
  k = Symbol.for("react.element"),
  l = Symbol.for("react.fragment"),
  m = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function q(c, a, g) {
  var b,
    d = {},
    e = null,
    h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return {
    $$typeof: k,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n.current
  };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;

/***/ },

/***/ 202
(__unused_webpack_module, exports) {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var l = Symbol.for("react.element"),
  n = Symbol.for("react.portal"),
  p = Symbol.for("react.fragment"),
  q = Symbol.for("react.strict_mode"),
  r = Symbol.for("react.profiler"),
  t = Symbol.for("react.provider"),
  u = Symbol.for("react.context"),
  v = Symbol.for("react.forward_ref"),
  w = Symbol.for("react.suspense"),
  x = Symbol.for("react.memo"),
  y = Symbol.for("react.lazy"),
  z = Symbol.iterator;
function A(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z && a[z] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  C = Object.assign,
  D = {};
function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {}
F.prototype = E.prototype;
function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K = {
    current: null
  },
  L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function M(a, b, e) {
  var d,
    c = {},
    k = null,
    h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return {
    $$typeof: l,
    type: a,
    key: k,
    ref: h,
    props: c,
    _owner: K.current
  };
}
function N(a, b) {
  return {
    $$typeof: l,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}
function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}
var P = /\/+/g;
function Q(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;
    case "object":
      switch (a.$$typeof) {
        case l:
        case n:
          h = !0;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
    return a;
  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = d + Q(k, g);
    h += R(k, b, e, f, c);
  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S(a, b, e) {
  if (null == a) return a;
  var d = [],
    c = 0;
  R(a, d, "", "", function (a) {
    return b.call(e, a, c++);
  });
  return d;
}
function T(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function (b) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
    }, function (b) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U = {
    current: null
  },
  V = {
    transition: null
  },
  W = {
    ReactCurrentDispatcher: U,
    ReactCurrentBatchConfig: V,
    ReactCurrentOwner: K
  };
function X() {
  throw Error("act(...) is not supported in production builds of React.");
}
exports.Children = {
  map: S,
  forEach: function (a, b, e) {
    S(a, function () {
      b.apply(this, arguments);
    }, e);
  },
  count: function (a) {
    var b = 0;
    S(a, function () {
      b++;
    });
    return b;
  },
  toArray: function (a) {
    return S(a, function (a) {
      return a;
    }) || [];
  },
  only: function (a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  }
};
exports.Component = E;
exports.Fragment = p;
exports.Profiler = r;
exports.PureComponent = G;
exports.StrictMode = q;
exports.Suspense = w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
exports.act = X;
exports.cloneElement = function (a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props),
    c = a.key,
    k = a.ref,
    h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = K.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
    d.children = g;
  }
  return {
    $$typeof: l,
    type: a.type,
    key: c,
    ref: k,
    props: d,
    _owner: h
  };
};
exports.createContext = function (a) {
  a = {
    $$typeof: u,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  };
  a.Provider = {
    $$typeof: t,
    _context: a
  };
  return a.Consumer = a;
};
exports.createElement = M;
exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
exports.createRef = function () {
  return {
    current: null
  };
};
exports.forwardRef = function (a) {
  return {
    $$typeof: v,
    render: a
  };
};
exports.isValidElement = O;
exports.lazy = function (a) {
  return {
    $$typeof: y,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: T
  };
};
exports.memo = function (a, b) {
  return {
    $$typeof: x,
    type: a,
    compare: void 0 === b ? null : b
  };
};
exports.startTransition = function (a) {
  var b = V.transition;
  V.transition = {};
  try {
    a();
  } finally {
    V.transition = b;
  }
};
exports.unstable_act = X;
exports.useCallback = function (a, b) {
  return U.current.useCallback(a, b);
};
exports.useContext = function (a) {
  return U.current.useContext(a);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (a) {
  return U.current.useDeferredValue(a);
};
exports.useEffect = function (a, b) {
  return U.current.useEffect(a, b);
};
exports.useId = function () {
  return U.current.useId();
};
exports.useImperativeHandle = function (a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};
exports.useInsertionEffect = function (a, b) {
  return U.current.useInsertionEffect(a, b);
};
exports.useLayoutEffect = function (a, b) {
  return U.current.useLayoutEffect(a, b);
};
exports.useMemo = function (a, b) {
  return U.current.useMemo(a, b);
};
exports.useReducer = function (a, b, e) {
  return U.current.useReducer(a, b, e);
};
exports.useRef = function (a) {
  return U.current.useRef(a);
};
exports.useState = function (a) {
  return U.current.useState(a);
};
exports.useSyncExternalStore = function (a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};
exports.useTransition = function () {
  return U.current.useTransition();
};
exports.version = "18.3.1";

/***/ },

/***/ 43
(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(202);
} else // removed by dead control flow
{}

/***/ },

/***/ 579
(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(153);
} else // removed by dead control flow
{}

/***/ },

/***/ 234
(__unused_webpack_module, exports) {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function f(a, b) {
  var c = a.length;
  a.push(b);
  a: for (; 0 < c;) {
    var d = c - 1 >>> 1,
      e = a[d];
    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}
function h(a) {
  return 0 === a.length ? null : a[0];
}
function k(a) {
  if (0 === a.length) return null;
  var b = a[0],
    c = a.pop();
  if (c !== b) {
    a[0] = c;
    a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
      var m = 2 * (d + 1) - 1,
        C = a[m],
        n = m + 1,
        x = a[n];
      if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
    }
  }
  return b;
}
function g(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
  var l = performance;
  exports.unstable_now = function () {
    return l.now();
  };
} else {
  var p = Date,
    q = p.now();
  exports.unstable_now = function () {
    return p.now() - q;
  };
}
var r = [],
  t = [],
  u = 1,
  v = null,
  y = 3,
  z = !1,
  A = !1,
  B = !1,
  D = "function" === typeof setTimeout ? setTimeout : null,
  E = "function" === typeof clearTimeout ? clearTimeout : null,
  F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
function G(a) {
  for (var b = h(t); null !== b;) {
    if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
    b = h(t);
  }
}
function H(a) {
  B = !1;
  G(a);
  if (!A) if (null !== h(r)) A = !0, I(J);else {
    var b = h(t);
    null !== b && K(H, b.startTime - a);
  }
}
function J(a, b) {
  A = !1;
  B && (B = !1, E(L), L = -1);
  z = !0;
  var c = y;
  try {
    G(b);
    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
      var d = v.callback;
      if ("function" === typeof d) {
        v.callback = null;
        y = v.priorityLevel;
        var e = d(v.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? v.callback = e : v === h(r) && k(r);
        G(b);
      } else k(r);
      v = h(r);
    }
    if (null !== v) var w = !0;else {
      var m = h(t);
      null !== m && K(H, m.startTime - b);
      w = !1;
    }
    return w;
  } finally {
    v = null, y = c, z = !1;
  }
}
var N = !1,
  O = null,
  L = -1,
  P = 5,
  Q = -1;
function M() {
  return exports.unstable_now() - Q < P ? !1 : !0;
}
function R() {
  if (null !== O) {
    var a = exports.unstable_now();
    Q = a;
    var b = !0;
    try {
      b = O(!0, a);
    } finally {
      b ? S() : (N = !1, O = null);
    }
  } else N = !1;
}
var S;
if ("function" === typeof F) S = function () {
  F(R);
};else if ("undefined" !== typeof MessageChannel) {
  var T = new MessageChannel(),
    U = T.port2;
  T.port1.onmessage = R;
  S = function () {
    U.postMessage(null);
  };
} else S = function () {
  D(R, 0);
};
function I(a) {
  O = a;
  N || (N = !0, S());
}
function K(a, b) {
  L = D(function () {
    a(exports.unstable_now());
  }, b);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};
exports.unstable_continueExecution = function () {
  A || z || (A = !0, I(J));
};
exports.unstable_forceFrameRate = function (a) {
  0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
};
exports.unstable_getCurrentPriorityLevel = function () {
  return y;
};
exports.unstable_getFirstCallbackNode = function () {
  return h(r);
};
exports.unstable_next = function (a) {
  switch (y) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;
    default:
      b = y;
  }
  var c = y;
  y = b;
  try {
    return a();
  } finally {
    y = c;
  }
};
exports.unstable_pauseExecution = function () {};
exports.unstable_requestPaint = function () {};
exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      a = 3;
  }
  var c = y;
  y = a;
  try {
    return b();
  } finally {
    y = c;
  }
};
exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();
  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
  switch (a) {
    case 1:
      var e = -1;
      break;
    case 2:
      e = 250;
      break;
    case 5:
      e = 1073741823;
      break;
    case 4:
      e = 1E4;
      break;
    default:
      e = 5E3;
  }
  e = c + e;
  a = {
    id: u++,
    callback: b,
    priorityLevel: a,
    startTime: c,
    expirationTime: e,
    sortIndex: -1
  };
  c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
  return a;
};
exports.unstable_shouldYield = M;
exports.unstable_wrapCallback = function (a) {
  var b = y;
  return function () {
    var c = y;
    y = b;
    try {
      return a.apply(this, arguments);
    } finally {
      y = c;
    }
  };
};

/***/ },

/***/ 853
(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(234);
} else // removed by dead control flow
{}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(43);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(391);
;// ./src/App.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const App = ({});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(579);
;// ./src/App.jsx
/* ═══════════════════════════════════════════════════════════════════════
   EDITABLE CONTENT — Rebecca, change any text below!
   To edit: Go to GitHub → src/App.jsx → pencil icon → find this section
   → change text → click "Commit changes". Site updates automatically.
   ═══════════════════════════════════════════════════════════════════════ */const SITE_CONTENT={/* HERO SECTION */tagline:"Photography \u00b7 Est. 2009 \u00b7 Michigan",headline:"Your story is",headlineAccent:"worth telling",heroDescription:"I'm Rebecca, a Michigan mom and natural light photographer, specializing in family and high school senior sessions. I am passionate about photography and absolutely love capturing special moments for my clients.",heroButton:"Capture Your Moment",/* ABOUT SECTION */aboutTagline:"Meet Rebecca",aboutTitle:"It's All About Connection",aboutBio:"I started bella vita photography back in 2009 with a camera, a marketing degree from Davenport University, and a heart full of love for freezing beautiful moments in time. Over fifteen years later, I still get butterflies before every single session.",aboutBio2:"I'm a natural light, on location photographer. There's something magical about Michigan seasons \u2014 the way the flowers bloom in the spring and the trees change colors in the fall. I'm not a fan of winter (like at all), but I even get excited about those outdoor sessions in the snow!",aboutStats:[{number:"500+",label:"Sessions"},{number:"15+",label:"Years"},{number:"5.0",label:"Google"}],/* PORTFOLIO SECTION */portfolioTagline:"",portfolioTitle:"My Portfolio",portfolioDescription:"Most sessions start with someone saying, \"I hate myself in pictures\" and ending with \"OMG...I love these.\"",/* SERVICES SECTION */servicesTagline:"What I Offer",servicesTitle:"Collections",/* AVAILABILITY BANNER */availabilityLabel:"\u2727 Now Booking",availabilityTitle:"Class of 2027 Seniors",availabilitySlots:[{label:"Senior Slots",count:"4",sub:"remaining"},{label:"Family Slots",count:"6",sub:"remaining"},{label:"Mini Sessions",count:"Oct 19",sub:"next date"}],/* PRODUCTS SECTION */productsTagline:"Beyond the Gallery",productsTitle:"Products",/* GIFT CERTIFICATES */giftTitle:"Give the Gift of",giftTitleAccent:"bella",giftDescription:"Your recipient(s) will receive a personalized bella digital gift certificate straight to their inbox.",/* TESTIMONIALS */testimonialsTagline:"Kind Words",testimonialsTitle:"What Clients Say",/* FAQ */faqTagline:"Common Questions",faqTitle:"Frequently Asked Questions",/* CONTACT */contactTagline:"Let's Connect",contactTitle:"I Can't Wait to Meet You",contactDescription:"Tell me your story. I read every message personally and reply within 24 hours.",/* QUOTE */quote:"Every session is designed around your style, your personality, your story.",quoteAttribution:"\u2014 Rebecca, Est. 2009",/* PROCESS STEPS */processSteps:[{step:"01",title:"Let's Chat",icon:"\u2709",desc:"Fill out the contact form or email me. I'll reply within 24 hours with availability and ideas. No pressure \u2014 just a conversation."},{step:"02",title:"The Session",icon:"\u2600",desc:"We'll choose a beautiful location, you show up and be yourselves. I'll guide you through it and capture every real moment."},{step:"03",title:"Your Gallery",icon:"\u2727",desc:"Within 2\u20133 weeks you'll receive a private online gallery and print release. You can download and share - all from the comfort of your own home. (Products such as canvas gallery wraps, acrylic and metals, even prints are also available...just reach out)."}],/* INSTAGRAM */instagramHandle:"@bellavitaphotography2",instagramUrl:"https://www.instagram.com/bellavitaphotography2/",facebookUrl:"https://www.facebook.com/bellavitaphotography2",/* FOOTER */footerTagline:"Natural light portrait photography for seniors and families in Michigan. Est. 2009.",email:"bellavitaphoto@rocketmail.com",/* PAYMENT METHODS — Rebecca, update these with your own links/handles! */payments:{venmo:{handle:"@Rebecca-BellaVita",url:"https://venmo.com/Rebecca-BellaVita"},paypal:{handle:"bellavitaphoto@rocketmail.com",url:"https://paypal.me/bellavitaphoto"},zelle:{handle:"bellavitaphoto@rocketmail.com"}}};/* ─── PORTFOLIO DATA ─── *//* REPLACE these URLs with your real photos. For max quality, use full-resolution URLs
   from your image host (Cloudinary, SmugMug, etc.) without width/quality limits.
   "src" = display size, "full" = download/lightbox size */const PORTFOLIO=[{id:1,src:"/Senior1.JPG",full:"/Senior1.JPG",title:"Senior Portrait",category:"Seniors",aspect:"landscape"},{id:2,src:"/Family1.JPG",full:"/Family1.JPG",title:"Family Session",category:"Families",aspect:"landscape"},{id:3,src:"/Maternity1.JPG",full:"/Maternity1.JPG",title:"Gender Reveal",category:"Milestones & Minis",aspect:"landscape"},{id:4,src:"/Newborn1.JPG",full:"/Newborn1.JPG",title:"Newborn",category:"Milestones & Minis",aspect:"landscape"},{id:5,src:"/Engagement1.JPG",full:"/Engagement1.JPG",title:"The Proposal",category:"Milestones & Minis",aspect:"landscape"},{id:6,src:"/Wedding1.JPG",full:"/Wedding1.JPG",title:"Wedding Day",category:"Weddings",aspect:"landscape"}];const TESTIMONIALS=[{name:"The Martinez Family",text:"Rebecca is the kind of person who remembers your kids\u2019 names, asks about your dog, and somehow captures your family in a way that makes you think \u2018oh wow, we actually look like THAT.\u2019 Our Kensington session last fall is framed all over our house now. Obsessed.",event:"Annual Family Session \u00b7 Brighton"},{name:"Jennifer, Mom of Emma (\u201925)",text:"My daughter told me she\u2019d hate the whole thing. She ended up not wanting to leave. Rebecca played her favorite music, hyped her up the whole time, and made her feel like a literal supermodel. Every single photo from Island Lake is a keeper.",event:"Senior Portrait Session \u00b7 Lakeland HS"},{name:"The Thompsons",text:"We\u2019ve been going back to Rebecca every year since 2017. She\u2019s basically part of our family at this point. Her natural light style makes every session feel effortless, and the photos somehow keep getting better every single year.",event:"Family Sessions \u00b7 Howell"}];const SERVICES=[{category:"Senior Sessions",icon:"\u2727",collections:[{name:"Senior Mini Session",price:"$350",desc:"45 minutes. 1 location. 15 digital images \u2014 fast, fun, and affordable."},{name:"Senior Full Session",price:"$600",desc:"The ultimate senior experience \u2014 2 hours. 1 location. 25+ digital images. $20 product credit."},{name:"Senior Split Session",price:"$700",desc:"Same full session split across two dates \u2014 perfect for seasonal variety or a second look.\n2 sessions. 2 dates. 50+ digital images. $30 product credit."},{name:"Senior DUO Session",price:"$700",desc:"Grab your best friend! Two seniors, one epic session. Individual and duo shots included.\n2 hours. 1 location. 25+ digital images each. $20 product credit each."}]},{category:"Family Sessions",icon:"\u2727",collections:[{name:"Family Mini Session",price:"$175",desc:"Perfect for holiday cards, announcements or just because your kiddos are growing too fast!\n30 minutes. 1 location. 10 digital images."},{name:"Family Full Session",price:"$300",desc:"Bring the family and let's have some fun!\n1 hour. 1 location. 25+ digital images. $20 product credit."},{name:"Milestone Sessions",price:"$300",desc:"Maternity, engagements, birthdays - life's biggest chapters.\n1 hour. 1 location. 25+ digital images. $20 product credit."}]},{category:"Weddings",icon:"\u2727",collections:[{name:"Silver",price:"$1200",desc:"6 hours of coverage on your wedding day."},{name:"Gold",price:"$2500",desc:"engagement session. 8 hours of coverage on your wedding day. $50 product credit."},{name:"Platinum",price:"$3500",desc:"engagement session. full day coverage on your wedding day. second photographer. $100 product credit."}]}];const FAQS=[{q:"How far in advance should I book?",a:"As soon as you know what season you would like, please reach out to get on the schedule. For senior portraits, 3\u20136 months ahead is ideal. Family sessions usually book 1\u20133 months out. Mini sessions sell out within DAYS of advertising a special (due to limited spots). Follow on Facebook and Instagram @bellavitaphotography2 or join my email list for first dibs!"},{q:"How many outfit changes can I bring?",a:"Depending on the session you choose...Senior's should bring up to 3 outfit changes. For families, one coordination look usually works. If you are booking a family full, a backup for the kiddos is always a good idea. Feel free to send me option choices if you are looking for some input. You will receive a detailed style guide with tips once you have booked your session!"},{q:"What happens if it rains?",a:"Welcome to Michigan! I\u2019ll text you 24 hours before and we\u2019ll reschedule \u2014 no extra charge. A little overcast? Chef\u2019s kiss for photos."},{q:"Where do sessions take place?",a:"Depending on the season and your vibe...I've got lots of ideas for locations. I have shot at dozens of locations in Southeast Michigan and beyond and I am always up for new places if you have a specific location in mind!"},{q:"When will I receive my photos?",a:"I will send you a link to your private gallery, along with a print release within 2\u20133 weeks. You can view, download and share the link with family and friends. This will allow parents, grandparents and family members to download their favorites as well and even order products if they chose."}];const GOOGLE_REVIEWS=[{name:"Sarah M.",stars:5,text:"If you\u2019re on the fence \u2014 just book her. My daughter came home glowing. The photos are unreal.",date:"2 months ago"},{name:"The Nguyen Family",stars:5,text:"Tried two other photographers before Rebecca. Night and day difference. Her natural light style is SO much better than a studio.",date:"3 months ago"},{name:"Amanda K.",stars:5,text:"The whole experience is incredible start to finish. She sends a style guide, texts about outfits, remembers every detail.",date:"1 month ago"},{name:"David & Lisa T.",stars:5,text:"She photographed our family of 7 including a toddler who refused to sit still and a teenager who refused to smile. Amazing shots of BOTH.",date:"4 months ago"}];const PRODUCTS=[{name:"Gallery Wraps",description:"High quality, rich, textured canvas products that are fade resistant and ready to hang.",icon:"\u2727"},{name:"Acrylics",description:"Crafted premium plexiglass showcasing vivid and modern design.",icon:"\u2727"},{name:"Metals",description:"Sleek and modern aluminum products that are fade and scratch resistant.",icon:"\u2727"},{name:"Albums",description:"Personalized photobooks to luxurious Heirloom albums.",icon:"\u2727"},{name:"Grad Gear",description:"Announcements, Invites, Banners and Thank you cards featuring your senior's favorite images.",icon:"\u2727"},{name:"Other Awesome Goods",description:"",icon:"\u2727"}];const DEFAULT_CLIENT_GALLERIES=[{id:"g1",clientName:"Emma Richardson \u2013 Lakeland HS \u201926",sessionType:"Senior Sessions",date:"2025-10-15",password:"emma2026",coverImage:"https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&q=85",images:[{src:"https://images.unsplash.com/photo-1517677129300-07b130802f46?w=1200&q=90",full:"https://images.unsplash.com/photo-1517677129300-07b130802f46?w=2400&q=95",title:"Golden Hour"},{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=90",full:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=2400&q=95",title:"Sunlit"},{src:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=90",full:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=2400&q=95",title:"Confident"},{src:"https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=1200&q=90",full:"https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=2400&q=95",title:"Dreamer"},{src:"https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=1200&q=90",full:"https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=2400&q=95",title:"Wildflower"},{src:"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=90",full:"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=2400&q=95",title:"Downtown"}]},{id:"g2",clientName:"The Martinez Family",sessionType:"Family Session",date:"2025-09-28",password:"martinez2025",coverImage:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85",images:[{src:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=90",full:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=2400&q=95",title:"All Together"},{src:"https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&q=90",full:"https://images.unsplash.com/photo-1609220136736-443140cffec6?w=2400&q=95",title:"Golden Light"},{src:"https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=90",full:"https://images.unsplash.com/photo-1511895426328-dc8714191300?w=2400&q=95",title:"Our World"},{src:"https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=1200&q=90",full:"https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=2400&q=95",title:"Rooted"},{src:"https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=1200&q=90",full:"https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?w=2400&q=95",title:"Tiny Hands"}]},{id:"g3",clientName:"Jake Thompson",sessionType:"Senior Sessions",date:"2025-11-02",password:"jake2026",coverImage:"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=85",images:[{src:"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=90",full:"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=2400&q=95",title:"Urban Cool"},{src:"https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=1200&q=90",full:"https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=2400&q=95",title:"Natural"},{src:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=90",full:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=2400&q=95",title:"Light Study"}]}];/* ─── UTILITY HOOKS ─── */function useInView(){let threshold=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0.15;const ref=(0,react.useRef)(null);const[isVisible,setIsVisible]=(0,react.useState)(false);(0,react.useEffect)(()=>{const observer=new IntersectionObserver(_ref=>{let[entry]=_ref;if(entry.isIntersecting){setIsVisible(true);observer.unobserve(entry.target);}},{threshold});if(ref.current)observer.observe(ref.current);return()=>observer.disconnect();},[threshold]);return[ref,isVisible];}function AnimatedSection(_ref2){let{children,className="",delay=0}=_ref2;const[ref,isVisible]=useInView();return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:ref,className:className,style:{opacity:isVisible?1:0,transform:isVisible?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s cubic-bezier(0.22,1,0.36,1) "+delay+"s, transform 0.8s cubic-bezier(0.22,1,0.36,1) "+delay+"s"},children:children});}/* ─── PROGRESSIVE IMAGE (blur-up) ─── */function ProgressiveImage(_ref3){let{src,alt,style={},className="",onClick,onMouseEnter,onMouseLeave,tabIndex,role,onKeyDown,"aria-label":ariaLabel}=_ref3;const[loaded,setLoaded]=(0,react.useState)(false);const[inView,setInView]=(0,react.useState)(false);const containerRef=(0,react.useRef)(null);const tinyUrl=src.replace(/w=\d+/,"w=20").replace(/q=\d+/,"q=10");(0,react.useEffect)(()=>{if(typeof IntersectionObserver==="undefined"){setInView(true);return;}const observer=new IntersectionObserver(_ref4=>{let[entry]=_ref4;if(entry.isIntersecting){setInView(true);observer.unobserve(entry.target);}},{rootMargin:"200px"});if(containerRef.current)observer.observe(containerRef.current);// Fallback: if observer hasn't fired in 1.5s, load anyway (iframe/preview environments)
const fallback=setTimeout(()=>setInView(true),1500);return()=>{observer.disconnect();clearTimeout(fallback);};},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{ref:containerRef,style:{position:"relative",overflow:"hidden",...style},className:className,onClick:onClick,onMouseEnter:onMouseEnter,onMouseLeave:onMouseLeave,tabIndex:tabIndex,role:role,onKeyDown:onKeyDown,"aria-label":ariaLabel,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:tinyUrl,alt:"","aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"blur(20px)",transform:"scale(1.1)",opacity:loaded?0:1,transition:"opacity 0.6s ease"}}),inView&&/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:src,alt:alt,loading:"lazy",onLoad:()=>setLoaded(true),style:{width:"100%",height:"100%",objectFit:"cover",display:"block",opacity:loaded?1:0,transition:"opacity 0.6s cubic-bezier(0.22,1,0.36,1)"}})]});}/* ─── DOWNLOAD & SHARE HELPERS ─── */async function downloadImage(url,filename){try{const r=await fetch(url,{mode:"cors"});const b=await r.blob();const u=URL.createObjectURL(b);const a=document.createElement("a");a.href=u;a.download=filename||"bella-vita-photo.jpg";document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);}catch{window.open(url,"_blank");}}async function shareImage(title,url){if(navigator.share){try{await navigator.share({title:"bella vita photography \u2014 "+title,url});}catch{}}else{try{await navigator.clipboard.writeText(url);alert("Link copied to clipboard!");}catch{window.open(url,"_blank");}}}/* ─── LIGHTBOX ─── */function Lightbox(_ref5){let{image,onClose,onDownload,onShare,onPrev,onNext,hasPrev,hasNext,currentIndex,totalCount}=_ref5;const touchStartX=(0,react.useRef)(null);(0,react.useEffect)(()=>{if(!image)return;const h=e=>{if(e.key==="Escape")onClose();if(e.key==="ArrowLeft"&&onPrev&&hasPrev)onPrev();if(e.key==="ArrowRight"&&onNext&&hasNext)onNext();};window.addEventListener("keydown",h);return()=>window.removeEventListener("keydown",h);},[onClose,onPrev,onNext,hasPrev,hasNext,image]);if(!image)return null;const fullUrl=image.full||image.src;const arrowBtnStyle=side=>({position:"absolute",top:"50%",[side]:"16px",transform:"translateY(-50%)",background:"rgba(255,255,255,0.85)",border:"none",borderRadius:"50%",width:"44px",height:"44px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",color:"var(--text)",backdropFilter:"blur(8px)",boxShadow:"0 2px 12px rgba(0,0,0,0.08)",transition:"all 0.3s ease",opacity:0.7,zIndex:2});const handleTouchStart=e=>{touchStartX.current=e.touches[0].clientX;};const handleTouchEnd=e=>{if(touchStartX.current===null)return;const diff=touchStartX.current-e.changedTouches[0].clientX;if(Math.abs(diff)>60){if(diff>0&&onNext&&hasNext)onNext();if(diff<0&&onPrev&&hasPrev)onPrev();}touchStartX.current=null;};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{onClick:onClose,onTouchStart:handleTouchStart,onTouchEnd:handleTouchEnd,style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(255,255,255,0.96)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out",animation:"bvFadeIn 0.35s ease",touchAction:"pan-y"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("img",{src:fullUrl,alt:image.title,style:{maxWidth:"85vw",maxHeight:"72vh",objectFit:"contain",borderRadius:"2px",boxShadow:"0 20px 60px rgba(0,0,0,0.12)",animation:"bvScaleIn 0.4s cubic-bezier(0.22,1,0.36,1)"}},fullUrl),onPrev&&hasPrev&&/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bv-lightbox-arrows",onClick:e=>{e.stopPropagation();onPrev();},"aria-label":"Previous photo",style:arrowBtnStyle("left"),onMouseEnter:e=>e.currentTarget.style.opacity="1",onMouseLeave:e=>e.currentTarget.style.opacity="0.7",children:"\u2039"}),onNext&&hasNext&&/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bv-lightbox-arrows",onClick:e=>{e.stopPropagation();onNext();},"aria-label":"Next photo",style:arrowBtnStyle("right"),onMouseEnter:e=>e.currentTarget.style.opacity="1",onMouseLeave:e=>e.currentTarget.style.opacity="0.7",children:"\u203a"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{onClick:e=>e.stopPropagation(),style:{position:"absolute",bottom:"24px",left:"50%",transform:"translateX(-50%)",textAlign:"center",width:"90%",maxWidth:"400px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.1rem",color:"var(--text)"},children:image.title}),image.category&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",opacity:0.4,marginTop:"4px",color:"var(--text)"},children:image.category}),typeof currentIndex==="number"&&totalCount>1&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.58rem",letterSpacing:"0.12em",color:"var(--muted)",marginTop:"5px"},children:[currentIndex+1," of ",totalCount]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"12px",flexWrap:"wrap"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:e=>{e.stopPropagation();onDownload&&onDownload(fullUrl,image.title);},className:"bv-btn-primary",style:{padding:"8px 18px",fontSize:"0.6rem"},children:["\u2193"," Download"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:e=>{e.stopPropagation();onShare&&onShare(image.title,fullUrl);},className:"bv-btn-outline",style:{padding:"8px 18px",fontSize:"0.6rem"},children:"Share"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{position:"absolute",top:"16px",left:0,right:0,display:"flex",justifyContent:"center"},children:(onPrev||onNext)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-lightbox-arrows",style:{fontSize:"0.52rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--muted)",opacity:0.3},children:["\u2190"," ","\u2192"," arrow keys"]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:onClose,"aria-label":"Close",style:{position:"absolute",top:"14px",right:"18px",background:"none",border:"none",color:"var(--text)",fontSize:"1.5rem",cursor:"pointer",opacity:0.35,fontWeight:300,WebkitTapHighlightColor:"transparent",padding:"8px"},children:"\u2715"})]});}/* ─── CLIENT GALLERY ─── */function ClientGalleryPage(_ref6){let{galleries,onBack,onGift}=_ref6;const[passwordInput,setPasswordInput]=(0,react.useState)("");const[selectedGallery,setSelectedGallery]=(0,react.useState)(null);const[unlockedGallery,setUnlockedGallery]=(0,react.useState)(null);const[error,setError]=(0,react.useState)("");const[lightboxImg,setLightboxImg]=(0,react.useState)(null);const[favorited,setFavorited]=(0,react.useState)({});const[downloading,setDownloading]=(0,react.useState)(null);(0,react.useEffect)(()=>{document.body.style.overflow=lightboxImg?"hidden":"";return()=>{document.body.style.overflow="";};},[lightboxImg]);const handleUnlock=()=>{if(!selectedGallery)return;if(passwordInput===selectedGallery.password){setUnlockedGallery(selectedGallery);setError("");setPasswordInput("");}else{setError("Incorrect password. Please try again or contact Rebecca.");setTimeout(()=>setError(""),3000);}};const toggleFavorite=idx=>setFavorited(prev=>({...prev,[idx]:!prev[idx]}));const favCount=Object.values(favorited).filter(Boolean).length;const handleDownloadSingle=async(url,title,idx)=>{setDownloading(idx);await downloadImage(url,"bella-vita-"+title.toLowerCase().replace(/\s+/g,"-")+".jpg");setDownloading(null);};const handleDownloadFavorites=async()=>{const favs=unlockedGallery.images.filter((_,i)=>favorited[i]);for(const img of favs){await downloadImage(img.full||img.src,"bella-vita-"+img.title.toLowerCase().replace(/\s+/g,"-")+".jpg");await new Promise(r=>setTimeout(r,500));}};/* Unlocked gallery viewer */if(unlockedGallery){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{minHeight:"100vh",background:"var(--bg)",color:"var(--text)",fontFamily:"var(--font-body)"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Lightbox,{image:lightboxImg,onClose:()=>setLightboxImg(null),onDownload:(url,t)=>downloadImage(url,"bella-vita-"+t.toLowerCase().replace(/\s+/g,"-")+".jpg"),onShare:shareImage,onPrev:()=>{const idx=unlockedGallery.images.indexOf(lightboxImg);if(idx>0)setLightboxImg(unlockedGallery.images[idx-1]);},onNext:()=>{const idx=unlockedGallery.images.indexOf(lightboxImg);if(idx<unlockedGallery.images.length-1)setLightboxImg(unlockedGallery.images[idx+1]);},hasPrev:unlockedGallery.images.indexOf(lightboxImg)>0,hasNext:unlockedGallery.images.indexOf(lightboxImg)<unlockedGallery.images.length-1,currentIndex:unlockedGallery.images.indexOf(lightboxImg),totalCount:unlockedGallery.images.length}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-gallery-header",style:{position:"sticky",top:0,zIndex:100,padding:"18px 48px",background:"rgba(252,250,246,0.92)",backdropFilter:"blur(16px)",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:()=>{setUnlockedGallery(null);setSelectedGallery(null);setFavorited({});},style:{background:"none",border:"none",color:"var(--accent)",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase"},children:["\u2190"," Back"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.2rem",fontWeight:400},children:unlockedGallery.clientName}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted)",marginTop:"2px"},children:[unlockedGallery.sessionType," ","\u00b7"," ",new Date(unlockedGallery.date).toLocaleDateString("en-US",{month:"long",year:"numeric"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.7rem",color:"var(--accent)",letterSpacing:"0.1em"},children:favCount>0?"\u2665 "+favCount+" favorited":unlockedGallery.images.length+" photos"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-gallery-intro",style:{padding:"20px 48px 0",maxWidth:"960px",margin:"0 auto",textAlign:"center"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{fontSize:"0.82rem",color:"var(--muted)",lineHeight:1.7,fontWeight:300},children:"Click any photo to view full size. Use the download button to save individual photos, or favorite your picks and download them all at once."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:async()=>{for(const img of unlockedGallery.images){await downloadImage(img.full||img.src,"bella-vita-"+img.title.toLowerCase().replace(/\s+/g,"-")+".jpg");await new Promise(r=>setTimeout(r,500));}},className:"bv-btn-outline",style:{marginTop:"14px",padding:"9px 24px",fontSize:"0.65rem"},children:["\u2193"," Download All Photos"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-love-callout",style:{marginTop:"20px",padding:"16px 24px",background:"var(--card-bg)",border:"1px solid var(--border-light)",borderRadius:"3px",maxWidth:"520px",margin:"20px auto 0"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.78rem",color:"var(--text-light)",lineHeight:1.7,fontWeight:300},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{style:{color:"var(--accent)",fontWeight:400},children:["\u2727"," Love your photos?"]})," Want a canvas for your wall or an album for the coffee table? Know someone who'd love a session of their own? Share a direct link with friends and family ","\u2014"," they can gift you products, book their own session, or just see your gorgeous photos."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:()=>onGift(),className:"bv-btn-outline",style:{marginTop:"12px",padding:"8px 20px",fontSize:"0.6rem"},children:["Gift Certificates & Products ","\u2192"]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-gallery-grid-wrap",style:{padding:"32px 48px 120px",maxWidth:"1400px",margin:"0 auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-gallery-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"20px"},children:unlockedGallery.images.map((img,i)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{position:"relative",borderRadius:"3px",overflow:"hidden",aspectRatio:"4/5",background:"#f0ece4",boxShadow:"0 2px 20px rgba(0,0,0,0.06)"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ProgressiveImage,{src:img.src,alt:img.title,onClick:()=>setLightboxImg(img),style:{width:"100%",height:"100%",cursor:"zoom-in"}}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"48px 16px 14px",background:"linear-gradient(to top, rgba(0,0,0,0.35), transparent)",pointerEvents:"none"},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"0.95rem",color:"#fff"},children:img.title})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{position:"absolute",bottom:"12px",right:"12px",display:"flex",gap:"8px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:e=>{e.stopPropagation();handleDownloadSingle(img.full||img.src,img.title,i);},style:{background:"rgba(255,255,255,0.9)",border:"none",borderRadius:"50%",width:"36px",height:"36px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.85rem",color:"#2E2A25",backdropFilter:"blur(8px)",transition:"all 0.3s ease",opacity:downloading===i?0.5:0.8},onMouseEnter:e=>e.currentTarget.style.opacity="1",onMouseLeave:e=>e.currentTarget.style.opacity="0.8",children:downloading===i?"\u23f3":"\u2193"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:e=>{e.stopPropagation();shareImage(img.title,img.full||img.src);},style:{background:"rgba(255,255,255,0.9)",border:"none",borderRadius:"50%",width:"36px",height:"36px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",color:"#2E2A25",backdropFilter:"blur(8px)",transition:"all 0.3s ease",opacity:0.8},onMouseEnter:e=>e.currentTarget.style.opacity="1",onMouseLeave:e=>e.currentTarget.style.opacity="0.8",children:"\u2197"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:e=>{e.stopPropagation();toggleFavorite(i);},style:{background:favorited[i]?"#C4567A":"rgba(255,255,255,0.9)",border:"none",borderRadius:"50%",width:"36px",height:"36px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:favorited[i]?"#fff":"#C4567A",fontSize:"1rem",backdropFilter:"blur(8px)",transition:"all 0.3s ease"},children:favorited[i]?"\u2665":"\u2661"})]})]},i))}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-share-banner",style:{marginTop:"48px",border:"1px solid var(--border)",borderRadius:"3px",padding:"28px 32px",background:"var(--bg-warm)",textAlign:"center"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.15rem",fontWeight:400,marginBottom:"8px"},children:["Share the love ","\u2727"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{fontSize:"0.82rem",color:"var(--text-light)",lineHeight:1.7,fontWeight:300,maxWidth:"500px",margin:"0 auto"},children:["Want these photos on your wall? Send this link to family ","\u2014"," they can gift you a canvas, album, or prints. Or share the gift of a bella vita session with someone you love!"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"16px",flexWrap:"wrap"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>{const shareText="Check out my photos from bella vita photography! You can gift me a canvas, album, or prints \u2014 or grab a gift certificate for a session of your own: https://bellavitabyrebecca.com/#products";if(navigator.share){navigator.share({title:"bella vita photography",text:shareText,url:"https://bellavitabyrebecca.com/#products"}).catch(()=>{});}else{navigator.clipboard.writeText(shareText).then(()=>alert("Copied! Paste this into a text or message to share with family and friends.")).catch(()=>window.open("https://bellavitabyrebecca.com/#products","_blank"));}},className:"bv-btn-outline",style:{padding:"10px 22px",fontSize:"0.62rem"},children:"Copy Share Message"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>onGift(),className:"bv-btn-primary",style:{padding:"10px 22px",fontSize:"0.62rem"},children:"Browse Gifts & Products"})]})]})]}),favCount>0&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-gallery-favbar",style:{position:"fixed",bottom:0,left:0,right:0,padding:"16px 48px",background:"rgba(252,250,246,0.95)",backdropFilter:"blur(16px)",borderTop:"1px solid #E8E2D8",display:"flex",justifyContent:"space-between",alignItems:"center",animation:"bvFadeIn 0.3s ease",zIndex:100},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.82rem",color:"#9E978D"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"#C4567A",fontWeight:500},children:favCount})," favorite",favCount!==1?"s":""," selected"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-favbar-actions",style:{display:"flex",gap:"12px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:handleDownloadFavorites,className:"bv-btn-outline",style:{padding:"10px 24px"},children:["\u2193"," Download Favorites"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>{const fl=unlockedGallery.images.filter((_,i)=>favorited[i]).map(img=>img.title).join(", ");alert("Your favorites have been saved!\n\nSelected: "+fl+"\n\nRebecca will receive your selections and reach out about your album.\n\nTip: Friends and family can purchase a canvas, album, or prints of your photos as a gift right from our website! Scroll down to the \"Share the Love\" section to copy a ready-to-send message for them.");},className:"bv-btn-primary",style:{padding:"10px 24px"},children:"Submit Favorites"})]})]})]});}/* Password entry */if(selectedGallery){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-gallery-password",style:{minHeight:"100vh",background:"var(--bg)",color:"var(--text)",fontFamily:"var(--font-body)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"48px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:()=>{setSelectedGallery(null);setPasswordInput("");setError("");},style:{position:"absolute",top:"32px",left:"48px",background:"none",border:"none",color:"var(--accent)",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase"},children:["\u2190"," Back"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",maxWidth:"400px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:"90px",height:"90px",borderRadius:"50%",margin:"0 auto 28px",background:"url("+selectedGallery.coverImage+") center/cover",border:"3px solid var(--bg)",boxShadow:"0 4px 24px rgba(0,0,0,0.1)"}}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"12px"},children:"Private Gallery"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"1.8rem",fontWeight:400,marginBottom:"8px"},children:selectedGallery.clientName}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{fontSize:"0.78rem",color:"var(--muted)",marginBottom:"36px"},children:[selectedGallery.sessionType," ","\u00b7"," ",selectedGallery.images.length," photos"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"password",placeholder:"Enter your gallery password",value:passwordInput,onChange:e=>setPasswordInput(e.target.value),onKeyDown:e=>e.key==="Enter"&&handleUnlock(),className:"bv-input",style:{textAlign:"center",letterSpacing:"0.08em",borderColor:error?"#d4685a":undefined}}),error&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginTop:"10px",fontSize:"0.78rem",color:"#d4685a",animation:"bvFadeIn 0.3s ease"},children:error}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:handleUnlock,className:"bv-btn-primary",style:{marginTop:"20px",width:"100%"},children:"View Gallery"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{marginTop:"28px",fontSize:"0.72rem",color:"var(--muted)",lineHeight:1.7,opacity:0.6},children:["Your password was in your session delivery email.",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"Can't find it? Email ",/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"mailto:bellavitaphoto@rocketmail.com",style:{color:"var(--accent)",textDecoration:"none"},children:"bellavitaphoto@rocketmail.com"})]})]})]});}/* Gallery listing */return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{minHeight:"100vh",background:"var(--bg)",color:"var(--text)",fontFamily:"var(--font-body)"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-gallery-listing-wrap",style:{padding:"32px 48px"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:onBack,style:{background:"none",border:"none",color:"var(--accent)",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase"},children:["\u2190"," Back to Site"]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-gallery-listing-wrap",style:{textAlign:"center",padding:"40px 48px 64px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"16px"},children:"Password Protected"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 4vw, 3.2rem)",fontWeight:400,marginBottom:"16px"},children:"Client Galleries"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--muted)",fontSize:"0.88rem",fontWeight:300,maxWidth:"460px",margin:"0 auto",lineHeight:1.8},children:"Find your session below and enter the password from your delivery email to view, download, and favorite your photos."})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-gallery-listing-wrap",style:{maxWidth:"860px",margin:"0 auto",padding:"0 48px 100px",display:"grid",gap:"16px"},children:galleries.map(gallery=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{onClick:()=>setSelectedGallery(gallery),className:"bv-gallery-card",style:{display:"grid",gridTemplateColumns:"110px 1fr auto",gap:"24px",alignItems:"center",padding:"20px",background:"var(--card-bg)",border:"1px solid var(--border)",borderRadius:"3px",cursor:"pointer",transition:"all 0.35s ease",boxShadow:"0 1px 8px rgba(0,0,0,0.03)"},onMouseEnter:e=>{e.currentTarget.style.borderColor="#C4567A";e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.06)";},onMouseLeave:e=>{e.currentTarget.style.borderColor="#E8E2D8";e.currentTarget.style.boxShadow="0 1px 8px rgba(0,0,0,0.03)";},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:"110px",height:"80px",borderRadius:"2px",overflow:"hidden",backgroundImage:"url("+gallery.coverImage+")",backgroundSize:"cover",backgroundPosition:"center"}}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.25rem",fontWeight:400,marginBottom:"4px"},children:gallery.clientName}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.7rem",color:"var(--muted)",letterSpacing:"0.08em"},children:[gallery.sessionType," ","\u00b7"," ",new Date(gallery.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})," ","\u00b7"," ",gallery.images.length," photos"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-gallery-arrow",style:{fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--accent)"},children:["View ","\u2192"]})]},gallery.id))})]});}/* ─── ADMIN PANEL ─── */function AdminPanel(_ref7){let{galleries,setGalleries,onClose}=_ref7;const[authed,setAuthed]=(0,react.useState)(false);const[adminPw,setAdminPw]=(0,react.useState)("");const[adminError,setAdminError]=(0,react.useState)("");const[newGallery,setNewGallery]=(0,react.useState)({clientName:"",sessionType:"Senior Sessions",date:"",password:"",images:""});const ADMIN_PASSWORD="bellavita2025";const inputStyle={width:"100%",padding:"11px 14px",background:"#FFFFFF",border:"1px solid #E8E2D8",borderRadius:"3px",color:"#2E2A25",fontFamily:"var(--font-body)",fontSize:"0.85rem",outline:"none",marginTop:"6px"};const labelStyle={fontSize:"0.62rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"#9E978D",display:"block",marginTop:"14px"};if(!authed){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{minHeight:"100vh",background:"var(--bg)",color:"var(--text)",fontFamily:"var(--font-body)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"48px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:onClose,style:{position:"absolute",top:"32px",left:"48px",background:"none",border:"none",color:"var(--accent)",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase"},children:["\u2190"," Back"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",maxWidth:"380px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"16px"},children:"Admin Access"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"1.8rem",fontWeight:400,marginBottom:"28px"},children:"Gallery Manager"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"password",placeholder:"Admin password",value:adminPw,onChange:e=>setAdminPw(e.target.value),onKeyDown:e=>{if(e.key==="Enter"){if(adminPw===ADMIN_PASSWORD)setAuthed(true);else{setAdminError("Incorrect password");setTimeout(()=>setAdminError(""),2500);}}},style:{...inputStyle,textAlign:"center",fontSize:"0.95rem",letterSpacing:"0.08em"}}),adminError&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginTop:"10px",fontSize:"0.78rem",color:"#d4685a"},children:adminError})]})]});}const handleAddGallery=()=>{var _imageList$;if(!newGallery.clientName||!newGallery.password||!newGallery.date)return;const imageList=newGallery.images.split("\n").map(s=>s.trim()).filter(Boolean).map((url,i)=>({src:url,full:url,title:"Photo "+(i+1)}));const gallery={id:"g"+Date.now(),clientName:newGallery.clientName,sessionType:newGallery.sessionType,date:newGallery.date,password:newGallery.password,coverImage:((_imageList$=imageList[0])===null||_imageList$===void 0?void 0:_imageList$.src)||"https://images.unsplash.com/photo-1517677129300-07b130802f46?w=800&q=85",images:imageList.length>0?imageList:[{src:"https://images.unsplash.com/photo-1517677129300-07b130802f46?w=1200&q=90",full:"https://images.unsplash.com/photo-1517677129300-07b130802f46?w=2400&q=95",title:"Sample"}]};setGalleries(prev=>[...prev,gallery]);setNewGallery({clientName:"",sessionType:"Senior Sessions",date:"",password:"",images:""});};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{minHeight:"100vh",background:"var(--bg)",color:"var(--text)",fontFamily:"var(--font-body)",padding:"32px 48px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"48px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:onClose,style:{background:"none",border:"none",color:"var(--accent)",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"0.75rem",letterSpacing:"0.15em",textTransform:"uppercase"},children:["\u2190"," Back to Site"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.3rem",fontWeight:400},children:"Gallery Manager"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.65rem",color:"var(--muted)"},children:[galleries.length," galleries"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{maxWidth:"900px",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px"},className:"bv-admin-grid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{padding:"28px",border:"1px solid #E8E2D8",borderRadius:"3px",background:"#FFFFFF"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.3rem",fontWeight:400,marginBottom:"6px"},children:"Create New Gallery"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{fontSize:"0.72rem",color:"#9E978D",marginBottom:"4px"},children:"Upload URLs to your full-resolution images for maximum download quality."}),/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:labelStyle,children:"Client Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{style:inputStyle,placeholder:"e.g. Emma Richardson",value:newGallery.clientName,onChange:e=>setNewGallery({...newGallery,clientName:e.target.value})}),/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:labelStyle,children:"Session Type"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("select",{value:newGallery.sessionType,onChange:e=>setNewGallery({...newGallery,sessionType:e.target.value}),style:{...inputStyle,cursor:"pointer"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:"Senior Sessions",children:"Senior Sessions"}),/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:"Family Sessions",children:"Family Sessions"}),/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:"Weddings",children:"Weddings"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:labelStyle,children:"Session Date"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{style:inputStyle,type:"date",value:newGallery.date,onChange:e=>setNewGallery({...newGallery,date:e.target.value})}),/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:labelStyle,children:"Client Password"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{style:inputStyle,placeholder:"Password for the client",value:newGallery.password,onChange:e=>setNewGallery({...newGallery,password:e.target.value})}),/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:labelStyle,children:"Image URLs (one per line, full resolution)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("textarea",{style:{...inputStyle,minHeight:"90px",resize:"vertical"},placeholder:"https://your-host.com/photo1.jpg\nhttps://your-host.com/photo2.jpg",value:newGallery.images,onChange:e=>setNewGallery({...newGallery,images:e.target.value})}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:handleAddGallery,className:"bv-btn-primary",style:{marginTop:"20px",width:"100%",opacity:!newGallery.clientName||!newGallery.password||!newGallery.date?0.4:1},children:"Create Gallery"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.3rem",fontWeight:400,marginBottom:"20px"},children:"Active Galleries"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[galleries.map(g=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{padding:"14px 18px",border:"1px solid #E8E2D8",borderRadius:"3px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"#FFFFFF"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.05rem"},children:g.clientName}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.65rem",color:"#9E978D",marginTop:"2px"},children:[g.sessionType," ","\u00b7"," ",g.images.length," photos ","\u00b7"," pw: ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"#C4567A"},children:g.password})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>setGalleries(prev=>prev.filter(x=>x.id!==g.id)),style:{background:"none",border:"1px solid #d4685a44",color:"#d4685a",padding:"5px 14px",borderRadius:"2px",cursor:"pointer",fontSize:"0.65rem",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"var(--font-body)",transition:"all 0.3s ease"},onMouseEnter:e=>{e.target.style.background="#d4685a";e.target.style.color="#fff";},onMouseLeave:e=>{e.target.style.background="transparent";e.target.style.color="#d4685a";},children:"Delete"})]},g.id)),galleries.length===0&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{padding:"28px",textAlign:"center",color:"#9E978D",fontSize:"0.82rem"},children:"No galleries yet."})]})]})]})]});}/* ═══════════════════════════════════════════════════════════════
   MAIN WEBSITE
   ═══════════════════════════════════════════════════════════════ */function PhotographyWebsite(){var _SITE_CONTENT$payment,_SITE_CONTENT$payment2,_SITE_CONTENT$payment3,_SITE_CONTENT$payment4,_SITE_CONTENT$payment5;const[activeFilter,setActiveFilter]=(0,react.useState)("All");const[lightboxImage,setLightboxImage]=(0,react.useState)(null);const[menuOpen,setMenuOpen]=(0,react.useState)(false);const[heroLoaded,setHeroLoaded]=(0,react.useState)(false);const[formData,setFormData]=(0,react.useState)({name:"",email:"",message:"",type:"Senior Session"});const[formSent,setFormSent]=(0,react.useState)(false);const[currentView,setCurrentView]=(0,react.useState)("main");const[clientGalleries,setClientGalleries]=(0,react.useState)(DEFAULT_CLIENT_GALLERIES);const[showStyleGuide,setShowStyleGuide]=(0,react.useState)(false);const[popupDismissed,setPopupDismissed]=(0,react.useState)(false);const[openFaq,setOpenFaq]=(0,react.useState)(null);const[giftAmount,setGiftAmount]=(0,react.useState)("375");const[showGiftModal,setShowGiftModal]=(0,react.useState)(false);const[showHintModal,setShowHintModal]=(0,react.useState)(false);const[hintForm,setHintForm]=(0,react.useState)({recipientName:"",recipientEmail:"",senderName:"",scenario:"",occasion:"",forWho:""});const[hintSent,setHintSent]=(0,react.useState)(false);const[giftForm,setGiftForm]=(0,react.useState)({recipientName:"",recipientEmail:"",senderName:"",senderEmail:"",message:"",paymentMethod:"",giftCertAmount:""});const[giftSent,setGiftSent]=(0,react.useState)(false);const[giftStep,setGiftStep]=(0,react.useState)(1);const[scrollY,setScrollY]=(0,react.useState)(0);const[activeSection,setActiveSection]=(0,react.useState)("hero");const[formErrors,setFormErrors]=(0,react.useState)({});const[filterAnimating,setFilterAnimating]=(0,react.useState)(false);const[scrollProgress,setScrollProgress]=(0,react.useState)(0);(0,react.useEffect)(()=>{setTimeout(()=>setHeroLoaded(true),150);},[]);(0,react.useEffect)(()=>{document.body.style.overflow=lightboxImage||menuOpen||showGiftModal||showHintModal?"hidden":"";return()=>{document.body.style.overflow="";};},[lightboxImage,menuOpen,showGiftModal,showHintModal]);(0,react.useEffect)(()=>{const h=()=>{setScrollY(window.scrollY);const doc=document.documentElement;setScrollProgress(doc.scrollTop/(doc.scrollHeight-doc.clientHeight)*100);};window.addEventListener("scroll",h,{passive:true});return()=>window.removeEventListener("scroll",h);},[]);/* URL hash tracking - updates browser URL as user scrolls to sections */(0,react.useEffect)(()=>{const sections=["hero","portfolio","about","services","products","faq","contact"];let ticking=false;const updateHash=()=>{ticking=false;let current="hero";for(const id of sections){const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=120)current=id;}const newHash=current==="hero"?"":"#"+current;if(window.location.hash!==newHash&&(newHash||window.location.hash)){window.history.replaceState(null,"",newHash||window.location.pathname);}setActiveSection(current);};const onScroll=()=>{if(!ticking){ticking=true;requestAnimationFrame(updateHash);}};window.addEventListener("scroll",onScroll,{passive:true});// On initial load, scroll to hash if present
if(window.location.hash){const target=document.getElementById(window.location.hash.slice(1));if(target)setTimeout(()=>target.scrollIntoView({behavior:"smooth",block:"start"}),300);}return()=>window.removeEventListener("scroll",onScroll);},[]);/* Inject JSON-LD structured data for SEO */(0,react.useEffect)(()=>{if(document.querySelector('script[data-bv-jsonld]'))return;const script=document.createElement("script");script.type="application/ld+json";script.setAttribute("data-bv-jsonld","true");script.textContent=JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","@id":"https://bellavitabyrebecca.com","name":"bella vita photography","description":"Natural light portrait photography for seniors and families in Livingston and Oakland County, Michigan. Owned by Rebecca Henson, est. 2009.","url":"https://bellavitabyrebecca.com","telephone":"","email":"bellavitaphoto@rocketmail.com","image":"https://bellavitabyrebecca.com/og-image.jpg","address":{"@type":"PostalAddress","addressLocality":"Howell","addressRegion":"MI","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.6073,"longitude":-83.9294},"areaServed":[{"@type":"County","name":"Livingston County, Michigan"},{"@type":"County","name":"Oakland County, Michigan"}],"priceRange":"$175 - $600+","openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"09:00","closes":"19:00"},"founder":{"@type":"Person","name":"Rebecca Henson","jobTitle":"Photographer & Owner"},"foundingDate":"2009","sameAs":["https://www.instagram.com/bellavitaphotography2/","https://www.facebook.com/bellavitaphotography2"],"aggregateRating":{"@type":"AggregateRating","ratingValue":"5.0","reviewCount":"47","bestRating":"5"},"hasOfferCatalog":{"@type":"OfferCatalog","name":"Photography Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Senior Portraits","description":"On-location senior portrait session with up to 3 outfit changes and 25+ digital images"},"price":"600","priceCurrency":"USD"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Family Sessions","description":"Natural light family session on location with 25+ digital images"},"price":"300","priceCurrency":"USD"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Mini Sessions","description":"Seasonal mini session with 10-15 digital images"},"price":"175","priceCurrency":"USD"}]}});document.head.appendChild(script);return()=>{if(script.parentNode)script.parentNode.removeChild(script);};},[]);(0,react.useEffect)(()=>{if(!document.querySelector('link[href*="Playfair+Display"]')){const link=document.createElement("link");link.rel="stylesheet";link.href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@200;300;400;500&display=swap";document.head.appendChild(link);}},[]);const categories=["All","Seniors","Families","Milestones & Minis","Weddings"];const filtered=activeFilter==="All"?PORTFOLIO:PORTFOLIO.filter(p=>p.category===activeFilter);const scrollTo=id=>{setMenuOpen(false);const el=document.getElementById(id);if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-80,behavior:"smooth"});};const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;const switchFilter=cat=>{if(cat===activeFilter)return;setFilterAnimating(true);setTimeout(()=>{setActiveFilter(cat);setFilterAnimating(false);},300);};const handleSubmit=async()=>{const errors={};if(!formData.name.trim())errors.name="Please enter your name";if(!emailRegex.test(formData.email))errors.email="Please enter a valid email";if(!formData.message.trim())errors.message="Tell me about your vision";setFormErrors(errors);if(Object.keys(errors).length>0)return;try{await fetch("https://formspree.io/f/xzdjbyra",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:formData.name,email:formData.email,"session type":formData.type,message:formData.message})});}catch{}setFormSent(true);setTimeout(()=>setFormSent(false),4000);setFormData({name:"",email:"",message:"",type:"Senior Session"});setFormErrors({});};const handleSendHint=()=>{if(!hintForm.recipientEmail||!hintForm.senderName||!hintForm.scenario||!hintForm.occasion)return;const who=hintForm.forWho||"";const occasionLabel={"Senior Portraits":"senior portraits","Family Photos":"family photos","Wedding":"the wedding","Products / Gift":"a gift certificate","General":"a photo session"};let subject,body;if(hintForm.scenario==="hint"){const hintMessages={"Senior Portraits":"I've been looking into senior portrait photographers and I found someone AMAZING. Her name is Rebecca with bella vita photography \u2014 she's a natural light photographer here in Michigan and her work is absolutely stunning. I would love love love a session with her as a gift!","Family Photos":"I've been wanting to get family photos done SO badly and I just found the perfect photographer! Her name is Rebecca with bella vita photography \u2014 natural light, on location, and her work is gorgeous. A session with her would be the best gift!","Wedding":"So we've been looking at wedding photographers and we found THE one. Her name is Rebecca with bella vita photography and her work is breathtaking. We would be absolutely over the moon if someone helped us out with our wedding photography!","Products / Gift":"I recently had photos taken by the most amazing photographer \u2014 Rebecca with bella vita photography \u2014 and I've been DYING to get a gallery wrap or album of the images. A gift certificate toward products would seriously make my year! She has beautiful canvas wraps, acrylics, metals, albums, and prints.","General":"I found this amazing photographer named Rebecca with bella vita photography and I can't stop looking at her work. A gift certificate for a session or products would seriously make my entire year!"};subject=encodeURIComponent("Okay so... I have a little hint for you \u2727");body=encodeURIComponent("Hey"+(hintForm.recipientName?" "+hintForm.recipientName:"")+"!\n\n"+"So... this is me not-so-subtly dropping a hint. \u{1F60A}\n\n"+(hintMessages[hintForm.occasion]||hintMessages["General"])+"\n\n"+"You can see her work here: bellavitabyrebecca.com\n"+"Gift certificates come in any amount, work for sessions AND products (gallery wraps, albums, prints!), and never expire!\n"+"Her email: bellavitaphoto@rocketmail.com\n\n"+"Just putting that out there... \u{1F60D}\n\n"+"Love,\n"+hintForm.senderName);}else{const subjectWho=who||(hintForm.occasion==="General"?"":occasionLabel[hintForm.occasion]||"");const recMessages={"Senior Portraits":"I HAD to tell you about this photographer I found"+(who?" \u2014 I immediately thought of "+who+"'s senior photos":" for senior portraits")+"! Her name is Rebecca with bella vita photography. She does natural light senior portraits here in Michigan and her photos are unreal."+(who?" "+who+" would look absolutely amazing.":""),"Family Photos":"I found the most wonderful family photographer and I immediately thought of you! Her name is Rebecca with bella vita photography \u2014 natural light, on location, and she makes everyone feel so relaxed. Your family photos would turn out incredible.","Wedding":"I found the most beautiful wedding photographer"+(who?" and immediately thought of "+who+"'s big day":"")+"! Her name is Rebecca with bella vita photography. She does natural light photography and her wedding work is stunning.","Products / Gift":"I know someone who just had a session with the most amazing photographer \u2014 Rebecca with bella vita photography. She has the most gorgeous products (canvas gallery wraps, acrylics, metals, albums, prints) and a gift certificate toward any of them would be such a thoughtful gift! They never expire and come in any amount.","General":"I came across this incredible photographer and immediately thought of you! Her name is Rebecca with bella vita photography. She does seniors, families, weddings \u2014 all natural light, on location in Michigan. Gift certificates work for sessions AND products like gallery wraps and albums."};subject=encodeURIComponent(subjectWho?"I found the perfect photographer for "+subjectWho+"! \u2727":"You HAVE to see this photographer! \u2727");body=encodeURIComponent("Hey"+(hintForm.recipientName?" "+hintForm.recipientName:"")+"!\n\n"+(recMessages[hintForm.occasion]||recMessages["General"])+"\n\n"+"Check out her work: bellavitabyrebecca.com\n"+"Her email: bellavitaphoto@rocketmail.com"+(hintForm.senderName?" \u2014 tell her "+hintForm.senderName+" sent you!":"")+"\n\n"+"Trust me on this one. \u{1F60A}\n\n"+hintForm.senderName);}window.open("mailto:"+hintForm.recipientEmail+"?subject="+subject+"&body="+body+"&bcc=bellavitaphoto@rocketmail.com","_blank");setFormData({name:hintForm.senderName,email:"",type:"Gift Certificate",message:(hintForm.scenario==="hint"?"GIFT HINT SENT":"REFERRAL SENT")+"\n\nFrom: "+hintForm.senderName+"\nSent to: "+(hintForm.recipientName||"Not specified")+" ("+hintForm.recipientEmail+")"+(who?"\nSession for: "+who:"")+"\nType: "+hintForm.occasion});setHintSent(true);setTimeout(()=>{setHintSent(false);setShowHintModal(false);setHintForm({recipientName:"",recipientEmail:"",senderName:"",scenario:"",occasion:"",forWho:""});scrollTo("contact");},2500);};const handleSendGift=()=>{var _pay$venmo,_pay$paypal;if(!giftForm.recipientEmail||!giftForm.senderName||!giftForm.senderEmail||!giftForm.paymentMethod)return;const amount=giftAmount==="Custom"?"a custom amount":"$"+giftAmount;const amountNum=giftAmount==="Custom"?"Custom amount":"$"+giftAmount;const personalMsg=giftForm.message?"\n\n"+giftForm.message:"";const subject=encodeURIComponent("You've Been Gifted a bella vita photography Experience!");const body=encodeURIComponent("Hi"+(giftForm.recipientName?" "+giftForm.recipientName:"")+"!\n\n"+"Someone special wants to give you the gift of beautiful memories! "+giftForm.senderName+" has gifted you a bella vita photography gift certificate for "+amount+".\n\n"+"This certificate can be used for any photography session (seniors, families, weddings), products (gallery wraps, albums, acrylics, prints), or any combination \u2014 and it never expires!"+personalMsg+"\n\n"+"To book your session or browse products, contact Rebecca at bellavitaphoto@rocketmail.com or visit bellavitabyrebecca.com\n\n"+"With love,\n"+giftForm.senderName+"\n\n\u2014 bella vita photography \u2727 Est. 2009");window.open("mailto:"+giftForm.recipientEmail+"?subject="+subject+"&body="+body+"&bcc=bellavitaphoto@rocketmail.com","_blank");const payLabel={venmo:"Venmo",paypal:"PayPal",zelle:"Zelle",later:"Pay Later (contact form)"}[giftForm.paymentMethod]||giftForm.paymentMethod;setFormData({name:giftForm.senderName,email:giftForm.senderEmail,type:"Gift Certificate",message:"GIFT CERTIFICATE PURCHASE REQUEST\n\nAmount: "+amountNum+"\nPayment Method: "+payLabel+"\nFrom: "+giftForm.senderName+" ("+giftForm.senderEmail+")\nRecipient: "+(giftForm.recipientName||"Not specified")+"\nRecipient Email: "+giftForm.recipientEmail+(giftForm.message?"\nPersonal Message: "+giftForm.message:"")+"\n\nRecipient has been notified via email."});/* Open payment link based on method */const pay=SITE_CONTENT.payments;if(giftForm.paymentMethod==="venmo"&&(_pay$venmo=pay.venmo)!==null&&_pay$venmo!==void 0&&_pay$venmo.url){const venmoUrl=pay.venmo.url+"?txn=pay&amount="+(giftAmount!=="Custom"?giftAmount:"")+"&note="+encodeURIComponent("bella vita photography gift certificate for "+(giftForm.recipientName||"recipient"));setTimeout(()=>window.open(venmoUrl,"_blank"),600);}else if(giftForm.paymentMethod==="paypal"&&(_pay$paypal=pay.paypal)!==null&&_pay$paypal!==void 0&&_pay$paypal.url){const paypalUrl=pay.paypal.url+"/"+(giftAmount!=="Custom"?giftAmount:"");setTimeout(()=>window.open(paypalUrl,"_blank"),600);}/* Zelle and Pay Later just go to the contact form */setGiftSent(true);setTimeout(()=>{setGiftSent(false);setShowGiftModal(false);setGiftStep(1);setGiftForm({recipientName:"",recipientEmail:"",senderName:"",senderEmail:"",message:"",paymentMethod:""});scrollTo("contact");},3000);};if(currentView==="client-gallery")return/*#__PURE__*/(0,jsx_runtime.jsx)(ClientGalleryPage,{galleries:clientGalleries,onBack:()=>setCurrentView("main"),onGift:()=>{setCurrentView("main");setTimeout(()=>{const el=document.getElementById("products");if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-80,behavior:"smooth"});},100);}});if(currentView==="admin")return/*#__PURE__*/(0,jsx_runtime.jsx)(AdminPanel,{galleries:clientGalleries,setGalleries:setClientGalleries,onClose:()=>setCurrentView("main")});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{background:"var(--bg)",color:"var(--text)",minHeight:"100vh",fontFamily:"var(--font-body)",overflowX:"hidden"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-scroll-progress",style:{width:scrollProgress+"%"}}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"#portfolio",className:"bv-skip-link",children:"Skip to content"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{role:"navigation","aria-label":"Main navigation",className:"bv-nav",style:{position:"fixed",top:0,left:0,right:0,zIndex:9990,padding:"20px 48px",display:"flex",justifyContent:"space-between",alignItems:"center",background:scrollY>50?"rgba(252,250,246,0.95)":"transparent",backdropFilter:scrollY>50?"blur(16px)":"none",borderBottom:scrollY>50?"1px solid var(--border-light)":"1px solid transparent",transition:"all 0.4s ease"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{onClick:()=>scrollTo("hero"),style:{fontFamily:"var(--font-display)",fontSize:"1.5rem",fontWeight:500,letterSpacing:"0.04em",cursor:"pointer",color:"var(--text)"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--accent)"},children:"b"}),"ella ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--accent)"},children:"v"}),"ita"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-desktop-nav",style:{display:"flex",gap:"32px",alignItems:"center"},children:[["Portfolio","About","Services","Products","FAQ","Contact"].map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"bv-nav-link"+(activeSection===item.toLowerCase()?" bv-active":""),onClick:()=>scrollTo(item.toLowerCase()),style:{fontSize:"0.7rem",letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--text-light)",fontWeight:400},children:item},item)),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"bv-nav-link",onClick:()=>setCurrentView("client-gallery"),style:{fontSize:"0.7rem",letterSpacing:"0.16em",textTransform:"uppercase",color:"var(--accent)",fontWeight:400},children:"Client Gallery"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bv-mobile-btn",onClick:()=>setMenuOpen(!menuOpen),style:{background:"none",border:"none",color:"var(--text)",fontSize:"1.4rem",cursor:"pointer",display:"none"},children:menuOpen?"\u2715":"\u2630"})]}),menuOpen&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mobile-menu",children:[["Portfolio","About","Services","Products","FAQ","Contact"].map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>scrollTo(item.toLowerCase()),style:{fontFamily:"var(--font-display)",fontSize:"1.8rem",color:"var(--text)",cursor:"pointer"},children:item},item)),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{onClick:()=>{setMenuOpen(false);setCurrentView("client-gallery");},style:{fontFamily:"var(--font-display)",fontSize:"1.8rem",color:"var(--accent)",cursor:"pointer"},children:"Client Gallery"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Lightbox,{image:lightboxImage,onClose:()=>setLightboxImage(null),onDownload:(url,t)=>downloadImage(url,"bella-vita-"+t.toLowerCase().replace(/\s+/g,"-")+".jpg"),onShare:shareImage,onPrev:()=>{const idx=filtered.findIndex(p=>p.id===(lightboxImage===null||lightboxImage===void 0?void 0:lightboxImage.id));if(idx>0)setLightboxImage(filtered[idx-1]);},onNext:()=>{const idx=filtered.findIndex(p=>p.id===(lightboxImage===null||lightboxImage===void 0?void 0:lightboxImage.id));if(idx<filtered.length-1)setLightboxImage(filtered[idx+1]);},hasPrev:filtered.findIndex(p=>p.id===(lightboxImage===null||lightboxImage===void 0?void 0:lightboxImage.id))>0,hasNext:filtered.findIndex(p=>p.id===(lightboxImage===null||lightboxImage===void 0?void 0:lightboxImage.id))<filtered.length-1,currentIndex:filtered.findIndex(p=>p.id===(lightboxImage===null||lightboxImage===void 0?void 0:lightboxImage.id)),totalCount:filtered.length}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{id:"hero",className:"bv-hero-section",style:{minHeight:"100vh",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",background:"var(--bg)"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-hero-top",style:{textAlign:"center",paddingTop:"120px",paddingBottom:"36px",position:"relative",zIndex:2},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.4rem, 6vw, 5rem)",fontWeight:400,letterSpacing:"0.06em",color:"var(--text)",opacity:heroLoaded?1:0,transform:heroLoaded?"translateY(0)":"translateY(20px)",transition:"all 1s cubic-bezier(0.22,1,0.36,1) 0.3s"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--accent)"},children:"b"}),"ella ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--accent)"},children:"v"}),"ita"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-body)",fontSize:"0.68rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginTop:"10px",opacity:heroLoaded?1:0,transform:heroLoaded?"translateY(0)":"translateY(12px)",transition:"all 1s cubic-bezier(0.22,1,0.36,1) 0.5s"},children:SITE_CONTENT.tagline})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-hero-bottom",style:{textAlign:"center",padding:"44px 24px 60px",position:"relative",zIndex:2,flex:1,display:"flex",flexDirection:"column",justifyContent:"center"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("h1",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.4rem, 5vw, 4.2rem)",fontWeight:400,lineHeight:1.08,color:"var(--text)",opacity:heroLoaded?1:0,transform:heroLoaded?"translateY(0)":"translateY(24px)",transition:"all 1s cubic-bezier(0.22,1,0.36,1) 0.9s"},children:[SITE_CONTENT.headline,/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("em",{style:{fontStyle:"italic",color:"var(--accent)"},children:SITE_CONTENT.headlineAccent})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{fontFamily:"var(--font-body)",fontSize:"0.95rem",fontWeight:300,color:"var(--text-light)",maxWidth:"480px",margin:"24px auto 0",lineHeight:1.8,opacity:heroLoaded?1:0,transform:heroLoaded?"translateY(0)":"translateY(16px)",transition:"all 1s cubic-bezier(0.22,1,0.36,1) 1.1s"},children:SITE_CONTENT.heroDescription}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginTop:"32px",opacity:heroLoaded?1:0,transform:heroLoaded?"translateY(0)":"translateY(12px)",transition:"all 1s cubic-bezier(0.22,1,0.36,1) 1.3s"},children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bv-btn-primary",onClick:()=>scrollTo("contact"),children:SITE_CONTENT.heroButton})})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{id:"portfolio",className:"bv-section bv-portfolio-section",style:{padding:"100px 48px",maxWidth:"1400px",margin:"0 auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginBottom:"56px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"},children:SITE_CONTENT.portfolioTagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 3.5vw, 3rem)",fontWeight:400},children:SITE_CONTENT.portfolioTitle}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--muted)",fontSize:"0.85rem",fontWeight:300,maxWidth:"440px",margin:"14px auto 0",lineHeight:1.7},children:SITE_CONTENT.portfolioDescription})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{delay:0.1,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-filter-row",style:{display:"flex",justifyContent:"center",gap:"4px",marginBottom:"48px",flexWrap:"wrap"},children:categories.map(cat=>/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bv-filter-btn "+(activeFilter===cat?"active":""),onClick:()=>switchFilter(cat),children:cat},cat))})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-grid-portfolio bv-filter-grid"+(filterAnimating?" bv-filtering":""),style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"20px"},children:filtered.map((img,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{delay:i*0.06,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-gallery-card-wrap",style:{aspectRatio:img.aspect==="portrait"?"3/4":"4/3"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ProgressiveImage,{className:"bv-gallery-img",src:img.src,alt:img.title+" \u2013 "+img.category+" photography Michigan",onClick:()=>setLightboxImage(img),style:{width:"100%",height:"100%",cursor:"zoom-in"},tabIndex:0,role:"button","aria-label":"View "+img.title,onKeyDown:e=>e.key==="Enter"&&setLightboxImage(img)}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-overlay"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-img-actions",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:e=>{e.stopPropagation();downloadImage(img.full||img.src,"bella-vita-"+img.title.toLowerCase().replace(/\s+/g,"-")+".jpg");},style:{width:"34px",height:"34px",borderRadius:"50%",background:"rgba(255,255,255,0.92)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.82rem",color:"#2E2A25",backdropFilter:"blur(8px)"},children:"\u2193"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:e=>{e.stopPropagation();shareImage(img.title,img.full||img.src);},style:{width:"34px",height:"34px",borderRadius:"50%",background:"rgba(255,255,255,0.92)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.72rem",color:"#2E2A25",backdropFilter:"blur(8px)"},children:"\u2197"})]})]})},img.id))})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{id:"about",className:"bv-section",style:{padding:"80px 48px",background:"var(--bg-warm)"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{maxWidth:"1100px",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:"72px",alignItems:"center"},className:"bv-about-grid",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(ProgressiveImage,{className:"bv-profile-photo",src:"/rebecca-profile.jpg",alt:"Rebecca Henson, natural light photographer Michigan",style:{width:"100%",maxWidth:"440px",aspectRatio:"3/4",borderRadius:"3px",boxShadow:"0 12px 40px rgba(0,0,0,0.08)"}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{delay:0.15,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"},children:"Hey, I'm Rebecca"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.8rem, 3vw, 2.6rem)",fontWeight:400,marginBottom:"28px",lineHeight:1.2},children:["The face behind ",/*#__PURE__*/(0,jsx_runtime.jsx)("em",{style:{fontStyle:"italic",color:"var(--accent)"},children:"the camera"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"18px",color:"var(--text-light)",fontSize:"0.92rem",lineHeight:1.85,fontWeight:300},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"bella vita was born in 2009 with a camera, a marketing degree and a passion for photography. Over fifteen years later, I still get butterflies before every single session."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["I'm a natural light, on location photographer. There's something magical about Michigan seasons ","\u2014"," the way the flowers bloom in the spring and the trees change colors in the fall. I'm not a fan of winter (like at all), but I even get excited about those outdoor sessions in the snow!"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["Every session is designed around YOU ","\u2014"," your style, your personality, your family's energy. I want you to look at these photos in twenty years and feel everything all over again."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{marginTop:"32px",display:"flex",gap:"24px",fontSize:"0.65rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--accent)"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Est. 2009"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--border)"},children:"\u00b7"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Natural Light"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--border)"},children:"\u00b7"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"On Location"})]})]})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-section bv-quote-section",style:{padding:"80px 48px",textAlign:"center"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{maxWidth:"640px",margin:"0 auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.4rem, 2.8vw, 2.2rem)",fontStyle:"italic",fontWeight:400,color:"var(--text)",lineHeight:1.6},children:["\"",SITE_CONTENT.quote,"\""]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginTop:"24px",fontSize:"0.65rem",letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--accent)"},children:SITE_CONTENT.quoteAttribution})]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"bv-section",style:{padding:"80px 48px",background:"var(--bg-warm)"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{maxWidth:"960px",margin:"0 auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginBottom:"64px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"},children:"How It Works"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 3.5vw, 3rem)",fontWeight:400},children:"The Process"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{color:"var(--muted)",fontSize:"0.85rem",fontWeight:300,maxWidth:"460px",margin:"14px auto 0",lineHeight:1.7},children:["From first message to final gallery ","\u2014"," here's what to expect."]})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-process-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"48px",position:"relative"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-process-line",style:{position:"absolute",top:"32px",left:"16%",right:"16%",height:"1px",background:"var(--border)",zIndex:0}}),SITE_CONTENT.processSteps.map((item,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{delay:i*0.15,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",position:"relative",zIndex:1},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"var(--card-bg)",border:"2px solid var(--accent-light)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:"1.4rem",color:"var(--accent)",boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:item.icon}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.58rem",letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"8px",fontWeight:400},children:["Step ",item.step]}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.3rem",fontWeight:500,marginBottom:"12px"},children:item.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--text-light)",fontSize:"0.85rem",lineHeight:1.8,fontWeight:300},children:item.desc})]})},i))]})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{id:"services",className:"bv-section",style:{padding:"80px 48px",maxWidth:"1200px",margin:"0 auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginBottom:"60px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"},children:SITE_CONTENT.servicesTagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 3.5vw, 3rem)",fontWeight:400},children:SITE_CONTENT.servicesTitle})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-grid-services",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px"},children:SERVICES.map((s,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{delay:i*0.1,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-service-card",style:{height:"100%",display:"flex",flexDirection:"column"},onMouseMove:e=>{const rect=e.currentTarget.getBoundingClientRect();const x=((e.clientX-rect.left)/rect.width-0.5)*6;const y=((e.clientY-rect.top)/rect.height-0.5)*-6;e.currentTarget.style.transform=`translateY(-3px) rotateX(${y}deg) rotateY(${x}deg)`;},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0) rotateX(0) rotateY(0)";},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"1.5rem",color:"var(--accent-light)",marginBottom:"18px"},children:s.icon}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.5rem",fontWeight:500,marginBottom:"8px"},children:s.category}),s.category==="Senior Sessions"&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{fontSize:"0.72rem",color:"var(--muted)",fontWeight:300,fontStyle:"italic",marginBottom:"20px",lineHeight:1.6},children:"(all senior collections include a private online gallery for sharing and download and print release)"}),s.category==="Family Sessions"&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{fontSize:"0.72rem",color:"var(--muted)",fontWeight:300,fontStyle:"italic",marginBottom:"20px",lineHeight:1.6},children:"(all family collections include a private online gallery for sharing and download and print release)"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{flex:1},children:s.collections.map((c,j)=>/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{marginBottom:j<s.collections.length-1?"16px":0,paddingBottom:j<s.collections.length-1?"16px":0,borderBottom:j<s.collections.length-1?"1px solid var(--border-light)":"none"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.05rem",fontWeight:500,marginBottom:"6px",color:"var(--text)",display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:c.name}),c.price&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{fontFamily:"var(--font-display)",fontStyle:"italic",fontSize:"0.95rem",fontWeight:400,color:"var(--accent)"},children:c.price})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--text-light)",fontSize:"0.82rem",lineHeight:1.7,fontWeight:300,whiteSpace:"pre-line"},children:c.desc})]},j))})]})},i))})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-section",style:{padding:"36px 48px",background:"var(--bg-warm)",borderTop:"1px solid var(--border-light)",borderBottom:"1px solid var(--border-light)"},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-avail-banner",style:{maxWidth:"900px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"24px"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"6px"},children:SITE_CONTENT.availabilityLabel}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.35rem",fontWeight:400},children:SITE_CONTENT.availabilityTitle}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{onClick:()=>scrollTo("contact"),style:{fontFamily:"var(--font-display)",fontStyle:"italic",fontSize:"1.05rem",fontWeight:400,color:"var(--accent)",marginTop:"8px",cursor:"pointer",textDecoration:"underline",textUnderlineOffset:"4px"},children:"Inquire about our Senior Rep Program"})]})})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{id:"products",className:"bv-section",style:{padding:"80px 48px",maxWidth:"1200px",margin:"0 auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginBottom:"56px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"},children:SITE_CONTENT.productsTagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 3.5vw, 3rem)",fontWeight:400,marginBottom:"14px"},children:SITE_CONTENT.productsTitle}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--muted)",fontSize:"0.85rem",fontWeight:300,maxWidth:"520px",margin:"0 auto",lineHeight:1.7},children:"Your images deserve to be showcased."}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--accent)",fontSize:"0.82rem",fontWeight:400,maxWidth:"520px",margin:"0 auto",lineHeight:1.7},children:"LINKS TO ORDER...COMING SOON!! Until then, please contact me to place all orders."})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-grid-products",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"16px"},children:PRODUCTS.map((p,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{delay:i*0.06,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{padding:"28px 22px",border:"1px solid var(--border)",borderRadius:"3px",textAlign:"center",transition:"all 0.35s ease",background:"var(--card-bg)",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},onMouseEnter:e=>{e.currentTarget.style.borderColor="#D988A4";e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.06)";},onMouseLeave:e=>{e.currentTarget.style.borderColor="#E8E2D8";e.currentTarget.style.boxShadow="none";},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"1.4rem",marginBottom:"12px",color:"var(--accent-light)"},children:p.icon}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.05rem",fontWeight:500,marginBottom:"8px"},children:p.name}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--text-light)",fontSize:"0.78rem",lineHeight:1.7,fontWeight:300,flex:1},children:p.description})]})},i))}),/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{delay:0.3,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginTop:"40px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--muted)",fontSize:"0.78rem",fontWeight:300,marginBottom:"18px"},children:"Have questions about specific products, sizes or pricing? Feel free to contact me...I would love to help with your designs!"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bv-btn-outline",onClick:()=>{setFormData(prev=>({...prev,type:"Other",message:"I'm interested in ordering products! (gallery wraps, acrylics, metals, albums, prints, etc.)"}));scrollTo("contact");},children:"Inquire About Products"})]})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"bv-section",style:{padding:"60px 48px",background:"var(--bg-warm)"},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{maxWidth:"840px",margin:"0 auto"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-gift-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"56px",alignItems:"center"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"},children:"The Perfect Gift"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.6rem, 2.8vw, 2.2rem)",fontWeight:400,marginBottom:"18px",lineHeight:1.3},children:["Give the Gift of ",/*#__PURE__*/(0,jsx_runtime.jsx)("em",{style:{fontStyle:"italic",color:"var(--accent)"},children:"bella"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{color:"var(--text-light)",fontSize:"0.88rem",lineHeight:1.8,fontWeight:300,marginBottom:"8px"},children:["Gift certificates can be used for any session, product, or combination of both ","\u2014"," from a full senior experience to a gorgeous piece of artwork for your home."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--muted)",fontSize:"0.78rem",lineHeight:1.7,fontWeight:300,marginBottom:"20px"},children:"Available in any amount. Never expires. Your recipient(s) will receive a personalized bella digital gift certificate straight to their inbox."}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-gift-amounts",style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"18px"},children:["175","375","500","Custom"].map(amt=>/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>setGiftAmount(amt),style:{padding:"6px 14px",borderRadius:"3px",cursor:"pointer",background:giftAmount===amt?"var(--accent)":"var(--card-bg)",color:giftAmount===amt?"#fff":"var(--text-light)",border:"1px solid "+(giftAmount===amt?"var(--accent)":"var(--border)"),fontSize:"0.7rem",letterSpacing:"0.1em",fontFamily:"var(--font-body)",transition:"all 0.3s ease"},children:amt==="Custom"?"Custom":"$"+amt},amt))}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-gift-buttons",style:{display:"flex",gap:"10px",flexWrap:"wrap",alignItems:"flex-start"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>{setFormData(prev=>({...prev,type:"Gift Certificate",message:"I'm interested in a gift certificate"+(giftAmount==="Custom"?" (custom amount)":" ($"+giftAmount+")")+" for a session or product. Can you send me more details?"}));scrollTo("contact");},className:"bv-btn-outline",children:"Inquire"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>setShowGiftModal(true),className:"bv-btn-primary",children:"Gift a Session or Product"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:()=>setShowHintModal(true),className:"bv-btn-outline",style:{textAlign:"left",lineHeight:1.6},children:["Drop a Hint",/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{style:{display:"block",fontSize:"0.58rem",letterSpacing:"0.05em",textTransform:"none",opacity:0.65,marginTop:"4px",fontWeight:300},children:["\u2727"," Tell Mom you'd love senior photos",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"\u2727"," Remind Grandma her granddaughter's photos would look amazing on her wall",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"\u2727"," Help your sister capture her baby's first year or a milestone anniversary"]})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{background:"var(--card-bg)",border:"1px solid var(--border)",borderRadius:"3px",padding:"36px 28px",textAlign:"center",boxShadow:"0 4px 20px rgba(0,0,0,0.06)"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.6rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--muted)",marginBottom:"18px"},children:"Gift Certificate"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"2.2rem",fontWeight:500,color:"var(--accent)",marginBottom:"6px"},children:giftAmount==="Custom"?"Custom":"$"+giftAmount}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.2rem",fontWeight:400,marginBottom:"14px"},children:"bella vita photography"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:"36px",height:"1px",background:"var(--border)",margin:"0 auto 14px"}}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.72rem",color:"var(--muted)",lineHeight:1.6},children:["Redeemable for any session or product",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"Never expires"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginTop:"14px",display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"6px"},children:["Sessions","Gallery Wraps","Albums","Prints","Acrylics"].map(tag=>/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{fontSize:"0.55rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"3px 10px",borderRadius:"2px",border:"1px solid var(--border-light)",color:"var(--muted)",background:"var(--bg)"},children:tag},tag))})]})]})})})}),showGiftModal&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{onClick:()=>{setShowGiftModal(false);setGiftStep(1);},style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",animation:"bvFadeIn 0.3s ease",padding:"20px"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-modal-inner",onClick:e=>e.stopPropagation(),style:{background:"var(--bg)",borderRadius:"4px",padding:"40px 36px",maxWidth:"480px",width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.15)",animation:"bvScaleIn 0.35s cubic-bezier(0.22,1,0.36,1)",position:"relative",maxHeight:"90vh",overflowY:"auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>{setShowGiftModal(false);setGiftStep(1);},style:{position:"absolute",top:"14px",right:"18px",background:"none",border:"none",color:"var(--text)",fontSize:"1.3rem",cursor:"pointer",opacity:0.35,fontWeight:300},children:"\u2715"}),giftSent?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",padding:"40px 0"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"2.5rem",marginBottom:"16px"},children:"\u2727"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.4rem",color:"var(--accent)",marginBottom:"10px"},children:"Gift Certificate Started!"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{color:"var(--muted)",fontSize:"0.85rem",fontWeight:300,lineHeight:1.7},children:["A surprise email is on its way to ",giftForm.recipientName||"your recipient","!",giftForm.paymentMethod==="venmo"&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"Opening Venmo so you can send payment..."]}),giftForm.paymentMethod==="paypal"&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"Opening PayPal so you can send payment..."]}),giftForm.paymentMethod==="zelle"&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"Send your Zelle payment to: ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{style:{color:"var(--accent)"},children:(_SITE_CONTENT$payment=SITE_CONTENT.payments.zelle)===null||_SITE_CONTENT$payment===void 0?void 0:_SITE_CONTENT$payment.handle})]}),giftForm.paymentMethod==="later"&&/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"Taking you to the contact form so Rebecca can send payment details..."]})]})]}):giftStep===1?/*#__PURE__*//* ── STEP 1: Gift Details ── */(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginBottom:"28px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.62rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"10px"},children:"Step 1 of 2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.6rem",fontWeight:400,marginBottom:"6px"},children:"Gift a Session or Product"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{color:"var(--muted)",fontSize:"0.82rem",fontWeight:300,lineHeight:1.7},children:["Purchase a bella vita gift certificate for someone special. Redeemable for any session, gallery wrap, album, prints, or combination ","\u2014"," they choose!"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"6px"},children:"Your Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"bv-input",placeholder:"Your name",value:giftForm.senderName,onChange:e=>setGiftForm({...giftForm,senderName:e.target.value})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"6px"},children:["Your Email ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{opacity:0.5},children:"(for confirmation)"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"bv-input",type:"email",placeholder:"your@email.com",value:giftForm.senderEmail,onChange:e=>setGiftForm({...giftForm,senderEmail:e.target.value})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"6px"},children:"Recipient's Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"bv-input",placeholder:"Who is this gift for?",value:giftForm.recipientName,onChange:e=>setGiftForm({...giftForm,recipientName:e.target.value})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"6px"},children:"Recipient's Email"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"bv-input",type:"email",placeholder:"their@email.com",value:giftForm.recipientEmail,onChange:e=>setGiftForm({...giftForm,recipientEmail:e.target.value})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"6px"},children:"Gift Certificate Amount"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"bv-input",type:"text",placeholder:"e.g. $175, $375, $500",value:giftForm.giftCertAmount,onChange:e=>setGiftForm({...giftForm,giftCertAmount:e.target.value})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"6px"},children:["Personal Message ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{opacity:0.5},children:"(optional)"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("textarea",{className:"bv-input",placeholder:"Add a personal note... e.g. 'Happy birthday! You deserve to feel beautiful!'",rows:3,value:giftForm.message,onChange:e=>setGiftForm({...giftForm,message:e.target.value}),style:{resize:"vertical",minHeight:"80px"}})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:()=>setGiftStep(2),className:"bv-btn-primary",style:{width:"100%",marginTop:"24px",opacity:!giftForm.recipientEmail||!giftForm.senderName||!giftForm.senderEmail?0.4:1},disabled:!giftForm.recipientEmail||!giftForm.senderName||!giftForm.senderEmail,children:["Next: Choose Payment ","\u2192"]})]}):/*#__PURE__*//* ── STEP 2: Payment Method ── */(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginBottom:"24px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.62rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"10px"},children:"Step 2 of 2"}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.6rem",fontWeight:400,marginBottom:"6px"},children:"Choose Payment Method"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{color:"var(--muted)",fontSize:"0.82rem",fontWeight:300,lineHeight:1.7},children:["Gift certificate for ",giftForm.recipientName||"recipient"," ","\u00b7"," ",giftAmount==="Custom"?"Custom amount":"$"+giftAmount]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{background:"var(--bg-warm)",border:"1px solid var(--border-light)",borderRadius:"3px",padding:"16px 20px",marginBottom:"24px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{fontSize:"0.72rem",color:"var(--muted)",fontWeight:300},children:"Gift certificate"}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{fontFamily:"var(--font-display)",fontSize:"1.1rem",color:"var(--accent)",fontWeight:500},children:giftAmount==="Custom"?"Custom":"$"+giftAmount})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.68rem",color:"var(--muted)",fontWeight:300,lineHeight:1.6},children:["From: ",giftForm.senderName," ","\u2192"," To: ",giftForm.recipientName||"recipient"]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"20px"},children:[{id:"venmo",label:"Venmo",desc:((_SITE_CONTENT$payment2=SITE_CONTENT.payments.venmo)===null||_SITE_CONTENT$payment2===void 0?void 0:_SITE_CONTENT$payment2.handle)||"",icon:"\u24CB"},{id:"paypal",label:"PayPal",desc:((_SITE_CONTENT$payment3=SITE_CONTENT.payments.paypal)===null||_SITE_CONTENT$payment3===void 0?void 0:_SITE_CONTENT$payment3.handle)||"",icon:"\u24C5"},{id:"zelle",label:"Zelle",desc:((_SITE_CONTENT$payment4=SITE_CONTENT.payments.zelle)===null||_SITE_CONTENT$payment4===void 0?void 0:_SITE_CONTENT$payment4.handle)||"",icon:"\u24CF"},{id:"later",label:"Pay Later",desc:"Rebecca will send payment details via email",icon:"\u2709"}].map(method=>/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:()=>setGiftForm({...giftForm,paymentMethod:method.id}),style:{display:"flex",alignItems:"center",gap:"14px",width:"100%",padding:"14px 18px",borderRadius:"3px",cursor:"pointer",textAlign:"left",background:giftForm.paymentMethod===method.id?"var(--accent)":"var(--card-bg)",color:giftForm.paymentMethod===method.id?"#fff":"var(--text)",border:"1px solid "+(giftForm.paymentMethod===method.id?"var(--accent)":"var(--border)"),transition:"all 0.3s ease",fontFamily:"var(--font-body)"},onMouseEnter:e=>{if(giftForm.paymentMethod!==method.id){e.currentTarget.style.borderColor="var(--accent-light)";e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.04)";}},onMouseLeave:e=>{if(giftForm.paymentMethod!==method.id){e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.boxShadow="none";}},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{fontSize:"1.2rem",opacity:giftForm.paymentMethod===method.id?1:0.5,flexShrink:0},children:method.icon}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{flex:1},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.85rem",fontWeight:400,letterSpacing:"0.04em"},children:method.label}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",opacity:giftForm.paymentMethod===method.id?0.8:0.5,marginTop:"2px",fontWeight:300},children:method.desc})]}),giftForm.paymentMethod===method.id&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{fontSize:"0.9rem"},children:"\u2713"})]},method.id))}),giftForm.paymentMethod==="zelle"&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{background:"var(--bg-warm)",border:"1px solid var(--border-light)",borderRadius:"3px",padding:"14px 18px",marginBottom:"16px",animation:"bvSlideIn 0.3s ease"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.68rem",color:"var(--text-light)",lineHeight:1.7,fontWeight:300},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{style:{fontWeight:500,color:"var(--text)"},children:"Zelle Instructions:"})," Open your banking app, select Zelle, and send ",giftAmount!=="Custom"?"$"+giftAmount:"your amount"," to ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{style:{color:"var(--accent)"},children:(_SITE_CONTENT$payment5=SITE_CONTENT.payments.zelle)===null||_SITE_CONTENT$payment5===void 0?void 0:_SITE_CONTENT$payment5.handle}),". Include \"",giftForm.recipientName||"gift certificate","\" in the memo."]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"12px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:()=>setGiftStep(1),className:"bv-btn-outline",style:{flex:"0 0 auto",padding:"14px 20px"},children:["\u2190"," Back"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:handleSendGift,className:"bv-btn-primary",style:{flex:1,opacity:!giftForm.paymentMethod?0.4:1},disabled:!giftForm.paymentMethod,children:[giftForm.paymentMethod==="venmo"?"Send & Open Venmo":giftForm.paymentMethod==="paypal"?"Send & Open PayPal":giftForm.paymentMethod==="zelle"?"Send Gift Notification":giftForm.paymentMethod==="later"?"Send & Pay Later":"Complete Purchase"," ","\u2727"]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{textAlign:"center",marginTop:"14px",fontSize:"0.68rem",color:"var(--muted)",fontWeight:300,lineHeight:1.6},children:giftForm.paymentMethod==="later"?"A surprise email will be sent to your recipient. Rebecca will follow up with payment details.":"A surprise email will be sent to your recipient and Rebecca will be notified of your purchase."})]})]})}),showHintModal&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{onClick:()=>setShowHintModal(false),style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",animation:"bvFadeIn 0.3s ease",padding:"20px"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-modal-inner",onClick:e=>e.stopPropagation(),style:{background:"var(--bg)",borderRadius:"4px",padding:"36px 32px",maxWidth:"480px",width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.15)",animation:"bvScaleIn 0.35s cubic-bezier(0.22,1,0.36,1)",position:"relative",maxHeight:"90vh",overflowY:"auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>setShowHintModal(false),style:{position:"absolute",top:"14px",right:"18px",background:"none",border:"none",color:"var(--text)",fontSize:"1.3rem",cursor:"pointer",opacity:0.35,fontWeight:300},children:"\u2715"}),hintSent?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",padding:"40px 0"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"2.5rem",marginBottom:"16px"},children:"\u2661"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.4rem",color:"var(--accent)",marginBottom:"10px"},children:hintForm.scenario==="hint"?"Hint Dropped!":"Recommendation Sent!"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--muted)",fontSize:"0.85rem",fontWeight:300,lineHeight:1.7},children:"Your email app will open with the message ready to review and send. Rebecca will be notified too!"})]}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginBottom:"22px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.62rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"10px"},children:"Drop a Hint or Recommend Us"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("h3",{style:{fontFamily:"var(--font-display)",fontSize:"1.4rem",fontWeight:400,lineHeight:1.3},children:["We'll write the email ","\u2014",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"you just hit send"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"16px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"8px"},children:"I want to..."}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:()=>setHintForm({...hintForm,scenario:"hint",occasion:"",forWho:""}),style:{padding:"12px 16px",borderRadius:"3px",cursor:"pointer",textAlign:"left",background:hintForm.scenario==="hint"?"var(--accent)":"var(--card-bg)",color:hintForm.scenario==="hint"?"#fff":"var(--text-light)",border:"1px solid "+(hintForm.scenario==="hint"?"var(--accent)":"var(--border)"),fontFamily:"var(--font-body)",transition:"all 0.3s ease"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.82rem",fontWeight:400},children:["Drop a hint that I'd love a session ","\u2727"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.66rem",opacity:0.7,marginTop:"2px",fontStyle:"italic"},children:"\"Mom... just saying, I'd love this for my birthday\""})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:()=>setHintForm({...hintForm,scenario:"recommend",occasion:"",forWho:""}),style:{padding:"12px 16px",borderRadius:"3px",cursor:"pointer",textAlign:"left",background:hintForm.scenario==="recommend"?"var(--accent)":"var(--card-bg)",color:hintForm.scenario==="recommend"?"#fff":"var(--text-light)",border:"1px solid "+(hintForm.scenario==="recommend"?"var(--accent)":"var(--border)"),fontFamily:"var(--font-body)",transition:"all 0.3s ease"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.82rem",fontWeight:400},children:["Suggest bella vita for someone else ","\u2661"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.66rem",opacity:0.7,marginTop:"2px",fontStyle:"italic"},children:"\"Mom, you should book Emma's senior photos with her!\""})]})]})]}),hintForm.scenario&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{animation:"bvSlideIn 0.3s ease"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{marginBottom:"14px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"8px"},children:"What kind of session?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["Senior Portraits","Family Photos","Wedding","Products / Gift","General"].map(occ=>/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>setHintForm({...hintForm,occasion:occ}),style:{padding:"7px 14px",borderRadius:"3px",cursor:"pointer",background:hintForm.occasion===occ?"var(--accent)":"var(--card-bg)",color:hintForm.occasion===occ?"#fff":"var(--text-light)",border:"1px solid "+(hintForm.occasion===occ?"var(--accent)":"var(--border)"),fontSize:"0.66rem",letterSpacing:"0.1em",fontFamily:"var(--font-body)",transition:"all 0.3s ease"},children:occ==="General"?"Other":occ},occ))})]}),hintForm.occasion&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px",animation:"bvSlideIn 0.3s ease"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"5px"},children:"Your Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"bv-input",style:{padding:"11px 14px"},placeholder:"Your name",value:hintForm.senderName,onChange:e=>setHintForm({...hintForm,senderName:e.target.value})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"5px"},children:hintForm.scenario==="hint"?"Who are you sending this to?":"Who are you emailing?"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"bv-input",style:{padding:"11px 14px"},placeholder:hintForm.scenario==="hint"?"e.g. Mom, Grandma, Dad":"e.g. Mom, a friend, your sister",value:hintForm.recipientName,onChange:e=>setHintForm({...hintForm,recipientName:e.target.value})})]}),hintForm.scenario==="recommend"&&hintForm.occasion!=="General"&&hintForm.occasion!=="Products / Gift"&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"5px"},children:[hintForm.occasion==="Senior Portraits"?"Who's the senior?":hintForm.occasion==="Wedding"?"Who's getting married?":"Who's in the photos?"," ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{opacity:0.45,textTransform:"none",letterSpacing:"0.05em"},children:"(optional)"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"bv-input",style:{padding:"11px 14px"},placeholder:hintForm.occasion==="Senior Portraits"?"e.g. Emma (their granddaughter)":hintForm.occasion==="Wedding"?"e.g. Sarah & Jake":"e.g. their family",value:hintForm.forWho,onChange:e=>setHintForm({...hintForm,forWho:e.target.value})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"5px"},children:"Their Email Address"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"bv-input",style:{padding:"11px 14px"},type:"email",placeholder:"their@email.com",value:hintForm.recipientEmail,onChange:e=>setHintForm({...hintForm,recipientEmail:e.target.value})})]}),hintForm.senderName&&hintForm.recipientName&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{background:"var(--bg-warm)",border:"1px solid var(--border-light)",borderRadius:"3px",padding:"12px 14px",animation:"bvFadeIn 0.3s ease"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.56rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"6px"},children:["\u2709"," Email Preview"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{fontSize:"0.75rem",color:"var(--text-light)",lineHeight:1.65,fontStyle:"italic",fontWeight:300,margin:0},children:hintForm.scenario==="hint"?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Hey ",hintForm.recipientName,"! So... this is me not-so-subtly dropping a hint. ",hintForm.occasion==="Senior Portraits"?"I've been looking into senior portrait photographers and I found someone AMAZING...":hintForm.occasion==="Wedding"?"We've been looking at wedding photographers and we found THE one...":hintForm.occasion==="Family Photos"?"I've been wanting family photos SO badly and I found the perfect photographer...":hintForm.occasion==="Products / Gift"?"I found this photographer with the most beautiful gallery wraps and albums...":"I found this amazing photographer and a session would make my year..."]}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Hey ",hintForm.recipientName,"! ",hintForm.occasion==="Senior Portraits"?"I HAD to tell you about this photographer"+(hintForm.forWho?" for "+hintForm.forWho+"'s senior photos":" for senior portraits")+". Her work is unreal...":hintForm.occasion==="Wedding"?"I found the most beautiful wedding photographer"+(hintForm.forWho?" for "+hintForm.forWho+"'s big day":"")+"! Her work is stunning...":hintForm.occasion==="Family Photos"?"I found the most wonderful family photographer and immediately thought of you...":hintForm.occasion==="Products / Gift"?"I know someone who'd love a beautiful gallery wrap or album of their photos...":"I came across this incredible photographer and thought of you..."]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.6rem",color:"var(--muted)",marginTop:"6px",opacity:0.5},children:["+ link to website, contact info & sign-off from ",hintForm.senderName]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:handleSendHint,className:"bv-btn-primary",style:{width:"100%",marginTop:"4px",opacity:!hintForm.recipientEmail||!hintForm.senderName?0.4:1},children:[hintForm.scenario==="hint"?"Drop My Hint":"Send Recommendation"," ","\u2661"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{textAlign:"center",fontSize:"0.65rem",color:"var(--muted)",fontWeight:300,lineHeight:1.5,margin:0},children:"Opens your email app with the full message ready to review & send."})]})]})]})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"bv-section",style:{padding:"80px 48px"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginBottom:"60px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"},children:SITE_CONTENT.testimonialsTagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 3.5vw, 3rem)",fontWeight:400},children:SITE_CONTENT.testimonialsTitle})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-grid-testimonials bv-testimonials-scroll",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"32px"},children:TESTIMONIALS.map((t,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{delay:i*0.1,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{padding:"32px",background:"var(--card-bg)",border:"1px solid var(--border-light)",borderRadius:"3px",boxShadow:"0 1px 3px rgba(0,0,0,0.04)",height:"100%"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"2.5rem",color:"var(--accent-light)",lineHeight:1,marginBottom:"8px"},children:"\u201c"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{fontFamily:"var(--font-display)",fontSize:"1.05rem",lineHeight:1.75,fontStyle:"italic",fontWeight:400,color:"var(--text-light)",marginBottom:"24px"},children:t.text}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.75rem",letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--accent)",fontWeight:500},children:t.name}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.68rem",color:"var(--muted)",marginTop:"4px"},children:t.event})]})},i))})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:"bv-section",style:{padding:"60px 48px",background:"var(--bg-warm)"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginBottom:"48px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"1.2rem",marginBottom:"8px"},children:"\u2b50\u2b50\u2b50\u2b50\u2b50"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.6rem",fontWeight:400,marginBottom:"6px"},children:"5.0 on Google"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.7rem",color:"var(--muted)"},children:"Livingston & Oakland County"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-grid-reviews",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px"},children:GOOGLE_REVIEWS.map((r,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{delay:i*0.06,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{padding:"20px",background:"var(--card-bg)",border:"1px solid var(--border)",borderRadius:"3px",height:"100%",display:"flex",flexDirection:"column"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{width:"34px",height:"34px",borderRadius:"50%",background:"var(--accent-light)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontSize:"0.9rem",color:"#fff",fontWeight:500},children:r.name[0]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.82rem",fontWeight:400},children:r.name}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.6rem",color:"var(--muted)"},children:r.date})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.75rem",color:"var(--accent)"},children:"\u2605".repeat(r.stars)})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{fontSize:"0.82rem",color:"var(--text-light)",lineHeight:1.7,fontWeight:300,flex:1},children:r.text})]})},i))})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{id:"faq",className:"bv-section",style:{padding:"80px 48px"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{maxWidth:"760px",margin:"0 auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginBottom:"56px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"},children:SITE_CONTENT.faqTagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 3.5vw, 3rem)",fontWeight:400},children:SITE_CONTENT.faqTitle})]})}),FAQS.map((faq,i)=>/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{delay:i*0.05,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{borderBottom:"1px solid var(--border-light)"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:()=>setOpenFaq(openFaq===i?null:i),"aria-expanded":openFaq===i,style:{width:"100%",padding:"22px 0",background:"none",border:"none",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",textAlign:"left",color:"var(--text)"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{fontFamily:"var(--font-display)",fontSize:"1.08rem",fontWeight:400,paddingRight:"20px"},children:faq.q}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--accent)",fontSize:"1.2rem",fontWeight:300,flexShrink:0,transform:openFaq===i?"rotate(45deg)":"rotate(0deg)",transition:"transform 0.3s ease"},children:"+"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{maxHeight:openFaq===i?"280px":"0",overflow:"hidden",transition:"max-height 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",opacity:openFaq===i?1:0},children:/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{padding:"0 0 22px",color:"var(--text-light)",fontSize:"0.88rem",lineHeight:1.8,fontWeight:300},children:faq.a})})]})},i)),/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{delay:0.3,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{textAlign:"center",marginTop:"40px"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{style:{color:"var(--muted)",fontSize:"0.82rem",fontWeight:300},children:["Something else? ",/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"mailto:bellavitaphoto@rocketmail.com",style:{color:"var(--accent)",textDecoration:"none",borderBottom:"1px solid var(--accent-light)"},children:"Email me"})]})})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{id:"contact",className:"bv-section",style:{padding:"80px 48px",background:"var(--bg-warm)"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{maxWidth:"760px",margin:"0 auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center",marginBottom:"56px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.65rem",letterSpacing:"0.35em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"},children:SITE_CONTENT.contactTagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2rem, 3.5vw, 3rem)",fontWeight:400,marginBottom:"16px"},children:SITE_CONTENT.contactTitle}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--text-light)",fontSize:"0.9rem",lineHeight:1.8,fontWeight:300,maxWidth:"500px",margin:"0 auto"},children:SITE_CONTENT.contactDescription}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{marginTop:"10px"},children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"mailto:bellavitaphoto@rocketmail.com",style:{color:"var(--accent)",textDecoration:"none",fontSize:"0.9rem",borderBottom:"1px solid var(--accent-light)"},children:"bellavitaphoto@rocketmail.com"})})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(AnimatedSection,{delay:0.1,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-contact-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:formErrors.name?"#c9544d":"var(--muted)",display:"block",marginBottom:"6px",transition:"color 0.3s ease"},children:"Name"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"bv-input",placeholder:"Your full name",value:formData.name,onChange:e=>{setFormData({...formData,name:e.target.value});if(formErrors.name)setFormErrors(prev=>({...prev,name:undefined}));},style:{borderColor:formErrors.name?"#c9544d":undefined}}),formErrors.name&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.68rem",color:"#c9544d",marginTop:"5px",animation:"bvSlideIn 0.3s ease"},children:formErrors.name})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:formErrors.email?"#c9544d":"var(--muted)",display:"block",marginBottom:"6px",transition:"color 0.3s ease"},children:"Email"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{className:"bv-input",type:"email",placeholder:"your@email.com",value:formData.email,onChange:e=>{setFormData({...formData,email:e.target.value});if(formErrors.email)setFormErrors(prev=>({...prev,email:undefined}));},style:{borderColor:formErrors.email?"#c9544d":undefined}}),formErrors.email&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.68rem",color:"#c9544d",marginTop:"5px",animation:"bvSlideIn 0.3s ease"},children:formErrors.email})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{marginTop:"20px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"var(--muted)",display:"block",marginBottom:"8px"},children:"Session Type"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"bv-contact-session-btns",style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:["Senior Session","Family Session","Milestone Session","Wedding","Gift Certificate","Other"].map(type=>/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>setFormData({...formData,type}),style:{padding:"7px 18px",borderRadius:"3px",cursor:"pointer",background:formData.type===type?"var(--accent)":"var(--card-bg)",color:formData.type===type?"#fff":"var(--text-light)",border:"1px solid "+(formData.type===type?"var(--accent)":"var(--border)"),fontSize:"0.7rem",letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"var(--font-body)",transition:"all 0.3s ease"},children:type},type))})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{marginTop:"20px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{style:{fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:formErrors.message?"#c9544d":"var(--muted)",display:"block",marginBottom:"6px",transition:"color 0.3s ease"},children:"Your Story"}),/*#__PURE__*/(0,jsx_runtime.jsx)("textarea",{className:"bv-input",placeholder:"Tell me about you...",rows:5,value:formData.message,onChange:e=>{setFormData({...formData,message:e.target.value});if(formErrors.message)setFormErrors(prev=>({...prev,message:undefined}));},style:{resize:"vertical",minHeight:"110px",borderColor:formErrors.message?"#c9544d":undefined}}),formErrors.message&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.68rem",color:"#c9544d",marginTop:"5px",animation:"bvSlideIn 0.3s ease"},children:formErrors.message})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginTop:"36px",textAlign:"center"},children:formSent?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.2rem",color:"var(--accent)",animation:"bvFadeIn 0.4s ease"},children:["Thank you ","\u2014"," I'll be in touch soon ","\u2727"]}):/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bv-btn-primary",onClick:handleSubmit,children:"Send Message"})})]})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(AnimatedSection,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-section",style:{padding:"52px 48px",textAlign:"center"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.62rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"10px"},children:"Follow Along"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("h3",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(1.4rem, 2.6vw, 2rem)",fontWeight:400,marginBottom:"12px"},children:["See the ",/*#__PURE__*/(0,jsx_runtime.jsx)("em",{style:{fontStyle:"italic",color:"var(--accent)"},children:"behind the scenes"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{color:"var(--muted)",fontSize:"0.82rem",fontWeight:300,maxWidth:"380px",margin:"0 auto 22px",lineHeight:1.7},children:"Session sneak peeks, bloopers, and the occasional bella pet cameo."}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"https://www.instagram.com/bellavitaphotography2/",target:"_blank",rel:"noopener noreferrer",className:"bv-btn-outline",style:{textDecoration:"none"},children:"@bellavitaphotography2"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("footer",{style:{padding:"52px 48px 28px",borderTop:"1px solid var(--border-light)",background:"var(--bg-warm)"},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"48px",marginBottom:"40px"},className:"bv-footer-grid",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontFamily:"var(--font-display)",fontSize:"1.4rem",fontWeight:500,letterSpacing:"0.04em",marginBottom:"12px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--accent)"},children:"b"}),"ella ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--accent)"},children:"v"}),"ita"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{style:{fontSize:"0.82rem",color:"var(--text-light)",lineHeight:1.8,fontWeight:300,maxWidth:"280px"},children:SITE_CONTENT.footerTagline})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"16px",fontWeight:400},children:"Navigate"}),["Portfolio","About","Services","FAQ","Contact"].map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{onClick:()=>scrollTo(item.toLowerCase()),style:{fontSize:"0.82rem",color:"var(--text-light)",cursor:"pointer",padding:"4px 0",fontWeight:300,transition:"color 0.3s ease"},onMouseEnter:e=>e.currentTarget.style.color="#C4567A",onMouseLeave:e=>e.currentTarget.style.color="#5A554E",children:item},item))]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"16px",fontWeight:400},children:"Sessions"}),["Senior Sessions","Family Sessions","Milestones & Minis","Weddings"].map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.82rem",color:"var(--text-light)",padding:"4px 0",fontWeight:300},children:item},item))]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--accent)",marginBottom:"16px",fontWeight:400},children:"Connect"}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"https://www.instagram.com/bellavitaphotography2/",target:"_blank",rel:"noopener noreferrer",style:{display:"block",fontSize:"0.82rem",color:"var(--text-light)",textDecoration:"none",padding:"4px 0",fontWeight:300},children:"Instagram"}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"https://www.facebook.com/bellavitaphotography2",target:"_blank",rel:"noopener noreferrer",style:{display:"block",fontSize:"0.82rem",color:"var(--text-light)",textDecoration:"none",padding:"4px 0",fontWeight:300},children:"Facebook"}),/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"mailto:bellavitaphoto@rocketmail.com",style:{display:"block",fontSize:"0.82rem",color:"var(--text-light)",textDecoration:"none",padding:"4px 0",fontWeight:300},children:"bellavitaphoto@rocketmail.com"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("button",{onClick:()=>setCurrentView("client-gallery"),className:"bv-btn-outline",style:{marginTop:"12px",padding:"10px 20px",fontSize:"0.62rem"},children:["Client Gallery ","\u2192"]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{borderTop:"1px solid var(--border-light)",paddingTop:"20px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{style:{fontSize:"0.6rem",color:"var(--muted)",letterSpacing:"0.08em",opacity:0.6},children:["\u00a9"," ",new Date().getFullYear()," bella vita photography. All rights reserved."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"bv-nav-link",onClick:()=>setCurrentView("admin"),style:{fontSize:"0.58rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"var(--border)",cursor:"pointer"},children:"Admin"})]})]})}),scrollY>800&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bv-sticky-cta",style:{position:"fixed",bottom:0,left:0,right:0,zIndex:9989,padding:"12px 20px",background:"rgba(252,250,246,0.97)",backdropFilter:"blur(16px)",borderTop:"1px solid var(--border-light)",display:"none",justifyContent:"space-between",alignItems:"center",animation:"bvSlideIn 0.3s ease"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{fontFamily:"var(--font-display)",fontSize:"0.95rem",fontWeight:500},children:"Ready to book?"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bv-btn-primary",onClick:()=>scrollTo("contact"),style:{padding:"10px 24px",fontSize:"0.65rem",margin:0},children:"Book Now"})]}),scrollY>600&&/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Back to top",className:"bv-back-to-top",style:{position:"fixed",bottom:"28px",right:"28px",zIndex:9990,width:"44px",height:"44px",borderRadius:"50%",background:"var(--accent)",color:"#fff",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",boxShadow:"0 4px 16px rgba(196,86,122,0.3)",animation:"bvFadeIn 0.35s ease",transition:"all 0.3s ease"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 6px 24px rgba(196,86,122,0.4)";},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 16px rgba(196,86,122,0.3)";},children:"\u2191"})]});}
;// ./src/index.js
const root=client.createRoot(document.getElementById('root'));root.render(/*#__PURE__*/(0,jsx_runtime.jsx)(react.StrictMode,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(PhotographyWebsite,{})}));
/******/ })()
;
//# sourceMappingURL=main.c1d25722.js.map