(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const u of o.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && r(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Uf = { exports: {} },
  Fo = {},
  Vf = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ai = Symbol.for('react.element'),
  ev = Symbol.for('react.portal'),
  tv = Symbol.for('react.fragment'),
  nv = Symbol.for('react.strict_mode'),
  rv = Symbol.for('react.profiler'),
  iv = Symbol.for('react.provider'),
  ov = Symbol.for('react.context'),
  uv = Symbol.for('react.forward_ref'),
  lv = Symbol.for('react.suspense'),
  sv = Symbol.for('react.memo'),
  av = Symbol.for('react.lazy'),
  ja = Symbol.iterator;
function cv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ja && e[ja]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Wf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hf = Object.assign,
  Kf = {};
function or(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Kf),
    (this.updater = n || Wf);
}
or.prototype.isReactComponent = {};
or.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
or.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Yf() {}
Yf.prototype = or.prototype;
function Es(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Kf),
    (this.updater = n || Wf);
}
var Cs = (Es.prototype = new Yf());
Cs.constructor = Es;
Hf(Cs, or.prototype);
Cs.isPureReactComponent = !0;
var qa = Array.isArray,
  Xf = Object.prototype.hasOwnProperty,
  Os = { current: null },
  Gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jf(e, t, n) {
  var r,
    i = {},
    o = null,
    u = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (u = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Xf.call(t, r) && !Gf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var s = Array(l), a = 0; a < l; a++) s[a] = arguments[a + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ai,
    type: e,
    key: o,
    ref: u,
    props: i,
    _owner: Os.current,
  };
}
function fv(e, t) {
  return {
    $$typeof: ai,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function _s(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ai;
}
function dv(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Qa = /\/+/g;
function Pu(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? dv('' + e.key)
    : t.toString(36);
}
function Bi(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        u = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ai:
          case ev:
            u = !0;
        }
    }
  if (u)
    return (
      (u = e),
      (i = i(u)),
      (e = r === '' ? '.' + Pu(u, 0) : r),
      qa(i)
        ? ((n = ''),
          e != null && (n = e.replace(Qa, '$&/') + '/'),
          Bi(i, t, n, '', function (a) {
            return a;
          }))
        : i != null &&
          (_s(i) &&
            (i = fv(
              i,
              n +
                (!i.key || (u && u.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Qa, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((u = 0), (r = r === '' ? '.' : r + ':'), qa(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var s = r + Pu(o, l);
      u += Bi(o, t, n, s, i);
    }
  else if (((s = cv(e)), typeof s == 'function'))
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Pu(o, l++)), (u += Bi(o, t, n, s, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return u;
}
function gi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Bi(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function pv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ae = { current: null },
  Ui = { transition: null },
  hv = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: Ui,
    ReactCurrentOwner: Os,
  };
U.Children = {
  map: gi,
  forEach: function (e, t, n) {
    gi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_s(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
U.Component = or;
U.Fragment = tv;
U.Profiler = rv;
U.PureComponent = Es;
U.StrictMode = nv;
U.Suspense = lv;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hv;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Hf({}, e.props),
    i = e.key,
    o = e.ref,
    u = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (u = Os.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Xf.call(t, s) &&
        !Gf.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var a = 0; a < s; a++) l[a] = arguments[a + 2];
    r.children = l;
  }
  return { $$typeof: ai, type: e.type, key: i, ref: o, props: r, _owner: u };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: ov,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: iv, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = Jf;
U.createFactory = function (e) {
  var t = Jf.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: uv, render: e };
};
U.isValidElement = _s;
U.lazy = function (e) {
  return { $$typeof: av, _payload: { _status: -1, _result: e }, _init: pv };
};
U.memo = function (e, t) {
  return { $$typeof: sv, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = Ui.transition;
  Ui.transition = {};
  try {
    e();
  } finally {
    Ui.transition = t;
  }
};
U.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
U.useCallback = function (e, t) {
  return Ae.current.useCallback(e, t);
};
U.useContext = function (e) {
  return Ae.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return Ae.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return Ae.current.useEffect(e, t);
};
U.useId = function () {
  return Ae.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return Ae.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return Ae.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return Ae.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Ae.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Ae.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return Ae.current.useRef(e);
};
U.useState = function (e) {
  return Ae.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return Ae.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return Ae.current.useTransition();
};
U.version = '18.2.0';
Vf.exports = U;
var z = Vf.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vv = z,
  yv = Symbol.for('react.element'),
  mv = Symbol.for('react.fragment'),
  gv = Object.prototype.hasOwnProperty,
  wv = vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zf(e, t, n) {
  var r,
    i = {},
    o = null,
    u = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (u = t.ref);
  for (r in t) gv.call(t, r) && !Sv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: yv,
    type: e,
    key: o,
    ref: u,
    props: i,
    _owner: wv.current,
  };
}
Fo.Fragment = mv;
Fo.jsx = Zf;
Fo.jsxs = Zf;
Uf.exports = Fo;
var M = Uf.exports,
  vl = {},
  ed = { exports: {} },
  Ue = {},
  td = { exports: {} },
  nd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, b) {
    var I = T.length;
    T.push(b);
    e: for (; 0 < I; ) {
      var F = (I - 1) >>> 1,
        q = T[F];
      if (0 < i(q, b)) (T[F] = b), (T[I] = q), (I = F);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var b = T[0],
      I = T.pop();
    if (I !== b) {
      T[0] = I;
      e: for (var F = 0, q = T.length, B = q >>> 1; F < B; ) {
        var H = 2 * (F + 1) - 1,
          K = T[H],
          Y = H + 1,
          se = T[Y];
        if (0 > i(K, I))
          Y < q && 0 > i(se, K)
            ? ((T[F] = se), (T[Y] = I), (F = Y))
            : ((T[F] = K), (T[H] = I), (F = H));
        else if (Y < q && 0 > i(se, I)) (T[F] = se), (T[Y] = I), (F = Y);
        else break e;
      }
    }
    return b;
  }
  function i(T, b) {
    var I = T.sortIndex - b.sortIndex;
    return I !== 0 ? I : T.id - b.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var u = Date,
      l = u.now();
    e.unstable_now = function () {
      return u.now() - l;
    };
  }
  var s = [],
    a = [],
    p = 1,
    h = null,
    d = 3,
    v = !1,
    g = !1,
    w = !1,
    O = typeof setTimeout == 'function' ? setTimeout : null,
    y = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(T) {
    for (var b = n(a); b !== null; ) {
      if (b.callback === null) r(a);
      else if (b.startTime <= T)
        r(a), (b.sortIndex = b.expirationTime), t(s, b);
      else break;
      b = n(a);
    }
  }
  function m(T) {
    if (((w = !1), f(T), !g))
      if (n(s) !== null) (g = !0), j(k);
      else {
        var b = n(a);
        b !== null && Q(m, b.startTime - T);
      }
  }
  function k(T, b) {
    (g = !1), w && ((w = !1), y(C), (C = -1)), (v = !0);
    var I = d;
    try {
      for (
        f(b), h = n(s);
        h !== null && (!(h.expirationTime > b) || (T && !P()));

      ) {
        var F = h.callback;
        if (typeof F == 'function') {
          (h.callback = null), (d = h.priorityLevel);
          var q = F(h.expirationTime <= b);
          (b = e.unstable_now()),
            typeof q == 'function' ? (h.callback = q) : h === n(s) && r(s),
            f(b);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var B = !0;
      else {
        var H = n(a);
        H !== null && Q(m, H.startTime - b), (B = !1);
      }
      return B;
    } finally {
      (h = null), (d = I), (v = !1);
    }
  }
  var S = !1,
    x = null,
    C = -1,
    _ = 5,
    E = -1;
  function P() {
    return !(e.unstable_now() - E < _);
  }
  function N() {
    if (x !== null) {
      var T = e.unstable_now();
      E = T;
      var b = !0;
      try {
        b = x(!0, T);
      } finally {
        b ? A() : ((S = !1), (x = null));
      }
    } else S = !1;
  }
  var A;
  if (typeof c == 'function')
    A = function () {
      c(N);
    };
  else if (typeof MessageChannel < 'u') {
    var D = new MessageChannel(),
      $ = D.port2;
    (D.port1.onmessage = N),
      (A = function () {
        $.postMessage(null);
      });
  } else
    A = function () {
      O(N, 0);
    };
  function j(T) {
    (x = T), S || ((S = !0), A());
  }
  function Q(T, b) {
    C = O(function () {
      T(e.unstable_now());
    }, b);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), j(k));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (_ = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (T) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = d;
      }
      var I = d;
      d = b;
      try {
        return T();
      } finally {
        d = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, b) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var I = d;
      d = T;
      try {
        return b();
      } finally {
        d = I;
      }
    }),
    (e.unstable_scheduleCallback = function (T, b, I) {
      var F = e.unstable_now();
      switch (
        (typeof I == 'object' && I !== null
          ? ((I = I.delay), (I = typeof I == 'number' && 0 < I ? F + I : F))
          : (I = F),
        T)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = I + q),
        (T = {
          id: p++,
          callback: b,
          priorityLevel: T,
          startTime: I,
          expirationTime: q,
          sortIndex: -1,
        }),
        I > F
          ? ((T.sortIndex = I),
            t(a, T),
            n(s) === null &&
              T === n(a) &&
              (w ? (y(C), (C = -1)) : (w = !0), Q(m, I - F)))
          : ((T.sortIndex = q), t(s, T), g || v || ((g = !0), j(k))),
        T
      );
    }),
    (e.unstable_shouldYield = P),
    (e.unstable_wrapCallback = function (T) {
      var b = d;
      return function () {
        var I = d;
        d = b;
        try {
          return T.apply(this, arguments);
        } finally {
          d = I;
        }
      };
    });
})(nd);
td.exports = nd;
var kv = td.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rd = z,
  Qe = kv;
function R(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var id = new Set(),
  jr = {};
function En(e, t) {
  Yn(e, t), Yn(e + 'Capture', t);
}
function Yn(e, t) {
  for (jr[e] = t, e = 0; e < t.length; e++) id.add(t[e]);
}
var Pt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  yl = Object.prototype.hasOwnProperty,
  xv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ba = {},
  Ua = {};
function Ev(e) {
  return yl.call(Ua, e)
    ? !0
    : yl.call(Ba, e)
    ? !1
    : xv.test(e)
    ? (Ua[e] = !0)
    : ((Ba[e] = !0), !1);
}
function Cv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Ov(e, t, n, r) {
  if (t === null || typeof t > 'u' || Cv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function be(e, t, n, r, i, o, u) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = u);
}
var Ee = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ee[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ee[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ee[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ee[e] = new be(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ee[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ee[e] = new be(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ee[e] = new be(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ee[e] = new be(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ee[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ps = /[\-:]([a-z])/g;
function Ts(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ps, Ts);
    Ee[t] = new be(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ps, Ts);
    Ee[t] = new be(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ps, Ts);
  Ee[t] = new be(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ee[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ee.xlinkHref = new be(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ee[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Rs(e, t, n, r) {
  var i = Ee.hasOwnProperty(t) ? Ee[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Ov(t, n, i, r) && (n = null),
    r || i === null
      ? Ev(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wi = Symbol.for('react.element'),
  Rn = Symbol.for('react.portal'),
  Nn = Symbol.for('react.fragment'),
  Ns = Symbol.for('react.strict_mode'),
  ml = Symbol.for('react.profiler'),
  od = Symbol.for('react.provider'),
  ud = Symbol.for('react.context'),
  As = Symbol.for('react.forward_ref'),
  gl = Symbol.for('react.suspense'),
  wl = Symbol.for('react.suspense_list'),
  bs = Symbol.for('react.memo'),
  Dt = Symbol.for('react.lazy'),
  ld = Symbol.for('react.offscreen'),
  Va = Symbol.iterator;
function fr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Va && e[Va]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var le = Object.assign,
  Tu;
function kr(e) {
  if (Tu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Tu = (t && t[1]) || '';
    }
  return (
    `
` +
    Tu +
    e
  );
}
var Ru = !1;
function Nu(e, t) {
  if (!e || Ru) return '';
  Ru = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          u = i.length - 1,
          l = o.length - 1;
        1 <= u && 0 <= l && i[u] !== o[l];

      )
        l--;
      for (; 1 <= u && 0 <= l; u--, l--)
        if (i[u] !== o[l]) {
          if (u !== 1 || l !== 1)
            do
              if ((u--, l--, 0 > l || i[u] !== o[l])) {
                var s =
                  `
` + i[u].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= u && 0 <= l);
          break;
        }
    }
  } finally {
    (Ru = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? kr(e) : '';
}
function _v(e) {
  switch (e.tag) {
    case 5:
      return kr(e.type);
    case 16:
      return kr('Lazy');
    case 13:
      return kr('Suspense');
    case 19:
      return kr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Nu(e.type, !1)), e;
    case 11:
      return (e = Nu(e.type.render, !1)), e;
    case 1:
      return (e = Nu(e.type, !0)), e;
    default:
      return '';
  }
}
function Sl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Nn:
      return 'Fragment';
    case Rn:
      return 'Portal';
    case ml:
      return 'Profiler';
    case Ns:
      return 'StrictMode';
    case gl:
      return 'Suspense';
    case wl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case ud:
        return (e.displayName || 'Context') + '.Consumer';
      case od:
        return (e._context.displayName || 'Context') + '.Provider';
      case As:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case bs:
        return (
          (t = e.displayName || null), t !== null ? t : Sl(e.type) || 'Memo'
        );
      case Dt:
        (t = e._payload), (e = e._init);
        try {
          return Sl(e(t));
        } catch {}
    }
  return null;
}
function Pv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Sl(t);
    case 8:
      return t === Ns ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Zt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function sd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Tv(e) {
  var t = sd(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (u) {
          (r = '' + u), o.call(this, u);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (u) {
          r = '' + u;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Si(e) {
  e._valueTracker || (e._valueTracker = Tv(e));
}
function ad(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = sd(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function oo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function kl(e, t) {
  var n = t.checked;
  return le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Wa(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function cd(e, t) {
  (t = t.checked), t != null && Rs(e, 'checked', t, !1);
}
function xl(e, t) {
  cd(e, t);
  var n = Zt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? El(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && El(e, t.type, Zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ha(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function El(e, t, n) {
  (t !== 'number' || oo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var xr = Array.isArray;
function qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Zt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Cl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ka(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (xr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Zt(n) };
}
function fd(e, t) {
  var n = Zt(t.value),
    r = Zt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ya(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function dd(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Ol(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? dd(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var ki,
  pd = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        ki = ki || document.createElement('div'),
          ki.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ki.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tr = {
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
    strokeWidth: !0,
  },
  Rv = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Tr).forEach(function (e) {
  Rv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tr[t] = Tr[e]);
  });
});
function hd(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Tr.hasOwnProperty(e) && Tr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function vd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = hd(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Nv = le(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function _l(e, t) {
  if (t) {
    if (Nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(R(62));
  }
}
function Pl(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Tl = null;
function Is(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rl = null,
  Qn = null,
  Bn = null;
function Xa(e) {
  if ((e = di(e))) {
    if (typeof Rl != 'function') throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Uo(t)), Rl(e.stateNode, e.type, t));
  }
}
function yd(e) {
  Qn ? (Bn ? Bn.push(e) : (Bn = [e])) : (Qn = e);
}
function md() {
  if (Qn) {
    var e = Qn,
      t = Bn;
    if (((Bn = Qn = null), Xa(e), t)) for (e = 0; e < t.length; e++) Xa(t[e]);
  }
}
function gd(e, t) {
  return e(t);
}
function wd() {}
var Au = !1;
function Sd(e, t, n) {
  if (Au) return e(t, n);
  Au = !0;
  try {
    return gd(e, t, n);
  } finally {
    (Au = !1), (Qn !== null || Bn !== null) && (wd(), md());
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Uo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(R(231, t, typeof n));
  return n;
}
var Nl = !1;
if (Pt)
  try {
    var dr = {};
    Object.defineProperty(dr, 'passive', {
      get: function () {
        Nl = !0;
      },
    }),
      window.addEventListener('test', dr, dr),
      window.removeEventListener('test', dr, dr);
  } catch {
    Nl = !1;
  }
function Av(e, t, n, r, i, o, u, l, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var Rr = !1,
  uo = null,
  lo = !1,
  Al = null,
  bv = {
    onError: function (e) {
      (Rr = !0), (uo = e);
    },
  };
function Iv(e, t, n, r, i, o, u, l, s) {
  (Rr = !1), (uo = null), Av.apply(bv, arguments);
}
function Mv(e, t, n, r, i, o, u, l, s) {
  if ((Iv.apply(this, arguments), Rr)) {
    if (Rr) {
      var a = uo;
      (Rr = !1), (uo = null);
    } else throw Error(R(198));
    lo || ((lo = !0), (Al = a));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function kd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ga(e) {
  if (Cn(e) !== e) throw Error(R(188));
}
function Dv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Ga(i), e;
        if (o === r) return Ga(i), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var u = !1, l = i.child; l; ) {
        if (l === n) {
          (u = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (u = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!u) {
        for (l = o.child; l; ) {
          if (l === n) {
            (u = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (u = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!u) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function xd(e) {
  return (e = Dv(e)), e !== null ? Ed(e) : null;
}
function Ed(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ed(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cd = Qe.unstable_scheduleCallback,
  Ja = Qe.unstable_cancelCallback,
  Lv = Qe.unstable_shouldYield,
  zv = Qe.unstable_requestPaint,
  ce = Qe.unstable_now,
  $v = Qe.unstable_getCurrentPriorityLevel,
  Ms = Qe.unstable_ImmediatePriority,
  Od = Qe.unstable_UserBlockingPriority,
  so = Qe.unstable_NormalPriority,
  Fv = Qe.unstable_LowPriority,
  _d = Qe.unstable_IdlePriority,
  jo = null,
  ht = null;
function jv(e) {
  if (ht && typeof ht.onCommitFiberRoot == 'function')
    try {
      ht.onCommitFiberRoot(jo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : Bv,
  qv = Math.log,
  Qv = Math.LN2;
function Bv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qv(e) / Qv) | 0)) | 0;
}
var xi = 64,
  Ei = 4194304;
function Er(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ao(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    u = n & 268435455;
  if (u !== 0) {
    var l = u & ~i;
    l !== 0 ? (r = Er(l)) : ((o &= u), o !== 0 && (r = Er(o)));
  } else (u = n & ~i), u !== 0 ? (r = Er(u)) : o !== 0 && (r = Er(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ut(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Uv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Vv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var u = 31 - ut(o),
      l = 1 << u,
      s = i[u];
    s === -1
      ? (!(l & n) || l & r) && (i[u] = Uv(l, t))
      : s <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function bl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Pd() {
  var e = xi;
  return (xi <<= 1), !(xi & 4194240) && (xi = 64), e;
}
function bu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ci(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n);
}
function Wv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ut(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Ds(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var X = 0;
function Td(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rd,
  Ls,
  Nd,
  Ad,
  bd,
  Il = !1,
  Ci = [],
  Bt = null,
  Ut = null,
  Vt = null,
  Br = new Map(),
  Ur = new Map(),
  $t = [],
  Hv =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Za(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Bt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Ut = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Vt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Br.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ur.delete(t.pointerId);
  }
}
function pr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = di(t)), t !== null && Ls(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Kv(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Bt = pr(Bt, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Ut = pr(Ut, e, t, n, r, i)), !0;
    case 'mouseover':
      return (Vt = pr(Vt, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return Br.set(o, pr(Br.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Ur.set(o, pr(Ur.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Id(e) {
  var t = dn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = kd(n)), t !== null)) {
          (e.blockedOn = t),
            bd(e.priority, function () {
              Nd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Vi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ml(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Tl = r), n.target.dispatchEvent(r), (Tl = null);
    } else return (t = di(n)), t !== null && Ls(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ec(e, t, n) {
  Vi(e) && n.delete(t);
}
function Yv() {
  (Il = !1),
    Bt !== null && Vi(Bt) && (Bt = null),
    Ut !== null && Vi(Ut) && (Ut = null),
    Vt !== null && Vi(Vt) && (Vt = null),
    Br.forEach(ec),
    Ur.forEach(ec);
}
function hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Il ||
      ((Il = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Yv)));
}
function Vr(e) {
  function t(i) {
    return hr(i, e);
  }
  if (0 < Ci.length) {
    hr(Ci[0], e);
    for (var n = 1; n < Ci.length; n++) {
      var r = Ci[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Bt !== null && hr(Bt, e),
      Ut !== null && hr(Ut, e),
      Vt !== null && hr(Vt, e),
      Br.forEach(t),
      Ur.forEach(t),
      n = 0;
    n < $t.length;
    n++
  )
    (r = $t[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < $t.length && ((n = $t[0]), n.blockedOn === null); )
    Id(n), n.blockedOn === null && $t.shift();
}
var Un = At.ReactCurrentBatchConfig,
  co = !0;
function Xv(e, t, n, r) {
  var i = X,
    o = Un.transition;
  Un.transition = null;
  try {
    (X = 1), zs(e, t, n, r);
  } finally {
    (X = i), (Un.transition = o);
  }
}
function Gv(e, t, n, r) {
  var i = X,
    o = Un.transition;
  Un.transition = null;
  try {
    (X = 4), zs(e, t, n, r);
  } finally {
    (X = i), (Un.transition = o);
  }
}
function zs(e, t, n, r) {
  if (co) {
    var i = Ml(e, t, n, r);
    if (i === null) Qu(e, t, r, fo, n), Za(e, r);
    else if (Kv(i, e, t, n, r)) r.stopPropagation();
    else if ((Za(e, r), t & 4 && -1 < Hv.indexOf(e))) {
      for (; i !== null; ) {
        var o = di(i);
        if (
          (o !== null && Rd(o),
          (o = Ml(e, t, n, r)),
          o === null && Qu(e, t, r, fo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Qu(e, t, r, null, n);
  }
}
var fo = null;
function Ml(e, t, n, r) {
  if (((fo = null), (e = Is(r)), (e = dn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = kd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fo = e), null;
}
function Md(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch ($v()) {
        case Ms:
          return 1;
        case Od:
          return 4;
        case so:
        case Fv:
          return 16;
        case _d:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null,
  $s = null,
  Wi = null;
function Dd() {
  if (Wi) return Wi;
  var e,
    t = $s,
    n = t.length,
    r,
    i = 'value' in qt ? qt.value : qt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === i[o - r]; r++);
  return (Wi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Hi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Oi() {
  return !0;
}
function tc() {
  return !1;
}
function Ve(e) {
  function t(n, r, i, o, u) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = u),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Oi
        : tc),
      (this.isPropagationStopped = tc),
      this
    );
  }
  return (
    le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Oi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Oi));
      },
      persist: function () {},
      isPersistent: Oi,
    }),
    t
  );
}
var ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fs = Ve(ur),
  fi = le({}, ur, { view: 0, detail: 0 }),
  Jv = Ve(fi),
  Iu,
  Mu,
  vr,
  qo = le({}, fi, {
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
    getModifierState: js,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== vr &&
            (vr && e.type === 'mousemove'
              ? ((Iu = e.screenX - vr.screenX), (Mu = e.screenY - vr.screenY))
              : (Mu = Iu = 0),
            (vr = e)),
          Iu);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Mu;
    },
  }),
  nc = Ve(qo),
  Zv = le({}, qo, { dataTransfer: 0 }),
  ey = Ve(Zv),
  ty = le({}, fi, { relatedTarget: 0 }),
  Du = Ve(ty),
  ny = le({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ry = Ve(ny),
  iy = le({}, ur, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  oy = Ve(iy),
  uy = le({}, ur, { data: 0 }),
  rc = Ve(uy),
  ly = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  sy = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  ay = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function cy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ay[e]) ? !!t[e] : !1;
}
function js() {
  return cy;
}
var fy = le({}, fi, {
    key: function (e) {
      if (e.key) {
        var t = ly[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Hi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? sy[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: js,
    charCode: function (e) {
      return e.type === 'keypress' ? Hi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Hi(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  dy = Ve(fy),
  py = le({}, qo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ic = Ve(py),
  hy = le({}, fi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: js,
  }),
  vy = Ve(hy),
  yy = le({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  my = Ve(yy),
  gy = le({}, qo, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  wy = Ve(gy),
  Sy = [9, 13, 27, 32],
  qs = Pt && 'CompositionEvent' in window,
  Nr = null;
Pt && 'documentMode' in document && (Nr = document.documentMode);
var ky = Pt && 'TextEvent' in window && !Nr,
  Ld = Pt && (!qs || (Nr && 8 < Nr && 11 >= Nr)),
  oc = String.fromCharCode(32),
  uc = !1;
function zd(e, t) {
  switch (e) {
    case 'keyup':
      return Sy.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function $d(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var An = !1;
function xy(e, t) {
  switch (e) {
    case 'compositionend':
      return $d(t);
    case 'keypress':
      return t.which !== 32 ? null : ((uc = !0), oc);
    case 'textInput':
      return (e = t.data), e === oc && uc ? null : e;
    default:
      return null;
  }
}
function Ey(e, t) {
  if (An)
    return e === 'compositionend' || (!qs && zd(e, t))
      ? ((e = Dd()), (Wi = $s = qt = null), (An = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Ld && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Cy = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0,
};
function lc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Cy[e.type] : t === 'textarea';
}
function Fd(e, t, n, r) {
  yd(r),
    (t = po(t, 'onChange')),
    0 < t.length &&
      ((n = new Fs('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ar = null,
  Wr = null;
function Oy(e) {
  Xd(e, 0);
}
function Qo(e) {
  var t = Mn(e);
  if (ad(t)) return e;
}
function _y(e, t) {
  if (e === 'change') return t;
}
var jd = !1;
if (Pt) {
  var Lu;
  if (Pt) {
    var zu = 'oninput' in document;
    if (!zu) {
      var sc = document.createElement('div');
      sc.setAttribute('oninput', 'return;'),
        (zu = typeof sc.oninput == 'function');
    }
    Lu = zu;
  } else Lu = !1;
  jd = Lu && (!document.documentMode || 9 < document.documentMode);
}
function ac() {
  Ar && (Ar.detachEvent('onpropertychange', qd), (Wr = Ar = null));
}
function qd(e) {
  if (e.propertyName === 'value' && Qo(Wr)) {
    var t = [];
    Fd(t, Wr, e, Is(e)), Sd(Oy, t);
  }
}
function Py(e, t, n) {
  e === 'focusin'
    ? (ac(), (Ar = t), (Wr = n), Ar.attachEvent('onpropertychange', qd))
    : e === 'focusout' && ac();
}
function Ty(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Qo(Wr);
}
function Ry(e, t) {
  if (e === 'click') return Qo(t);
}
function Ny(e, t) {
  if (e === 'input' || e === 'change') return Qo(t);
}
function Ay(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == 'function' ? Object.is : Ay;
function Hr(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!yl.call(t, i) || !st(e[i], t[i])) return !1;
  }
  return !0;
}
function cc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function fc(e, t) {
  var n = cc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = cc(n);
  }
}
function Qd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Bd() {
  for (var e = window, t = oo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = oo(e.document);
  }
  return t;
}
function Qs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function by(e) {
  var t = Bd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Qs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = fc(n, o));
        var u = fc(n, r);
        i &&
          u &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== u.node ||
            e.focusOffset !== u.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(u.node, u.offset))
            : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Iy = Pt && 'documentMode' in document && 11 >= document.documentMode,
  bn = null,
  Dl = null,
  br = null,
  Ll = !1;
function dc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ll ||
    bn == null ||
    bn !== oo(r) ||
    ((r = bn),
    'selectionStart' in r && Qs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (br && Hr(br, r)) ||
      ((br = r),
      (r = po(Dl, 'onSelect')),
      0 < r.length &&
        ((t = new Fs('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = bn))));
}
function _i(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var In = {
    animationend: _i('Animation', 'AnimationEnd'),
    animationiteration: _i('Animation', 'AnimationIteration'),
    animationstart: _i('Animation', 'AnimationStart'),
    transitionend: _i('Transition', 'TransitionEnd'),
  },
  $u = {},
  Ud = {};
Pt &&
  ((Ud = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete In.animationend.animation,
    delete In.animationiteration.animation,
    delete In.animationstart.animation),
  'TransitionEvent' in window || delete In.transitionend.transition);
function Bo(e) {
  if ($u[e]) return $u[e];
  if (!In[e]) return e;
  var t = In[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ud) return ($u[e] = t[n]);
  return e;
}
var Vd = Bo('animationend'),
  Wd = Bo('animationiteration'),
  Hd = Bo('animationstart'),
  Kd = Bo('transitionend'),
  Yd = new Map(),
  pc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function on(e, t) {
  Yd.set(e, t), En(t, [e]);
}
for (var Fu = 0; Fu < pc.length; Fu++) {
  var ju = pc[Fu],
    My = ju.toLowerCase(),
    Dy = ju[0].toUpperCase() + ju.slice(1);
  on(My, 'on' + Dy);
}
on(Vd, 'onAnimationEnd');
on(Wd, 'onAnimationIteration');
on(Hd, 'onAnimationStart');
on('dblclick', 'onDoubleClick');
on('focusin', 'onFocus');
on('focusout', 'onBlur');
on(Kd, 'onTransitionEnd');
Yn('onMouseEnter', ['mouseout', 'mouseover']);
Yn('onMouseLeave', ['mouseout', 'mouseover']);
Yn('onPointerEnter', ['pointerout', 'pointerover']);
Yn('onPointerLeave', ['pointerout', 'pointerover']);
En(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
En(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
En('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
En(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
En(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
En(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Cr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Ly = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Cr));
function hc(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Mv(r, t, void 0, e), (e.currentTarget = null);
}
function Xd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var u = r.length - 1; 0 <= u; u--) {
          var l = r[u],
            s = l.instance,
            a = l.currentTarget;
          if (((l = l.listener), s !== o && i.isPropagationStopped())) break e;
          hc(i, l, a), (o = s);
        }
      else
        for (u = 0; u < r.length; u++) {
          if (
            ((l = r[u]),
            (s = l.instance),
            (a = l.currentTarget),
            (l = l.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          hc(i, l, a), (o = s);
        }
    }
  }
  if (lo) throw ((e = Al), (lo = !1), (Al = null), e);
}
function ee(e, t) {
  var n = t[ql];
  n === void 0 && (n = t[ql] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Gd(t, e, 2, !1), n.add(r));
}
function qu(e, t, n) {
  var r = 0;
  t && (r |= 4), Gd(n, e, r, t);
}
var Pi = '_reactListening' + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Pi]) {
    (e[Pi] = !0),
      id.forEach(function (n) {
        n !== 'selectionchange' && (Ly.has(n) || qu(n, !1, e), qu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pi] || ((t[Pi] = !0), qu('selectionchange', !1, t));
  }
}
function Gd(e, t, n, r) {
  switch (Md(t)) {
    case 1:
      var i = Xv;
      break;
    case 4:
      i = Gv;
      break;
    default:
      i = zs;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Nl ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Qu(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (u === 4)
          for (u = r.return; u !== null; ) {
            var s = u.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = u.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            u = u.return;
          }
        for (; l !== null; ) {
          if (((u = dn(l)), u === null)) return;
          if (((s = u.tag), s === 5 || s === 6)) {
            r = o = u;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Sd(function () {
    var a = o,
      p = Is(n),
      h = [];
    e: {
      var d = Yd.get(e);
      if (d !== void 0) {
        var v = Fs,
          g = e;
        switch (e) {
          case 'keypress':
            if (Hi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = dy;
            break;
          case 'focusin':
            (g = 'focus'), (v = Du);
            break;
          case 'focusout':
            (g = 'blur'), (v = Du);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = Du;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = nc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = ey;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = vy;
            break;
          case Vd:
          case Wd:
          case Hd:
            v = ry;
            break;
          case Kd:
            v = my;
            break;
          case 'scroll':
            v = Jv;
            break;
          case 'wheel':
            v = wy;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = oy;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = ic;
        }
        var w = (t & 4) !== 0,
          O = !w && e === 'scroll',
          y = w ? (d !== null ? d + 'Capture' : null) : d;
        w = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var m = f.stateNode;
          if (
            (f.tag === 5 &&
              m !== null &&
              ((f = m),
              y !== null && ((m = Qr(c, y)), m != null && w.push(Yr(c, m, f)))),
            O)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((d = new v(d, g, null, n, p)), h.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Tl &&
            (g = n.relatedTarget || n.fromElement) &&
            (dn(g) || g[Tt]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            p.window === p
              ? p
              : (d = p.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = a),
              (g = g ? dn(g) : null),
              g !== null &&
                ((O = Cn(g)), g !== O || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = a)),
          v !== g)
        ) {
          if (
            ((w = nc),
            (m = 'onMouseLeave'),
            (y = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = ic),
              (m = 'onPointerLeave'),
              (y = 'onPointerEnter'),
              (c = 'pointer')),
            (O = v == null ? d : Mn(v)),
            (f = g == null ? d : Mn(g)),
            (d = new w(m, c + 'leave', v, n, p)),
            (d.target = O),
            (d.relatedTarget = f),
            (m = null),
            dn(p) === a &&
              ((w = new w(y, c + 'enter', g, n, p)),
              (w.target = f),
              (w.relatedTarget = O),
              (m = w)),
            (O = m),
            v && g)
          )
            t: {
              for (w = v, y = g, c = 0, f = w; f; f = Pn(f)) c++;
              for (f = 0, m = y; m; m = Pn(m)) f++;
              for (; 0 < c - f; ) (w = Pn(w)), c--;
              for (; 0 < f - c; ) (y = Pn(y)), f--;
              for (; c--; ) {
                if (w === y || (y !== null && w === y.alternate)) break t;
                (w = Pn(w)), (y = Pn(y));
              }
              w = null;
            }
          else w = null;
          v !== null && vc(h, d, v, w, !1),
            g !== null && O !== null && vc(h, O, g, w, !0);
        }
      }
      e: {
        if (
          ((d = a ? Mn(a) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && d.type === 'file'))
        )
          var k = _y;
        else if (lc(d))
          if (jd) k = Ny;
          else {
            k = Ty;
            var S = Py;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (k = Ry);
        if (k && (k = k(e, a))) {
          Fd(h, k, n, p);
          break e;
        }
        S && S(e, d, a),
          e === 'focusout' &&
            (S = d._wrapperState) &&
            S.controlled &&
            d.type === 'number' &&
            El(d, 'number', d.value);
      }
      switch (((S = a ? Mn(a) : window), e)) {
        case 'focusin':
          (lc(S) || S.contentEditable === 'true') &&
            ((bn = S), (Dl = a), (br = null));
          break;
        case 'focusout':
          br = Dl = bn = null;
          break;
        case 'mousedown':
          Ll = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Ll = !1), dc(h, n, p);
          break;
        case 'selectionchange':
          if (Iy) break;
        case 'keydown':
        case 'keyup':
          dc(h, n, p);
      }
      var x;
      if (qs)
        e: {
          switch (e) {
            case 'compositionstart':
              var C = 'onCompositionStart';
              break e;
            case 'compositionend':
              C = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              C = 'onCompositionUpdate';
              break e;
          }
          C = void 0;
        }
      else
        An
          ? zd(e, n) && (C = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart');
      C &&
        (Ld &&
          n.locale !== 'ko' &&
          (An || C !== 'onCompositionStart'
            ? C === 'onCompositionEnd' && An && (x = Dd())
            : ((qt = p),
              ($s = 'value' in qt ? qt.value : qt.textContent),
              (An = !0))),
        (S = po(a, C)),
        0 < S.length &&
          ((C = new rc(C, e, null, n, p)),
          h.push({ event: C, listeners: S }),
          x ? (C.data = x) : ((x = $d(n)), x !== null && (C.data = x)))),
        (x = ky ? xy(e, n) : Ey(e, n)) &&
          ((a = po(a, 'onBeforeInput')),
          0 < a.length &&
            ((p = new rc('onBeforeInput', 'beforeinput', null, n, p)),
            h.push({ event: p, listeners: a }),
            (p.data = x)));
    }
    Xd(h, t);
  });
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function po(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Qr(e, n)),
      o != null && r.unshift(Yr(e, o, i)),
      (o = Qr(e, t)),
      o != null && r.push(Yr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Pn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vc(e, t, n, r, i) {
  for (var o = t._reactName, u = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      a = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      i
        ? ((s = Qr(n, o)), s != null && u.unshift(Yr(n, s, l)))
        : i || ((s = Qr(n, o)), s != null && u.push(Yr(n, s, l)))),
      (n = n.return);
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var zy = /\r\n?/g,
  $y = /\u0000|\uFFFD/g;
function yc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      zy,
      `
`
    )
    .replace($y, '');
}
function Ti(e, t, n) {
  if (((t = yc(t)), yc(e) !== t && n)) throw Error(R(425));
}
function ho() {}
var zl = null,
  $l = null;
function Fl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var jl = typeof setTimeout == 'function' ? setTimeout : void 0,
  Fy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  mc = typeof Promise == 'function' ? Promise : void 0,
  jy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof mc < 'u'
      ? function (e) {
          return mc.resolve(null).then(e).catch(qy);
        }
      : jl;
function qy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Bu(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Vr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Vr(t);
}
function Wt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function gc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var lr = Math.random().toString(36).slice(2),
  pt = '__reactFiber$' + lr,
  Xr = '__reactProps$' + lr,
  Tt = '__reactContainer$' + lr,
  ql = '__reactEvents$' + lr,
  Qy = '__reactListeners$' + lr,
  By = '__reactHandles$' + lr;
function dn(e) {
  var t = e[pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = gc(e); e !== null; ) {
          if ((n = e[pt])) return n;
          e = gc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function di(e) {
  return (
    (e = e[pt] || e[Tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Uo(e) {
  return e[Xr] || null;
}
var Ql = [],
  Dn = -1;
function un(e) {
  return { current: e };
}
function ne(e) {
  0 > Dn || ((e.current = Ql[Dn]), (Ql[Dn] = null), Dn--);
}
function Z(e, t) {
  Dn++, (Ql[Dn] = e.current), (e.current = t);
}
var en = {},
  Te = un(en),
  De = un(!1),
  gn = en;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return en;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Le(e) {
  return (e = e.childContextTypes), e != null;
}
function vo() {
  ne(De), ne(Te);
}
function wc(e, t, n) {
  if (Te.current !== en) throw Error(R(168));
  Z(Te, t), Z(De, n);
}
function Jd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(R(108, Pv(e) || 'Unknown', i));
  return le({}, n, r);
}
function yo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || en),
    (gn = Te.current),
    Z(Te, e),
    Z(De, De.current),
    !0
  );
}
function Sc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Jd(e, t, gn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(De),
      ne(Te),
      Z(Te, e))
    : ne(De),
    Z(De, n);
}
var xt = null,
  Vo = !1,
  Uu = !1;
function Zd(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function Uy(e) {
  (Vo = !0), Zd(e);
}
function ln() {
  if (!Uu && xt !== null) {
    Uu = !0;
    var e = 0,
      t = X;
    try {
      var n = xt;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xt = null), (Vo = !1);
    } catch (i) {
      throw (xt !== null && (xt = xt.slice(e + 1)), Cd(Ms, ln), i);
    } finally {
      (X = t), (Uu = !1);
    }
  }
  return null;
}
var Ln = [],
  zn = 0,
  mo = null,
  go = 0,
  He = [],
  Ke = 0,
  wn = null,
  Et = 1,
  Ct = '';
function an(e, t) {
  (Ln[zn++] = go), (Ln[zn++] = mo), (mo = e), (go = t);
}
function ep(e, t, n) {
  (He[Ke++] = Et), (He[Ke++] = Ct), (He[Ke++] = wn), (wn = e);
  var r = Et;
  e = Ct;
  var i = 32 - ut(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - ut(t) + i;
  if (30 < o) {
    var u = i - (i % 5);
    (o = (r & ((1 << u) - 1)).toString(32)),
      (r >>= u),
      (i -= u),
      (Et = (1 << (32 - ut(t) + i)) | (n << i) | r),
      (Ct = o + e);
  } else (Et = (1 << o) | (n << i) | r), (Ct = e);
}
function Bs(e) {
  e.return !== null && (an(e, 1), ep(e, 1, 0));
}
function Us(e) {
  for (; e === mo; )
    (mo = Ln[--zn]), (Ln[zn] = null), (go = Ln[--zn]), (Ln[zn] = null);
  for (; e === wn; )
    (wn = He[--Ke]),
      (He[Ke] = null),
      (Ct = He[--Ke]),
      (He[Ke] = null),
      (Et = He[--Ke]),
      (He[Ke] = null);
}
var qe = null,
  je = null,
  ie = !1,
  ot = null;
function tp(e, t) {
  var n = Xe(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function kc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qe = e), (je = Wt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: Et, overflow: Ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qe = e),
            (je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Bl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ul(e) {
  if (ie) {
    var t = je;
    if (t) {
      var n = t;
      if (!kc(e, t)) {
        if (Bl(e)) throw Error(R(418));
        t = Wt(n.nextSibling);
        var r = qe;
        t && kc(e, t)
          ? tp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (qe = e));
      }
    } else {
      if (Bl(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ie = !1), (qe = e);
    }
  }
}
function xc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function Ri(e) {
  if (e !== qe) return !1;
  if (!ie) return xc(e), (ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Fl(e.type, e.memoizedProps))),
    t && (t = je))
  ) {
    if (Bl(e)) throw (np(), Error(R(418)));
    for (; t; ) tp(e, t), (t = Wt(t.nextSibling));
  }
  if ((xc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              je = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = qe ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function np() {
  for (var e = je; e; ) e = Wt(e.nextSibling);
}
function Gn() {
  (je = qe = null), (ie = !1);
}
function Vs(e) {
  ot === null ? (ot = [e]) : ot.push(e);
}
var Vy = At.ReactCurrentBatchConfig;
function nt(e, t) {
  if (e && e.defaultProps) {
    (t = le({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var wo = un(null),
  So = null,
  $n = null,
  Ws = null;
function Hs() {
  Ws = $n = So = null;
}
function Ks(e) {
  var t = wo.current;
  ne(wo), (e._currentValue = t);
}
function Vl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Vn(e, t) {
  (So = e),
    (Ws = $n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (Ws !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), $n === null)) {
      if (So === null) throw Error(R(308));
      ($n = e), (So.dependencies = { lanes: 0, firstContext: e });
    } else $n = $n.next = e;
  return t;
}
var pn = null;
function Ys(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function rp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ys(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Rt(e, r)
  );
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function Xs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ip(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function _t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Rt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ys(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Rt(e, n)
  );
}
function Ki(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ds(e, n);
  }
}
function Ec(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var u = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = u) : (o = o.next = u), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ko(e, t, n, r) {
  var i = e.updateQueue;
  Lt = !1;
  var o = i.firstBaseUpdate,
    u = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l,
      a = s.next;
    (s.next = null), u === null ? (o = a) : (u.next = a), (u = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (l = p.lastBaseUpdate),
      l !== u &&
        (l === null ? (p.firstBaseUpdate = a) : (l.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = i.baseState;
    (u = 0), (p = a = s = null), (l = o);
    do {
      var d = l.lane,
        v = l.eventTime;
      if ((r & d) === d) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            w = l;
          switch (((d = t), (v = n), w.tag)) {
            case 1:
              if (((g = w.payload), typeof g == 'function')) {
                h = g.call(v, h, d);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = w.payload),
                (d = typeof g == 'function' ? g.call(v, h, d) : g),
                d == null)
              )
                break e;
              h = le({}, h, d);
              break e;
            case 2:
              Lt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          p === null ? ((a = p = v), (s = h)) : (p = p.next = v),
          (u |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = h),
      (i.baseState = s),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = p),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (u |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (kn |= u), (e.lanes = u), (e.memoizedState = h);
  }
}
function Cc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var op = new rd.Component().refs;
function Wl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : le({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = Yt(e),
      o = _t(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ht(e, o, i)),
      t !== null && (lt(t, e, i, r), Ki(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      i = Yt(e),
      o = _t(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ht(e, o, i)),
      t !== null && (lt(t, e, i, r), Ki(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = Yt(e),
      i = _t(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ht(e, i, r)),
      t !== null && (lt(t, e, r, n), Ki(t, e, r));
  },
};
function Oc(e, t, n, r, i, o, u) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, u)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Hr(n, r) || !Hr(i, o)
      : !0
  );
}
function up(e, t, n) {
  var r = !1,
    i = en,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Je(o))
      : ((i = Le(t) ? gn : Te.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Xn(e, i) : en)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function _c(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Wo.enqueueReplaceState(t, t.state, null);
}
function Hl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = op), Xs(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = Je(o))
    : ((o = Le(t) ? gn : Te.current), (i.context = Xn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Wl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Wo.enqueueReplaceState(i, i.state, null),
      ko(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function yr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var i = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (u) {
            var l = i.refs;
            l === op && (l = i.refs = {}),
              u === null ? delete l[o] : (l[o] = u);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Ni(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Pc(e) {
  var t = e._init;
  return t(e._payload);
}
function lp(e) {
  function t(y, c) {
    if (e) {
      var f = y.deletions;
      f === null ? ((y.deletions = [c]), (y.flags |= 16)) : f.push(c);
    }
  }
  function n(y, c) {
    if (!e) return null;
    for (; c !== null; ) t(y, c), (c = c.sibling);
    return null;
  }
  function r(y, c) {
    for (y = new Map(); c !== null; )
      c.key !== null ? y.set(c.key, c) : y.set(c.index, c), (c = c.sibling);
    return y;
  }
  function i(y, c) {
    return (y = Xt(y, c)), (y.index = 0), (y.sibling = null), y;
  }
  function o(y, c, f) {
    return (
      (y.index = f),
      e
        ? ((f = y.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((y.flags |= 2), c) : f)
            : ((y.flags |= 2), c))
        : ((y.flags |= 1048576), c)
    );
  }
  function u(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function l(y, c, f, m) {
    return c === null || c.tag !== 6
      ? ((c = Gu(f, y.mode, m)), (c.return = y), c)
      : ((c = i(c, f)), (c.return = y), c);
  }
  function s(y, c, f, m) {
    var k = f.type;
    return k === Nn
      ? p(y, c, f.props.children, m, f.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == 'object' &&
            k !== null &&
            k.$$typeof === Dt &&
            Pc(k) === c.type))
      ? ((m = i(c, f.props)), (m.ref = yr(y, c, f)), (m.return = y), m)
      : ((m = eo(f.type, f.key, f.props, null, y.mode, m)),
        (m.ref = yr(y, c, f)),
        (m.return = y),
        m);
  }
  function a(y, c, f, m) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = Ju(f, y.mode, m)), (c.return = y), c)
      : ((c = i(c, f.children || [])), (c.return = y), c);
  }
  function p(y, c, f, m, k) {
    return c === null || c.tag !== 7
      ? ((c = mn(f, y.mode, m, k)), (c.return = y), c)
      : ((c = i(c, f)), (c.return = y), c);
  }
  function h(y, c, f) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = Gu('' + c, y.mode, f)), (c.return = y), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case wi:
          return (
            (f = eo(c.type, c.key, c.props, null, y.mode, f)),
            (f.ref = yr(y, null, c)),
            (f.return = y),
            f
          );
        case Rn:
          return (c = Ju(c, y.mode, f)), (c.return = y), c;
        case Dt:
          var m = c._init;
          return h(y, m(c._payload), f);
      }
      if (xr(c) || fr(c))
        return (c = mn(c, y.mode, f, null)), (c.return = y), c;
      Ni(y, c);
    }
    return null;
  }
  function d(y, c, f, m) {
    var k = c !== null ? c.key : null;
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return k !== null ? null : l(y, c, '' + f, m);
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case wi:
          return f.key === k ? s(y, c, f, m) : null;
        case Rn:
          return f.key === k ? a(y, c, f, m) : null;
        case Dt:
          return (k = f._init), d(y, c, k(f._payload), m);
      }
      if (xr(f) || fr(f)) return k !== null ? null : p(y, c, f, m, null);
      Ni(y, f);
    }
    return null;
  }
  function v(y, c, f, m, k) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (y = y.get(f) || null), l(c, y, '' + m, k);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case wi:
          return (y = y.get(m.key === null ? f : m.key) || null), s(c, y, m, k);
        case Rn:
          return (y = y.get(m.key === null ? f : m.key) || null), a(c, y, m, k);
        case Dt:
          var S = m._init;
          return v(y, c, f, S(m._payload), k);
      }
      if (xr(m) || fr(m)) return (y = y.get(f) || null), p(c, y, m, k, null);
      Ni(c, m);
    }
    return null;
  }
  function g(y, c, f, m) {
    for (
      var k = null, S = null, x = c, C = (c = 0), _ = null;
      x !== null && C < f.length;
      C++
    ) {
      x.index > C ? ((_ = x), (x = null)) : (_ = x.sibling);
      var E = d(y, x, f[C], m);
      if (E === null) {
        x === null && (x = _);
        break;
      }
      e && x && E.alternate === null && t(y, x),
        (c = o(E, c, C)),
        S === null ? (k = E) : (S.sibling = E),
        (S = E),
        (x = _);
    }
    if (C === f.length) return n(y, x), ie && an(y, C), k;
    if (x === null) {
      for (; C < f.length; C++)
        (x = h(y, f[C], m)),
          x !== null &&
            ((c = o(x, c, C)), S === null ? (k = x) : (S.sibling = x), (S = x));
      return ie && an(y, C), k;
    }
    for (x = r(y, x); C < f.length; C++)
      (_ = v(x, y, C, f[C], m)),
        _ !== null &&
          (e && _.alternate !== null && x.delete(_.key === null ? C : _.key),
          (c = o(_, c, C)),
          S === null ? (k = _) : (S.sibling = _),
          (S = _));
    return (
      e &&
        x.forEach(function (P) {
          return t(y, P);
        }),
      ie && an(y, C),
      k
    );
  }
  function w(y, c, f, m) {
    var k = fr(f);
    if (typeof k != 'function') throw Error(R(150));
    if (((f = k.call(f)), f == null)) throw Error(R(151));
    for (
      var S = (k = null), x = c, C = (c = 0), _ = null, E = f.next();
      x !== null && !E.done;
      C++, E = f.next()
    ) {
      x.index > C ? ((_ = x), (x = null)) : (_ = x.sibling);
      var P = d(y, x, E.value, m);
      if (P === null) {
        x === null && (x = _);
        break;
      }
      e && x && P.alternate === null && t(y, x),
        (c = o(P, c, C)),
        S === null ? (k = P) : (S.sibling = P),
        (S = P),
        (x = _);
    }
    if (E.done) return n(y, x), ie && an(y, C), k;
    if (x === null) {
      for (; !E.done; C++, E = f.next())
        (E = h(y, E.value, m)),
          E !== null &&
            ((c = o(E, c, C)), S === null ? (k = E) : (S.sibling = E), (S = E));
      return ie && an(y, C), k;
    }
    for (x = r(y, x); !E.done; C++, E = f.next())
      (E = v(x, y, C, E.value, m)),
        E !== null &&
          (e && E.alternate !== null && x.delete(E.key === null ? C : E.key),
          (c = o(E, c, C)),
          S === null ? (k = E) : (S.sibling = E),
          (S = E));
    return (
      e &&
        x.forEach(function (N) {
          return t(y, N);
        }),
      ie && an(y, C),
      k
    );
  }
  function O(y, c, f, m) {
    if (
      (typeof f == 'object' &&
        f !== null &&
        f.type === Nn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == 'object' && f !== null)
    ) {
      switch (f.$$typeof) {
        case wi:
          e: {
            for (var k = f.key, S = c; S !== null; ) {
              if (S.key === k) {
                if (((k = f.type), k === Nn)) {
                  if (S.tag === 7) {
                    n(y, S.sibling),
                      (c = i(S, f.props.children)),
                      (c.return = y),
                      (y = c);
                    break e;
                  }
                } else if (
                  S.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === Dt &&
                    Pc(k) === S.type)
                ) {
                  n(y, S.sibling),
                    (c = i(S, f.props)),
                    (c.ref = yr(y, S, f)),
                    (c.return = y),
                    (y = c);
                  break e;
                }
                n(y, S);
                break;
              } else t(y, S);
              S = S.sibling;
            }
            f.type === Nn
              ? ((c = mn(f.props.children, y.mode, m, f.key)),
                (c.return = y),
                (y = c))
              : ((m = eo(f.type, f.key, f.props, null, y.mode, m)),
                (m.ref = yr(y, c, f)),
                (m.return = y),
                (y = m));
          }
          return u(y);
        case Rn:
          e: {
            for (S = f.key; c !== null; ) {
              if (c.key === S)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(y, c.sibling),
                    (c = i(c, f.children || [])),
                    (c.return = y),
                    (y = c);
                  break e;
                } else {
                  n(y, c);
                  break;
                }
              else t(y, c);
              c = c.sibling;
            }
            (c = Ju(f, y.mode, m)), (c.return = y), (y = c);
          }
          return u(y);
        case Dt:
          return (S = f._init), O(y, c, S(f._payload), m);
      }
      if (xr(f)) return g(y, c, f, m);
      if (fr(f)) return w(y, c, f, m);
      Ni(y, f);
    }
    return (typeof f == 'string' && f !== '') || typeof f == 'number'
      ? ((f = '' + f),
        c !== null && c.tag === 6
          ? (n(y, c.sibling), (c = i(c, f)), (c.return = y), (y = c))
          : (n(y, c), (c = Gu(f, y.mode, m)), (c.return = y), (y = c)),
        u(y))
      : n(y, c);
  }
  return O;
}
var Jn = lp(!0),
  sp = lp(!1),
  pi = {},
  vt = un(pi),
  Gr = un(pi),
  Jr = un(pi);
function hn(e) {
  if (e === pi) throw Error(R(174));
  return e;
}
function Gs(e, t) {
  switch ((Z(Jr, t), Z(Gr, e), Z(vt, pi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ol(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ol(t, e));
  }
  ne(vt), Z(vt, t);
}
function Zn() {
  ne(vt), ne(Gr), ne(Jr);
}
function ap(e) {
  hn(Jr.current);
  var t = hn(vt.current),
    n = Ol(t, e.type);
  t !== n && (Z(Gr, e), Z(vt, n));
}
function Js(e) {
  Gr.current === e && (ne(vt), ne(Gr));
}
var oe = un(0);
function xo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Vu = [];
function Zs() {
  for (var e = 0; e < Vu.length; e++)
    Vu[e]._workInProgressVersionPrimary = null;
  Vu.length = 0;
}
var Yi = At.ReactCurrentDispatcher,
  Wu = At.ReactCurrentBatchConfig,
  Sn = 0,
  ue = null,
  he = null,
  ye = null,
  Eo = !1,
  Ir = !1,
  Zr = 0,
  Wy = 0;
function Ce() {
  throw Error(R(321));
}
function ea(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function ta(e, t, n, r, i, o) {
  if (
    ((Sn = o),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yi.current = e === null || e.memoizedState === null ? Xy : Gy),
    (e = n(r, i)),
    Ir)
  ) {
    o = 0;
    do {
      if (((Ir = !1), (Zr = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (ye = he = null),
        (t.updateQueue = null),
        (Yi.current = Jy),
        (e = n(r, i));
    } while (Ir);
  }
  if (
    ((Yi.current = Co),
    (t = he !== null && he.next !== null),
    (Sn = 0),
    (ye = he = ue = null),
    (Eo = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function na() {
  var e = Zr !== 0;
  return (Zr = 0), e;
}
function dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ye === null ? (ue.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function Ze() {
  if (he === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ye === null ? ue.memoizedState : ye.next;
  if (t !== null) (ye = t), (he = e);
  else {
    if (e === null) throw Error(R(310));
    (he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      ye === null ? (ue.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function ei(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Hu(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = he,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var u = i.next;
      (i.next = o.next), (o.next = u);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (u = null),
      s = null,
      a = o;
    do {
      var p = a.lane;
      if ((Sn & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((l = s = h), (u = r)) : (s = s.next = h),
          (ue.lanes |= p),
          (kn |= p);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (u = r) : (s.next = l),
      st(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ue.lanes |= o), (kn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ku(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var u = (i = i.next);
    do (o = e(o, u.action)), (u = u.next);
    while (u !== i);
    st(o, t.memoizedState) || (Me = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function cp() {}
function fp(e, t) {
  var n = ue,
    r = Ze(),
    i = t(),
    o = !st(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Me = !0)),
    (r = r.queue),
    ra(hp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ti(9, pp.bind(null, n, r, i, t), void 0, null),
      ge === null)
    )
      throw Error(R(349));
    Sn & 30 || dp(n, t, i);
  }
  return i;
}
function dp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function pp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vp(t) && yp(e);
}
function hp(e, t, n) {
  return n(function () {
    vp(t) && yp(e);
  });
}
function vp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function yp(e) {
  var t = Rt(e, 1);
  t !== null && lt(t, e, 1, -1);
}
function Tc(e) {
  var t = dt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ei,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yy.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function ti(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function mp() {
  return Ze().memoizedState;
}
function Xi(e, t, n, r) {
  var i = dt();
  (ue.flags |= e),
    (i.memoizedState = ti(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ho(e, t, n, r) {
  var i = Ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (he !== null) {
    var u = he.memoizedState;
    if (((o = u.destroy), r !== null && ea(r, u.deps))) {
      i.memoizedState = ti(t, n, o, r);
      return;
    }
  }
  (ue.flags |= e), (i.memoizedState = ti(1 | t, n, o, r));
}
function Rc(e, t) {
  return Xi(8390656, 8, e, t);
}
function ra(e, t) {
  return Ho(2048, 8, e, t);
}
function gp(e, t) {
  return Ho(4, 2, e, t);
}
function wp(e, t) {
  return Ho(4, 4, e, t);
}
function Sp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function kp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ho(4, 4, Sp.bind(null, t, e), n)
  );
}
function ia() {}
function xp(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ep(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ea(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cp(e, t, n) {
  return Sn & 21
    ? (st(n, t) || ((n = Pd()), (ue.lanes |= n), (kn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function Hy(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Wu.transition;
  Wu.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (Wu.transition = r);
  }
}
function Op() {
  return Ze().memoizedState;
}
function Ky(e, t, n) {
  var r = Yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _p(e))
  )
    Pp(t, n);
  else if (((n = rp(e, t, n, r)), n !== null)) {
    var i = Ne();
    lt(n, e, r, i), Tp(n, t, r);
  }
}
function Yy(e, t, n) {
  var r = Yt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_p(e)) Pp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var u = t.lastRenderedState,
          l = o(u, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), st(l, u))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), Ys(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = rp(e, t, i, r)),
      n !== null && ((i = Ne()), lt(n, e, r, i), Tp(n, t, r));
  }
}
function _p(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function Pp(e, t) {
  Ir = Eo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Tp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ds(e, n);
  }
}
var Co = {
    readContext: Je,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useInsertionEffect: Ce,
    useLayoutEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useMutableSource: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    unstable_isNewReconciler: !1,
  },
  Xy = {
    readContext: Je,
    useCallback: function (e, t) {
      return (dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: Rc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Xi(4194308, 4, Sp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Xi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Xi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ky.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Tc,
    useDebugValue: ia,
    useDeferredValue: function (e) {
      return (dt().memoizedState = e);
    },
    useTransition: function () {
      var e = Tc(!1),
        t = e[0];
      return (e = Hy.bind(null, e[1])), (dt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        i = dt();
      if (ie) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), ge === null)) throw Error(R(349));
        Sn & 30 || dp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Rc(hp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ti(9, pp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dt(),
        t = ge.identifierPrefix;
      if (ie) {
        var n = Ct,
          r = Et;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Zr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Wy++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gy = {
    readContext: Je,
    useCallback: xp,
    useContext: Je,
    useEffect: ra,
    useImperativeHandle: kp,
    useInsertionEffect: gp,
    useLayoutEffect: wp,
    useMemo: Ep,
    useReducer: Hu,
    useRef: mp,
    useState: function () {
      return Hu(ei);
    },
    useDebugValue: ia,
    useDeferredValue: function (e) {
      var t = Ze();
      return Cp(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = Hu(ei)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: cp,
    useSyncExternalStore: fp,
    useId: Op,
    unstable_isNewReconciler: !1,
  },
  Jy = {
    readContext: Je,
    useCallback: xp,
    useContext: Je,
    useEffect: ra,
    useImperativeHandle: kp,
    useInsertionEffect: gp,
    useLayoutEffect: wp,
    useMemo: Ep,
    useReducer: Ku,
    useRef: mp,
    useState: function () {
      return Ku(ei);
    },
    useDebugValue: ia,
    useDeferredValue: function (e) {
      var t = Ze();
      return he === null ? (t.memoizedState = e) : Cp(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = Ku(ei)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: cp,
    useSyncExternalStore: fp,
    useId: Op,
    unstable_isNewReconciler: !1,
  };
function er(e, t) {
  try {
    var n = '',
      r = t;
    do (n += _v(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Yu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Kl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zy = typeof WeakMap == 'function' ? WeakMap : Map;
function Rp(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      _o || ((_o = !0), (is = r)), Kl(e, t);
    }),
    n
  );
}
function Np(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Kl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Kl(e, t),
          typeof r != 'function' &&
            (Kt === null ? (Kt = new Set([this])) : Kt.add(this));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : '',
        });
      }),
    n
  );
}
function Nc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zy();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = pm.bind(null, e, t, n)), t.then(e, e));
}
function Ac(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function bc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = _t(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var em = At.ReactCurrentOwner,
  Me = !1;
function Re(e, t, n, r) {
  t.child = e === null ? sp(t, null, n, r) : Jn(t, e.child, n, r);
}
function Ic(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Vn(t, i),
    (r = ta(e, t, n, r, o, i)),
    (n = na()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nt(e, t, i))
      : (ie && n && Bs(t), (t.flags |= 1), Re(e, t, r, i), t.child)
  );
}
function Mc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !da(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ap(e, t, o, r, i))
      : ((e = eo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var u = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Hr), n(u, r) && e.ref === t.ref)
    )
      return Nt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Xt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ap(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Hr(o, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), Nt(e, t, i);
  }
  return Yl(e, t, n, r, i);
}
function bp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(jn, Fe),
        (Fe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Z(jn, Fe),
          (Fe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Z(jn, Fe),
        (Fe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Z(jn, Fe),
      (Fe |= r);
  return Re(e, t, i, n), t.child;
}
function Ip(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yl(e, t, n, r, i) {
  var o = Le(n) ? gn : Te.current;
  return (
    (o = Xn(t, o)),
    Vn(t, i),
    (n = ta(e, t, n, r, o, i)),
    (r = na()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nt(e, t, i))
      : (ie && r && Bs(t), (t.flags |= 1), Re(e, t, n, i), t.child)
  );
}
function Dc(e, t, n, r, i) {
  if (Le(n)) {
    var o = !0;
    yo(t);
  } else o = !1;
  if ((Vn(t, i), t.stateNode === null))
    Gi(e, t), up(t, n, r), Hl(t, n, r, i), (r = !0);
  else if (e === null) {
    var u = t.stateNode,
      l = t.memoizedProps;
    u.props = l;
    var s = u.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = Je(a))
      : ((a = Le(n) ? gn : Te.current), (a = Xn(t, a)));
    var p = n.getDerivedStateFromProps,
      h =
        typeof p == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((l !== r || s !== a) && _c(t, u, r, a)),
      (Lt = !1);
    var d = t.memoizedState;
    (u.state = d),
      ko(t, r, u, i),
      (s = t.memoizedState),
      l !== r || d !== s || De.current || Lt
        ? (typeof p == 'function' && (Wl(t, n, p, r), (s = t.memoizedState)),
          (l = Lt || Oc(t, n, l, r, d, s, a))
            ? (h ||
                (typeof u.UNSAFE_componentWillMount != 'function' &&
                  typeof u.componentWillMount != 'function') ||
                (typeof u.componentWillMount == 'function' &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == 'function' &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (u.props = r),
          (u.state = s),
          (u.context = a),
          (r = l))
        : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (u = t.stateNode),
      ip(e, t),
      (l = t.memoizedProps),
      (a = t.type === t.elementType ? l : nt(t.type, l)),
      (u.props = a),
      (h = t.pendingProps),
      (d = u.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Je(s))
        : ((s = Le(n) ? gn : Te.current), (s = Xn(t, s)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == 'function' ||
      typeof u.getSnapshotBeforeUpdate == 'function') ||
      (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof u.componentWillReceiveProps != 'function') ||
      ((l !== h || d !== s) && _c(t, u, r, s)),
      (Lt = !1),
      (d = t.memoizedState),
      (u.state = d),
      ko(t, r, u, i);
    var g = t.memoizedState;
    l !== h || d !== g || De.current || Lt
      ? (typeof v == 'function' && (Wl(t, n, v, r), (g = t.memoizedState)),
        (a = Lt || Oc(t, n, a, r, d, g, s) || !1)
          ? (p ||
              (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                typeof u.componentWillUpdate != 'function') ||
              (typeof u.componentWillUpdate == 'function' &&
                u.componentWillUpdate(r, g, s),
              typeof u.UNSAFE_componentWillUpdate == 'function' &&
                u.UNSAFE_componentWillUpdate(r, g, s)),
            typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof u.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (u.props = r),
        (u.state = g),
        (u.context = s),
        (r = a))
      : (typeof u.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xl(e, t, n, r, o, i);
}
function Xl(e, t, n, r, i, o) {
  Ip(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return i && Sc(t, n, !1), Nt(e, t, o);
  (r = t.stateNode), (em.current = t);
  var l =
    u && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && u
      ? ((t.child = Jn(t, e.child, null, o)), (t.child = Jn(t, null, l, o)))
      : Re(e, t, l, o),
    (t.memoizedState = r.state),
    i && Sc(t, n, !0),
    t.child
  );
}
function Mp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? wc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && wc(e, t.context, !1),
    Gs(e, t.containerInfo);
}
function Lc(e, t, n, r, i) {
  return Gn(), Vs(i), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var Gl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Jl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dp(e, t, n) {
  var r = t.pendingProps,
    i = oe.current,
    o = !1,
    u = (t.flags & 128) !== 0,
    l;
  if (
    ((l = u) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Z(oe, i & 1),
    e === null)
  )
    return (
      Ul(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((u = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (u = { mode: 'hidden', children: u }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = u))
                : (o = Xo(u, r, 0, null)),
              (e = mn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Jl(n)),
              (t.memoizedState = Gl),
              e)
            : oa(t, u))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return tm(e, t, u, r, l, i, n);
  if (o) {
    (o = r.fallback), (u = t.mode), (i = e.child), (l = i.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(u & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Xt(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Xt(l, o)) : ((o = mn(o, u, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (u = e.child.memoizedState),
      (u =
        u === null
          ? Jl(n)
          : {
              baseLanes: u.baseLanes | n,
              cachePool: null,
              transitions: u.transitions,
            }),
      (o.memoizedState = u),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Gl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Xt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function oa(e, t) {
  return (
    (t = Xo({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ai(e, t, n, r) {
  return (
    r !== null && Vs(r),
    Jn(t, e.child, null, n),
    (e = oa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tm(e, t, n, r, i, o, u) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Yu(Error(R(422)))), Ai(e, t, u, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Xo({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = mn(o, i, u, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Jn(t, e.child, null, u),
        (t.child.memoizedState = Jl(u)),
        (t.memoizedState = Gl),
        o);
  if (!(t.mode & 1)) return Ai(e, t, u, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(R(419))), (r = Yu(o, r, void 0)), Ai(e, t, u, r);
  }
  if (((l = (u & e.childLanes) !== 0), Me || l)) {
    if (((r = ge), r !== null)) {
      switch (u & -u) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | u) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Rt(e, i), lt(r, e, i, -1));
    }
    return fa(), (r = Yu(Error(R(421)))), Ai(e, t, u, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = hm.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (je = Wt(i.nextSibling)),
      (qe = t),
      (ie = !0),
      (ot = null),
      e !== null &&
        ((He[Ke++] = Et),
        (He[Ke++] = Ct),
        (He[Ke++] = wn),
        (Et = e.id),
        (Ct = e.overflow),
        (wn = t)),
      (t = oa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function zc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vl(e.return, t, n);
}
function Xu(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Lp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Re(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && zc(e, n, t);
        else if (e.tag === 19) zc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Z(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && xo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Xu(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && xo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Xu(t, !0, n, null, o);
        break;
      case 'together':
        Xu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Gi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (kn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function nm(e, t, n) {
  switch (t.tag) {
    case 3:
      Mp(t), Gn();
      break;
    case 5:
      ap(t);
      break;
    case 1:
      Le(t.type) && yo(t);
      break;
    case 4:
      Gs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Z(wo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Dp(e, t, n)
          : (Z(oe, oe.current & 1),
            (e = Nt(e, t, n)),
            e !== null ? e.sibling : null);
      Z(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Lp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Z(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), bp(e, t, n);
  }
  return Nt(e, t, n);
}
var zp, Zl, $p, Fp;
zp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Zl = function () {};
$p = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), hn(vt.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = kl(e, i)), (r = kl(e, r)), (o = []);
        break;
      case 'select':
        (i = le({}, i, { value: void 0 })),
          (r = le({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = Cl(e, i)), (r = Cl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ho);
    }
    _l(n, r);
    var u;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === 'style') {
          var l = i[a];
          for (u in l) l.hasOwnProperty(u) && (n || (n = {}), (n[u] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (jr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((l = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && s !== l && (s != null || l != null))
      )
        if (a === 'style')
          if (l) {
            for (u in l)
              !l.hasOwnProperty(u) ||
                (s && s.hasOwnProperty(u)) ||
                (n || (n = {}), (n[u] = ''));
            for (u in s)
              s.hasOwnProperty(u) &&
                l[u] !== s[u] &&
                (n || (n = {}), (n[u] = s[u]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (o = o || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (jr.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && ee('scroll', e),
                  o || l === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push('style', n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Fp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mr(e, t) {
  if (!ie)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function rm(e, t, n) {
  var r = t.pendingProps;
  switch ((Us(t), t.tag)) {
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
      return Oe(t), null;
    case 1:
      return Le(t.type) && vo(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zn(),
        ne(De),
        ne(Te),
        Zs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ri(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ot !== null && (ls(ot), (ot = null)))),
        Zl(e, t),
        Oe(t),
        null
      );
    case 5:
      Js(t);
      var i = hn(Jr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $p(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Oe(t), null;
        }
        if (((e = hn(vt.current)), Ri(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[pt] = t), (r[Xr] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ee('cancel', r), ee('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ee('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Cr.length; i++) ee(Cr[i], r);
              break;
            case 'source':
              ee('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ee('error', r), ee('load', r);
              break;
            case 'details':
              ee('toggle', r);
              break;
            case 'input':
              Wa(r, o), ee('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ee('invalid', r);
              break;
            case 'textarea':
              Ka(r, o), ee('invalid', r);
          }
          _l(n, o), (i = null);
          for (var u in o)
            if (o.hasOwnProperty(u)) {
              var l = o[u];
              u === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ti(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ti(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : jr.hasOwnProperty(u) &&
                  l != null &&
                  u === 'onScroll' &&
                  ee('scroll', r);
            }
          switch (n) {
            case 'input':
              Si(r), Ha(r, o, !0);
              break;
            case 'textarea':
              Si(r), Ya(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = ho);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (u = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = dd(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = u.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = u.createElement(n, { is: r.is }))
                : ((e = u.createElement(n)),
                  n === 'select' &&
                    ((u = e),
                    r.multiple
                      ? (u.multiple = !0)
                      : r.size && (u.size = r.size)))
              : (e = u.createElementNS(e, n)),
            (e[pt] = t),
            (e[Xr] = r),
            zp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((u = Pl(n, r)), n)) {
              case 'dialog':
                ee('cancel', e), ee('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ee('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Cr.length; i++) ee(Cr[i], e);
                i = r;
                break;
              case 'source':
                ee('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ee('error', e), ee('load', e), (i = r);
                break;
              case 'details':
                ee('toggle', e), (i = r);
                break;
              case 'input':
                Wa(e, r), (i = kl(e, r)), ee('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = le({}, r, { value: void 0 })),
                  ee('invalid', e);
                break;
              case 'textarea':
                Ka(e, r), (i = Cl(e, r)), ee('invalid', e);
                break;
              default:
                i = r;
            }
            _l(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o];
                o === 'style'
                  ? vd(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && pd(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && qr(e, s)
                    : typeof s == 'number' && qr(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (jr.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && ee('scroll', e)
                      : s != null && Rs(e, o, s, u));
              }
            switch (n) {
              case 'input':
                Si(e), Ha(e, r, !1);
                break;
              case 'textarea':
                Si(e), Ya(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Zt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? qn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = ho);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) Fp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(R(166));
        if (((n = hn(Jr.current)), hn(vt.current), Ri(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[pt] = t),
            (o = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ti(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ti(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[pt] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (ne(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && je !== null && t.mode & 1 && !(t.flags & 128))
          np(), Gn(), (t.flags |= 98560), (o = !1);
        else if (((o = Ri(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[pt] = t;
          } else
            Gn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (o = !1);
        } else ot !== null && (ls(ot), (ot = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? ve === 0 && (ve = 3) : fa())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        Zn(), Zl(e, t), e === null && Kr(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return Ks(t.type._context), Oe(t), null;
    case 17:
      return Le(t.type) && vo(), Oe(t), null;
    case 19:
      if ((ne(oe), (o = t.memoizedState), o === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
        if (r) mr(o, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((u = xo(e)), u !== null)) {
                for (
                  t.flags |= 128,
                    mr(o, !1),
                    r = u.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (u = o.alternate),
                    u === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = u.childLanes),
                        (o.lanes = u.lanes),
                        (o.child = u.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = u.memoizedProps),
                        (o.memoizedState = u.memoizedState),
                        (o.updateQueue = u.updateQueue),
                        (o.type = u.type),
                        (e = u.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Z(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ce() > tr &&
            ((t.flags |= 128), (r = !0), mr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xo(u)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !u.alternate && !ie)
            )
              return Oe(t), null;
          } else
            2 * ce() - o.renderingStartTime > tr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((u.sibling = t.child), (t.child = u))
          : ((n = o.last),
            n !== null ? (n.sibling = u) : (t.child = u),
            (o.last = u));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ce()),
          (t.sibling = null),
          (n = oe.current),
          Z(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        ca(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Fe & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function im(e, t) {
  switch ((Us(t), t.tag)) {
    case 1:
      return (
        Le(t.type) && vo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zn(),
        ne(De),
        ne(Te),
        Zs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Js(t), null;
    case 13:
      if (
        (ne(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        Gn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ne(oe), null;
    case 4:
      return Zn(), null;
    case 10:
      return Ks(t.type._context), null;
    case 22:
    case 23:
      return ca(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bi = !1,
  Pe = !1,
  om = typeof WeakSet == 'function' ? WeakSet : Set,
  L = null;
function Fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ae(e, t, r);
      }
    else n.current = null;
}
function es(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var $c = !1;
function um(e, t) {
  if (((zl = co), (e = Bd()), Qs(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0,
            l = -1,
            s = -1,
            a = 0,
            p = 0,
            h = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              h !== n || (i !== 0 && h.nodeType !== 3) || (l = u + i),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = u + r),
                h.nodeType === 3 && (u += h.nodeValue.length),
                (v = h.firstChild) !== null;

            )
              (d = h), (h = v);
            for (;;) {
              if (h === e) break t;
              if (
                (d === n && ++a === i && (l = u),
                d === o && ++p === r && (s = u),
                (v = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = v;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($l = { focusedElem: e, selectionRange: n }, co = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var w = g.memoizedProps,
                    O = g.memoizedState,
                    y = t.stateNode,
                    c = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : nt(t.type, w),
                      O
                    );
                  y.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = '')
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (m) {
          ae(t, t.return, m);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (g = $c), ($c = !1), g;
}
function Mr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && es(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ko(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ts(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function jp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), jp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[pt], delete t[Xr], delete t[ql], delete t[Qy], delete t[By])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function qp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || qp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ns(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ho));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ns(e, t, n), e = e.sibling; e !== null; ) ns(e, t, n), (e = e.sibling);
}
function rs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (rs(e, t, n), e = e.sibling; e !== null; ) rs(e, t, n), (e = e.sibling);
}
var Se = null,
  rt = !1;
function It(e, t, n) {
  for (n = n.child; n !== null; ) Qp(e, t, n), (n = n.sibling);
}
function Qp(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == 'function')
    try {
      ht.onCommitFiberUnmount(jo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pe || Fn(n, t);
    case 6:
      var r = Se,
        i = rt;
      (Se = null),
        It(e, t, n),
        (Se = r),
        (rt = i),
        Se !== null &&
          (rt
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (rt
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Bu(e.parentNode, n)
              : e.nodeType === 1 && Bu(e, n),
            Vr(e))
          : Bu(Se, n.stateNode));
      break;
    case 4:
      (r = Se),
        (i = rt),
        (Se = n.stateNode.containerInfo),
        (rt = !0),
        It(e, t, n),
        (Se = r),
        (rt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            u = o.destroy;
          (o = o.tag),
            u !== void 0 && (o & 2 || o & 4) && es(n, t, u),
            (i = i.next);
        } while (i !== r);
      }
      It(e, t, n);
      break;
    case 1:
      if (
        !Pe &&
        (Fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ae(n, t, l);
        }
      It(e, t, n);
      break;
    case 21:
      It(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Pe = (r = Pe) || n.memoizedState !== null), It(e, t, n), (Pe = r))
        : It(e, t, n);
      break;
    default:
      It(e, t, n);
  }
}
function jc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new om()),
      t.forEach(function (r) {
        var i = vm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          u = t,
          l = u;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Se = l.stateNode), (rt = !1);
              break e;
            case 3:
              (Se = l.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (Se = l.stateNode.containerInfo), (rt = !0);
              break e;
          }
          l = l.return;
        }
        if (Se === null) throw Error(R(160));
        Qp(o, u, i), (Se = null), (rt = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (a) {
        ae(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Bp(t, e), (t = t.sibling);
}
function Bp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((tt(t, e), ft(e), r & 4)) {
        try {
          Mr(3, e, e.return), Ko(3, e);
        } catch (w) {
          ae(e, e.return, w);
        }
        try {
          Mr(5, e, e.return);
        } catch (w) {
          ae(e, e.return, w);
        }
      }
      break;
    case 1:
      tt(t, e), ft(e), r & 512 && n !== null && Fn(n, n.return);
      break;
    case 5:
      if (
        (tt(t, e),
        ft(e),
        r & 512 && n !== null && Fn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          qr(i, '');
        } catch (w) {
          ae(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          u = n !== null ? n.memoizedProps : o,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && cd(i, o),
              Pl(l, u);
            var a = Pl(l, o);
            for (u = 0; u < s.length; u += 2) {
              var p = s[u],
                h = s[u + 1];
              p === 'style'
                ? vd(i, h)
                : p === 'dangerouslySetInnerHTML'
                ? pd(i, h)
                : p === 'children'
                ? qr(i, h)
                : Rs(i, p, h, a);
            }
            switch (l) {
              case 'input':
                xl(i, o);
                break;
              case 'textarea':
                fd(i, o);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? qn(i, !!o.multiple, v, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? qn(i, !!o.multiple, o.defaultValue, !0)
                      : qn(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Xr] = o;
          } catch (w) {
            ae(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((tt(t, e), ft(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (w) {
          ae(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (tt(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Vr(t.containerInfo);
        } catch (w) {
          ae(e, e.return, w);
        }
      break;
    case 4:
      tt(t, e), ft(e);
      break;
    case 13:
      tt(t, e),
        ft(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (sa = ce())),
        r & 4 && jc(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Pe = (a = Pe) || p), tt(t, e), (Pe = a)) : tt(t, e),
        ft(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (L = e, p = e.child; p !== null; ) {
            for (h = L = p; L !== null; ) {
              switch (((d = L), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mr(4, d, d.return);
                  break;
                case 1:
                  Fn(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (w) {
                      ae(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Fn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Qc(h);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (L = v)) : Qc(h);
            }
            p = p.sibling;
          }
        e: for (p = null, h = e; ; ) {
          if (h.tag === 5) {
            if (p === null) {
              p = h;
              try {
                (i = h.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = h.stateNode),
                      (s = h.memoizedProps.style),
                      (u =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (l.style.display = hd('display', u)));
              } catch (w) {
                ae(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (p === null)
              try {
                h.stateNode.nodeValue = a ? '' : h.memoizedProps;
              } catch (w) {
                ae(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            p === h && (p = null), (h = h.return);
          }
          p === h && (p = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      tt(t, e), ft(e), r & 4 && jc(e);
      break;
    case 21:
      break;
    default:
      tt(t, e), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (qr(i, ''), (r.flags &= -33));
          var o = Fc(e);
          rs(e, o, i);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo,
            l = Fc(e);
          ns(e, l, u);
          break;
        default:
          throw Error(R(161));
      }
    } catch (s) {
      ae(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lm(e, t, n) {
  (L = e), Up(e);
}
function Up(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var u = i.memoizedState !== null || bi;
      if (!u) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || Pe;
        l = bi;
        var a = Pe;
        if (((bi = u), (Pe = s) && !a))
          for (L = i; L !== null; )
            (u = L),
              (s = u.child),
              u.tag === 22 && u.memoizedState !== null
                ? Bc(i)
                : s !== null
                ? ((s.return = u), (L = s))
                : Bc(i);
        for (; o !== null; ) (L = o), Up(o), (o = o.sibling);
        (L = i), (bi = l), (Pe = a);
      }
      qc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : qc(e);
  }
}
function qc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pe || Ko(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Cc(t, o, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Cc(t, u, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
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
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var h = p.dehydrated;
                    h !== null && Vr(h);
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
              throw Error(R(163));
          }
        Pe || (t.flags & 512 && ts(t));
      } catch (d) {
        ae(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Qc(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Bc(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ko(4, t);
          } catch (s) {
            ae(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ae(t, i, s);
            }
          }
          var o = t.return;
          try {
            ts(t);
          } catch (s) {
            ae(t, o, s);
          }
          break;
        case 5:
          var u = t.return;
          try {
            ts(t);
          } catch (s) {
            ae(t, u, s);
          }
      }
    } catch (s) {
      ae(t, t.return, s);
    }
    if (t === e) {
      L = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (L = l);
      break;
    }
    L = t.return;
  }
}
var sm = Math.ceil,
  Oo = At.ReactCurrentDispatcher,
  ua = At.ReactCurrentOwner,
  Ge = At.ReactCurrentBatchConfig,
  W = 0,
  ge = null,
  de = null,
  xe = 0,
  Fe = 0,
  jn = un(0),
  ve = 0,
  ni = null,
  kn = 0,
  Yo = 0,
  la = 0,
  Dr = null,
  Ie = null,
  sa = 0,
  tr = 1 / 0,
  kt = null,
  _o = !1,
  is = null,
  Kt = null,
  Ii = !1,
  Qt = null,
  Po = 0,
  Lr = 0,
  os = null,
  Ji = -1,
  Zi = 0;
function Ne() {
  return W & 6 ? ce() : Ji !== -1 ? Ji : (Ji = ce());
}
function Yt(e) {
  return e.mode & 1
    ? W & 2 && xe !== 0
      ? xe & -xe
      : Vy.transition !== null
      ? (Zi === 0 && (Zi = Pd()), Zi)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Md(e.type))),
        e)
    : 1;
}
function lt(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (os = null), Error(R(185)));
  ci(e, n, r),
    (!(W & 2) || e !== ge) &&
      (e === ge && (!(W & 2) && (Yo |= n), ve === 4 && Ft(e, xe)),
      ze(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((tr = ce() + 500), Vo && ln()));
}
function ze(e, t) {
  var n = e.callbackNode;
  Vv(e, t);
  var r = ao(e, e === ge ? xe : 0);
  if (r === 0)
    n !== null && Ja(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ja(n), t === 1))
      e.tag === 0 ? Uy(Uc.bind(null, e)) : Zd(Uc.bind(null, e)),
        jy(function () {
          !(W & 6) && ln();
        }),
        (n = null);
    else {
      switch (Td(r)) {
        case 1:
          n = Ms;
          break;
        case 4:
          n = Od;
          break;
        case 16:
          n = so;
          break;
        case 536870912:
          n = _d;
          break;
        default:
          n = so;
      }
      n = Jp(n, Vp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Vp(e, t) {
  if (((Ji = -1), (Zi = 0), W & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = ao(e, e === ge ? xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = To(e, r);
  else {
    t = r;
    var i = W;
    W |= 2;
    var o = Hp();
    (ge !== e || xe !== t) && ((kt = null), (tr = ce() + 500), yn(e, t));
    do
      try {
        fm();
        break;
      } catch (l) {
        Wp(e, l);
      }
    while (1);
    Hs(),
      (Oo.current = o),
      (W = i),
      de !== null ? (t = 0) : ((ge = null), (xe = 0), (t = ve));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = bl(e)), i !== 0 && ((r = i), (t = us(e, i)))), t === 1)
    )
      throw ((n = ni), yn(e, 0), Ft(e, r), ze(e, ce()), n);
    if (t === 6) Ft(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !am(i) &&
          ((t = To(e, r)),
          t === 2 && ((o = bl(e)), o !== 0 && ((r = o), (t = us(e, o)))),
          t === 1))
      )
        throw ((n = ni), yn(e, 0), Ft(e, r), ze(e, ce()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          cn(e, Ie, kt);
          break;
        case 3:
          if (
            (Ft(e, r), (r & 130023424) === r && ((t = sa + 500 - ce()), 10 < t))
          ) {
            if (ao(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = jl(cn.bind(null, e, Ie, kt), t);
            break;
          }
          cn(e, Ie, kt);
          break;
        case 4:
          if ((Ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var u = 31 - ut(r);
            (o = 1 << u), (u = t[u]), u > i && (i = u), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * sm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = jl(cn.bind(null, e, Ie, kt), r);
            break;
          }
          cn(e, Ie, kt);
          break;
        case 5:
          cn(e, Ie, kt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return ze(e, ce()), e.callbackNode === n ? Vp.bind(null, e) : null;
}
function us(e, t) {
  var n = Dr;
  return (
    e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
    (e = To(e, t)),
    e !== 2 && ((t = Ie), (Ie = n), t !== null && ls(t)),
    e
  );
}
function ls(e) {
  Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function am(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!st(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ft(e, t) {
  for (
    t &= ~la,
      t &= ~Yo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ut(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Uc(e) {
  if (W & 6) throw Error(R(327));
  Wn();
  var t = ao(e, 0);
  if (!(t & 1)) return ze(e, ce()), null;
  var n = To(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bl(e);
    r !== 0 && ((t = r), (n = us(e, r)));
  }
  if (n === 1) throw ((n = ni), yn(e, 0), Ft(e, t), ze(e, ce()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    cn(e, Ie, kt),
    ze(e, ce()),
    null
  );
}
function aa(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((tr = ce() + 500), Vo && ln());
  }
}
function xn(e) {
  Qt !== null && Qt.tag === 0 && !(W & 6) && Wn();
  var t = W;
  W |= 1;
  var n = Ge.transition,
    r = X;
  try {
    if (((Ge.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (Ge.transition = n), (W = t), !(W & 6) && ln();
  }
}
function ca() {
  (Fe = jn.current), ne(jn);
}
function yn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fy(n)), de !== null))
    for (n = de.return; n !== null; ) {
      var r = n;
      switch ((Us(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && vo();
          break;
        case 3:
          Zn(), ne(De), ne(Te), Zs();
          break;
        case 5:
          Js(r);
          break;
        case 4:
          Zn();
          break;
        case 13:
          ne(oe);
          break;
        case 19:
          ne(oe);
          break;
        case 10:
          Ks(r.type._context);
          break;
        case 22:
        case 23:
          ca();
      }
      n = n.return;
    }
  if (
    ((ge = e),
    (de = e = Xt(e.current, null)),
    (xe = Fe = t),
    (ve = 0),
    (ni = null),
    (la = Yo = kn = 0),
    (Ie = Dr = null),
    pn !== null)
  ) {
    for (t = 0; t < pn.length; t++)
      if (((n = pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var u = o.next;
          (o.next = i), (r.next = u);
        }
        n.pending = r;
      }
    pn = null;
  }
  return e;
}
function Wp(e, t) {
  do {
    var n = de;
    try {
      if ((Hs(), (Yi.current = Co), Eo)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Eo = !1;
      }
      if (
        ((Sn = 0),
        (ye = he = ue = null),
        (Ir = !1),
        (Zr = 0),
        (ua.current = null),
        n === null || n.return === null)
      ) {
        (ve = 1), (ni = t), (de = null);
        break;
      }
      e: {
        var o = e,
          u = n.return,
          l = n,
          s = t;
        if (
          ((t = xe),
          (l.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            p = l,
            h = p.tag;
          if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = p.alternate;
            d
              ? ((p.updateQueue = d.updateQueue),
                (p.memoizedState = d.memoizedState),
                (p.lanes = d.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = Ac(u);
          if (v !== null) {
            (v.flags &= -257),
              bc(v, u, l, o, t),
              v.mode & 1 && Nc(o, a, t),
              (t = v),
              (s = a);
            var g = t.updateQueue;
            if (g === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Nc(o, a, t), fa();
              break e;
            }
            s = Error(R(426));
          }
        } else if (ie && l.mode & 1) {
          var O = Ac(u);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256),
              bc(O, u, l, o, t),
              Vs(er(s, l));
            break e;
          }
        }
        (o = s = er(s, l)),
          ve !== 4 && (ve = 2),
          Dr === null ? (Dr = [o]) : Dr.push(o),
          (o = u);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var y = Rp(o, s, t);
              Ec(o, y);
              break e;
            case 1:
              l = s;
              var c = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (f !== null &&
                    typeof f.componentDidCatch == 'function' &&
                    (Kt === null || !Kt.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var m = Np(o, l, t);
                Ec(o, m);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Yp(n);
    } catch (k) {
      (t = k), de === n && n !== null && (de = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Hp() {
  var e = Oo.current;
  return (Oo.current = Co), e === null ? Co : e;
}
function fa() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    ge === null || (!(kn & 268435455) && !(Yo & 268435455)) || Ft(ge, xe);
}
function To(e, t) {
  var n = W;
  W |= 2;
  var r = Hp();
  (ge !== e || xe !== t) && ((kt = null), yn(e, t));
  do
    try {
      cm();
      break;
    } catch (i) {
      Wp(e, i);
    }
  while (1);
  if ((Hs(), (W = n), (Oo.current = r), de !== null)) throw Error(R(261));
  return (ge = null), (xe = 0), ve;
}
function cm() {
  for (; de !== null; ) Kp(de);
}
function fm() {
  for (; de !== null && !Lv(); ) Kp(de);
}
function Kp(e) {
  var t = Gp(e.alternate, e, Fe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Yp(e) : (de = t),
    (ua.current = null);
}
function Yp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = im(n, t)), n !== null)) {
        (n.flags &= 32767), (de = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ve = 6), (de = null);
        return;
      }
    } else if (((n = rm(n, t, Fe)), n !== null)) {
      de = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      de = t;
      return;
    }
    de = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function cn(e, t, n) {
  var r = X,
    i = Ge.transition;
  try {
    (Ge.transition = null), (X = 1), dm(e, t, n, r);
  } finally {
    (Ge.transition = i), (X = r);
  }
  return null;
}
function dm(e, t, n, r) {
  do Wn();
  while (Qt !== null);
  if (W & 6) throw Error(R(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Wv(e, o),
    e === ge && ((de = ge = null), (xe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ii ||
      ((Ii = !0),
      Jp(so, function () {
        return Wn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ge.transition), (Ge.transition = null);
    var u = X;
    X = 1;
    var l = W;
    (W |= 4),
      (ua.current = null),
      um(e, n),
      Bp(n, e),
      by($l),
      (co = !!zl),
      ($l = zl = null),
      (e.current = n),
      lm(n),
      zv(),
      (W = l),
      (X = u),
      (Ge.transition = o);
  } else e.current = n;
  if (
    (Ii && ((Ii = !1), (Qt = e), (Po = i)),
    (o = e.pendingLanes),
    o === 0 && (Kt = null),
    jv(n.stateNode),
    ze(e, ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (_o) throw ((_o = !1), (e = is), (is = null), e);
  return (
    Po & 1 && e.tag !== 0 && Wn(),
    (o = e.pendingLanes),
    o & 1 ? (e === os ? Lr++ : ((Lr = 0), (os = e))) : (Lr = 0),
    ln(),
    null
  );
}
function Wn() {
  if (Qt !== null) {
    var e = Td(Po),
      t = Ge.transition,
      n = X;
    try {
      if (((Ge.transition = null), (X = 16 > e ? 16 : e), Qt === null))
        var r = !1;
      else {
        if (((e = Qt), (Qt = null), (Po = 0), W & 6)) throw Error(R(331));
        var i = W;
        for (W |= 4, L = e.current; L !== null; ) {
          var o = L,
            u = o.child;
          if (L.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var a = l[s];
                for (L = a; L !== null; ) {
                  var p = L;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mr(8, p, o);
                  }
                  var h = p.child;
                  if (h !== null) (h.return = p), (L = h);
                  else
                    for (; L !== null; ) {
                      p = L;
                      var d = p.sibling,
                        v = p.return;
                      if ((jp(p), p === a)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), (L = d);
                        break;
                      }
                      L = v;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var w = g.child;
                if (w !== null) {
                  g.child = null;
                  do {
                    var O = w.sibling;
                    (w.sibling = null), (w = O);
                  } while (w !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (L = u);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mr(9, o, o.return);
                }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (L = y);
                break e;
              }
              L = o.return;
            }
        }
        var c = e.current;
        for (L = c; L !== null; ) {
          u = L;
          var f = u.child;
          if (u.subtreeFlags & 2064 && f !== null) (f.return = u), (L = f);
          else
            e: for (u = c; L !== null; ) {
              if (((l = L), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ko(9, l);
                  }
                } catch (k) {
                  ae(l, l.return, k);
                }
              if (l === u) {
                L = null;
                break e;
              }
              var m = l.sibling;
              if (m !== null) {
                (m.return = l.return), (L = m);
                break e;
              }
              L = l.return;
            }
        }
        if (
          ((W = i), ln(), ht && typeof ht.onPostCommitFiberRoot == 'function')
        )
          try {
            ht.onPostCommitFiberRoot(jo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (Ge.transition = t);
    }
  }
  return !1;
}
function Vc(e, t, n) {
  (t = er(n, t)),
    (t = Rp(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = Ne()),
    e !== null && (ci(e, 1, t), ze(e, t));
}
function ae(e, t, n) {
  if (e.tag === 3) Vc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Kt === null || !Kt.has(r)))
        ) {
          (e = er(n, e)),
            (e = Np(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = Ne()),
            t !== null && (ci(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ge === e &&
      (xe & n) === n &&
      (ve === 4 || (ve === 3 && (xe & 130023424) === xe && 500 > ce() - sa)
        ? yn(e, 0)
        : (la |= n)),
    ze(e, t);
}
function Xp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ei), (Ei <<= 1), !(Ei & 130023424) && (Ei = 4194304))
      : (t = 1));
  var n = Ne();
  (e = Rt(e, t)), e !== null && (ci(e, t, n), ze(e, n));
}
function hm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Xp(e, n);
}
function vm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Xp(e, n);
}
var Gp;
Gp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), nm(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), ie && t.flags & 1048576 && ep(t, go, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Gi(e, t), (e = t.pendingProps);
      var i = Xn(t, Te.current);
      Vn(t, n), (i = ta(null, t, r, e, i, n));
      var o = na();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Le(r) ? ((o = !0), yo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Xs(t),
            (i.updater = Wo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Hl(t, r, e, n),
            (t = Xl(null, t, r, !0, o, n)))
          : ((t.tag = 0), ie && o && Bs(t), Re(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Gi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = mm(r)),
          (e = nt(r, e)),
          i)
        ) {
          case 0:
            t = Yl(null, t, r, e, n);
            break e;
          case 1:
            t = Dc(null, t, r, e, n);
            break e;
          case 11:
            t = Ic(null, t, r, e, n);
            break e;
          case 14:
            t = Mc(null, t, r, nt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        Yl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        Dc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Mp(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          ip(e, t),
          ko(t, r, null, n);
        var u = t.memoizedState;
        if (((r = u.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: u.cache,
              pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
              transitions: u.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = er(Error(R(423)), t)), (t = Lc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = er(Error(R(424)), t)), (t = Lc(e, t, r, n, i));
            break e;
          } else
            for (
              je = Wt(t.stateNode.containerInfo.firstChild),
                qe = t,
                ie = !0,
                ot = null,
                n = sp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gn(), r === i)) {
            t = Nt(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ap(t),
        e === null && Ul(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (u = i.children),
        Fl(r, i) ? (u = null) : o !== null && Fl(r, o) && (t.flags |= 32),
        Ip(e, t),
        Re(e, t, u, n),
        t.child
      );
    case 6:
      return e === null && Ul(t), null;
    case 13:
      return Dp(e, t, n);
    case 4:
      return (
        Gs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jn(t, null, r, n)) : Re(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        Ic(e, t, r, i, n)
      );
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (u = i.value),
          Z(wo, r._currentValue),
          (r._currentValue = u),
          o !== null)
        )
          if (st(o.value, u)) {
            if (o.children === i.children && !De.current) {
              t = Nt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                u = o.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = _t(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Vl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((u = o.return), u === null)) throw Error(R(341));
                (u.lanes |= n),
                  (l = u.alternate),
                  l !== null && (l.lanes |= n),
                  Vl(u, n, t),
                  (u = o.sibling);
              } else u = o.child;
              if (u !== null) u.return = o;
              else
                for (u = o; u !== null; ) {
                  if (u === t) {
                    u = null;
                    break;
                  }
                  if (((o = u.sibling), o !== null)) {
                    (o.return = u.return), (u = o);
                    break;
                  }
                  u = u.return;
                }
              o = u;
            }
        Re(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Vn(t, n),
        (i = Je(i)),
        (r = r(i)),
        (t.flags |= 1),
        Re(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = nt(r, t.pendingProps)),
        (i = nt(r.type, i)),
        Mc(e, t, r, i, n)
      );
    case 15:
      return Ap(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        Gi(e, t),
        (t.tag = 1),
        Le(r) ? ((e = !0), yo(t)) : (e = !1),
        Vn(t, n),
        up(t, r, i),
        Hl(t, r, i, n),
        Xl(null, t, r, !0, e, n)
      );
    case 19:
      return Lp(e, t, n);
    case 22:
      return bp(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Jp(e, t) {
  return Cd(e, t);
}
function ym(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Xe(e, t, n, r) {
  return new ym(e, t, n, r);
}
function da(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function mm(e) {
  if (typeof e == 'function') return da(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === As)) return 11;
    if (e === bs) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Xe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function eo(e, t, n, r, i, o) {
  var u = 2;
  if (((r = e), typeof e == 'function')) da(e) && (u = 1);
  else if (typeof e == 'string') u = 5;
  else
    e: switch (e) {
      case Nn:
        return mn(n.children, i, o, t);
      case Ns:
        (u = 8), (i |= 8);
        break;
      case ml:
        return (
          (e = Xe(12, n, t, i | 2)), (e.elementType = ml), (e.lanes = o), e
        );
      case gl:
        return (e = Xe(13, n, t, i)), (e.elementType = gl), (e.lanes = o), e;
      case wl:
        return (e = Xe(19, n, t, i)), (e.elementType = wl), (e.lanes = o), e;
      case ld:
        return Xo(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case od:
              u = 10;
              break e;
            case ud:
              u = 9;
              break e;
            case As:
              u = 11;
              break e;
            case bs:
              u = 14;
              break e;
            case Dt:
              (u = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Xe(u, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function mn(e, t, n, r) {
  return (e = Xe(7, e, r, t)), (e.lanes = n), e;
}
function Xo(e, t, n, r) {
  return (
    (e = Xe(22, e, r, t)),
    (e.elementType = ld),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gu(e, t, n) {
  return (e = Xe(6, e, null, t)), (e.lanes = n), e;
}
function Ju(e, t, n) {
  return (
    (t = Xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gm(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = bu(0)),
    (this.expirationTimes = bu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function pa(e, t, n, r, i, o, u, l, s) {
  return (
    (e = new gm(e, t, n, l, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Xe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Xs(o),
    e
  );
}
function wm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Zp(e) {
  if (!e) return en;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Le(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Le(n)) return Jd(e, n, t);
  }
  return t;
}
function eh(e, t, n, r, i, o, u, l, s) {
  return (
    (e = pa(n, r, !0, e, i, o, u, l, s)),
    (e.context = Zp(null)),
    (n = e.current),
    (r = Ne()),
    (i = Yt(n)),
    (o = _t(r, i)),
    (o.callback = t ?? null),
    Ht(n, o, i),
    (e.current.lanes = i),
    ci(e, i, r),
    ze(e, r),
    e
  );
}
function Go(e, t, n, r) {
  var i = t.current,
    o = Ne(),
    u = Yt(i);
  return (
    (n = Zp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _t(o, u)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(i, t, u)),
    e !== null && (lt(e, i, u, o), Ki(e, i, u)),
    u
  );
}
function Ro(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ha(e, t) {
  Wc(e, t), (e = e.alternate) && Wc(e, t);
}
function Sm() {
  return null;
}
var th =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function va(e) {
  this._internalRoot = e;
}
Jo.prototype.render = va.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Go(e, t, null, null);
};
Jo.prototype.unmount = va.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xn(function () {
      Go(null, e, null, null);
    }),
      (t[Tt] = null);
  }
};
function Jo(e) {
  this._internalRoot = e;
}
Jo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ad();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < $t.length && t !== 0 && t < $t[n].priority; n++);
    $t.splice(n, 0, e), n === 0 && Id(e);
  }
};
function ya(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Hc() {}
function km(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var a = Ro(u);
        o.call(a);
      };
    }
    var u = eh(t, r, e, 0, null, !1, !1, '', Hc);
    return (
      (e._reactRootContainer = u),
      (e[Tt] = u.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      xn(),
      u
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var a = Ro(s);
      l.call(a);
    };
  }
  var s = pa(e, 0, !1, null, null, !1, !1, '', Hc);
  return (
    (e._reactRootContainer = s),
    (e[Tt] = s.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    xn(function () {
      Go(t, s, n, r);
    }),
    s
  );
}
function eu(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var u = o;
    if (typeof i == 'function') {
      var l = i;
      i = function () {
        var s = Ro(u);
        l.call(s);
      };
    }
    Go(t, u, e, i);
  } else u = km(n, t, e, i, r);
  return Ro(u);
}
Rd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Er(t.pendingLanes);
        n !== 0 &&
          (Ds(t, n | 1), ze(t, ce()), !(W & 6) && ((tr = ce() + 500), ln()));
      }
      break;
    case 13:
      xn(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var i = Ne();
          lt(r, e, 1, i);
        }
      }),
        ha(e, 1);
  }
};
Ls = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      lt(t, e, 134217728, n);
    }
    ha(e, 134217728);
  }
};
Nd = function (e) {
  if (e.tag === 13) {
    var t = Yt(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = Ne();
      lt(n, e, t, r);
    }
    ha(e, t);
  }
};
Ad = function () {
  return X;
};
bd = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Rl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((xl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Uo(r);
            if (!i) throw Error(R(90));
            ad(r), xl(r, i);
          }
        }
      }
      break;
    case 'textarea':
      fd(e, n);
      break;
    case 'select':
      (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
  }
};
gd = aa;
wd = xn;
var xm = { usingClientEntryPoint: !1, Events: [di, Mn, Uo, yd, md, aa] },
  gr = {
    findFiberByHostInstance: dn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  Em = {
    bundleType: gr.bundleType,
    version: gr.version,
    rendererPackageName: gr.rendererPackageName,
    rendererConfig: gr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gr.findFiberByHostInstance || Sm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mi.isDisabled && Mi.supportsFiber)
    try {
      (jo = Mi.inject(Em)), (ht = Mi);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xm;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ya(t)) throw Error(R(200));
  return wm(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!ya(e)) throw Error(R(299));
  var n = !1,
    r = '',
    i = th;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = pa(e, 1, !1, null, null, n, !1, r, i)),
    (e[Tt] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new va(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(R(188))
      : ((e = Object.keys(e).join(',')), Error(R(268, e)));
  return (e = xd(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e) {
  return xn(e);
};
Ue.hydrate = function (e, t, n) {
  if (!Zo(t)) throw Error(R(200));
  return eu(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!ya(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    u = th;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    (t = eh(t, null, e, 1, n ?? null, i, !1, o, u)),
    (e[Tt] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Jo(t);
};
Ue.render = function (e, t, n) {
  if (!Zo(t)) throw Error(R(200));
  return eu(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!Zo(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (xn(function () {
        eu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tt] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = aa;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Zo(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return eu(e, t, n, !1, r);
};
Ue.version = '18.2.0-next-9e3b772b8-20220608';
function nh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nh);
    } catch (e) {
      console.error(e);
    }
}
nh(), (ed.exports = Ue);
var ma = ed.exports,
  Kc = ma;
(vl.createRoot = Kc.createRoot), (vl.hydrateRoot = Kc.hydrateRoot);
var rh = { exports: {} },
  ih = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nr = z;
function Cm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Om = typeof Object.is == 'function' ? Object.is : Cm,
  _m = nr.useState,
  Pm = nr.useEffect,
  Tm = nr.useLayoutEffect,
  Rm = nr.useDebugValue;
function Nm(e, t) {
  var n = t(),
    r = _m({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    Tm(
      function () {
        (i.value = n), (i.getSnapshot = t), Zu(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    Pm(
      function () {
        return (
          Zu(i) && o({ inst: i }),
          e(function () {
            Zu(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    Rm(n),
    n
  );
}
function Zu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Om(e, n);
  } catch {
    return !0;
  }
}
function Am(e, t) {
  return t();
}
var bm =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? Am
    : Nm;
ih.useSyncExternalStore =
  nr.useSyncExternalStore !== void 0 ? nr.useSyncExternalStore : bm;
rh.exports = ih;
var Im = rh.exports,
  oh = { exports: {} },
  uh = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tu = z,
  Mm = Im;
function Dm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Lm = typeof Object.is == 'function' ? Object.is : Dm,
  zm = Mm.useSyncExternalStore,
  $m = tu.useRef,
  Fm = tu.useEffect,
  jm = tu.useMemo,
  qm = tu.useDebugValue;
uh.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = $m(null);
  if (o.current === null) {
    var u = { hasValue: !1, value: null };
    o.current = u;
  } else u = o.current;
  o = jm(
    function () {
      function s(v) {
        if (!a) {
          if (((a = !0), (p = v), (v = r(v)), i !== void 0 && u.hasValue)) {
            var g = u.value;
            if (i(g, v)) return (h = g);
          }
          return (h = v);
        }
        if (((g = h), Lm(p, v))) return g;
        var w = r(v);
        return i !== void 0 && i(g, w) ? g : ((p = v), (h = w));
      }
      var a = !1,
        p,
        h,
        d = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        d === null
          ? void 0
          : function () {
              return s(d());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = zm(e, o[0], o[1]);
  return (
    Fm(
      function () {
        (u.hasValue = !0), (u.value = l);
      },
      [l]
    ),
    qm(l),
    l
  );
};
oh.exports = uh;
var Qm = oh.exports;
function Bm(e) {
  e();
}
let lh = Bm;
const Um = (e) => (lh = e),
  Vm = () => lh,
  Yc = Symbol.for('react-redux-context'),
  Xc = typeof globalThis < 'u' ? globalThis : {};
function Wm() {
  var e;
  if (!z.createContext) return {};
  const t = (e = Xc[Yc]) != null ? e : (Xc[Yc] = new Map());
  let n = t.get(z.createContext);
  return n || ((n = z.createContext(null)), t.set(z.createContext, n)), n;
}
const tn = Wm();
function ga(e = tn) {
  return function () {
    return z.useContext(e);
  };
}
const sh = ga(),
  Hm = () => {
    throw new Error('uSES not initialized!');
  };
let ah = Hm;
const Km = (e) => {
    ah = e;
  },
  Ym = (e, t) => e === t;
function Xm(e = tn) {
  const t = e === tn ? sh : ga(e);
  return function (r, i = {}) {
    const {
        equalityFn: o = Ym,
        stabilityCheck: u = void 0,
        noopCheck: l = void 0,
      } = typeof i == 'function' ? { equalityFn: i } : i,
      {
        store: s,
        subscription: a,
        getServerState: p,
        stabilityCheck: h,
        noopCheck: d,
      } = t();
    z.useRef(!0);
    const v = z.useCallback(
        {
          [r.name](w) {
            return r(w);
          },
        }[r.name],
        [r, h, u]
      ),
      g = ah(a.addNestedSub, s.getState, p || s.getState, v, o);
    return z.useDebugValue(g), g;
  };
}
const wa = Xm();
var ch = { exports: {} },
  G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var we = typeof Symbol == 'function' && Symbol.for,
  Sa = we ? Symbol.for('react.element') : 60103,
  ka = we ? Symbol.for('react.portal') : 60106,
  nu = we ? Symbol.for('react.fragment') : 60107,
  ru = we ? Symbol.for('react.strict_mode') : 60108,
  iu = we ? Symbol.for('react.profiler') : 60114,
  ou = we ? Symbol.for('react.provider') : 60109,
  uu = we ? Symbol.for('react.context') : 60110,
  xa = we ? Symbol.for('react.async_mode') : 60111,
  lu = we ? Symbol.for('react.concurrent_mode') : 60111,
  su = we ? Symbol.for('react.forward_ref') : 60112,
  au = we ? Symbol.for('react.suspense') : 60113,
  Gm = we ? Symbol.for('react.suspense_list') : 60120,
  cu = we ? Symbol.for('react.memo') : 60115,
  fu = we ? Symbol.for('react.lazy') : 60116,
  Jm = we ? Symbol.for('react.block') : 60121,
  Zm = we ? Symbol.for('react.fundamental') : 60117,
  eg = we ? Symbol.for('react.responder') : 60118,
  tg = we ? Symbol.for('react.scope') : 60119;
function We(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Sa:
        switch (((e = e.type), e)) {
          case xa:
          case lu:
          case nu:
          case iu:
          case ru:
          case au:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case uu:
              case su:
              case fu:
              case cu:
              case ou:
                return e;
              default:
                return t;
            }
        }
      case ka:
        return t;
    }
  }
}
function fh(e) {
  return We(e) === lu;
}
G.AsyncMode = xa;
G.ConcurrentMode = lu;
G.ContextConsumer = uu;
G.ContextProvider = ou;
G.Element = Sa;
G.ForwardRef = su;
G.Fragment = nu;
G.Lazy = fu;
G.Memo = cu;
G.Portal = ka;
G.Profiler = iu;
G.StrictMode = ru;
G.Suspense = au;
G.isAsyncMode = function (e) {
  return fh(e) || We(e) === xa;
};
G.isConcurrentMode = fh;
G.isContextConsumer = function (e) {
  return We(e) === uu;
};
G.isContextProvider = function (e) {
  return We(e) === ou;
};
G.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Sa;
};
G.isForwardRef = function (e) {
  return We(e) === su;
};
G.isFragment = function (e) {
  return We(e) === nu;
};
G.isLazy = function (e) {
  return We(e) === fu;
};
G.isMemo = function (e) {
  return We(e) === cu;
};
G.isPortal = function (e) {
  return We(e) === ka;
};
G.isProfiler = function (e) {
  return We(e) === iu;
};
G.isStrictMode = function (e) {
  return We(e) === ru;
};
G.isSuspense = function (e) {
  return We(e) === au;
};
G.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === nu ||
    e === lu ||
    e === iu ||
    e === ru ||
    e === au ||
    e === Gm ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === fu ||
        e.$$typeof === cu ||
        e.$$typeof === ou ||
        e.$$typeof === uu ||
        e.$$typeof === su ||
        e.$$typeof === Zm ||
        e.$$typeof === eg ||
        e.$$typeof === tg ||
        e.$$typeof === Jm))
  );
};
G.typeOf = We;
ch.exports = G;
var ng = ch.exports,
  dh = ng,
  rg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  ig = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ph = {};
ph[dh.ForwardRef] = rg;
ph[dh.Memo] = ig;
var J = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ea = Symbol.for('react.element'),
  Ca = Symbol.for('react.portal'),
  du = Symbol.for('react.fragment'),
  pu = Symbol.for('react.strict_mode'),
  hu = Symbol.for('react.profiler'),
  vu = Symbol.for('react.provider'),
  yu = Symbol.for('react.context'),
  og = Symbol.for('react.server_context'),
  mu = Symbol.for('react.forward_ref'),
  gu = Symbol.for('react.suspense'),
  wu = Symbol.for('react.suspense_list'),
  Su = Symbol.for('react.memo'),
  ku = Symbol.for('react.lazy'),
  ug = Symbol.for('react.offscreen'),
  hh;
hh = Symbol.for('react.module.reference');
function et(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ea:
        switch (((e = e.type), e)) {
          case du:
          case hu:
          case pu:
          case gu:
          case wu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case og:
              case yu:
              case mu:
              case ku:
              case Su:
              case vu:
                return e;
              default:
                return t;
            }
        }
      case Ca:
        return t;
    }
  }
}
J.ContextConsumer = yu;
J.ContextProvider = vu;
J.Element = Ea;
J.ForwardRef = mu;
J.Fragment = du;
J.Lazy = ku;
J.Memo = Su;
J.Portal = Ca;
J.Profiler = hu;
J.StrictMode = pu;
J.Suspense = gu;
J.SuspenseList = wu;
J.isAsyncMode = function () {
  return !1;
};
J.isConcurrentMode = function () {
  return !1;
};
J.isContextConsumer = function (e) {
  return et(e) === yu;
};
J.isContextProvider = function (e) {
  return et(e) === vu;
};
J.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ea;
};
J.isForwardRef = function (e) {
  return et(e) === mu;
};
J.isFragment = function (e) {
  return et(e) === du;
};
J.isLazy = function (e) {
  return et(e) === ku;
};
J.isMemo = function (e) {
  return et(e) === Su;
};
J.isPortal = function (e) {
  return et(e) === Ca;
};
J.isProfiler = function (e) {
  return et(e) === hu;
};
J.isStrictMode = function (e) {
  return et(e) === pu;
};
J.isSuspense = function (e) {
  return et(e) === gu;
};
J.isSuspenseList = function (e) {
  return et(e) === wu;
};
J.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === du ||
    e === hu ||
    e === pu ||
    e === gu ||
    e === wu ||
    e === ug ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ku ||
        e.$$typeof === Su ||
        e.$$typeof === vu ||
        e.$$typeof === yu ||
        e.$$typeof === mu ||
        e.$$typeof === hh ||
        e.getModuleId !== void 0))
  );
};
J.typeOf = et;
function lg() {
  const e = Vm();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        o = (n = { callback: r, next: null, prev: n });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const Gc = { notify() {}, get: () => [] };
function sg(e, t) {
  let n,
    r = Gc;
  function i(h) {
    return s(), r.subscribe(h);
  }
  function o() {
    r.notify();
  }
  function u() {
    p.onStateChange && p.onStateChange();
  }
  function l() {
    return !!n;
  }
  function s() {
    n || ((n = t ? t.addNestedSub(u) : e.subscribe(u)), (r = lg()));
  }
  function a() {
    n && (n(), (n = void 0), r.clear(), (r = Gc));
  }
  const p = {
    addNestedSub: i,
    notifyNestedSubs: o,
    handleChangeWrapper: u,
    isSubscribed: l,
    trySubscribe: s,
    tryUnsubscribe: a,
    getListeners: () => r,
  };
  return p;
}
const ag =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  cg = ag ? z.useLayoutEffect : z.useEffect;
function Jc(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function No(e, t) {
  if (Jc(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let i = 0; i < n.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, n[i]) || !Jc(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
function fg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = 'once',
  noopCheck: o = 'once',
}) {
  const u = z.useMemo(() => {
      const a = sg(e);
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        noopCheck: o,
      };
    }, [e, r, i, o]),
    l = z.useMemo(() => e.getState(), [e]);
  cg(() => {
    const { subscription: a } = u;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      l !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [u, l]);
  const s = t || tn;
  return z.createElement(s.Provider, { value: u }, n);
}
function vh(e = tn) {
  const t = e === tn ? sh : ga(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const yh = vh();
function dg(e = tn) {
  const t = e === tn ? yh : vh(e);
  return function () {
    return t().dispatch;
  };
}
const sr = dg();
Km(Qm.useSyncExternalStoreWithSelector);
Um(ma.unstable_batchedUpdates);
function ke(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  );
}
function at(e) {
  return !!e && !!e[te];
}
function ct(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return (
        i === Object ||
        (typeof i == 'function' && Function.toString.call(i) === kg)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[zr] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[zr]) ||
      xu(e) ||
      Eu(e))
  );
}
function pg(e) {
  return at(e) || ke(23, e), e[te].t;
}
function nn(e, t, n) {
  n === void 0 && (n = !1),
    rn(e) === 0
      ? (n ? Object.keys : Hn)(e).forEach(function (r) {
          (n && typeof r == 'symbol') || t(r, e[r], e);
        })
      : e.forEach(function (r, i) {
          return t(i, r, e);
        });
}
function rn(e) {
  var t = e[te];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : xu(e)
    ? 2
    : Eu(e)
    ? 3
    : 0;
}
function Gt(e, t) {
  return rn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function to(e, t) {
  return rn(e) === 2 ? e.get(t) : e[t];
}
function mh(e, t, n) {
  var r = rn(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function gh(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function xu(e) {
  return wg && e instanceof Map;
}
function Eu(e) {
  return Sg && e instanceof Set;
}
function fn(e) {
  return e.o || e.t;
}
function Oa(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Sh(e);
  delete t[te];
  for (var n = Hn(t), r = 0; r < n.length; r++) {
    var i = n[r],
      o = t[i];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[i] = {
          configurable: !0,
          writable: !0,
          enumerable: o.enumerable,
          value: e[i],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function _a(e, t) {
  return (
    t === void 0 && (t = !1),
    Pa(e) ||
      at(e) ||
      !ct(e) ||
      (rn(e) > 1 && (e.set = e.add = e.clear = e.delete = hg),
      Object.freeze(e),
      t &&
        nn(
          e,
          function (n, r) {
            return _a(r, !0);
          },
          !0
        )),
    e
  );
}
function hg() {
  ke(2);
}
function Pa(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e);
}
function yt(e) {
  var t = fs[e];
  return t || ke(18, e), t;
}
function wh(e, t) {
  fs[e] || (fs[e] = t);
}
function ss() {
  return ri;
}
function el(e, t) {
  t && (yt('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function Ao(e) {
  as(e), e.p.forEach(vg), (e.p = null);
}
function as(e) {
  e === ri && (ri = e.l);
}
function Zc(e) {
  return (ri = { p: [], l: ri, h: e, m: !0, _: 0 });
}
function vg(e) {
  var t = e[te];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function tl(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || yt('ES5').S(t, e, r),
    r
      ? (n[te].P && (Ao(t), ke(4)),
        ct(e) && ((e = bo(t, e)), t.l || Io(t, e)),
        t.u && yt('Patches').M(n[te].t, e, t.u, t.s))
      : (e = bo(t, n, [])),
    Ao(t),
    t.u && t.v(t.u, t.s),
    e !== Ra ? e : void 0
  );
}
function bo(e, t, n) {
  if (Pa(t)) return t;
  var r = t[te];
  if (!r)
    return (
      nn(
        t,
        function (l, s) {
          return ef(e, r, t, l, s, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return Io(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = Oa(r.k)) : r.o,
      o = i,
      u = !1;
    r.i === 3 && ((o = new Set(i)), i.clear(), (u = !0)),
      nn(o, function (l, s) {
        return ef(e, r, i, l, s, n, u);
      }),
      Io(e, i, !1),
      n && e.u && yt('Patches').N(r, n, e.u, e.s);
  }
  return r.o;
}
function ef(e, t, n, r, i, o, u) {
  if (at(i)) {
    var l = bo(e, i, o && t && t.i !== 3 && !Gt(t.R, r) ? o.concat(r) : void 0);
    if ((mh(n, r, l), !at(l))) return;
    e.m = !1;
  } else u && n.add(i);
  if (ct(i) && !Pa(i)) {
    if (!e.h.D && e._ < 1) return;
    bo(e, i), (t && t.A.l) || Io(e, i);
  }
}
function Io(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && _a(t, n);
}
function nl(e, t) {
  var n = e[te];
  return (n ? fn(n) : e)[t];
}
function tf(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function jt(e) {
  e.P || ((e.P = !0), e.l && jt(e.l));
}
function rl(e) {
  e.o || (e.o = Oa(e.t));
}
function cs(e, t, n) {
  var r = xu(t)
    ? yt('MapSet').F(t, n)
    : Eu(t)
    ? yt('MapSet').T(t, n)
    : e.O
    ? (function (i, o) {
        var u = Array.isArray(i),
          l = {
            i: u ? 1 : 0,
            A: o ? o.A : ss(),
            P: !1,
            I: !1,
            R: {},
            l: o,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          s = l,
          a = ii;
        u && ((s = [l]), (a = Or));
        var p = Proxy.revocable(s, a),
          h = p.revoke,
          d = p.proxy;
        return (l.k = d), (l.j = h), d;
      })(t, n)
    : yt('ES5').J(t, n);
  return (n ? n.A : ss()).p.push(r), r;
}
function yg(e) {
  return (
    at(e) || ke(22, e),
    (function t(n) {
      if (!ct(n)) return n;
      var r,
        i = n[te],
        o = rn(n);
      if (i) {
        if (!i.P && (i.i < 4 || !yt('ES5').K(i))) return i.t;
        (i.I = !0), (r = nf(n, o)), (i.I = !1);
      } else r = nf(n, o);
      return (
        nn(r, function (u, l) {
          (i && to(i.t, u) === l) || mh(r, u, t(l));
        }),
        o === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function nf(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Oa(e);
}
function mg() {
  function e(o, u) {
    var l = i[o];
    return (
      l
        ? (l.enumerable = u)
        : (i[o] = l =
            {
              configurable: !0,
              enumerable: u,
              get: function () {
                var s = this[te];
                return ii.get(s, o);
              },
              set: function (s) {
                var a = this[te];
                ii.set(a, o, s);
              },
            }),
      l
    );
  }
  function t(o) {
    for (var u = o.length - 1; u >= 0; u--) {
      var l = o[u][te];
      if (!l.P)
        switch (l.i) {
          case 5:
            r(l) && jt(l);
            break;
          case 4:
            n(l) && jt(l);
        }
    }
  }
  function n(o) {
    for (var u = o.t, l = o.k, s = Hn(l), a = s.length - 1; a >= 0; a--) {
      var p = s[a];
      if (p !== te) {
        var h = u[p];
        if (h === void 0 && !Gt(u, p)) return !0;
        var d = l[p],
          v = d && d[te];
        if (v ? v.t !== h : !gh(d, h)) return !0;
      }
    }
    var g = !!u[te];
    return s.length !== Hn(u).length + (g ? 0 : 1);
  }
  function r(o) {
    var u = o.k;
    if (u.length !== o.t.length) return !0;
    var l = Object.getOwnPropertyDescriptor(u, u.length - 1);
    if (l && !l.get) return !0;
    for (var s = 0; s < u.length; s++) if (!u.hasOwnProperty(s)) return !0;
    return !1;
  }
  var i = {};
  wh('ES5', {
    J: function (o, u) {
      var l = Array.isArray(o),
        s = (function (p, h) {
          if (p) {
            for (var d = Array(h.length), v = 0; v < h.length; v++)
              Object.defineProperty(d, '' + v, e(v, !0));
            return d;
          }
          var g = Sh(h);
          delete g[te];
          for (var w = Hn(g), O = 0; O < w.length; O++) {
            var y = w[O];
            g[y] = e(y, p || !!g[y].enumerable);
          }
          return Object.create(Object.getPrototypeOf(h), g);
        })(l, o),
        a = {
          i: l ? 5 : 4,
          A: u ? u.A : ss(),
          P: !1,
          I: !1,
          R: {},
          l: u,
          t: o,
          k: s,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(s, te, { value: a, writable: !0 }), s;
    },
    S: function (o, u, l) {
      l
        ? at(u) && u[te].A === o && t(o.p)
        : (o.u &&
            (function s(a) {
              if (a && typeof a == 'object') {
                var p = a[te];
                if (p) {
                  var h = p.t,
                    d = p.k,
                    v = p.R,
                    g = p.i;
                  if (g === 4)
                    nn(d, function (f) {
                      f !== te &&
                        (h[f] !== void 0 || Gt(h, f)
                          ? v[f] || s(d[f])
                          : ((v[f] = !0), jt(p)));
                    }),
                      nn(h, function (f) {
                        d[f] !== void 0 || Gt(d, f) || ((v[f] = !1), jt(p));
                      });
                  else if (g === 5) {
                    if ((r(p) && (jt(p), (v.length = !0)), d.length < h.length))
                      for (var w = d.length; w < h.length; w++) v[w] = !1;
                    else for (var O = h.length; O < d.length; O++) v[O] = !0;
                    for (
                      var y = Math.min(d.length, h.length), c = 0;
                      c < y;
                      c++
                    )
                      d.hasOwnProperty(c) || (v[c] = !0),
                        v[c] === void 0 && s(d[c]);
                  }
                }
              }
            })(o.p[0]),
          t(o.p));
    },
    K: function (o) {
      return o.i === 4 ? n(o) : r(o);
    },
  });
}
function gg() {
  function e(r) {
    if (!ct(r)) return r;
    if (Array.isArray(r)) return r.map(e);
    if (xu(r))
      return new Map(
        Array.from(r.entries()).map(function (u) {
          return [u[0], e(u[1])];
        })
      );
    if (Eu(r)) return new Set(Array.from(r).map(e));
    var i = Object.create(Object.getPrototypeOf(r));
    for (var o in r) i[o] = e(r[o]);
    return Gt(r, zr) && (i[zr] = r[zr]), i;
  }
  function t(r) {
    return at(r) ? e(r) : r;
  }
  var n = 'add';
  wh('Patches', {
    $: function (r, i) {
      return (
        i.forEach(function (o) {
          for (var u = o.path, l = o.op, s = r, a = 0; a < u.length - 1; a++) {
            var p = rn(s),
              h = u[a];
            typeof h != 'string' && typeof h != 'number' && (h = '' + h),
              (p !== 0 && p !== 1) ||
                (h !== '__proto__' && h !== 'constructor') ||
                ke(24),
              typeof s == 'function' && h === 'prototype' && ke(24),
              typeof (s = to(s, h)) != 'object' && ke(15, u.join('/'));
          }
          var d = rn(s),
            v = e(o.value),
            g = u[u.length - 1];
          switch (l) {
            case 'replace':
              switch (d) {
                case 2:
                  return s.set(g, v);
                case 3:
                  ke(16);
                default:
                  return (s[g] = v);
              }
            case n:
              switch (d) {
                case 1:
                  return g === '-' ? s.push(v) : s.splice(g, 0, v);
                case 2:
                  return s.set(g, v);
                case 3:
                  return s.add(v);
                default:
                  return (s[g] = v);
              }
            case 'remove':
              switch (d) {
                case 1:
                  return s.splice(g, 1);
                case 2:
                  return s.delete(g);
                case 3:
                  return s.delete(o.value);
                default:
                  return delete s[g];
              }
            default:
              ke(17, l);
          }
        }),
        r
      );
    },
    N: function (r, i, o, u) {
      switch (r.i) {
        case 0:
        case 4:
        case 2:
          return (function (l, s, a, p) {
            var h = l.t,
              d = l.o;
            nn(l.R, function (v, g) {
              var w = to(h, v),
                O = to(d, v),
                y = g ? (Gt(h, v) ? 'replace' : n) : 'remove';
              if (w !== O || y !== 'replace') {
                var c = s.concat(v);
                a.push(
                  y === 'remove'
                    ? { op: y, path: c }
                    : { op: y, path: c, value: O }
                ),
                  p.push(
                    y === n
                      ? { op: 'remove', path: c }
                      : y === 'remove'
                      ? { op: n, path: c, value: t(w) }
                      : { op: 'replace', path: c, value: t(w) }
                  );
              }
            });
          })(r, i, o, u);
        case 5:
        case 1:
          return (function (l, s, a, p) {
            var h = l.t,
              d = l.R,
              v = l.o;
            if (v.length < h.length) {
              var g = [v, h];
              (h = g[0]), (v = g[1]);
              var w = [p, a];
              (a = w[0]), (p = w[1]);
            }
            for (var O = 0; O < h.length; O++)
              if (d[O] && v[O] !== h[O]) {
                var y = s.concat([O]);
                a.push({ op: 'replace', path: y, value: t(v[O]) }),
                  p.push({ op: 'replace', path: y, value: t(h[O]) });
              }
            for (var c = h.length; c < v.length; c++) {
              var f = s.concat([c]);
              a.push({ op: n, path: f, value: t(v[c]) });
            }
            h.length < v.length &&
              p.push({
                op: 'replace',
                path: s.concat(['length']),
                value: h.length,
              });
          })(r, i, o, u);
        case 3:
          return (function (l, s, a, p) {
            var h = l.t,
              d = l.o,
              v = 0;
            h.forEach(function (g) {
              if (!d.has(g)) {
                var w = s.concat([v]);
                a.push({ op: 'remove', path: w, value: g }),
                  p.unshift({ op: n, path: w, value: g });
              }
              v++;
            }),
              (v = 0),
              d.forEach(function (g) {
                if (!h.has(g)) {
                  var w = s.concat([v]);
                  a.push({ op: n, path: w, value: g }),
                    p.unshift({ op: 'remove', path: w, value: g });
                }
                v++;
              });
          })(r, i, o, u);
      }
    },
    M: function (r, i, o, u) {
      o.push({ op: 'replace', path: [], value: i === Ra ? void 0 : i }),
        u.push({ op: 'replace', path: [], value: r });
    },
  });
}
var rf,
  ri,
  Ta = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  wg = typeof Map < 'u',
  Sg = typeof Set < 'u',
  of = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  Ra = Ta
    ? Symbol.for('immer-nothing')
    : (((rf = {})['immer-nothing'] = !0), rf),
  zr = Ta ? Symbol.for('immer-draftable') : '__$immer_draftable',
  te = Ta ? Symbol.for('immer-state') : '__$immer_state',
  kg = '' + Object.prototype.constructor,
  Hn =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  Sh =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Hn(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  fs = {},
  ii = {
    get: function (e, t) {
      if (t === te) return e;
      var n = fn(e);
      if (!Gt(n, t))
        return (function (i, o, u) {
          var l,
            s = tf(o, u);
          return s
            ? 'value' in s
              ? s.value
              : (l = s.get) === null || l === void 0
              ? void 0
              : l.call(i.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !ct(r)
        ? r
        : r === nl(e.t, t)
        ? (rl(e), (e.o[t] = cs(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in fn(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(fn(e));
    },
    set: function (e, t, n) {
      var r = tf(fn(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var i = nl(fn(e), t),
          o = i == null ? void 0 : i[te];
        if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if (gh(n, i) && (n !== void 0 || Gt(e.t, t))) return !0;
        rl(e), jt(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        nl(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), rl(e), jt(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = fn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      ke(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      ke(12);
    },
  },
  Or = {};
nn(ii, function (e, t) {
  Or[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Or.deleteProperty = function (e, t) {
    return Or.set.call(this, e, t, void 0);
  }),
  (Or.set = function (e, t, n) {
    return ii.set.call(this, e[0], t, n, e[0]);
  });
var xg = (function () {
    function e(n) {
      var r = this;
      (this.O = of),
        (this.D = !0),
        (this.produce = function (i, o, u) {
          if (typeof i == 'function' && typeof o != 'function') {
            var l = o;
            o = i;
            var s = r;
            return function (w) {
              var O = this;
              w === void 0 && (w = l);
              for (
                var y = arguments.length, c = Array(y > 1 ? y - 1 : 0), f = 1;
                f < y;
                f++
              )
                c[f - 1] = arguments[f];
              return s.produce(w, function (m) {
                var k;
                return (k = o).call.apply(k, [O, m].concat(c));
              });
            };
          }
          var a;
          if (
            (typeof o != 'function' && ke(6),
            u !== void 0 && typeof u != 'function' && ke(7),
            ct(i))
          ) {
            var p = Zc(r),
              h = cs(r, i, void 0),
              d = !0;
            try {
              (a = o(h)), (d = !1);
            } finally {
              d ? Ao(p) : as(p);
            }
            return typeof Promise < 'u' && a instanceof Promise
              ? a.then(
                  function (w) {
                    return el(p, u), tl(w, p);
                  },
                  function (w) {
                    throw (Ao(p), w);
                  }
                )
              : (el(p, u), tl(a, p));
          }
          if (!i || typeof i != 'object') {
            if (
              ((a = o(i)) === void 0 && (a = i),
              a === Ra && (a = void 0),
              r.D && _a(a, !0),
              u)
            ) {
              var v = [],
                g = [];
              yt('Patches').M(i, a, v, g), u(v, g);
            }
            return a;
          }
          ke(21, i);
        }),
        (this.produceWithPatches = function (i, o) {
          if (typeof i == 'function')
            return function (a) {
              for (
                var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), d = 1;
                d < p;
                d++
              )
                h[d - 1] = arguments[d];
              return r.produceWithPatches(a, function (v) {
                return i.apply(void 0, [v].concat(h));
              });
            };
          var u,
            l,
            s = r.produce(i, o, function (a, p) {
              (u = a), (l = p);
            });
          return typeof Promise < 'u' && s instanceof Promise
            ? s.then(function (a) {
                return [a, u, l];
              })
            : [s, u, l];
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        ct(n) || ke(8), at(n) && (n = yg(n));
        var r = Zc(this),
          i = cs(this, n, void 0);
        return (i[te].C = !0), as(r), i;
      }),
      (t.finishDraft = function (n, r) {
        var i = n && n[te],
          o = i.A;
        return el(o, r), tl(void 0, o);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !of && ke(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var o = r[i];
          if (o.path.length === 0 && o.op === 'replace') {
            n = o.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var u = yt('Patches').$;
        return at(n)
          ? u(n, r)
          : this.produce(n, function (l) {
              return u(l, r);
            });
      }),
      e
    );
  })(),
  Be = new xg(),
  hi = Be.produce,
  kh = Be.produceWithPatches.bind(Be);
Be.setAutoFreeze.bind(Be);
Be.setUseProxies.bind(Be);
var uf = Be.applyPatches.bind(Be);
Be.createDraft.bind(Be);
Be.finishDraft.bind(Be);
function oi(e) {
  '@babel/helpers - typeof';
  return (
    (oi =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    oi(e)
  );
}
function Eg(e, t) {
  if (oi(e) !== 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (oi(r) !== 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function Cg(e) {
  var t = Eg(e, 'string');
  return oi(t) === 'symbol' ? t : String(t);
}
function Og(e, t, n) {
  return (
    (t = Cg(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function lf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function sf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lf(Object(n), !0).forEach(function (r) {
          Og(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : lf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function _e(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var af = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  il = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  Mo = {
    INIT: '@@redux/INIT' + il(),
    REPLACE: '@@redux/REPLACE' + il(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + il();
    },
  };
function _g(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function xh(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(_e(0));
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(_e(1));
    return n(xh)(e, t);
  }
  if (typeof e != 'function') throw new Error(_e(2));
  var i = e,
    o = t,
    u = [],
    l = u,
    s = !1;
  function a() {
    l === u && (l = u.slice());
  }
  function p() {
    if (s) throw new Error(_e(3));
    return o;
  }
  function h(w) {
    if (typeof w != 'function') throw new Error(_e(4));
    if (s) throw new Error(_e(5));
    var O = !0;
    return (
      a(),
      l.push(w),
      function () {
        if (O) {
          if (s) throw new Error(_e(6));
          (O = !1), a();
          var c = l.indexOf(w);
          l.splice(c, 1), (u = null);
        }
      }
    );
  }
  function d(w) {
    if (!_g(w)) throw new Error(_e(7));
    if (typeof w.type > 'u') throw new Error(_e(8));
    if (s) throw new Error(_e(9));
    try {
      (s = !0), (o = i(o, w));
    } finally {
      s = !1;
    }
    for (var O = (u = l), y = 0; y < O.length; y++) {
      var c = O[y];
      c();
    }
    return w;
  }
  function v(w) {
    if (typeof w != 'function') throw new Error(_e(10));
    (i = w), d({ type: Mo.REPLACE });
  }
  function g() {
    var w,
      O = h;
    return (
      (w = {
        subscribe: function (c) {
          if (typeof c != 'object' || c === null) throw new Error(_e(11));
          function f() {
            c.next && c.next(p());
          }
          f();
          var m = O(f);
          return { unsubscribe: m };
        },
      }),
      (w[af] = function () {
        return this;
      }),
      w
    );
  }
  return (
    d({ type: Mo.INIT }),
    (r = { dispatch: d, subscribe: h, getState: p, replaceReducer: v }),
    (r[af] = g),
    r
  );
}
function Pg(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Mo.INIT });
    if (typeof r > 'u') throw new Error(_e(12));
    if (typeof n(void 0, { type: Mo.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(_e(13));
  });
}
function Eh(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == 'function' && (n[i] = e[i]);
  }
  var o = Object.keys(n),
    u;
  try {
    Pg(n);
  } catch (l) {
    u = l;
  }
  return function (s, a) {
    if ((s === void 0 && (s = {}), u)) throw u;
    for (var p = !1, h = {}, d = 0; d < o.length; d++) {
      var v = o[d],
        g = n[v],
        w = s[v],
        O = g(w, a);
      if (typeof O > 'u') throw (a && a.type, new Error(_e(14)));
      (h[v] = O), (p = p || O !== w);
    }
    return (p = p || o.length !== Object.keys(s).length), p ? h : s;
  };
}
function Do() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function Tg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        o = function () {
          throw new Error(_e(15));
        },
        u = {
          getState: i.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        l = t.map(function (s) {
          return s(u);
        });
      return (
        (o = Do.apply(void 0, l)(i.dispatch)),
        sf(sf({}, i), {}, { dispatch: o })
      );
    };
  };
}
var Lo = 'NOT_FOUND';
function Rg(e) {
  var t;
  return {
    get: function (r) {
      return t && e(t.key, r) ? t.value : Lo;
    },
    put: function (r, i) {
      t = { key: r, value: i };
    },
    getEntries: function () {
      return t ? [t] : [];
    },
    clear: function () {
      t = void 0;
    },
  };
}
function Ng(e, t) {
  var n = [];
  function r(l) {
    var s = n.findIndex(function (p) {
      return t(l, p.key);
    });
    if (s > -1) {
      var a = n[s];
      return s > 0 && (n.splice(s, 1), n.unshift(a)), a.value;
    }
    return Lo;
  }
  function i(l, s) {
    r(l) === Lo && (n.unshift({ key: l, value: s }), n.length > e && n.pop());
  }
  function o() {
    return n;
  }
  function u() {
    n = [];
  }
  return { get: r, put: i, getEntries: o, clear: u };
}
var Ag = function (t, n) {
  return t === n;
};
function bg(e) {
  return function (n, r) {
    if (n === null || r === null || n.length !== r.length) return !1;
    for (var i = n.length, o = 0; o < i; o++) if (!e(n[o], r[o])) return !1;
    return !0;
  };
}
function ds(e, t) {
  var n = typeof t == 'object' ? t : { equalityCheck: t },
    r = n.equalityCheck,
    i = r === void 0 ? Ag : r,
    o = n.maxSize,
    u = o === void 0 ? 1 : o,
    l = n.resultEqualityCheck,
    s = bg(i),
    a = u === 1 ? Rg(s) : Ng(u, s);
  function p() {
    var h = a.get(arguments);
    if (h === Lo) {
      if (((h = e.apply(null, arguments)), l)) {
        var d = a.getEntries(),
          v = d.find(function (g) {
            return l(g.value, h);
          });
        v && (h = v.value);
      }
      a.put(arguments, h);
    }
    return h;
  }
  return (
    (p.clearCache = function () {
      return a.clear();
    }),
    p
  );
}
function Ig(e) {
  var t = Array.isArray(e[0]) ? e[0] : e;
  if (
    !t.every(function (r) {
      return typeof r == 'function';
    })
  ) {
    var n = t
      .map(function (r) {
        return typeof r == 'function'
          ? 'function ' + (r.name || 'unnamed') + '()'
          : typeof r;
      })
      .join(', ');
    throw new Error(
      'createSelector expects all input-selectors to be functions, but received the following types: [' +
        n +
        ']'
    );
  }
  return t;
}
function Mg(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = function () {
    for (var u = arguments.length, l = new Array(u), s = 0; s < u; s++)
      l[s] = arguments[s];
    var a = 0,
      p,
      h = { memoizeOptions: void 0 },
      d = l.pop();
    if (
      (typeof d == 'object' && ((h = d), (d = l.pop())), typeof d != 'function')
    )
      throw new Error(
        'createSelector expects an output function after the inputs, but received: [' +
          typeof d +
          ']'
      );
    var v = h,
      g = v.memoizeOptions,
      w = g === void 0 ? n : g,
      O = Array.isArray(w) ? w : [w],
      y = Ig(l),
      c = e.apply(
        void 0,
        [
          function () {
            return a++, d.apply(null, arguments);
          },
        ].concat(O)
      ),
      f = e(function () {
        for (var k = [], S = y.length, x = 0; x < S; x++)
          k.push(y[x].apply(null, arguments));
        return (p = c.apply(null, k)), p;
      });
    return (
      Object.assign(f, {
        resultFunc: d,
        memoizedResultFunc: c,
        dependencies: y,
        lastResult: function () {
          return p;
        },
        recomputations: function () {
          return a;
        },
        resetRecomputations: function () {
          return (a = 0);
        },
      }),
      f
    );
  };
  return i;
}
var $r = Mg(ds);
function Ch(e) {
  var t = function (r) {
    var i = r.dispatch,
      o = r.getState;
    return function (u) {
      return function (l) {
        return typeof l == 'function' ? l(i, o, e) : u(l);
      };
    };
  };
  return t;
}
var Oh = Ch();
Oh.withExtraArgument = Ch;
const cf = Oh;
var _h =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError(
            'Class extends value ' + String(n) + ' is not a constructor or null'
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  Dg =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        o,
        u;
      return (
        (u = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == 'function' &&
          (u[Symbol.iterator] = function () {
            return this;
          }),
        u
      );
      function l(a) {
        return function (p) {
          return s([a, p]);
        };
      }
      function s(a) {
        if (r) throw new TypeError('Generator is already executing.');
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (o =
                  a[0] & 2
                    ? i.return
                    : a[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, a[1])).done)
            )
              return o;
            switch (((i = 0), o && (a = [a[0] & 2, o.value]), a[0])) {
              case 0:
              case 1:
                o = a;
                break;
              case 4:
                return n.label++, { value: a[1], done: !1 };
              case 5:
                n.label++, (i = a[1]), (a = [0]);
                continue;
              case 7:
                (a = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (a[0] === 6 || a[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (a[0] === 3 && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                  n.label = a[1];
                  break;
                }
                if (a[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = a);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(a);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            a = t.call(e, n);
          } catch (p) {
            (a = [6, p]), (i = 0);
          } finally {
            r = o = 0;
          }
        if (a[0] & 5) throw a[1];
        return { value: a[0] ? a[1] : void 0, done: !0 };
      }
    },
  rr =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  Lg = Object.defineProperty,
  zg = Object.defineProperties,
  $g = Object.getOwnPropertyDescriptors,
  ff = Object.getOwnPropertySymbols,
  Fg = Object.prototype.hasOwnProperty,
  jg = Object.prototype.propertyIsEnumerable,
  df = function (e, t, n) {
    return t in e
      ? Lg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Jt = function (e, t) {
    for (var n in t || (t = {})) Fg.call(t, n) && df(e, n, t[n]);
    if (ff)
      for (var r = 0, i = ff(t); r < i.length; r++) {
        var n = i[r];
        jg.call(t, n) && df(e, n, t[n]);
      }
    return e;
  },
  ol = function (e, t) {
    return zg(e, $g(t));
  },
  qg = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (s) {
          try {
            l(n.next(s));
          } catch (a) {
            i(a);
          }
        },
        u = function (s) {
          try {
            l(n.throw(s));
          } catch (a) {
            i(a);
          }
        },
        l = function (s) {
          return s.done ? r(s.value) : Promise.resolve(s.value).then(o, u);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  Qg =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? Do
              : Do.apply(null, arguments);
        };
function ir(e) {
  if (typeof e != 'object' || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var Bg = (function (e) {
    _h(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, rr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, rr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  Ug = (function (e) {
    _h(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var i = e.apply(this, n) || this;
      return Object.setPrototypeOf(i, t.prototype), i;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, rr([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, rr([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function ps(e) {
  return ct(e) ? hi(e, function () {}) : e;
}
function Vg(e) {
  return typeof e == 'boolean';
}
function Wg() {
  return function (t) {
    return Hg(t);
  };
}
function Hg(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new Bg();
  return (
    n && (Vg(n) ? r.push(cf) : r.push(cf.withExtraArgument(n.extraArgument))), r
  );
}
var Kg = !0;
function Yg(e) {
  var t = Wg(),
    n = e || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    o = n.middleware,
    u = o === void 0 ? t() : o,
    l = n.devTools,
    s = l === void 0 ? !0 : l,
    a = n.preloadedState,
    p = a === void 0 ? void 0 : a,
    h = n.enhancers,
    d = h === void 0 ? void 0 : h,
    v;
  if (typeof i == 'function') v = i;
  else if (ir(i)) v = Eh(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var g = u;
  typeof g == 'function' && (g = g(t));
  var w = Tg.apply(void 0, g),
    O = Do;
  s && (O = Qg(Jt({ trace: !Kg }, typeof s == 'object' && s)));
  var y = new Ug(w),
    c = y;
  Array.isArray(d) ? (c = rr([w], d)) : typeof d == 'function' && (c = d(y));
  var f = O.apply(void 0, c);
  return xh(v, p, f);
}
function $e(e, t) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (t) {
      var o = t.apply(void 0, r);
      if (!o) throw new Error('prepareAction did not return an object');
      return Jt(
        Jt({ type: e, payload: o.payload }, 'meta' in o && { meta: o.meta }),
        'error' in o && { error: o.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return '' + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function Ph(e) {
  var t = {},
    n = [],
    r,
    i = {
      addCase: function (o, u) {
        var l = typeof o == 'string' ? o : o.type;
        if (l in t)
          throw new Error(
            'addCase cannot be called with two reducers for the same action type'
          );
        return (t[l] = u), i;
      },
      addMatcher: function (o, u) {
        return n.push({ matcher: o, reducer: u }), i;
      },
      addDefaultCase: function (o) {
        return (r = o), i;
      },
    };
  return e(i), [t, n, r];
}
function Xg(e) {
  return typeof e == 'function';
}
function Gg(e, t, n, r) {
  n === void 0 && (n = []);
  var i = typeof t == 'function' ? Ph(t) : [t, n, r],
    o = i[0],
    u = i[1],
    l = i[2],
    s;
  if (Xg(e))
    s = function () {
      return ps(e());
    };
  else {
    var a = ps(e);
    s = function () {
      return a;
    };
  }
  function p(h, d) {
    h === void 0 && (h = s());
    var v = rr(
      [o[d.type]],
      u
        .filter(function (g) {
          var w = g.matcher;
          return w(d);
        })
        .map(function (g) {
          var w = g.reducer;
          return w;
        })
    );
    return (
      v.filter(function (g) {
        return !!g;
      }).length === 0 && (v = [l]),
      v.reduce(function (g, w) {
        if (w)
          if (at(g)) {
            var O = g,
              y = w(O, d);
            return y === void 0 ? g : y;
          } else {
            if (ct(g))
              return hi(g, function (c) {
                return w(c, d);
              });
            var y = w(g, d);
            if (y === void 0) {
              if (g === null) return g;
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              );
            }
            return y;
          }
        return g;
      }, h)
    );
  }
  return (p.getInitialState = s), p;
}
function Jg(e, t) {
  return e + '/' + t;
}
function zt(e) {
  var t = e.name;
  if (!t) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var n =
      typeof e.initialState == 'function' ? e.initialState : ps(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    o = {},
    u = {},
    l = {};
  i.forEach(function (p) {
    var h = r[p],
      d = Jg(t, p),
      v,
      g;
    'reducer' in h ? ((v = h.reducer), (g = h.prepare)) : (v = h),
      (o[p] = v),
      (u[d] = v),
      (l[p] = g ? $e(d, g) : $e(d));
  });
  function s() {
    var p =
        typeof e.extraReducers == 'function'
          ? Ph(e.extraReducers)
          : [e.extraReducers],
      h = p[0],
      d = h === void 0 ? {} : h,
      v = p[1],
      g = v === void 0 ? [] : v,
      w = p[2],
      O = w === void 0 ? void 0 : w,
      y = Jt(Jt({}, d), u);
    return Gg(n, function (c) {
      for (var f in y) c.addCase(f, y[f]);
      for (var m = 0, k = g; m < k.length; m++) {
        var S = k[m];
        c.addMatcher(S.matcher, S.reducer);
      }
      O && c.addDefaultCase(O);
    });
  }
  var a;
  return {
    name: t,
    reducer: function (p, h) {
      return a || (a = s()), a(p, h);
    },
    actions: l,
    caseReducers: o,
    getInitialState: function () {
      return a || (a = s()), a.getInitialState();
    },
  };
}
var Zg = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  Th = function (e) {
    e === void 0 && (e = 21);
    for (var t = '', n = e; n--; ) t += Zg[(Math.random() * 64) | 0];
    return t;
  },
  e0 = ['name', 'message', 'stack', 'code'],
  ul = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  pf = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  t0 = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, n = 0, r = e0; n < r.length; n++) {
        var i = r[n];
        typeof e[i] == 'string' && (t[i] = e[i]);
      }
      return t;
    }
    return { message: String(e) };
  },
  hf = (function () {
    function e(t, n, r) {
      var i = $e(t + '/fulfilled', function (a, p, h, d) {
          return {
            payload: a,
            meta: ol(Jt({}, d || {}), {
              arg: h,
              requestId: p,
              requestStatus: 'fulfilled',
            }),
          };
        }),
        o = $e(t + '/pending', function (a, p, h) {
          return {
            payload: void 0,
            meta: ol(Jt({}, h || {}), {
              arg: p,
              requestId: a,
              requestStatus: 'pending',
            }),
          };
        }),
        u = $e(t + '/rejected', function (a, p, h, d, v) {
          return {
            payload: d,
            error: ((r && r.serializeError) || t0)(a || 'Rejected'),
            meta: ol(Jt({}, v || {}), {
              arg: h,
              requestId: p,
              rejectedWithValue: !!d,
              requestStatus: 'rejected',
              aborted: (a == null ? void 0 : a.name) === 'AbortError',
              condition: (a == null ? void 0 : a.name) === 'ConditionError',
            }),
          };
        }),
        l =
          typeof AbortController < 'u'
            ? AbortController
            : (function () {
                function a() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (a.prototype.abort = function () {}), a;
              })();
      function s(a) {
        return function (p, h, d) {
          var v = r != null && r.idGenerator ? r.idGenerator(a) : Th(),
            g = new l(),
            w;
          function O(c) {
            (w = c), g.abort();
          }
          var y = (function () {
            return qg(this, null, function () {
              var c, f, m, k, S, x, C;
              return Dg(this, function (_) {
                switch (_.label) {
                  case 0:
                    return (
                      _.trys.push([0, 4, , 5]),
                      (k =
                        (c = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : c.call(r, a, { getState: h, extra: d })),
                      r0(k) ? [4, k] : [3, 2]
                    );
                  case 1:
                    (k = _.sent()), (_.label = 2);
                  case 2:
                    if (k === !1 || g.signal.aborted)
                      throw {
                        name: 'ConditionError',
                        message:
                          'Aborted due to condition callback returning false.',
                      };
                    return (
                      (S = new Promise(function (E, P) {
                        return g.signal.addEventListener('abort', function () {
                          return P({
                            name: 'AbortError',
                            message: w || 'Aborted',
                          });
                        });
                      })),
                      p(
                        o(
                          v,
                          a,
                          (f = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : f.call(
                                r,
                                { requestId: v, arg: a },
                                { getState: h, extra: d }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          S,
                          Promise.resolve(
                            n(a, {
                              dispatch: p,
                              getState: h,
                              extra: d,
                              requestId: v,
                              signal: g.signal,
                              abort: O,
                              rejectWithValue: function (E, P) {
                                return new ul(E, P);
                              },
                              fulfillWithValue: function (E, P) {
                                return new pf(E, P);
                              },
                            })
                          ).then(function (E) {
                            if (E instanceof ul) throw E;
                            return E instanceof pf
                              ? i(E.payload, v, a, E.meta)
                              : i(E, v, a);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (m = _.sent()), [3, 5];
                  case 4:
                    return (
                      (x = _.sent()),
                      (m =
                        x instanceof ul
                          ? u(null, v, a, x.payload, x.meta)
                          : u(x, v, a)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (C =
                        r &&
                        !r.dispatchConditionRejection &&
                        u.match(m) &&
                        m.meta.condition),
                      C || p(m),
                      [2, m]
                    );
                }
              });
            });
          })();
          return Object.assign(y, {
            abort: O,
            requestId: v,
            arg: a,
            unwrap: function () {
              return y.then(n0);
            },
          });
        };
      }
      return Object.assign(s, {
        pending: o,
        rejected: u,
        fulfilled: i,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function n0(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function r0(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function';
}
var i0 = function (e) {
    return e && typeof e.match == 'function';
  },
  Rh = function (e, t) {
    return i0(e) ? e.match(t) : e(t);
  };
function ar() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.some(function (r) {
      return Rh(r, n);
    });
  };
}
function Fr() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.every(function (r) {
      return Rh(r, n);
    });
  };
}
function Cu(e, t) {
  if (!e || !e.meta) return !1;
  var n = typeof e.meta.requestId == 'string',
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function vi(e) {
  return (
    typeof e[0] == 'function' &&
    'pending' in e[0] &&
    'fulfilled' in e[0] &&
    'rejected' in e[0]
  );
}
function Na() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Cu(n, ['pending']);
      }
    : vi(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.pending;
          }),
          i = ar.apply(void 0, r);
        return i(n);
      }
    : Na()(e[0]);
}
function ui() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Cu(n, ['rejected']);
      }
    : vi(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.rejected;
          }),
          i = ar.apply(void 0, r);
        return i(n);
      }
    : ui()(e[0]);
}
function Ou() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = function (r) {
    return r && r.meta && r.meta.rejectedWithValue;
  };
  return e.length === 0
    ? function (r) {
        var i = Fr(ui.apply(void 0, e), n);
        return i(r);
      }
    : vi(e)
    ? function (r) {
        var i = Fr(ui.apply(void 0, e), n);
        return i(r);
      }
    : Ou()(e[0]);
}
function On() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Cu(n, ['fulfilled']);
      }
    : vi(e)
    ? function (n) {
        var r = e.map(function (o) {
            return o.fulfilled;
          }),
          i = ar.apply(void 0, r);
        return i(n);
      }
    : On()(e[0]);
}
function hs() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Cu(n, ['pending', 'fulfilled', 'rejected']);
      }
    : vi(e)
    ? function (n) {
        for (var r = [], i = 0, o = e; i < o.length; i++) {
          var u = o[i];
          r.push(u.pending, u.rejected, u.fulfilled);
        }
        var l = ar.apply(void 0, r);
        return l(n);
      }
    : hs()(e[0]);
}
var Aa = 'listenerMiddleware';
$e(Aa + '/add');
$e(Aa + '/removeAll');
$e(Aa + '/remove');
var _r = 'RTK_autoBatch',
  ll = function () {
    return function (e) {
      var t;
      return { payload: e, meta: ((t = {}), (t[_r] = !0), t) };
    };
  },
  vf;
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(
    typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis
  );
mg();
const o0 = 'http://192.168.31.95:5050',
  u0 = { url: o0, messageData: [], allFiles: [] },
  Nh = zt({
    name: 'chat/chatSlice',
    initialState: u0,
    reducers: {
      addChatData: function (e, t) {
        const n = {
          ...t.payload,
          id: (function () {
            const i = e.messageData.reduce(function (o, u) {
              return Math.max(o.id), u.id;
            }, -1);
            return i > 0 ? i + 1 : 1;
          })(),
        };
        !e.messageData.some((i) => i.id === n.id) && e.messageData.push(n);
      },
      removeSingleChat: function (e, t) {
        const n = t.payload.id,
          r = e.messageData.find((o) => o.id === n),
          i = e.messageData.indexOf(r);
        i !== -1 && e.messageData.splice(i, 1);
      },
      getAllFilesData: function (e, t) {
        e.allFiles = t.payload;
      },
      getAllLatestFilesData: function (e, t) {
        const n = t.payload._id;
        !e.allFiles.some((i) => i._id === n) && e.allFiles.push(t.payload);
      },
      deleteFileData: function (e, t) {
        const n = t.payload,
          r = e.allFiles.find((i) => i._id === n);
        if (r) {
          const i = e.allFiles.indexOf(r);
          if (i !== -1) {
            e.allFiles.splice(i, 1);
            return;
          }
        }
      },
    },
  }),
  l0 = Nh.reducer,
  {
    addChatData: s0,
    removeSingleChat: a0,
    getAllFilesData: c0,
    getAllLatestFilesData: f0,
    deleteFileData: d0,
  } = Nh.actions,
  gt = Object.create(null);
gt.open = '0';
gt.close = '1';
gt.ping = '2';
gt.pong = '3';
gt.message = '4';
gt.upgrade = '5';
gt.noop = '6';
const no = Object.create(null);
Object.keys(gt).forEach((e) => {
  no[gt[e]] = e;
});
const vs = { type: 'error', data: 'parser error' },
  Ah =
    typeof Blob == 'function' ||
    (typeof Blob < 'u' &&
      Object.prototype.toString.call(Blob) === '[object BlobConstructor]'),
  bh = typeof ArrayBuffer == 'function',
  Ih = (e) =>
    typeof ArrayBuffer.isView == 'function'
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  ba = ({ type: e, data: t }, n, r) =>
    Ah && t instanceof Blob
      ? n
        ? r(t)
        : yf(t, r)
      : bh && (t instanceof ArrayBuffer || Ih(t))
      ? n
        ? r(t)
        : yf(new Blob([t]), r)
      : r(gt[e] + (t || '')),
  yf = (e, t) => {
    const n = new FileReader();
    return (
      (n.onload = function () {
        const r = n.result.split(',')[1];
        t('b' + (r || ''));
      }),
      n.readAsDataURL(e)
    );
  };
function mf(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let sl;
function p0(e, t) {
  if (Ah && e.data instanceof Blob)
    return e.data.arrayBuffer().then(mf).then(t);
  if (bh && (e.data instanceof ArrayBuffer || Ih(e.data))) return t(mf(e.data));
  ba(e, !1, (n) => {
    sl || (sl = new TextEncoder()), t(sl.encode(n));
  });
}
const gf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  Pr = typeof Uint8Array > 'u' ? [] : new Uint8Array(256);
for (let e = 0; e < gf.length; e++) Pr[gf.charCodeAt(e)] = e;
const h0 = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      o,
      u,
      l,
      s;
    e[e.length - 1] === '=' && (t--, e[e.length - 2] === '=' && t--);
    const a = new ArrayBuffer(t),
      p = new Uint8Array(a);
    for (r = 0; r < n; r += 4)
      (o = Pr[e.charCodeAt(r)]),
        (u = Pr[e.charCodeAt(r + 1)]),
        (l = Pr[e.charCodeAt(r + 2)]),
        (s = Pr[e.charCodeAt(r + 3)]),
        (p[i++] = (o << 2) | (u >> 4)),
        (p[i++] = ((u & 15) << 4) | (l >> 2)),
        (p[i++] = ((l & 3) << 6) | (s & 63));
    return a;
  },
  v0 = typeof ArrayBuffer == 'function',
  Ia = (e, t) => {
    if (typeof e != 'string') return { type: 'message', data: Mh(e, t) };
    const n = e.charAt(0);
    return n === 'b'
      ? { type: 'message', data: y0(e.substring(1), t) }
      : no[n]
      ? e.length > 1
        ? { type: no[n], data: e.substring(1) }
        : { type: no[n] }
      : vs;
  },
  y0 = (e, t) => {
    if (v0) {
      const n = h0(e);
      return Mh(n, t);
    } else return { base64: !0, data: e };
  },
  Mh = (e, t) => {
    switch (t) {
      case 'blob':
        return e instanceof Blob ? e : new Blob([e]);
      case 'arraybuffer':
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  Dh = String.fromCharCode(30),
  m0 = (e, t) => {
    const n = e.length,
      r = new Array(n);
    let i = 0;
    e.forEach((o, u) => {
      ba(o, !1, (l) => {
        (r[u] = l), ++i === n && t(r.join(Dh));
      });
    });
  },
  g0 = (e, t) => {
    const n = e.split(Dh),
      r = [];
    for (let i = 0; i < n.length; i++) {
      const o = Ia(n[i], t);
      if ((r.push(o), o.type === 'error')) break;
    }
    return r;
  };
function w0() {
  return new TransformStream({
    transform(e, t) {
      p0(e, (n) => {
        const r = n.length;
        let i;
        if (r < 126)
          (i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, r);
        else if (r < 65536) {
          i = new Uint8Array(3);
          const o = new DataView(i.buffer);
          o.setUint8(0, 126), o.setUint16(1, r);
        } else {
          i = new Uint8Array(9);
          const o = new DataView(i.buffer);
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != 'string' && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(n);
      });
    },
  });
}
let al;
function Di(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Li(e, t) {
  if (e[0].length === t) return e.shift();
  const n = new Uint8Array(t);
  let r = 0;
  for (let i = 0; i < t; i++)
    (n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
}
function S0(e, t) {
  al || (al = new TextDecoder());
  const n = [];
  let r = 0,
    i = -1,
    o = !1;
  return new TransformStream({
    transform(u, l) {
      for (n.push(u); ; ) {
        if (r === 0) {
          if (Di(n) < 1) break;
          const s = Li(n, 1);
          (o = (s[0] & 128) === 128),
            (i = s[0] & 127),
            i < 126 ? (r = 3) : i === 126 ? (r = 1) : (r = 2);
        } else if (r === 1) {
          if (Di(n) < 2) break;
          const s = Li(n, 2);
          (i = new DataView(s.buffer, s.byteOffset, s.length).getUint16(0)),
            (r = 3);
        } else if (r === 2) {
          if (Di(n) < 8) break;
          const s = Li(n, 8),
            a = new DataView(s.buffer, s.byteOffset, s.length),
            p = a.getUint32(0);
          if (p > Math.pow(2, 53 - 32) - 1) {
            l.enqueue(vs);
            break;
          }
          (i = p * Math.pow(2, 32) + a.getUint32(4)), (r = 3);
        } else {
          if (Di(n) < i) break;
          const s = Li(n, i);
          l.enqueue(Ia(o ? s : al.decode(s), t)), (r = 0);
        }
        if (i === 0 || i > e) {
          l.enqueue(vs);
          break;
        }
      }
    },
  });
}
const Lh = 4;
function pe(e) {
  if (e) return k0(e);
}
function k0(e) {
  for (var t in pe.prototype) e[t] = pe.prototype[t];
  return e;
}
pe.prototype.on = pe.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks['$' + e] = this._callbacks['$' + e] || []).push(t),
    this
  );
};
pe.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return (n.fn = t), this.on(e, n), this;
};
pe.prototype.off =
  pe.prototype.removeListener =
  pe.prototype.removeAllListeners =
  pe.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var n = this._callbacks['$' + e];
      if (!n) return this;
      if (arguments.length == 1) return delete this._callbacks['$' + e], this;
      for (var r, i = 0; i < n.length; i++)
        if (((r = n[i]), r === t || r.fn === t)) {
          n.splice(i, 1);
          break;
        }
      return n.length === 0 && delete this._callbacks['$' + e], this;
    };
pe.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks['$' + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r];
  if (n) {
    n = n.slice(0);
    for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
  }
  return this;
};
pe.prototype.emitReserved = pe.prototype.emit;
pe.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks['$' + e] || []
  );
};
pe.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length;
};
const Ye = (() =>
  typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : Function('return this')())();
function zh(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const x0 = Ye.setTimeout,
  E0 = Ye.clearTimeout;
function _u(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = x0.bind(Ye)), (e.clearTimeoutFn = E0.bind(Ye)))
    : ((e.setTimeoutFn = Ye.setTimeout.bind(Ye)),
      (e.clearTimeoutFn = Ye.clearTimeout.bind(Ye)));
}
const C0 = 1.33;
function O0(e) {
  return typeof e == 'string'
    ? _0(e)
    : Math.ceil((e.byteLength || e.size) * C0);
}
function _0(e) {
  let t = 0,
    n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
        ? (n += 2)
        : t < 55296 || t >= 57344
        ? (n += 3)
        : (r++, (n += 4));
  return n;
}
function P0(e) {
  let t = '';
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += '&'),
      (t += encodeURIComponent(n) + '=' + encodeURIComponent(e[n])));
  return t;
}
function T0(e) {
  let t = {},
    n = e.split('&');
  for (let r = 0, i = n.length; r < i; r++) {
    let o = n[r].split('=');
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
  }
  return t;
}
class R0 extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = 'TransportError');
  }
}
class Ma extends pe {
  constructor(t) {
    super(),
      (this.writable = !1),
      _u(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket);
  }
  onError(t, n, r) {
    return super.emitReserved('error', new R0(t, n, r)), this;
  }
  open() {
    return (this.readyState = 'opening'), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === 'opening' || this.readyState === 'open') &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === 'open' && this.write(t);
  }
  onOpen() {
    (this.readyState = 'open'),
      (this.writable = !0),
      super.emitReserved('open');
  }
  onData(t) {
    const n = Ia(t, this.socket.binaryType);
    this.onPacket(n);
  }
  onPacket(t) {
    super.emitReserved('packet', t);
  }
  onClose(t) {
    (this.readyState = 'closed'), super.emitReserved('close', t);
  }
  pause(t) {}
  createUri(t, n = {}) {
    return (
      t +
      '://' +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(n)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(':') === -1 ? t : '[' + t + ']';
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ':' + this.opts.port
      : '';
  }
  _query(t) {
    const n = P0(t);
    return n.length ? '?' + n : '';
  }
}
const $h =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(
      ''
    ),
  ys = 64,
  N0 = {};
let wf = 0,
  zi = 0,
  Sf;
function kf(e) {
  let t = '';
  do (t = $h[e % ys] + t), (e = Math.floor(e / ys));
  while (e > 0);
  return t;
}
function Fh() {
  const e = kf(+new Date());
  return e !== Sf ? ((wf = 0), (Sf = e)) : e + '.' + kf(wf++);
}
for (; zi < ys; zi++) N0[$h[zi]] = zi;
let jh = !1;
try {
  jh = typeof XMLHttpRequest < 'u' && 'withCredentials' in new XMLHttpRequest();
} catch {}
const A0 = jh;
function qh(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < 'u' && (!t || A0)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new Ye[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch {}
}
function b0() {}
const I0 = (function () {
  return new qh({ xdomain: !1 }).responseType != null;
})();
class M0 extends Ma {
  constructor(t) {
    if ((super(t), (this.polling = !1), typeof location < 'u')) {
      const r = location.protocol === 'https:';
      let i = location.port;
      i || (i = r ? '443' : '80'),
        (this.xd =
          (typeof location < 'u' && t.hostname !== location.hostname) ||
          i !== t.port);
    }
    const n = t && t.forceBase64;
    (this.supportsBinary = I0 && !n),
      this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return 'polling';
  }
  doOpen() {
    this.poll();
  }
  pause(t) {
    this.readyState = 'pausing';
    const n = () => {
      (this.readyState = 'paused'), t();
    };
    if (this.polling || !this.writable) {
      let r = 0;
      this.polling &&
        (r++,
        this.once('pollComplete', function () {
          --r || n();
        })),
        this.writable ||
          (r++,
          this.once('drain', function () {
            --r || n();
          }));
    } else n();
  }
  poll() {
    (this.polling = !0), this.doPoll(), this.emitReserved('poll');
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === 'opening' && r.type === 'open' && this.onOpen(),
        r.type === 'close')
      )
        return (
          this.onClose({ description: 'transport closed by the server' }), !1
        );
      this.onPacket(r);
    };
    g0(t, this.socket.binaryType).forEach(n),
      this.readyState !== 'closed' &&
        ((this.polling = !1),
        this.emitReserved('pollComplete'),
        this.readyState === 'open' && this.poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: 'close' }]);
    };
    this.readyState === 'open' ? t() : this.once('open', t);
  }
  write(t) {
    (this.writable = !1),
      m0(t, (n) => {
        this.doWrite(n, () => {
          (this.writable = !0), this.emitReserved('drain');
        });
      });
  }
  uri() {
    const t = this.opts.secure ? 'https' : 'http',
      n = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (n[this.opts.timestampParam] = Fh()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts),
      new mt(this.uri(), t)
    );
  }
  doWrite(t, n) {
    const r = this.request({ method: 'POST', data: t });
    r.on('success', n),
      r.on('error', (i, o) => {
        this.onError('xhr post error', i, o);
      });
  }
  doPoll() {
    const t = this.request();
    t.on('data', this.onData.bind(this)),
      t.on('error', (n, r) => {
        this.onError('xhr poll error', n, r);
      }),
      (this.pollXhr = t);
  }
}
class mt extends pe {
  constructor(t, n) {
    super(),
      _u(this, n),
      (this.opts = n),
      (this.method = n.method || 'GET'),
      (this.uri = t),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create();
  }
  create() {
    var t;
    const n = zh(
      this.opts,
      'agent',
      'pfx',
      'key',
      'passphrase',
      'cert',
      'ca',
      'ciphers',
      'rejectUnauthorized',
      'autoUnref'
    );
    n.xdomain = !!this.opts.xd;
    const r = (this.xhr = new qh(n));
    try {
      r.open(this.method, this.uri, !0);
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let i in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(i) &&
              r.setRequestHeader(i, this.opts.extraHeaders[i]);
        }
      } catch {}
      if (this.method === 'POST')
        try {
          r.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        } catch {}
      try {
        r.setRequestHeader('Accept', '*/*');
      } catch {}
      (t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        'withCredentials' in r &&
          (r.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout),
        (r.onreadystatechange = () => {
          var i;
          r.readyState === 3 &&
            ((i = this.opts.cookieJar) === null ||
              i === void 0 ||
              i.parseCookies(r)),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this.onLoad()
                : this.setTimeoutFn(() => {
                    this.onError(typeof r.status == 'number' ? r.status : 0);
                  }, 0));
        }),
        r.send(this.data);
    } catch (i) {
      this.setTimeoutFn(() => {
        this.onError(i);
      }, 0);
      return;
    }
    typeof document < 'u' &&
      ((this.index = mt.requestsCount++), (mt.requests[this.index] = this));
  }
  onError(t) {
    this.emitReserved('error', t, this.xhr), this.cleanup(!0);
  }
  cleanup(t) {
    if (!(typeof this.xhr > 'u' || this.xhr === null)) {
      if (((this.xhr.onreadystatechange = b0), t))
        try {
          this.xhr.abort();
        } catch {}
      typeof document < 'u' && delete mt.requests[this.index],
        (this.xhr = null);
    }
  }
  onLoad() {
    const t = this.xhr.responseText;
    t !== null &&
      (this.emitReserved('data', t),
      this.emitReserved('success'),
      this.cleanup());
  }
  abort() {
    this.cleanup();
  }
}
mt.requestsCount = 0;
mt.requests = {};
if (typeof document < 'u') {
  if (typeof attachEvent == 'function') attachEvent('onunload', xf);
  else if (typeof addEventListener == 'function') {
    const e = 'onpagehide' in Ye ? 'pagehide' : 'unload';
    addEventListener(e, xf, !1);
  }
}
function xf() {
  for (let e in mt.requests)
    mt.requests.hasOwnProperty(e) && mt.requests[e].abort();
}
const Da = (() =>
    typeof Promise == 'function' && typeof Promise.resolve == 'function'
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0))(),
  $i = Ye.WebSocket || Ye.MozWebSocket,
  Ef = !0,
  D0 = 'arraybuffer',
  Cf =
    typeof navigator < 'u' &&
    typeof navigator.product == 'string' &&
    navigator.product.toLowerCase() === 'reactnative';
class L0 extends Ma {
  constructor(t) {
    super(t), (this.supportsBinary = !t.forceBase64);
  }
  get name() {
    return 'websocket';
  }
  doOpen() {
    if (!this.check()) return;
    const t = this.uri(),
      n = this.opts.protocols,
      r = Cf
        ? {}
        : zh(
            this.opts,
            'agent',
            'perMessageDeflate',
            'pfx',
            'key',
            'passphrase',
            'cert',
            'ca',
            'ciphers',
            'rejectUnauthorized',
            'localAddress',
            'protocolVersion',
            'origin',
            'maxPayload',
            'family',
            'checkServerIdentity'
          );
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = Ef && !Cf ? (n ? new $i(t, n) : new $i(t)) : new $i(t, n, r);
    } catch (i) {
      return this.emitReserved('error', i);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: 'websocket connection closed',
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError('websocket error', t));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      ba(r, this.supportsBinary, (o) => {
        const u = {};
        try {
          Ef && this.ws.send(o);
        } catch {}
        i &&
          Da(() => {
            (this.writable = !0), this.emitReserved('drain');
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < 'u' && (this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? 'wss' : 'ws',
      n = this.query || {};
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = Fh()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    );
  }
  check() {
    return !!$i;
  }
}
class z0 extends Ma {
  get name() {
    return 'webtransport';
  }
  doOpen() {
    typeof WebTransport == 'function' &&
      ((this.transport = new WebTransport(
        this.createUri('https'),
        this.opts.transportOptions[this.name]
      )),
      this.transport.closed
        .then(() => {
          this.onClose();
        })
        .catch((t) => {
          this.onError('webtransport error', t);
        }),
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((t) => {
          const n = S0(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            i = w0();
          i.readable.pipeTo(t.writable), (this.writer = i.writable.getWriter());
          const o = () => {
            r.read()
              .then(({ done: l, value: s }) => {
                l || (this.onPacket(s), o());
              })
              .catch((l) => {});
          };
          o();
          const u = { type: 'open' };
          this.query.sid && (u.data = `{"sid":"${this.query.sid}"}`),
            this.writer.write(u).then(() => this.onOpen());
        });
      }));
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1;
      this.writer.write(r).then(() => {
        i &&
          Da(() => {
            (this.writable = !0), this.emitReserved('drain');
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this.transport) === null || t === void 0 || t.close();
  }
}
const $0 = { websocket: L0, webtransport: z0, polling: M0 },
  F0 =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  j0 = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor',
  ];
function ms(e) {
  const t = e,
    n = e.indexOf('['),
    r = e.indexOf(']');
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ';') +
      e.substring(r, e.length));
  let i = F0.exec(e || ''),
    o = {},
    u = 14;
  for (; u--; ) o[j0[u]] = i[u] || '';
  return (
    n != -1 &&
      r != -1 &&
      ((o.source = t),
      (o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ':')),
      (o.authority = o.authority
        .replace('[', '')
        .replace(']', '')
        .replace(/;/g, ':')),
      (o.ipv6uri = !0)),
    (o.pathNames = q0(o, o.path)),
    (o.queryKey = Q0(o, o.query)),
    o
  );
}
function q0(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, '/').split('/');
  return (
    (t.slice(0, 1) == '/' || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == '/' && r.splice(r.length - 1, 1),
    r
  );
}
function Q0(e, t) {
  const n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
      i && (n[i] = o);
    }),
    n
  );
}
let Qh = class Tn extends pe {
  constructor(t, n = {}) {
    super(),
      (this.binaryType = D0),
      (this.writeBuffer = []),
      t && typeof t == 'object' && ((n = t), (t = null)),
      t
        ? ((t = ms(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === 'https' || t.protocol === 'wss'),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = ms(n.host).host),
      _u(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < 'u' && location.protocol === 'https:'),
      n.hostname && !n.port && (n.port = this.secure ? '443' : '80'),
      (this.hostname =
        n.hostname ||
        (typeof location < 'u' ? location.hostname : 'localhost')),
      (this.port =
        n.port ||
        (typeof location < 'u' && location.port
          ? location.port
          : this.secure
          ? '443'
          : '80')),
      (this.transports = n.transports || [
        'polling',
        'websocket',
        'webtransport',
      ]),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: '/engine.io',
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: 't',
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, '') +
        (this.opts.addTrailingSlash ? '/' : '')),
      typeof this.opts.query == 'string' &&
        (this.opts.query = T0(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      typeof addEventListener == 'function' &&
        (this.opts.closeOnBeforeunload &&
          ((this.beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener('beforeunload', this.beforeunloadEventListener, !1)),
        this.hostname !== 'localhost' &&
          ((this.offlineEventListener = () => {
            this.onClose('transport close', {
              description: 'network connection lost',
            });
          }),
          addEventListener('offline', this.offlineEventListener, !1))),
      this.open();
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    (n.EIO = Lh), (n.transport = t), this.id && (n.sid = this.id);
    const r = Object.assign(
      {},
      this.opts,
      {
        query: n,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t]
    );
    return new $0[t](r);
  }
  open() {
    let t;
    if (
      this.opts.rememberUpgrade &&
      Tn.priorWebsocketSuccess &&
      this.transports.indexOf('websocket') !== -1
    )
      t = 'websocket';
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved('error', 'No transports available');
      }, 0);
      return;
    } else t = this.transports[0];
    this.readyState = 'opening';
    try {
      t = this.createTransport(t);
    } catch {
      this.transports.shift(), this.open();
      return;
    }
    t.open(), this.setTransport(t);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on('drain', this.onDrain.bind(this))
        .on('packet', this.onPacket.bind(this))
        .on('error', this.onError.bind(this))
        .on('close', (n) => this.onClose('transport close', n));
  }
  probe(t) {
    let n = this.createTransport(t),
      r = !1;
    Tn.priorWebsocketSuccess = !1;
    const i = () => {
      r ||
        (n.send([{ type: 'ping', data: 'probe' }]),
        n.once('packet', (h) => {
          if (!r)
            if (h.type === 'pong' && h.data === 'probe') {
              if (
                ((this.upgrading = !0), this.emitReserved('upgrading', n), !n)
              )
                return;
              (Tn.priorWebsocketSuccess = n.name === 'websocket'),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== 'closed' &&
                      (p(),
                      this.setTransport(n),
                      n.send([{ type: 'upgrade' }]),
                      this.emitReserved('upgrade', n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const d = new Error('probe error');
              (d.transport = n.name), this.emitReserved('upgradeError', d);
            }
        }));
    };
    function o() {
      r || ((r = !0), p(), n.close(), (n = null));
    }
    const u = (h) => {
      const d = new Error('probe error: ' + h);
      (d.transport = n.name), o(), this.emitReserved('upgradeError', d);
    };
    function l() {
      u('transport closed');
    }
    function s() {
      u('socket closed');
    }
    function a(h) {
      n && h.name !== n.name && o();
    }
    const p = () => {
      n.removeListener('open', i),
        n.removeListener('error', u),
        n.removeListener('close', l),
        this.off('close', s),
        this.off('upgrading', a);
    };
    n.once('open', i),
      n.once('error', u),
      n.once('close', l),
      this.once('close', s),
      this.once('upgrading', a),
      this.upgrades.indexOf('webtransport') !== -1 && t !== 'webtransport'
        ? this.setTimeoutFn(() => {
            r || n.open();
          }, 200)
        : n.open();
  }
  onOpen() {
    if (
      ((this.readyState = 'open'),
      (Tn.priorWebsocketSuccess = this.transport.name === 'websocket'),
      this.emitReserved('open'),
      this.flush(),
      this.readyState === 'open' && this.opts.upgrade)
    ) {
      let t = 0;
      const n = this.upgrades.length;
      for (; t < n; t++) this.probe(this.upgrades[t]);
    }
  }
  onPacket(t) {
    if (
      this.readyState === 'opening' ||
      this.readyState === 'open' ||
      this.readyState === 'closing'
    )
      switch (
        (this.emitReserved('packet', t),
        this.emitReserved('heartbeat'),
        this.resetPingTimeout(),
        t.type)
      ) {
        case 'open':
          this.onHandshake(JSON.parse(t.data));
          break;
        case 'ping':
          this.sendPacket('pong'),
            this.emitReserved('ping'),
            this.emitReserved('pong');
          break;
        case 'error':
          const n = new Error('server error');
          (n.code = t.data), this.onError(n);
          break;
        case 'message':
          this.emitReserved('data', t.data),
            this.emitReserved('message', t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved('handshake', t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== 'closed' && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose('ping timeout');
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved('drain') : this.flush();
  }
  flush() {
    if (
      this.readyState !== 'closed' &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets();
      this.transport.send(t),
        (this.prevBufferLen = t.length),
        this.emitReserved('flush');
    }
  }
  getWritablePackets() {
    if (
      !(
        this.maxPayload &&
        this.transport.name === 'polling' &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let n = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data;
      if ((i && (n += O0(i)), r > 0 && n > this.maxPayload))
        return this.writeBuffer.slice(0, r);
      n += 2;
    }
    return this.writeBuffer;
  }
  write(t, n, r) {
    return this.sendPacket('message', t, n, r), this;
  }
  send(t, n, r) {
    return this.sendPacket('message', t, n, r), this;
  }
  sendPacket(t, n, r, i) {
    if (
      (typeof n == 'function' && ((i = n), (n = void 0)),
      typeof r == 'function' && ((i = r), (r = null)),
      this.readyState === 'closing' || this.readyState === 'closed')
    )
      return;
    (r = r || {}), (r.compress = r.compress !== !1);
    const o = { type: t, data: n, options: r };
    this.emitReserved('packetCreate', o),
      this.writeBuffer.push(o),
      i && this.once('flush', i),
      this.flush();
  }
  close() {
    const t = () => {
        this.onClose('forced close'), this.transport.close();
      },
      n = () => {
        this.off('upgrade', n), this.off('upgradeError', n), t();
      },
      r = () => {
        this.once('upgrade', n), this.once('upgradeError', n);
      };
    return (
      (this.readyState === 'opening' || this.readyState === 'open') &&
        ((this.readyState = 'closing'),
        this.writeBuffer.length
          ? this.once('drain', () => {
              this.upgrading ? r() : t();
            })
          : this.upgrading
          ? r()
          : t()),
      this
    );
  }
  onError(t) {
    (Tn.priorWebsocketSuccess = !1),
      this.emitReserved('error', t),
      this.onClose('transport error', t);
  }
  onClose(t, n) {
    (this.readyState === 'opening' ||
      this.readyState === 'open' ||
      this.readyState === 'closing') &&
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners('close'),
      this.transport.close(),
      this.transport.removeAllListeners(),
      typeof removeEventListener == 'function' &&
        (removeEventListener(
          'beforeunload',
          this.beforeunloadEventListener,
          !1
        ),
        removeEventListener('offline', this.offlineEventListener, !1)),
      (this.readyState = 'closed'),
      (this.id = null),
      this.emitReserved('close', t, n),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0));
  }
  filterUpgrades(t) {
    const n = [];
    let r = 0;
    const i = t.length;
    for (; r < i; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
    return n;
  }
};
Qh.protocol = Lh;
function B0(e, t = '', n) {
  let r = e;
  (n = n || (typeof location < 'u' && location)),
    e == null && (e = n.protocol + '//' + n.host),
    typeof e == 'string' &&
      (e.charAt(0) === '/' &&
        (e.charAt(1) === '/' ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < 'u' ? (e = n.protocol + '//' + e) : (e = 'https://' + e)),
      (r = ms(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = '80')
        : /^(http|ws)s$/.test(r.protocol) && (r.port = '443')),
    (r.path = r.path || '/');
  const o = r.host.indexOf(':') !== -1 ? '[' + r.host + ']' : r.host;
  return (
    (r.id = r.protocol + '://' + o + ':' + r.port + t),
    (r.href =
      r.protocol + '://' + o + (n && n.port === r.port ? '' : ':' + r.port)),
    r
  );
}
const U0 = typeof ArrayBuffer == 'function',
  V0 = (e) =>
    typeof ArrayBuffer.isView == 'function'
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  Bh = Object.prototype.toString,
  W0 =
    typeof Blob == 'function' ||
    (typeof Blob < 'u' && Bh.call(Blob) === '[object BlobConstructor]'),
  H0 =
    typeof File == 'function' ||
    (typeof File < 'u' && Bh.call(File) === '[object FileConstructor]');
function La(e) {
  return (
    (U0 && (e instanceof ArrayBuffer || V0(e))) ||
    (W0 && e instanceof Blob) ||
    (H0 && e instanceof File)
  );
}
function ro(e, t) {
  if (!e || typeof e != 'object') return !1;
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (ro(e[n])) return !0;
    return !1;
  }
  if (La(e)) return !0;
  if (e.toJSON && typeof e.toJSON == 'function' && arguments.length === 1)
    return ro(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && ro(e[n])) return !0;
  return !1;
}
function K0(e) {
  const t = [],
    n = e.data,
    r = e;
  return (
    (r.data = gs(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  );
}
function gs(e, t) {
  if (!e) return e;
  if (La(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = gs(e[r], t);
    return n;
  } else if (typeof e == 'object' && !(e instanceof Date)) {
    const n = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = gs(e[r], t));
    return n;
  }
  return e;
}
function Y0(e, t) {
  return (e.data = ws(e.data, t)), delete e.attachments, e;
}
function ws(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == 'number' && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error('illegal attachments');
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = ws(e[n], t);
  else if (typeof e == 'object')
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = ws(e[n], t));
  return e;
}
const X0 = [
    'connect',
    'connect_error',
    'disconnect',
    'disconnecting',
    'newListener',
    'removeListener',
  ],
  G0 = 5;
var V;
(function (e) {
  (e[(e.CONNECT = 0)] = 'CONNECT'),
    (e[(e.DISCONNECT = 1)] = 'DISCONNECT'),
    (e[(e.EVENT = 2)] = 'EVENT'),
    (e[(e.ACK = 3)] = 'ACK'),
    (e[(e.CONNECT_ERROR = 4)] = 'CONNECT_ERROR'),
    (e[(e.BINARY_EVENT = 5)] = 'BINARY_EVENT'),
    (e[(e.BINARY_ACK = 6)] = 'BINARY_ACK');
})(V || (V = {}));
class J0 {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === V.EVENT || t.type === V.ACK) && ro(t)
      ? this.encodeAsBinary({
          type: t.type === V.EVENT ? V.BINARY_EVENT : V.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let n = '' + t.type;
    return (
      (t.type === V.BINARY_EVENT || t.type === V.BINARY_ACK) &&
        (n += t.attachments + '-'),
      t.nsp && t.nsp !== '/' && (n += t.nsp + ','),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    );
  }
  encodeAsBinary(t) {
    const n = K0(t),
      r = this.encodeAsString(n.packet),
      i = n.buffers;
    return i.unshift(r), i;
  }
}
function Of(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
class za extends pe {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let n;
    if (typeof t == 'string') {
      if (this.reconstructor)
        throw new Error('got plaintext data when reconstructing a packet');
      n = this.decodeString(t);
      const r = n.type === V.BINARY_EVENT;
      r || n.type === V.BINARY_ACK
        ? ((n.type = r ? V.EVENT : V.ACK),
          (this.reconstructor = new Z0(n)),
          n.attachments === 0 && super.emitReserved('decoded', n))
        : super.emitReserved('decoded', n);
    } else if (La(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved('decoded', n));
      else throw new Error('got binary data when not reconstructing a packet');
    else throw new Error('Unknown type: ' + t);
  }
  decodeString(t) {
    let n = 0;
    const r = { type: Number(t.charAt(0)) };
    if (V[r.type] === void 0) throw new Error('unknown packet type ' + r.type);
    if (r.type === V.BINARY_EVENT || r.type === V.BINARY_ACK) {
      const o = n + 1;
      for (; t.charAt(++n) !== '-' && n != t.length; );
      const u = t.substring(o, n);
      if (u != Number(u) || t.charAt(n) !== '-')
        throw new Error('Illegal attachments');
      r.attachments = Number(u);
    }
    if (t.charAt(n + 1) === '/') {
      const o = n + 1;
      for (; ++n && !(t.charAt(n) === ',' || n === t.length); );
      r.nsp = t.substring(o, n);
    } else r.nsp = '/';
    const i = t.charAt(n + 1);
    if (i !== '' && Number(i) == i) {
      const o = n + 1;
      for (; ++n; ) {
        const u = t.charAt(n);
        if (u == null || Number(u) != u) {
          --n;
          break;
        }
        if (n === t.length) break;
      }
      r.id = Number(t.substring(o, n + 1));
    }
    if (t.charAt(++n)) {
      const o = this.tryParse(t.substr(n));
      if (za.isPayloadValid(r.type, o)) r.data = o;
      else throw new Error('invalid payload');
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case V.CONNECT:
        return Of(n);
      case V.DISCONNECT:
        return n === void 0;
      case V.CONNECT_ERROR:
        return typeof n == 'string' || Of(n);
      case V.EVENT:
      case V.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == 'number' ||
            (typeof n[0] == 'string' && X0.indexOf(n[0]) === -1))
        );
      case V.ACK:
      case V.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class Z0 {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = Y0(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const e1 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: za,
      Encoder: J0,
      get PacketType() {
        return V;
      },
      protocol: G0,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function it(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
const t1 = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class Uh extends pe {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      it(t, 'open', this.onopen.bind(this)),
      it(t, 'packet', this.onpacket.bind(this)),
      it(t, 'error', this.onerror.bind(this)),
      it(t, 'close', this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === 'open' && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift('message'), this.emit.apply(this, t), this;
  }
  emit(t, ...n) {
    if (t1.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (n.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(n), this;
    const r = { type: V.EVENT, data: n };
    if (
      ((r.options = {}),
      (r.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == 'function')
    ) {
      const u = this.ids++,
        l = n.pop();
      this._registerAckCallback(u, l), (r.id = u);
    }
    const i =
      this.io.engine &&
      this.io.engine.transport &&
      this.io.engine.transport.writable;
    return (
      (this.flags.volatile && (!i || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, n) {
    var r;
    const i =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout;
    if (i === void 0) {
      this.acks[t] = n;
      return;
    }
    const o = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let u = 0; u < this.sendBuffer.length; u++)
        this.sendBuffer[u].id === t && this.sendBuffer.splice(u, 1);
      n.call(this, new Error('operation has timed out'));
    }, i);
    this.acks[t] = (...u) => {
      this.io.clearTimeoutFn(o), n.apply(this, [null, ...u]);
    };
  }
  emitWithAck(t, ...n) {
    const r = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((i, o) => {
      n.push((u, l) => (r ? (u ? o(u) : i(l)) : i(u))), this.emit(t, ...n);
    });
  }
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == 'function' && (n = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((i, ...o) =>
      r !== this._queue[0]
        ? void 0
        : (i !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(i))
            : (this._queue.shift(), n && n(null, ...o)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const n = this._queue[0];
    (n.pending && !t) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == 'function'
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: V.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved('connect_error', t);
  }
  onclose(t, n) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved('disconnect', t, n);
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case V.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                'connect_error',
                new Error(
                  'It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)'
                )
              );
          break;
        case V.EVENT:
        case V.BINARY_EVENT:
          this.onevent(t);
          break;
        case V.ACK:
        case V.BINARY_ACK:
          this.onack(t);
          break;
        case V.DISCONNECT:
          this.ondisconnect();
          break;
        case V.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          (r.data = t.data.data), this.emitReserved('connect_error', r);
          break;
      }
  }
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const r of n) r.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == 'string' &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const n = this;
    let r = !1;
    return function (...i) {
      r || ((r = !0), n.packet({ type: V.ACK, id: t, data: i }));
    };
  }
  onack(t) {
    const n = this.acks[t.id];
    typeof n == 'function' && (n.apply(this, t.data), delete this.acks[t.id]);
  }
  onconnect(t, n) {
    (this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved('connect'),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose('io server disconnect');
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: V.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose('io client disconnect'),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const n = this._anyListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const r of n) r.apply(this, t.data);
    }
  }
}
function cr(e) {
  (e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0);
}
cr.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
};
cr.prototype.reset = function () {
  this.attempts = 0;
};
cr.prototype.setMin = function (e) {
  this.ms = e;
};
cr.prototype.setMax = function (e) {
  this.max = e;
};
cr.prototype.setJitter = function (e) {
  this.jitter = e;
};
class Ss extends pe {
  constructor(t, n) {
    var r;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == 'object' && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || '/socket.io'),
      (this.opts = n),
      _u(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new cr({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = 'closed'),
      (this.uri = t);
    const i = n.parser || e1;
    (this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf('open')) return this;
    this.engine = new Qh(this.uri, this.opts);
    const n = this.engine,
      r = this;
    (this._readyState = 'opening'), (this.skipReconnect = !1);
    const i = it(n, 'open', function () {
        r.onopen(), t && t();
      }),
      o = (l) => {
        this.cleanup(),
          (this._readyState = 'closed'),
          this.emitReserved('error', l),
          t ? t(l) : this.maybeReconnectOnOpen();
      },
      u = it(n, 'error', o);
    if (this._timeout !== !1) {
      const l = this._timeout,
        s = this.setTimeoutFn(() => {
          i(), o(new Error('timeout')), n.close();
        }, l);
      this.opts.autoUnref && s.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(s);
        });
    }
    return this.subs.push(i), this.subs.push(u), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = 'open'), this.emitReserved('open');
    const t = this.engine;
    this.subs.push(
      it(t, 'ping', this.onping.bind(this)),
      it(t, 'data', this.ondata.bind(this)),
      it(t, 'error', this.onerror.bind(this)),
      it(t, 'close', this.onclose.bind(this)),
      it(this.decoder, 'decoded', this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved('ping');
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose('parse error', n);
    }
  }
  ondecoded(t) {
    Da(() => {
      this.emitReserved('packet', t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved('error', t);
  }
  socket(t, n) {
    let r = this.nsps[t];
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new Uh(this, t, n)), (this.nsps[t] = r)),
      r
    );
  }
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const r of n) if (this.nsps[r].active) return;
    this._close();
  }
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose('forced close'),
      this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(t, n) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = 'closed'),
      this.emitReserved('close', t, n),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved('reconnect_failed'),
        (this._reconnecting = !1);
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved('reconnect_attempt', t.backoff.attempts),
          !t.skipReconnect &&
            t.open((i) => {
              i
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved('reconnect_error', i))
                : t.onreconnect();
            }));
      }, n);
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved('reconnect', t);
  }
}
const wr = {};
function Kn(e, t) {
  typeof e == 'object' && ((t = e), (e = void 0)), (t = t || {});
  const n = B0(e, t.path || '/socket.io'),
    r = n.source,
    i = n.id,
    o = n.path,
    u = wr[i] && o in wr[i].nsps,
    l = t.forceNew || t['force new connection'] || t.multiplex === !1 || u;
  let s;
  return (
    l ? (s = new Ss(r, t)) : (wr[i] || (wr[i] = new Ss(r, t)), (s = wr[i])),
    n.query && !t.query && (t.query = n.queryKey),
    s.socket(n.path, t)
  );
}
Object.assign(Kn, { Manager: Ss, Socket: Uh, io: Kn, connect: Kn });
const n1 = () => {
    const e = Kn.connect('http://192.168.31.95:5050'),
      t = sr(),
      [n, r] = z.useState({ email: '', description: '' });
    return (
      z.useEffect(() => {
        const i = function (o) {
          n.email === o.email && t(s0(o));
        };
        return e.on(n.email, i), () => e.off(n.email, i);
      }, [n, e]),
      M.jsx('div', {
        children: M.jsxs('div', {
          className: 'sm:w-96 h-90 w-72 bg-slate-700 rounded-lg p-4',
          children: [
            M.jsx('h1', {
              className: 'font-bold text-3xl text-cyan-500 text-center py-1',
              children: 'Socket Form',
            }),
            M.jsxs('div', {
              className: 'm-2 flex flex-col',
              children: [
                M.jsx('label', {
                  htmlFor: 'email',
                  className:
                    'text-sm font-semibold text-slate-300 pt-2 tracking-wide',
                  children: 'E-Mail:',
                }),
                M.jsx('input', {
                  className:
                    'outline-none border border-solid focus:border-cyan-500 border-slate-500 px-3 py-1 font-semibold text-[16px] tracking-wide font-mono rounded bg-slate-600 shadow-[0_4px_6px_0_rgba(0,0,0,0.12)',
                  placeholder: 'Input your E-mail address...',
                  required: !0,
                  type: 'email',
                  value: n.email,
                  onChange: function (i) {
                    const o = { ...n, email: i.target.value };
                    r(o);
                  },
                }),
              ],
            }),
            M.jsxs('div', {
              className: 'm-2 flex flex-col',
              children: [
                M.jsx('label', {
                  htmlFor: 'description',
                  className:
                    'text-sm font-semibold text-slate-300 pt-2 tracking-wide',
                  children: 'Description:',
                }),
                M.jsx('textarea', {
                  required: !0,
                  value: n.description,
                  onChange: function (i) {
                    const o = { ...n, description: i.target.value };
                    r(o);
                  },
                  className:
                    'outline-none border border-solid focus:border-cyan-500 min-h-[120px] border-slate-500 px-3 py-1 font-semibold text-[16px] tracking-wide font-mono rounded bg-slate-600 shadow-[0_4px_6px_0_rgba(0,0,0,0.12)',
                  placeholder: 'Write here...',
                }),
              ],
            }),
            M.jsx('div', {
              className: 'mt-3 px-2',
              children: M.jsx('button', {
                className:
                  'uppercase font-bold text-xl py-1 text-center bg-cyan-700 rounded duration-500 hover:text-slate-900 hover:bg-cyan-500 w-full',
                onClick: function () {
                  e.emit('send_message', n);
                },
                children: 'send',
              }),
            }),
          ],
        }),
      })
    );
  },
  r1 = ({ chatData: e }) => {
    const t = sr();
    return M.jsx('div', {
      className:
        'w-3/4 my-6 p-3 bg-slate-800 shadow-[0px_2px_4px_0px_rgba(255,255,255,0.12)] rounded-lg',
      children: M.jsx('div', {
        className: 'w-full h-auto',
        children: e.length
          ? e
              .slice()
              .sort((n, r) => r.id - n.id)
              .map(
                (n) =>
                  (n == null ? void 0 : n.email) &&
                  M.jsxs(
                    'div',
                    {
                      className:
                        'mt-2 py-1 px-2 text-sm font-normal bg-slate-700 ring-1 ring-cyan-800 rounded-md relative',
                      children: [
                        M.jsxs('div', {
                          className:
                            'absolute top-1.5 right-1.5 z-10 flex flex-row gap-2 bg-slate-700 p-1',
                          children: [
                            M.jsx('button', {
                              onClick: function () {
                                navigator.clipboard.writeText(n.description);
                              },
                              className:
                                'w-5 h-5 flex items-center justify-center hover:bg-green-500 rounded-full duration-300 cursor-pointer bg-green-300 text-slate-900 hover:text-slate-100',
                              children: M.jsx('span', {
                                className: 'text-xs font-light',
                                children: '📋',
                              }),
                            }),
                            M.jsx('button', {
                              onClick: function () {
                                t(a0(n));
                              },
                              className:
                                'w-5 h-5 flex items-center justify-center hover:bg-red-500 rounded-full duration-300 cursor-pointer bg-red-300 text-slate-900 hover:text-slate-100',
                              children: M.jsx('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 384 512',
                                children: M.jsx('path', {
                                  d: 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z',
                                }),
                              }),
                            }),
                          ],
                        }),
                        M.jsx('p', {
                          className: 'text-slate-100 leading-4',
                          children: n.description,
                        }),
                        M.jsx('small', {
                          className:
                            'w-full flex items-end justify-end font-mono text-cyan-500 pt-2',
                          children: n.email,
                        }),
                      ],
                    },
                    n.id
                  )
              )
          : M.jsxs('div', {
              className:
                'mt-2 py-1 px-2 text-sm font-normal bg-slate-700 ring-1 ring-cyan-800 rounded-md',
              children: [
                M.jsx('p', {
                  className: 'text-cyan-500 leading-4 font-medium text-xl p-3',
                  children: 'No chat are available here!',
                }),
                M.jsx('small', {
                  className:
                    'w-full flex items-end justify-end font-mono pt-2 text-red-400',
                  children: 'no-replay@gmail.com',
                }),
              ],
            }),
      }),
    });
  },
  _f = 'http://192.168.31.95:5050',
  i1 = ({ file: e, setFile: t }) => {
    const n = Kn.connect(_f),
      r = sr();
    return (
      z.useEffect(
        function () {
          n.on('file_received', function (i) {
            r(f0(i.file));
          });
        },
        [n]
      ),
      M.jsx('div', {
        className: 'my-3 w-full flex items-center justify-center',
        children: M.jsxs('form', {
          method: 'post',
          onSubmit: async function (i) {
            i.preventDefault();
            const o = new Date().toISOString() + '__' + e.name,
              u = new FormData();
            u.append('fieldname', 'photos'),
              u.append('filename', o.replace(/[$#@!)(\[\]+*&^%,~`'" ]/g, '')),
              u.append('type', e.type),
              u.append('file', e);
            try {
              const s = await (
                await fetch(_f + '/main/file', { method: 'POST', body: u })
              ).json();
              n.emit('file_uploaded', s);
            } catch (l) {
              console.log(l);
            }
          },
          className: 'sm:w-96 h-90 w-72 bg-slate-700 rounded-lg p-4',
          children: [
            M.jsx('h1', {
              className: 'font-bold text-2xl text-cyan-500 text-center py-1',
              children: 'Socket File Transfer Form',
            }),
            M.jsxs('div', {
              className: 'm-2 flex flex-col',
              children: [
                M.jsx('label', {
                  htmlFor: 'file',
                  className:
                    'text-sm font-semibold text-slate-300 pt-2 tracking-wide',
                  children: "Sender's File:",
                }),
                M.jsx('input', {
                  className:
                    'outline-none border border-solid focus:border-cyan-500 border-slate-500 px-3 py-1 font-semibold text-[16px] tracking-wide font-mono rounded bg-slate-600 shadow-[0_4px_6px_0_rgba(0,0,0,0.12)',
                  required: !0,
                  type: 'file',
                  onChange: function (i) {
                    t(i.target.files[0]);
                  },
                }),
              ],
            }),
            M.jsxs('div', {
              className: 'm-2 flex flex-col',
              children: [
                M.jsxs('label', {
                  htmlFor: 'description',
                  className:
                    'text-sm font-semibold text-slate-300 pt-2 tracking-wide',
                  children: [
                    'View File:',
                    M.jsx('span', {
                      className: 'text-red-300 pl-1',
                      children: e ? e.name : 'No file selected here!',
                    }),
                  ],
                }),
                e &&
                  M.jsx('div', {
                    className:
                      'outline-none border border-solid focus:border-cyan-500  h-72 border-slate-500 p-3 font-semibold text-[16px] tracking-wide font-mono rounded bg-slate-600 shadow-[0_4px_6px_0_rgba(0,0,0,0.12) p-1',
                    children: M.jsx('img', {
                      className: 'w-full h-full rounded-md',
                      alt: 'view file',
                      src: URL.createObjectURL(e),
                    }),
                  }),
              ],
            }),
            M.jsx('div', {
              className: 'mt-3 px-2',
              children: M.jsx('button', {
                type: 'submit',
                className:
                  'uppercase font-bold text-xl py-1 text-center bg-cyan-700 rounded duration-500 hover:text-slate-900 hover:bg-cyan-500 w-full',
                onClick: function () {},
                children: 'send',
              }),
            }),
          ],
        }),
      })
    );
  },
  o1 = ({ url: e, fileData: t }) => {
    const { name: n } = t,
      r = e + t.path,
      i = sr(),
      o = Kn.connect(e),
      u = t == null ? void 0 : t._id;
    z.useEffect(() => {
      const p = (h) => {
        i(d0(h));
      };
      return (
        o.on('received_delete_file_id', p),
        () => {
          o.off('received_delete_file_id', p);
        }
      );
    }, [o, i]);
    function l() {
      o.emit('send_delete_file_id', u);
    }
    async function s() {
      confirm('Are you sure to permanently deleted it!') &&
        (await (
          await fetch(`${e}/main/file/${u}`, { method: 'DELETE' })
        ).json(),
        l());
    }
    async function a() {
      try {
        const p = await fetch(`${e}/main/file/download`, {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          body: JSON.stringify(t),
        });
        if (!p.ok) {
          console.error('Failed to fetch file:', p.statusText);
          return;
        }
        const h = await p.blob(),
          d = URL.createObjectURL(h),
          v = document.createElement('a');
        v.href = d;
        const g = t.path.split('/');
        (v.download = g[g.length - 1]), v.click(), URL.revokeObjectURL(d);
      } catch (p) {
        console.error(p);
      }
    }
    return M.jsxs('div', {
      children: [
        M.jsx('div', {
          className: 'p-1 bg-transparent mb-1',
          children: M.jsxs('p', {
            className: 'text-xs font-bold text-slate-300 w-72',
            children: [
              'File Name:',
              M.jsx('span', {
                className: 'font-medium pl-1 text-red-200',
                children: n,
              }),
            ],
          }),
        }),
        M.jsxs('div', {
          className:
            'outline-none border border-solid focus:border-cyan-500 w-72 h-64 border-slate-500 font-semibold text-[16px] tracking-wide font-mono rounded bg-slate-600 shadow-[0_4px_6px_0_rgba(0,0,0,0.12) p-1 relative',
          children: [
            M.jsxs('div', {
              className:
                'absolute right-2 top-2 flex flex-row gap-2 items-end justify-end',
              children: [
                M.jsx('button', {
                  onClick: a,
                  className:
                    'w-10 h-10 flex items-center justify-center hover:bg-cyan-700 rounded-full duration-300 cursor-pointer bg-cyan-500 fill-slate-900 hover:fill-slate-100 pr-1.5',
                  children: M.jsx('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 384 512',
                    width: 24,
                    height: 24,
                    children: M.jsx('path', {
                      xmlns: 'http://www.w3.org/2000/svg',
                      d: 'M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z',
                    }),
                  }),
                }),
                M.jsx('button', {
                  onClick: s,
                  className:
                    'w-10 h-10 flex items-center justify-center hover:bg-red-500 rounded-full duration-300 cursor-pointer bg-red-300 fill-slate-900 hover:fill-slate-100',
                  children: M.jsx('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 384 512',
                    width: 32,
                    height: 32,
                    children: M.jsx('path', {
                      d: 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z',
                    }),
                  }),
                }),
              ],
            }),
            M.jsx('img', {
              className: 'w-full h-full rounded-md',
              alt: 'view file',
              src: r,
            }),
          ],
        }),
      ],
    });
  },
  Pf = 'http://192.168.31.95:5050',
  u1 = () => {
    const e = sr(),
      { allFiles: t } = wa((u) => u.chat),
      [n, r] = z.useState(null),
      [i, o] = z.useState(!1);
    return (
      z.useEffect(() => {
        (async function () {
          const l = await (await fetch(Pf + '/main/file')).json();
          e(c0(l));
        })();
      }, []),
      M.jsxs('div', {
        className: 'w-full flex flex-col items-center justify-center',
        children: [
          M.jsx('div', {
            className: 'fixed right-0 top-0 m-5 z-10',
            children: M.jsx('button', {
              className: `${
                i ? 'bg-red-500 fill-slate-100' : 'bg-cyan-500 fill-slate-900'
              } duration-500 w-14 h-14 flex items-center justify-center rounded-full border border-solid border-slate-700 shadow-secondary-dark`,
              onClick: function () {
                o(!i);
              },
              children: M.jsx('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 576 512',
                width: '32',
                height: '32',
                children: M.jsx('path', {
                  d: 'M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zm48 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z',
                }),
              }),
            }),
          }),
          M.jsxs('div', {
            className: i
              ? 'w-full min-h-screen h-auto flex flex-col items-center justify-center'
              : '!h-0 !w-0 !overflow-hidden',
            style: { transition: '2s' },
            children: [
              M.jsx('div', {
                className: 'w-full flex items-center justify-center',
                children: M.jsx(i1, { file: n, setFile: r }),
              }),
              t.length &&
                M.jsx('div', {
                  className:
                    'my-4 border border-solid border-cyan-700 rounded-md p-4 w-auto h-auto max-w-full grid gap-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
                  children: t
                    .slice()
                    .sort((u, l) => u.updatedAt - l.updatedAt)
                    .map((u, l) =>
                      M.jsx(
                        'div',
                        { children: M.jsx(o1, { url: Pf, fileData: u }) },
                        l + 1
                      )
                    ),
                }),
            ],
          }),
        ],
      })
    );
  },
  l1 = () => {
    const { messageData: e } = wa((t) => t.chat);
    return M.jsxs('div', {
      className: 'w-full h-auto flex items-center justify-center flex-col',
      children: [M.jsx(u1, {}), M.jsx(n1, {}), M.jsx(r1, { chatData: e })],
    });
  },
  s1 = () =>
    M.jsx('div', {
      className:
        'w-full min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-100 text-lg font-normal',
      children: M.jsx(l1, {}),
    });
const a1 = { totalFormData: [], formData: {} },
  c1 = zt({
    name: 'test/testSlice',
    initialState: a1,
    reducers: {
      addTotalFormData: function (e, t) {
        const n = {
          ...t.payload,
          id: (function () {
            const r = e.totalFormData.reduce(function (i, o) {
              return Math.max(i.id), o.id;
            }, -1);
            return r > 0 ? r + 1 : 1;
          })(),
        };
        e.totalFormData.push(n);
      },
      addFormData: function (e, t) {
        e.formData = t.payload;
      },
    },
  }),
  f1 = c1.reducer;
var Vh =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        o,
        u;
      return (
        (u = { next: l(0), throw: l(1), return: l(2) }),
        typeof Symbol == 'function' &&
          (u[Symbol.iterator] = function () {
            return this;
          }),
        u
      );
      function l(a) {
        return function (p) {
          return s([a, p]);
        };
      }
      function s(a) {
        if (r) throw new TypeError('Generator is already executing.');
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (o =
                  a[0] & 2
                    ? i.return
                    : a[0]
                    ? i.throw || ((o = i.return) && o.call(i), 0)
                    : i.next) &&
                !(o = o.call(i, a[1])).done)
            )
              return o;
            switch (((i = 0), o && (a = [a[0] & 2, o.value]), a[0])) {
              case 0:
              case 1:
                o = a;
                break;
              case 4:
                return n.label++, { value: a[1], done: !1 };
              case 5:
                n.label++, (i = a[1]), (a = [0]);
                continue;
              case 7:
                (a = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((o = n.trys),
                  !(o = o.length > 0 && o[o.length - 1]) &&
                    (a[0] === 6 || a[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (a[0] === 3 && (!o || (a[1] > o[0] && a[1] < o[3]))) {
                  n.label = a[1];
                  break;
                }
                if (a[0] === 6 && n.label < o[1]) {
                  (n.label = o[1]), (o = a);
                  break;
                }
                if (o && n.label < o[2]) {
                  (n.label = o[2]), n.ops.push(a);
                  break;
                }
                o[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            a = t.call(e, n);
          } catch (p) {
            (a = [6, p]), (i = 0);
          } finally {
            r = o = 0;
          }
        if (a[0] & 5) throw a[1];
        return { value: a[0] ? a[1] : void 0, done: !0 };
      }
    },
  zo =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  d1 = Object.defineProperty,
  p1 = Object.defineProperties,
  h1 = Object.getOwnPropertyDescriptors,
  Tf = Object.getOwnPropertySymbols,
  v1 = Object.prototype.hasOwnProperty,
  y1 = Object.prototype.propertyIsEnumerable,
  Rf = function (e, t, n) {
    return t in e
      ? d1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  me = function (e, t) {
    for (var n in t || (t = {})) v1.call(t, n) && Rf(e, n, t[n]);
    if (Tf)
      for (var r = 0, i = Tf(t); r < i.length; r++) {
        var n = i[r];
        y1.call(t, n) && Rf(e, n, t[n]);
      }
    return e;
  },
  Ot = function (e, t) {
    return p1(e, h1(t));
  },
  Wh = function (e, t, n) {
    return new Promise(function (r, i) {
      var o = function (s) {
          try {
            l(n.next(s));
          } catch (a) {
            i(a);
          }
        },
        u = function (s) {
          try {
            l(n.throw(s));
          } catch (a) {
            i(a);
          }
        },
        l = function (s) {
          return s.done ? r(s.value) : Promise.resolve(s.value).then(o, u);
        };
      l((n = n.apply(e, t)).next());
    });
  },
  re;
(function (e) {
  (e.uninitialized = 'uninitialized'),
    (e.pending = 'pending'),
    (e.fulfilled = 'fulfilled'),
    (e.rejected = 'rejected');
})(re || (re = {}));
function m1(e) {
  return {
    status: e,
    isUninitialized: e === re.uninitialized,
    isLoading: e === re.pending,
    isSuccess: e === re.fulfilled,
    isError: e === re.rejected,
  };
}
var Nf = function (e) {
  return [].concat.apply([], e);
};
function g1() {
  return typeof navigator > 'u' || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function w1() {
  return typeof document > 'u' ? !0 : document.visibilityState !== 'hidden';
}
var Af = ir;
function Hh(e, t) {
  if (e === t || !((Af(e) && Af(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  for (
    var n = Object.keys(t),
      r = Object.keys(e),
      i = n.length === r.length,
      o = Array.isArray(t) ? [] : {},
      u = 0,
      l = n;
    u < l.length;
    u++
  ) {
    var s = l[u];
    (o[s] = Hh(e[s], t[s])), i && (i = e[s] === o[s]);
  }
  return i ? e : o;
}
var bf = (function () {
    function e(t, n) {
      n === void 0 && (n = void 0), (this.value = t), (this.meta = n);
    }
    return e;
  })(),
  $a = $e('__rtkq/focused'),
  Kh = $e('__rtkq/unfocused'),
  Fa = $e('__rtkq/online'),
  Yh = $e('__rtkq/offline'),
  wt;
(function (e) {
  (e.query = 'query'), (e.mutation = 'mutation');
})(wt || (wt = {}));
function Xh(e) {
  return e.type === wt.query;
}
function S1(e) {
  return e.type === wt.mutation;
}
function Gh(e, t, n, r, i, o) {
  return k1(e)
    ? e(t, n, r, i).map(ks).map(o)
    : Array.isArray(e)
    ? e.map(ks).map(o)
    : [];
}
function k1(e) {
  return typeof e == 'function';
}
function ks(e) {
  return typeof e == 'string' ? { type: e } : e;
}
function cl(e) {
  return e != null;
}
var li = Symbol('forceQueryFn'),
  xs = function (e) {
    return typeof e[li] == 'function';
  };
function x1(e) {
  var t = e.serializeQueryArgs,
    n = e.queryThunk,
    r = e.mutationThunk,
    i = e.api,
    o = e.context,
    u = new Map(),
    l = new Map(),
    s = i.internalActions,
    a = s.unsubscribeQueryResult,
    p = s.removeMutationResult,
    h = s.updateSubscriptionOptions;
  return {
    buildInitiateQuery: c,
    buildInitiateMutation: f,
    getRunningQueryThunk: g,
    getRunningMutationThunk: w,
    getRunningQueriesThunk: O,
    getRunningMutationsThunk: y,
    getRunningOperationPromises: v,
    removalWarning: d,
  };
  function d() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function v() {
    typeof process < 'u';
    var m = function (k) {
      return Array.from(k.values()).flatMap(function (S) {
        return S ? Object.values(S) : [];
      });
    };
    return zo(zo([], m(u)), m(l)).filter(cl);
  }
  function g(m, k) {
    return function (S) {
      var x,
        C = o.endpointDefinitions[m],
        _ = t({ queryArgs: k, endpointDefinition: C, endpointName: m });
      return (x = u.get(S)) == null ? void 0 : x[_];
    };
  }
  function w(m, k) {
    return function (S) {
      var x;
      return (x = l.get(S)) == null ? void 0 : x[k];
    };
  }
  function O() {
    return function (m) {
      return Object.values(u.get(m) || {}).filter(cl);
    };
  }
  function y() {
    return function (m) {
      return Object.values(l.get(m) || {}).filter(cl);
    };
  }
  function c(m, k) {
    var S = function (x, C) {
      var _ = C === void 0 ? {} : C,
        E = _.subscribe,
        P = E === void 0 ? !0 : E,
        N = _.forceRefetch,
        A = _.subscriptionOptions,
        D = li,
        $ = _[D];
      return function (j, Q) {
        var T,
          b,
          I = t({ queryArgs: x, endpointDefinition: k, endpointName: m }),
          F = n(
            ((T = {
              type: 'query',
              subscribe: P,
              forceRefetch: N,
              subscriptionOptions: A,
              endpointName: m,
              originalArgs: x,
              queryCacheKey: I,
            }),
            (T[li] = $),
            T)
          ),
          q = i.endpoints[m].select(x),
          B = j(F),
          H = q(Q()),
          K = B.requestId,
          Y = B.abort,
          se = H.requestId !== K,
          sn = (b = u.get(j)) == null ? void 0 : b[I],
          yi = function () {
            return q(Q());
          },
          bt = Object.assign(
            $
              ? B.then(yi)
              : se && !sn
              ? Promise.resolve(H)
              : Promise.all([sn, B]).then(yi),
            {
              arg: x,
              requestId: K,
              subscriptionOptions: A,
              queryCacheKey: I,
              abort: Y,
              unwrap: function () {
                return Wh(this, null, function () {
                  var fe;
                  return Vh(this, function (mi) {
                    switch (mi.label) {
                      case 0:
                        return [4, bt];
                      case 1:
                        if (((fe = mi.sent()), fe.isError)) throw fe.error;
                        return [2, fe.data];
                    }
                  });
                });
              },
              refetch: function () {
                return j(S(x, { subscribe: !1, forceRefetch: !0 }));
              },
              unsubscribe: function () {
                P && j(a({ queryCacheKey: I, requestId: K }));
              },
              updateSubscriptionOptions: function (fe) {
                (bt.subscriptionOptions = fe),
                  j(
                    h({
                      endpointName: m,
                      requestId: K,
                      queryCacheKey: I,
                      options: fe,
                    })
                  );
              },
            }
          );
        if (!sn && !se && !$) {
          var _n = u.get(j) || {};
          (_n[I] = bt),
            u.set(j, _n),
            bt.then(function () {
              delete _n[I], Object.keys(_n).length || u.delete(j);
            });
        }
        return bt;
      };
    };
    return S;
  }
  function f(m) {
    return function (k, S) {
      var x = S === void 0 ? {} : S,
        C = x.track,
        _ = C === void 0 ? !0 : C,
        E = x.fixedCacheKey;
      return function (P, N) {
        var A = r({
            type: 'mutation',
            endpointName: m,
            originalArgs: k,
            track: _,
            fixedCacheKey: E,
          }),
          D = P(A),
          $ = D.requestId,
          j = D.abort,
          Q = D.unwrap,
          T = D.unwrap()
            .then(function (q) {
              return { data: q };
            })
            .catch(function (q) {
              return { error: q };
            }),
          b = function () {
            P(p({ requestId: $, fixedCacheKey: E }));
          },
          I = Object.assign(T, {
            arg: D.arg,
            requestId: $,
            abort: j,
            unwrap: Q,
            unsubscribe: b,
            reset: b,
          }),
          F = l.get(P) || {};
        return (
          l.set(P, F),
          (F[$] = I),
          I.then(function () {
            delete F[$], Object.keys(F).length || l.delete(P);
          }),
          E &&
            ((F[E] = I),
            I.then(function () {
              F[E] === I && (delete F[E], Object.keys(F).length || l.delete(P));
            })),
          I
        );
      };
    };
  }
}
function If(e) {
  return e;
}
function E1(e) {
  var t = this,
    n = e.reducerPath,
    r = e.baseQuery,
    i = e.context.endpointDefinitions,
    o = e.serializeQueryArgs,
    u = e.api,
    l = function (f, m, k) {
      return function (S) {
        var x = i[f];
        S(
          u.internalActions.queryResultPatched({
            queryCacheKey: o({
              queryArgs: m,
              endpointDefinition: x,
              endpointName: f,
            }),
            patches: k,
          })
        );
      };
    },
    s = function (f, m, k) {
      return function (S, x) {
        var C,
          _,
          E = u.endpoints[f].select(m)(x()),
          P = {
            patches: [],
            inversePatches: [],
            undo: function () {
              return S(u.util.patchQueryData(f, m, P.inversePatches));
            },
          };
        if (E.status === re.uninitialized) return P;
        if ('data' in E)
          if (ct(E.data)) {
            var N = kh(E.data, k),
              A = N[1],
              D = N[2];
            (C = P.patches).push.apply(C, A),
              (_ = P.inversePatches).push.apply(_, D);
          } else {
            var $ = k(E.data);
            P.patches.push({ op: 'replace', path: [], value: $ }),
              P.inversePatches.push({ op: 'replace', path: [], value: E.data });
          }
        return S(u.util.patchQueryData(f, m, P.patches)), P;
      };
    },
    a = function (f, m, k) {
      return function (S) {
        var x;
        return S(
          u.endpoints[f].initiate(
            m,
            ((x = { subscribe: !1, forceRefetch: !0 }),
            (x[li] = function () {
              return { data: k };
            }),
            x)
          )
        );
      };
    },
    p = function (f, m) {
      return Wh(t, [f, m], function (k, S) {
        var x,
          C,
          _,
          E,
          P,
          N,
          A,
          D,
          $,
          j,
          Q,
          T,
          b,
          I,
          F,
          q,
          B,
          H,
          K = S.signal,
          Y = S.abort,
          se = S.rejectWithValue,
          sn = S.fulfillWithValue,
          yi = S.dispatch,
          bt = S.getState,
          _n = S.extra;
        return Vh(this, function (fe) {
          switch (fe.label) {
            case 0:
              (x = i[k.endpointName]), (fe.label = 1);
            case 1:
              return (
                fe.trys.push([1, 8, , 13]),
                (C = If),
                (_ = void 0),
                (E = {
                  signal: K,
                  abort: Y,
                  dispatch: yi,
                  getState: bt,
                  extra: _n,
                  endpoint: k.endpointName,
                  type: k.type,
                  forced: k.type === 'query' ? h(k, bt()) : void 0,
                }),
                (P = k.type === 'query' ? k[li] : void 0),
                P ? ((_ = P()), [3, 6]) : [3, 2]
              );
            case 2:
              return x.query
                ? [4, r(x.query(k.originalArgs), E, x.extraOptions)]
                : [3, 4];
            case 3:
              return (
                (_ = fe.sent()),
                x.transformResponse && (C = x.transformResponse),
                [3, 6]
              );
            case 4:
              return [
                4,
                x.queryFn(k.originalArgs, E, x.extraOptions, function (mi) {
                  return r(mi, E, x.extraOptions);
                }),
              ];
            case 5:
              (_ = fe.sent()), (fe.label = 6);
            case 6:
              if ((typeof process < 'u', _.error))
                throw new bf(_.error, _.meta);
              return (Q = sn), [4, C(_.data, _.meta, k.originalArgs)];
            case 7:
              return [
                2,
                Q.apply(void 0, [
                  fe.sent(),
                  ((B = {
                    fulfilledTimeStamp: Date.now(),
                    baseQueryMeta: _.meta,
                  }),
                  (B[_r] = !0),
                  B),
                ]),
              ];
            case 8:
              if (((T = fe.sent()), (b = T), !(b instanceof bf)))
                return [3, 12];
              (I = If),
                x.query &&
                  x.transformErrorResponse &&
                  (I = x.transformErrorResponse),
                (fe.label = 9);
            case 9:
              return (
                fe.trys.push([9, 11, , 12]),
                (F = se),
                [4, I(b.value, b.meta, k.originalArgs)]
              );
            case 10:
              return [
                2,
                F.apply(void 0, [
                  fe.sent(),
                  ((H = { baseQueryMeta: b.meta }), (H[_r] = !0), H),
                ]),
              ];
            case 11:
              return (q = fe.sent()), (b = q), [3, 12];
            case 12:
              throw (typeof process < 'u', console.error(b), b);
            case 13:
              return [2];
          }
        });
      });
    };
  function h(f, m) {
    var k,
      S,
      x,
      C,
      _ =
        (S = (k = m[n]) == null ? void 0 : k.queries) == null
          ? void 0
          : S[f.queryCacheKey],
      E = (x = m[n]) == null ? void 0 : x.config.refetchOnMountOrArgChange,
      P = _ == null ? void 0 : _.fulfilledTimeStamp,
      N = (C = f.forceRefetch) != null ? C : f.subscribe && E;
    return N ? N === !0 || (Number(new Date()) - Number(P)) / 1e3 >= N : !1;
  }
  var d = hf(n + '/executeQuery', p, {
      getPendingMeta: function () {
        var f;
        return (f = { startedTimeStamp: Date.now() }), (f[_r] = !0), f;
      },
      condition: function (f, m) {
        var k = m.getState,
          S,
          x,
          C,
          _ = k(),
          E =
            (x = (S = _[n]) == null ? void 0 : S.queries) == null
              ? void 0
              : x[f.queryCacheKey],
          P = E == null ? void 0 : E.fulfilledTimeStamp,
          N = f.originalArgs,
          A = E == null ? void 0 : E.originalArgs,
          D = i[f.endpointName];
        return xs(f)
          ? !0
          : (E == null ? void 0 : E.status) === 'pending'
          ? !1
          : h(f, _) ||
            (Xh(D) &&
              (C = D == null ? void 0 : D.forceRefetch) != null &&
              C.call(D, {
                currentArg: N,
                previousArg: A,
                endpointState: E,
                state: _,
              }))
          ? !0
          : !P;
      },
      dispatchConditionRejection: !0,
    }),
    v = hf(n + '/executeMutation', p, {
      getPendingMeta: function () {
        var f;
        return (f = { startedTimeStamp: Date.now() }), (f[_r] = !0), f;
      },
    }),
    g = function (f) {
      return 'force' in f;
    },
    w = function (f) {
      return 'ifOlderThan' in f;
    },
    O = function (f, m, k) {
      return function (S, x) {
        var C = g(k) && k.force,
          _ = w(k) && k.ifOlderThan,
          E = function (D) {
            return (
              D === void 0 && (D = !0),
              u.endpoints[f].initiate(m, { forceRefetch: D })
            );
          },
          P = u.endpoints[f].select(m)(x());
        if (C) S(E());
        else if (_) {
          var N = P == null ? void 0 : P.fulfilledTimeStamp;
          if (!N) {
            S(E());
            return;
          }
          var A = (Number(new Date()) - Number(new Date(N))) / 1e3 >= _;
          A && S(E());
        } else S(E(!1));
      };
    };
  function y(f) {
    return function (m) {
      var k, S;
      return (
        ((S = (k = m == null ? void 0 : m.meta) == null ? void 0 : k.arg) ==
        null
          ? void 0
          : S.endpointName) === f
      );
    };
  }
  function c(f, m) {
    return {
      matchPending: Fr(Na(f), y(m)),
      matchFulfilled: Fr(On(f), y(m)),
      matchRejected: Fr(ui(f), y(m)),
    };
  }
  return {
    queryThunk: d,
    mutationThunk: v,
    prefetch: O,
    updateQueryData: s,
    upsertQueryData: a,
    patchQueryData: l,
    buildMatchThunkActions: c,
  };
}
function Jh(e, t, n, r) {
  return Gh(
    n[e.meta.arg.endpointName][t],
    On(e) ? e.payload : void 0,
    Ou(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    'baseQueryMeta' in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  );
}
function Fi(e, t, n) {
  var r = e[t];
  r && n(r);
}
function si(e) {
  var t;
  return (t = 'arg' in e ? e.arg.fixedCacheKey : e.fixedCacheKey) != null
    ? t
    : e.requestId;
}
function Mf(e, t, n) {
  var r = e[si(t)];
  r && n(r);
}
var Sr = {};
function C1(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.mutationThunk,
    i = e.context,
    o = i.endpointDefinitions,
    u = i.apiUid,
    l = i.extractRehydrationInfo,
    s = i.hasRehydrationInfo,
    a = e.assertTagType,
    p = e.config,
    h = $e(t + '/resetApiState'),
    d = zt({
      name: t + '/queries',
      initialState: Sr,
      reducers: {
        removeQueryResult: {
          reducer: function (k, S) {
            var x = S.payload.queryCacheKey;
            delete k[x];
          },
          prepare: ll(),
        },
        queryResultPatched: function (k, S) {
          var x = S.payload,
            C = x.queryCacheKey,
            _ = x.patches;
          Fi(k, C, function (E) {
            E.data = uf(E.data, _.concat());
          });
        },
      },
      extraReducers: function (k) {
        k.addCase(n.pending, function (S, x) {
          var C = x.meta,
            _ = x.meta.arg,
            E,
            P,
            N = xs(_);
          (_.subscribe || N) &&
            ((P = S[(E = _.queryCacheKey)]) != null ||
              (S[E] = {
                status: re.uninitialized,
                endpointName: _.endpointName,
              })),
            Fi(S, _.queryCacheKey, function (A) {
              (A.status = re.pending),
                (A.requestId = N && A.requestId ? A.requestId : C.requestId),
                _.originalArgs !== void 0 && (A.originalArgs = _.originalArgs),
                (A.startedTimeStamp = C.startedTimeStamp);
            });
        })
          .addCase(n.fulfilled, function (S, x) {
            var C = x.meta,
              _ = x.payload;
            Fi(S, C.arg.queryCacheKey, function (E) {
              var P;
              if (!(E.requestId !== C.requestId && !xs(C.arg))) {
                var N = o[C.arg.endpointName].merge;
                if (((E.status = re.fulfilled), N))
                  if (E.data !== void 0) {
                    var A = C.fulfilledTimeStamp,
                      D = C.arg,
                      $ = C.baseQueryMeta,
                      j = C.requestId,
                      Q = hi(E.data, function (T) {
                        return N(T, _, {
                          arg: D.originalArgs,
                          baseQueryMeta: $,
                          fulfilledTimeStamp: A,
                          requestId: j,
                        });
                      });
                    E.data = Q;
                  } else E.data = _;
                else
                  E.data =
                    (P = o[C.arg.endpointName].structuralSharing) == null || P
                      ? Hh(at(E.data) ? pg(E.data) : E.data, _)
                      : _;
                delete E.error, (E.fulfilledTimeStamp = C.fulfilledTimeStamp);
              }
            });
          })
          .addCase(n.rejected, function (S, x) {
            var C = x.meta,
              _ = C.condition,
              E = C.arg,
              P = C.requestId,
              N = x.error,
              A = x.payload;
            Fi(S, E.queryCacheKey, function (D) {
              if (!_) {
                if (D.requestId !== P) return;
                (D.status = re.rejected), (D.error = A ?? N);
              }
            });
          })
          .addMatcher(s, function (S, x) {
            for (
              var C = l(x).queries, _ = 0, E = Object.entries(C);
              _ < E.length;
              _++
            ) {
              var P = E[_],
                N = P[0],
                A = P[1];
              ((A == null ? void 0 : A.status) === re.fulfilled ||
                (A == null ? void 0 : A.status) === re.rejected) &&
                (S[N] = A);
            }
          });
      },
    }),
    v = zt({
      name: t + '/mutations',
      initialState: Sr,
      reducers: {
        removeMutationResult: {
          reducer: function (k, S) {
            var x = S.payload,
              C = si(x);
            C in k && delete k[C];
          },
          prepare: ll(),
        },
      },
      extraReducers: function (k) {
        k.addCase(r.pending, function (S, x) {
          var C = x.meta,
            _ = x.meta,
            E = _.requestId,
            P = _.arg,
            N = _.startedTimeStamp;
          P.track &&
            (S[si(C)] = {
              requestId: E,
              status: re.pending,
              endpointName: P.endpointName,
              startedTimeStamp: N,
            });
        })
          .addCase(r.fulfilled, function (S, x) {
            var C = x.payload,
              _ = x.meta;
            _.arg.track &&
              Mf(S, _, function (E) {
                E.requestId === _.requestId &&
                  ((E.status = re.fulfilled),
                  (E.data = C),
                  (E.fulfilledTimeStamp = _.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, function (S, x) {
            var C = x.payload,
              _ = x.error,
              E = x.meta;
            E.arg.track &&
              Mf(S, E, function (P) {
                P.requestId === E.requestId &&
                  ((P.status = re.rejected), (P.error = C ?? _));
              });
          })
          .addMatcher(s, function (S, x) {
            for (
              var C = l(x).mutations, _ = 0, E = Object.entries(C);
              _ < E.length;
              _++
            ) {
              var P = E[_],
                N = P[0],
                A = P[1];
              ((A == null ? void 0 : A.status) === re.fulfilled ||
                (A == null ? void 0 : A.status) === re.rejected) &&
                N !== (A == null ? void 0 : A.requestId) &&
                (S[N] = A);
            }
          });
      },
    }),
    g = zt({
      name: t + '/invalidation',
      initialState: Sr,
      reducers: {},
      extraReducers: function (k) {
        k.addCase(d.actions.removeQueryResult, function (S, x) {
          for (
            var C = x.payload.queryCacheKey, _ = 0, E = Object.values(S);
            _ < E.length;
            _++
          )
            for (var P = E[_], N = 0, A = Object.values(P); N < A.length; N++) {
              var D = A[N],
                $ = D.indexOf(C);
              $ !== -1 && D.splice($, 1);
            }
        })
          .addMatcher(s, function (S, x) {
            for (
              var C, _, E, P, N = l(x).provided, A = 0, D = Object.entries(N);
              A < D.length;
              A++
            )
              for (
                var $ = D[A], j = $[0], Q = $[1], T = 0, b = Object.entries(Q);
                T < b.length;
                T++
              )
                for (
                  var I = b[T],
                    F = I[0],
                    q = I[1],
                    B =
                      (P = (_ = (C = S[j]) != null ? C : (S[j] = {}))[
                        (E = F || '__internal_without_id')
                      ]) != null
                        ? P
                        : (_[E] = []),
                    H = 0,
                    K = q;
                  H < K.length;
                  H++
                ) {
                  var Y = K[H],
                    se = B.includes(Y);
                  se || B.push(Y);
                }
          })
          .addMatcher(ar(On(n), Ou(n)), function (S, x) {
            for (
              var C,
                _,
                E,
                P,
                N = Jh(x, 'providesTags', o, a),
                A = x.meta.arg.queryCacheKey,
                D = 0,
                $ = Object.values(S);
              D < $.length;
              D++
            )
              for (
                var j = $[D], Q = 0, T = Object.values(j);
                Q < T.length;
                Q++
              ) {
                var b = T[Q],
                  I = b.indexOf(A);
                I !== -1 && b.splice(I, 1);
              }
            for (var F = 0, q = N; F < q.length; F++) {
              var B = q[F],
                H = B.type,
                K = B.id,
                Y =
                  (P = (_ = (C = S[H]) != null ? C : (S[H] = {}))[
                    (E = K || '__internal_without_id')
                  ]) != null
                    ? P
                    : (_[E] = []),
                se = Y.includes(A);
              se || Y.push(A);
            }
          });
      },
    }),
    w = zt({
      name: t + '/subscriptions',
      initialState: Sr,
      reducers: {
        updateSubscriptionOptions: function (k, S) {},
        unsubscribeQueryResult: function (k, S) {},
        internal_probeSubscription: function (k, S) {},
      },
    }),
    O = zt({
      name: t + '/internalSubscriptions',
      initialState: Sr,
      reducers: {
        subscriptionsUpdated: {
          reducer: function (k, S) {
            return uf(k, S.payload);
          },
          prepare: ll(),
        },
      },
    }),
    y = zt({
      name: t + '/config',
      initialState: me(
        { online: g1(), focused: w1(), middlewareRegistered: !1 },
        p
      ),
      reducers: {
        middlewareRegistered: function (k, S) {
          var x = S.payload;
          k.middlewareRegistered =
            k.middlewareRegistered === 'conflict' || u !== x ? 'conflict' : !0;
        },
      },
      extraReducers: function (k) {
        k.addCase(Fa, function (S) {
          S.online = !0;
        })
          .addCase(Yh, function (S) {
            S.online = !1;
          })
          .addCase($a, function (S) {
            S.focused = !0;
          })
          .addCase(Kh, function (S) {
            S.focused = !1;
          })
          .addMatcher(s, function (S) {
            return me({}, S);
          });
      },
    }),
    c = Eh({
      queries: d.reducer,
      mutations: v.reducer,
      provided: g.reducer,
      subscriptions: O.reducer,
      config: y.reducer,
    }),
    f = function (k, S) {
      return c(h.match(S) ? void 0 : k, S);
    },
    m = Ot(
      me(
        me(me(me(me({}, y.actions), d.actions), w.actions), O.actions),
        v.actions
      ),
      {
        unsubscribeMutationResult: v.actions.removeMutationResult,
        resetApiState: h,
      }
    );
  return { reducer: f, actions: m };
}
var vn = Symbol.for('RTKQ/skipToken'),
  Zh = { status: re.uninitialized },
  Df = hi(Zh, function () {}),
  Lf = hi(Zh, function () {});
function O1(e) {
  var t = e.serializeQueryArgs,
    n = e.reducerPath,
    r = function (p) {
      return Df;
    },
    i = function (p) {
      return Lf;
    };
  return {
    buildQuerySelector: l,
    buildMutationSelector: s,
    selectInvalidatedBy: a,
  };
  function o(p) {
    return me(me({}, p), m1(p.status));
  }
  function u(p) {
    var h = p[n];
    return h;
  }
  function l(p, h) {
    return function (d) {
      var v = t({ queryArgs: d, endpointDefinition: h, endpointName: p }),
        g = function (O) {
          var y, c, f;
          return (f =
            (c = (y = u(O)) == null ? void 0 : y.queries) == null
              ? void 0
              : c[v]) != null
            ? f
            : Df;
        },
        w = d === vn ? r : g;
      return $r(w, o);
    };
  }
  function s() {
    return function (p) {
      var h, d;
      typeof p == 'object' ? (d = (h = si(p)) != null ? h : vn) : (d = p);
      var v = function (w) {
          var O, y, c;
          return (c =
            (y = (O = u(w)) == null ? void 0 : O.mutations) == null
              ? void 0
              : y[d]) != null
            ? c
            : Lf;
        },
        g = d === vn ? i : v;
      return $r(g, o);
    };
  }
  function a(p, h) {
    for (
      var d, v = p[n], g = new Set(), w = 0, O = h.map(ks);
      w < O.length;
      w++
    ) {
      var y = O[w],
        c = v.provided[y.type];
      if (c)
        for (
          var f =
              (d = y.id !== void 0 ? c[y.id] : Nf(Object.values(c))) != null
                ? d
                : [],
            m = 0,
            k = f;
          m < k.length;
          m++
        ) {
          var S = k[m];
          g.add(S);
        }
    }
    return Nf(
      Array.from(g.values()).map(function (x) {
        var C = v.queries[x];
        return C
          ? [
              {
                queryCacheKey: x,
                endpointName: C.endpointName,
                originalArgs: C.originalArgs,
              },
            ]
          : [];
      })
    );
  }
}
var ji = WeakMap ? new WeakMap() : void 0,
  zf = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = '',
      i = ji == null ? void 0 : ji.get(n);
    if (typeof i == 'string') r = i;
    else {
      var o = JSON.stringify(n, function (u, l) {
        return ir(l)
          ? Object.keys(l)
              .sort()
              .reduce(function (s, a) {
                return (s[a] = l[a]), s;
              }, {})
          : l;
      });
      ir(n) && (ji == null || ji.set(n, o)), (r = o);
    }
    return t + '(' + r + ')';
  };
function _1() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (r) {
    var i = ds(function (p) {
        var h, d;
        return (d = r.extractRehydrationInfo) == null
          ? void 0
          : d.call(r, p, {
              reducerPath: (h = r.reducerPath) != null ? h : 'api',
            });
      }),
      o = Ot(
        me(
          {
            reducerPath: 'api',
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: !1,
            refetchOnFocus: !1,
            refetchOnReconnect: !1,
          },
          r
        ),
        {
          extractRehydrationInfo: i,
          serializeQueryArgs: function (p) {
            var h = zf;
            if ('serializeQueryArgs' in p.endpointDefinition) {
              var d = p.endpointDefinition.serializeQueryArgs;
              h = function (v) {
                var g = d(v);
                return typeof g == 'string'
                  ? g
                  : zf(Ot(me({}, v), { queryArgs: g }));
              };
            } else r.serializeQueryArgs && (h = r.serializeQueryArgs);
            return h(p);
          },
          tagTypes: zo([], r.tagTypes || []),
        }
      ),
      u = {
        endpointDefinitions: {},
        batch: function (p) {
          p();
        },
        apiUid: Th(),
        extractRehydrationInfo: i,
        hasRehydrationInfo: ds(function (p) {
          return i(p) != null;
        }),
      },
      l = {
        injectEndpoints: a,
        enhanceEndpoints: function (p) {
          var h = p.addTagTypes,
            d = p.endpoints;
          if (h)
            for (var v = 0, g = h; v < g.length; v++) {
              var w = g[v];
              o.tagTypes.includes(w) || o.tagTypes.push(w);
            }
          if (d)
            for (var O = 0, y = Object.entries(d); O < y.length; O++) {
              var c = y[O],
                f = c[0],
                m = c[1];
              typeof m == 'function'
                ? m(u.endpointDefinitions[f])
                : Object.assign(u.endpointDefinitions[f] || {}, m);
            }
          return l;
        },
      },
      s = e.map(function (p) {
        return p.init(l, o, u);
      });
    function a(p) {
      for (
        var h = p.endpoints({
            query: function (m) {
              return Ot(me({}, m), { type: wt.query });
            },
            mutation: function (m) {
              return Ot(me({}, m), { type: wt.mutation });
            },
          }),
          d = 0,
          v = Object.entries(h);
        d < v.length;
        d++
      ) {
        var g = v[d],
          w = g[0],
          O = g[1];
        if (!p.overrideExisting && w in u.endpointDefinitions) {
          typeof process < 'u';
          continue;
        }
        u.endpointDefinitions[w] = O;
        for (var y = 0, c = s; y < c.length; y++) {
          var f = c[y];
          f.injectEndpoint(w, O);
        }
      }
      return l;
    }
    return l.injectEndpoints({ endpoints: r.endpoints });
  };
}
function P1(e) {
  for (var t in e) return !1;
  return !0;
}
var T1 = 2147483647 / 1e3 - 1,
  R1 = function (e) {
    var t = e.reducerPath,
      n = e.api,
      r = e.context,
      i = e.internalState,
      o = n.internalActions,
      u = o.removeQueryResult,
      l = o.unsubscribeQueryResult;
    function s(d) {
      var v = i.currentSubscriptions[d];
      return !!v && !P1(v);
    }
    var a = {},
      p = function (d, v, g) {
        var w;
        if (l.match(d)) {
          var O = v.getState()[t],
            y = d.payload.queryCacheKey;
          h(
            y,
            (w = O.queries[y]) == null ? void 0 : w.endpointName,
            v,
            O.config
          );
        }
        if (n.util.resetApiState.match(d))
          for (var c = 0, f = Object.entries(a); c < f.length; c++) {
            var m = f[c],
              k = m[0],
              S = m[1];
            S && clearTimeout(S), delete a[k];
          }
        if (r.hasRehydrationInfo(d))
          for (
            var O = v.getState()[t],
              x = r.extractRehydrationInfo(d).queries,
              C = 0,
              _ = Object.entries(x);
            C < _.length;
            C++
          ) {
            var E = _[C],
              y = E[0],
              P = E[1];
            h(y, P == null ? void 0 : P.endpointName, v, O.config);
          }
      };
    function h(d, v, g, w) {
      var O,
        y = r.endpointDefinitions[v],
        c =
          (O = y == null ? void 0 : y.keepUnusedDataFor) != null
            ? O
            : w.keepUnusedDataFor;
      if (c !== 1 / 0) {
        var f = Math.max(0, Math.min(c, T1));
        if (!s(d)) {
          var m = a[d];
          m && clearTimeout(m),
            (a[d] = setTimeout(function () {
              s(d) || g.dispatch(u({ queryCacheKey: d })), delete a[d];
            }, f * 1e3));
        }
      }
    }
    return p;
  },
  N1 = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.context.endpointDefinitions,
      i = e.mutationThunk,
      o = e.api,
      u = e.assertTagType,
      l = e.refetchQuery,
      s = o.internalActions.removeQueryResult,
      a = ar(On(i), Ou(i)),
      p = function (d, v) {
        a(d) && h(Jh(d, 'invalidatesTags', r, u), v),
          o.util.invalidateTags.match(d) &&
            h(Gh(d.payload, void 0, void 0, void 0, void 0, u), v);
      };
    function h(d, v) {
      var g = v.getState(),
        w = g[t],
        O = o.util.selectInvalidatedBy(g, d);
      n.batch(function () {
        for (
          var y, c = Array.from(O.values()), f = 0, m = c;
          f < m.length;
          f++
        ) {
          var k = m[f].queryCacheKey,
            S = w.queries[k],
            x = (y = w.subscriptions[k]) != null ? y : {};
          S &&
            (Object.keys(x).length === 0
              ? v.dispatch(s({ queryCacheKey: k }))
              : S.status !== re.uninitialized && v.dispatch(l(S, k)));
        }
      });
    }
    return p;
  },
  A1 = function (e) {
    var t = e.reducerPath,
      n = e.queryThunk,
      r = e.api,
      i = e.refetchQuery,
      o = e.internalState,
      u = {},
      l = function (v, g) {
        (r.internalActions.updateSubscriptionOptions.match(v) ||
          r.internalActions.unsubscribeQueryResult.match(v)) &&
          a(v.payload, g),
          (n.pending.match(v) || (n.rejected.match(v) && v.meta.condition)) &&
            a(v.meta.arg, g),
          (n.fulfilled.match(v) ||
            (n.rejected.match(v) && !v.meta.condition)) &&
            s(v.meta.arg, g),
          r.util.resetApiState.match(v) && h();
      };
    function s(v, g) {
      var w = v.queryCacheKey,
        O = g.getState()[t],
        y = O.queries[w],
        c = o.currentSubscriptions[w];
      if (!(!y || y.status === re.uninitialized)) {
        var f = d(c);
        if (Number.isFinite(f)) {
          var m = u[w];
          m != null &&
            m.timeout &&
            (clearTimeout(m.timeout), (m.timeout = void 0));
          var k = Date.now() + f,
            S = (u[w] = {
              nextPollTimestamp: k,
              pollingInterval: f,
              timeout: setTimeout(function () {
                (S.timeout = void 0), g.dispatch(i(y, w));
              }, f),
            });
        }
      }
    }
    function a(v, g) {
      var w = v.queryCacheKey,
        O = g.getState()[t],
        y = O.queries[w],
        c = o.currentSubscriptions[w];
      if (!(!y || y.status === re.uninitialized)) {
        var f = d(c);
        if (!Number.isFinite(f)) {
          p(w);
          return;
        }
        var m = u[w],
          k = Date.now() + f;
        (!m || k < m.nextPollTimestamp) && s({ queryCacheKey: w }, g);
      }
    }
    function p(v) {
      var g = u[v];
      g != null && g.timeout && clearTimeout(g.timeout), delete u[v];
    }
    function h() {
      for (var v = 0, g = Object.keys(u); v < g.length; v++) {
        var w = g[v];
        p(w);
      }
    }
    function d(v) {
      v === void 0 && (v = {});
      var g = Number.POSITIVE_INFINITY;
      for (var w in v)
        v[w].pollingInterval && (g = Math.min(v[w].pollingInterval, g));
      return g;
    }
    return l;
  },
  b1 = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.api,
      i = e.refetchQuery,
      o = e.internalState,
      u = r.internalActions.removeQueryResult,
      l = function (a, p) {
        $a.match(a) && s(p, 'refetchOnFocus'),
          Fa.match(a) && s(p, 'refetchOnReconnect');
      };
    function s(a, p) {
      var h = a.getState()[t],
        d = h.queries,
        v = o.currentSubscriptions;
      n.batch(function () {
        for (var g = 0, w = Object.keys(v); g < w.length; g++) {
          var O = w[g],
            y = d[O],
            c = v[O];
          if (!(!c || !y)) {
            var f =
              Object.values(c).some(function (m) {
                return m[p] === !0;
              }) ||
              (Object.values(c).every(function (m) {
                return m[p] === void 0;
              }) &&
                h.config[p]);
            f &&
              (Object.keys(c).length === 0
                ? a.dispatch(u({ queryCacheKey: O }))
                : y.status !== re.uninitialized && a.dispatch(i(y, O)));
          }
        }
      });
    }
    return l;
  },
  $f = new Error('Promise never resolved before cacheEntryRemoved.'),
  I1 = function (e) {
    var t = e.api,
      n = e.reducerPath,
      r = e.context,
      i = e.queryThunk,
      o = e.mutationThunk;
    e.internalState;
    var u = hs(i),
      l = hs(o),
      s = On(i, o),
      a = {},
      p = function (v, g, w) {
        var O = h(v);
        if (i.pending.match(v)) {
          var y = w[n].queries[O],
            c = g.getState()[n].queries[O];
          !y &&
            c &&
            d(
              v.meta.arg.endpointName,
              v.meta.arg.originalArgs,
              O,
              g,
              v.meta.requestId
            );
        } else if (o.pending.match(v)) {
          var c = g.getState()[n].mutations[O];
          c &&
            d(
              v.meta.arg.endpointName,
              v.meta.arg.originalArgs,
              O,
              g,
              v.meta.requestId
            );
        } else if (s(v)) {
          var f = a[O];
          f != null &&
            f.valueResolved &&
            (f.valueResolved({ data: v.payload, meta: v.meta.baseQueryMeta }),
            delete f.valueResolved);
        } else if (
          t.internalActions.removeQueryResult.match(v) ||
          t.internalActions.removeMutationResult.match(v)
        ) {
          var f = a[O];
          f && (delete a[O], f.cacheEntryRemoved());
        } else if (t.util.resetApiState.match(v))
          for (var m = 0, k = Object.entries(a); m < k.length; m++) {
            var S = k[m],
              x = S[0],
              f = S[1];
            delete a[x], f.cacheEntryRemoved();
          }
      };
    function h(v) {
      return u(v)
        ? v.meta.arg.queryCacheKey
        : l(v)
        ? v.meta.requestId
        : t.internalActions.removeQueryResult.match(v)
        ? v.payload.queryCacheKey
        : t.internalActions.removeMutationResult.match(v)
        ? si(v.payload)
        : '';
    }
    function d(v, g, w, O, y) {
      var c = r.endpointDefinitions[v],
        f = c == null ? void 0 : c.onCacheEntryAdded;
      if (f) {
        var m = {},
          k = new Promise(function (P) {
            m.cacheEntryRemoved = P;
          }),
          S = Promise.race([
            new Promise(function (P) {
              m.valueResolved = P;
            }),
            k.then(function () {
              throw $f;
            }),
          ]);
        S.catch(function () {}), (a[w] = m);
        var x = t.endpoints[v].select(c.type === wt.query ? g : w),
          C = O.dispatch(function (P, N, A) {
            return A;
          }),
          _ = Ot(me({}, O), {
            getCacheEntry: function () {
              return x(O.getState());
            },
            requestId: y,
            extra: C,
            updateCachedData:
              c.type === wt.query
                ? function (P) {
                    return O.dispatch(t.util.updateQueryData(v, g, P));
                  }
                : void 0,
            cacheDataLoaded: S,
            cacheEntryRemoved: k,
          }),
          E = f(g, _);
        Promise.resolve(E).catch(function (P) {
          if (P !== $f) throw P;
        });
      }
    }
    return p;
  },
  M1 = function (e) {
    var t = e.api,
      n = e.context,
      r = e.queryThunk,
      i = e.mutationThunk,
      o = Na(r, i),
      u = ui(r, i),
      l = On(r, i),
      s = {},
      a = function (p, h) {
        var d, v, g;
        if (o(p)) {
          var w = p.meta,
            O = w.requestId,
            y = w.arg,
            c = y.endpointName,
            f = y.originalArgs,
            m = n.endpointDefinitions[c],
            k = m == null ? void 0 : m.onQueryStarted;
          if (k) {
            var S = {},
              x = new Promise(function ($, j) {
                (S.resolve = $), (S.reject = j);
              });
            x.catch(function () {}), (s[O] = S);
            var C = t.endpoints[c].select(m.type === wt.query ? f : O),
              _ = h.dispatch(function ($, j, Q) {
                return Q;
              }),
              E = Ot(me({}, h), {
                getCacheEntry: function () {
                  return C(h.getState());
                },
                requestId: O,
                extra: _,
                updateCachedData:
                  m.type === wt.query
                    ? function ($) {
                        return h.dispatch(t.util.updateQueryData(c, f, $));
                      }
                    : void 0,
                queryFulfilled: x,
              });
            k(f, E);
          }
        } else if (l(p)) {
          var P = p.meta,
            O = P.requestId,
            N = P.baseQueryMeta;
          (d = s[O]) == null || d.resolve({ data: p.payload, meta: N }),
            delete s[O];
        } else if (u(p)) {
          var A = p.meta,
            O = A.requestId,
            D = A.rejectedWithValue,
            N = A.baseQueryMeta;
          (g = s[O]) == null ||
            g.reject({
              error: (v = p.payload) != null ? v : p.error,
              isUnhandledError: !D,
              meta: N,
            }),
            delete s[O];
        }
      };
    return a;
  },
  D1 = function (e) {
    var t = e.api,
      n = e.context.apiUid,
      r = e.reducerPath;
    return function (i, o) {
      var u, l;
      t.util.resetApiState.match(i) &&
        o.dispatch(t.internalActions.middlewareRegistered(n)),
        typeof process < 'u';
    };
  },
  Ff,
  L1 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask.bind(
          typeof window < 'u'
            ? window
            : typeof global < 'u'
            ? global
            : globalThis
        )
      : function (e) {
          return (Ff || (Ff = Promise.resolve())).then(e).catch(function (t) {
            return setTimeout(function () {
              throw t;
            }, 0);
          });
        },
  z1 = function (e) {
    var t = e.api,
      n = e.queryThunk,
      r = e.internalState,
      i = t.reducerPath + '/subscriptions',
      o = null,
      u = !1,
      l = t.internalActions,
      s = l.updateSubscriptionOptions,
      a = l.unsubscribeQueryResult,
      p = function (h, d) {
        var v, g, w, O, y, c, f, m, k;
        if (s.match(d)) {
          var S = d.payload,
            x = S.queryCacheKey,
            C = S.requestId,
            _ = S.options;
          return (
            (v = h == null ? void 0 : h[x]) != null && v[C] && (h[x][C] = _), !0
          );
        }
        if (a.match(d)) {
          var E = d.payload,
            x = E.queryCacheKey,
            C = E.requestId;
          return h[x] && delete h[x][C], !0;
        }
        if (t.internalActions.removeQueryResult.match(d))
          return delete h[d.payload.queryCacheKey], !0;
        if (n.pending.match(d)) {
          var P = d.meta,
            N = P.arg,
            C = P.requestId;
          if (N.subscribe) {
            var A = (w = h[(g = N.queryCacheKey)]) != null ? w : (h[g] = {});
            return (
              (A[C] =
                (y = (O = N.subscriptionOptions) != null ? O : A[C]) != null
                  ? y
                  : {}),
              !0
            );
          }
        }
        if (n.rejected.match(d)) {
          var D = d.meta,
            $ = D.condition,
            N = D.arg,
            C = D.requestId;
          if ($ && N.subscribe) {
            var A = (f = h[(c = N.queryCacheKey)]) != null ? f : (h[c] = {});
            return (
              (A[C] =
                (k = (m = N.subscriptionOptions) != null ? m : A[C]) != null
                  ? k
                  : {}),
              !0
            );
          }
        }
        return !1;
      };
    return function (h, d) {
      var v, g;
      if (
        (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))),
        t.util.resetApiState.match(h))
      )
        return (o = r.currentSubscriptions = {}), [!0, !1];
      if (t.internalActions.internal_probeSubscription.match(h)) {
        var w = h.payload,
          O = w.queryCacheKey,
          y = w.requestId,
          c = !!((v = r.currentSubscriptions[O]) != null && v[y]);
        return [!1, c];
      }
      var f = p(r.currentSubscriptions, h);
      if (f) {
        u ||
          (L1(function () {
            var x = JSON.parse(JSON.stringify(r.currentSubscriptions)),
              C = kh(o, function () {
                return x;
              }),
              _ = C[1];
            d.next(t.internalActions.subscriptionsUpdated(_)),
              (o = x),
              (u = !1);
          }),
          (u = !0));
        var m = !!((g = h.type) != null && g.startsWith(i)),
          k = n.rejected.match(h) && h.meta.condition && !!h.meta.arg.subscribe,
          S = !m && !k;
        return [S, !1];
      }
      return [!0, !1];
    };
  };
function $1(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.api,
    i = e.context,
    o = i.apiUid,
    u = { invalidateTags: $e(t + '/invalidateTags') },
    l = function (h) {
      return !!h && typeof h.type == 'string' && h.type.startsWith(t + '/');
    },
    s = [D1, R1, N1, A1, I1, M1],
    a = function (h) {
      var d = !1,
        v = { currentSubscriptions: {} },
        g = Ot(me({}, e), { internalState: v, refetchQuery: p }),
        w = s.map(function (c) {
          return c(g);
        }),
        O = z1(g),
        y = b1(g);
      return function (c) {
        return function (f) {
          d ||
            ((d = !0), h.dispatch(r.internalActions.middlewareRegistered(o)));
          var m = Ot(me({}, h), { next: c }),
            k = h.getState(),
            S = O(f, m, k),
            x = S[0],
            C = S[1],
            _;
          if (
            (x ? (_ = c(f)) : (_ = C),
            h.getState()[t] && (y(f, m, k), l(f) || i.hasRehydrationInfo(f)))
          )
            for (var E = 0, P = w; E < P.length; E++) {
              var N = P[E];
              N(f, m, k);
            }
          return _;
        };
      };
    };
  return { middleware: a, actions: u };
  function p(h, d, v) {
    return (
      v === void 0 && (v = {}),
      n(
        me(
          {
            type: 'query',
            endpointName: h.endpointName,
            originalArgs: h.originalArgs,
            subscribe: !1,
            forceRefetch: !0,
            queryCacheKey: d,
          },
          v
        )
      )
    );
  }
}
function Mt(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, zo([e], t));
}
var jf = Symbol(),
  F1 = function () {
    return {
      name: jf,
      init: function (e, t, n) {
        var r = t.baseQuery,
          i = t.tagTypes,
          o = t.reducerPath,
          u = t.serializeQueryArgs,
          l = t.keepUnusedDataFor,
          s = t.refetchOnMountOrArgChange,
          a = t.refetchOnFocus,
          p = t.refetchOnReconnect;
        gg();
        var h = function (B) {
          return typeof process < 'u', B;
        };
        Object.assign(e, {
          reducerPath: o,
          endpoints: {},
          internalActions: {
            onOnline: Fa,
            onOffline: Yh,
            onFocus: $a,
            onFocusLost: Kh,
          },
          util: {},
        });
        var d = E1({
            baseQuery: r,
            reducerPath: o,
            context: n,
            api: e,
            serializeQueryArgs: u,
          }),
          v = d.queryThunk,
          g = d.mutationThunk,
          w = d.patchQueryData,
          O = d.updateQueryData,
          y = d.upsertQueryData,
          c = d.prefetch,
          f = d.buildMatchThunkActions,
          m = C1({
            context: n,
            queryThunk: v,
            mutationThunk: g,
            reducerPath: o,
            assertTagType: h,
            config: {
              refetchOnFocus: a,
              refetchOnReconnect: p,
              refetchOnMountOrArgChange: s,
              keepUnusedDataFor: l,
              reducerPath: o,
            },
          }),
          k = m.reducer,
          S = m.actions;
        Mt(e.util, {
          patchQueryData: w,
          updateQueryData: O,
          upsertQueryData: y,
          prefetch: c,
          resetApiState: S.resetApiState,
        }),
          Mt(e.internalActions, S);
        var x = $1({
            reducerPath: o,
            context: n,
            queryThunk: v,
            mutationThunk: g,
            api: e,
            assertTagType: h,
          }),
          C = x.middleware,
          _ = x.actions;
        Mt(e.util, _), Mt(e, { reducer: k, middleware: C });
        var E = O1({ serializeQueryArgs: u, reducerPath: o }),
          P = E.buildQuerySelector,
          N = E.buildMutationSelector,
          A = E.selectInvalidatedBy;
        Mt(e.util, { selectInvalidatedBy: A });
        var D = x1({
            queryThunk: v,
            mutationThunk: g,
            api: e,
            serializeQueryArgs: u,
            context: n,
          }),
          $ = D.buildInitiateQuery,
          j = D.buildInitiateMutation,
          Q = D.getRunningMutationThunk,
          T = D.getRunningMutationsThunk,
          b = D.getRunningQueriesThunk,
          I = D.getRunningQueryThunk,
          F = D.getRunningOperationPromises,
          q = D.removalWarning;
        return (
          Mt(e.util, {
            getRunningOperationPromises: F,
            getRunningOperationPromise: q,
            getRunningMutationThunk: Q,
            getRunningMutationsThunk: T,
            getRunningQueryThunk: I,
            getRunningQueriesThunk: b,
          }),
          {
            name: jf,
            injectEndpoint: function (B, H) {
              var K,
                Y,
                se = e;
              (Y = (K = se.endpoints)[B]) != null || (K[B] = {}),
                Xh(H)
                  ? Mt(
                      se.endpoints[B],
                      { name: B, select: P(B, H), initiate: $(B, H) },
                      f(v, B)
                    )
                  : S1(H) &&
                    Mt(
                      se.endpoints[B],
                      { name: B, select: N(), initiate: j(B) },
                      f(g, B)
                    );
            },
          }
        );
      },
    };
  },
  j1 =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  q1 = Object.defineProperty,
  Q1 = Object.defineProperties,
  B1 = Object.getOwnPropertyDescriptors,
  qf = Object.getOwnPropertySymbols,
  U1 = Object.prototype.hasOwnProperty,
  V1 = Object.prototype.propertyIsEnumerable,
  Qf = function (e, t, n) {
    return t in e
      ? q1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  St = function (e, t) {
    for (var n in t || (t = {})) U1.call(t, n) && Qf(e, n, t[n]);
    if (qf)
      for (var r = 0, i = qf(t); r < i.length; r++) {
        var n = i[r];
        V1.call(t, n) && Qf(e, n, t[n]);
      }
    return e;
  },
  io = function (e, t) {
    return Q1(e, B1(t));
  };
function Bf(e, t, n, r) {
  var i = z.useMemo(
      function () {
        return {
          queryArgs: e,
          serialized:
            typeof e == 'object'
              ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
              : e,
        };
      },
      [e, t, n, r]
    ),
    o = z.useRef(i);
  return (
    z.useEffect(
      function () {
        o.current.serialized !== i.serialized && (o.current = i);
      },
      [i]
    ),
    o.current.serialized === i.serialized ? o.current.queryArgs : e
  );
}
var fl = Symbol();
function dl(e) {
  var t = z.useRef(e);
  return (
    z.useEffect(
      function () {
        No(t.current, e) || (t.current = e);
      },
      [e]
    ),
    No(t.current, e) ? t.current : e
  );
}
var qi = WeakMap ? new WeakMap() : void 0,
  W1 = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = '',
      i = qi == null ? void 0 : qi.get(n);
    if (typeof i == 'string') r = i;
    else {
      var o = JSON.stringify(n, function (u, l) {
        return ir(l)
          ? Object.keys(l)
              .sort()
              .reduce(function (s, a) {
                return (s[a] = l[a]), s;
              }, {})
          : l;
      });
      ir(n) && (qi == null || qi.set(n, o)), (r = o);
    }
    return t + '(' + r + ')';
  },
  H1 =
    typeof window < 'u' && window.document && window.document.createElement
      ? z.useLayoutEffect
      : z.useEffect,
  K1 = function (e) {
    return e;
  },
  Y1 = function (e) {
    return e.isUninitialized
      ? io(St({}, e), {
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: re.pending,
        })
      : e;
  };
function X1(e) {
  var t = e.api,
    n = e.moduleOptions,
    r = n.batch,
    i = n.useDispatch,
    o = n.useSelector,
    u = n.useStore,
    l = n.unstable__sideEffectsInRender,
    s = e.serializeQueryArgs,
    a = e.context,
    p = l
      ? function (w) {
          return w();
        }
      : z.useEffect;
  return { buildQueryHooks: v, buildMutationHook: g, usePrefetch: d };
  function h(w, O, y) {
    if (O != null && O.endpointName && w.isUninitialized) {
      var c = O.endpointName,
        f = a.endpointDefinitions[c];
      s({
        queryArgs: O.originalArgs,
        endpointDefinition: f,
        endpointName: c,
      }) === s({ queryArgs: y, endpointDefinition: f, endpointName: c }) &&
        (O = void 0);
    }
    var m = w.isSuccess ? w.data : O == null ? void 0 : O.data;
    m === void 0 && (m = w.data);
    var k = m !== void 0,
      S = w.isLoading,
      x = !k && S,
      C = w.isSuccess || (S && k);
    return io(St({}, w), {
      data: m,
      currentData: w.data,
      isFetching: S,
      isLoading: x,
      isSuccess: C,
    });
  }
  function d(w, O) {
    var y = i(),
      c = dl(O);
    return z.useCallback(
      function (f, m) {
        return y(t.util.prefetch(w, f, St(St({}, c), m)));
      },
      [w, y, c]
    );
  }
  function v(w) {
    var O = function (f, m) {
        var k = m === void 0 ? {} : m,
          S = k.refetchOnReconnect,
          x = k.refetchOnFocus,
          C = k.refetchOnMountOrArgChange,
          _ = k.skip,
          E = _ === void 0 ? !1 : _,
          P = k.pollingInterval,
          N = P === void 0 ? 0 : P,
          A = t.endpoints[w].initiate,
          D = i(),
          $ = Bf(E ? vn : f, W1, a.endpointDefinitions[w], w),
          j = dl({
            refetchOnReconnect: S,
            refetchOnFocus: x,
            pollingInterval: N,
          }),
          Q = z.useRef(!1),
          T = z.useRef(),
          b = T.current || {},
          I = b.queryCacheKey,
          F = b.requestId,
          q = !1;
        if (I && F) {
          var B = D(
            t.internalActions.internal_probeSubscription({
              queryCacheKey: I,
              requestId: F,
            })
          );
          q = !!B;
        }
        var H = !q && Q.current;
        return (
          p(function () {
            Q.current = q;
          }),
          p(
            function () {
              H && (T.current = void 0);
            },
            [H]
          ),
          p(
            function () {
              var K,
                Y = T.current;
              if ((typeof process < 'u', $ === vn)) {
                Y == null || Y.unsubscribe(), (T.current = void 0);
                return;
              }
              var se = (K = T.current) == null ? void 0 : K.subscriptionOptions;
              if (!Y || Y.arg !== $) {
                Y == null || Y.unsubscribe();
                var sn = D(A($, { subscriptionOptions: j, forceRefetch: C }));
                T.current = sn;
              } else j !== se && Y.updateSubscriptionOptions(j);
            },
            [D, A, C, $, j, H]
          ),
          z.useEffect(function () {
            return function () {
              var K;
              (K = T.current) == null || K.unsubscribe(), (T.current = void 0);
            };
          }, []),
          z.useMemo(function () {
            return {
              refetch: function () {
                var K;
                if (!T.current)
                  throw new Error(
                    'Cannot refetch a query that has not been started yet.'
                  );
                return (K = T.current) == null ? void 0 : K.refetch();
              },
            };
          }, [])
        );
      },
      y = function (f) {
        var m = f === void 0 ? {} : f,
          k = m.refetchOnReconnect,
          S = m.refetchOnFocus,
          x = m.pollingInterval,
          C = x === void 0 ? 0 : x,
          _ = t.endpoints[w].initiate,
          E = i(),
          P = z.useState(fl),
          N = P[0],
          A = P[1],
          D = z.useRef(),
          $ = dl({
            refetchOnReconnect: k,
            refetchOnFocus: S,
            pollingInterval: C,
          });
        p(
          function () {
            var T,
              b,
              I = (T = D.current) == null ? void 0 : T.subscriptionOptions;
            $ !== I &&
              ((b = D.current) == null || b.updateSubscriptionOptions($));
          },
          [$]
        );
        var j = z.useRef($);
        p(
          function () {
            j.current = $;
          },
          [$]
        );
        var Q = z.useCallback(
          function (T, b) {
            b === void 0 && (b = !1);
            var I;
            return (
              r(function () {
                var F;
                (F = D.current) == null || F.unsubscribe(),
                  (D.current = I =
                    E(
                      _(T, { subscriptionOptions: j.current, forceRefetch: !b })
                    )),
                  A(T);
              }),
              I
            );
          },
          [E, _]
        );
        return (
          z.useEffect(function () {
            return function () {
              var T;
              (T = D == null ? void 0 : D.current) == null || T.unsubscribe();
            };
          }, []),
          z.useEffect(
            function () {
              N !== fl && !D.current && Q(N, !0);
            },
            [N, Q]
          ),
          z.useMemo(
            function () {
              return [Q, N];
            },
            [Q, N]
          )
        );
      },
      c = function (f, m) {
        var k = m === void 0 ? {} : m,
          S = k.skip,
          x = S === void 0 ? !1 : S,
          C = k.selectFromResult,
          _ = t.endpoints[w].select,
          E = Bf(x ? vn : f, s, a.endpointDefinitions[w], w),
          P = z.useRef(),
          N = z.useMemo(
            function () {
              return $r(
                [
                  _(E),
                  function (Q, T) {
                    return T;
                  },
                  function (Q) {
                    return E;
                  },
                ],
                h
              );
            },
            [_, E]
          ),
          A = z.useMemo(
            function () {
              return C ? $r([N], C) : N;
            },
            [N, C]
          ),
          D = o(function (Q) {
            return A(Q, P.current);
          }, No),
          $ = u(),
          j = N($.getState(), P.current);
        return (
          H1(
            function () {
              P.current = j;
            },
            [j]
          ),
          D
        );
      };
    return {
      useQueryState: c,
      useQuerySubscription: O,
      useLazyQuerySubscription: y,
      useLazyQuery: function (f) {
        var m = y(f),
          k = m[0],
          S = m[1],
          x = c(S, io(St({}, f), { skip: S === fl })),
          C = z.useMemo(
            function () {
              return { lastArg: S };
            },
            [S]
          );
        return z.useMemo(
          function () {
            return [k, x, C];
          },
          [k, x, C]
        );
      },
      useQuery: function (f, m) {
        var k = O(f, m),
          S = c(
            f,
            St(
              {
                selectFromResult:
                  f === vn || (m != null && m.skip) ? void 0 : Y1,
              },
              m
            )
          ),
          x = S.data,
          C = S.status,
          _ = S.isLoading,
          E = S.isSuccess,
          P = S.isError,
          N = S.error;
        return (
          z.useDebugValue({
            data: x,
            status: C,
            isLoading: _,
            isSuccess: E,
            isError: P,
            error: N,
          }),
          z.useMemo(
            function () {
              return St(St({}, S), k);
            },
            [S, k]
          )
        );
      },
    };
  }
  function g(w) {
    return function (O) {
      var y = O === void 0 ? {} : O,
        c = y.selectFromResult,
        f = c === void 0 ? K1 : c,
        m = y.fixedCacheKey,
        k = t.endpoints[w],
        S = k.select,
        x = k.initiate,
        C = i(),
        _ = z.useState(),
        E = _[0],
        P = _[1];
      z.useEffect(
        function () {
          return function () {
            (E != null && E.arg.fixedCacheKey) || E == null || E.reset();
          };
        },
        [E]
      );
      var N = z.useCallback(
          function (Y) {
            var se = C(x(Y, { fixedCacheKey: m }));
            return P(se), se;
          },
          [C, x, m]
        ),
        A = (E || {}).requestId,
        D = z.useMemo(
          function () {
            return $r(
              [
                S({
                  fixedCacheKey: m,
                  requestId: E == null ? void 0 : E.requestId,
                }),
              ],
              f
            );
          },
          [S, E, f, m]
        ),
        $ = o(D, No),
        j = m == null ? (E == null ? void 0 : E.arg.originalArgs) : void 0,
        Q = z.useCallback(
          function () {
            r(function () {
              E && P(void 0),
                m &&
                  C(
                    t.internalActions.removeMutationResult({
                      requestId: A,
                      fixedCacheKey: m,
                    })
                  );
            });
          },
          [C, m, E, A]
        ),
        T = $.endpointName,
        b = $.data,
        I = $.status,
        F = $.isLoading,
        q = $.isSuccess,
        B = $.isError,
        H = $.error;
      z.useDebugValue({
        endpointName: T,
        data: b,
        status: I,
        isLoading: F,
        isSuccess: q,
        isError: B,
        error: H,
      });
      var K = z.useMemo(
        function () {
          return io(St({}, $), { originalArgs: j, reset: Q });
        },
        [$, j, Q]
      );
      return z.useMemo(
        function () {
          return [N, K];
        },
        [N, K]
      );
    };
  }
}
var $o;
(function (e) {
  (e.query = 'query'), (e.mutation = 'mutation');
})($o || ($o = {}));
function G1(e) {
  return e.type === $o.query;
}
function J1(e) {
  return e.type === $o.mutation;
}
function pl(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function Qi(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, j1([e], t));
}
var Z1 = Symbol(),
  ew = function (e) {
    var t = e === void 0 ? {} : e,
      n = t.batch,
      r = n === void 0 ? ma.unstable_batchedUpdates : n,
      i = t.useDispatch,
      o = i === void 0 ? sr : i,
      u = t.useSelector,
      l = u === void 0 ? wa : u,
      s = t.useStore,
      a = s === void 0 ? yh : s,
      p = t.unstable__sideEffectsInRender,
      h = p === void 0 ? !1 : p;
    return {
      name: Z1,
      init: function (d, v, g) {
        var w = v.serializeQueryArgs,
          O = d,
          y = X1({
            api: d,
            moduleOptions: {
              batch: r,
              useDispatch: o,
              useSelector: l,
              useStore: a,
              unstable__sideEffectsInRender: h,
            },
            serializeQueryArgs: w,
            context: g,
          }),
          c = y.buildQueryHooks,
          f = y.buildMutationHook,
          m = y.usePrefetch;
        return (
          Qi(O, { usePrefetch: m }),
          Qi(g, { batch: r }),
          {
            injectEndpoint: function (k, S) {
              if (G1(S)) {
                var x = c(k),
                  C = x.useQuery,
                  _ = x.useLazyQuery,
                  E = x.useLazyQuerySubscription,
                  P = x.useQueryState,
                  N = x.useQuerySubscription;
                Qi(O.endpoints[k], {
                  useQuery: C,
                  useLazyQuery: _,
                  useLazyQuerySubscription: E,
                  useQueryState: P,
                  useQuerySubscription: N,
                }),
                  (d['use' + pl(k) + 'Query'] = C),
                  (d['useLazy' + pl(k) + 'Query'] = _);
              } else if (J1(S)) {
                var A = f(k);
                Qi(O.endpoints[k], { useMutation: A }),
                  (d['use' + pl(k) + 'Mutation'] = A);
              }
            },
          }
        );
      },
    };
  },
  tw = _1(F1(), ew());
const nw = {
    baseUrl: 'http://192.168.31.95:5050',
    prepareHeaders: async function (e, { getState: t, endpoints: n }) {
      var i, o;
      const r =
        (o = (i = t()) == null ? void 0 : i.auth) == null
          ? void 0
          : o.accessToken;
      return r && e.set('Authorization', `Bearar ${r}`), e;
    },
  },
  hl = tw({ reducerPath: 'api', baseQuery: nw, endpoints: (e) => ({}) }),
  rw = Yg({
    reducer: { [hl.reducerPath]: hl.reducer, chat: l0, testFormData: f1 },
    devTools: import.meta.NODE_ENV !== 'production',
    middleware: (e) => e().concat(hl.middleware),
  });
vl.createRoot(document.getElementById('root')).render(
  M.jsx(fg, { store: rw, children: M.jsx(s1, {}) })
);
