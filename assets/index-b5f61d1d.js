var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_index_001 = __commonJS({
  "assets/index-b5f61d1d.js"(exports, module) {
    function _mergeNamespaces(n2, m2) {
      for (var i2 = 0; i2 < m2.length; i2++) {
        const e2 = m2[i2];
        if (typeof e2 !== "string" && !Array.isArray(e2)) {
          for (const k2 in e2) {
            if (k2 !== "default" && !(k2 in n2)) {
              const d2 = Object.getOwnPropertyDescriptor(e2, k2);
              if (d2) {
                Object.defineProperty(n2, k2, d2.get ? d2 : {
                  enumerable: true,
                  get: () => e2[k2]
                });
              }
            }
          }
        }
      }
      return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
    }
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "modulepreload")
              processPreload(node);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
          fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
          fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous")
          fetchOpts.credentials = "omit";
        else
          fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    function getDefaultExportFromCjs(x2) {
      return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
    }
    var jsxRuntime = { exports: {} };
    var reactJsxRuntime_production_min = {};
    var react = { exports: {} };
    var react_production_min = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l$6 = Symbol.for("react.element"), n$7 = Symbol.for("react.portal"), p$6 = Symbol.for("react.fragment"), q$3 = Symbol.for("react.strict_mode"), r$4 = Symbol.for("react.profiler"), t$6 = Symbol.for("react.provider"), u$7 = Symbol.for("react.context"), v$4 = Symbol.for("react.forward_ref"), w$5 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$2 = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
    function A$2(a2) {
      if (null === a2 || "object" !== typeof a2)
        return null;
      a2 = z$1 && a2[z$1] || a2["@@iterator"];
      return "function" === typeof a2 ? a2 : null;
    }
    var B$1 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, C$2 = Object.assign, D$4 = {};
    function E$2(a2, b2, e2) {
      this.props = a2;
      this.context = b2;
      this.refs = D$4;
      this.updater = e2 || B$1;
    }
    E$2.prototype.isReactComponent = {};
    E$2.prototype.setState = function(a2, b2) {
      if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a2, b2, "setState");
    };
    E$2.prototype.forceUpdate = function(a2) {
      this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
    };
    function F$3() {
    }
    F$3.prototype = E$2.prototype;
    function G$2(a2, b2, e2) {
      this.props = a2;
      this.context = b2;
      this.refs = D$4;
      this.updater = e2 || B$1;
    }
    var H$2 = G$2.prototype = new F$3();
    H$2.constructor = G$2;
    C$2(H$2, E$2.prototype);
    H$2.isPureReactComponent = true;
    var I$4 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
    function M$5(a2, b2, e2) {
      var d2, c2 = {}, k2 = null, h2 = null;
      if (null != b2)
        for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
          J$1.call(b2, d2) && !L$1.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
      var g2 = arguments.length - 2;
      if (1 === g2)
        c2.children = e2;
      else if (1 < g2) {
        for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
          f2[m2] = arguments[m2 + 2];
        c2.children = f2;
      }
      if (a2 && a2.defaultProps)
        for (d2 in g2 = a2.defaultProps, g2)
          void 0 === c2[d2] && (c2[d2] = g2[d2]);
      return { $$typeof: l$6, type: a2, key: k2, ref: h2, props: c2, _owner: K$1.current };
    }
    function N$3(a2, b2) {
      return { $$typeof: l$6, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
    }
    function O$4(a2) {
      return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$6;
    }
    function escape(a2) {
      var b2 = { "=": "=0", ":": "=2" };
      return "$" + a2.replace(/[=:]/g, function(a3) {
        return b2[a3];
      });
    }
    var P$2 = /\/+/g;
    function Q$2(a2, b2) {
      return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
    }
    function R$2(a2, b2, e2, d2, c2) {
      var k2 = typeof a2;
      if ("undefined" === k2 || "boolean" === k2)
        a2 = null;
      var h2 = false;
      if (null === a2)
        h2 = true;
      else
        switch (k2) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a2.$$typeof) {
              case l$6:
              case n$7:
                h2 = true;
            }
        }
      if (h2)
        return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$2(h2, 0) : d2, I$4(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$2, "$&/") + "/"), R$2(c2, b2, e2, "", function(a3) {
          return a3;
        })) : null != c2 && (O$4(c2) && (c2 = N$3(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$2, "$&/") + "/") + a2)), b2.push(c2)), 1;
      h2 = 0;
      d2 = "" === d2 ? "." : d2 + ":";
      if (I$4(a2))
        for (var g2 = 0; g2 < a2.length; g2++) {
          k2 = a2[g2];
          var f2 = d2 + Q$2(k2, g2);
          h2 += R$2(k2, b2, e2, f2, c2);
        }
      else if (f2 = A$2(a2), "function" === typeof f2)
        for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
          k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$2(k2, b2, e2, f2, c2);
      else if ("object" === k2)
        throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
      return h2;
    }
    function S$5(a2, b2, e2) {
      if (null == a2)
        return a2;
      var d2 = [], c2 = 0;
      R$2(a2, d2, "", "", function(a3) {
        return b2.call(e2, a3, c2++);
      });
      return d2;
    }
    function T$3(a2) {
      if (-1 === a2._status) {
        var b2 = a2._result;
        b2 = b2();
        b2.then(function(b3) {
          if (0 === a2._status || -1 === a2._status)
            a2._status = 1, a2._result = b3;
        }, function(b3) {
          if (0 === a2._status || -1 === a2._status)
            a2._status = 2, a2._result = b3;
        });
        -1 === a2._status && (a2._status = 0, a2._result = b2);
      }
      if (1 === a2._status)
        return a2._result.default;
      throw a2._result;
    }
    var U$4 = { current: null }, V$2 = { transition: null }, W$3 = { ReactCurrentDispatcher: U$4, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$1 };
    react_production_min.Children = { map: S$5, forEach: function(a2, b2, e2) {
      S$5(a2, function() {
        b2.apply(this, arguments);
      }, e2);
    }, count: function(a2) {
      var b2 = 0;
      S$5(a2, function() {
        b2++;
      });
      return b2;
    }, toArray: function(a2) {
      return S$5(a2, function(a3) {
        return a3;
      }) || [];
    }, only: function(a2) {
      if (!O$4(a2))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a2;
    } };
    react_production_min.Component = E$2;
    react_production_min.Fragment = p$6;
    react_production_min.Profiler = r$4;
    react_production_min.PureComponent = G$2;
    react_production_min.StrictMode = q$3;
    react_production_min.Suspense = w$5;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$3;
    react_production_min.cloneElement = function(a2, b2, e2) {
      if (null === a2 || void 0 === a2)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
      var d2 = C$2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
      if (null != b2) {
        void 0 !== b2.ref && (k2 = b2.ref, h2 = K$1.current);
        void 0 !== b2.key && (c2 = "" + b2.key);
        if (a2.type && a2.type.defaultProps)
          var g2 = a2.type.defaultProps;
        for (f2 in b2)
          J$1.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
      }
      var f2 = arguments.length - 2;
      if (1 === f2)
        d2.children = e2;
      else if (1 < f2) {
        g2 = Array(f2);
        for (var m2 = 0; m2 < f2; m2++)
          g2[m2] = arguments[m2 + 2];
        d2.children = g2;
      }
      return { $$typeof: l$6, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
    };
    react_production_min.createContext = function(a2) {
      a2 = { $$typeof: u$7, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a2.Provider = { $$typeof: t$6, _context: a2 };
      return a2.Consumer = a2;
    };
    react_production_min.createElement = M$5;
    react_production_min.createFactory = function(a2) {
      var b2 = M$5.bind(null, a2);
      b2.type = a2;
      return b2;
    };
    react_production_min.createRef = function() {
      return { current: null };
    };
    react_production_min.forwardRef = function(a2) {
      return { $$typeof: v$4, render: a2 };
    };
    react_production_min.isValidElement = O$4;
    react_production_min.lazy = function(a2) {
      return { $$typeof: y$2, _payload: { _status: -1, _result: a2 }, _init: T$3 };
    };
    react_production_min.memo = function(a2, b2) {
      return { $$typeof: x$1, type: a2, compare: void 0 === b2 ? null : b2 };
    };
    react_production_min.startTransition = function(a2) {
      var b2 = V$2.transition;
      V$2.transition = {};
      try {
        a2();
      } finally {
        V$2.transition = b2;
      }
    };
    react_production_min.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    react_production_min.useCallback = function(a2, b2) {
      return U$4.current.useCallback(a2, b2);
    };
    react_production_min.useContext = function(a2) {
      return U$4.current.useContext(a2);
    };
    react_production_min.useDebugValue = function() {
    };
    react_production_min.useDeferredValue = function(a2) {
      return U$4.current.useDeferredValue(a2);
    };
    react_production_min.useEffect = function(a2, b2) {
      return U$4.current.useEffect(a2, b2);
    };
    react_production_min.useId = function() {
      return U$4.current.useId();
    };
    react_production_min.useImperativeHandle = function(a2, b2, e2) {
      return U$4.current.useImperativeHandle(a2, b2, e2);
    };
    react_production_min.useInsertionEffect = function(a2, b2) {
      return U$4.current.useInsertionEffect(a2, b2);
    };
    react_production_min.useLayoutEffect = function(a2, b2) {
      return U$4.current.useLayoutEffect(a2, b2);
    };
    react_production_min.useMemo = function(a2, b2) {
      return U$4.current.useMemo(a2, b2);
    };
    react_production_min.useReducer = function(a2, b2, e2) {
      return U$4.current.useReducer(a2, b2, e2);
    };
    react_production_min.useRef = function(a2) {
      return U$4.current.useRef(a2);
    };
    react_production_min.useState = function(a2) {
      return U$4.current.useState(a2);
    };
    react_production_min.useSyncExternalStore = function(a2, b2, e2) {
      return U$4.current.useSyncExternalStore(a2, b2, e2);
    };
    react_production_min.useTransition = function() {
      return U$4.current.useTransition();
    };
    react_production_min.version = "18.2.0";
    {
      react.exports = react_production_min;
    }
    var reactExports = react.exports;
    const m$4 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
    const e$3 = /* @__PURE__ */ _mergeNamespaces({
      __proto__: null,
      default: m$4
    }, [reactExports]);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f$4 = reactExports, k$1 = Symbol.for("react.element"), l$5 = Symbol.for("react.fragment"), m$3 = Object.prototype.hasOwnProperty, n$6 = f$4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$5 = { key: true, ref: true, __self: true, __source: true };
    function q$2(c2, a2, g2) {
      var b2, d2 = {}, e2 = null, h2 = null;
      void 0 !== g2 && (e2 = "" + g2);
      void 0 !== a2.key && (e2 = "" + a2.key);
      void 0 !== a2.ref && (h2 = a2.ref);
      for (b2 in a2)
        m$3.call(a2, b2) && !p$5.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
      if (c2 && c2.defaultProps)
        for (b2 in a2 = c2.defaultProps, a2)
          void 0 === d2[b2] && (d2[b2] = a2[b2]);
      return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$6.current };
    }
    reactJsxRuntime_production_min.Fragment = l$5;
    reactJsxRuntime_production_min.jsx = q$2;
    reactJsxRuntime_production_min.jsxs = q$2;
    {
      jsxRuntime.exports = reactJsxRuntime_production_min;
    }
    var jsxRuntimeExports = jsxRuntime.exports;
    var client = {};
    var reactDom = { exports: {} };
    var reactDom_production_min = {};
    var scheduler = { exports: {} };
    var scheduler_production_min = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function(exports2) {
      function f2(a2, b2) {
        var c2 = a2.length;
        a2.push(b2);
        a:
          for (; 0 < c2; ) {
            var d2 = c2 - 1 >>> 1, e2 = a2[d2];
            if (0 < g2(e2, b2))
              a2[d2] = b2, a2[c2] = e2, c2 = d2;
            else
              break a;
          }
      }
      function h2(a2) {
        return 0 === a2.length ? null : a2[0];
      }
      function k2(a2) {
        if (0 === a2.length)
          return null;
        var b2 = a2[0], c2 = a2.pop();
        if (c2 !== b2) {
          a2[0] = c2;
          a:
            for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
              var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
              if (0 > g2(C2, c2))
                n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
              else if (n2 < e2 && 0 > g2(x2, c2))
                a2[d2] = x2, a2[n2] = c2, d2 = n2;
              else
                break a;
            }
        }
        return b2;
      }
      function g2(a2, b2) {
        var c2 = a2.sortIndex - b2.sortIndex;
        return 0 !== c2 ? c2 : a2.id - b2.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l2 = performance;
        exports2.unstable_now = function() {
          return l2.now();
        };
      } else {
        var p2 = Date, q2 = p2.now();
        exports2.unstable_now = function() {
          return p2.now() - q2;
        };
      }
      var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a2) {
        for (var b2 = h2(t2); null !== b2; ) {
          if (null === b2.callback)
            k2(t2);
          else if (b2.startTime <= a2)
            k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
          else
            break;
          b2 = h2(t2);
        }
      }
      function H2(a2) {
        B2 = false;
        G2(a2);
        if (!A2)
          if (null !== h2(r2))
            A2 = true, I2(J2);
          else {
            var b2 = h2(t2);
            null !== b2 && K2(H2, b2.startTime - a2);
          }
      }
      function J2(a2, b2) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z2 = true;
        var c2 = y2;
        try {
          G2(b2);
          for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
            var d2 = v2.callback;
            if ("function" === typeof d2) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e2 = d2(v2.expirationTime <= b2);
              b2 = exports2.unstable_now();
              "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
              G2(b2);
            } else
              k2(r2);
            v2 = h2(r2);
          }
          if (null !== v2)
            var w2 = true;
          else {
            var m2 = h2(t2);
            null !== m2 && K2(H2, m2.startTime - b2);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c2, z2 = false;
        }
      }
      var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
      function M2() {
        return exports2.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a2 = exports2.unstable_now();
          Q2 = a2;
          var b2 = true;
          try {
            b2 = O2(true, a2);
          } finally {
            b2 ? S2() : (N2 = false, O2 = null);
          }
        } else
          N2 = false;
      }
      var S2;
      if ("function" === typeof F2)
        S2 = function() {
          F2(R2);
        };
      else if ("undefined" !== typeof MessageChannel) {
        var T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S2 = function() {
          U2.postMessage(null);
        };
      } else
        S2 = function() {
          D2(R2, 0);
        };
      function I2(a2) {
        O2 = a2;
        N2 || (N2 = true, S2());
      }
      function K2(a2, b2) {
        L2 = D2(function() {
          a2(exports2.unstable_now());
        }, b2);
      }
      exports2.unstable_IdlePriority = 5;
      exports2.unstable_ImmediatePriority = 1;
      exports2.unstable_LowPriority = 4;
      exports2.unstable_NormalPriority = 3;
      exports2.unstable_Profiling = null;
      exports2.unstable_UserBlockingPriority = 2;
      exports2.unstable_cancelCallback = function(a2) {
        a2.callback = null;
      };
      exports2.unstable_continueExecution = function() {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports2.unstable_forceFrameRate = function(a2) {
        0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
      };
      exports2.unstable_getCurrentPriorityLevel = function() {
        return y2;
      };
      exports2.unstable_getFirstCallbackNode = function() {
        return h2(r2);
      };
      exports2.unstable_next = function(a2) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b2 = 3;
            break;
          default:
            b2 = y2;
        }
        var c2 = y2;
        y2 = b2;
        try {
          return a2();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_pauseExecution = function() {
      };
      exports2.unstable_requestPaint = function() {
      };
      exports2.unstable_runWithPriority = function(a2, b2) {
        switch (a2) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a2 = 3;
        }
        var c2 = y2;
        y2 = a2;
        try {
          return b2();
        } finally {
          y2 = c2;
        }
      };
      exports2.unstable_scheduleCallback = function(a2, b2, c2) {
        var d2 = exports2.unstable_now();
        "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
        switch (a2) {
          case 1:
            var e2 = -1;
            break;
          case 2:
            e2 = 250;
            break;
          case 5:
            e2 = 1073741823;
            break;
          case 4:
            e2 = 1e4;
            break;
          default:
            e2 = 5e3;
        }
        e2 = c2 + e2;
        a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
        c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
        return a2;
      };
      exports2.unstable_shouldYield = M2;
      exports2.unstable_wrapCallback = function(a2) {
        var b2 = y2;
        return function() {
          var c2 = y2;
          y2 = b2;
          try {
            return a2.apply(this, arguments);
          } finally {
            y2 = c2;
          }
        };
      };
    })(scheduler_production_min);
    {
      scheduler.exports = scheduler_production_min;
    }
    var schedulerExports = scheduler.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var aa = reactExports, ca = schedulerExports;
    function p$4(a2) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
        b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a2, b2) {
      ha(a2, b2);
      ha(a2 + "Capture", b2);
    }
    function ha(a2, b2) {
      ea[a2] = b2;
      for (a2 = 0; a2 < b2.length; a2++)
        da.add(b2[a2]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function oa(a2) {
      if (ja.call(ma, a2))
        return true;
      if (ja.call(la, a2))
        return false;
      if (ka.test(a2))
        return ma[a2] = true;
      la[a2] = true;
      return false;
    }
    function pa(a2, b2, c2, d2) {
      if (null !== c2 && 0 === c2.type)
        return false;
      switch (typeof b2) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d2)
            return false;
          if (null !== c2)
            return !c2.acceptsBooleans;
          a2 = a2.toLowerCase().slice(0, 5);
          return "data-" !== a2 && "aria-" !== a2;
        default:
          return false;
      }
    }
    function qa(a2, b2, c2, d2) {
      if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2))
        return true;
      if (d2)
        return false;
      if (null !== c2)
        switch (c2.type) {
          case 3:
            return !b2;
          case 4:
            return false === b2;
          case 5:
            return isNaN(b2);
          case 6:
            return isNaN(b2) || 1 > b2;
        }
      return false;
    }
    function v$3(a2, b2, c2, d2, e2, f2, g2) {
      this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
      this.attributeName = d2;
      this.attributeNamespace = e2;
      this.mustUseProperty = c2;
      this.propertyName = a2;
      this.type = b2;
      this.sanitizeURL = f2;
      this.removeEmptyString = g2;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
      z[a2] = new v$3(a2, 0, false, a2, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
      var b2 = a2[0];
      z[b2] = new v$3(b2, 1, false, a2[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
      z[a2] = new v$3(a2, 2, false, a2.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
      z[a2] = new v$3(a2, 2, false, a2, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
      z[a2] = new v$3(a2, 3, false, a2.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
      z[a2] = new v$3(a2, 3, true, a2, null, false, false);
    });
    ["capture", "download"].forEach(function(a2) {
      z[a2] = new v$3(a2, 4, false, a2, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a2) {
      z[a2] = new v$3(a2, 6, false, a2, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a2) {
      z[a2] = new v$3(a2, 5, false, a2.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a2) {
      return a2[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
      var b2 = a2.replace(
        ra,
        sa
      );
      z[b2] = new v$3(b2, 1, false, a2, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
      var b2 = a2.replace(ra, sa);
      z[b2] = new v$3(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
      var b2 = a2.replace(ra, sa);
      z[b2] = new v$3(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a2) {
      z[a2] = new v$3(a2, 1, false, a2.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new v$3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a2) {
      z[a2] = new v$3(a2, 1, false, a2.toLowerCase(), null, true, true);
    });
    function ta(a2, b2, c2, d2) {
      var e2 = z.hasOwnProperty(b2) ? z[b2] : null;
      if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
        qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
    var Ia = Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a2) {
      if (null === a2 || "object" !== typeof a2)
        return null;
      a2 = Ja && a2[Ja] || a2["@@iterator"];
      return "function" === typeof a2 ? a2 : null;
    }
    var A$1 = Object.assign, La;
    function Ma(a2) {
      if (void 0 === La)
        try {
          throw Error();
        } catch (c2) {
          var b2 = c2.stack.trim().match(/\n( *(at )?)/);
          La = b2 && b2[1] || "";
        }
      return "\n" + La + a2;
    }
    var Na = false;
    function Oa(a2, b2) {
      if (!a2 || Na)
        return "";
      Na = true;
      var c2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b2)
          if (b2 = function() {
            throw Error();
          }, Object.defineProperty(b2.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b2, []);
            } catch (l2) {
              var d2 = l2;
            }
            Reflect.construct(a2, [], b2);
          } else {
            try {
              b2.call();
            } catch (l2) {
              d2 = l2;
            }
            a2.call(b2.prototype);
          }
        else {
          try {
            throw Error();
          } catch (l2) {
            d2 = l2;
          }
          a2();
        }
      } catch (l2) {
        if (l2 && d2 && "string" === typeof l2.stack) {
          for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
            h2--;
          for (; 1 <= g2 && 0 <= h2; g2--, h2--)
            if (e2[g2] !== f2[h2]) {
              if (1 !== g2 || 1 !== h2) {
                do
                  if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                    var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                    a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                    return k2;
                  }
                while (1 <= g2 && 0 <= h2);
              }
              break;
            }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c2;
      }
      return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
    }
    function Pa(a2) {
      switch (a2.tag) {
        case 5:
          return Ma(a2.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a2 = Oa(a2.type, false), a2;
        case 11:
          return a2 = Oa(a2.type.render, false), a2;
        case 1:
          return a2 = Oa(a2.type, true), a2;
        default:
          return "";
      }
    }
    function Qa(a2) {
      if (null == a2)
        return null;
      if ("function" === typeof a2)
        return a2.displayName || a2.name || null;
      if ("string" === typeof a2)
        return a2;
      switch (a2) {
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
      if ("object" === typeof a2)
        switch (a2.$$typeof) {
          case Ca:
            return (a2.displayName || "Context") + ".Consumer";
          case Ba:
            return (a2._context.displayName || "Context") + ".Provider";
          case Da:
            var b2 = a2.render;
            a2 = a2.displayName;
            a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
            return a2;
          case Ga:
            return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
          case Ha:
            b2 = a2._payload;
            a2 = a2._init;
            try {
              return Qa(a2(b2));
            } catch (c2) {
            }
        }
      return null;
    }
    function Ra(a2) {
      var b2 = a2.type;
      switch (a2.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b2.displayName || "Context") + ".Consumer";
        case 10:
          return (b2._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b2;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b2);
        case 8:
          return b2 === za ? "StrictMode" : "Mode";
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
          if ("function" === typeof b2)
            return b2.displayName || b2.name || null;
          if ("string" === typeof b2)
            return b2;
      }
      return null;
    }
    function Sa(a2) {
      switch (typeof a2) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a2;
        case "object":
          return a2;
        default:
          return "";
      }
    }
    function Ta(a2) {
      var b2 = a2.type;
      return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
    }
    function Ua(a2) {
      var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
      if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
        var e2 = c2.get, f2 = c2.set;
        Object.defineProperty(a2, b2, { configurable: true, get: function() {
          return e2.call(this);
        }, set: function(a3) {
          d2 = "" + a3;
          f2.call(this, a3);
        } });
        Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
        return { getValue: function() {
          return d2;
        }, setValue: function(a3) {
          d2 = "" + a3;
        }, stopTracking: function() {
          a2._valueTracker = null;
          delete a2[b2];
        } };
      }
    }
    function Va(a2) {
      a2._valueTracker || (a2._valueTracker = Ua(a2));
    }
    function Wa(a2) {
      if (!a2)
        return false;
      var b2 = a2._valueTracker;
      if (!b2)
        return true;
      var c2 = b2.getValue();
      var d2 = "";
      a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
      a2 = d2;
      return a2 !== c2 ? (b2.setValue(a2), true) : false;
    }
    function Xa(a2) {
      a2 = a2 || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a2)
        return null;
      try {
        return a2.activeElement || a2.body;
      } catch (b2) {
        return a2.body;
      }
    }
    function Ya(a2, b2) {
      var c2 = b2.checked;
      return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
    }
    function Za(a2, b2) {
      var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
      c2 = Sa(null != b2.value ? b2.value : c2);
      a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
    }
    function ab(a2, b2) {
      b2 = b2.checked;
      null != b2 && ta(a2, "checked", b2, false);
    }
    function bb(a2, b2) {
      ab(a2, b2);
      var c2 = Sa(b2.value), d2 = b2.type;
      if (null != c2)
        if ("number" === d2) {
          if (0 === c2 && "" === a2.value || a2.value != c2)
            a2.value = "" + c2;
        } else
          a2.value !== "" + c2 && (a2.value = "" + c2);
      else if ("submit" === d2 || "reset" === d2) {
        a2.removeAttribute("value");
        return;
      }
      b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
      null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
    }
    function db(a2, b2, c2) {
      if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
        var d2 = b2.type;
        if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
          return;
        b2 = "" + a2._wrapperState.initialValue;
        c2 || b2 === a2.value || (a2.value = b2);
        a2.defaultValue = b2;
      }
      c2 = a2.name;
      "" !== c2 && (a2.name = "");
      a2.defaultChecked = !!a2._wrapperState.initialChecked;
      "" !== c2 && (a2.name = c2);
    }
    function cb(a2, b2, c2) {
      if ("number" !== b2 || Xa(a2.ownerDocument) !== a2)
        null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
    }
    var eb = Array.isArray;
    function fb(a2, b2, c2, d2) {
      a2 = a2.options;
      if (b2) {
        b2 = {};
        for (var e2 = 0; e2 < c2.length; e2++)
          b2["$" + c2[e2]] = true;
        for (c2 = 0; c2 < a2.length; c2++)
          e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
      } else {
        c2 = "" + Sa(c2);
        b2 = null;
        for (e2 = 0; e2 < a2.length; e2++) {
          if (a2[e2].value === c2) {
            a2[e2].selected = true;
            d2 && (a2[e2].defaultSelected = true);
            return;
          }
          null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
        }
        null !== b2 && (b2.selected = true);
      }
    }
    function gb(a2, b2) {
      if (null != b2.dangerouslySetInnerHTML)
        throw Error(p$4(91));
      return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
    }
    function hb(a2, b2) {
      var c2 = b2.value;
      if (null == c2) {
        c2 = b2.children;
        b2 = b2.defaultValue;
        if (null != c2) {
          if (null != b2)
            throw Error(p$4(92));
          if (eb(c2)) {
            if (1 < c2.length)
              throw Error(p$4(93));
            c2 = c2[0];
          }
          b2 = c2;
        }
        null == b2 && (b2 = "");
        c2 = b2;
      }
      a2._wrapperState = { initialValue: Sa(c2) };
    }
    function ib(a2, b2) {
      var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
      null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
      null != d2 && (a2.defaultValue = "" + d2);
    }
    function jb(a2) {
      var b2 = a2.textContent;
      b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
    }
    function kb(a2) {
      switch (a2) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a2, b2) {
      return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
    }
    var mb, nb = function(a2) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
        MSApp.execUnsafeLocalFunction(function() {
          return a2(b2, c2, d2, e2);
        });
      } : a2;
    }(function(a2, b2) {
      if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2)
        a2.innerHTML = b2;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
        for (b2 = mb.firstChild; a2.firstChild; )
          a2.removeChild(a2.firstChild);
        for (; b2.firstChild; )
          a2.appendChild(b2.firstChild);
      }
    });
    function ob(a2, b2) {
      if (b2) {
        var c2 = a2.firstChild;
        if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
          c2.nodeValue = b2;
          return;
        }
      }
      a2.textContent = b2;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a2) {
      qb.forEach(function(b2) {
        b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
        pb[b2] = pb[a2];
      });
    });
    function rb(a2, b2, c2) {
      return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
    }
    function sb(a2, b2) {
      a2 = a2.style;
      for (var c2 in b2)
        if (b2.hasOwnProperty(c2)) {
          var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
          "float" === c2 && (c2 = "cssFloat");
          d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
        }
    }
    var tb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a2, b2) {
      if (b2) {
        if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
          throw Error(p$4(137, a2));
        if (null != b2.dangerouslySetInnerHTML) {
          if (null != b2.children)
            throw Error(p$4(60));
          if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
            throw Error(p$4(61));
        }
        if (null != b2.style && "object" !== typeof b2.style)
          throw Error(p$4(62));
      }
    }
    function vb(a2, b2) {
      if (-1 === a2.indexOf("-"))
        return "string" === typeof b2.is;
      switch (a2) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a2) {
      a2 = a2.target || a2.srcElement || window;
      a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
      return 3 === a2.nodeType ? a2.parentNode : a2;
    }
    var yb = null, zb = null, Ab = null;
    function Bb(a2) {
      if (a2 = Cb(a2)) {
        if ("function" !== typeof yb)
          throw Error(p$4(280));
        var b2 = a2.stateNode;
        b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
      }
    }
    function Eb(a2) {
      zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
    }
    function Fb() {
      if (zb) {
        var a2 = zb, b2 = Ab;
        Ab = zb = null;
        Bb(a2);
        if (b2)
          for (a2 = 0; a2 < b2.length; a2++)
            Bb(b2[a2]);
      }
    }
    function Gb(a2, b2) {
      return a2(b2);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a2, b2, c2) {
      if (Ib)
        return a2(b2, c2);
      Ib = true;
      try {
        return Gb(a2, b2, c2);
      } finally {
        if (Ib = false, null !== zb || null !== Ab)
          Hb(), Fb();
      }
    }
    function Kb(a2, b2) {
      var c2 = a2.stateNode;
      if (null === c2)
        return null;
      var d2 = Db(c2);
      if (null === d2)
        return null;
      c2 = d2[b2];
      a:
        switch (b2) {
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
            (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
            a2 = !d2;
            break a;
          default:
            a2 = false;
        }
      if (a2)
        return null;
      if (c2 && "function" !== typeof c2)
        throw Error(p$4(231, b2, typeof c2));
      return c2;
    }
    var Lb = false;
    if (ia)
      try {
        var Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a2) {
        Lb = false;
      }
    function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b2.apply(c2, l2);
      } catch (m2) {
        this.onError(m2);
      }
    }
    var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
      Ob = true;
      Pb = a2;
    } };
    function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l2 = Pb;
          Ob = false;
          Pb = null;
        } else
          throw Error(p$4(198));
        Qb || (Qb = true, Rb = l2);
      }
    }
    function Vb(a2) {
      var b2 = a2, c2 = a2;
      if (a2.alternate)
        for (; b2.return; )
          b2 = b2.return;
      else {
        a2 = b2;
        do
          b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
        while (a2);
      }
      return 3 === b2.tag ? c2 : null;
    }
    function Wb(a2) {
      if (13 === a2.tag) {
        var b2 = a2.memoizedState;
        null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
        if (null !== b2)
          return b2.dehydrated;
      }
      return null;
    }
    function Xb(a2) {
      if (Vb(a2) !== a2)
        throw Error(p$4(188));
    }
    function Yb(a2) {
      var b2 = a2.alternate;
      if (!b2) {
        b2 = Vb(a2);
        if (null === b2)
          throw Error(p$4(188));
        return b2 !== a2 ? null : a2;
      }
      for (var c2 = a2, d2 = b2; ; ) {
        var e2 = c2.return;
        if (null === e2)
          break;
        var f2 = e2.alternate;
        if (null === f2) {
          d2 = e2.return;
          if (null !== d2) {
            c2 = d2;
            continue;
          }
          break;
        }
        if (e2.child === f2.child) {
          for (f2 = e2.child; f2; ) {
            if (f2 === c2)
              return Xb(e2), a2;
            if (f2 === d2)
              return Xb(e2), b2;
            f2 = f2.sibling;
          }
          throw Error(p$4(188));
        }
        if (c2.return !== d2.return)
          c2 = e2, d2 = f2;
        else {
          for (var g2 = false, h2 = e2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = e2;
              d2 = f2;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = e2;
              c2 = f2;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) {
            for (h2 = f2.child; h2; ) {
              if (h2 === c2) {
                g2 = true;
                c2 = f2;
                d2 = e2;
                break;
              }
              if (h2 === d2) {
                g2 = true;
                d2 = f2;
                c2 = e2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g2)
              throw Error(p$4(189));
          }
        }
        if (c2.alternate !== d2)
          throw Error(p$4(190));
      }
      if (3 !== c2.tag)
        throw Error(p$4(188));
      return c2.stateNode.current === c2 ? a2 : b2;
    }
    function Zb(a2) {
      a2 = Yb(a2);
      return null !== a2 ? $b(a2) : null;
    }
    function $b(a2) {
      if (5 === a2.tag || 6 === a2.tag)
        return a2;
      for (a2 = a2.child; null !== a2; ) {
        var b2 = $b(a2);
        if (null !== b2)
          return b2;
        a2 = a2.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
    function mc(a2) {
      if (lc && "function" === typeof lc.onCommitFiberRoot)
        try {
          lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
        } catch (b2) {
        }
    }
    var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
    function nc(a2) {
      a2 >>>= 0;
      return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
    }
    var rc = 64, sc = 4194304;
    function tc(a2) {
      switch (a2 & -a2) {
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
          return a2 & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a2 & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a2;
      }
    }
    function uc(a2, b2) {
      var c2 = a2.pendingLanes;
      if (0 === c2)
        return 0;
      var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
      if (0 !== g2) {
        var h2 = g2 & ~e2;
        0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
      } else
        g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
      if (0 === d2)
        return 0;
      if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
        return b2;
      0 !== (d2 & 4) && (d2 |= c2 & 16);
      b2 = a2.entangledLanes;
      if (0 !== b2)
        for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
          c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
      return d2;
    }
    function vc(a2, b2) {
      switch (a2) {
        case 1:
        case 2:
        case 4:
          return b2 + 250;
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
          return b2 + 5e3;
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
    function wc(a2, b2) {
      for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
        var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
        if (-1 === k2) {
          if (0 === (h2 & c2) || 0 !== (h2 & d2))
            e2[g2] = vc(h2, b2);
        } else
          k2 <= b2 && (a2.expiredLanes |= h2);
        f2 &= ~h2;
      }
    }
    function xc(a2) {
      a2 = a2.pendingLanes & -1073741825;
      return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a2 = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a2;
    }
    function zc(a2) {
      for (var b2 = [], c2 = 0; 31 > c2; c2++)
        b2.push(a2);
      return b2;
    }
    function Ac(a2, b2, c2) {
      a2.pendingLanes |= b2;
      536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
      a2 = a2.eventTimes;
      b2 = 31 - oc(b2);
      a2[b2] = c2;
    }
    function Bc(a2, b2) {
      var c2 = a2.pendingLanes & ~b2;
      a2.pendingLanes = b2;
      a2.suspendedLanes = 0;
      a2.pingedLanes = 0;
      a2.expiredLanes &= b2;
      a2.mutableReadLanes &= b2;
      a2.entangledLanes &= b2;
      b2 = a2.entanglements;
      var d2 = a2.eventTimes;
      for (a2 = a2.expirationTimes; 0 < c2; ) {
        var e2 = 31 - oc(c2), f2 = 1 << e2;
        b2[e2] = 0;
        d2[e2] = -1;
        a2[e2] = -1;
        c2 &= ~f2;
      }
    }
    function Cc(a2, b2) {
      var c2 = a2.entangledLanes |= b2;
      for (a2 = a2.entanglements; c2; ) {
        var d2 = 31 - oc(c2), e2 = 1 << d2;
        e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
        c2 &= ~e2;
      }
    }
    var C$1 = 0;
    function Dc(a2) {
      a2 &= -a2;
      return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a2, b2) {
      switch (a2) {
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
          Oc.delete(b2.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b2.pointerId);
      }
    }
    function Tc(a2, b2, c2, d2, e2, f2) {
      if (null === a2 || a2.nativeEvent !== f2)
        return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
      a2.eventSystemFlags |= d2;
      b2 = a2.targetContainers;
      null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
      return a2;
    }
    function Uc(a2, b2, c2, d2, e2) {
      switch (b2) {
        case "focusin":
          return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
        case "dragenter":
          return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
        case "mouseover":
          return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
        case "pointerover":
          var f2 = e2.pointerId;
          Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
          return true;
        case "gotpointercapture":
          return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
      }
      return false;
    }
    function Vc(a2) {
      var b2 = Wc(a2.target);
      if (null !== b2) {
        var c2 = Vb(b2);
        if (null !== c2) {
          if (b2 = c2.tag, 13 === b2) {
            if (b2 = Wb(c2), null !== b2) {
              a2.blockedOn = b2;
              Ic(a2.priority, function() {
                Gc(c2);
              });
              return;
            }
          } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
            a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a2.blockedOn = null;
    }
    function Xc(a2) {
      if (null !== a2.blockedOn)
        return false;
      for (var b2 = a2.targetContainers; 0 < b2.length; ) {
        var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
        if (null === c2) {
          c2 = a2.nativeEvent;
          var d2 = new c2.constructor(c2.type, c2);
          wb = d2;
          c2.target.dispatchEvent(d2);
          wb = null;
        } else
          return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
        b2.shift();
      }
      return true;
    }
    function Zc(a2, b2, c2) {
      Xc(a2) && c2.delete(b2);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a2, b2) {
      a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a2) {
      function b2(b3) {
        return ad(b3, a2);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a2);
        for (var c2 = 1; c2 < Kc.length; c2++) {
          var d2 = Kc[c2];
          d2.blockedOn === a2 && (d2.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a2);
      null !== Mc && ad(Mc, a2);
      null !== Nc && ad(Nc, a2);
      Oc.forEach(b2);
      Pc.forEach(b2);
      for (c2 = 0; c2 < Qc.length; c2++)
        d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
      for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
        Vc(c2), null === c2.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig, dd = true;
    function ed(a2, b2, c2, d2) {
      var e2 = C$1, f2 = cd.transition;
      cd.transition = null;
      try {
        C$1 = 1, fd(a2, b2, c2, d2);
      } finally {
        C$1 = e2, cd.transition = f2;
      }
    }
    function gd(a2, b2, c2, d2) {
      var e2 = C$1, f2 = cd.transition;
      cd.transition = null;
      try {
        C$1 = 4, fd(a2, b2, c2, d2);
      } finally {
        C$1 = e2, cd.transition = f2;
      }
    }
    function fd(a2, b2, c2, d2) {
      if (dd) {
        var e2 = Yc(a2, b2, c2, d2);
        if (null === e2)
          hd(a2, b2, d2, id, c2), Sc(a2, d2);
        else if (Uc(e2, a2, b2, c2, d2))
          d2.stopPropagation();
        else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
          for (; null !== e2; ) {
            var f2 = Cb(e2);
            null !== f2 && Ec(f2);
            f2 = Yc(a2, b2, c2, d2);
            null === f2 && hd(a2, b2, d2, id, c2);
            if (f2 === e2)
              break;
            e2 = f2;
          }
          null !== e2 && d2.stopPropagation();
        } else
          hd(a2, b2, d2, null, c2);
      }
    }
    var id = null;
    function Yc(a2, b2, c2, d2) {
      id = null;
      a2 = xb(d2);
      a2 = Wc(a2);
      if (null !== a2)
        if (b2 = Vb(a2), null === b2)
          a2 = null;
        else if (c2 = b2.tag, 13 === c2) {
          a2 = Wb(b2);
          if (null !== a2)
            return a2;
          a2 = null;
        } else if (3 === c2) {
          if (b2.stateNode.current.memoizedState.isDehydrated)
            return 3 === b2.tag ? b2.stateNode.containerInfo : null;
          a2 = null;
        } else
          b2 !== a2 && (a2 = null);
      id = a2;
      return null;
    }
    function jd(a2) {
      switch (a2) {
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
    var kd = null, ld = null, md = null;
    function nd() {
      if (md)
        return md;
      var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
      for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
        ;
      var g2 = c2 - a2;
      for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
        ;
      return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
    }
    function od(a2) {
      var b2 = a2.keyCode;
      "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
      10 === a2 && (a2 = 13);
      return 32 <= a2 || 13 === a2 ? a2 : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a2) {
      function b2(b3, d2, e2, f2, g2) {
        this._reactName = b3;
        this._targetInst = e2;
        this.type = d2;
        this.nativeEvent = f2;
        this.target = g2;
        this.currentTarget = null;
        for (var c2 in a2)
          a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
        this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A$1(b2.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a3 = this.nativeEvent;
        a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a3 = this.nativeEvent;
        a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b2;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
      return a2.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
      return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
    }, movementX: function(a2) {
      if ("movementX" in a2)
        return a2.movementX;
      a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
      return wd;
    }, movementY: function(a2) {
      return "movementY" in a2 ? a2.movementY : xd;
    } }), Bd = rd(Ad), Cd = A$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$1({}, sd, { clipboardData: function(a2) {
      return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
    } }), Jd = rd(Id), Kd = A$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
    }, Nd = {
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
    }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a2) {
      var b2 = this.nativeEvent;
      return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A$1({}, ud, { key: function(a2) {
      if (a2.key) {
        var b2 = Md[a2.key] || a2.key;
        if ("Unidentified" !== b2)
          return b2;
      }
      return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
      return "keypress" === a2.type ? od(a2) : 0;
    }, keyCode: function(a2) {
      return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
    }, which: function(a2) {
      return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
    } }), Rd = rd(Qd), Sd = A$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$1({}, Ad, {
      deltaX: function(a2) {
        return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
      },
      deltaY: function(a2) {
        return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$1 = ia && "CompositionEvent" in window, be$3 = null;
    ia && "documentMode" in document && (be$3 = document.documentMode);
    var ce = ia && "TextEvent" in window && !be$3, de$2 = ia && (!ae$1 || be$3 && 8 < be$3 && 11 >= be$3), ee$1 = String.fromCharCode(32), fe$2 = false;
    function ge$2(a2, b2) {
      switch (a2) {
        case "keyup":
          return -1 !== $d.indexOf(b2.keyCode);
        case "keydown":
          return 229 !== b2.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he$2(a2) {
      a2 = a2.detail;
      return "object" === typeof a2 && "data" in a2 ? a2.data : null;
    }
    var ie = false;
    function je(a2, b2) {
      switch (a2) {
        case "compositionend":
          return he$2(b2);
        case "keypress":
          if (32 !== b2.which)
            return null;
          fe$2 = true;
          return ee$1;
        case "textInput":
          return a2 = b2.data, a2 === ee$1 && fe$2 ? null : a2;
        default:
          return null;
      }
    }
    function ke(a2, b2) {
      if (ie)
        return "compositionend" === a2 || !ae$1 && ge$2(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
      switch (a2) {
        case "paste":
          return null;
        case "keypress":
          if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
            if (b2.char && 1 < b2.char.length)
              return b2.char;
            if (b2.which)
              return String.fromCharCode(b2.which);
          }
          return null;
        case "compositionend":
          return de$2 && "ko" !== b2.locale ? null : b2.data;
        default:
          return null;
      }
    }
    var le$2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me$1(a2) {
      var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
      return "input" === b2 ? !!le$2[a2.type] : "textarea" === b2 ? true : false;
    }
    function ne$1(a2, b2, c2, d2) {
      Eb(d2);
      b2 = oe$2(b2, "onChange");
      0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
    }
    var pe$1 = null, qe = null;
    function re$2(a2) {
      se$2(a2, 0);
    }
    function te(a2) {
      var b2 = ue$1(a2);
      if (Wa(b2))
        return a2;
    }
    function ve$2(a2, b2) {
      if ("change" === a2)
        return b2;
    }
    var we = false;
    if (ia) {
      var xe$3;
      if (ia) {
        var ye$3 = "oninput" in document;
        if (!ye$3) {
          var ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye$3 = "function" === typeof ze.oninput;
        }
        xe$3 = ye$3;
      } else
        xe$3 = false;
      we = xe$3 && (!document.documentMode || 9 < document.documentMode);
    }
    function Ae$2() {
      pe$1 && (pe$1.detachEvent("onpropertychange", Be), qe = pe$1 = null);
    }
    function Be(a2) {
      if ("value" === a2.propertyName && te(qe)) {
        var b2 = [];
        ne$1(b2, qe, a2, xb(a2));
        Jb(re$2, b2);
      }
    }
    function Ce(a2, b2, c2) {
      "focusin" === a2 ? (Ae$2(), pe$1 = b2, qe = c2, pe$1.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae$2();
    }
    function De$2(a2) {
      if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
        return te(qe);
    }
    function Ee$2(a2, b2) {
      if ("click" === a2)
        return te(b2);
    }
    function Fe$1(a2, b2) {
      if ("input" === a2 || "change" === a2)
        return te(b2);
    }
    function Ge(a2, b2) {
      return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
    }
    var He$1 = "function" === typeof Object.is ? Object.is : Ge;
    function Ie$2(a2, b2) {
      if (He$1(a2, b2))
        return true;
      if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2)
        return false;
      var c2 = Object.keys(a2), d2 = Object.keys(b2);
      if (c2.length !== d2.length)
        return false;
      for (d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2];
        if (!ja.call(b2, e2) || !He$1(a2[e2], b2[e2]))
          return false;
      }
      return true;
    }
    function Je(a2) {
      for (; a2 && a2.firstChild; )
        a2 = a2.firstChild;
      return a2;
    }
    function Ke(a2, b2) {
      var c2 = Je(a2);
      a2 = 0;
      for (var d2; c2; ) {
        if (3 === c2.nodeType) {
          d2 = a2 + c2.textContent.length;
          if (a2 <= b2 && d2 >= b2)
            return { node: c2, offset: b2 - a2 };
          a2 = d2;
        }
        a: {
          for (; c2; ) {
            if (c2.nextSibling) {
              c2 = c2.nextSibling;
              break a;
            }
            c2 = c2.parentNode;
          }
          c2 = void 0;
        }
        c2 = Je(c2);
      }
    }
    function Le$1(a2, b2) {
      return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le$1(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
    }
    function Me$1() {
      for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
        try {
          var c2 = "string" === typeof b2.contentWindow.location.href;
        } catch (d2) {
          c2 = false;
        }
        if (c2)
          a2 = b2.contentWindow;
        else
          break;
        b2 = Xa(a2.document);
      }
      return b2;
    }
    function Ne$1(a2) {
      var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
      return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
    }
    function Oe(a2) {
      var b2 = Me$1(), c2 = a2.focusedElem, d2 = a2.selectionRange;
      if (b2 !== c2 && c2 && c2.ownerDocument && Le$1(c2.ownerDocument.documentElement, c2)) {
        if (null !== d2 && Ne$1(c2)) {
          if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2)
            c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
          else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
            a2 = a2.getSelection();
            var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
            d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
            !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
            e2 = Ke(c2, f2);
            var g2 = Ke(
              c2,
              d2
            );
            e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
          }
        }
        b2 = [];
        for (a2 = c2; a2 = a2.parentNode; )
          1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
        "function" === typeof c2.focus && c2.focus();
        for (c2 = 0; c2 < b2.length; c2++)
          a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
      }
    }
    var Pe$2 = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re$3 = null, Se$3 = null, Te$2 = false;
    function Ue(a2, b2, c2) {
      var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
      Te$2 || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne$1(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$3 && Ie$2(Se$3, d2) || (Se$3 = d2, d2 = oe$2(Re$3, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
    }
    function Ve(a2, b2) {
      var c2 = {};
      c2[a2.toLowerCase()] = b2.toLowerCase();
      c2["Webkit" + a2] = "webkit" + b2;
      c2["Moz" + a2] = "moz" + b2;
      return c2;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a2) {
      if (Xe[a2])
        return Xe[a2];
      if (!We[a2])
        return a2;
      var b2 = We[a2], c2;
      for (c2 in b2)
        if (b2.hasOwnProperty(c2) && c2 in Ye)
          return Xe[a2] = b2[c2];
      return a2;
    }
    var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a2, b2) {
      df.set(a2, b2);
      fa(b2, [a2]);
    }
    for (var gf = 0; gf < ef.length; gf++) {
      var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
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
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a2, b2, c2) {
      var d2 = a2.type || "unknown-event";
      a2.currentTarget = c2;
      Ub(d2, b2, void 0, a2);
      a2.currentTarget = null;
    }
    function se$2(a2, b2) {
      b2 = 0 !== (b2 & 4);
      for (var c2 = 0; c2 < a2.length; c2++) {
        var d2 = a2[c2], e2 = d2.event;
        d2 = d2.listeners;
        a: {
          var f2 = void 0;
          if (b2)
            for (var g2 = d2.length - 1; 0 <= g2; g2--) {
              var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f2 && e2.isPropagationStopped())
                break a;
              nf(e2, h2, l2);
              f2 = k2;
            }
          else
            for (g2 = 0; g2 < d2.length; g2++) {
              h2 = d2[g2];
              k2 = h2.instance;
              l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f2 && e2.isPropagationStopped())
                break a;
              nf(e2, h2, l2);
              f2 = k2;
            }
        }
      }
      if (Qb)
        throw a2 = Rb, Qb = false, Rb = null, a2;
    }
    function D$3(a2, b2) {
      var c2 = b2[of];
      void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
      var d2 = a2 + "__bubble";
      c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
    }
    function qf(a2, b2, c2) {
      var d2 = 0;
      b2 && (d2 |= 4);
      pf(c2, a2, d2, b2);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a2) {
      if (!a2[rf]) {
        a2[rf] = true;
        da.forEach(function(b3) {
          "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
        });
        var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
        null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
      }
    }
    function pf(a2, b2, c2, d2) {
      switch (jd(b2)) {
        case 1:
          var e2 = ed;
          break;
        case 4:
          e2 = gd;
          break;
        default:
          e2 = fd;
      }
      c2 = e2.bind(null, b2, c2, a2);
      e2 = void 0;
      !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
      d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
    }
    function hd(a2, b2, c2, d2, e2) {
      var f2 = d2;
      if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
        a:
          for (; ; ) {
            if (null === d2)
              return;
            var g2 = d2.tag;
            if (3 === g2 || 4 === g2) {
              var h2 = d2.stateNode.containerInfo;
              if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
                break;
              if (4 === g2)
                for (g2 = d2.return; null !== g2; ) {
                  var k2 = g2.tag;
                  if (3 === k2 || 4 === k2) {
                    if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                      return;
                  }
                  g2 = g2.return;
                }
              for (; null !== h2; ) {
                g2 = Wc(h2);
                if (null === g2)
                  return;
                k2 = g2.tag;
                if (5 === k2 || 6 === k2) {
                  d2 = f2 = g2;
                  continue a;
                }
                h2 = h2.parentNode;
              }
            }
            d2 = d2.return;
          }
      Jb(function() {
        var d3 = f2, e3 = xb(c2), g3 = [];
        a: {
          var h3 = df.get(a2);
          if (void 0 !== h3) {
            var k3 = td, n2 = a2;
            switch (a2) {
              case "keypress":
                if (0 === od(c2))
                  break a;
              case "keydown":
              case "keyup":
                k3 = Rd;
                break;
              case "focusin":
                n2 = "focus";
                k3 = Fd;
                break;
              case "focusout":
                n2 = "blur";
                k3 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k3 = Fd;
                break;
              case "click":
                if (2 === c2.button)
                  break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k3 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k3 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k3 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k3 = Hd;
                break;
              case cf:
                k3 = Xd;
                break;
              case "scroll":
                k3 = vd;
                break;
              case "wheel":
                k3 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k3 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k3 = Td;
            }
            var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
            t2 = [];
            for (var w2 = d3, u2; null !== w2; ) {
              u2 = w2;
              var F2 = u2.stateNode;
              5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
              if (J2)
                break;
              w2 = w2.return;
            }
            0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
          }
        }
        if (0 === (b2 & 7)) {
          a: {
            h3 = "mouseover" === a2 || "pointerover" === a2;
            k3 = "mouseout" === a2 || "pointerout" === a2;
            if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
              break a;
            if (k3 || h3) {
              h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
              if (k3) {
                if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
                  n2 = null;
              } else
                k3 = null, n2 = d3;
              if (k3 !== n2) {
                t2 = Bd;
                F2 = "onMouseLeave";
                x2 = "onMouseEnter";
                w2 = "mouse";
                if ("pointerout" === a2 || "pointerover" === a2)
                  t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                J2 = null == k3 ? h3 : ue$1(k3);
                u2 = null == n2 ? h3 : ue$1(n2);
                h3 = new t2(F2, w2 + "leave", k3, c2, e3);
                h3.target = J2;
                h3.relatedTarget = u2;
                F2 = null;
                Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
                J2 = F2;
                if (k3 && n2)
                  b: {
                    t2 = k3;
                    x2 = n2;
                    w2 = 0;
                    for (u2 = t2; u2; u2 = vf(u2))
                      w2++;
                    u2 = 0;
                    for (F2 = x2; F2; F2 = vf(F2))
                      u2++;
                    for (; 0 < w2 - u2; )
                      t2 = vf(t2), w2--;
                    for (; 0 < u2 - w2; )
                      x2 = vf(x2), u2--;
                    for (; w2--; ) {
                      if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                        break b;
                      t2 = vf(t2);
                      x2 = vf(x2);
                    }
                    t2 = null;
                  }
                else
                  t2 = null;
                null !== k3 && wf(g3, h3, k3, t2, false);
                null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
              }
            }
          }
          a: {
            h3 = d3 ? ue$1(d3) : window;
            k3 = h3.nodeName && h3.nodeName.toLowerCase();
            if ("select" === k3 || "input" === k3 && "file" === h3.type)
              var na = ve$2;
            else if (me$1(h3))
              if (we)
                na = Fe$1;
              else {
                na = De$2;
                var xa = Ce;
              }
            else
              (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$2);
            if (na && (na = na(a2, d3))) {
              ne$1(g3, na, c2, e3);
              break a;
            }
            xa && xa(a2, h3, d3);
            "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
          }
          xa = d3 ? ue$1(d3) : window;
          switch (a2) {
            case "focusin":
              if (me$1(xa) || "true" === xa.contentEditable)
                Qe = xa, Re$3 = d3, Se$3 = null;
              break;
            case "focusout":
              Se$3 = Re$3 = Qe = null;
              break;
            case "mousedown":
              Te$2 = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te$2 = false;
              Ue(g3, c2, e3);
              break;
            case "selectionchange":
              if (Pe$2)
                break;
            case "keydown":
            case "keyup":
              Ue(g3, c2, e3);
          }
          var $a;
          if (ae$1)
            b: {
              switch (a2) {
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
            }
          else
            ie ? ge$2(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
          ba && (de$2 && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe$2(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$2(c2), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a2, c2) : ke(a2, c2))
            d3 = oe$2(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
        }
        se$2(g3, b2);
      });
    }
    function tf(a2, b2, c2) {
      return { instance: a2, listener: b2, currentTarget: c2 };
    }
    function oe$2(a2, b2) {
      for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
        var e2 = a2, f2 = e2.stateNode;
        5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
        a2 = a2.return;
      }
      return d2;
    }
    function vf(a2) {
      if (null === a2)
        return null;
      do
        a2 = a2.return;
      while (a2 && 5 !== a2.tag);
      return a2 ? a2 : null;
    }
    function wf(a2, b2, c2, d2, e2) {
      for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
        var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
        if (null !== k2 && k2 === d2)
          break;
        5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
        c2 = c2.return;
      }
      0 !== g2.length && a2.push({ event: b2, listeners: g2 });
    }
    var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
    function zf(a2) {
      return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
    }
    function Af(a2, b2, c2) {
      b2 = zf(b2);
      if (zf(a2) !== b2 && c2)
        throw Error(p$4(425));
    }
    function Bf() {
    }
    var Cf = null, Df = null;
    function Ef(a2, b2) {
      return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
      return Hf.resolve(null).then(a2).catch(If);
    } : Ff;
    function If(a2) {
      setTimeout(function() {
        throw a2;
      });
    }
    function Kf(a2, b2) {
      var c2 = b2, d2 = 0;
      do {
        var e2 = c2.nextSibling;
        a2.removeChild(c2);
        if (e2 && 8 === e2.nodeType)
          if (c2 = e2.data, "/$" === c2) {
            if (0 === d2) {
              a2.removeChild(e2);
              bd(b2);
              return;
            }
            d2--;
          } else
            "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
        c2 = e2;
      } while (c2);
      bd(b2);
    }
    function Lf(a2) {
      for (; null != a2; a2 = a2.nextSibling) {
        var b2 = a2.nodeType;
        if (1 === b2 || 3 === b2)
          break;
        if (8 === b2) {
          b2 = a2.data;
          if ("$" === b2 || "$!" === b2 || "$?" === b2)
            break;
          if ("/$" === b2)
            return null;
        }
      }
      return a2;
    }
    function Mf(a2) {
      a2 = a2.previousSibling;
      for (var b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("$" === c2 || "$!" === c2 || "$?" === c2) {
            if (0 === b2)
              return a2;
            b2--;
          } else
            "/$" === c2 && b2++;
        }
        a2 = a2.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
    function Wc(a2) {
      var b2 = a2[Of];
      if (b2)
        return b2;
      for (var c2 = a2.parentNode; c2; ) {
        if (b2 = c2[uf] || c2[Of]) {
          c2 = b2.alternate;
          if (null !== b2.child || null !== c2 && null !== c2.child)
            for (a2 = Mf(a2); null !== a2; ) {
              if (c2 = a2[Of])
                return c2;
              a2 = Mf(a2);
            }
          return b2;
        }
        a2 = c2;
        c2 = a2.parentNode;
      }
      return null;
    }
    function Cb(a2) {
      a2 = a2[Of] || a2[uf];
      return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
    }
    function ue$1(a2) {
      if (5 === a2.tag || 6 === a2.tag)
        return a2.stateNode;
      throw Error(p$4(33));
    }
    function Db(a2) {
      return a2[Pf] || null;
    }
    var Sf = [], Tf = -1;
    function Uf(a2) {
      return { current: a2 };
    }
    function E$1(a2) {
      0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G$1(a2, b2) {
      Tf++;
      Sf[Tf] = a2.current;
      a2.current = b2;
    }
    var Vf = {}, H$1 = Uf(Vf), Wf = Uf(false), Xf = Vf;
    function Yf(a2, b2) {
      var c2 = a2.type.contextTypes;
      if (!c2)
        return Vf;
      var d2 = a2.stateNode;
      if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
        return d2.__reactInternalMemoizedMaskedChildContext;
      var e2 = {}, f2;
      for (f2 in c2)
        e2[f2] = b2[f2];
      d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
      return e2;
    }
    function Zf(a2) {
      a2 = a2.childContextTypes;
      return null !== a2 && void 0 !== a2;
    }
    function $f() {
      E$1(Wf);
      E$1(H$1);
    }
    function ag(a2, b2, c2) {
      if (H$1.current !== Vf)
        throw Error(p$4(168));
      G$1(H$1, b2);
      G$1(Wf, c2);
    }
    function bg(a2, b2, c2) {
      var d2 = a2.stateNode;
      b2 = b2.childContextTypes;
      if ("function" !== typeof d2.getChildContext)
        return c2;
      d2 = d2.getChildContext();
      for (var e2 in d2)
        if (!(e2 in b2))
          throw Error(p$4(108, Ra(a2) || "Unknown", e2));
      return A$1({}, c2, d2);
    }
    function cg(a2) {
      a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H$1.current;
      G$1(H$1, a2);
      G$1(Wf, Wf.current);
      return true;
    }
    function dg(a2, b2, c2) {
      var d2 = a2.stateNode;
      if (!d2)
        throw Error(p$4(169));
      c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E$1(Wf), E$1(H$1), G$1(H$1, a2)) : E$1(Wf);
      G$1(Wf, c2);
    }
    var eg = null, fg = false, gg = false;
    function hg(a2) {
      null === eg ? eg = [a2] : eg.push(a2);
    }
    function ig(a2) {
      fg = true;
      hg(a2);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a2 = 0, b2 = C$1;
        try {
          var c2 = eg;
          for (C$1 = 1; a2 < c2.length; a2++) {
            var d2 = c2[a2];
            do
              d2 = d2(true);
            while (null !== d2);
          }
          eg = null;
          fg = false;
        } catch (e2) {
          throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
        } finally {
          C$1 = b2, gg = false;
        }
      }
      return null;
    }
    var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
    function tg(a2, b2) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a2;
      ng = b2;
    }
    function ug(a2, b2, c2) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a2;
      var d2 = rg;
      a2 = sg;
      var e2 = 32 - oc(d2) - 1;
      d2 &= ~(1 << e2);
      c2 += 1;
      var f2 = 32 - oc(b2) + e2;
      if (30 < f2) {
        var g2 = e2 - e2 % 5;
        f2 = (d2 & (1 << g2) - 1).toString(32);
        d2 >>= g2;
        e2 -= g2;
        rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
        sg = f2 + a2;
      } else
        rg = 1 << f2 | c2 << e2 | d2, sg = a2;
    }
    function vg(a2) {
      null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
    }
    function wg(a2) {
      for (; a2 === mg; )
        mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a2 === qg; )
        qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null, yg = null, I$3 = false, zg = null;
    function Ag(a2, b2) {
      var c2 = Bg(5, null, null, 0);
      c2.elementType = "DELETED";
      c2.stateNode = b2;
      c2.return = a2;
      b2 = a2.deletions;
      null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
    }
    function Cg(a2, b2) {
      switch (a2.tag) {
        case 5:
          var c2 = a2.type;
          b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
          return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
        case 6:
          return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
        case 13:
          return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a2) {
      return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
    }
    function Eg(a2) {
      if (I$3) {
        var b2 = yg;
        if (b2) {
          var c2 = b2;
          if (!Cg(a2, b2)) {
            if (Dg(a2))
              throw Error(p$4(418));
            b2 = Lf(c2.nextSibling);
            var d2 = xg;
            b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$3 = false, xg = a2);
          }
        } else {
          if (Dg(a2))
            throw Error(p$4(418));
          a2.flags = a2.flags & -4097 | 2;
          I$3 = false;
          xg = a2;
        }
      }
    }
    function Fg(a2) {
      for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
        a2 = a2.return;
      xg = a2;
    }
    function Gg(a2) {
      if (a2 !== xg)
        return false;
      if (!I$3)
        return Fg(a2), I$3 = true, false;
      var b2;
      (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
      if (b2 && (b2 = yg)) {
        if (Dg(a2))
          throw Hg(), Error(p$4(418));
        for (; b2; )
          Ag(a2, b2), b2 = Lf(b2.nextSibling);
      }
      Fg(a2);
      if (13 === a2.tag) {
        a2 = a2.memoizedState;
        a2 = null !== a2 ? a2.dehydrated : null;
        if (!a2)
          throw Error(p$4(317));
        a: {
          a2 = a2.nextSibling;
          for (b2 = 0; a2; ) {
            if (8 === a2.nodeType) {
              var c2 = a2.data;
              if ("/$" === c2) {
                if (0 === b2) {
                  yg = Lf(a2.nextSibling);
                  break a;
                }
                b2--;
              } else
                "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
            }
            a2 = a2.nextSibling;
          }
          yg = null;
        }
      } else
        yg = xg ? Lf(a2.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a2 = yg; a2; )
        a2 = Lf(a2.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I$3 = false;
    }
    function Jg(a2) {
      null === zg ? zg = [a2] : zg.push(a2);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a2, b2) {
      if (a2 && a2.defaultProps) {
        b2 = A$1({}, b2);
        a2 = a2.defaultProps;
        for (var c2 in a2)
          void 0 === b2[c2] && (b2[c2] = a2[c2]);
        return b2;
      }
      return b2;
    }
    var Mg = Uf(null), Ng = null, Og = null, Pg = null;
    function Qg() {
      Pg = Og = Ng = null;
    }
    function Rg(a2) {
      var b2 = Mg.current;
      E$1(Mg);
      a2._currentValue = b2;
    }
    function Sg(a2, b2, c2) {
      for (; null !== a2; ) {
        var d2 = a2.alternate;
        (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
        if (a2 === c2)
          break;
        a2 = a2.return;
      }
    }
    function Tg(a2, b2) {
      Ng = a2;
      Pg = Og = null;
      a2 = a2.dependencies;
      null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (Ug = true), a2.firstContext = null);
    }
    function Vg(a2) {
      var b2 = a2._currentValue;
      if (Pg !== a2)
        if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Og) {
          if (null === Ng)
            throw Error(p$4(308));
          Og = a2;
          Ng.dependencies = { lanes: 0, firstContext: a2 };
        } else
          Og = Og.next = a2;
      return b2;
    }
    var Wg = null;
    function Xg(a2) {
      null === Wg ? Wg = [a2] : Wg.push(a2);
    }
    function Yg(a2, b2, c2, d2) {
      var e2 = b2.interleaved;
      null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
      b2.interleaved = c2;
      return Zg(a2, d2);
    }
    function Zg(a2, b2) {
      a2.lanes |= b2;
      var c2 = a2.alternate;
      null !== c2 && (c2.lanes |= b2);
      c2 = a2;
      for (a2 = a2.return; null !== a2; )
        a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
      return 3 === c2.tag ? c2.stateNode : null;
    }
    var $g = false;
    function ah(a2) {
      a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function bh(a2, b2) {
      a2 = a2.updateQueue;
      b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
    }
    function ch(a2, b2) {
      return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
    }
    function dh(a2, b2, c2) {
      var d2 = a2.updateQueue;
      if (null === d2)
        return null;
      d2 = d2.shared;
      if (0 !== (K & 2)) {
        var e2 = d2.pending;
        null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
        d2.pending = b2;
        return Zg(a2, c2);
      }
      e2 = d2.interleaved;
      null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
      d2.interleaved = b2;
      return Zg(a2, c2);
    }
    function eh(a2, b2, c2) {
      b2 = b2.updateQueue;
      if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
        var d2 = b2.lanes;
        d2 &= a2.pendingLanes;
        c2 |= d2;
        b2.lanes = c2;
        Cc(a2, c2);
      }
    }
    function fh(a2, b2) {
      var c2 = a2.updateQueue, d2 = a2.alternate;
      if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
        var e2 = null, f2 = null;
        c2 = c2.firstBaseUpdate;
        if (null !== c2) {
          do {
            var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
            null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
            c2 = c2.next;
          } while (null !== c2);
          null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
        } else
          e2 = f2 = b2;
        c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
        a2.updateQueue = c2;
        return;
      }
      a2 = c2.lastBaseUpdate;
      null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
      c2.lastBaseUpdate = b2;
    }
    function gh(a2, b2, c2, d2) {
      var e2 = a2.updateQueue;
      $g = false;
      var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
      if (null !== h2) {
        e2.shared.pending = null;
        var k2 = h2, l2 = k2.next;
        k2.next = null;
        null === g2 ? f2 = l2 : g2.next = l2;
        g2 = k2;
        var m2 = a2.alternate;
        null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
      }
      if (null !== f2) {
        var q2 = e2.baseState;
        g2 = 0;
        m2 = l2 = k2 = null;
        h2 = f2;
        do {
          var r2 = h2.lane, y2 = h2.eventTime;
          if ((d2 & r2) === r2) {
            null !== m2 && (m2 = m2.next = {
              eventTime: y2,
              lane: 0,
              tag: h2.tag,
              payload: h2.payload,
              callback: h2.callback,
              next: null
            });
            a: {
              var n2 = a2, t2 = h2;
              r2 = b2;
              y2 = c2;
              switch (t2.tag) {
                case 1:
                  n2 = t2.payload;
                  if ("function" === typeof n2) {
                    q2 = n2.call(y2, q2, r2);
                    break a;
                  }
                  q2 = n2;
                  break a;
                case 3:
                  n2.flags = n2.flags & -65537 | 128;
                case 0:
                  n2 = t2.payload;
                  r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                  if (null === r2 || void 0 === r2)
                    break a;
                  q2 = A$1({}, q2, r2);
                  break a;
                case 2:
                  $g = true;
              }
            }
            null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
          } else
            y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
          h2 = h2.next;
          if (null === h2)
            if (h2 = e2.shared.pending, null === h2)
              break;
            else
              r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
        } while (1);
        null === m2 && (k2 = q2);
        e2.baseState = k2;
        e2.firstBaseUpdate = l2;
        e2.lastBaseUpdate = m2;
        b2 = e2.shared.interleaved;
        if (null !== b2) {
          e2 = b2;
          do
            g2 |= e2.lane, e2 = e2.next;
          while (e2 !== b2);
        } else
          null === f2 && (e2.shared.lanes = 0);
        hh |= g2;
        a2.lanes = g2;
        a2.memoizedState = q2;
      }
    }
    function ih(a2, b2, c2) {
      a2 = b2.effects;
      b2.effects = null;
      if (null !== a2)
        for (b2 = 0; b2 < a2.length; b2++) {
          var d2 = a2[b2], e2 = d2.callback;
          if (null !== e2) {
            d2.callback = null;
            d2 = c2;
            if ("function" !== typeof e2)
              throw Error(p$4(191, e2));
            e2.call(d2);
          }
        }
    }
    var jh = new aa.Component().refs;
    function kh(a2, b2, c2, d2) {
      b2 = a2.memoizedState;
      c2 = c2(d2, b2);
      c2 = null === c2 || void 0 === c2 ? b2 : A$1({}, b2, c2);
      a2.memoizedState = c2;
      0 === a2.lanes && (a2.updateQueue.baseState = c2);
    }
    var nh = { isMounted: function(a2) {
      return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
    }, enqueueSetState: function(a2, b2, c2) {
      a2 = a2._reactInternals;
      var d2 = L(), e2 = lh(a2), f2 = ch(d2, e2);
      f2.payload = b2;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b2 = dh(a2, f2, e2);
      null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
    }, enqueueReplaceState: function(a2, b2, c2) {
      a2 = a2._reactInternals;
      var d2 = L(), e2 = lh(a2), f2 = ch(d2, e2);
      f2.tag = 1;
      f2.payload = b2;
      void 0 !== c2 && null !== c2 && (f2.callback = c2);
      b2 = dh(a2, f2, e2);
      null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
    }, enqueueForceUpdate: function(a2, b2) {
      a2 = a2._reactInternals;
      var c2 = L(), d2 = lh(a2), e2 = ch(c2, d2);
      e2.tag = 2;
      void 0 !== b2 && null !== b2 && (e2.callback = b2);
      b2 = dh(a2, e2, d2);
      null !== b2 && (mh(b2, a2, d2, c2), eh(b2, a2, d2));
    } };
    function oh(a2, b2, c2, d2, e2, f2, g2) {
      a2 = a2.stateNode;
      return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$2(c2, d2) || !Ie$2(e2, f2) : true;
    }
    function ph(a2, b2, c2) {
      var d2 = false, e2 = Vf;
      var f2 = b2.contextType;
      "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H$1.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
      b2 = new b2(c2, f2);
      a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
      b2.updater = nh;
      a2.stateNode = b2;
      b2._reactInternals = a2;
      d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
      return b2;
    }
    function qh(a2, b2, c2, d2) {
      a2 = b2.state;
      "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
      "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
      b2.state !== a2 && nh.enqueueReplaceState(b2, b2.state, null);
    }
    function rh(a2, b2, c2, d2) {
      var e2 = a2.stateNode;
      e2.props = c2;
      e2.state = a2.memoizedState;
      e2.refs = jh;
      ah(a2);
      var f2 = b2.contextType;
      "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H$1.current, e2.context = Yf(a2, f2));
      e2.state = a2.memoizedState;
      f2 = b2.getDerivedStateFromProps;
      "function" === typeof f2 && (kh(a2, b2, f2, c2), e2.state = a2.memoizedState);
      "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a2, c2, e2, d2), e2.state = a2.memoizedState);
      "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
    }
    function sh(a2, b2, c2) {
      a2 = c2.ref;
      if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
        if (c2._owner) {
          c2 = c2._owner;
          if (c2) {
            if (1 !== c2.tag)
              throw Error(p$4(309));
            var d2 = c2.stateNode;
          }
          if (!d2)
            throw Error(p$4(147, a2));
          var e2 = d2, f2 = "" + a2;
          if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
            return b2.ref;
          b2 = function(a3) {
            var b3 = e2.refs;
            b3 === jh && (b3 = e2.refs = {});
            null === a3 ? delete b3[f2] : b3[f2] = a3;
          };
          b2._stringRef = f2;
          return b2;
        }
        if ("string" !== typeof a2)
          throw Error(p$4(284));
        if (!c2._owner)
          throw Error(p$4(290, a2));
      }
      return a2;
    }
    function th(a2, b2) {
      a2 = Object.prototype.toString.call(b2);
      throw Error(p$4(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
    }
    function uh(a2) {
      var b2 = a2._init;
      return b2(a2._payload);
    }
    function vh(a2) {
      function b2(b3, c3) {
        if (a2) {
          var d3 = b3.deletions;
          null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
        }
      }
      function c2(c3, d3) {
        if (!a2)
          return null;
        for (; null !== d3; )
          b2(c3, d3), d3 = d3.sibling;
        return null;
      }
      function d2(a3, b3) {
        for (a3 = /* @__PURE__ */ new Map(); null !== b3; )
          null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
        return a3;
      }
      function e2(a3, b3) {
        a3 = wh(a3, b3);
        a3.index = 0;
        a3.sibling = null;
        return a3;
      }
      function f2(b3, c3, d3) {
        b3.index = d3;
        if (!a2)
          return b3.flags |= 1048576, c3;
        d3 = b3.alternate;
        if (null !== d3)
          return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
        b3.flags |= 2;
        return c3;
      }
      function g2(b3) {
        a2 && null === b3.alternate && (b3.flags |= 2);
        return b3;
      }
      function h2(a3, b3, c3, d3) {
        if (null === b3 || 6 !== b3.tag)
          return b3 = xh(c3, a3.mode, d3), b3.return = a3, b3;
        b3 = e2(b3, c3);
        b3.return = a3;
        return b3;
      }
      function k2(a3, b3, c3, d3) {
        var f3 = c3.type;
        if (f3 === ya)
          return m2(a3, b3, c3.props.children, d3, c3.key);
        if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
          return d3 = e2(b3, c3.props), d3.ref = sh(a3, b3, c3), d3.return = a3, d3;
        d3 = yh(c3.type, c3.key, c3.props, null, a3.mode, d3);
        d3.ref = sh(a3, b3, c3);
        d3.return = a3;
        return d3;
      }
      function l2(a3, b3, c3, d3) {
        if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
          return b3 = zh(c3, a3.mode, d3), b3.return = a3, b3;
        b3 = e2(b3, c3.children || []);
        b3.return = a3;
        return b3;
      }
      function m2(a3, b3, c3, d3, f3) {
        if (null === b3 || 7 !== b3.tag)
          return b3 = Ah(c3, a3.mode, d3, f3), b3.return = a3, b3;
        b3 = e2(b3, c3);
        b3.return = a3;
        return b3;
      }
      function q2(a3, b3, c3) {
        if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
          return b3 = xh("" + b3, a3.mode, c3), b3.return = a3, b3;
        if ("object" === typeof b3 && null !== b3) {
          switch (b3.$$typeof) {
            case va:
              return c3 = yh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = sh(a3, null, b3), c3.return = a3, c3;
            case wa:
              return b3 = zh(b3, a3.mode, c3), b3.return = a3, b3;
            case Ha:
              var d3 = b3._init;
              return q2(a3, d3(b3._payload), c3);
          }
          if (eb(b3) || Ka(b3))
            return b3 = Ah(b3, a3.mode, c3, null), b3.return = a3, b3;
          th(a3, b3);
        }
        return null;
      }
      function r2(a3, b3, c3, d3) {
        var e3 = null !== b3 ? b3.key : null;
        if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
          return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
        if ("object" === typeof c3 && null !== c3) {
          switch (c3.$$typeof) {
            case va:
              return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
            case wa:
              return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
            case Ha:
              return e3 = c3._init, r2(
                a3,
                b3,
                e3(c3._payload),
                d3
              );
          }
          if (eb(c3) || Ka(c3))
            return null !== e3 ? null : m2(a3, b3, c3, d3, null);
          th(a3, c3);
        }
        return null;
      }
      function y2(a3, b3, c3, d3, e3) {
        if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
          return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
        if ("object" === typeof d3 && null !== d3) {
          switch (d3.$$typeof) {
            case va:
              return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
            case wa:
              return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
            case Ha:
              var f3 = d3._init;
              return y2(a3, b3, c3, f3(d3._payload), e3);
          }
          if (eb(d3) || Ka(d3))
            return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
          th(b3, d3);
        }
        return null;
      }
      function n2(e3, g3, h3, k3) {
        for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
          u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
          var n3 = r2(e3, u2, h3[w2], k3);
          if (null === n3) {
            null === u2 && (u2 = x2);
            break;
          }
          a2 && u2 && null === n3.alternate && b2(e3, u2);
          g3 = f2(n3, g3, w2);
          null === m3 ? l3 = n3 : m3.sibling = n3;
          m3 = n3;
          u2 = x2;
        }
        if (w2 === h3.length)
          return c2(e3, u2), I$3 && tg(e3, w2), l3;
        if (null === u2) {
          for (; w2 < h3.length; w2++)
            u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
          I$3 && tg(e3, w2);
          return l3;
        }
        for (u2 = d2(e3, u2); w2 < h3.length; w2++)
          x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
        a2 && u2.forEach(function(a3) {
          return b2(e3, a3);
        });
        I$3 && tg(e3, w2);
        return l3;
      }
      function t2(e3, g3, h3, k3) {
        var l3 = Ka(h3);
        if ("function" !== typeof l3)
          throw Error(p$4(150));
        h3 = l3.call(h3);
        if (null == h3)
          throw Error(p$4(151));
        for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
          m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
          var t3 = r2(e3, m3, n3.value, k3);
          if (null === t3) {
            null === m3 && (m3 = x2);
            break;
          }
          a2 && m3 && null === t3.alternate && b2(e3, m3);
          g3 = f2(t3, g3, w2);
          null === u2 ? l3 = t3 : u2.sibling = t3;
          u2 = t3;
          m3 = x2;
        }
        if (n3.done)
          return c2(
            e3,
            m3
          ), I$3 && tg(e3, w2), l3;
        if (null === m3) {
          for (; !n3.done; w2++, n3 = h3.next())
            n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
          I$3 && tg(e3, w2);
          return l3;
        }
        for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
          n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        a2 && m3.forEach(function(a3) {
          return b2(e3, a3);
        });
        I$3 && tg(e3, w2);
        return l3;
      }
      function J2(a3, d3, f3, h3) {
        "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
        if ("object" === typeof f3 && null !== f3) {
          switch (f3.$$typeof) {
            case va:
              a: {
                for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                  if (l3.key === k3) {
                    k3 = f3.type;
                    if (k3 === ya) {
                      if (7 === l3.tag) {
                        c2(a3, l3.sibling);
                        d3 = e2(l3, f3.props.children);
                        d3.return = a3;
                        a3 = d3;
                        break a;
                      }
                    } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                      c2(a3, l3.sibling);
                      d3 = e2(l3, f3.props);
                      d3.ref = sh(a3, l3, f3);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                    c2(a3, l3);
                    break;
                  } else
                    b2(a3, l3);
                  l3 = l3.sibling;
                }
                f3.type === ya ? (d3 = Ah(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = sh(a3, d3, f3), h3.return = a3, a3 = h3);
              }
              return g2(a3);
            case wa:
              a: {
                for (l3 = f3.key; null !== d3; ) {
                  if (d3.key === l3)
                    if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                      c2(a3, d3.sibling);
                      d3 = e2(d3, f3.children || []);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    } else {
                      c2(a3, d3);
                      break;
                    }
                  else
                    b2(a3, d3);
                  d3 = d3.sibling;
                }
                d3 = zh(f3, a3.mode, h3);
                d3.return = a3;
                a3 = d3;
              }
              return g2(a3);
            case Ha:
              return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
          }
          if (eb(f3))
            return n2(a3, d3, f3, h3);
          if (Ka(f3))
            return t2(a3, d3, f3, h3);
          th(a3, f3);
        }
        return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = xh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
      }
      return J2;
    }
    var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
    function Hh(a2) {
      if (a2 === Dh)
        throw Error(p$4(174));
      return a2;
    }
    function Ih(a2, b2) {
      G$1(Gh, b2);
      G$1(Fh, a2);
      G$1(Eh, Dh);
      a2 = b2.nodeType;
      switch (a2) {
        case 9:
        case 11:
          b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
          break;
        default:
          a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
      }
      E$1(Eh);
      G$1(Eh, b2);
    }
    function Jh() {
      E$1(Eh);
      E$1(Fh);
      E$1(Gh);
    }
    function Kh(a2) {
      Hh(Gh.current);
      var b2 = Hh(Eh.current);
      var c2 = lb(b2, a2.type);
      b2 !== c2 && (G$1(Fh, a2), G$1(Eh, c2));
    }
    function Lh(a2) {
      Fh.current === a2 && (E$1(Eh), E$1(Fh));
    }
    var M$4 = Uf(0);
    function Mh(a2) {
      for (var b2 = a2; null !== b2; ) {
        if (13 === b2.tag) {
          var c2 = b2.memoizedState;
          if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
            return b2;
        } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
          if (0 !== (b2.flags & 128))
            return b2;
        } else if (null !== b2.child) {
          b2.child.return = b2;
          b2 = b2.child;
          continue;
        }
        if (b2 === a2)
          break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a2)
            return null;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
      return null;
    }
    var Nh = [];
    function Oh() {
      for (var a2 = 0; a2 < Nh.length; a2++)
        Nh[a2]._workInProgressVersionPrimary = null;
      Nh.length = 0;
    }
    var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N$2 = null, O$3 = null, P$1 = null, Sh = false, Th = false, Uh = 0, Vh = 0;
    function Q$1() {
      throw Error(p$4(321));
    }
    function Wh(a2, b2) {
      if (null === b2)
        return false;
      for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
        if (!He$1(a2[c2], b2[c2]))
          return false;
      return true;
    }
    function Xh(a2, b2, c2, d2, e2, f2) {
      Rh = f2;
      N$2 = b2;
      b2.memoizedState = null;
      b2.updateQueue = null;
      b2.lanes = 0;
      Ph.current = null === a2 || null === a2.memoizedState ? Yh : Zh;
      a2 = c2(d2, e2);
      if (Th) {
        f2 = 0;
        do {
          Th = false;
          Uh = 0;
          if (25 <= f2)
            throw Error(p$4(301));
          f2 += 1;
          P$1 = O$3 = null;
          b2.updateQueue = null;
          Ph.current = $h;
          a2 = c2(d2, e2);
        } while (Th);
      }
      Ph.current = ai;
      b2 = null !== O$3 && null !== O$3.next;
      Rh = 0;
      P$1 = O$3 = N$2 = null;
      Sh = false;
      if (b2)
        throw Error(p$4(300));
      return a2;
    }
    function bi() {
      var a2 = 0 !== Uh;
      Uh = 0;
      return a2;
    }
    function ci() {
      var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === P$1 ? N$2.memoizedState = P$1 = a2 : P$1 = P$1.next = a2;
      return P$1;
    }
    function di() {
      if (null === O$3) {
        var a2 = N$2.alternate;
        a2 = null !== a2 ? a2.memoizedState : null;
      } else
        a2 = O$3.next;
      var b2 = null === P$1 ? N$2.memoizedState : P$1.next;
      if (null !== b2)
        P$1 = b2, O$3 = a2;
      else {
        if (null === a2)
          throw Error(p$4(310));
        O$3 = a2;
        a2 = { memoizedState: O$3.memoizedState, baseState: O$3.baseState, baseQueue: O$3.baseQueue, queue: O$3.queue, next: null };
        null === P$1 ? N$2.memoizedState = P$1 = a2 : P$1 = P$1.next = a2;
      }
      return P$1;
    }
    function ei(a2, b2) {
      return "function" === typeof b2 ? b2(a2) : b2;
    }
    function fi(a2) {
      var b2 = di(), c2 = b2.queue;
      if (null === c2)
        throw Error(p$4(311));
      c2.lastRenderedReducer = a2;
      var d2 = O$3, e2 = d2.baseQueue, f2 = c2.pending;
      if (null !== f2) {
        if (null !== e2) {
          var g2 = e2.next;
          e2.next = f2.next;
          f2.next = g2;
        }
        d2.baseQueue = e2 = f2;
        c2.pending = null;
      }
      if (null !== e2) {
        f2 = e2.next;
        d2 = d2.baseState;
        var h2 = g2 = null, k2 = null, l2 = f2;
        do {
          var m2 = l2.lane;
          if ((Rh & m2) === m2)
            null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
          else {
            var q2 = {
              lane: m2,
              action: l2.action,
              hasEagerState: l2.hasEagerState,
              eagerState: l2.eagerState,
              next: null
            };
            null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
            N$2.lanes |= m2;
            hh |= m2;
          }
          l2 = l2.next;
        } while (null !== l2 && l2 !== f2);
        null === k2 ? g2 = d2 : k2.next = h2;
        He$1(d2, b2.memoizedState) || (Ug = true);
        b2.memoizedState = d2;
        b2.baseState = g2;
        b2.baseQueue = k2;
        c2.lastRenderedState = d2;
      }
      a2 = c2.interleaved;
      if (null !== a2) {
        e2 = a2;
        do
          f2 = e2.lane, N$2.lanes |= f2, hh |= f2, e2 = e2.next;
        while (e2 !== a2);
      } else
        null === e2 && (c2.lanes = 0);
      return [b2.memoizedState, c2.dispatch];
    }
    function gi(a2) {
      var b2 = di(), c2 = b2.queue;
      if (null === c2)
        throw Error(p$4(311));
      c2.lastRenderedReducer = a2;
      var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
      if (null !== e2) {
        c2.pending = null;
        var g2 = e2 = e2.next;
        do
          f2 = a2(f2, g2.action), g2 = g2.next;
        while (g2 !== e2);
        He$1(f2, b2.memoizedState) || (Ug = true);
        b2.memoizedState = f2;
        null === b2.baseQueue && (b2.baseState = f2);
        c2.lastRenderedState = f2;
      }
      return [f2, d2];
    }
    function hi() {
    }
    function ii(a2, b2) {
      var c2 = N$2, d2 = di(), e2 = b2(), f2 = !He$1(d2.memoizedState, e2);
      f2 && (d2.memoizedState = e2, Ug = true);
      d2 = d2.queue;
      ji(ki.bind(null, c2, d2, a2), [a2]);
      if (d2.getSnapshot !== b2 || f2 || null !== P$1 && P$1.memoizedState.tag & 1) {
        c2.flags |= 2048;
        li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
        if (null === R$1)
          throw Error(p$4(349));
        0 !== (Rh & 30) || ni(c2, b2, e2);
      }
      return e2;
    }
    function ni(a2, b2, c2) {
      a2.flags |= 16384;
      a2 = { getSnapshot: b2, value: c2 };
      b2 = N$2.updateQueue;
      null === b2 ? (b2 = { lastEffect: null, stores: null }, N$2.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
    }
    function mi(a2, b2, c2, d2) {
      b2.value = c2;
      b2.getSnapshot = d2;
      oi(b2) && pi(a2);
    }
    function ki(a2, b2, c2) {
      return c2(function() {
        oi(b2) && pi(a2);
      });
    }
    function oi(a2) {
      var b2 = a2.getSnapshot;
      a2 = a2.value;
      try {
        var c2 = b2();
        return !He$1(a2, c2);
      } catch (d2) {
        return true;
      }
    }
    function pi(a2) {
      var b2 = Zg(a2, 1);
      null !== b2 && mh(b2, a2, 1, -1);
    }
    function qi(a2) {
      var b2 = ci();
      "function" === typeof a2 && (a2 = a2());
      b2.memoizedState = b2.baseState = a2;
      a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a2 };
      b2.queue = a2;
      a2 = a2.dispatch = ri.bind(null, N$2, a2);
      return [b2.memoizedState, a2];
    }
    function li(a2, b2, c2, d2) {
      a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
      b2 = N$2.updateQueue;
      null === b2 ? (b2 = { lastEffect: null, stores: null }, N$2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
      return a2;
    }
    function si() {
      return di().memoizedState;
    }
    function ti(a2, b2, c2, d2) {
      var e2 = ci();
      N$2.flags |= a2;
      e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
    }
    function ui(a2, b2, c2, d2) {
      var e2 = di();
      d2 = void 0 === d2 ? null : d2;
      var f2 = void 0;
      if (null !== O$3) {
        var g2 = O$3.memoizedState;
        f2 = g2.destroy;
        if (null !== d2 && Wh(d2, g2.deps)) {
          e2.memoizedState = li(b2, c2, f2, d2);
          return;
        }
      }
      N$2.flags |= a2;
      e2.memoizedState = li(1 | b2, c2, f2, d2);
    }
    function vi(a2, b2) {
      return ti(8390656, 8, a2, b2);
    }
    function ji(a2, b2) {
      return ui(2048, 8, a2, b2);
    }
    function wi(a2, b2) {
      return ui(4, 2, a2, b2);
    }
    function xi(a2, b2) {
      return ui(4, 4, a2, b2);
    }
    function yi(a2, b2) {
      if ("function" === typeof b2)
        return a2 = a2(), b2(a2), function() {
          b2(null);
        };
      if (null !== b2 && void 0 !== b2)
        return a2 = a2(), b2.current = a2, function() {
          b2.current = null;
        };
    }
    function zi(a2, b2, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
      return ui(4, 4, yi.bind(null, b2, a2), c2);
    }
    function Ai() {
    }
    function Bi(a2, b2) {
      var c2 = di();
      b2 = void 0 === b2 ? null : b2;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
        return d2[0];
      c2.memoizedState = [a2, b2];
      return a2;
    }
    function Ci(a2, b2) {
      var c2 = di();
      b2 = void 0 === b2 ? null : b2;
      var d2 = c2.memoizedState;
      if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
        return d2[0];
      a2 = a2();
      c2.memoizedState = [a2, b2];
      return a2;
    }
    function Di(a2, b2, c2) {
      if (0 === (Rh & 21))
        return a2.baseState && (a2.baseState = false, Ug = true), a2.memoizedState = c2;
      He$1(c2, b2) || (c2 = yc(), N$2.lanes |= c2, hh |= c2, a2.baseState = true);
      return b2;
    }
    function Ei(a2, b2) {
      var c2 = C$1;
      C$1 = 0 !== c2 && 4 > c2 ? c2 : 4;
      a2(true);
      var d2 = Qh.transition;
      Qh.transition = {};
      try {
        a2(false), b2();
      } finally {
        C$1 = c2, Qh.transition = d2;
      }
    }
    function Fi() {
      return di().memoizedState;
    }
    function Gi(a2, b2, c2) {
      var d2 = lh(a2);
      c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (Hi(a2))
        Ii(b2, c2);
      else if (c2 = Yg(a2, b2, c2, d2), null !== c2) {
        var e2 = L();
        mh(c2, a2, d2, e2);
        Ji(c2, b2, d2);
      }
    }
    function ri(a2, b2, c2) {
      var d2 = lh(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
      if (Hi(a2))
        Ii(b2, e2);
      else {
        var f2 = a2.alternate;
        if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
          try {
            var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
            e2.hasEagerState = true;
            e2.eagerState = h2;
            if (He$1(h2, g2)) {
              var k2 = b2.interleaved;
              null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
              b2.interleaved = e2;
              return;
            }
          } catch (l2) {
          } finally {
          }
        c2 = Yg(a2, b2, e2, d2);
        null !== c2 && (e2 = L(), mh(c2, a2, d2, e2), Ji(c2, b2, d2));
      }
    }
    function Hi(a2) {
      var b2 = a2.alternate;
      return a2 === N$2 || null !== b2 && b2 === N$2;
    }
    function Ii(a2, b2) {
      Th = Sh = true;
      var c2 = a2.pending;
      null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
      a2.pending = b2;
    }
    function Ji(a2, b2, c2) {
      if (0 !== (c2 & 4194240)) {
        var d2 = b2.lanes;
        d2 &= a2.pendingLanes;
        c2 |= d2;
        b2.lanes = c2;
        Cc(a2, c2);
      }
    }
    var ai = { readContext: Vg, useCallback: Q$1, useContext: Q$1, useEffect: Q$1, useImperativeHandle: Q$1, useInsertionEffect: Q$1, useLayoutEffect: Q$1, useMemo: Q$1, useReducer: Q$1, useRef: Q$1, useState: Q$1, useDebugValue: Q$1, useDeferredValue: Q$1, useTransition: Q$1, useMutableSource: Q$1, useSyncExternalStore: Q$1, useId: Q$1, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a2, b2) {
      ci().memoizedState = [a2, void 0 === b2 ? null : b2];
      return a2;
    }, useContext: Vg, useEffect: vi, useImperativeHandle: function(a2, b2, c2) {
      c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
      return ti(
        4194308,
        4,
        yi.bind(null, b2, a2),
        c2
      );
    }, useLayoutEffect: function(a2, b2) {
      return ti(4194308, 4, a2, b2);
    }, useInsertionEffect: function(a2, b2) {
      return ti(4, 2, a2, b2);
    }, useMemo: function(a2, b2) {
      var c2 = ci();
      b2 = void 0 === b2 ? null : b2;
      a2 = a2();
      c2.memoizedState = [a2, b2];
      return a2;
    }, useReducer: function(a2, b2, c2) {
      var d2 = ci();
      b2 = void 0 !== c2 ? c2(b2) : b2;
      d2.memoizedState = d2.baseState = b2;
      a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
      d2.queue = a2;
      a2 = a2.dispatch = Gi.bind(null, N$2, a2);
      return [d2.memoizedState, a2];
    }, useRef: function(a2) {
      var b2 = ci();
      a2 = { current: a2 };
      return b2.memoizedState = a2;
    }, useState: qi, useDebugValue: Ai, useDeferredValue: function(a2) {
      return ci().memoizedState = a2;
    }, useTransition: function() {
      var a2 = qi(false), b2 = a2[0];
      a2 = Ei.bind(null, a2[1]);
      ci().memoizedState = a2;
      return [b2, a2];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a2, b2, c2) {
      var d2 = N$2, e2 = ci();
      if (I$3) {
        if (void 0 === c2)
          throw Error(p$4(407));
        c2 = c2();
      } else {
        c2 = b2();
        if (null === R$1)
          throw Error(p$4(349));
        0 !== (Rh & 30) || ni(d2, b2, c2);
      }
      e2.memoizedState = c2;
      var f2 = { value: c2, getSnapshot: b2 };
      e2.queue = f2;
      vi(ki.bind(
        null,
        d2,
        f2,
        a2
      ), [a2]);
      d2.flags |= 2048;
      li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
      return c2;
    }, useId: function() {
      var a2 = ci(), b2 = R$1.identifierPrefix;
      if (I$3) {
        var c2 = sg;
        var d2 = rg;
        c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
        b2 = ":" + b2 + "R" + c2;
        c2 = Uh++;
        0 < c2 && (b2 += "H" + c2.toString(32));
        b2 += ":";
      } else
        c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
      return a2.memoizedState = b2;
    }, unstable_isNewReconciler: false }, Zh = {
      readContext: Vg,
      useCallback: Bi,
      useContext: Vg,
      useEffect: ji,
      useImperativeHandle: zi,
      useInsertionEffect: wi,
      useLayoutEffect: xi,
      useMemo: Ci,
      useReducer: fi,
      useRef: si,
      useState: function() {
        return fi(ei);
      },
      useDebugValue: Ai,
      useDeferredValue: function(a2) {
        var b2 = di();
        return Di(b2, O$3.memoizedState, a2);
      },
      useTransition: function() {
        var a2 = fi(ei)[0], b2 = di().memoizedState;
        return [a2, b2];
      },
      useMutableSource: hi,
      useSyncExternalStore: ii,
      useId: Fi,
      unstable_isNewReconciler: false
    }, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
      return gi(ei);
    }, useDebugValue: Ai, useDeferredValue: function(a2) {
      var b2 = di();
      return null === O$3 ? b2.memoizedState = a2 : Di(b2, O$3.memoizedState, a2);
    }, useTransition: function() {
      var a2 = gi(ei)[0], b2 = di().memoizedState;
      return [a2, b2];
    }, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
    function Ki(a2, b2) {
      try {
        var c2 = "", d2 = b2;
        do
          c2 += Pa(d2), d2 = d2.return;
        while (d2);
        var e2 = c2;
      } catch (f2) {
        e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
      }
      return { value: a2, source: b2, stack: e2, digest: null };
    }
    function Li(a2, b2, c2) {
      return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
    }
    function Mi(a2, b2) {
      try {
        console.error(b2.value);
      } catch (c2) {
        setTimeout(function() {
          throw c2;
        });
      }
    }
    var Ni = "function" === typeof WeakMap ? WeakMap : Map;
    function Oi(a2, b2, c2) {
      c2 = ch(-1, c2);
      c2.tag = 3;
      c2.payload = { element: null };
      var d2 = b2.value;
      c2.callback = function() {
        Pi || (Pi = true, Qi = d2);
        Mi(a2, b2);
      };
      return c2;
    }
    function Ri(a2, b2, c2) {
      c2 = ch(-1, c2);
      c2.tag = 3;
      var d2 = a2.type.getDerivedStateFromError;
      if ("function" === typeof d2) {
        var e2 = b2.value;
        c2.payload = function() {
          return d2(e2);
        };
        c2.callback = function() {
          Mi(a2, b2);
        };
      }
      var f2 = a2.stateNode;
      null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
        Mi(a2, b2);
        "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
        var c3 = b2.stack;
        this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
      });
      return c2;
    }
    function Ti(a2, b2, c2) {
      var d2 = a2.pingCache;
      if (null === d2) {
        d2 = a2.pingCache = new Ni();
        var e2 = /* @__PURE__ */ new Set();
        d2.set(b2, e2);
      } else
        e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
      e2.has(c2) || (e2.add(c2), a2 = Ui.bind(null, a2, b2, c2), b2.then(a2, a2));
    }
    function Vi(a2) {
      do {
        var b2;
        if (b2 = 13 === a2.tag)
          b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
        if (b2)
          return a2;
        a2 = a2.return;
      } while (null !== a2);
      return null;
    }
    function Wi(a2, b2, c2, d2, e2) {
      if (0 === (a2.mode & 1))
        return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a2;
      a2.flags |= 65536;
      a2.lanes = e2;
      return a2;
    }
    var Xi = ua.ReactCurrentOwner, Ug = false;
    function Yi(a2, b2, c2, d2) {
      b2.child = null === a2 ? Ch(b2, null, c2, d2) : Bh(b2, a2.child, c2, d2);
    }
    function Zi(a2, b2, c2, d2, e2) {
      c2 = c2.render;
      var f2 = b2.ref;
      Tg(b2, e2);
      d2 = Xh(a2, b2, c2, d2, f2, e2);
      c2 = bi();
      if (null !== a2 && !Ug)
        return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
      I$3 && c2 && vg(b2);
      b2.flags |= 1;
      Yi(a2, b2, d2, e2);
      return b2.child;
    }
    function aj(a2, b2, c2, d2, e2) {
      if (null === a2) {
        var f2 = c2.type;
        if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
          return b2.tag = 15, b2.type = f2, cj(a2, b2, f2, d2, e2);
        a2 = yh(c2.type, null, d2, b2, b2.mode, e2);
        a2.ref = b2.ref;
        a2.return = b2;
        return b2.child = a2;
      }
      f2 = a2.child;
      if (0 === (a2.lanes & e2)) {
        var g2 = f2.memoizedProps;
        c2 = c2.compare;
        c2 = null !== c2 ? c2 : Ie$2;
        if (c2(g2, d2) && a2.ref === b2.ref)
          return $i(a2, b2, e2);
      }
      b2.flags |= 1;
      a2 = wh(f2, d2);
      a2.ref = b2.ref;
      a2.return = b2;
      return b2.child = a2;
    }
    function cj(a2, b2, c2, d2, e2) {
      if (null !== a2) {
        var f2 = a2.memoizedProps;
        if (Ie$2(f2, d2) && a2.ref === b2.ref)
          if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2))
            0 !== (a2.flags & 131072) && (Ug = true);
          else
            return b2.lanes = a2.lanes, $i(a2, b2, e2);
      }
      return dj(a2, b2, c2, d2, e2);
    }
    function ej(a2, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
      if ("hidden" === d2.mode)
        if (0 === (b2.mode & 1))
          b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(fj, gj), gj |= c2;
        else {
          if (0 === (c2 & 1073741824))
            return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(fj, gj), gj |= a2, null;
          b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d2 = null !== f2 ? f2.baseLanes : c2;
          G$1(fj, gj);
          gj |= d2;
        }
      else
        null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$1(fj, gj), gj |= d2;
      Yi(a2, b2, e2, c2);
      return b2.child;
    }
    function hj(a2, b2) {
      var c2 = b2.ref;
      if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
        b2.flags |= 512, b2.flags |= 2097152;
    }
    function dj(a2, b2, c2, d2, e2) {
      var f2 = Zf(c2) ? Xf : H$1.current;
      f2 = Yf(b2, f2);
      Tg(b2, e2);
      c2 = Xh(a2, b2, c2, d2, f2, e2);
      d2 = bi();
      if (null !== a2 && !Ug)
        return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
      I$3 && d2 && vg(b2);
      b2.flags |= 1;
      Yi(a2, b2, c2, e2);
      return b2.child;
    }
    function ij(a2, b2, c2, d2, e2) {
      if (Zf(c2)) {
        var f2 = true;
        cg(b2);
      } else
        f2 = false;
      Tg(b2, e2);
      if (null === b2.stateNode)
        jj(a2, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
      else if (null === a2) {
        var g2 = b2.stateNode, h2 = b2.memoizedProps;
        g2.props = h2;
        var k2 = g2.context, l2 = c2.contextType;
        "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H$1.current, l2 = Yf(b2, l2));
        var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
        q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
        $g = false;
        var r2 = b2.memoizedState;
        g2.state = r2;
        gh(b2, d2, g2, e2);
        k2 = b2.memoizedState;
        h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
      } else {
        g2 = b2.stateNode;
        bh(a2, b2);
        h2 = b2.memoizedProps;
        l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
        g2.props = l2;
        q2 = b2.pendingProps;
        r2 = g2.context;
        k2 = c2.contextType;
        "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H$1.current, k2 = Yf(b2, k2));
        var y2 = c2.getDerivedStateFromProps;
        (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
        $g = false;
        r2 = b2.memoizedState;
        g2.state = r2;
        gh(b2, d2, g2, e2);
        var n2 = b2.memoizedState;
        h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
      }
      return kj(a2, b2, c2, d2, f2, e2);
    }
    function kj(a2, b2, c2, d2, e2, f2) {
      hj(a2, b2);
      var g2 = 0 !== (b2.flags & 128);
      if (!d2 && !g2)
        return e2 && dg(b2, c2, false), $i(a2, b2, f2);
      d2 = b2.stateNode;
      Xi.current = b2;
      var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
      b2.flags |= 1;
      null !== a2 && g2 ? (b2.child = Bh(b2, a2.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a2, b2, h2, f2);
      b2.memoizedState = d2.state;
      e2 && dg(b2, c2, true);
      return b2.child;
    }
    function lj(a2) {
      var b2 = a2.stateNode;
      b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
      Ih(a2, b2.containerInfo);
    }
    function mj(a2, b2, c2, d2, e2) {
      Ig();
      Jg(e2);
      b2.flags |= 256;
      Yi(a2, b2, c2, d2);
      return b2.child;
    }
    var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function oj(a2) {
      return { baseLanes: a2, cachePool: null, transitions: null };
    }
    function pj(a2, b2, c2) {
      var d2 = b2.pendingProps, e2 = M$4.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
      (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
      if (h2)
        f2 = true, b2.flags &= -129;
      else if (null === a2 || null !== a2.memoizedState)
        e2 |= 1;
      G$1(M$4, e2 & 1);
      if (null === a2) {
        Eg(b2);
        a2 = b2.memoizedState;
        if (null !== a2 && (a2 = a2.dehydrated, null !== a2))
          return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
        g2 = d2.children;
        a2 = d2.fallback;
        return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a2 = Ah(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a2) : rj(b2, g2);
      }
      e2 = a2.memoizedState;
      if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
        return sj(a2, b2, g2, d2, h2, e2, c2);
      if (f2) {
        f2 = d2.fallback;
        g2 = b2.mode;
        e2 = a2.child;
        h2 = e2.sibling;
        var k2 = { mode: "hidden", children: d2.children };
        0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
        null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
        f2.return = b2;
        d2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        d2 = f2;
        f2 = b2.child;
        g2 = a2.child.memoizedState;
        g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
        f2.memoizedState = g2;
        f2.childLanes = a2.childLanes & ~c2;
        b2.memoizedState = nj;
        return d2;
      }
      f2 = a2.child;
      a2 = f2.sibling;
      d2 = wh(f2, { mode: "visible", children: d2.children });
      0 === (b2.mode & 1) && (d2.lanes = c2);
      d2.return = b2;
      d2.sibling = null;
      null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
      b2.child = d2;
      b2.memoizedState = null;
      return d2;
    }
    function rj(a2, b2) {
      b2 = qj({ mode: "visible", children: b2 }, a2.mode, 0, null);
      b2.return = a2;
      return a2.child = b2;
    }
    function tj(a2, b2, c2, d2) {
      null !== d2 && Jg(d2);
      Bh(b2, a2.child, null, c2);
      a2 = rj(b2, b2.pendingProps.children);
      a2.flags |= 2;
      b2.memoizedState = null;
      return a2;
    }
    function sj(a2, b2, c2, d2, e2, f2, g2) {
      if (c2) {
        if (b2.flags & 256)
          return b2.flags &= -257, d2 = Li(Error(p$4(422))), tj(a2, b2, g2, d2);
        if (null !== b2.memoizedState)
          return b2.child = a2.child, b2.flags |= 128, null;
        f2 = d2.fallback;
        e2 = b2.mode;
        d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
        f2 = Ah(f2, e2, g2, null);
        f2.flags |= 2;
        d2.return = b2;
        f2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        0 !== (b2.mode & 1) && Bh(b2, a2.child, null, g2);
        b2.child.memoizedState = oj(g2);
        b2.memoizedState = nj;
        return f2;
      }
      if (0 === (b2.mode & 1))
        return tj(a2, b2, g2, null);
      if ("$!" === e2.data) {
        d2 = e2.nextSibling && e2.nextSibling.dataset;
        if (d2)
          var h2 = d2.dgst;
        d2 = h2;
        f2 = Error(p$4(419));
        d2 = Li(f2, d2, void 0);
        return tj(a2, b2, g2, d2);
      }
      h2 = 0 !== (g2 & a2.childLanes);
      if (Ug || h2) {
        d2 = R$1;
        if (null !== d2) {
          switch (g2 & -g2) {
            case 4:
              e2 = 2;
              break;
            case 16:
              e2 = 8;
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
              e2 = 32;
              break;
            case 536870912:
              e2 = 268435456;
              break;
            default:
              e2 = 0;
          }
          e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
          0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a2, e2), mh(d2, a2, e2, -1));
        }
        uj();
        d2 = Li(Error(p$4(421)));
        return tj(a2, b2, g2, d2);
      }
      if ("$?" === e2.data)
        return b2.flags |= 128, b2.child = a2.child, b2 = vj.bind(null, a2), e2._reactRetry = b2, null;
      a2 = f2.treeContext;
      yg = Lf(e2.nextSibling);
      xg = b2;
      I$3 = true;
      zg = null;
      null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
      b2 = rj(b2, d2.children);
      b2.flags |= 4096;
      return b2;
    }
    function wj(a2, b2, c2) {
      a2.lanes |= b2;
      var d2 = a2.alternate;
      null !== d2 && (d2.lanes |= b2);
      Sg(a2.return, b2, c2);
    }
    function xj(a2, b2, c2, d2, e2) {
      var f2 = a2.memoizedState;
      null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
    }
    function yj(a2, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
      Yi(a2, b2, d2.children, c2);
      d2 = M$4.current;
      if (0 !== (d2 & 2))
        d2 = d2 & 1 | 2, b2.flags |= 128;
      else {
        if (null !== a2 && 0 !== (a2.flags & 128))
          a:
            for (a2 = b2.child; null !== a2; ) {
              if (13 === a2.tag)
                null !== a2.memoizedState && wj(a2, c2, b2);
              else if (19 === a2.tag)
                wj(a2, c2, b2);
              else if (null !== a2.child) {
                a2.child.return = a2;
                a2 = a2.child;
                continue;
              }
              if (a2 === b2)
                break a;
              for (; null === a2.sibling; ) {
                if (null === a2.return || a2.return === b2)
                  break a;
                a2 = a2.return;
              }
              a2.sibling.return = a2.return;
              a2 = a2.sibling;
            }
        d2 &= 1;
      }
      G$1(M$4, d2);
      if (0 === (b2.mode & 1))
        b2.memoizedState = null;
      else
        switch (e2) {
          case "forwards":
            c2 = b2.child;
            for (e2 = null; null !== c2; )
              a2 = c2.alternate, null !== a2 && null === Mh(a2) && (e2 = c2), c2 = c2.sibling;
            c2 = e2;
            null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
            xj(b2, false, e2, c2, f2);
            break;
          case "backwards":
            c2 = null;
            e2 = b2.child;
            for (b2.child = null; null !== e2; ) {
              a2 = e2.alternate;
              if (null !== a2 && null === Mh(a2)) {
                b2.child = e2;
                break;
              }
              a2 = e2.sibling;
              e2.sibling = c2;
              c2 = e2;
              e2 = a2;
            }
            xj(b2, true, c2, null, f2);
            break;
          case "together":
            xj(b2, false, null, null, void 0);
            break;
          default:
            b2.memoizedState = null;
        }
      return b2.child;
    }
    function jj(a2, b2) {
      0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
    }
    function $i(a2, b2, c2) {
      null !== a2 && (b2.dependencies = a2.dependencies);
      hh |= b2.lanes;
      if (0 === (c2 & b2.childLanes))
        return null;
      if (null !== a2 && b2.child !== a2.child)
        throw Error(p$4(153));
      if (null !== b2.child) {
        a2 = b2.child;
        c2 = wh(a2, a2.pendingProps);
        b2.child = c2;
        for (c2.return = b2; null !== a2.sibling; )
          a2 = a2.sibling, c2 = c2.sibling = wh(a2, a2.pendingProps), c2.return = b2;
        c2.sibling = null;
      }
      return b2.child;
    }
    function zj(a2, b2, c2) {
      switch (b2.tag) {
        case 3:
          lj(b2);
          Ig();
          break;
        case 5:
          Kh(b2);
          break;
        case 1:
          Zf(b2.type) && cg(b2);
          break;
        case 4:
          Ih(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          var d2 = b2.type._context, e2 = b2.memoizedProps.value;
          G$1(Mg, d2._currentValue);
          d2._currentValue = e2;
          break;
        case 13:
          d2 = b2.memoizedState;
          if (null !== d2) {
            if (null !== d2.dehydrated)
              return G$1(M$4, M$4.current & 1), b2.flags |= 128, null;
            if (0 !== (c2 & b2.child.childLanes))
              return pj(a2, b2, c2);
            G$1(M$4, M$4.current & 1);
            a2 = $i(a2, b2, c2);
            return null !== a2 ? a2.sibling : null;
          }
          G$1(M$4, M$4.current & 1);
          break;
        case 19:
          d2 = 0 !== (c2 & b2.childLanes);
          if (0 !== (a2.flags & 128)) {
            if (d2)
              return yj(a2, b2, c2);
            b2.flags |= 128;
          }
          e2 = b2.memoizedState;
          null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          G$1(M$4, M$4.current);
          if (d2)
            break;
          else
            return null;
        case 22:
        case 23:
          return b2.lanes = 0, ej(a2, b2, c2);
      }
      return $i(a2, b2, c2);
    }
    var Aj, Bj, Cj, Dj;
    Aj = function(a2, b2) {
      for (var c2 = b2.child; null !== c2; ) {
        if (5 === c2.tag || 6 === c2.tag)
          a2.appendChild(c2.stateNode);
        else if (4 !== c2.tag && null !== c2.child) {
          c2.child.return = c2;
          c2 = c2.child;
          continue;
        }
        if (c2 === b2)
          break;
        for (; null === c2.sibling; ) {
          if (null === c2.return || c2.return === b2)
            return;
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        c2 = c2.sibling;
      }
    };
    Bj = function() {
    };
    Cj = function(a2, b2, c2, d2) {
      var e2 = a2.memoizedProps;
      if (e2 !== d2) {
        a2 = b2.stateNode;
        Hh(Eh.current);
        var f2 = null;
        switch (c2) {
          case "input":
            e2 = Ya(a2, e2);
            d2 = Ya(a2, d2);
            f2 = [];
            break;
          case "select":
            e2 = A$1({}, e2, { value: void 0 });
            d2 = A$1({}, d2, { value: void 0 });
            f2 = [];
            break;
          case "textarea":
            e2 = gb(a2, e2);
            d2 = gb(a2, d2);
            f2 = [];
            break;
          default:
            "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
        }
        ub(c2, d2);
        var g2;
        c2 = null;
        for (l2 in e2)
          if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
            if ("style" === l2) {
              var h2 = e2[l2];
              for (g2 in h2)
                h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
            } else
              "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
        for (l2 in d2) {
          var k2 = d2[l2];
          h2 = null != e2 ? e2[l2] : void 0;
          if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
            if ("style" === l2)
              if (h2) {
                for (g2 in h2)
                  !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
                for (g2 in k2)
                  k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
              } else
                c2 || (f2 || (f2 = []), f2.push(
                  l2,
                  c2
                )), c2 = k2;
            else
              "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$3("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
        }
        c2 && (f2 = f2 || []).push("style", c2);
        var l2 = f2;
        if (b2.updateQueue = l2)
          b2.flags |= 4;
      }
    };
    Dj = function(a2, b2, c2, d2) {
      c2 !== d2 && (b2.flags |= 4);
    };
    function Ej(a2, b2) {
      if (!I$3)
        switch (a2.tailMode) {
          case "hidden":
            b2 = a2.tail;
            for (var c2 = null; null !== b2; )
              null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
            null === c2 ? a2.tail = null : c2.sibling = null;
            break;
          case "collapsed":
            c2 = a2.tail;
            for (var d2 = null; null !== c2; )
              null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
            null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
        }
    }
    function S$4(a2) {
      var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
      if (b2)
        for (var e2 = a2.child; null !== e2; )
          c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
      else
        for (e2 = a2.child; null !== e2; )
          c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
      a2.subtreeFlags |= d2;
      a2.childLanes = c2;
      return b2;
    }
    function Fj(a2, b2, c2) {
      var d2 = b2.pendingProps;
      wg(b2);
      switch (b2.tag) {
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
          return S$4(b2), null;
        case 1:
          return Zf(b2.type) && $f(), S$4(b2), null;
        case 3:
          d2 = b2.stateNode;
          Jh();
          E$1(Wf);
          E$1(H$1);
          Oh();
          d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
          if (null === a2 || null === a2.child)
            Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
          Bj(a2, b2);
          S$4(b2);
          return null;
        case 5:
          Lh(b2);
          var e2 = Hh(Gh.current);
          c2 = b2.type;
          if (null !== a2 && null != b2.stateNode)
            Cj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
          else {
            if (!d2) {
              if (null === b2.stateNode)
                throw Error(p$4(166));
              S$4(b2);
              return null;
            }
            a2 = Hh(Eh.current);
            if (Gg(b2)) {
              d2 = b2.stateNode;
              c2 = b2.type;
              var f2 = b2.memoizedProps;
              d2[Of] = b2;
              d2[Pf] = f2;
              a2 = 0 !== (b2.mode & 1);
              switch (c2) {
                case "dialog":
                  D$3("cancel", d2);
                  D$3("close", d2);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D$3("load", d2);
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < lf.length; e2++)
                    D$3(lf[e2], d2);
                  break;
                case "source":
                  D$3("error", d2);
                  break;
                case "img":
                case "image":
                case "link":
                  D$3(
                    "error",
                    d2
                  );
                  D$3("load", d2);
                  break;
                case "details":
                  D$3("toggle", d2);
                  break;
                case "input":
                  Za(d2, f2);
                  D$3("invalid", d2);
                  break;
                case "select":
                  d2._wrapperState = { wasMultiple: !!f2.multiple };
                  D$3("invalid", d2);
                  break;
                case "textarea":
                  hb(d2, f2), D$3("invalid", d2);
              }
              ub(c2, f2);
              e2 = null;
              for (var g2 in f2)
                if (f2.hasOwnProperty(g2)) {
                  var h2 = f2[g2];
                  "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                    d2.textContent,
                    h2,
                    a2
                  ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$3("scroll", d2);
                }
              switch (c2) {
                case "input":
                  Va(d2);
                  db(d2, f2, true);
                  break;
                case "textarea":
                  Va(d2);
                  jb(d2);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f2.onClick && (d2.onclick = Bf);
              }
              d2 = e2;
              b2.updateQueue = d2;
              null !== d2 && (b2.flags |= 4);
            } else {
              g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
              "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
              a2[Of] = b2;
              a2[Pf] = d2;
              Aj(a2, b2, false, false);
              b2.stateNode = a2;
              a: {
                g2 = vb(c2, d2);
                switch (c2) {
                  case "dialog":
                    D$3("cancel", a2);
                    D$3("close", a2);
                    e2 = d2;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D$3("load", a2);
                    e2 = d2;
                    break;
                  case "video":
                  case "audio":
                    for (e2 = 0; e2 < lf.length; e2++)
                      D$3(lf[e2], a2);
                    e2 = d2;
                    break;
                  case "source":
                    D$3("error", a2);
                    e2 = d2;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D$3(
                      "error",
                      a2
                    );
                    D$3("load", a2);
                    e2 = d2;
                    break;
                  case "details":
                    D$3("toggle", a2);
                    e2 = d2;
                    break;
                  case "input":
                    Za(a2, d2);
                    e2 = Ya(a2, d2);
                    D$3("invalid", a2);
                    break;
                  case "option":
                    e2 = d2;
                    break;
                  case "select":
                    a2._wrapperState = { wasMultiple: !!d2.multiple };
                    e2 = A$1({}, d2, { value: void 0 });
                    D$3("invalid", a2);
                    break;
                  case "textarea":
                    hb(a2, d2);
                    e2 = gb(a2, d2);
                    D$3("invalid", a2);
                    break;
                  default:
                    e2 = d2;
                }
                ub(c2, e2);
                h2 = e2;
                for (f2 in h2)
                  if (h2.hasOwnProperty(f2)) {
                    var k2 = h2[f2];
                    "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$3("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
                  }
                switch (c2) {
                  case "input":
                    Va(a2);
                    db(a2, d2, false);
                    break;
                  case "textarea":
                    Va(a2);
                    jb(a2);
                    break;
                  case "option":
                    null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                    break;
                  case "select":
                    a2.multiple = !!d2.multiple;
                    f2 = d2.value;
                    null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                      a2,
                      !!d2.multiple,
                      d2.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e2.onClick && (a2.onclick = Bf);
                }
                switch (c2) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d2 = !!d2.autoFocus;
                    break a;
                  case "img":
                    d2 = true;
                    break a;
                  default:
                    d2 = false;
                }
              }
              d2 && (b2.flags |= 4);
            }
            null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
          }
          S$4(b2);
          return null;
        case 6:
          if (a2 && null != b2.stateNode)
            Dj(a2, b2, a2.memoizedProps, d2);
          else {
            if ("string" !== typeof d2 && null === b2.stateNode)
              throw Error(p$4(166));
            c2 = Hh(Gh.current);
            Hh(Eh.current);
            if (Gg(b2)) {
              d2 = b2.stateNode;
              c2 = b2.memoizedProps;
              d2[Of] = b2;
              if (f2 = d2.nodeValue !== c2) {
                if (a2 = xg, null !== a2)
                  switch (a2.tag) {
                    case 3:
                      Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                      break;
                    case 5:
                      true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  }
              }
              f2 && (b2.flags |= 4);
            } else
              d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
          }
          S$4(b2);
          return null;
        case 13:
          E$1(M$4);
          d2 = b2.memoizedState;
          if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
            if (I$3 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
              Hg(), Ig(), b2.flags |= 98560, f2 = false;
            else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
              if (null === a2) {
                if (!f2)
                  throw Error(p$4(318));
                f2 = b2.memoizedState;
                f2 = null !== f2 ? f2.dehydrated : null;
                if (!f2)
                  throw Error(p$4(317));
                f2[Of] = b2;
              } else
                Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
              S$4(b2);
              f2 = false;
            } else
              null !== zg && (Gj(zg), zg = null), f2 = true;
            if (!f2)
              return b2.flags & 65536 ? b2 : null;
          }
          if (0 !== (b2.flags & 128))
            return b2.lanes = c2, b2;
          d2 = null !== d2;
          d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (M$4.current & 1) ? 0 === T$2 && (T$2 = 3) : uj()));
          null !== b2.updateQueue && (b2.flags |= 4);
          S$4(b2);
          return null;
        case 4:
          return Jh(), Bj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$4(b2), null;
        case 10:
          return Rg(b2.type._context), S$4(b2), null;
        case 17:
          return Zf(b2.type) && $f(), S$4(b2), null;
        case 19:
          E$1(M$4);
          f2 = b2.memoizedState;
          if (null === f2)
            return S$4(b2), null;
          d2 = 0 !== (b2.flags & 128);
          g2 = f2.rendering;
          if (null === g2)
            if (d2)
              Ej(f2, false);
            else {
              if (0 !== T$2 || null !== a2 && 0 !== (a2.flags & 128))
                for (a2 = b2.child; null !== a2; ) {
                  g2 = Mh(a2);
                  if (null !== g2) {
                    b2.flags |= 128;
                    Ej(f2, false);
                    d2 = g2.updateQueue;
                    null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                    b2.subtreeFlags = 0;
                    d2 = c2;
                    for (c2 = b2.child; null !== c2; )
                      f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                    G$1(M$4, M$4.current & 1 | 2);
                    return b2.child;
                  }
                  a2 = a2.sibling;
                }
              null !== f2.tail && B() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
            }
          else {
            if (!d2)
              if (a2 = Mh(g2), null !== a2) {
                if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$3)
                  return S$4(b2), null;
              } else
                2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
            f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
          }
          if (null !== f2.tail)
            return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = M$4.current, G$1(M$4, d2 ? c2 & 1 | 2 : c2 & 1), b2;
          S$4(b2);
          return null;
        case 22:
        case 23:
          return Ij(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S$4(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$4(b2), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p$4(156, b2.tag));
    }
    function Jj(a2, b2) {
      wg(b2);
      switch (b2.tag) {
        case 1:
          return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
        case 3:
          return Jh(), E$1(Wf), E$1(H$1), Oh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
        case 5:
          return Lh(b2), null;
        case 13:
          E$1(M$4);
          a2 = b2.memoizedState;
          if (null !== a2 && null !== a2.dehydrated) {
            if (null === b2.alternate)
              throw Error(p$4(340));
            Ig();
          }
          a2 = b2.flags;
          return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
        case 19:
          return E$1(M$4), null;
        case 4:
          return Jh(), null;
        case 10:
          return Rg(b2.type._context), null;
        case 22:
        case 23:
          return Ij(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Kj = false, U$3 = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V$1 = null;
    function Mj(a2, b2) {
      var c2 = a2.ref;
      if (null !== c2)
        if ("function" === typeof c2)
          try {
            c2(null);
          } catch (d2) {
            W$2(a2, b2, d2);
          }
        else
          c2.current = null;
    }
    function Nj(a2, b2, c2) {
      try {
        c2();
      } catch (d2) {
        W$2(a2, b2, d2);
      }
    }
    var Oj = false;
    function Pj(a2, b2) {
      Cf = dd;
      a2 = Me$1();
      if (Ne$1(a2)) {
        if ("selectionStart" in a2)
          var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
        else
          a: {
            c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
            var d2 = c2.getSelection && c2.getSelection();
            if (d2 && 0 !== d2.rangeCount) {
              c2 = d2.anchorNode;
              var e2 = d2.anchorOffset, f2 = d2.focusNode;
              d2 = d2.focusOffset;
              try {
                c2.nodeType, f2.nodeType;
              } catch (F2) {
                c2 = null;
                break a;
              }
              var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
              b:
                for (; ; ) {
                  for (var y2; ; ) {
                    q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                    q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                    3 === q2.nodeType && (g2 += q2.nodeValue.length);
                    if (null === (y2 = q2.firstChild))
                      break;
                    r2 = q2;
                    q2 = y2;
                  }
                  for (; ; ) {
                    if (q2 === a2)
                      break b;
                    r2 === c2 && ++l2 === e2 && (h2 = g2);
                    r2 === f2 && ++m2 === d2 && (k2 = g2);
                    if (null !== (y2 = q2.nextSibling))
                      break;
                    q2 = r2;
                    r2 = q2.parentNode;
                  }
                  q2 = y2;
                }
              c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
            } else
              c2 = null;
          }
        c2 = c2 || { start: 0, end: 0 };
      } else
        c2 = null;
      Df = { focusedElem: a2, selectionRange: c2 };
      dd = false;
      for (V$1 = b2; null !== V$1; )
        if (b2 = V$1, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2)
          a2.return = b2, V$1 = a2;
        else
          for (; null !== V$1; ) {
            b2 = V$1;
            try {
              var n2 = b2.alternate;
              if (0 !== (b2.flags & 1024))
                switch (b2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (null !== n2) {
                      var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                      x2.__reactInternalSnapshotBeforeUpdate = w2;
                    }
                    break;
                  case 3:
                    var u2 = b2.stateNode.containerInfo;
                    1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(p$4(163));
                }
            } catch (F2) {
              W$2(b2, b2.return, F2);
            }
            a2 = b2.sibling;
            if (null !== a2) {
              a2.return = b2.return;
              V$1 = a2;
              break;
            }
            V$1 = b2.return;
          }
      n2 = Oj;
      Oj = false;
      return n2;
    }
    function Qj(a2, b2, c2) {
      var d2 = b2.updateQueue;
      d2 = null !== d2 ? d2.lastEffect : null;
      if (null !== d2) {
        var e2 = d2 = d2.next;
        do {
          if ((e2.tag & a2) === a2) {
            var f2 = e2.destroy;
            e2.destroy = void 0;
            void 0 !== f2 && Nj(b2, c2, f2);
          }
          e2 = e2.next;
        } while (e2 !== d2);
      }
    }
    function Rj(a2, b2) {
      b2 = b2.updateQueue;
      b2 = null !== b2 ? b2.lastEffect : null;
      if (null !== b2) {
        var c2 = b2 = b2.next;
        do {
          if ((c2.tag & a2) === a2) {
            var d2 = c2.create;
            c2.destroy = d2();
          }
          c2 = c2.next;
        } while (c2 !== b2);
      }
    }
    function Sj(a2) {
      var b2 = a2.ref;
      if (null !== b2) {
        var c2 = a2.stateNode;
        switch (a2.tag) {
          case 5:
            a2 = c2;
            break;
          default:
            a2 = c2;
        }
        "function" === typeof b2 ? b2(a2) : b2.current = a2;
      }
    }
    function Tj(a2) {
      var b2 = a2.alternate;
      null !== b2 && (a2.alternate = null, Tj(b2));
      a2.child = null;
      a2.deletions = null;
      a2.sibling = null;
      5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
      a2.stateNode = null;
      a2.return = null;
      a2.dependencies = null;
      a2.memoizedProps = null;
      a2.memoizedState = null;
      a2.pendingProps = null;
      a2.stateNode = null;
      a2.updateQueue = null;
    }
    function Uj(a2) {
      return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
    }
    function Vj(a2) {
      a:
        for (; ; ) {
          for (; null === a2.sibling; ) {
            if (null === a2.return || Uj(a2.return))
              return null;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
            if (a2.flags & 2)
              continue a;
            if (null === a2.child || 4 === a2.tag)
              continue a;
            else
              a2.child.return = a2, a2 = a2.child;
          }
          if (!(a2.flags & 2))
            return a2.stateNode;
        }
    }
    function Wj(a2, b2, c2) {
      var d2 = a2.tag;
      if (5 === d2 || 6 === d2)
        a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
      else if (4 !== d2 && (a2 = a2.child, null !== a2))
        for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
          Wj(a2, b2, c2), a2 = a2.sibling;
    }
    function Xj(a2, b2, c2) {
      var d2 = a2.tag;
      if (5 === d2 || 6 === d2)
        a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
      else if (4 !== d2 && (a2 = a2.child, null !== a2))
        for (Xj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
          Xj(a2, b2, c2), a2 = a2.sibling;
    }
    var X$2 = null, Yj = false;
    function Zj(a2, b2, c2) {
      for (c2 = c2.child; null !== c2; )
        ak(a2, b2, c2), c2 = c2.sibling;
    }
    function ak(a2, b2, c2) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount)
        try {
          lc.onCommitFiberUnmount(kc, c2);
        } catch (h2) {
        }
      switch (c2.tag) {
        case 5:
          U$3 || Mj(c2, b2);
        case 6:
          var d2 = X$2, e2 = Yj;
          X$2 = null;
          Zj(a2, b2, c2);
          X$2 = d2;
          Yj = e2;
          null !== X$2 && (Yj ? (a2 = X$2, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$2.removeChild(c2.stateNode));
          break;
        case 18:
          null !== X$2 && (Yj ? (a2 = X$2, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$2, c2.stateNode));
          break;
        case 4:
          d2 = X$2;
          e2 = Yj;
          X$2 = c2.stateNode.containerInfo;
          Yj = true;
          Zj(a2, b2, c2);
          X$2 = d2;
          Yj = e2;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U$3 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
            e2 = d2 = d2.next;
            do {
              var f2 = e2, g2 = f2.destroy;
              f2 = f2.tag;
              void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
              e2 = e2.next;
            } while (e2 !== d2);
          }
          Zj(a2, b2, c2);
          break;
        case 1:
          if (!U$3 && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
            try {
              d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
            } catch (h2) {
              W$2(c2, b2, h2);
            }
          Zj(a2, b2, c2);
          break;
        case 21:
          Zj(a2, b2, c2);
          break;
        case 22:
          c2.mode & 1 ? (U$3 = (d2 = U$3) || null !== c2.memoizedState, Zj(a2, b2, c2), U$3 = d2) : Zj(a2, b2, c2);
          break;
        default:
          Zj(a2, b2, c2);
      }
    }
    function bk(a2) {
      var b2 = a2.updateQueue;
      if (null !== b2) {
        a2.updateQueue = null;
        var c2 = a2.stateNode;
        null === c2 && (c2 = a2.stateNode = new Lj());
        b2.forEach(function(b3) {
          var d2 = ck.bind(null, a2, b3);
          c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
        });
      }
    }
    function dk(a2, b2) {
      var c2 = b2.deletions;
      if (null !== c2)
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2];
          try {
            var f2 = a2, g2 = b2, h2 = g2;
            a:
              for (; null !== h2; ) {
                switch (h2.tag) {
                  case 5:
                    X$2 = h2.stateNode;
                    Yj = false;
                    break a;
                  case 3:
                    X$2 = h2.stateNode.containerInfo;
                    Yj = true;
                    break a;
                  case 4:
                    X$2 = h2.stateNode.containerInfo;
                    Yj = true;
                    break a;
                }
                h2 = h2.return;
              }
            if (null === X$2)
              throw Error(p$4(160));
            ak(f2, g2, e2);
            X$2 = null;
            Yj = false;
            var k2 = e2.alternate;
            null !== k2 && (k2.return = null);
            e2.return = null;
          } catch (l2) {
            W$2(e2, b2, l2);
          }
        }
      if (b2.subtreeFlags & 12854)
        for (b2 = b2.child; null !== b2; )
          ek(b2, a2), b2 = b2.sibling;
    }
    function ek(a2, b2) {
      var c2 = a2.alternate, d2 = a2.flags;
      switch (a2.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dk(b2, a2);
          fk(a2);
          if (d2 & 4) {
            try {
              Qj(3, a2, a2.return), Rj(3, a2);
            } catch (t2) {
              W$2(a2, a2.return, t2);
            }
            try {
              Qj(5, a2, a2.return);
            } catch (t2) {
              W$2(a2, a2.return, t2);
            }
          }
          break;
        case 1:
          dk(b2, a2);
          fk(a2);
          d2 & 512 && null !== c2 && Mj(c2, c2.return);
          break;
        case 5:
          dk(b2, a2);
          fk(a2);
          d2 & 512 && null !== c2 && Mj(c2, c2.return);
          if (a2.flags & 32) {
            var e2 = a2.stateNode;
            try {
              ob(e2, "");
            } catch (t2) {
              W$2(a2, a2.return, t2);
            }
          }
          if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
            var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
            a2.updateQueue = null;
            if (null !== k2)
              try {
                "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
                vb(h2, g2);
                var l2 = vb(h2, f2);
                for (g2 = 0; g2 < k2.length; g2 += 2) {
                  var m2 = k2[g2], q2 = k2[g2 + 1];
                  "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
                }
                switch (h2) {
                  case "input":
                    bb(e2, f2);
                    break;
                  case "textarea":
                    ib(e2, f2);
                    break;
                  case "select":
                    var r2 = e2._wrapperState.wasMultiple;
                    e2._wrapperState.wasMultiple = !!f2.multiple;
                    var y2 = f2.value;
                    null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e2,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e2[Pf] = f2;
              } catch (t2) {
                W$2(a2, a2.return, t2);
              }
          }
          break;
        case 6:
          dk(b2, a2);
          fk(a2);
          if (d2 & 4) {
            if (null === a2.stateNode)
              throw Error(p$4(162));
            e2 = a2.stateNode;
            f2 = a2.memoizedProps;
            try {
              e2.nodeValue = f2;
            } catch (t2) {
              W$2(a2, a2.return, t2);
            }
          }
          break;
        case 3:
          dk(b2, a2);
          fk(a2);
          if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
            try {
              bd(b2.containerInfo);
            } catch (t2) {
              W$2(a2, a2.return, t2);
            }
          break;
        case 4:
          dk(b2, a2);
          fk(a2);
          break;
        case 13:
          dk(b2, a2);
          fk(a2);
          e2 = a2.child;
          e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
          d2 & 4 && bk(a2);
          break;
        case 22:
          m2 = null !== c2 && null !== c2.memoizedState;
          a2.mode & 1 ? (U$3 = (l2 = U$3) || m2, dk(b2, a2), U$3 = l2) : dk(b2, a2);
          fk(a2);
          if (d2 & 8192) {
            l2 = null !== a2.memoizedState;
            if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1))
              for (V$1 = a2, m2 = a2.child; null !== m2; ) {
                for (q2 = V$1 = m2; null !== V$1; ) {
                  r2 = V$1;
                  y2 = r2.child;
                  switch (r2.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Qj(4, r2, r2.return);
                      break;
                    case 1:
                      Mj(r2, r2.return);
                      var n2 = r2.stateNode;
                      if ("function" === typeof n2.componentWillUnmount) {
                        d2 = r2;
                        c2 = r2.return;
                        try {
                          b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                        } catch (t2) {
                          W$2(d2, c2, t2);
                        }
                      }
                      break;
                    case 5:
                      Mj(r2, r2.return);
                      break;
                    case 22:
                      if (null !== r2.memoizedState) {
                        hk(q2);
                        continue;
                      }
                  }
                  null !== y2 ? (y2.return = r2, V$1 = y2) : hk(q2);
                }
                m2 = m2.sibling;
              }
            a:
              for (m2 = null, q2 = a2; ; ) {
                if (5 === q2.tag) {
                  if (null === m2) {
                    m2 = q2;
                    try {
                      e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                    } catch (t2) {
                      W$2(a2, a2.return, t2);
                    }
                  }
                } else if (6 === q2.tag) {
                  if (null === m2)
                    try {
                      q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                    } catch (t2) {
                      W$2(a2, a2.return, t2);
                    }
                } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
                  q2.child.return = q2;
                  q2 = q2.child;
                  continue;
                }
                if (q2 === a2)
                  break a;
                for (; null === q2.sibling; ) {
                  if (null === q2.return || q2.return === a2)
                    break a;
                  m2 === q2 && (m2 = null);
                  q2 = q2.return;
                }
                m2 === q2 && (m2 = null);
                q2.sibling.return = q2.return;
                q2 = q2.sibling;
              }
          }
          break;
        case 19:
          dk(b2, a2);
          fk(a2);
          d2 & 4 && bk(a2);
          break;
        case 21:
          break;
        default:
          dk(
            b2,
            a2
          ), fk(a2);
      }
    }
    function fk(a2) {
      var b2 = a2.flags;
      if (b2 & 2) {
        try {
          a: {
            for (var c2 = a2.return; null !== c2; ) {
              if (Uj(c2)) {
                var d2 = c2;
                break a;
              }
              c2 = c2.return;
            }
            throw Error(p$4(160));
          }
          switch (d2.tag) {
            case 5:
              var e2 = d2.stateNode;
              d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
              var f2 = Vj(a2);
              Xj(a2, f2, e2);
              break;
            case 3:
            case 4:
              var g2 = d2.stateNode.containerInfo, h2 = Vj(a2);
              Wj(a2, h2, g2);
              break;
            default:
              throw Error(p$4(161));
          }
        } catch (k2) {
          W$2(a2, a2.return, k2);
        }
        a2.flags &= -3;
      }
      b2 & 4096 && (a2.flags &= -4097);
    }
    function ik(a2, b2, c2) {
      V$1 = a2;
      jk(a2);
    }
    function jk(a2, b2, c2) {
      for (var d2 = 0 !== (a2.mode & 1); null !== V$1; ) {
        var e2 = V$1, f2 = e2.child;
        if (22 === e2.tag && d2) {
          var g2 = null !== e2.memoizedState || Kj;
          if (!g2) {
            var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$3;
            h2 = Kj;
            var l2 = U$3;
            Kj = g2;
            if ((U$3 = k2) && !l2)
              for (V$1 = e2; null !== V$1; )
                g2 = V$1, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V$1 = k2) : kk(e2);
            for (; null !== f2; )
              V$1 = f2, jk(f2), f2 = f2.sibling;
            V$1 = e2;
            Kj = h2;
            U$3 = l2;
          }
          lk(a2);
        } else
          0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$1 = f2) : lk(a2);
      }
    }
    function lk(a2) {
      for (; null !== V$1; ) {
        var b2 = V$1;
        if (0 !== (b2.flags & 8772)) {
          var c2 = b2.alternate;
          try {
            if (0 !== (b2.flags & 8772))
              switch (b2.tag) {
                case 0:
                case 11:
                case 15:
                  U$3 || Rj(5, b2);
                  break;
                case 1:
                  var d2 = b2.stateNode;
                  if (b2.flags & 4 && !U$3)
                    if (null === c2)
                      d2.componentDidMount();
                    else {
                      var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                      d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                    }
                  var f2 = b2.updateQueue;
                  null !== f2 && ih(b2, f2, d2);
                  break;
                case 3:
                  var g2 = b2.updateQueue;
                  if (null !== g2) {
                    c2 = null;
                    if (null !== b2.child)
                      switch (b2.child.tag) {
                        case 5:
                          c2 = b2.child.stateNode;
                          break;
                        case 1:
                          c2 = b2.child.stateNode;
                      }
                    ih(b2, g2, c2);
                  }
                  break;
                case 5:
                  var h2 = b2.stateNode;
                  if (null === c2 && b2.flags & 4) {
                    c2 = h2;
                    var k2 = b2.memoizedProps;
                    switch (b2.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k2.autoFocus && c2.focus();
                        break;
                      case "img":
                        k2.src && (c2.src = k2.src);
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
                  if (null === b2.memoizedState) {
                    var l2 = b2.alternate;
                    if (null !== l2) {
                      var m2 = l2.memoizedState;
                      if (null !== m2) {
                        var q2 = m2.dehydrated;
                        null !== q2 && bd(q2);
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
                  throw Error(p$4(163));
              }
            U$3 || b2.flags & 512 && Sj(b2);
          } catch (r2) {
            W$2(b2, b2.return, r2);
          }
        }
        if (b2 === a2) {
          V$1 = null;
          break;
        }
        c2 = b2.sibling;
        if (null !== c2) {
          c2.return = b2.return;
          V$1 = c2;
          break;
        }
        V$1 = b2.return;
      }
    }
    function hk(a2) {
      for (; null !== V$1; ) {
        var b2 = V$1;
        if (b2 === a2) {
          V$1 = null;
          break;
        }
        var c2 = b2.sibling;
        if (null !== c2) {
          c2.return = b2.return;
          V$1 = c2;
          break;
        }
        V$1 = b2.return;
      }
    }
    function kk(a2) {
      for (; null !== V$1; ) {
        var b2 = V$1;
        try {
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              var c2 = b2.return;
              try {
                Rj(4, b2);
              } catch (k2) {
                W$2(b2, c2, k2);
              }
              break;
            case 1:
              var d2 = b2.stateNode;
              if ("function" === typeof d2.componentDidMount) {
                var e2 = b2.return;
                try {
                  d2.componentDidMount();
                } catch (k2) {
                  W$2(b2, e2, k2);
                }
              }
              var f2 = b2.return;
              try {
                Sj(b2);
              } catch (k2) {
                W$2(b2, f2, k2);
              }
              break;
            case 5:
              var g2 = b2.return;
              try {
                Sj(b2);
              } catch (k2) {
                W$2(b2, g2, k2);
              }
          }
        } catch (k2) {
          W$2(b2, b2.return, k2);
        }
        if (b2 === a2) {
          V$1 = null;
          break;
        }
        var h2 = b2.sibling;
        if (null !== h2) {
          h2.return = b2.return;
          V$1 = h2;
          break;
        }
        V$1 = b2.return;
      }
    }
    var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R$1 = null, Y$1 = null, Z$1 = 0, gj = 0, fj = Uf(0), T$2 = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
    function L() {
      return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
    }
    function lh(a2) {
      if (0 === (a2.mode & 1))
        return 1;
      if (0 !== (K & 2) && 0 !== Z$1)
        return Z$1 & -Z$1;
      if (null !== Kg.transition)
        return 0 === Ck && (Ck = yc()), Ck;
      a2 = C$1;
      if (0 !== a2)
        return a2;
      a2 = window.event;
      a2 = void 0 === a2 ? 16 : jd(a2.type);
      return a2;
    }
    function mh(a2, b2, c2, d2) {
      if (50 < zk)
        throw zk = 0, Ak = null, Error(p$4(185));
      Ac(a2, c2, d2);
      if (0 === (K & 2) || a2 !== R$1)
        a2 === R$1 && (0 === (K & 2) && (rk |= c2), 4 === T$2 && Dk(a2, Z$1)), Ek(a2, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B() + 500, fg && jg());
    }
    function Ek(a2, b2) {
      var c2 = a2.callbackNode;
      wc(a2, b2);
      var d2 = uc(a2, a2 === R$1 ? Z$1 : 0);
      if (0 === d2)
        null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
      else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
        null != c2 && bc(c2);
        if (1 === b2)
          0 === a2.tag ? ig(Fk.bind(null, a2)) : hg(Fk.bind(null, a2)), Jf(function() {
            0 === (K & 6) && jg();
          }), c2 = null;
        else {
          switch (Dc(d2)) {
            case 1:
              c2 = fc;
              break;
            case 4:
              c2 = gc;
              break;
            case 16:
              c2 = hc;
              break;
            case 536870912:
              c2 = jc;
              break;
            default:
              c2 = hc;
          }
          c2 = Gk(c2, Hk.bind(null, a2));
        }
        a2.callbackPriority = b2;
        a2.callbackNode = c2;
      }
    }
    function Hk(a2, b2) {
      Bk = -1;
      Ck = 0;
      if (0 !== (K & 6))
        throw Error(p$4(327));
      var c2 = a2.callbackNode;
      if (Ik() && a2.callbackNode !== c2)
        return null;
      var d2 = uc(a2, a2 === R$1 ? Z$1 : 0);
      if (0 === d2)
        return null;
      if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2)
        b2 = Jk(a2, d2);
      else {
        b2 = d2;
        var e2 = K;
        K |= 2;
        var f2 = Kk();
        if (R$1 !== a2 || Z$1 !== b2)
          vk = null, Hj = B() + 500, Lk(a2, b2);
        do
          try {
            Mk();
            break;
          } catch (h2) {
            Nk(a2, h2);
          }
        while (1);
        Qg();
        nk.current = f2;
        K = e2;
        null !== Y$1 ? b2 = 0 : (R$1 = null, Z$1 = 0, b2 = T$2);
      }
      if (0 !== b2) {
        2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Ok(a2, e2)));
        if (1 === b2)
          throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B()), c2;
        if (6 === b2)
          Dk(a2, d2);
        else {
          e2 = a2.current.alternate;
          if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Ok(a2, f2))), 1 === b2))
            throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B()), c2;
          a2.finishedWork = e2;
          a2.finishedLanes = d2;
          switch (b2) {
            case 0:
            case 1:
              throw Error(p$4(345));
            case 2:
              Qk(a2, uk, vk);
              break;
            case 3:
              Dk(a2, d2);
              if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B(), 10 < b2)) {
                if (0 !== uc(a2, 0))
                  break;
                e2 = a2.suspendedLanes;
                if ((e2 & d2) !== d2) {
                  L();
                  a2.pingedLanes |= a2.suspendedLanes & e2;
                  break;
                }
                a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), b2);
                break;
              }
              Qk(a2, uk, vk);
              break;
            case 4:
              Dk(a2, d2);
              if ((d2 & 4194240) === d2)
                break;
              b2 = a2.eventTimes;
              for (e2 = -1; 0 < d2; ) {
                var g2 = 31 - oc(d2);
                f2 = 1 << g2;
                g2 = b2[g2];
                g2 > e2 && (e2 = g2);
                d2 &= ~f2;
              }
              d2 = e2;
              d2 = B() - d2;
              d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
              if (10 < d2) {
                a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), d2);
                break;
              }
              Qk(a2, uk, vk);
              break;
            case 5:
              Qk(a2, uk, vk);
              break;
            default:
              throw Error(p$4(329));
          }
        }
      }
      Ek(a2, B());
      return a2.callbackNode === c2 ? Hk.bind(null, a2) : null;
    }
    function Ok(a2, b2) {
      var c2 = tk;
      a2.current.memoizedState.isDehydrated && (Lk(a2, b2).flags |= 256);
      a2 = Jk(a2, b2);
      2 !== a2 && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
      return a2;
    }
    function Gj(a2) {
      null === uk ? uk = a2 : uk.push.apply(uk, a2);
    }
    function Pk(a2) {
      for (var b2 = a2; ; ) {
        if (b2.flags & 16384) {
          var c2 = b2.updateQueue;
          if (null !== c2 && (c2 = c2.stores, null !== c2))
            for (var d2 = 0; d2 < c2.length; d2++) {
              var e2 = c2[d2], f2 = e2.getSnapshot;
              e2 = e2.value;
              try {
                if (!He$1(f2(), e2))
                  return false;
              } catch (g2) {
                return false;
              }
            }
        }
        c2 = b2.child;
        if (b2.subtreeFlags & 16384 && null !== c2)
          c2.return = b2, b2 = c2;
        else {
          if (b2 === a2)
            break;
          for (; null === b2.sibling; ) {
            if (null === b2.return || b2.return === a2)
              return true;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
      }
      return true;
    }
    function Dk(a2, b2) {
      b2 &= ~sk;
      b2 &= ~rk;
      a2.suspendedLanes |= b2;
      a2.pingedLanes &= ~b2;
      for (a2 = a2.expirationTimes; 0 < b2; ) {
        var c2 = 31 - oc(b2), d2 = 1 << c2;
        a2[c2] = -1;
        b2 &= ~d2;
      }
    }
    function Fk(a2) {
      if (0 !== (K & 6))
        throw Error(p$4(327));
      Ik();
      var b2 = uc(a2, 0);
      if (0 === (b2 & 1))
        return Ek(a2, B()), null;
      var c2 = Jk(a2, b2);
      if (0 !== a2.tag && 2 === c2) {
        var d2 = xc(a2);
        0 !== d2 && (b2 = d2, c2 = Ok(a2, d2));
      }
      if (1 === c2)
        throw c2 = qk, Lk(a2, 0), Dk(a2, b2), Ek(a2, B()), c2;
      if (6 === c2)
        throw Error(p$4(345));
      a2.finishedWork = a2.current.alternate;
      a2.finishedLanes = b2;
      Qk(a2, uk, vk);
      Ek(a2, B());
      return null;
    }
    function Rk(a2, b2) {
      var c2 = K;
      K |= 1;
      try {
        return a2(b2);
      } finally {
        K = c2, 0 === K && (Hj = B() + 500, fg && jg());
      }
    }
    function Sk(a2) {
      null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
      var b2 = K;
      K |= 1;
      var c2 = pk.transition, d2 = C$1;
      try {
        if (pk.transition = null, C$1 = 1, a2)
          return a2();
      } finally {
        C$1 = d2, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
      }
    }
    function Ij() {
      gj = fj.current;
      E$1(fj);
    }
    function Lk(a2, b2) {
      a2.finishedWork = null;
      a2.finishedLanes = 0;
      var c2 = a2.timeoutHandle;
      -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
      if (null !== Y$1)
        for (c2 = Y$1.return; null !== c2; ) {
          var d2 = c2;
          wg(d2);
          switch (d2.tag) {
            case 1:
              d2 = d2.type.childContextTypes;
              null !== d2 && void 0 !== d2 && $f();
              break;
            case 3:
              Jh();
              E$1(Wf);
              E$1(H$1);
              Oh();
              break;
            case 5:
              Lh(d2);
              break;
            case 4:
              Jh();
              break;
            case 13:
              E$1(M$4);
              break;
            case 19:
              E$1(M$4);
              break;
            case 10:
              Rg(d2.type._context);
              break;
            case 22:
            case 23:
              Ij();
          }
          c2 = c2.return;
        }
      R$1 = a2;
      Y$1 = a2 = wh(a2.current, null);
      Z$1 = gj = b2;
      T$2 = 0;
      qk = null;
      sk = rk = hh = 0;
      uk = tk = null;
      if (null !== Wg) {
        for (b2 = 0; b2 < Wg.length; b2++)
          if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
            c2.interleaved = null;
            var e2 = d2.next, f2 = c2.pending;
            if (null !== f2) {
              var g2 = f2.next;
              f2.next = e2;
              d2.next = g2;
            }
            c2.pending = d2;
          }
        Wg = null;
      }
      return a2;
    }
    function Nk(a2, b2) {
      do {
        var c2 = Y$1;
        try {
          Qg();
          Ph.current = ai;
          if (Sh) {
            for (var d2 = N$2.memoizedState; null !== d2; ) {
              var e2 = d2.queue;
              null !== e2 && (e2.pending = null);
              d2 = d2.next;
            }
            Sh = false;
          }
          Rh = 0;
          P$1 = O$3 = N$2 = null;
          Th = false;
          Uh = 0;
          ok.current = null;
          if (null === c2 || null === c2.return) {
            T$2 = 1;
            qk = b2;
            Y$1 = null;
            break;
          }
          a: {
            var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
            b2 = Z$1;
            h2.flags |= 32768;
            if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
              var l2 = k2, m2 = h2, q2 = m2.tag;
              if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                var r2 = m2.alternate;
                r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
              }
              var y2 = Vi(g2);
              if (null !== y2) {
                y2.flags &= -257;
                Wi(y2, g2, h2, f2, b2);
                y2.mode & 1 && Ti(f2, l2, b2);
                b2 = y2;
                k2 = l2;
                var n2 = b2.updateQueue;
                if (null === n2) {
                  var t2 = /* @__PURE__ */ new Set();
                  t2.add(k2);
                  b2.updateQueue = t2;
                } else
                  n2.add(k2);
                break a;
              } else {
                if (0 === (b2 & 1)) {
                  Ti(f2, l2, b2);
                  uj();
                  break a;
                }
                k2 = Error(p$4(426));
              }
            } else if (I$3 && h2.mode & 1) {
              var J2 = Vi(g2);
              if (null !== J2) {
                0 === (J2.flags & 65536) && (J2.flags |= 256);
                Wi(J2, g2, h2, f2, b2);
                Jg(Ki(k2, h2));
                break a;
              }
            }
            f2 = k2 = Ki(k2, h2);
            4 !== T$2 && (T$2 = 2);
            null === tk ? tk = [f2] : tk.push(f2);
            f2 = g2;
            do {
              switch (f2.tag) {
                case 3:
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var x2 = Oi(f2, k2, b2);
                  fh(f2, x2);
                  break a;
                case 1:
                  h2 = k2;
                  var w2 = f2.type, u2 = f2.stateNode;
                  if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                    f2.flags |= 65536;
                    b2 &= -b2;
                    f2.lanes |= b2;
                    var F2 = Ri(f2, h2, b2);
                    fh(f2, F2);
                    break a;
                  }
              }
              f2 = f2.return;
            } while (null !== f2);
          }
          Tk(c2);
        } catch (na) {
          b2 = na;
          Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
          continue;
        }
        break;
      } while (1);
    }
    function Kk() {
      var a2 = nk.current;
      nk.current = ai;
      return null === a2 ? ai : a2;
    }
    function uj() {
      if (0 === T$2 || 3 === T$2 || 2 === T$2)
        T$2 = 4;
      null === R$1 || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R$1, Z$1);
    }
    function Jk(a2, b2) {
      var c2 = K;
      K |= 2;
      var d2 = Kk();
      if (R$1 !== a2 || Z$1 !== b2)
        vk = null, Lk(a2, b2);
      do
        try {
          Uk();
          break;
        } catch (e2) {
          Nk(a2, e2);
        }
      while (1);
      Qg();
      K = c2;
      nk.current = d2;
      if (null !== Y$1)
        throw Error(p$4(261));
      R$1 = null;
      Z$1 = 0;
      return T$2;
    }
    function Uk() {
      for (; null !== Y$1; )
        Vk(Y$1);
    }
    function Mk() {
      for (; null !== Y$1 && !cc(); )
        Vk(Y$1);
    }
    function Vk(a2) {
      var b2 = Wk(a2.alternate, a2, gj);
      a2.memoizedProps = a2.pendingProps;
      null === b2 ? Tk(a2) : Y$1 = b2;
      ok.current = null;
    }
    function Tk(a2) {
      var b2 = a2;
      do {
        var c2 = b2.alternate;
        a2 = b2.return;
        if (0 === (b2.flags & 32768)) {
          if (c2 = Fj(c2, b2, gj), null !== c2) {
            Y$1 = c2;
            return;
          }
        } else {
          c2 = Jj(c2, b2);
          if (null !== c2) {
            c2.flags &= 32767;
            Y$1 = c2;
            return;
          }
          if (null !== a2)
            a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
          else {
            T$2 = 6;
            Y$1 = null;
            return;
          }
        }
        b2 = b2.sibling;
        if (null !== b2) {
          Y$1 = b2;
          return;
        }
        Y$1 = b2 = a2;
      } while (null !== b2);
      0 === T$2 && (T$2 = 5);
    }
    function Qk(a2, b2, c2) {
      var d2 = C$1, e2 = pk.transition;
      try {
        pk.transition = null, C$1 = 1, Xk(a2, b2, c2, d2);
      } finally {
        pk.transition = e2, C$1 = d2;
      }
      return null;
    }
    function Xk(a2, b2, c2, d2) {
      do
        Ik();
      while (null !== xk);
      if (0 !== (K & 6))
        throw Error(p$4(327));
      c2 = a2.finishedWork;
      var e2 = a2.finishedLanes;
      if (null === c2)
        return null;
      a2.finishedWork = null;
      a2.finishedLanes = 0;
      if (c2 === a2.current)
        throw Error(p$4(177));
      a2.callbackNode = null;
      a2.callbackPriority = 0;
      var f2 = c2.lanes | c2.childLanes;
      Bc(a2, f2);
      a2 === R$1 && (Y$1 = R$1 = null, Z$1 = 0);
      0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
        Ik();
        return null;
      }));
      f2 = 0 !== (c2.flags & 15990);
      if (0 !== (c2.subtreeFlags & 15990) || f2) {
        f2 = pk.transition;
        pk.transition = null;
        var g2 = C$1;
        C$1 = 1;
        var h2 = K;
        K |= 4;
        ok.current = null;
        Pj(a2, c2);
        ek(c2, a2);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a2.current = c2;
        ik(c2);
        dc();
        K = h2;
        C$1 = g2;
        pk.transition = f2;
      } else
        a2.current = c2;
      wk && (wk = false, xk = a2, yk = e2);
      f2 = a2.pendingLanes;
      0 === f2 && (Si = null);
      mc(c2.stateNode);
      Ek(a2, B());
      if (null !== b2)
        for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
          e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
      if (Pi)
        throw Pi = false, a2 = Qi, Qi = null, a2;
      0 !== (yk & 1) && 0 !== a2.tag && Ik();
      f2 = a2.pendingLanes;
      0 !== (f2 & 1) ? a2 === Ak ? zk++ : (zk = 0, Ak = a2) : zk = 0;
      jg();
      return null;
    }
    function Ik() {
      if (null !== xk) {
        var a2 = Dc(yk), b2 = pk.transition, c2 = C$1;
        try {
          pk.transition = null;
          C$1 = 16 > a2 ? 16 : a2;
          if (null === xk)
            var d2 = false;
          else {
            a2 = xk;
            xk = null;
            yk = 0;
            if (0 !== (K & 6))
              throw Error(p$4(331));
            var e2 = K;
            K |= 4;
            for (V$1 = a2.current; null !== V$1; ) {
              var f2 = V$1, g2 = f2.child;
              if (0 !== (V$1.flags & 16)) {
                var h2 = f2.deletions;
                if (null !== h2) {
                  for (var k2 = 0; k2 < h2.length; k2++) {
                    var l2 = h2[k2];
                    for (V$1 = l2; null !== V$1; ) {
                      var m2 = V$1;
                      switch (m2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qj(8, m2, f2);
                      }
                      var q2 = m2.child;
                      if (null !== q2)
                        q2.return = m2, V$1 = q2;
                      else
                        for (; null !== V$1; ) {
                          m2 = V$1;
                          var r2 = m2.sibling, y2 = m2.return;
                          Tj(m2);
                          if (m2 === l2) {
                            V$1 = null;
                            break;
                          }
                          if (null !== r2) {
                            r2.return = y2;
                            V$1 = r2;
                            break;
                          }
                          V$1 = y2;
                        }
                    }
                  }
                  var n2 = f2.alternate;
                  if (null !== n2) {
                    var t2 = n2.child;
                    if (null !== t2) {
                      n2.child = null;
                      do {
                        var J2 = t2.sibling;
                        t2.sibling = null;
                        t2 = J2;
                      } while (null !== t2);
                    }
                  }
                  V$1 = f2;
                }
              }
              if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
                g2.return = f2, V$1 = g2;
              else
                b:
                  for (; null !== V$1; ) {
                    f2 = V$1;
                    if (0 !== (f2.flags & 2048))
                      switch (f2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qj(9, f2, f2.return);
                      }
                    var x2 = f2.sibling;
                    if (null !== x2) {
                      x2.return = f2.return;
                      V$1 = x2;
                      break b;
                    }
                    V$1 = f2.return;
                  }
            }
            var w2 = a2.current;
            for (V$1 = w2; null !== V$1; ) {
              g2 = V$1;
              var u2 = g2.child;
              if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
                u2.return = g2, V$1 = u2;
              else
                b:
                  for (g2 = w2; null !== V$1; ) {
                    h2 = V$1;
                    if (0 !== (h2.flags & 2048))
                      try {
                        switch (h2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Rj(9, h2);
                        }
                      } catch (na) {
                        W$2(h2, h2.return, na);
                      }
                    if (h2 === g2) {
                      V$1 = null;
                      break b;
                    }
                    var F2 = h2.sibling;
                    if (null !== F2) {
                      F2.return = h2.return;
                      V$1 = F2;
                      break b;
                    }
                    V$1 = h2.return;
                  }
            }
            K = e2;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot)
              try {
                lc.onPostCommitFiberRoot(kc, a2);
              } catch (na) {
              }
            d2 = true;
          }
          return d2;
        } finally {
          C$1 = c2, pk.transition = b2;
        }
      }
      return false;
    }
    function Yk(a2, b2, c2) {
      b2 = Ki(c2, b2);
      b2 = Oi(a2, b2, 1);
      a2 = dh(a2, b2, 1);
      b2 = L();
      null !== a2 && (Ac(a2, 1, b2), Ek(a2, b2));
    }
    function W$2(a2, b2, c2) {
      if (3 === a2.tag)
        Yk(a2, a2, c2);
      else
        for (; null !== b2; ) {
          if (3 === b2.tag) {
            Yk(b2, a2, c2);
            break;
          } else if (1 === b2.tag) {
            var d2 = b2.stateNode;
            if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
              a2 = Ki(c2, a2);
              a2 = Ri(b2, a2, 1);
              b2 = dh(b2, a2, 1);
              a2 = L();
              null !== b2 && (Ac(b2, 1, a2), Ek(b2, a2));
              break;
            }
          }
          b2 = b2.return;
        }
    }
    function Ui(a2, b2, c2) {
      var d2 = a2.pingCache;
      null !== d2 && d2.delete(b2);
      b2 = L();
      a2.pingedLanes |= a2.suspendedLanes & c2;
      R$1 === a2 && (Z$1 & c2) === c2 && (4 === T$2 || 3 === T$2 && (Z$1 & 130023424) === Z$1 && 500 > B() - gk ? Lk(a2, 0) : sk |= c2);
      Ek(a2, b2);
    }
    function Zk(a2, b2) {
      0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c2 = L();
      a2 = Zg(a2, b2);
      null !== a2 && (Ac(a2, b2, c2), Ek(a2, c2));
    }
    function vj(a2) {
      var b2 = a2.memoizedState, c2 = 0;
      null !== b2 && (c2 = b2.retryLane);
      Zk(a2, c2);
    }
    function ck(a2, b2) {
      var c2 = 0;
      switch (a2.tag) {
        case 13:
          var d2 = a2.stateNode;
          var e2 = a2.memoizedState;
          null !== e2 && (c2 = e2.retryLane);
          break;
        case 19:
          d2 = a2.stateNode;
          break;
        default:
          throw Error(p$4(314));
      }
      null !== d2 && d2.delete(b2);
      Zk(a2, c2);
    }
    var Wk;
    Wk = function(a2, b2, c2) {
      if (null !== a2)
        if (a2.memoizedProps !== b2.pendingProps || Wf.current)
          Ug = true;
        else {
          if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128))
            return Ug = false, zj(a2, b2, c2);
          Ug = 0 !== (a2.flags & 131072) ? true : false;
        }
      else
        Ug = false, I$3 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
      b2.lanes = 0;
      switch (b2.tag) {
        case 2:
          var d2 = b2.type;
          jj(a2, b2);
          a2 = b2.pendingProps;
          var e2 = Yf(b2, H$1.current);
          Tg(b2, c2);
          e2 = Xh(null, b2, d2, a2, e2, c2);
          var f2 = bi();
          b2.flags |= 1;
          "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a2, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$3 && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
          return b2;
        case 16:
          d2 = b2.elementType;
          a: {
            jj(a2, b2);
            a2 = b2.pendingProps;
            e2 = d2._init;
            d2 = e2(d2._payload);
            b2.type = d2;
            e2 = b2.tag = $k(d2);
            a2 = Lg(d2, a2);
            switch (e2) {
              case 0:
                b2 = dj(null, b2, d2, a2, c2);
                break a;
              case 1:
                b2 = ij(null, b2, d2, a2, c2);
                break a;
              case 11:
                b2 = Zi(null, b2, d2, a2, c2);
                break a;
              case 14:
                b2 = aj(null, b2, d2, Lg(d2.type, a2), c2);
                break a;
            }
            throw Error(p$4(
              306,
              d2,
              ""
            ));
          }
          return b2;
        case 0:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a2, b2, d2, e2, c2);
        case 1:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a2, b2, d2, e2, c2);
        case 3:
          a: {
            lj(b2);
            if (null === a2)
              throw Error(p$4(387));
            d2 = b2.pendingProps;
            f2 = b2.memoizedState;
            e2 = f2.element;
            bh(a2, b2);
            gh(b2, d2, null, c2);
            var g2 = b2.memoizedState;
            d2 = g2.element;
            if (f2.isDehydrated)
              if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
                e2 = Ki(Error(p$4(423)), b2);
                b2 = mj(a2, b2, d2, c2, e2);
                break a;
              } else if (d2 !== e2) {
                e2 = Ki(Error(p$4(424)), b2);
                b2 = mj(a2, b2, d2, c2, e2);
                break a;
              } else
                for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$3 = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
                  c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
            else {
              Ig();
              if (d2 === e2) {
                b2 = $i(a2, b2, c2);
                break a;
              }
              Yi(a2, b2, d2, c2);
            }
            b2 = b2.child;
          }
          return b2;
        case 5:
          return Kh(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a2, b2), Yi(a2, b2, g2, c2), b2.child;
        case 6:
          return null === a2 && Eg(b2), null;
        case 13:
          return pj(a2, b2, c2);
        case 4:
          return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Bh(b2, null, d2, c2) : Yi(a2, b2, d2, c2), b2.child;
        case 11:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a2, b2, d2, e2, c2);
        case 7:
          return Yi(a2, b2, b2.pendingProps, c2), b2.child;
        case 8:
          return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
        case 12:
          return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
        case 10:
          a: {
            d2 = b2.type._context;
            e2 = b2.pendingProps;
            f2 = b2.memoizedProps;
            g2 = e2.value;
            G$1(Mg, d2._currentValue);
            d2._currentValue = g2;
            if (null !== f2)
              if (He$1(f2.value, g2)) {
                if (f2.children === e2.children && !Wf.current) {
                  b2 = $i(a2, b2, c2);
                  break a;
                }
              } else
                for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
                  var h2 = f2.dependencies;
                  if (null !== h2) {
                    g2 = f2.child;
                    for (var k2 = h2.firstContext; null !== k2; ) {
                      if (k2.context === d2) {
                        if (1 === f2.tag) {
                          k2 = ch(-1, c2 & -c2);
                          k2.tag = 2;
                          var l2 = f2.updateQueue;
                          if (null !== l2) {
                            l2 = l2.shared;
                            var m2 = l2.pending;
                            null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                            l2.pending = k2;
                          }
                        }
                        f2.lanes |= c2;
                        k2 = f2.alternate;
                        null !== k2 && (k2.lanes |= c2);
                        Sg(
                          f2.return,
                          c2,
                          b2
                        );
                        h2.lanes |= c2;
                        break;
                      }
                      k2 = k2.next;
                    }
                  } else if (10 === f2.tag)
                    g2 = f2.type === b2.type ? null : f2.child;
                  else if (18 === f2.tag) {
                    g2 = f2.return;
                    if (null === g2)
                      throw Error(p$4(341));
                    g2.lanes |= c2;
                    h2 = g2.alternate;
                    null !== h2 && (h2.lanes |= c2);
                    Sg(g2, c2, b2);
                    g2 = f2.sibling;
                  } else
                    g2 = f2.child;
                  if (null !== g2)
                    g2.return = f2;
                  else
                    for (g2 = f2; null !== g2; ) {
                      if (g2 === b2) {
                        g2 = null;
                        break;
                      }
                      f2 = g2.sibling;
                      if (null !== f2) {
                        f2.return = g2.return;
                        g2 = f2;
                        break;
                      }
                      g2 = g2.return;
                    }
                  f2 = g2;
                }
            Yi(a2, b2, e2.children, c2);
            b2 = b2.child;
          }
          return b2;
        case 9:
          return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a2, b2, d2, c2), b2.child;
        case 14:
          return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a2, b2, d2, e2, c2);
        case 15:
          return cj(a2, b2, b2.type, b2.pendingProps, c2);
        case 17:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a2, c2);
        case 19:
          return yj(a2, b2, c2);
        case 22:
          return ej(a2, b2, c2);
      }
      throw Error(p$4(156, b2.tag));
    };
    function Gk(a2, b2) {
      return ac(a2, b2);
    }
    function al(a2, b2, c2, d2) {
      this.tag = a2;
      this.key = c2;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b2;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d2;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a2, b2, c2, d2) {
      return new al(a2, b2, c2, d2);
    }
    function bj(a2) {
      a2 = a2.prototype;
      return !(!a2 || !a2.isReactComponent);
    }
    function $k(a2) {
      if ("function" === typeof a2)
        return bj(a2) ? 1 : 0;
      if (void 0 !== a2 && null !== a2) {
        a2 = a2.$$typeof;
        if (a2 === Da)
          return 11;
        if (a2 === Ga)
          return 14;
      }
      return 2;
    }
    function wh(a2, b2) {
      var c2 = a2.alternate;
      null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
      c2.flags = a2.flags & 14680064;
      c2.childLanes = a2.childLanes;
      c2.lanes = a2.lanes;
      c2.child = a2.child;
      c2.memoizedProps = a2.memoizedProps;
      c2.memoizedState = a2.memoizedState;
      c2.updateQueue = a2.updateQueue;
      b2 = a2.dependencies;
      c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
      c2.sibling = a2.sibling;
      c2.index = a2.index;
      c2.ref = a2.ref;
      return c2;
    }
    function yh(a2, b2, c2, d2, e2, f2) {
      var g2 = 2;
      d2 = a2;
      if ("function" === typeof a2)
        bj(a2) && (g2 = 1);
      else if ("string" === typeof a2)
        g2 = 5;
      else
        a:
          switch (a2) {
            case ya:
              return Ah(c2.children, e2, f2, b2);
            case za:
              g2 = 8;
              e2 |= 8;
              break;
            case Aa:
              return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
            case Ea:
              return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
            case Fa:
              return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
            case Ia:
              return qj(c2, e2, f2, b2);
            default:
              if ("object" === typeof a2 && null !== a2)
                switch (a2.$$typeof) {
                  case Ba:
                    g2 = 10;
                    break a;
                  case Ca:
                    g2 = 9;
                    break a;
                  case Da:
                    g2 = 11;
                    break a;
                  case Ga:
                    g2 = 14;
                    break a;
                  case Ha:
                    g2 = 16;
                    d2 = null;
                    break a;
                }
              throw Error(p$4(130, null == a2 ? a2 : typeof a2, ""));
          }
      b2 = Bg(g2, c2, b2, e2);
      b2.elementType = a2;
      b2.type = d2;
      b2.lanes = f2;
      return b2;
    }
    function Ah(a2, b2, c2, d2) {
      a2 = Bg(7, a2, d2, b2);
      a2.lanes = c2;
      return a2;
    }
    function qj(a2, b2, c2, d2) {
      a2 = Bg(22, a2, d2, b2);
      a2.elementType = Ia;
      a2.lanes = c2;
      a2.stateNode = { isHidden: false };
      return a2;
    }
    function xh(a2, b2, c2) {
      a2 = Bg(6, a2, null, b2);
      a2.lanes = c2;
      return a2;
    }
    function zh(a2, b2, c2) {
      b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
      b2.lanes = c2;
      b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
      return b2;
    }
    function bl(a2, b2, c2, d2, e2) {
      this.tag = b2;
      this.containerInfo = a2;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d2;
      this.onRecoverableError = e2;
      this.mutableSourceEagerHydrationData = null;
    }
    function cl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
      a2 = new bl(a2, b2, c2, h2, k2);
      1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
      f2 = Bg(3, null, null, b2);
      a2.current = f2;
      f2.stateNode = a2;
      f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      ah(f2);
      return a2;
    }
    function dl(a2, b2, c2) {
      var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
    }
    function el(a2) {
      if (!a2)
        return Vf;
      a2 = a2._reactInternals;
      a: {
        if (Vb(a2) !== a2 || 1 !== a2.tag)
          throw Error(p$4(170));
        var b2 = a2;
        do {
          switch (b2.tag) {
            case 3:
              b2 = b2.stateNode.context;
              break a;
            case 1:
              if (Zf(b2.type)) {
                b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b2 = b2.return;
        } while (null !== b2);
        throw Error(p$4(171));
      }
      if (1 === a2.tag) {
        var c2 = a2.type;
        if (Zf(c2))
          return bg(a2, c2, b2);
      }
      return b2;
    }
    function fl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
      a2 = cl(c2, d2, true, a2, e2, f2, g2, h2, k2);
      a2.context = el(null);
      c2 = a2.current;
      d2 = L();
      e2 = lh(c2);
      f2 = ch(d2, e2);
      f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
      dh(c2, f2, e2);
      a2.current.lanes = e2;
      Ac(a2, e2, d2);
      Ek(a2, d2);
      return a2;
    }
    function gl(a2, b2, c2, d2) {
      var e2 = b2.current, f2 = L(), g2 = lh(e2);
      c2 = el(c2);
      null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
      b2 = ch(f2, g2);
      b2.payload = { element: a2 };
      d2 = void 0 === d2 ? null : d2;
      null !== d2 && (b2.callback = d2);
      a2 = dh(e2, b2, g2);
      null !== a2 && (mh(a2, e2, g2, f2), eh(a2, e2, g2));
      return g2;
    }
    function hl(a2) {
      a2 = a2.current;
      if (!a2.child)
        return null;
      switch (a2.child.tag) {
        case 5:
          return a2.child.stateNode;
        default:
          return a2.child.stateNode;
      }
    }
    function il(a2, b2) {
      a2 = a2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        var c2 = a2.retryLane;
        a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
      }
    }
    function jl(a2, b2) {
      il(a2, b2);
      (a2 = a2.alternate) && il(a2, b2);
    }
    function kl() {
      return null;
    }
    var ll = "function" === typeof reportError ? reportError : function(a2) {
      console.error(a2);
    };
    function ml(a2) {
      this._internalRoot = a2;
    }
    nl.prototype.render = ml.prototype.render = function(a2) {
      var b2 = this._internalRoot;
      if (null === b2)
        throw Error(p$4(409));
      gl(a2, b2, null, null);
    };
    nl.prototype.unmount = ml.prototype.unmount = function() {
      var a2 = this._internalRoot;
      if (null !== a2) {
        this._internalRoot = null;
        var b2 = a2.containerInfo;
        Sk(function() {
          gl(null, a2, null, null);
        });
        b2[uf] = null;
      }
    };
    function nl(a2) {
      this._internalRoot = a2;
    }
    nl.prototype.unstable_scheduleHydration = function(a2) {
      if (a2) {
        var b2 = Hc();
        a2 = { blockedOn: null, target: a2, priority: b2 };
        for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
          ;
        Qc.splice(c2, 0, a2);
        0 === c2 && Vc(a2);
      }
    };
    function ol(a2) {
      return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
    }
    function pl(a2) {
      return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
    }
    function ql() {
    }
    function rl(a2, b2, c2, d2, e2) {
      if (e2) {
        if ("function" === typeof d2) {
          var f2 = d2;
          d2 = function() {
            var a3 = hl(g2);
            f2.call(a3);
          };
        }
        var g2 = fl(b2, d2, a2, 0, null, false, false, "", ql);
        a2._reactRootContainer = g2;
        a2[uf] = g2.current;
        sf(8 === a2.nodeType ? a2.parentNode : a2);
        Sk();
        return g2;
      }
      for (; e2 = a2.lastChild; )
        a2.removeChild(e2);
      if ("function" === typeof d2) {
        var h2 = d2;
        d2 = function() {
          var a3 = hl(k2);
          h2.call(a3);
        };
      }
      var k2 = cl(a2, 0, false, null, null, false, false, "", ql);
      a2._reactRootContainer = k2;
      a2[uf] = k2.current;
      sf(8 === a2.nodeType ? a2.parentNode : a2);
      Sk(function() {
        gl(b2, k2, c2, d2);
      });
      return k2;
    }
    function sl(a2, b2, c2, d2, e2) {
      var f2 = c2._reactRootContainer;
      if (f2) {
        var g2 = f2;
        if ("function" === typeof e2) {
          var h2 = e2;
          e2 = function() {
            var a3 = hl(g2);
            h2.call(a3);
          };
        }
        gl(b2, g2, a2, e2);
      } else
        g2 = rl(c2, b2, a2, e2, d2);
      return hl(g2);
    }
    Ec = function(a2) {
      switch (a2.tag) {
        case 3:
          var b2 = a2.stateNode;
          if (b2.current.memoizedState.isDehydrated) {
            var c2 = tc(b2.pendingLanes);
            0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
          }
          break;
        case 13:
          Sk(function() {
            var b3 = Zg(a2, 1);
            if (null !== b3) {
              var c3 = L();
              mh(b3, a2, 1, c3);
            }
          }), jl(a2, 1);
      }
    };
    Fc = function(a2) {
      if (13 === a2.tag) {
        var b2 = Zg(a2, 134217728);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a2, 134217728, c2);
        }
        jl(a2, 134217728);
      }
    };
    Gc = function(a2) {
      if (13 === a2.tag) {
        var b2 = lh(a2), c2 = Zg(a2, b2);
        if (null !== c2) {
          var d2 = L();
          mh(c2, a2, b2, d2);
        }
        jl(a2, b2);
      }
    };
    Hc = function() {
      return C$1;
    };
    Ic = function(a2, b2) {
      var c2 = C$1;
      try {
        return C$1 = a2, b2();
      } finally {
        C$1 = c2;
      }
    };
    yb = function(a2, b2, c2) {
      switch (b2) {
        case "input":
          bb(a2, c2);
          b2 = c2.name;
          if ("radio" === c2.type && null != b2) {
            for (c2 = a2; c2.parentNode; )
              c2 = c2.parentNode;
            c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
            for (b2 = 0; b2 < c2.length; b2++) {
              var d2 = c2[b2];
              if (d2 !== a2 && d2.form === a2.form) {
                var e2 = Db(d2);
                if (!e2)
                  throw Error(p$4(90));
                Wa(d2);
                bb(d2, e2);
              }
            }
          }
          break;
        case "textarea":
          ib(a2, c2);
          break;
        case "select":
          b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
      }
    };
    Gb = Rk;
    Hb = Sk;
    var tl = { usingClientEntryPoint: false, Events: [Cb, ue$1, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
    var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
      a2 = Zb(a2);
      return null === a2 ? null : a2.stateNode;
    }, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!wl.isDisabled && wl.supportsFiber)
        try {
          kc = wl.inject(vl), lc = wl;
        } catch (a2) {
        }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
    reactDom_production_min.createPortal = function(a2, b2) {
      var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!ol(b2))
        throw Error(p$4(200));
      return dl(a2, b2, null, c2);
    };
    reactDom_production_min.createRoot = function(a2, b2) {
      if (!ol(a2))
        throw Error(p$4(299));
      var c2 = false, d2 = "", e2 = ll;
      null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
      b2 = cl(a2, 1, false, null, null, c2, false, d2, e2);
      a2[uf] = b2.current;
      sf(8 === a2.nodeType ? a2.parentNode : a2);
      return new ml(b2);
    };
    reactDom_production_min.findDOMNode = function(a2) {
      if (null == a2)
        return null;
      if (1 === a2.nodeType)
        return a2;
      var b2 = a2._reactInternals;
      if (void 0 === b2) {
        if ("function" === typeof a2.render)
          throw Error(p$4(188));
        a2 = Object.keys(a2).join(",");
        throw Error(p$4(268, a2));
      }
      a2 = Zb(b2);
      a2 = null === a2 ? null : a2.stateNode;
      return a2;
    };
    reactDom_production_min.flushSync = function(a2) {
      return Sk(a2);
    };
    reactDom_production_min.hydrate = function(a2, b2, c2) {
      if (!pl(b2))
        throw Error(p$4(200));
      return sl(null, a2, b2, true, c2);
    };
    reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
      if (!ol(a2))
        throw Error(p$4(405));
      var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
      null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
      b2 = fl(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
      a2[uf] = b2.current;
      sf(a2);
      if (d2)
        for (a2 = 0; a2 < d2.length; a2++)
          c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
            c2,
            e2
          );
      return new nl(b2);
    };
    reactDom_production_min.render = function(a2, b2, c2) {
      if (!pl(b2))
        throw Error(p$4(200));
      return sl(null, a2, b2, false, c2);
    };
    reactDom_production_min.unmountComponentAtNode = function(a2) {
      if (!pl(a2))
        throw Error(p$4(40));
      return a2._reactRootContainer ? (Sk(function() {
        sl(null, null, a2, false, function() {
          a2._reactRootContainer = null;
          a2[uf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Rk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
      if (!pl(c2))
        throw Error(p$4(200));
      if (null == a2 || void 0 === a2._reactInternals)
        throw Error(p$4(38));
      return sl(a2, b2, c2, false, d2);
    };
    reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      reactDom.exports = reactDom_production_min;
    }
    var reactDomExports = reactDom.exports;
    var m$2 = reactDomExports;
    {
      client.createRoot = m$2.createRoot;
      client.hydrateRoot = m$2.hydrateRoot;
    }
    /**
     * @remix-run/router v1.21.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends$2() {
      _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends$2.apply(this, arguments);
    }
    var Action;
    (function(Action2) {
      Action2["Pop"] = "POP";
      Action2["Push"] = "PUSH";
      Action2["Replace"] = "REPLACE";
    })(Action || (Action = {}));
    const PopStateEventType = "popstate";
    function createBrowserHistory(options) {
      if (options === void 0) {
        options = {};
      }
      function createBrowserLocation(window2, globalHistory) {
        let {
          pathname,
          search,
          hash
        } = window2.location;
        return createLocation(
          "",
          {
            pathname,
            search,
            hash
          },
          // state defaults to `null` because `window.history.state` does
          globalHistory.state && globalHistory.state.usr || null,
          globalHistory.state && globalHistory.state.key || "default"
        );
      }
      function createBrowserHref(window2, to2) {
        return typeof to2 === "string" ? to2 : createPath(to2);
      }
      return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
    }
    function invariant(value2, message) {
      if (value2 === false || value2 === null || typeof value2 === "undefined") {
        throw new Error(message);
      }
    }
    function warning(cond, message) {
      if (!cond) {
        if (typeof console !== "undefined")
          console.warn(message);
        try {
          throw new Error(message);
        } catch (e2) {
        }
      }
    }
    function createKey() {
      return Math.random().toString(36).substr(2, 8);
    }
    function getHistoryState(location2, index2) {
      return {
        usr: location2.state,
        key: location2.key,
        idx: index2
      };
    }
    function createLocation(current, to2, state, key) {
      if (state === void 0) {
        state = null;
      }
      let location2 = _extends$2({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
      }, typeof to2 === "string" ? parsePath(to2) : to2, {
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to2 && to2.key || key || createKey()
      });
      return location2;
    }
    function createPath(_ref) {
      let {
        pathname = "/",
        search = "",
        hash = ""
      } = _ref;
      if (search && search !== "?")
        pathname += search.charAt(0) === "?" ? search : "?" + search;
      if (hash && hash !== "#")
        pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
      return pathname;
    }
    function parsePath(path) {
      let parsedPath = {};
      if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
          parsedPath.hash = path.substr(hashIndex);
          path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
          parsedPath.search = path.substr(searchIndex);
          path = path.substr(0, searchIndex);
        }
        if (path) {
          parsedPath.pathname = path;
        }
      }
      return parsedPath;
    }
    function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
      if (options === void 0) {
        options = {};
      }
      let {
        window: window2 = document.defaultView,
        v5Compat = false
      } = options;
      let globalHistory = window2.history;
      let action = Action.Pop;
      let listener = null;
      let index2 = getIndex();
      if (index2 == null) {
        index2 = 0;
        globalHistory.replaceState(_extends$2({}, globalHistory.state, {
          idx: index2
        }), "");
      }
      function getIndex() {
        let state = globalHistory.state || {
          idx: null
        };
        return state.idx;
      }
      function handlePop() {
        action = Action.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index2;
        index2 = nextIndex;
        if (listener) {
          listener({
            action,
            location: history.location,
            delta
          });
        }
      }
      function push(to2, state) {
        action = Action.Push;
        let location2 = createLocation(history.location, to2, state);
        if (validateLocation)
          validateLocation(location2, to2);
        index2 = getIndex() + 1;
        let historyState = getHistoryState(location2, index2);
        let url2 = history.createHref(location2);
        try {
          globalHistory.pushState(historyState, "", url2);
        } catch (error) {
          if (error instanceof DOMException && error.name === "DataCloneError") {
            throw error;
          }
          window2.location.assign(url2);
        }
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 1
          });
        }
      }
      function replace(to2, state) {
        action = Action.Replace;
        let location2 = createLocation(history.location, to2, state);
        if (validateLocation)
          validateLocation(location2, to2);
        index2 = getIndex();
        let historyState = getHistoryState(location2, index2);
        let url2 = history.createHref(location2);
        globalHistory.replaceState(historyState, "", url2);
        if (v5Compat && listener) {
          listener({
            action,
            location: history.location,
            delta: 0
          });
        }
      }
      function createURL(to2) {
        let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
        let href = typeof to2 === "string" ? to2 : createPath(to2);
        href = href.replace(/ $/, "%20");
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
      }
      let history = {
        get action() {
          return action;
        },
        get location() {
          return getLocation(window2, globalHistory);
        },
        listen(fn) {
          if (listener) {
            throw new Error("A history only accepts one active listener");
          }
          window2.addEventListener(PopStateEventType, handlePop);
          listener = fn;
          return () => {
            window2.removeEventListener(PopStateEventType, handlePop);
            listener = null;
          };
        },
        createHref(to2) {
          return createHref(window2, to2);
        },
        createURL,
        encodeLocation(to2) {
          let url2 = createURL(to2);
          return {
            pathname: url2.pathname,
            search: url2.search,
            hash: url2.hash
          };
        },
        push,
        replace,
        go(n2) {
          return globalHistory.go(n2);
        }
      };
      return history;
    }
    var ResultType;
    (function(ResultType2) {
      ResultType2["data"] = "data";
      ResultType2["deferred"] = "deferred";
      ResultType2["redirect"] = "redirect";
      ResultType2["error"] = "error";
    })(ResultType || (ResultType = {}));
    function matchRoutes(routes, locationArg, basename) {
      if (basename === void 0) {
        basename = "/";
      }
      return matchRoutesImpl(routes, locationArg, basename, false);
    }
    function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
      let location2 = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      let pathname = stripBasename(location2.pathname || "/", basename);
      if (pathname == null) {
        return null;
      }
      let branches = flattenRoutes(routes);
      rankRouteBranches(branches);
      let matches = null;
      for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
        let decoded = decodePath(pathname);
        matches = matchRouteBranch(branches[i2], decoded, allowPartial);
      }
      return matches;
    }
    function flattenRoutes(routes, branches, parentsMeta, parentPath) {
      if (branches === void 0) {
        branches = [];
      }
      if (parentsMeta === void 0) {
        parentsMeta = [];
      }
      if (parentPath === void 0) {
        parentPath = "";
      }
      let flattenRoute = (route, index2, relativePath) => {
        let meta = {
          relativePath: relativePath === void 0 ? route.path || "" : relativePath,
          caseSensitive: route.caseSensitive === true,
          childrenIndex: index2,
          route
        };
        if (meta.relativePath.startsWith("/")) {
          invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
          meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = joinPaths([parentPath, meta.relativePath]);
        let routesMeta = parentsMeta.concat(meta);
        if (route.children && route.children.length > 0) {
          invariant(
            // Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true,
            "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
          );
          flattenRoutes(route.children, branches, routesMeta, path);
        }
        if (route.path == null && !route.index) {
          return;
        }
        branches.push({
          path,
          score: computeScore(path, route.index),
          routesMeta
        });
      };
      routes.forEach((route, index2) => {
        var _route$path;
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
          flattenRoute(route, index2);
        } else {
          for (let exploded of explodeOptionalSegments(route.path)) {
            flattenRoute(route, index2, exploded);
          }
        }
      });
      return branches;
    }
    function explodeOptionalSegments(path) {
      let segments = path.split("/");
      if (segments.length === 0)
        return [];
      let [first, ...rest] = segments;
      let isOptional = first.endsWith("?");
      let required = first.replace(/\?$/, "");
      if (rest.length === 0) {
        return isOptional ? [required, ""] : [required];
      }
      let restExploded = explodeOptionalSegments(rest.join("/"));
      let result = [];
      result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
      if (isOptional) {
        result.push(...restExploded);
      }
      return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
    }
    function rankRouteBranches(branches) {
      branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
    }
    const paramRe = /^:[\w-]+$/;
    const dynamicSegmentValue = 3;
    const indexRouteValue = 2;
    const emptySegmentValue = 1;
    const staticSegmentValue = 10;
    const splatPenalty = -2;
    const isSplat = (s2) => s2 === "*";
    function computeScore(path, index2) {
      let segments = path.split("/");
      let initialScore = segments.length;
      if (segments.some(isSplat)) {
        initialScore += splatPenalty;
      }
      if (index2) {
        initialScore += indexRouteValue;
      }
      return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
    }
    function compareIndexes(a2, b2) {
      let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
      return siblings ? (
        // If two routes are siblings, we should try to match the earlier sibling
        // first. This allows people to have fine-grained control over the matching
        // behavior by simply putting routes with identical paths in the order they
        // want them tried.
        a2[a2.length - 1] - b2[b2.length - 1]
      ) : (
        // Otherwise, it doesn't really make sense to rank non-siblings by index,
        // so they sort equally.
        0
      );
    }
    function matchRouteBranch(branch, pathname, allowPartial) {
      if (allowPartial === void 0) {
        allowPartial = false;
      }
      let {
        routesMeta
      } = branch;
      let matchedParams = {};
      let matchedPathname = "/";
      let matches = [];
      for (let i2 = 0; i2 < routesMeta.length; ++i2) {
        let meta = routesMeta[i2];
        let end = i2 === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = matchPath({
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end
        }, remainingPathname);
        let route = meta.route;
        if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
          match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          }, remainingPathname);
        }
        if (!match) {
          return null;
        }
        Object.assign(matchedParams, match.params);
        matches.push({
          // TODO: Can this as be avoided?
          params: matchedParams,
          pathname: joinPaths([matchedPathname, match.pathname]),
          pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
          route
        });
        if (match.pathnameBase !== "/") {
          matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
        }
      }
      return matches;
    }
    function matchPath(pattern, pathname) {
      if (typeof pattern === "string") {
        pattern = {
          path: pattern,
          caseSensitive: false,
          end: true
        };
      }
      let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
      let match = pathname.match(matcher);
      if (!match)
        return null;
      let matchedPathname = match[0];
      let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
      let captureGroups = match.slice(1);
      let params = compiledParams.reduce((memo, _ref, index2) => {
        let {
          paramName,
          isOptional
        } = _ref;
        if (paramName === "*") {
          let splatValue = captureGroups[index2] || "";
          pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value2 = captureGroups[index2];
        if (isOptional && !value2) {
          memo[paramName] = void 0;
        } else {
          memo[paramName] = (value2 || "").replace(/%2F/g, "/");
        }
        return memo;
      }, {});
      return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
      };
    }
    function compilePath(path, caseSensitive, end) {
      if (caseSensitive === void 0) {
        caseSensitive = false;
      }
      if (end === void 0) {
        end = true;
      }
      warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
      let params = [];
      let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_2, paramName, isOptional) => {
        params.push({
          paramName,
          isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
      });
      if (path.endsWith("*")) {
        params.push({
          paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
      } else if (end) {
        regexpSource += "\\/*$";
      } else if (path !== "" && path !== "/") {
        regexpSource += "(?:(?=\\/|$))";
      } else
        ;
      let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
      return [matcher, params];
    }
    function decodePath(value2) {
      try {
        return value2.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
      } catch (error) {
        warning(false, 'The URL path "' + value2 + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
        return value2;
      }
    }
    function stripBasename(pathname, basename) {
      if (basename === "/")
        return pathname;
      if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
      }
      let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
      let nextChar = pathname.charAt(startIndex);
      if (nextChar && nextChar !== "/") {
        return null;
      }
      return pathname.slice(startIndex) || "/";
    }
    function resolvePath(to2, fromPathname) {
      if (fromPathname === void 0) {
        fromPathname = "/";
      }
      let {
        pathname: toPathname,
        search = "",
        hash = ""
      } = typeof to2 === "string" ? parsePath(to2) : to2;
      let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
      return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
      };
    }
    function resolvePathname(relativePath, fromPathname) {
      let segments = fromPathname.replace(/\/+$/, "").split("/");
      let relativeSegments = relativePath.split("/");
      relativeSegments.forEach((segment) => {
        if (segment === "..") {
          if (segments.length > 1)
            segments.pop();
        } else if (segment !== ".") {
          segments.push(segment);
        }
      });
      return segments.length > 1 ? segments.join("/") : "/";
    }
    function getInvalidPathError(char, field, dest, path) {
      return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
    }
    function getPathContributingMatches(matches) {
      return matches.filter((match, index2) => index2 === 0 || match.route.path && match.route.path.length > 0);
    }
    function getResolveToMatches(matches, v7_relativeSplatPath) {
      let pathMatches = getPathContributingMatches(matches);
      if (v7_relativeSplatPath) {
        return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
      }
      return pathMatches.map((match) => match.pathnameBase);
    }
    function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
      if (isPathRelative === void 0) {
        isPathRelative = false;
      }
      let to2;
      if (typeof toArg === "string") {
        to2 = parsePath(toArg);
      } else {
        to2 = _extends$2({}, toArg);
        invariant(!to2.pathname || !to2.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to2));
        invariant(!to2.pathname || !to2.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to2));
        invariant(!to2.search || !to2.search.includes("#"), getInvalidPathError("#", "search", "hash", to2));
      }
      let isEmptyPath = toArg === "" || to2.pathname === "";
      let toPathname = isEmptyPath ? "/" : to2.pathname;
      let from2;
      if (toPathname == null) {
        from2 = locationPathname;
      } else {
        let routePathnameIndex = routePathnames.length - 1;
        if (!isPathRelative && toPathname.startsWith("..")) {
          let toSegments = toPathname.split("/");
          while (toSegments[0] === "..") {
            toSegments.shift();
            routePathnameIndex -= 1;
          }
          to2.pathname = toSegments.join("/");
        }
        from2 = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
      }
      let path = resolvePath(to2, from2);
      let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
      let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
      if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
        path.pathname += "/";
      }
      return path;
    }
    const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
    const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
    const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
    const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
    function isRouteErrorResponse(error) {
      return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
    }
    const validMutationMethodsArr = ["post", "put", "patch", "delete"];
    new Set(validMutationMethodsArr);
    const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
    new Set(validRequestMethodsArr);
    /**
     * React Router v6.28.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends$1() {
      _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends$1.apply(this, arguments);
    }
    const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
    const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
    const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
    const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
    const RouteContext = /* @__PURE__ */ reactExports.createContext({
      outlet: null,
      matches: [],
      isDataRoute: false
    });
    const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
    function useHref(to2, _temp) {
      let {
        relative
      } = _temp === void 0 ? {} : _temp;
      !useInRouterContext() ? invariant(false) : void 0;
      let {
        basename,
        navigator: navigator2
      } = reactExports.useContext(NavigationContext);
      let {
        hash,
        pathname,
        search
      } = useResolvedPath(to2, {
        relative
      });
      let joinedPathname = pathname;
      if (basename !== "/") {
        joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
      }
      return navigator2.createHref({
        pathname: joinedPathname,
        search,
        hash
      });
    }
    function useInRouterContext() {
      return reactExports.useContext(LocationContext) != null;
    }
    function useLocation() {
      !useInRouterContext() ? invariant(false) : void 0;
      return reactExports.useContext(LocationContext).location;
    }
    function useIsomorphicLayoutEffect(cb2) {
      let isStatic = reactExports.useContext(NavigationContext).static;
      if (!isStatic) {
        reactExports.useLayoutEffect(cb2);
      }
    }
    function useNavigate() {
      let {
        isDataRoute
      } = reactExports.useContext(RouteContext);
      return isDataRoute ? useNavigateStable() : useNavigateUnstable();
    }
    function useNavigateUnstable() {
      !useInRouterContext() ? invariant(false) : void 0;
      let dataRouterContext = reactExports.useContext(DataRouterContext);
      let {
        basename,
        future,
        navigator: navigator2
      } = reactExports.useContext(NavigationContext);
      let {
        matches
      } = reactExports.useContext(RouteContext);
      let {
        pathname: locationPathname
      } = useLocation();
      let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
      let activeRef = reactExports.useRef(false);
      useIsomorphicLayoutEffect(() => {
        activeRef.current = true;
      });
      let navigate = reactExports.useCallback(function(to2, options) {
        if (options === void 0) {
          options = {};
        }
        if (!activeRef.current)
          return;
        if (typeof to2 === "number") {
          navigator2.go(to2);
          return;
        }
        let path = resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
      }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
      return navigate;
    }
    const OutletContext = /* @__PURE__ */ reactExports.createContext(null);
    function useOutlet(context) {
      let outlet = reactExports.useContext(RouteContext).outlet;
      if (outlet) {
        return /* @__PURE__ */ reactExports.createElement(OutletContext.Provider, {
          value: context
        }, outlet);
      }
      return outlet;
    }
    function useParams() {
      let {
        matches
      } = reactExports.useContext(RouteContext);
      let routeMatch = matches[matches.length - 1];
      return routeMatch ? routeMatch.params : {};
    }
    function useResolvedPath(to2, _temp2) {
      let {
        relative
      } = _temp2 === void 0 ? {} : _temp2;
      let {
        future
      } = reactExports.useContext(NavigationContext);
      let {
        matches
      } = reactExports.useContext(RouteContext);
      let {
        pathname: locationPathname
      } = useLocation();
      let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
      return reactExports.useMemo(() => resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to2, routePathnamesJson, locationPathname, relative]);
    }
    function useRoutes(routes, locationArg) {
      return useRoutesImpl(routes, locationArg);
    }
    function useRoutesImpl(routes, locationArg, dataRouterState, future) {
      !useInRouterContext() ? invariant(false) : void 0;
      let {
        navigator: navigator2
      } = reactExports.useContext(NavigationContext);
      let {
        matches: parentMatches
      } = reactExports.useContext(RouteContext);
      let routeMatch = parentMatches[parentMatches.length - 1];
      let parentParams = routeMatch ? routeMatch.params : {};
      routeMatch ? routeMatch.pathname : "/";
      let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
      routeMatch && routeMatch.route;
      let locationFromContext = useLocation();
      let location2;
      if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
        location2 = parsedLocationArg;
      } else {
        location2 = locationFromContext;
      }
      let pathname = location2.pathname || "/";
      let remainingPathname = pathname;
      if (parentPathnameBase !== "/") {
        let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
        let segments = pathname.replace(/^\//, "").split("/");
        remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
      }
      let matches = matchRoutes(routes, {
        pathname: remainingPathname
      });
      let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
        ]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
        ])
      })), parentMatches, dataRouterState, future);
      if (locationArg && renderedMatches) {
        return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
          value: {
            location: _extends$1({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, location2),
            navigationType: Action.Pop
          }
        }, renderedMatches);
      }
      return renderedMatches;
    }
    function DefaultErrorComponent() {
      let error = useRouteError();
      let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
      let stack = error instanceof Error ? error.stack : null;
      let lightgrey = "rgba(200,200,200, 0.5)";
      let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
      };
      let devInfo = null;
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
        style: {
          fontStyle: "italic"
        }
      }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
        style: preStyles
      }, stack) : null, devInfo);
    }
    const defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
    class RenderErrorBoundary extends reactExports.Component {
      constructor(props) {
        super(props);
        this.state = {
          location: props.location,
          revalidation: props.revalidation,
          error: props.error
        };
      }
      static getDerivedStateFromError(error) {
        return {
          error
        };
      }
      static getDerivedStateFromProps(props, state) {
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
          return {
            error: props.error,
            location: props.location,
            revalidation: props.revalidation
          };
        }
        return {
          error: props.error !== void 0 ? props.error : state.error,
          location: state.location,
          revalidation: props.revalidation || state.revalidation
        };
      }
      componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
      }
      render() {
        return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
          value: this.props.routeContext
        }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
          value: this.state.error,
          children: this.props.component
        })) : this.props.children;
      }
    }
    function RenderedRoute(_ref) {
      let {
        routeContext,
        match,
        children
      } = _ref;
      let dataRouterContext = reactExports.useContext(DataRouterContext);
      if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
        dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
      }
      return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
        value: routeContext
      }, children);
    }
    function _renderMatches(matches, parentMatches, dataRouterState, future) {
      var _dataRouterState;
      if (parentMatches === void 0) {
        parentMatches = [];
      }
      if (dataRouterState === void 0) {
        dataRouterState = null;
      }
      if (future === void 0) {
        future = null;
      }
      if (matches == null) {
        var _future;
        if (!dataRouterState) {
          return null;
        }
        if (dataRouterState.errors) {
          matches = dataRouterState.matches;
        } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
          matches = dataRouterState.matches;
        } else {
          return null;
        }
      }
      let renderedMatches = matches;
      let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
      if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]) !== void 0);
        !(errorIndex >= 0) ? invariant(false) : void 0;
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
      }
      let renderFallback = false;
      let fallbackIndex = -1;
      if (dataRouterState && future && future.v7_partialHydration) {
        for (let i2 = 0; i2 < renderedMatches.length; i2++) {
          let match = renderedMatches[i2];
          if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
            fallbackIndex = i2;
          }
          if (match.route.id) {
            let {
              loaderData,
              errors: errors2
            } = dataRouterState;
            let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
            if (match.route.lazy || needsToRunLoader) {
              renderFallback = true;
              if (fallbackIndex >= 0) {
                renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
              } else {
                renderedMatches = [renderedMatches[0]];
              }
              break;
            }
          }
        }
      }
      return renderedMatches.reduceRight((outlet, match, index2) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index2 === 0) {
              warningOnce("route-fallback", false);
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index2) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index2 + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
            match,
            routeContext: {
              outlet,
              matches: matches2,
              isDataRoute: dataRouterState != null
            },
            children
          });
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index2 === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
          location: dataRouterState.location,
          revalidation: dataRouterState.revalidation,
          component: errorElement,
          error,
          children: getChildren(),
          routeContext: {
            outlet: null,
            matches: matches2,
            isDataRoute: true
          }
        }) : getChildren();
      }, null);
    }
    var DataRouterHook$1 = /* @__PURE__ */ function(DataRouterHook2) {
      DataRouterHook2["UseBlocker"] = "useBlocker";
      DataRouterHook2["UseRevalidator"] = "useRevalidator";
      DataRouterHook2["UseNavigateStable"] = "useNavigate";
      return DataRouterHook2;
    }(DataRouterHook$1 || {});
    var DataRouterStateHook$1 = /* @__PURE__ */ function(DataRouterStateHook2) {
      DataRouterStateHook2["UseBlocker"] = "useBlocker";
      DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
      DataRouterStateHook2["UseActionData"] = "useActionData";
      DataRouterStateHook2["UseRouteError"] = "useRouteError";
      DataRouterStateHook2["UseNavigation"] = "useNavigation";
      DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
      DataRouterStateHook2["UseMatches"] = "useMatches";
      DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
      DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
      DataRouterStateHook2["UseRouteId"] = "useRouteId";
      return DataRouterStateHook2;
    }(DataRouterStateHook$1 || {});
    function useDataRouterContext(hookName) {
      let ctx = reactExports.useContext(DataRouterContext);
      !ctx ? invariant(false) : void 0;
      return ctx;
    }
    function useDataRouterState(hookName) {
      let state = reactExports.useContext(DataRouterStateContext);
      !state ? invariant(false) : void 0;
      return state;
    }
    function useRouteContext(hookName) {
      let route = reactExports.useContext(RouteContext);
      !route ? invariant(false) : void 0;
      return route;
    }
    function useCurrentRouteId(hookName) {
      let route = useRouteContext();
      let thisRoute = route.matches[route.matches.length - 1];
      !thisRoute.route.id ? invariant(false) : void 0;
      return thisRoute.route.id;
    }
    function useRouteError() {
      var _state$errors;
      let error = reactExports.useContext(RouteErrorContext);
      let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
      let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
      if (error !== void 0) {
        return error;
      }
      return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
    }
    function useNavigateStable() {
      let {
        router
      } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
      let id2 = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
      let activeRef = reactExports.useRef(false);
      useIsomorphicLayoutEffect(() => {
        activeRef.current = true;
      });
      let navigate = reactExports.useCallback(function(to2, options) {
        if (options === void 0) {
          options = {};
        }
        if (!activeRef.current)
          return;
        if (typeof to2 === "number") {
          router.navigate(to2);
        } else {
          router.navigate(to2, _extends$1({
            fromRouteId: id2
          }, options));
        }
      }, [router, id2]);
      return navigate;
    }
    const alreadyWarned$1 = {};
    function warningOnce(key, cond, message) {
      if (!cond && !alreadyWarned$1[key]) {
        alreadyWarned$1[key] = true;
      }
    }
    const alreadyWarned = {};
    function warnOnce(key, message) {
      if (!alreadyWarned[message]) {
        alreadyWarned[message] = true;
        console.warn(message);
      }
    }
    const logDeprecation = (flag, msg, link) => warnOnce(flag, "⚠️ React Router Future Flag Warning: " + msg + ". " + ("You can use the `" + flag + "` future flag to opt-in early. ") + ("For more information, see " + link + "."));
    function logV6DeprecationWarnings(renderFuture, routerFuture) {
      if (!(renderFuture != null && renderFuture.v7_startTransition)) {
        logDeprecation("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition");
      }
      if (!(renderFuture != null && renderFuture.v7_relativeSplatPath) && (!routerFuture || !routerFuture.v7_relativeSplatPath)) {
        logDeprecation("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
      }
      if (routerFuture) {
        if (!routerFuture.v7_fetcherPersist) {
          logDeprecation("v7_fetcherPersist", "The persistence behavior of fetchers is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist");
        }
        if (!routerFuture.v7_normalizeFormMethod) {
          logDeprecation("v7_normalizeFormMethod", "Casing of `formMethod` fields is being normalized to uppercase in v7", "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod");
        }
        if (!routerFuture.v7_partialHydration) {
          logDeprecation("v7_partialHydration", "`RouterProvider` hydration behavior is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_partialhydration");
        }
        if (!routerFuture.v7_skipActionErrorRevalidation) {
          logDeprecation("v7_skipActionErrorRevalidation", "The revalidation behavior after 4xx/5xx `action` responses is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation");
        }
      }
    }
    function Navigate(_ref4) {
      let {
        to: to2,
        replace,
        state,
        relative
      } = _ref4;
      !useInRouterContext() ? invariant(false) : void 0;
      let {
        future,
        static: isStatic
      } = reactExports.useContext(NavigationContext);
      let {
        matches
      } = reactExports.useContext(RouteContext);
      let {
        pathname: locationPathname
      } = useLocation();
      let navigate = useNavigate();
      let path = resolveTo(to2, getResolveToMatches(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
      let jsonPath = JSON.stringify(path);
      reactExports.useEffect(() => navigate(JSON.parse(jsonPath), {
        replace,
        state,
        relative
      }), [navigate, jsonPath, relative, replace, state]);
      return null;
    }
    function Outlet(props) {
      return useOutlet(props.context);
    }
    function Route(_props) {
      invariant(false);
    }
    function Router(_ref5) {
      let {
        basename: basenameProp = "/",
        children = null,
        location: locationProp,
        navigationType = Action.Pop,
        navigator: navigator2,
        static: staticProp = false,
        future
      } = _ref5;
      !!useInRouterContext() ? invariant(false) : void 0;
      let basename = basenameProp.replace(/^\/*/, "/");
      let navigationContext = reactExports.useMemo(() => ({
        basename,
        navigator: navigator2,
        static: staticProp,
        future: _extends$1({
          v7_relativeSplatPath: false
        }, future)
      }), [basename, future, navigator2, staticProp]);
      if (typeof locationProp === "string") {
        locationProp = parsePath(locationProp);
      }
      let {
        pathname = "/",
        search = "",
        hash = "",
        state = null,
        key = "default"
      } = locationProp;
      let locationContext = reactExports.useMemo(() => {
        let trailingPathname = stripBasename(pathname, basename);
        if (trailingPathname == null) {
          return null;
        }
        return {
          location: {
            pathname: trailingPathname,
            search,
            hash,
            state,
            key
          },
          navigationType
        };
      }, [basename, pathname, search, hash, state, key, navigationType]);
      if (locationContext == null) {
        return null;
      }
      return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
        value: navigationContext
      }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
        children,
        value: locationContext
      }));
    }
    function Routes(_ref6) {
      let {
        children,
        location: location2
      } = _ref6;
      return useRoutes(createRoutesFromChildren(children), location2);
    }
    new Promise(() => {
    });
    function createRoutesFromChildren(children, parentPath) {
      if (parentPath === void 0) {
        parentPath = [];
      }
      let routes = [];
      reactExports.Children.forEach(children, (element, index2) => {
        if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
          return;
        }
        let treePath = [...parentPath, index2];
        if (element.type === reactExports.Fragment) {
          routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
          return;
        }
        !(element.type === Route) ? invariant(false) : void 0;
        !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
        let route = {
          id: element.props.id || treePath.join("-"),
          caseSensitive: element.props.caseSensitive,
          element: element.props.element,
          Component: element.props.Component,
          index: element.props.index,
          path: element.props.path,
          loader: element.props.loader,
          action: element.props.action,
          errorElement: element.props.errorElement,
          ErrorBoundary: element.props.ErrorBoundary,
          hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
          shouldRevalidate: element.props.shouldRevalidate,
          handle: element.props.handle,
          lazy: element.props.lazy
        };
        if (element.props.children) {
          route.children = createRoutesFromChildren(element.props.children, treePath);
        }
        routes.push(route);
      });
      return routes;
    }
    /**
     * React Router DOM v6.28.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source = arguments[i2];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i2;
      for (i2 = 0; i2 < sourceKeys.length; i2++) {
        key = sourceKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function isModifiedEvent(event) {
      return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
    }
    function shouldProcessLinkClick(event, target) {
      return event.button === 0 && // Ignore everything but left clicks
      (!target || target === "_self") && // Let browser handle "target=_blank" etc.
      !isModifiedEvent(event);
    }
    const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
    const REACT_ROUTER_VERSION = "6";
    try {
      window.__reactRouterVersion = REACT_ROUTER_VERSION;
    } catch (e2) {
    }
    const START_TRANSITION = "startTransition";
    const startTransitionImpl = e$3[START_TRANSITION];
    function BrowserRouter(_ref4) {
      let {
        basename,
        children,
        future,
        window: window2
      } = _ref4;
      let historyRef = reactExports.useRef();
      if (historyRef.current == null) {
        historyRef.current = createBrowserHistory({
          window: window2,
          v5Compat: true
        });
      }
      let history = historyRef.current;
      let [state, setStateImpl] = reactExports.useState({
        action: history.action,
        location: history.location
      });
      let {
        v7_startTransition
      } = future || {};
      let setState = reactExports.useCallback((newState) => {
        v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
      }, [setStateImpl, v7_startTransition]);
      reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
      reactExports.useEffect(() => logV6DeprecationWarnings(future), [future]);
      return /* @__PURE__ */ reactExports.createElement(Router, {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future
      });
    }
    const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
    const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(_ref7, ref) {
      let {
        onClick,
        relative,
        reloadDocument,
        replace,
        state,
        target,
        to: to2,
        preventScrollReset,
        viewTransition
      } = _ref7, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
      let {
        basename
      } = reactExports.useContext(NavigationContext);
      let absoluteHref;
      let isExternal = false;
      if (typeof to2 === "string" && ABSOLUTE_URL_REGEX.test(to2)) {
        absoluteHref = to2;
        if (isBrowser) {
          try {
            let currentUrl = new URL(window.location.href);
            let targetUrl = to2.startsWith("//") ? new URL(currentUrl.protocol + to2) : new URL(to2);
            let path = stripBasename(targetUrl.pathname, basename);
            if (targetUrl.origin === currentUrl.origin && path != null) {
              to2 = path + targetUrl.search + targetUrl.hash;
            } else {
              isExternal = true;
            }
          } catch (e2) {
          }
        }
      }
      let href = useHref(to2, {
        relative
      });
      let internalOnClick = useLinkClickHandler(to2, {
        replace,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition
      });
      function handleClick(event) {
        if (onClick)
          onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      return (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ reactExports.createElement("a", _extends({}, rest, {
          href: absoluteHref || href,
          onClick: isExternal || reloadDocument ? onClick : handleClick,
          ref,
          target
        }))
      );
    });
    var DataRouterHook;
    (function(DataRouterHook2) {
      DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
      DataRouterHook2["UseSubmit"] = "useSubmit";
      DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
      DataRouterHook2["UseFetcher"] = "useFetcher";
      DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
    })(DataRouterHook || (DataRouterHook = {}));
    var DataRouterStateHook;
    (function(DataRouterStateHook2) {
      DataRouterStateHook2["UseFetcher"] = "useFetcher";
      DataRouterStateHook2["UseFetchers"] = "useFetchers";
      DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
    })(DataRouterStateHook || (DataRouterStateHook = {}));
    function useLinkClickHandler(to2, _temp) {
      let {
        target,
        replace: replaceProp,
        state,
        preventScrollReset,
        relative,
        viewTransition
      } = _temp === void 0 ? {} : _temp;
      let navigate = useNavigate();
      let location2 = useLocation();
      let path = useResolvedPath(to2, {
        relative
      });
      return reactExports.useCallback((event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace = replaceProp !== void 0 ? replaceProp : createPath(location2) === createPath(path);
          navigate(to2, {
            replace,
            state,
            preventScrollReset,
            relative,
            viewTransition
          });
        }
      }, [location2, navigate, path, replaceProp, state, target, to2, preventScrollReset, relative, viewTransition]);
    }
    let e$2 = { data: "" }, t$5 = (t2) => "object" == typeof window ? ((t2 ? t2.querySelector("#_goober") : window._goober) || Object.assign((t2 || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t2 || e$2, l$4 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, a$2 = /\/\*[^]*?\*\/|  +/g, n$5 = /\n+/g, o$6 = (e2, t2) => {
      let r2 = "", l2 = "", a2 = "";
      for (let n2 in e2) {
        let c2 = e2[n2];
        "@" == n2[0] ? "i" == n2[1] ? r2 = n2 + " " + c2 + ";" : l2 += "f" == n2[1] ? o$6(c2, n2) : n2 + "{" + o$6(c2, "k" == n2[1] ? "" : t2) + "}" : "object" == typeof c2 ? l2 += o$6(c2, t2 ? t2.replace(/([^,])+/g, (e3) => n2.replace(/(^:.*)|([^,])+/g, (t3) => /&/.test(t3) ? t3.replace(/&/g, e3) : e3 ? e3 + " " + t3 : t3)) : n2) : null != c2 && (n2 = /^--/.test(n2) ? n2 : n2.replace(/[A-Z]/g, "-$&").toLowerCase(), a2 += o$6.p ? o$6.p(n2, c2) : n2 + ":" + c2 + ";");
      }
      return r2 + (t2 && a2 ? t2 + "{" + a2 + "}" : a2) + l2;
    }, c$4 = {}, s$5 = (e2) => {
      if ("object" == typeof e2) {
        let t2 = "";
        for (let r2 in e2)
          t2 += r2 + s$5(e2[r2]);
        return t2;
      }
      return e2;
    }, i$3 = (e2, t2, r2, i2, p2) => {
      let u2 = s$5(e2), d2 = c$4[u2] || (c$4[u2] = ((e3) => {
        let t3 = 0, r3 = 11;
        for (; t3 < e3.length; )
          r3 = 101 * r3 + e3.charCodeAt(t3++) >>> 0;
        return "go" + r3;
      })(u2));
      if (!c$4[d2]) {
        let t3 = u2 !== e2 ? e2 : ((e3) => {
          let t4, r3, o2 = [{}];
          for (; t4 = l$4.exec(e3.replace(a$2, "")); )
            t4[4] ? o2.shift() : t4[3] ? (r3 = t4[3].replace(n$5, " ").trim(), o2.unshift(o2[0][r3] = o2[0][r3] || {})) : o2[0][t4[1]] = t4[2].replace(n$5, " ").trim();
          return o2[0];
        })(e2);
        c$4[d2] = o$6(p2 ? { ["@keyframes " + d2]: t3 } : t3, r2 ? "" : "." + d2);
      }
      let f2 = r2 && c$4.g ? c$4.g : null;
      return r2 && (c$4.g = c$4[d2]), ((e3, t3, r3, l2) => {
        l2 ? t3.data = t3.data.replace(l2, e3) : -1 === t3.data.indexOf(e3) && (t3.data = r3 ? e3 + t3.data : t3.data + e3);
      })(c$4[d2], t2, i2, f2), d2;
    }, p$3 = (e2, t2, r2) => e2.reduce((e3, l2, a2) => {
      let n2 = t2[a2];
      if (n2 && n2.call) {
        let e4 = n2(r2), t3 = e4 && e4.props && e4.props.className || /^go/.test(e4) && e4;
        n2 = t3 ? "." + t3 : e4 && "object" == typeof e4 ? e4.props ? "" : o$6(e4, "") : false === e4 ? "" : e4;
      }
      return e3 + l2 + (null == n2 ? "" : n2);
    }, "");
    function u$6(e2) {
      let r2 = this || {}, l2 = e2.call ? e2(r2.p) : e2;
      return i$3(l2.unshift ? l2.raw ? p$3(l2, [].slice.call(arguments, 1), r2.p) : l2.reduce((e3, t2) => Object.assign(e3, t2 && t2.call ? t2(r2.p) : t2), {}) : l2, t$5(r2.target), r2.g, r2.o, r2.k);
    }
    let d$3, f$3, g$4;
    u$6.bind({ g: 1 });
    let h$5 = u$6.bind({ k: 1 });
    function m$1(e2, t2, r2, l2) {
      o$6.p = t2, d$3 = e2, f$3 = r2, g$4 = l2;
    }
    function j$1(e2, t2) {
      let r2 = this || {};
      return function() {
        let l2 = arguments;
        function a2(n2, o2) {
          let c2 = Object.assign({}, n2), s2 = c2.className || a2.className;
          r2.p = Object.assign({ theme: f$3 && f$3() }, c2), r2.o = / *go\d+/.test(s2), c2.className = u$6.apply(r2, l2) + (s2 ? " " + s2 : ""), t2 && (c2.ref = o2);
          let i2 = e2;
          return e2[0] && (i2 = c2.as || e2, delete c2.as), g$4 && i2[0] && g$4(c2), d$3(i2, c2);
        }
        return t2 ? t2(a2) : a2;
      };
    }
    var W$1 = (e2) => typeof e2 == "function", T$1 = (e2, t2) => W$1(e2) ? e2(t2) : e2;
    var U$2 = (() => {
      let e2 = 0;
      return () => (++e2).toString();
    })(), b$2 = (() => {
      let e2;
      return () => {
        if (e2 === void 0 && typeof window < "u") {
          let t2 = matchMedia("(prefers-reduced-motion: reduce)");
          e2 = !t2 || t2.matches;
        }
        return e2;
      };
    })();
    var Q = 20;
    var S$3 = /* @__PURE__ */ new Map(), X$1 = 1e3, $ = (e2) => {
      if (S$3.has(e2))
        return;
      let t2 = setTimeout(() => {
        S$3.delete(e2), u$5({ type: 4, toastId: e2 });
      }, X$1);
      S$3.set(e2, t2);
    }, J = (e2) => {
      let t2 = S$3.get(e2);
      t2 && clearTimeout(t2);
    }, v$2 = (e2, t2) => {
      switch (t2.type) {
        case 0:
          return { ...e2, toasts: [t2.toast, ...e2.toasts].slice(0, Q) };
        case 1:
          return t2.toast.id && J(t2.toast.id), { ...e2, toasts: e2.toasts.map((r2) => r2.id === t2.toast.id ? { ...r2, ...t2.toast } : r2) };
        case 2:
          let { toast: o2 } = t2;
          return e2.toasts.find((r2) => r2.id === o2.id) ? v$2(e2, { type: 1, toast: o2 }) : v$2(e2, { type: 0, toast: o2 });
        case 3:
          let { toastId: s2 } = t2;
          return s2 ? $(s2) : e2.toasts.forEach((r2) => {
            $(r2.id);
          }), { ...e2, toasts: e2.toasts.map((r2) => r2.id === s2 || s2 === void 0 ? { ...r2, visible: false } : r2) };
        case 4:
          return t2.toastId === void 0 ? { ...e2, toasts: [] } : { ...e2, toasts: e2.toasts.filter((r2) => r2.id !== t2.toastId) };
        case 5:
          return { ...e2, pausedAt: t2.time };
        case 6:
          let a2 = t2.time - (e2.pausedAt || 0);
          return { ...e2, pausedAt: void 0, toasts: e2.toasts.map((r2) => ({ ...r2, pauseDuration: r2.pauseDuration + a2 })) };
      }
    }, A = [], P = { toasts: [], pausedAt: void 0 }, u$5 = (e2) => {
      P = v$2(P, e2), A.forEach((t2) => {
        t2(P);
      });
    }, Y = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, I$2 = (e2 = {}) => {
      let [t2, o2] = reactExports.useState(P);
      reactExports.useEffect(() => (A.push(o2), () => {
        let a2 = A.indexOf(o2);
        a2 > -1 && A.splice(a2, 1);
      }), [t2]);
      let s2 = t2.toasts.map((a2) => {
        var r2, c2;
        return { ...e2, ...e2[a2.type], ...a2, duration: a2.duration || ((r2 = e2[a2.type]) == null ? void 0 : r2.duration) || (e2 == null ? void 0 : e2.duration) || Y[a2.type], style: { ...e2.style, ...(c2 = e2[a2.type]) == null ? void 0 : c2.style, ...a2.style } };
      });
      return { ...t2, toasts: s2 };
    };
    var G = (e2, t2 = "blank", o2) => ({ createdAt: Date.now(), visible: true, type: t2, ariaProps: { role: "status", "aria-live": "polite" }, message: e2, pauseDuration: 0, ...o2, id: (o2 == null ? void 0 : o2.id) || U$2() }), h$4 = (e2) => (t2, o2) => {
      let s2 = G(t2, e2, o2);
      return u$5({ type: 2, toast: s2 }), s2.id;
    }, n$4 = (e2, t2) => h$4("blank")(e2, t2);
    n$4.error = h$4("error");
    n$4.success = h$4("success");
    n$4.loading = h$4("loading");
    n$4.custom = h$4("custom");
    n$4.dismiss = (e2) => {
      u$5({ type: 3, toastId: e2 });
    };
    n$4.remove = (e2) => u$5({ type: 4, toastId: e2 });
    n$4.promise = (e2, t2, o2) => {
      let s2 = n$4.loading(t2.loading, { ...o2, ...o2 == null ? void 0 : o2.loading });
      return e2.then((a2) => (n$4.success(T$1(t2.success, a2), { id: s2, ...o2, ...o2 == null ? void 0 : o2.success }), a2)).catch((a2) => {
        n$4.error(T$1(t2.error, a2), { id: s2, ...o2, ...o2 == null ? void 0 : o2.error });
      }), e2;
    };
    var Z = (e2, t2) => {
      u$5({ type: 1, toast: { id: e2, height: t2 } });
    }, ee = () => {
      u$5({ type: 5, time: Date.now() });
    }, D$2 = (e2) => {
      let { toasts: t2, pausedAt: o2 } = I$2(e2);
      reactExports.useEffect(() => {
        if (o2)
          return;
        let r2 = Date.now(), c2 = t2.map((i2) => {
          if (i2.duration === 1 / 0)
            return;
          let d2 = (i2.duration || 0) + i2.pauseDuration - (r2 - i2.createdAt);
          if (d2 < 0) {
            i2.visible && n$4.dismiss(i2.id);
            return;
          }
          return setTimeout(() => n$4.dismiss(i2.id), d2);
        });
        return () => {
          c2.forEach((i2) => i2 && clearTimeout(i2));
        };
      }, [t2, o2]);
      let s2 = reactExports.useCallback(() => {
        o2 && u$5({ type: 6, time: Date.now() });
      }, [o2]), a2 = reactExports.useCallback((r2, c2) => {
        let { reverseOrder: i2 = false, gutter: d2 = 8, defaultPosition: p2 } = c2 || {}, g2 = t2.filter((m2) => (m2.position || p2) === (r2.position || p2) && m2.height), E2 = g2.findIndex((m2) => m2.id === r2.id), x2 = g2.filter((m2, R2) => R2 < E2 && m2.visible).length;
        return g2.filter((m2) => m2.visible).slice(...i2 ? [x2 + 1] : [0, x2]).reduce((m2, R2) => m2 + (R2.height || 0) + d2, 0);
      }, [t2]);
      return { toasts: t2, handlers: { updateHeight: Z, startPause: ee, endPause: s2, calculateOffset: a2 } };
    };
    var oe$1 = h$5`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, re$1 = h$5`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, se$1 = h$5`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, _$2 = j$1("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe$1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re$1} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e2) => e2.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se$1} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;
    var ne = h$5`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, V = j$1("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e2) => e2.secondary || "#e0e0e0"};
  border-right-color: ${(e2) => e2.primary || "#616161"};
  animation: ${ne} 1s linear infinite;
`;
    var pe = h$5`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, de$1 = h$5`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, w$4 = j$1("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de$1} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e2) => e2.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;
    var ue = j$1("div")`
  position: absolute;
`, le$1 = j$1("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Te$1 = h$5`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, fe$1 = j$1("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te$1} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, M$3 = ({ toast: e2 }) => {
      let { icon: t2, type: o2, iconTheme: s2 } = e2;
      return t2 !== void 0 ? typeof t2 == "string" ? reactExports.createElement(fe$1, null, t2) : t2 : o2 === "blank" ? null : reactExports.createElement(le$1, null, reactExports.createElement(V, { ...s2 }), o2 !== "loading" && reactExports.createElement(ue, null, o2 === "error" ? reactExports.createElement(_$2, { ...s2 }) : reactExports.createElement(w$4, { ...s2 })));
    };
    var ye$2 = (e2) => `
0% {transform: translate3d(0,${e2 * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, ge$1 = (e2) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e2 * -150}%,-1px) scale(.6); opacity:0;}
`, he$1 = "0%{opacity:0;} 100%{opacity:1;}", xe$2 = "0%{opacity:1;} 100%{opacity:0;}", be$2 = j$1("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Se$2 = j$1("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ae$1 = (e2, t2) => {
      let s2 = e2.includes("top") ? 1 : -1, [a2, r2] = b$2() ? [he$1, xe$2] : [ye$2(s2), ge$1(s2)];
      return { animation: t2 ? `${h$5(a2)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${h$5(r2)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
    }, F$2 = reactExports.memo(({ toast: e2, position: t2, style: o2, children: s2 }) => {
      let a2 = e2.height ? Ae$1(e2.position || t2 || "top-center", e2.visible) : { opacity: 0 }, r2 = reactExports.createElement(M$3, { toast: e2 }), c2 = reactExports.createElement(Se$2, { ...e2.ariaProps }, T$1(e2.message, e2));
      return reactExports.createElement(be$2, { className: e2.className, style: { ...a2, ...o2, ...e2.style } }, typeof s2 == "function" ? s2({ icon: r2, message: c2 }) : reactExports.createElement(reactExports.Fragment, null, r2, c2));
    });
    m$1(reactExports.createElement);
    var Ee$1 = ({ id: e2, className: t2, style: o2, onHeightUpdate: s2, children: a2 }) => {
      let r2 = reactExports.useCallback((c2) => {
        if (c2) {
          let i2 = () => {
            let d2 = c2.getBoundingClientRect().height;
            s2(e2, d2);
          };
          i2(), new MutationObserver(i2).observe(c2, { subtree: true, childList: true, characterData: true });
        }
      }, [e2, s2]);
      return reactExports.createElement("div", { ref: r2, className: t2, style: o2 }, a2);
    }, Re$2 = (e2, t2) => {
      let o2 = e2.includes("top"), s2 = o2 ? { top: 0 } : { bottom: 0 }, a2 = e2.includes("center") ? { justifyContent: "center" } : e2.includes("right") ? { justifyContent: "flex-end" } : {};
      return { left: 0, right: 0, display: "flex", position: "absolute", transition: b$2() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t2 * (o2 ? 1 : -1)}px)`, ...s2, ...a2 };
    }, ve$1 = u$6`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, O$2 = 16, Ie$1 = ({ reverseOrder: e2, position: t2 = "top-center", toastOptions: o2, gutter: s2, children: a2, containerStyle: r2, containerClassName: c2 }) => {
      let { toasts: i2, handlers: d2 } = D$2(o2);
      return reactExports.createElement("div", { style: { position: "fixed", zIndex: 9999, top: O$2, left: O$2, right: O$2, bottom: O$2, pointerEvents: "none", ...r2 }, className: c2, onMouseEnter: d2.startPause, onMouseLeave: d2.endPause }, i2.map((p2) => {
        let g2 = p2.position || t2, E2 = d2.calculateOffset(p2, { reverseOrder: e2, gutter: s2, defaultPosition: t2 }), x2 = Re$2(g2, E2);
        return reactExports.createElement(Ee$1, { id: p2.id, key: p2.id, onHeightUpdate: d2.updateHeight, className: p2.visible ? ve$1 : "", style: x2 }, p2.type === "custom" ? T$1(p2.message, p2) : a2 ? a2(p2) : reactExports.createElement(F$2, { toast: p2, position: g2 }));
      }));
    };
    var _t = n$4;
    const objectToString = Object.prototype.toString;
    function isError(wat) {
      switch (objectToString.call(wat)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return true;
        default:
          return isInstanceOf(wat, Error);
      }
    }
    function isBuiltin(wat, className) {
      return objectToString.call(wat) === `[object ${className}]`;
    }
    function isErrorEvent$1(wat) {
      return isBuiltin(wat, "ErrorEvent");
    }
    function isDOMError(wat) {
      return isBuiltin(wat, "DOMError");
    }
    function isDOMException(wat) {
      return isBuiltin(wat, "DOMException");
    }
    function isString$1(wat) {
      return isBuiltin(wat, "String");
    }
    function isPrimitive(wat) {
      return wat === null || typeof wat !== "object" && typeof wat !== "function";
    }
    function isPlainObject(wat) {
      return isBuiltin(wat, "Object");
    }
    function isEvent(wat) {
      return typeof Event !== "undefined" && isInstanceOf(wat, Event);
    }
    function isElement(wat) {
      return typeof Element !== "undefined" && isInstanceOf(wat, Element);
    }
    function isRegExp(wat) {
      return isBuiltin(wat, "RegExp");
    }
    function isThenable(wat) {
      return Boolean(wat && wat.then && typeof wat.then === "function");
    }
    function isSyntheticEvent(wat) {
      return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
    }
    function isNaN$1(wat) {
      return typeof wat === "number" && wat !== wat;
    }
    function isInstanceOf(wat, base) {
      try {
        return wat instanceof base;
      } catch (_e) {
        return false;
      }
    }
    function isVueViewModel(wat) {
      return !!(typeof wat === "object" && wat !== null && (wat.__isVue || wat._isVue));
    }
    function truncate(str, max2 = 0) {
      if (typeof str !== "string" || max2 === 0) {
        return str;
      }
      return str.length <= max2 ? str : `${str.slice(0, max2)}...`;
    }
    function safeJoin(input, delimiter) {
      if (!Array.isArray(input)) {
        return "";
      }
      const output = [];
      for (let i2 = 0; i2 < input.length; i2++) {
        const value2 = input[i2];
        try {
          if (isVueViewModel(value2)) {
            output.push("[VueViewModel]");
          } else {
            output.push(String(value2));
          }
        } catch (e2) {
          output.push("[value cannot be serialized]");
        }
      }
      return output.join(delimiter);
    }
    function isMatchingPattern(value2, pattern, requireExactStringMatch = false) {
      if (!isString$1(value2)) {
        return false;
      }
      if (isRegExp(pattern)) {
        return pattern.test(value2);
      }
      if (isString$1(pattern)) {
        return requireExactStringMatch ? value2 === pattern : value2.includes(pattern);
      }
      return false;
    }
    function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
      return patterns.some((pattern) => isMatchingPattern(testString, pattern, requireExactStringMatch));
    }
    function applyAggregateErrorsToEvent(exceptionFromErrorImplementation, parser2, maxValueLimit = 250, key, limit, event, hint) {
      if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) {
        return;
      }
      const originalException = event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : void 0;
      if (originalException) {
        event.exception.values = truncateAggregateExceptions(
          aggregateExceptionsFromError(
            exceptionFromErrorImplementation,
            parser2,
            limit,
            hint.originalException,
            key,
            event.exception.values,
            originalException,
            0
          ),
          maxValueLimit
        );
      }
    }
    function aggregateExceptionsFromError(exceptionFromErrorImplementation, parser2, limit, error, key, prevExceptions, exception, exceptionId) {
      if (prevExceptions.length >= limit + 1) {
        return prevExceptions;
      }
      let newExceptions = [...prevExceptions];
      if (isInstanceOf(error[key], Error)) {
        applyExceptionGroupFieldsForParentException(exception, exceptionId);
        const newException = exceptionFromErrorImplementation(parser2, error[key]);
        const newExceptionId = newExceptions.length;
        applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
        newExceptions = aggregateExceptionsFromError(
          exceptionFromErrorImplementation,
          parser2,
          limit,
          error[key],
          key,
          [newException, ...newExceptions],
          newException,
          newExceptionId
        );
      }
      if (Array.isArray(error.errors)) {
        error.errors.forEach((childError, i2) => {
          if (isInstanceOf(childError, Error)) {
            applyExceptionGroupFieldsForParentException(exception, exceptionId);
            const newException = exceptionFromErrorImplementation(parser2, childError);
            const newExceptionId = newExceptions.length;
            applyExceptionGroupFieldsForChildException(newException, `errors[${i2}]`, newExceptionId, exceptionId);
            newExceptions = aggregateExceptionsFromError(
              exceptionFromErrorImplementation,
              parser2,
              limit,
              childError,
              key,
              [newException, ...newExceptions],
              newException,
              newExceptionId
            );
          }
        });
      }
      return newExceptions;
    }
    function applyExceptionGroupFieldsForParentException(exception, exceptionId) {
      exception.mechanism = exception.mechanism || { type: "generic", handled: true };
      exception.mechanism = {
        ...exception.mechanism,
        is_exception_group: true,
        exception_id: exceptionId
      };
    }
    function applyExceptionGroupFieldsForChildException(exception, source, exceptionId, parentId) {
      exception.mechanism = exception.mechanism || { type: "generic", handled: true };
      exception.mechanism = {
        ...exception.mechanism,
        type: "chained",
        source,
        exception_id: exceptionId,
        parent_id: parentId
      };
    }
    function truncateAggregateExceptions(exceptions, maxValueLength) {
      return exceptions.map((exception) => {
        if (exception.value) {
          exception.value = truncate(exception.value, maxValueLength);
        }
        return exception;
      });
    }
    function isGlobalObj(obj) {
      return obj && obj.Math == Math ? obj : void 0;
    }
    const GLOBAL_OBJ = typeof globalThis == "object" && isGlobalObj(globalThis) || // eslint-disable-next-line no-restricted-globals
    typeof window == "object" && isGlobalObj(window) || typeof self == "object" && isGlobalObj(self) || typeof global == "object" && isGlobalObj(global) || function() {
      return this;
    }() || {};
    function getGlobalObject() {
      return GLOBAL_OBJ;
    }
    function getGlobalSingleton(name, creator, obj) {
      const gbl = obj || GLOBAL_OBJ;
      const __SENTRY__ = gbl.__SENTRY__ = gbl.__SENTRY__ || {};
      const singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
      return singleton;
    }
    const WINDOW$7 = getGlobalObject();
    const DEFAULT_MAX_STRING_LENGTH = 80;
    function htmlTreeAsString(elem, options = {}) {
      if (!elem) {
        return "<unknown>";
      }
      try {
        let currentElem = elem;
        const MAX_TRAVERSE_HEIGHT = 5;
        const out = [];
        let height = 0;
        let len = 0;
        const separator = " > ";
        const sepLength = separator.length;
        let nextStr;
        const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
        const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
        while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
          nextStr = _htmlElementAsString(currentElem, keyAttrs);
          if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
            break;
          }
          out.push(nextStr);
          len += nextStr.length;
          currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
      } catch (_oO) {
        return "<unknown>";
      }
    }
    function _htmlElementAsString(el2, keyAttrs) {
      const elem = el2;
      const out = [];
      let className;
      let classes;
      let key;
      let attr;
      let i2;
      if (!elem || !elem.tagName) {
        return "";
      }
      out.push(elem.tagName.toLowerCase());
      const keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((keyAttr) => elem.getAttribute(keyAttr)).map((keyAttr) => [keyAttr, elem.getAttribute(keyAttr)]) : null;
      if (keyAttrPairs && keyAttrPairs.length) {
        keyAttrPairs.forEach((keyAttrPair) => {
          out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
        });
      } else {
        if (elem.id) {
          out.push(`#${elem.id}`);
        }
        className = elem.className;
        if (className && isString$1(className)) {
          classes = className.split(/\s+/);
          for (i2 = 0; i2 < classes.length; i2++) {
            out.push(`.${classes[i2]}`);
          }
        }
      }
      const allowedAttrs = ["aria-label", "type", "name", "title", "alt"];
      for (i2 = 0; i2 < allowedAttrs.length; i2++) {
        key = allowedAttrs[i2];
        attr = elem.getAttribute(key);
        if (attr) {
          out.push(`[${key}="${attr}"]`);
        }
      }
      return out.join("");
    }
    function getLocationHref() {
      try {
        return WINDOW$7.document.location.href;
      } catch (oO) {
        return "";
      }
    }
    const DEBUG_BUILD$2 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
    const PREFIX = "Sentry Logger ";
    const CONSOLE_LEVELS = [
      "debug",
      "info",
      "warn",
      "error",
      "log",
      "assert",
      "trace"
    ];
    const originalConsoleMethods = {};
    function consoleSandbox(callback) {
      if (!("console" in GLOBAL_OBJ)) {
        return callback();
      }
      const console2 = GLOBAL_OBJ.console;
      const wrappedFuncs = {};
      const wrappedLevels = Object.keys(originalConsoleMethods);
      wrappedLevels.forEach((level) => {
        const originalConsoleMethod = originalConsoleMethods[level];
        wrappedFuncs[level] = console2[level];
        console2[level] = originalConsoleMethod;
      });
      try {
        return callback();
      } finally {
        wrappedLevels.forEach((level) => {
          console2[level] = wrappedFuncs[level];
        });
      }
    }
    function makeLogger() {
      let enabled = false;
      const logger2 = {
        enable: () => {
          enabled = true;
        },
        disable: () => {
          enabled = false;
        },
        isEnabled: () => enabled
      };
      if (DEBUG_BUILD$2) {
        CONSOLE_LEVELS.forEach((name) => {
          logger2[name] = (...args) => {
            if (enabled) {
              consoleSandbox(() => {
                GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
              });
            }
          };
        });
      } else {
        CONSOLE_LEVELS.forEach((name) => {
          logger2[name] = () => void 0;
        });
      }
      return logger2;
    }
    const logger = makeLogger();
    const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function isValidProtocol(protocol2) {
      return protocol2 === "http" || protocol2 === "https";
    }
    function dsnToString(dsn, withPassword = false) {
      const { host, path, pass, port, projectId, protocol: protocol2, publicKey } = dsn;
      return `${protocol2}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
    }
    function dsnFromString(str) {
      const match = DSN_REGEX.exec(str);
      if (!match) {
        consoleSandbox(() => {
          console.error(`Invalid Sentry Dsn: ${str}`);
        });
        return void 0;
      }
      const [protocol2, publicKey, pass = "", host, port = "", lastPath] = match.slice(1);
      let path = "";
      let projectId = lastPath;
      const split = projectId.split("/");
      if (split.length > 1) {
        path = split.slice(0, -1).join("/");
        projectId = split.pop();
      }
      if (projectId) {
        const projectMatch = projectId.match(/^\d+/);
        if (projectMatch) {
          projectId = projectMatch[0];
        }
      }
      return dsnFromComponents({ host, pass, path, projectId, port, protocol: protocol2, publicKey });
    }
    function dsnFromComponents(components) {
      return {
        protocol: components.protocol,
        publicKey: components.publicKey || "",
        pass: components.pass || "",
        host: components.host,
        port: components.port || "",
        path: components.path || "",
        projectId: components.projectId
      };
    }
    function validateDsn(dsn) {
      if (!DEBUG_BUILD$2) {
        return true;
      }
      const { port, projectId, protocol: protocol2 } = dsn;
      const requiredComponents = ["protocol", "publicKey", "host", "projectId"];
      const hasMissingRequiredComponent = requiredComponents.find((component) => {
        if (!dsn[component]) {
          logger.error(`Invalid Sentry Dsn: ${component} missing`);
          return true;
        }
        return false;
      });
      if (hasMissingRequiredComponent) {
        return false;
      }
      if (!projectId.match(/^\d+$/)) {
        logger.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
        return false;
      }
      if (!isValidProtocol(protocol2)) {
        logger.error(`Invalid Sentry Dsn: Invalid protocol ${protocol2}`);
        return false;
      }
      if (port && isNaN(parseInt(port, 10))) {
        logger.error(`Invalid Sentry Dsn: Invalid port ${port}`);
        return false;
      }
      return true;
    }
    function makeDsn(from2) {
      const components = typeof from2 === "string" ? dsnFromString(from2) : dsnFromComponents(from2);
      if (!components || !validateDsn(components)) {
        return void 0;
      }
      return components;
    }
    class SentryError extends Error {
      /** Display name of this error instance. */
      constructor(message, logLevel = "warn") {
        super(message);
        this.message = message;
        this.name = new.target.prototype.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
        this.logLevel = logLevel;
      }
    }
    function fill(source, name, replacementFactory) {
      if (!(name in source)) {
        return;
      }
      const original = source[name];
      const wrapped = replacementFactory(original);
      if (typeof wrapped === "function") {
        markFunctionWrapped(wrapped, original);
      }
      source[name] = wrapped;
    }
    function addNonEnumerableProperty(obj, name, value2) {
      try {
        Object.defineProperty(obj, name, {
          // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
          value: value2,
          writable: true,
          configurable: true
        });
      } catch (o_O) {
        DEBUG_BUILD$2 && logger.log(`Failed to add non-enumerable property "${name}" to object`, obj);
      }
    }
    function markFunctionWrapped(wrapped, original) {
      try {
        const proto2 = original.prototype || {};
        wrapped.prototype = original.prototype = proto2;
        addNonEnumerableProperty(wrapped, "__sentry_original__", original);
      } catch (o_O) {
      }
    }
    function getOriginalFunction(func) {
      return func.__sentry_original__;
    }
    function urlEncode(object) {
      return Object.keys(object).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`).join("&");
    }
    function convertToPlainObject(value2) {
      if (isError(value2)) {
        return {
          message: value2.message,
          name: value2.name,
          stack: value2.stack,
          ...getOwnProperties(value2)
        };
      } else if (isEvent(value2)) {
        const newObj = {
          type: value2.type,
          target: serializeEventTarget(value2.target),
          currentTarget: serializeEventTarget(value2.currentTarget),
          ...getOwnProperties(value2)
        };
        if (typeof CustomEvent !== "undefined" && isInstanceOf(value2, CustomEvent)) {
          newObj.detail = value2.detail;
        }
        return newObj;
      } else {
        return value2;
      }
    }
    function serializeEventTarget(target) {
      try {
        return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
      } catch (_oO) {
        return "<unknown>";
      }
    }
    function getOwnProperties(obj) {
      if (typeof obj === "object" && obj !== null) {
        const extractedProps = {};
        for (const property in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, property)) {
            extractedProps[property] = obj[property];
          }
        }
        return extractedProps;
      } else {
        return {};
      }
    }
    function extractExceptionKeysForMessage(exception, maxLength = 40) {
      const keys2 = Object.keys(convertToPlainObject(exception));
      keys2.sort();
      if (!keys2.length) {
        return "[object has no keys]";
      }
      if (keys2[0].length >= maxLength) {
        return truncate(keys2[0], maxLength);
      }
      for (let includedKeys = keys2.length; includedKeys > 0; includedKeys--) {
        const serialized = keys2.slice(0, includedKeys).join(", ");
        if (serialized.length > maxLength) {
          continue;
        }
        if (includedKeys === keys2.length) {
          return serialized;
        }
        return truncate(serialized, maxLength);
      }
      return "";
    }
    function dropUndefinedKeys(inputValue) {
      const memoizationMap = /* @__PURE__ */ new Map();
      return _dropUndefinedKeys(inputValue, memoizationMap);
    }
    function _dropUndefinedKeys(inputValue, memoizationMap) {
      if (isPlainObject(inputValue)) {
        const memoVal = memoizationMap.get(inputValue);
        if (memoVal !== void 0) {
          return memoVal;
        }
        const returnValue = {};
        memoizationMap.set(inputValue, returnValue);
        for (const key of Object.keys(inputValue)) {
          if (typeof inputValue[key] !== "undefined") {
            returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
          }
        }
        return returnValue;
      }
      if (Array.isArray(inputValue)) {
        const memoVal = memoizationMap.get(inputValue);
        if (memoVal !== void 0) {
          return memoVal;
        }
        const returnValue = [];
        memoizationMap.set(inputValue, returnValue);
        inputValue.forEach((item) => {
          returnValue.push(_dropUndefinedKeys(item, memoizationMap));
        });
        return returnValue;
      }
      return inputValue;
    }
    const STACKTRACE_FRAME_LIMIT = 50;
    const WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
    const STRIP_FRAME_REGEXP = /captureMessage|captureException/;
    function createStackParser(...parsers) {
      const sortedParsers = parsers.sort((a2, b2) => a2[0] - b2[0]).map((p2) => p2[1]);
      return (stack, skipFirst = 0) => {
        const frames = [];
        const lines = stack.split("\n");
        for (let i2 = skipFirst; i2 < lines.length; i2++) {
          const line = lines[i2];
          if (line.length > 1024) {
            continue;
          }
          const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
          if (cleanedLine.match(/\S*Error: /)) {
            continue;
          }
          for (const parser2 of sortedParsers) {
            const frame = parser2(cleanedLine);
            if (frame) {
              frames.push(frame);
              break;
            }
          }
          if (frames.length >= STACKTRACE_FRAME_LIMIT) {
            break;
          }
        }
        return stripSentryFramesAndReverse(frames);
      };
    }
    function stackParserFromStackParserOptions(stackParser) {
      if (Array.isArray(stackParser)) {
        return createStackParser(...stackParser);
      }
      return stackParser;
    }
    function stripSentryFramesAndReverse(stack) {
      if (!stack.length) {
        return [];
      }
      const localStack = Array.from(stack);
      if (/sentryWrapped/.test(localStack[localStack.length - 1].function || "")) {
        localStack.pop();
      }
      localStack.reverse();
      if (STRIP_FRAME_REGEXP.test(localStack[localStack.length - 1].function || "")) {
        localStack.pop();
        if (STRIP_FRAME_REGEXP.test(localStack[localStack.length - 1].function || "")) {
          localStack.pop();
        }
      }
      return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => ({
        ...frame,
        filename: frame.filename || localStack[localStack.length - 1].filename,
        function: frame.function || "?"
      }));
    }
    const defaultFunctionName = "<anonymous>";
    function getFunctionName(fn) {
      try {
        if (!fn || typeof fn !== "function") {
          return defaultFunctionName;
        }
        return fn.name || defaultFunctionName;
      } catch (e2) {
        return defaultFunctionName;
      }
    }
    const handlers = {};
    const instrumented = {};
    function addHandler(type, handler) {
      handlers[type] = handlers[type] || [];
      handlers[type].push(handler);
    }
    function maybeInstrument(type, instrumentFn) {
      if (!instrumented[type]) {
        instrumentFn();
        instrumented[type] = true;
      }
    }
    function triggerHandlers(type, data) {
      const typeHandlers = type && handlers[type];
      if (!typeHandlers) {
        return;
      }
      for (const handler of typeHandlers) {
        try {
          handler(data);
        } catch (e2) {
          DEBUG_BUILD$2 && logger.error(
            `Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`,
            e2
          );
        }
      }
    }
    function addConsoleInstrumentationHandler(handler) {
      const type = "console";
      addHandler(type, handler);
      maybeInstrument(type, instrumentConsole);
    }
    function instrumentConsole() {
      if (!("console" in GLOBAL_OBJ)) {
        return;
      }
      CONSOLE_LEVELS.forEach(function(level) {
        if (!(level in GLOBAL_OBJ.console)) {
          return;
        }
        fill(GLOBAL_OBJ.console, level, function(originalConsoleMethod) {
          originalConsoleMethods[level] = originalConsoleMethod;
          return function(...args) {
            const handlerData = { args, level };
            triggerHandlers("console", handlerData);
            const log = originalConsoleMethods[level];
            log && log.apply(GLOBAL_OBJ.console, args);
          };
        });
      });
    }
    function uuid4() {
      const gbl = GLOBAL_OBJ;
      const crypto = gbl.crypto || gbl.msCrypto;
      let getRandomByte = () => Math.random() * 16;
      try {
        if (crypto && crypto.randomUUID) {
          return crypto.randomUUID().replace(/-/g, "");
        }
        if (crypto && crypto.getRandomValues) {
          getRandomByte = () => crypto.getRandomValues(new Uint8Array(1))[0];
        }
      } catch (_2) {
      }
      return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(
        /[018]/g,
        (c2) => (
          // eslint-disable-next-line no-bitwise
          (c2 ^ (getRandomByte() & 15) >> c2 / 4).toString(16)
        )
      );
    }
    function getFirstException(event) {
      return event.exception && event.exception.values ? event.exception.values[0] : void 0;
    }
    function getEventDescription(event) {
      const { message, event_id: eventId } = event;
      if (message) {
        return message;
      }
      const firstException = getFirstException(event);
      if (firstException) {
        if (firstException.type && firstException.value) {
          return `${firstException.type}: ${firstException.value}`;
        }
        return firstException.type || firstException.value || eventId || "<unknown>";
      }
      return eventId || "<unknown>";
    }
    function addExceptionTypeValue(event, value2, type) {
      const exception = event.exception = event.exception || {};
      const values = exception.values = exception.values || [];
      const firstException = values[0] = values[0] || {};
      if (!firstException.value) {
        firstException.value = value2 || "";
      }
      if (!firstException.type) {
        firstException.type = type || "Error";
      }
    }
    function addExceptionMechanism(event, newMechanism) {
      const firstException = getFirstException(event);
      if (!firstException) {
        return;
      }
      const defaultMechanism = { type: "generic", handled: true };
      const currentMechanism = firstException.mechanism;
      firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };
      if (newMechanism && "data" in newMechanism) {
        const mergedData = { ...currentMechanism && currentMechanism.data, ...newMechanism.data };
        firstException.mechanism.data = mergedData;
      }
    }
    function checkOrSetAlreadyCaught(exception) {
      if (exception && exception.__sentry_captured__) {
        return true;
      }
      try {
        addNonEnumerableProperty(exception, "__sentry_captured__", true);
      } catch (err) {
      }
      return false;
    }
    function arrayify(maybeArray) {
      return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
    }
    const WINDOW$6 = GLOBAL_OBJ;
    const DEBOUNCE_DURATION = 1e3;
    let debounceTimerID;
    let lastCapturedEventType;
    let lastCapturedEventTargetId;
    function addClickKeypressInstrumentationHandler(handler) {
      const type = "dom";
      addHandler(type, handler);
      maybeInstrument(type, instrumentDOM);
    }
    function instrumentDOM() {
      if (!WINDOW$6.document) {
        return;
      }
      const triggerDOMHandler = triggerHandlers.bind(null, "dom");
      const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
      WINDOW$6.document.addEventListener("click", globalDOMEventHandler, false);
      WINDOW$6.document.addEventListener("keypress", globalDOMEventHandler, false);
      ["EventTarget", "Node"].forEach((target) => {
        const proto2 = WINDOW$6[target] && WINDOW$6[target].prototype;
        if (!proto2 || !proto2.hasOwnProperty || !proto2.hasOwnProperty("addEventListener")) {
          return;
        }
        fill(proto2, "addEventListener", function(originalAddEventListener) {
          return function(type, listener, options) {
            if (type === "click" || type == "keypress") {
              try {
                const el2 = this;
                const handlers2 = el2.__sentry_instrumentation_handlers__ = el2.__sentry_instrumentation_handlers__ || {};
                const handlerForType = handlers2[type] = handlers2[type] || { refCount: 0 };
                if (!handlerForType.handler) {
                  const handler = makeDOMEventHandler(triggerDOMHandler);
                  handlerForType.handler = handler;
                  originalAddEventListener.call(this, type, handler, options);
                }
                handlerForType.refCount++;
              } catch (e2) {
              }
            }
            return originalAddEventListener.call(this, type, listener, options);
          };
        });
        fill(
          proto2,
          "removeEventListener",
          function(originalRemoveEventListener) {
            return function(type, listener, options) {
              if (type === "click" || type == "keypress") {
                try {
                  const el2 = this;
                  const handlers2 = el2.__sentry_instrumentation_handlers__ || {};
                  const handlerForType = handlers2[type];
                  if (handlerForType) {
                    handlerForType.refCount--;
                    if (handlerForType.refCount <= 0) {
                      originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                      handlerForType.handler = void 0;
                      delete handlers2[type];
                    }
                    if (Object.keys(handlers2).length === 0) {
                      delete el2.__sentry_instrumentation_handlers__;
                    }
                  }
                } catch (e2) {
                }
              }
              return originalRemoveEventListener.call(this, type, listener, options);
            };
          }
        );
      });
    }
    function isSimilarToLastCapturedEvent(event) {
      if (event.type !== lastCapturedEventType) {
        return false;
      }
      try {
        if (!event.target || event.target._sentryId !== lastCapturedEventTargetId) {
          return false;
        }
      } catch (e2) {
      }
      return true;
    }
    function shouldSkipDOMEvent(eventType, target) {
      if (eventType !== "keypress") {
        return false;
      }
      if (!target || !target.tagName) {
        return true;
      }
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        return false;
      }
      return true;
    }
    function makeDOMEventHandler(handler, globalListener = false) {
      return (event) => {
        if (!event || event["_sentryCaptured"]) {
          return;
        }
        const target = getEventTarget(event);
        if (shouldSkipDOMEvent(event.type, target)) {
          return;
        }
        addNonEnumerableProperty(event, "_sentryCaptured", true);
        if (target && !target._sentryId) {
          addNonEnumerableProperty(target, "_sentryId", uuid4());
        }
        const name = event.type === "keypress" ? "input" : event.type;
        if (!isSimilarToLastCapturedEvent(event)) {
          const handlerData = { event, name, global: globalListener };
          handler(handlerData);
          lastCapturedEventType = event.type;
          lastCapturedEventTargetId = target ? target._sentryId : void 0;
        }
        clearTimeout(debounceTimerID);
        debounceTimerID = WINDOW$6.setTimeout(() => {
          lastCapturedEventTargetId = void 0;
          lastCapturedEventType = void 0;
        }, DEBOUNCE_DURATION);
      };
    }
    function getEventTarget(event) {
      try {
        return event.target;
      } catch (e2) {
        return null;
      }
    }
    const WINDOW$5 = getGlobalObject();
    function supportsFetch() {
      if (!("fetch" in WINDOW$5)) {
        return false;
      }
      try {
        new Headers();
        new Request("http://www.example.com");
        new Response();
        return true;
      } catch (e2) {
        return false;
      }
    }
    function isNativeFetch(func) {
      return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
    }
    function supportsNativeFetch() {
      if (typeof EdgeRuntime === "string") {
        return true;
      }
      if (!supportsFetch()) {
        return false;
      }
      if (isNativeFetch(WINDOW$5.fetch)) {
        return true;
      }
      let result = false;
      const doc = WINDOW$5.document;
      if (doc && typeof doc.createElement === "function") {
        try {
          const sandbox = doc.createElement("iframe");
          sandbox.hidden = true;
          doc.head.appendChild(sandbox);
          if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
            result = isNativeFetch(sandbox.contentWindow.fetch);
          }
          doc.head.removeChild(sandbox);
        } catch (err) {
          DEBUG_BUILD$2 && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
        }
      }
      return result;
    }
    function addFetchInstrumentationHandler(handler) {
      const type = "fetch";
      addHandler(type, handler);
      maybeInstrument(type, instrumentFetch);
    }
    function instrumentFetch() {
      if (!supportsNativeFetch()) {
        return;
      }
      fill(GLOBAL_OBJ, "fetch", function(originalFetch) {
        return function(...args) {
          const { method, url: url2 } = parseFetchArgs(args);
          const handlerData = {
            args,
            fetchData: {
              method,
              url: url2
            },
            startTimestamp: Date.now()
          };
          triggerHandlers("fetch", {
            ...handlerData
          });
          return originalFetch.apply(GLOBAL_OBJ, args).then(
            (response) => {
              const finishedHandlerData = {
                ...handlerData,
                endTimestamp: Date.now(),
                response
              };
              triggerHandlers("fetch", finishedHandlerData);
              return response;
            },
            (error) => {
              const erroredHandlerData = {
                ...handlerData,
                endTimestamp: Date.now(),
                error
              };
              triggerHandlers("fetch", erroredHandlerData);
              throw error;
            }
          );
        };
      });
    }
    function hasProp(obj, prop) {
      return !!obj && typeof obj === "object" && !!obj[prop];
    }
    function getUrlFromResource(resource) {
      if (typeof resource === "string") {
        return resource;
      }
      if (!resource) {
        return "";
      }
      if (hasProp(resource, "url")) {
        return resource.url;
      }
      if (resource.toString) {
        return resource.toString();
      }
      return "";
    }
    function parseFetchArgs(fetchArgs) {
      if (fetchArgs.length === 0) {
        return { method: "GET", url: "" };
      }
      if (fetchArgs.length === 2) {
        const [url2, options] = fetchArgs;
        return {
          url: getUrlFromResource(url2),
          method: hasProp(options, "method") ? String(options.method).toUpperCase() : "GET"
        };
      }
      const arg = fetchArgs[0];
      return {
        url: getUrlFromResource(arg),
        method: hasProp(arg, "method") ? String(arg.method).toUpperCase() : "GET"
      };
    }
    let _oldOnErrorHandler = null;
    function addGlobalErrorInstrumentationHandler(handler) {
      const type = "error";
      addHandler(type, handler);
      maybeInstrument(type, instrumentError);
    }
    function instrumentError() {
      _oldOnErrorHandler = GLOBAL_OBJ.onerror;
      GLOBAL_OBJ.onerror = function(msg, url2, line, column, error) {
        const handlerData = {
          column,
          error,
          line,
          msg,
          url: url2
        };
        triggerHandlers("error", handlerData);
        if (_oldOnErrorHandler && !_oldOnErrorHandler.__SENTRY_LOADER__) {
          return _oldOnErrorHandler.apply(this, arguments);
        }
        return false;
      };
      GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
    }
    let _oldOnUnhandledRejectionHandler = null;
    function addGlobalUnhandledRejectionInstrumentationHandler(handler) {
      const type = "unhandledrejection";
      addHandler(type, handler);
      maybeInstrument(type, instrumentUnhandledRejection);
    }
    function instrumentUnhandledRejection() {
      _oldOnUnhandledRejectionHandler = GLOBAL_OBJ.onunhandledrejection;
      GLOBAL_OBJ.onunhandledrejection = function(e2) {
        const handlerData = e2;
        triggerHandlers("unhandledrejection", handlerData);
        if (_oldOnUnhandledRejectionHandler && !_oldOnUnhandledRejectionHandler.__SENTRY_LOADER__) {
          return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        }
        return true;
      };
      GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
    }
    const WINDOW$4 = getGlobalObject();
    function supportsHistory() {
      const chrome2 = WINDOW$4.chrome;
      const isChromePackagedApp = chrome2 && chrome2.app && chrome2.app.runtime;
      const hasHistoryApi = "history" in WINDOW$4 && !!WINDOW$4.history.pushState && !!WINDOW$4.history.replaceState;
      return !isChromePackagedApp && hasHistoryApi;
    }
    const WINDOW$3 = GLOBAL_OBJ;
    let lastHref;
    function addHistoryInstrumentationHandler(handler) {
      const type = "history";
      addHandler(type, handler);
      maybeInstrument(type, instrumentHistory);
    }
    function instrumentHistory() {
      if (!supportsHistory()) {
        return;
      }
      const oldOnPopState = WINDOW$3.onpopstate;
      WINDOW$3.onpopstate = function(...args) {
        const to2 = WINDOW$3.location.href;
        const from2 = lastHref;
        lastHref = to2;
        const handlerData = { from: from2, to: to2 };
        triggerHandlers("history", handlerData);
        if (oldOnPopState) {
          try {
            return oldOnPopState.apply(this, args);
          } catch (_oO) {
          }
        }
      };
      function historyReplacementFunction(originalHistoryFunction) {
        return function(...args) {
          const url2 = args.length > 2 ? args[2] : void 0;
          if (url2) {
            const from2 = lastHref;
            const to2 = String(url2);
            lastHref = to2;
            const handlerData = { from: from2, to: to2 };
            triggerHandlers("history", handlerData);
          }
          return originalHistoryFunction.apply(this, args);
        };
      }
      fill(WINDOW$3.history, "pushState", historyReplacementFunction);
      fill(WINDOW$3.history, "replaceState", historyReplacementFunction);
    }
    const WINDOW$2 = GLOBAL_OBJ;
    const SENTRY_XHR_DATA_KEY = "__sentry_xhr_v3__";
    function addXhrInstrumentationHandler(handler) {
      const type = "xhr";
      addHandler(type, handler);
      maybeInstrument(type, instrumentXHR);
    }
    function instrumentXHR() {
      if (!WINDOW$2.XMLHttpRequest) {
        return;
      }
      const xhrproto = XMLHttpRequest.prototype;
      fill(xhrproto, "open", function(originalOpen) {
        return function(...args) {
          const startTimestamp = Date.now();
          const method = isString$1(args[0]) ? args[0].toUpperCase() : void 0;
          const url2 = parseUrl$1(args[1]);
          if (!method || !url2) {
            return originalOpen.apply(this, args);
          }
          this[SENTRY_XHR_DATA_KEY] = {
            method,
            url: url2,
            request_headers: {}
          };
          if (method === "POST" && url2.match(/sentry_key/)) {
            this.__sentry_own_request__ = true;
          }
          const onreadystatechangeHandler = () => {
            const xhrInfo = this[SENTRY_XHR_DATA_KEY];
            if (!xhrInfo) {
              return;
            }
            if (this.readyState === 4) {
              try {
                xhrInfo.status_code = this.status;
              } catch (e2) {
              }
              const handlerData = {
                args: [method, url2],
                endTimestamp: Date.now(),
                startTimestamp,
                xhr: this
              };
              triggerHandlers("xhr", handlerData);
            }
          };
          if ("onreadystatechange" in this && typeof this.onreadystatechange === "function") {
            fill(this, "onreadystatechange", function(original) {
              return function(...readyStateArgs) {
                onreadystatechangeHandler();
                return original.apply(this, readyStateArgs);
              };
            });
          } else {
            this.addEventListener("readystatechange", onreadystatechangeHandler);
          }
          fill(this, "setRequestHeader", function(original) {
            return function(...setRequestHeaderArgs) {
              const [header, value2] = setRequestHeaderArgs;
              const xhrInfo = this[SENTRY_XHR_DATA_KEY];
              if (xhrInfo && isString$1(header) && isString$1(value2)) {
                xhrInfo.request_headers[header.toLowerCase()] = value2;
              }
              return original.apply(this, setRequestHeaderArgs);
            };
          });
          return originalOpen.apply(this, args);
        };
      });
      fill(xhrproto, "send", function(originalSend) {
        return function(...args) {
          const sentryXhrData = this[SENTRY_XHR_DATA_KEY];
          if (!sentryXhrData) {
            return originalSend.apply(this, args);
          }
          if (args[0] !== void 0) {
            sentryXhrData.body = args[0];
          }
          const handlerData = {
            args: [sentryXhrData.method, sentryXhrData.url],
            startTimestamp: Date.now(),
            xhr: this
          };
          triggerHandlers("xhr", handlerData);
          return originalSend.apply(this, args);
        };
      });
    }
    function parseUrl$1(url2) {
      if (isString$1(url2)) {
        return url2;
      }
      try {
        return url2.toString();
      } catch (e2) {
      }
      return void 0;
    }
    function isBrowserBundle() {
      return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
    }
    function getSDKSource() {
      return "npm";
    }
    function isNodeEnv() {
      return !isBrowserBundle() && Object.prototype.toString.call(typeof { "env": {} } !== "undefined" ? { "env": {} } : 0) === '[object {"env":{}}]';
    }
    function dynamicRequire(mod2, request) {
      return mod2.require(request);
    }
    function memoBuilder() {
      const hasWeakSet = typeof WeakSet === "function";
      const inner = hasWeakSet ? /* @__PURE__ */ new WeakSet() : [];
      function memoize(obj) {
        if (hasWeakSet) {
          if (inner.has(obj)) {
            return true;
          }
          inner.add(obj);
          return false;
        }
        for (let i2 = 0; i2 < inner.length; i2++) {
          const value2 = inner[i2];
          if (value2 === obj) {
            return true;
          }
        }
        inner.push(obj);
        return false;
      }
      function unmemoize(obj) {
        if (hasWeakSet) {
          inner.delete(obj);
        } else {
          for (let i2 = 0; i2 < inner.length; i2++) {
            if (inner[i2] === obj) {
              inner.splice(i2, 1);
              break;
            }
          }
        }
      }
      return [memoize, unmemoize];
    }
    function normalize(input, depth = 100, maxProperties = Infinity) {
      try {
        return visit("", input, depth, maxProperties);
      } catch (err) {
        return { ERROR: `**non-serializable** (${err})` };
      }
    }
    function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
      const normalized = normalize(object, depth);
      if (jsonSize(normalized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
      }
      return normalized;
    }
    function visit(key, value2, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
      const [memoize, unmemoize] = memo;
      if (value2 == null || // this matches null and undefined -> eqeq not eqeqeq
      ["number", "boolean", "string"].includes(typeof value2) && !isNaN$1(value2)) {
        return value2;
      }
      const stringified = stringifyValue(key, value2);
      if (!stringified.startsWith("[object ")) {
        return stringified;
      }
      if (value2["__sentry_skip_normalization__"]) {
        return value2;
      }
      const remainingDepth = typeof value2["__sentry_override_normalization_depth__"] === "number" ? value2["__sentry_override_normalization_depth__"] : depth;
      if (remainingDepth === 0) {
        return stringified.replace("object ", "");
      }
      if (memoize(value2)) {
        return "[Circular ~]";
      }
      const valueWithToJSON = value2;
      if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
        try {
          const jsonValue = valueWithToJSON.toJSON();
          return visit("", jsonValue, remainingDepth - 1, maxProperties, memo);
        } catch (err) {
        }
      }
      const normalized = Array.isArray(value2) ? [] : {};
      let numAdded = 0;
      const visitable = convertToPlainObject(value2);
      for (const visitKey in visitable) {
        if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
          continue;
        }
        if (numAdded >= maxProperties) {
          normalized[visitKey] = "[MaxProperties ~]";
          break;
        }
        const visitValue = visitable[visitKey];
        normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
        numAdded++;
      }
      unmemoize(value2);
      return normalized;
    }
    function stringifyValue(key, value2) {
      try {
        if (key === "domain" && value2 && typeof value2 === "object" && value2._events) {
          return "[Domain]";
        }
        if (key === "domainEmitter") {
          return "[DomainEmitter]";
        }
        if (typeof global !== "undefined" && value2 === global) {
          return "[Global]";
        }
        if (typeof window !== "undefined" && value2 === window) {
          return "[Window]";
        }
        if (typeof document !== "undefined" && value2 === document) {
          return "[Document]";
        }
        if (isVueViewModel(value2)) {
          return "[VueViewModel]";
        }
        if (isSyntheticEvent(value2)) {
          return "[SyntheticEvent]";
        }
        if (typeof value2 === "number" && value2 !== value2) {
          return "[NaN]";
        }
        if (typeof value2 === "function") {
          return `[Function: ${getFunctionName(value2)}]`;
        }
        if (typeof value2 === "symbol") {
          return `[${String(value2)}]`;
        }
        if (typeof value2 === "bigint") {
          return `[BigInt: ${String(value2)}]`;
        }
        const objName = getConstructorName(value2);
        if (/^HTML(\w*)Element$/.test(objName)) {
          return `[HTMLElement: ${objName}]`;
        }
        return `[object ${objName}]`;
      } catch (err) {
        return `**non-serializable** (${err})`;
      }
    }
    function getConstructorName(value2) {
      const prototype = Object.getPrototypeOf(value2);
      return prototype ? prototype.constructor.name : "null prototype";
    }
    function utf8Length$1(value2) {
      return ~-encodeURI(value2).split(/%..|./).length;
    }
    function jsonSize(value2) {
      return utf8Length$1(JSON.stringify(value2));
    }
    var States;
    (function(States2) {
      const PENDING = 0;
      States2[States2["PENDING"] = PENDING] = "PENDING";
      const RESOLVED = 1;
      States2[States2["RESOLVED"] = RESOLVED] = "RESOLVED";
      const REJECTED = 2;
      States2[States2["REJECTED"] = REJECTED] = "REJECTED";
    })(States || (States = {}));
    function resolvedSyncPromise(value2) {
      return new SyncPromise((resolve) => {
        resolve(value2);
      });
    }
    function rejectedSyncPromise(reason) {
      return new SyncPromise((_2, reject) => {
        reject(reason);
      });
    }
    class SyncPromise {
      constructor(executor) {
        SyncPromise.prototype.__init.call(this);
        SyncPromise.prototype.__init2.call(this);
        SyncPromise.prototype.__init3.call(this);
        SyncPromise.prototype.__init4.call(this);
        this._state = States.PENDING;
        this._handlers = [];
        try {
          executor(this._resolve, this._reject);
        } catch (e2) {
          this._reject(e2);
        }
      }
      /** JSDoc */
      then(onfulfilled, onrejected) {
        return new SyncPromise((resolve, reject) => {
          this._handlers.push([
            false,
            (result) => {
              if (!onfulfilled) {
                resolve(result);
              } else {
                try {
                  resolve(onfulfilled(result));
                } catch (e2) {
                  reject(e2);
                }
              }
            },
            (reason) => {
              if (!onrejected) {
                reject(reason);
              } else {
                try {
                  resolve(onrejected(reason));
                } catch (e2) {
                  reject(e2);
                }
              }
            }
          ]);
          this._executeHandlers();
        });
      }
      /** JSDoc */
      catch(onrejected) {
        return this.then((val) => val, onrejected);
      }
      /** JSDoc */
      finally(onfinally) {
        return new SyncPromise((resolve, reject) => {
          let val;
          let isRejected;
          return this.then(
            (value2) => {
              isRejected = false;
              val = value2;
              if (onfinally) {
                onfinally();
              }
            },
            (reason) => {
              isRejected = true;
              val = reason;
              if (onfinally) {
                onfinally();
              }
            }
          ).then(() => {
            if (isRejected) {
              reject(val);
              return;
            }
            resolve(val);
          });
        });
      }
      /** JSDoc */
      __init() {
        this._resolve = (value2) => {
          this._setResult(States.RESOLVED, value2);
        };
      }
      /** JSDoc */
      __init2() {
        this._reject = (reason) => {
          this._setResult(States.REJECTED, reason);
        };
      }
      /** JSDoc */
      __init3() {
        this._setResult = (state, value2) => {
          if (this._state !== States.PENDING) {
            return;
          }
          if (isThenable(value2)) {
            void value2.then(this._resolve, this._reject);
            return;
          }
          this._state = state;
          this._value = value2;
          this._executeHandlers();
        };
      }
      /** JSDoc */
      __init4() {
        this._executeHandlers = () => {
          if (this._state === States.PENDING) {
            return;
          }
          const cachedHandlers = this._handlers.slice();
          this._handlers = [];
          cachedHandlers.forEach((handler) => {
            if (handler[0]) {
              return;
            }
            if (this._state === States.RESOLVED) {
              handler[1](this._value);
            }
            if (this._state === States.REJECTED) {
              handler[2](this._value);
            }
            handler[0] = true;
          });
        };
      }
    }
    function makePromiseBuffer(limit) {
      const buffer = [];
      function isReady() {
        return limit === void 0 || buffer.length < limit;
      }
      function remove(task) {
        return buffer.splice(buffer.indexOf(task), 1)[0];
      }
      function add2(taskProducer) {
        if (!isReady()) {
          return rejectedSyncPromise(new SentryError("Not adding Promise because buffer limit was reached."));
        }
        const task = taskProducer();
        if (buffer.indexOf(task) === -1) {
          buffer.push(task);
        }
        void task.then(() => remove(task)).then(
          null,
          () => remove(task).then(null, () => {
          })
        );
        return task;
      }
      function drain(timeout) {
        return new SyncPromise((resolve, reject) => {
          let counter = buffer.length;
          if (!counter) {
            return resolve(true);
          }
          const capturedSetTimeout = setTimeout(() => {
            if (timeout && timeout > 0) {
              resolve(false);
            }
          }, timeout);
          buffer.forEach((item) => {
            void resolvedSyncPromise(item).then(() => {
              if (!--counter) {
                clearTimeout(capturedSetTimeout);
                resolve(true);
              }
            }, reject);
          });
        });
      }
      return {
        $: buffer,
        add: add2,
        drain
      };
    }
    function parseUrl(url2) {
      if (!url2) {
        return {};
      }
      const match = url2.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
      if (!match) {
        return {};
      }
      const query = match[6] || "";
      const fragment = match[8] || "";
      return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        search: query,
        hash: fragment,
        relative: match[5] + query + fragment
        // everything minus origin
      };
    }
    const validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
    function severityLevelFromString(level) {
      return level === "warn" ? "warning" : validSeverityLevels.includes(level) ? level : "log";
    }
    const WINDOW$1 = getGlobalObject();
    const dateTimestampSource = {
      nowSeconds: () => Date.now() / 1e3
    };
    function getBrowserPerformance() {
      const { performance: performance2 } = WINDOW$1;
      if (!performance2 || !performance2.now) {
        return void 0;
      }
      const timeOrigin = Date.now() - performance2.now();
      return {
        now: () => performance2.now(),
        timeOrigin
      };
    }
    function getNodePerformance() {
      try {
        const perfHooks = dynamicRequire(module, "perf_hooks");
        return perfHooks.performance;
      } catch (_2) {
        return void 0;
      }
    }
    const platformPerformance = isNodeEnv() ? getNodePerformance() : getBrowserPerformance();
    const timestampSource = platformPerformance === void 0 ? dateTimestampSource : {
      nowSeconds: () => (platformPerformance.timeOrigin + platformPerformance.now()) / 1e3
    };
    const dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
    const timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
    (() => {
      const { performance: performance2 } = WINDOW$1;
      if (!performance2 || !performance2.now) {
        return void 0;
      }
      const threshold = 3600 * 1e3;
      const performanceNow = performance2.now();
      const dateNow = Date.now();
      const timeOriginDelta = performance2.timeOrigin ? Math.abs(performance2.timeOrigin + performanceNow - dateNow) : threshold;
      const timeOriginIsReliable = timeOriginDelta < threshold;
      const navigationStart = performance2.timing && performance2.timing.navigationStart;
      const hasNavigationStart = typeof navigationStart === "number";
      const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
      const navigationStartIsReliable = navigationStartDelta < threshold;
      if (timeOriginIsReliable || navigationStartIsReliable) {
        if (timeOriginDelta <= navigationStartDelta) {
          return performance2.timeOrigin;
        } else {
          return navigationStart;
        }
      }
      return dateNow;
    })();
    function createEnvelope(headers, items = []) {
      return [headers, items];
    }
    function addItemToEnvelope(envelope, newItem) {
      const [headers, items] = envelope;
      return [headers, [...items, newItem]];
    }
    function forEachEnvelopeItem(envelope, callback) {
      const envelopeItems = envelope[1];
      for (const envelopeItem of envelopeItems) {
        const envelopeItemType = envelopeItem[0].type;
        const result = callback(envelopeItem, envelopeItemType);
        if (result) {
          return true;
        }
      }
      return false;
    }
    function encodeUTF8(input, textEncoder) {
      const utf8 = textEncoder || new TextEncoder();
      return utf8.encode(input);
    }
    function serializeEnvelope(envelope, textEncoder) {
      const [envHeaders, items] = envelope;
      let parts2 = JSON.stringify(envHeaders);
      function append(next) {
        if (typeof parts2 === "string") {
          parts2 = typeof next === "string" ? parts2 + next : [encodeUTF8(parts2, textEncoder), next];
        } else {
          parts2.push(typeof next === "string" ? encodeUTF8(next, textEncoder) : next);
        }
      }
      for (const item of items) {
        const [itemHeaders, payload] = item;
        append(`
${JSON.stringify(itemHeaders)}
`);
        if (typeof payload === "string" || payload instanceof Uint8Array) {
          append(payload);
        } else {
          let stringifiedPayload;
          try {
            stringifiedPayload = JSON.stringify(payload);
          } catch (e2) {
            stringifiedPayload = JSON.stringify(normalize(payload));
          }
          append(stringifiedPayload);
        }
      }
      return typeof parts2 === "string" ? parts2 : concatBuffers(parts2);
    }
    function concatBuffers(buffers) {
      const totalLength2 = buffers.reduce((acc, buf) => acc + buf.length, 0);
      const merged = new Uint8Array(totalLength2);
      let offset2 = 0;
      for (const buffer of buffers) {
        merged.set(buffer, offset2);
        offset2 += buffer.length;
      }
      return merged;
    }
    function createAttachmentEnvelopeItem(attachment, textEncoder) {
      const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data, textEncoder) : attachment.data;
      return [
        dropUndefinedKeys({
          type: "attachment",
          length: buffer.length,
          filename: attachment.filename,
          content_type: attachment.contentType,
          attachment_type: attachment.attachmentType
        }),
        buffer
      ];
    }
    const ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
      session: "session",
      sessions: "session",
      attachment: "attachment",
      transaction: "transaction",
      event: "error",
      client_report: "internal",
      user_report: "default",
      profile: "profile",
      replay_event: "replay",
      replay_recording: "replay",
      check_in: "monitor",
      feedback: "feedback",
      // TODO: This is a temporary workaround until we have a proper data category for metrics
      statsd: "unknown"
    };
    function envelopeItemTypeToDataCategory(type) {
      return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
    }
    function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
      if (!metadataOrEvent || !metadataOrEvent.sdk) {
        return;
      }
      const { name, version } = metadataOrEvent.sdk;
      return { name, version };
    }
    function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
      const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;
      return {
        event_id: event.event_id,
        sent_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...sdkInfo && { sdk: sdkInfo },
        ...!!tunnel && dsn && { dsn: dsnToString(dsn) },
        ...dynamicSamplingContext && {
          trace: dropUndefinedKeys({ ...dynamicSamplingContext })
        }
      };
    }
    function createClientReportEnvelope(discarded_events, dsn, timestamp) {
      const clientReportItem = [
        { type: "client_report" },
        {
          timestamp: timestamp || dateTimestampInSeconds(),
          discarded_events
        }
      ];
      return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
    }
    const DEFAULT_RETRY_AFTER = 60 * 1e3;
    function parseRetryAfterHeader(header, now2 = Date.now()) {
      const headerDelay = parseInt(`${header}`, 10);
      if (!isNaN(headerDelay)) {
        return headerDelay * 1e3;
      }
      const headerDate = Date.parse(`${header}`);
      if (!isNaN(headerDate)) {
        return headerDate - now2;
      }
      return DEFAULT_RETRY_AFTER;
    }
    function disabledUntil(limits, category) {
      return limits[category] || limits.all || 0;
    }
    function isRateLimited(limits, category, now2 = Date.now()) {
      return disabledUntil(limits, category) > now2;
    }
    function updateRateLimits(limits, { statusCode, headers }, now2 = Date.now()) {
      const updatedRateLimits = {
        ...limits
      };
      const rateLimitHeader = headers && headers["x-sentry-rate-limits"];
      const retryAfterHeader = headers && headers["retry-after"];
      if (rateLimitHeader) {
        for (const limit of rateLimitHeader.trim().split(",")) {
          const [retryAfter, categories] = limit.split(":", 2);
          const headerDelay = parseInt(retryAfter, 10);
          const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
          if (!categories) {
            updatedRateLimits.all = now2 + delay;
          } else {
            for (const category of categories.split(";")) {
              updatedRateLimits[category] = now2 + delay;
            }
          }
        }
      } else if (retryAfterHeader) {
        updatedRateLimits.all = now2 + parseRetryAfterHeader(retryAfterHeader, now2);
      } else if (statusCode === 429) {
        updatedRateLimits.all = now2 + 60 * 1e3;
      }
      return updatedRateLimits;
    }
    const DEBUG_BUILD$1 = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
    const DEFAULT_ENVIRONMENT = "production";
    function getGlobalEventProcessors() {
      return getGlobalSingleton("globalEventProcessors", () => []);
    }
    function addGlobalEventProcessor(callback) {
      getGlobalEventProcessors().push(callback);
    }
    function notifyEventProcessors(processors, event, hint, index2 = 0) {
      return new SyncPromise((resolve, reject) => {
        const processor = processors[index2];
        if (event === null || typeof processor !== "function") {
          resolve(event);
        } else {
          const result = processor({ ...event }, hint);
          DEBUG_BUILD$1 && processor.id && result === null && logger.log(`Event processor "${processor.id}" dropped event`);
          if (isThenable(result)) {
            void result.then((final) => notifyEventProcessors(processors, final, hint, index2 + 1).then(resolve)).then(null, reject);
          } else {
            void notifyEventProcessors(processors, result, hint, index2 + 1).then(resolve).then(null, reject);
          }
        }
      });
    }
    function makeSession(context) {
      const startingTime = timestampInSeconds();
      const session = {
        sid: uuid4(),
        init: true,
        timestamp: startingTime,
        started: startingTime,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: false,
        toJSON: () => sessionToJSON(session)
      };
      if (context) {
        updateSession(session, context);
      }
      return session;
    }
    function updateSession(session, context = {}) {
      if (context.user) {
        if (!session.ipAddress && context.user.ip_address) {
          session.ipAddress = context.user.ip_address;
        }
        if (!session.did && !context.did) {
          session.did = context.user.id || context.user.email || context.user.username;
        }
      }
      session.timestamp = context.timestamp || timestampInSeconds();
      if (context.abnormal_mechanism) {
        session.abnormal_mechanism = context.abnormal_mechanism;
      }
      if (context.ignoreDuration) {
        session.ignoreDuration = context.ignoreDuration;
      }
      if (context.sid) {
        session.sid = context.sid.length === 32 ? context.sid : uuid4();
      }
      if (context.init !== void 0) {
        session.init = context.init;
      }
      if (!session.did && context.did) {
        session.did = `${context.did}`;
      }
      if (typeof context.started === "number") {
        session.started = context.started;
      }
      if (session.ignoreDuration) {
        session.duration = void 0;
      } else if (typeof context.duration === "number") {
        session.duration = context.duration;
      } else {
        const duration = session.timestamp - session.started;
        session.duration = duration >= 0 ? duration : 0;
      }
      if (context.release) {
        session.release = context.release;
      }
      if (context.environment) {
        session.environment = context.environment;
      }
      if (!session.ipAddress && context.ipAddress) {
        session.ipAddress = context.ipAddress;
      }
      if (!session.userAgent && context.userAgent) {
        session.userAgent = context.userAgent;
      }
      if (typeof context.errors === "number") {
        session.errors = context.errors;
      }
      if (context.status) {
        session.status = context.status;
      }
    }
    function closeSession(session, status) {
      let context = {};
      if (status) {
        context = { status };
      } else if (session.status === "ok") {
        context = { status: "exited" };
      }
      updateSession(session, context);
    }
    function sessionToJSON(session) {
      return dropUndefinedKeys({
        sid: `${session.sid}`,
        init: session.init,
        // Make sure that sec is converted to ms for date constructor
        started: new Date(session.started * 1e3).toISOString(),
        timestamp: new Date(session.timestamp * 1e3).toISOString(),
        status: session.status,
        errors: session.errors,
        did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
        duration: session.duration,
        abnormal_mechanism: session.abnormal_mechanism,
        attrs: {
          release: session.release,
          environment: session.environment,
          ip_address: session.ipAddress,
          user_agent: session.userAgent
        }
      });
    }
    const DEFAULT_MAX_BREADCRUMBS = 100;
    class Scope {
      /** Flag if notifying is happening. */
      /** Callback for client to receive scope changes. */
      /** Callback list that will be called after {@link applyToEvent}. */
      /** Array of breadcrumbs. */
      /** User */
      /** Tags */
      /** Extra */
      /** Contexts */
      /** Attachments */
      /** Propagation Context for distributed tracing */
      /**
       * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
       * sent to Sentry
       */
      /** Fingerprint */
      /** Severity */
      // eslint-disable-next-line deprecation/deprecation
      /** Transaction Name */
      /** Span */
      /** Session */
      /** Request Mode Session Status */
      // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
      constructor() {
        this._notifyingListeners = false;
        this._scopeListeners = [];
        this._eventProcessors = [];
        this._breadcrumbs = [];
        this._attachments = [];
        this._user = {};
        this._tags = {};
        this._extra = {};
        this._contexts = {};
        this._sdkProcessingMetadata = {};
        this._propagationContext = generatePropagationContext();
      }
      /**
       * Inherit values from the parent scope.
       * @deprecated Use `scope.clone()` and `new Scope()` instead.
       */
      static clone(scope) {
        return scope ? scope.clone() : new Scope();
      }
      /**
       * Clone this scope instance.
       */
      clone() {
        const newScope = new Scope();
        newScope._breadcrumbs = [...this._breadcrumbs];
        newScope._tags = { ...this._tags };
        newScope._extra = { ...this._extra };
        newScope._contexts = { ...this._contexts };
        newScope._user = this._user;
        newScope._level = this._level;
        newScope._span = this._span;
        newScope._session = this._session;
        newScope._transactionName = this._transactionName;
        newScope._fingerprint = this._fingerprint;
        newScope._eventProcessors = [...this._eventProcessors];
        newScope._requestSession = this._requestSession;
        newScope._attachments = [...this._attachments];
        newScope._sdkProcessingMetadata = { ...this._sdkProcessingMetadata };
        newScope._propagationContext = { ...this._propagationContext };
        return newScope;
      }
      /**
       * Add internal on change listener. Used for sub SDKs that need to store the scope.
       * @hidden
       */
      addScopeListener(callback) {
        this._scopeListeners.push(callback);
      }
      /**
       * @inheritDoc
       */
      addEventProcessor(callback) {
        this._eventProcessors.push(callback);
        return this;
      }
      /**
       * @inheritDoc
       */
      setUser(user) {
        this._user = user || {};
        if (this._session) {
          updateSession(this._session, { user });
        }
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      getUser() {
        return this._user;
      }
      /**
       * @inheritDoc
       */
      getRequestSession() {
        return this._requestSession;
      }
      /**
       * @inheritDoc
       */
      setRequestSession(requestSession) {
        this._requestSession = requestSession;
        return this;
      }
      /**
       * @inheritDoc
       */
      setTags(tags) {
        this._tags = {
          ...this._tags,
          ...tags
        };
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      setTag(key, value2) {
        this._tags = { ...this._tags, [key]: value2 };
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      setExtras(extras) {
        this._extra = {
          ...this._extra,
          ...extras
        };
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      setExtra(key, extra) {
        this._extra = { ...this._extra, [key]: extra };
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      setFingerprint(fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      setLevel(level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      setTransactionName(name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      setContext(key, context) {
        if (context === null) {
          delete this._contexts[key];
        } else {
          this._contexts[key] = context;
        }
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      setSpan(span) {
        this._span = span;
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      getSpan() {
        return this._span;
      }
      /**
       * @inheritDoc
       */
      getTransaction() {
        const span = this.getSpan();
        return span && span.transaction;
      }
      /**
       * @inheritDoc
       */
      setSession(session) {
        if (!session) {
          delete this._session;
        } else {
          this._session = session;
        }
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      getSession() {
        return this._session;
      }
      /**
       * @inheritDoc
       */
      update(captureContext) {
        if (!captureContext) {
          return this;
        }
        if (typeof captureContext === "function") {
          const updatedScope = captureContext(this);
          return updatedScope instanceof Scope ? updatedScope : this;
        }
        if (captureContext instanceof Scope) {
          this._tags = { ...this._tags, ...captureContext._tags };
          this._extra = { ...this._extra, ...captureContext._extra };
          this._contexts = { ...this._contexts, ...captureContext._contexts };
          if (captureContext._user && Object.keys(captureContext._user).length) {
            this._user = captureContext._user;
          }
          if (captureContext._level) {
            this._level = captureContext._level;
          }
          if (captureContext._fingerprint) {
            this._fingerprint = captureContext._fingerprint;
          }
          if (captureContext._requestSession) {
            this._requestSession = captureContext._requestSession;
          }
          if (captureContext._propagationContext) {
            this._propagationContext = captureContext._propagationContext;
          }
        } else if (isPlainObject(captureContext)) {
          captureContext = captureContext;
          this._tags = { ...this._tags, ...captureContext.tags };
          this._extra = { ...this._extra, ...captureContext.extra };
          this._contexts = { ...this._contexts, ...captureContext.contexts };
          if (captureContext.user) {
            this._user = captureContext.user;
          }
          if (captureContext.level) {
            this._level = captureContext.level;
          }
          if (captureContext.fingerprint) {
            this._fingerprint = captureContext.fingerprint;
          }
          if (captureContext.requestSession) {
            this._requestSession = captureContext.requestSession;
          }
          if (captureContext.propagationContext) {
            this._propagationContext = captureContext.propagationContext;
          }
        }
        return this;
      }
      /**
       * @inheritDoc
       */
      clear() {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = void 0;
        this._transactionName = void 0;
        this._fingerprint = void 0;
        this._requestSession = void 0;
        this._span = void 0;
        this._session = void 0;
        this._notifyScopeListeners();
        this._attachments = [];
        this._propagationContext = generatePropagationContext();
        return this;
      }
      /**
       * @inheritDoc
       */
      addBreadcrumb(breadcrumb, maxBreadcrumbs) {
        const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
        if (maxCrumbs <= 0) {
          return this;
        }
        const mergedBreadcrumb = {
          timestamp: dateTimestampInSeconds(),
          ...breadcrumb
        };
        const breadcrumbs = this._breadcrumbs;
        breadcrumbs.push(mergedBreadcrumb);
        this._breadcrumbs = breadcrumbs.length > maxCrumbs ? breadcrumbs.slice(-maxCrumbs) : breadcrumbs;
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
      }
      /**
       * @inheritDoc
       */
      clearBreadcrumbs() {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
      }
      /**
       * @inheritDoc
       */
      addAttachment(attachment) {
        this._attachments.push(attachment);
        return this;
      }
      /**
       * @inheritDoc
       */
      getAttachments() {
        return this._attachments;
      }
      /**
       * @inheritDoc
       */
      clearAttachments() {
        this._attachments = [];
        return this;
      }
      /**
       * Applies data from the scope to the event and runs all event processors on it.
       *
       * @param event Event
       * @param hint Object containing additional information about the original exception, for use by the event processors.
       * @hidden
       */
      applyToEvent(event, hint = {}, additionalEventProcessors) {
        if (this._extra && Object.keys(this._extra).length) {
          event.extra = { ...this._extra, ...event.extra };
        }
        if (this._tags && Object.keys(this._tags).length) {
          event.tags = { ...this._tags, ...event.tags };
        }
        if (this._user && Object.keys(this._user).length) {
          event.user = { ...this._user, ...event.user };
        }
        if (this._contexts && Object.keys(this._contexts).length) {
          event.contexts = { ...this._contexts, ...event.contexts };
        }
        if (this._level) {
          event.level = this._level;
        }
        if (this._transactionName) {
          event.transaction = this._transactionName;
        }
        if (this._span) {
          event.contexts = { trace: this._span.getTraceContext(), ...event.contexts };
          const transaction = this._span.transaction;
          if (transaction) {
            event.sdkProcessingMetadata = {
              dynamicSamplingContext: transaction.getDynamicSamplingContext(),
              ...event.sdkProcessingMetadata
            };
            const transactionName = transaction.name;
            if (transactionName) {
              event.tags = { transaction: transactionName, ...event.tags };
            }
          }
        }
        this._applyFingerprint(event);
        const scopeBreadcrumbs = this._getBreadcrumbs();
        const breadcrumbs = [...event.breadcrumbs || [], ...scopeBreadcrumbs];
        event.breadcrumbs = breadcrumbs.length > 0 ? breadcrumbs : void 0;
        event.sdkProcessingMetadata = {
          ...event.sdkProcessingMetadata,
          ...this._sdkProcessingMetadata,
          propagationContext: this._propagationContext
        };
        return notifyEventProcessors(
          [
            ...additionalEventProcessors || [],
            // eslint-disable-next-line deprecation/deprecation
            ...getGlobalEventProcessors(),
            ...this._eventProcessors
          ],
          event,
          hint
        );
      }
      /**
       * Add data which will be accessible during event processing but won't get sent to Sentry
       */
      setSDKProcessingMetadata(newData) {
        this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...newData };
        return this;
      }
      /**
       * @inheritDoc
       */
      setPropagationContext(context) {
        this._propagationContext = context;
        return this;
      }
      /**
       * @inheritDoc
       */
      getPropagationContext() {
        return this._propagationContext;
      }
      /**
       * Get the breadcrumbs for this scope.
       */
      _getBreadcrumbs() {
        return this._breadcrumbs;
      }
      /**
       * This will be called on every set call.
       */
      _notifyScopeListeners() {
        if (!this._notifyingListeners) {
          this._notifyingListeners = true;
          this._scopeListeners.forEach((callback) => {
            callback(this);
          });
          this._notifyingListeners = false;
        }
      }
      /**
       * Applies fingerprint from the scope to the event if there's one,
       * uses message if there's one instead or get rid of empty fingerprint
       */
      _applyFingerprint(event) {
        event.fingerprint = event.fingerprint ? arrayify(event.fingerprint) : [];
        if (this._fingerprint) {
          event.fingerprint = event.fingerprint.concat(this._fingerprint);
        }
        if (event.fingerprint && !event.fingerprint.length) {
          delete event.fingerprint;
        }
      }
    }
    function generatePropagationContext() {
      return {
        traceId: uuid4(),
        spanId: uuid4().substring(16)
      };
    }
    const SDK_VERSION = "7.88.0";
    const API_VERSION = parseFloat(SDK_VERSION);
    const DEFAULT_BREADCRUMBS = 100;
    class Hub {
      /** Is a {@link Layer}[] containing the client and scope */
      /** Contains the last event id of a captured event.  */
      /**
       * Creates a new instance of the hub, will push one {@link Layer} into the
       * internal stack on creation.
       *
       * @param client bound to the hub.
       * @param scope bound to the hub.
       * @param version number, higher number means higher priority.
       */
      constructor(client2, scope = new Scope(), _version = API_VERSION) {
        this._version = _version;
        this._stack = [{ scope }];
        if (client2) {
          this.bindClient(client2);
        }
      }
      /**
       * @inheritDoc
       */
      isOlderThan(version) {
        return this._version < version;
      }
      /**
       * @inheritDoc
       */
      bindClient(client2) {
        const top = this.getStackTop();
        top.client = client2;
        if (client2 && client2.setupIntegrations) {
          client2.setupIntegrations();
        }
      }
      /**
       * @inheritDoc
       */
      pushScope() {
        const scope = this.getScope().clone();
        this.getStack().push({
          client: this.getClient(),
          scope
        });
        return scope;
      }
      /**
       * @inheritDoc
       */
      popScope() {
        if (this.getStack().length <= 1)
          return false;
        return !!this.getStack().pop();
      }
      /**
       * @inheritDoc
       */
      withScope(callback) {
        const scope = this.pushScope();
        try {
          callback(scope);
        } finally {
          this.popScope();
        }
      }
      /**
       * @inheritDoc
       */
      getClient() {
        return this.getStackTop().client;
      }
      /** Returns the scope of the top stack. */
      getScope() {
        return this.getStackTop().scope;
      }
      /** Returns the scope stack for domains or the {"env":{}}. */
      getStack() {
        return this._stack;
      }
      /** Returns the topmost scope layer in the order domain > local > {"env":{}}. */
      getStackTop() {
        return this._stack[this._stack.length - 1];
      }
      /**
       * @inheritDoc
       */
      captureException(exception, hint) {
        const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
        const syntheticException = new Error("Sentry syntheticException");
        this._withClient((client2, scope) => {
          client2.captureException(
            exception,
            {
              originalException: exception,
              syntheticException,
              ...hint,
              event_id: eventId
            },
            scope
          );
        });
        return eventId;
      }
      /**
       * @inheritDoc
       */
      captureMessage(message, level, hint) {
        const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
        const syntheticException = new Error(message);
        this._withClient((client2, scope) => {
          client2.captureMessage(
            message,
            level,
            {
              originalException: message,
              syntheticException,
              ...hint,
              event_id: eventId
            },
            scope
          );
        });
        return eventId;
      }
      /**
       * @inheritDoc
       */
      captureEvent(event, hint) {
        const eventId = hint && hint.event_id ? hint.event_id : uuid4();
        if (!event.type) {
          this._lastEventId = eventId;
        }
        this._withClient((client2, scope) => {
          client2.captureEvent(event, { ...hint, event_id: eventId }, scope);
        });
        return eventId;
      }
      /**
       * @inheritDoc
       */
      lastEventId() {
        return this._lastEventId;
      }
      /**
       * @inheritDoc
       */
      addBreadcrumb(breadcrumb, hint) {
        const { scope, client: client2 } = this.getStackTop();
        if (!client2)
          return;
        const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client2.getOptions && client2.getOptions() || {};
        if (maxBreadcrumbs <= 0)
          return;
        const timestamp = dateTimestampInSeconds();
        const mergedBreadcrumb = { timestamp, ...breadcrumb };
        const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
        if (finalBreadcrumb === null)
          return;
        if (client2.emit) {
          client2.emit("beforeAddBreadcrumb", finalBreadcrumb, hint);
        }
        scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
      }
      /**
       * @inheritDoc
       */
      setUser(user) {
        this.getScope().setUser(user);
      }
      /**
       * @inheritDoc
       */
      setTags(tags) {
        this.getScope().setTags(tags);
      }
      /**
       * @inheritDoc
       */
      setExtras(extras) {
        this.getScope().setExtras(extras);
      }
      /**
       * @inheritDoc
       */
      setTag(key, value2) {
        this.getScope().setTag(key, value2);
      }
      /**
       * @inheritDoc
       */
      setExtra(key, extra) {
        this.getScope().setExtra(key, extra);
      }
      /**
       * @inheritDoc
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setContext(name, context) {
        this.getScope().setContext(name, context);
      }
      /**
       * @inheritDoc
       */
      configureScope(callback) {
        const { scope, client: client2 } = this.getStackTop();
        if (client2) {
          callback(scope);
        }
      }
      /**
       * @inheritDoc
       */
      run(callback) {
        const oldHub = makeMain(this);
        try {
          callback(this);
        } finally {
          makeMain(oldHub);
        }
      }
      /**
       * @inheritDoc
       */
      getIntegration(integration) {
        const client2 = this.getClient();
        if (!client2)
          return null;
        try {
          return client2.getIntegration(integration);
        } catch (_oO) {
          DEBUG_BUILD$1 && logger.warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
          return null;
        }
      }
      /**
       * @inheritDoc
       */
      startTransaction(context, customSamplingContext) {
        const result = this._callExtensionMethod("startTransaction", context, customSamplingContext);
        if (DEBUG_BUILD$1 && !result) {
          const client2 = this.getClient();
          if (!client2) {
            logger.warn(
              "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
            );
          } else {
            logger.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`);
          }
        }
        return result;
      }
      /**
       * @inheritDoc
       */
      traceHeaders() {
        return this._callExtensionMethod("traceHeaders");
      }
      /**
       * @inheritDoc
       */
      captureSession(endSession = false) {
        if (endSession) {
          return this.endSession();
        }
        this._sendSessionUpdate();
      }
      /**
       * @inheritDoc
       */
      endSession() {
        const layer = this.getStackTop();
        const scope = layer.scope;
        const session = scope.getSession();
        if (session) {
          closeSession(session);
        }
        this._sendSessionUpdate();
        scope.setSession();
      }
      /**
       * @inheritDoc
       */
      startSession(context) {
        const { scope, client: client2 } = this.getStackTop();
        const { release, environment: environment2 = DEFAULT_ENVIRONMENT } = client2 && client2.getOptions() || {};
        const { userAgent } = GLOBAL_OBJ.navigator || {};
        const session = makeSession({
          release,
          environment: environment2,
          user: scope.getUser(),
          ...userAgent && { userAgent },
          ...context
        });
        const currentSession = scope.getSession && scope.getSession();
        if (currentSession && currentSession.status === "ok") {
          updateSession(currentSession, { status: "exited" });
        }
        this.endSession();
        scope.setSession(session);
        return session;
      }
      /**
       * Returns if default PII should be sent to Sentry and propagated in ourgoing requests
       * when Tracing is used.
       */
      shouldSendDefaultPii() {
        const client2 = this.getClient();
        const options = client2 && client2.getOptions();
        return Boolean(options && options.sendDefaultPii);
      }
      /**
       * Sends the current Session on the scope
       */
      _sendSessionUpdate() {
        const { scope, client: client2 } = this.getStackTop();
        const session = scope.getSession();
        if (session && client2 && client2.captureSession) {
          client2.captureSession(session);
        }
      }
      /**
       * Internal helper function to call a method on the top client if it exists.
       *
       * @param method The method to call on the client.
       * @param args Arguments to pass to the client function.
       */
      _withClient(callback) {
        const { scope, client: client2 } = this.getStackTop();
        if (client2) {
          callback(client2, scope);
        }
      }
      /**
       * Calls global extension method and binding current instance to the function call
       */
      // @ts-expect-error Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      _callExtensionMethod(method, ...args) {
        const carrier = getMainCarrier();
        const sentry = carrier.__SENTRY__;
        if (sentry && sentry.extensions && typeof sentry.extensions[method] === "function") {
          return sentry.extensions[method].apply(this, args);
        }
        DEBUG_BUILD$1 && logger.warn(`Extension method ${method} couldn't be found, doing nothing.`);
      }
    }
    function getMainCarrier() {
      GLOBAL_OBJ.__SENTRY__ = GLOBAL_OBJ.__SENTRY__ || {
        extensions: {},
        hub: void 0
      };
      return GLOBAL_OBJ;
    }
    function makeMain(hub) {
      const registry = getMainCarrier();
      const oldHub = getHubFromCarrier(registry);
      setHubOnCarrier(registry, hub);
      return oldHub;
    }
    function getCurrentHub() {
      const registry = getMainCarrier();
      if (registry.__SENTRY__ && registry.__SENTRY__.acs) {
        const hub = registry.__SENTRY__.acs.getCurrentHub();
        if (hub) {
          return hub;
        }
      }
      return getGlobalHub(registry);
    }
    function getGlobalHub(registry = getMainCarrier()) {
      if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
        setHubOnCarrier(registry, new Hub());
      }
      return getHubFromCarrier(registry);
    }
    function hasHubOnCarrier(carrier) {
      return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
    }
    function getHubFromCarrier(carrier) {
      return getGlobalSingleton("hub", () => new Hub(), carrier);
    }
    function setHubOnCarrier(carrier, hub) {
      if (!carrier)
        return false;
      const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
      __SENTRY__.hub = hub;
      return true;
    }
    function getDynamicSamplingContextFromClient(trace_id, client2, scope) {
      const options = client2.getOptions();
      const { publicKey: public_key } = client2.getDsn() || {};
      const { segment: user_segment } = scope && scope.getUser() || {};
      const dsc = dropUndefinedKeys({
        environment: options.environment || DEFAULT_ENVIRONMENT,
        release: options.release,
        user_segment,
        public_key,
        trace_id
      });
      client2.emit && client2.emit("createDsc", dsc);
      return dsc;
    }
    function prepareEvent(options, event, hint, scope, client2) {
      const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
      const prepared = {
        ...event,
        event_id: event.event_id || hint.event_id || uuid4(),
        timestamp: event.timestamp || dateTimestampInSeconds()
      };
      const integrations = hint.integrations || options.integrations.map((i2) => i2.name);
      applyClientOptions(prepared, options);
      applyIntegrationsMetadata(prepared, integrations);
      if (event.type === void 0) {
        applyDebugIds(prepared, options.stackParser);
      }
      const finalScope = getFinalScope(scope, hint.captureContext);
      if (hint.mechanism) {
        addExceptionMechanism(prepared, hint.mechanism);
      }
      let result = resolvedSyncPromise(prepared);
      const clientEventProcessors = client2 && client2.getEventProcessors ? client2.getEventProcessors() : [];
      if (finalScope) {
        if (finalScope.getAttachments) {
          const attachments = [...hint.attachments || [], ...finalScope.getAttachments()];
          if (attachments.length) {
            hint.attachments = attachments;
          }
        }
        result = finalScope.applyToEvent(prepared, hint, clientEventProcessors);
      } else {
        result = notifyEventProcessors(
          [
            ...clientEventProcessors,
            // eslint-disable-next-line deprecation/deprecation
            ...getGlobalEventProcessors()
          ],
          prepared,
          hint
        );
      }
      return result.then((evt) => {
        if (evt) {
          applyDebugMeta(evt);
        }
        if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
          return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
        }
        return evt;
      });
    }
    function applyClientOptions(event, options) {
      const { environment: environment2, release, dist, maxValueLength = 250 } = options;
      if (!("environment" in event)) {
        event.environment = "environment" in options ? environment2 : DEFAULT_ENVIRONMENT;
      }
      if (event.release === void 0 && release !== void 0) {
        event.release = release;
      }
      if (event.dist === void 0 && dist !== void 0) {
        event.dist = dist;
      }
      if (event.message) {
        event.message = truncate(event.message, maxValueLength);
      }
      const exception = event.exception && event.exception.values && event.exception.values[0];
      if (exception && exception.value) {
        exception.value = truncate(exception.value, maxValueLength);
      }
      const request = event.request;
      if (request && request.url) {
        request.url = truncate(request.url, maxValueLength);
      }
    }
    const debugIdStackParserCache = /* @__PURE__ */ new WeakMap();
    function applyDebugIds(event, stackParser) {
      const debugIdMap = GLOBAL_OBJ._sentryDebugIds;
      if (!debugIdMap) {
        return;
      }
      let debugIdStackFramesCache;
      const cachedDebugIdStackFrameCache = debugIdStackParserCache.get(stackParser);
      if (cachedDebugIdStackFrameCache) {
        debugIdStackFramesCache = cachedDebugIdStackFrameCache;
      } else {
        debugIdStackFramesCache = /* @__PURE__ */ new Map();
        debugIdStackParserCache.set(stackParser, debugIdStackFramesCache);
      }
      const filenameDebugIdMap = Object.keys(debugIdMap).reduce((acc, debugIdStackTrace) => {
        let parsedStack;
        const cachedParsedStack = debugIdStackFramesCache.get(debugIdStackTrace);
        if (cachedParsedStack) {
          parsedStack = cachedParsedStack;
        } else {
          parsedStack = stackParser(debugIdStackTrace);
          debugIdStackFramesCache.set(debugIdStackTrace, parsedStack);
        }
        for (let i2 = parsedStack.length - 1; i2 >= 0; i2--) {
          const stackFrame = parsedStack[i2];
          if (stackFrame.filename) {
            acc[stackFrame.filename] = debugIdMap[debugIdStackTrace];
            break;
          }
        }
        return acc;
      }, {});
      try {
        event.exception.values.forEach((exception) => {
          exception.stacktrace.frames.forEach((frame) => {
            if (frame.filename) {
              frame.debug_id = filenameDebugIdMap[frame.filename];
            }
          });
        });
      } catch (e2) {
      }
    }
    function applyDebugMeta(event) {
      const filenameDebugIdMap = {};
      try {
        event.exception.values.forEach((exception) => {
          exception.stacktrace.frames.forEach((frame) => {
            if (frame.debug_id) {
              if (frame.abs_path) {
                filenameDebugIdMap[frame.abs_path] = frame.debug_id;
              } else if (frame.filename) {
                filenameDebugIdMap[frame.filename] = frame.debug_id;
              }
              delete frame.debug_id;
            }
          });
        });
      } catch (e2) {
      }
      if (Object.keys(filenameDebugIdMap).length === 0) {
        return;
      }
      event.debug_meta = event.debug_meta || {};
      event.debug_meta.images = event.debug_meta.images || [];
      const images = event.debug_meta.images;
      Object.keys(filenameDebugIdMap).forEach((filename) => {
        images.push({
          type: "sourcemap",
          code_file: filename,
          debug_id: filenameDebugIdMap[filename]
        });
      });
    }
    function applyIntegrationsMetadata(event, integrationNames) {
      if (integrationNames.length > 0) {
        event.sdk = event.sdk || {};
        event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
      }
    }
    function normalizeEvent(event, depth, maxBreadth) {
      if (!event) {
        return null;
      }
      const normalized = {
        ...event,
        ...event.breadcrumbs && {
          breadcrumbs: event.breadcrumbs.map((b2) => ({
            ...b2,
            ...b2.data && {
              data: normalize(b2.data, depth, maxBreadth)
            }
          }))
        },
        ...event.user && {
          user: normalize(event.user, depth, maxBreadth)
        },
        ...event.contexts && {
          contexts: normalize(event.contexts, depth, maxBreadth)
        },
        ...event.extra && {
          extra: normalize(event.extra, depth, maxBreadth)
        }
      };
      if (event.contexts && event.contexts.trace && normalized.contexts) {
        normalized.contexts.trace = event.contexts.trace;
        if (event.contexts.trace.data) {
          normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
        }
      }
      if (event.spans) {
        normalized.spans = event.spans.map((span) => {
          if (span.data) {
            span.data = normalize(span.data, depth, maxBreadth);
          }
          return span;
        });
      }
      return normalized;
    }
    function getFinalScope(scope, captureContext) {
      if (!captureContext) {
        return scope;
      }
      const finalScope = scope ? scope.clone() : new Scope();
      finalScope.update(captureContext);
      return finalScope;
    }
    function parseEventHintOrCaptureContext(hint) {
      if (!hint) {
        return void 0;
      }
      if (hintIsScopeOrFunction(hint)) {
        return { captureContext: hint };
      }
      if (hintIsScopeContext(hint)) {
        return {
          captureContext: hint
        };
      }
      return hint;
    }
    function hintIsScopeOrFunction(hint) {
      return hint instanceof Scope || typeof hint === "function";
    }
    const captureContextKeys = [
      "user",
      "level",
      "extra",
      "contexts",
      "tags",
      "fingerprint",
      "requestSession",
      "propagationContext"
    ];
    function hintIsScopeContext(hint) {
      return Object.keys(hint).some((key) => captureContextKeys.includes(key));
    }
    function captureException(exception, hint) {
      return getCurrentHub().captureException(exception, parseEventHintOrCaptureContext(hint));
    }
    function withScope(callback) {
      getCurrentHub().withScope(callback);
    }
    function getClient() {
      return getCurrentHub().getClient();
    }
    function enhanceEventWithSdkInfo(event, sdkInfo) {
      if (!sdkInfo) {
        return event;
      }
      event.sdk = event.sdk || {};
      event.sdk.name = event.sdk.name || sdkInfo.name;
      event.sdk.version = event.sdk.version || sdkInfo.version;
      event.sdk.integrations = [...event.sdk.integrations || [], ...sdkInfo.integrations || []];
      event.sdk.packages = [...event.sdk.packages || [], ...sdkInfo.packages || []];
      return event;
    }
    function createSessionEnvelope(session, dsn, metadata, tunnel) {
      const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
      const envelopeHeaders = {
        sent_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...sdkInfo && { sdk: sdkInfo },
        ...!!tunnel && dsn && { dsn: dsnToString(dsn) }
      };
      const envelopeItem = "aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session.toJSON()];
      return createEnvelope(envelopeHeaders, [envelopeItem]);
    }
    function createEventEnvelope(event, dsn, metadata, tunnel) {
      const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
      const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
      enhanceEventWithSdkInfo(event, metadata && metadata.sdk);
      const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
      delete event.sdkProcessingMetadata;
      const eventItem = [{ type: eventType }, event];
      return createEnvelope(envelopeHeaders, [eventItem]);
    }
    const SENTRY_API_VERSION = "7";
    function getBaseApiEndpoint(dsn) {
      const protocol2 = dsn.protocol ? `${dsn.protocol}:` : "";
      const port = dsn.port ? `:${dsn.port}` : "";
      return `${protocol2}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
    }
    function _getIngestEndpoint(dsn) {
      return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
    }
    function _encodedAuth(dsn, sdkInfo) {
      return urlEncode({
        // We send only the minimum set of required information. See
        // https://github.com/getsentry/sentry-javascript/issues/2572.
        sentry_key: dsn.publicKey,
        sentry_version: SENTRY_API_VERSION,
        ...sdkInfo && { sentry_client: `${sdkInfo.name}/${sdkInfo.version}` }
      });
    }
    function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnelOrOptions = {}) {
      const tunnel = typeof tunnelOrOptions === "string" ? tunnelOrOptions : tunnelOrOptions.tunnel;
      const sdkInfo = typeof tunnelOrOptions === "string" || !tunnelOrOptions._metadata ? void 0 : tunnelOrOptions._metadata.sdk;
      return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
    }
    const installedIntegrations = [];
    function filterDuplicates(integrations) {
      const integrationsByName = {};
      integrations.forEach((currentInstance) => {
        const { name } = currentInstance;
        const existingInstance = integrationsByName[name];
        if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
          return;
        }
        integrationsByName[name] = currentInstance;
      });
      return Object.keys(integrationsByName).map((k2) => integrationsByName[k2]);
    }
    function getIntegrationsToSetup(options) {
      const defaultIntegrations2 = options.defaultIntegrations || [];
      const userIntegrations = options.integrations;
      defaultIntegrations2.forEach((integration) => {
        integration.isDefaultInstance = true;
      });
      let integrations;
      if (Array.isArray(userIntegrations)) {
        integrations = [...defaultIntegrations2, ...userIntegrations];
      } else if (typeof userIntegrations === "function") {
        integrations = arrayify(userIntegrations(defaultIntegrations2));
      } else {
        integrations = defaultIntegrations2;
      }
      const finalIntegrations = filterDuplicates(integrations);
      const debugIndex = findIndex(finalIntegrations, (integration) => integration.name === "Debug");
      if (debugIndex !== -1) {
        const [debugInstance] = finalIntegrations.splice(debugIndex, 1);
        finalIntegrations.push(debugInstance);
      }
      return finalIntegrations;
    }
    function setupIntegrations(client2, integrations) {
      const integrationIndex = {};
      integrations.forEach((integration) => {
        if (integration) {
          setupIntegration(client2, integration, integrationIndex);
        }
      });
      return integrationIndex;
    }
    function setupIntegration(client2, integration, integrationIndex) {
      integrationIndex[integration.name] = integration;
      if (installedIntegrations.indexOf(integration.name) === -1) {
        integration.setupOnce(addGlobalEventProcessor, getCurrentHub);
        installedIntegrations.push(integration.name);
      }
      if (integration.setup && typeof integration.setup === "function") {
        integration.setup(client2);
      }
      if (client2.on && typeof integration.preprocessEvent === "function") {
        const callback = integration.preprocessEvent.bind(integration);
        client2.on("preprocessEvent", (event, hint) => callback(event, hint, client2));
      }
      if (client2.addEventProcessor && typeof integration.processEvent === "function") {
        const callback = integration.processEvent.bind(integration);
        const processor = Object.assign((event, hint) => callback(event, hint, client2), {
          id: integration.name
        });
        client2.addEventProcessor(processor);
      }
      DEBUG_BUILD$1 && logger.log(`Integration installed: ${integration.name}`);
    }
    function findIndex(arr, callback) {
      for (let i2 = 0; i2 < arr.length; i2++) {
        if (callback(arr[i2]) === true) {
          return i2;
        }
      }
      return -1;
    }
    function serializeMetricBuckets(metricBucketItems) {
      let out = "";
      for (const [metric, timestamp, metricType, name, unit, tags] of metricBucketItems) {
        const maybeTags = Object.keys(tags).length ? `|#${Object.entries(tags).map(([key, value2]) => `${key}:${String(value2)}`).join(",")}` : "";
        out += `${name}@${unit}:${metric}|${metricType}${maybeTags}|T${timestamp}
`;
      }
      return out;
    }
    function createMetricEnvelope(metricBucketItems, dsn, metadata, tunnel) {
      const headers = {
        sent_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      if (metadata && metadata.sdk) {
        headers.sdk = {
          name: metadata.sdk.name,
          version: metadata.sdk.version
        };
      }
      if (!!tunnel && dsn) {
        headers.dsn = dsnToString(dsn);
      }
      const item = createMetricEnvelopeItem(metricBucketItems);
      return createEnvelope(headers, [item]);
    }
    function createMetricEnvelopeItem(metricBucketItems) {
      const payload = serializeMetricBuckets(metricBucketItems);
      const metricHeaders = {
        type: "statsd",
        length: payload.length
      };
      return [metricHeaders, payload];
    }
    const ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
    class BaseClient {
      /**
       * A reference to a metrics aggregator
       *
       * @experimental Note this is alpha API. It may experience breaking changes in the future.
       */
      /** Options passed to the SDK. */
      /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */
      /** Array of set up integrations. */
      /** Indicates whether this client's integrations have been set up. */
      /** Number of calls being processed */
      /** Holds flushable  */
      // eslint-disable-next-line @typescript-eslint/ban-types
      /**
       * Initializes this client instance.
       *
       * @param options Options for the client.
       */
      constructor(options) {
        this._options = options;
        this._integrations = {};
        this._integrationsInitialized = false;
        this._numProcessing = 0;
        this._outcomes = {};
        this._hooks = {};
        this._eventProcessors = [];
        if (options.dsn) {
          this._dsn = makeDsn(options.dsn);
        } else {
          DEBUG_BUILD$1 && logger.warn("No DSN provided, client will not send events.");
        }
        if (this._dsn) {
          const url2 = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options);
          this._transport = options.transport({
            recordDroppedEvent: this.recordDroppedEvent.bind(this),
            ...options.transportOptions,
            url: url2
          });
        }
      }
      /**
       * @inheritDoc
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
      captureException(exception, hint, scope) {
        if (checkOrSetAlreadyCaught(exception)) {
          DEBUG_BUILD$1 && logger.log(ALREADY_SEEN_ERROR);
          return;
        }
        let eventId = hint && hint.event_id;
        this._process(
          this.eventFromException(exception, hint).then((event) => this._captureEvent(event, hint, scope)).then((result) => {
            eventId = result;
          })
        );
        return eventId;
      }
      /**
       * @inheritDoc
       */
      captureMessage(message, level, hint, scope) {
        let eventId = hint && hint.event_id;
        const promisedEvent = isPrimitive(message) ? this.eventFromMessage(String(message), level, hint) : this.eventFromException(message, hint);
        this._process(
          promisedEvent.then((event) => this._captureEvent(event, hint, scope)).then((result) => {
            eventId = result;
          })
        );
        return eventId;
      }
      /**
       * @inheritDoc
       */
      captureEvent(event, hint, scope) {
        if (hint && hint.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
          DEBUG_BUILD$1 && logger.log(ALREADY_SEEN_ERROR);
          return;
        }
        let eventId = hint && hint.event_id;
        this._process(
          this._captureEvent(event, hint, scope).then((result) => {
            eventId = result;
          })
        );
        return eventId;
      }
      /**
       * @inheritDoc
       */
      captureSession(session) {
        if (!(typeof session.release === "string")) {
          DEBUG_BUILD$1 && logger.warn("Discarded session because of missing or non-string release");
        } else {
          this.sendSession(session);
          updateSession(session, { init: false });
        }
      }
      /**
       * @inheritDoc
       */
      getDsn() {
        return this._dsn;
      }
      /**
       * @inheritDoc
       */
      getOptions() {
        return this._options;
      }
      /**
       * @see SdkMetadata in @sentry/types
       *
       * @return The metadata of the SDK
       */
      getSdkMetadata() {
        return this._options._metadata;
      }
      /**
       * @inheritDoc
       */
      getTransport() {
        return this._transport;
      }
      /**
       * @inheritDoc
       */
      flush(timeout) {
        const transport = this._transport;
        if (transport) {
          if (this.metricsAggregator) {
            this.metricsAggregator.flush();
          }
          return this._isClientDoneProcessing(timeout).then((clientFinished) => {
            return transport.flush(timeout).then((transportFlushed) => clientFinished && transportFlushed);
          });
        } else {
          return resolvedSyncPromise(true);
        }
      }
      /**
       * @inheritDoc
       */
      close(timeout) {
        return this.flush(timeout).then((result) => {
          this.getOptions().enabled = false;
          if (this.metricsAggregator) {
            this.metricsAggregator.close();
          }
          return result;
        });
      }
      /** Get all installed event processors. */
      getEventProcessors() {
        return this._eventProcessors;
      }
      /** @inheritDoc */
      addEventProcessor(eventProcessor) {
        this._eventProcessors.push(eventProcessor);
      }
      /**
       * Sets up the integrations
       */
      setupIntegrations(forceInitialize) {
        if (forceInitialize && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) {
          this._integrations = setupIntegrations(this, this._options.integrations);
          this._integrationsInitialized = true;
        }
      }
      /**
       * Gets an installed integration by its `id`.
       *
       * @returns The installed integration or `undefined` if no integration with that `id` was installed.
       */
      getIntegrationById(integrationId) {
        return this._integrations[integrationId];
      }
      /**
       * @inheritDoc
       */
      getIntegration(integration) {
        try {
          return this._integrations[integration.id] || null;
        } catch (_oO) {
          DEBUG_BUILD$1 && logger.warn(`Cannot retrieve integration ${integration.id} from the current Client`);
          return null;
        }
      }
      /**
       * @inheritDoc
       */
      addIntegration(integration) {
        setupIntegration(this, integration, this._integrations);
      }
      /**
       * @inheritDoc
       */
      sendEvent(event, hint = {}) {
        this.emit("beforeSendEvent", event, hint);
        let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
        for (const attachment of hint.attachments || []) {
          env = addItemToEnvelope(
            env,
            createAttachmentEnvelopeItem(
              attachment,
              this._options.transportOptions && this._options.transportOptions.textEncoder
            )
          );
        }
        const promise = this._sendEnvelope(env);
        if (promise) {
          promise.then((sendResponse) => this.emit("afterSendEvent", event, sendResponse), null);
        }
      }
      /**
       * @inheritDoc
       */
      sendSession(session) {
        const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
        void this._sendEnvelope(env);
      }
      /**
       * @inheritDoc
       */
      recordDroppedEvent(reason, category, _event) {
        if (this._options.sendClientReports) {
          const key = `${reason}:${category}`;
          DEBUG_BUILD$1 && logger.log(`Adding outcome: "${key}"`);
          this._outcomes[key] = this._outcomes[key] + 1 || 1;
        }
      }
      /**
       * @inheritDoc
       */
      captureAggregateMetrics(metricBucketItems) {
        const metricsEnvelope = createMetricEnvelope(
          metricBucketItems,
          this._dsn,
          this._options._metadata,
          this._options.tunnel
        );
        void this._sendEnvelope(metricsEnvelope);
      }
      // Keep on() & emit() signatures in sync with types' client.ts interface
      /* eslint-disable @typescript-eslint/unified-signatures */
      /** @inheritdoc */
      /** @inheritdoc */
      on(hook, callback) {
        if (!this._hooks[hook]) {
          this._hooks[hook] = [];
        }
        this._hooks[hook].push(callback);
      }
      /** @inheritdoc */
      /** @inheritdoc */
      emit(hook, ...rest) {
        if (this._hooks[hook]) {
          this._hooks[hook].forEach((callback) => callback(...rest));
        }
      }
      /* eslint-enable @typescript-eslint/unified-signatures */
      /** Updates existing session based on the provided event */
      _updateSessionFromEvent(session, event) {
        let crashed = false;
        let errored = false;
        const exceptions = event.exception && event.exception.values;
        if (exceptions) {
          errored = true;
          for (const ex of exceptions) {
            const mechanism = ex.mechanism;
            if (mechanism && mechanism.handled === false) {
              crashed = true;
              break;
            }
          }
        }
        const sessionNonTerminal = session.status === "ok";
        const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
        if (shouldUpdateAndSend) {
          updateSession(session, {
            ...crashed && { status: "crashed" },
            errors: session.errors || Number(errored || crashed)
          });
          this.captureSession(session);
        }
      }
      /**
       * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
       * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
       *
       * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
       * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
       * `true`.
       * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
       * `false` otherwise
       */
      _isClientDoneProcessing(timeout) {
        return new SyncPromise((resolve) => {
          let ticked = 0;
          const tick = 1;
          const interval = setInterval(() => {
            if (this._numProcessing == 0) {
              clearInterval(interval);
              resolve(true);
            } else {
              ticked += tick;
              if (timeout && ticked >= timeout) {
                clearInterval(interval);
                resolve(false);
              }
            }
          }, tick);
        });
      }
      /** Determines whether this SDK is enabled and a transport is present. */
      _isEnabled() {
        return this.getOptions().enabled !== false && this._transport !== void 0;
      }
      /**
       * Adds common information to events.
       *
       * The information includes release and environment from `options`,
       * breadcrumbs and context (extra, tags and user) from the scope.
       *
       * Information that is already present in the event is never overwritten. For
       * nested objects, such as the context, keys are merged.
       *
       * @param event The original event.
       * @param hint May contain additional information about the original exception.
       * @param scope A scope containing event metadata.
       * @returns A new event with more information.
       */
      _prepareEvent(event, hint, scope) {
        const options = this.getOptions();
        const integrations = Object.keys(this._integrations);
        if (!hint.integrations && integrations.length > 0) {
          hint.integrations = integrations;
        }
        this.emit("preprocessEvent", event, hint);
        return prepareEvent(options, event, hint, scope, this).then((evt) => {
          if (evt === null) {
            return evt;
          }
          const { propagationContext } = evt.sdkProcessingMetadata || {};
          const trace = evt.contexts && evt.contexts.trace;
          if (!trace && propagationContext) {
            const { traceId: trace_id, spanId, parentSpanId, dsc } = propagationContext;
            evt.contexts = {
              trace: {
                trace_id,
                span_id: spanId,
                parent_span_id: parentSpanId
              },
              ...evt.contexts
            };
            const dynamicSamplingContext = dsc ? dsc : getDynamicSamplingContextFromClient(trace_id, this, scope);
            evt.sdkProcessingMetadata = {
              dynamicSamplingContext,
              ...evt.sdkProcessingMetadata
            };
          }
          return evt;
        });
      }
      /**
       * Processes the event and logs an error in case of rejection
       * @param event
       * @param hint
       * @param scope
       */
      _captureEvent(event, hint = {}, scope) {
        return this._processEvent(event, hint, scope).then(
          (finalEvent) => {
            return finalEvent.event_id;
          },
          (reason) => {
            if (DEBUG_BUILD$1) {
              const sentryError = reason;
              if (sentryError.logLevel === "log") {
                logger.log(sentryError.message);
              } else {
                logger.warn(sentryError);
              }
            }
            return void 0;
          }
        );
      }
      /**
       * Processes an event (either error or message) and sends it to Sentry.
       *
       * This also adds breadcrumbs and context information to the event. However,
       * platform specific meta data (such as the User's IP address) must be added
       * by the SDK implementor.
       *
       *
       * @param event The event to send to Sentry.
       * @param hint May contain additional information about the original exception.
       * @param scope A scope containing event metadata.
       * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
       */
      _processEvent(event, hint, scope) {
        const options = this.getOptions();
        const { sampleRate } = options;
        const isTransaction = isTransactionEvent(event);
        const isError2 = isErrorEvent(event);
        const eventType = event.type || "error";
        const beforeSendLabel = `before send for type \`${eventType}\``;
        if (isError2 && typeof sampleRate === "number" && Math.random() > sampleRate) {
          this.recordDroppedEvent("sample_rate", "error", event);
          return rejectedSyncPromise(
            new SentryError(
              `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`,
              "log"
            )
          );
        }
        const dataCategory = eventType === "replay_event" ? "replay" : eventType;
        return this._prepareEvent(event, hint, scope).then((prepared) => {
          if (prepared === null) {
            this.recordDroppedEvent("event_processor", dataCategory, event);
            throw new SentryError("An event processor returned `null`, will not send event.", "log");
          }
          const isInternalException = hint.data && hint.data.__sentry__ === true;
          if (isInternalException) {
            return prepared;
          }
          const result = processBeforeSend(options, prepared, hint);
          return _validateBeforeSendResult(result, beforeSendLabel);
        }).then((processedEvent) => {
          if (processedEvent === null) {
            this.recordDroppedEvent("before_send", dataCategory, event);
            throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, "log");
          }
          const session = scope && scope.getSession();
          if (!isTransaction && session) {
            this._updateSessionFromEvent(session, processedEvent);
          }
          const transactionInfo = processedEvent.transaction_info;
          if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
            const source = "custom";
            processedEvent.transaction_info = {
              ...transactionInfo,
              source
            };
          }
          this.sendEvent(processedEvent, hint);
          return processedEvent;
        }).then(null, (reason) => {
          if (reason instanceof SentryError) {
            throw reason;
          }
          this.captureException(reason, {
            data: {
              __sentry__: true
            },
            originalException: reason
          });
          throw new SentryError(
            `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${reason}`
          );
        });
      }
      /**
       * Occupies the client with processing and event
       */
      _process(promise) {
        this._numProcessing++;
        void promise.then(
          (value2) => {
            this._numProcessing--;
            return value2;
          },
          (reason) => {
            this._numProcessing--;
            return reason;
          }
        );
      }
      /**
       * @inheritdoc
       */
      _sendEnvelope(envelope) {
        this.emit("beforeEnvelope", envelope);
        if (this._isEnabled() && this._transport) {
          return this._transport.send(envelope).then(null, (reason) => {
            DEBUG_BUILD$1 && logger.error("Error while sending event:", reason);
          });
        } else {
          DEBUG_BUILD$1 && logger.error("Transport disabled");
        }
      }
      /**
       * Clears outcomes on this client and returns them.
       */
      _clearOutcomes() {
        const outcomes = this._outcomes;
        this._outcomes = {};
        return Object.keys(outcomes).map((key) => {
          const [reason, category] = key.split(":");
          return {
            reason,
            category,
            quantity: outcomes[key]
          };
        });
      }
      /**
       * @inheritDoc
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    }
    function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
      const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
      if (isThenable(beforeSendResult)) {
        return beforeSendResult.then(
          (event) => {
            if (!isPlainObject(event) && event !== null) {
              throw new SentryError(invalidValueError);
            }
            return event;
          },
          (e2) => {
            throw new SentryError(`${beforeSendLabel} rejected with ${e2}`);
          }
        );
      } else if (!isPlainObject(beforeSendResult) && beforeSendResult !== null) {
        throw new SentryError(invalidValueError);
      }
      return beforeSendResult;
    }
    function processBeforeSend(options, event, hint) {
      const { beforeSend, beforeSendTransaction } = options;
      if (isErrorEvent(event) && beforeSend) {
        return beforeSend(event, hint);
      }
      if (isTransactionEvent(event) && beforeSendTransaction) {
        return beforeSendTransaction(event, hint);
      }
      return event;
    }
    function isErrorEvent(event) {
      return event.type === void 0;
    }
    function isTransactionEvent(event) {
      return event.type === "transaction";
    }
    function initAndBind(clientClass, options) {
      if (options.debug === true) {
        if (DEBUG_BUILD$1) {
          logger.enable();
        } else {
          consoleSandbox(() => {
            console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
          });
        }
      }
      const hub = getCurrentHub();
      const scope = hub.getScope();
      scope.update(options.initialScope);
      const client2 = new clientClass(options);
      hub.bindClient(client2);
    }
    const DEFAULT_TRANSPORT_BUFFER_SIZE = 30;
    function createTransport(options, makeRequest, buffer = makePromiseBuffer(
      options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE
    )) {
      let rateLimits = {};
      const flush = (timeout) => buffer.drain(timeout);
      function send(envelope) {
        const filteredEnvelopeItems = [];
        forEachEnvelopeItem(envelope, (item, type) => {
          const envelopeItemDataCategory = envelopeItemTypeToDataCategory(type);
          if (isRateLimited(rateLimits, envelopeItemDataCategory)) {
            const event = getEventForEnvelopeItem(item, type);
            options.recordDroppedEvent("ratelimit_backoff", envelopeItemDataCategory, event);
          } else {
            filteredEnvelopeItems.push(item);
          }
        });
        if (filteredEnvelopeItems.length === 0) {
          return resolvedSyncPromise();
        }
        const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
        const recordEnvelopeLoss = (reason) => {
          forEachEnvelopeItem(filteredEnvelope, (item, type) => {
            const event = getEventForEnvelopeItem(item, type);
            options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type), event);
          });
        };
        const requestTask = () => makeRequest({ body: serializeEnvelope(filteredEnvelope, options.textEncoder) }).then(
          (response) => {
            if (response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) {
              DEBUG_BUILD$1 && logger.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
            }
            rateLimits = updateRateLimits(rateLimits, response);
            return response;
          },
          (error) => {
            recordEnvelopeLoss("network_error");
            throw error;
          }
        );
        return buffer.add(requestTask).then(
          (result) => result,
          (error) => {
            if (error instanceof SentryError) {
              DEBUG_BUILD$1 && logger.error("Skipped sending event because buffer is full.");
              recordEnvelopeLoss("queue_overflow");
              return resolvedSyncPromise();
            } else {
              throw error;
            }
          }
        );
      }
      send.__sentry__baseTransport__ = true;
      return {
        send,
        flush
      };
    }
    function getEventForEnvelopeItem(item, type) {
      if (type !== "event" && type !== "transaction") {
        return void 0;
      }
      return Array.isArray(item) ? item[1] : void 0;
    }
    let originalFunctionToString;
    class FunctionToString {
      /**
       * @inheritDoc
       */
      static __initStatic() {
        this.id = "FunctionToString";
      }
      /**
       * @inheritDoc
       */
      constructor() {
        this.name = FunctionToString.id;
      }
      /**
       * @inheritDoc
       */
      setupOnce() {
        originalFunctionToString = Function.prototype.toString;
        try {
          Function.prototype.toString = function(...args) {
            const context = getOriginalFunction(this) || this;
            return originalFunctionToString.apply(context, args);
          };
        } catch (e2) {
        }
      }
    }
    FunctionToString.__initStatic();
    const DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
    const DEFAULT_IGNORE_TRANSACTIONS = [
      /^.*\/healthcheck$/,
      /^.*\/healthy$/,
      /^.*\/live$/,
      /^.*\/ready$/,
      /^.*\/heartbeat$/,
      /^.*\/health$/,
      /^.*\/healthz$/
    ];
    class InboundFilters {
      /**
       * @inheritDoc
       */
      static __initStatic() {
        this.id = "InboundFilters";
      }
      /**
       * @inheritDoc
       */
      constructor(options = {}) {
        this.name = InboundFilters.id;
        this._options = options;
      }
      /**
       * @inheritDoc
       */
      setupOnce(_addGlobalEventProcessor, _getCurrentHub) {
      }
      /** @inheritDoc */
      processEvent(event, _eventHint, client2) {
        const clientOptions = client2.getOptions();
        const options = _mergeOptions(this._options, clientOptions);
        return _shouldDropEvent$1(event, options) ? null : event;
      }
    }
    InboundFilters.__initStatic();
    function _mergeOptions(internalOptions = {}, clientOptions = {}) {
      return {
        allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
        denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
        ignoreErrors: [
          ...internalOptions.ignoreErrors || [],
          ...clientOptions.ignoreErrors || [],
          ...internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS
        ],
        ignoreTransactions: [
          ...internalOptions.ignoreTransactions || [],
          ...clientOptions.ignoreTransactions || [],
          ...internalOptions.disableTransactionDefaults ? [] : DEFAULT_IGNORE_TRANSACTIONS
        ],
        ignoreInternal: internalOptions.ignoreInternal !== void 0 ? internalOptions.ignoreInternal : true
      };
    }
    function _shouldDropEvent$1(event, options) {
      if (options.ignoreInternal && _isSentryError(event)) {
        DEBUG_BUILD$1 && logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${getEventDescription(event)}`);
        return true;
      }
      if (_isIgnoredError(event, options.ignoreErrors)) {
        DEBUG_BUILD$1 && logger.warn(
          `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription(event)}`
        );
        return true;
      }
      if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
        DEBUG_BUILD$1 && logger.warn(
          `Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${getEventDescription(event)}`
        );
        return true;
      }
      if (_isDeniedUrl(event, options.denyUrls)) {
        DEBUG_BUILD$1 && logger.warn(
          `Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription(
            event
          )}.
Url: ${_getEventFilterUrl(event)}`
        );
        return true;
      }
      if (!_isAllowedUrl(event, options.allowUrls)) {
        DEBUG_BUILD$1 && logger.warn(
          `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription(
            event
          )}.
Url: ${_getEventFilterUrl(event)}`
        );
        return true;
      }
      return false;
    }
    function _isIgnoredError(event, ignoreErrors) {
      if (event.type || !ignoreErrors || !ignoreErrors.length) {
        return false;
      }
      return _getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
    }
    function _isIgnoredTransaction(event, ignoreTransactions) {
      if (event.type !== "transaction" || !ignoreTransactions || !ignoreTransactions.length) {
        return false;
      }
      const name = event.transaction;
      return name ? stringMatchesSomePattern(name, ignoreTransactions) : false;
    }
    function _isDeniedUrl(event, denyUrls) {
      if (!denyUrls || !denyUrls.length) {
        return false;
      }
      const url2 = _getEventFilterUrl(event);
      return !url2 ? false : stringMatchesSomePattern(url2, denyUrls);
    }
    function _isAllowedUrl(event, allowUrls) {
      if (!allowUrls || !allowUrls.length) {
        return true;
      }
      const url2 = _getEventFilterUrl(event);
      return !url2 ? true : stringMatchesSomePattern(url2, allowUrls);
    }
    function _getPossibleEventMessages(event) {
      const possibleMessages = [];
      if (event.message) {
        possibleMessages.push(event.message);
      }
      let lastException;
      try {
        lastException = event.exception.values[event.exception.values.length - 1];
      } catch (e2) {
      }
      if (lastException) {
        if (lastException.value) {
          possibleMessages.push(lastException.value);
          if (lastException.type) {
            possibleMessages.push(`${lastException.type}: ${lastException.value}`);
          }
        }
      }
      if (DEBUG_BUILD$1 && possibleMessages.length === 0) {
        logger.error(`Could not extract message for event ${getEventDescription(event)}`);
      }
      return possibleMessages;
    }
    function _isSentryError(event) {
      try {
        return event.exception.values[0].type === "SentryError";
      } catch (e2) {
      }
      return false;
    }
    function _getLastValidUrl(frames = []) {
      for (let i2 = frames.length - 1; i2 >= 0; i2--) {
        const frame = frames[i2];
        if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
          return frame.filename || null;
        }
      }
      return null;
    }
    function _getEventFilterUrl(event) {
      try {
        let frames;
        try {
          frames = event.exception.values[0].stacktrace.frames;
        } catch (e2) {
        }
        return frames ? _getLastValidUrl(frames) : null;
      } catch (oO) {
        DEBUG_BUILD$1 && logger.error(`Cannot extract url for event ${getEventDescription(event)}`);
        return null;
      }
    }
    const WINDOW = GLOBAL_OBJ;
    let ignoreOnError = 0;
    function shouldIgnoreOnError() {
      return ignoreOnError > 0;
    }
    function ignoreNextOnError() {
      ignoreOnError++;
      setTimeout(() => {
        ignoreOnError--;
      });
    }
    function wrap(fn, options = {}, before) {
      if (typeof fn !== "function") {
        return fn;
      }
      try {
        const wrapper = fn.__sentry_wrapped__;
        if (wrapper) {
          return wrapper;
        }
        if (getOriginalFunction(fn)) {
          return fn;
        }
      } catch (e2) {
        return fn;
      }
      const sentryWrapped = function() {
        const args = Array.prototype.slice.call(arguments);
        try {
          if (before && typeof before === "function") {
            before.apply(this, arguments);
          }
          const wrappedArguments = args.map((arg) => wrap(arg, options));
          return fn.apply(this, wrappedArguments);
        } catch (ex) {
          ignoreNextOnError();
          withScope((scope) => {
            scope.addEventProcessor((event) => {
              if (options.mechanism) {
                addExceptionTypeValue(event, void 0, void 0);
                addExceptionMechanism(event, options.mechanism);
              }
              event.extra = {
                ...event.extra,
                arguments: args
              };
              return event;
            });
            captureException(ex);
          });
          throw ex;
        }
      };
      try {
        for (const property in fn) {
          if (Object.prototype.hasOwnProperty.call(fn, property)) {
            sentryWrapped[property] = fn[property];
          }
        }
      } catch (_oO) {
      }
      markFunctionWrapped(sentryWrapped, fn);
      addNonEnumerableProperty(fn, "__sentry_wrapped__", sentryWrapped);
      try {
        const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
        if (descriptor.configurable) {
          Object.defineProperty(sentryWrapped, "name", {
            get() {
              return fn.name;
            }
          });
        }
      } catch (_oO) {
      }
      return sentryWrapped;
    }
    const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__;
    function exceptionFromError(stackParser, ex) {
      const frames = parseStackFrames(stackParser, ex);
      const exception = {
        type: ex && ex.name,
        value: extractMessage(ex)
      };
      if (frames.length) {
        exception.stacktrace = { frames };
      }
      if (exception.type === void 0 && exception.value === "") {
        exception.value = "Unrecoverable error caught";
      }
      return exception;
    }
    function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
      const hub = getCurrentHub();
      const client2 = hub.getClient();
      const normalizeDepth = client2 && client2.getOptions().normalizeDepth;
      const event = {
        exception: {
          values: [
            {
              type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
              value: getNonErrorObjectExceptionValue(exception, { isUnhandledRejection })
            }
          ]
        },
        extra: {
          __serialized__: normalizeToSize(exception, normalizeDepth)
        }
      };
      if (syntheticException) {
        const frames = parseStackFrames(stackParser, syntheticException);
        if (frames.length) {
          event.exception.values[0].stacktrace = { frames };
        }
      }
      return event;
    }
    function eventFromError(stackParser, ex) {
      return {
        exception: {
          values: [exceptionFromError(stackParser, ex)]
        }
      };
    }
    function parseStackFrames(stackParser, ex) {
      const stacktrace = ex.stacktrace || ex.stack || "";
      const popSize = getPopSize(ex);
      try {
        return stackParser(stacktrace, popSize);
      } catch (e2) {
      }
      return [];
    }
    const reactMinifiedRegexp = /Minified React error #\d+;/i;
    function getPopSize(ex) {
      if (ex) {
        if (typeof ex.framesToPop === "number") {
          return ex.framesToPop;
        }
        if (reactMinifiedRegexp.test(ex.message)) {
          return 1;
        }
      }
      return 0;
    }
    function extractMessage(ex) {
      const message = ex && ex.message;
      if (!message) {
        return "No error message";
      }
      if (message.error && typeof message.error.message === "string") {
        return message.error.message;
      }
      return message;
    }
    function eventFromException(stackParser, exception, hint, attachStacktrace) {
      const syntheticException = hint && hint.syntheticException || void 0;
      const event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
      addExceptionMechanism(event);
      event.level = "error";
      if (hint && hint.event_id) {
        event.event_id = hint.event_id;
      }
      return resolvedSyncPromise(event);
    }
    function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
      const syntheticException = hint && hint.syntheticException || void 0;
      const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
      event.level = level;
      if (hint && hint.event_id) {
        event.event_id = hint.event_id;
      }
      return resolvedSyncPromise(event);
    }
    function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
      let event;
      if (isErrorEvent$1(exception) && exception.error) {
        const errorEvent = exception;
        return eventFromError(stackParser, errorEvent.error);
      }
      if (isDOMError(exception) || isDOMException(exception)) {
        const domException = exception;
        if ("stack" in exception) {
          event = eventFromError(stackParser, exception);
        } else {
          const name = domException.name || (isDOMError(domException) ? "DOMError" : "DOMException");
          const message = domException.message ? `${name}: ${domException.message}` : name;
          event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
          addExceptionTypeValue(event, message);
        }
        if ("code" in domException) {
          event.tags = { ...event.tags, "DOMException.code": `${domException.code}` };
        }
        return event;
      }
      if (isError(exception)) {
        return eventFromError(stackParser, exception);
      }
      if (isPlainObject(exception) || isEvent(exception)) {
        const objectException = exception;
        event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
        addExceptionMechanism(event, {
          synthetic: true
        });
        return event;
      }
      event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
      addExceptionTypeValue(event, `${exception}`, void 0);
      addExceptionMechanism(event, {
        synthetic: true
      });
      return event;
    }
    function eventFromString(stackParser, input, syntheticException, attachStacktrace) {
      const event = {
        message: input
      };
      if (attachStacktrace && syntheticException) {
        const frames = parseStackFrames(stackParser, syntheticException);
        if (frames.length) {
          event.exception = {
            values: [{ value: input, stacktrace: { frames } }]
          };
        }
      }
      return event;
    }
    function getNonErrorObjectExceptionValue(exception, { isUnhandledRejection }) {
      const keys2 = extractExceptionKeysForMessage(exception);
      const captureType = isUnhandledRejection ? "promise rejection" : "exception";
      if (isErrorEvent$1(exception)) {
        return `Event \`ErrorEvent\` captured as ${captureType} with message \`${exception.message}\``;
      }
      if (isEvent(exception)) {
        const className = getObjectClassName(exception);
        return `Event \`${className}\` (type=${exception.type}) captured as ${captureType}`;
      }
      return `Object captured as ${captureType} with keys: ${keys2}`;
    }
    function getObjectClassName(obj) {
      try {
        const prototype = Object.getPrototypeOf(obj);
        return prototype ? prototype.constructor.name : void 0;
      } catch (e2) {
      }
    }
    function createUserFeedbackEnvelope(feedback, {
      metadata,
      tunnel,
      dsn
    }) {
      const headers = {
        event_id: feedback.event_id,
        sent_at: (/* @__PURE__ */ new Date()).toISOString(),
        ...metadata && metadata.sdk && {
          sdk: {
            name: metadata.sdk.name,
            version: metadata.sdk.version
          }
        },
        ...!!tunnel && !!dsn && { dsn: dsnToString(dsn) }
      };
      const item = createUserFeedbackEnvelopeItem(feedback);
      return createEnvelope(headers, [item]);
    }
    function createUserFeedbackEnvelopeItem(feedback) {
      const feedbackHeaders = {
        type: "user_report"
      };
      return [feedbackHeaders, feedback];
    }
    class BrowserClient extends BaseClient {
      /**
       * Creates a new Browser SDK instance.
       *
       * @param options Configuration options for this SDK.
       */
      constructor(options) {
        const sdkSource = WINDOW.SENTRY_SDK_SOURCE || getSDKSource();
        options._metadata = options._metadata || {};
        options._metadata.sdk = options._metadata.sdk || {
          name: "sentry.javascript.browser",
          packages: [
            {
              name: `${sdkSource}:@sentry/browser`,
              version: SDK_VERSION
            }
          ],
          version: SDK_VERSION
        };
        super(options);
        if (options.sendClientReports && WINDOW.document) {
          WINDOW.document.addEventListener("visibilitychange", () => {
            if (WINDOW.document.visibilityState === "hidden") {
              this._flushOutcomes();
            }
          });
        }
      }
      /**
       * @inheritDoc
       */
      eventFromException(exception, hint) {
        return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
      }
      /**
       * @inheritDoc
       */
      eventFromMessage(message, level = "info", hint) {
        return eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
      }
      /**
       * Sends user feedback to Sentry.
       */
      captureUserFeedback(feedback) {
        if (!this._isEnabled()) {
          DEBUG_BUILD && logger.warn("SDK not enabled, will not capture user feedback.");
          return;
        }
        const envelope = createUserFeedbackEnvelope(feedback, {
          metadata: this.getSdkMetadata(),
          dsn: this.getDsn(),
          tunnel: this.getOptions().tunnel
        });
        void this._sendEnvelope(envelope);
      }
      /**
       * @inheritDoc
       */
      _prepareEvent(event, hint, scope) {
        event.platform = event.platform || "javascript";
        return super._prepareEvent(event, hint, scope);
      }
      /**
       * Sends client reports as an envelope.
       */
      _flushOutcomes() {
        const outcomes = this._clearOutcomes();
        if (outcomes.length === 0) {
          DEBUG_BUILD && logger.log("No outcomes to send");
          return;
        }
        if (!this._dsn) {
          DEBUG_BUILD && logger.log("No dsn provided, will not send outcomes");
          return;
        }
        DEBUG_BUILD && logger.log("Sending outcomes:", outcomes);
        const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
        void this._sendEnvelope(envelope);
      }
    }
    let cachedFetchImpl = void 0;
    function getNativeFetchImplementation() {
      if (cachedFetchImpl) {
        return cachedFetchImpl;
      }
      if (isNativeFetch(WINDOW.fetch)) {
        return cachedFetchImpl = WINDOW.fetch.bind(WINDOW);
      }
      const document2 = WINDOW.document;
      let fetchImpl = WINDOW.fetch;
      if (document2 && typeof document2.createElement === "function") {
        try {
          const sandbox = document2.createElement("iframe");
          sandbox.hidden = true;
          document2.head.appendChild(sandbox);
          const contentWindow = sandbox.contentWindow;
          if (contentWindow && contentWindow.fetch) {
            fetchImpl = contentWindow.fetch;
          }
          document2.head.removeChild(sandbox);
        } catch (e2) {
          DEBUG_BUILD && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e2);
        }
      }
      return cachedFetchImpl = fetchImpl.bind(WINDOW);
    }
    function clearCachedFetchImplementation() {
      cachedFetchImpl = void 0;
    }
    function makeFetchTransport(options, nativeFetch = getNativeFetchImplementation()) {
      let pendingBodySize = 0;
      let pendingCount = 0;
      function makeRequest(request) {
        const requestSize = request.body.length;
        pendingBodySize += requestSize;
        pendingCount++;
        const requestOptions = {
          body: request.body,
          method: "POST",
          referrerPolicy: "origin",
          headers: options.headers,
          // Outgoing requests are usually cancelled when navigating to a different page, causing a "TypeError: Failed to
          // fetch" error and sending a "network_error" client-outcome - in Chrome, the request status shows "(cancelled)".
          // The `keepalive` flag keeps outgoing requests alive, even when switching pages. We want this since we're
          // frequently sending events right before the user is switching pages (eg. whenfinishing navigation transactions).
          // Gotchas:
          // - `keepalive` isn't supported by Firefox
          // - As per spec (https://fetch.spec.whatwg.org/#http-network-or-cache-fetch):
          //   If the sum of contentLength and inflightKeepaliveBytes is greater than 64 kibibytes, then return a network error.
          //   We will therefore only activate the flag when we're below that limit.
          // There is also a limit of requests that can be open at the same time, so we also limit this to 15
          // See https://github.com/getsentry/sentry-javascript/pull/7553 for details
          keepalive: pendingBodySize <= 6e4 && pendingCount < 15,
          ...options.fetchOptions
        };
        try {
          return nativeFetch(options.url, requestOptions).then((response) => {
            pendingBodySize -= requestSize;
            pendingCount--;
            return {
              statusCode: response.status,
              headers: {
                "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": response.headers.get("Retry-After")
              }
            };
          });
        } catch (e2) {
          clearCachedFetchImplementation();
          pendingBodySize -= requestSize;
          pendingCount--;
          return rejectedSyncPromise(e2);
        }
      }
      return createTransport(options, makeRequest);
    }
    const XHR_READYSTATE_DONE = 4;
    function makeXHRTransport(options) {
      function makeRequest(request) {
        return new SyncPromise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onerror = reject;
          xhr.onreadystatechange = () => {
            if (xhr.readyState === XHR_READYSTATE_DONE) {
              resolve({
                statusCode: xhr.status,
                headers: {
                  "x-sentry-rate-limits": xhr.getResponseHeader("X-Sentry-Rate-Limits"),
                  "retry-after": xhr.getResponseHeader("Retry-After")
                }
              });
            }
          };
          xhr.open("POST", options.url);
          for (const header in options.headers) {
            if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
              xhr.setRequestHeader(header, options.headers[header]);
            }
          }
          xhr.send(request.body);
        });
      }
      return createTransport(options, makeRequest);
    }
    const UNKNOWN_FUNCTION = "?";
    const CHROME_PRIORITY = 30;
    const WINJS_PRIORITY = 40;
    const GECKO_PRIORITY = 50;
    function createFrame(filename, func, lineno, colno) {
      const frame = {
        filename,
        function: func,
        in_app: true
        // All browser frames are considered in_app
      };
      if (lineno !== void 0) {
        frame.lineno = lineno;
      }
      if (colno !== void 0) {
        frame.colno = colno;
      }
      return frame;
    }
    const chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    const chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    const chrome = (line) => {
      const parts2 = chromeRegex.exec(line);
      if (parts2) {
        const isEval = parts2[2] && parts2[2].indexOf("eval") === 0;
        if (isEval) {
          const subMatch = chromeEvalRegex.exec(parts2[2]);
          if (subMatch) {
            parts2[2] = subMatch[1];
            parts2[3] = subMatch[2];
            parts2[4] = subMatch[3];
          }
        }
        const [func, filename] = extractSafariExtensionDetails(parts2[1] || UNKNOWN_FUNCTION, parts2[2]);
        return createFrame(filename, func, parts2[3] ? +parts2[3] : void 0, parts2[4] ? +parts2[4] : void 0);
      }
      return;
    };
    const chromeStackLineParser = [CHROME_PRIORITY, chrome];
    const geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
    const geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    const gecko = (line) => {
      const parts2 = geckoREgex.exec(line);
      if (parts2) {
        const isEval = parts2[3] && parts2[3].indexOf(" > eval") > -1;
        if (isEval) {
          const subMatch = geckoEvalRegex.exec(parts2[3]);
          if (subMatch) {
            parts2[1] = parts2[1] || "eval";
            parts2[3] = subMatch[1];
            parts2[4] = subMatch[2];
            parts2[5] = "";
          }
        }
        let filename = parts2[3];
        let func = parts2[1] || UNKNOWN_FUNCTION;
        [func, filename] = extractSafariExtensionDetails(func, filename);
        return createFrame(filename, func, parts2[4] ? +parts2[4] : void 0, parts2[5] ? +parts2[5] : void 0);
      }
      return;
    };
    const geckoStackLineParser = [GECKO_PRIORITY, gecko];
    const winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    const winjs = (line) => {
      const parts2 = winjsRegex.exec(line);
      return parts2 ? createFrame(parts2[2], parts2[1] || UNKNOWN_FUNCTION, +parts2[3], parts2[4] ? +parts2[4] : void 0) : void 0;
    };
    const winjsStackLineParser = [WINJS_PRIORITY, winjs];
    const defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser, winjsStackLineParser];
    const defaultStackParser = createStackParser(...defaultStackLineParsers);
    const extractSafariExtensionDetails = (func, filename) => {
      const isSafariExtension = func.indexOf("safari-extension") !== -1;
      const isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
      return isSafariExtension || isSafariWebExtension ? [
        func.indexOf("@") !== -1 ? func.split("@")[0] : UNKNOWN_FUNCTION,
        isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`
      ] : [func, filename];
    };
    class GlobalHandlers {
      /**
       * @inheritDoc
       */
      static __initStatic() {
        this.id = "GlobalHandlers";
      }
      /**
       * @inheritDoc
       */
      /** JSDoc */
      /**
       * Stores references functions to installing handlers. Will set to undefined
       * after they have been run so that they are not used twice.
       */
      /** JSDoc */
      constructor(options) {
        this.name = GlobalHandlers.id;
        this._options = {
          onerror: true,
          onunhandledrejection: true,
          ...options
        };
        this._installFunc = {
          onerror: _installGlobalOnErrorHandler,
          onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
        };
      }
      /**
       * @inheritDoc
       */
      setupOnce() {
        Error.stackTraceLimit = 50;
        const options = this._options;
        for (const key in options) {
          const installFunc = this._installFunc[key];
          if (installFunc && options[key]) {
            globalHandlerLog(key);
            installFunc();
            this._installFunc[key] = void 0;
          }
        }
      }
    }
    GlobalHandlers.__initStatic();
    function _installGlobalOnErrorHandler() {
      addGlobalErrorInstrumentationHandler((data) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        const { msg, url: url2, line, column, error } = data;
        if (shouldIgnoreOnError()) {
          return;
        }
        const event = error === void 0 && isString$1(msg) ? _eventFromIncompleteOnError(msg, url2, line, column) : _enhanceEventWithInitialFrame(
          eventFromUnknownInput(stackParser, error || msg, void 0, attachStacktrace, false),
          url2,
          line,
          column
        );
        event.level = "error";
        hub.captureEvent(event, {
          originalException: error,
          mechanism: {
            handled: false,
            type: "onerror"
          }
        });
      });
    }
    function _installGlobalOnUnhandledRejectionHandler() {
      addGlobalUnhandledRejectionInstrumentationHandler((e2) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        if (shouldIgnoreOnError()) {
          return true;
        }
        const error = _getUnhandledRejectionError(e2);
        const event = isPrimitive(error) ? _eventFromRejectionWithPrimitive(error) : eventFromUnknownInput(stackParser, error, void 0, attachStacktrace, true);
        event.level = "error";
        hub.captureEvent(event, {
          originalException: error,
          mechanism: {
            handled: false,
            type: "onunhandledrejection"
          }
        });
        return;
      });
    }
    function _getUnhandledRejectionError(error) {
      if (isPrimitive(error)) {
        return error;
      }
      const e2 = error;
      try {
        if ("reason" in e2) {
          return e2.reason;
        } else if ("detail" in e2 && "reason" in e2.detail) {
          return e2.detail.reason;
        }
      } catch (e22) {
      }
      return error;
    }
    function _eventFromRejectionWithPrimitive(reason) {
      return {
        exception: {
          values: [
            {
              type: "UnhandledRejection",
              // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
              value: `Non-Error promise rejection captured with value: ${String(reason)}`
            }
          ]
        }
      };
    }
    function _eventFromIncompleteOnError(msg, url2, line, column) {
      const ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
      let message = isErrorEvent$1(msg) ? msg.message : msg;
      let name = "Error";
      const groups = message.match(ERROR_TYPES_RE);
      if (groups) {
        name = groups[1];
        message = groups[2];
      }
      const event = {
        exception: {
          values: [
            {
              type: name,
              value: message
            }
          ]
        }
      };
      return _enhanceEventWithInitialFrame(event, url2, line, column);
    }
    function _enhanceEventWithInitialFrame(event, url2, line, column) {
      const e2 = event.exception = event.exception || {};
      const ev = e2.values = e2.values || [];
      const ev0 = ev[0] = ev[0] || {};
      const ev0s = ev0.stacktrace = ev0.stacktrace || {};
      const ev0sf = ev0s.frames = ev0s.frames || [];
      const colno = isNaN(parseInt(column, 10)) ? void 0 : column;
      const lineno = isNaN(parseInt(line, 10)) ? void 0 : line;
      const filename = isString$1(url2) && url2.length > 0 ? url2 : getLocationHref();
      if (ev0sf.length === 0) {
        ev0sf.push({
          colno,
          filename,
          function: "?",
          in_app: true,
          lineno
        });
      }
      return event;
    }
    function globalHandlerLog(type) {
      DEBUG_BUILD && logger.log(`Global Handler attached: ${type}`);
    }
    function getHubAndOptions() {
      const hub = getCurrentHub();
      const client2 = hub.getClient();
      const options = client2 && client2.getOptions() || {
        stackParser: () => [],
        attachStacktrace: false
      };
      return [hub, options.stackParser, options.attachStacktrace];
    }
    const DEFAULT_EVENT_TARGET = [
      "EventTarget",
      "Window",
      "Node",
      "ApplicationCache",
      "AudioTrackList",
      "BroadcastChannel",
      "ChannelMergerNode",
      "CryptoOperation",
      "EventSource",
      "FileReader",
      "HTMLUnknownElement",
      "IDBDatabase",
      "IDBRequest",
      "IDBTransaction",
      "KeyOperation",
      "MediaController",
      "MessagePort",
      "ModalWindow",
      "Notification",
      "SVGElementInstance",
      "Screen",
      "SharedWorker",
      "TextTrack",
      "TextTrackCue",
      "TextTrackList",
      "WebSocket",
      "WebSocketWorker",
      "Worker",
      "XMLHttpRequest",
      "XMLHttpRequestEventTarget",
      "XMLHttpRequestUpload"
    ];
    class TryCatch {
      /**
       * @inheritDoc
       */
      static __initStatic() {
        this.id = "TryCatch";
      }
      /**
       * @inheritDoc
       */
      /** JSDoc */
      /**
       * @inheritDoc
       */
      constructor(options) {
        this.name = TryCatch.id;
        this._options = {
          XMLHttpRequest: true,
          eventTarget: true,
          requestAnimationFrame: true,
          setInterval: true,
          setTimeout: true,
          ...options
        };
      }
      /**
       * Wrap timer functions and event targets to catch errors
       * and provide better metadata.
       */
      setupOnce() {
        if (this._options.setTimeout) {
          fill(WINDOW, "setTimeout", _wrapTimeFunction);
        }
        if (this._options.setInterval) {
          fill(WINDOW, "setInterval", _wrapTimeFunction);
        }
        if (this._options.requestAnimationFrame) {
          fill(WINDOW, "requestAnimationFrame", _wrapRAF);
        }
        if (this._options.XMLHttpRequest && "XMLHttpRequest" in WINDOW) {
          fill(XMLHttpRequest.prototype, "send", _wrapXHR);
        }
        const eventTargetOption = this._options.eventTarget;
        if (eventTargetOption) {
          const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
          eventTarget.forEach(_wrapEventTarget);
        }
      }
    }
    TryCatch.__initStatic();
    function _wrapTimeFunction(original) {
      return function(...args) {
        const originalCallback = args[0];
        args[0] = wrap(originalCallback, {
          mechanism: {
            data: { function: getFunctionName(original) },
            handled: false,
            type: "instrument"
          }
        });
        return original.apply(this, args);
      };
    }
    function _wrapRAF(original) {
      return function(callback) {
        return original.apply(this, [
          wrap(callback, {
            mechanism: {
              data: {
                function: "requestAnimationFrame",
                handler: getFunctionName(original)
              },
              handled: false,
              type: "instrument"
            }
          })
        ]);
      };
    }
    function _wrapXHR(originalSend) {
      return function(...args) {
        const xhr = this;
        const xmlHttpRequestProps = ["onload", "onerror", "onprogress", "onreadystatechange"];
        xmlHttpRequestProps.forEach((prop) => {
          if (prop in xhr && typeof xhr[prop] === "function") {
            fill(xhr, prop, function(original) {
              const wrapOptions = {
                mechanism: {
                  data: {
                    function: prop,
                    handler: getFunctionName(original)
                  },
                  handled: false,
                  type: "instrument"
                }
              };
              const originalFunction = getOriginalFunction(original);
              if (originalFunction) {
                wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
              }
              return wrap(original, wrapOptions);
            });
          }
        });
        return originalSend.apply(this, args);
      };
    }
    function _wrapEventTarget(target) {
      const globalObject = WINDOW;
      const proto2 = globalObject[target] && globalObject[target].prototype;
      if (!proto2 || !proto2.hasOwnProperty || !proto2.hasOwnProperty("addEventListener")) {
        return;
      }
      fill(proto2, "addEventListener", function(original) {
        return function(eventName, fn, options) {
          try {
            if (typeof fn.handleEvent === "function") {
              fn.handleEvent = wrap(fn.handleEvent, {
                mechanism: {
                  data: {
                    function: "handleEvent",
                    handler: getFunctionName(fn),
                    target
                  },
                  handled: false,
                  type: "instrument"
                }
              });
            }
          } catch (err) {
          }
          return original.apply(this, [
            eventName,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            wrap(fn, {
              mechanism: {
                data: {
                  function: "addEventListener",
                  handler: getFunctionName(fn),
                  target
                },
                handled: false,
                type: "instrument"
              }
            }),
            options
          ]);
        };
      });
      fill(
        proto2,
        "removeEventListener",
        function(originalRemoveEventListener) {
          return function(eventName, fn, options) {
            const wrappedEventHandler = fn;
            try {
              const originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
              if (originalEventHandler) {
                originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
              }
            } catch (e2) {
            }
            return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
          };
        }
      );
    }
    const MAX_ALLOWED_STRING_LENGTH = 1024;
    class Breadcrumbs {
      /**
       * @inheritDoc
       */
      static __initStatic() {
        this.id = "Breadcrumbs";
      }
      /**
       * @inheritDoc
       */
      /**
       * Options of the breadcrumbs integration.
       */
      // This field is public, because we use it in the browser client to check if the `sentry` option is enabled.
      /**
       * @inheritDoc
       */
      constructor(options) {
        this.name = Breadcrumbs.id;
        this.options = {
          console: true,
          dom: true,
          fetch: true,
          history: true,
          sentry: true,
          xhr: true,
          ...options
        };
      }
      /**
       * Instrument browser built-ins w/ breadcrumb capturing
       *  - Console API
       *  - DOM API (click/typing)
       *  - XMLHttpRequest API
       *  - Fetch API
       *  - History API
       */
      setupOnce() {
        if (this.options.console) {
          addConsoleInstrumentationHandler(_consoleBreadcrumb);
        }
        if (this.options.dom) {
          addClickKeypressInstrumentationHandler(_domBreadcrumb(this.options.dom));
        }
        if (this.options.xhr) {
          addXhrInstrumentationHandler(_xhrBreadcrumb);
        }
        if (this.options.fetch) {
          addFetchInstrumentationHandler(_fetchBreadcrumb);
        }
        if (this.options.history) {
          addHistoryInstrumentationHandler(_historyBreadcrumb);
        }
        if (this.options.sentry) {
          const client2 = getClient();
          client2 && client2.on && client2.on("beforeSendEvent", addSentryBreadcrumb);
        }
      }
    }
    Breadcrumbs.__initStatic();
    function addSentryBreadcrumb(event) {
      getCurrentHub().addBreadcrumb(
        {
          category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
          event_id: event.event_id,
          level: event.level,
          message: getEventDescription(event)
        },
        {
          event
        }
      );
    }
    function _domBreadcrumb(dom) {
      function _innerDomBreadcrumb(handlerData) {
        let target;
        let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : void 0;
        let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : void 0;
        if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
          DEBUG_BUILD && logger.warn(
            `\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`
          );
          maxStringLength = MAX_ALLOWED_STRING_LENGTH;
        }
        if (typeof keyAttrs === "string") {
          keyAttrs = [keyAttrs];
        }
        try {
          const event = handlerData.event;
          target = _isEvent(event) ? htmlTreeAsString(event.target, { keyAttrs, maxStringLength }) : htmlTreeAsString(event, { keyAttrs, maxStringLength });
        } catch (e2) {
          target = "<unknown>";
        }
        if (target.length === 0) {
          return;
        }
        getCurrentHub().addBreadcrumb(
          {
            category: `ui.${handlerData.name}`,
            message: target
          },
          {
            event: handlerData.event,
            name: handlerData.name,
            global: handlerData.global
          }
        );
      }
      return _innerDomBreadcrumb;
    }
    function _consoleBreadcrumb(handlerData) {
      const breadcrumb = {
        category: "console",
        data: {
          arguments: handlerData.args,
          logger: "console"
        },
        level: severityLevelFromString(handlerData.level),
        message: safeJoin(handlerData.args, " ")
      };
      if (handlerData.level === "assert") {
        if (handlerData.args[0] === false) {
          breadcrumb.message = `Assertion failed: ${safeJoin(handlerData.args.slice(1), " ") || "console.assert"}`;
          breadcrumb.data.arguments = handlerData.args.slice(1);
        } else {
          return;
        }
      }
      getCurrentHub().addBreadcrumb(breadcrumb, {
        input: handlerData.args,
        level: handlerData.level
      });
    }
    function _xhrBreadcrumb(handlerData) {
      const { startTimestamp, endTimestamp } = handlerData;
      const sentryXhrData = handlerData.xhr[SENTRY_XHR_DATA_KEY];
      if (!startTimestamp || !endTimestamp || !sentryXhrData) {
        return;
      }
      const { method, url: url2, status_code, body } = sentryXhrData;
      const data = {
        method,
        url: url2,
        status_code
      };
      const hint = {
        xhr: handlerData.xhr,
        input: body,
        startTimestamp,
        endTimestamp
      };
      getCurrentHub().addBreadcrumb(
        {
          category: "xhr",
          data,
          type: "http"
        },
        hint
      );
    }
    function _fetchBreadcrumb(handlerData) {
      const { startTimestamp, endTimestamp } = handlerData;
      if (!endTimestamp) {
        return;
      }
      if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") {
        return;
      }
      if (handlerData.error) {
        const data = handlerData.fetchData;
        const hint = {
          data: handlerData.error,
          input: handlerData.args,
          startTimestamp,
          endTimestamp
        };
        getCurrentHub().addBreadcrumb(
          {
            category: "fetch",
            data,
            level: "error",
            type: "http"
          },
          hint
        );
      } else {
        const response = handlerData.response;
        const data = {
          ...handlerData.fetchData,
          status_code: response && response.status
        };
        const hint = {
          input: handlerData.args,
          response,
          startTimestamp,
          endTimestamp
        };
        getCurrentHub().addBreadcrumb(
          {
            category: "fetch",
            data,
            type: "http"
          },
          hint
        );
      }
    }
    function _historyBreadcrumb(handlerData) {
      let from2 = handlerData.from;
      let to2 = handlerData.to;
      const parsedLoc = parseUrl(WINDOW.location.href);
      let parsedFrom = from2 ? parseUrl(from2) : void 0;
      const parsedTo = parseUrl(to2);
      if (!parsedFrom || !parsedFrom.path) {
        parsedFrom = parsedLoc;
      }
      if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
        to2 = parsedTo.relative;
      }
      if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
        from2 = parsedFrom.relative;
      }
      getCurrentHub().addBreadcrumb({
        category: "navigation",
        data: {
          from: from2,
          to: to2
        }
      });
    }
    function _isEvent(event) {
      return !!event && !!event.target;
    }
    const DEFAULT_KEY = "cause";
    const DEFAULT_LIMIT = 5;
    class LinkedErrors {
      /**
       * @inheritDoc
       */
      static __initStatic() {
        this.id = "LinkedErrors";
      }
      /**
       * @inheritDoc
       */
      /**
       * @inheritDoc
       */
      /**
       * @inheritDoc
       */
      /**
       * @inheritDoc
       */
      constructor(options = {}) {
        this.name = LinkedErrors.id;
        this._key = options.key || DEFAULT_KEY;
        this._limit = options.limit || DEFAULT_LIMIT;
      }
      /** @inheritdoc */
      setupOnce() {
      }
      /**
       * @inheritDoc
       */
      preprocessEvent(event, hint, client2) {
        const options = client2.getOptions();
        applyAggregateErrorsToEvent(
          exceptionFromError,
          options.stackParser,
          options.maxValueLength,
          this._key,
          this._limit,
          event,
          hint
        );
      }
    }
    LinkedErrors.__initStatic();
    class HttpContext {
      /**
       * @inheritDoc
       */
      static __initStatic() {
        this.id = "HttpContext";
      }
      /**
       * @inheritDoc
       */
      constructor() {
        this.name = HttpContext.id;
      }
      /**
       * @inheritDoc
       */
      setupOnce() {
      }
      /** @inheritDoc */
      preprocessEvent(event) {
        if (!WINDOW.navigator && !WINDOW.location && !WINDOW.document) {
          return;
        }
        const url2 = event.request && event.request.url || WINDOW.location && WINDOW.location.href;
        const { referrer } = WINDOW.document || {};
        const { userAgent } = WINDOW.navigator || {};
        const headers = {
          ...event.request && event.request.headers,
          ...referrer && { Referer: referrer },
          ...userAgent && { "User-Agent": userAgent }
        };
        const request = { ...event.request, ...url2 && { url: url2 }, headers };
        event.request = request;
      }
    }
    HttpContext.__initStatic();
    class Dedupe {
      /**
       * @inheritDoc
       */
      static __initStatic() {
        this.id = "Dedupe";
      }
      /**
       * @inheritDoc
       */
      /**
       * @inheritDoc
       */
      constructor() {
        this.name = Dedupe.id;
      }
      /** @inheritDoc */
      setupOnce(_addGlobalEventProcessor, _getCurrentHub) {
      }
      /**
       * @inheritDoc
       */
      processEvent(currentEvent) {
        if (currentEvent.type) {
          return currentEvent;
        }
        try {
          if (_shouldDropEvent(currentEvent, this._previousEvent)) {
            DEBUG_BUILD && logger.warn("Event dropped due to being a duplicate of previously captured event.");
            return null;
          }
        } catch (_oO) {
        }
        return this._previousEvent = currentEvent;
      }
    }
    Dedupe.__initStatic();
    function _shouldDropEvent(currentEvent, previousEvent) {
      if (!previousEvent) {
        return false;
      }
      if (_isSameMessageEvent(currentEvent, previousEvent)) {
        return true;
      }
      if (_isSameExceptionEvent(currentEvent, previousEvent)) {
        return true;
      }
      return false;
    }
    function _isSameMessageEvent(currentEvent, previousEvent) {
      const currentMessage = currentEvent.message;
      const previousMessage = previousEvent.message;
      if (!currentMessage && !previousMessage) {
        return false;
      }
      if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
        return false;
      }
      if (currentMessage !== previousMessage) {
        return false;
      }
      if (!_isSameFingerprint(currentEvent, previousEvent)) {
        return false;
      }
      if (!_isSameStacktrace(currentEvent, previousEvent)) {
        return false;
      }
      return true;
    }
    function _isSameExceptionEvent(currentEvent, previousEvent) {
      const previousException = _getExceptionFromEvent(previousEvent);
      const currentException = _getExceptionFromEvent(currentEvent);
      if (!previousException || !currentException) {
        return false;
      }
      if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
        return false;
      }
      if (!_isSameFingerprint(currentEvent, previousEvent)) {
        return false;
      }
      if (!_isSameStacktrace(currentEvent, previousEvent)) {
        return false;
      }
      return true;
    }
    function _isSameStacktrace(currentEvent, previousEvent) {
      let currentFrames = _getFramesFromEvent(currentEvent);
      let previousFrames = _getFramesFromEvent(previousEvent);
      if (!currentFrames && !previousFrames) {
        return true;
      }
      if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
        return false;
      }
      currentFrames = currentFrames;
      previousFrames = previousFrames;
      if (previousFrames.length !== currentFrames.length) {
        return false;
      }
      for (let i2 = 0; i2 < previousFrames.length; i2++) {
        const frameA = previousFrames[i2];
        const frameB = currentFrames[i2];
        if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
          return false;
        }
      }
      return true;
    }
    function _isSameFingerprint(currentEvent, previousEvent) {
      let currentFingerprint = currentEvent.fingerprint;
      let previousFingerprint = previousEvent.fingerprint;
      if (!currentFingerprint && !previousFingerprint) {
        return true;
      }
      if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
        return false;
      }
      currentFingerprint = currentFingerprint;
      previousFingerprint = previousFingerprint;
      try {
        return !!(currentFingerprint.join("") === previousFingerprint.join(""));
      } catch (_oO) {
        return false;
      }
    }
    function _getExceptionFromEvent(event) {
      return event.exception && event.exception.values && event.exception.values[0];
    }
    function _getFramesFromEvent(event) {
      const exception = event.exception;
      if (exception) {
        try {
          return exception.values[0].stacktrace.frames;
        } catch (_oO) {
          return void 0;
        }
      }
      return void 0;
    }
    const defaultIntegrations = [
      new InboundFilters(),
      new FunctionToString(),
      new TryCatch(),
      new Breadcrumbs(),
      new GlobalHandlers(),
      new LinkedErrors(),
      new Dedupe(),
      new HttpContext()
    ];
    function init(options = {}) {
      if (options.defaultIntegrations === void 0) {
        options.defaultIntegrations = defaultIntegrations;
      }
      if (options.release === void 0) {
        if (typeof __SENTRY_RELEASE__ === "string") {
          options.release = __SENTRY_RELEASE__;
        }
        if (WINDOW.SENTRY_RELEASE && WINDOW.SENTRY_RELEASE.id) {
          options.release = WINDOW.SENTRY_RELEASE.id;
        }
      }
      if (options.autoSessionTracking === void 0) {
        options.autoSessionTracking = true;
      }
      if (options.sendClientReports === void 0) {
        options.sendClientReports = true;
      }
      const clientOptions = {
        ...options,
        stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
        integrations: getIntegrationsToSetup(options),
        transport: options.transport || (supportsFetch() ? makeFetchTransport : makeXHRTransport)
      };
      initAndBind(BrowserClient, clientOptions);
      if (options.autoSessionTracking) {
        startSessionTracking();
      }
    }
    function startSessionOnHub(hub) {
      hub.startSession({ ignoreDuration: true });
      hub.captureSession();
    }
    function startSessionTracking() {
      if (typeof WINDOW.document === "undefined") {
        DEBUG_BUILD && logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
        return;
      }
      const hub = getCurrentHub();
      if (!hub.captureSession) {
        return;
      }
      startSessionOnHub(hub);
      addHistoryInstrumentationHandler(({ from: from2, to: to2 }) => {
        if (from2 !== void 0 && from2 !== to2) {
          startSessionOnHub(getCurrentHub());
        }
      });
    }
    var DefaultContext = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0
    };
    var IconContext = m$4.createContext && m$4.createContext(DefaultContext);
    var __assign = globalThis && globalThis.__assign || function() {
      __assign = Object.assign || function(t2) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t2[p2] = s2[p2];
        }
        return t2;
      };
      return __assign.apply(this, arguments);
    };
    var __rest = globalThis && globalThis.__rest || function(s2, e2) {
      var t2 = {};
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
          t2[p2] = s2[p2];
      if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
          if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
            t2[p2[i2]] = s2[p2[i2]];
        }
      return t2;
    };
    function Tree2Element(tree) {
      return tree && tree.map(function(node, i2) {
        return m$4.createElement(node.tag, __assign({
          key: i2
        }, node.attr), Tree2Element(node.child));
      });
    }
    function GenIcon(data) {
      return function(props) {
        return m$4.createElement(IconBase, __assign({
          attr: __assign({}, data.attr)
        }, props), Tree2Element(data.child));
      };
    }
    function IconBase(props) {
      var elem = function(conf) {
        var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className)
          className = conf.className;
        if (props.className)
          className = (className ? className + " " : "") + props.className;
        return m$4.createElement("svg", __assign({
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0"
        }, conf.attr, attr, svgProps, {
          className,
          style: __assign(__assign({
            color: props.color || conf.color
          }, conf.style), props.style),
          height: computedSize,
          width: computedSize,
          xmlns: "http://www.w3.org/2000/svg"
        }), title && m$4.createElement("title", null, title), props.children);
      };
      return IconContext !== void 0 ? m$4.createElement(IconContext.Consumer, null, function(conf) {
        return elem(conf);
      }) : elem(DefaultContext);
    }
    function FcGoogle(props) {
      return GenIcon({ "tag": "svg", "attr": { "version": "1.1", "x": "0px", "y": "0px", "viewBox": "0 0 48 48", "enableBackground": "new 0 0 48 48" }, "child": [{ "tag": "path", "attr": { "fill": "#FFC107", "d": "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r\n	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r\n	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" } }, { "tag": "path", "attr": { "fill": "#FF3D00", "d": "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r\n	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" } }, { "tag": "path", "attr": { "fill": "#4CAF50", "d": "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r\n	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" } }, { "tag": "path", "attr": { "fill": "#1976D2", "d": "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r\n	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" } }] })(props);
    }
    var g$3 = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
    typeof global !== "undefined" && global || {};
    var support = {
      searchParams: "URLSearchParams" in g$3,
      iterable: "Symbol" in g$3 && "iterator" in Symbol,
      blob: "FileReader" in g$3 && "Blob" in g$3 && function() {
        try {
          new Blob();
          return true;
        } catch (e2) {
          return false;
        }
      }(),
      formData: "FormData" in g$3,
      arrayBuffer: "ArrayBuffer" in g$3
    };
    function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    }
    if (support.arrayBuffer) {
      var viewClasses = [
        "[object Int8Array]",
        "[object Uint8Array]",
        "[object Uint8ClampedArray]",
        "[object Int16Array]",
        "[object Uint16Array]",
        "[object Int32Array]",
        "[object Uint32Array]",
        "[object Float32Array]",
        "[object Float64Array]"
      ];
      var isArrayBufferView = ArrayBuffer.isView || function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
      };
    }
    function normalizeName(name) {
      if (typeof name !== "string") {
        name = String(name);
      }
      if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
        throw new TypeError('Invalid character in header field name: "' + name + '"');
      }
      return name.toLowerCase();
    }
    function normalizeValue(value2) {
      if (typeof value2 !== "string") {
        value2 = String(value2);
      }
      return value2;
    }
    function iteratorFor(items) {
      var iterator = {
        next: function() {
          var value2 = items.shift();
          return { done: value2 === void 0, value: value2 };
        }
      };
      if (support.iterable) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }
      return iterator;
    }
    function Headers$1(headers) {
      this.map = {};
      if (headers instanceof Headers$1) {
        headers.forEach(function(value2, name) {
          this.append(name, value2);
        }, this);
      } else if (Array.isArray(headers)) {
        headers.forEach(function(header) {
          if (header.length != 2) {
            throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
          }
          this.append(header[0], header[1]);
        }, this);
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function(name) {
          this.append(name, headers[name]);
        }, this);
      }
    }
    Headers$1.prototype.append = function(name, value2) {
      name = normalizeName(name);
      value2 = normalizeValue(value2);
      var oldValue = this.map[name];
      this.map[name] = oldValue ? oldValue + ", " + value2 : value2;
    };
    Headers$1.prototype["delete"] = function(name) {
      delete this.map[normalizeName(name)];
    };
    Headers$1.prototype.get = function(name) {
      name = normalizeName(name);
      return this.has(name) ? this.map[name] : null;
    };
    Headers$1.prototype.has = function(name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };
    Headers$1.prototype.set = function(name, value2) {
      this.map[normalizeName(name)] = normalizeValue(value2);
    };
    Headers$1.prototype.forEach = function(callback, thisArg) {
      for (var name in this.map) {
        if (this.map.hasOwnProperty(name)) {
          callback.call(thisArg, this.map[name], name, this);
        }
      }
    };
    Headers$1.prototype.keys = function() {
      var items = [];
      this.forEach(function(value2, name) {
        items.push(name);
      });
      return iteratorFor(items);
    };
    Headers$1.prototype.values = function() {
      var items = [];
      this.forEach(function(value2) {
        items.push(value2);
      });
      return iteratorFor(items);
    };
    Headers$1.prototype.entries = function() {
      var items = [];
      this.forEach(function(value2, name) {
        items.push([name, value2]);
      });
      return iteratorFor(items);
    };
    if (support.iterable) {
      Headers$1.prototype[Symbol.iterator] = Headers$1.prototype.entries;
    }
    function consumed(body) {
      if (body._noBody)
        return;
      if (body.bodyUsed) {
        return Promise.reject(new TypeError("Already read"));
      }
      body.bodyUsed = true;
    }
    function fileReaderReady(reader) {
      return new Promise(function(resolve, reject) {
        reader.onload = function() {
          resolve(reader.result);
        };
        reader.onerror = function() {
          reject(reader.error);
        };
      });
    }
    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsArrayBuffer(blob);
      return promise;
    }
    function readBlobAsText(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
      var encoding = match ? match[1] : "utf-8";
      reader.readAsText(blob, encoding);
      return promise;
    }
    function readArrayBufferAsText(buf) {
      var view = new Uint8Array(buf);
      var chars2 = new Array(view.length);
      for (var i2 = 0; i2 < view.length; i2++) {
        chars2[i2] = String.fromCharCode(view[i2]);
      }
      return chars2.join("");
    }
    function bufferClone(buf) {
      if (buf.slice) {
        return buf.slice(0);
      } else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
      }
    }
    function Body() {
      this.bodyUsed = false;
      this._initBody = function(body) {
        this.bodyUsed = this.bodyUsed;
        this._bodyInit = body;
        if (!body) {
          this._noBody = true;
          this._bodyText = "";
        } else if (typeof body === "string") {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this._bodyText = body.toString();
        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
          this._bodyArrayBuffer = bufferClone(body.buffer);
          this._bodyInit = new Blob([this._bodyArrayBuffer]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
          this._bodyArrayBuffer = bufferClone(body);
        } else {
          this._bodyText = body = Object.prototype.toString.call(body);
        }
        if (!this.headers.get("content-type")) {
          if (typeof body === "string") {
            this.headers.set("content-type", "text/plain;charset=UTF-8");
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set("content-type", this._bodyBlob.type);
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
          }
        }
      };
      if (support.blob) {
        this.blob = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as blob");
          } else {
            return Promise.resolve(new Blob([this._bodyText]));
          }
        };
      }
      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          var isConsumed = consumed(this);
          if (isConsumed) {
            return isConsumed;
          } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
            return Promise.resolve(
              this._bodyArrayBuffer.buffer.slice(
                this._bodyArrayBuffer.byteOffset,
                this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
              )
            );
          } else {
            return Promise.resolve(this._bodyArrayBuffer);
          }
        } else if (support.blob) {
          return this.blob().then(readBlobAsArrayBuffer);
        } else {
          throw new Error("could not read as ArrayBuffer");
        }
      };
      this.text = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }
        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        } else if (this._bodyFormData) {
          throw new Error("could not read FormData body as text");
        } else {
          return Promise.resolve(this._bodyText);
        }
      };
      if (support.formData) {
        this.formData = function() {
          return this.text().then(decode$2);
        };
      }
      this.json = function() {
        return this.text().then(JSON.parse);
      };
      return this;
    }
    var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
    }
    function Request$2(input, options) {
      if (!(this instanceof Request$2)) {
        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
      }
      options = options || {};
      var body = options.body;
      if (input instanceof Request$2) {
        if (input.bodyUsed) {
          throw new TypeError("Already read");
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers$1(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        this.signal = input.signal;
        if (!body && input._bodyInit != null) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = String(input);
      }
      this.credentials = options.credentials || this.credentials || "same-origin";
      if (options.headers || !this.headers) {
        this.headers = new Headers$1(options.headers);
      }
      this.method = normalizeMethod(options.method || this.method || "GET");
      this.mode = options.mode || this.mode || null;
      this.signal = options.signal || this.signal || function() {
        if ("AbortController" in g$3) {
          var ctrl = new AbortController();
          return ctrl.signal;
        }
      }();
      this.referrer = null;
      if ((this.method === "GET" || this.method === "HEAD") && body) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
      }
      this._initBody(body);
      if (this.method === "GET" || this.method === "HEAD") {
        if (options.cache === "no-store" || options.cache === "no-cache") {
          var reParamSearch = /([?&])_=[^&]*/;
          if (reParamSearch.test(this.url)) {
            this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
          } else {
            var reQueryString = /\?/;
            this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
          }
        }
      }
    }
    Request$2.prototype.clone = function() {
      return new Request$2(this, { body: this._bodyInit });
    };
    function decode$2(body) {
      var form = new FormData();
      body.trim().split("&").forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split("=");
          var name = split.shift().replace(/\+/g, " ");
          var value2 = split.join("=").replace(/\+/g, " ");
          form.append(decodeURIComponent(name), decodeURIComponent(value2));
        }
      });
      return form;
    }
    function parseHeaders(rawHeaders) {
      var headers = new Headers$1();
      var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
      preProcessedHeaders.split("\r").map(function(header) {
        return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
      }).forEach(function(line) {
        var parts2 = line.split(":");
        var key = parts2.shift().trim();
        if (key) {
          var value2 = parts2.join(":").trim();
          try {
            headers.append(key, value2);
          } catch (error) {
            console.warn("Response " + error.message);
          }
        }
      });
      return headers;
    }
    Body.call(Request$2.prototype);
    function Response$1(bodyInit, options) {
      if (!(this instanceof Response$1)) {
        throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
      }
      if (!options) {
        options = {};
      }
      this.type = "default";
      this.status = options.status === void 0 ? 200 : options.status;
      if (this.status < 200 || this.status > 599) {
        throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
      }
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
      this.headers = new Headers$1(options.headers);
      this.url = options.url || "";
      this._initBody(bodyInit);
    }
    Body.call(Response$1.prototype);
    Response$1.prototype.clone = function() {
      return new Response$1(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers$1(this.headers),
        url: this.url
      });
    };
    Response$1.error = function() {
      var response = new Response$1(null, { status: 200, statusText: "" });
      response.ok = false;
      response.status = 0;
      response.type = "error";
      return response;
    };
    var redirectStatuses = [301, 302, 303, 307, 308];
    Response$1.redirect = function(url2, status) {
      if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError("Invalid status code");
      }
      return new Response$1(null, { status, headers: { location: url2 } });
    };
    var DOMException$1 = g$3.DOMException;
    try {
      new DOMException$1();
    } catch (err) {
      DOMException$1 = function(message, name) {
        this.message = message;
        this.name = name;
        var error = Error(message);
        this.stack = error.stack;
      };
      DOMException$1.prototype = Object.create(Error.prototype);
      DOMException$1.prototype.constructor = DOMException$1;
    }
    function fetch$1(input, init2) {
      return new Promise(function(resolve, reject) {
        var request = new Request$2(input, init2);
        if (request.signal && request.signal.aborted) {
          return reject(new DOMException$1("Aborted", "AbortError"));
        }
        var xhr = new XMLHttpRequest();
        function abortXhr() {
          xhr.abort();
        }
        xhr.onload = function() {
          var options = {
            statusText: xhr.statusText,
            headers: parseHeaders(xhr.getAllResponseHeaders() || "")
          };
          if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
            options.status = 200;
          } else {
            options.status = xhr.status;
          }
          options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
          var body = "response" in xhr ? xhr.response : xhr.responseText;
          setTimeout(function() {
            resolve(new Response$1(body, options));
          }, 0);
        };
        xhr.onerror = function() {
          setTimeout(function() {
            reject(new TypeError("Network request failed"));
          }, 0);
        };
        xhr.ontimeout = function() {
          setTimeout(function() {
            reject(new TypeError("Network request timed out"));
          }, 0);
        };
        xhr.onabort = function() {
          setTimeout(function() {
            reject(new DOMException$1("Aborted", "AbortError"));
          }, 0);
        };
        function fixUrl(url2) {
          try {
            return url2 === "" && g$3.location.href ? g$3.location.href : url2;
          } catch (e2) {
            return url2;
          }
        }
        xhr.open(request.method, fixUrl(request.url), true);
        if (request.credentials === "include") {
          xhr.withCredentials = true;
        } else if (request.credentials === "omit") {
          xhr.withCredentials = false;
        }
        if ("responseType" in xhr) {
          if (support.blob) {
            xhr.responseType = "blob";
          } else if (support.arrayBuffer) {
            xhr.responseType = "arraybuffer";
          }
        }
        if (init2 && typeof init2.headers === "object" && !(init2.headers instanceof Headers$1 || g$3.Headers && init2.headers instanceof g$3.Headers)) {
          var names = [];
          Object.getOwnPropertyNames(init2.headers).forEach(function(name) {
            names.push(normalizeName(name));
            xhr.setRequestHeader(name, normalizeValue(init2.headers[name]));
          });
          request.headers.forEach(function(value2, name) {
            if (names.indexOf(name) === -1) {
              xhr.setRequestHeader(name, value2);
            }
          });
        } else {
          request.headers.forEach(function(value2, name) {
            xhr.setRequestHeader(name, value2);
          });
        }
        if (request.signal) {
          request.signal.addEventListener("abort", abortXhr);
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
              request.signal.removeEventListener("abort", abortXhr);
            }
          };
        }
        xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
      });
    }
    fetch$1.polyfill = true;
    if (!g$3.fetch) {
      g$3.fetch = fetch$1;
      g$3.Headers = Headers$1;
      g$3.Request = Request$2;
      g$3.Response = Response$1;
    }
    self.fetch.bind(self);
    const environment = getEnvironment();
    let apiURL = "";
    if (environment === "development")
      apiURL = "http://localhost:8080";
    if (environment === "production") {
      apiURL = "https://calendar-analysis-l0ah.onrender.com";
    }
    const SENTRY_URL = "YOUR_SENTRY_URL";
    function getEnvironment() {
      if (window.location.href.indexOf("app-staging") !== -1)
        return "staging";
      if (window.location.href.indexOf("localhost") !== -1 || window.location.href.indexOf("127.0.0.1") !== -1)
        return "development";
      return "production";
    }
    class api {
      constructor() {
        this.token = "";
      }
      getToken() {
        return this.token;
      }
      removeToken() {
        this.token = "";
      }
      setToken(token2) {
        this.token = token2;
      }
      get(path) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await fetch(`${apiURL}${path}`, {
              mode: "cors",
              method: "GET",
              credentials: "include",
              headers: { "Content-Type": "application/json", Authorization: `JWT ${this.token}` }
            });
            const res = await response.json();
            resolve(res);
          } catch (e2) {
            reject(e2);
          }
        });
      }
      put(path, body) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await fetch(`${apiURL}${path}`, {
              mode: "cors",
              method: "PUT",
              credentials: "include",
              headers: { "Content-Type": "application/json", Authorization: `JWT ${this.token}` },
              body: typeof body === "string" ? body : JSON.stringify(body)
            });
            const res = await response.json();
            resolve(res);
          } catch (e2) {
            reject(e2);
          }
        });
      }
      postFormData(path, file) {
        let formData = new FormData();
        console.log("file", file);
        formData.append(file.name, file, file.name);
        return new Promise(async (resolve, reject) => {
          try {
            console.log(`${apiURL}${path}`);
            const response = await fetch(`${apiURL}${path}`, {
              mode: "cors",
              method: "POST",
              credentials: "include",
              headers: {},
              body: formData
            });
            const res = await response.json();
            console.log("e", res);
            resolve(res);
          } catch (e2) {
            console.log("e", e2);
            reject(e2);
          }
        });
      }
      remove(path) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await fetch(`${apiURL}${path}`, {
              mode: "cors",
              credentials: "include",
              method: "DELETE",
              headers: { "Content-Type": "application/json", Authorization: `JWT ${this.token}` }
            });
            const res = await response.json();
            resolve(res);
          } catch (e2) {
            reject(e2);
          }
        });
      }
      post(path, body) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await fetch(`${apiURL}${path}`, {
              mode: "cors",
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json", Authorization: `JWT ${this.token}` },
              body: typeof body === "string" ? body : JSON.stringify(body)
            });
            const res = await response.json();
            if (response.status !== 200) {
              return reject(res);
            }
            resolve(res);
          } catch (e2) {
            reject(e2);
          }
        });
      }
      download(path, body) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await fetch(`${apiURL}${path}`, {
              mode: "cors",
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json", Authorization: `JWT ${this.token}` },
              body: typeof body === "string" ? body : JSON.stringify(body)
            });
            if (response.status !== 200) {
              return reject(response);
            }
            resolve(response);
          } catch (e2) {
            reject(e2);
          }
        });
      }
    }
    const API = new api();
    const createStoreImpl = (createState) => {
      let state;
      const listeners = /* @__PURE__ */ new Set();
      const setState = (partial, replace) => {
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
          const previousState = state;
          state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
          listeners.forEach((listener) => listener(state, previousState));
        }
      };
      const getState = () => state;
      const subscribe = (listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      };
      const destroy = () => {
        if (({ "VITE_API_URL": "https://calendar-analysis-l0ah.onrender.com", "BASE_URL": "/calendar-analysis/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } ? "production" : void 0) !== "production") {
          console.warn(
            "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
          );
        }
        listeners.clear();
      };
      const api2 = { setState, getState, subscribe, destroy };
      state = createState(setState, getState, api2);
      return api2;
    };
    const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
    var withSelector = { exports: {} };
    var withSelector_production_min = {};
    var shim = { exports: {} };
    var useSyncExternalStoreShim_production_min = {};
    /**
     * @license React
     * use-sync-external-store-shim.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var e$1 = reactExports;
    function h$3(a2, b2) {
      return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
    }
    var k = "function" === typeof Object.is ? Object.is : h$3, l$3 = e$1.useState, m = e$1.useEffect, n$3 = e$1.useLayoutEffect, p$2 = e$1.useDebugValue;
    function q$1(a2, b2) {
      var d2 = b2(), f2 = l$3({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
      n$3(function() {
        c2.value = d2;
        c2.getSnapshot = b2;
        r$3(c2) && g2({ inst: c2 });
      }, [a2, d2, b2]);
      m(function() {
        r$3(c2) && g2({ inst: c2 });
        return a2(function() {
          r$3(c2) && g2({ inst: c2 });
        });
      }, [a2]);
      p$2(d2);
      return d2;
    }
    function r$3(a2) {
      var b2 = a2.getSnapshot;
      a2 = a2.value;
      try {
        var d2 = b2();
        return !k(a2, d2);
      } catch (f2) {
        return true;
      }
    }
    function t$4(a2, b2) {
      return b2();
    }
    var u$4 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$4 : q$1;
    useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e$1.useSyncExternalStore ? e$1.useSyncExternalStore : u$4;
    {
      shim.exports = useSyncExternalStoreShim_production_min;
    }
    var shimExports = shim.exports;
    /**
     * @license React
     * use-sync-external-store-shim/with-selector.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var h$2 = reactExports, n$2 = shimExports;
    function p$1(a2, b2) {
      return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
    }
    var q = "function" === typeof Object.is ? Object.is : p$1, r$2 = n$2.useSyncExternalStore, t$3 = h$2.useRef, u$3 = h$2.useEffect, v$1 = h$2.useMemo, w$3 = h$2.useDebugValue;
    withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
      var c2 = t$3(null);
      if (null === c2.current) {
        var f2 = { hasValue: false, value: null };
        c2.current = f2;
      } else
        f2 = c2.current;
      c2 = v$1(function() {
        function a3(a4) {
          if (!c3) {
            c3 = true;
            d3 = a4;
            a4 = l2(a4);
            if (void 0 !== g2 && f2.hasValue) {
              var b3 = f2.value;
              if (g2(b3, a4))
                return k2 = b3;
            }
            return k2 = a4;
          }
          b3 = k2;
          if (q(d3, a4))
            return b3;
          var e3 = l2(a4);
          if (void 0 !== g2 && g2(b3, e3))
            return b3;
          d3 = a4;
          return k2 = e3;
        }
        var c3 = false, d3, k2, m2 = void 0 === e2 ? null : e2;
        return [function() {
          return a3(b2());
        }, null === m2 ? void 0 : function() {
          return a3(m2());
        }];
      }, [b2, e2, l2, g2]);
      var d2 = r$2(a2, c2[0], c2[1]);
      u$3(function() {
        f2.hasValue = true;
        f2.value = d2;
      }, [d2]);
      w$3(d2);
      return d2;
    };
    {
      withSelector.exports = withSelector_production_min;
    }
    var withSelectorExports = withSelector.exports;
    const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
    const { useDebugValue } = m$4;
    const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
    let didWarnAboutEqualityFn = false;
    function useStore(api2, selector = api2.getState, equalityFn) {
      if (({ "VITE_API_URL": "https://calendar-analysis-l0ah.onrender.com", "BASE_URL": "/calendar-analysis/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
        console.warn(
          "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
        );
        didWarnAboutEqualityFn = true;
      }
      const slice = useSyncExternalStoreWithSelector(
        api2.subscribe,
        api2.getState,
        api2.getServerState || api2.getState,
        selector,
        equalityFn
      );
      useDebugValue(slice);
      return slice;
    }
    const createImpl = (createState) => {
      if (({ "VITE_API_URL": "https://calendar-analysis-l0ah.onrender.com", "BASE_URL": "/calendar-analysis/", "MODE": "production", "DEV": false, "PROD": true, "SSR": false } ? "production" : void 0) !== "production" && typeof createState !== "function") {
        console.warn(
          "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
        );
      }
      const api2 = typeof createState === "function" ? createStore(createState) : createState;
      const useBoundStore = (selector, equalityFn) => useStore(api2, selector, equalityFn);
      Object.assign(useBoundStore, api2);
      return useBoundStore;
    };
    const create = (createState) => createState ? createImpl(createState) : createImpl;
    const store = create((set2) => ({
      user: null,
      setUser: (user) => set2(() => ({ user })),
      organization: null,
      setOrganization: (organization) => set2(() => ({ organization })),
      isNavCollapsed: false,
      setNavCollapsed: (isNavCollapsed) => set2(() => ({ isNavCollapsed }))
    }));
    function Signin() {
      const [loading, setLoading] = reactExports.useState(false);
      const { setUser } = store();
      useNavigate();
      const handleGoogleLogin = async () => {
        if (!window.google) {
          return _t.error("Google script not loaded yet");
        }
        setLoading(true);
        try {
          const { ok: okConfig, data: clientId } = await API.get("/user/google-client-id");
          if (!okConfig)
            throw new Error("Could not fetch Google configuration");
          const client2 = window.google.accounts.oauth2.initCodeClient({
            client_id: clientId,
            scope: "https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
            ux_mode: "popup",
            access_type: "offline",
            prompt: "consent",
            callback: async (response) => {
              if (response.error) {
                setLoading(false);
                return _t.error("Error with Google login");
              }
              try {
                const { ok: ok2, user, token: token2 } = await API.post("/user/google-login", {
                  code: response.code
                });
                if (!ok2) {
                  setLoading(false);
                  return _t.error("Failed to login with Google");
                }
                if (token2)
                  API.setToken(token2);
                if (user)
                  setUser(user);
                _t.success("Successfully signed in with Google!");
              } catch (e2) {
                console.error(e2);
                _t.error("An error occurred during Google login");
                setLoading(false);
              }
            }
          });
          client2.requestCode();
        } catch (e2) {
          console.error(e2);
          _t.error(e2.message || "An error occurred");
          setLoading(false);
        }
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-md mx-auto p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl border border-indigo-100 shadow-xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-center text-gray-900 mb-2", children: "Sign in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-gray-600 mb-6", children: "Continue to your calendar analysis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleGoogleLogin,
            disabled: loading,
            className: "w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 transition-all shadow-sm font-medium text-gray-700",
            children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FcGoogle, { size: 20 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Continue with Google" })
            ] })
          }
        )
      ] }) });
    }
    const Auth = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Signin, {}) }) });
    };
    function HiArrowLeft(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z", "clipRule": "evenodd" } }] })(props);
    }
    function HiArrowPath(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z", "clipRule": "evenodd" } }] })(props);
    }
    function HiBars3(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z", "clipRule": "evenodd" } }] })(props);
    }
    function HiCalendar(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z", "clipRule": "evenodd" } }] })(props);
    }
    function HiCamera(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" } }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z", "clipRule": "evenodd" } }] })(props);
    }
    function HiChartBar(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "d": "M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" } }] })(props);
    }
    function HiChevronDown(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z", "clipRule": "evenodd" } }] })(props);
    }
    function HiChevronLeft(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z", "clipRule": "evenodd" } }] })(props);
    }
    function HiChevronRight(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z", "clipRule": "evenodd" } }] })(props);
    }
    function HiChevronUp(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z", "clipRule": "evenodd" } }] })(props);
    }
    function HiListBullet(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z", "clipRule": "evenodd" } }] })(props);
    }
    function HiMagnifyingGlass(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z", "clipRule": "evenodd" } }] })(props);
    }
    function HiShare(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z", "clipRule": "evenodd" } }] })(props);
    }
    function HiSparkles(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z", "clipRule": "evenodd" } }] })(props);
    }
    function HiSquares2X2(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z", "clipRule": "evenodd" } }] })(props);
    }
    function HiTrash(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z", "clipRule": "evenodd" } }] })(props);
    }
    function HiXMark(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z", "clipRule": "evenodd" } }] })(props);
    }
    function HiOutlineCodeBracket(props) {
      return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" } }] })(props);
    }
    function HiOutlineGift$1(props) {
      return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" } }] })(props);
    }
    function HiOutlineInformationCircle(props) {
      return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" } }] })(props);
    }
    const Loader = ({ size }) => {
      if (size === "small") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center space-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-l-primary animate-spin text-primary inline-block h-4 w-4 border-2 rounded-full", role: "status" }) });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center space-x-2 m-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-l-primary animate-spin text-primary inline-block w-16 h-16 border-[6px] rounded-full", role: "status" }) });
    };
    function SearchBar({ search, setFilter, placeholder = "Search" }) {
      const handleChange = (e2) => {
        e2.persist();
        setFilter((f2) => ({ ...f2, search: e2.target.value, page: 1 }));
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-md shadow-sm w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiMagnifyingGlass, { className: "h-5 w-5 text-gray-400" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            name: "search",
            value: search,
            onChange: handleChange,
            className: "block w-full h-10 rounded-md border border-gray-300 pl-10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-sm transition-all",
            placeholder
          }
        )
      ] });
    }
    function IoIosArrowBack(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" } }] })(props);
    }
    function IoIosArrowForward(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" } }] })(props);
    }
    function Pagination({ total, per_page = 10, currentPage = 1, onChange = () => {
    } }) {
      const totalPages = Math.ceil(total / per_page);
      const getPages = () => {
        const pages = [];
        const range = 2;
        if (totalPages <= 7) {
          for (let i2 = 1; i2 <= totalPages; i2++)
            pages.push(i2);
        } else {
          pages.push(1);
          if (currentPage > range + 2)
            pages.push("...");
          const start = Math.max(2, currentPage - range);
          const end = Math.min(totalPages - 1, currentPage + range);
          for (let i2 = start; i2 <= end; i2++)
            pages.push(i2);
          if (currentPage < totalPages - (range + 1))
            pages.push("...");
          pages.push(totalPages);
        }
        return pages;
      };
      if (total <= 0)
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-8 text-gray-500 bg-white rounded-xl border border-gray-200", children: "No results found" });
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-2", "aria-label": "Pagination", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: currentPage <= 1, onClick: () => onChange(currentPage - 1), className: "p-2 text-gray-400 hover:text-indigo-600 disabled:opacity-30 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IoIosArrowBack, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: getPages().map((page, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(m$4.Fragment, { children: page === "..." ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-2 text-gray-400", children: "..." }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => onChange(page),
            className: `
                    min-w-[40px] h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all
                    ${currentPage === page ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"}
                  `,
            children: page
          }
        ) }, index2)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            disabled: currentPage >= totalPages,
            onClick: () => onChange(currentPage + 1),
            className: "p-2 text-gray-400 hover:text-indigo-600 disabled:opacity-30 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(IoIosArrowForward, { className: "h-5 w-5" })
          }
        )
      ] }) });
    }
    function List$2() {
      const [calendars, setCalendars] = reactExports.useState([]);
      const [loading, setLoading] = reactExports.useState(true);
      const [filters, setFilters] = reactExports.useState({ search: "", page: 1, limit: 10 });
      const [total, setTotal] = reactExports.useState(0);
      const navigate = useNavigate();
      const fetchCalendars = async () => {
        try {
          const { ok: ok2, data, total: total2 } = await API.post("/calendar/search", filters);
          if (!ok2) {
            if ((data == null ? void 0 : data.code) !== "GOOGLE_NOT_CONNECTED") {
              _t.error("Failed to fetch calendars");
            }
            return;
          }
          setCalendars(data);
          setTotal(total2);
        } catch (e2) {
          console.error(e2);
          _t.error("An error occurred while fetching calendars");
        } finally {
          setLoading(false);
        }
      };
      reactExports.useEffect(() => {
        fetchCalendars();
      }, [filters.search, filters.page]);
      if (loading && !calendars.length)
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiSparkles, { className: "text-white h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Your Calendars" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Select a calendar to analyze its events" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => navigate("/syncing"),
                className: "flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all disabled:opacity-50",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HiArrowPath, { className: "h-4 w-4" }),
                  "Refresh"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchBar, { search: filters.search, setFilter: setFilters, placeholder: "Search calendars..." }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8", children: [
          calendars.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-full bg-white rounded-xl border border-gray-200 p-8 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HiCalendar, { size: 48, className: "mx-auto mb-4 text-gray-300" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "No calendars found or Google not connected." })
          ] }),
          calendars.map((calendar2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => navigate(`/calendars/${calendar2._id}`),
              className: "bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-all flex items-center gap-4 text-left",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full flex-shrink-0", style: { backgroundColor: calendar2.backgroundColor } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-900 truncate", children: calendar2.summary }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 truncate", children: calendar2.description || "No description" })
                ] }),
                calendar2.primary && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full", children: "Primary" })
              ]
            },
            calendar2._id
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { total, per_page: filters.limit, currentPage: filters.page, onChange: (page) => setFilters((f2) => ({ ...f2, page })) })
      ] }) });
    }
    function MdCheckBoxOutlineBlank(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" } }] })(props);
    }
    function MdCheckBox(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" } }] })(props);
    }
    function MultiSelect({ id: id2, options, values, onSelectedChange, placeholder = "Select an option" }) {
      const [selectedOptions, setSelectedOptions] = reactExports.useState([]);
      const [isOpen, setIsOpen] = reactExports.useState(false);
      const ref = reactExports.useRef(null);
      const [search, setSearch] = reactExports.useState("");
      reactExports.useEffect(() => {
        if (values) {
          setSelectedOptions(values);
        }
      }, [values]);
      function handleOptionClick(option) {
        let _selectedOptions;
        if (selectedOptions.find((_option) => _option.value === option.value)) {
          _selectedOptions = selectedOptions.filter((_option) => _option.value !== option.value);
        } else {
          _selectedOptions = [...selectedOptions, option];
        }
        setSelectedOptions(_selectedOptions);
        onSelectedChange(_selectedOptions);
      }
      function handleToggleClick() {
        setIsOpen(!isOpen);
      }
      reactExports.useEffect(() => {
        const handleClickOutside = (event) => {
          const idRegex = new RegExp(id2);
          if (ref.current && !ref.current.contains(event.target) && !idRegex.test(event.target.id)) {
            setIsOpen(false);
          }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
          document.removeEventListener("click", handleClickOutside, true);
        };
      }, []);
      reactExports.useEffect(() => {
        if (!isOpen)
          setSearch("");
      }, [isOpen]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            id: id2,
            type: "button",
            onClick: handleToggleClick,
            className: "min-w-[180px] inline-flex justify-between items-center gap-4 px-2 pr-1 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: `${id2}-text`, className: "flex-1 text-left", children: selectedOptions.length === 0 ? placeholder : `${placeholder} (${selectedOptions.length})` }),
              isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronUp, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronDown, {})
            ]
          }
        ),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "absolute z-10 mt-1 max-h-96 w-fit bg-white shadow-lg rounded-md overflow-y-scroll", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "border border-gray-200 divide-y divide-gray-200 list-none w-fit", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex items-center gap-1 text-sm cursor-pointer w-96", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiMagnifyingGlass, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 md:text-sm transition-all",
                placeholder: "Search...",
                value: search,
                onChange: (e2) => {
                  e2.persist();
                  setSearch(e2.target.value.trim());
                }
              }
            )
          ] }) }),
          options.filter((o2) => {
            if (!search)
              return true;
            return o2.label.toLowerCase().includes(search.toLowerCase());
          }).map((option) => {
            const isSelected = selectedOptions.find((_option) => _option.value === option.value);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                onClick: () => handleOptionClick(option),
                className: "flex items-center gap-1 hover:bg-indigo-50 text-sm px-2 py-1 cursor-pointer w-96 transition-colors",
                children: [
                  isSelected ? /* @__PURE__ */ jsxRuntimeExports.jsx(MdCheckBox, { className: "text-indigo-600" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MdCheckBoxOutlineBlank, { className: "text-gray-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex-1 ${isSelected ? "font-semibold text-indigo-600" : "font-normal"}`, children: option.label })
                ]
              },
              option.value
            );
          })
        ] }) })
      ] });
    }
    const Tab = ({ title, active, Icon, onClick }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick,
        className: `group inline-flex items-center px-4 py-2 cursor-pointer text-sm font-medium transition-all border-b-2 ${active ? "text-indigo-600 border-indigo-600" : "text-gray-400 border-transparent hover:border-indigo-400 hover:text-indigo-600"}`,
        children: [
          Icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `${active ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-500"} -ml-0.5 mr-2 h-4 w-4`, "aria-hidden": "true" }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: title })
        ]
      }
    );
    function View$2() {
      const { id: id2 } = useParams();
      const navigate = useNavigate();
      const [calendar2, setCalendar] = reactExports.useState(null);
      const [events, setEvents] = reactExports.useState([]);
      const [analysis, setAnalysis] = reactExports.useState([]);
      const [loading, setLoading] = reactExports.useState(true);
      const [syncing, setSyncing] = reactExports.useState(false);
      const [activeTab, setActiveTab] = reactExports.useState("analysis");
      const [filters, setFilters] = reactExports.useState({ search: "", status: [], startAfter: "", startBefore: "", page: 1, limit: 25 });
      const [total, setTotal] = reactExports.useState(0);
      const [analysisTotal, setAnalysisTotal] = reactExports.useState(0);
      const [analysisPage, setAnalysisPage] = reactExports.useState(1);
      const [analysisSort, setAnalysisSort] = reactExports.useState({ totalDuration: -1 });
      const STATUS_OPTIONS = [
        { label: "Confirmed", value: "confirmed" },
        { label: "Tentative", value: "tentative" },
        { label: "Cancelled", value: "cancelled" }
      ];
      const fetchCalendar = async () => {
        try {
          const { ok: ok2, data } = await API.get(`/calendar/${id2}`);
          if (!ok2)
            return _t.error("Calendar not found");
          setCalendar(data);
        } catch (e2) {
          console.error(e2);
          _t.error("An error occurred while fetching calendar info");
        }
      };
      const fetchAnalysis = async () => {
        try {
          const { ok: ok2, data, total: total2 } = await API.post("/event/analysis", {
            ...filters,
            calendar_id: id2,
            page: analysisPage,
            limit: 10,
            sort: analysisSort
          });
          if (!ok2)
            return _t.error("Failed to fetch analysis");
          setAnalysis(data);
          setAnalysisTotal(total2);
        } catch (e2) {
          console.error(e2);
          _t.error("An error occurred while fetching analysis");
        }
      };
      const fetchEvents = async () => {
        try {
          const { ok: ok2, data, total: total2 } = await API.post("/event/search", {
            ...filters,
            calendar_id: id2
          });
          if (!ok2)
            return _t.error("Failed to fetch events");
          setEvents(data);
          setTotal(total2);
        } catch (e2) {
          console.error(e2);
          _t.error("An error occurred while fetching events");
        } finally {
          setLoading(false);
        }
      };
      const handleSync = async () => {
        setSyncing(true);
        try {
          const { ok: ok2 } = await API.post(`/calendar/${id2}/sync`);
          if (!ok2)
            throw new Error("Sync failed");
          _t.success("Events synced successfully!");
          fetchEvents();
          fetchAnalysis();
        } catch (e2) {
          console.error(e2);
          _t.error("Failed to sync events");
        } finally {
          setSyncing(false);
        }
      };
      reactExports.useEffect(() => {
        if (id2) {
          fetchCalendar();
        }
      }, [id2]);
      reactExports.useEffect(() => {
        if (id2) {
          if (activeTab === "analysis")
            fetchAnalysis();
          if (activeTab === "list")
            fetchEvents();
        }
      }, [id2, activeTab, analysisPage, analysisSort, filters.search, filters.status, filters.startAfter, filters.startBefore, filters.page]);
      if (loading && !calendar2)
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate("/calendars"), className: "flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HiArrowLeft, { size: 16 }),
            "Back to calendars"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleSync,
                disabled: syncing,
                className: "flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all disabled:opacity-50",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(HiArrowPath, { className: `h-4 w-4 ${syncing ? "animate-spin" : ""}` }),
                  syncing ? "Syncing..." : "Refresh"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchBar, { search: filters.search, setFilter: setFilters, placeholder: "Search events..." }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg flex items-center justify-center text-white", style: { backgroundColor: (calendar2 == null ? void 0 : calendar2.backgroundColor) || "#4f46e5" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiCalendar, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: (calendar2 == null ? void 0 : calendar2.summary) || "Calendar Events" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: (calendar2 == null ? void 0 : calendar2.description) || "Events from the selected calendar" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-white p-4 rounded-xl border border-gray-200 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-500 uppercase mb-1", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MultiSelect,
              {
                id: "status-filter",
                placeholder: "All Status",
                options: STATUS_OPTIONS,
                values: STATUS_OPTIONS.filter((opt) => filters.status.includes(opt.value)),
                onSelectedChange: (selected) => {
                  setFilters((f2) => ({ ...f2, status: selected.map((s2) => s2.value), page: 1 }));
                  setAnalysisPage(1);
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-500 uppercase mb-1", children: "From" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                value: filters.startAfter,
                onChange: (e2) => {
                  setFilters((f2) => ({ ...f2, startAfter: e2.target.value, page: 1 }));
                  setAnalysisPage(1);
                },
                className: "w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-500 uppercase mb-1", children: "To" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                value: filters.startBefore,
                onChange: (e2) => {
                  setFilters((f2) => ({ ...f2, startBefore: e2.target.value, page: 1 }));
                  setAnalysisPage(1);
                },
                className: "w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-gray-200 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { title: "Analysis", active: activeTab === "analysis", onClick: () => setActiveTab("analysis"), Icon: HiChartBar }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { title: "Event List", active: activeTab === "list", onClick: () => setActiveTab("list"), Icon: HiListBullet }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { title: "Raw Data", active: activeTab === "raw", onClick: () => setActiveTab("raw"), Icon: HiOutlineCodeBracket })
        ] }),
        syncing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-200 p-12 text-center mb-8 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 font-medium tracking-tight", children: "Updating your calendar data..." })
        ] }),
        !syncing && activeTab === "analysis" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Analysis,
            {
              data: analysis,
              sort: analysisSort,
              setSort: (s2) => {
                setAnalysisSort(s2);
                setAnalysisPage(1);
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { total: analysisTotal, per_page: 10, currentPage: analysisPage, onChange: (page) => setAnalysisPage(page) })
        ] }),
        !syncing && activeTab === "list" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-gray-100", children: events.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center text-gray-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HiCalendar, { size: 48, className: "mx-auto mb-4 opacity-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No events found." })
          ] }) : events.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate(`/events/${event._id}`), className: "w-full p-4 hover:bg-gray-50 transition-colors text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-gray-900 truncate", children: event.summary || "(No title)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-1", children: new Date(event.start.dateTime || event.start.date).toLocaleString([], {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
              }) })
            ] }),
            event.status === "confirmed" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full", children: "Confirmed" })
          ] }) }, event._id)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { total, per_page: filters.limit, currentPage: filters.page, onChange: (page) => setFilters((f2) => ({ ...f2, page })) })
        ] }),
        !syncing && activeTab === "raw" && /* @__PURE__ */ jsxRuntimeExports.jsx(RawData$1, { data: calendar2 })
      ] }) });
    }
    function Analysis({ data, sort, setSort }) {
      const [expandedRows, setExpandedRows] = reactExports.useState([]);
      const formatDuration = (ms) => {
        const hours2 = ms / (1e3 * 60 * 60);
        return hours2.toFixed(1);
      };
      const toggleRow = (id2) => {
        setExpandedRows((prev) => prev.includes(id2) ? prev.filter((r2) => r2 !== id2) : [...prev, id2]);
      };
      const handleSort = (field) => {
        const newDirection = sort[field] === -1 ? 1 : -1;
        setSort({ [field]: newDirection });
      };
      const getSortIcon = (field) => {
        if (!sort[field])
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-4" });
        return sort[field] === -1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronDown, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronUp, { className: "h-4 w-4" });
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50 border-b border-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors",
              onClick: () => handleSort("_id"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                "Event Name ",
                getSortIcon("_id")
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center cursor-pointer hover:bg-gray-100 transition-colors",
              onClick: () => handleSort("count"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1", children: [
                "Occurrences ",
                getSortIcon("count")
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right cursor-pointer hover:bg-gray-100 transition-colors",
              onClick: () => handleSort("totalDuration"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1", children: [
                "Total Hours ",
                getSortIcon("totalDuration")
              ] })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-100", children: data.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "4", className: "px-6 py-12 text-center text-gray-500", children: "No data available for analysis." }) }) : data.map((item) => {
          const hasSubNames = item.sub_names && item.sub_names.length > 0 && item.sub_names.some((s2) => s2.sub_name);
          const isExpanded = expandedRows.includes(item._id);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(m$4.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 transition-colors group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: hasSubNames && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleRow(item._id), className: "text-gray-400 hover:text-indigo-600 transition-colors", children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronDown, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronRight, { size: 20 }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-900", children: item._id || "(No title)" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800", children: item.count }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-900 font-semibold", children: [
                formatDuration(item.totalDuration),
                "h"
              ] }) })
            ] }),
            isExpanded && hasSubNames && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "4", className: "bg-gray-50/50 px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-10 border-l-2 border-indigo-100 pl-6 space-y-3", children: item.sub_names.filter((s2) => s2.sub_name).sort((a2, b2) => b2.duration - a2.duration).map((sub, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between group/sub", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 font-medium group-hover/sub:text-indigo-600 transition-colors", children: sub.sub_name }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-400 bg-white border border-gray-100 px-2 py-0.5 rounded-md", children: [
                  sub.count,
                  " occ."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 font-semibold w-16 text-right", children: [
                  formatDuration(sub.duration),
                  "h"
                ] })
              ] })
            ] }, idx)) }) }) })
          ] }, item._id);
        }) })
      ] }) });
    }
    function RawData$1({ data }) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-900 rounded-xl border border-gray-800 shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-gray-400 underline", children: "calendar_data.json" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                navigator.clipboard.writeText(JSON.stringify(data, null, 2));
                _t.success("Copied to clipboard");
              },
              className: "text-xs text-gray-400 hover:text-white transition-colors",
              children: "Copy JSON"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "p-6 text-indigo-300 font-mono text-xs overflow-auto max-h-[600px] leading-relaxed", children: JSON.stringify(data, null, 2) })
      ] });
    }
    function Calendar() {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/:id", element: /* @__PURE__ */ jsxRuntimeExports.jsx(View$2, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(List$2, {}) })
      ] });
    }
    const PACKET_TYPES = /* @__PURE__ */ Object.create(null);
    PACKET_TYPES["open"] = "0";
    PACKET_TYPES["close"] = "1";
    PACKET_TYPES["ping"] = "2";
    PACKET_TYPES["pong"] = "3";
    PACKET_TYPES["message"] = "4";
    PACKET_TYPES["upgrade"] = "5";
    PACKET_TYPES["noop"] = "6";
    const PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
    Object.keys(PACKET_TYPES).forEach((key) => {
      PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
    });
    const ERROR_PACKET = { type: "error", data: "parser error" };
    const withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
    const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
    const isView$1 = (obj) => {
      return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
    };
    const encodePacket = ({ type, data }, supportsBinary, callback) => {
      if (withNativeBlob$1 && data instanceof Blob) {
        if (supportsBinary) {
          return callback(data);
        } else {
          return encodeBlobAsBase64(data, callback);
        }
      } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
        if (supportsBinary) {
          return callback(data);
        } else {
          return encodeBlobAsBase64(new Blob([data]), callback);
        }
      }
      return callback(PACKET_TYPES[type] + (data || ""));
    };
    const encodeBlobAsBase64 = (data, callback) => {
      const fileReader = new FileReader();
      fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
      };
      return fileReader.readAsDataURL(data);
    };
    function toArray$1(data) {
      if (data instanceof Uint8Array) {
        return data;
      } else if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
      } else {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
      }
    }
    let TEXT_ENCODER;
    function encodePacketToBinary(packet, callback) {
      if (withNativeBlob$1 && packet.data instanceof Blob) {
        return packet.data.arrayBuffer().then(toArray$1).then(callback);
      } else if (withNativeArrayBuffer$2 && (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
        return callback(toArray$1(packet.data));
      }
      encodePacket(packet, false, (encoded) => {
        if (!TEXT_ENCODER) {
          TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
      });
    }
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
    for (let i2 = 0; i2 < chars.length; i2++) {
      lookup$1[chars.charCodeAt(i2)] = i2;
    }
    const decode$1 = (base64) => {
      let bufferLength = base64.length * 0.75, len = base64.length, i2, p2 = 0, encoded1, encoded2, encoded3, encoded4;
      if (base64[base64.length - 1] === "=") {
        bufferLength--;
        if (base64[base64.length - 2] === "=") {
          bufferLength--;
        }
      }
      const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
      for (i2 = 0; i2 < len; i2 += 4) {
        encoded1 = lookup$1[base64.charCodeAt(i2)];
        encoded2 = lookup$1[base64.charCodeAt(i2 + 1)];
        encoded3 = lookup$1[base64.charCodeAt(i2 + 2)];
        encoded4 = lookup$1[base64.charCodeAt(i2 + 3)];
        bytes[p2++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p2++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p2++] = (encoded3 & 3) << 6 | encoded4 & 63;
      }
      return arraybuffer;
    };
    const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
    const decodePacket = (encodedPacket, binaryType) => {
      if (typeof encodedPacket !== "string") {
        return {
          type: "message",
          data: mapBinary(encodedPacket, binaryType)
        };
      }
      const type = encodedPacket.charAt(0);
      if (type === "b") {
        return {
          type: "message",
          data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
      }
      const packetType = PACKET_TYPES_REVERSE[type];
      if (!packetType) {
        return ERROR_PACKET;
      }
      return encodedPacket.length > 1 ? {
        type: PACKET_TYPES_REVERSE[type],
        data: encodedPacket.substring(1)
      } : {
        type: PACKET_TYPES_REVERSE[type]
      };
    };
    const decodeBase64Packet = (data, binaryType) => {
      if (withNativeArrayBuffer$1) {
        const decoded = decode$1(data);
        return mapBinary(decoded, binaryType);
      } else {
        return { base64: true, data };
      }
    };
    const mapBinary = (data, binaryType) => {
      switch (binaryType) {
        case "blob":
          if (data instanceof Blob) {
            return data;
          } else {
            return new Blob([data]);
          }
        case "arraybuffer":
        default:
          if (data instanceof ArrayBuffer) {
            return data;
          } else {
            return data.buffer;
          }
      }
    };
    const SEPARATOR = String.fromCharCode(30);
    const encodePayload = (packets, callback) => {
      const length = packets.length;
      const encodedPackets = new Array(length);
      let count = 0;
      packets.forEach((packet, i2) => {
        encodePacket(packet, false, (encodedPacket) => {
          encodedPackets[i2] = encodedPacket;
          if (++count === length) {
            callback(encodedPackets.join(SEPARATOR));
          }
        });
      });
    };
    const decodePayload = (encodedPayload, binaryType) => {
      const encodedPackets = encodedPayload.split(SEPARATOR);
      const packets = [];
      for (let i2 = 0; i2 < encodedPackets.length; i2++) {
        const decodedPacket = decodePacket(encodedPackets[i2], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
          break;
        }
      }
      return packets;
    };
    function createPacketEncoderStream() {
      return new TransformStream({
        transform(packet, controller) {
          encodePacketToBinary(packet, (encodedPacket) => {
            const payloadLength = encodedPacket.length;
            let header;
            if (payloadLength < 126) {
              header = new Uint8Array(1);
              new DataView(header.buffer).setUint8(0, payloadLength);
            } else if (payloadLength < 65536) {
              header = new Uint8Array(3);
              const view = new DataView(header.buffer);
              view.setUint8(0, 126);
              view.setUint16(1, payloadLength);
            } else {
              header = new Uint8Array(9);
              const view = new DataView(header.buffer);
              view.setUint8(0, 127);
              view.setBigUint64(1, BigInt(payloadLength));
            }
            if (packet.data && typeof packet.data !== "string") {
              header[0] |= 128;
            }
            controller.enqueue(header);
            controller.enqueue(encodedPacket);
          });
        }
      });
    }
    let TEXT_DECODER;
    function totalLength(chunks) {
      return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
    }
    function concatChunks(chunks, size) {
      if (chunks[0].length === size) {
        return chunks.shift();
      }
      const buffer = new Uint8Array(size);
      let j2 = 0;
      for (let i2 = 0; i2 < size; i2++) {
        buffer[i2] = chunks[0][j2++];
        if (j2 === chunks[0].length) {
          chunks.shift();
          j2 = 0;
        }
      }
      if (chunks.length && j2 < chunks[0].length) {
        chunks[0] = chunks[0].slice(j2);
      }
      return buffer;
    }
    function createPacketDecoderStream(maxPayload, binaryType) {
      if (!TEXT_DECODER) {
        TEXT_DECODER = new TextDecoder();
      }
      const chunks = [];
      let state = 0;
      let expectedLength = -1;
      let isBinary2 = false;
      return new TransformStream({
        transform(chunk, controller) {
          chunks.push(chunk);
          while (true) {
            if (state === 0) {
              if (totalLength(chunks) < 1) {
                break;
              }
              const header = concatChunks(chunks, 1);
              isBinary2 = (header[0] & 128) === 128;
              expectedLength = header[0] & 127;
              if (expectedLength < 126) {
                state = 3;
              } else if (expectedLength === 126) {
                state = 1;
              } else {
                state = 2;
              }
            } else if (state === 1) {
              if (totalLength(chunks) < 2) {
                break;
              }
              const headerArray = concatChunks(chunks, 2);
              expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
              state = 3;
            } else if (state === 2) {
              if (totalLength(chunks) < 8) {
                break;
              }
              const headerArray = concatChunks(chunks, 8);
              const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
              const n2 = view.getUint32(0);
              if (n2 > Math.pow(2, 53 - 32) - 1) {
                controller.enqueue(ERROR_PACKET);
                break;
              }
              expectedLength = n2 * Math.pow(2, 32) + view.getUint32(4);
              state = 3;
            } else {
              if (totalLength(chunks) < expectedLength) {
                break;
              }
              const data = concatChunks(chunks, expectedLength);
              controller.enqueue(decodePacket(isBinary2 ? data : TEXT_DECODER.decode(data), binaryType));
              state = 0;
            }
            if (expectedLength === 0 || expectedLength > maxPayload) {
              controller.enqueue(ERROR_PACKET);
              break;
            }
          }
        }
      });
    }
    const protocol$1 = 4;
    function Emitter(obj) {
      if (obj)
        return mixin(obj);
    }
    function mixin(obj) {
      for (var key in Emitter.prototype) {
        obj[key] = Emitter.prototype[key];
      }
      return obj;
    }
    Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
      return this;
    };
    Emitter.prototype.once = function(event, fn) {
      function on2() {
        this.off(event, on2);
        fn.apply(this, arguments);
      }
      on2.fn = fn;
      this.on(event, on2);
      return this;
    };
    Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
      this._callbacks = this._callbacks || {};
      if (0 == arguments.length) {
        this._callbacks = {};
        return this;
      }
      var callbacks = this._callbacks["$" + event];
      if (!callbacks)
        return this;
      if (1 == arguments.length) {
        delete this._callbacks["$" + event];
        return this;
      }
      var cb2;
      for (var i2 = 0; i2 < callbacks.length; i2++) {
        cb2 = callbacks[i2];
        if (cb2 === fn || cb2.fn === fn) {
          callbacks.splice(i2, 1);
          break;
        }
      }
      if (callbacks.length === 0) {
        delete this._callbacks["$" + event];
      }
      return this;
    };
    Emitter.prototype.emit = function(event) {
      this._callbacks = this._callbacks || {};
      var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
      for (var i2 = 1; i2 < arguments.length; i2++) {
        args[i2 - 1] = arguments[i2];
      }
      if (callbacks) {
        callbacks = callbacks.slice(0);
        for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
          callbacks[i2].apply(this, args);
        }
      }
      return this;
    };
    Emitter.prototype.emitReserved = Emitter.prototype.emit;
    Emitter.prototype.listeners = function(event) {
      this._callbacks = this._callbacks || {};
      return this._callbacks["$" + event] || [];
    };
    Emitter.prototype.hasListeners = function(event) {
      return !!this.listeners(event).length;
    };
    const nextTick = (() => {
      const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
      if (isPromiseAvailable) {
        return (cb2) => Promise.resolve().then(cb2);
      } else {
        return (cb2, setTimeoutFn) => setTimeoutFn(cb2, 0);
      }
    })();
    const globalThisShim = (() => {
      if (typeof self !== "undefined") {
        return self;
      } else if (typeof window !== "undefined") {
        return window;
      } else {
        return Function("return this")();
      }
    })();
    const defaultBinaryType = "arraybuffer";
    function createCookieJar() {
    }
    function pick(obj, ...attr) {
      return attr.reduce((acc, k2) => {
        if (obj.hasOwnProperty(k2)) {
          acc[k2] = obj[k2];
        }
        return acc;
      }, {});
    }
    const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
    const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
    function installTimerFunctions(obj, opts) {
      if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
      } else {
        obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
        obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
      }
    }
    const BASE64_OVERHEAD = 1.33;
    function byteLength(obj) {
      if (typeof obj === "string") {
        return utf8Length(obj);
      }
      return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
    }
    function utf8Length(str) {
      let c2 = 0, length = 0;
      for (let i2 = 0, l2 = str.length; i2 < l2; i2++) {
        c2 = str.charCodeAt(i2);
        if (c2 < 128) {
          length += 1;
        } else if (c2 < 2048) {
          length += 2;
        } else if (c2 < 55296 || c2 >= 57344) {
          length += 3;
        } else {
          i2++;
          length += 4;
        }
      }
      return length;
    }
    function randomString() {
      return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
    }
    function encode(obj) {
      let str = "";
      for (let i2 in obj) {
        if (obj.hasOwnProperty(i2)) {
          if (str.length)
            str += "&";
          str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
        }
      }
      return str;
    }
    function decode(qs) {
      let qry = {};
      let pairs = qs.split("&");
      for (let i2 = 0, l2 = pairs.length; i2 < l2; i2++) {
        let pair = pairs[i2].split("=");
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
      }
      return qry;
    }
    class TransportError extends Error {
      constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
      }
    }
    class Transport extends Emitter {
      /**
       * Transport abstract constructor.
       *
       * @param {Object} opts - options
       * @protected
       */
      constructor(opts) {
        super();
        this.writable = false;
        installTimerFunctions(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
        this.supportsBinary = !opts.forceBase64;
      }
      /**
       * Emits an error.
       *
       * @param {String} reason
       * @param description
       * @param context - the error context
       * @return {Transport} for chaining
       * @protected
       */
      onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
      }
      /**
       * Opens the transport.
       */
      open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
      }
      /**
       * Closes the transport.
       */
      close() {
        if (this.readyState === "opening" || this.readyState === "open") {
          this.doClose();
          this.onClose();
        }
        return this;
      }
      /**
       * Sends multiple packets.
       *
       * @param {Array} packets
       */
      send(packets) {
        if (this.readyState === "open") {
          this.write(packets);
        }
      }
      /**
       * Called upon open
       *
       * @protected
       */
      onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
      }
      /**
       * Called with data.
       *
       * @param {String} data
       * @protected
       */
      onData(data) {
        const packet = decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
      }
      /**
       * Called with a decoded packet.
       *
       * @protected
       */
      onPacket(packet) {
        super.emitReserved("packet", packet);
      }
      /**
       * Called upon close.
       *
       * @protected
       */
      onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
      }
      /**
       * Pauses the transport, in order not to lose packets during an upgrade.
       *
       * @param onPause
       */
      pause(onPause) {
      }
      createUri(schema, query = {}) {
        return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
      }
      _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
      }
      _port() {
        if (this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80)) {
          return ":" + this.opts.port;
        } else {
          return "";
        }
      }
      _query(query) {
        const encodedQuery = encode(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
      }
    }
    class Polling extends Transport {
      constructor() {
        super(...arguments);
        this._polling = false;
      }
      get name() {
        return "polling";
      }
      /**
       * Opens the socket (triggers polling). We write a PING message to determine
       * when the transport is open.
       *
       * @protected
       */
      doOpen() {
        this._poll();
      }
      /**
       * Pauses polling.
       *
       * @param {Function} onPause - callback upon buffers are flushed and transport is paused
       * @package
       */
      pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
          this.readyState = "paused";
          onPause();
        };
        if (this._polling || !this.writable) {
          let total = 0;
          if (this._polling) {
            total++;
            this.once("pollComplete", function() {
              --total || pause();
            });
          }
          if (!this.writable) {
            total++;
            this.once("drain", function() {
              --total || pause();
            });
          }
        } else {
          pause();
        }
      }
      /**
       * Starts polling cycle.
       *
       * @private
       */
      _poll() {
        this._polling = true;
        this.doPoll();
        this.emitReserved("poll");
      }
      /**
       * Overloads onData to detect payloads.
       *
       * @protected
       */
      onData(data) {
        const callback = (packet) => {
          if ("opening" === this.readyState && packet.type === "open") {
            this.onOpen();
          }
          if ("close" === packet.type) {
            this.onClose({ description: "transport closed by the server" });
            return false;
          }
          this.onPacket(packet);
        };
        decodePayload(data, this.socket.binaryType).forEach(callback);
        if ("closed" !== this.readyState) {
          this._polling = false;
          this.emitReserved("pollComplete");
          if ("open" === this.readyState) {
            this._poll();
          }
        }
      }
      /**
       * For polling, send a close packet.
       *
       * @protected
       */
      doClose() {
        const close = () => {
          this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
          close();
        } else {
          this.once("open", close);
        }
      }
      /**
       * Writes a packets payload.
       *
       * @param {Array} packets - data packets
       * @protected
       */
      write(packets) {
        this.writable = false;
        encodePayload(packets, (data) => {
          this.doWrite(data, () => {
            this.writable = true;
            this.emitReserved("drain");
          });
        });
      }
      /**
       * Generates uri for connection.
       *
       * @private
       */
      uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        if (false !== this.opts.timestampRequests) {
          query[this.opts.timestampParam] = randomString();
        }
        if (!this.supportsBinary && !query.sid) {
          query.b64 = 1;
        }
        return this.createUri(schema, query);
      }
    }
    let value = false;
    try {
      value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
    } catch (err) {
    }
    const hasCORS = value;
    function empty() {
    }
    class BaseXHR extends Polling {
      /**
       * XHR Polling constructor.
       *
       * @param {Object} opts
       * @package
       */
      constructor(opts) {
        super(opts);
        if (typeof location !== "undefined") {
          const isSSL = "https:" === location.protocol;
          let port = location.port;
          if (!port) {
            port = isSSL ? "443" : "80";
          }
          this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
        }
      }
      /**
       * Sends data.
       *
       * @param {String} data to send.
       * @param {Function} called upon flush.
       * @private
       */
      doWrite(data, fn) {
        const req = this.request({
          method: "POST",
          data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
          this.onError("xhr post error", xhrStatus, context);
        });
      }
      /**
       * Starts a poll cycle.
       *
       * @private
       */
      doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
          this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
      }
    }
    let Request$1 = class Request2 extends Emitter {
      /**
       * Request constructor
       *
       * @param {Object} options
       * @package
       */
      constructor(createRequest, uri, opts) {
        super();
        this.createRequest = createRequest;
        installTimerFunctions(this, opts);
        this._opts = opts;
        this._method = opts.method || "GET";
        this._uri = uri;
        this._data = void 0 !== opts.data ? opts.data : null;
        this._create();
      }
      /**
       * Creates the XHR object and sends the request.
       *
       * @private
       */
      _create() {
        var _a;
        const opts = pick(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this._opts.xd;
        const xhr = this._xhr = this.createRequest(opts);
        try {
          xhr.open(this._method, this._uri, true);
          try {
            if (this._opts.extraHeaders) {
              xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
              for (let i2 in this._opts.extraHeaders) {
                if (this._opts.extraHeaders.hasOwnProperty(i2)) {
                  xhr.setRequestHeader(i2, this._opts.extraHeaders[i2]);
                }
              }
            }
          } catch (e2) {
          }
          if ("POST" === this._method) {
            try {
              xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (e2) {
            }
          }
          try {
            xhr.setRequestHeader("Accept", "*/*");
          } catch (e2) {
          }
          (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
          if ("withCredentials" in xhr) {
            xhr.withCredentials = this._opts.withCredentials;
          }
          if (this._opts.requestTimeout) {
            xhr.timeout = this._opts.requestTimeout;
          }
          xhr.onreadystatechange = () => {
            var _a2;
            if (xhr.readyState === 3) {
              (_a2 = this._opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(
                // @ts-ignore
                xhr.getResponseHeader("set-cookie")
              );
            }
            if (4 !== xhr.readyState)
              return;
            if (200 === xhr.status || 1223 === xhr.status) {
              this._onLoad();
            } else {
              this.setTimeoutFn(() => {
                this._onError(typeof xhr.status === "number" ? xhr.status : 0);
              }, 0);
            }
          };
          xhr.send(this._data);
        } catch (e2) {
          this.setTimeoutFn(() => {
            this._onError(e2);
          }, 0);
          return;
        }
        if (typeof document !== "undefined") {
          this._index = Request2.requestsCount++;
          Request2.requests[this._index] = this;
        }
      }
      /**
       * Called upon error.
       *
       * @private
       */
      _onError(err) {
        this.emitReserved("error", err, this._xhr);
        this._cleanup(true);
      }
      /**
       * Cleans up house.
       *
       * @private
       */
      _cleanup(fromError) {
        if ("undefined" === typeof this._xhr || null === this._xhr) {
          return;
        }
        this._xhr.onreadystatechange = empty;
        if (fromError) {
          try {
            this._xhr.abort();
          } catch (e2) {
          }
        }
        if (typeof document !== "undefined") {
          delete Request2.requests[this._index];
        }
        this._xhr = null;
      }
      /**
       * Called upon load.
       *
       * @private
       */
      _onLoad() {
        const data = this._xhr.responseText;
        if (data !== null) {
          this.emitReserved("data", data);
          this.emitReserved("success");
          this._cleanup();
        }
      }
      /**
       * Aborts the request.
       *
       * @package
       */
      abort() {
        this._cleanup();
      }
    };
    Request$1.requestsCount = 0;
    Request$1.requests = {};
    if (typeof document !== "undefined") {
      if (typeof attachEvent === "function") {
        attachEvent("onunload", unloadHandler);
      } else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
      }
    }
    function unloadHandler() {
      for (let i2 in Request$1.requests) {
        if (Request$1.requests.hasOwnProperty(i2)) {
          Request$1.requests[i2].abort();
        }
      }
    }
    const hasXHR2 = function() {
      const xhr = newRequest({
        xdomain: false
      });
      return xhr && xhr.responseType !== null;
    }();
    class XHR extends BaseXHR {
      constructor(opts) {
        super(opts);
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
      }
      request(opts = {}) {
        Object.assign(opts, { xd: this.xd }, this.opts);
        return new Request$1(newRequest, this.uri(), opts);
      }
    }
    function newRequest(opts) {
      const xdomain = opts.xdomain;
      try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
          return new XMLHttpRequest();
        }
      } catch (e2) {
      }
      if (!xdomain) {
        try {
          return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (e2) {
        }
      }
    }
    const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
    class BaseWS extends Transport {
      get name() {
        return "websocket";
      }
      doOpen() {
        const uri = this.uri();
        const protocols = this.opts.protocols;
        const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
          opts.headers = this.opts.extraHeaders;
        }
        try {
          this.ws = this.createSocket(uri, protocols, opts);
        } catch (err) {
          return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
      }
      /**
       * Adds event listeners to the socket
       *
       * @private
       */
      addEventListeners() {
        this.ws.onopen = () => {
          if (this.opts.autoUnref) {
            this.ws._socket.unref();
          }
          this.onOpen();
        };
        this.ws.onclose = (closeEvent) => this.onClose({
          description: "websocket connection closed",
          context: closeEvent
        });
        this.ws.onmessage = (ev) => this.onData(ev.data);
        this.ws.onerror = (e2) => this.onError("websocket error", e2);
      }
      write(packets) {
        this.writable = false;
        for (let i2 = 0; i2 < packets.length; i2++) {
          const packet = packets[i2];
          const lastPacket = i2 === packets.length - 1;
          encodePacket(packet, this.supportsBinary, (data) => {
            try {
              this.doWrite(packet, data);
            } catch (e2) {
            }
            if (lastPacket) {
              nextTick(() => {
                this.writable = true;
                this.emitReserved("drain");
              }, this.setTimeoutFn);
            }
          });
        }
      }
      doClose() {
        if (typeof this.ws !== "undefined") {
          this.ws.onerror = () => {
          };
          this.ws.close();
          this.ws = null;
        }
      }
      /**
       * Generates uri for connection.
       *
       * @private
       */
      uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        if (this.opts.timestampRequests) {
          query[this.opts.timestampParam] = randomString();
        }
        if (!this.supportsBinary) {
          query.b64 = 1;
        }
        return this.createUri(schema, query);
      }
    }
    const WebSocketCtor = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
    class WS extends BaseWS {
      createSocket(uri, protocols, opts) {
        return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
      }
      doWrite(_packet, data) {
        this.ws.send(data);
      }
    }
    class WT extends Transport {
      get name() {
        return "webtransport";
      }
      doOpen() {
        try {
          this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        } catch (err) {
          return this.emitReserved("error", err);
        }
        this._transport.closed.then(() => {
          this.onClose();
        }).catch((err) => {
          this.onError("webtransport error", err);
        });
        this._transport.ready.then(() => {
          this._transport.createBidirectionalStream().then((stream) => {
            const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
            const reader = stream.readable.pipeThrough(decoderStream).getReader();
            const encoderStream = createPacketEncoderStream();
            encoderStream.readable.pipeTo(stream.writable);
            this._writer = encoderStream.writable.getWriter();
            const read = () => {
              reader.read().then(({ done, value: value2 }) => {
                if (done) {
                  return;
                }
                this.onPacket(value2);
                read();
              }).catch((err) => {
              });
            };
            read();
            const packet = { type: "open" };
            if (this.query.sid) {
              packet.data = `{"sid":"${this.query.sid}"}`;
            }
            this._writer.write(packet).then(() => this.onOpen());
          });
        });
      }
      write(packets) {
        this.writable = false;
        for (let i2 = 0; i2 < packets.length; i2++) {
          const packet = packets[i2];
          const lastPacket = i2 === packets.length - 1;
          this._writer.write(packet).then(() => {
            if (lastPacket) {
              nextTick(() => {
                this.writable = true;
                this.emitReserved("drain");
              }, this.setTimeoutFn);
            }
          });
        }
      }
      doClose() {
        var _a;
        (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
      }
    }
    const transports = {
      websocket: WS,
      webtransport: WT,
      polling: XHR
    };
    const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    const parts = [
      "source",
      "protocol",
      "authority",
      "userInfo",
      "user",
      "password",
      "host",
      "port",
      "relative",
      "path",
      "directory",
      "file",
      "query",
      "anchor"
    ];
    function parse(str) {
      if (str.length > 8e3) {
        throw "URI too long";
      }
      const src = str, b2 = str.indexOf("["), e2 = str.indexOf("]");
      if (b2 != -1 && e2 != -1) {
        str = str.substring(0, b2) + str.substring(b2, e2).replace(/:/g, ";") + str.substring(e2, str.length);
      }
      let m2 = re.exec(str || ""), uri = {}, i2 = 14;
      while (i2--) {
        uri[parts[i2]] = m2[i2] || "";
      }
      if (b2 != -1 && e2 != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
        uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
        uri.ipv6uri = true;
      }
      uri.pathNames = pathNames(uri, uri["path"]);
      uri.queryKey = queryKey(uri, uri["query"]);
      return uri;
    }
    function pathNames(obj, path) {
      const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
      if (path.slice(0, 1) == "/" || path.length === 0) {
        names.splice(0, 1);
      }
      if (path.slice(-1) == "/") {
        names.splice(names.length - 1, 1);
      }
      return names;
    }
    function queryKey(uri, query) {
      const data = {};
      query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) {
          data[$1] = $2;
        }
      });
      return data;
    }
    const withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
    const OFFLINE_EVENT_LISTENERS = [];
    if (withEventListeners) {
      addEventListener("offline", () => {
        OFFLINE_EVENT_LISTENERS.forEach((listener) => listener());
      }, false);
    }
    class SocketWithoutUpgrade extends Emitter {
      /**
       * Socket constructor.
       *
       * @param {String|Object} uri - uri or options
       * @param {Object} opts - options
       */
      constructor(uri, opts) {
        super();
        this.binaryType = defaultBinaryType;
        this.writeBuffer = [];
        this._prevBufferLen = 0;
        this._pingInterval = -1;
        this._pingTimeout = -1;
        this._maxPayload = -1;
        this._pingTimeoutTime = Infinity;
        if (uri && "object" === typeof uri) {
          opts = uri;
          uri = null;
        }
        if (uri) {
          const parsedUri = parse(uri);
          opts.hostname = parsedUri.host;
          opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
          opts.port = parsedUri.port;
          if (parsedUri.query)
            opts.query = parsedUri.query;
        } else if (opts.host) {
          opts.hostname = parse(opts.host).host;
        }
        installTimerFunctions(this, opts);
        this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
          opts.port = this.secure ? "443" : "80";
        }
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = [];
        this._transportsByName = {};
        opts.transports.forEach((t2) => {
          const transportName = t2.prototype.name;
          this.transports.push(transportName);
          this._transportsByName[transportName] = t2;
        });
        this.opts = Object.assign({
          path: "/engine.io",
          agent: false,
          withCredentials: false,
          upgrade: true,
          timestampParam: "t",
          rememberUpgrade: false,
          addTrailingSlash: true,
          rejectUnauthorized: true,
          perMessageDeflate: {
            threshold: 1024
          },
          transportOptions: {},
          closeOnBeforeunload: false
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
          this.opts.query = decode(this.opts.query);
        }
        if (withEventListeners) {
          if (this.opts.closeOnBeforeunload) {
            this._beforeunloadEventListener = () => {
              if (this.transport) {
                this.transport.removeAllListeners();
                this.transport.close();
              }
            };
            addEventListener("beforeunload", this._beforeunloadEventListener, false);
          }
          if (this.hostname !== "localhost") {
            this._offlineEventListener = () => {
              this._onClose("transport close", {
                description: "network connection lost"
              });
            };
            OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
          }
        }
        if (this.opts.withCredentials) {
          this._cookieJar = createCookieJar();
        }
        this._open();
      }
      /**
       * Creates transport of the given type.
       *
       * @param {String} name - transport name
       * @return {Transport}
       * @private
       */
      createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        query.EIO = protocol$1;
        query.transport = name;
        if (this.id)
          query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
          query,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port
        }, this.opts.transportOptions[name]);
        return new this._transportsByName[name](opts);
      }
      /**
       * Initializes transport to use and starts probe.
       *
       * @private
       */
      _open() {
        if (this.transports.length === 0) {
          this.setTimeoutFn(() => {
            this.emitReserved("error", "No transports available");
          }, 0);
          return;
        }
        const transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const transport = this.createTransport(transportName);
        transport.open();
        this.setTransport(transport);
      }
      /**
       * Sets the current transport. Disables the existing one (if any).
       *
       * @private
       */
      setTransport(transport) {
        if (this.transport) {
          this.transport.removeAllListeners();
        }
        this.transport = transport;
        transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason) => this._onClose("transport close", reason));
      }
      /**
       * Called when connection is deemed open.
       *
       * @private
       */
      onOpen() {
        this.readyState = "open";
        SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
      }
      /**
       * Handles a packet.
       *
       * @private
       */
      _onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          this.emitReserved("packet", packet);
          this.emitReserved("heartbeat");
          switch (packet.type) {
            case "open":
              this.onHandshake(JSON.parse(packet.data));
              break;
            case "ping":
              this._sendPacket("pong");
              this.emitReserved("ping");
              this.emitReserved("pong");
              this._resetPingTimeout();
              break;
            case "error":
              const err = new Error("server error");
              err.code = packet.data;
              this._onError(err);
              break;
            case "message":
              this.emitReserved("data", packet.data);
              this.emitReserved("message", packet.data);
              break;
          }
        }
      }
      /**
       * Called upon handshake completion.
       *
       * @param {Object} data - handshake obj
       * @private
       */
      onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this._pingInterval = data.pingInterval;
        this._pingTimeout = data.pingTimeout;
        this._maxPayload = data.maxPayload;
        this.onOpen();
        if ("closed" === this.readyState)
          return;
        this._resetPingTimeout();
      }
      /**
       * Sets and resets ping timeout timer based on server pings.
       *
       * @private
       */
      _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const delay = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + delay;
        this._pingTimeoutTimer = this.setTimeoutFn(() => {
          this._onClose("ping timeout");
        }, delay);
        if (this.opts.autoUnref) {
          this._pingTimeoutTimer.unref();
        }
      }
      /**
       * Called on `drain` event
       *
       * @private
       */
      _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen);
        this._prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
          this.emitReserved("drain");
        } else {
          this.flush();
        }
      }
      /**
       * Flush write buffers.
       *
       * @private
       */
      flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
          const packets = this._getWritablePackets();
          this.transport.send(packets);
          this._prevBufferLen = packets.length;
          this.emitReserved("flush");
        }
      }
      /**
       * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
       * long-polling)
       *
       * @private
       */
      _getWritablePackets() {
        const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
          return this.writeBuffer;
        }
        let payloadSize = 1;
        for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
          const data = this.writeBuffer[i2].data;
          if (data) {
            payloadSize += byteLength(data);
          }
          if (i2 > 0 && payloadSize > this._maxPayload) {
            return this.writeBuffer.slice(0, i2);
          }
          payloadSize += 2;
        }
        return this.writeBuffer;
      }
      /**
       * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
       *
       * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
       * `write()` method then the message would not be buffered by the Socket.IO client.
       *
       * @return {boolean}
       * @private
       */
      /* private */
      _hasPingExpired() {
        if (!this._pingTimeoutTime)
          return true;
        const hasExpired = Date.now() > this._pingTimeoutTime;
        if (hasExpired) {
          this._pingTimeoutTime = 0;
          nextTick(() => {
            this._onClose("ping timeout");
          }, this.setTimeoutFn);
        }
        return hasExpired;
      }
      /**
       * Sends a message.
       *
       * @param {String} msg - message.
       * @param {Object} options.
       * @param {Function} fn - callback function.
       * @return {Socket} for chaining.
       */
      write(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
      }
      /**
       * Sends a message. Alias of {@link Socket#write}.
       *
       * @param {String} msg - message.
       * @param {Object} options.
       * @param {Function} fn - callback function.
       * @return {Socket} for chaining.
       */
      send(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
      }
      /**
       * Sends a packet.
       *
       * @param {String} type: packet type.
       * @param {String} data.
       * @param {Object} options.
       * @param {Function} fn - callback function.
       * @private
       */
      _sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
          fn = data;
          data = void 0;
        }
        if ("function" === typeof options) {
          fn = options;
          options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
          return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
          type,
          data,
          options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
          this.once("flush", fn);
        this.flush();
      }
      /**
       * Closes the connection.
       */
      close() {
        const close = () => {
          this._onClose("forced close");
          this.transport.close();
        };
        const cleanupAndClose = () => {
          this.off("upgrade", cleanupAndClose);
          this.off("upgradeError", cleanupAndClose);
          close();
        };
        const waitForUpgrade = () => {
          this.once("upgrade", cleanupAndClose);
          this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
          this.readyState = "closing";
          if (this.writeBuffer.length) {
            this.once("drain", () => {
              if (this.upgrading) {
                waitForUpgrade();
              } else {
                close();
              }
            });
          } else if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        }
        return this;
      }
      /**
       * Called upon transport error
       *
       * @private
       */
      _onError(err) {
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
          this.transports.shift();
          return this._open();
        }
        this.emitReserved("error", err);
        this._onClose("transport error", err);
      }
      /**
       * Called upon transport close.
       *
       * @private
       */
      _onClose(reason, description) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
          this.clearTimeoutFn(this._pingTimeoutTimer);
          this.transport.removeAllListeners("close");
          this.transport.close();
          this.transport.removeAllListeners();
          if (withEventListeners) {
            if (this._beforeunloadEventListener) {
              removeEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this._offlineEventListener) {
              const i2 = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
              if (i2 !== -1) {
                OFFLINE_EVENT_LISTENERS.splice(i2, 1);
              }
            }
          }
          this.readyState = "closed";
          this.id = null;
          this.emitReserved("close", reason, description);
          this.writeBuffer = [];
          this._prevBufferLen = 0;
        }
      }
    }
    SocketWithoutUpgrade.protocol = protocol$1;
    class SocketWithUpgrade extends SocketWithoutUpgrade {
      constructor() {
        super(...arguments);
        this._upgrades = [];
      }
      onOpen() {
        super.onOpen();
        if ("open" === this.readyState && this.opts.upgrade) {
          for (let i2 = 0; i2 < this._upgrades.length; i2++) {
            this._probe(this._upgrades[i2]);
          }
        }
      }
      /**
       * Probes a transport.
       *
       * @param {String} name - transport name
       * @private
       */
      _probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
          if (failed)
            return;
          transport.send([{ type: "ping", data: "probe" }]);
          transport.once("packet", (msg) => {
            if (failed)
              return;
            if ("pong" === msg.type && "probe" === msg.data) {
              this.upgrading = true;
              this.emitReserved("upgrading", transport);
              if (!transport)
                return;
              SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
              this.transport.pause(() => {
                if (failed)
                  return;
                if ("closed" === this.readyState)
                  return;
                cleanup();
                this.setTransport(transport);
                transport.send([{ type: "upgrade" }]);
                this.emitReserved("upgrade", transport);
                transport = null;
                this.upgrading = false;
                this.flush();
              });
            } else {
              const err = new Error("probe error");
              err.transport = transport.name;
              this.emitReserved("upgradeError", err);
            }
          });
        };
        function freezeTransport() {
          if (failed)
            return;
          failed = true;
          cleanup();
          transport.close();
          transport = null;
        }
        const onerror = (err) => {
          const error = new Error("probe error: " + err);
          error.transport = transport.name;
          freezeTransport();
          this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
          onerror("transport closed");
        }
        function onclose() {
          onerror("socket closed");
        }
        function onupgrade(to2) {
          if (transport && to2.name !== transport.name) {
            freezeTransport();
          }
        }
        const cleanup = () => {
          transport.removeListener("open", onTransportOpen);
          transport.removeListener("error", onerror);
          transport.removeListener("close", onTransportClose);
          this.off("close", onclose);
          this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
          this.setTimeoutFn(() => {
            if (!failed) {
              transport.open();
            }
          }, 200);
        } else {
          transport.open();
        }
      }
      onHandshake(data) {
        this._upgrades = this._filterUpgrades(data.upgrades);
        super.onHandshake(data);
      }
      /**
       * Filters upgrades, returning only those matching client transports.
       *
       * @param {Array} upgrades - server upgrades
       * @private
       */
      _filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        for (let i2 = 0; i2 < upgrades.length; i2++) {
          if (~this.transports.indexOf(upgrades[i2]))
            filteredUpgrades.push(upgrades[i2]);
        }
        return filteredUpgrades;
      }
    }
    let Socket$1 = class Socket extends SocketWithUpgrade {
      constructor(uri, opts = {}) {
        const o2 = typeof uri === "object" ? uri : opts;
        if (!o2.transports || o2.transports && typeof o2.transports[0] === "string") {
          o2.transports = (o2.transports || ["polling", "websocket", "webtransport"]).map((transportName) => transports[transportName]).filter((t2) => !!t2);
        }
        super(uri, o2);
      }
    };
    function url(uri, path = "", loc) {
      let obj = uri;
      loc = loc || typeof location !== "undefined" && location;
      if (null == uri)
        uri = loc.protocol + "//" + loc.host;
      if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
          if ("/" === uri.charAt(1)) {
            uri = loc.protocol + uri;
          } else {
            uri = loc.host + uri;
          }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
          if ("undefined" !== typeof loc) {
            uri = loc.protocol + "//" + uri;
          } else {
            uri = "https://" + uri;
          }
        }
        obj = parse(uri);
      }
      if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
          obj.port = "80";
        } else if (/^(http|ws)s$/.test(obj.protocol)) {
          obj.port = "443";
        }
      }
      obj.path = obj.path || "/";
      const ipv6 = obj.host.indexOf(":") !== -1;
      const host = ipv6 ? "[" + obj.host + "]" : obj.host;
      obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
      obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
      return obj;
    }
    const withNativeArrayBuffer = typeof ArrayBuffer === "function";
    const isView = (obj) => {
      return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
    };
    const toString$1 = Object.prototype.toString;
    const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString$1.call(Blob) === "[object BlobConstructor]";
    const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString$1.call(File) === "[object FileConstructor]";
    function isBinary(obj) {
      return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
    }
    function hasBinary(obj, toJSON2) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      if (Array.isArray(obj)) {
        for (let i2 = 0, l2 = obj.length; i2 < l2; i2++) {
          if (hasBinary(obj[i2])) {
            return true;
          }
        }
        return false;
      }
      if (isBinary(obj)) {
        return true;
      }
      if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
      }
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
          return true;
        }
      }
      return false;
    }
    function deconstructPacket(packet) {
      const buffers = [];
      const packetData = packet.data;
      const pack = packet;
      pack.data = _deconstructPacket(packetData, buffers);
      pack.attachments = buffers.length;
      return { packet: pack, buffers };
    }
    function _deconstructPacket(data, buffers) {
      if (!data)
        return data;
      if (isBinary(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
      } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i2 = 0; i2 < data.length; i2++) {
          newData[i2] = _deconstructPacket(data[i2], buffers);
        }
        return newData;
      } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            newData[key] = _deconstructPacket(data[key], buffers);
          }
        }
        return newData;
      }
      return data;
    }
    function reconstructPacket(packet, buffers) {
      packet.data = _reconstructPacket(packet.data, buffers);
      delete packet.attachments;
      return packet;
    }
    function _reconstructPacket(data, buffers) {
      if (!data)
        return data;
      if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
        if (isIndexValid) {
          return buffers[data.num];
        } else {
          throw new Error("illegal attachments");
        }
      } else if (Array.isArray(data)) {
        for (let i2 = 0; i2 < data.length; i2++) {
          data[i2] = _reconstructPacket(data[i2], buffers);
        }
      } else if (typeof data === "object") {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            data[key] = _reconstructPacket(data[key], buffers);
          }
        }
      }
      return data;
    }
    const RESERVED_EVENTS$1 = [
      "connect",
      // used on the client side
      "connect_error",
      // used on the client side
      "disconnect",
      // used on both sides
      "disconnecting",
      // used on the server side
      "newListener",
      // used by the Node.js EventEmitter
      "removeListener"
      // used by the Node.js EventEmitter
    ];
    const protocol = 5;
    var PacketType;
    (function(PacketType2) {
      PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
      PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
      PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
      PacketType2[PacketType2["ACK"] = 3] = "ACK";
      PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
      PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
      PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
    })(PacketType || (PacketType = {}));
    class Encoder {
      /**
       * Encoder constructor
       *
       * @param {function} replacer - custom replacer to pass down to JSON.parse
       */
      constructor(replacer) {
        this.replacer = replacer;
      }
      /**
       * Encode a packet as a single string if non-binary, or as a
       * buffer sequence, depending on packet type.
       *
       * @param {Object} obj - packet object
       */
      encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
          if (hasBinary(obj)) {
            return this.encodeAsBinary({
              type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
              nsp: obj.nsp,
              data: obj.data,
              id: obj.id
            });
          }
        }
        return [this.encodeAsString(obj)];
      }
      /**
       * Encode packet as string.
       */
      encodeAsString(obj) {
        let str = "" + obj.type;
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
          str += obj.attachments + "-";
        }
        if (obj.nsp && "/" !== obj.nsp) {
          str += obj.nsp + ",";
        }
        if (null != obj.id) {
          str += obj.id;
        }
        if (null != obj.data) {
          str += JSON.stringify(obj.data, this.replacer);
        }
        return str;
      }
      /**
       * Encode packet as 'buffer sequence' by removing blobs, and
       * deconstructing packet into object with placeholders and
       * a list of buffers.
       */
      encodeAsBinary(obj) {
        const deconstruction = deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack);
        return buffers;
      }
    }
    class Decoder extends Emitter {
      /**
       * Decoder constructor
       *
       * @param {function} reviver - custom reviver to pass down to JSON.stringify
       */
      constructor(reviver) {
        super();
        this.reviver = reviver;
      }
      /**
       * Decodes an encoded packet string into packet JSON.
       *
       * @param {String} obj - encoded packet
       */
      add(obj) {
        let packet;
        if (typeof obj === "string") {
          if (this.reconstructor) {
            throw new Error("got plaintext data when reconstructing a packet");
          }
          packet = this.decodeString(obj);
          const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
          if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
            packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
            this.reconstructor = new BinaryReconstructor(packet);
            if (packet.attachments === 0) {
              super.emitReserved("decoded", packet);
            }
          } else {
            super.emitReserved("decoded", packet);
          }
        } else if (isBinary(obj) || obj.base64) {
          if (!this.reconstructor) {
            throw new Error("got binary data when not reconstructing a packet");
          } else {
            packet = this.reconstructor.takeBinaryData(obj);
            if (packet) {
              this.reconstructor = null;
              super.emitReserved("decoded", packet);
            }
          }
        } else {
          throw new Error("Unknown type: " + obj);
        }
      }
      /**
       * Decode a packet String (JSON data)
       *
       * @param {String} str
       * @return {Object} packet
       */
      decodeString(str) {
        let i2 = 0;
        const p2 = {
          type: Number(str.charAt(0))
        };
        if (PacketType[p2.type] === void 0) {
          throw new Error("unknown packet type " + p2.type);
        }
        if (p2.type === PacketType.BINARY_EVENT || p2.type === PacketType.BINARY_ACK) {
          const start = i2 + 1;
          while (str.charAt(++i2) !== "-" && i2 != str.length) {
          }
          const buf = str.substring(start, i2);
          if (buf != Number(buf) || str.charAt(i2) !== "-") {
            throw new Error("Illegal attachments");
          }
          p2.attachments = Number(buf);
        }
        if ("/" === str.charAt(i2 + 1)) {
          const start = i2 + 1;
          while (++i2) {
            const c2 = str.charAt(i2);
            if ("," === c2)
              break;
            if (i2 === str.length)
              break;
          }
          p2.nsp = str.substring(start, i2);
        } else {
          p2.nsp = "/";
        }
        const next = str.charAt(i2 + 1);
        if ("" !== next && Number(next) == next) {
          const start = i2 + 1;
          while (++i2) {
            const c2 = str.charAt(i2);
            if (null == c2 || Number(c2) != c2) {
              --i2;
              break;
            }
            if (i2 === str.length)
              break;
          }
          p2.id = Number(str.substring(start, i2 + 1));
        }
        if (str.charAt(++i2)) {
          const payload = this.tryParse(str.substr(i2));
          if (Decoder.isPayloadValid(p2.type, payload)) {
            p2.data = payload;
          } else {
            throw new Error("invalid payload");
          }
        }
        return p2;
      }
      tryParse(str) {
        try {
          return JSON.parse(str, this.reviver);
        } catch (e2) {
          return false;
        }
      }
      static isPayloadValid(type, payload) {
        switch (type) {
          case PacketType.CONNECT:
            return isObject$1(payload);
          case PacketType.DISCONNECT:
            return payload === void 0;
          case PacketType.CONNECT_ERROR:
            return typeof payload === "string" || isObject$1(payload);
          case PacketType.EVENT:
          case PacketType.BINARY_EVENT:
            return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
          case PacketType.ACK:
          case PacketType.BINARY_ACK:
            return Array.isArray(payload);
        }
      }
      /**
       * Deallocates a parser's resources
       */
      destroy() {
        if (this.reconstructor) {
          this.reconstructor.finishedReconstruction();
          this.reconstructor = null;
        }
      }
    }
    class BinaryReconstructor {
      constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
      }
      /**
       * Method to be called when binary data received from connection
       * after a BINARY_EVENT packet.
       *
       * @param {Buffer | ArrayBuffer} binData - the raw binary data received
       * @return {null | Object} returns null if more binary data is expected or
       *   a reconstructed packet object if all buffers have been received.
       */
      takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
          const packet = reconstructPacket(this.reconPack, this.buffers);
          this.finishedReconstruction();
          return packet;
        }
        return null;
      }
      /**
       * Cleans up binary packet reconstruction variables.
       */
      finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
      }
    }
    function isNamespaceValid(nsp) {
      return typeof nsp === "string";
    }
    const isInteger = Number.isInteger || function(value2) {
      return typeof value2 === "number" && isFinite(value2) && Math.floor(value2) === value2;
    };
    function isAckIdValid(id2) {
      return id2 === void 0 || isInteger(id2);
    }
    function isObject$1(value2) {
      return Object.prototype.toString.call(value2) === "[object Object]";
    }
    function isDataValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return payload === void 0 || isObject$1(payload);
        case PacketType.DISCONNECT:
          return payload === void 0;
        case PacketType.EVENT:
          return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
        case PacketType.ACK:
          return Array.isArray(payload);
        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || isObject$1(payload);
        default:
          return false;
      }
    }
    function isPacketValid(packet) {
      return isNamespaceValid(packet.nsp) && isAckIdValid(packet.id) && isDataValid(packet.type, packet.data);
    }
    const parser = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
      __proto__: null,
      Decoder,
      Encoder,
      get PacketType() {
        return PacketType;
      },
      isPacketValid,
      protocol
    }, Symbol.toStringTag, { value: "Module" }));
    function on(obj, ev, fn) {
      obj.on(ev, fn);
      return function subDestroy() {
        obj.off(ev, fn);
      };
    }
    const RESERVED_EVENTS = Object.freeze({
      connect: 1,
      connect_error: 1,
      disconnect: 1,
      disconnecting: 1,
      // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
      newListener: 1,
      removeListener: 1
    });
    class Socket extends Emitter {
      /**
       * `Socket` constructor.
       */
      constructor(io, nsp, opts) {
        super();
        this.connected = false;
        this.recovered = false;
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this._queue = [];
        this._queueSeq = 0;
        this.ids = 0;
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
          this.auth = opts.auth;
        }
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect)
          this.open();
      }
      /**
       * Whether the socket is currently disconnected
       *
       * @example
       * const socket = io();
       *
       * socket.on("connect", () => {
       *   console.log(socket.disconnected); // false
       * });
       *
       * socket.on("disconnect", () => {
       *   console.log(socket.disconnected); // true
       * });
       */
      get disconnected() {
        return !this.connected;
      }
      /**
       * Subscribe to open, close and packet events
       *
       * @private
       */
      subEvents() {
        if (this.subs)
          return;
        const io = this.io;
        this.subs = [
          on(io, "open", this.onopen.bind(this)),
          on(io, "packet", this.onpacket.bind(this)),
          on(io, "error", this.onerror.bind(this)),
          on(io, "close", this.onclose.bind(this))
        ];
      }
      /**
       * Whether the Socket will try to reconnect when its Manager connects or reconnects.
       *
       * @example
       * const socket = io();
       *
       * console.log(socket.active); // true
       *
       * socket.on("disconnect", (reason) => {
       *   if (reason === "io server disconnect") {
       *     // the disconnection was initiated by the server, you need to manually reconnect
       *     console.log(socket.active); // false
       *   }
       *   // else the socket will automatically try to reconnect
       *   console.log(socket.active); // true
       * });
       */
      get active() {
        return !!this.subs;
      }
      /**
       * "Opens" the socket.
       *
       * @example
       * const socket = io({
       *   autoConnect: false
       * });
       *
       * socket.connect();
       */
      connect() {
        if (this.connected)
          return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
          this.io.open();
        if ("open" === this.io._readyState)
          this.onopen();
        return this;
      }
      /**
       * Alias for {@link connect()}.
       */
      open() {
        return this.connect();
      }
      /**
       * Sends a `message` event.
       *
       * This method mimics the WebSocket.send() method.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
       *
       * @example
       * socket.send("hello");
       *
       * // this is equivalent to
       * socket.emit("message", "hello");
       *
       * @return self
       */
      send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
      }
      /**
       * Override `emit`.
       * If the event is in `events`, it's emitted normally.
       *
       * @example
       * socket.emit("hello", "world");
       *
       * // all serializable datastructures are supported (no need to call JSON.stringify)
       * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
       *
       * // with an acknowledgement from the server
       * socket.emit("hello", "world", (val) => {
       *   // ...
       * });
       *
       * @return self
       */
      emit(ev, ...args) {
        var _a, _b, _c;
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
          throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
          this._addToQueue(args);
          return this;
        }
        const packet = {
          type: PacketType.EVENT,
          data: args
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        if ("function" === typeof args[args.length - 1]) {
          const id2 = this.ids++;
          const ack = args.pop();
          this._registerAckCallback(id2, ack);
          packet.id = id2;
        }
        const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
        const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
        const discardPacket = this.flags.volatile && !isTransportWritable;
        if (discardPacket)
          ;
        else if (isConnected) {
          this.notifyOutgoingListeners(packet);
          this.packet(packet);
        } else {
          this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
      }
      /**
       * @private
       */
      _registerAckCallback(id2, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === void 0) {
          this.acks[id2] = ack;
          return;
        }
        const timer = this.io.setTimeoutFn(() => {
          delete this.acks[id2];
          for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
            if (this.sendBuffer[i2].id === id2) {
              this.sendBuffer.splice(i2, 1);
            }
          }
          ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args) => {
          this.io.clearTimeoutFn(timer);
          ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id2] = fn;
      }
      /**
       * Emits an event and waits for an acknowledgement
       *
       * @example
       * // without timeout
       * const response = await socket.emitWithAck("hello", "world");
       *
       * // with a specific timeout
       * try {
       *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
       * } catch (err) {
       *   // the server did not acknowledge the event in the given delay
       * }
       *
       * @return a Promise that will be fulfilled when the server acknowledges the event
       */
      emitWithAck(ev, ...args) {
        return new Promise((resolve, reject) => {
          const fn = (arg1, arg2) => {
            return arg1 ? reject(arg1) : resolve(arg2);
          };
          fn.withError = true;
          args.push(fn);
          this.emit(ev, ...args);
        });
      }
      /**
       * Add the packet to the queue.
       * @param args
       * @private
       */
      _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") {
          ack = args.pop();
        }
        const packet = {
          id: this._queueSeq++,
          tryCount: 0,
          pending: false,
          args,
          flags: Object.assign({ fromQueue: true }, this.flags)
        };
        args.push((err, ...responseArgs) => {
          if (packet !== this._queue[0])
            ;
          const hasError = err !== null;
          if (hasError) {
            if (packet.tryCount > this._opts.retries) {
              this._queue.shift();
              if (ack) {
                ack(err);
              }
            }
          } else {
            this._queue.shift();
            if (ack) {
              ack(null, ...responseArgs);
            }
          }
          packet.pending = false;
          return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
      }
      /**
       * Send the first packet of the queue, and wait for an acknowledgement from the server.
       * @param force - whether to resend a packet that has not been acknowledged yet
       *
       * @private
       */
      _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) {
          return;
        }
        const packet = this._queue[0];
        if (packet.pending && !force) {
          return;
        }
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
      }
      /**
       * Sends a packet.
       *
       * @param packet
       * @private
       */
      packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
      }
      /**
       * Called upon engine `open`.
       *
       * @private
       */
      onopen() {
        if (typeof this.auth == "function") {
          this.auth((data) => {
            this._sendConnectPacket(data);
          });
        } else {
          this._sendConnectPacket(this.auth);
        }
      }
      /**
       * Sends a CONNECT packet to initiate the Socket.IO session.
       *
       * @param data
       * @private
       */
      _sendConnectPacket(data) {
        this.packet({
          type: PacketType.CONNECT,
          data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
        });
      }
      /**
       * Called upon engine or manager `error`.
       *
       * @param err
       * @private
       */
      onerror(err) {
        if (!this.connected) {
          this.emitReserved("connect_error", err);
        }
      }
      /**
       * Called upon engine `close`.
       *
       * @param reason
       * @param description
       * @private
       */
      onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
      }
      /**
       * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
       * the server.
       *
       * @private
       */
      _clearAcks() {
        Object.keys(this.acks).forEach((id2) => {
          const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id2);
          if (!isBuffered) {
            const ack = this.acks[id2];
            delete this.acks[id2];
            if (ack.withError) {
              ack.call(this, new Error("socket has been disconnected"));
            }
          }
        });
      }
      /**
       * Called with socket packet.
       *
       * @param packet
       * @private
       */
      onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
          return;
        switch (packet.type) {
          case PacketType.CONNECT:
            if (packet.data && packet.data.sid) {
              this.onconnect(packet.data.sid, packet.data.pid);
            } else {
              this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            }
            break;
          case PacketType.EVENT:
          case PacketType.BINARY_EVENT:
            this.onevent(packet);
            break;
          case PacketType.ACK:
          case PacketType.BINARY_ACK:
            this.onack(packet);
            break;
          case PacketType.DISCONNECT:
            this.ondisconnect();
            break;
          case PacketType.CONNECT_ERROR:
            this.destroy();
            const err = new Error(packet.data.message);
            err.data = packet.data.data;
            this.emitReserved("connect_error", err);
            break;
        }
      }
      /**
       * Called upon a server event.
       *
       * @param packet
       * @private
       */
      onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) {
          args.push(this.ack(packet.id));
        }
        if (this.connected) {
          this.emitEvent(args);
        } else {
          this.receiveBuffer.push(Object.freeze(args));
        }
      }
      emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
          const listeners = this._anyListeners.slice();
          for (const listener of listeners) {
            listener.apply(this, args);
          }
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
          this._lastOffset = args[args.length - 1];
        }
      }
      /**
       * Produces an ack callback to emit with an event.
       *
       * @private
       */
      ack(id2) {
        const self2 = this;
        let sent = false;
        return function(...args) {
          if (sent)
            return;
          sent = true;
          self2.packet({
            type: PacketType.ACK,
            id: id2,
            data: args
          });
        };
      }
      /**
       * Called upon a server acknowledgement.
       *
       * @param packet
       * @private
       */
      onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") {
          return;
        }
        delete this.acks[packet.id];
        if (ack.withError) {
          packet.data.unshift(null);
        }
        ack.apply(this, packet.data);
      }
      /**
       * Called upon server connect.
       *
       * @private
       */
      onconnect(id2, pid) {
        this.id = id2;
        this.recovered = pid && this._pid === pid;
        this._pid = pid;
        this.connected = true;
        this.emitBuffered();
        this._drainQueue(true);
        this.emitReserved("connect");
      }
      /**
       * Emit buffered events (received and emitted).
       *
       * @private
       */
      emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
          this.notifyOutgoingListeners(packet);
          this.packet(packet);
        });
        this.sendBuffer = [];
      }
      /**
       * Called upon server disconnect.
       *
       * @private
       */
      ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
      }
      /**
       * Called upon forced client/server side disconnections,
       * this method ensures the manager stops tracking us and
       * that reconnections don't get triggered for this.
       *
       * @private
       */
      destroy() {
        if (this.subs) {
          this.subs.forEach((subDestroy) => subDestroy());
          this.subs = void 0;
        }
        this.io["_destroy"](this);
      }
      /**
       * Disconnects the socket manually. In that case, the socket will not try to reconnect.
       *
       * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
       *
       * @example
       * const socket = io();
       *
       * socket.on("disconnect", (reason) => {
       *   // console.log(reason); prints "io client disconnect"
       * });
       *
       * socket.disconnect();
       *
       * @return self
       */
      disconnect() {
        if (this.connected) {
          this.packet({ type: PacketType.DISCONNECT });
        }
        this.destroy();
        if (this.connected) {
          this.onclose("io client disconnect");
        }
        return this;
      }
      /**
       * Alias for {@link disconnect()}.
       *
       * @return self
       */
      close() {
        return this.disconnect();
      }
      /**
       * Sets the compress flag.
       *
       * @example
       * socket.compress(false).emit("hello");
       *
       * @param compress - if `true`, compresses the sending data
       * @return self
       */
      compress(compress) {
        this.flags.compress = compress;
        return this;
      }
      /**
       * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
       * ready to send messages.
       *
       * @example
       * socket.volatile.emit("hello"); // the server may or may not receive it
       *
       * @returns self
       */
      get volatile() {
        this.flags.volatile = true;
        return this;
      }
      /**
       * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
       * given number of milliseconds have elapsed without an acknowledgement from the server:
       *
       * @example
       * socket.timeout(5000).emit("my-event", (err) => {
       *   if (err) {
       *     // the server did not acknowledge the event in the given delay
       *   }
       * });
       *
       * @returns self
       */
      timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback.
       *
       * @example
       * socket.onAny((event, ...args) => {
       *   console.log(`got ${event}`);
       * });
       *
       * @param listener
       */
      onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback. The listener is added to the beginning of the listeners array.
       *
       * @example
       * socket.prependAny((event, ...args) => {
       *   console.log(`got event ${event}`);
       * });
       *
       * @param listener
       */
      prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
      }
      /**
       * Removes the listener that will be fired when any event is emitted.
       *
       * @example
       * const catchAllListener = (event, ...args) => {
       *   console.log(`got event ${event}`);
       * }
       *
       * socket.onAny(catchAllListener);
       *
       * // remove a specific listener
       * socket.offAny(catchAllListener);
       *
       * // or remove all listeners
       * socket.offAny();
       *
       * @param listener
       */
      offAny(listener) {
        if (!this._anyListeners) {
          return this;
        }
        if (listener) {
          const listeners = this._anyListeners;
          for (let i2 = 0; i2 < listeners.length; i2++) {
            if (listener === listeners[i2]) {
              listeners.splice(i2, 1);
              return this;
            }
          }
        } else {
          this._anyListeners = [];
        }
        return this;
      }
      /**
       * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
       * e.g. to remove listeners.
       */
      listenersAny() {
        return this._anyListeners || [];
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback.
       *
       * Note: acknowledgements sent to the server are not included.
       *
       * @example
       * socket.onAnyOutgoing((event, ...args) => {
       *   console.log(`sent event ${event}`);
       * });
       *
       * @param listener
       */
      onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
      }
      /**
       * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
       * callback. The listener is added to the beginning of the listeners array.
       *
       * Note: acknowledgements sent to the server are not included.
       *
       * @example
       * socket.prependAnyOutgoing((event, ...args) => {
       *   console.log(`sent event ${event}`);
       * });
       *
       * @param listener
       */
      prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
      }
      /**
       * Removes the listener that will be fired when any event is emitted.
       *
       * @example
       * const catchAllListener = (event, ...args) => {
       *   console.log(`sent event ${event}`);
       * }
       *
       * socket.onAnyOutgoing(catchAllListener);
       *
       * // remove a specific listener
       * socket.offAnyOutgoing(catchAllListener);
       *
       * // or remove all listeners
       * socket.offAnyOutgoing();
       *
       * @param [listener] - the catch-all listener (optional)
       */
      offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
          return this;
        }
        if (listener) {
          const listeners = this._anyOutgoingListeners;
          for (let i2 = 0; i2 < listeners.length; i2++) {
            if (listener === listeners[i2]) {
              listeners.splice(i2, 1);
              return this;
            }
          }
        } else {
          this._anyOutgoingListeners = [];
        }
        return this;
      }
      /**
       * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
       * e.g. to remove listeners.
       */
      listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
      }
      /**
       * Notify the listeners for each packet sent
       *
       * @param packet
       *
       * @private
       */
      notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
          const listeners = this._anyOutgoingListeners.slice();
          for (const listener of listeners) {
            listener.apply(this, packet.data);
          }
        }
      }
    }
    function Backoff(opts) {
      opts = opts || {};
      this.ms = opts.min || 100;
      this.max = opts.max || 1e4;
      this.factor = opts.factor || 2;
      this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
      this.attempts = 0;
    }
    Backoff.prototype.duration = function() {
      var ms = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
      }
      return Math.min(ms, this.max) | 0;
    };
    Backoff.prototype.reset = function() {
      this.attempts = 0;
    };
    Backoff.prototype.setMin = function(min2) {
      this.ms = min2;
    };
    Backoff.prototype.setMax = function(max2) {
      this.max = max2;
    };
    Backoff.prototype.setJitter = function(jitter) {
      this.jitter = jitter;
    };
    class Manager extends Emitter {
      constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
          opts = uri;
          uri = void 0;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1e3);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new Backoff({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
          this.open();
      }
      reconnection(v2) {
        if (!arguments.length)
          return this._reconnection;
        this._reconnection = !!v2;
        if (!v2) {
          this.skipReconnect = true;
        }
        return this;
      }
      reconnectionAttempts(v2) {
        if (v2 === void 0)
          return this._reconnectionAttempts;
        this._reconnectionAttempts = v2;
        return this;
      }
      reconnectionDelay(v2) {
        var _a;
        if (v2 === void 0)
          return this._reconnectionDelay;
        this._reconnectionDelay = v2;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v2);
        return this;
      }
      randomizationFactor(v2) {
        var _a;
        if (v2 === void 0)
          return this._randomizationFactor;
        this._randomizationFactor = v2;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v2);
        return this;
      }
      reconnectionDelayMax(v2) {
        var _a;
        if (v2 === void 0)
          return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v2;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v2);
        return this;
      }
      timeout(v2) {
        if (!arguments.length)
          return this._timeout;
        this._timeout = v2;
        return this;
      }
      /**
       * Starts trying to reconnect if reconnection is enabled and we have not
       * started reconnecting yet
       *
       * @private
       */
      maybeReconnectOnOpen() {
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
          this.reconnect();
        }
      }
      /**
       * Sets the current transport `socket`.
       *
       * @param {Function} fn - optional, callback
       * @return self
       * @public
       */
      open(fn) {
        if (~this._readyState.indexOf("open"))
          return this;
        this.engine = new Socket$1(this.uri, this.opts);
        const socket2 = this.engine;
        const self2 = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        const openSubDestroy = on(socket2, "open", function() {
          self2.onopen();
          fn && fn();
        });
        const onError = (err) => {
          this.cleanup();
          this._readyState = "closed";
          this.emitReserved("error", err);
          if (fn) {
            fn(err);
          } else {
            this.maybeReconnectOnOpen();
          }
        };
        const errorSub = on(socket2, "error", onError);
        if (false !== this._timeout) {
          const timeout = this._timeout;
          const timer = this.setTimeoutFn(() => {
            openSubDestroy();
            onError(new Error("timeout"));
            socket2.close();
          }, timeout);
          if (this.opts.autoUnref) {
            timer.unref();
          }
          this.subs.push(() => {
            this.clearTimeoutFn(timer);
          });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
      }
      /**
       * Alias for open()
       *
       * @return self
       * @public
       */
      connect(fn) {
        return this.open(fn);
      }
      /**
       * Called upon transport open.
       *
       * @private
       */
      onopen() {
        this.cleanup();
        this._readyState = "open";
        this.emitReserved("open");
        const socket2 = this.engine;
        this.subs.push(
          on(socket2, "ping", this.onping.bind(this)),
          on(socket2, "data", this.ondata.bind(this)),
          on(socket2, "error", this.onerror.bind(this)),
          on(socket2, "close", this.onclose.bind(this)),
          // @ts-ignore
          on(this.decoder, "decoded", this.ondecoded.bind(this))
        );
      }
      /**
       * Called upon a ping.
       *
       * @private
       */
      onping() {
        this.emitReserved("ping");
      }
      /**
       * Called with data.
       *
       * @private
       */
      ondata(data) {
        try {
          this.decoder.add(data);
        } catch (e2) {
          this.onclose("parse error", e2);
        }
      }
      /**
       * Called when parser fully decodes a packet.
       *
       * @private
       */
      ondecoded(packet) {
        nextTick(() => {
          this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
      }
      /**
       * Called upon socket error.
       *
       * @private
       */
      onerror(err) {
        this.emitReserved("error", err);
      }
      /**
       * Creates a new socket for the given `nsp`.
       *
       * @return {Socket}
       * @public
       */
      socket(nsp, opts) {
        let socket2 = this.nsps[nsp];
        if (!socket2) {
          socket2 = new Socket(this, nsp, opts);
          this.nsps[nsp] = socket2;
        } else if (this._autoConnect && !socket2.active) {
          socket2.connect();
        }
        return socket2;
      }
      /**
       * Called upon a socket close.
       *
       * @param socket
       * @private
       */
      _destroy(socket2) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
          const socket3 = this.nsps[nsp];
          if (socket3.active) {
            return;
          }
        }
        this._close();
      }
      /**
       * Writes a packet.
       *
       * @param packet
       * @private
       */
      _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for (let i2 = 0; i2 < encodedPackets.length; i2++) {
          this.engine.write(encodedPackets[i2], packet.options);
        }
      }
      /**
       * Clean up transport subscriptions and packet buffer.
       *
       * @private
       */
      cleanup() {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
      }
      /**
       * Close the current socket.
       *
       * @private
       */
      _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
      }
      /**
       * Alias for close()
       *
       * @private
       */
      disconnect() {
        return this._close();
      }
      /**
       * Called when:
       *
       * - the low-level engine is closed
       * - the parser encountered a badly formatted packet
       * - all sockets are disconnected
       *
       * @private
       */
      onclose(reason, description) {
        var _a;
        this.cleanup();
        (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
          this.reconnect();
        }
      }
      /**
       * Attempt a reconnection.
       *
       * @private
       */
      reconnect() {
        if (this._reconnecting || this.skipReconnect)
          return this;
        const self2 = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
          this.backoff.reset();
          this.emitReserved("reconnect_failed");
          this._reconnecting = false;
        } else {
          const delay = this.backoff.duration();
          this._reconnecting = true;
          const timer = this.setTimeoutFn(() => {
            if (self2.skipReconnect)
              return;
            this.emitReserved("reconnect_attempt", self2.backoff.attempts);
            if (self2.skipReconnect)
              return;
            self2.open((err) => {
              if (err) {
                self2._reconnecting = false;
                self2.reconnect();
                this.emitReserved("reconnect_error", err);
              } else {
                self2.onreconnect();
              }
            });
          }, delay);
          if (this.opts.autoUnref) {
            timer.unref();
          }
          this.subs.push(() => {
            this.clearTimeoutFn(timer);
          });
        }
      }
      /**
       * Called upon successful reconnect.
       *
       * @private
       */
      onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
      }
    }
    const cache = {};
    function lookup(uri, opts) {
      if (typeof uri === "object") {
        opts = uri;
        uri = void 0;
      }
      opts = opts || {};
      const parsed = url(uri, opts.path || "/socket.io");
      const source = parsed.source;
      const id2 = parsed.id;
      const path = parsed.path;
      const sameNamespace = cache[id2] && path in cache[id2]["nsps"];
      const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
      let io;
      if (newConnection) {
        io = new Manager(source, opts);
      } else {
        if (!cache[id2]) {
          cache[id2] = new Manager(source, opts);
        }
        io = cache[id2];
      }
      if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
      }
      return io.socket(parsed.path, opts);
    }
    Object.assign(lookup, {
      Manager,
      Socket,
      io: lookup,
      connect: lookup
    });
    let socket;
    const initSocket = (userId) => {
      if (socket)
        return socket;
      socket = lookup(apiURL, {
        withCredentials: true
      });
      socket.on("connect", () => {
        console.log("Connected to socket server");
        if (userId) {
          socket.emit("join", userId);
        }
      });
      return socket;
    };
    function Syncing() {
      const { user, setUser } = store();
      const navigate = useNavigate();
      const [progress, setProgress] = reactExports.useState({
        status: "initializing",
        message: "Initializing synchronization...",
        current: 0,
        total: 0
      });
      reactExports.useEffect(() => {
        if (!(user == null ? void 0 : user._id))
          return;
        const socket2 = initSocket(user._id);
        const startSync = async () => {
          try {
            await API.post("/calendar/sync");
          } catch (e2) {
            console.error("Failed to trigger sync:", e2);
          }
        };
        startSync();
        socket2.on("sync_progress", async (data) => {
          setProgress(data);
          if (data.status === "completed") {
            try {
              const { ok: ok2, user: updatedUser } = await API.get("/user/signin_token");
              if (ok2)
                setUser(updatedUser);
            } catch (e2) {
              console.error("Failed to fetch updated user:", e2);
            }
            setTimeout(() => {
              navigate("/calendars");
            }, 1500);
          }
        });
        return () => {
          socket2.off("sync_progress");
        };
      }, [user == null ? void 0 : user._id, navigate, setUser]);
      const getPercentage = () => {
        if (progress.status === "completed")
          return 100;
        if (!progress.total)
          return 0;
        return Math.round(progress.current / progress.total * 100);
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Syncing your data" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 mb-10 h-16", children: progress.message }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gray-100 rounded-full h-4 mb-6 overflow-hidden shadow-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-indigo-600 h-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(79,70,229,0.5)]", style: { width: `${getPercentage()}%` } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          progress.status === "syncing_events" && progress.total > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-gray-500 uppercase tracking-wider", children: [
            "Calendar ",
            progress.current,
            " of ",
            progress.total
          ] }),
          progress.status === "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold animate-bounce text-xl", children: "Done! Redirecting..." })
        ] })
      ] }) });
    }
    function List$1() {
      const [events, setEvents] = reactExports.useState([]);
      const [calendars, setCalendars] = reactExports.useState([]);
      const [loading, setLoading] = reactExports.useState(true);
      const [filters, setFilters] = reactExports.useState({ search: "", calendar_id: [], status: [], startAfter: "", startBefore: "", page: 1, limit: 10 });
      const [total, setTotal] = reactExports.useState(0);
      const navigate = useNavigate();
      const STATUS_OPTIONS = [
        { label: "Confirmed", value: "confirmed" },
        { label: "Tentative", value: "tentative" },
        { label: "Cancelled", value: "cancelled" }
      ];
      const fetchCalendars = async () => {
        try {
          const { ok: ok2, data } = await API.get("/calendar");
          if (ok2)
            setCalendars(data);
        } catch (e2) {
          console.error(e2);
        }
      };
      const fetchEvents = async () => {
        try {
          const { ok: ok2, data, total: total2 } = await API.post("/event/search", filters);
          if (!ok2)
            return _t.error("Failed to fetch events");
          setEvents(data);
          setTotal(total2);
        } catch (e2) {
          console.error(e2);
          _t.error("An error occurred while fetching events");
        } finally {
          setLoading(false);
        }
      };
      reactExports.useEffect(() => {
        fetchCalendars();
      }, []);
      reactExports.useEffect(() => {
        fetchEvents();
      }, [filters.search, filters.calendar_id, filters.status, filters.startAfter, filters.startBefore, filters.page]);
      if (loading && !events.length && !calendars.length)
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiSparkles, { className: "text-white h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Your Events" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Browse and filter all your calendar events" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full md:w-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchBar, { search: filters.search, setFilter: setFilters, placeholder: "Search events..." }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-white p-4 rounded-xl border border-gray-200 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-500 uppercase mb-1", children: "Calendars" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MultiSelect,
              {
                id: "calendar-filter",
                placeholder: "All Calendars",
                options: calendars.map((cal) => ({ label: cal.summary, value: cal._id })),
                values: filters.calendar_id.map((id2) => {
                  var _a;
                  return { label: ((_a = calendars.find((c2) => c2._id === id2)) == null ? void 0 : _a.summary) || "", value: id2 };
                }),
                onSelectedChange: (selected) => setFilters((f2) => ({ ...f2, calendar_id: selected.map((s2) => s2.value), page: 1 }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-500 uppercase mb-1", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              MultiSelect,
              {
                id: "status-filter",
                placeholder: "All Status",
                options: STATUS_OPTIONS,
                values: STATUS_OPTIONS.filter((opt) => filters.status.includes(opt.value)),
                onSelectedChange: (selected) => setFilters((f2) => ({ ...f2, status: selected.map((s2) => s2.value), page: 1 }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-500 uppercase mb-1", children: "From" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                value: filters.startAfter,
                onChange: (e2) => setFilters((f2) => ({ ...f2, startAfter: e2.target.value, page: 1 })),
                className: "w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-500 uppercase mb-1", children: "To" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                value: filters.startBefore,
                onChange: (e2) => setFilters((f2) => ({ ...f2, startBefore: e2.target.value, page: 1 })),
                className: "w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-gray-100", children: events.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center text-gray-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HiSquares2X2, { size: 48, className: "mx-auto mb-4 opacity-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No events found." })
        ] }) : events.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate(`/events/${event._id}`), className: "w-full p-4 hover:bg-gray-50 transition-colors text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-gray-900 truncate", children: event.summary || "(No title)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mt-1", children: new Date(event.start.dateTime || event.start.date).toLocaleString([], {
              weekday: "short",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            }) })
          ] }),
          event.status === "confirmed" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full", children: "Confirmed" })
        ] }) }, event._id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Pagination, { total, per_page: filters.limit, currentPage: filters.page, onChange: (page) => setFilters((f2) => ({ ...f2, page })) })
      ] }) });
    }
    function View$1() {
      const { id: id2 } = useParams();
      const navigate = useNavigate();
      const [event, setEvent] = reactExports.useState(null);
      const [loading, setLoading] = reactExports.useState(true);
      const [activeTab, setActiveTab] = reactExports.useState("general");
      const fetchEvent = async () => {
        try {
          const { ok: ok2, data } = await API.get(`/event/${id2}`);
          if (!ok2)
            return _t.error("Event not found");
          setEvent(data);
        } catch (e2) {
          console.error(e2);
          _t.error("An error occurred while fetching event info");
        } finally {
          setLoading(false);
        }
      };
      reactExports.useEffect(() => {
        if (id2) {
          fetchEvent();
        }
      }, [id2]);
      if (loading)
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
      if (!event)
        return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate(-1), className: "flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HiArrowLeft, { size: 16 }),
          "Back"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: event.summary || "(No title)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: new Date(event.start.dateTime || event.start.date).toLocaleString([], {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-gray-200 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { title: "General Information", active: activeTab === "general", onClick: () => setActiveTab("general"), Icon: HiOutlineInformationCircle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tab, { title: "Raw Data", active: activeTab === "raw", onClick: () => setActiveTab("raw"), Icon: HiOutlineCodeBracket })
        ] }),
        activeTab === "general" && /* @__PURE__ */ jsxRuntimeExports.jsx(GeneralInfo, { event }),
        activeTab === "raw" && /* @__PURE__ */ jsxRuntimeExports.jsx(RawData, { event })
      ] }) });
    }
    function GeneralInfo({ event }) {
      var _a, _b, _c, _d;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2", children: "Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-900 font-medium", children: event.name || event.summary || "N/A" })
              ] }),
              event.sub_name && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Sub Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-900 font-medium", children: event.sub_name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Location" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-900 font-medium", children: event.location || "N/A" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${event.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`,
                    children: event.status
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2", children: "Organizer & Creator" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Organizer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-900 font-medium", children: ((_a = event.organizer) == null ? void 0 : _a.displayName) || ((_b = event.organizer) == null ? void 0 : _b.email) || "N/A" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500", children: "Creator" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-900 font-medium", children: ((_c = event.creator) == null ? void 0 : _c.displayName) || ((_d = event.creator) == null ? void 0 : _d.email) || "N/A" })
              ] })
            ] })
          ] })
        ] }),
        event.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t border-gray-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-700 prose prose-sm max-w-none", dangerouslySetInnerHTML: { __html: event.description } })
        ] }),
        event.attendees && event.attendees.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t border-gray-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2", children: [
            "Attendees (",
            event.attendees.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3", children: event.attendees.map((attendee, idx) => {
            var _a2;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2 rounded-lg bg-gray-50 border border-gray-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs uppercase", children: (_a2 = attendee.displayName || attendee.email) == null ? void 0 : _a2[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-gray-900 truncate", children: attendee.displayName || attendee.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 truncate", children: attendee.responseStatus })
              ] })
            ] }, idx);
          }) })
        ] })
      ] });
    }
    function RawData({ event }) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-900 rounded-xl border border-gray-800 shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-gray-400 underline", children: "event_data.json" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                navigator.clipboard.writeText(JSON.stringify(event, null, 2));
                _t.success("Copied to clipboard");
              },
              className: "text-xs text-gray-400 hover:text-white transition-colors",
              children: "Copy JSON"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "p-6 text-indigo-300 font-mono text-xs overflow-auto max-h-[600px] leading-relaxed", children: JSON.stringify(event, null, 2) })
      ] });
    }
    function Event$1() {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/:id", element: /* @__PURE__ */ jsxRuntimeExports.jsx(View$1, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(List$1, {}) })
      ] });
    }
    function FiMail(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" } }, { "tag": "polyline", "attr": { "points": "22,6 12,13 2,6" } }] })(props);
    }
    function FiUser(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" } }, { "tag": "circle", "attr": { "cx": "12", "cy": "7", "r": "4" } }] })(props);
    }
    const FileInput = ({ value: value2, onChange, name, folder, buttonText = "Upload", buttonClassName = "", multiple = false }) => {
      const [loading, setLoading] = reactExports.useState(false);
      const inputRef = reactExports.useRef(null);
      const handleFileChange = async (e2) => {
        try {
          setLoading(true);
          const files = [];
          const f2 = e2.target.files;
          if (f2.length === 0)
            return;
          for (let i2 = 0; i2 < f2.length; i2++) {
            const file = f2[i2];
            const rawBody = await readFileAsync(file);
            files.push({ rawBody, name: file.name });
          }
          const { data, ok: ok2 } = await API.post(`/file`, { files, folder });
          if (!ok2)
            throw new Error("Upload failed");
          const resultValue = multiple ? data : Array.isArray(data) ? data[0] : data;
          onChange({ target: { value: resultValue, name } });
          _t.success("Fichier uploadé avec succès !");
        } catch (error) {
          console.error(error);
          _t.error("Erreur lors de l'upload");
        } finally {
          setLoading(false);
        }
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: inputRef, id: `openFile-${name}`, type: "file", accept: "image/*", multiple, onChange: handleFileChange, className: "hidden" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => inputRef.current.click(), disabled: loading, className: buttonClassName, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Upload en cours..." })
        ] }) : buttonText })
      ] });
    };
    function readFileAsync(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    function Avatar({ value: value2, onChange, name }) {
      const handleDelete = () => {
        onChange({ target: { value: "", name } });
        _t.success("Avatar deleted");
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 bg-gray-100", children: value2 ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-full h-full object-cover", src: value2, alt: "avatar" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex flex-col items-center justify-center text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiCamera, { className: "w-8 h-8" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FileInput,
            {
              value: value2,
              onChange,
              name,
              folder: "avatars",
              multiple: false,
              buttonText: value2 ? "Change avatar" : "Add avatar",
              buttonClassName: "px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100 transition-colors disabled:opacity-50"
            }
          ),
          value2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleDelete,
              className: "px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(HiTrash, { className: "w-4 h-4" }),
                "Delete"
              ]
            }
          )
        ] })
      ] });
    }
    function Account() {
      const { user, setUser } = store();
      const [loading, setLoading] = reactExports.useState(false);
      const [values, setValues] = reactExports.useState({
        name: "",
        email: "",
        avatar: ""
      });
      reactExports.useEffect(() => {
        if (user) {
          setValues({
            name: user.name || "",
            email: user.email || "",
            avatar: user.avatar || ""
          });
        }
      }, [user]);
      const handleChange = (e2) => {
        const { name, value: value2 } = e2.target;
        setValues({ ...values, [name]: value2 });
      };
      const handleSubmit = async (e2) => {
        e2.preventDefault();
        setLoading(true);
        try {
          const { ok: ok2, data } = await API.put("/user", values);
          if (!ok2)
            throw new Error();
          setUser(data);
          _t.success("Profile updated successfully!");
        } catch (e22) {
          console.error(e22);
          _t.error("Error updating profile");
        } finally {
          setLoading(false);
        }
      };
      if (!user)
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full p-8 overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-8", children: "My Profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 max-w-2xl gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg border border-gray-200 shadow-sm p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-gray-900 mb-6", children: "Profile information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Avatar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Avatar,
                {
                  value: values.avatar,
                  name: "avatar",
                  onChange: (e2) => {
                    console.log(e2.target.value);
                    setValues({ ...values, avatar: e2.target.value });
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium text-gray-700 flex items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FiUser, { className: "mr-2 text-indigo-600", size: 18 }),
                "Name"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "name",
                  value: values.name,
                  onChange: handleChange,
                  placeholder: "Your name",
                  className: "w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-gray-900"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium text-gray-700 flex items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FiMail, { className: "mr-2 text-indigo-600", size: 18 }),
                "Email"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  value: values.email,
                  disabled: true,
                  className: "w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 transition-all text-gray-500 cursor-not-allowed"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-gray-400 italic", children: "Email managed by Google" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: loading,
                className: "w-full py-3 rounded-lg text-base font-semibold text-white transition-all bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed",
                children: loading ? "Saving..." : "Save changes"
              }
            ) })
          ] })
        ] }) })
      ] }) });
    }
    function List() {
      const [wrappeds, setWrappeds] = reactExports.useState([]);
      const [loading, setLoading] = reactExports.useState(true);
      const [generating, setGenerating] = reactExports.useState(null);
      const navigate = useNavigate();
      const fetchWrappeds = async () => {
        try {
          const { ok: ok2, data } = await API.post("/wrapped/search", {});
          if (ok2)
            setWrappeds(data);
        } catch (e2) {
          console.error(e2);
          _t.error("Failed to fetch wrappeds");
        } finally {
          setLoading(false);
        }
      };
      reactExports.useEffect(() => {
        fetchWrappeds();
      }, []);
      const handleGenerate = async (year) => {
        setGenerating(year);
        try {
          const { ok: ok2, data, code, message } = await API.post("/wrapped/generate", { year });
          if (!ok2) {
            if (code === "NO_EVENTS_FOUND") {
              _t.error(message || "No events found for this year");
            } else {
              _t.error(message || "Failed to generate wrapped");
            }
            return;
          }
          _t.success("Wrapped generated!");
          fetchWrappeds();
          navigate(`/wrapped/${data._id}`);
        } catch (e2) {
          console.error(e2);
          _t.error("An error occurred");
        } finally {
          setGenerating(null);
        }
      };
      const yearsToGenerate = [2025, 2024, 2023, 2022, 2021];
      if (loading)
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineGift$1, { className: "text-white h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Your Yearly Wrapped" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Discover your calendar stats year by year" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: wrappeds.map((wrapped) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => navigate(`/wrapped/${wrapped._id}`),
            className: "bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all text-left group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold", children: wrapped.year }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(HiSparkles, { className: "h-6 w-6 opacity-75 group-hover:opacity-100 transition-opacity" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 opacity-90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: wrapped.persona }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                  wrapped.totalEvents,
                  " events"
                ] })
              ] })
            ]
          },
          wrapped._id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gray-200 pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Generate New Wrapped" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: yearsToGenerate.map((year) => {
            const alreadyExists = wrappeds.find((w2) => w2.year === year);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => handleGenerate(year),
                disabled: generating,
                className: `
                            px-4 py-3 rounded-lg border text-sm font-medium transition-all
                            ${alreadyExists ? "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100" : "bg-white text-indigo-600 border-indigo-200 hover:border-indigo-500 hover:shadow-md"}
                            ${generating ? "opacity-50 cursor-not-allowed" : ""}
                        `,
                children: [
                  generating === year ? "Generating..." : `Generate ${year}`,
                  alreadyExists && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-normal text-gray-400 mt-1", children: "Update" })
                ]
              },
              year
            );
          }) })
        ] })
      ] }) });
    }
    //! moment.js
    //! version : 2.30.1
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    var hookCallback;
    function hooks() {
      return hookCallback.apply(null, arguments);
    }
    function setHookCallback(callback) {
      hookCallback = callback;
    }
    function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
    }
    function isObject(input) {
      return input != null && Object.prototype.toString.call(input) === "[object Object]";
    }
    function hasOwnProp(a2, b2) {
      return Object.prototype.hasOwnProperty.call(a2, b2);
    }
    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      } else {
        var k2;
        for (k2 in obj) {
          if (hasOwnProp(obj, k2)) {
            return false;
          }
        }
        return true;
      }
    }
    function isUndefined(input) {
      return input === void 0;
    }
    function isNumber(input) {
      return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
    }
    function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
    }
    function map(arr, fn) {
      var res = [], i2, arrLen = arr.length;
      for (i2 = 0; i2 < arrLen; ++i2) {
        res.push(fn(arr[i2], i2));
      }
      return res;
    }
    function extend(a2, b2) {
      for (var i2 in b2) {
        if (hasOwnProp(b2, i2)) {
          a2[i2] = b2[i2];
        }
      }
      if (hasOwnProp(b2, "toString")) {
        a2.toString = b2.toString;
      }
      if (hasOwnProp(b2, "valueOf")) {
        a2.valueOf = b2.valueOf;
      }
      return a2;
    }
    function createUTC(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, true).utc();
    }
    function defaultParsingFlags() {
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
      };
    }
    function getParsingFlags(m2) {
      if (m2._pf == null) {
        m2._pf = defaultParsingFlags();
      }
      return m2._pf;
    }
    var some;
    if (Array.prototype.some) {
      some = Array.prototype.some;
    } else {
      some = function(fun) {
        var t2 = Object(this), len = t2.length >>> 0, i2;
        for (i2 = 0; i2 < len; i2++) {
          if (i2 in t2 && fun.call(this, t2[i2], i2, t2)) {
            return true;
          }
        }
        return false;
      };
    }
    function isValid(m2) {
      var flags = null, parsedParts = false, isNowValid = m2._d && !isNaN(m2._d.getTime());
      if (isNowValid) {
        flags = getParsingFlags(m2);
        parsedParts = some.call(flags.parsedDateParts, function(i2) {
          return i2 != null;
        });
        isNowValid = flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
        if (m2._strict) {
          isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
        }
      }
      if (Object.isFrozen == null || !Object.isFrozen(m2)) {
        m2._isValid = isNowValid;
      } else {
        return isNowValid;
      }
      return m2._isValid;
    }
    function createInvalid(flags) {
      var m2 = createUTC(NaN);
      if (flags != null) {
        extend(getParsingFlags(m2), flags);
      } else {
        getParsingFlags(m2).userInvalidated = true;
      }
      return m2;
    }
    var momentProperties = hooks.momentProperties = [], updateInProgress = false;
    function copyConfig(to2, from2) {
      var i2, prop, val, momentPropertiesLen = momentProperties.length;
      if (!isUndefined(from2._isAMomentObject)) {
        to2._isAMomentObject = from2._isAMomentObject;
      }
      if (!isUndefined(from2._i)) {
        to2._i = from2._i;
      }
      if (!isUndefined(from2._f)) {
        to2._f = from2._f;
      }
      if (!isUndefined(from2._l)) {
        to2._l = from2._l;
      }
      if (!isUndefined(from2._strict)) {
        to2._strict = from2._strict;
      }
      if (!isUndefined(from2._tzm)) {
        to2._tzm = from2._tzm;
      }
      if (!isUndefined(from2._isUTC)) {
        to2._isUTC = from2._isUTC;
      }
      if (!isUndefined(from2._offset)) {
        to2._offset = from2._offset;
      }
      if (!isUndefined(from2._pf)) {
        to2._pf = getParsingFlags(from2);
      }
      if (!isUndefined(from2._locale)) {
        to2._locale = from2._locale;
      }
      if (momentPropertiesLen > 0) {
        for (i2 = 0; i2 < momentPropertiesLen; i2++) {
          prop = momentProperties[i2];
          val = from2[prop];
          if (!isUndefined(val)) {
            to2[prop] = val;
          }
        }
      }
      return to2;
    }
    function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);
      if (!this.isValid()) {
        this._d = /* @__PURE__ */ new Date(NaN);
      }
      if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
      }
    }
    function isMoment(obj) {
      return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function warn(msg) {
      if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
        console.warn("Deprecation warning: " + msg);
      }
    }
    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function() {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
          var args = [], arg, i2, key, argLen = arguments.length;
          for (i2 = 0; i2 < argLen; i2++) {
            arg = "";
            if (typeof arguments[i2] === "object") {
              arg += "\n[" + i2 + "] ";
              for (key in arguments[0]) {
                if (hasOwnProp(arguments[0], key)) {
                  arg += key + ": " + arguments[0][key] + ", ";
                }
              }
              arg = arg.slice(0, -2);
            } else {
              arg = arguments[i2];
            }
            args.push(arg);
          }
          warn(
            msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack
          );
          firstTime = false;
        }
        return fn.apply(this, arguments);
      }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
      }
      if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
      }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
      return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
    }
    function set(config) {
      var prop, i2;
      for (i2 in config) {
        if (hasOwnProp(config, i2)) {
          prop = config[i2];
          if (isFunction(prop)) {
            this[i2] = prop;
          } else {
            this["_" + i2] = prop;
          }
        }
      }
      this._config = config;
      this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
      );
    }
    function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig), prop;
      for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
          if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
            res[prop] = {};
            extend(res[prop], parentConfig[prop]);
            extend(res[prop], childConfig[prop]);
          } else if (childConfig[prop] != null) {
            res[prop] = childConfig[prop];
          } else {
            delete res[prop];
          }
        }
      }
      for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
          res[prop] = extend({}, res[prop]);
        }
      }
      return res;
    }
    function Locale(config) {
      if (config != null) {
        this.set(config);
      }
    }
    var keys;
    if (Object.keys) {
      keys = Object.keys;
    } else {
      keys = function(obj) {
        var i2, res = [];
        for (i2 in obj) {
          if (hasOwnProp(obj, i2)) {
            res.push(i2);
          }
        }
        return res;
      };
    }
    var defaultCalendar = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    };
    function calendar(key, mom, now2) {
      var output = this._calendar[key] || this._calendar["sameElse"];
      return isFunction(output) ? output.call(mom, now2) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
      var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
      return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
    function addFormatToken(token2, padded, ordinal2, callback) {
      var func = callback;
      if (typeof callback === "string") {
        func = function() {
          return this[callback]();
        };
      }
      if (token2) {
        formatTokenFunctions[token2] = func;
      }
      if (padded) {
        formatTokenFunctions[padded[0]] = function() {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }
      if (ordinal2) {
        formatTokenFunctions[ordinal2] = function() {
          return this.localeData().ordinal(
            func.apply(this, arguments),
            token2
          );
        };
      }
    }
    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, "");
      }
      return input.replace(/\\/g, "");
    }
    function makeFormatFunction(format2) {
      var array = format2.match(formattingTokens), i2, length;
      for (i2 = 0, length = array.length; i2 < length; i2++) {
        if (formatTokenFunctions[array[i2]]) {
          array[i2] = formatTokenFunctions[array[i2]];
        } else {
          array[i2] = removeFormattingTokens(array[i2]);
        }
      }
      return function(mom) {
        var output = "", i3;
        for (i3 = 0; i3 < length; i3++) {
          output += isFunction(array[i3]) ? array[i3].call(mom, format2) : array[i3];
        }
        return output;
      };
    }
    function formatMoment(m2, format2) {
      if (!m2.isValid()) {
        return m2.localeData().invalidDate();
      }
      format2 = expandFormat(format2, m2.localeData());
      formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
      return formatFunctions[format2](m2);
    }
    function expandFormat(format2, locale2) {
      var i2 = 5;
      function replaceLongDateFormatTokens(input) {
        return locale2.longDateFormat(input) || input;
      }
      localFormattingTokens.lastIndex = 0;
      while (i2 >= 0 && localFormattingTokens.test(format2)) {
        format2 = format2.replace(
          localFormattingTokens,
          replaceLongDateFormatTokens
        );
        localFormattingTokens.lastIndex = 0;
        i2 -= 1;
      }
      return format2;
    }
    var defaultLongDateFormat = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    function longDateFormat(key) {
      var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
      if (format2 || !formatUpper) {
        return format2;
      }
      this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
        if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
          return tok.slice(1);
        }
        return tok;
      }).join("");
      return this._longDateFormat[key];
    }
    var defaultInvalidDate = "Invalid date";
    function invalidDate() {
      return this._invalidDate;
    }
    var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
      return this._ordinal.replace("%d", number);
    }
    var defaultRelativeTime = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff2, output) {
      var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
      return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
    }
    var aliases = {
      D: "date",
      dates: "date",
      date: "date",
      d: "day",
      days: "day",
      day: "day",
      e: "weekday",
      weekdays: "weekday",
      weekday: "weekday",
      E: "isoWeekday",
      isoweekdays: "isoWeekday",
      isoweekday: "isoWeekday",
      DDD: "dayOfYear",
      dayofyears: "dayOfYear",
      dayofyear: "dayOfYear",
      h: "hour",
      hours: "hour",
      hour: "hour",
      ms: "millisecond",
      milliseconds: "millisecond",
      millisecond: "millisecond",
      m: "minute",
      minutes: "minute",
      minute: "minute",
      M: "month",
      months: "month",
      month: "month",
      Q: "quarter",
      quarters: "quarter",
      quarter: "quarter",
      s: "second",
      seconds: "second",
      second: "second",
      gg: "weekYear",
      weekyears: "weekYear",
      weekyear: "weekYear",
      GG: "isoWeekYear",
      isoweekyears: "isoWeekYear",
      isoweekyear: "isoWeekYear",
      w: "week",
      weeks: "week",
      week: "week",
      W: "isoWeek",
      isoweeks: "isoWeek",
      isoweek: "isoWeek",
      y: "year",
      years: "year",
      year: "year"
    };
    function normalizeUnits(units) {
      return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
    }
    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {}, normalizedProp, prop;
      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);
          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }
      return normalizedInput;
    }
    var priorities = {
      date: 9,
      day: 11,
      weekday: 11,
      isoWeekday: 11,
      dayOfYear: 4,
      hour: 13,
      millisecond: 16,
      minute: 14,
      month: 8,
      quarter: 7,
      second: 15,
      weekYear: 1,
      isoWeekYear: 1,
      week: 5,
      isoWeek: 5,
      year: 1
    };
    function getPrioritizedUnits(unitsObj) {
      var units = [], u2;
      for (u2 in unitsObj) {
        if (hasOwnProp(unitsObj, u2)) {
          units.push({ unit: u2, priority: priorities[u2] });
        }
      }
      units.sort(function(a2, b2) {
        return a2.priority - b2.priority;
      });
      return units;
    }
    var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, match1to2NoLeadingZero = /^[1-9]\d?/, match1to2HasZero = /^([1-9]\d|\d)/, regexes;
    regexes = {};
    function addRegexToken(token2, regex, strictRegex) {
      regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
        return isStrict && strictRegex ? strictRegex : regex;
      };
    }
    function getParseRegexForToken(token2, config) {
      if (!hasOwnProp(regexes, token2)) {
        return new RegExp(unescapeFormat(token2));
      }
      return regexes[token2](config._strict, config._locale);
    }
    function unescapeFormat(s2) {
      return regexEscape(
        s2.replace("\\", "").replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
          }
        )
      );
    }
    function regexEscape(s2) {
      return s2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function absFloor(number) {
      if (number < 0) {
        return Math.ceil(number) || 0;
      } else {
        return Math.floor(number);
      }
    }
    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion, value2 = 0;
      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value2 = absFloor(coercedNumber);
      }
      return value2;
    }
    var tokens = {};
    function addParseToken(token2, callback) {
      var i2, func = callback, tokenLen;
      if (typeof token2 === "string") {
        token2 = [token2];
      }
      if (isNumber(callback)) {
        func = function(input, array) {
          array[callback] = toInt(input);
        };
      }
      tokenLen = token2.length;
      for (i2 = 0; i2 < tokenLen; i2++) {
        tokens[token2[i2]] = func;
      }
    }
    function addWeekParseToken(token2, callback) {
      addParseToken(token2, function(input, array, config, token3) {
        config._w = config._w || {};
        callback(input, config._w, config, token3);
      });
    }
    function addTimeToArrayFromToken(token2, input, config) {
      if (input != null && hasOwnProp(tokens, token2)) {
        tokens[token2](input, config._a, config, token2);
      }
    }
    function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
    addFormatToken("Y", 0, 0, function() {
      var y2 = this.year();
      return y2 <= 9999 ? zeroFill(y2, 4) : "+" + y2;
    });
    addFormatToken(0, ["YY", 2], 0, function() {
      return this.year() % 100;
    });
    addFormatToken(0, ["YYYY", 4], 0, "year");
    addFormatToken(0, ["YYYYY", 5], 0, "year");
    addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
    addRegexToken("Y", matchSigned);
    addRegexToken("YY", match1to2, match2);
    addRegexToken("YYYY", match1to4, match4);
    addRegexToken("YYYYY", match1to6, match6);
    addRegexToken("YYYYYY", match1to6, match6);
    addParseToken(["YYYYY", "YYYYYY"], YEAR);
    addParseToken("YYYY", function(input, array) {
      array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken("YY", function(input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken("Y", function(input, array) {
      array[YEAR] = parseInt(input, 10);
    });
    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }
    hooks.parseTwoDigitYear = function(input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
    };
    var getSetYear = makeGetSet("FullYear", true);
    function getIsLeapYear() {
      return isLeapYear(this.year());
    }
    function makeGetSet(unit, keepTime) {
      return function(value2) {
        if (value2 != null) {
          set$1(this, unit, value2);
          hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get(this, unit);
        }
      };
    }
    function get(mom, unit) {
      if (!mom.isValid()) {
        return NaN;
      }
      var d2 = mom._d, isUTC = mom._isUTC;
      switch (unit) {
        case "Milliseconds":
          return isUTC ? d2.getUTCMilliseconds() : d2.getMilliseconds();
        case "Seconds":
          return isUTC ? d2.getUTCSeconds() : d2.getSeconds();
        case "Minutes":
          return isUTC ? d2.getUTCMinutes() : d2.getMinutes();
        case "Hours":
          return isUTC ? d2.getUTCHours() : d2.getHours();
        case "Date":
          return isUTC ? d2.getUTCDate() : d2.getDate();
        case "Day":
          return isUTC ? d2.getUTCDay() : d2.getDay();
        case "Month":
          return isUTC ? d2.getUTCMonth() : d2.getMonth();
        case "FullYear":
          return isUTC ? d2.getUTCFullYear() : d2.getFullYear();
        default:
          return NaN;
      }
    }
    function set$1(mom, unit, value2) {
      var d2, isUTC, year, month, date;
      if (!mom.isValid() || isNaN(value2)) {
        return;
      }
      d2 = mom._d;
      isUTC = mom._isUTC;
      switch (unit) {
        case "Milliseconds":
          return void (isUTC ? d2.setUTCMilliseconds(value2) : d2.setMilliseconds(value2));
        case "Seconds":
          return void (isUTC ? d2.setUTCSeconds(value2) : d2.setSeconds(value2));
        case "Minutes":
          return void (isUTC ? d2.setUTCMinutes(value2) : d2.setMinutes(value2));
        case "Hours":
          return void (isUTC ? d2.setUTCHours(value2) : d2.setHours(value2));
        case "Date":
          return void (isUTC ? d2.setUTCDate(value2) : d2.setDate(value2));
        case "FullYear":
          break;
        default:
          return;
      }
      year = value2;
      month = mom.month();
      date = mom.date();
      date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
      void (isUTC ? d2.setUTCFullYear(year, month, date) : d2.setFullYear(year, month, date));
    }
    function stringGet(units) {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units]();
      }
      return this;
    }
    function stringSet(units, value2) {
      if (typeof units === "object") {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units), i2, prioritizedLen = prioritized.length;
        for (i2 = 0; i2 < prioritizedLen; i2++) {
          this[prioritized[i2].unit](units[prioritized[i2].unit]);
        }
      } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units](value2);
        }
      }
      return this;
    }
    function mod(n2, x2) {
      return (n2 % x2 + x2) % x2;
    }
    var indexOf;
    if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function(o2) {
        var i2;
        for (i2 = 0; i2 < this.length; ++i2) {
          if (this[i2] === o2) {
            return i2;
          }
        }
        return -1;
      };
    }
    function daysInMonth(year, month) {
      if (isNaN(year) || isNaN(month)) {
        return NaN;
      }
      var modMonth = mod(month, 12);
      year += (month - modMonth) / 12;
      return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    addFormatToken("M", ["MM", 2], "Mo", function() {
      return this.month() + 1;
    });
    addFormatToken("MMM", 0, 0, function(format2) {
      return this.localeData().monthsShort(this, format2);
    });
    addFormatToken("MMMM", 0, 0, function(format2) {
      return this.localeData().months(this, format2);
    });
    addRegexToken("M", match1to2, match1to2NoLeadingZero);
    addRegexToken("MM", match1to2, match2);
    addRegexToken("MMM", function(isStrict, locale2) {
      return locale2.monthsShortRegex(isStrict);
    });
    addRegexToken("MMMM", function(isStrict, locale2) {
      return locale2.monthsRegex(isStrict);
    });
    addParseToken(["M", "MM"], function(input, array) {
      array[MONTH] = toInt(input) - 1;
    });
    addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
      var month = config._locale.monthsParse(input, token2, config._strict);
      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config).invalidMonth = input;
      }
    });
    var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
    function localeMonths(m2, format2) {
      if (!m2) {
        return isArray(this._months) ? this._months : this._months["standalone"];
      }
      return isArray(this._months) ? this._months[m2.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m2.month()];
    }
    function localeMonthsShort(m2, format2) {
      if (!m2) {
        return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
      }
      return isArray(this._monthsShort) ? this._monthsShort[m2.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m2.month()];
    }
    function handleStrictParse(monthName, format2, strict) {
      var i2, ii2, mom, llc = monthName.toLocaleLowerCase();
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i2 = 0; i2 < 12; ++i2) {
          mom = createUTC([2e3, i2]);
          this._shortMonthsParse[i2] = this.monthsShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._longMonthsParse[i2] = this.months(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "MMM") {
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._longMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      } else {
        if (format2 === "MMM") {
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._longMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._longMonthsParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortMonthsParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      }
    }
    function localeMonthsParse(monthName, format2, strict) {
      var i2, mom, regex;
      if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format2, strict);
      }
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      }
      for (i2 = 0; i2 < 12; i2++) {
        mom = createUTC([2e3, i2]);
        if (strict && !this._longMonthsParse[i2]) {
          this._longMonthsParse[i2] = new RegExp(
            "^" + this.months(mom, "").replace(".", "") + "$",
            "i"
          );
          this._shortMonthsParse[i2] = new RegExp(
            "^" + this.monthsShort(mom, "").replace(".", "") + "$",
            "i"
          );
        }
        if (!strict && !this._monthsParse[i2]) {
          regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
          this._monthsParse[i2] = new RegExp(regex.replace(".", ""), "i");
        }
        if (strict && format2 === "MMMM" && this._longMonthsParse[i2].test(monthName)) {
          return i2;
        } else if (strict && format2 === "MMM" && this._shortMonthsParse[i2].test(monthName)) {
          return i2;
        } else if (!strict && this._monthsParse[i2].test(monthName)) {
          return i2;
        }
      }
    }
    function setMonth(mom, value2) {
      if (!mom.isValid()) {
        return mom;
      }
      if (typeof value2 === "string") {
        if (/^\d+$/.test(value2)) {
          value2 = toInt(value2);
        } else {
          value2 = mom.localeData().monthsParse(value2);
          if (!isNumber(value2)) {
            return mom;
          }
        }
      }
      var month = value2, date = mom.date();
      date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
      void (mom._isUTC ? mom._d.setUTCMonth(month, date) : mom._d.setMonth(month, date));
      return mom;
    }
    function getSetMonth(value2) {
      if (value2 != null) {
        setMonth(this, value2);
        hooks.updateOffset(this, true);
        return this;
      } else {
        return get(this, "Month");
      }
    }
    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsShortRegex")) {
          this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
      }
    }
    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsRegex")) {
          this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
      }
    }
    function computeMonthsParse() {
      function cmpLenRev(a2, b2) {
        return b2.length - a2.length;
      }
      var shortPieces = [], longPieces = [], mixedPieces = [], i2, mom, shortP, longP;
      for (i2 = 0; i2 < 12; i2++) {
        mom = createUTC([2e3, i2]);
        shortP = regexEscape(this.monthsShort(mom, ""));
        longP = regexEscape(this.months(mom, ""));
        shortPieces.push(shortP);
        longPieces.push(longP);
        mixedPieces.push(longP);
        mixedPieces.push(shortP);
      }
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._monthsShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
    }
    function createDate(y2, m2, d2, h2, M2, s2, ms) {
      var date;
      if (y2 < 100 && y2 >= 0) {
        date = new Date(y2 + 400, m2, d2, h2, M2, s2, ms);
        if (isFinite(date.getFullYear())) {
          date.setFullYear(y2);
        }
      } else {
        date = new Date(y2, m2, d2, h2, M2, s2, ms);
      }
      return date;
    }
    function createUTCDate(y2) {
      var date, args;
      if (y2 < 100 && y2 >= 0) {
        args = Array.prototype.slice.call(arguments);
        args[0] = y2 + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y2);
        }
      } else {
        date = new Date(Date.UTC.apply(null, arguments));
      }
      return date;
    }
    function firstWeekOffset(year, dow, doy) {
      var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    }
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }
      return {
        year: resYear,
        dayOfYear: resDayOfYear
      };
    }
    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
      if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
      } else {
        resYear = mom.year();
        resWeek = week;
      }
      return {
        week: resWeek,
        year: resYear
      };
    }
    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    addFormatToken("w", ["ww", 2], "wo", "week");
    addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
    addRegexToken("w", match1to2, match1to2NoLeadingZero);
    addRegexToken("ww", match1to2, match2);
    addRegexToken("W", match1to2, match1to2NoLeadingZero);
    addRegexToken("WW", match1to2, match2);
    addWeekParseToken(
      ["w", "ww", "W", "WW"],
      function(input, week, config, token2) {
        week[token2.substr(0, 1)] = toInt(input);
      }
    );
    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6
      // The week that contains Jan 6th is the first week of the year.
    };
    function localeFirstDayOfWeek() {
      return this._week.dow;
    }
    function localeFirstDayOfYear() {
      return this._week.doy;
    }
    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    addFormatToken("d", 0, "do", "day");
    addFormatToken("dd", 0, 0, function(format2) {
      return this.localeData().weekdaysMin(this, format2);
    });
    addFormatToken("ddd", 0, 0, function(format2) {
      return this.localeData().weekdaysShort(this, format2);
    });
    addFormatToken("dddd", 0, 0, function(format2) {
      return this.localeData().weekdays(this, format2);
    });
    addFormatToken("e", 0, 0, "weekday");
    addFormatToken("E", 0, 0, "isoWeekday");
    addRegexToken("d", match1to2);
    addRegexToken("e", match1to2);
    addRegexToken("E", match1to2);
    addRegexToken("dd", function(isStrict, locale2) {
      return locale2.weekdaysMinRegex(isStrict);
    });
    addRegexToken("ddd", function(isStrict, locale2) {
      return locale2.weekdaysShortRegex(isStrict);
    });
    addRegexToken("dddd", function(isStrict, locale2) {
      return locale2.weekdaysRegex(isStrict);
    });
    addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
      var weekday = config._locale.weekdaysParse(input, token2, config._strict);
      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config).invalidWeekday = input;
      }
    });
    addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
      week[token2] = toInt(input);
    });
    function parseWeekday(input, locale2) {
      if (typeof input !== "string") {
        return input;
      }
      if (!isNaN(input)) {
        return parseInt(input, 10);
      }
      input = locale2.weekdaysParse(input);
      if (typeof input === "number") {
        return input;
      }
      return null;
    }
    function parseIsoWeekday(input, locale2) {
      if (typeof input === "string") {
        return locale2.weekdaysParse(input) % 7 || 7;
      }
      return isNaN(input) ? null : input;
    }
    function shiftWeekdays(ws, n2) {
      return ws.slice(n2, 7).concat(ws.slice(0, n2));
    }
    var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m2, format2) {
      var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m2 && m2 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
      return m2 === true ? shiftWeekdays(weekdays, this._week.dow) : m2 ? weekdays[m2.day()] : weekdays;
    }
    function localeWeekdaysShort(m2) {
      return m2 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m2 ? this._weekdaysShort[m2.day()] : this._weekdaysShort;
    }
    function localeWeekdaysMin(m2) {
      return m2 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m2 ? this._weekdaysMin[m2.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format2, strict) {
      var i2, ii2, mom, llc = weekdayName.toLocaleLowerCase();
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];
        for (i2 = 0; i2 < 7; ++i2) {
          mom = createUTC([2e3, 1]).day(i2);
          this._minWeekdaysParse[i2] = this.weekdaysMin(
            mom,
            ""
          ).toLocaleLowerCase();
          this._shortWeekdaysParse[i2] = this.weekdaysShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._weekdaysParse[i2] = this.weekdays(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "dddd") {
          ii2 = indexOf.call(this._weekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else if (format2 === "ddd") {
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      } else {
        if (format2 === "dddd") {
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else if (format2 === "ddd") {
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        } else {
          ii2 = indexOf.call(this._minWeekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._weekdaysParse, llc);
          if (ii2 !== -1) {
            return ii2;
          }
          ii2 = indexOf.call(this._shortWeekdaysParse, llc);
          return ii2 !== -1 ? ii2 : null;
        }
      }
    }
    function localeWeekdaysParse(weekdayName, format2, strict) {
      var i2, mom, regex;
      if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format2, strict);
      }
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }
      for (i2 = 0; i2 < 7; i2++) {
        mom = createUTC([2e3, 1]).day(i2);
        if (strict && !this._fullWeekdaysParse[i2]) {
          this._fullWeekdaysParse[i2] = new RegExp(
            "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._shortWeekdaysParse[i2] = new RegExp(
            "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._minWeekdaysParse[i2] = new RegExp(
            "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
        }
        if (!this._weekdaysParse[i2]) {
          regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
          this._weekdaysParse[i2] = new RegExp(regex.replace(".", ""), "i");
        }
        if (strict && format2 === "dddd" && this._fullWeekdaysParse[i2].test(weekdayName)) {
          return i2;
        } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i2].test(weekdayName)) {
          return i2;
        } else if (strict && format2 === "dd" && this._minWeekdaysParse[i2].test(weekdayName)) {
          return i2;
        } else if (!strict && this._weekdaysParse[i2].test(weekdayName)) {
          return i2;
        }
      }
    }
    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var day = get(this, "Day");
      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, "d");
      } else {
        return day;
      }
    }
    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, "d");
    }
    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
        return this.day() || 7;
      }
    }
    function weekdaysRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysStrictRegex;
        } else {
          return this._weekdaysRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
      }
    }
    function weekdaysShortRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysShortStrictRegex;
        } else {
          return this._weekdaysShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysShortRegex")) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
      }
    }
    function weekdaysMinRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysMinStrictRegex;
        } else {
          return this._weekdaysMinRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysMinRegex")) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
      }
    }
    function computeWeekdaysParse() {
      function cmpLenRev(a2, b2) {
        return b2.length - a2.length;
      }
      var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i2, mom, minp, shortp, longp;
      for (i2 = 0; i2 < 7; i2++) {
        mom = createUTC([2e3, 1]).day(i2);
        minp = regexEscape(this.weekdaysMin(mom, ""));
        shortp = regexEscape(this.weekdaysShort(mom, ""));
        longp = regexEscape(this.weekdays(mom, ""));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
      }
      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;
      this._weekdaysStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._weekdaysShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
      this._weekdaysMinStrictRegex = new RegExp(
        "^(" + minPieces.join("|") + ")",
        "i"
      );
    }
    function hFormat() {
      return this.hours() % 12 || 12;
    }
    function kFormat() {
      return this.hours() || 24;
    }
    addFormatToken("H", ["HH", 2], 0, "hour");
    addFormatToken("h", ["hh", 2], 0, hFormat);
    addFormatToken("k", ["kk", 2], 0, kFormat);
    addFormatToken("hmm", 0, 0, function() {
      return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken("hmmss", 0, 0, function() {
      return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken("Hmm", 0, 0, function() {
      return "" + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken("Hmmss", 0, 0, function() {
      return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem(token2, lowercase) {
      addFormatToken(token2, 0, 0, function() {
        return this.localeData().meridiem(
          this.hours(),
          this.minutes(),
          lowercase
        );
      });
    }
    meridiem("a", true);
    meridiem("A", false);
    function matchMeridiem(isStrict, locale2) {
      return locale2._meridiemParse;
    }
    addRegexToken("a", matchMeridiem);
    addRegexToken("A", matchMeridiem);
    addRegexToken("H", match1to2, match1to2HasZero);
    addRegexToken("h", match1to2, match1to2NoLeadingZero);
    addRegexToken("k", match1to2, match1to2NoLeadingZero);
    addRegexToken("HH", match1to2, match2);
    addRegexToken("hh", match1to2, match2);
    addRegexToken("kk", match1to2, match2);
    addRegexToken("hmm", match3to4);
    addRegexToken("hmmss", match5to6);
    addRegexToken("Hmm", match3to4);
    addRegexToken("Hmmss", match5to6);
    addParseToken(["H", "HH"], HOUR);
    addParseToken(["k", "kk"], function(input, array, config) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(["a", "A"], function(input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
    });
    addParseToken(["h", "hh"], function(input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmm", function(input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmmss", function(input, array, config) {
      var pos1 = input.length - 4, pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("Hmm", function(input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken("Hmmss", function(input, array, config) {
      var pos1 = input.length - 4, pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    });
    function localeIsPM(input) {
      return (input + "").toLowerCase().charAt(0) === "p";
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
    function localeMeridiem(hours2, minutes2, isLower) {
      if (hours2 > 11) {
        return isLower ? "pm" : "PM";
      } else {
        return isLower ? "am" : "AM";
      }
    }
    var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,
      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,
      week: defaultLocaleWeek,
      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,
      meridiemParse: defaultLocaleMeridiemParse
    };
    var locales = {}, localeFamilies = {}, globalLocale;
    function commonPrefix(arr1, arr2) {
      var i2, minl = Math.min(arr1.length, arr2.length);
      for (i2 = 0; i2 < minl; i2 += 1) {
        if (arr1[i2] !== arr2[i2]) {
          return i2;
        }
      }
      return minl;
    }
    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace("_", "-") : key;
    }
    function chooseLocale(names) {
      var i2 = 0, j2, next, locale2, split;
      while (i2 < names.length) {
        split = normalizeLocale(names[i2]).split("-");
        j2 = split.length;
        next = normalizeLocale(names[i2 + 1]);
        next = next ? next.split("-") : null;
        while (j2 > 0) {
          locale2 = loadLocale(split.slice(0, j2).join("-"));
          if (locale2) {
            return locale2;
          }
          if (next && next.length >= j2 && commonPrefix(split, next) >= j2 - 1) {
            break;
          }
          j2--;
        }
        i2++;
      }
      return globalLocale;
    }
    function isLocaleNameSane(name) {
      return !!(name && name.match("^[^/\\\\]*$"));
    }
    function loadLocale(name) {
      var oldLocale = null, aliasedRequire;
      if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
        try {
          oldLocale = globalLocale._abbr;
          aliasedRequire = require;
          aliasedRequire("./locale/" + name);
          getSetGlobalLocale(oldLocale);
        } catch (e2) {
          locales[name] = null;
        }
      }
      return locales[name];
    }
    function getSetGlobalLocale(key, values) {
      var data;
      if (key) {
        if (isUndefined(values)) {
          data = getLocale(key);
        } else {
          data = defineLocale(key, values);
        }
        if (data) {
          globalLocale = data;
        } else {
          if (typeof console !== "undefined" && console.warn) {
            console.warn(
              "Locale " + key + " not found. Did you forget to load it?"
            );
          }
        }
      }
      return globalLocale._abbr;
    }
    function defineLocale(name, config) {
      if (config !== null) {
        var locale2, parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
          deprecateSimple(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          );
          parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
          if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
          } else {
            locale2 = loadLocale(config.parentLocale);
            if (locale2 != null) {
              parentConfig = locale2._config;
            } else {
              if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
              }
              localeFamilies[config.parentLocale].push({
                name,
                config
              });
              return null;
            }
          }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));
        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function(x2) {
            defineLocale(x2.name, x2.config);
          });
        }
        getSetGlobalLocale(name);
        return locales[name];
      } else {
        delete locales[name];
        return null;
      }
    }
    function updateLocale(name, config) {
      if (config != null) {
        var locale2, tmpLocale, parentConfig = baseConfig;
        if (locales[name] != null && locales[name].parentLocale != null) {
          locales[name].set(mergeConfigs(locales[name]._config, config));
        } else {
          tmpLocale = loadLocale(name);
          if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
          }
          config = mergeConfigs(parentConfig, config);
          if (tmpLocale == null) {
            config.abbr = name;
          }
          locale2 = new Locale(config);
          locale2.parentLocale = locales[name];
          locales[name] = locale2;
        }
        getSetGlobalLocale(name);
      } else {
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;
            if (name === getSetGlobalLocale()) {
              getSetGlobalLocale(name);
            }
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }
      return locales[name];
    }
    function getLocale(key) {
      var locale2;
      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }
      if (!key) {
        return globalLocale;
      }
      if (!isArray(key)) {
        locale2 = loadLocale(key);
        if (locale2) {
          return locale2;
        }
        key = [key];
      }
      return chooseLocale(key);
    }
    function listLocales() {
      return keys(locales);
    }
    function checkOverflow(m2) {
      var overflow, a2 = m2._a;
      if (a2 && getParsingFlags(m2).overflow === -2) {
        overflow = a2[MONTH] < 0 || a2[MONTH] > 11 ? MONTH : a2[DATE] < 1 || a2[DATE] > daysInMonth(a2[YEAR], a2[MONTH]) ? DATE : a2[HOUR] < 0 || a2[HOUR] > 24 || a2[HOUR] === 24 && (a2[MINUTE] !== 0 || a2[SECOND] !== 0 || a2[MILLISECOND] !== 0) ? HOUR : a2[MINUTE] < 0 || a2[MINUTE] > 59 ? MINUTE : a2[SECOND] < 0 || a2[SECOND] > 59 ? SECOND : a2[MILLISECOND] < 0 || a2[MILLISECOND] > 999 ? MILLISECOND : -1;
        if (getParsingFlags(m2)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }
        if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }
        if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }
        getParsingFlags(m2).overflow = overflow;
      }
      return m2;
    }
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, false],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, false],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, false],
      ["YYYY", /\d{4}/, false]
    ], isoTimes = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };
    function configFromISO(config) {
      var i2, l2, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
      if (match) {
        getParsingFlags(config).iso = true;
        for (i2 = 0, l2 = isoDatesLen; i2 < l2; i2++) {
          if (isoDates[i2][1].exec(match[1])) {
            dateFormat = isoDates[i2][0];
            allowTime = isoDates[i2][2] !== false;
            break;
          }
        }
        if (dateFormat == null) {
          config._isValid = false;
          return;
        }
        if (match[3]) {
          for (i2 = 0, l2 = isoTimesLen; i2 < l2; i2++) {
            if (isoTimes[i2][1].exec(match[3])) {
              timeFormat = (match[2] || " ") + isoTimes[i2][0];
              break;
            }
          }
          if (timeFormat == null) {
            config._isValid = false;
            return;
          }
        }
        if (!allowTime && timeFormat != null) {
          config._isValid = false;
          return;
        }
        if (match[4]) {
          if (tzRegex.exec(match[4])) {
            tzFormat = "Z";
          } else {
            config._isValid = false;
            return;
          }
        }
        config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
        configFromStringAndFormat(config);
      } else {
        config._isValid = false;
      }
    }
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
      ];
      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }
      return result;
    }
    function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);
      if (year <= 49) {
        return 2e3 + year;
      } else if (year <= 999) {
        return 1900 + year;
      }
      return year;
    }
    function preprocessRFC2822(s2) {
      return s2.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
      if (weekdayStr) {
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(
          parsedInput[0],
          parsedInput[1],
          parsedInput[2]
        ).getDay();
        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config).weekdayMismatch = true;
          config._isValid = false;
          return false;
        }
      }
      return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        return 0;
      } else {
        var hm = parseInt(numOffset, 10), m2 = hm % 100, h2 = (hm - m2) / 100;
        return h2 * 60 + m2;
      }
    }
    function configFromRFC2822(config) {
      var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
      if (match) {
        parsedArray = extractFromRFC2822Strings(
          match[4],
          match[3],
          match[2],
          match[5],
          match[6],
          match[7]
        );
        if (!checkWeekday(match[1], parsedArray, config)) {
          return;
        }
        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);
        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        getParsingFlags(config).rfc2822 = true;
      } else {
        config._isValid = false;
      }
    }
    function configFromString(config) {
      var matched = aspNetJsonRegex.exec(config._i);
      if (matched !== null) {
        config._d = /* @__PURE__ */ new Date(+matched[1]);
        return;
      }
      configFromISO(config);
      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }
      configFromRFC2822(config);
      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }
      if (config._strict) {
        config._isValid = false;
      } else {
        hooks.createFromInputFallback(config);
      }
    }
    hooks.createFromInputFallback = deprecate(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function(config) {
        config._d = /* @__PURE__ */ new Date(config._i + (config._useUTC ? " UTC" : ""));
      }
    );
    function defaults(a2, b2, c2) {
      if (a2 != null) {
        return a2;
      }
      if (b2 != null) {
        return b2;
      }
      return c2;
    }
    function currentDateArray(config) {
      var nowValue = new Date(hooks.now());
      if (config._useUTC) {
        return [
          nowValue.getUTCFullYear(),
          nowValue.getUTCMonth(),
          nowValue.getUTCDate()
        ];
      }
      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }
    function configFromArray(config) {
      var i2, date, input = [], currentDate, expectedWeekday, yearToUse;
      if (config._d) {
        return;
      }
      currentDate = currentDateArray(config);
      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      }
      if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
          getParsingFlags(config)._overflowDayOfYear = true;
        }
        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      }
      for (i2 = 0; i2 < 3 && config._a[i2] == null; ++i2) {
        config._a[i2] = input[i2] = currentDate[i2];
      }
      for (; i2 < 7; i2++) {
        config._a[i2] = input[i2] = config._a[i2] == null ? i2 === 2 ? 1 : 0 : config._a[i2];
      }
      if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
      }
      config._d = (config._useUTC ? createUTCDate : createDate).apply(
        null,
        input
      );
      expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }
      if (config._nextDay) {
        config._a[HOUR] = 24;
      }
      if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
      }
    }
    function dayOfYearFromWeekInfo(config) {
      var w2, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
      w2 = config._w;
      if (w2.GG != null || w2.W != null || w2.E != null) {
        dow = 1;
        doy = 4;
        weekYear = defaults(
          w2.GG,
          config._a[YEAR],
          weekOfYear(createLocal(), 1, 4).year
        );
        week = defaults(w2.W, 1);
        weekday = defaults(w2.E, 1);
        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        curWeek = weekOfYear(createLocal(), dow, doy);
        weekYear = defaults(w2.gg, config._a[YEAR], curWeek.year);
        week = defaults(w2.w, curWeek.week);
        if (w2.d != null) {
          weekday = w2.d;
          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w2.e != null) {
          weekday = w2.e + dow;
          if (w2.e < 0 || w2.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          weekday = dow;
        }
      }
      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
      }
    }
    hooks.ISO_8601 = function() {
    };
    hooks.RFC_2822 = function() {
    };
    function configFromStringAndFormat(config) {
      if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
      }
      if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
      }
      config._a = [];
      getParsingFlags(config).empty = true;
      var string = "" + config._i, i2, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
      tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
      tokenLen = tokens2.length;
      for (i2 = 0; i2 < tokenLen; i2++) {
        token2 = tokens2[i2];
        parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));
          if (skipped.length > 0) {
            getParsingFlags(config).unusedInput.push(skipped);
          }
          string = string.slice(
            string.indexOf(parsedInput) + parsedInput.length
          );
          totalParsedInputLength += parsedInput.length;
        }
        if (formatTokenFunctions[token2]) {
          if (parsedInput) {
            getParsingFlags(config).empty = false;
          } else {
            getParsingFlags(config).unusedTokens.push(token2);
          }
          addTimeToArrayFromToken(token2, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token2);
        }
      }
      getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
      if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
      }
      if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = void 0;
      }
      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem;
      config._a[HOUR] = meridiemFixWrap(
        config._locale,
        config._a[HOUR],
        config._meridiem
      );
      era = getParsingFlags(config).era;
      if (era !== null) {
        config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
      }
      configFromArray(config);
      checkOverflow(config);
    }
    function meridiemFixWrap(locale2, hour, meridiem2) {
      var isPm;
      if (meridiem2 == null) {
        return hour;
      }
      if (locale2.meridiemHour != null) {
        return locale2.meridiemHour(hour, meridiem2);
      } else if (locale2.isPM != null) {
        isPm = locale2.isPM(meridiem2);
        if (isPm && hour < 12) {
          hour += 12;
        }
        if (!isPm && hour === 12) {
          hour = 0;
        }
        return hour;
      } else {
        return hour;
      }
    }
    function configFromStringAndArray(config) {
      var tempConfig, bestMoment, scoreToBeat, i2, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
      if (configfLen === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = /* @__PURE__ */ new Date(NaN);
        return;
      }
      for (i2 = 0; i2 < configfLen; i2++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i2];
        configFromStringAndFormat(tempConfig);
        if (isValid(tempConfig)) {
          validFormatFound = true;
        }
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (!bestFormatIsValid) {
          if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
            if (validFormatFound) {
              bestFormatIsValid = true;
            }
          }
        } else {
          if (currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
          }
        }
      }
      extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
      if (config._d) {
        return;
      }
      var i2 = normalizeObjectUnits(config._i), dayOrDate = i2.day === void 0 ? i2.date : i2.day;
      config._a = map(
        [i2.year, i2.month, dayOrDate, i2.hour, i2.minute, i2.second, i2.millisecond],
        function(obj) {
          return obj && parseInt(obj, 10);
        }
      );
      configFromArray(config);
    }
    function createFromConfig(config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));
      if (res._nextDay) {
        res.add(1, "d");
        res._nextDay = void 0;
      }
      return res;
    }
    function prepareConfig(config) {
      var input = config._i, format2 = config._f;
      config._locale = config._locale || getLocale(config._l);
      if (input === null || format2 === void 0 && input === "") {
        return createInvalid({ nullInput: true });
      }
      if (typeof input === "string") {
        config._i = input = config._locale.preparse(input);
      }
      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
        config._d = input;
      } else if (isArray(format2)) {
        configFromStringAndArray(config);
      } else if (format2) {
        configFromStringAndFormat(config);
      } else {
        configFromInput(config);
      }
      if (!isValid(config)) {
        config._d = null;
      }
      return config;
    }
    function configFromInput(config) {
      var input = config._i;
      if (isUndefined(input)) {
        config._d = new Date(hooks.now());
      } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
      } else if (typeof input === "string") {
        configFromString(config);
      } else if (isArray(input)) {
        config._a = map(input.slice(0), function(obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config);
      } else if (isObject(input)) {
        configFromObject(config);
      } else if (isNumber(input)) {
        config._d = new Date(input);
      } else {
        hooks.createFromInputFallback(config);
      }
    }
    function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
      var c2 = {};
      if (format2 === true || format2 === false) {
        strict = format2;
        format2 = void 0;
      }
      if (locale2 === true || locale2 === false) {
        strict = locale2;
        locale2 = void 0;
      }
      if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
        input = void 0;
      }
      c2._isAMomentObject = true;
      c2._useUTC = c2._isUTC = isUTC;
      c2._l = locale2;
      c2._i = input;
      c2._f = format2;
      c2._strict = strict;
      return createFromConfig(c2);
    }
    function createLocal(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, false);
    }
    var prototypeMin = deprecate(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      }
    ), prototypeMax = deprecate(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      }
    );
    function pickBy(fn, moments) {
      var res, i2;
      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }
      if (!moments.length) {
        return createLocal();
      }
      res = moments[0];
      for (i2 = 1; i2 < moments.length; ++i2) {
        if (!moments[i2].isValid() || moments[i2][fn](res)) {
          res = moments[i2];
        }
      }
      return res;
    }
    function min() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isBefore", args);
    }
    function max() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isAfter", args);
    }
    var now = function() {
      return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
    };
    var ordering = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond"
    ];
    function isDurationValid(m2) {
      var key, unitHasDecimal = false, i2, orderLen = ordering.length;
      for (key in m2) {
        if (hasOwnProp(m2, key) && !(indexOf.call(ordering, key) !== -1 && (m2[key] == null || !isNaN(m2[key])))) {
          return false;
        }
      }
      for (i2 = 0; i2 < orderLen; ++i2) {
        if (m2[ordering[i2]]) {
          if (unitHasDecimal) {
            return false;
          }
          if (parseFloat(m2[ordering[i2]]) !== toInt(m2[ordering[i2]])) {
            unitHasDecimal = true;
          }
        }
      }
      return true;
    }
    function isValid$1() {
      return this._isValid;
    }
    function createInvalid$1() {
      return createDuration(NaN);
    }
    function Duration(duration) {
      var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
      this._isValid = isDurationValid(normalizedInput);
      this._milliseconds = +milliseconds2 + seconds2 * 1e3 + // 1000
      minutes2 * 6e4 + // 1000 * 60
      hours2 * 1e3 * 60 * 60;
      this._days = +days2 + weeks2 * 7;
      this._months = +months2 + quarters * 3 + years2 * 12;
      this._data = {};
      this._locale = getLocale();
      this._bubble();
    }
    function isDuration(obj) {
      return obj instanceof Duration;
    }
    function absRound(number) {
      if (number < 0) {
        return Math.round(-1 * number) * -1;
      } else {
        return Math.round(number);
      }
    }
    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i2;
      for (i2 = 0; i2 < len; i2++) {
        if (dontConvert && array1[i2] !== array2[i2] || !dontConvert && toInt(array1[i2]) !== toInt(array2[i2])) {
          diffs++;
        }
      }
      return diffs + lengthDiff;
    }
    function offset(token2, separator) {
      addFormatToken(token2, 0, 0, function() {
        var offset2 = this.utcOffset(), sign2 = "+";
        if (offset2 < 0) {
          offset2 = -offset2;
          sign2 = "-";
        }
        return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
      });
    }
    offset("Z", ":");
    offset("ZZ", "");
    addRegexToken("Z", matchShortOffset);
    addRegexToken("ZZ", matchShortOffset);
    addParseToken(["Z", "ZZ"], function(input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
    });
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
      var matches = (string || "").match(matcher), chunk, parts2, minutes2;
      if (matches === null) {
        return null;
      }
      chunk = matches[matches.length - 1] || [];
      parts2 = (chunk + "").match(chunkOffset) || ["-", 0, 0];
      minutes2 = +(parts2[1] * 60) + toInt(parts2[2]);
      return minutes2 === 0 ? 0 : parts2[0] === "+" ? minutes2 : -minutes2;
    }
    function cloneWithOffset(input, model) {
      var res, diff2;
      if (model._isUTC) {
        res = model.clone();
        diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        res._d.setTime(res._d.valueOf() + diff2);
        hooks.updateOffset(res, false);
        return res;
      } else {
        return createLocal(input).local();
      }
    }
    function getDateOffset(m2) {
      return -Math.round(m2._d.getTimezoneOffset());
    }
    hooks.updateOffset = function() {
    };
    function getSetOffset(input, keepLocalTime, keepMinutes) {
      var offset2 = this._offset || 0, localAdjust;
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        if (typeof input === "string") {
          input = offsetFromString(matchShortOffset, input);
          if (input === null) {
            return this;
          }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
          input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
          this.add(localAdjust, "m");
        }
        if (offset2 !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addSubtract(
              this,
              createDuration(input - offset2, "m"),
              1,
              false
            );
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }
        return this;
      } else {
        return this._isUTC ? offset2 : getDateOffset(this);
      }
    }
    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== "string") {
          input = -input;
        }
        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }
    function setOffsetToUTC(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;
        if (keepLocalTime) {
          this.subtract(getDateOffset(this), "m");
        }
      }
      return this;
    }
    function setOffsetToParsedOffset() {
      if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === "string") {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
          this.utcOffset(tZone);
        } else {
          this.utcOffset(0, true);
        }
      }
      return this;
    }
    function hasAlignedHourOffset(input) {
      if (!this.isValid()) {
        return false;
      }
      input = input ? createLocal(input).utcOffset() : 0;
      return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }
      var c2 = {}, other;
      copyConfig(c2, this);
      c2 = prepareConfig(c2);
      if (c2._a) {
        other = c2._isUTC ? createUTC(c2._a) : createLocal(c2._a);
        this._isDSTShifted = this.isValid() && compareArrays(c2._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }
      return this._isDSTShifted;
    }
    function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
      var duration = input, match = null, sign2, ret, diffRes;
      if (isDuration(input)) {
        duration = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months
        };
      } else if (isNumber(input) || !isNaN(+input)) {
        duration = {};
        if (key) {
          duration[key] = +input;
        } else {
          duration.milliseconds = +input;
        }
      } else if (match = aspNetRegex.exec(input)) {
        sign2 = match[1] === "-" ? -1 : 1;
        duration = {
          y: 0,
          d: toInt(match[DATE]) * sign2,
          h: toInt(match[HOUR]) * sign2,
          m: toInt(match[MINUTE]) * sign2,
          s: toInt(match[SECOND]) * sign2,
          ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
          // the millisecond decimal point is included in the match
        };
      } else if (match = isoRegex.exec(input)) {
        sign2 = match[1] === "-" ? -1 : 1;
        duration = {
          y: parseIso(match[2], sign2),
          M: parseIso(match[3], sign2),
          w: parseIso(match[4], sign2),
          d: parseIso(match[5], sign2),
          h: parseIso(match[6], sign2),
          m: parseIso(match[7], sign2),
          s: parseIso(match[8], sign2)
        };
      } else if (duration == null) {
        duration = {};
      } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
        diffRes = momentsDifference(
          createLocal(duration.from),
          createLocal(duration.to)
        );
        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
      }
      ret = new Duration(duration);
      if (isDuration(input) && hasOwnProp(input, "_locale")) {
        ret._locale = input._locale;
      }
      if (isDuration(input) && hasOwnProp(input, "_isValid")) {
        ret._isValid = input._isValid;
      }
      return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign2) {
      var res = inp && parseFloat(inp.replace(",", "."));
      return (isNaN(res) ? 0 : res) * sign2;
    }
    function positiveMomentsDifference(base, other) {
      var res = {};
      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
      if (base.clone().add(res.months, "M").isAfter(other)) {
        --res.months;
      }
      res.milliseconds = +other - +base.clone().add(res.months, "M");
      return res;
    }
    function momentsDifference(base, other) {
      var res;
      if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
      }
      other = cloneWithOffset(other, base);
      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }
      return res;
    }
    function createAdder(direction, name) {
      return function(val, period) {
        var dur, tmp;
        if (period !== null && !isNaN(+period)) {
          deprecateSimple(
            name,
            "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          );
          tmp = val;
          val = period;
          period = tmp;
        }
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
      };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
      var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
      if (!mom.isValid()) {
        return;
      }
      updateOffset = updateOffset == null ? true : updateOffset;
      if (months2) {
        setMonth(mom, get(mom, "Month") + months2 * isAdding);
      }
      if (days2) {
        set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
      }
      if (milliseconds2) {
        mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
      }
      if (updateOffset) {
        hooks.updateOffset(mom, days2 || months2);
      }
    }
    var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
    function isString(input) {
      return typeof input === "string" || input instanceof String;
    }
    function isMomentInput(input) {
      return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
    }
    function isMomentInputObject(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
        "years",
        "year",
        "y",
        "months",
        "month",
        "M",
        "days",
        "day",
        "d",
        "dates",
        "date",
        "D",
        "hours",
        "hour",
        "h",
        "minutes",
        "minute",
        "m",
        "seconds",
        "second",
        "s",
        "milliseconds",
        "millisecond",
        "ms"
      ], i2, property, propertyLen = properties.length;
      for (i2 = 0; i2 < propertyLen; i2 += 1) {
        property = properties[i2];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
      var arrayTest = isArray(input), dataTypeTest = false;
      if (arrayTest) {
        dataTypeTest = input.filter(function(item) {
          return !isNumber(item) && isString(input);
        }).length === 0;
      }
      return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
        "sameDay",
        "nextDay",
        "lastDay",
        "nextWeek",
        "lastWeek",
        "sameElse"
      ], i2, property;
      for (i2 = 0; i2 < properties.length; i2 += 1) {
        property = properties[i2];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now2) {
      var diff2 = myMoment.diff(now2, "days", true);
      return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
    }
    function calendar$1(time, formats) {
      if (arguments.length === 1) {
        if (!arguments[0]) {
          time = void 0;
          formats = void 0;
        } else if (isMomentInput(arguments[0])) {
          time = arguments[0];
          formats = void 0;
        } else if (isCalendarSpec(arguments[0])) {
          formats = arguments[0];
          time = void 0;
        }
      }
      var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
      return this.format(
        output || this.localeData().calendar(format2, this, createLocal(now2))
      );
    }
    function clone() {
      return new Moment(this);
    }
    function isAfter(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() > localInput.valueOf();
      } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
      }
    }
    function isBefore(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() < localInput.valueOf();
      } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
      }
    }
    function isBetween(from2, to2, units, inclusivity) {
      var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
      if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
      }
      inclusivity = inclusivity || "()";
      return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input), inputMs;
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() === localInput.valueOf();
      } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
      }
    }
    function isSameOrAfter(input, units) {
      return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
      return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff(input, units, asFloat) {
      var that, zoneDelta, output;
      if (!this.isValid()) {
        return NaN;
      }
      that = cloneWithOffset(input, this);
      if (!that.isValid()) {
        return NaN;
      }
      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
      units = normalizeUnits(units);
      switch (units) {
        case "year":
          output = monthDiff(this, that) / 12;
          break;
        case "month":
          output = monthDiff(this, that);
          break;
        case "quarter":
          output = monthDiff(this, that) / 3;
          break;
        case "second":
          output = (this - that) / 1e3;
          break;
        case "minute":
          output = (this - that) / 6e4;
          break;
        case "hour":
          output = (this - that) / 36e5;
          break;
        case "day":
          output = (this - that - zoneDelta) / 864e5;
          break;
        case "week":
          output = (this - that - zoneDelta) / 6048e5;
          break;
        default:
          output = this - that;
      }
      return asFloat ? output : absFloor(output);
    }
    function monthDiff(a2, b2) {
      if (a2.date() < b2.date()) {
        return -monthDiff(b2, a2);
      }
      var wholeMonthDiff = (b2.year() - a2.year()) * 12 + (b2.month() - a2.month()), anchor = a2.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
      if (b2 - anchor < 0) {
        anchor2 = a2.clone().add(wholeMonthDiff - 1, "months");
        adjust = (b2 - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a2.clone().add(wholeMonthDiff + 1, "months");
        adjust = (b2 - anchor) / (anchor2 - anchor);
      }
      return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    function toString() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function toISOString(keepOffset) {
      if (!this.isValid()) {
        return null;
      }
      var utc = keepOffset !== true, m2 = utc ? this.clone().utc() : this;
      if (m2.year() < 0 || m2.year() > 9999) {
        return formatMoment(
          m2,
          utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      if (isFunction(Date.prototype.toISOString)) {
        if (utc) {
          return this.toDate().toISOString();
        } else {
          return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m2, "Z"));
        }
      }
      return formatMoment(
        m2,
        utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    function inspect() {
      if (!this.isValid()) {
        return "moment.invalid(/* " + this._i + " */)";
      }
      var func = "moment", zone = "", prefix, year, datetime, suffix;
      if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
        zone = "Z";
      }
      prefix = "[" + func + '("]';
      year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
      datetime = "-MM-DD[T]HH:mm:ss.SSS";
      suffix = zone + '[")]';
      return this.format(prefix + year + datetime + suffix);
    }
    function format(inputString) {
      if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
      }
      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function fromNow(withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function toNow(withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
    }
    function locale(key) {
      var newLocaleData;
      if (key === void 0) {
        return this._locale._abbr;
      } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }
        return this;
      }
    }
    var lang = deprecate(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function(key) {
        if (key === void 0) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      }
    );
    function localeData() {
      return this._locale;
    }
    var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
    function mod$1(dividend, divisor) {
      return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y2, m2, d2) {
      if (y2 < 100 && y2 >= 0) {
        return new Date(y2 + 400, m2, d2) - MS_PER_400_YEARS;
      } else {
        return new Date(y2, m2, d2).valueOf();
      }
    }
    function utcStartOfDate(y2, m2, d2) {
      if (y2 < 100 && y2 >= 0) {
        return Date.UTC(y2 + 400, m2, d2) - MS_PER_400_YEARS;
      } else {
        return Date.UTC(y2, m2, d2);
      }
    }
    function startOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);
      if (units === void 0 || units === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units) {
        case "year":
          time = startOfDate(this.year(), 0, 1);
          break;
        case "quarter":
          time = startOfDate(
            this.year(),
            this.month() - this.month() % 3,
            1
          );
          break;
        case "month":
          time = startOfDate(this.year(), this.month(), 1);
          break;
        case "week":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday()
          );
          break;
        case "isoWeek":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date());
          break;
        case "hour":
          time = this._d.valueOf();
          time -= mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR
          );
          break;
        case "minute":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;
        case "second":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function endOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);
      if (units === void 0 || units === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units) {
        case "year":
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          time = startOfDate(
            this.year(),
            this.month() - this.month() % 3 + 3,
            1
          ) - 1;
          break;
        case "month":
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday() + 7
          ) - 1;
          break;
        case "isoWeek":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          time = this._d.valueOf();
          time += MS_PER_HOUR - mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR
          ) - 1;
          break;
        case "minute":
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;
        case "second":
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function valueOf() {
      return this._d.valueOf() - (this._offset || 0) * 6e4;
    }
    function unix() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function toDate() {
      return new Date(this.valueOf());
    }
    function toArray() {
      var m2 = this;
      return [
        m2.year(),
        m2.month(),
        m2.date(),
        m2.hour(),
        m2.minute(),
        m2.second(),
        m2.millisecond()
      ];
    }
    function toObject() {
      var m2 = this;
      return {
        years: m2.year(),
        months: m2.month(),
        date: m2.date(),
        hours: m2.hours(),
        minutes: m2.minutes(),
        seconds: m2.seconds(),
        milliseconds: m2.milliseconds()
      };
    }
    function toJSON() {
      return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
      return isValid(this);
    }
    function parsingFlags() {
      return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
      return getParsingFlags(this).overflow;
    }
    function creationData() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    }
    addFormatToken("N", 0, 0, "eraAbbr");
    addFormatToken("NN", 0, 0, "eraAbbr");
    addFormatToken("NNN", 0, 0, "eraAbbr");
    addFormatToken("NNNN", 0, 0, "eraName");
    addFormatToken("NNNNN", 0, 0, "eraNarrow");
    addFormatToken("y", ["y", 1], "yo", "eraYear");
    addFormatToken("y", ["yy", 2], 0, "eraYear");
    addFormatToken("y", ["yyy", 3], 0, "eraYear");
    addFormatToken("y", ["yyyy", 4], 0, "eraYear");
    addRegexToken("N", matchEraAbbr);
    addRegexToken("NN", matchEraAbbr);
    addRegexToken("NNN", matchEraAbbr);
    addRegexToken("NNNN", matchEraName);
    addRegexToken("NNNNN", matchEraNarrow);
    addParseToken(
      ["N", "NN", "NNN", "NNNN", "NNNNN"],
      function(input, array, config, token2) {
        var era = config._locale.erasParse(input, token2, config._strict);
        if (era) {
          getParsingFlags(config).era = era;
        } else {
          getParsingFlags(config).invalidEra = input;
        }
      }
    );
    addRegexToken("y", matchUnsigned);
    addRegexToken("yy", matchUnsigned);
    addRegexToken("yyy", matchUnsigned);
    addRegexToken("yyyy", matchUnsigned);
    addRegexToken("yo", matchEraYearOrdinal);
    addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
    addParseToken(["yo"], function(input, array, config, token2) {
      var match;
      if (config._locale._eraYearOrdinalRegex) {
        match = input.match(config._locale._eraYearOrdinalRegex);
      }
      if (config._locale.eraYearOrdinalParse) {
        array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
      } else {
        array[YEAR] = parseInt(input, 10);
      }
    });
    function localeEras(m2, format2) {
      var i2, l2, date, eras = this._eras || getLocale("en")._eras;
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        switch (typeof eras[i2].since) {
          case "string":
            date = hooks(eras[i2].since).startOf("day");
            eras[i2].since = date.valueOf();
            break;
        }
        switch (typeof eras[i2].until) {
          case "undefined":
            eras[i2].until = Infinity;
            break;
          case "string":
            date = hooks(eras[i2].until).startOf("day").valueOf();
            eras[i2].until = date.valueOf();
            break;
        }
      }
      return eras;
    }
    function localeErasParse(eraName, format2, strict) {
      var i2, l2, eras = this.eras(), name, abbr, narrow;
      eraName = eraName.toUpperCase();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        name = eras[i2].name.toUpperCase();
        abbr = eras[i2].abbr.toUpperCase();
        narrow = eras[i2].narrow.toUpperCase();
        if (strict) {
          switch (format2) {
            case "N":
            case "NN":
            case "NNN":
              if (abbr === eraName) {
                return eras[i2];
              }
              break;
            case "NNNN":
              if (name === eraName) {
                return eras[i2];
              }
              break;
            case "NNNNN":
              if (narrow === eraName) {
                return eras[i2];
              }
              break;
          }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
          return eras[i2];
        }
      }
    }
    function localeErasConvertYear(era, year) {
      var dir = era.since <= era.until ? 1 : -1;
      if (year === void 0) {
        return hooks(era.since).year();
      } else {
        return hooks(era.since).year() + (year - era.offset) * dir;
      }
    }
    function getEraName() {
      var i2, l2, val, eras = this.localeData().eras();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i2].since <= val && val <= eras[i2].until) {
          return eras[i2].name;
        }
        if (eras[i2].until <= val && val <= eras[i2].since) {
          return eras[i2].name;
        }
      }
      return "";
    }
    function getEraNarrow() {
      var i2, l2, val, eras = this.localeData().eras();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i2].since <= val && val <= eras[i2].until) {
          return eras[i2].narrow;
        }
        if (eras[i2].until <= val && val <= eras[i2].since) {
          return eras[i2].narrow;
        }
      }
      return "";
    }
    function getEraAbbr() {
      var i2, l2, val, eras = this.localeData().eras();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i2].since <= val && val <= eras[i2].until) {
          return eras[i2].abbr;
        }
        if (eras[i2].until <= val && val <= eras[i2].since) {
          return eras[i2].abbr;
        }
      }
      return "";
    }
    function getEraYear() {
      var i2, l2, dir, val, eras = this.localeData().eras();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        dir = eras[i2].since <= eras[i2].until ? 1 : -1;
        val = this.clone().startOf("day").valueOf();
        if (eras[i2].since <= val && val <= eras[i2].until || eras[i2].until <= val && val <= eras[i2].since) {
          return (this.year() - hooks(eras[i2].since).year()) * dir + eras[i2].offset;
        }
      }
      return this.year();
    }
    function erasNameRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNameRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
      if (!hasOwnProp(this, "_erasAbbrRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNarrowRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale2) {
      return locale2.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale2) {
      return locale2.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale2) {
      return locale2.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale2) {
      return locale2._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
      var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i2, l2, erasName, erasAbbr, erasNarrow, eras = this.eras();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        erasName = regexEscape(eras[i2].name);
        erasAbbr = regexEscape(eras[i2].abbr);
        erasNarrow = regexEscape(eras[i2].narrow);
        namePieces.push(erasName);
        abbrPieces.push(erasAbbr);
        narrowPieces.push(erasNarrow);
        mixedPieces.push(erasName);
        mixedPieces.push(erasAbbr);
        mixedPieces.push(erasNarrow);
      }
      this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
      this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
      this._erasNarrowRegex = new RegExp(
        "^(" + narrowPieces.join("|") + ")",
        "i"
      );
    }
    addFormatToken(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100;
    });
    addFormatToken(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token2, getter) {
      addFormatToken(0, [token2, token2.length], 0, getter);
    }
    addWeekYearFormatToken("gggg", "weekYear");
    addWeekYearFormatToken("ggggg", "weekYear");
    addWeekYearFormatToken("GGGG", "isoWeekYear");
    addWeekYearFormatToken("GGGGG", "isoWeekYear");
    addRegexToken("G", matchSigned);
    addRegexToken("g", matchSigned);
    addRegexToken("GG", match1to2, match2);
    addRegexToken("gg", match1to2, match2);
    addRegexToken("GGGG", match1to4, match4);
    addRegexToken("gggg", match1to4, match4);
    addRegexToken("GGGGG", match1to6, match6);
    addRegexToken("ggggg", match1to6, match6);
    addWeekParseToken(
      ["gggg", "ggggg", "GGGG", "GGGGG"],
      function(input, week, config, token2) {
        week[token2.substr(0, 2)] = toInt(input);
      }
    );
    addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
      week[token2] = hooks.parseTwoDigitYear(input);
    });
    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday() + this.localeData()._week.dow,
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
      );
    }
    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
      return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;
      if (input == null) {
        return weekOfYear(this, dow, doy).year;
      } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
          week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    }
    addFormatToken("Q", 0, "Qo", "quarter");
    addRegexToken("Q", match1);
    addParseToken("Q", function(input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    });
    function getSetQuarter(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    addFormatToken("D", ["DD", 2], "Do", "date");
    addRegexToken("D", match1to2, match1to2NoLeadingZero);
    addRegexToken("DD", match1to2, match2);
    addRegexToken("Do", function(isStrict, locale2) {
      return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
    });
    addParseToken(["D", "DD"], DATE);
    addParseToken("Do", function(input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
    });
    var getSetDayOfMonth = makeGetSet("Date", true);
    addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    addRegexToken("DDD", match1to3);
    addRegexToken("DDDD", match3);
    addParseToken(["DDD", "DDDD"], function(input, array, config) {
      config._dayOfYear = toInt(input);
    });
    function getSetDayOfYear(input) {
      var dayOfYear = Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
    }
    addFormatToken("m", ["mm", 2], 0, "minute");
    addRegexToken("m", match1to2, match1to2HasZero);
    addRegexToken("mm", match1to2, match2);
    addParseToken(["m", "mm"], MINUTE);
    var getSetMinute = makeGetSet("Minutes", false);
    addFormatToken("s", ["ss", 2], 0, "second");
    addRegexToken("s", match1to2, match1to2HasZero);
    addRegexToken("ss", match1to2, match2);
    addParseToken(["s", "ss"], SECOND);
    var getSetSecond = makeGetSet("Seconds", false);
    addFormatToken("S", 0, 0, function() {
      return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ["SSS", 3], 0, "millisecond");
    addFormatToken(0, ["SSSS", 4], 0, function() {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ["SSSSS", 5], 0, function() {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ["SSSSSS", 6], 0, function() {
      return this.millisecond() * 1e3;
    });
    addFormatToken(0, ["SSSSSSS", 7], 0, function() {
      return this.millisecond() * 1e4;
    });
    addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
      return this.millisecond() * 1e5;
    });
    addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
      return this.millisecond() * 1e6;
    });
    addRegexToken("S", match1to3, match1);
    addRegexToken("SS", match1to3, match2);
    addRegexToken("SSS", match1to3, match3);
    var token, getSetMillisecond;
    for (token = "SSSS"; token.length <= 9; token += "S") {
      addRegexToken(token, matchUnsigned);
    }
    function parseMs(input, array) {
      array[MILLISECOND] = toInt(("0." + input) * 1e3);
    }
    for (token = "S"; token.length <= 9; token += "S") {
      addParseToken(token, parseMs);
    }
    getSetMillisecond = makeGetSet("Milliseconds", false);
    addFormatToken("z", 0, 0, "zoneAbbr");
    addFormatToken("zz", 0, 0, "zoneName");
    function getZoneAbbr() {
      return this._isUTC ? "UTC" : "";
    }
    function getZoneName() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== "undefined" && Symbol.for != null) {
      proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">";
      };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
      "dates accessor is deprecated. Use date instead.",
      getSetDayOfMonth
    );
    proto.months = deprecate(
      "months accessor is deprecated. Use month instead",
      getSetMonth
    );
    proto.years = deprecate(
      "years accessor is deprecated. Use year instead",
      getSetYear
    );
    proto.zone = deprecate(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      getSetZone
    );
    proto.isDSTShifted = deprecate(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      isDaylightSavingTimeShifted
    );
    function createUnix(input) {
      return createLocal(input * 1e3);
    }
    function createInZone() {
      return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
      return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format2, index2, field, setter) {
      var locale2 = getLocale(), utc = createUTC().set(setter, index2);
      return locale2[field](utc, format2);
    }
    function listMonthsImpl(format2, index2, field) {
      if (isNumber(format2)) {
        index2 = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
      if (index2 != null) {
        return get$1(format2, index2, field, "month");
      }
      var i2, out = [];
      for (i2 = 0; i2 < 12; i2++) {
        out[i2] = get$1(format2, i2, field, "month");
      }
      return out;
    }
    function listWeekdaysImpl(localeSorted, format2, index2, field) {
      if (typeof localeSorted === "boolean") {
        if (isNumber(format2)) {
          index2 = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      } else {
        format2 = localeSorted;
        index2 = format2;
        localeSorted = false;
        if (isNumber(format2)) {
          index2 = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      }
      var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i2, out = [];
      if (index2 != null) {
        return get$1(format2, (index2 + shift) % 7, field, "day");
      }
      for (i2 = 0; i2 < 7; i2++) {
        out[i2] = get$1(format2, (i2 + shift) % 7, field, "day");
      }
      return out;
    }
    function listMonths(format2, index2) {
      return listMonthsImpl(format2, index2, "months");
    }
    function listMonthsShort(format2, index2) {
      return listMonthsImpl(format2, index2, "monthsShort");
    }
    function listWeekdays(localeSorted, format2, index2) {
      return listWeekdaysImpl(localeSorted, format2, index2, "weekdays");
    }
    function listWeekdaysShort(localeSorted, format2, index2) {
      return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysShort");
    }
    function listWeekdaysMin(localeSorted, format2, index2) {
      return listWeekdaysImpl(localeSorted, format2, index2, "weekdaysMin");
    }
    getSetGlobalLocale("en", {
      eras: [
        {
          since: "0001-01-01",
          until: Infinity,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD"
        },
        {
          since: "0000-12-31",
          until: -Infinity,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC"
        }
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(number) {
        var b2 = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b2 === 1 ? "st" : b2 === 2 ? "nd" : b2 === 3 ? "rd" : "th";
        return number + output;
      }
    });
    hooks.lang = deprecate(
      "moment.lang is deprecated. Use moment.locale instead.",
      getSetGlobalLocale
    );
    hooks.langData = deprecate(
      "moment.langData is deprecated. Use moment.localeData instead.",
      getLocale
    );
    var mathAbs = Math.abs;
    function abs() {
      var data = this._data;
      this._milliseconds = mathAbs(this._milliseconds);
      this._days = mathAbs(this._days);
      this._months = mathAbs(this._months);
      data.milliseconds = mathAbs(data.milliseconds);
      data.seconds = mathAbs(data.seconds);
      data.minutes = mathAbs(data.minutes);
      data.hours = mathAbs(data.hours);
      data.months = mathAbs(data.months);
      data.years = mathAbs(data.years);
      return this;
    }
    function addSubtract$1(duration, input, value2, direction) {
      var other = createDuration(input, value2);
      duration._milliseconds += direction * other._milliseconds;
      duration._days += direction * other._days;
      duration._months += direction * other._months;
      return duration._bubble();
    }
    function add$1(input, value2) {
      return addSubtract$1(this, input, value2, 1);
    }
    function subtract$1(input, value2) {
      return addSubtract$1(this, input, value2, -1);
    }
    function absCeil(number) {
      if (number < 0) {
        return Math.floor(number);
      } else {
        return Math.ceil(number);
      }
    }
    function bubble() {
      var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
      if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
        milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
        days2 = 0;
        months2 = 0;
      }
      data.milliseconds = milliseconds2 % 1e3;
      seconds2 = absFloor(milliseconds2 / 1e3);
      data.seconds = seconds2 % 60;
      minutes2 = absFloor(seconds2 / 60);
      data.minutes = minutes2 % 60;
      hours2 = absFloor(minutes2 / 60);
      data.hours = hours2 % 24;
      days2 += absFloor(hours2 / 24);
      monthsFromDays = absFloor(daysToMonths(days2));
      months2 += monthsFromDays;
      days2 -= absCeil(monthsToDays(monthsFromDays));
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      data.days = days2;
      data.months = months2;
      data.years = years2;
      return this;
    }
    function daysToMonths(days2) {
      return days2 * 4800 / 146097;
    }
    function monthsToDays(months2) {
      return months2 * 146097 / 4800;
    }
    function as(units) {
      if (!this.isValid()) {
        return NaN;
      }
      var days2, months2, milliseconds2 = this._milliseconds;
      units = normalizeUnits(units);
      if (units === "month" || units === "quarter" || units === "year") {
        days2 = this._days + milliseconds2 / 864e5;
        months2 = this._months + daysToMonths(days2);
        switch (units) {
          case "month":
            return months2;
          case "quarter":
            return months2 / 3;
          case "year":
            return months2 / 12;
        }
      } else {
        days2 = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
          case "week":
            return days2 / 7 + milliseconds2 / 6048e5;
          case "day":
            return days2 + milliseconds2 / 864e5;
          case "hour":
            return days2 * 24 + milliseconds2 / 36e5;
          case "minute":
            return days2 * 1440 + milliseconds2 / 6e4;
          case "second":
            return days2 * 86400 + milliseconds2 / 1e3;
          case "millisecond":
            return Math.floor(days2 * 864e5) + milliseconds2;
          default:
            throw new Error("Unknown unit " + units);
        }
      }
    }
    function makeAs(alias) {
      return function() {
        return this.as(alias);
      };
    }
    var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y"), valueOf$1 = asMilliseconds;
    function clone$1() {
      return createDuration(this);
    }
    function get$2(units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + "s"]() : NaN;
    }
    function makeGetter(name) {
      return function() {
        return this.isValid() ? this._data[name] : NaN;
      };
    }
    var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
    function weeks() {
      return absFloor(this.days() / 7);
    }
    var round = Math.round, thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month/week
      w: null,
      // weeks to month
      M: 11
      // months to year
    };
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
      return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
      var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a2 = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
      if (thresholds2.w != null) {
        a2 = a2 || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
      }
      a2 = a2 || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
      a2[2] = withoutSuffix;
      a2[3] = +posNegDuration > 0;
      a2[4] = locale2;
      return substituteTimeAgo.apply(null, a2);
    }
    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === void 0) {
        return round;
      }
      if (typeof roundingFunction === "function") {
        round = roundingFunction;
        return true;
      }
      return false;
    }
    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === void 0) {
        return false;
      }
      if (limit === void 0) {
        return thresholds[threshold];
      }
      thresholds[threshold] = limit;
      if (threshold === "s") {
        thresholds.ss = limit - 1;
      }
      return true;
    }
    function humanize(argWithSuffix, argThresholds) {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var withSuffix = false, th2 = thresholds, locale2, output;
      if (typeof argWithSuffix === "object") {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
      }
      if (typeof argWithSuffix === "boolean") {
        withSuffix = argWithSuffix;
      }
      if (typeof argThresholds === "object") {
        th2 = Object.assign({}, thresholds, argThresholds);
        if (argThresholds.s != null && argThresholds.ss == null) {
          th2.ss = argThresholds.s - 1;
        }
      }
      locale2 = this.localeData();
      output = relativeTime$1(this, !withSuffix, th2, locale2);
      if (withSuffix) {
        output = locale2.pastFuture(+this, output);
      }
      return locale2.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign(x2) {
      return (x2 > 0) - (x2 < 0) || +x2;
    }
    function toISOString$1() {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s2, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
      if (!total) {
        return "P0D";
      }
      minutes2 = absFloor(seconds2 / 60);
      hours2 = absFloor(minutes2 / 60);
      seconds2 %= 60;
      minutes2 %= 60;
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      s2 = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
      totalSign = total < 0 ? "-" : "";
      ymSign = sign(this._months) !== sign(total) ? "-" : "";
      daysSign = sign(this._days) !== sign(total) ? "-" : "";
      hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
      return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s2 + "S" : "");
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      toISOString$1
    );
    proto$2.lang = lang;
    addFormatToken("X", 0, 0, "unix");
    addFormatToken("x", 0, 0, "valueOf");
    addRegexToken("x", matchSigned);
    addRegexToken("X", matchTimestamp);
    addParseToken("X", function(input, array, config) {
      config._d = new Date(parseFloat(input) * 1e3);
    });
    addParseToken("x", function(input, array, config) {
      config._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = "2.30.1";
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    hooks.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      // <input type="datetime-local" step="0.001" />
      DATE: "YYYY-MM-DD",
      // <input type="date" />
      TIME: "HH:mm",
      // <input type="time" />
      TIME_SECONDS: "HH:mm:ss",
      // <input type="time" step="1" />
      TIME_MS: "HH:mm:ss.SSS",
      // <input type="time" step="0.001" />
      WEEK: "GGGG-[W]WW",
      // <input type="week" />
      MONTH: "YYYY-MM"
      // <input type="month" />
    };
    function View() {
      const { id: id2 } = useParams();
      const navigate = useNavigate();
      const [data, setData] = reactExports.useState(null);
      const [loading, setLoading] = reactExports.useState(true);
      const [slide, setSlide] = reactExports.useState(0);
      reactExports.useEffect(() => {
        const fetchWrapped = async () => {
          try {
            const { ok: ok2, data: data2 } = await API.get(`/wrapped/${id2}`);
            if (!ok2) {
              _t.error("Wrapped not found");
              navigate("/wrapped");
              return;
            }
            setData(data2);
          } catch (e2) {
            console.error(e2);
            _t.error("Failed to load wrapped");
            navigate("/wrapped");
          } finally {
            setLoading(false);
          }
        };
        fetchWrapped();
      }, [id2, navigate]);
      const handleShare = () => {
        if (!data)
          return;
        const text = `My ${data.year} on Google Calendar:
🗓 ${data.totalEvents} events
⏱ ${data.totalHours} hours spent
🏆 My Persona: ${data.persona}
Check your own stats!`;
        navigator.clipboard.writeText(text);
        _t.success("Summary copied to clipboard!");
      };
      if (loading)
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
      if (!data)
        return null;
      const slides = [
        // Slide 0: Intro
        {
          bg: "bg-indigo-900",
          content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center animate-in fade-in zoom-in duration-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4", children: data.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-white mb-8", children: "WRAPPED" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-200 text-xl", children: "Ready to see how you spent your time?" })
          ] })
        },
        // Slide 1: Totals
        {
          bg: "bg-purple-900",
          content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-300 text-xl mb-2", children: "You spent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-7xl font-bold text-white mb-2", children: data.totalHours }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-2xl", children: "Hours in meetings" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-1 bg-white/20 mx-auto rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-purple-300 text-xl mb-2", children: "Across" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-7xl font-bold text-white mb-2", children: data.totalEvents }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-2xl", children: "Events" })
            ] })
          ] })
        },
        // Slide 2: Intense Weeks
        {
          bg: "bg-pink-900",
          content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-white mb-8 text-center", children: "Most Intense Weeks" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: data.intenseWeeks.map((week, i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 p-6 rounded-xl backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-pink-200 font-medium", children: [
                  "Week ",
                  week.week
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold text-white", children: [
                  week.hours,
                  "h"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-pink-300", children: [
                hooks(week.startDate).format("MMM D"),
                " - ",
                hooks(week.endDate).format("MMM D")
              ] })
            ] }, i2)) })
          ] })
        },
        // Slide 3: Extremes
        {
          bg: "bg-blue-900",
          content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-white mb-8 text-center", children: "The Extremes" }),
            data.earliestMeeting && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 p-4 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-300 text-sm uppercase tracking-wider mb-1", children: "Earliest Start" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white", children: data.earliestMeeting.time }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 truncate", children: data.earliestMeeting.summary })
            ] }),
            data.latestMeeting && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 p-4 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-300 text-sm uppercase tracking-wider mb-1", children: "Latest Start" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white", children: data.latestMeeting.time }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 truncate", children: data.latestMeeting.summary })
            ] }),
            data.longestMeeting && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 p-4 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-300 text-sm uppercase tracking-wider mb-1", children: "Longest Marathon" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl font-bold text-white", children: [
                data.longestMeeting.duration,
                " min"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 truncate", children: data.longestMeeting.summary })
            ] })
          ] })
        },
        // Slide 4: Top People
        {
          bg: "bg-teal-900",
          content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-white mb-8 text-center", children: "Top Collaborators" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: data.topPeople.map((person, i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 bg-white/10 p-4 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white text-lg", children: i2 + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium truncate", children: person.displayName || person.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-teal-200 text-sm", children: [
                  person.hours,
                  " hours together"
                ] })
              ] })
            ] }, i2)) })
          ] })
        },
        // Slide 5: Persona
        {
          bg: "bg-orange-900",
          content: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-300 text-xl mb-4", children: "Your Calendar Persona is" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block px-8 py-4 bg-white text-orange-900 text-4xl font-black uppercase tracking-widest rounded-full transform -rotate-3 mb-8 shadow-2xl", children: data.persona }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/80 max-w-sm mx-auto", children: [
              data.persona === "Workaholic" && "You're truly dedicated... maybe take a break?",
              data.persona === "Gamer" && "Work hard, play hard!",
              data.persona === "Sport Addict" && "Keeping active while staying productive.",
              data.persona === "Social Butterfly" && "Your calendar is as full as your social life.",
              data.persona === "Balanced Bee" && "Perfectly balanced, as all things should be."
            ] })
          ] })
        }
      ];
      const nextSlide = () => {
        if (slide < slides.length - 1)
          setSlide(slide + 1);
      };
      const prevSlide = () => {
        if (slide > 0)
          setSlide(slide - 1);
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `fixed inset-0 z-50 flex items-center justify-center ${slides[slide].bg} transition-colors duration-500`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate("/wrapped"), className: "absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiXMark, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleShare,
            className: "absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-20 font-medium",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(HiShare, { className: "h-5 w-5" }),
              "Share"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full flex gap-1 p-2 z-10", children: slides.map((_2, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 flex-1 rounded-full bg-white/20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full bg-white transition-all duration-300 ${i2 <= slide ? "w-full" : "w-0"}` }) }, i2)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex flex-col items-center justify-center p-8 relative", children: slides[slide].content }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 w-1/3 z-0", onClick: prevSlide }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 right-0 w-1/3 z-0", onClick: nextSlide }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 flex gap-4 z-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prevSlide, disabled: slide === 0, className: "p-3 rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronLeft, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: nextSlide, disabled: slide === slides.length - 1, className: "p-3 rounded-full bg-white/10 text-white disabled:opacity-30 hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiChevronRight, { className: "h-6 w-6" }) })
        ] })
      ] });
    }
    function Wrapped() {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(List, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/:id", element: /* @__PURE__ */ jsxRuntimeExports.jsx(View, {}) })
      ] });
    }
    function Terms() {
      const navigate = useNavigate();
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate(-1), className: "inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-8 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HiArrowLeft, { className: "h-5 w-5" }),
          "Back"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Terms of Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 mb-8", children: [
            "Last updated: ",
            (/* @__PURE__ */ new Date()).toLocaleDateString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-indigo max-w-none space-y-6 text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "1. Acceptance of Terms" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use this service." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "2. Use License" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Permission is granted to temporarily access the materials (information or software) on this application for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside ml-4 space-y-2 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Modify or copy the materials" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use the materials for any commercial purpose or for any public display" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Attempt to reverse engineer any software contained in the application" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Remove any copyright or other proprietary notations from the materials" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Transfer the materials to another person or "mirror" the materials on any other server' })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "3. User Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "4. Data Storage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our service uses MongoDB Atlas for secure data storage. We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet or method of electronic storage is 100% secure." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "5. Prohibited Activities" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You agree not to engage in any of the following activities:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside ml-4 space-y-2 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Using the service for any unlawful purpose" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Attempting to gain unauthorized access to any portion of the service" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Interfering with or disrupting the service or servers" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Uploading viruses or other malicious code" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Collecting or tracking personal information of others" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Spamming, phishing, or engaging in similar activities" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "6. Intellectual Property" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The service and its original content, features, and functionality are and will remain the exclusive property of the service provider and its licensors. The service is protected by copyright, trademark, and other laws." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "7. Termination" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "8. Limitation of Liability" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "In no event shall the service provider, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "9. Disclaimer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any kind, whether express or implied.' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "10. Changes to Terms" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "11. Contact Information" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you have any questions about these Terms, please contact us through the application's support channels." })
            ] })
          ] })
        ] })
      ] }) });
    }
    function Privacy() {
      const navigate = useNavigate();
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate(-1), className: "inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-8 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HiArrowLeft, { className: "h-5 w-5" }),
          "Back"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Privacy Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 mb-8", children: [
            "Last updated: ",
            (/* @__PURE__ */ new Date()).toLocaleDateString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "prose prose-indigo max-w-none space-y-6 text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "1. Information We Collect" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We collect information that you provide directly to us, including:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside ml-4 space-y-2 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Account Information:" }),
                  " When you create an account, we collect your name, email address, and password"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Profile Information:" }),
                  " You may optionally provide additional information such as a profile picture"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Usage Information:" }),
                  " We automatically collect information about your interactions with our service"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Device Information:" }),
                  " We collect information about the device you use to access our service"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "2. How We Use Your Information" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We use the information we collect to:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside ml-4 space-y-2 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Provide, maintain, and improve our services" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Create and manage your account" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Send you technical notices and support messages" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Respond to your comments and questions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Monitor and analyze trends, usage, and activities" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Detect, investigate, and prevent security incidents" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Comply with legal obligations" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "3. Data Storage and Security" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We use MongoDB Atlas, a secure cloud database service, to store your data. MongoDB Atlas provides enterprise-grade security features including:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside ml-4 space-y-2 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Encryption at rest and in transit" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Network isolation and VPC peering" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Role-based access controls" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Regular security audits and compliance certifications" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "While we implement reasonable security measures to protect your information, no security system is impenetrable, and we cannot guarantee the absolute security of our database." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "4. Information Sharing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We do not sell your personal information. We may share your information in the following circumstances:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside ml-4 space-y-2 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Service Providers:" }),
                  " We may share information with third-party service providers who perform services on our behalf"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Legal Requirements:" }),
                  " We may disclose information if required by law or in response to valid legal requests"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Business Transfers:" }),
                  " We may share or transfer information in connection with a merger, acquisition, or sale of assets"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "With Your Consent:" }),
                  " We may share information with your consent or at your direction"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "5. Data Retention" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We retain your personal information for as long as necessary to provide you with our services and as described in this Privacy Policy. When you delete your account, we will delete your personal information, except where we need to retain it to comply with legal obligations or resolve disputes." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "6. Your Rights and Choices" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You have the following rights regarding your personal information:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside ml-4 space-y-2 mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Access and Update:" }),
                  " You can access and update your account information at any time through your account settings"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Delete:" }),
                  " You can request deletion of your account and personal information"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Data Portability:" }),
                  " You can request a copy of your personal information in a portable format"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Opt-Out:" }),
                  " You can opt-out of receiving promotional communications from us"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "7. Cookies and Tracking Technologies" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We use cookies and similar tracking technologies to track activity on our service and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "8. Third-Party Links" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our service may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "9. Children's Privacy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "10. International Data Transfers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our service, you consent to this transfer." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "11. Changes to This Privacy Policy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.' })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-gray-900 mt-8 mb-4", children: "12. Contact Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you have any questions about this Privacy Policy, please contact us through the application's support channels." })
            ] })
          ] })
        ] })
      ] }) });
    }
    var i$2 = Object.defineProperty;
    var d$2 = (t2, e2, n2) => e2 in t2 ? i$2(t2, e2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[e2] = n2;
    var r$1 = (t2, e2, n2) => (d$2(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
    let o$5 = class o {
      constructor() {
        r$1(this, "current", this.detect());
        r$1(this, "handoffState", "pending");
        r$1(this, "currentId", 0);
      }
      set(e2) {
        this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
      }
      reset() {
        this.set(this.detect());
      }
      nextId() {
        return ++this.currentId;
      }
      get isServer() {
        return this.current === "server";
      }
      get isClient() {
        return this.current === "client";
      }
      detect() {
        return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
      }
      handoff() {
        this.handoffState === "pending" && (this.handoffState = "complete");
      }
      get isHandoffComplete() {
        return this.handoffState === "complete";
      }
    };
    let s$4 = new o$5();
    let l$2 = (e2, f2) => {
      s$4.isServer ? reactExports.useEffect(e2, f2) : reactExports.useLayoutEffect(e2, f2);
    };
    function s$3(e2) {
      let r2 = reactExports.useRef(e2);
      return l$2(() => {
        r2.current = e2;
      }, [e2]), r2;
    }
    function t$2(e2) {
      typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
        throw o2;
      }));
    }
    function o$4() {
      let n2 = [], r2 = { addEventListener(e2, t2, s2, a2) {
        return e2.addEventListener(t2, s2, a2), r2.add(() => e2.removeEventListener(t2, s2, a2));
      }, requestAnimationFrame(...e2) {
        let t2 = requestAnimationFrame(...e2);
        return r2.add(() => cancelAnimationFrame(t2));
      }, nextFrame(...e2) {
        return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
      }, setTimeout(...e2) {
        let t2 = setTimeout(...e2);
        return r2.add(() => clearTimeout(t2));
      }, microTask(...e2) {
        let t2 = { current: true };
        return t$2(() => {
          t2.current && e2[0]();
        }), r2.add(() => {
          t2.current = false;
        });
      }, style(e2, t2, s2) {
        let a2 = e2.style.getPropertyValue(t2);
        return Object.assign(e2.style, { [t2]: s2 }), this.add(() => {
          Object.assign(e2.style, { [t2]: a2 });
        });
      }, group(e2) {
        let t2 = o$4();
        return e2(t2), this.add(() => t2.dispose());
      }, add(e2) {
        return n2.push(e2), () => {
          let t2 = n2.indexOf(e2);
          if (t2 >= 0)
            for (let s2 of n2.splice(t2, 1))
              s2();
        };
      }, dispose() {
        for (let e2 of n2.splice(0))
          e2();
      } };
      return r2;
    }
    function p() {
      let [e2] = reactExports.useState(o$4);
      return reactExports.useEffect(() => () => e2.dispose(), [e2]), e2;
    }
    let o$3 = function(t2) {
      let e2 = s$3(t2);
      return m$4.useCallback((...r2) => e2.current(...r2), [e2]);
    };
    function s$2() {
      let r2 = typeof document == "undefined";
      return "useSyncExternalStore" in e$3 ? ((o2) => o2.useSyncExternalStore)(e$3)(() => () => {
      }, () => false, () => !r2) : false;
    }
    function l$1() {
      let r2 = s$2(), [e2, n2] = reactExports.useState(s$4.isHandoffComplete);
      return e2 && s$4.isHandoffComplete === false && n2(false), reactExports.useEffect(() => {
        e2 !== true && n2(true);
      }, [e2]), reactExports.useEffect(() => s$4.handoff(), []), r2 ? false : e2;
    }
    var o$2;
    let I$1 = (o$2 = m$4.useId) != null ? o$2 : function() {
      let n2 = l$1(), [e2, u2] = m$4.useState(n2 ? () => s$4.nextId() : null);
      return l$2(() => {
        e2 === null && u2(s$4.nextId());
      }, [e2]), e2 != null ? "" + e2 : void 0;
    };
    function u$2(r2, n2, ...a2) {
      if (r2 in n2) {
        let e2 = n2[r2];
        return typeof e2 == "function" ? e2(...a2) : e2;
      }
      let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
      throw Error.captureStackTrace && Error.captureStackTrace(t2, u$2), t2;
    }
    function e(r2) {
      return s$4.isServer ? null : r2 instanceof Node ? r2.ownerDocument : r2 != null && r2.hasOwnProperty("current") && r2.current instanceof Node ? r2.current.ownerDocument : document;
    }
    let c$3 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
    var M$2 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(M$2 || {}), N$1 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(N$1 || {}), F$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$1 || {});
    function f$2(e2 = document.body) {
      return e2 == null ? [] : Array.from(e2.querySelectorAll(c$3)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
    }
    var T = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(T || {});
    function h$1(e$12, r2 = 0) {
      var t2;
      return e$12 === ((t2 = e(e$12)) == null ? void 0 : t2.body) ? false : u$2(r2, { [0]() {
        return e$12.matches(c$3);
      }, [1]() {
        let l2 = e$12;
        for (; l2 !== null; ) {
          if (l2.matches(c$3))
            return true;
          l2 = l2.parentElement;
        }
        return false;
      } });
    }
    function D$1(e$12) {
      let r2 = e(e$12);
      o$4().nextFrame(() => {
        r2 && !h$1(r2.activeElement, 0) && y$1(e$12);
      });
    }
    var w$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(w$2 || {});
    typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
      e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
    }, true), document.addEventListener("click", (e2) => {
      e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
    }, true));
    function y$1(e2) {
      e2 == null || e2.focus({ preventScroll: true });
    }
    let S$2 = ["textarea", "input"].join(",");
    function H(e2) {
      var r2, t2;
      return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, S$2)) != null ? t2 : false;
    }
    function I(e2, r2 = (t2) => t2) {
      return e2.slice().sort((t2, l2) => {
        let o2 = r2(t2), i2 = r2(l2);
        if (o2 === null || i2 === null)
          return 0;
        let n2 = o2.compareDocumentPosition(i2);
        return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
      });
    }
    function _$1(e2, r2) {
      return O$1(f$2(), r2, { relativeTo: e2 });
    }
    function O$1(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
      let i2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, n2 = Array.isArray(e2) ? t2 ? I(e2) : e2 : f$2(e2);
      o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s2) => !o2.includes(s2))), l2 = l2 != null ? l2 : i2.activeElement;
      let E2 = (() => {
        if (r2 & 5)
          return 1;
        if (r2 & 10)
          return -1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
      })(), x2 = (() => {
        if (r2 & 1)
          return 0;
        if (r2 & 2)
          return Math.max(0, n2.indexOf(l2)) - 1;
        if (r2 & 4)
          return Math.max(0, n2.indexOf(l2)) + 1;
        if (r2 & 8)
          return n2.length - 1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
      })(), p2 = r2 & 32 ? { preventScroll: true } : {}, d2 = 0, a2 = n2.length, u2;
      do {
        if (d2 >= a2 || d2 + a2 <= 0)
          return 0;
        let s2 = x2 + d2;
        if (r2 & 16)
          s2 = (s2 + a2) % a2;
        else {
          if (s2 < 0)
            return 3;
          if (s2 >= a2)
            return 1;
        }
        u2 = n2[s2], u2 == null || u2.focus(p2), d2 += E2;
      } while (u2 !== i2.activeElement);
      return r2 & 6 && H(u2) && u2.select(), 2;
    }
    function d$1(e2, r2, n2) {
      let o2 = s$3(r2);
      reactExports.useEffect(() => {
        function t2(u2) {
          o2.current(u2);
        }
        return document.addEventListener(e2, t2, n2), () => document.removeEventListener(e2, t2, n2);
      }, [e2, n2]);
    }
    function s$1(e2, r2, n2) {
      let o2 = s$3(r2);
      reactExports.useEffect(() => {
        function t2(i2) {
          o2.current(i2);
        }
        return window.addEventListener(e2, t2, n2), () => window.removeEventListener(e2, t2, n2);
      }, [e2, n2]);
    }
    function h(s2, m2, a2 = true) {
      let i2 = reactExports.useRef(false);
      reactExports.useEffect(() => {
        requestAnimationFrame(() => {
          i2.current = a2;
        });
      }, [a2]);
      function c2(e2, r2) {
        if (!i2.current || e2.defaultPrevented)
          return;
        let t2 = r2(e2);
        if (t2 === null || !t2.getRootNode().contains(t2) || !t2.isConnected)
          return;
        let E2 = function u2(n2) {
          return typeof n2 == "function" ? u2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
        }(s2);
        for (let u2 of E2) {
          if (u2 === null)
            continue;
          let n2 = u2 instanceof HTMLElement ? u2 : u2.current;
          if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2))
            return;
        }
        return !h$1(t2, T.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
      }
      let o2 = reactExports.useRef(null);
      d$1("pointerdown", (e2) => {
        var r2, t2;
        i2.current && (o2.current = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
      }, true), d$1("mousedown", (e2) => {
        var r2, t2;
        i2.current && (o2.current = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
      }, true), d$1("click", (e2) => {
        o2.current && (c2(e2, () => o2.current), o2.current = null);
      }, true), d$1("touchend", (e2) => c2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), s$1("blur", (e2) => c2(e2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
    }
    function i$1(t2) {
      var n2;
      if (t2.type)
        return t2.type;
      let e2 = (n2 = t2.as) != null ? n2 : "button";
      if (typeof e2 == "string" && e2.toLowerCase() === "button")
        return "button";
    }
    function s(t2, e2) {
      let [n2, u2] = reactExports.useState(() => i$1(t2));
      return l$2(() => {
        u2(i$1(t2));
      }, [t2.type, t2.as]), l$2(() => {
        n2 || e2.current && e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u2("button");
      }, [n2, e2]), n2;
    }
    let u$1 = Symbol();
    function y(...t2) {
      let n2 = reactExports.useRef(t2);
      reactExports.useEffect(() => {
        n2.current = t2;
      }, [t2]);
      let c2 = o$3((e2) => {
        for (let o2 of n2.current)
          o2 != null && (typeof o2 == "function" ? o2(e2) : o2.current = e2);
      });
      return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u$1])) ? void 0 : c2;
    }
    function F({ container: e$12, accept: t2, walk: r2, enabled: c2 = true }) {
      let o2 = reactExports.useRef(t2), l2 = reactExports.useRef(r2);
      reactExports.useEffect(() => {
        o2.current = t2, l2.current = r2;
      }, [t2, r2]), l$2(() => {
        if (!e$12 || !c2)
          return;
        let n2 = e(e$12);
        if (!n2)
          return;
        let f2 = o2.current, p2 = l2.current, d2 = Object.assign((i2) => f2(i2), { acceptNode: f2 }), u2 = n2.createTreeWalker(e$12, NodeFilter.SHOW_ELEMENT, d2, false);
        for (; u2.nextNode(); )
          p2(u2.currentNode);
      }, [e$12, c2, o2, l2]);
    }
    function f$1(r2) {
      throw new Error("Unexpected object: " + r2);
    }
    var a$1 = ((e2) => (e2[e2.First = 0] = "First", e2[e2.Previous = 1] = "Previous", e2[e2.Next = 2] = "Next", e2[e2.Last = 3] = "Last", e2[e2.Specific = 4] = "Specific", e2[e2.Nothing = 5] = "Nothing", e2))(a$1 || {});
    function x(r2, n2) {
      let t2 = n2.resolveItems();
      if (t2.length <= 0)
        return null;
      let l2 = n2.resolveActiveIndex(), s2 = l2 != null ? l2 : -1, d2 = (() => {
        switch (r2.focus) {
          case 0:
            return t2.findIndex((e2) => !n2.resolveDisabled(e2));
          case 1: {
            let e2 = t2.slice().reverse().findIndex((i2, c2, u2) => s2 !== -1 && u2.length - c2 - 1 >= s2 ? false : !n2.resolveDisabled(i2));
            return e2 === -1 ? e2 : t2.length - 1 - e2;
          }
          case 2:
            return t2.findIndex((e2, i2) => i2 <= s2 ? false : !n2.resolveDisabled(e2));
          case 3: {
            let e2 = t2.slice().reverse().findIndex((i2) => !n2.resolveDisabled(i2));
            return e2 === -1 ? e2 : t2.length - 1 - e2;
          }
          case 4:
            return t2.findIndex((e2) => n2.resolveId(e2) === r2.id);
          case 5:
            return null;
          default:
            f$1(r2);
        }
      })();
      return d2 === -1 ? l2 : d2;
    }
    function t$1(...r2) {
      return Array.from(new Set(r2.flatMap((n2) => typeof n2 == "string" ? n2.split(" ") : []))).filter(Boolean).join(" ");
    }
    var S$1 = ((a2) => (a2[a2.None = 0] = "None", a2[a2.RenderStrategy = 1] = "RenderStrategy", a2[a2.Static = 2] = "Static", a2))(S$1 || {}), j = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(j || {});
    function X({ ourProps: r2, theirProps: t2, slot: e2, defaultTag: a2, features: s2, visible: n2 = true, name: f2 }) {
      let o2 = N(t2, r2);
      if (n2)
        return c$2(o2, e2, a2, f2);
      let u2 = s2 != null ? s2 : 0;
      if (u2 & 2) {
        let { static: l2 = false, ...p2 } = o2;
        if (l2)
          return c$2(p2, e2, a2, f2);
      }
      if (u2 & 1) {
        let { unmount: l2 = true, ...p2 } = o2;
        return u$2(l2 ? 0 : 1, { [0]() {
          return null;
        }, [1]() {
          return c$2({ ...p2, hidden: true, style: { display: "none" } }, e2, a2, f2);
        } });
      }
      return c$2(o2, e2, a2, f2);
    }
    function c$2(r2, t2 = {}, e2, a2) {
      let { as: s2 = e2, children: n2, refName: f2 = "ref", ...o2 } = g$2(r2, ["unmount", "static"]), u2 = r2.ref !== void 0 ? { [f2]: r2.ref } : {}, l2 = typeof n2 == "function" ? n2(t2) : n2;
      "className" in o2 && o2.className && typeof o2.className == "function" && (o2.className = o2.className(t2));
      let p2 = {};
      if (t2) {
        let i2 = false, m2 = [];
        for (let [y2, d2] of Object.entries(t2))
          typeof d2 == "boolean" && (i2 = true), d2 === true && m2.push(y2);
        i2 && (p2["data-headlessui-state"] = m2.join(" "));
      }
      if (s2 === reactExports.Fragment && Object.keys(R(o2)).length > 0) {
        if (!reactExports.isValidElement(l2) || Array.isArray(l2) && l2.length > 1)
          throw new Error(['Passing props on "Fragment"!', "", `The current component <${a2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o2).map((d2) => `  - ${d2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d2) => `  - ${d2}`).join(`
`)].join(`
`));
        let i2 = l2.props, m2 = typeof (i2 == null ? void 0 : i2.className) == "function" ? (...d2) => t$1(i2 == null ? void 0 : i2.className(...d2), o2.className) : t$1(i2 == null ? void 0 : i2.className, o2.className), y2 = m2 ? { className: m2 } : {};
        return reactExports.cloneElement(l2, Object.assign({}, N(l2.props, R(g$2(o2, ["ref"]))), p2, u2, w$1(l2.ref, u2.ref), y2));
      }
      return reactExports.createElement(s2, Object.assign({}, g$2(o2, ["ref"]), s2 !== reactExports.Fragment && u2, s2 !== reactExports.Fragment && p2), l2);
    }
    function w$1(...r2) {
      return { ref: r2.every((t2) => t2 == null) ? void 0 : (t2) => {
        for (let e2 of r2)
          e2 != null && (typeof e2 == "function" ? e2(t2) : e2.current = t2);
      } };
    }
    function N(...r2) {
      if (r2.length === 0)
        return {};
      if (r2.length === 1)
        return r2[0];
      let t2 = {}, e2 = {};
      for (let s2 of r2)
        for (let n2 in s2)
          n2.startsWith("on") && typeof s2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(s2[n2])) : t2[n2] = s2[n2];
      if (t2.disabled || t2["aria-disabled"])
        return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((s2) => [s2, void 0])));
      for (let s2 in e2)
        Object.assign(t2, { [s2](n2, ...f2) {
          let o2 = e2[s2];
          for (let u2 of o2) {
            if ((n2 instanceof Event || (n2 == null ? void 0 : n2.nativeEvent) instanceof Event) && n2.defaultPrevented)
              return;
            u2(n2, ...f2);
          }
        } });
      return t2;
    }
    function D(r2) {
      var t2;
      return Object.assign(reactExports.forwardRef(r2), { displayName: (t2 = r2.displayName) != null ? t2 : r2.name });
    }
    function R(r2) {
      let t2 = Object.assign({}, r2);
      for (let e2 in t2)
        t2[e2] === void 0 && delete t2[e2];
      return t2;
    }
    function g$2(r2, t2 = []) {
      let e2 = Object.assign({}, r2);
      for (let a2 of t2)
        a2 in e2 && delete e2[a2];
      return e2;
    }
    function r(n2) {
      let e2 = n2.parentElement, l2 = null;
      for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
        e2 instanceof HTMLLegendElement && (l2 = e2), e2 = e2.parentElement;
      let t2 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
      return t2 && i(l2) ? false : t2;
    }
    function i(n2) {
      if (!n2)
        return false;
      let e2 = n2.previousElementSibling;
      for (; e2 !== null; ) {
        if (e2 instanceof HTMLLegendElement)
          return false;
        e2 = e2.previousElementSibling;
      }
      return true;
    }
    let n$1 = reactExports.createContext(null);
    n$1.displayName = "OpenClosedContext";
    var d = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(d || {});
    function C() {
      return reactExports.useContext(n$1);
    }
    function c$1({ value: o2, children: r2 }) {
      return m$4.createElement(n$1.Provider, { value: o2 }, r2);
    }
    var o$1 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$1 || {});
    function t(e2) {
      return [e2.screenX, e2.screenY];
    }
    function u() {
      let e2 = reactExports.useRef([-1, -1]);
      return { wasMoved(r2) {
        let n2 = t(r2);
        return e2.current[0] === n2[0] && e2.current[1] === n2[1] ? false : (e2.current = n2, true);
      }, update(r2) {
        e2.current = t(r2);
      } };
    }
    function n(...e$12) {
      return reactExports.useMemo(() => e(...e$12), [...e$12]);
    }
    function f() {
      let e2 = reactExports.useRef(false);
      return l$2(() => (e2.current = true, () => {
        e2.current = false;
      }), []), e2;
    }
    let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
    function o(e2) {
      var r2, i2;
      let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
      if (!(t2 instanceof HTMLElement))
        return n2;
      let u2 = false;
      for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
        f2.remove(), u2 = true;
      let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
      return a.test(l2) && (l2 = l2.replace(a, "")), l2;
    }
    function g$1(e2) {
      let n2 = e2.getAttribute("aria-label");
      if (typeof n2 == "string")
        return n2.trim();
      let t2 = e2.getAttribute("aria-labelledby");
      if (t2) {
        let u2 = t2.split(" ").map((l2) => {
          let r2 = document.getElementById(l2);
          if (r2) {
            let i2 = r2.getAttribute("aria-label");
            return typeof i2 == "string" ? i2.trim() : o(r2).trim();
          }
          return null;
        }).filter(Boolean);
        if (u2.length > 0)
          return u2.join(", ");
      }
      return o(e2).trim();
    }
    function b$1(c2) {
      let t2 = reactExports.useRef(""), r2 = reactExports.useRef("");
      return o$3(() => {
        let e2 = c2.current;
        if (!e2)
          return "";
        let u2 = e2.innerText;
        if (t2.current === u2)
          return r2.current;
        let n2 = g$1(e2).trim().toLowerCase();
        return t2.current = u2, r2.current = n2, n2;
      });
    }
    var me = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(me || {}), de = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(de || {}), fe = ((a2) => (a2[a2.OpenMenu = 0] = "OpenMenu", a2[a2.CloseMenu = 1] = "CloseMenu", a2[a2.GoToItem = 2] = "GoToItem", a2[a2.Search = 3] = "Search", a2[a2.ClearSearch = 4] = "ClearSearch", a2[a2.RegisterItem = 5] = "RegisterItem", a2[a2.UnregisterItem = 6] = "UnregisterItem", a2))(fe || {});
    function w(e2, u2 = (r2) => r2) {
      let r2 = e2.activeItemIndex !== null ? e2.items[e2.activeItemIndex] : null, i2 = I(u2(e2.items.slice()), (t2) => t2.dataRef.current.domRef.current), s2 = r2 ? i2.indexOf(r2) : null;
      return s2 === -1 && (s2 = null), { items: i2, activeItemIndex: s2 };
    }
    let Te = { [1](e2) {
      return e2.menuState === 1 ? e2 : { ...e2, activeItemIndex: null, menuState: 1 };
    }, [0](e2) {
      return e2.menuState === 0 ? e2 : { ...e2, __demoMode: false, menuState: 0 };
    }, [2]: (e2, u2) => {
      var s2;
      let r2 = w(e2), i2 = x(u2, { resolveItems: () => r2.items, resolveActiveIndex: () => r2.activeItemIndex, resolveId: (t2) => t2.id, resolveDisabled: (t2) => t2.dataRef.current.disabled });
      return { ...e2, ...r2, searchQuery: "", activeItemIndex: i2, activationTrigger: (s2 = u2.trigger) != null ? s2 : 1 };
    }, [3]: (e2, u2) => {
      let i2 = e2.searchQuery !== "" ? 0 : 1, s2 = e2.searchQuery + u2.value.toLowerCase(), o2 = (e2.activeItemIndex !== null ? e2.items.slice(e2.activeItemIndex + i2).concat(e2.items.slice(0, e2.activeItemIndex + i2)) : e2.items).find((l2) => {
        var m2;
        return ((m2 = l2.dataRef.current.textValue) == null ? void 0 : m2.startsWith(s2)) && !l2.dataRef.current.disabled;
      }), a2 = o2 ? e2.items.indexOf(o2) : -1;
      return a2 === -1 || a2 === e2.activeItemIndex ? { ...e2, searchQuery: s2 } : { ...e2, searchQuery: s2, activeItemIndex: a2, activationTrigger: 1 };
    }, [4](e2) {
      return e2.searchQuery === "" ? e2 : { ...e2, searchQuery: "", searchActiveItemIndex: null };
    }, [5]: (e2, u2) => {
      let r2 = w(e2, (i2) => [...i2, { id: u2.id, dataRef: u2.dataRef }]);
      return { ...e2, ...r2 };
    }, [6]: (e2, u2) => {
      let r2 = w(e2, (i2) => {
        let s2 = i2.findIndex((t2) => t2.id === u2.id);
        return s2 !== -1 && i2.splice(s2, 1), i2;
      });
      return { ...e2, ...r2, activationTrigger: 1 };
    } }, U$1 = reactExports.createContext(null);
    U$1.displayName = "MenuContext";
    function O(e2) {
      let u2 = reactExports.useContext(U$1);
      if (u2 === null) {
        let r2 = new Error(`<${e2} /> is missing a parent <Menu /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(r2, O), r2;
      }
      return u2;
    }
    function ye$1(e2, u2) {
      return u$2(u2.type, Te, e2, u2);
    }
    let Ie = reactExports.Fragment;
    function Me(e2, u2) {
      let { __demoMode: r2 = false, ...i2 } = e2, s2 = reactExports.useReducer(ye$1, { __demoMode: r2, menuState: r2 ? 0 : 1, buttonRef: reactExports.createRef(), itemsRef: reactExports.createRef(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t2, itemsRef: o2, buttonRef: a2 }, l2] = s2, m2 = y(u2);
      h([a2, o2], (g2, R2) => {
        var p2;
        l2({ type: 1 }), h$1(R2, T.Loose) || (g2.preventDefault(), (p2 = a2.current) == null || p2.focus());
      }, t2 === 0);
      let I2 = o$3(() => {
        l2({ type: 1 });
      }), A2 = reactExports.useMemo(() => ({ open: t2 === 0, close: I2 }), [t2, I2]), f2 = { ref: m2 };
      return m$4.createElement(U$1.Provider, { value: s2 }, m$4.createElement(c$1, { value: u$2(t2, { [0]: d.Open, [1]: d.Closed }) }, X({ ourProps: f2, theirProps: i2, slot: A2, defaultTag: Ie, name: "Menu" })));
    }
    let ge = "button";
    function Re$1(e2, u2) {
      var R2;
      let r$12 = I$1(), { id: i2 = `headlessui-menu-button-${r$12}`, ...s$12 } = e2, [t2, o2] = O("Menu.Button"), a2 = y(t2.buttonRef, u2), l2 = p(), m2 = o$3((p2) => {
        switch (p2.key) {
          case o$1.Space:
          case o$1.Enter:
          case o$1.ArrowDown:
            p2.preventDefault(), p2.stopPropagation(), o2({ type: 0 }), l2.nextFrame(() => o2({ type: 2, focus: a$1.First }));
            break;
          case o$1.ArrowUp:
            p2.preventDefault(), p2.stopPropagation(), o2({ type: 0 }), l2.nextFrame(() => o2({ type: 2, focus: a$1.Last }));
            break;
        }
      }), I2 = o$3((p2) => {
        switch (p2.key) {
          case o$1.Space:
            p2.preventDefault();
            break;
        }
      }), A2 = o$3((p2) => {
        if (r(p2.currentTarget))
          return p2.preventDefault();
        e2.disabled || (t2.menuState === 0 ? (o2({ type: 1 }), l2.nextFrame(() => {
          var M2;
          return (M2 = t2.buttonRef.current) == null ? void 0 : M2.focus({ preventScroll: true });
        })) : (p2.preventDefault(), o2({ type: 0 })));
      }), f2 = reactExports.useMemo(() => ({ open: t2.menuState === 0 }), [t2]), g2 = { ref: a2, id: i2, type: s(e2, t2.buttonRef), "aria-haspopup": "menu", "aria-controls": (R2 = t2.itemsRef.current) == null ? void 0 : R2.id, "aria-expanded": t2.menuState === 0, onKeyDown: m2, onKeyUp: I2, onClick: A2 };
      return X({ ourProps: g2, theirProps: s$12, slot: f2, defaultTag: ge, name: "Menu.Button" });
    }
    let Ae = "div", be$1 = S$1.RenderStrategy | S$1.Static;
    function Ee(e2, u2) {
      var M2, b2;
      let r2 = I$1(), { id: i2 = `headlessui-menu-items-${r2}`, ...s2 } = e2, [t2, o2] = O("Menu.Items"), a2 = y(t2.itemsRef, u2), l2 = n(t2.itemsRef), m2 = p(), I2 = C(), A2 = (() => I2 !== null ? (I2 & d.Open) === d.Open : t2.menuState === 0)();
      reactExports.useEffect(() => {
        let n2 = t2.itemsRef.current;
        n2 && t2.menuState === 0 && n2 !== (l2 == null ? void 0 : l2.activeElement) && n2.focus({ preventScroll: true });
      }, [t2.menuState, t2.itemsRef, l2]), F({ container: t2.itemsRef.current, enabled: t2.menuState === 0, accept(n2) {
        return n2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
      }, walk(n2) {
        n2.setAttribute("role", "none");
      } });
      let f2 = o$3((n2) => {
        var E2, P2;
        switch (m2.dispose(), n2.key) {
          case o$1.Space:
            if (t2.searchQuery !== "")
              return n2.preventDefault(), n2.stopPropagation(), o2({ type: 3, value: n2.key });
          case o$1.Enter:
            if (n2.preventDefault(), n2.stopPropagation(), o2({ type: 1 }), t2.activeItemIndex !== null) {
              let { dataRef: S2 } = t2.items[t2.activeItemIndex];
              (P2 = (E2 = S2.current) == null ? void 0 : E2.domRef.current) == null || P2.click();
            }
            D$1(t2.buttonRef.current);
            break;
          case o$1.ArrowDown:
            return n2.preventDefault(), n2.stopPropagation(), o2({ type: 2, focus: a$1.Next });
          case o$1.ArrowUp:
            return n2.preventDefault(), n2.stopPropagation(), o2({ type: 2, focus: a$1.Previous });
          case o$1.Home:
          case o$1.PageUp:
            return n2.preventDefault(), n2.stopPropagation(), o2({ type: 2, focus: a$1.First });
          case o$1.End:
          case o$1.PageDown:
            return n2.preventDefault(), n2.stopPropagation(), o2({ type: 2, focus: a$1.Last });
          case o$1.Escape:
            n2.preventDefault(), n2.stopPropagation(), o2({ type: 1 }), o$4().nextFrame(() => {
              var S2;
              return (S2 = t2.buttonRef.current) == null ? void 0 : S2.focus({ preventScroll: true });
            });
            break;
          case o$1.Tab:
            n2.preventDefault(), n2.stopPropagation(), o2({ type: 1 }), o$4().nextFrame(() => {
              _$1(t2.buttonRef.current, n2.shiftKey ? M$2.Previous : M$2.Next);
            });
            break;
          default:
            n2.key.length === 1 && (o2({ type: 3, value: n2.key }), m2.setTimeout(() => o2({ type: 4 }), 350));
            break;
        }
      }), g2 = o$3((n2) => {
        switch (n2.key) {
          case o$1.Space:
            n2.preventDefault();
            break;
        }
      }), R2 = reactExports.useMemo(() => ({ open: t2.menuState === 0 }), [t2]), p$12 = { "aria-activedescendant": t2.activeItemIndex === null || (M2 = t2.items[t2.activeItemIndex]) == null ? void 0 : M2.id, "aria-labelledby": (b2 = t2.buttonRef.current) == null ? void 0 : b2.id, id: i2, onKeyDown: f2, onKeyUp: g2, role: "menu", tabIndex: 0, ref: a2 };
      return X({ ourProps: p$12, theirProps: s2, slot: R2, defaultTag: Ae, features: be$1, visible: A2, name: "Menu.Items" });
    }
    let Se$1 = reactExports.Fragment;
    function Pe$1(e2, u$12) {
      let r2 = I$1(), { id: i2 = `headlessui-menu-item-${r2}`, disabled: s2 = false, ...t2 } = e2, [o2, a2] = O("Menu.Item"), l2 = o2.activeItemIndex !== null ? o2.items[o2.activeItemIndex].id === i2 : false, m2 = reactExports.useRef(null), I2 = y(u$12, m2);
      l$2(() => {
        if (o2.__demoMode || o2.menuState !== 0 || !l2 || o2.activationTrigger === 0)
          return;
        let T2 = o$4();
        return T2.requestAnimationFrame(() => {
          var v2, B2;
          (B2 = (v2 = m2.current) == null ? void 0 : v2.scrollIntoView) == null || B2.call(v2, { block: "nearest" });
        }), T2.dispose;
      }, [o2.__demoMode, m2, l2, o2.menuState, o2.activationTrigger, o2.activeItemIndex]);
      let A2 = b$1(m2), f2 = reactExports.useRef({ disabled: s2, domRef: m2, get textValue() {
        return A2();
      } });
      l$2(() => {
        f2.current.disabled = s2;
      }, [f2, s2]), l$2(() => (a2({ type: 5, id: i2, dataRef: f2 }), () => a2({ type: 6, id: i2 })), [f2, i2]);
      let g2 = o$3(() => {
        a2({ type: 1 });
      }), R2 = o$3((T2) => {
        if (s2)
          return T2.preventDefault();
        a2({ type: 1 }), D$1(o2.buttonRef.current);
      }), p2 = o$3(() => {
        if (s2)
          return a2({ type: 2, focus: a$1.Nothing });
        a2({ type: 2, focus: a$1.Specific, id: i2 });
      }), M2 = u(), b2 = o$3((T2) => M2.update(T2)), n2 = o$3((T2) => {
        M2.wasMoved(T2) && (s2 || l2 || a2({ type: 2, focus: a$1.Specific, id: i2, trigger: 0 }));
      }), E2 = o$3((T2) => {
        M2.wasMoved(T2) && (s2 || l2 && a2({ type: 2, focus: a$1.Nothing }));
      }), P2 = reactExports.useMemo(() => ({ active: l2, disabled: s2, close: g2 }), [l2, s2, g2]);
      return X({ ourProps: { id: i2, ref: I2, role: "menuitem", tabIndex: s2 === true ? void 0 : -1, "aria-disabled": s2 === true ? true : void 0, disabled: void 0, onClick: R2, onFocus: p2, onPointerEnter: b2, onMouseEnter: b2, onPointerMove: n2, onMouseMove: n2, onPointerLeave: E2, onMouseLeave: E2 }, theirProps: t2, slot: P2, defaultTag: Se$1, name: "Menu.Item" });
    }
    let ve = D(Me), xe$1 = D(Re$1), he = D(Ee), De$1 = D(Pe$1), it = Object.assign(ve, { Button: xe$1, Items: he, Item: De$1 });
    function c(a2 = 0) {
      let [l2, r2] = reactExports.useState(a2), t2 = f(), o2 = reactExports.useCallback((e2) => {
        t2.current && r2((u2) => u2 | e2);
      }, [l2, t2]), m2 = reactExports.useCallback((e2) => Boolean(l2 & e2), [l2]), s2 = reactExports.useCallback((e2) => {
        t2.current && r2((u2) => u2 & ~e2);
      }, [r2, t2]), g2 = reactExports.useCallback((e2) => {
        t2.current && r2((u2) => u2 ^ e2);
      }, [r2]);
      return { flags: l2, addFlag: o2, hasFlag: m2, removeFlag: s2, toggleFlag: g2 };
    }
    function l(r2) {
      let e2 = { called: false };
      return (...t2) => {
        if (!e2.called)
          return e2.called = true, r2(...t2);
      };
    }
    function g(t2, ...e2) {
      t2 && e2.length > 0 && t2.classList.add(...e2);
    }
    function v(t2, ...e2) {
      t2 && e2.length > 0 && t2.classList.remove(...e2);
    }
    function b(t2, e2) {
      let n2 = o$4();
      if (!t2)
        return n2.dispose;
      let { transitionDuration: m2, transitionDelay: a2 } = getComputedStyle(t2), [u2, p2] = [m2, a2].map((l2) => {
        let [r2 = 0] = l2.split(",").filter(Boolean).map((i2) => i2.includes("ms") ? parseFloat(i2) : parseFloat(i2) * 1e3).sort((i2, T2) => T2 - i2);
        return r2;
      }), o2 = u2 + p2;
      if (o2 !== 0) {
        n2.group((r2) => {
          r2.setTimeout(() => {
            e2(), r2.dispose();
          }, o2), r2.addEventListener(t2, "transitionrun", (i2) => {
            i2.target === i2.currentTarget && r2.dispose();
          });
        });
        let l2 = n2.addEventListener(t2, "transitionend", (r2) => {
          r2.target === r2.currentTarget && (e2(), l2());
        });
      } else
        e2();
      return n2.add(() => e2()), n2.dispose;
    }
    function M$1(t2, e2, n2, m2) {
      let a2 = n2 ? "enter" : "leave", u2 = o$4(), p2 = m2 !== void 0 ? l(m2) : () => {
      };
      a2 === "enter" && (t2.removeAttribute("hidden"), t2.style.display = "");
      let o2 = u$2(a2, { enter: () => e2.enter, leave: () => e2.leave }), l$12 = u$2(a2, { enter: () => e2.enterTo, leave: () => e2.leaveTo }), r2 = u$2(a2, { enter: () => e2.enterFrom, leave: () => e2.leaveFrom });
      return v(t2, ...e2.base, ...e2.enter, ...e2.enterTo, ...e2.enterFrom, ...e2.leave, ...e2.leaveFrom, ...e2.leaveTo, ...e2.entered), g(t2, ...e2.base, ...o2, ...r2), u2.nextFrame(() => {
        v(t2, ...e2.base, ...o2, ...r2), g(t2, ...e2.base, ...o2, ...l$12), b(t2, () => (v(t2, ...e2.base, ...o2), g(t2, ...e2.base, ...e2.entered), p2()));
      }), u2.dispose;
    }
    function E({ immediate: t2, container: s2, direction: n2, classes: u2, onStart: a2, onStop: c2 }) {
      let l2 = f(), d2 = p(), e2 = s$3(n2);
      l$2(() => {
        t2 && (e2.current = "enter");
      }, [t2]), l$2(() => {
        let r2 = o$4();
        d2.add(r2.dispose);
        let i2 = s2.current;
        if (i2 && e2.current !== "idle" && l2.current)
          return r2.dispose(), a2.current(e2.current), r2.add(M$1(i2, u2.current, e2.current === "enter", () => {
            r2.dispose(), c2.current(e2.current);
          })), r2.dispose;
      }, [n2]);
    }
    function S(t2 = "") {
      return t2.split(" ").filter((n2) => n2.trim().length > 1);
    }
    let _ = reactExports.createContext(null);
    _.displayName = "TransitionContext";
    var be = ((r2) => (r2.Visible = "visible", r2.Hidden = "hidden", r2))(be || {});
    function Se() {
      let t2 = reactExports.useContext(_);
      if (t2 === null)
        throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
      return t2;
    }
    function Ne() {
      let t2 = reactExports.useContext(M);
      if (t2 === null)
        throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
      return t2;
    }
    let M = reactExports.createContext(null);
    M.displayName = "NestingContext";
    function U(t2) {
      return "children" in t2 ? U(t2.children) : t2.current.filter(({ el: n2 }) => n2.current !== null).filter(({ state: n2 }) => n2 === "visible").length > 0;
    }
    function oe(t2, n2) {
      let r2 = s$3(t2), s2 = reactExports.useRef([]), y2 = f(), D2 = p(), c2 = o$3((i2, e2 = j.Hidden) => {
        let a2 = s2.current.findIndex(({ el: o2 }) => o2 === i2);
        a2 !== -1 && (u$2(e2, { [j.Unmount]() {
          s2.current.splice(a2, 1);
        }, [j.Hidden]() {
          s2.current[a2].state = "hidden";
        } }), D2.microTask(() => {
          var o2;
          !U(s2) && y2.current && ((o2 = r2.current) == null || o2.call(r2));
        }));
      }), x2 = o$3((i2) => {
        let e2 = s2.current.find(({ el: a2 }) => a2 === i2);
        return e2 ? e2.state !== "visible" && (e2.state = "visible") : s2.current.push({ el: i2, state: "visible" }), () => c2(i2, j.Unmount);
      }), p$12 = reactExports.useRef([]), h2 = reactExports.useRef(Promise.resolve()), u2 = reactExports.useRef({ enter: [], leave: [], idle: [] }), v2 = o$3((i2, e2, a2) => {
        p$12.current.splice(0), n2 && (n2.chains.current[e2] = n2.chains.current[e2].filter(([o2]) => o2 !== i2)), n2 == null || n2.chains.current[e2].push([i2, new Promise((o2) => {
          p$12.current.push(o2);
        })]), n2 == null || n2.chains.current[e2].push([i2, new Promise((o2) => {
          Promise.all(u2.current[e2].map(([f2, P2]) => P2)).then(() => o2());
        })]), e2 === "enter" ? h2.current = h2.current.then(() => n2 == null ? void 0 : n2.wait.current).then(() => a2(e2)) : a2(e2);
      }), d2 = o$3((i2, e2, a2) => {
        Promise.all(u2.current[e2].splice(0).map(([o2, f2]) => f2)).then(() => {
          var o2;
          (o2 = p$12.current.shift()) == null || o2();
        }).then(() => a2(e2));
      });
      return reactExports.useMemo(() => ({ children: s2, register: x2, unregister: c2, onStart: v2, onStop: d2, wait: h2, chains: u2 }), [x2, c2, s2, v2, d2, u2, h2]);
    }
    function xe() {
    }
    let Pe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
    function se(t2) {
      var r2;
      let n2 = {};
      for (let s2 of Pe)
        n2[s2] = (r2 = t2[s2]) != null ? r2 : xe;
      return n2;
    }
    function Re(t2) {
      let n2 = reactExports.useRef(se(t2));
      return reactExports.useEffect(() => {
        n2.current = se(t2);
      }, [t2]), n2;
    }
    let ye = "div", ae = S$1.RenderStrategy;
    function De(t2, n2) {
      var K2, Q2;
      let { beforeEnter: r2, afterEnter: s2, beforeLeave: y$12, afterLeave: D2, enter: c$22, enterFrom: x2, enterTo: p2, entered: h2, leave: u2, leaveFrom: v2, leaveTo: d$12, ...i2 } = t2, e2 = reactExports.useRef(null), a2 = y(e2, n2), o2 = (K2 = i2.unmount) == null || K2 ? j.Unmount : j.Hidden, { show: f2, appear: P2, initial: T2 } = Se(), [l2, j$12] = reactExports.useState(f2 ? "visible" : "hidden"), q2 = Ne(), { register: O2, unregister: V2 } = q2;
      reactExports.useEffect(() => O2(e2), [O2, e2]), reactExports.useEffect(() => {
        if (o2 === j.Hidden && e2.current) {
          if (f2 && l2 !== "visible") {
            j$12("visible");
            return;
          }
          return u$2(l2, { ["hidden"]: () => V2(e2), ["visible"]: () => O2(e2) });
        }
      }, [l2, e2, O2, V2, f2, o2]);
      let k2 = s$3({ base: S(i2.className), enter: S(c$22), enterFrom: S(x2), enterTo: S(p2), entered: S(h2), leave: S(u2), leaveFrom: S(v2), leaveTo: S(d$12) }), w2 = Re({ beforeEnter: r2, afterEnter: s2, beforeLeave: y$12, afterLeave: D2 }), G2 = l$1();
      reactExports.useEffect(() => {
        if (G2 && l2 === "visible" && e2.current === null)
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }, [e2, l2, G2]);
      let ue2 = T2 && !P2, z2 = P2 && f2 && T2, Te2 = (() => !G2 || ue2 ? "idle" : f2 ? "enter" : "leave")(), H2 = c(0), de2 = o$3((g2) => u$2(g2, { enter: () => {
        H2.addFlag(d.Opening), w2.current.beforeEnter();
      }, leave: () => {
        H2.addFlag(d.Closing), w2.current.beforeLeave();
      }, idle: () => {
      } })), fe2 = o$3((g2) => u$2(g2, { enter: () => {
        H2.removeFlag(d.Opening), w2.current.afterEnter();
      }, leave: () => {
        H2.removeFlag(d.Closing), w2.current.afterLeave();
      }, idle: () => {
      } })), A2 = oe(() => {
        j$12("hidden"), V2(e2);
      }, q2);
      E({ immediate: z2, container: e2, classes: k2, direction: Te2, onStart: s$3((g2) => {
        A2.onStart(e2, g2, de2);
      }), onStop: s$3((g2) => {
        A2.onStop(e2, g2, fe2), g2 === "leave" && !U(A2) && (j$12("hidden"), V2(e2));
      }) });
      let R2 = i2, me2 = { ref: a2 };
      return z2 ? R2 = { ...R2, className: t$1(i2.className, ...k2.current.enter, ...k2.current.enterFrom) } : (R2.className = t$1(i2.className, (Q2 = e2.current) == null ? void 0 : Q2.className), R2.className === "" && delete R2.className), m$4.createElement(M.Provider, { value: A2 }, m$4.createElement(c$1, { value: u$2(l2, { ["visible"]: d.Open, ["hidden"]: d.Closed }) | H2.flags }, X({ ourProps: me2, theirProps: R2, defaultTag: ye, features: ae, visible: l2 === "visible", name: "Transition.Child" })));
    }
    function He(t2, n2) {
      let { show: r2, appear: s2 = false, unmount: y$12 = true, ...D2 } = t2, c2 = reactExports.useRef(null), x2 = y(c2, n2);
      l$1();
      let p2 = C();
      if (r2 === void 0 && p2 !== null && (r2 = (p2 & d.Open) === d.Open), ![true, false].includes(r2))
        throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
      let [h2, u2] = reactExports.useState(r2 ? "visible" : "hidden"), v2 = oe(() => {
        u2("hidden");
      }), [d$12, i2] = reactExports.useState(true), e2 = reactExports.useRef([r2]);
      l$2(() => {
        d$12 !== false && e2.current[e2.current.length - 1] !== r2 && (e2.current.push(r2), i2(false));
      }, [e2, r2]);
      let a2 = reactExports.useMemo(() => ({ show: r2, appear: s2, initial: d$12 }), [r2, s2, d$12]);
      reactExports.useEffect(() => {
        if (r2)
          u2("visible");
        else if (!U(v2))
          u2("hidden");
        else {
          let T2 = c2.current;
          if (!T2)
            return;
          let l2 = T2.getBoundingClientRect();
          l2.x === 0 && l2.y === 0 && l2.width === 0 && l2.height === 0 && u2("hidden");
        }
      }, [r2, v2]);
      let o2 = { unmount: y$12 }, f2 = o$3(() => {
        var T2;
        d$12 && i2(false), (T2 = t2.beforeEnter) == null || T2.call(t2);
      }), P2 = o$3(() => {
        var T2;
        d$12 && i2(false), (T2 = t2.beforeLeave) == null || T2.call(t2);
      });
      return m$4.createElement(M.Provider, { value: v2 }, m$4.createElement(_.Provider, { value: a2 }, X({ ourProps: { ...o2, as: reactExports.Fragment, children: m$4.createElement(le, { ref: x2, ...o2, ...D2, beforeEnter: f2, beforeLeave: P2 }) }, theirProps: {}, defaultTag: reactExports.Fragment, features: ae, visible: h2 === "visible", name: "Transition" })));
    }
    function Fe(t2, n2) {
      let r2 = reactExports.useContext(_) !== null, s2 = C() !== null;
      return m$4.createElement(m$4.Fragment, null, !r2 && s2 ? m$4.createElement(W, { ref: n2, ...t2 }) : m$4.createElement(le, { ref: n2, ...t2 }));
    }
    let W = D(He), le = D(De), Le = D(Fe), tt = Object.assign(W, { Child: Le, Root: W });
    function HiOutlineCalendar(props) {
      return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" } }] })(props);
    }
    function HiOutlineCollection(props) {
      return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" } }] })(props);
    }
    function HiOutlineGift(props) {
      return GenIcon({ "tag": "svg", "attr": { "fill": "none", "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "strokeLinecap": "round", "strokeLinejoin": "round", "d": "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" } }] })(props);
    }
    function TbLogout(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" } }, { "tag": "path", "attr": { "d": "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" } }, { "tag": "path", "attr": { "d": "M9 12h12l-3 -3" } }, { "tag": "path", "attr": { "d": "M18 15l3 -3" } }] })(props);
    }
    function TbUser(props) {
      return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" } }, { "tag": "path", "attr": { "d": "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" } }, { "tag": "path", "attr": { "d": "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" } }] })(props);
    }
    const MENU = [
      { title: "Calendars", to: "/calendars", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineCalendar, { className: "h-6 w-6" }) },
      { title: "Events", to: "/events", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineCollection, { className: "h-6 w-6" }) },
      { title: "Wrapped", to: "/wrapped", logo: /* @__PURE__ */ jsxRuntimeExports.jsx(HiOutlineGift, { className: "h-6 w-6" }) }
    ];
    const Navbar = () => {
      var _a;
      const location2 = useLocation();
      const navigate = useNavigate();
      const { user, setUser, isNavCollapsed, setNavCollapsed } = store();
      const [selected, setSelected] = reactExports.useState(0);
      const [isMobileOpen, setIsMobileOpen] = reactExports.useState(false);
      reactExports.useEffect(() => {
        const index2 = MENU.findIndex((e2) => location2.pathname.includes(e2.to));
        setSelected(index2 !== -1 ? index2 : 0);
      }, [location2]);
      reactExports.useEffect(() => {
        setIsMobileOpen(false);
      }, [location2]);
      const handleLogout = async () => {
        setUser(null);
        API.removeToken();
        navigate("/auth");
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsMobileOpen(!isMobileOpen), className: "lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-indigo-600 text-white shadow-lg", children: isMobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(HiXMark, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(HiBars3, { className: "h-6 w-6" }) }),
        isMobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30", onClick: () => setIsMobileOpen(false) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `
          fixed top-0 left-0 h-screen bg-indigo-600 shadow-xl z-40
          transition-all duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${isNavCollapsed ? "lg:w-20" : "lg:w-64"}
          w-72
        `,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 border-b border-indigo-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex items-center ${isNavCollapsed ? "justify-center" : "gap-3"}`, children: !isNavCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiSparkles, { className: "text-indigo-600 h-6 w-6" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white font-bold text-lg", children: "Calendar Analysis" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-200 text-xs", children: "Analyze your time" })
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-white flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HiSparkles, { className: "text-indigo-600 h-6 w-6" }) }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setNavCollapsed(!isNavCollapsed),
                  className: "hidden lg:block absolute -right-3 top-20 bg-white rounded-full p-1.5 shadow-lg hover:shadow-xl transition-shadow",
                  children: isNavCollapsed ? /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 text-indigo-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 text-indigo-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-4 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-2", children: MENU.map((menu, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: menu.to,
                  title: menu.title,
                  className: `w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-200 ${selected === index2 ? "bg-white text-indigo-600 shadow-lg" : "text-white hover:bg-white/10"} ${isNavCollapsed ? "justify-center" : ""}`,
                  onClick: () => setSelected(index2),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: selected === index2 ? "text-indigo-600" : "text-white", children: menu.logo }),
                    !isNavCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold whitespace-nowrap", children: menu.title })
                  ]
                },
                menu.title
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-indigo-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(it, { as: "div", className: "relative w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  it.Button,
                  {
                    className: `w-full rounded-lg bg-indigo-500/30 hover:bg-indigo-500/50 transition-all duration-200 flex items-center gap-3 ${isNavCollapsed ? "justify-center p-2" : "px-4 py-3"}`,
                    children: [
                      (user == null ? void 0 : user.avatar) ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "h-10 w-10 rounded-full border-2 border-white object-cover flex-shrink-0", src: user.avatar, alt: "" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full border-2 border-white bg-white flex items-center justify-center uppercase font-bold text-indigo-600 text-sm flex-shrink-0", children: ((_a = user == null ? void 0 : user.name) == null ? void 0 : _a[0]) || "U" }),
                      !isNavCollapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-left min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold text-sm truncate", children: (user == null ? void 0 : user.name) || "User" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-200 text-xs truncate", children: user == null ? void 0 : user.email })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  tt,
                  {
                    as: reactExports.Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(it.Items, { className: `absolute bottom-full mb-2 ${isNavCollapsed ? "left-full ml-2" : "w-full"} min-w-[200px] rounded-lg bg-white shadow-lg p-2 space-y-1`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(it.Item, { children: ({ active }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          className: `w-full flex items-center justify-between rounded-md px-4 py-2 text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`,
                          onClick: () => navigate("/account"),
                          children: [
                            "My Profile",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(TbUser, { className: "h-5 w-5" })
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(it.Item, { children: ({ active }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          className: `w-full flex items-center justify-between rounded-md px-4 py-2 text-sm text-white ${active ? "bg-red-600" : "bg-red-500"}`,
                          onClick: handleLogout,
                          children: [
                            "Sign out",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(TbLogout, { className: "h-5 w-5" })
                          ]
                        }
                      ) })
                    ] })
                  }
                )
              ] }) })
            ] })
          }
        )
      ] });
    };
    if (environment === "production") {
      init({ dsn: SENTRY_URL, environment: "app" });
    }
    function App() {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(BrowserRouter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { element: /* @__PURE__ */ jsxRuntimeExports.jsx(PublicLayout, {}), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Terms, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Privacy, {}) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { element: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthLayout, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/auth/*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Auth, {}) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { element: /* @__PURE__ */ jsxRuntimeExports.jsx(UserLayout, {}), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/calendars/*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/syncing", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Syncing, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/events/*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Event$1, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/wrapped/*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapped, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/account", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Account, {}) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/calendars" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Ie$1, { position: "top-center" })
      ] });
    }
    const PublicLayout = () => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
    };
    const AuthLayout = () => {
      const { user } = store();
      if (user)
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/", replace: true });
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center items-center gap-8 w-screen h-screen", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "Calendar analysis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
      ] });
    };
    const UserLayout = () => {
      const [loading, setLoading] = reactExports.useState(true);
      const { user, setUser, isNavCollapsed } = store();
      const location2 = useLocation();
      async function fetchUser() {
        try {
          const { ok: ok2, token: token2, user: user2 } = await API.get("/user/signin_token");
          if (!ok2) {
            setUser(null);
            return;
          }
          API.setToken(token2);
          setUser(user2);
        } catch (e2) {
          console.log(e2);
          setUser(null);
        } finally {
          setLoading(false);
        }
      }
      reactExports.useEffect(() => {
        fetchUser();
      }, []);
      if (loading)
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {});
      if (!user)
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/auth", replace: true });
      if (!user.last_calendar_sync_at && location2.pathname !== "/syncing") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/syncing", replace: true });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: `flex-1 h-full overflow-auto bg-gray-50 transition-all duration-300 ${isNavCollapsed ? "lg:ml-20" : "lg:ml-64"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
      ] });
    };
    const index = "";
    client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
  }
});
export default require_index_001();
