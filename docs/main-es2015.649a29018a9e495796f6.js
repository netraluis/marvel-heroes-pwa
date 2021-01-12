/*! For license information please see main-es2015.649a29018a9e495796f6.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (e, t, n) {
      e.exports = n("zUnb");
    },
    yLV6: function (e, t, n) {
      var r;
      !(function (s, i, o, a) {
        "use strict";
        var l,
          c = ["", "webkit", "Moz", "MS", "ms", "o"],
          u = i.createElement("div"),
          h = Math.round,
          d = Math.abs,
          p = Date.now;
        function f(e, t, n) {
          return setTimeout(w(e, n), t);
        }
        function m(e, t, n) {
          return !!Array.isArray(e) && (g(e, n[t], n), !0);
        }
        function g(e, t, n) {
          var r;
          if (e)
            if (e.forEach) e.forEach(t, n);
            else if (void 0 !== e.length)
              for (r = 0; r < e.length; ) t.call(n, e[r], r, e), r++;
            else for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
        }
        function y(e, t, n) {
          var r = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
          return function () {
            var t = new Error("get-stack-trace"),
              n =
                t && t.stack
                  ? t.stack
                      .replace(/^[^\(]+?[\n$]/gm, "")
                      .replace(/^\s+at\s+/gm, "")
                      .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                  : "Unknown Stack Trace",
              i = s.console && (s.console.warn || s.console.log);
            return i && i.call(s.console, r, n), e.apply(this, arguments);
          };
        }
        l =
          "function" != typeof Object.assign
            ? function (e) {
                if (null == e)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                  var r = arguments[n];
                  if (null != r)
                    for (var s in r) r.hasOwnProperty(s) && (t[s] = r[s]);
                }
                return t;
              }
            : Object.assign;
        var _ = y(
            function (e, t, n) {
              for (var r = Object.keys(t), s = 0; s < r.length; )
                (!n || (n && void 0 === e[r[s]])) && (e[r[s]] = t[r[s]]), s++;
              return e;
            },
            "extend",
            "Use `assign`."
          ),
          v = y(
            function (e, t) {
              return _(e, t, !0);
            },
            "merge",
            "Use `assign`."
          );
        function b(e, t, n) {
          var r,
            s = t.prototype;
          ((r = e.prototype = Object.create(s)).constructor = e),
            (r._super = s),
            n && l(r, n);
        }
        function w(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        function E(e, t) {
          return "function" == typeof e ? e.apply((t && t[0]) || void 0, t) : e;
        }
        function S(e, t) {
          return void 0 === e ? t : e;
        }
        function C(e, t, n) {
          g(I(t), function (t) {
            e.addEventListener(t, n, !1);
          });
        }
        function T(e, t, n) {
          g(I(t), function (t) {
            e.removeEventListener(t, n, !1);
          });
        }
        function x(e, t) {
          for (; e; ) {
            if (e == t) return !0;
            e = e.parentNode;
          }
          return !1;
        }
        function k(e, t) {
          return e.indexOf(t) > -1;
        }
        function I(e) {
          return e.trim().split(/\s+/g);
        }
        function A(e, t, n) {
          if (e.indexOf && !n) return e.indexOf(t);
          for (var r = 0; r < e.length; ) {
            if ((n && e[r][n] == t) || (!n && e[r] === t)) return r;
            r++;
          }
          return -1;
        }
        function N(e) {
          return Array.prototype.slice.call(e, 0);
        }
        function R(e, t, n) {
          for (var r = [], s = [], i = 0; i < e.length; ) {
            var o = t ? e[i][t] : e[i];
            A(s, o) < 0 && r.push(e[i]), (s[i] = o), i++;
          }
          return (
            n &&
              (r = t
                ? r.sort(function (e, n) {
                    return e[t] > n[t];
                  })
                : r.sort()),
            r
          );
        }
        function P(e, t) {
          for (
            var n, r, s = t[0].toUpperCase() + t.slice(1), i = 0;
            i < c.length;

          ) {
            if ((r = (n = c[i]) ? n + s : t) in e) return r;
            i++;
          }
        }
        var O = 1;
        function D(e) {
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow || s;
        }
        var M = "ontouchstart" in s,
          F = void 0 !== P(s, "PointerEvent"),
          L =
            M &&
            /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          U = ["x", "y"],
          j = ["clientX", "clientY"];
        function z(e, t) {
          var n = this;
          (this.manager = e),
            (this.callback = t),
            (this.element = e.element),
            (this.target = e.options.inputTarget),
            (this.domHandler = function (t) {
              E(e.options.enable, [e]) && n.handler(t);
            }),
            this.init();
        }
        function H(e, t, n) {
          var r = n.pointers.length,
            s = n.changedPointers.length,
            i = 1 & t && r - s == 0,
            o = 12 & t && r - s == 0;
          (n.isFirst = !!i),
            (n.isFinal = !!o),
            i && (e.session = {}),
            (n.eventType = t),
            (function (e, t) {
              var n = e.session,
                r = t.pointers,
                s = r.length;
              n.firstInput || (n.firstInput = $(t)),
                s > 1 && !n.firstMultiple
                  ? (n.firstMultiple = $(t))
                  : 1 === s && (n.firstMultiple = !1);
              var i = n.firstInput,
                o = n.firstMultiple,
                a = o ? o.center : i.center,
                l = (t.center = V(r));
              (t.timeStamp = p()),
                (t.deltaTime = t.timeStamp - i.timeStamp),
                (t.angle = W(a, l)),
                (t.distance = Q(a, l)),
                (function (e, t) {
                  var n = t.center,
                    r = e.offsetDelta || {},
                    s = e.prevDelta || {},
                    i = e.prevInput || {};
                  (1 !== t.eventType && 4 !== i.eventType) ||
                    ((s = e.prevDelta = { x: i.deltaX || 0, y: i.deltaY || 0 }),
                    (r = e.offsetDelta = { x: n.x, y: n.y })),
                    (t.deltaX = s.x + (n.x - r.x)),
                    (t.deltaY = s.y + (n.y - r.y));
                })(n, t),
                (t.offsetDirection = q(t.deltaX, t.deltaY));
              var c,
                u,
                h = B(t.deltaTime, t.deltaX, t.deltaY);
              (t.overallVelocityX = h.x),
                (t.overallVelocityY = h.y),
                (t.overallVelocity = d(h.x) > d(h.y) ? h.x : h.y),
                (t.scale = o
                  ? ((c = o.pointers),
                    Q((u = r)[0], u[1], j) / Q(c[0], c[1], j))
                  : 1),
                (t.rotation = o
                  ? (function (e, t) {
                      return W(t[1], t[0], j) + W(e[1], e[0], j);
                    })(o.pointers, r)
                  : 0),
                (t.maxPointers = n.prevInput
                  ? t.pointers.length > n.prevInput.maxPointers
                    ? t.pointers.length
                    : n.prevInput.maxPointers
                  : t.pointers.length),
                (function (e, t) {
                  var n,
                    r,
                    s,
                    i,
                    o = e.lastInterval || t,
                    a = t.timeStamp - o.timeStamp;
                  if (8 != t.eventType && (a > 25 || void 0 === o.velocity)) {
                    var l = t.deltaX - o.deltaX,
                      c = t.deltaY - o.deltaY,
                      u = B(a, l, c);
                    (r = u.x),
                      (s = u.y),
                      (n = d(u.x) > d(u.y) ? u.x : u.y),
                      (i = q(l, c)),
                      (e.lastInterval = t);
                  } else
                    (n = o.velocity),
                      (r = o.velocityX),
                      (s = o.velocityY),
                      (i = o.direction);
                  (t.velocity = n),
                    (t.velocityX = r),
                    (t.velocityY = s),
                    (t.direction = i);
                })(n, t);
              var f = e.element;
              x(t.srcEvent.target, f) && (f = t.srcEvent.target),
                (t.target = f);
            })(e, n),
            e.emit("hammer.input", n),
            e.recognize(n),
            (e.session.prevInput = n);
        }
        function $(e) {
          for (var t = [], n = 0; n < e.pointers.length; )
            (t[n] = {
              clientX: h(e.pointers[n].clientX),
              clientY: h(e.pointers[n].clientY),
            }),
              n++;
          return {
            timeStamp: p(),
            pointers: t,
            center: V(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY,
          };
        }
        function V(e) {
          var t = e.length;
          if (1 === t) return { x: h(e[0].clientX), y: h(e[0].clientY) };
          for (var n = 0, r = 0, s = 0; s < t; )
            (n += e[s].clientX), (r += e[s].clientY), s++;
          return { x: h(n / t), y: h(r / t) };
        }
        function B(e, t, n) {
          return { x: t / e || 0, y: n / e || 0 };
        }
        function q(e, t) {
          return e === t ? 1 : d(e) >= d(t) ? (e < 0 ? 2 : 4) : t < 0 ? 8 : 16;
        }
        function Q(e, t, n) {
          n || (n = U);
          var r = t[n[0]] - e[n[0]],
            s = t[n[1]] - e[n[1]];
          return Math.sqrt(r * r + s * s);
        }
        function W(e, t, n) {
          return (
            n || (n = U),
            (180 * Math.atan2(t[n[1]] - e[n[1]], t[n[0]] - e[n[0]])) / Math.PI
          );
        }
        z.prototype = {
          handler: function () {},
          init: function () {
            this.evEl && C(this.element, this.evEl, this.domHandler),
              this.evTarget && C(this.target, this.evTarget, this.domHandler),
              this.evWin && C(D(this.element), this.evWin, this.domHandler);
          },
          destroy: function () {
            this.evEl && T(this.element, this.evEl, this.domHandler),
              this.evTarget && T(this.target, this.evTarget, this.domHandler),
              this.evWin && T(D(this.element), this.evWin, this.domHandler);
          },
        };
        var K = { mousedown: 1, mousemove: 2, mouseup: 4 };
        function Z() {
          (this.evEl = "mousedown"),
            (this.evWin = "mousemove mouseup"),
            (this.pressed = !1),
            z.apply(this, arguments);
        }
        b(Z, z, {
          handler: function (e) {
            var t = K[e.type];
            1 & t && 0 === e.button && (this.pressed = !0),
              2 & t && 1 !== e.which && (t = 4),
              this.pressed &&
                (4 & t && (this.pressed = !1),
                this.callback(this.manager, t, {
                  pointers: [e],
                  changedPointers: [e],
                  pointerType: "mouse",
                  srcEvent: e,
                }));
          },
        });
        var G = {
            pointerdown: 1,
            pointermove: 2,
            pointerup: 4,
            pointercancel: 8,
            pointerout: 8,
          },
          Y = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
          X = "pointerdown",
          J = "pointermove pointerup pointercancel";
        function ee() {
          (this.evEl = X),
            (this.evWin = J),
            z.apply(this, arguments),
            (this.store = this.manager.session.pointerEvents = []);
        }
        s.MSPointerEvent &&
          !s.PointerEvent &&
          ((X = "MSPointerDown"),
          (J = "MSPointerMove MSPointerUp MSPointerCancel")),
          b(ee, z, {
            handler: function (e) {
              var t = this.store,
                n = !1,
                r = e.type.toLowerCase().replace("ms", ""),
                s = G[r],
                i = Y[e.pointerType] || e.pointerType,
                o = "touch" == i,
                a = A(t, e.pointerId, "pointerId");
              1 & s && (0 === e.button || o)
                ? a < 0 && (t.push(e), (a = t.length - 1))
                : 12 & s && (n = !0),
                a < 0 ||
                  ((t[a] = e),
                  this.callback(this.manager, s, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: i,
                    srcEvent: e,
                  }),
                  n && t.splice(a, 1));
            },
          });
        var te = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function ne() {
          (this.evTarget = "touchstart"),
            (this.evWin = "touchstart touchmove touchend touchcancel"),
            (this.started = !1),
            z.apply(this, arguments);
        }
        function re(e, t) {
          var n = N(e.touches),
            r = N(e.changedTouches);
          return 12 & t && (n = R(n.concat(r), "identifier", !0)), [n, r];
        }
        b(ne, z, {
          handler: function (e) {
            var t = te[e.type];
            if ((1 === t && (this.started = !0), this.started)) {
              var n = re.call(this, e, t);
              12 & t && n[0].length - n[1].length == 0 && (this.started = !1),
                this.callback(this.manager, t, {
                  pointers: n[0],
                  changedPointers: n[1],
                  pointerType: "touch",
                  srcEvent: e,
                });
            }
          },
        });
        var se = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function ie() {
          (this.evTarget = "touchstart touchmove touchend touchcancel"),
            (this.targetIds = {}),
            z.apply(this, arguments);
        }
        function oe(e, t) {
          var n = N(e.touches),
            r = this.targetIds;
          if (3 & t && 1 === n.length) return (r[n[0].identifier] = !0), [n, n];
          var s,
            i,
            o = N(e.changedTouches),
            a = [],
            l = this.target;
          if (
            ((i = n.filter(function (e) {
              return x(e.target, l);
            })),
            1 === t)
          )
            for (s = 0; s < i.length; ) (r[i[s].identifier] = !0), s++;
          for (s = 0; s < o.length; )
            r[o[s].identifier] && a.push(o[s]),
              12 & t && delete r[o[s].identifier],
              s++;
          return a.length ? [R(i.concat(a), "identifier", !0), a] : void 0;
        }
        function ae() {
          z.apply(this, arguments);
          var e = w(this.handler, this);
          (this.touch = new ie(this.manager, e)),
            (this.mouse = new Z(this.manager, e)),
            (this.primaryTouch = null),
            (this.lastTouches = []);
        }
        function le(e, t) {
          1 & e
            ? ((this.primaryTouch = t.changedPointers[0].identifier),
              ce.call(this, t))
            : 12 & e && ce.call(this, t);
        }
        function ce(e) {
          var t = e.changedPointers[0];
          if (t.identifier === this.primaryTouch) {
            var n = { x: t.clientX, y: t.clientY };
            this.lastTouches.push(n);
            var r = this.lastTouches;
            setTimeout(function () {
              var e = r.indexOf(n);
              e > -1 && r.splice(e, 1);
            }, 2500);
          }
        }
        function ue(e) {
          for (
            var t = e.srcEvent.clientX, n = e.srcEvent.clientY, r = 0;
            r < this.lastTouches.length;
            r++
          ) {
            var s = this.lastTouches[r],
              i = Math.abs(t - s.x),
              o = Math.abs(n - s.y);
            if (i <= 25 && o <= 25) return !0;
          }
          return !1;
        }
        b(ie, z, {
          handler: function (e) {
            var t = se[e.type],
              n = oe.call(this, e, t);
            n &&
              this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: "touch",
                srcEvent: e,
              });
          },
        }),
          b(ae, z, {
            handler: function (e, t, n) {
              var r = "mouse" == n.pointerType;
              if (
                !(
                  r &&
                  n.sourceCapabilities &&
                  n.sourceCapabilities.firesTouchEvents
                )
              ) {
                if ("touch" == n.pointerType) le.call(this, t, n);
                else if (r && ue.call(this, n)) return;
                this.callback(e, t, n);
              }
            },
            destroy: function () {
              this.touch.destroy(), this.mouse.destroy();
            },
          });
        var he = P(u.style, "touchAction"),
          de = void 0 !== he,
          pe = (function () {
            if (!de) return !1;
            var e = {},
              t = s.CSS && s.CSS.supports;
            return (
              [
                "auto",
                "manipulation",
                "pan-y",
                "pan-x",
                "pan-x pan-y",
                "none",
              ].forEach(function (n) {
                e[n] = !t || s.CSS.supports("touch-action", n);
              }),
              e
            );
          })();
        function fe(e, t) {
          (this.manager = e), this.set(t);
        }
        function me(e) {
          (this.options = l({}, this.defaults, e || {})),
            (this.id = O++),
            (this.manager = null),
            (this.options.enable = S(this.options.enable, !0)),
            (this.state = 1),
            (this.simultaneous = {}),
            (this.requireFail = []);
        }
        function ge(e) {
          return 16 & e
            ? "cancel"
            : 8 & e
            ? "end"
            : 4 & e
            ? "move"
            : 2 & e
            ? "start"
            : "";
        }
        function ye(e) {
          return 16 == e
            ? "down"
            : 8 == e
            ? "up"
            : 2 == e
            ? "left"
            : 4 == e
            ? "right"
            : "";
        }
        function _e(e, t) {
          var n = t.manager;
          return n ? n.get(e) : e;
        }
        function ve() {
          me.apply(this, arguments);
        }
        function be() {
          ve.apply(this, arguments), (this.pX = null), (this.pY = null);
        }
        function we() {
          ve.apply(this, arguments);
        }
        function Ee() {
          me.apply(this, arguments), (this._timer = null), (this._input = null);
        }
        function Se() {
          ve.apply(this, arguments);
        }
        function Ce() {
          ve.apply(this, arguments);
        }
        function Te() {
          me.apply(this, arguments),
            (this.pTime = !1),
            (this.pCenter = !1),
            (this._timer = null),
            (this._input = null),
            (this.count = 0);
        }
        function xe(e, t) {
          return (
            ((t = t || {}).recognizers = S(t.recognizers, xe.defaults.preset)),
            new ke(e, t)
          );
        }
        function ke(e, t) {
          var n;
          (this.options = l({}, xe.defaults, t || {})),
            (this.options.inputTarget = this.options.inputTarget || e),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = e),
            (this.input = new ((n = this).options.inputClass ||
              (F ? ee : L ? ie : M ? ae : Z))(n, H)),
            (this.touchAction = new fe(this, this.options.touchAction)),
            Ie(this, !0),
            g(
              this.options.recognizers,
              function (e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
              },
              this
            );
        }
        function Ie(e, t) {
          var n,
            r = e.element;
          r.style &&
            (g(e.options.cssProps, function (s, i) {
              (n = P(r.style, i)),
                t
                  ? ((e.oldCssProps[n] = r.style[n]), (r.style[n] = s))
                  : (r.style[n] = e.oldCssProps[n] || "");
            }),
            t || (e.oldCssProps = {}));
        }
        (fe.prototype = {
          set: function (e) {
            "compute" == e && (e = this.compute()),
              de &&
                this.manager.element.style &&
                pe[e] &&
                (this.manager.element.style[he] = e),
              (this.actions = e.toLowerCase().trim());
          },
          update: function () {
            this.set(this.manager.options.touchAction);
          },
          compute: function () {
            var e = [];
            return (
              g(this.manager.recognizers, function (t) {
                E(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
              }),
              (function (e) {
                if (k(e, "none")) return "none";
                var t = k(e, "pan-x"),
                  n = k(e, "pan-y");
                return t && n
                  ? "none"
                  : t || n
                  ? t
                    ? "pan-x"
                    : "pan-y"
                  : k(e, "manipulation")
                  ? "manipulation"
                  : "auto";
              })(e.join(" "))
            );
          },
          preventDefaults: function (e) {
            var t = e.srcEvent,
              n = e.offsetDirection;
            if (this.manager.session.prevented) t.preventDefault();
            else {
              var r = this.actions,
                s = k(r, "none") && !pe.none,
                i = k(r, "pan-y") && !pe["pan-y"],
                o = k(r, "pan-x") && !pe["pan-x"];
              if (
                s &&
                1 === e.pointers.length &&
                e.distance < 2 &&
                e.deltaTime < 250
              )
                return;
              if (!o || !i)
                return s || (i && 6 & n) || (o && 24 & n)
                  ? this.preventSrc(t)
                  : void 0;
            }
          },
          preventSrc: function (e) {
            (this.manager.session.prevented = !0), e.preventDefault();
          },
        }),
          (me.prototype = {
            defaults: {},
            set: function (e) {
              return (
                l(this.options, e),
                this.manager && this.manager.touchAction.update(),
                this
              );
            },
            recognizeWith: function (e) {
              if (m(e, "recognizeWith", this)) return this;
              var t = this.simultaneous;
              return (
                t[(e = _e(e, this)).id] ||
                  ((t[e.id] = e), e.recognizeWith(this)),
                this
              );
            },
            dropRecognizeWith: function (e) {
              return (
                m(e, "dropRecognizeWith", this) ||
                  ((e = _e(e, this)), delete this.simultaneous[e.id]),
                this
              );
            },
            requireFailure: function (e) {
              if (m(e, "requireFailure", this)) return this;
              var t = this.requireFail;
              return (
                -1 === A(t, (e = _e(e, this))) &&
                  (t.push(e), e.requireFailure(this)),
                this
              );
            },
            dropRequireFailure: function (e) {
              if (m(e, "dropRequireFailure", this)) return this;
              e = _e(e, this);
              var t = A(this.requireFail, e);
              return t > -1 && this.requireFail.splice(t, 1), this;
            },
            hasRequireFailures: function () {
              return this.requireFail.length > 0;
            },
            canRecognizeWith: function (e) {
              return !!this.simultaneous[e.id];
            },
            emit: function (e) {
              var t = this,
                n = this.state;
              function r(n) {
                t.manager.emit(n, e);
              }
              n < 8 && r(t.options.event + ge(n)),
                r(t.options.event),
                e.additionalEvent && r(e.additionalEvent),
                n >= 8 && r(t.options.event + ge(n));
            },
            tryEmit: function (e) {
              if (this.canEmit()) return this.emit(e);
              this.state = 32;
            },
            canEmit: function () {
              for (var e = 0; e < this.requireFail.length; ) {
                if (!(33 & this.requireFail[e].state)) return !1;
                e++;
              }
              return !0;
            },
            recognize: function (e) {
              var t = l({}, e);
              if (!E(this.options.enable, [this, t]))
                return this.reset(), void (this.state = 32);
              56 & this.state && (this.state = 1),
                (this.state = this.process(t)),
                30 & this.state && this.tryEmit(t);
            },
            process: function (e) {},
            getTouchAction: function () {},
            reset: function () {},
          }),
          b(ve, me, {
            defaults: { pointers: 1 },
            attrTest: function (e) {
              var t = this.options.pointers;
              return 0 === t || e.pointers.length === t;
            },
            process: function (e) {
              var t = this.state,
                n = e.eventType,
                r = 6 & t,
                s = this.attrTest(e);
              return r && (8 & n || !s)
                ? 16 | t
                : r || s
                ? 4 & n
                  ? 8 | t
                  : 2 & t
                  ? 4 | t
                  : 2
                : 32;
            },
          }),
          b(be, ve, {
            defaults: {
              event: "pan",
              threshold: 10,
              pointers: 1,
              direction: 30,
            },
            getTouchAction: function () {
              var e = this.options.direction,
                t = [];
              return 6 & e && t.push("pan-y"), 24 & e && t.push("pan-x"), t;
            },
            directionTest: function (e) {
              var t = this.options,
                n = !0,
                r = e.distance,
                s = e.direction,
                i = e.deltaX,
                o = e.deltaY;
              return (
                s & t.direction ||
                  (6 & t.direction
                    ? ((s = 0 === i ? 1 : i < 0 ? 2 : 4),
                      (n = i != this.pX),
                      (r = Math.abs(e.deltaX)))
                    : ((s = 0 === o ? 1 : o < 0 ? 8 : 16),
                      (n = o != this.pY),
                      (r = Math.abs(e.deltaY)))),
                (e.direction = s),
                n && r > t.threshold && s & t.direction
              );
            },
            attrTest: function (e) {
              return (
                ve.prototype.attrTest.call(this, e) &&
                (2 & this.state || (!(2 & this.state) && this.directionTest(e)))
              );
            },
            emit: function (e) {
              (this.pX = e.deltaX), (this.pY = e.deltaY);
              var t = ye(e.direction);
              t && (e.additionalEvent = this.options.event + t),
                this._super.emit.call(this, e);
            },
          }),
          b(we, ve, {
            defaults: { event: "pinch", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ["none"];
            },
            attrTest: function (e) {
              return (
                this._super.attrTest.call(this, e) &&
                (Math.abs(e.scale - 1) > this.options.threshold ||
                  2 & this.state)
              );
            },
            emit: function (e) {
              1 !== e.scale &&
                (e.additionalEvent =
                  this.options.event + (e.scale < 1 ? "in" : "out")),
                this._super.emit.call(this, e);
            },
          }),
          b(Ee, me, {
            defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function () {
              return ["auto"];
            },
            process: function (e) {
              var t = this.options,
                n = e.pointers.length === t.pointers,
                r = e.distance < t.threshold,
                s = e.deltaTime > t.time;
              if (((this._input = e), !r || !n || (12 & e.eventType && !s)))
                this.reset();
              else if (1 & e.eventType)
                this.reset(),
                  (this._timer = f(
                    function () {
                      (this.state = 8), this.tryEmit();
                    },
                    t.time,
                    this
                  ));
              else if (4 & e.eventType) return 8;
              return 32;
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function (e) {
              8 === this.state &&
                (e && 4 & e.eventType
                  ? this.manager.emit(this.options.event + "up", e)
                  : ((this._input.timeStamp = p()),
                    this.manager.emit(this.options.event, this._input)));
            },
          }),
          b(Se, ve, {
            defaults: { event: "rotate", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ["none"];
            },
            attrTest: function (e) {
              return (
                this._super.attrTest.call(this, e) &&
                (Math.abs(e.rotation) > this.options.threshold ||
                  2 & this.state)
              );
            },
          }),
          b(Ce, ve, {
            defaults: {
              event: "swipe",
              threshold: 10,
              velocity: 0.3,
              direction: 30,
              pointers: 1,
            },
            getTouchAction: function () {
              return be.prototype.getTouchAction.call(this);
            },
            attrTest: function (e) {
              var t,
                n = this.options.direction;
              return (
                30 & n
                  ? (t = e.overallVelocity)
                  : 6 & n
                  ? (t = e.overallVelocityX)
                  : 24 & n && (t = e.overallVelocityY),
                this._super.attrTest.call(this, e) &&
                  n & e.offsetDirection &&
                  e.distance > this.options.threshold &&
                  e.maxPointers == this.options.pointers &&
                  d(t) > this.options.velocity &&
                  4 & e.eventType
              );
            },
            emit: function (e) {
              var t = ye(e.offsetDirection);
              t && this.manager.emit(this.options.event + t, e),
                this.manager.emit(this.options.event, e);
            },
          }),
          b(Te, me, {
            defaults: {
              event: "tap",
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10,
            },
            getTouchAction: function () {
              return ["manipulation"];
            },
            process: function (e) {
              var t = this.options,
                n = e.pointers.length === t.pointers,
                r = e.distance < t.threshold,
                s = e.deltaTime < t.time;
              if ((this.reset(), 1 & e.eventType && 0 === this.count))
                return this.failTimeout();
              if (r && s && n) {
                if (4 != e.eventType) return this.failTimeout();
                var i = !this.pTime || e.timeStamp - this.pTime < t.interval,
                  o =
                    !this.pCenter || Q(this.pCenter, e.center) < t.posThreshold;
                if (
                  ((this.pTime = e.timeStamp),
                  (this.pCenter = e.center),
                  o && i ? (this.count += 1) : (this.count = 1),
                  (this._input = e),
                  0 == this.count % t.taps)
                )
                  return this.hasRequireFailures()
                    ? ((this._timer = f(
                        function () {
                          (this.state = 8), this.tryEmit();
                        },
                        t.interval,
                        this
                      )),
                      2)
                    : 8;
              }
              return 32;
            },
            failTimeout: function () {
              return (
                (this._timer = f(
                  function () {
                    this.state = 32;
                  },
                  this.options.interval,
                  this
                )),
                32
              );
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function () {
              8 == this.state &&
                ((this._input.tapCount = this.count),
                this.manager.emit(this.options.event, this._input));
            },
          }),
          (xe.VERSION = "2.0.7"),
          (xe.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [Se, { enable: !1 }],
              [we, { enable: !1 }, ["rotate"]],
              [Ce, { direction: 6 }],
              [be, { direction: 6 }, ["swipe"]],
              [Te],
              [Te, { event: "doubletap", taps: 2 }, ["tap"]],
              [Ee],
            ],
            cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              contentZooming: "none",
              userDrag: "none",
              tapHighlightColor: "rgba(0,0,0,0)",
            },
          }),
          (ke.prototype = {
            set: function (e) {
              return (
                l(this.options, e),
                e.touchAction && this.touchAction.update(),
                e.inputTarget &&
                  (this.input.destroy(),
                  (this.input.target = e.inputTarget),
                  this.input.init()),
                this
              );
            },
            stop: function (e) {
              this.session.stopped = e ? 2 : 1;
            },
            recognize: function (e) {
              var t = this.session;
              if (!t.stopped) {
                var n;
                this.touchAction.preventDefaults(e);
                var r = this.recognizers,
                  s = t.curRecognizer;
                (!s || (s && 8 & s.state)) && (s = t.curRecognizer = null);
                for (var i = 0; i < r.length; )
                  (n = r[i]),
                    2 === t.stopped || (s && n != s && !n.canRecognizeWith(s))
                      ? n.reset()
                      : n.recognize(e),
                    !s && 14 & n.state && (s = t.curRecognizer = n),
                    i++;
              }
            },
            get: function (e) {
              if (e instanceof me) return e;
              for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e) return t[n];
              return null;
            },
            add: function (e) {
              if (m(e, "add", this)) return this;
              var t = this.get(e.options.event);
              return (
                t && this.remove(t),
                this.recognizers.push(e),
                (e.manager = this),
                this.touchAction.update(),
                e
              );
            },
            remove: function (e) {
              if (m(e, "remove", this)) return this;
              if ((e = this.get(e))) {
                var t = this.recognizers,
                  n = A(t, e);
                -1 !== n && (t.splice(n, 1), this.touchAction.update());
              }
              return this;
            },
            on: function (e, t) {
              if (void 0 !== e && void 0 !== t) {
                var n = this.handlers;
                return (
                  g(I(e), function (e) {
                    (n[e] = n[e] || []), n[e].push(t);
                  }),
                  this
                );
              }
            },
            off: function (e, t) {
              if (void 0 !== e) {
                var n = this.handlers;
                return (
                  g(I(e), function (e) {
                    t ? n[e] && n[e].splice(A(n[e], t), 1) : delete n[e];
                  }),
                  this
                );
              }
            },
            emit: function (e, t) {
              this.options.domEvents &&
                (function (e, t) {
                  var n = i.createEvent("Event");
                  n.initEvent(e, !0, !0),
                    (n.gesture = t),
                    t.target.dispatchEvent(n);
                })(e, t);
              var n = this.handlers[e] && this.handlers[e].slice();
              if (n && n.length) {
                (t.type = e),
                  (t.preventDefault = function () {
                    t.srcEvent.preventDefault();
                  });
                for (var r = 0; r < n.length; ) n[r](t), r++;
              }
            },
            destroy: function () {
              this.element && Ie(this, !1),
                (this.handlers = {}),
                (this.session = {}),
                this.input.destroy(),
                (this.element = null);
            },
          }),
          l(xe, {
            INPUT_START: 1,
            INPUT_MOVE: 2,
            INPUT_END: 4,
            INPUT_CANCEL: 8,
            STATE_POSSIBLE: 1,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: 1,
            DIRECTION_LEFT: 2,
            DIRECTION_RIGHT: 4,
            DIRECTION_UP: 8,
            DIRECTION_DOWN: 16,
            DIRECTION_HORIZONTAL: 6,
            DIRECTION_VERTICAL: 24,
            DIRECTION_ALL: 30,
            Manager: ke,
            Input: z,
            TouchAction: fe,
            TouchInput: ie,
            MouseInput: Z,
            PointerEventInput: ee,
            TouchMouseInput: ae,
            SingleTouchInput: ne,
            Recognizer: me,
            AttrRecognizer: ve,
            Tap: Te,
            Pan: be,
            Swipe: Ce,
            Pinch: we,
            Rotate: Se,
            Press: Ee,
            on: C,
            off: T,
            each: g,
            merge: v,
            extend: _,
            assign: l,
            inherit: b,
            bindFn: w,
            prefixed: P,
          }),
          ((void 0 !== s
            ? s
            : "undefined" != typeof self
            ? self
            : {}
          ).Hammer = xe),
          void 0 ===
            (r = function () {
              return xe;
            }.call(t, n, t, e)) || (e.exports = r);
      })(window, document);
    },
    zUnb: function (e, t, n) {
      "use strict";
      function r(e) {
        return "function" == typeof e;
      }
      n.r(t), n("yLV6");
      let s = !1;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            const e = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                e.stack
            );
          } else
            s &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          s = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
      function o(e) {
        setTimeout(() => {
          throw e;
        });
      }
      const a = {
          closed: !0,
          next(e) {},
          error(e) {
            if (i.useDeprecatedSynchronousErrorHandling) throw e;
            o(e);
          },
          complete() {},
        },
        l = Array.isArray || ((e) => e && "number" == typeof e.length);
      function c(e) {
        return null !== e && "object" == typeof e;
      }
      function u(e) {
        return (
          Error.call(this),
          (this.message = e
            ? `${e.length} errors occurred during unsubscription:\n${e
                .map((e, t) => `${t + 1}) ${e.toString()}`)
                .join("\n  ")}`
            : ""),
          (this.name = "UnsubscriptionError"),
          (this.errors = e),
          this
        );
      }
      u.prototype = Object.create(Error.prototype);
      const h = u;
      let d = (() => {
        class e {
          constructor(e) {
            (this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              e && (this._unsubscribe = e);
          }
          unsubscribe() {
            let e,
              t = !1;
            if (this.closed) return;
            let {
              _parent: n,
              _parents: s,
              _unsubscribe: i,
              _subscriptions: o,
            } = this;
            (this.closed = !0),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null);
            let a = -1,
              u = s ? s.length : 0;
            for (; n; ) n.remove(this), (n = (++a < u && s[a]) || null);
            if (r(i))
              try {
                i.call(this);
              } catch (d) {
                (t = !0), (e = d instanceof h ? p(d.errors) : [d]);
              }
            if (l(o))
              for (a = -1, u = o.length; ++a < u; ) {
                const n = o[a];
                if (c(n))
                  try {
                    n.unsubscribe();
                  } catch (d) {
                    (t = !0),
                      (e = e || []),
                      d instanceof h ? (e = e.concat(p(d.errors))) : e.push(d);
                  }
              }
            if (t) throw new h(e);
          }
          add(t) {
            let n = t;
            switch (typeof t) {
              case "function":
                n = new e(t);
              case "object":
                if (
                  n === this ||
                  n.closed ||
                  "function" != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof e)) {
                  const t = n;
                  (n = new e()), (n._subscriptions = [t]);
                }
                break;
              default:
                if (!t) return e.EMPTY;
                throw new Error(
                  "unrecognized teardown " + t + " added to Subscription."
                );
            }
            if (n._addParent(this)) {
              const e = this._subscriptions;
              e ? e.push(n) : (this._subscriptions = [n]);
            }
            return n;
          }
          remove(e) {
            const t = this._subscriptions;
            if (t) {
              const n = t.indexOf(e);
              -1 !== n && t.splice(n, 1);
            }
          }
          _addParent(e) {
            let { _parent: t, _parents: n } = this;
            return (
              t !== e &&
              (t
                ? n
                  ? -1 === n.indexOf(e) && (n.push(e), !0)
                  : ((this._parents = [e]), !0)
                : ((this._parent = e), !0))
            );
          }
        }
        return (
          (e.EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new e())),
          e
        );
      })();
      function p(e) {
        return e.reduce((e, t) => e.concat(t instanceof h ? t.errors : t), []);
      }
      const f =
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
      class m extends d {
        constructor(e, t, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!e) {
                this.destination = a;
                break;
              }
              if ("object" == typeof e) {
                e instanceof m
                  ? ((this.syncErrorThrowable = e.syncErrorThrowable),
                    (this.destination = e),
                    e.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new g(this, e)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new g(this, e, t, n));
          }
        }
        [f]() {
          return this;
        }
        static create(e, t, n) {
          const r = new m(e, t, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(e) {
          this.isStopped || this._next(e);
        }
        error(e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(e) {
          this.destination.next(e);
        }
        _error(e) {
          this.destination.error(e), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parent: e, _parents: t } = this;
          return (
            (this._parent = null),
            (this._parents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parent = e),
            (this._parents = t),
            this
          );
        }
      }
      class g extends m {
        constructor(e, t, n, s) {
          let i;
          super(), (this._parentSubscriber = e);
          let o = this;
          r(t)
            ? (i = t)
            : t &&
              ((i = t.next),
              (n = t.error),
              (s = t.complete),
              t !== a &&
                ((o = Object.create(t)),
                r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = i),
            (this._error = n),
            (this._complete = s);
        }
        next(e) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, e);
          }
        }
        error(e) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: n } = i;
            if (this._error)
              n && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
            else if (t.syncErrorThrowable)
              n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : o(e),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw e;
              o(e);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(e, t) {
          try {
            e.call(this._context, t);
          } catch (n) {
            if ((this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(e, t, n) {
          if (!i.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            t.call(this._context, n);
          } catch (r) {
            return i.useDeprecatedSynchronousErrorHandling
              ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
              : (o(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: e } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            e.unsubscribe();
        }
      }
      const y =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function _() {}
      function v(...e) {
        return b(e);
      }
      function b(e) {
        return e
          ? 1 === e.length
            ? e[0]
            : function (t) {
                return e.reduce((e, t) => t(e), t);
              }
          : _;
      }
      let w = (() => {
        class e {
          constructor(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          lift(t) {
            const n = new e();
            return (n.source = this), (n.operator = t), n;
          }
          subscribe(e, t, n) {
            const { operator: r } = this,
              s = (function (e, t, n) {
                if (e) {
                  if (e instanceof m) return e;
                  if (e[f]) return e[f]();
                }
                return e || t || n ? new m(e, t, n) : new m(a);
              })(e, t, n);
            if (
              (s.add(
                r
                  ? r.call(s, this.source)
                  : this.source ||
                    (i.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
              ),
              i.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              i.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                (function (e) {
                  for (; e; ) {
                    const { closed: t, destination: n, isStopped: r } = e;
                    if (t || r) return !1;
                    e = n && n instanceof m ? n : null;
                  }
                  return !0;
                })(e)
                  ? e.error(t)
                  : console.warn(t);
            }
          }
          forEach(e, t) {
            return new (t = E(t))((t, n) => {
              let r;
              r = this.subscribe(
                (t) => {
                  try {
                    e(t);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                t
              );
            });
          }
          _subscribe(e) {
            const { source: t } = this;
            return t && t.subscribe(e);
          }
          [y]() {
            return this;
          }
          pipe(...e) {
            return 0 === e.length ? this : b(e)(this);
          }
          toPromise(e) {
            return new (e = E(e))((e, t) => {
              let n;
              this.subscribe(
                (e) => (n = e),
                (e) => t(e),
                () => e(n)
              );
            });
          }
        }
        return (e.create = (t) => new e(t)), e;
      })();
      function E(e) {
        if ((e || (e = i.Promise || Promise), !e))
          throw new Error("no Promise impl found");
        return e;
      }
      function S() {
        return (
          Error.call(this),
          (this.message = "object unsubscribed"),
          (this.name = "ObjectUnsubscribedError"),
          this
        );
      }
      S.prototype = Object.create(Error.prototype);
      const C = S;
      class T extends d {
        constructor(e, t) {
          super(),
            (this.subject = e),
            (this.subscriber = t),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const e = this.subject,
            t = e.observers;
          if (
            ((this.subject = null),
            !t || 0 === t.length || e.isStopped || e.closed)
          )
            return;
          const n = t.indexOf(this.subscriber);
          -1 !== n && t.splice(n, 1);
        }
      }
      class x extends m {
        constructor(e) {
          super(e), (this.destination = e);
        }
      }
      let k = (() => {
        class e extends w {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [f]() {
            return new x(this);
          }
          lift(e) {
            const t = new I(this, this);
            return (t.operator = e), t;
          }
          next(e) {
            if (this.closed) throw new C();
            if (!this.isStopped) {
              const { observers: t } = this,
                n = t.length,
                r = t.slice();
              for (let s = 0; s < n; s++) r[s].next(e);
            }
          }
          error(e) {
            if (this.closed) throw new C();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            const { observers: t } = this,
              n = t.length,
              r = t.slice();
            for (let s = 0; s < n; s++) r[s].error(e);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new C();
            this.isStopped = !0;
            const { observers: e } = this,
              t = e.length,
              n = e.slice();
            for (let r = 0; r < t; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(e) {
            if (this.closed) throw new C();
            return super._trySubscribe(e);
          }
          _subscribe(e) {
            if (this.closed) throw new C();
            return this.hasError
              ? (e.error(this.thrownError), d.EMPTY)
              : this.isStopped
              ? (e.complete(), d.EMPTY)
              : (this.observers.push(e), new T(this, e));
          }
          asObservable() {
            const e = new w();
            return (e.source = this), e;
          }
        }
        return (e.create = (e, t) => new I(e, t)), e;
      })();
      class I extends k {
        constructor(e, t) {
          super(), (this.destination = e), (this.source = t);
        }
        next(e) {
          const { destination: t } = this;
          t && t.next && t.next(e);
        }
        error(e) {
          const { destination: t } = this;
          t && t.error && this.destination.error(e);
        }
        complete() {
          const { destination: e } = this;
          e && e.complete && this.destination.complete();
        }
        _subscribe(e) {
          const { source: t } = this;
          return t ? this.source.subscribe(e) : d.EMPTY;
        }
      }
      function A(e) {
        return e && "function" == typeof e.schedule;
      }
      class N extends m {
        constructor(e, t, n) {
          super(),
            (this.parent = e),
            (this.outerValue = t),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(e) {
          this.parent.notifyNext(
            this.outerValue,
            e,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(e) {
          this.parent.notifyError(e, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      const R = (e) => (t) => {
          for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
          t.closed || t.complete();
        },
        P = (e) => (t) => (
          e
            .then(
              (e) => {
                t.closed || (t.next(e), t.complete());
              },
              (e) => t.error(e)
            )
            .then(null, o),
          t
        );
      function O() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      const D = O(),
        M = (e) => (t) => {
          const n = e[D]();
          for (;;) {
            const e = n.next();
            if (e.done) {
              t.complete();
              break;
            }
            if ((t.next(e.value), t.closed)) break;
          }
          return (
            "function" == typeof n.return &&
              t.add(() => {
                n.return && n.return();
              }),
            t
          );
        },
        F = (e) => (t) => {
          const n = e[y]();
          if ("function" != typeof n.subscribe)
            throw new TypeError(
              "Provided object does not correctly implement Symbol.observable"
            );
          return n.subscribe(t);
        },
        L = (e) => e && "number" == typeof e.length && "function" != typeof e;
      function U(e) {
        return (
          !!e && "function" != typeof e.subscribe && "function" == typeof e.then
        );
      }
      const j = (e) => {
        if (e instanceof w)
          return (t) =>
            e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t);
        if (e && "function" == typeof e[y]) return F(e);
        if (L(e)) return R(e);
        if (U(e)) return P(e);
        if (e && "function" == typeof e[D]) return M(e);
        {
          const t = c(e) ? "an invalid object" : `'${e}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
      };
      function z(e, t, n, r, s = new N(e, n, r)) {
        if (!s.closed) return j(t)(s);
      }
      class H extends m {
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyError(e, t) {
          this.destination.error(e);
        }
        notifyComplete(e) {
          this.destination.complete();
        }
      }
      function $(e, t) {
        return function (n) {
          if ("function" != typeof e)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new V(e, t));
        };
      }
      class V {
        constructor(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new B(e, this.project, this.thisArg));
        }
      }
      class B extends m {
        constructor(e, t, n) {
          super(e),
            (this.project = t),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(e) {
          let t;
          try {
            t = this.project.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      function q(e, t) {
        return new w(
          t
            ? (n) => {
                const r = new d();
                let s = 0;
                return (
                  r.add(
                    t.schedule(function () {
                      s !== e.length
                        ? (n.next(e[s++]), n.closed || r.add(this.schedule()))
                        : n.complete();
                    })
                  ),
                  r
                );
              }
            : R(e)
        );
      }
      function Q(e, t) {
        if (!t) return e instanceof w ? e : new w(j(e));
        if (null != e) {
          if (
            (function (e) {
              return e && "function" == typeof e[y];
            })(e)
          )
            return (function (e, t) {
              return new w(
                t
                  ? (n) => {
                      const r = new d();
                      return (
                        r.add(
                          t.schedule(() => {
                            const s = e[y]();
                            r.add(
                              s.subscribe({
                                next(e) {
                                  r.add(t.schedule(() => n.next(e)));
                                },
                                error(e) {
                                  r.add(t.schedule(() => n.error(e)));
                                },
                                complete() {
                                  r.add(t.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    }
                  : F(e)
              );
            })(e, t);
          if (U(e))
            return (function (e, t) {
              return new w(
                t
                  ? (n) => {
                      const r = new d();
                      return (
                        r.add(
                          t.schedule(() =>
                            e.then(
                              (e) => {
                                r.add(
                                  t.schedule(() => {
                                    n.next(e),
                                      r.add(t.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (e) => {
                                r.add(t.schedule(() => n.error(e)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    }
                  : P(e)
              );
            })(e, t);
          if (L(e)) return q(e, t);
          if (
            (function (e) {
              return e && "function" == typeof e[D];
            })(e) ||
            "string" == typeof e
          )
            return (function (e, t) {
              if (!e) throw new Error("Iterable cannot be null");
              return new w(
                t
                  ? (n) => {
                      const r = new d();
                      let s;
                      return (
                        r.add(() => {
                          s && "function" == typeof s.return && s.return();
                        }),
                        r.add(
                          t.schedule(() => {
                            (s = e[D]()),
                              r.add(
                                t.schedule(function () {
                                  if (n.closed) return;
                                  let e, t;
                                  try {
                                    const n = s.next();
                                    (e = n.value), (t = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  t
                                    ? n.complete()
                                    : (n.next(e), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    }
                  : M(e)
              );
            })(e, t);
        }
        throw new TypeError(
          ((null !== e && typeof e) || e) + " is not observable"
        );
      }
      function W(e, t, n = Number.POSITIVE_INFINITY) {
        return "function" == typeof t
          ? (r) =>
              r.pipe(
                W((n, r) => Q(e(n, r)).pipe($((e, s) => t(n, e, r, s))), n)
              )
          : ("number" == typeof t && (n = t), (t) => t.lift(new K(e, n)));
      }
      class K {
        constructor(e, t = Number.POSITIVE_INFINITY) {
          (this.project = e), (this.concurrent = t);
        }
        call(e, t) {
          return t.subscribe(new Z(e, this.project, this.concurrent));
        }
      }
      class Z extends H {
        constructor(e, t, n = Number.POSITIVE_INFINITY) {
          super(e),
            (this.project = t),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(e) {
          this.active < this.concurrent
            ? this._tryNext(e)
            : this.buffer.push(e);
        }
        _tryNext(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = new N(this, void 0, void 0);
          this.destination.add(r), z(this, e, t, n, r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyComplete(e) {
          const t = this.buffer;
          this.remove(e),
            this.active--,
            t.length > 0
              ? this._next(t.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function G(e) {
        return e;
      }
      function Y(e = Number.POSITIVE_INFINITY) {
        return W(G, e);
      }
      function X(...e) {
        let t = Number.POSITIVE_INFINITY,
          n = null,
          r = e[e.length - 1];
        return (
          A(r)
            ? ((n = e.pop()),
              e.length > 1 &&
                "number" == typeof e[e.length - 1] &&
                (t = e.pop()))
            : "number" == typeof r && (t = e.pop()),
          null === n && 1 === e.length && e[0] instanceof w
            ? e[0]
            : Y(t)(q(e, n))
        );
      }
      function J() {
        return function (e) {
          return e.lift(new ee(e));
        };
      }
      class ee {
        constructor(e) {
          this.connectable = e;
        }
        call(e, t) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new te(e, n),
            s = t.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class te extends m {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: e } = this;
          if (!e) return void (this.connection = null);
          this.connectable = null;
          const t = e._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((e._refCount = t - 1), t > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = e._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      const ne = class extends w {
          constructor(e, t) {
            super(),
              (this.source = e),
              (this.subjectFactory = t),
              (this._refCount = 0),
              (this._isComplete = !1);
          }
          _subscribe(e) {
            return this.getSubject().subscribe(e);
          }
          getSubject() {
            const e = this._subject;
            return (
              (e && !e.isStopped) || (this._subject = this.subjectFactory()),
              this._subject
            );
          }
          connect() {
            let e = this._connection;
            return (
              e ||
                ((this._isComplete = !1),
                (e = this._connection = new d()),
                e.add(this.source.subscribe(new se(this.getSubject(), this))),
                e.closed
                  ? ((this._connection = null), (e = d.EMPTY))
                  : (this._connection = e)),
              e
            );
          }
          refCount() {
            return J()(this);
          }
        }.prototype,
        re = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: ne._subscribe },
          _isComplete: { value: ne._isComplete, writable: !0 },
          getSubject: { value: ne.getSubject },
          connect: { value: ne.connect },
          refCount: { value: ne.refCount },
        };
      class se extends x {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _error(e) {
          this._unsubscribe(), super._error(e);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const e = this.connectable;
          if (e) {
            this.connectable = null;
            const t = e._connection;
            (e._refCount = 0),
              (e._subject = null),
              (e._connection = null),
              t && t.unsubscribe();
          }
        }
      }
      function ie(e, t) {
        return function (n) {
          let r;
          if (
            ((r =
              "function" == typeof e
                ? e
                : function () {
                    return e;
                  }),
            "function" == typeof t)
          )
            return n.lift(new oe(r, t));
          const s = Object.create(n, re);
          return (s.source = n), (s.subjectFactory = r), s;
        };
      }
      class oe {
        constructor(e, t) {
          (this.subjectFactory = e), (this.selector = t);
        }
        call(e, t) {
          const { selector: n } = this,
            r = this.subjectFactory(),
            s = n(r).subscribe(e);
          return s.add(t.subscribe(r)), s;
        }
      }
      function ae() {
        return new k();
      }
      function le(e, t, n) {
        const r = (function (e) {
          return function (...t) {
            if (e) {
              const n = e(...t);
              for (const e in n) this[e] = n[e];
            }
          };
        })(t);
        function s(...e) {
          if (this instanceof s) return r.apply(this, e), this;
          const t = new s(...e);
          return (n.annotation = t), n;
          function n(e, n, r) {
            const s = e.hasOwnProperty("__parameters__")
              ? e.__parameters__
              : Object.defineProperty(e, "__parameters__", { value: [] })
                  .__parameters__;
            for (; s.length <= r; ) s.push(null);
            return (s[r] = s[r] || []).push(t), e;
          }
        }
        return (
          n && (s.prototype = Object.create(n.prototype)),
          (s.prototype.ngMetadataName = e),
          (s.annotationCls = s),
          s
        );
      }
      const ce = le("Inject", (e) => ({ token: e })),
        ue = le("Optional"),
        he = le("Self"),
        de = le("SkipSelf");
      var pe = (function (e) {
        return (
          (e[(e.Default = 0)] = "Default"),
          (e[(e.Host = 1)] = "Host"),
          (e[(e.Self = 2)] = "Self"),
          (e[(e.SkipSelf = 4)] = "SkipSelf"),
          (e[(e.Optional = 8)] = "Optional"),
          e
        );
      })({});
      function fe(e) {
        for (let t in e) if (e[t] === fe) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function me(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function ge(e) {
        const t = e[ye];
        return t && t.token === e ? t : null;
      }
      const ye = fe({ ngInjectableDef: fe });
      function _e(e) {
        if ("string" == typeof e) return e;
        if (e instanceof Array) return "[" + e.map(_e).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return "" + e.overriddenName;
        if (e.name) return "" + e.name;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      const ve = fe({ __forward_ref__: fe });
      function be(e) {
        return (
          (e.__forward_ref__ = be),
          (e.toString = function () {
            return _e(this());
          }),
          e
        );
      }
      function we(e) {
        const t = e;
        return "function" == typeof t &&
          t.hasOwnProperty(ve) &&
          t.__forward_ref__ === be
          ? t()
          : e;
      }
      const Ee = "undefined" != typeof globalThis && globalThis,
        Se = "undefined" != typeof window && window,
        Ce =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Te = "undefined" != typeof global && global,
        xe = Ee || Te || Se || Ce;
      class ke {
        constructor(e, t) {
          (this._desc = e),
            (this.ngMetadataName = "InjectionToken"),
            (this.ngInjectableDef = void 0),
            "number" == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ngInjectableDef = me({
                  token: this,
                  providedIn: t.providedIn || "root",
                  factory: t.factory,
                }));
        }
        toString() {
          return "InjectionToken " + this._desc;
        }
      }
      const Ie = new ke("INJECTOR", -1),
        Ae = new Object(),
        Ne = /\n/gm,
        Re = fe({ provide: String, useValue: fe });
      let Pe = void 0;
      function Oe(e) {
        const t = Pe;
        return (Pe = e), t;
      }
      function De(e, t = pe.Default) {
        return (function (e, t = pe.Default) {
          if (void 0 === Pe)
            throw new Error(
              "inject() must be called from an injection context"
            );
          return null === Pe
            ? (function (e, t, n) {
                const r = ge(e);
                if (r && "root" == r.providedIn)
                  return void 0 === r.value ? (r.value = r.factory()) : r.value;
                if (n & pe.Optional) return null;
                throw new Error(`Injector: NOT_FOUND [${_e(e)}]`);
              })(e, 0, t)
            : Pe.get(e, t & pe.Optional ? null : void 0, t);
        })(e, t);
      }
      class Me {
        get(e, t = Ae) {
          if (t === Ae) {
            const t = new Error(`NullInjectorError: No provider for ${_e(e)}!`);
            throw ((t.name = "NullInjectorError"), t);
          }
          return t;
        }
      }
      function Fe(e, t, n, r = null) {
        e =
          e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
            ? e.substr(2)
            : e;
        let s = _e(t);
        if (t instanceof Array) s = t.map(_e).join(" -> ");
        else if ("object" == typeof t) {
          let e = [];
          for (let n in t)
            if (t.hasOwnProperty(n)) {
              let r = t[n];
              e.push(
                n + ":" + ("string" == typeof r ? JSON.stringify(r) : _e(r))
              );
            }
          s = `{${e.join(", ")}}`;
        }
        return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${e.replace(Ne, "\n  ")}`;
      }
      class Le {}
      class Ue {}
      function je(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function ze(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      const He = (function () {
          var e = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (e[e.Emulated] = "Emulated"),
            (e[e.Native] = "Native"),
            (e[e.None] = "None"),
            (e[e.ShadowDom] = "ShadowDom"),
            e
          );
        })(),
        $e = (() =>
          (
            ("undefined" != typeof requestAnimationFrame &&
              requestAnimationFrame) ||
            setTimeout
          ).bind(xe))();
      function Ve(e) {
        return e.ngDebugContext;
      }
      function Be(e) {
        return e.ngOriginalError;
      }
      function qe(e, ...t) {
        e.error(...t);
      }
      class Qe {
        constructor() {
          this._console = console;
        }
        handleError(e) {
          const t = this._findOriginalError(e),
            n = this._findContext(e),
            r = (function (e) {
              return e.ngErrorLogger || qe;
            })(e);
          r(this._console, "ERROR", e),
            t && r(this._console, "ORIGINAL ERROR", t),
            n && r(this._console, "ERROR CONTEXT", n);
        }
        _findContext(e) {
          return e ? (Ve(e) ? Ve(e) : this._findContext(Be(e))) : null;
        }
        _findOriginalError(e) {
          let t = Be(e);
          for (; t && Be(t); ) t = Be(t);
          return t;
        }
      }
      let We = !0,
        Ke = !1;
      function Ze() {
        return (Ke = !0), We;
      }
      class Ge {
        constructor(e) {
          if (
            ((this.defaultDoc = e),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
              "sanitization-inert"
            )),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const e = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(e),
              (this.inertBodyElement = this.inertDocument.createElement(
                "body"
              )),
              e.appendChild(this.inertBodyElement);
          }
          (this.inertBodyElement.innerHTML =
            '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !this.inertBodyElement.querySelector ||
            this.inertBodyElement.querySelector("svg")
              ? ((this.inertBodyElement.innerHTML =
                  '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  this.inertBodyElement.querySelector &&
                  this.inertBodyElement.querySelector("svg img") &&
                  (function () {
                    try {
                      return !!window.DOMParser;
                    } catch (e) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(e) {
          e = "<body><remove></remove>" + e + "</body>";
          try {
            e = encodeURI(e);
          } catch (r) {
            return null;
          }
          const t = new XMLHttpRequest();
          (t.responseType = "document"),
            t.open("GET", "data:text/html;charset=utf-8," + e, !1),
            t.send(void 0);
          const n = t.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(e) {
          e = "<body><remove></remove>" + e + "</body>";
          try {
            const t = new window.DOMParser().parseFromString(e, "text/html")
              .body;
            return t.removeChild(t.firstChild), t;
          } catch (t) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(e) {
          const t = this.inertDocument.createElement("template");
          return "content" in t
            ? ((t.innerHTML = e), t)
            : ((this.inertBodyElement.innerHTML = e),
              this.defaultDoc.documentMode &&
                this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(e) {
          const t = e.attributes;
          for (let r = t.length - 1; 0 < r; r--) {
            const n = t.item(r).name;
            ("xmlns:ns1" !== n && 0 !== n.indexOf("ns1:")) ||
              e.removeAttribute(n);
          }
          let n = e.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling);
        }
      }
      const Ye = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Xe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Je(e) {
        return (e = String(e)).match(Ye) || e.match(Xe)
          ? e
          : (Ze() &&
              console.warn(
                `WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`
              ),
            "unsafe:" + e);
      }
      function et(e) {
        const t = {};
        for (const n of e.split(",")) t[n] = !0;
        return t;
      }
      function tt(...e) {
        const t = {};
        for (const n of e)
          for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
        return t;
      }
      const nt = et("area,br,col,hr,img,wbr"),
        rt = et("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        st = et("rp,rt"),
        it = tt(st, rt),
        ot = tt(
          nt,
          tt(
            rt,
            et(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          tt(
            st,
            et(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          it
        ),
        at = et("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        lt = et("srcset"),
        ct = tt(
          at,
          lt,
          et(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          ),
          et(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
          )
        ),
        ut = et("script,style,template");
      class ht {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(e) {
          let t = e.firstChild,
            n = !0;
          for (; t; )
            if (
              (t.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(t))
                : t.nodeType === Node.TEXT_NODE
                ? this.chars(t.nodeValue)
                : (this.sanitizedSomething = !0),
              n && t.firstChild)
            )
              t = t.firstChild;
            else
              for (; t; ) {
                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                let e = this.checkClobberedElement(t, t.nextSibling);
                if (e) {
                  t = e;
                  break;
                }
                t = this.checkClobberedElement(t, t.parentNode);
              }
          return this.buf.join("");
        }
        startElement(e) {
          const t = e.nodeName.toLowerCase();
          if (!ot.hasOwnProperty(t))
            return (this.sanitizedSomething = !0), !ut.hasOwnProperty(t);
          this.buf.push("<"), this.buf.push(t);
          const n = e.attributes;
          for (let s = 0; s < n.length; s++) {
            const e = n.item(s),
              t = e.name,
              i = t.toLowerCase();
            if (!ct.hasOwnProperty(i)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let o = e.value;
            at[i] && (o = Je(o)),
              lt[i] &&
                ((r = o),
                (o = (r = String(r))
                  .split(",")
                  .map((e) => Je(e.trim()))
                  .join(", "))),
              this.buf.push(" ", t, '="', ft(o), '"');
          }
          var r;
          return this.buf.push(">"), !0;
        }
        endElement(e) {
          const t = e.nodeName.toLowerCase();
          ot.hasOwnProperty(t) &&
            !nt.hasOwnProperty(t) &&
            (this.buf.push("</"), this.buf.push(t), this.buf.push(">"));
        }
        chars(e) {
          this.buf.push(ft(e));
        }
        checkClobberedElement(e, t) {
          if (
            t &&
            (e.compareDocumentPosition(t) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              "Failed to sanitize html because the element is clobbered: " +
                e.outerHTML
            );
          return t;
        }
      }
      const dt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        pt = /([^\#-~ |!])/g;
      function ft(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(dt, function (e) {
            return (
              "&#" +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(pt, function (e) {
            return "&#" + e.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      let mt;
      function gt(e) {
        return "content" in e &&
          (function (e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      const yt = (function () {
        var e = {
          NONE: 0,
          HTML: 1,
          STYLE: 2,
          SCRIPT: 3,
          URL: 4,
          RESOURCE_URL: 5,
        };
        return (
          (e[e.NONE] = "NONE"),
          (e[e.HTML] = "HTML"),
          (e[e.STYLE] = "STYLE"),
          (e[e.SCRIPT] = "SCRIPT"),
          (e[e.URL] = "URL"),
          (e[e.RESOURCE_URL] = "RESOURCE_URL"),
          e
        );
      })();
      class _t {}
      const vt = new RegExp(
          "^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$",
          "g"
        ),
        bt = /^url\(([^)]+)\)$/,
        wt = /([A-Z])/g;
      function Et(e) {
        try {
          return null != e ? e.toString().slice(0, 30) : e;
        } catch (t) {
          return "[ERROR] Exception while trying to serialize the value";
        }
      }
      let St = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Ct()), e;
      })();
      const Ct = (...e) => {},
        Tt = new ke(
          "The presence of this token marks an injector as being the root injector."
        ),
        xt = function (e, t, n) {
          return new Pt(e, t, n);
        };
      let kt = (() => {
        class e {
          static create(e, t) {
            return Array.isArray(e)
              ? xt(e, t, "")
              : xt(e.providers, e.parent, e.name || "");
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Ae),
          (e.NULL = new Me()),
          (e.ngInjectableDef = me({
            token: e,
            providedIn: "any",
            factory: () => De(Ie),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      const It = function (e) {
          return e;
        },
        At = [],
        Nt = It,
        Rt = function () {
          return Array.prototype.slice.call(arguments);
        };
      class Pt {
        constructor(e, t = kt.NULL, n = null) {
          (this.parent = t), (this.source = n);
          const r = (this._records = new Map());
          r.set(kt, { token: kt, fn: It, deps: At, value: this, useNew: !1 }),
            r.set(Ie, { token: Ie, fn: It, deps: At, value: this, useNew: !1 }),
            (function e(t, n) {
              if (n)
                if ((n = we(n)) instanceof Array)
                  for (let r = 0; r < n.length; r++) e(t, n[r]);
                else {
                  if ("function" == typeof n)
                    throw Dt("Function/Class not supported", n);
                  if (!n || "object" != typeof n || !n.provide)
                    throw Dt("Unexpected provider", n);
                  {
                    let e = we(n.provide);
                    const r = (function (e) {
                      const t = (function (e) {
                        let t = At;
                        const n = e.deps;
                        if (n && n.length) {
                          t = [];
                          for (let e = 0; e < n.length; e++) {
                            let r = 6,
                              s = we(n[e]);
                            if (s instanceof Array)
                              for (let e = 0, t = s; e < t.length; e++) {
                                const n = t[e];
                                n instanceof ue || n == ue
                                  ? (r |= 1)
                                  : n instanceof de || n == de
                                  ? (r &= -3)
                                  : n instanceof he || n == he
                                  ? (r &= -5)
                                  : (s = n instanceof ce ? n.token : we(n));
                              }
                            t.push({ token: s, options: r });
                          }
                        } else if (e.useExisting)
                          t = [{ token: we(e.useExisting), options: 6 }];
                        else if (!n && !(Re in e))
                          throw Dt("'deps' required", e);
                        return t;
                      })(e);
                      let n = It,
                        r = At,
                        s = !1,
                        i = we(e.provide);
                      if (Re in e) r = e.useValue;
                      else if (e.useFactory) n = e.useFactory;
                      else if (e.useExisting);
                      else if (e.useClass) (s = !0), (n = we(e.useClass));
                      else {
                        if ("function" != typeof i)
                          throw Dt(
                            "StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",
                            e
                          );
                        (s = !0), (n = i);
                      }
                      return { deps: t, fn: n, useNew: s, value: r };
                    })(n);
                    if (!0 === n.multi) {
                      let r = t.get(e);
                      if (r) {
                        if (r.fn !== Rt) throw Ot(e);
                      } else
                        t.set(
                          e,
                          (r = {
                            token: n.provide,
                            deps: [],
                            useNew: !1,
                            fn: Rt,
                            value: At,
                          })
                        );
                      (e = n), r.deps.push({ token: e, options: 6 });
                    }
                    const s = t.get(e);
                    if (s && s.fn == Rt) throw Ot(e);
                    t.set(e, r);
                  }
                }
            })(r, e);
        }
        get(e, t, n = pe.Default) {
          const r = this._records.get(e);
          try {
            return (function e(t, n, r, s, i, o) {
              try {
                return (function (t, n, r, s, i, o) {
                  let a;
                  if (!n || o & pe.SkipSelf)
                    o & pe.Self || (a = s.get(t, i, pe.Default));
                  else {
                    if (((a = n.value), a == Nt))
                      throw Error("\u0275Circular dependency");
                    if (a === At) {
                      n.value = Nt;
                      let t = void 0,
                        i = n.useNew,
                        o = n.fn,
                        l = n.deps,
                        c = At;
                      if (l.length) {
                        c = [];
                        for (let t = 0; t < l.length; t++) {
                          const n = l[t],
                            i = n.options,
                            o = 2 & i ? r.get(n.token) : void 0;
                          c.push(
                            e(
                              n.token,
                              o,
                              r,
                              o || 4 & i ? s : kt.NULL,
                              1 & i ? null : kt.THROW_IF_NOT_FOUND,
                              pe.Default
                            )
                          );
                        }
                      }
                      n.value = a = i ? new o(...c) : o.apply(t, c);
                    }
                  }
                  return a;
                })(t, n, r, s, i, o);
              } catch (a) {
                throw (
                  (a instanceof Error || (a = new Error(a)),
                  (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(t),
                  n && n.value == Nt && (n.value = At),
                  a)
                );
              }
            })(e, r, this._records, this.parent, t, n);
          } catch (s) {
            return (function (e, t, n, r) {
              const s = e.ngTempTokenPath;
              throw (
                (t.__source && s.unshift(t.__source),
                (e.message = Fe("\n" + e.message, s, "StaticInjectorError", r)),
                (e.ngTokenPath = s),
                (e.ngTempTokenPath = null),
                e)
              );
            })(s, e, 0, this.source);
          }
        }
        toString() {
          const e = [];
          return (
            this._records.forEach((t, n) => e.push(_e(n))),
            `StaticInjector[${e.join(", ")}]`
          );
        }
      }
      function Ot(e) {
        return Dt("Cannot mix multi providers and regular providers", e);
      }
      function Dt(e, t) {
        return new Error(Fe(e, t, "StaticInjectorError"));
      }
      const Mt = new ke("AnalyzeForEntryComponents");
      let Ft = null;
      function Lt() {
        if (!Ft) {
          const e = xe.Symbol;
          if (e && e.iterator) Ft = e.iterator;
          else {
            const e = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              "entries" !== n &&
                "size" !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (Ft = n);
            }
          }
        }
        return Ft;
      }
      function Ut(e, t) {
        return (
          e === t ||
          ("number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t))
        );
      }
      function jt(e, t) {
        const n = Ht(e),
          r = Ht(t);
        if (n && r)
          return (function (e, t, n) {
            const r = e[Lt()](),
              s = t[Lt()]();
            for (;;) {
              const e = r.next(),
                t = s.next();
              if (e.done && t.done) return !0;
              if (e.done || t.done) return !1;
              if (!n(e.value, t.value)) return !1;
            }
          })(e, t, jt);
        {
          const s = e && ("object" == typeof e || "function" == typeof e),
            i = t && ("object" == typeof t || "function" == typeof t);
          return !(n || !s || r || !i) || Ut(e, t);
        }
      }
      class zt {
        constructor(e) {
          this.wrapped = e;
        }
        static wrap(e) {
          return new zt(e);
        }
        static unwrap(e) {
          return zt.isWrapped(e) ? e.wrapped : e;
        }
        static isWrapped(e) {
          return e instanceof zt;
        }
      }
      function Ht(e) {
        return (
          !!$t(e) && (Array.isArray(e) || (!(e instanceof Map) && Lt() in e))
        );
      }
      function $t(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Vt(e) {
        return !!e && "function" == typeof e.then;
      }
      function Bt(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      class qt {
        constructor(e, t, n) {
          (this.previousValue = e),
            (this.currentValue = t),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class Qt {}
      function Wt(e) {
        const t = Error(
          `No component factory found for ${_e(
            e
          )}. Did you add it to @NgModule.entryComponents?`
        );
        return (t[Kt] = e), t;
      }
      const Kt = "ngComponent";
      class Zt {
        resolveComponentFactory(e) {
          throw Wt(e);
        }
      }
      let Gt = (() => {
        class e {}
        return (e.NULL = new Zt()), e;
      })();
      class Yt {
        constructor(e, t, n) {
          (this._parent = t),
            (this._ngModule = n),
            (this._factories = new Map());
          for (let r = 0; r < e.length; r++) {
            const t = e[r];
            this._factories.set(t.componentType, t);
          }
        }
        resolveComponentFactory(e) {
          let t = this._factories.get(e);
          if (
            (!t &&
              this._parent &&
              (t = this._parent.resolveComponentFactory(e)),
            !t)
          )
            throw Wt(e);
          return new Xt(t, this._ngModule);
        }
      }
      class Xt extends Qt {
        constructor(e, t) {
          super(),
            (this.factory = e),
            (this.ngModule = t),
            (this.selector = e.selector),
            (this.componentType = e.componentType),
            (this.ngContentSelectors = e.ngContentSelectors),
            (this.inputs = e.inputs),
            (this.outputs = e.outputs);
        }
        create(e, t, n, r) {
          return this.factory.create(e, t, n, r || this.ngModule);
        }
      }
      function Jt(...e) {}
      let en = (() => {
        class e {
          constructor(e) {
            this.nativeElement = e;
          }
        }
        return (e.__NG_ELEMENT_ID__ = () => tn(e)), e;
      })();
      const tn = Jt;
      class nn {}
      class rn {}
      const sn = (function () {
        var e = { Important: 1, DashCase: 2 };
        return (e[e.Important] = "Important"), (e[e.DashCase] = "DashCase"), e;
      })();
      let on = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => an()), e;
      })();
      const an = Jt;
      class ln {
        constructor(e) {
          (this.full = e),
            (this.major = e.split(".")[0]),
            (this.minor = e.split(".")[1]),
            (this.patch = e.split(".").slice(2).join("."));
        }
      }
      const cn = new ln("8.2.14");
      class un {
        constructor() {}
        supports(e) {
          return Ht(e);
        }
        create(e) {
          return new dn(e);
        }
      }
      const hn = (e, t) => t;
      class dn {
        constructor(e) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = e || hn);
        }
        forEachItem(e) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) e(t);
        }
        forEachOperation(e) {
          let t = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; t || n; ) {
            const i = !n || (t && t.currentIndex < gn(n, r, s)) ? t : n,
              o = gn(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((t = t._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const e = o - r,
                t = a - r;
              if (e != t) {
                for (let n = 0; n < e; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  t <= i && i < e && (s[n] = r + 1);
                }
                s[i.previousIndex] = t - e;
              }
            }
            o !== a && e(i, o, a);
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachMovedItem(e) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        forEachIdentityChange(e) {
          let t;
          for (
            t = this._identityChangesHead;
            null !== t;
            t = t._nextIdentityChange
          )
            e(t);
        }
        diff(e) {
          if ((null == e && (e = []), !Ht(e)))
            throw new Error(
              `Error trying to diff '${_e(
                e
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(e)) {
            this.length = e.length;
            for (let t = 0; t < this.length; t++)
              (n = e[t]),
                (r = this._trackByFn(t, n)),
                null !== s && Ut(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, t)),
                    Ut(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, t)), (i = !0)),
                (s = s._next);
          } else
            (t = 0),
              (function (e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Lt()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(e, (e) => {
                (r = this._trackByFn(t, e)),
                  null !== s && Ut(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, e, r, t)),
                      Ut(s.item, e) || this._addIdentityChange(s, e))
                    : ((s = this._mismatch(s, e, r, t)), (i = !0)),
                  (s = s._next),
                  t++;
              }),
              (this.length = t);
          return this._truncate(s), (this.collection = e), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let e, t;
            for (
              e = this._previousItHead = this._itHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._additionsHead; null !== e; e = e._nextAdded)
              e.previousIndex = e.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                e = this._movesHead;
              null !== e;
              e = t
            )
              (e.previousIndex = e.currentIndex), (t = e._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(e, t, n, r) {
          let s;
          return (
            null === e ? (s = this._itTail) : ((s = e._prev), this._remove(e)),
            null !==
            (e =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, r))
              ? (Ut(e.item, t) || this._addIdentityChange(e, t),
                this._moveAfter(e, s, r))
              : null !==
                (e =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Ut(e.item, t) || this._addIdentityChange(e, t),
                this._reinsertAfter(e, s, r))
              : (e = this._addAfter(new pn(t, n), s, r)),
            e
          );
        }
        _verifyReinsertion(e, t, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (e = this._reinsertAfter(s, e._prev, r))
              : e.currentIndex != r &&
                ((e.currentIndex = r), this._addToMoves(e, r)),
            e
          );
        }
        _truncate(e) {
          for (; null !== e; ) {
            const t = e._next;
            this._addToRemovals(this._unlink(e)), (e = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(e, t, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
          const r = e._prevRemoved,
            s = e._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _moveAfter(e, t, n) {
          return (
            this._unlink(e),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _addAfter(e, t, n) {
          return (
            this._insertAfter(e, t, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = e)
                : (this._additionsTail._nextAdded = e)),
            e
          );
        }
        _insertAfter(e, t, n) {
          const r = null === t ? this._itHead : t._next;
          return (
            (e._next = r),
            (e._prev = t),
            null === r ? (this._itTail = e) : (r._prev = e),
            null === t ? (this._itHead = e) : (t._next = e),
            null === this._linkedRecords && (this._linkedRecords = new mn()),
            this._linkedRecords.put(e),
            (e.currentIndex = n),
            e
          );
        }
        _remove(e) {
          return this._addToRemovals(this._unlink(e));
        }
        _unlink(e) {
          null !== this._linkedRecords && this._linkedRecords.remove(e);
          const t = e._prev,
            n = e._next;
          return (
            null === t ? (this._itHead = n) : (t._next = n),
            null === n ? (this._itTail = t) : (n._prev = t),
            e
          );
        }
        _addToMoves(e, t) {
          return (
            e.previousIndex === t ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = e)
                  : (this._movesTail._nextMoved = e)),
            e
          );
        }
        _addToRemovals(e) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new mn()),
            this._unlinkedRecords.put(e),
            (e.currentIndex = null),
            (e._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = e),
                (e._prevRemoved = null))
              : ((e._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = e)),
            e
          );
        }
        _addIdentityChange(e, t) {
          return (
            (e.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = e)
                : (this._identityChangesTail._nextIdentityChange = e)),
            e
          );
        }
      }
      class pn {
        constructor(e, t) {
          (this.item = e),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class fn {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(e) {
          null === this._head
            ? ((this._head = this._tail = e),
              (e._nextDup = null),
              (e._prevDup = null))
            : ((this._tail._nextDup = e),
              (e._prevDup = this._tail),
              (e._nextDup = null),
              (this._tail = e));
        }
        get(e, t) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === t || t <= n.currentIndex) && Ut(n.trackById, e))
              return n;
          return null;
        }
        remove(e) {
          const t = e._prevDup,
            n = e._nextDup;
          return (
            null === t ? (this._head = n) : (t._nextDup = n),
            null === n ? (this._tail = t) : (n._prevDup = t),
            null === this._head
          );
        }
      }
      class mn {
        constructor() {
          this.map = new Map();
        }
        put(e) {
          const t = e.trackById;
          let n = this.map.get(t);
          n || ((n = new fn()), this.map.set(t, n)), n.add(e);
        }
        get(e, t) {
          const n = this.map.get(e);
          return n ? n.get(e, t) : null;
        }
        remove(e) {
          const t = e.trackById;
          return this.map.get(t).remove(e) && this.map.delete(t), e;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function gn(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + t + s;
      }
      class yn {
        constructor() {}
        supports(e) {
          return e instanceof Map || $t(e);
        }
        create() {
          return new _n();
        }
      }
      class _n {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(e) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) e(t);
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachChangedItem(e) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        diff(e) {
          if (e) {
            if (!(e instanceof Map || $t(e)))
              throw new Error(
                `Error trying to diff '${_e(
                  e
                )}'. Only maps and objects are allowed`
              );
          } else e = new Map();
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(e, (e, n) => {
              if (t && t.key === n)
                this._maybeAddToChanges(t, e),
                  (this._appendAfter = t),
                  (t = t._next);
              else {
                const r = this._getOrCreateRecordForKey(n, e);
                t = this._insertBeforeOrAppend(t, r);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let e = t; null !== e; e = e._nextRemoved)
              e === this._mapHead && (this._mapHead = null),
                this._records.delete(e.key),
                (e._nextRemoved = e._next),
                (e.previousValue = e.currentValue),
                (e.currentValue = null),
                (e._prev = null),
                (e._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(e, t) {
          if (e) {
            const n = e._prev;
            return (
              (t._next = e),
              (t._prev = n),
              (e._prev = t),
              n && (n._next = t),
              e === this._mapHead && (this._mapHead = t),
              (this._appendAfter = e),
              e
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
              : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(e, t) {
          if (this._records.has(e)) {
            const n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new vn(e);
          return (
            this._records.set(e, n),
            (n.currentValue = t),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (
              this._previousMapHead = this._mapHead, e = this._previousMapHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._changesHead; null !== e; e = e._nextChanged)
              e.previousValue = e.currentValue;
            for (e = this._additionsHead; null != e; e = e._nextAdded)
              e.previousValue = e.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(e, t) {
          Ut(t, e.currentValue) ||
            ((e.previousValue = e.currentValue),
            (e.currentValue = t),
            this._addToChanges(e));
        }
        _addToAdditions(e) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = e)
            : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
        }
        _addToChanges(e) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = e)
            : ((this._changesTail._nextChanged = e), (this._changesTail = e));
        }
        _forEach(e, t) {
          e instanceof Map
            ? e.forEach(t)
            : Object.keys(e).forEach((n) => t(e[n], n));
        }
      }
      class vn {
        constructor(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let bn = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (null != n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend IterableDiffers without a parent injector"
                    );
                  return e.create(t, n);
                },
                deps: [[e, new de(), new ue()]],
              };
            }
            find(e) {
              const t = this.factories.find((t) => t.supports(e));
              if (null != t) return t;
              throw new Error(
                `Cannot find a differ supporting object '${e}' of type '${
                  ((n = e), n.name || typeof n)
                }'`
              );
              var n;
            }
          }
          return (
            (e.ngInjectableDef = me({
              token: e,
              providedIn: "root",
              factory: () => new e([new un()]),
            })),
            e
          );
        })(),
        wn = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend KeyValueDiffers without a parent injector"
                    );
                  return e.create(t, n);
                },
                deps: [[e, new de(), new ue()]],
              };
            }
            find(e) {
              const t = this.factories.find((t) => t.supports(e));
              if (t) return t;
              throw new Error(`Cannot find a differ supporting object '${e}'`);
            }
          }
          return (
            (e.ngInjectableDef = me({
              token: e,
              providedIn: "root",
              factory: () => new e([new yn()]),
            })),
            e
          );
        })();
      const En = [new yn()],
        Sn = new bn([new un()]),
        Cn = new wn(En);
      let Tn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => xn(e, en)), e;
      })();
      const xn = Jt;
      let kn = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => In(e, en)), e;
      })();
      const In = Jt;
      function An(e, t, n, r) {
        let s = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;
        return (
          r &&
            (s +=
              " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
          (function (e, t) {
            const n = new Error(e);
            return Nn(n, t), n;
          })(s, e)
        );
      }
      function Nn(e, t) {
        (e.ngDebugContext = t), (e.ngErrorLogger = t.logError.bind(t));
      }
      function Rn(e) {
        return new Error(
          "ViewDestroyedError: Attempt to use a destroyed view: " + e
        );
      }
      function Pn(e, t, n) {
        const r = e.state,
          s = 1792 & r;
        return s === t
          ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0)
          : s === n;
      }
      function On(e, t, n) {
        return (
          (1792 & e.state) === t &&
          e.initIndex <= n &&
          ((e.initIndex = n + 1), !0)
        );
      }
      function Dn(e, t) {
        return e.nodes[t];
      }
      function Mn(e, t) {
        return e.nodes[t];
      }
      function Fn(e, t) {
        return e.nodes[t];
      }
      function Ln(e, t) {
        return e.nodes[t];
      }
      function Un(e, t) {
        return e.nodes[t];
      }
      const jn = {
          setCurrentNode: void 0,
          createRootView: void 0,
          createEmbeddedView: void 0,
          createComponentView: void 0,
          createNgModuleRef: void 0,
          overrideProvider: void 0,
          overrideComponentView: void 0,
          clearOverrides: void 0,
          checkAndUpdateView: void 0,
          checkNoChangesView: void 0,
          destroyView: void 0,
          resolveDep: void 0,
          createDebugContext: void 0,
          handleEvent: void 0,
          updateDirectives: void 0,
          updateRenderer: void 0,
          dirtyParentQueries: void 0,
        },
        zn = () => {},
        Hn = new Map();
      function $n(e) {
        let t = Hn.get(e);
        return t || ((t = _e(e) + "_" + Hn.size), Hn.set(e, t)), t;
      }
      function Vn(e) {
        return {
          id: "$$undefined",
          styles: e.styles,
          encapsulation: e.encapsulation,
          data: e.data,
        };
      }
      let Bn = 0;
      function qn(e, t, n, r) {
        return !(!(2 & e.state) && Ut(e.oldValues[t.bindingIndex + n], r));
      }
      function Qn(e, t, n, r) {
        return !!qn(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
      }
      function Wn(e, t, n, r) {
        const s = e.oldValues[t.bindingIndex + n];
        if (1 & e.state || !jt(s, r)) {
          const i = t.bindings[n].name;
          throw An(
            jn.createDebugContext(e, t.nodeIndex),
            `${i}: ${s}`,
            `${i}: ${r}`,
            0 != (1 & e.state)
          );
        }
      }
      function Kn(e) {
        let t = e;
        for (; t; )
          2 & t.def.flags && (t.state |= 8),
            (t = t.viewContainerParent || t.parent);
      }
      function Zn(e, t) {
        let n = e;
        for (; n && n !== t; )
          (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function Gn(e, t, n, r) {
        try {
          return (
            Kn(33554432 & e.def.nodes[t].flags ? Mn(e, t).componentView : e),
            jn.handleEvent(e, t, n, r)
          );
        } catch (s) {
          e.root.errorHandler.handleError(s);
        }
      }
      function Yn(e) {
        return e.parent ? Mn(e.parent, e.parentNodeDef.nodeIndex) : null;
      }
      function Xn(e) {
        return e.parent ? e.parentNodeDef.parent : null;
      }
      function Jn(e, t) {
        switch (201347067 & t.flags) {
          case 1:
            return Mn(e, t.nodeIndex).renderElement;
          case 2:
            return Dn(e, t.nodeIndex).renderText;
        }
      }
      function er(e) {
        return !!e.parent && !!(32768 & e.parentNodeDef.flags);
      }
      function tr(e) {
        return !(!e.parent || 32768 & e.parentNodeDef.flags);
      }
      function nr(e) {
        return 1 << e % 32;
      }
      function rr(e) {
        const t = {};
        let n = 0;
        const r = {};
        return (
          e &&
            e.forEach(([e, s]) => {
              "number" == typeof e ? ((t[e] = s), (n |= nr(e))) : (r[e] = s);
            }),
          { matchedQueries: t, references: r, matchedQueryIds: n }
        );
      }
      function sr(e, t) {
        return e.map((e) => {
          let n, r;
          return (
            Array.isArray(e) ? ([r, n] = e) : ((r = 0), (n = e)),
            n &&
              ("function" == typeof n || "object" == typeof n) &&
              t &&
              Object.defineProperty(n, "__source", {
                value: t,
                configurable: !0,
              }),
            { flags: r, token: n, tokenKey: $n(n) }
          );
        });
      }
      function ir(e, t, n) {
        let r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType &&
              r.element.componentRendererType.encapsulation === He.Native)
            ? Mn(e, n.renderParent.nodeIndex).renderElement
            : void 0
          : t;
      }
      const or = new WeakMap();
      function ar(e) {
        let t = or.get(e);
        return t || ((t = e(() => zn)), (t.factory = e), or.set(e, t)), t;
      }
      function lr(e, t, n, r, s) {
        3 === t && (n = e.renderer.parentNode(Jn(e, e.def.lastRenderRootNode))),
          cr(e, t, 0, e.def.nodes.length - 1, n, r, s);
      }
      function cr(e, t, n, r, s, i, o) {
        for (let a = n; a <= r; a++) {
          const n = e.def.nodes[a];
          11 & n.flags && hr(e, n, t, s, i, o), (a += n.childCount);
        }
      }
      function ur(e, t, n, r, s, i) {
        let o = e;
        for (; o && !er(o); ) o = o.parent;
        const a = o.parent,
          l = Xn(o),
          c = l.nodeIndex + l.childCount;
        for (let u = l.nodeIndex + 1; u <= c; u++) {
          const e = a.def.nodes[u];
          e.ngContentIndex === t && hr(a, e, n, r, s, i), (u += e.childCount);
        }
        if (!a.parent) {
          const o = e.root.projectableNodes[t];
          if (o) for (let t = 0; t < o.length; t++) dr(e, o[t], n, r, s, i);
        }
      }
      function hr(e, t, n, r, s, i) {
        if (8 & t.flags) ur(e, t.ngContent.index, n, r, s, i);
        else {
          const o = Jn(e, t);
          if (
            (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
              ? (16 & t.bindingFlags && dr(e, o, n, r, s, i),
                32 & t.bindingFlags &&
                  dr(Mn(e, t.nodeIndex).componentView, o, n, r, s, i))
              : dr(e, o, n, r, s, i),
            16777216 & t.flags)
          ) {
            const o = Mn(e, t.nodeIndex).viewContainer._embeddedViews;
            for (let e = 0; e < o.length; e++) lr(o[e], n, r, s, i);
          }
          1 & t.flags &&
            !t.element.name &&
            cr(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, s, i);
        }
      }
      function dr(e, t, n, r, s, i) {
        const o = e.renderer;
        switch (n) {
          case 1:
            o.appendChild(r, t);
            break;
          case 2:
            o.insertBefore(r, t, s);
            break;
          case 3:
            o.removeChild(r, t);
            break;
          case 0:
            i.push(t);
        }
      }
      const pr = /^:([^:]+):(.+)$/;
      function fr(e) {
        if (":" === e[0]) {
          const t = e.match(pr);
          return [t[1], t[2]];
        }
        return ["", e];
      }
      function mr(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t |= e[n].flags;
        return t;
      }
      function gr(e, t, n, r, s, i, o, a, l, c, u, h, d, p, f, m, g, y, _, v) {
        switch (e) {
          case 1:
            return t + yr(n) + r;
          case 2:
            return t + yr(n) + r + yr(s) + i;
          case 3:
            return t + yr(n) + r + yr(s) + i + yr(o) + a;
          case 4:
            return t + yr(n) + r + yr(s) + i + yr(o) + a + yr(l) + c;
          case 5:
            return (
              t + yr(n) + r + yr(s) + i + yr(o) + a + yr(l) + c + yr(u) + h
            );
          case 6:
            return (
              t +
              yr(n) +
              r +
              yr(s) +
              i +
              yr(o) +
              a +
              yr(l) +
              c +
              yr(u) +
              h +
              yr(d) +
              p
            );
          case 7:
            return (
              t +
              yr(n) +
              r +
              yr(s) +
              i +
              yr(o) +
              a +
              yr(l) +
              c +
              yr(u) +
              h +
              yr(d) +
              p +
              yr(f) +
              m
            );
          case 8:
            return (
              t +
              yr(n) +
              r +
              yr(s) +
              i +
              yr(o) +
              a +
              yr(l) +
              c +
              yr(u) +
              h +
              yr(d) +
              p +
              yr(f) +
              m +
              yr(g) +
              y
            );
          case 9:
            return (
              t +
              yr(n) +
              r +
              yr(s) +
              i +
              yr(o) +
              a +
              yr(l) +
              c +
              yr(u) +
              h +
              yr(d) +
              p +
              yr(f) +
              m +
              yr(g) +
              y +
              yr(_) +
              v
            );
          default:
            throw new Error("Does not support more than 9 expressions");
        }
      }
      function yr(e) {
        return null != e ? e.toString() : "";
      }
      const _r = new Object(),
        vr = $n(kt),
        br = $n(Ie),
        wr = $n(Le);
      function Er(e, t, n, r) {
        return (
          (n = we(n)),
          { index: -1, deps: sr(r, _e(t)), flags: e, token: t, value: n }
        );
      }
      function Sr(e, t, n = kt.THROW_IF_NOT_FOUND) {
        const r = Oe(e);
        try {
          if (8 & t.flags) return t.token;
          if ((2 & t.flags && (n = null), 1 & t.flags))
            return e._parent.get(t.token, n);
          const o = t.tokenKey;
          switch (o) {
            case vr:
            case br:
            case wr:
              return e;
          }
          const a = e._def.providersByKey[o];
          let l;
          if (a) {
            let t = e._providers[a.index];
            return (
              void 0 === t && (t = e._providers[a.index] = Cr(e, a)),
              t === _r ? void 0 : t
            );
          }
          if (
            (l = ge(t.token)) &&
            ((s = e),
            null != (i = l).providedIn &&
              ((function (e, t) {
                return e._def.modules.indexOf(t) > -1;
              })(s, i.providedIn) ||
                ("root" === i.providedIn && s._def.isRoot)))
          ) {
            const n = e._providers.length;
            return (
              (e._def.providers[n] = e._def.providersByKey[t.tokenKey] = {
                flags: 5120,
                value: l.factory,
                deps: [],
                index: n,
                token: t.token,
              }),
              (e._providers[n] = _r),
              (e._providers[n] = Cr(e, e._def.providersByKey[t.tokenKey]))
            );
          }
          return 4 & t.flags ? n : e._parent.get(t.token, n);
        } finally {
          Oe(r);
        }
        var s, i;
      }
      function Cr(e, t) {
        let n;
        switch (201347067 & t.flags) {
          case 512:
            n = (function (e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return new t();
                case 1:
                  return new t(Sr(e, n[0]));
                case 2:
                  return new t(Sr(e, n[0]), Sr(e, n[1]));
                case 3:
                  return new t(Sr(e, n[0]), Sr(e, n[1]), Sr(e, n[2]));
                default:
                  const s = new Array(r);
                  for (let t = 0; t < r; t++) s[t] = Sr(e, n[t]);
                  return new t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 1024:
            n = (function (e, t, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return t();
                case 1:
                  return t(Sr(e, n[0]));
                case 2:
                  return t(Sr(e, n[0]), Sr(e, n[1]));
                case 3:
                  return t(Sr(e, n[0]), Sr(e, n[1]), Sr(e, n[2]));
                default:
                  const s = Array(r);
                  for (let t = 0; t < r; t++) s[t] = Sr(e, n[t]);
                  return t(...s);
              }
            })(e, t.value, t.deps);
            break;
          case 2048:
            n = Sr(e, t.deps[0]);
            break;
          case 256:
            n = t.value;
        }
        return (
          n === _r ||
            null === n ||
            "object" != typeof n ||
            131072 & t.flags ||
            "function" != typeof n.ngOnDestroy ||
            (t.flags |= 131072),
          void 0 === n ? _r : n
        );
      }
      function Tr(e, t) {
        const n = e.viewContainer._embeddedViews;
        if (((null == t || t >= n.length) && (t = n.length - 1), t < 0))
          return null;
        const r = n[t];
        return (
          (r.viewContainerParent = null),
          ze(n, t),
          jn.dirtyParentQueries(r),
          kr(r),
          r
        );
      }
      function xr(e, t, n) {
        const r = t ? Jn(t, t.def.lastRenderRootNode) : e.renderElement,
          s = n.renderer.parentNode(r),
          i = n.renderer.nextSibling(r);
        lr(n, 2, s, i, void 0);
      }
      function kr(e) {
        lr(e, 3, null, null, void 0);
      }
      const Ir = new Object();
      function Ar(e, t, n, r, s, i) {
        return new Nr(e, t, n, r, s, i);
      }
      class Nr extends Qt {
        constructor(e, t, n, r, s, i) {
          super(),
            (this.selector = e),
            (this.componentType = t),
            (this._inputs = r),
            (this._outputs = s),
            (this.ngContentSelectors = i),
            (this.viewDefFactory = n);
        }
        get inputs() {
          const e = [],
            t = this._inputs;
          for (let n in t) e.push({ propName: n, templateName: t[n] });
          return e;
        }
        get outputs() {
          const e = [];
          for (let t in this._outputs)
            e.push({ propName: t, templateName: this._outputs[t] });
          return e;
        }
        create(e, t, n, r) {
          if (!r) throw new Error("ngModule should be provided");
          const s = ar(this.viewDefFactory),
            i = s.nodes[0].element.componentProvider.nodeIndex,
            o = jn.createRootView(e, t || [], n, s, r, Ir),
            a = Fn(o, i).instance;
          return (
            n &&
              o.renderer.setAttribute(
                Mn(o, 0).renderElement,
                "ng-version",
                cn.full
              ),
            new Rr(o, new Mr(o), a)
          );
        }
      }
      class Rr extends class {} {
        constructor(e, t, n) {
          super(),
            (this._view = e),
            (this._viewRef = t),
            (this._component = n),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = t),
            (this.changeDetectorRef = t),
            (this.instance = n);
        }
        get location() {
          return new en(Mn(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new jr(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(e) {
          this._viewRef.onDestroy(e);
        }
      }
      function Pr(e, t, n) {
        return new Or(e, t, n);
      }
      class Or {
        constructor(e, t, n) {
          (this._view = e),
            (this._elDef = t),
            (this._data = n),
            (this._embeddedViews = []);
        }
        get element() {
          return new en(this._data.renderElement);
        }
        get injector() {
          return new jr(this._view, this._elDef);
        }
        get parentInjector() {
          let e = this._view,
            t = this._elDef.parent;
          for (; !t && e; ) (t = Xn(e)), (e = e.parent);
          return e ? new jr(e, t) : new jr(this._view, null);
        }
        clear() {
          for (let e = this._embeddedViews.length - 1; e >= 0; e--) {
            const t = Tr(this._data, e);
            jn.destroyView(t);
          }
        }
        get(e) {
          const t = this._embeddedViews[e];
          if (t) {
            const e = new Mr(t);
            return e.attachToViewContainerRef(this), e;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(e, t, n) {
          const r = e.createEmbeddedView(t || {});
          return this.insert(r, n), r;
        }
        createComponent(e, t, n, r, s) {
          const i = n || this.parentInjector;
          s || e instanceof Xt || (s = i.get(Le));
          const o = e.create(i, r, void 0, s);
          return this.insert(o.hostView, t), o;
        }
        insert(e, t) {
          if (e.destroyed)
            throw new Error(
              "Cannot insert a destroyed View in a ViewContainer!"
            );
          const n = e;
          return (
            (function (e, t, n, r) {
              let s = t.viewContainer._embeddedViews;
              null == n && (n = s.length),
                (r.viewContainerParent = e),
                je(s, n, r),
                (function (e, t) {
                  const n = Yn(t);
                  if (!n || n === e || 16 & t.state) return;
                  t.state |= 16;
                  let r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []),
                    r.push(t),
                    (function (e, t) {
                      if (4 & t.flags) return;
                      (e.nodeFlags |= 4), (t.flags |= 4);
                      let n = t.parent;
                      for (; n; ) (n.childFlags |= 4), (n = n.parent);
                    })(t.parent.def, t.parentNodeDef);
                })(t, r),
                jn.dirtyParentQueries(r),
                xr(t, n > 0 ? s[n - 1] : null, r);
            })(this._view, this._data, t, n._view),
            n.attachToViewContainerRef(this),
            e
          );
        }
        move(e, t) {
          if (e.destroyed)
            throw new Error("Cannot move a destroyed View in a ViewContainer!");
          const n = this._embeddedViews.indexOf(e._view);
          return (
            (function (e, t, n) {
              const r = e.viewContainer._embeddedViews,
                s = r[t];
              ze(r, t),
                null == n && (n = r.length),
                je(r, n, s),
                jn.dirtyParentQueries(s),
                kr(s),
                xr(e, n > 0 ? r[n - 1] : null, s);
            })(this._data, n, t),
            e
          );
        }
        indexOf(e) {
          return this._embeddedViews.indexOf(e._view);
        }
        remove(e) {
          const t = Tr(this._data, e);
          t && jn.destroyView(t);
        }
        detach(e) {
          const t = Tr(this._data, e);
          return t ? new Mr(t) : null;
        }
      }
      function Dr(e) {
        return new Mr(e);
      }
      class Mr {
        constructor(e) {
          (this._view = e),
            (this._viewContainerRef = null),
            (this._appRef = null);
        }
        get rootNodes() {
          return (function (e) {
            const t = [];
            return lr(e, 0, void 0, void 0, t), t;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return 0 != (128 & this._view.state);
        }
        markForCheck() {
          Kn(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const e = this._view.root.rendererFactory;
          e.begin && e.begin();
          try {
            jn.checkAndUpdateView(this._view);
          } finally {
            e.end && e.end();
          }
        }
        checkNoChanges() {
          jn.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(e) {
          this._view.disposables || (this._view.disposables = []),
            this._view.disposables.push(e);
        }
        destroy() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef &&
              this._viewContainerRef.detach(
                this._viewContainerRef.indexOf(this)
              ),
            jn.destroyView(this._view);
        }
        detachFromAppRef() {
          (this._appRef = null),
            kr(this._view),
            jn.dirtyParentQueries(this._view);
        }
        attachToAppRef(e) {
          if (this._viewContainerRef)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = e;
        }
        attachToViewContainerRef(e) {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._viewContainerRef = e;
        }
      }
      function Fr(e, t) {
        return new Lr(e, t);
      }
      class Lr extends Tn {
        constructor(e, t) {
          super(), (this._parentView = e), (this._def = t);
        }
        createEmbeddedView(e) {
          return new Mr(
            jn.createEmbeddedView(
              this._parentView,
              this._def,
              this._def.element.template,
              e
            )
          );
        }
        get elementRef() {
          return new en(
            Mn(this._parentView, this._def.nodeIndex).renderElement
          );
        }
      }
      function Ur(e, t) {
        return new jr(e, t);
      }
      class jr {
        constructor(e, t) {
          (this.view = e), (this.elDef = t);
        }
        get(e, t = kt.THROW_IF_NOT_FOUND) {
          return jn.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: e, tokenKey: $n(e) },
            t
          );
        }
      }
      function zr(e, t) {
        const n = e.def.nodes[t];
        if (1 & n.flags) {
          const t = Mn(e, n.nodeIndex);
          return n.element.template ? t.template : t.renderElement;
        }
        if (2 & n.flags) return Dn(e, n.nodeIndex).renderText;
        if (20240 & n.flags) return Fn(e, n.nodeIndex).instance;
        throw new Error("Illegal state: read nodeValue for node index " + t);
      }
      function Hr(e) {
        return new $r(e.renderer);
      }
      class $r {
        constructor(e) {
          this.delegate = e;
        }
        selectRootElement(e) {
          return this.delegate.selectRootElement(e);
        }
        createElement(e, t) {
          const [n, r] = fr(t),
            s = this.delegate.createElement(r, n);
          return e && this.delegate.appendChild(e, s), s;
        }
        createViewRoot(e) {
          return e;
        }
        createTemplateAnchor(e) {
          const t = this.delegate.createComment("");
          return e && this.delegate.appendChild(e, t), t;
        }
        createText(e, t) {
          const n = this.delegate.createText(t);
          return e && this.delegate.appendChild(e, n), n;
        }
        projectNodes(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n]);
        }
        attachViewAfter(e, t) {
          const n = this.delegate.parentNode(e),
            r = this.delegate.nextSibling(e);
          for (let s = 0; s < t.length; s++)
            this.delegate.insertBefore(n, t[s], r);
        }
        detachView(e) {
          for (let t = 0; t < e.length; t++) {
            const n = e[t],
              r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        }
        destroyView(e, t) {
          for (let n = 0; n < t.length; n++) this.delegate.destroyNode(t[n]);
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        listenGlobal(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        setElementProperty(e, t, n) {
          this.delegate.setProperty(e, t, n);
        }
        setElementAttribute(e, t, n) {
          const [r, s] = fr(t);
          null != n
            ? this.delegate.setAttribute(e, s, n, r)
            : this.delegate.removeAttribute(e, s, r);
        }
        setBindingDebugInfo(e, t, n) {}
        setElementClass(e, t, n) {
          n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t);
        }
        setElementStyle(e, t, n) {
          null != n
            ? this.delegate.setStyle(e, t, n)
            : this.delegate.removeStyle(e, t);
        }
        invokeElementMethod(e, t, n) {
          e[t].apply(e, n);
        }
        setText(e, t) {
          this.delegate.setValue(e, t);
        }
        animate() {
          throw new Error("Renderer.animate is no longer supported!");
        }
      }
      function Vr(e, t, n, r) {
        return new Br(e, t, n, r);
      }
      class Br {
        constructor(e, t, n, r) {
          (this._moduleType = e),
            (this._parent = t),
            (this._bootstrapComponents = n),
            (this._def = r),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function (e) {
              const t = e._def,
                n = (e._providers = new Array(t.providers.length));
              for (let r = 0; r < t.providers.length; r++) {
                const s = t.providers[r];
                4096 & s.flags || (void 0 === n[r] && (n[r] = Cr(e, s)));
              }
            })(this);
        }
        get(e, t = kt.THROW_IF_NOT_FOUND, n = pe.Default) {
          let r = 0;
          return (
            n & pe.SkipSelf ? (r |= 1) : n & pe.Self && (r |= 4),
            Sr(this, { token: e, tokenKey: $n(e), flags: r }, t)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(Gt);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(
              `The ng module ${_e(
                this.instance.constructor
              )} has already been destroyed.`
            );
          (this._destroyed = !0),
            (function (e, t) {
              const n = e._def,
                r = new Set();
              for (let s = 0; s < n.providers.length; s++)
                if (131072 & n.providers[s].flags) {
                  const t = e._providers[s];
                  if (t && t !== _r) {
                    const e = t.ngOnDestroy;
                    "function" != typeof e ||
                      r.has(t) ||
                      (e.apply(t), r.add(t));
                  }
                }
            })(this),
            this._destroyListeners.forEach((e) => e());
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
      }
      const qr = $n(nn),
        Qr = $n(on),
        Wr = $n(en),
        Kr = $n(kn),
        Zr = $n(Tn),
        Gr = $n(St),
        Yr = $n(kt),
        Xr = $n(Ie);
      function Jr(e, t, n, r, s, i, o, a) {
        const l = [];
        if (o)
          for (let u in o) {
            const [e, t] = o[u];
            l[e] = {
              flags: 8,
              name: u,
              nonMinifiedName: t,
              ns: null,
              securityContext: null,
              suffix: null,
            };
          }
        const c = [];
        if (a)
          for (let u in a)
            c.push({ type: 1, propName: u, target: null, eventName: a[u] });
        return (function (e, t, n, r, s, i, o, a, l) {
          const { matchedQueries: c, references: u, matchedQueryIds: h } = rr(
            n
          );
          l || (l = []), a || (a = []), (i = we(i));
          const d = sr(o, _e(s));
          return {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: t,
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: c,
            matchedQueryIds: h,
            references: u,
            ngContentIndex: -1,
            childCount: r,
            bindings: a,
            bindingFlags: mr(a),
            outputs: l,
            element: null,
            provider: { token: s, value: i, deps: d },
            text: null,
            query: null,
            ngContent: null,
          };
        })(e, (t |= 16384), n, r, s, s, i, l, c);
      }
      function es(e, t) {
        return ss(e, t);
      }
      function ts(e, t) {
        let n = e;
        for (; n.parent && !er(n); ) n = n.parent;
        return is(n.parent, Xn(n), !0, t.provider.value, t.provider.deps);
      }
      function ns(e, t) {
        const n = is(
          e,
          t.parent,
          (32768 & t.flags) > 0,
          t.provider.value,
          t.provider.deps
        );
        if (t.outputs.length)
          for (let r = 0; r < t.outputs.length; r++) {
            const s = t.outputs[r],
              i = n[s.propName];
            if (!Bt(i))
              throw new Error(
                `@Output ${s.propName} not initialized in '${n.constructor.name}'.`
              );
            {
              const n = i.subscribe(rs(e, t.parent.nodeIndex, s.eventName));
              e.disposables[t.outputIndex + r] = n.unsubscribe.bind(n);
            }
          }
        return n;
      }
      function rs(e, t, n) {
        return (r) => Gn(e, t, n, r);
      }
      function ss(e, t) {
        const n = (8192 & t.flags) > 0,
          r = t.provider;
        switch (201347067 & t.flags) {
          case 512:
            return is(e, t.parent, n, r.value, r.deps);
          case 1024:
            return (function (e, t, n, r, s) {
              const i = s.length;
              switch (i) {
                case 0:
                  return r();
                case 1:
                  return r(as(e, t, n, s[0]));
                case 2:
                  return r(as(e, t, n, s[0]), as(e, t, n, s[1]));
                case 3:
                  return r(
                    as(e, t, n, s[0]),
                    as(e, t, n, s[1]),
                    as(e, t, n, s[2])
                  );
                default:
                  const o = Array(i);
                  for (let r = 0; r < i; r++) o[r] = as(e, t, n, s[r]);
                  return r(...o);
              }
            })(e, t.parent, n, r.value, r.deps);
          case 2048:
            return as(e, t.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function is(e, t, n, r, s) {
        const i = s.length;
        switch (i) {
          case 0:
            return new r();
          case 1:
            return new r(as(e, t, n, s[0]));
          case 2:
            return new r(as(e, t, n, s[0]), as(e, t, n, s[1]));
          case 3:
            return new r(
              as(e, t, n, s[0]),
              as(e, t, n, s[1]),
              as(e, t, n, s[2])
            );
          default:
            const o = new Array(i);
            for (let r = 0; r < i; r++) o[r] = as(e, t, n, s[r]);
            return new r(...o);
        }
      }
      const os = {};
      function as(e, t, n, r, s = kt.THROW_IF_NOT_FOUND) {
        if (8 & r.flags) return r.token;
        const i = e;
        2 & r.flags && (s = null);
        const o = r.tokenKey;
        o === Gr && (n = !(!t || !t.element.componentView)),
          t && 1 & r.flags && ((n = !1), (t = t.parent));
        let a = e;
        for (; a; ) {
          if (t)
            switch (o) {
              case qr:
                return Hr(ls(a, t, n));
              case Qr:
                return ls(a, t, n).renderer;
              case Wr:
                return new en(Mn(a, t.nodeIndex).renderElement);
              case Kr:
                return Mn(a, t.nodeIndex).viewContainer;
              case Zr:
                if (t.element.template) return Mn(a, t.nodeIndex).template;
                break;
              case Gr:
                return Dr(ls(a, t, n));
              case Yr:
              case Xr:
                return Ur(a, t);
              default:
                const e = (n
                  ? t.element.allProviders
                  : t.element.publicProviders)[o];
                if (e) {
                  let t = Fn(a, e.nodeIndex);
                  return (
                    t ||
                      ((t = { instance: ss(a, e) }),
                      (a.nodes[e.nodeIndex] = t)),
                    t.instance
                  );
                }
            }
          (n = er(a)), (t = Xn(a)), (a = a.parent), 4 & r.flags && (a = null);
        }
        const l = i.root.injector.get(r.token, os);
        return l !== os || s === os
          ? l
          : i.root.ngModule.injector.get(r.token, s);
      }
      function ls(e, t, n) {
        let r;
        if (n) r = Mn(e, t.nodeIndex).componentView;
        else for (r = e; r.parent && !er(r); ) r = r.parent;
        return r;
      }
      function cs(e, t, n, r, s, i) {
        if (32768 & n.flags) {
          const t = Mn(e, n.parent.nodeIndex).componentView;
          2 & t.def.flags && (t.state |= 8);
        }
        if (((t.instance[n.bindings[r].name] = s), 524288 & n.flags)) {
          i = i || {};
          const t = zt.unwrap(e.oldValues[n.bindingIndex + r]);
          i[n.bindings[r].nonMinifiedName] = new qt(t, s, 0 != (2 & e.state));
        }
        return (e.oldValues[n.bindingIndex + r] = s), i;
      }
      function us(e, t) {
        if (!(e.def.nodeFlags & t)) return;
        const n = e.def.nodes;
        let r = 0;
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          let o = i.parent;
          for (
            !o && i.flags & t && ds(e, s, i.flags & t, r++),
              0 == (i.childFlags & t) && (s += i.childCount);
            o && 1 & o.flags && s === o.nodeIndex + o.childCount;

          )
            o.directChildFlags & t && (r = hs(e, o, t, r)), (o = o.parent);
        }
      }
      function hs(e, t, n, r) {
        for (let s = t.nodeIndex + 1; s <= t.nodeIndex + t.childCount; s++) {
          const t = e.def.nodes[s];
          t.flags & n && ds(e, s, t.flags & n, r++), (s += t.childCount);
        }
        return r;
      }
      function ds(e, t, n, r) {
        const s = Fn(e, t);
        if (!s) return;
        const i = s.instance;
        i &&
          (jn.setCurrentNode(e, t),
          1048576 & n && On(e, 512, r) && i.ngAfterContentInit(),
          2097152 & n && i.ngAfterContentChecked(),
          4194304 & n && On(e, 768, r) && i.ngAfterViewInit(),
          8388608 & n && i.ngAfterViewChecked(),
          131072 & n && i.ngOnDestroy());
      }
      const ps = new ke("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: () => $e,
        }),
        fs = {},
        ms = (function () {
          var e = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencySymbol: 15,
            CurrencyName: 16,
            Currencies: 17,
            PluralCase: 18,
            ExtraData: 19,
          };
          return (
            (e[e.LocaleId] = "LocaleId"),
            (e[e.DayPeriodsFormat] = "DayPeriodsFormat"),
            (e[e.DayPeriodsStandalone] = "DayPeriodsStandalone"),
            (e[e.DaysFormat] = "DaysFormat"),
            (e[e.DaysStandalone] = "DaysStandalone"),
            (e[e.MonthsFormat] = "MonthsFormat"),
            (e[e.MonthsStandalone] = "MonthsStandalone"),
            (e[e.Eras] = "Eras"),
            (e[e.FirstDayOfWeek] = "FirstDayOfWeek"),
            (e[e.WeekendRange] = "WeekendRange"),
            (e[e.DateFormat] = "DateFormat"),
            (e[e.TimeFormat] = "TimeFormat"),
            (e[e.DateTimeFormat] = "DateTimeFormat"),
            (e[e.NumberSymbols] = "NumberSymbols"),
            (e[e.NumberFormats] = "NumberFormats"),
            (e[e.CurrencySymbol] = "CurrencySymbol"),
            (e[e.CurrencyName] = "CurrencyName"),
            (e[e.Currencies] = "Currencies"),
            (e[e.PluralCase] = "PluralCase"),
            (e[e.ExtraData] = "ExtraData"),
            e
          );
        })(),
        gs = void 0;
      var ys = [
        "en",
        [["a", "p"], ["AM", "PM"], gs],
        [["AM", "PM"], gs, gs],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        gs,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        gs,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", gs, "{1} 'at' {0}", gs],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "$",
        "US Dollar",
        {},
        function (e) {
          let t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === t && 0 === n ? 1 : 5;
        },
      ];
      class _s extends k {
        constructor(e = !1) {
          super(), (this.__isAsync = e);
        }
        emit(e) {
          super.next(e);
        }
        subscribe(e, t, n) {
          let r,
            s = (e) => null,
            i = () => null;
          e && "object" == typeof e
            ? ((r = this.__isAsync
                ? (t) => {
                    setTimeout(() => e.next(t));
                  }
                : (t) => {
                    e.next(t);
                  }),
              e.error &&
                (s = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e.error(t));
                    }
                  : (t) => {
                      e.error(t);
                    }),
              e.complete &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => e.complete());
                    }
                  : () => {
                      e.complete();
                    }))
            : ((r = this.__isAsync
                ? (t) => {
                    setTimeout(() => e(t));
                  }
                : (t) => {
                    e(t);
                  }),
              t &&
                (s = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t(e));
                    }
                  : (e) => {
                      t(e);
                    }),
              n &&
                (i = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const o = super.subscribe(r, s, i);
          return e instanceof d && e.add(o), o;
        }
      }
      function vs() {
        return this._results[Lt()]();
      }
      class bs {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new _s()),
            (this.length = 0);
          const e = Lt(),
            t = bs.prototype;
          t[e] || (t[e] = vs);
        }
        map(e) {
          return this._results.map(e);
        }
        filter(e) {
          return this._results.filter(e);
        }
        find(e) {
          return this._results.find(e);
        }
        reduce(e, t) {
          return this._results.reduce(e, t);
        }
        forEach(e) {
          this._results.forEach(e);
        }
        some(e) {
          return this._results.some(e);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(e) {
          (this._results = (function e(t, n) {
            void 0 === n && (n = t);
            for (let r = 0; r < t.length; r++) {
              let s = t[r];
              Array.isArray(s)
                ? (n === t && (n = t.slice(0, r)), e(s, n))
                : n !== t && n.push(s);
            }
            return n;
          })(e)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      const ws = new ke("Application Initializer");
      class Es {
        constructor(e) {
          (this.appInits = e),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            }));
        }
        runInitializers() {
          if (this.initialized) return;
          const e = [],
            t = () => {
              (this.done = !0), this.resolve();
            };
          if (this.appInits)
            for (let n = 0; n < this.appInits.length; n++) {
              const t = this.appInits[n]();
              Vt(t) && e.push(t);
            }
          Promise.all(e)
            .then(() => {
              t();
            })
            .catch((e) => {
              this.reject(e);
            }),
            0 === e.length && t(),
            (this.initialized = !0);
        }
      }
      const Ss = new ke("AppId"),
        Cs = new ke("Platform Initializer"),
        Ts = new ke("Platform ID"),
        xs = new ke("appBootstrapListener");
      class ks {
        log(e) {
          console.log(e);
        }
        warn(e) {
          console.warn(e);
        }
      }
      const Is = new ke("LocaleId");
      function As() {
        throw new Error("Runtime compiler is not loaded");
      }
      const Ns = As,
        Rs = As,
        Ps = As,
        Os = As;
      class Ds {
        constructor() {
          (this.compileModuleSync = Ns),
            (this.compileModuleAsync = Rs),
            (this.compileModuleAndAllComponentsSync = Ps),
            (this.compileModuleAndAllComponentsAsync = Os);
        }
        clearCache() {}
        clearCacheFor(e) {}
        getModuleId(e) {}
      }
      class Ms {}
      let Fs, Ls;
      function Us() {
        const e = xe.wtf;
        return !(!e || ((Fs = e.trace), !Fs) || ((Ls = Fs.events), 0));
      }
      const js = Us();
      function zs(e, t) {
        return null;
      }
      const Hs = js
          ? function (e, t = null) {
              return Ls.createScope(e, t);
            }
          : (e, t) => zs,
        $s = js
          ? function (e, t) {
              return Fs.leaveScope(e, t), t;
            }
          : (e, t) => t,
        Vs = (() => Promise.resolve(0))();
      function Bs(e) {
        "undefined" == typeof Zone
          ? Vs.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class qs {
        constructor({ enableLongStackTrace: e = !1 }) {
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new _s(!1)),
            (this.onMicrotaskEmpty = new _s(!1)),
            (this.onStable = new _s(!1)),
            (this.onError = new _s(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          var t;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            e &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((t = this)._inner = t._inner.fork({
              name: "angular",
              properties: { isAngularZone: !0 },
              onInvokeTask: (e, n, r, s, i, o) => {
                try {
                  return Zs(t), e.invokeTask(r, s, i, o);
                } finally {
                  Gs(t);
                }
              },
              onInvoke: (e, n, r, s, i, o, a) => {
                try {
                  return Zs(t), e.invoke(r, s, i, o, a);
                } finally {
                  Gs(t);
                }
              },
              onHasTask: (e, n, r, s) => {
                e.hasTask(r, s),
                  n === r &&
                    ("microTask" == s.change
                      ? ((t.hasPendingMicrotasks = s.microTask), Ks(t))
                      : "macroTask" == s.change &&
                        (t.hasPendingMacrotasks = s.macroTask));
              },
              onHandleError: (e, n, r, s) => (
                e.handleError(r, s),
                t.runOutsideAngular(() => t.onError.emit(s)),
                !1
              ),
            }));
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!qs.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (qs.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(e, t, n) {
          return this._inner.run(e, t, n);
        }
        runTask(e, t, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask("NgZoneEvent: " + r, e, Ws, Qs, Qs);
          try {
            return s.runTask(i, t, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(e, t, n) {
          return this._inner.runGuarded(e, t, n);
        }
        runOutsideAngular(e) {
          return this._outer.run(e);
        }
      }
      function Qs() {}
      const Ws = {};
      function Ks(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Zs(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Gs(e) {
        e._nesting--, Ks(e);
      }
      class Ys {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new _s()),
            (this.onMicrotaskEmpty = new _s()),
            (this.onStable = new _s()),
            (this.onError = new _s());
        }
        run(e) {
          return e();
        }
        runGuarded(e) {
          return e();
        }
        runOutsideAngular(e) {
          return e();
        }
        runTask(e) {
          return e();
        }
      }
      class Xs {
        constructor(e) {
          (this._ngZone = e),
            (this._pendingCount = 0),
            (this._isZoneStable = !0),
            (this._didWork = !1),
            (this._callbacks = []),
            (this.taskTrackingZone = null),
            this._watchAngularEvents(),
            e.run(() => {
              this.taskTrackingZone =
                "undefined" == typeof Zone
                  ? null
                  : Zone.current.get("TaskTrackingZone");
            });
        }
        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              (this._didWork = !0), (this._isZoneStable = !1);
            },
          }),
            this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable.subscribe({
                next: () => {
                  qs.assertNotInAngularZone(),
                    Bs(() => {
                      (this._isZoneStable = !0), this._runCallbacksIfReady();
                    });
                },
              });
            });
        }
        increasePendingRequestCount() {
          return (
            (this._pendingCount += 1), (this._didWork = !0), this._pendingCount
          );
        }
        decreasePendingRequestCount() {
          if (((this._pendingCount -= 1), this._pendingCount < 0))
            throw new Error("pending async requests below zero");
          return this._runCallbacksIfReady(), this._pendingCount;
        }
        isStable() {
          return (
            this._isZoneStable &&
            0 === this._pendingCount &&
            !this._ngZone.hasPendingMacrotasks
          );
        }
        _runCallbacksIfReady() {
          if (this.isStable())
            Bs(() => {
              for (; 0 !== this._callbacks.length; ) {
                let e = this._callbacks.pop();
                clearTimeout(e.timeoutId), e.doneCb(this._didWork);
              }
              this._didWork = !1;
            });
          else {
            let e = this.getPendingTasks();
            (this._callbacks = this._callbacks.filter(
              (t) =>
                !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
            )),
              (this._didWork = !0);
          }
        }
        getPendingTasks() {
          return this.taskTrackingZone
            ? this.taskTrackingZone.macroTasks.map((e) => ({
                source: e.source,
                creationLocation: e.creationLocation,
                data: e.data,
              }))
            : [];
        }
        addCallback(e, t, n) {
          let r = -1;
          t &&
            t > 0 &&
            (r = setTimeout(() => {
              (this._callbacks = this._callbacks.filter(
                (e) => e.timeoutId !== r
              )),
                e(this._didWork, this.getPendingTasks());
            }, t)),
            this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
        }
        whenStable(e, t, n) {
          if (n && !this.taskTrackingZone)
            throw new Error(
              'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
            );
          this.addCallback(e, t, n), this._runCallbacksIfReady();
        }
        getPendingRequestCount() {
          return this._pendingCount;
        }
        findProviders(e, t, n) {
          return [];
        }
      }
      class Js {
        constructor() {
          (this._applications = new Map()), ni.addToWindow(this);
        }
        registerApplication(e, t) {
          this._applications.set(e, t);
        }
        unregisterApplication(e) {
          this._applications.delete(e);
        }
        unregisterAllApplications() {
          this._applications.clear();
        }
        getTestability(e) {
          return this._applications.get(e) || null;
        }
        getAllTestabilities() {
          return Array.from(this._applications.values());
        }
        getAllRootElements() {
          return Array.from(this._applications.keys());
        }
        findTestabilityInTree(e, t = !0) {
          return ni.findTestabilityInTree(this, e, t);
        }
      }
      class ei {
        addToWindow(e) {}
        findTestabilityInTree(e, t, n) {
          return null;
        }
      }
      let ti,
        ni = new ei();
      const ri = new ke("AllowMultipleToken");
      class si {
        constructor(e, t) {
          (this.name = e), (this.token = t);
        }
      }
      function ii(e, t, n = []) {
        const r = "Platform: " + t,
          s = new ke(r);
        return (t = []) => {
          let i = oi();
          if (!i || i.injector.get(ri, !1))
            if (e) e(n.concat(t).concat({ provide: s, useValue: !0 }));
            else {
              const e = n.concat(t).concat({ provide: s, useValue: !0 });
              !(function (e) {
                if (ti && !ti.destroyed && !ti.injector.get(ri, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                ti = e.get(ai);
                const t = e.get(Cs, null);
                t && t.forEach((e) => e());
              })(kt.create({ providers: e, name: r }));
            }
          return (function (e) {
            const t = oi();
            if (!t) throw new Error("No platform exists!");
            if (!t.injector.get(e, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return t;
          })(s);
        };
      }
      function oi() {
        return ti && !ti.destroyed ? ti : null;
      }
      class ai {
        constructor(e) {
          (this._injector = e),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        bootstrapModuleFactory(e, t) {
          const n = (function (e) {
              let t;
              return (
                (t =
                  "noop" === e
                    ? new Ys()
                    : ("zone.js" === e ? void 0 : e) ||
                      new qs({ enableLongStackTrace: Ze() })),
                t
              );
            })(t ? t.ngZone : void 0),
            r = [{ provide: qs, useValue: n }];
          return n.run(() => {
            const t = kt.create({
                providers: r,
                parent: this.injector,
                name: e.moduleType.name,
              }),
              s = e.create(t),
              i = s.injector.get(Qe, null);
            if (!i)
              throw new Error(
                "No ErrorHandler. Is platform module (BrowserModule) included?"
              );
            return (
              s.onDestroy(() => ui(this._modules, s)),
              n.runOutsideAngular(() =>
                n.onError.subscribe({
                  next: (e) => {
                    i.handleError(e);
                  },
                })
              ),
              (function (e, t, n) {
                try {
                  const r = n();
                  return Vt(r)
                    ? r.catch((n) => {
                        throw (t.runOutsideAngular(() => e.handleError(n)), n);
                      })
                    : r;
                } catch (r) {
                  throw (t.runOutsideAngular(() => e.handleError(r)), r);
                }
              })(i, n, () => {
                const e = s.injector.get(Es);
                return (
                  e.runInitializers(),
                  e.donePromise.then(() => (this._moduleDoBootstrap(s), s))
                );
              })
            );
          });
        }
        bootstrapModule(e, t = []) {
          const n = li({}, t);
          return (function (e, t, n) {
            return e.get(Ms).createCompiler([t]).compileModuleAsync(n);
          })(this.injector, n, e).then((e) =>
            this.bootstrapModuleFactory(e, n)
          );
        }
        _moduleDoBootstrap(e) {
          const t = e.injector.get(ci);
          if (e._bootstrapComponents.length > 0)
            e._bootstrapComponents.forEach((e) => t.bootstrap(e));
          else {
            if (!e.instance.ngDoBootstrap)
              throw new Error(
                `The module ${_e(
                  e.instance.constructor
                )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
              );
            e.instance.ngDoBootstrap(t);
          }
          this._modules.push(e);
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
        get injector() {
          return this._injector;
        }
        destroy() {
          if (this._destroyed)
            throw new Error("The platform has already been destroyed!");
          this._modules.slice().forEach((e) => e.destroy()),
            this._destroyListeners.forEach((e) => e()),
            (this._destroyed = !0);
        }
        get destroyed() {
          return this._destroyed;
        }
      }
      function li(e, t) {
        return Array.isArray(t) ? t.reduce(li, e) : Object.assign({}, e, t);
      }
      let ci = (() => {
        class e {
          constructor(e, t, n, r, s, i) {
            (this._zone = e),
              (this._console = t),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = s),
              (this._initStatus = i),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = Ze()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              });
            const o = new w((e) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    e.next(this._stable), e.complete();
                  });
              }),
              a = new w((e) => {
                let t;
                this._zone.runOutsideAngular(() => {
                  t = this._zone.onStable.subscribe(() => {
                    qs.assertNotInAngularZone(),
                      Bs(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), e.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  qs.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        e.next(!1);
                      }));
                });
                return () => {
                  t.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = X(
              o,
              a.pipe((e) => J()(ie(ae)(e)))
            );
          }
          bootstrap(e, t) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let n;
            (n =
              e instanceof Qt
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            const r = n instanceof Xt ? null : this._injector.get(Le),
              s = n.create(kt.NULL, [], t || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const i = s.injector.get(Xs, null);
            return (
              i &&
                s.injector
                  .get(Js)
                  .registerApplication(s.location.nativeElement, i),
              this._loadComponent(s),
              Ze() &&
                this._console.log(
                  "Angular is running in the development mode. Call enableProdMode() to enable the production mode."
                ),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            const t = e._tickScope();
            try {
              this._runningTick = !0;
              for (let e of this._views) e.detectChanges();
              if (this._enforceNoNewChanges)
                for (let e of this._views) e.checkNoChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              (this._runningTick = !1), $s(t);
            }
          }
          attachView(e) {
            const t = e;
            this._views.push(t), t.attachToAppRef(this);
          }
          detachView(e) {
            const t = e;
            ui(this._views, t), t.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(xs, [])
                .concat(this._bootstrapListeners)
                .forEach((t) => t(e));
          }
          _unloadComponent(e) {
            this.detachView(e.hostView), ui(this.components, e);
          }
          ngOnDestroy() {
            this._views.slice().forEach((e) => e.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (e._tickScope = Hs("ApplicationRef#tick()")), e;
      })();
      function ui(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class hi {}
      class di {}
      const pi = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
      class fi {
        constructor(e, t) {
          (this._compiler = e), (this._config = t || pi);
        }
        load(e) {
          return this._compiler instanceof Ds
            ? this.loadFactory(e)
            : this.loadAndCompile(e);
        }
        loadAndCompile(e) {
          let [t, r] = e.split("#");
          return (
            void 0 === r && (r = "default"),
            n("zn8P")(t)
              .then((e) => e[r])
              .then((e) => mi(e, t, r))
              .then((e) => this._compiler.compileModuleAsync(e))
          );
        }
        loadFactory(e) {
          let [t, r] = e.split("#"),
            s = "NgFactory";
          return (
            void 0 === r && ((r = "default"), (s = "")),
            n("zn8P")(
              this._config.factoryPathPrefix +
                t +
                this._config.factoryPathSuffix
            )
              .then((e) => e[r + s])
              .then((e) => mi(e, t, r))
          );
        }
      }
      function mi(e, t, n) {
        if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
        return e;
      }
      class gi {
        constructor(e, t) {
          (this.name = e), (this.callback = t);
        }
      }
      class yi {
        constructor(e, t, n) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = n),
            (this.nativeNode = e),
            t && t instanceof _i && t.addChild(this);
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class _i extends yi {
        constructor(e, t, n) {
          super(e, t, n),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = e);
        }
        addChild(e) {
          e && (this.childNodes.push(e), (e.parent = this));
        }
        removeChild(e) {
          const t = this.childNodes.indexOf(e);
          -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
        }
        insertChildrenAfter(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 !== n &&
            (this.childNodes.splice(n + 1, 0, ...t),
            t.forEach((t) => {
              t.parent && t.parent.removeChild(t), (e.parent = this);
            }));
        }
        insertBefore(e, t) {
          const n = this.childNodes.indexOf(e);
          -1 === n
            ? this.addChild(t)
            : (t.parent && t.parent.removeChild(t),
              (t.parent = this),
              this.childNodes.splice(n, 0, t));
        }
        query(e) {
          return this.queryAll(e)[0] || null;
        }
        queryAll(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t.childNodes.forEach((t) => {
                t instanceof _i && (n(t) && r.push(t), e(t, n, r));
              });
            })(this, e, t),
            t
          );
        }
        queryAllNodes(e) {
          const t = [];
          return (
            (function e(t, n, r) {
              t instanceof _i &&
                t.childNodes.forEach((t) => {
                  n(t) && r.push(t), t instanceof _i && e(t, n, r);
                });
            })(this, e, t),
            t
          );
        }
        get children() {
          return this.childNodes.filter((e) => e instanceof _i);
        }
        triggerEventHandler(e, t) {
          this.listeners.forEach((n) => {
            n.name == e && n.callback(t);
          });
        }
      }
      const vi = new Map(),
        bi = function (e) {
          return vi.get(e) || null;
        };
      function wi(e) {
        vi.set(e.nativeNode, e);
      }
      const Ei = ii(null, "core", [
        { provide: Ts, useValue: "unknown" },
        { provide: ai, deps: [kt] },
        { provide: Js, deps: [] },
        { provide: ks, deps: [] },
      ]);
      function Si() {
        return Sn;
      }
      function Ci() {
        return Cn;
      }
      function Ti(e) {
        return e || "en-US";
      }
      function xi(e) {
        let t = [];
        return (
          e.onStable.subscribe(() => {
            for (; t.length; ) t.pop()();
          }),
          function (e) {
            t.push(e);
          }
        );
      }
      class ki {
        constructor(e) {}
      }
      function Ii(e, t, n, r, s, i) {
        e |= 1;
        const { matchedQueries: o, references: a, matchedQueryIds: l } = rr(t);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: e,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: o,
          matchedQueryIds: l,
          references: a,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: i ? ar(i) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: s || zn,
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        };
      }
      function Ai(e, t, n, r, s, i, o = [], a, l, c, u, h) {
        c || (c = zn);
        const { matchedQueries: d, references: p, matchedQueryIds: f } = rr(n);
        let m = null,
          g = null;
        i && ([m, g] = fr(i)), (a = a || []);
        const y = new Array(a.length);
        for (let b = 0; b < a.length; b++) {
          const [e, t, n] = a[b],
            [r, s] = fr(t);
          let i = void 0,
            o = void 0;
          switch (15 & e) {
            case 4:
              o = n;
              break;
            case 1:
            case 8:
              i = n;
          }
          y[b] = {
            flags: e,
            ns: r,
            name: s,
            nonMinifiedName: s,
            securityContext: i,
            suffix: o,
          };
        }
        l = l || [];
        const _ = new Array(l.length);
        for (let b = 0; b < l.length; b++) {
          const [e, t] = l[b];
          _[b] = { type: 0, target: e, eventName: t, propName: null };
        }
        const v = (o = o || []).map(([e, t]) => {
          const [n, r] = fr(e);
          return [n, r, t];
        });
        return (
          (h = (function (e) {
            if (e && "$$undefined" === e.id) {
              const t =
                (null != e.encapsulation && e.encapsulation !== He.None) ||
                e.styles.length ||
                Object.keys(e.data).length;
              e.id = t ? "c" + Bn++ : "$$empty";
            }
            return e && "$$empty" === e.id && (e = null), e || null;
          })(h)),
          u && (t |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: (t |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: d,
            matchedQueryIds: f,
            references: p,
            ngContentIndex: r,
            childCount: s,
            bindings: y,
            bindingFlags: mr(y),
            outputs: _,
            element: {
              ns: m,
              name: g,
              attrs: v,
              template: null,
              componentProvider: null,
              componentView: u || null,
              componentRendererType: h,
              publicProviders: null,
              allProviders: null,
              handleEvent: c || zn,
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null,
          }
        );
      }
      function Ni(e, t, n) {
        const r = n.element,
          s = e.root.selectorOrNode,
          i = e.renderer;
        let o;
        if (e.parent || !s) {
          o = r.name ? i.createElement(r.name, r.ns) : i.createComment("");
          const s = ir(e, t, n);
          s && i.appendChild(s, o);
        } else
          o = i.selectRootElement(
            s,
            !!r.componentRendererType &&
              r.componentRendererType.encapsulation === He.ShadowDom
          );
        if (r.attrs)
          for (let a = 0; a < r.attrs.length; a++) {
            const [e, t, n] = r.attrs[a];
            i.setAttribute(o, t, n, e);
          }
        return o;
      }
      function Ri(e, t, n, r) {
        for (let o = 0; o < n.outputs.length; o++) {
          const a = n.outputs[o],
            l = Pi(
              e,
              n.nodeIndex,
              ((i = a.eventName), (s = a.target) ? `${s}:${i}` : i)
            );
          let c = a.target,
            u = e;
          "component" === a.target && ((c = null), (u = t));
          const h = u.renderer.listen(c || r, a.eventName, l);
          e.disposables[n.outputIndex + o] = h;
        }
        var s, i;
      }
      function Pi(e, t, n) {
        return (r) => Gn(e, t, n, r);
      }
      function Oi(e, t, n, r) {
        if (!Qn(e, t, n, r)) return !1;
        const s = t.bindings[n],
          i = Mn(e, t.nodeIndex),
          o = i.renderElement,
          a = s.name;
        switch (15 & s.flags) {
          case 1:
            !(function (e, t, n, r, s, i) {
              const o = t.securityContext;
              let a = o ? e.root.sanitizer.sanitize(o, i) : i;
              a = null != a ? a.toString() : null;
              const l = e.renderer;
              null != i
                ? l.setAttribute(n, s, a, r)
                : l.removeAttribute(n, s, r);
            })(e, s, o, s.ns, a, r);
            break;
          case 2:
            !(function (e, t, n, r) {
              const s = e.renderer;
              r ? s.addClass(t, n) : s.removeClass(t, n);
            })(e, o, a, r);
            break;
          case 4:
            !(function (e, t, n, r, s) {
              let i = e.root.sanitizer.sanitize(yt.STYLE, s);
              if (null != i) {
                i = i.toString();
                const e = t.suffix;
                null != e && (i += e);
              } else i = null;
              const o = e.renderer;
              null != i ? o.setStyle(n, r, i) : o.removeStyle(n, r);
            })(e, s, o, a, r);
            break;
          case 8:
            !(function (e, t, n, r, s) {
              const i = t.securityContext;
              let o = i ? e.root.sanitizer.sanitize(i, s) : s;
              e.renderer.setProperty(n, r, o);
            })(
              33554432 & t.flags && 32 & s.flags ? i.componentView : e,
              s,
              o,
              a,
              r
            );
        }
        return !0;
      }
      function Di(e, t, n) {
        let r = [];
        for (let s in n) r.push({ propName: s, bindingType: n[s] });
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          ngContentIndex: -1,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: { id: t, filterId: nr(t), bindings: r },
          ngContent: null,
        };
      }
      function Mi(e) {
        const t = e.def.nodeMatchedQueries;
        for (; e.parent && tr(e); ) {
          let n = e.parentNodeDef;
          e = e.parent;
          const r = n.nodeIndex + n.childCount;
          for (let s = 0; s <= r; s++) {
            const r = e.def.nodes[s];
            67108864 & r.flags &&
              536870912 & r.flags &&
              (r.query.filterId & t) === r.query.filterId &&
              Un(e, s).setDirty(),
              (!(1 & r.flags && s + r.childCount < n.nodeIndex) &&
                67108864 & r.childFlags &&
                536870912 & r.childFlags) ||
                (s += r.childCount);
          }
        }
        if (134217728 & e.def.nodeFlags)
          for (let n = 0; n < e.def.nodes.length; n++) {
            const t = e.def.nodes[n];
            134217728 & t.flags && 536870912 & t.flags && Un(e, n).setDirty(),
              (n += t.childCount);
          }
      }
      function Fi(e, t) {
        const n = Un(e, t.nodeIndex);
        if (!n.dirty) return;
        let r,
          s = void 0;
        if (67108864 & t.flags) {
          const n = t.parent.parent;
          (s = Li(e, n.nodeIndex, n.nodeIndex + n.childCount, t.query, [])),
            (r = Fn(e, t.parent.nodeIndex).instance);
        } else
          134217728 & t.flags &&
            ((s = Li(e, 0, e.def.nodes.length - 1, t.query, [])),
            (r = e.component));
        n.reset(s);
        const i = t.query.bindings;
        let o = !1;
        for (let a = 0; a < i.length; a++) {
          const e = i[a];
          let t;
          switch (e.bindingType) {
            case 0:
              t = n.first;
              break;
            case 1:
              (t = n), (o = !0);
          }
          r[e.propName] = t;
        }
        o && n.notifyOnChanges();
      }
      function Li(e, t, n, r, s) {
        for (let i = t; i <= n; i++) {
          const t = e.def.nodes[i],
            n = t.matchedQueries[r.id];
          if (
            (null != n && s.push(Ui(e, t, n)),
            1 & t.flags &&
              t.element.template &&
              (t.element.template.nodeMatchedQueries & r.filterId) ===
                r.filterId)
          ) {
            const n = Mn(e, i);
            if (
              ((t.childMatchedQueries & r.filterId) === r.filterId &&
                (Li(e, i + 1, i + t.childCount, r, s), (i += t.childCount)),
              16777216 & t.flags)
            ) {
              const e = n.viewContainer._embeddedViews;
              for (let t = 0; t < e.length; t++) {
                const i = e[t],
                  o = Yn(i);
                o && o === n && Li(i, 0, i.def.nodes.length - 1, r, s);
              }
            }
            const o = n.template._projectedViews;
            if (o)
              for (let e = 0; e < o.length; e++) {
                const t = o[e];
                Li(t, 0, t.def.nodes.length - 1, r, s);
              }
          }
          (t.childMatchedQueries & r.filterId) !== r.filterId &&
            (i += t.childCount);
        }
        return s;
      }
      function Ui(e, t, n) {
        if (null != n)
          switch (n) {
            case 1:
              return Mn(e, t.nodeIndex).renderElement;
            case 0:
              return new en(Mn(e, t.nodeIndex).renderElement);
            case 2:
              return Mn(e, t.nodeIndex).template;
            case 3:
              return Mn(e, t.nodeIndex).viewContainer;
            case 4:
              return Fn(e, t.nodeIndex).instance;
          }
      }
      function ji(e, t) {
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: 8,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: { index: t },
        };
      }
      function zi(e, t, n) {
        const r = ir(e, t, n);
        r && ur(e, n.ngContent.index, 1, r, null, void 0);
      }
      function Hi(e, t) {
        return (function (e, t, n) {
          const r = new Array(n.length);
          for (let s = 0; s < n.length; s++) {
            const e = n[s];
            r[s] = {
              flags: 8,
              name: e,
              ns: null,
              nonMinifiedName: e,
              securityContext: null,
              suffix: null,
            };
          }
          return {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: t,
            flags: 32,
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: {},
            matchedQueryIds: 0,
            references: {},
            ngContentIndex: -1,
            childCount: 0,
            bindings: r,
            bindingFlags: mr(r),
            outputs: [],
            element: null,
            provider: null,
            text: null,
            query: null,
            ngContent: null,
          };
        })(0, e, new Array(t));
      }
      function $i(e, t, n) {
        const r = new Array(n.length - 1);
        for (let s = 1; s < n.length; s++)
          r[s - 1] = {
            flags: 8,
            name: null,
            ns: null,
            nonMinifiedName: null,
            securityContext: null,
            suffix: n[s],
          };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null,
        };
      }
      function Vi(e, t, n) {
        let r;
        const s = e.renderer;
        r = s.createText(n.text.prefix);
        const i = ir(e, t, n);
        return i && s.appendChild(i, r), { renderText: r };
      }
      function Bi(e, t) {
        return (null != e ? e.toString() : "") + t.suffix;
      }
      function qi(e, t, n, r) {
        let s = 0,
          i = 0,
          o = 0,
          a = 0,
          l = 0,
          c = null,
          u = null,
          h = !1,
          d = !1,
          p = null;
        for (let f = 0; f < t.length; f++) {
          const e = t[f];
          if (
            ((e.nodeIndex = f),
            (e.parent = c),
            (e.bindingIndex = s),
            (e.outputIndex = i),
            (e.renderParent = u),
            (o |= e.flags),
            (l |= e.matchedQueryIds),
            e.element)
          ) {
            const t = e.element;
            (t.publicProviders = c
              ? c.element.publicProviders
              : Object.create(null)),
              (t.allProviders = t.publicProviders),
              (h = !1),
              (d = !1),
              e.element.template &&
                (l |= e.element.template.nodeMatchedQueries);
          }
          if (
            (Wi(c, e, t.length),
            (s += e.bindings.length),
            (i += e.outputs.length),
            !u && 3 & e.flags && (p = e),
            20224 & e.flags)
          ) {
            h ||
              ((h = !0),
              (c.element.publicProviders = Object.create(
                c.element.publicProviders
              )),
              (c.element.allProviders = c.element.publicProviders));
            const t = 0 != (32768 & e.flags);
            0 == (8192 & e.flags) || t
              ? (c.element.publicProviders[$n(e.provider.token)] = e)
              : (d ||
                  ((d = !0),
                  (c.element.allProviders = Object.create(
                    c.element.publicProviders
                  ))),
                (c.element.allProviders[$n(e.provider.token)] = e)),
              t && (c.element.componentProvider = e);
          }
          if (
            (c
              ? ((c.childFlags |= e.flags),
                (c.directChildFlags |= e.flags),
                (c.childMatchedQueries |= e.matchedQueryIds),
                e.element &&
                  e.element.template &&
                  (c.childMatchedQueries |=
                    e.element.template.nodeMatchedQueries))
              : (a |= e.flags),
            e.childCount > 0)
          )
            (c = e), Qi(e) || (u = e);
          else
            for (; c && f === c.nodeIndex + c.childCount; ) {
              const e = c.parent;
              e &&
                ((e.childFlags |= c.childFlags),
                (e.childMatchedQueries |= c.childMatchedQueries)),
                (c = e),
                (u = c && Qi(c) ? c.renderParent : c);
            }
        }
        return {
          factory: null,
          nodeFlags: o,
          rootNodeFlags: a,
          nodeMatchedQueries: l,
          flags: e,
          nodes: t,
          updateDirectives: n || zn,
          updateRenderer: r || zn,
          handleEvent: (e, n, r, s) => t[n].element.handleEvent(e, r, s),
          bindingCount: s,
          outputCount: i,
          lastRenderRootNode: p,
        };
      }
      function Qi(e) {
        return 0 != (1 & e.flags) && null === e.element.name;
      }
      function Wi(e, t, n) {
        const r = t.element && t.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error(
              "Illegal State: Embedded templates without nodes are not allowed!"
            );
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`
            );
        }
        if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`
          );
        if (t.query) {
          if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`
            );
          if (134217728 & t.flags && e)
            throw new Error(
              `Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`
            );
        }
        if (t.childCount) {
          const r = e ? e.nodeIndex + e.childCount : n - 1;
          if (t.nodeIndex <= r && t.nodeIndex + t.childCount > r)
            throw new Error(
              `Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`
            );
        }
      }
      function Ki(e, t, n, r) {
        const s = Yi(e.root, e.renderer, e, t, n);
        return Xi(s, e.component, r), Ji(s), s;
      }
      function Zi(e, t, n) {
        const r = Yi(e, e.renderer, null, null, t);
        return Xi(r, n, n), Ji(r), r;
      }
      function Gi(e, t, n, r) {
        const s = t.element.componentRendererType;
        let i;
        return (
          (i = s
            ? e.root.rendererFactory.createRenderer(r, s)
            : e.root.renderer),
          Yi(e.root, i, e, t.element.componentProvider, n)
        );
      }
      function Yi(e, t, n, r, s) {
        const i = new Array(s.nodes.length),
          o = s.outputCount ? new Array(s.outputCount) : null;
        return {
          def: s,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: i,
          state: 13,
          root: e,
          renderer: t,
          oldValues: new Array(s.bindingCount),
          disposables: o,
          initIndex: -1,
        };
      }
      function Xi(e, t, n) {
        (e.component = t), (e.context = n);
      }
      function Ji(e) {
        let t;
        er(e) &&
          (t = Mn(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
        const n = e.def,
          r = e.nodes;
        for (let s = 0; s < n.nodes.length; s++) {
          const i = n.nodes[s];
          let o;
          switch ((jn.setCurrentNode(e, s), 201347067 & i.flags)) {
            case 1:
              const n = Ni(e, t, i);
              let a = void 0;
              if (33554432 & i.flags) {
                const t = ar(i.element.componentView);
                a = jn.createComponentView(e, i, t, n);
              }
              Ri(e, a, i, n),
                (o = {
                  renderElement: n,
                  componentView: a,
                  viewContainer: null,
                  template: i.element.template ? Fr(e, i) : void 0,
                }),
                16777216 & i.flags && (o.viewContainer = Pr(e, i, o));
              break;
            case 2:
              o = Vi(e, t, i);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (o = r[s]), o || 4096 & i.flags || (o = { instance: es(e, i) });
              break;
            case 16:
              o = { instance: ts(e, i) };
              break;
            case 16384:
              (o = r[s]),
                o || (o = { instance: ns(e, i) }),
                32768 & i.flags &&
                  Xi(
                    Mn(e, i.parent.nodeIndex).componentView,
                    o.instance,
                    o.instance
                  );
              break;
            case 32:
            case 64:
            case 128:
              o = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              o = new bs();
              break;
            case 8:
              zi(e, t, i), (o = void 0);
          }
          r[s] = o;
        }
        lo(e, ao.CreateViewNodes), po(e, 201326592, 268435456, 0);
      }
      function eo(e) {
        ro(e),
          jn.updateDirectives(e, 1),
          co(e, ao.CheckNoChanges),
          jn.updateRenderer(e, 1),
          lo(e, ao.CheckNoChanges),
          (e.state &= -97);
      }
      function to(e) {
        1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
          Pn(e, 0, 256),
          ro(e),
          jn.updateDirectives(e, 0),
          co(e, ao.CheckAndUpdate),
          po(e, 67108864, 536870912, 0);
        let t = Pn(e, 256, 512);
        us(e, 2097152 | (t ? 1048576 : 0)),
          jn.updateRenderer(e, 0),
          lo(e, ao.CheckAndUpdate),
          po(e, 134217728, 536870912, 0),
          (t = Pn(e, 512, 768)),
          us(e, 8388608 | (t ? 4194304 : 0)),
          2 & e.def.flags && (e.state &= -9),
          (e.state &= -97),
          Pn(e, 768, 1024);
      }
      function no(e, t, n, r, s, i, o, a, l, c, u, h, d) {
        return 0 === n
          ? (function (e, t, n, r, s, i, o, a, l, c, u, h) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function (e, t, n, r, s, i, o, a, l, c, u, h) {
                    const d = t.bindings.length;
                    let p = !1;
                    return (
                      d > 0 && Oi(e, t, 0, n) && (p = !0),
                      d > 1 && Oi(e, t, 1, r) && (p = !0),
                      d > 2 && Oi(e, t, 2, s) && (p = !0),
                      d > 3 && Oi(e, t, 3, i) && (p = !0),
                      d > 4 && Oi(e, t, 4, o) && (p = !0),
                      d > 5 && Oi(e, t, 5, a) && (p = !0),
                      d > 6 && Oi(e, t, 6, l) && (p = !0),
                      d > 7 && Oi(e, t, 7, c) && (p = !0),
                      d > 8 && Oi(e, t, 8, u) && (p = !0),
                      d > 9 && Oi(e, t, 9, h) && (p = !0),
                      p
                    );
                  })(e, t, n, r, s, i, o, a, l, c, u, h);
                case 2:
                  return (function (e, t, n, r, s, i, o, a, l, c, u, h) {
                    let d = !1;
                    const p = t.bindings,
                      f = p.length;
                    if (
                      (f > 0 && Qn(e, t, 0, n) && (d = !0),
                      f > 1 && Qn(e, t, 1, r) && (d = !0),
                      f > 2 && Qn(e, t, 2, s) && (d = !0),
                      f > 3 && Qn(e, t, 3, i) && (d = !0),
                      f > 4 && Qn(e, t, 4, o) && (d = !0),
                      f > 5 && Qn(e, t, 5, a) && (d = !0),
                      f > 6 && Qn(e, t, 6, l) && (d = !0),
                      f > 7 && Qn(e, t, 7, c) && (d = !0),
                      f > 8 && Qn(e, t, 8, u) && (d = !0),
                      f > 9 && Qn(e, t, 9, h) && (d = !0),
                      d)
                    ) {
                      let d = t.text.prefix;
                      f > 0 && (d += Bi(n, p[0])),
                        f > 1 && (d += Bi(r, p[1])),
                        f > 2 && (d += Bi(s, p[2])),
                        f > 3 && (d += Bi(i, p[3])),
                        f > 4 && (d += Bi(o, p[4])),
                        f > 5 && (d += Bi(a, p[5])),
                        f > 6 && (d += Bi(l, p[6])),
                        f > 7 && (d += Bi(c, p[7])),
                        f > 8 && (d += Bi(u, p[8])),
                        f > 9 && (d += Bi(h, p[9]));
                      const m = Dn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(m, d);
                    }
                    return d;
                  })(e, t, n, r, s, i, o, a, l, c, u, h);
                case 16384:
                  return (function (e, t, n, r, s, i, o, a, l, c, u, h) {
                    const d = Fn(e, t.nodeIndex),
                      p = d.instance;
                    let f = !1,
                      m = void 0;
                    const g = t.bindings.length;
                    return (
                      g > 0 &&
                        qn(e, t, 0, n) &&
                        ((f = !0), (m = cs(e, d, t, 0, n, m))),
                      g > 1 &&
                        qn(e, t, 1, r) &&
                        ((f = !0), (m = cs(e, d, t, 1, r, m))),
                      g > 2 &&
                        qn(e, t, 2, s) &&
                        ((f = !0), (m = cs(e, d, t, 2, s, m))),
                      g > 3 &&
                        qn(e, t, 3, i) &&
                        ((f = !0), (m = cs(e, d, t, 3, i, m))),
                      g > 4 &&
                        qn(e, t, 4, o) &&
                        ((f = !0), (m = cs(e, d, t, 4, o, m))),
                      g > 5 &&
                        qn(e, t, 5, a) &&
                        ((f = !0), (m = cs(e, d, t, 5, a, m))),
                      g > 6 &&
                        qn(e, t, 6, l) &&
                        ((f = !0), (m = cs(e, d, t, 6, l, m))),
                      g > 7 &&
                        qn(e, t, 7, c) &&
                        ((f = !0), (m = cs(e, d, t, 7, c, m))),
                      g > 8 &&
                        qn(e, t, 8, u) &&
                        ((f = !0), (m = cs(e, d, t, 8, u, m))),
                      g > 9 &&
                        qn(e, t, 9, h) &&
                        ((f = !0), (m = cs(e, d, t, 9, h, m))),
                      m && p.ngOnChanges(m),
                      65536 & t.flags &&
                        On(e, 256, t.nodeIndex) &&
                        p.ngOnInit(),
                      262144 & t.flags && p.ngDoCheck(),
                      f
                    );
                  })(e, t, n, r, s, i, o, a, l, c, u, h);
                case 32:
                case 64:
                case 128:
                  return (function (e, t, n, r, s, i, o, a, l, c, u, h) {
                    const d = t.bindings;
                    let p = !1;
                    const f = d.length;
                    if (
                      (f > 0 && Qn(e, t, 0, n) && (p = !0),
                      f > 1 && Qn(e, t, 1, r) && (p = !0),
                      f > 2 && Qn(e, t, 2, s) && (p = !0),
                      f > 3 && Qn(e, t, 3, i) && (p = !0),
                      f > 4 && Qn(e, t, 4, o) && (p = !0),
                      f > 5 && Qn(e, t, 5, a) && (p = !0),
                      f > 6 && Qn(e, t, 6, l) && (p = !0),
                      f > 7 && Qn(e, t, 7, c) && (p = !0),
                      f > 8 && Qn(e, t, 8, u) && (p = !0),
                      f > 9 && Qn(e, t, 9, h) && (p = !0),
                      p)
                    ) {
                      const p = Ln(e, t.nodeIndex);
                      let m;
                      switch (201347067 & t.flags) {
                        case 32:
                          (m = new Array(d.length)),
                            f > 0 && (m[0] = n),
                            f > 1 && (m[1] = r),
                            f > 2 && (m[2] = s),
                            f > 3 && (m[3] = i),
                            f > 4 && (m[4] = o),
                            f > 5 && (m[5] = a),
                            f > 6 && (m[6] = l),
                            f > 7 && (m[7] = c),
                            f > 8 && (m[8] = u),
                            f > 9 && (m[9] = h);
                          break;
                        case 64:
                          (m = {}),
                            f > 0 && (m[d[0].name] = n),
                            f > 1 && (m[d[1].name] = r),
                            f > 2 && (m[d[2].name] = s),
                            f > 3 && (m[d[3].name] = i),
                            f > 4 && (m[d[4].name] = o),
                            f > 5 && (m[d[5].name] = a),
                            f > 6 && (m[d[6].name] = l),
                            f > 7 && (m[d[7].name] = c),
                            f > 8 && (m[d[8].name] = u),
                            f > 9 && (m[d[9].name] = h);
                          break;
                        case 128:
                          const e = n;
                          switch (f) {
                            case 1:
                              m = e.transform(n);
                              break;
                            case 2:
                              m = e.transform(r);
                              break;
                            case 3:
                              m = e.transform(r, s);
                              break;
                            case 4:
                              m = e.transform(r, s, i);
                              break;
                            case 5:
                              m = e.transform(r, s, i, o);
                              break;
                            case 6:
                              m = e.transform(r, s, i, o, a);
                              break;
                            case 7:
                              m = e.transform(r, s, i, o, a, l);
                              break;
                            case 8:
                              m = e.transform(r, s, i, o, a, l, c);
                              break;
                            case 9:
                              m = e.transform(r, s, i, o, a, l, c, u);
                              break;
                            case 10:
                              m = e.transform(r, s, i, o, a, l, c, u, h);
                          }
                      }
                      p.value = m;
                    }
                    return p;
                  })(e, t, n, r, s, i, o, a, l, c, u, h);
                default:
                  throw "unreachable";
              }
            })(e, t, r, s, i, o, a, l, c, u, h, d)
          : (function (e, t, n) {
              switch (201347067 & t.flags) {
                case 1:
                  return (function (e, t, n) {
                    let r = !1;
                    for (let s = 0; s < n.length; s++)
                      Oi(e, t, s, n[s]) && (r = !0);
                    return r;
                  })(e, t, n);
                case 2:
                  return (function (e, t, n) {
                    const r = t.bindings;
                    let s = !1;
                    for (let i = 0; i < n.length; i++)
                      Qn(e, t, i, n[i]) && (s = !0);
                    if (s) {
                      let s = "";
                      for (let e = 0; e < n.length; e++) s += Bi(n[e], r[e]);
                      s = t.text.prefix + s;
                      const i = Dn(e, t.nodeIndex).renderText;
                      e.renderer.setValue(i, s);
                    }
                    return s;
                  })(e, t, n);
                case 16384:
                  return (function (e, t, n) {
                    const r = Fn(e, t.nodeIndex),
                      s = r.instance;
                    let i = !1,
                      o = void 0;
                    for (let a = 0; a < n.length; a++)
                      qn(e, t, a, n[a]) &&
                        ((i = !0), (o = cs(e, r, t, a, n[a], o)));
                    return (
                      o && s.ngOnChanges(o),
                      65536 & t.flags &&
                        On(e, 256, t.nodeIndex) &&
                        s.ngOnInit(),
                      262144 & t.flags && s.ngDoCheck(),
                      i
                    );
                  })(e, t, n);
                case 32:
                case 64:
                case 128:
                  return (function (e, t, n) {
                    const r = t.bindings;
                    let s = !1;
                    for (let i = 0; i < n.length; i++)
                      Qn(e, t, i, n[i]) && (s = !0);
                    if (s) {
                      const s = Ln(e, t.nodeIndex);
                      let i;
                      switch (201347067 & t.flags) {
                        case 32:
                          i = n;
                          break;
                        case 64:
                          i = {};
                          for (let s = 0; s < n.length; s++)
                            i[r[s].name] = n[s];
                          break;
                        case 128:
                          const e = n[0],
                            t = n.slice(1);
                          i = e.transform(...t);
                      }
                      s.value = i;
                    }
                    return s;
                  })(e, t, n);
                default:
                  throw "unreachable";
              }
            })(e, t, r);
      }
      function ro(e) {
        const t = e.def;
        if (4 & t.nodeFlags)
          for (let n = 0; n < t.nodes.length; n++) {
            const r = t.nodes[n];
            if (4 & r.flags) {
              const t = Mn(e, n).template._projectedViews;
              if (t)
                for (let n = 0; n < t.length; n++) {
                  const r = t[n];
                  (r.state |= 32), Zn(r, e);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function so(e, t, n, r, s, i, o, a, l, c, u, h, d) {
        return (
          0 === n
            ? (function (e, t, n, r, s, i, o, a, l, c, u, h) {
                const d = t.bindings.length;
                d > 0 && Wn(e, t, 0, n),
                  d > 1 && Wn(e, t, 1, r),
                  d > 2 && Wn(e, t, 2, s),
                  d > 3 && Wn(e, t, 3, i),
                  d > 4 && Wn(e, t, 4, o),
                  d > 5 && Wn(e, t, 5, a),
                  d > 6 && Wn(e, t, 6, l),
                  d > 7 && Wn(e, t, 7, c),
                  d > 8 && Wn(e, t, 8, u),
                  d > 9 && Wn(e, t, 9, h);
              })(e, t, r, s, i, o, a, l, c, u, h, d)
            : (function (e, t, n) {
                for (let r = 0; r < n.length; r++) Wn(e, t, r, n[r]);
              })(e, t, r),
          !1
        );
      }
      function io(e, t) {
        if (Un(e, t.nodeIndex).dirty)
          throw An(
            jn.createDebugContext(e, t.nodeIndex),
            `Query ${t.query.id} not dirty`,
            `Query ${t.query.id} dirty`,
            0 != (1 & e.state)
          );
      }
      function oo(e) {
        if (!(128 & e.state)) {
          if (
            (co(e, ao.Destroy), lo(e, ao.Destroy), us(e, 131072), e.disposables)
          )
            for (let t = 0; t < e.disposables.length; t++) e.disposables[t]();
          !(function (e) {
            if (!(16 & e.state)) return;
            const t = Yn(e);
            if (t) {
              const n = t.template._projectedViews;
              n && (ze(n, n.indexOf(e)), jn.dirtyParentQueries(e));
            }
          })(e),
            e.renderer.destroyNode &&
              (function (e) {
                const t = e.def.nodes.length;
                for (let n = 0; n < t; n++) {
                  const t = e.def.nodes[n];
                  1 & t.flags
                    ? e.renderer.destroyNode(Mn(e, n).renderElement)
                    : 2 & t.flags
                    ? e.renderer.destroyNode(Dn(e, n).renderText)
                    : (67108864 & t.flags || 134217728 & t.flags) &&
                      Un(e, n).destroy();
                }
              })(e),
            er(e) && e.renderer.destroy(),
            (e.state |= 128);
        }
      }
      const ao = (function () {
        var e = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5,
        };
        return (
          (e[e.CreateViewNodes] = "CreateViewNodes"),
          (e[e.CheckNoChanges] = "CheckNoChanges"),
          (e[e.CheckNoChangesProjectedViews] = "CheckNoChangesProjectedViews"),
          (e[e.CheckAndUpdate] = "CheckAndUpdate"),
          (e[e.CheckAndUpdateProjectedViews] = "CheckAndUpdateProjectedViews"),
          (e[e.Destroy] = "Destroy"),
          e
        );
      })();
      function lo(e, t) {
        const n = e.def;
        if (33554432 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            33554432 & s.flags
              ? uo(Mn(e, r).componentView, t)
              : 0 == (33554432 & s.childFlags) && (r += s.childCount);
          }
      }
      function co(e, t) {
        const n = e.def;
        if (16777216 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const s = n.nodes[r];
            if (16777216 & s.flags) {
              const n = Mn(e, r).viewContainer._embeddedViews;
              for (let e = 0; e < n.length; e++) uo(n[e], t);
            } else 0 == (16777216 & s.childFlags) && (r += s.childCount);
          }
      }
      function uo(e, t) {
        const n = e.state;
        switch (t) {
          case ao.CheckNoChanges:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? eo(e)
                : 64 & n && ho(e, ao.CheckNoChangesProjectedViews));
            break;
          case ao.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? eo(e) : 64 & n && ho(e, t));
            break;
          case ao.CheckAndUpdate:
            0 == (128 & n) &&
              (12 == (12 & n)
                ? to(e)
                : 64 & n && ho(e, ao.CheckAndUpdateProjectedViews));
            break;
          case ao.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? to(e) : 64 & n && ho(e, t));
            break;
          case ao.Destroy:
            oo(e);
            break;
          case ao.CreateViewNodes:
            Ji(e);
        }
      }
      function ho(e, t) {
        co(e, t), lo(e, t);
      }
      function po(e, t, n, r) {
        if (!(e.def.nodeFlags & t && e.def.nodeFlags & n)) return;
        const s = e.def.nodes.length;
        for (let i = 0; i < s; i++) {
          const s = e.def.nodes[i];
          if (s.flags & t && s.flags & n)
            switch ((jn.setCurrentNode(e, s.nodeIndex), r)) {
              case 0:
                Fi(e, s);
                break;
              case 1:
                io(e, s);
            }
          (s.childFlags & t && s.childFlags & n) || (i += s.childCount);
        }
      }
      let fo = !1;
      function mo(e, t, n, r, s, i) {
        const o = s.injector.get(rn);
        return Zi(yo(e, s, o, t, n), r, i);
      }
      function go(e, t, n, r, s, i) {
        const o = s.injector.get(rn),
          a = yo(e, s, new Zo(o), t, n),
          l = ko(r);
        return Wo(Oo.create, Zi, null, [a, l, i]);
      }
      function yo(e, t, n, r, s) {
        const i = t.injector.get(_t),
          o = t.injector.get(Qe),
          a = n.createRenderer(null, null);
        return {
          ngModule: t,
          injector: e,
          projectableNodes: r,
          selectorOrNode: s,
          sanitizer: i,
          rendererFactory: n,
          renderer: a,
          errorHandler: o,
        };
      }
      function _o(e, t, n, r) {
        const s = ko(n);
        return Wo(Oo.create, Ki, null, [e, t, s, r]);
      }
      function vo(e, t, n, r) {
        return (
          (n = So.get(t.element.componentProvider.provider.token) || ko(n)),
          Wo(Oo.create, Gi, null, [e, t, n, r])
        );
      }
      function bo(e, t, n, r) {
        return Vr(
          e,
          t,
          n,
          (function (e) {
            const { hasOverrides: t, hasDeprecatedOverrides: n } = (function (
              e
            ) {
              let t = !1,
                n = !1;
              return (
                0 === wo.size ||
                  (e.providers.forEach((e) => {
                    const r = wo.get(e.token);
                    3840 & e.flags &&
                      r &&
                      ((t = !0), (n = n || r.deprecatedBehavior));
                  }),
                  e.modules.forEach((e) => {
                    Eo.forEach((r, s) => {
                      ge(s).providedIn === e &&
                        ((t = !0), (n = n || r.deprecatedBehavior));
                    });
                  })),
                { hasOverrides: t, hasDeprecatedOverrides: n }
              );
            })(e);
            return t
              ? ((function (e) {
                  for (let t = 0; t < e.providers.length; t++) {
                    const r = e.providers[t];
                    n && (r.flags |= 4096);
                    const s = wo.get(r.token);
                    s &&
                      ((r.flags = (-3841 & r.flags) | s.flags),
                      (r.deps = sr(s.deps)),
                      (r.value = s.value));
                  }
                  if (Eo.size > 0) {
                    let t = new Set(e.modules);
                    Eo.forEach((r, s) => {
                      if (t.has(ge(s).providedIn)) {
                        let t = {
                          token: s,
                          flags: r.flags | (n ? 4096 : 0),
                          deps: sr(r.deps),
                          value: r.value,
                          index: e.providers.length,
                        };
                        e.providers.push(t), (e.providersByKey[$n(s)] = t);
                      }
                    });
                  }
                })((e = e.factory(() => zn))),
                e)
              : e;
          })(r)
        );
      }
      const wo = new Map(),
        Eo = new Map(),
        So = new Map();
      function Co(e) {
        let t;
        wo.set(e.token, e),
          "function" == typeof e.token &&
            (t = ge(e.token)) &&
            "function" == typeof t.providedIn &&
            Eo.set(e.token, e);
      }
      function To(e, t) {
        const n = ar(t.viewDefFactory),
          r = ar(n.nodes[0].element.componentView);
        So.set(e, r);
      }
      function xo() {
        wo.clear(), Eo.clear(), So.clear();
      }
      function ko(e) {
        if (0 === wo.size) return e;
        const t = (function (e) {
          const t = [];
          let n = null;
          for (let r = 0; r < e.nodes.length; r++) {
            const s = e.nodes[r];
            1 & s.flags && (n = s),
              n &&
                3840 & s.flags &&
                wo.has(s.provider.token) &&
                (t.push(n.nodeIndex), (n = null));
          }
          return t;
        })(e);
        if (0 === t.length) return e;
        e = e.factory(() => zn);
        for (let r = 0; r < t.length; r++) n(e, t[r]);
        return e;
        function n(e, t) {
          for (let n = t + 1; n < e.nodes.length; n++) {
            const t = e.nodes[n];
            if (1 & t.flags) return;
            if (3840 & t.flags) {
              const e = t.provider,
                n = wo.get(e.token);
              n &&
                ((t.flags = (-3841 & t.flags) | n.flags),
                (e.deps = sr(n.deps)),
                (e.value = n.value));
            }
          }
        }
      }
      function Io(e, t, n, r, s, i, o, a, l, c, u, h, d) {
        const p = e.def.nodes[t];
        return (
          no(e, p, n, r, s, i, o, a, l, c, u, h, d),
          224 & p.flags ? Ln(e, t).value : void 0
        );
      }
      function Ao(e, t, n, r, s, i, o, a, l, c, u, h, d) {
        const p = e.def.nodes[t];
        return (
          so(e, p, n, r, s, i, o, a, l, c, u, h, d),
          224 & p.flags ? Ln(e, t).value : void 0
        );
      }
      function No(e) {
        return Wo(Oo.detectChanges, to, null, [e]);
      }
      function Ro(e) {
        return Wo(Oo.checkNoChanges, eo, null, [e]);
      }
      function Po(e) {
        return Wo(Oo.destroy, oo, null, [e]);
      }
      const Oo = (function () {
        var e = {
          create: 0,
          detectChanges: 1,
          checkNoChanges: 2,
          destroy: 3,
          handleEvent: 4,
        };
        return (
          (e[e.create] = "create"),
          (e[e.detectChanges] = "detectChanges"),
          (e[e.checkNoChanges] = "checkNoChanges"),
          (e[e.destroy] = "destroy"),
          (e[e.handleEvent] = "handleEvent"),
          e
        );
      })();
      let Do, Mo, Fo;
      function Lo(e, t) {
        (Mo = e), (Fo = t);
      }
      function Uo(e, t, n, r) {
        return (
          Lo(e, t), Wo(Oo.handleEvent, e.def.handleEvent, null, [e, t, n, r])
        );
      }
      function jo(e, t) {
        if (128 & e.state) throw Rn(Oo[Do]);
        return (
          Lo(e, Vo(e, 0)),
          e.def.updateDirectives(function (e, n, r, ...s) {
            const i = e.def.nodes[n];
            return (
              0 === t ? Ho(e, i, r, s) : $o(e, i, r, s),
              16384 & i.flags && Lo(e, Vo(e, n)),
              224 & i.flags ? Ln(e, i.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function zo(e, t) {
        if (128 & e.state) throw Rn(Oo[Do]);
        return (
          Lo(e, Bo(e, 0)),
          e.def.updateRenderer(function (e, n, r, ...s) {
            const i = e.def.nodes[n];
            return (
              0 === t ? Ho(e, i, r, s) : $o(e, i, r, s),
              3 & i.flags && Lo(e, Bo(e, n)),
              224 & i.flags ? Ln(e, i.nodeIndex).value : void 0
            );
          }, e)
        );
      }
      function Ho(e, t, n, r) {
        if (no(e, t, n, ...r)) {
          const i = 1 === n ? r[0] : r;
          if (16384 & t.flags) {
            const n = {};
            for (let e = 0; e < t.bindings.length; e++) {
              const r = t.bindings[e],
                o = i[e];
              8 & r.flags &&
                (n[
                  ((s = r.nonMinifiedName),
                  "ng-reflect-" +
                    s
                      .replace(/[$@]/g, "_")
                      .replace(wt, (...e) => "-" + e[1].toLowerCase()))
                ] = Et(o));
            }
            const r = t.parent,
              o = Mn(e, r.nodeIndex).renderElement;
            if (r.element.name)
              for (let t in n) {
                const r = n[t];
                null != r
                  ? e.renderer.setAttribute(o, t, r)
                  : e.renderer.removeAttribute(o, t);
              }
            else
              e.renderer.setValue(o, "bindings=" + JSON.stringify(n, null, 2));
          }
        }
        var s;
      }
      function $o(e, t, n, r) {
        so(e, t, n, ...r);
      }
      function Vo(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (16384 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      function Bo(e, t) {
        for (let n = t; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          if (3 & t.flags && t.bindings && t.bindings.length) return n;
        }
        return null;
      }
      class qo {
        constructor(e, t) {
          (this.view = e),
            (this.nodeIndex = t),
            null == t && (this.nodeIndex = t = 0),
            (this.nodeDef = e.def.nodes[t]);
          let n = this.nodeDef,
            r = e;
          for (; n && 0 == (1 & n.flags); ) n = n.parent;
          if (!n) for (; !n && r; ) (n = Xn(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        get elOrCompView() {
          return (
            Mn(this.elView, this.elDef.nodeIndex).componentView || this.view
          );
        }
        get injector() {
          return Ur(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const e = [];
          if (this.elDef)
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && e.push(n.provider.token), (t += n.childCount);
            }
          return e;
        }
        get references() {
          const e = {};
          if (this.elDef) {
            Qo(this.elView, this.elDef, e);
            for (
              let t = this.elDef.nodeIndex + 1;
              t <= this.elDef.nodeIndex + this.elDef.childCount;
              t++
            ) {
              const n = this.elView.def.nodes[t];
              20224 & n.flags && Qo(this.elView, n, e), (t += n.childCount);
            }
          }
          return e;
        }
        get componentRenderElement() {
          const e = (function (e) {
            for (; e && !er(e); ) e = e.parent;
            return e.parent ? Mn(e.parent, Xn(e).nodeIndex) : null;
          })(this.elOrCompView);
          return e ? e.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags
            ? Jn(this.view, this.nodeDef)
            : Jn(this.elView, this.elDef);
        }
        logError(e, ...t) {
          let n, r;
          2 & this.nodeDef.flags
            ? ((n = this.view.def), (r = this.nodeDef.nodeIndex))
            : ((n = this.elView.def), (r = this.elDef.nodeIndex));
          const s = (function (e, t) {
            let n = -1;
            for (let r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
            return n;
          })(n, r);
          let i = -1;
          n.factory(() => (i++, i === s ? e.error.bind(e, ...t) : zn)),
            i < s &&
              (e.error(
                "Illegal state: the ViewDefinitionFactory did not call the logger!"
              ),
              e.error(...t));
        }
      }
      function Qo(e, t, n) {
        for (let r in t.references) n[r] = Ui(e, t, t.references[r]);
      }
      function Wo(e, t, n, r) {
        const s = Do,
          i = Mo,
          o = Fo;
        try {
          Do = e;
          const a = t.apply(n, r);
          return (Mo = i), (Fo = o), (Do = s), a;
        } catch (a) {
          if (Ve(a) || !Mo) throw a;
          throw (function (e, t) {
            return (
              e instanceof Error || (e = new Error(e.toString())), Nn(e, t), e
            );
          })(a, Ko());
        }
      }
      function Ko() {
        return Mo ? new qo(Mo, Fo) : null;
      }
      class Zo {
        constructor(e) {
          this.delegate = e;
        }
        createRenderer(e, t) {
          return new Go(this.delegate.createRenderer(e, t));
        }
        begin() {
          this.delegate.begin && this.delegate.begin();
        }
        end() {
          this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone
            ? this.delegate.whenRenderingDone()
            : Promise.resolve(null);
        }
      }
      class Go {
        constructor(e) {
          (this.delegate = e),
            (this.debugContextFactory = Ko),
            (this.data = this.delegate.data);
        }
        createDebugContext(e) {
          return this.debugContextFactory(e);
        }
        destroyNode(e) {
          const t = bi(e);
          !(function (e) {
            vi.delete(e.nativeNode);
          })(t),
            t instanceof yi && (t.listeners.length = 0),
            this.delegate.destroyNode && this.delegate.destroyNode(e);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(e, t) {
          const n = this.delegate.createElement(e, t),
            r = this.createDebugContext(n);
          if (r) {
            const t = new _i(n, null, r);
            (t.name = e), wi(t);
          }
          return n;
        }
        createComment(e) {
          const t = this.delegate.createComment(e),
            n = this.createDebugContext(t);
          return n && wi(new yi(t, null, n)), t;
        }
        createText(e) {
          const t = this.delegate.createText(e),
            n = this.createDebugContext(t);
          return n && wi(new yi(t, null, n)), t;
        }
        appendChild(e, t) {
          const n = bi(e),
            r = bi(t);
          n && r && n instanceof _i && n.addChild(r),
            this.delegate.appendChild(e, t);
        }
        insertBefore(e, t, n) {
          const r = bi(e),
            s = bi(t),
            i = bi(n);
          r && s && r instanceof _i && r.insertBefore(i, s),
            this.delegate.insertBefore(e, t, n);
        }
        removeChild(e, t) {
          const n = bi(e),
            r = bi(t);
          n && r && n instanceof _i && n.removeChild(r),
            this.delegate.removeChild(e, t);
        }
        selectRootElement(e, t) {
          const n = this.delegate.selectRootElement(e, t),
            r = Ko();
          return r && wi(new _i(n, null, r)), n;
        }
        setAttribute(e, t, n, r) {
          const s = bi(e);
          s && s instanceof _i && (s.attributes[r ? r + ":" + t : t] = n),
            this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          const r = bi(e);
          r && r instanceof _i && (r.attributes[n ? n + ":" + t : t] = null),
            this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          const n = bi(e);
          n && n instanceof _i && (n.classes[t] = !0),
            this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          const n = bi(e);
          n && n instanceof _i && (n.classes[t] = !1),
            this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          const s = bi(e);
          s && s instanceof _i && (s.styles[t] = n),
            this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          const r = bi(e);
          r && r instanceof _i && (r.styles[t] = null),
            this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          const r = bi(e);
          r && r instanceof _i && (r.properties[t] = n),
            this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if ("string" != typeof e) {
            const r = bi(e);
            r && r.listeners.push(new gi(t, n));
          }
          return this.delegate.listen(e, t, n);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setValue(e, t) {
          return this.delegate.setValue(e, t);
        }
      }
      function Yo(e, t, n) {
        return new Xo(e, t, n);
      }
      class Xo extends Ue {
        constructor(e, t, n) {
          super(),
            (this.moduleType = e),
            (this._bootstrapComponents = t),
            (this._ngModuleDefFactory = n);
        }
        create(e) {
          !(function () {
            if (fo) return;
            fo = !0;
            const e = Ze()
              ? {
                  setCurrentNode: Lo,
                  createRootView: go,
                  createEmbeddedView: _o,
                  createComponentView: vo,
                  createNgModuleRef: bo,
                  overrideProvider: Co,
                  overrideComponentView: To,
                  clearOverrides: xo,
                  checkAndUpdateView: No,
                  checkNoChangesView: Ro,
                  destroyView: Po,
                  createDebugContext: (e, t) => new qo(e, t),
                  handleEvent: Uo,
                  updateDirectives: jo,
                  updateRenderer: zo,
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: mo,
                  createEmbeddedView: Ki,
                  createComponentView: Gi,
                  createNgModuleRef: Vr,
                  overrideProvider: zn,
                  overrideComponentView: zn,
                  clearOverrides: zn,
                  checkAndUpdateView: to,
                  checkNoChangesView: eo,
                  destroyView: oo,
                  createDebugContext: (e, t) => new qo(e, t),
                  handleEvent: (e, t, n, r) => e.def.handleEvent(e, t, n, r),
                  updateDirectives: (e, t) =>
                    e.def.updateDirectives(0 === t ? Io : Ao, e),
                  updateRenderer: (e, t) =>
                    e.def.updateRenderer(0 === t ? Io : Ao, e),
                };
            (jn.setCurrentNode = e.setCurrentNode),
              (jn.createRootView = e.createRootView),
              (jn.createEmbeddedView = e.createEmbeddedView),
              (jn.createComponentView = e.createComponentView),
              (jn.createNgModuleRef = e.createNgModuleRef),
              (jn.overrideProvider = e.overrideProvider),
              (jn.overrideComponentView = e.overrideComponentView),
              (jn.clearOverrides = e.clearOverrides),
              (jn.checkAndUpdateView = e.checkAndUpdateView),
              (jn.checkNoChangesView = e.checkNoChangesView),
              (jn.destroyView = e.destroyView),
              (jn.resolveDep = as),
              (jn.createDebugContext = e.createDebugContext),
              (jn.handleEvent = e.handleEvent),
              (jn.updateDirectives = e.updateDirectives),
              (jn.updateRenderer = e.updateRenderer),
              (jn.dirtyParentQueries = Mi);
          })();
          const t = (function (e) {
            const t = Array.from(e.providers),
              n = Array.from(e.modules),
              r = {};
            for (const s in e.providersByKey) r[s] = e.providersByKey[s];
            return {
              factory: e.factory,
              isRoot: e.isRoot,
              providers: t,
              modules: n,
              providersByKey: r,
            };
          })(ar(this._ngModuleDefFactory));
          return jn.createNgModuleRef(
            this.moduleType,
            e || kt.NULL,
            this._bootstrapComponents,
            t
          );
        }
      }
      class Jo {}
      class ea {
        constructor() {
          this.title = "marvel-characters";
        }
      }
      class ta {}
      const na = new ke("Location Initialized");
      class ra {}
      const sa = new ke("appBaseHref");
      class ia {
        constructor(e, t) {
          (this._subject = new _s()),
            (this._urlChangeListeners = []),
            (this._platformStrategy = e);
          const n = this._platformStrategy.getBaseHref();
          (this._platformLocation = t),
            (this._baseHref = ia.stripTrailingSlash(oa(n))),
            this._platformStrategy.onPopState((e) => {
              this._subject.emit({
                url: this.path(!0),
                pop: !0,
                state: e.state,
                type: e.type,
              });
            });
        }
        path(e = !1) {
          return this.normalize(this._platformStrategy.path(e));
        }
        getState() {
          return this._platformLocation.getState();
        }
        isCurrentPathEqualTo(e, t = "") {
          return this.path() == this.normalize(e + ia.normalizeQueryParams(t));
        }
        normalize(e) {
          return ia.stripTrailingSlash(
            (function (e, t) {
              return e && t.startsWith(e) ? t.substring(e.length) : t;
            })(this._baseHref, oa(e))
          );
        }
        prepareExternalUrl(e) {
          return (
            e && "/" !== e[0] && (e = "/" + e),
            this._platformStrategy.prepareExternalUrl(e)
          );
        }
        go(e, t = "", n = null) {
          this._platformStrategy.pushState(n, "", e, t),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(e + ia.normalizeQueryParams(t)),
              n
            );
        }
        replaceState(e, t = "", n = null) {
          this._platformStrategy.replaceState(n, "", e, t),
            this._notifyUrlChangeListeners(
              this.prepareExternalUrl(e + ia.normalizeQueryParams(t)),
              n
            );
        }
        forward() {
          this._platformStrategy.forward();
        }
        back() {
          this._platformStrategy.back();
        }
        onUrlChange(e) {
          this._urlChangeListeners.push(e),
            this.subscribe((e) => {
              this._notifyUrlChangeListeners(e.url, e.state);
            });
        }
        _notifyUrlChangeListeners(e = "", t) {
          this._urlChangeListeners.forEach((n) => n(e, t));
        }
        subscribe(e, t, n) {
          return this._subject.subscribe({ next: e, error: t, complete: n });
        }
        static normalizeQueryParams(e) {
          return e && "?" !== e[0] ? "?" + e : e;
        }
        static joinWithSlash(e, t) {
          if (0 == e.length) return t;
          if (0 == t.length) return e;
          let n = 0;
          return (
            e.endsWith("/") && n++,
            t.startsWith("/") && n++,
            2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
          );
        }
        static stripTrailingSlash(e) {
          const t = e.match(/#|\?|$/),
            n = (t && t.index) || e.length;
          return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n);
        }
      }
      function oa(e) {
        return e.replace(/\/index.html$/, "");
      }
      class aa extends ra {
        constructor(e, t) {
          super(),
            (this._platformLocation = e),
            (this._baseHref = ""),
            null != t && (this._baseHref = t);
        }
        onPopState(e) {
          this._platformLocation.onPopState(e),
            this._platformLocation.onHashChange(e);
        }
        getBaseHref() {
          return this._baseHref;
        }
        path(e = !1) {
          let t = this._platformLocation.hash;
          return null == t && (t = "#"), t.length > 0 ? t.substring(1) : t;
        }
        prepareExternalUrl(e) {
          const t = ia.joinWithSlash(this._baseHref, e);
          return t.length > 0 ? "#" + t : t;
        }
        pushState(e, t, n, r) {
          let s = this.prepareExternalUrl(n + ia.normalizeQueryParams(r));
          0 == s.length && (s = this._platformLocation.pathname),
            this._platformLocation.pushState(e, t, s);
        }
        replaceState(e, t, n, r) {
          let s = this.prepareExternalUrl(n + ia.normalizeQueryParams(r));
          0 == s.length && (s = this._platformLocation.pathname),
            this._platformLocation.replaceState(e, t, s);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      class la extends ra {
        constructor(e, t) {
          if (
            (super(),
            (this._platformLocation = e),
            null == t && (t = this._platformLocation.getBaseHrefFromDOM()),
            null == t)
          )
            throw new Error(
              "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
            );
          this._baseHref = t;
        }
        onPopState(e) {
          this._platformLocation.onPopState(e),
            this._platformLocation.onHashChange(e);
        }
        getBaseHref() {
          return this._baseHref;
        }
        prepareExternalUrl(e) {
          return ia.joinWithSlash(this._baseHref, e);
        }
        path(e = !1) {
          const t =
              this._platformLocation.pathname +
              ia.normalizeQueryParams(this._platformLocation.search),
            n = this._platformLocation.hash;
          return n && e ? `${t}${n}` : t;
        }
        pushState(e, t, n, r) {
          const s = this.prepareExternalUrl(n + ia.normalizeQueryParams(r));
          this._platformLocation.pushState(e, t, s);
        }
        replaceState(e, t, n, r) {
          const s = this.prepareExternalUrl(n + ia.normalizeQueryParams(r));
          this._platformLocation.replaceState(e, t, s);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      const ca = (function () {
          var e = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (e[e.Zero] = "Zero"),
            (e[e.One] = "One"),
            (e[e.Two] = "Two"),
            (e[e.Few] = "Few"),
            (e[e.Many] = "Many"),
            (e[e.Other] = "Other"),
            e
          );
        })(),
        ua = new ke("UseV4Plurals");
      class ha {}
      class da extends ha {
        constructor(e, t) {
          super(), (this.locale = e), (this.deprecatedPluralFn = t);
        }
        getPluralCategory(e, t) {
          switch (
            this.deprecatedPluralFn
              ? this.deprecatedPluralFn(t || this.locale, e)
              : (function (e) {
                  return (function (e) {
                    const t = e.toLowerCase().replace(/_/g, "-");
                    let n = fs[t];
                    if (n) return n;
                    const r = t.split("-")[0];
                    if (((n = fs[r]), n)) return n;
                    if ("en" === r) return ys;
                    throw new Error(
                      `Missing locale data for the locale "${e}".`
                    );
                  })(e)[ms.PluralCase];
                })(t || this.locale)(e)
          ) {
            case ca.Zero:
              return "zero";
            case ca.One:
              return "one";
            case ca.Two:
              return "two";
            case ca.Few:
              return "few";
            case ca.Many:
              return "many";
            default:
              return "other";
          }
        }
      }
      function pa(e, t) {
        t = encodeURIComponent(t);
        for (const n of e.split(";")) {
          const e = n.indexOf("="),
            [r, s] = -1 == e ? [n, ""] : [n.slice(0, e), n.slice(e + 1)];
          if (r.trim() === t) return decodeURIComponent(s);
        }
        return null;
      }
      class fa {
        constructor(e, t, n, r) {
          (this.$implicit = e),
            (this.ngForOf = t),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      class ma {
        constructor(e, t, n) {
          (this._viewContainer = e),
            (this._template = t),
            (this._differs = n),
            (this._ngForOfDirty = !0),
            (this._differ = null);
        }
        set ngForOf(e) {
          (this._ngForOf = e), (this._ngForOfDirty = !0);
        }
        set ngForTrackBy(e) {
          Ze() &&
            null != e &&
            "function" != typeof e &&
            console &&
            console.warn &&
            console.warn(
              `trackBy must be a function, but received ${JSON.stringify(
                e
              )}. See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.`
            ),
            (this._trackByFn = e);
        }
        get ngForTrackBy() {
          return this._trackByFn;
        }
        set ngForTemplate(e) {
          e && (this._template = e);
        }
        ngDoCheck() {
          if (this._ngForOfDirty) {
            this._ngForOfDirty = !1;
            const n = this._ngForOf;
            if (!this._differ && n)
              try {
                this._differ = this._differs.find(n).create(this.ngForTrackBy);
              } catch (t) {
                throw new Error(
                  `Cannot find a differ supporting object '${n}' of type '${
                    ((e = n), e.name || typeof e)
                  }'. NgFor only supports binding to Iterables such as Arrays.`
                );
              }
          }
          var e;
          if (this._differ) {
            const e = this._differ.diff(this._ngForOf);
            e && this._applyChanges(e);
          }
        }
        _applyChanges(e) {
          const t = [];
          e.forEachOperation((e, n, r) => {
            if (null == e.previousIndex) {
              const n = this._viewContainer.createEmbeddedView(
                  this._template,
                  new fa(null, this._ngForOf, -1, -1),
                  null === r ? void 0 : r
                ),
                s = new ga(e, n);
              t.push(s);
            } else if (null == r)
              this._viewContainer.remove(null === n ? void 0 : n);
            else if (null !== n) {
              const s = this._viewContainer.get(n);
              this._viewContainer.move(s, r);
              const i = new ga(e, s);
              t.push(i);
            }
          });
          for (let n = 0; n < t.length; n++)
            this._perViewChange(t[n].view, t[n].record);
          for (let n = 0, r = this._viewContainer.length; n < r; n++) {
            const e = this._viewContainer.get(n);
            (e.context.index = n),
              (e.context.count = r),
              (e.context.ngForOf = this._ngForOf);
          }
          e.forEachIdentityChange((e) => {
            this._viewContainer.get(e.currentIndex).context.$implicit = e.item;
          });
        }
        _perViewChange(e, t) {
          e.context.$implicit = t.item;
        }
        static ngTemplateContextGuard(e, t) {
          return !0;
        }
      }
      class ga {
        constructor(e, t) {
          (this.record = e), (this.view = t);
        }
      }
      class ya {}
      const _a = new ke("DocumentToken");
      function va(e) {
        return "browser" === e;
      }
      let ba = (() => {
        class e {}
        return (
          (e.ngInjectableDef = me({
            token: e,
            providedIn: "root",
            factory: () => new wa(De(_a), window, De(Qe)),
          })),
          e
        );
      })();
      class wa {
        constructor(e, t, n) {
          (this.document = e),
            (this.window = t),
            (this.errorHandler = n),
            (this.offset = () => [0, 0]);
        }
        setOffset(e) {
          this.offset = Array.isArray(e) ? () => e : e;
        }
        getScrollPosition() {
          return this.supportScrollRestoration()
            ? [this.window.scrollX, this.window.scrollY]
            : [0, 0];
        }
        scrollToPosition(e) {
          this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1]);
        }
        scrollToAnchor(e) {
          if (this.supportScrollRestoration()) {
            e =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(e)
                : e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
            try {
              const t = this.document.querySelector("#" + e);
              if (t) return void this.scrollToElement(t);
              const n = this.document.querySelector(`[name='${e}']`);
              if (n) return void this.scrollToElement(n);
            } catch (t) {
              this.errorHandler.handleError(t);
            }
          }
        }
        setHistoryScrollRestoration(e) {
          if (this.supportScrollRestoration()) {
            const t = this.window.history;
            t && t.scrollRestoration && (t.scrollRestoration = e);
          }
        }
        scrollToElement(e) {
          const t = e.getBoundingClientRect(),
            n = t.left + this.window.pageXOffset,
            r = t.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (e) {
            return !1;
          }
        }
      }
      const Ea = new w((e) => e.complete());
      function Sa(e) {
        return e
          ? (function (e) {
              return new w((t) => e.schedule(() => t.complete()));
            })(e)
          : Ea;
      }
      function Ca(e) {
        const t = new w((t) => {
          t.next(e), t.complete();
        });
        return (t._isScalar = !0), (t.value = e), t;
      }
      function Ta(...e) {
        let t = e[e.length - 1];
        switch ((A(t) ? e.pop() : (t = void 0), e.length)) {
          case 0:
            return Sa(t);
          case 1:
            return t ? q(e, t) : Ca(e[0]);
          default:
            return q(e, t);
        }
      }
      class xa extends k {
        constructor(e) {
          super(), (this._value = e);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(e) {
          const t = super._subscribe(e);
          return t && !t.closed && e.next(this._value), t;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new C();
          return this._value;
        }
        next(e) {
          super.next((this._value = e));
        }
      }
      function ka() {
        return (
          Error.call(this),
          (this.message = "no elements in sequence"),
          (this.name = "EmptyError"),
          this
        );
      }
      ka.prototype = Object.create(Error.prototype);
      const Ia = ka,
        Aa = {};
      class Na {
        constructor(e) {
          this.resultSelector = e;
        }
        call(e, t) {
          return t.subscribe(new Ra(e, this.resultSelector));
        }
      }
      class Ra extends H {
        constructor(e, t) {
          super(e),
            (this.resultSelector = t),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(e) {
          this.values.push(Aa), this.observables.push(e);
        }
        _complete() {
          const e = this.observables,
            t = e.length;
          if (0 === t) this.destination.complete();
          else {
            (this.active = t), (this.toRespond = t);
            for (let n = 0; n < t; n++) {
              const t = e[n];
              this.add(z(this, t, t, n));
            }
          }
        }
        notifyComplete(e) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(e, t, n, r, s) {
          const i = this.values,
            o = this.toRespond
              ? i[n] === Aa
                ? --this.toRespond
                : this.toRespond
              : 0;
          (i[n] = t),
            0 === o &&
              (this.resultSelector
                ? this._tryResultSelector(i)
                : this.destination.next(i.slice()));
        }
        _tryResultSelector(e) {
          let t;
          try {
            t = this.resultSelector.apply(this, e);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      function Pa(e) {
        return new w((t) => {
          let n;
          try {
            n = e();
          } catch (r) {
            return void t.error(r);
          }
          return (n ? Q(n) : Sa()).subscribe(t);
        });
      }
      function Oa() {
        return Y(1);
      }
      function Da(e, t) {
        return function (n) {
          return n.lift(new Ma(e, t));
        };
      }
      class Ma {
        constructor(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new Fa(e, this.predicate, this.thisArg));
        }
      }
      class Fa extends m {
        constructor(e, t, n) {
          super(e), (this.predicate = t), (this.thisArg = n), (this.count = 0);
        }
        _next(e) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          t && this.destination.next(e);
        }
      }
      function La() {
        return (
          Error.call(this),
          (this.message = "argument out of range"),
          (this.name = "ArgumentOutOfRangeError"),
          this
        );
      }
      La.prototype = Object.create(Error.prototype);
      const Ua = La;
      function ja(e) {
        return function (t) {
          return 0 === e ? Sa() : t.lift(new za(e));
        };
      }
      class za {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new Ua();
        }
        call(e, t) {
          return t.subscribe(new Ha(e, this.total));
        }
      }
      class Ha extends m {
        constructor(e, t) {
          super(e),
            (this.total = t),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(e) {
          const t = this.ring,
            n = this.total,
            r = this.count++;
          t.length < n ? t.push(e) : (t[r % n] = e);
        }
        _complete() {
          const e = this.destination;
          let t = this.count;
          if (t > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = t++ % n;
              e.next(r[s]);
            }
          }
          e.complete();
        }
      }
      function $a(e, t, n) {
        return function (r) {
          return r.lift(new Va(e, t, n));
        };
      }
      class Va {
        constructor(e, t, n) {
          (this.nextOrObserver = e), (this.error = t), (this.complete = n);
        }
        call(e, t) {
          return t.subscribe(
            new Ba(e, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class Ba extends m {
        constructor(e, t, n, s) {
          super(e),
            (this._tapNext = _),
            (this._tapError = _),
            (this._tapComplete = _),
            (this._tapError = n || _),
            (this._tapComplete = s || _),
            r(t)
              ? ((this._context = this), (this._tapNext = t))
              : t &&
                ((this._context = t),
                (this._tapNext = t.next || _),
                (this._tapError = t.error || _),
                (this._tapComplete = t.complete || _));
        }
        _next(e) {
          try {
            this._tapNext.call(this._context, e);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }
        _error(e) {
          try {
            this._tapError.call(this._context, e);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.error(e);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (e) {
            return void this.destination.error(e);
          }
          return this.destination.complete();
        }
      }
      const qa = (e = Qa) =>
        $a({
          hasValue: !1,
          next() {
            this.hasValue = !0;
          },
          complete() {
            if (!this.hasValue) throw e();
          },
        });
      function Qa() {
        return new Ia();
      }
      function Wa(e = null) {
        return (t) => t.lift(new Ka(e));
      }
      class Ka {
        constructor(e) {
          this.defaultValue = e;
        }
        call(e, t) {
          return t.subscribe(new Za(e, this.defaultValue));
        }
      }
      class Za extends m {
        constructor(e, t) {
          super(e), (this.defaultValue = t), (this.isEmpty = !0);
        }
        _next(e) {
          (this.isEmpty = !1), this.destination.next(e);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function Ga(e, t) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            e ? Da((t, n) => e(t, n, r)) : G,
            ja(1),
            n ? Wa(t) : qa(() => new Ia())
          );
      }
      function Ya(e) {
        return function (t) {
          const n = new Xa(e),
            r = t.lift(n);
          return (n.caught = r);
        };
      }
      class Xa {
        constructor(e) {
          this.selector = e;
        }
        call(e, t) {
          return t.subscribe(new Ja(e, this.selector, this.caught));
        }
      }
      class Ja extends H {
        constructor(e, t, n) {
          super(e), (this.selector = t), (this.caught = n);
        }
        error(e) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(e, this.caught);
            } catch (t) {
              return void super.error(t);
            }
            this._unsubscribeAndRecycle();
            const r = new N(this, void 0, void 0);
            this.add(r), z(this, n, void 0, void 0, r);
          }
        }
      }
      function el(e) {
        return (t) => (0 === e ? Sa() : t.lift(new tl(e)));
      }
      class tl {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new Ua();
        }
        call(e, t) {
          return t.subscribe(new nl(e, this.total));
        }
      }
      class nl extends m {
        constructor(e, t) {
          super(e), (this.total = t), (this.count = 0);
        }
        _next(e) {
          const t = this.total,
            n = ++this.count;
          n <= t &&
            (this.destination.next(e),
            n === t && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function rl(e, t) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            e ? Da((t, n) => e(t, n, r)) : G,
            el(1),
            n ? Wa(t) : qa(() => new Ia())
          );
      }
      class sl {
        constructor(e, t, n) {
          (this.predicate = e), (this.thisArg = t), (this.source = n);
        }
        call(e, t) {
          return t.subscribe(
            new il(e, this.predicate, this.thisArg, this.source)
          );
        }
      }
      class il extends m {
        constructor(e, t, n, r) {
          super(e),
            (this.predicate = t),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(e) {
          this.destination.next(e), this.destination.complete();
        }
        _next(e) {
          let t = !1;
          try {
            t = this.predicate.call(this.thisArg, e, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          t || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function ol(e, t) {
        return "function" == typeof t
          ? (n) =>
              n.pipe(ol((n, r) => Q(e(n, r)).pipe($((e, s) => t(n, e, r, s)))))
          : (t) => t.lift(new al(e));
      }
      class al {
        constructor(e) {
          this.project = e;
        }
        call(e, t) {
          return t.subscribe(new ll(e, this.project));
        }
      }
      class ll extends H {
        constructor(e, t) {
          super(e), (this.project = t), (this.index = 0);
        }
        _next(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(t, e, n);
        }
        _innerSub(e, t, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const s = new N(this, void 0, void 0);
          this.destination.add(s),
            (this.innerSubscription = z(this, e, t, n, s));
        }
        _complete() {
          const { innerSubscription: e } = this;
          (e && !e.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(e) {
          this.destination.remove(e),
            (this.innerSubscription = null),
            this.isStopped && super._complete();
        }
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
      }
      function cl(...e) {
        return Oa()(Ta(...e));
      }
      function ul(e, t) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new hl(e, t, n));
          }
        );
      }
      class hl {
        constructor(e, t, n = !1) {
          (this.accumulator = e), (this.seed = t), (this.hasSeed = n);
        }
        call(e, t) {
          return t.subscribe(
            new dl(e, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class dl extends m {
        constructor(e, t, n, r) {
          super(e),
            (this.accumulator = t),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(e) {
          (this.hasSeed = !0), (this._seed = e);
        }
        _next(e) {
          if (this.hasSeed) return this._tryNext(e);
          (this.seed = e), this.destination.next(e);
        }
        _tryNext(e) {
          const t = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, e, t);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function pl(e, t) {
        return W(e, t, 1);
      }
      class fl {
        constructor(e) {
          this.callback = e;
        }
        call(e, t) {
          return t.subscribe(new ml(e, this.callback));
        }
      }
      class ml extends m {
        constructor(e, t) {
          super(e), this.add(new d(t));
        }
      }
      let gl = null;
      function yl() {
        return gl;
      }
      const _l = {
          class: "className",
          innerHtml: "innerHTML",
          readonly: "readOnly",
          tabindex: "tabIndex",
        },
        vl = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        bl = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        wl = (() => {
          if (xe.Node)
            return (
              xe.Node.prototype.contains ||
              function (e) {
                return !!(16 & this.compareDocumentPosition(e));
              }
            );
        })();
      class El extends class extends class {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(e) {
          this._attrToPropMap = e;
        }
      } {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const e = this.createElement("div", document);
            if (null != this.getStyle(e, "animationName"))
              this._animationPrefix = "";
            else {
              const t = ["Webkit", "Moz", "O", "ms"];
              for (let n = 0; n < t.length; n++)
                if (null != this.getStyle(e, t[n] + "AnimationName")) {
                  this._animationPrefix = "-" + t[n].toLowerCase() + "-";
                  break;
                }
            }
            const t = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend",
            };
            Object.keys(t).forEach((n) => {
              null != this.getStyle(e, n) && (this._transitionEnd = t[n]);
            });
          } catch (e) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(e) {
          return e.getDistributedNodes();
        }
        resolveAndSetHref(e, t, n) {
          e.href = null == n ? t : t + "/../" + n;
        }
        supportsDOMEvents() {
          return !0;
        }
        supportsNativeShadowDOM() {
          return "function" == typeof document.body.createShadowRoot;
        }
        getAnimationPrefix() {
          return this._animationPrefix ? this._animationPrefix : "";
        }
        getTransitionEnd() {
          return this._transitionEnd ? this._transitionEnd : "";
        }
        supportsAnimation() {
          return null != this._animationPrefix && null != this._transitionEnd;
        }
      } {
        parse(e) {
          throw new Error("parse not implemented");
        }
        static makeCurrent() {
          var e;
          (e = new El()), gl || (gl = e);
        }
        hasProperty(e, t) {
          return t in e;
        }
        setProperty(e, t, n) {
          e[t] = n;
        }
        getProperty(e, t) {
          return e[t];
        }
        invoke(e, t, n) {
          e[t](...n);
        }
        logError(e) {
          window.console && (console.error ? console.error(e) : console.log(e));
        }
        log(e) {
          window.console && window.console.log && window.console.log(e);
        }
        logGroup(e) {
          window.console && window.console.group && window.console.group(e);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        get attrToPropMap() {
          return _l;
        }
        contains(e, t) {
          return wl.call(e, t);
        }
        querySelector(e, t) {
          return e.querySelector(t);
        }
        querySelectorAll(e, t) {
          return e.querySelectorAll(t);
        }
        on(e, t, n) {
          e.addEventListener(t, n, !1);
        }
        onAndCancel(e, t, n) {
          return (
            e.addEventListener(t, n, !1),
            () => {
              e.removeEventListener(t, n, !1);
            }
          );
        }
        dispatchEvent(e, t) {
          e.dispatchEvent(t);
        }
        createMouseEvent(e) {
          const t = this.getDefaultDocument().createEvent("MouseEvent");
          return t.initEvent(e, !0, !0), t;
        }
        createEvent(e) {
          const t = this.getDefaultDocument().createEvent("Event");
          return t.initEvent(e, !0, !0), t;
        }
        preventDefault(e) {
          e.preventDefault(), (e.returnValue = !1);
        }
        isPrevented(e) {
          return (
            e.defaultPrevented || (null != e.returnValue && !e.returnValue)
          );
        }
        getInnerHTML(e) {
          return e.innerHTML;
        }
        getTemplateContent(e) {
          return "content" in e && this.isTemplateElement(e) ? e.content : null;
        }
        getOuterHTML(e) {
          return e.outerHTML;
        }
        nodeName(e) {
          return e.nodeName;
        }
        nodeValue(e) {
          return e.nodeValue;
        }
        type(e) {
          return e.type;
        }
        content(e) {
          return this.hasProperty(e, "content") ? e.content : e;
        }
        firstChild(e) {
          return e.firstChild;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        parentElement(e) {
          return e.parentNode;
        }
        childNodes(e) {
          return e.childNodes;
        }
        childNodesAsList(e) {
          const t = e.childNodes,
            n = new Array(t.length);
          for (let r = 0; r < t.length; r++) n[r] = t[r];
          return n;
        }
        clearNodes(e) {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        removeChild(e, t) {
          e.removeChild(t);
        }
        replaceChild(e, t, n) {
          e.replaceChild(t, n);
        }
        remove(e) {
          return e.parentNode && e.parentNode.removeChild(e), e;
        }
        insertBefore(e, t, n) {
          e.insertBefore(n, t);
        }
        insertAllBefore(e, t, n) {
          n.forEach((n) => e.insertBefore(n, t));
        }
        insertAfter(e, t, n) {
          e.insertBefore(n, t.nextSibling);
        }
        setInnerHTML(e, t) {
          e.innerHTML = t;
        }
        getText(e) {
          return e.textContent;
        }
        setText(e, t) {
          e.textContent = t;
        }
        getValue(e) {
          return e.value;
        }
        setValue(e, t) {
          e.value = t;
        }
        getChecked(e) {
          return e.checked;
        }
        setChecked(e, t) {
          e.checked = t;
        }
        createComment(e) {
          return this.getDefaultDocument().createComment(e);
        }
        createTemplate(e) {
          const t = this.getDefaultDocument().createElement("template");
          return (t.innerHTML = e), t;
        }
        createElement(e, t) {
          return (t = t || this.getDefaultDocument()).createElement(e);
        }
        createElementNS(e, t, n) {
          return (n = n || this.getDefaultDocument()).createElementNS(e, t);
        }
        createTextNode(e, t) {
          return (t = t || this.getDefaultDocument()).createTextNode(e);
        }
        createScriptTag(e, t, n) {
          const r = (n = n || this.getDefaultDocument()).createElement(
            "SCRIPT"
          );
          return r.setAttribute(e, t), r;
        }
        createStyleElement(e, t) {
          const n = (t = t || this.getDefaultDocument()).createElement("style");
          return this.appendChild(n, this.createTextNode(e, t)), n;
        }
        createShadowRoot(e) {
          return e.createShadowRoot();
        }
        getShadowRoot(e) {
          return e.shadowRoot;
        }
        getHost(e) {
          return e.host;
        }
        clone(e) {
          return e.cloneNode(!0);
        }
        getElementsByClassName(e, t) {
          return e.getElementsByClassName(t);
        }
        getElementsByTagName(e, t) {
          return e.getElementsByTagName(t);
        }
        classList(e) {
          return Array.prototype.slice.call(e.classList, 0);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        hasClass(e, t) {
          return e.classList.contains(t);
        }
        setStyle(e, t, n) {
          e.style[t] = n;
        }
        removeStyle(e, t) {
          e.style[t] = "";
        }
        getStyle(e, t) {
          return e.style[t];
        }
        hasStyle(e, t, n) {
          const r = this.getStyle(e, t) || "";
          return n ? r == n : r.length > 0;
        }
        tagName(e) {
          return e.tagName;
        }
        attributeMap(e) {
          const t = new Map(),
            n = e.attributes;
          for (let r = 0; r < n.length; r++) {
            const e = n.item(r);
            t.set(e.name, e.value);
          }
          return t;
        }
        hasAttribute(e, t) {
          return e.hasAttribute(t);
        }
        hasAttributeNS(e, t, n) {
          return e.hasAttributeNS(t, n);
        }
        getAttribute(e, t) {
          return e.getAttribute(t);
        }
        getAttributeNS(e, t, n) {
          return e.getAttributeNS(t, n);
        }
        setAttribute(e, t, n) {
          e.setAttribute(t, n);
        }
        setAttributeNS(e, t, n, r) {
          e.setAttributeNS(t, n, r);
        }
        removeAttribute(e, t) {
          e.removeAttribute(t);
        }
        removeAttributeNS(e, t, n) {
          e.removeAttributeNS(t, n);
        }
        templateAwareRoot(e) {
          return this.isTemplateElement(e) ? this.content(e) : e;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(e) {
          try {
            return e.getBoundingClientRect();
          } catch (t) {
            return {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0,
            };
          }
        }
        getTitle(e) {
          return e.title;
        }
        setTitle(e, t) {
          e.title = t || "";
        }
        elementMatches(e, t) {
          return (
            !!this.isElementNode(e) &&
            ((e.matches && e.matches(t)) ||
              (e.msMatchesSelector && e.msMatchesSelector(t)) ||
              (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
          );
        }
        isTemplateElement(e) {
          return this.isElementNode(e) && "TEMPLATE" === e.nodeName;
        }
        isTextNode(e) {
          return e.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(e) {
          return e.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(e) {
          return e.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(e) {
          return null != e.shadowRoot && e instanceof HTMLElement;
        }
        isShadowRoot(e) {
          return e instanceof DocumentFragment;
        }
        importIntoDoc(e) {
          return document.importNode(this.templateAwareRoot(e), !0);
        }
        adoptNode(e) {
          return document.adoptNode(e);
        }
        getHref(e) {
          return e.getAttribute("href");
        }
        getEventKey(e) {
          let t = e.key;
          if (null == t) {
            if (((t = e.keyIdentifier), null == t)) return "Unidentified";
            t.startsWith("U+") &&
              ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
              3 === e.location && bl.hasOwnProperty(t) && (t = bl[t]));
          }
          return vl[t] || t;
        }
        getGlobalEventTarget(e, t) {
          return "window" === t
            ? window
            : "document" === t
            ? e
            : "body" === t
            ? e.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(e) {
          const t =
            Cl || ((Cl = document.querySelector("base")), Cl)
              ? Cl.getAttribute("href")
              : null;
          return null == t
            ? null
            : ((n = t),
              Sl || (Sl = document.createElement("a")),
              Sl.setAttribute("href", n),
              "/" === Sl.pathname.charAt(0) ? Sl.pathname : "/" + Sl.pathname);
          var n;
        }
        resetBaseElement() {
          Cl = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(e, t, n) {
          this.setAttribute(e, "data-" + t, n);
        }
        getData(e, t) {
          return this.getAttribute(e, "data-" + t);
        }
        getComputedStyle(e) {
          return getComputedStyle(e);
        }
        supportsWebAnimation() {
          return "function" == typeof Element.prototype.animate;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(e) {
          return pa(document.cookie, e);
        }
        setCookie(e, t) {
          document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        }
      }
      let Sl,
        Cl = null;
      function Tl() {
        return !!window.history.pushState;
      }
      const xl = new ke("TRANSITION_ID");
      function kl(e, t, n) {
        return () => {
          n.get(Es).donePromise.then(() => {
            const n = yl();
            Array.prototype.slice
              .apply(n.querySelectorAll(t, "style[ng-transition]"))
              .filter((t) => n.getAttribute(t, "ng-transition") === e)
              .forEach((e) => n.remove(e));
          });
        };
      }
      const Il = [
        { provide: ws, useFactory: kl, deps: [xl, _a, kt], multi: !0 },
      ];
      class Al {
        static init() {
          var e;
          (e = new Al()), (ni = e);
        }
        addToWindow(e) {
          (xe.getAngularTestability = (t, n = !0) => {
            const r = e.findTestabilityInTree(t, n);
            if (null == r)
              throw new Error("Could not find testability for element.");
            return r;
          }),
            (xe.getAllAngularTestabilities = () => e.getAllTestabilities()),
            (xe.getAllAngularRootElements = () => e.getAllRootElements()),
            xe.frameworkStabilizers || (xe.frameworkStabilizers = []),
            xe.frameworkStabilizers.push((e) => {
              const t = xe.getAllAngularTestabilities();
              let n = t.length,
                r = !1;
              const s = function (t) {
                (r = r || t), n--, 0 == n && e(r);
              };
              t.forEach(function (e) {
                e.whenStable(s);
              });
            });
        }
        findTestabilityInTree(e, t, n) {
          if (null == t) return null;
          const r = e.getTestability(t);
          return null != r
            ? r
            : n
            ? yl().isShadowRoot(t)
              ? this.findTestabilityInTree(e, yl().getHost(t), !0)
              : this.findTestabilityInTree(e, yl().parentElement(t), !0)
            : null;
        }
      }
      function Nl(e, t) {
        ("undefined" != typeof COMPILED && COMPILED) ||
          ((xe.ng = xe.ng || {})[e] = t);
      }
      const Rl = (() => ({ ApplicationRef: ci, NgZone: qs }))();
      function Pl(e) {
        return bi(e);
      }
      const Ol = new ke("EventManagerPlugins");
      class Dl {
        constructor(e, t) {
          (this._zone = t),
            (this._eventNameToPlugin = new Map()),
            e.forEach((e) => (e.manager = this)),
            (this._plugins = e.slice().reverse());
        }
        addEventListener(e, t, n) {
          return this._findPluginFor(t).addEventListener(e, t, n);
        }
        addGlobalEventListener(e, t, n) {
          return this._findPluginFor(t).addGlobalEventListener(e, t, n);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(e) {
          const t = this._eventNameToPlugin.get(e);
          if (t) return t;
          const n = this._plugins;
          for (let r = 0; r < n.length; r++) {
            const t = n[r];
            if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
          }
          throw new Error("No event manager plugin found for event " + e);
        }
      }
      class Ml {
        constructor(e) {
          this._doc = e;
        }
        addGlobalEventListener(e, t, n) {
          const r = yl().getGlobalEventTarget(this._doc, e);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${t}`);
          return this.addEventListener(r, t, n);
        }
      }
      class Fl {
        constructor() {
          this._stylesSet = new Set();
        }
        addStyles(e) {
          const t = new Set();
          e.forEach((e) => {
            this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
          }),
            this.onStylesAdded(t);
        }
        onStylesAdded(e) {}
        getAllStyles() {
          return Array.from(this._stylesSet);
        }
      }
      class Ll extends Fl {
        constructor(e) {
          super(),
            (this._doc = e),
            (this._hostNodes = new Set()),
            (this._styleNodes = new Set()),
            this._hostNodes.add(e.head);
        }
        _addStylesToHost(e, t) {
          e.forEach((e) => {
            const n = this._doc.createElement("style");
            (n.textContent = e), this._styleNodes.add(t.appendChild(n));
          });
        }
        addHost(e) {
          this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
        }
        removeHost(e) {
          this._hostNodes.delete(e);
        }
        onStylesAdded(e) {
          this._hostNodes.forEach((t) => this._addStylesToHost(e, t));
        }
        ngOnDestroy() {
          this._styleNodes.forEach((e) => yl().remove(e));
        }
      }
      const Ul = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        jl = /%COMP%/g;
      function zl(e, t, n) {
        for (let r = 0; r < t.length; r++) {
          let s = t[r];
          Array.isArray(s) ? zl(e, s, n) : ((s = s.replace(jl, e)), n.push(s));
        }
        return n;
      }
      function Hl(e) {
        return (t) => {
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      class $l {
        constructor(e, t, n) {
          (this.eventManager = e),
            (this.sharedStylesHost = t),
            (this.appId = n),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new Vl(e));
        }
        createRenderer(e, t) {
          if (!e || !t) return this.defaultRenderer;
          switch (t.encapsulation) {
            case He.Emulated: {
              let n = this.rendererByCompId.get(t.id);
              return (
                n ||
                  ((n = new Ql(
                    this.eventManager,
                    this.sharedStylesHost,
                    t,
                    this.appId
                  )),
                  this.rendererByCompId.set(t.id, n)),
                n.applyToHost(e),
                n
              );
            }
            case He.Native:
            case He.ShadowDom:
              return new Wl(this.eventManager, this.sharedStylesHost, e, t);
            default:
              if (!this.rendererByCompId.has(t.id)) {
                const e = zl(t.id, t.styles, []);
                this.sharedStylesHost.addStyles(e),
                  this.rendererByCompId.set(t.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        }
        begin() {}
        end() {}
      }
      class Vl {
        constructor(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(e, t) {
          return t
            ? document.createElementNS(Ul[t] || t, e)
            : document.createElement(e);
        }
        createComment(e) {
          return document.createComment(e);
        }
        createText(e) {
          return document.createTextNode(e);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        insertBefore(e, t, n) {
          e && e.insertBefore(t, n);
        }
        removeChild(e, t) {
          e && e.removeChild(t);
        }
        selectRootElement(e, t) {
          let n = "string" == typeof e ? document.querySelector(e) : e;
          if (!n)
            throw new Error(`The selector "${e}" did not match any elements`);
          return t || (n.textContent = ""), n;
        }
        parentNode(e) {
          return e.parentNode;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        setAttribute(e, t, n, r) {
          if (r) {
            t = r + ":" + t;
            const s = Ul[r];
            s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n);
          } else e.setAttribute(t, n);
        }
        removeAttribute(e, t, n) {
          if (n) {
            const r = Ul[n];
            r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`);
          } else e.removeAttribute(t);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        setStyle(e, t, n, r) {
          r & sn.DashCase
            ? e.style.setProperty(t, n, r & sn.Important ? "important" : "")
            : (e.style[t] = n);
        }
        removeStyle(e, t, n) {
          n & sn.DashCase ? e.style.removeProperty(t) : (e.style[t] = "");
        }
        setProperty(e, t, n) {
          ql(t, "property"), (e[t] = n);
        }
        setValue(e, t) {
          e.nodeValue = t;
        }
        listen(e, t, n) {
          return (
            ql(t, "listener"),
            "string" == typeof e
              ? this.eventManager.addGlobalEventListener(e, t, Hl(n))
              : this.eventManager.addEventListener(e, t, Hl(n))
          );
        }
      }
      const Bl = (() => "@".charCodeAt(0))();
      function ql(e, t) {
        if (e.charCodeAt(0) === Bl)
          throw new Error(
            `Found the synthetic ${t} ${e}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class Ql extends Vl {
        constructor(e, t, n, r) {
          super(e), (this.component = n);
          const s = zl(r + "-" + n.id, n.styles, []);
          t.addStyles(s),
            (this.contentAttr = "_ngcontent-%COMP%".replace(
              jl,
              r + "-" + n.id
            )),
            (this.hostAttr = (function (e) {
              return "_nghost-%COMP%".replace(jl, e);
            })(r + "-" + n.id));
        }
        applyToHost(e) {
          super.setAttribute(e, this.hostAttr, "");
        }
        createElement(e, t) {
          const n = super.createElement(e, t);
          return super.setAttribute(n, this.contentAttr, ""), n;
        }
      }
      class Wl extends Vl {
        constructor(e, t, n, r) {
          super(e),
            (this.sharedStylesHost = t),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === He.ShadowDom
                ? n.attachShadow({ mode: "open" })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = zl(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const e = document.createElement("style");
            (e.textContent = s[i]), this.shadowRoot.appendChild(e);
          }
        }
        nodeOrShadowRoot(e) {
          return e === this.hostEl ? this.shadowRoot : e;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(e, t) {
          return super.appendChild(this.nodeOrShadowRoot(e), t);
        }
        insertBefore(e, t, n) {
          return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
        }
        removeChild(e, t) {
          return super.removeChild(this.nodeOrShadowRoot(e), t);
        }
        parentNode(e) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(e))
          );
        }
      }
      const Kl = (() =>
          ("undefined" != typeof Zone && Zone.__symbol__) ||
          function (e) {
            return "__zone_symbol__" + e;
          })(),
        Zl = Kl("addEventListener"),
        Gl = Kl("removeEventListener"),
        Yl = {},
        Xl = "__zone_symbol__propagationStopped",
        Jl = (() => {
          const e =
            "undefined" != typeof Zone && Zone[Kl("BLACK_LISTED_EVENTS")];
          if (e) {
            const t = {};
            return (
              e.forEach((e) => {
                t[e] = e;
              }),
              t
            );
          }
        })(),
        ec = function (e) {
          return !!Jl && Jl.hasOwnProperty(e);
        },
        tc = function (e) {
          const t = Yl[e.type];
          if (!t) return;
          const n = this[t];
          if (!n) return;
          const r = [e];
          if (1 === n.length) {
            const e = n[0];
            return e.zone !== Zone.current
              ? e.zone.run(e.handler, this, r)
              : e.handler.apply(this, r);
          }
          {
            const t = n.slice();
            for (let n = 0; n < t.length && !0 !== e[Xl]; n++) {
              const e = t[n];
              e.zone !== Zone.current
                ? e.zone.run(e.handler, this, r)
                : e.handler.apply(this, r);
            }
          }
        };
      class nc extends Ml {
        constructor(e, t, n) {
          super(e),
            (this.ngZone = t),
            (n &&
              (function (e) {
                return "server" === e;
              })(n)) ||
              this.patchEvent();
        }
        patchEvent() {
          if ("undefined" == typeof Event || !Event || !Event.prototype) return;
          if (Event.prototype.__zone_symbol__stopImmediatePropagation) return;
          const e = (Event.prototype.__zone_symbol__stopImmediatePropagation =
            Event.prototype.stopImmediatePropagation);
          Event.prototype.stopImmediatePropagation = function () {
            this && (this[Xl] = !0), e && e.apply(this, arguments);
          };
        }
        supports(e) {
          return !0;
        }
        addEventListener(e, t, n) {
          let r = n;
          if (!e[Zl] || (qs.isInAngularZone() && !ec(t)))
            e.addEventListener(t, r, !1);
          else {
            let n = Yl[t];
            n || (n = Yl[t] = Kl("ANGULAR" + t + "FALSE"));
            let s = e[n];
            const i = s && s.length > 0;
            s || (s = e[n] = []);
            const o = ec(t) ? Zone.root : Zone.current;
            if (0 === s.length) s.push({ zone: o, handler: r });
            else {
              let e = !1;
              for (let t = 0; t < s.length; t++)
                if (s[t].handler === r) {
                  e = !0;
                  break;
                }
              e || s.push({ zone: o, handler: r });
            }
            i || e[Zl](t, tc, !1);
          }
          return () => this.removeEventListener(e, t, r);
        }
        removeEventListener(e, t, n) {
          let r = e[Gl];
          if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
          let s = Yl[t],
            i = s && e[s];
          if (!i) return e.removeEventListener.apply(e, [t, n, !1]);
          let o = !1;
          for (let a = 0; a < i.length; a++)
            if (i[a].handler === n) {
              (o = !0), i.splice(a, 1);
              break;
            }
          o
            ? 0 === i.length && r.apply(e, [t, tc, !1])
            : e.removeEventListener.apply(e, [t, n, !1]);
        }
      }
      const rc = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0,
        },
        sc = new ke("HammerGestureConfig"),
        ic = new ke("HammerLoader");
      class oc {
        constructor() {
          (this.events = []), (this.overrides = {});
        }
        buildHammer(e) {
          const t = new Hammer(e, this.options);
          t.get("pinch").set({ enable: !0 }),
            t.get("rotate").set({ enable: !0 });
          for (const n in this.overrides) t.get(n).set(this.overrides[n]);
          return t;
        }
      }
      class ac extends Ml {
        constructor(e, t, n, r) {
          super(e), (this._config = t), (this.console = n), (this.loader = r);
        }
        supports(e) {
          return !(
            (!rc.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)) ||
            (!window.Hammer &&
              !this.loader &&
              (this.console.warn(
                `The "${e}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`
              ),
              1))
          );
        }
        addEventListener(e, t, n) {
          const r = this.manager.getZone();
          if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
            let r = !1,
              s = () => {
                r = !0;
              };
            return (
              this.loader()
                .then(() => {
                  if (!window.Hammer)
                    return (
                      this.console.warn(
                        "The custom HAMMER_LOADER completed, but Hammer.JS is not present."
                      ),
                      void (s = () => {})
                    );
                  r || (s = this.addEventListener(e, t, n));
                })
                .catch(() => {
                  this.console.warn(
                    `The "${t}" event cannot be bound because the custom Hammer.JS loader failed.`
                  ),
                    (s = () => {});
                }),
              () => {
                s();
              }
            );
          }
          return r.runOutsideAngular(() => {
            const s = this._config.buildHammer(e),
              i = function (e) {
                r.runGuarded(function () {
                  n(e);
                });
              };
            return (
              s.on(t, i),
              () => {
                s.off(t, i), "function" == typeof s.destroy && s.destroy();
              }
            );
          });
        }
        isCustomEvent(e) {
          return this._config.events.indexOf(e) > -1;
        }
      }
      const lc = ["alt", "control", "meta", "shift"],
        cc = {
          alt: (e) => e.altKey,
          control: (e) => e.ctrlKey,
          meta: (e) => e.metaKey,
          shift: (e) => e.shiftKey,
        };
      class uc extends Ml {
        constructor(e) {
          super(e);
        }
        supports(e) {
          return null != uc.parseEventName(e);
        }
        addEventListener(e, t, n) {
          const r = uc.parseEventName(t),
            s = uc.eventCallback(r.fullKey, n, this.manager.getZone());
          return this.manager
            .getZone()
            .runOutsideAngular(() => yl().onAndCancel(e, r.domEventName, s));
        }
        static parseEventName(e) {
          const t = e.toLowerCase().split("."),
            n = t.shift();
          if (0 === t.length || ("keydown" !== n && "keyup" !== n)) return null;
          const r = uc._normalizeKey(t.pop());
          let s = "";
          if (
            (lc.forEach((e) => {
              const n = t.indexOf(e);
              n > -1 && (t.splice(n, 1), (s += e + "."));
            }),
            (s += r),
            0 != t.length || 0 === r.length)
          )
            return null;
          const i = {};
          return (i.domEventName = n), (i.fullKey = s), i;
        }
        static getEventFullKey(e) {
          let t = "",
            n = yl().getEventKey(e);
          return (
            (n = n.toLowerCase()),
            " " === n ? (n = "space") : "." === n && (n = "dot"),
            lc.forEach((r) => {
              r != n && (0, cc[r])(e) && (t += r + ".");
            }),
            (t += n),
            t
          );
        }
        static eventCallback(e, t, n) {
          return (r) => {
            uc.getEventFullKey(r) === e && n.runGuarded(() => t(r));
          };
        }
        static _normalizeKey(e) {
          switch (e) {
            case "esc":
              return "escape";
            default:
              return e;
          }
        }
      }
      class hc {}
      class dc extends hc {
        constructor(e) {
          super(), (this._doc = e);
        }
        sanitize(e, t) {
          if (null == t) return null;
          switch (e) {
            case yt.NONE:
              return t;
            case yt.HTML:
              return t instanceof fc
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, "HTML"),
                  (function (e, t) {
                    let n = null;
                    try {
                      mt = mt || new Ge(e);
                      let r = t ? String(t) : "";
                      n = mt.getInertBodyElement(r);
                      let s = 5,
                        i = r;
                      do {
                        if (0 === s)
                          throw new Error(
                            "Failed to sanitize html because the input is unstable"
                          );
                        s--,
                          (r = i),
                          (i = n.innerHTML),
                          (n = mt.getInertBodyElement(r));
                      } while (r !== i);
                      const o = new ht(),
                        a = o.sanitizeChildren(gt(n) || n);
                      return (
                        Ze() &&
                          o.sanitizedSomething &&
                          console.warn(
                            "WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"
                          ),
                        a
                      );
                    } finally {
                      if (n) {
                        const e = gt(n) || n;
                        for (; e.firstChild; ) e.removeChild(e.firstChild);
                      }
                    }
                  })(this._doc, String(t)));
            case yt.STYLE:
              return t instanceof mc
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, "Style"),
                  (function (e) {
                    if (!(e = String(e).trim())) return "";
                    const t = e.match(bt);
                    return (t && Je(t[1]) === t[1]) ||
                      (e.match(vt) &&
                        (function (e) {
                          let t = !0,
                            n = !0;
                          for (let r = 0; r < e.length; r++) {
                            const s = e.charAt(r);
                            "'" === s && n
                              ? (t = !t)
                              : '"' === s && t && (n = !n);
                          }
                          return t && n;
                        })(e))
                      ? e
                      : (Ze() &&
                          console.warn(
                            `WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`
                          ),
                        "unsafe");
                  })(t));
            case yt.SCRIPT:
              if (t instanceof gc)
                return t.changingThisBreaksApplicationSecurity;
              throw (
                (this.checkNotSafeValue(t, "Script"),
                new Error("unsafe value used in a script context"))
              );
            case yt.URL:
              return t instanceof _c || t instanceof yc
                ? t.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(t, "URL"), Je(String(t)));
            case yt.RESOURCE_URL:
              if (t instanceof _c)
                return t.changingThisBreaksApplicationSecurity;
              throw (
                (this.checkNotSafeValue(t, "ResourceURL"),
                new Error(
                  "unsafe value used in a resource URL context (see http://g.co/ng/security#xss)"
                ))
              );
            default:
              throw new Error(
                `Unexpected SecurityContext ${e} (see http://g.co/ng/security#xss)`
              );
          }
        }
        checkNotSafeValue(e, t) {
          if (e instanceof pc)
            throw new Error(
              `Required a safe ${t}, got a ${e.getTypeName()} (see http://g.co/ng/security#xss)`
            );
        }
        bypassSecurityTrustHtml(e) {
          return new fc(e);
        }
        bypassSecurityTrustStyle(e) {
          return new mc(e);
        }
        bypassSecurityTrustScript(e) {
          return new gc(e);
        }
        bypassSecurityTrustUrl(e) {
          return new yc(e);
        }
        bypassSecurityTrustResourceUrl(e) {
          return new _c(e);
        }
      }
      class pc {
        constructor(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        toString() {
          return (
            "SafeValue must use [property]=binding: " +
            this.changingThisBreaksApplicationSecurity +
            " (see http://g.co/ng/security#xss)"
          );
        }
      }
      class fc extends pc {
        getTypeName() {
          return "HTML";
        }
      }
      class mc extends pc {
        getTypeName() {
          return "Style";
        }
      }
      class gc extends pc {
        getTypeName() {
          return "Script";
        }
      }
      class yc extends pc {
        getTypeName() {
          return "URL";
        }
      }
      class _c extends pc {
        getTypeName() {
          return "ResourceURL";
        }
      }
      const vc = ii(Ei, "browser", [
        { provide: Ts, useValue: "browser" },
        {
          provide: Cs,
          useValue: function () {
            El.makeCurrent(), Al.init();
          },
          multi: !0,
        },
        {
          provide: ta,
          useClass: class extends ta {
            constructor(e) {
              super(), (this._doc = e), this._init();
            }
            _init() {
              (this.location = yl().getLocation()),
                (this._history = yl().getHistory());
            }
            getBaseHrefFromDOM() {
              return yl().getBaseHref(this._doc);
            }
            onPopState(e) {
              yl()
                .getGlobalEventTarget(this._doc, "window")
                .addEventListener("popstate", e, !1);
            }
            onHashChange(e) {
              yl()
                .getGlobalEventTarget(this._doc, "window")
                .addEventListener("hashchange", e, !1);
            }
            get href() {
              return this.location.href;
            }
            get protocol() {
              return this.location.protocol;
            }
            get hostname() {
              return this.location.hostname;
            }
            get port() {
              return this.location.port;
            }
            get pathname() {
              return this.location.pathname;
            }
            get search() {
              return this.location.search;
            }
            get hash() {
              return this.location.hash;
            }
            set pathname(e) {
              this.location.pathname = e;
            }
            pushState(e, t, n) {
              Tl()
                ? this._history.pushState(e, t, n)
                : (this.location.hash = n);
            }
            replaceState(e, t, n) {
              Tl()
                ? this._history.replaceState(e, t, n)
                : (this.location.hash = n);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            getState() {
              return this._history.state;
            }
          },
          deps: [_a],
        },
        {
          provide: _a,
          useFactory: function () {
            return document;
          },
          deps: [],
        },
      ]);
      function bc() {
        return new Qe();
      }
      class wc {
        constructor(e) {
          if (e)
            throw new Error(
              "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
            );
        }
        static withServerTransition(e) {
          return {
            ngModule: wc,
            providers: [
              { provide: Ss, useValue: e.appId },
              { provide: xl, useExisting: Ss },
              Il,
            ],
          };
        }
      }
      "undefined" != typeof window && window;
      class Ec {
        constructor(e, t) {
          (this.id = e), (this.url = t);
        }
      }
      class Sc extends Ec {
        constructor(e, t, n = "imperative", r = null) {
          super(e, t), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Cc extends Ec {
        constructor(e, t, n) {
          super(e, t), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class Tc extends Ec {
        constructor(e, t, n) {
          super(e, t), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class xc extends Ec {
        constructor(e, t, n) {
          super(e, t), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class kc extends Ec {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ic extends Ec {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ac extends Ec {
        constructor(e, t, n, r, s) {
          super(e, t),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Nc extends Ec {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Rc extends Ec {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Pc {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Oc {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Dc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Mc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Fc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Lc {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class Uc {
        constructor(e, t, n) {
          (this.routerEvent = e), (this.position = t), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class jc {}
      class zc {
        constructor(e) {
          this.params = e || {};
        }
        has(e) {
          return this.params.hasOwnProperty(e);
        }
        get(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Hc(e) {
        return new zc(e);
      }
      function $c(e) {
        const t = Error("NavigationCancelingError: " + e);
        return (t.ngNavigationCancelingError = !0), t;
      }
      function Vc(e, t, n) {
        const r = n.path.split("/");
        if (r.length > e.length) return null;
        if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length))
          return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const t = r[i],
            n = e[i];
          if (t.startsWith(":")) s[t.substring(1)] = n;
          else if (t !== n.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: s };
      }
      class Bc {
        constructor(e, t) {
          (this.routes = e), (this.module = t);
        }
      }
      function qc(e, t = "") {
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          Qc(r, Wc(t, r));
        }
      }
      function Qc(e, t) {
        if (!e)
          throw new Error(
            `\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(e))
          throw new Error(
            `Invalid configuration of route '${t}': Array cannot be specified`
          );
        if (
          !e.component &&
          !e.children &&
          !e.loadChildren &&
          e.outlet &&
          "primary" !== e.outlet
        )
          throw new Error(
            `Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (e.redirectTo && e.children)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and children cannot be used together`
          );
        if (e.redirectTo && e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`
          );
        if (e.children && e.loadChildren)
          throw new Error(
            `Invalid configuration of route '${t}': children and loadChildren cannot be used together`
          );
        if (e.redirectTo && e.component)
          throw new Error(
            `Invalid configuration of route '${t}': redirectTo and component cannot be used together`
          );
        if (e.path && e.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': path and matcher cannot be used together`
          );
        if (
          void 0 === e.redirectTo &&
          !e.component &&
          !e.children &&
          !e.loadChildren
        )
          throw new Error(
            `Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === e.path && void 0 === e.matcher)
          throw new Error(
            `Invalid configuration of route '${t}': routes must have either a path or a matcher specified`
          );
        if ("string" == typeof e.path && "/" === e.path.charAt(0))
          throw new Error(
            `Invalid configuration of route '${t}': path cannot start with a slash`
          );
        if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (
          void 0 !== e.pathMatch &&
          "full" !== e.pathMatch &&
          "prefix" !== e.pathMatch
        )
          throw new Error(
            `Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`
          );
        e.children && qc(e.children, t);
      }
      function Wc(e, t) {
        return t
          ? e || t.path
            ? e && !t.path
              ? e + "/"
              : !e && t.path
              ? t.path
              : `${e}/${t.path}`
            : ""
          : e;
      }
      function Kc(e) {
        const t = e.children && e.children.map(Kc),
          n = t ? Object.assign({}, e, { children: t }) : Object.assign({}, e);
        return (
          !n.component &&
            (t || n.loadChildren) &&
            n.outlet &&
            "primary" !== n.outlet &&
            (n.component = jc),
          n
        );
      }
      function Zc(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++)
          if (((s = n[i]), e[s] !== t[s])) return !1;
        return !0;
      }
      function Gc(e) {
        return Array.prototype.concat.apply([], e);
      }
      function Yc(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Xc(e, t) {
        for (const n in e) e.hasOwnProperty(n) && t(e[n], n);
      }
      function Jc(e) {
        return Bt(e) ? e : Vt(e) ? Q(Promise.resolve(e)) : Ta(e);
      }
      function eu(e, t, n) {
        return n
          ? (function (e, t) {
              return Zc(e, t);
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                if (!su(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!t.children[r]) return !1;
                  if (!e(t.children[r], n.children[r])) return !1;
                }
                return !0;
              })(e.root, t.root)
          : (function (e, t) {
              return (
                Object.keys(t).length <= Object.keys(e).length &&
                Object.keys(t).every((n) => t[n] === e[n])
              );
            })(e.queryParams, t.queryParams) &&
              (function e(t, n) {
                return (function t(n, r, s) {
                  if (n.segments.length > s.length)
                    return (
                      !!su(n.segments.slice(0, s.length), s) && !r.hasChildren()
                    );
                  if (n.segments.length === s.length) {
                    if (!su(n.segments, s)) return !1;
                    for (const t in r.children) {
                      if (!n.children[t]) return !1;
                      if (!e(n.children[t], r.children[t])) return !1;
                    }
                    return !0;
                  }
                  {
                    const e = s.slice(0, n.segments.length),
                      i = s.slice(n.segments.length);
                    return (
                      !!su(n.segments, e) &&
                      !!n.children.primary &&
                      t(n.children.primary, r, i)
                    );
                  }
                })(t, n, n.segments);
              })(e.root, t.root);
      }
      class tu {
        constructor(e, t, n) {
          (this.root = e), (this.queryParams = t), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Hc(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return lu.serialize(this);
        }
      }
      class nu {
        constructor(e, t) {
          (this.segments = e),
            (this.children = t),
            (this.parent = null),
            Xc(t, (e, t) => (e.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return cu(this);
        }
      }
      class ru {
        constructor(e, t) {
          (this.path = e), (this.parameters = t);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = Hc(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return mu(this);
        }
      }
      function su(e, t) {
        return e.length === t.length && e.every((e, n) => e.path === t[n].path);
      }
      function iu(e, t) {
        let n = [];
        return (
          Xc(e.children, (e, r) => {
            "primary" === r && (n = n.concat(t(e, r)));
          }),
          Xc(e.children, (e, r) => {
            "primary" !== r && (n = n.concat(t(e, r)));
          }),
          n
        );
      }
      class ou {}
      class au {
        parse(e) {
          const t = new bu(e);
          return new tu(
            t.parseRootSegment(),
            t.parseQueryParams(),
            t.parseFragment()
          );
        }
        serialize(e) {
          return `${
            "/" +
            (function e(t, n) {
              if (!t.hasChildren()) return cu(t);
              if (n) {
                const n = t.children.primary ? e(t.children.primary, !1) : "",
                  r = [];
                return (
                  Xc(t.children, (t, n) => {
                    "primary" !== n && r.push(`${n}:${e(t, !1)}`);
                  }),
                  r.length > 0 ? `${n}(${r.join("//")})` : n
                );
              }
              {
                const n = iu(t, (n, r) =>
                  "primary" === r
                    ? [e(t.children.primary, !1)]
                    : [`${r}:${e(n, !1)}`]
                );
                return `${cu(t)}/(${n.join("//")})`;
              }
            })(e.root, !0)
          }${(function (e) {
            const t = Object.keys(e).map((t) => {
              const n = e[t];
              return Array.isArray(n)
                ? n.map((e) => `${hu(t)}=${hu(e)}`).join("&")
                : `${hu(t)}=${hu(n)}`;
            });
            return t.length ? "?" + t.join("&") : "";
          })(e.queryParams)}${
            "string" == typeof e.fragment ? "#" + encodeURI(e.fragment) : ""
          }`;
        }
      }
      const lu = new au();
      function cu(e) {
        return e.segments.map((e) => mu(e)).join("/");
      }
      function uu(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function hu(e) {
        return uu(e).replace(/%3B/gi, ";");
      }
      function du(e) {
        return uu(e)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function pu(e) {
        return decodeURIComponent(e);
      }
      function fu(e) {
        return pu(e.replace(/\+/g, "%20"));
      }
      function mu(e) {
        return `${du(e.path)}${
          ((t = e.parameters),
          Object.keys(t)
            .map((e) => `;${du(e)}=${du(t[e])}`)
            .join(""))
        }`;
        var t;
      }
      const gu = /^[^\/()?;=#]+/;
      function yu(e) {
        const t = e.match(gu);
        return t ? t[0] : "";
      }
      const _u = /^[^=?&#]+/,
        vu = /^[^?&#]+/;
      class bu {
        constructor(e) {
          (this.url = e), (this.remaining = e);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new nu([], {})
              : new nu([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const e = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(e);
            } while (this.consumeOptional("&"));
          return e;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const e = [];
          for (
            this.peekStartsWith("(") || e.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), e.push(this.parseSegment());
          let t = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (t = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith("(") && (n = this.parseParens(!1)),
            (e.length > 0 || Object.keys(t).length > 0) &&
              (n.primary = new nu(e, t)),
            n
          );
        }
        parseSegment() {
          const e = yu(this.remaining);
          if ("" === e && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(e), new ru(pu(e), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const e = {};
          for (; this.consumeOptional(";"); ) this.parseParam(e);
          return e;
        }
        parseParam(e) {
          const t = yu(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = "";
          if (this.consumeOptional("=")) {
            const e = yu(this.remaining);
            e && ((n = e), this.capture(n));
          }
          e[pu(t)] = pu(n);
        }
        parseQueryParam(e) {
          const t = (function (e) {
            const t = e.match(_u);
            return t ? t[0] : "";
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = "";
          if (this.consumeOptional("=")) {
            const e = (function (e) {
              const t = e.match(vu);
              return t ? t[0] : "";
            })(this.remaining);
            e && ((n = e), this.capture(n));
          }
          const r = fu(t),
            s = fu(n);
          if (e.hasOwnProperty(r)) {
            let t = e[r];
            Array.isArray(t) || ((t = [t]), (e[r] = t)), t.push(s);
          } else e[r] = s;
        }
        parseParens(e) {
          const t = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const n = yu(this.remaining),
              r = this.remaining[n.length];
            if ("/" !== r && ")" !== r && ";" !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s = void 0;
            n.indexOf(":") > -1
              ? ((s = n.substr(0, n.indexOf(":"))),
                this.capture(s),
                this.capture(":"))
              : e && (s = "primary");
            const i = this.parseChildren();
            (t[s] = 1 === Object.keys(i).length ? i.primary : new nu([], i)),
              this.consumeOptional("//");
          }
          return t;
        }
        peekStartsWith(e) {
          return this.remaining.startsWith(e);
        }
        consumeOptional(e) {
          return (
            !!this.peekStartsWith(e) &&
            ((this.remaining = this.remaining.substring(e.length)), !0)
          );
        }
        capture(e) {
          if (!this.consumeOptional(e)) throw new Error(`Expected "${e}".`);
        }
      }
      class wu {
        constructor(e) {
          this._root = e;
        }
        get root() {
          return this._root.value;
        }
        parent(e) {
          const t = this.pathFromRoot(e);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(e) {
          const t = Eu(e, this._root);
          return t ? t.children.map((e) => e.value) : [];
        }
        firstChild(e) {
          const t = Eu(e, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(e) {
          const t = Su(e, this._root);
          return t.length < 2
            ? []
            : t[t.length - 2].children
                .map((e) => e.value)
                .filter((t) => t !== e);
        }
        pathFromRoot(e) {
          return Su(e, this._root).map((e) => e.value);
        }
      }
      function Eu(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const t = Eu(e, n);
          if (t) return t;
        }
        return null;
      }
      function Su(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = Su(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class Cu {
        constructor(e, t) {
          (this.value = e), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Tu(e) {
        const t = {};
        return e && e.children.forEach((e) => (t[e.value.outlet] = e)), t;
      }
      class xu extends wu {
        constructor(e, t) {
          super(e), (this.snapshot = t), Pu(this, e);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function ku(e, t) {
        const n = (function (e, t) {
            const n = new Nu(
              [],
              {},
              {},
              "",
              {},
              "primary",
              t,
              null,
              e.root,
              -1,
              {}
            );
            return new Ru("", new Cu(n, []));
          })(e, t),
          r = new xa([new ru("", {})]),
          s = new xa({}),
          i = new xa({}),
          o = new xa({}),
          a = new xa(""),
          l = new Iu(r, s, o, a, i, "primary", t, n.root);
        return (l.snapshot = n.root), new xu(new Cu(l, []), n);
      }
      class Iu {
        constructor(e, t, n, r, s, i, o, a) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe($((e) => Hc(e)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe($((e) => Hc(e)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Au(e, t = "emptyOnly") {
        const n = e.pathFromRoot;
        let r = 0;
        if ("always" !== t)
          for (r = n.length - 1; r >= 1; ) {
            const e = n[r],
              t = n[r - 1];
            if (e.routeConfig && "" === e.routeConfig.path) r--;
            else {
              if (t.component) break;
              r--;
            }
          }
        return (function (e) {
          return e.reduce(
            (e, t) => ({
              params: Object.assign({}, e.params, t.params),
              data: Object.assign({}, e.data, t.data),
              resolve: Object.assign({}, e.resolve, t._resolvedData),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class Nu {
        constructor(e, t, n, r, s, i, o, a, l, c, u) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = c),
            (this._resolve = u);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = Hc(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Hc(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((e) => e.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class Ru extends wu {
        constructor(e, t) {
          super(t), (this.url = e), Pu(this, t);
        }
        toString() {
          return Ou(this._root);
        }
      }
      function Pu(e, t) {
        (t.value._routerState = e), t.children.forEach((t) => Pu(e, t));
      }
      function Ou(e) {
        const t =
          e.children.length > 0 ? ` { ${e.children.map(Ou).join(", ")} } ` : "";
        return `${e.value}${t}`;
      }
      function Du(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            Zc(t.queryParams, n.queryParams) ||
              e.queryParams.next(n.queryParams),
            t.fragment !== n.fragment && e.fragment.next(n.fragment),
            Zc(t.params, n.params) || e.params.next(n.params),
            (function (e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n) if (!Zc(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.url.next(n.url),
            Zc(t.data, n.data) || e.data.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function Mu(e, t) {
        var n, r;
        return (
          Zc(e.params, t.params) &&
          su((n = e.url), (r = t.url)) &&
          n.every((e, t) => Zc(e.parameters, r[t].parameters)) &&
          !(!e.parent != !t.parent) &&
          (!e.parent || Mu(e.parent, t.parent))
        );
      }
      function Fu(e) {
        return (
          "object" == typeof e && null != e && !e.outlets && !e.segmentPath
        );
      }
      function Lu(e, t, n, r, s) {
        let i = {};
        return (
          r &&
            Xc(r, (e, t) => {
              i[t] = Array.isArray(e) ? e.map((e) => "" + e) : "" + e;
            }),
          new tu(
            n.root === e
              ? t
              : (function e(t, n, r) {
                  const s = {};
                  return (
                    Xc(t.children, (t, i) => {
                      s[i] = t === n ? r : e(t, n, r);
                    }),
                    new nu(t.segments, s)
                  );
                })(n.root, e, t),
            i,
            s
          )
        );
      }
      class Uu {
        constructor(e, t, n) {
          if (
            ((this.isAbsolute = e),
            (this.numberOfDoubleDots = t),
            (this.commands = n),
            e && n.length > 0 && Fu(n[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const r = n.find(
            (e) => "object" == typeof e && null != e && e.outlets
          );
          if (r && r !== Yc(n))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class ju {
        constructor(e, t, n) {
          (this.segmentGroup = e), (this.processChildren = t), (this.index = n);
        }
      }
      function zu(e) {
        return "object" == typeof e && null != e && e.outlets
          ? e.outlets.primary
          : "" + e;
      }
      function Hu(e, t, n) {
        if (
          (e || (e = new nu([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return $u(e, t, n);
        const r = (function (e, t, n) {
            let r = 0,
              s = t;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < e.segments.length; ) {
              if (r >= n.length) return i;
              const t = e.segments[s],
                o = zu(n[r]),
                a = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === o) break;
              if (o && a && "object" == typeof a && void 0 === a.outlets) {
                if (!Qu(o, a, t)) return i;
                r += 2;
              } else {
                if (!Qu(o, {}, t)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(e, t, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const t = new nu(e.segments.slice(0, r.pathIndex), {});
          return (
            (t.children.primary = new nu(
              e.segments.slice(r.pathIndex),
              e.children
            )),
            $u(t, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new nu(e.segments, {})
          : r.match && !e.hasChildren()
          ? Vu(e, t, n)
          : r.match
          ? $u(e, 0, s)
          : Vu(e, t, n);
      }
      function $u(e, t, n) {
        if (0 === n.length) return new nu(e.segments, {});
        {
          const r = (function (e) {
              return "object" != typeof e[0] || void 0 === e[0].outlets
                ? { primary: e }
                : e[0].outlets;
            })(n),
            s = {};
          return (
            Xc(r, (n, r) => {
              null !== n && (s[r] = Hu(e.children[r], t, n));
            }),
            Xc(e.children, (e, t) => {
              void 0 === r[t] && (s[t] = e);
            }),
            new nu(e.segments, s)
          );
        }
      }
      function Vu(e, t, n) {
        const r = e.segments.slice(0, t);
        let s = 0;
        for (; s < n.length; ) {
          if ("object" == typeof n[s] && void 0 !== n[s].outlets) {
            const e = Bu(n[s].outlets);
            return new nu(r, e);
          }
          if (0 === s && Fu(n[0])) {
            r.push(new ru(e.segments[t].path, n[0])), s++;
            continue;
          }
          const i = zu(n[s]),
            o = s < n.length - 1 ? n[s + 1] : null;
          i && o && Fu(o)
            ? (r.push(new ru(i, qu(o))), (s += 2))
            : (r.push(new ru(i, {})), s++);
        }
        return new nu(r, {});
      }
      function Bu(e) {
        const t = {};
        return (
          Xc(e, (e, n) => {
            null !== e && (t[n] = Vu(new nu([], {}), 0, e));
          }),
          t
        );
      }
      function qu(e) {
        const t = {};
        return Xc(e, (e, n) => (t[n] = "" + e)), t;
      }
      function Qu(e, t, n) {
        return e == n.path && Zc(t, n.parameters);
      }
      class Wu {
        constructor(e, t, n, r) {
          (this.routeReuseStrategy = e),
            (this.futureState = t),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(e) {
          const t = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, n, e),
            Du(this.futureState.root),
            this.activateChildRoutes(t, n, e);
        }
        deactivateChildRoutes(e, t, n) {
          const r = Tu(t);
          e.children.forEach((e) => {
            const t = e.value.outlet;
            this.deactivateRoutes(e, r[t], n), delete r[t];
          }),
            Xc(r, (e, t) => {
              this.deactivateRouteAndItsChildren(e, n);
            });
        }
        deactivateRoutes(e, t, n) {
          const r = e.value,
            s = t ? t.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(e, t, s.children);
            } else this.deactivateChildRoutes(e, t, n);
          else s && this.deactivateRouteAndItsChildren(t, n);
        }
        deactivateRouteAndItsChildren(e, t) {
          this.routeReuseStrategy.shouldDetach(e.value.snapshot)
            ? this.detachAndStoreRouteSubtree(e, t)
            : this.deactivateRouteAndOutlet(e, t);
        }
        detachAndStoreRouteSubtree(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n && n.outlet) {
            const t = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(e.value.snapshot, {
              componentRef: t,
              route: e,
              contexts: r,
            });
          }
        }
        deactivateRouteAndOutlet(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n) {
            const r = Tu(e),
              s = e.value.component ? n.children : t;
            Xc(r, (e, t) => this.deactivateRouteAndItsChildren(e, s)),
              n.outlet &&
                (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(e, t, n) {
          const r = Tu(t);
          e.children.forEach((e) => {
            this.activateRoutes(e, r[e.value.outlet], n),
              this.forwardEvent(new Lc(e.value.snapshot));
          }),
            e.children.length && this.forwardEvent(new Mc(e.value.snapshot));
        }
        activateRoutes(e, t, n) {
          const r = e.value,
            s = t ? t.value : null;
          if ((Du(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(e, t, s.children);
            } else this.activateChildRoutes(e, t, n);
          else if (r.component) {
            const t = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const e = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                t.children.onOutletReAttached(e.contexts),
                (t.attachRef = e.componentRef),
                (t.route = e.route.value),
                t.outlet && t.outlet.attach(e.componentRef, e.route.value),
                Ku(e.route);
            } else {
              const n = (function (e) {
                  for (let t = e.parent; t; t = t.parent) {
                    const e = t.routeConfig;
                    if (e && e._loadedConfig) return e._loadedConfig;
                    if (e && e.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (t.attachRef = null),
                (t.route = r),
                (t.resolver = s),
                t.outlet && t.outlet.activateWith(r, s),
                this.activateChildRoutes(e, null, t.children);
            }
          } else this.activateChildRoutes(e, null, n);
        }
      }
      function Ku(e) {
        Du(e.value), e.children.forEach(Ku);
      }
      function Zu(e) {
        return "function" == typeof e;
      }
      function Gu(e) {
        return e instanceof tu;
      }
      class Yu {
        constructor(e) {
          this.segmentGroup = e || null;
        }
      }
      class Xu {
        constructor(e) {
          this.urlTree = e;
        }
      }
      function Ju(e) {
        return new w((t) => t.error(new Yu(e)));
      }
      function eh(e) {
        return new w((t) => t.error(new Xu(e)));
      }
      function th(e) {
        return new w((t) =>
          t.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${e}'`
            )
          )
        );
      }
      class nh {
        constructor(e, t, n, r, s) {
          (this.configLoader = t),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = s),
            (this.allowRedirects = !0),
            (this.ngModule = e.get(Le));
        }
        apply() {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            this.urlTree.root,
            "primary"
          )
            .pipe(
              $((e) =>
                this.createUrlTree(
                  e,
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              Ya((e) => {
                if (e instanceof Xu)
                  return (this.allowRedirects = !1), this.match(e.urlTree);
                if (e instanceof Yu) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        match(e) {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            e.root,
            "primary"
          )
            .pipe($((t) => this.createUrlTree(t, e.queryParams, e.fragment)))
            .pipe(
              Ya((e) => {
                if (e instanceof Yu) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        noMatchError(e) {
          return new Error(
            `Cannot match any routes. URL Segment: '${e.segmentGroup}'`
          );
        }
        createUrlTree(e, t, n) {
          const r = e.segments.length > 0 ? new nu([], { primary: e }) : e;
          return new tu(r, t, n);
        }
        expandSegmentGroup(e, t, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(e, t, n).pipe($((e) => new nu([], e)))
            : this.expandSegment(e, n, t, n.segments, r, !0);
        }
        expandChildren(e, t, n) {
          return (function (e, t) {
            if (0 === Object.keys(e).length) return Ta({});
            const n = [],
              r = [],
              s = {};
            return (
              Xc(e, (e, i) => {
                const o = t(i, e).pipe($((e) => (s[i] = e)));
                "primary" === i ? n.push(o) : r.push(o);
              }),
              Ta.apply(null, n.concat(r)).pipe(
                Oa(),
                Ga(),
                $(() => s)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(e, t, r, n));
        }
        expandSegment(e, t, n, r, s, i) {
          return Ta(...n).pipe(
            $((o) =>
              this.expandSegmentAgainstRoute(e, t, n, o, r, s, i).pipe(
                Ya((e) => {
                  if (e instanceof Yu) return Ta(null);
                  throw e;
                })
              )
            ),
            Oa(),
            rl((e) => !!e),
            Ya((e, n) => {
              if (e instanceof Ia || "EmptyError" === e.name) {
                if (this.noLeftoversInUrl(t, r, s)) return Ta(new nu([], {}));
                throw new Yu(t);
              }
              throw e;
            })
          );
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        expandSegmentAgainstRoute(e, t, n, r, s, i, o) {
          return oh(r) !== i
            ? Ju(t)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(e, t, r, s)
            : o && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i)
            : Ju(t);
        }
        expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i) {
          return "**" === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                e,
                t,
                n,
                r,
                s,
                i
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(e, t, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/")
            ? eh(s)
            : this.lineralizeSegments(n, s).pipe(
                W((n) => {
                  const s = new nu(n, {});
                  return this.expandSegment(e, s, t, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: l,
            positionalParamSegments: c,
          } = rh(t, r, s);
          if (!o) return Ju(t);
          const u = this.applyRedirectCommands(a, r.redirectTo, c);
          return r.redirectTo.startsWith("/")
            ? eh(u)
            : this.lineralizeSegments(r, u).pipe(
                W((r) =>
                  this.expandSegment(e, t, n, r.concat(s.slice(l)), i, !1)
                )
              );
        }
        matchSegmentAgainstRoute(e, t, n, r) {
          if ("**" === n.path)
            return n.loadChildren
              ? this.configLoader
                  .load(e.injector, n)
                  .pipe($((e) => ((n._loadedConfig = e), new nu(r, {}))))
              : Ta(new nu(r, {}));
          const { matched: s, consumedSegments: i, lastChild: o } = rh(t, n, r);
          if (!s) return Ju(t);
          const a = r.slice(o);
          return this.getChildConfig(e, n, r).pipe(
            W((e) => {
              const n = e.module,
                r = e.routes,
                { segmentGroup: s, slicedSegments: o } = (function (
                  e,
                  t,
                  n,
                  r
                ) {
                  return n.length > 0 &&
                    (function (e, t, n) {
                      return n.some((n) => ih(e, t, n) && "primary" !== oh(n));
                    })(e, n, r)
                    ? {
                        segmentGroup: sh(
                          new nu(
                            t,
                            (function (e, t) {
                              const n = {};
                              n.primary = t;
                              for (const r of e)
                                "" === r.path &&
                                  "primary" !== oh(r) &&
                                  (n[oh(r)] = new nu([], {}));
                              return n;
                            })(r, new nu(n, e.children))
                          )
                        ),
                        slicedSegments: [],
                      }
                    : 0 === n.length &&
                      (function (e, t, n) {
                        return n.some((n) => ih(e, t, n));
                      })(e, n, r)
                    ? {
                        segmentGroup: sh(
                          new nu(
                            e.segments,
                            (function (e, t, n, r) {
                              const s = {};
                              for (const i of n)
                                ih(e, t, i) &&
                                  !r[oh(i)] &&
                                  (s[oh(i)] = new nu([], {}));
                              return Object.assign({}, r, s);
                            })(e, n, r, e.children)
                          )
                        ),
                        slicedSegments: n,
                      }
                    : { segmentGroup: e, slicedSegments: n };
                })(t, i, a, r);
              return 0 === o.length && s.hasChildren()
                ? this.expandChildren(n, r, s).pipe($((e) => new nu(i, e)))
                : 0 === r.length && 0 === o.length
                ? Ta(new nu(i, {}))
                : this.expandSegment(n, s, r, o, "primary", !0).pipe(
                    $((e) => new nu(i.concat(e.segments), e.children))
                  );
            })
          );
        }
        getChildConfig(e, t, n) {
          return t.children
            ? Ta(new Bc(t.children, e))
            : t.loadChildren
            ? void 0 !== t._loadedConfig
              ? Ta(t._loadedConfig)
              : (function (e, t, n) {
                  const r = t.canLoad;
                  return r && 0 !== r.length
                    ? Q(r)
                        .pipe(
                          $((r) => {
                            const s = e.get(r);
                            let i;
                            if (
                              (function (e) {
                                return e && Zu(e.canLoad);
                              })(s)
                            )
                              i = s.canLoad(t, n);
                            else {
                              if (!Zu(s))
                                throw new Error("Invalid CanLoad guard");
                              i = s(t, n);
                            }
                            return Jc(i);
                          })
                        )
                        .pipe(
                          Oa(),
                          ((s = (e) => !0 === e),
                          (e) => e.lift(new sl(s, void 0, e)))
                        )
                    : Ta(!0);
                  var s;
                })(e.injector, t, n).pipe(
                  W((n) =>
                    n
                      ? this.configLoader
                          .load(e.injector, t)
                          .pipe($((e) => ((t._loadedConfig = e), e)))
                      : (function (e) {
                          return new w((t) =>
                            t.error(
                              $c(
                                `Cannot load children because the guard of the route "path: '${e.path}'" returned false`
                              )
                            )
                          );
                        })(t)
                  )
                )
            : Ta(new Bc([], e));
        }
        lineralizeSegments(e, t) {
          let n = [],
            r = t.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Ta(n);
            if (r.numberOfChildren > 1 || !r.children.primary)
              return th(e.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(e, t, n) {
          return this.applyRedirectCreatreUrlTree(
            t,
            this.urlSerializer.parse(t),
            e,
            n
          );
        }
        applyRedirectCreatreUrlTree(e, t, n, r) {
          const s = this.createSegmentGroup(e, t.root, n, r);
          return new tu(
            s,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment
          );
        }
        createQueryParams(e, t) {
          const n = {};
          return (
            Xc(e, (e, r) => {
              if ("string" == typeof e && e.startsWith(":")) {
                const s = e.substring(1);
                n[r] = t[s];
              } else n[r] = e;
            }),
            n
          );
        }
        createSegmentGroup(e, t, n, r) {
          const s = this.createSegments(e, t.segments, n, r);
          let i = {};
          return (
            Xc(t.children, (t, s) => {
              i[s] = this.createSegmentGroup(e, t, n, r);
            }),
            new nu(s, i)
          );
        }
        createSegments(e, t, n, r) {
          return t.map((t) =>
            t.path.startsWith(":")
              ? this.findPosParam(e, t, r)
              : this.findOrReturn(t, n)
          );
        }
        findPosParam(e, t, n) {
          const r = n[t.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${e}'. Cannot find '${t.path}'.`
            );
          return r;
        }
        findOrReturn(e, t) {
          let n = 0;
          for (const r of t) {
            if (r.path === e.path) return t.splice(n), r;
            n++;
          }
          return e;
        }
      }
      function rh(e, t, n) {
        if ("" === t.path)
          return "full" === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              };
        const r = (t.matcher || Vc)(n, e, t);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
      }
      function sh(e) {
        if (1 === e.numberOfChildren && e.children.primary) {
          const t = e.children.primary;
          return new nu(e.segments.concat(t.segments), t.children);
        }
        return e;
      }
      function ih(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function oh(e) {
        return e.outlet || "primary";
      }
      class ah {
        constructor(e) {
          (this.path = e), (this.route = this.path[this.path.length - 1]);
        }
      }
      class lh {
        constructor(e, t) {
          (this.component = e), (this.route = t);
        }
      }
      function ch(e, t, n) {
        const r = e._root;
        return (function e(
          t,
          n,
          r,
          s,
          i = { canDeactivateChecks: [], canActivateChecks: [] }
        ) {
          const o = Tu(n);
          return (
            t.children.forEach((t) => {
              !(function (
                t,
                n,
                r,
                s,
                i = { canDeactivateChecks: [], canActivateChecks: [] }
              ) {
                const o = t.value,
                  a = n ? n.value : null,
                  l = r ? r.getContext(t.value.outlet) : null;
                if (a && o.routeConfig === a.routeConfig) {
                  const c = (function (e, t, n) {
                    if ("function" == typeof n) return n(e, t);
                    switch (n) {
                      case "pathParamsChange":
                        return !su(e.url, t.url);
                      case "pathParamsOrQueryParamsChange":
                        return (
                          !su(e.url, t.url) || !Zc(e.queryParams, t.queryParams)
                        );
                      case "always":
                        return !0;
                      case "paramsOrQueryParamsChange":
                        return !Mu(e, t) || !Zc(e.queryParams, t.queryParams);
                      case "paramsChange":
                      default:
                        return !Mu(e, t);
                    }
                  })(a, o, o.routeConfig.runGuardsAndResolvers);
                  c
                    ? i.canActivateChecks.push(new ah(s))
                    : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
                    e(t, n, o.component ? (l ? l.children : null) : r, s, i),
                    c &&
                      i.canDeactivateChecks.push(
                        new lh((l && l.outlet && l.outlet.component) || null, a)
                      );
                } else
                  a && hh(n, l, i),
                    i.canActivateChecks.push(new ah(s)),
                    e(t, null, o.component ? (l ? l.children : null) : r, s, i);
              })(t, o[t.value.outlet], r, s.concat([t.value]), i),
                delete o[t.value.outlet];
            }),
            Xc(o, (e, t) => hh(e, r.getContext(t), i)),
            i
          );
        })(r, t ? t._root : null, n, [r.value]);
      }
      function uh(e, t, n) {
        const r = (function (e) {
          if (!e) return null;
          for (let t = e.parent; t; t = t.parent) {
            const e = t.routeConfig;
            if (e && e._loadedConfig) return e._loadedConfig;
          }
          return null;
        })(t);
        return (r ? r.module.injector : n).get(e);
      }
      function hh(e, t, n) {
        const r = Tu(e),
          s = e.value;
        Xc(r, (e, r) => {
          hh(e, s.component ? (t ? t.children.getContext(r) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new lh(
              s.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              s
            )
          );
      }
      const dh = Symbol("INITIAL_VALUE");
      function ph() {
        return ol((e) =>
          (function (...e) {
            let t = null,
              n = null;
            return (
              A(e[e.length - 1]) && (n = e.pop()),
              "function" == typeof e[e.length - 1] && (t = e.pop()),
              1 === e.length && l(e[0]) && (e = e[0]),
              q(e, n).lift(new Na(t))
            );
          })(
            ...e.map((e) =>
              e.pipe(
                el(1),
                (function (...e) {
                  return (t) => {
                    let n = e[e.length - 1];
                    A(n) ? e.pop() : (n = null);
                    const r = e.length;
                    return cl(
                      1 !== r || n ? (r > 0 ? q(e, n) : Sa(n)) : Ca(e[0]),
                      t
                    );
                  };
                })(dh)
              )
            )
          ).pipe(
            ul((e, t) => {
              let n = !1;
              return t.reduce((e, r, s) => {
                if (e !== dh) return e;
                if ((r === dh && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === t.length - 1 || Gu(r)) return r;
                }
                return e;
              }, e);
            }, dh),
            Da((e) => e !== dh),
            $((e) => (Gu(e) ? e : !0 === e)),
            el(1)
          )
        );
      }
      function fh(e, t) {
        return null !== e && t && t(new Fc(e)), Ta(!0);
      }
      function mh(e, t) {
        return null !== e && t && t(new Dc(e)), Ta(!0);
      }
      function gh(e, t, n) {
        const r = t.routeConfig ? t.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? Ta(
              r.map((r) =>
                Pa(() => {
                  const s = uh(r, t, n);
                  let i;
                  if (
                    (function (e) {
                      return e && Zu(e.canActivate);
                    })(s)
                  )
                    i = Jc(s.canActivate(t, e));
                  else {
                    if (!Zu(s)) throw new Error("Invalid CanActivate guard");
                    i = Jc(s(t, e));
                  }
                  return i.pipe(rl());
                })
              )
            ).pipe(ph())
          : Ta(!0);
      }
      function yh(e, t, n) {
        const r = t[t.length - 1],
          s = t
            .slice(0, t.length - 1)
            .reverse()
            .map((e) =>
              (function (e) {
                const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? { node: e, guards: t } : null;
              })(e)
            )
            .filter((e) => null !== e)
            .map((t) =>
              Pa(() =>
                Ta(
                  t.guards.map((s) => {
                    const i = uh(s, t.node, n);
                    let o;
                    if (
                      (function (e) {
                        return e && Zu(e.canActivateChild);
                      })(i)
                    )
                      o = Jc(i.canActivateChild(r, e));
                    else {
                      if (!Zu(i))
                        throw new Error("Invalid CanActivateChild guard");
                      o = Jc(i(r, e));
                    }
                    return o.pipe(rl());
                  })
                ).pipe(ph())
              )
            );
        return Ta(s).pipe(ph());
      }
      class _h {}
      class vh {
        constructor(e, t, n, r, s, i) {
          (this.rootComponentType = e),
            (this.config = t),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          try {
            const e = Eh(
                this.urlTree.root,
                [],
                [],
                this.config,
                this.relativeLinkResolution
              ).segmentGroup,
              t = this.processSegmentGroup(this.config, e, "primary"),
              n = new Nu(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                "primary",
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              r = new Cu(n, t),
              s = new Ru(this.url, r);
            return this.inheritParamsAndData(s._root), Ta(s);
          } catch (e) {
            return new w((t) => t.error(e));
          }
        }
        inheritParamsAndData(e) {
          const t = e.value,
            n = Au(t, this.paramsInheritanceStrategy);
          (t.params = Object.freeze(n.params)),
            (t.data = Object.freeze(n.data)),
            e.children.forEach((e) => this.inheritParamsAndData(e));
        }
        processSegmentGroup(e, t, n) {
          return 0 === t.segments.length && t.hasChildren()
            ? this.processChildren(e, t)
            : this.processSegment(e, t, t.segments, n);
        }
        processChildren(e, t) {
          const n = iu(t, (t, n) => this.processSegmentGroup(e, t, n));
          return (
            (function (e) {
              const t = {};
              e.forEach((e) => {
                const n = t[e.value.outlet];
                if (n) {
                  const t = n.url.map((e) => e.toString()).join("/"),
                    r = e.value.url.map((e) => e.toString()).join("/");
                  throw new Error(
                    `Two segments cannot have the same outlet name: '${t}' and '${r}'.`
                  );
                }
                t[e.value.outlet] = e.value;
              });
            })(n),
            n.sort((e, t) =>
              "primary" === e.value.outlet
                ? -1
                : "primary" === t.value.outlet
                ? 1
                : e.value.outlet.localeCompare(t.value.outlet)
            ),
            n
          );
        }
        processSegment(e, t, n, r) {
          for (const i of e)
            try {
              return this.processSegmentAgainstRoute(i, t, n, r);
            } catch (s) {
              if (!(s instanceof _h)) throw s;
            }
          if (this.noLeftoversInUrl(t, n, r)) return [];
          throw new _h();
        }
        noLeftoversInUrl(e, t, n) {
          return 0 === t.length && !e.children[n];
        }
        processSegmentAgainstRoute(e, t, n, r) {
          if (e.redirectTo) throw new _h();
          if ((e.outlet || "primary") !== r) throw new _h();
          let s,
            i = [],
            o = [];
          if ("**" === e.path) {
            const i = n.length > 0 ? Yc(n).parameters : {};
            s = new Nu(
              n,
              i,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Th(e),
              r,
              e.component,
              e,
              bh(t),
              wh(t) + n.length,
              xh(e)
            );
          } else {
            const a = (function (e, t, n) {
              if ("" === t.path) {
                if ("full" === t.pathMatch && (e.hasChildren() || n.length > 0))
                  throw new _h();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (t.matcher || Vc)(n, e, t);
              if (!r) throw new _h();
              const s = {};
              Xc(r.posParams, (e, t) => {
                s[t] = e.path;
              });
              const i =
                r.consumed.length > 0
                  ? Object.assign(
                      {},
                      s,
                      r.consumed[r.consumed.length - 1].parameters
                    )
                  : s;
              return {
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                parameters: i,
              };
            })(t, e, n);
            (i = a.consumedSegments),
              (o = n.slice(a.lastChild)),
              (s = new Nu(
                i,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Th(e),
                r,
                e.component,
                e,
                bh(t),
                wh(t) + i.length,
                xh(e)
              ));
          }
          const a = (function (e) {
              return e.children
                ? e.children
                : e.loadChildren
                ? e._loadedConfig.routes
                : [];
            })(e),
            { segmentGroup: l, slicedSegments: c } = Eh(
              t,
              i,
              o,
              a,
              this.relativeLinkResolution
            );
          if (0 === c.length && l.hasChildren()) {
            const e = this.processChildren(a, l);
            return [new Cu(s, e)];
          }
          if (0 === a.length && 0 === c.length) return [new Cu(s, [])];
          const u = this.processSegment(a, l, c, "primary");
          return [new Cu(s, u)];
        }
      }
      function bh(e) {
        let t = e;
        for (; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function wh(e) {
        let t = e,
          n = t._segmentIndexShift ? t._segmentIndexShift : 0;
        for (; t._sourceSegment; )
          (t = t._sourceSegment),
            (n += t._segmentIndexShift ? t._segmentIndexShift : 0);
        return n - 1;
      }
      function Eh(e, t, n, r, s) {
        if (
          n.length > 0 &&
          (function (e, t, n) {
            return n.some((n) => Sh(e, t, n) && "primary" !== Ch(n));
          })(e, n, r)
        ) {
          const s = new nu(
            t,
            (function (e, t, n, r) {
              const s = {};
              (s.primary = r),
                (r._sourceSegment = e),
                (r._segmentIndexShift = t.length);
              for (const i of n)
                if ("" === i.path && "primary" !== Ch(i)) {
                  const n = new nu([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift = t.length),
                    (s[Ch(i)] = n);
                }
              return s;
            })(e, t, r, new nu(n, e.children))
          );
          return (
            (s._sourceSegment = e),
            (s._segmentIndexShift = t.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (e, t, n) {
            return n.some((n) => Sh(e, t, n));
          })(e, n, r)
        ) {
          const i = new nu(
            e.segments,
            (function (e, t, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (Sh(e, n, a) && !s[Ch(a)]) {
                  const n = new nu([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift =
                      "legacy" === i ? e.segments.length : t.length),
                    (o[Ch(a)] = n);
                }
              return Object.assign({}, s, o);
            })(e, t, n, r, e.children, s)
          );
          return (
            (i._sourceSegment = e),
            (i._segmentIndexShift = t.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new nu(e.segments, e.children);
        return (
          (i._sourceSegment = e),
          (i._segmentIndexShift = t.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function Sh(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path &&
          void 0 === n.redirectTo
        );
      }
      function Ch(e) {
        return e.outlet || "primary";
      }
      function Th(e) {
        return e.data || {};
      }
      function xh(e) {
        return e.resolve || {};
      }
      function kh(e, t, n, r) {
        const s = uh(e, t, r);
        return Jc(s.resolve ? s.resolve(t, n) : s(t, n));
      }
      function Ih(e) {
        return function (t) {
          return t.pipe(
            ol((t) => {
              const n = e(t);
              return n ? Q(n).pipe($(() => t)) : Q([t]);
            })
          );
        };
      }
      class Ah {}
      class Nh {
        shouldDetach(e) {
          return !1;
        }
        store(e, t) {}
        shouldAttach(e) {
          return !1;
        }
        retrieve(e) {
          return null;
        }
        shouldReuseRoute(e, t) {
          return e.routeConfig === t.routeConfig;
        }
      }
      const Rh = new ke("ROUTES");
      class Ph {
        constructor(e, t, n, r) {
          (this.loader = e),
            (this.compiler = t),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(e, t) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(t),
            this.loadModuleFactory(t.loadChildren).pipe(
              $((n) => {
                this.onLoadEndListener && this.onLoadEndListener(t);
                const r = n.create(e);
                return new Bc(Gc(r.injector.get(Rh)).map(Kc), r);
              })
            )
          );
        }
        loadModuleFactory(e) {
          return "string" == typeof e
            ? Q(this.loader.load(e))
            : Jc(e()).pipe(
                W((e) =>
                  e instanceof Ue
                    ? Ta(e)
                    : Q(this.compiler.compileModuleAsync(e))
                )
              );
        }
      }
      class Oh {}
      class Dh {
        shouldProcessUrl(e) {
          return !0;
        }
        extract(e) {
          return e;
        }
        merge(e, t) {
          return e;
        }
      }
      function Mh(e) {
        throw e;
      }
      function Fh(e, t, n) {
        return t.parse("/");
      }
      function Lh(e, t) {
        return Ta(null);
      }
      class Uh {
        constructor(e, t, n, r, s, i, o, a) {
          (this.rootComponentType = e),
            (this.urlSerializer = t),
            (this.rootContexts = n),
            (this.location = r),
            (this.config = a),
            (this.lastSuccessfulNavigation = null),
            (this.currentNavigation = null),
            (this.navigationId = 0),
            (this.isNgZoneEnabled = !1),
            (this.events = new k()),
            (this.errorHandler = Mh),
            (this.malformedUriErrorHandler = Fh),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1),
            (this.hooks = { beforePreactivation: Lh, afterPreactivation: Lh }),
            (this.urlHandlingStrategy = new Dh()),
            (this.routeReuseStrategy = new Nh()),
            (this.onSameUrlNavigation = "ignore"),
            (this.paramsInheritanceStrategy = "emptyOnly"),
            (this.urlUpdateStrategy = "deferred"),
            (this.relativeLinkResolution = "legacy"),
            (this.ngModule = s.get(Le)),
            (this.console = s.get(ks));
          const l = s.get(qs);
          (this.isNgZoneEnabled = l instanceof qs),
            this.resetConfig(a),
            (this.currentUrlTree = new tu(new nu([], {}), {}, null)),
            (this.rawUrlTree = this.currentUrlTree),
            (this.browserUrlTree = this.currentUrlTree),
            (this.configLoader = new Ph(
              i,
              o,
              (e) => this.triggerEvent(new Pc(e)),
              (e) => this.triggerEvent(new Oc(e))
            )),
            (this.routerState = ku(
              this.currentUrlTree,
              this.rootComponentType
            )),
            (this.transitions = new xa({
              id: 0,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.currentUrlTree,
              extractedUrl: this.urlHandlingStrategy.extract(
                this.currentUrlTree
              ),
              urlAfterRedirects: this.urlHandlingStrategy.extract(
                this.currentUrlTree
              ),
              rawUrl: this.currentUrlTree,
              extras: {},
              resolve: null,
              reject: null,
              promise: Promise.resolve(!0),
              source: "imperative",
              restoredState: null,
              currentSnapshot: this.routerState.snapshot,
              targetSnapshot: null,
              currentRouterState: this.routerState,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null,
            })),
            (this.navigations = this.setupNavigations(this.transitions)),
            this.processNavigations();
        }
        setupNavigations(e) {
          const t = this.events;
          return e.pipe(
            Da((e) => 0 !== e.id),
            $((e) =>
              Object.assign({}, e, {
                extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl),
              })
            ),
            ol((e) => {
              let n = !1,
                r = !1;
              return Ta(e).pipe(
                $a((e) => {
                  this.currentNavigation = {
                    id: e.id,
                    initialUrl: e.currentRawUrl,
                    extractedUrl: e.extractedUrl,
                    trigger: e.source,
                    extras: e.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, {
                          previousNavigation: null,
                        })
                      : null,
                  };
                }),
                ol((e) => {
                  const n =
                    !this.navigated ||
                    e.extractedUrl.toString() !==
                      this.browserUrlTree.toString();
                  if (
                    ("reload" === this.onSameUrlNavigation || n) &&
                    this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                  )
                    return Ta(e).pipe(
                      ol((e) => {
                        const n = this.transitions.getValue();
                        return (
                          t.next(
                            new Sc(
                              e.id,
                              this.serializeUrl(e.extractedUrl),
                              e.source,
                              e.restoredState
                            )
                          ),
                          n !== this.transitions.getValue() ? Ea : [e]
                        );
                      }),
                      ol((e) => Promise.resolve(e)),
                      ((r = this.ngModule.injector),
                      (s = this.configLoader),
                      (i = this.urlSerializer),
                      (o = this.config),
                      function (e) {
                        return e.pipe(
                          ol((e) =>
                            (function (e, t, n, r, s) {
                              return new nh(e, t, n, r, s).apply();
                            })(r, s, i, e.extractedUrl, o).pipe(
                              $((t) =>
                                Object.assign({}, e, { urlAfterRedirects: t })
                              )
                            )
                          )
                        );
                      }),
                      $a((e) => {
                        this.currentNavigation = Object.assign(
                          {},
                          this.currentNavigation,
                          { finalUrl: e.urlAfterRedirects }
                        );
                      }),
                      (function (e, t, n, r, s) {
                        return function (i) {
                          return i.pipe(
                            W((i) =>
                              (function (
                                e,
                                t,
                                n,
                                r,
                                s = "emptyOnly",
                                i = "legacy"
                              ) {
                                return new vh(e, t, n, r, s, i).recognize();
                              })(
                                e,
                                t,
                                i.urlAfterRedirects,
                                n(i.urlAfterRedirects),
                                r,
                                s
                              ).pipe(
                                $((e) =>
                                  Object.assign({}, i, { targetSnapshot: e })
                                )
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        (e) => this.serializeUrl(e),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      $a((e) => {
                        "eager" === this.urlUpdateStrategy &&
                          (e.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              e.urlAfterRedirects,
                              !!e.extras.replaceUrl,
                              e.id,
                              e.extras.state
                            ),
                          (this.browserUrlTree = e.urlAfterRedirects));
                      }),
                      $a((e) => {
                        const n = new kc(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        t.next(n);
                      })
                    );
                  var r, s, i, o;
                  if (
                    n &&
                    this.rawUrlTree &&
                    this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                  ) {
                    const {
                        id: n,
                        extractedUrl: r,
                        source: s,
                        restoredState: i,
                        extras: o,
                      } = e,
                      a = new Sc(n, this.serializeUrl(r), s, i);
                    t.next(a);
                    const l = ku(r, this.rootComponentType).snapshot;
                    return Ta(
                      Object.assign({}, e, {
                        targetSnapshot: l,
                        urlAfterRedirects: r,
                        extras: Object.assign({}, o, {
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        }),
                      })
                    );
                  }
                  return (
                    (this.rawUrlTree = e.rawUrl),
                    (this.browserUrlTree = e.urlAfterRedirects),
                    e.resolve(null),
                    Ea
                  );
                }),
                Ih((e) => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: s,
                    extras: { skipLocationChange: i, replaceUrl: o },
                  } = e;
                  return this.hooks.beforePreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: s,
                    skipLocationChange: !!i,
                    replaceUrl: !!o,
                  });
                }),
                $a((e) => {
                  const t = new Ic(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot
                  );
                  this.triggerEvent(t);
                }),
                $((e) =>
                  Object.assign({}, e, {
                    guards: ch(
                      e.targetSnapshot,
                      e.currentSnapshot,
                      this.rootContexts
                    ),
                  })
                ),
                (function (e, t) {
                  return function (n) {
                    return n.pipe(
                      W((n) => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: s,
                          guards: {
                            canActivateChecks: i,
                            canDeactivateChecks: o,
                          },
                        } = n;
                        return 0 === o.length && 0 === i.length
                          ? Ta(Object.assign({}, n, { guardsResult: !0 }))
                          : (function (e, t, n, r) {
                              return Q(e).pipe(
                                W((e) =>
                                  (function (e, t, n, r, s) {
                                    const i =
                                      t && t.routeConfig
                                        ? t.routeConfig.canDeactivate
                                        : null;
                                    return i && 0 !== i.length
                                      ? Ta(
                                          i.map((i) => {
                                            const o = uh(i, t, s);
                                            let a;
                                            if (
                                              (function (e) {
                                                return e && Zu(e.canDeactivate);
                                              })(o)
                                            )
                                              a = Jc(
                                                o.canDeactivate(e, t, n, r)
                                              );
                                            else {
                                              if (!Zu(o))
                                                throw new Error(
                                                  "Invalid CanDeactivate guard"
                                                );
                                              a = Jc(o(e, t, n, r));
                                            }
                                            return a.pipe(rl());
                                          })
                                        ).pipe(ph())
                                      : Ta(!0);
                                  })(e.component, e.route, n, t, r)
                                ),
                                rl((e) => !0 !== e, !0)
                              );
                            })(o, r, s, e).pipe(
                              W((n) =>
                                n && "boolean" == typeof n
                                  ? (function (e, t, n, r) {
                                      return Q(t).pipe(
                                        pl((t) =>
                                          Q([
                                            mh(t.route.parent, r),
                                            fh(t.route, r),
                                            yh(e, t.path, n),
                                            gh(e, t.route, n),
                                          ]).pipe(
                                            Oa(),
                                            rl((e) => !0 !== e, !0)
                                          )
                                        ),
                                        rl((e) => !0 !== e, !0)
                                      );
                                    })(r, i, e, t)
                                  : Ta(n)
                              ),
                              $((e) =>
                                Object.assign({}, n, { guardsResult: e })
                              )
                            );
                      })
                    );
                  };
                })(this.ngModule.injector, (e) => this.triggerEvent(e)),
                $a((e) => {
                  if (Gu(e.guardsResult)) {
                    const t = $c(
                      `Redirecting to "${this.serializeUrl(e.guardsResult)}"`
                    );
                    throw ((t.url = e.guardsResult), t);
                  }
                }),
                $a((e) => {
                  const t = new Ac(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(e.urlAfterRedirects),
                    e.targetSnapshot,
                    !!e.guardsResult
                  );
                  this.triggerEvent(t);
                }),
                Da((e) => {
                  if (!e.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new Tc(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      ""
                    );
                    return t.next(n), e.resolve(!1), !1;
                  }
                  return !0;
                }),
                Ih((e) => {
                  if (e.guards.canActivateChecks.length)
                    return Ta(e).pipe(
                      $a((e) => {
                        const t = new Nc(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      }),
                      ((t = this.paramsInheritanceStrategy),
                      (n = this.ngModule.injector),
                      function (e) {
                        return e.pipe(
                          W((e) => {
                            const {
                              targetSnapshot: r,
                              guards: { canActivateChecks: s },
                            } = e;
                            return s.length
                              ? Q(s).pipe(
                                  pl((e) =>
                                    (function (e, t, n, r) {
                                      return (function (e, t, n, r) {
                                        const s = Object.keys(e);
                                        if (0 === s.length) return Ta({});
                                        if (1 === s.length) {
                                          const i = s[0];
                                          return kh(e[i], t, n, r).pipe(
                                            $((e) => ({ [i]: e }))
                                          );
                                        }
                                        const i = {};
                                        return Q(s)
                                          .pipe(
                                            W((s) =>
                                              kh(e[s], t, n, r).pipe(
                                                $((e) => ((i[s] = e), e))
                                              )
                                            )
                                          )
                                          .pipe(
                                            Ga(),
                                            $(() => i)
                                          );
                                      })(e._resolve, e, t, r).pipe(
                                        $(
                                          (t) => (
                                            (e._resolvedData = t),
                                            (e.data = Object.assign(
                                              {},
                                              e.data,
                                              Au(e, n).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(e.route, r, t, n)
                                  ),
                                  (function (e, t) {
                                    return arguments.length >= 2
                                      ? function (n) {
                                          return v(ul(e, t), ja(1), Wa(t))(n);
                                        }
                                      : function (t) {
                                          return v(
                                            ul((t, n, r) => e(t, n, r + 1)),
                                            ja(1)
                                          )(t);
                                        };
                                  })((e, t) => e),
                                  $((t) => e)
                                )
                              : Ta(e);
                          })
                        );
                      }),
                      $a((e) => {
                        const t = new Rc(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          this.serializeUrl(e.urlAfterRedirects),
                          e.targetSnapshot
                        );
                        this.triggerEvent(t);
                      })
                    );
                  var t, n;
                }),
                Ih((e) => {
                  const {
                    targetSnapshot: t,
                    id: n,
                    extractedUrl: r,
                    rawUrl: s,
                    extras: { skipLocationChange: i, replaceUrl: o },
                  } = e;
                  return this.hooks.afterPreactivation(t, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: s,
                    skipLocationChange: !!i,
                    replaceUrl: !!o,
                  });
                }),
                $((e) => {
                  const t = (function (e, t, n) {
                    const r = (function e(t, n, r) {
                      if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                        const s = r.value;
                        s._futureSnapshot = n.value;
                        const i = (function (t, n, r) {
                          return n.children.map((n) => {
                            for (const s of r.children)
                              if (t.shouldReuseRoute(s.value.snapshot, n.value))
                                return e(t, n, s);
                            return e(t, n);
                          });
                        })(t, n, r);
                        return new Cu(s, i);
                      }
                      {
                        const r = t.retrieve(n.value);
                        if (r) {
                          const e = r.route;
                          return (
                            (function e(t, n) {
                              if (t.value.routeConfig !== n.value.routeConfig)
                                throw new Error(
                                  "Cannot reattach ActivatedRouteSnapshot created from a different route"
                                );
                              if (t.children.length !== n.children.length)
                                throw new Error(
                                  "Cannot reattach ActivatedRouteSnapshot with a different number of children"
                                );
                              n.value._futureSnapshot = t.value;
                              for (let r = 0; r < t.children.length; ++r)
                                e(t.children[r], n.children[r]);
                            })(n, e),
                            e
                          );
                        }
                        {
                          const r = new Iu(
                              new xa((s = n.value).url),
                              new xa(s.params),
                              new xa(s.queryParams),
                              new xa(s.fragment),
                              new xa(s.data),
                              s.outlet,
                              s.component,
                              s
                            ),
                            i = n.children.map((n) => e(t, n));
                          return new Cu(r, i);
                        }
                      }
                      var s;
                    })(e, t._root, n ? n._root : void 0);
                    return new xu(r, t);
                  })(
                    this.routeReuseStrategy,
                    e.targetSnapshot,
                    e.currentRouterState
                  );
                  return Object.assign({}, e, { targetRouterState: t });
                }),
                $a((e) => {
                  (this.currentUrlTree = e.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      this.currentUrlTree,
                      e.rawUrl
                    )),
                    (this.routerState = e.targetRouterState),
                    "deferred" === this.urlUpdateStrategy &&
                      (e.extras.skipLocationChange ||
                        this.setBrowserUrl(
                          this.rawUrlTree,
                          !!e.extras.replaceUrl,
                          e.id,
                          e.extras.state
                        ),
                      (this.browserUrlTree = e.urlAfterRedirects));
                }),
                ((i = this.rootContexts),
                (o = this.routeReuseStrategy),
                (a = (e) => this.triggerEvent(e)),
                $(
                  (e) => (
                    new Wu(
                      o,
                      e.targetRouterState,
                      e.currentRouterState,
                      a
                    ).activate(i),
                    e
                  )
                )),
                $a({
                  next() {
                    n = !0;
                  },
                  complete() {
                    n = !0;
                  },
                }),
                ((s = () => {
                  if (!n && !r) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new Tc(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      `Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`
                    );
                    t.next(n), e.resolve(!1);
                  }
                  this.currentNavigation = null;
                }),
                (e) => e.lift(new fl(s))),
                Ya((n) => {
                  if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                    const r = Gu(n.url);
                    r ||
                      ((this.navigated = !0),
                      this.resetStateAndUrl(
                        e.currentRouterState,
                        e.currentUrlTree,
                        e.rawUrl
                      ));
                    const s = new Tc(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      n.message
                    );
                    t.next(s), e.resolve(!1), r && this.navigateByUrl(n.url);
                  } else {
                    this.resetStateAndUrl(
                      e.currentRouterState,
                      e.currentUrlTree,
                      e.rawUrl
                    );
                    const r = new xc(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      n
                    );
                    t.next(r);
                    try {
                      e.resolve(this.errorHandler(n));
                    } catch (i) {
                      e.reject(i);
                    }
                  }
                  var s;
                  return Ea;
                })
              );
              var s, i, o, a;
            })
          );
        }
        resetRootComponentType(e) {
          (this.rootComponentType = e),
            (this.routerState.root.component = this.rootComponentType);
        }
        getTransition() {
          const e = this.transitions.value;
          return (e.urlAfterRedirects = this.browserUrlTree), e;
        }
        setTransition(e) {
          this.transitions.next(Object.assign({}, this.getTransition(), e));
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId &&
              this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }
        setUpLocationChangeListener() {
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe((e) => {
              let t = this.parseUrl(e.url);
              const n = "popstate" === e.type ? "popstate" : "hashchange",
                r = e.state && e.state.navigationId ? e.state : null;
              setTimeout(() => {
                this.scheduleNavigation(t, n, r, { replaceUrl: !0 });
              }, 0);
            }));
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(e) {
          this.events.next(e);
        }
        resetConfig(e) {
          qc(e),
            (this.config = e.map(Kc)),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.locationSubscription &&
            (this.locationSubscription.unsubscribe(),
            (this.locationSubscription = null));
        }
        createUrlTree(e, t = {}) {
          const {
            relativeTo: n,
            queryParams: r,
            fragment: s,
            preserveQueryParams: i,
            queryParamsHandling: o,
            preserveFragment: a,
          } = t;
          Ze() &&
            i &&
            console &&
            console.warn &&
            console.warn(
              "preserveQueryParams is deprecated, use queryParamsHandling instead."
            );
          const l = n || this.routerState.root,
            c = a ? this.currentUrlTree.fragment : s;
          let u = null;
          if (o)
            switch (o) {
              case "merge":
                u = Object.assign({}, this.currentUrlTree.queryParams, r);
                break;
              case "preserve":
                u = this.currentUrlTree.queryParams;
                break;
              default:
                u = r || null;
            }
          else u = i ? this.currentUrlTree.queryParams : r || null;
          return (
            null !== u && (u = this.removeEmptyProps(u)),
            (function (e, t, n, r, s) {
              if (0 === n.length) return Lu(t.root, t.root, t, r, s);
              const i = (function (e) {
                if ("string" == typeof e[0] && 1 === e.length && "/" === e[0])
                  return new Uu(!0, 0, e);
                let t = 0,
                  n = !1;
                const r = e.reduce((e, r, s) => {
                  if ("object" == typeof r && null != r) {
                    if (r.outlets) {
                      const t = {};
                      return (
                        Xc(r.outlets, (e, n) => {
                          t[n] = "string" == typeof e ? e.split("/") : e;
                        }),
                        [...e, { outlets: t }]
                      );
                    }
                    if (r.segmentPath) return [...e, r.segmentPath];
                  }
                  return "string" != typeof r
                    ? [...e, r]
                    : 0 === s
                    ? (r.split("/").forEach((r, s) => {
                        (0 == s && "." === r) ||
                          (0 == s && "" === r
                            ? (n = !0)
                            : ".." === r
                            ? t++
                            : "" != r && e.push(r));
                      }),
                      e)
                    : [...e, r];
                }, []);
                return new Uu(n, t, r);
              })(n);
              if (i.toRoot()) return Lu(t.root, new nu([], {}), t, r, s);
              const o = (function (e, t, n) {
                  if (e.isAbsolute) return new ju(t.root, !0, 0);
                  if (-1 === n.snapshot._lastPathIndex)
                    return new ju(n.snapshot._urlSegment, !0, 0);
                  const r = Fu(e.commands[0]) ? 0 : 1;
                  return (function (e, t, n) {
                    let r = e,
                      s = t,
                      i = n;
                    for (; i > s; ) {
                      if (((i -= s), (r = r.parent), !r))
                        throw new Error("Invalid number of '../'");
                      s = r.segments.length;
                    }
                    return new ju(r, !1, s - i);
                  })(
                    n.snapshot._urlSegment,
                    n.snapshot._lastPathIndex + r,
                    e.numberOfDoubleDots
                  );
                })(i, t, e),
                a = o.processChildren
                  ? $u(o.segmentGroup, o.index, i.commands)
                  : Hu(o.segmentGroup, o.index, i.commands);
              return Lu(o.segmentGroup, a, t, r, s);
            })(l, this.currentUrlTree, e, u, c)
          );
        }
        navigateByUrl(e, t = { skipLocationChange: !1 }) {
          Ze() &&
            this.isNgZoneEnabled &&
            !qs.isInAngularZone() &&
            this.console.warn(
              "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
            );
          const n = Gu(e) ? e : this.parseUrl(e),
            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(r, "imperative", null, t);
        }
        navigate(e, t = { skipLocationChange: !1 }) {
          return (
            (function (e) {
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (null == n)
                  throw new Error(
                    `The requested path contains ${n} segment at index ${t}`
                  );
              }
            })(e),
            this.navigateByUrl(this.createUrlTree(e, t), t)
          );
        }
        serializeUrl(e) {
          return this.urlSerializer.serialize(e);
        }
        parseUrl(e) {
          let t;
          try {
            t = this.urlSerializer.parse(e);
          } catch (n) {
            t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
          }
          return t;
        }
        isActive(e, t) {
          if (Gu(e)) return eu(this.currentUrlTree, e, t);
          const n = this.parseUrl(e);
          return eu(this.currentUrlTree, n, t);
        }
        removeEmptyProps(e) {
          return Object.keys(e).reduce((t, n) => {
            const r = e[n];
            return null != r && (t[n] = r), t;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            (e) => {
              (this.navigated = !0),
                (this.lastSuccessfulId = e.id),
                this.events.next(
                  new Cc(
                    e.id,
                    this.serializeUrl(e.extractedUrl),
                    this.serializeUrl(this.currentUrlTree)
                  )
                ),
                (this.lastSuccessfulNavigation = this.currentNavigation),
                (this.currentNavigation = null),
                e.resolve(!0);
            },
            (e) => {
              this.console.warn("Unhandled Navigation Error: ");
            }
          );
        }
        scheduleNavigation(e, t, n, r) {
          const s = this.getTransition();
          if (
            s &&
            "imperative" !== t &&
            "imperative" === s.source &&
            s.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          if (
            s &&
            "hashchange" == t &&
            "popstate" === s.source &&
            s.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          if (
            s &&
            "popstate" == t &&
            "hashchange" === s.source &&
            s.rawUrl.toString() === e.toString()
          )
            return Promise.resolve(!0);
          let i = null,
            o = null;
          const a = new Promise((e, t) => {
              (i = e), (o = t);
            }),
            l = ++this.navigationId;
          return (
            this.setTransition({
              id: l,
              source: t,
              restoredState: n,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: e,
              extras: r,
              resolve: i,
              reject: o,
              promise: a,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState,
            }),
            a.catch((e) => Promise.reject(e))
          );
        }
        setBrowserUrl(e, t, n, r) {
          const s = this.urlSerializer.serialize(e);
          (r = r || {}),
            this.location.isCurrentPathEqualTo(s) || t
              ? this.location.replaceState(
                  s,
                  "",
                  Object.assign({}, r, { navigationId: n })
                )
              : this.location.go(
                  s,
                  "",
                  Object.assign({}, r, { navigationId: n })
                );
        }
        resetStateAndUrl(e, t, n) {
          (this.routerState = e),
            (this.currentUrlTree = t),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(
              this.currentUrlTree,
              n
            )),
            this.resetUrlToCurrentUrlTree();
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(
            this.urlSerializer.serialize(this.rawUrlTree),
            "",
            { navigationId: this.lastSuccessfulId }
          );
        }
      }
      class jh {
        constructor(e, t, n, r, s) {
          (this.router = e),
            (this.route = t),
            (this.commands = []),
            null == n && r.setAttribute(s.nativeElement, "tabindex", "0");
        }
        set routerLink(e) {
          this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
        }
        set preserveQueryParams(e) {
          Ze() &&
            console &&
            console.warn &&
            console.warn(
              "preserveQueryParams is deprecated!, use queryParamsHandling instead."
            ),
            (this.preserve = e);
        }
        onClick() {
          const e = {
            skipLocationChange: zh(this.skipLocationChange),
            replaceUrl: zh(this.replaceUrl),
          };
          return this.router.navigateByUrl(this.urlTree, e), !0;
        }
        get urlTree() {
          return this.router.createUrlTree(this.commands, {
            relativeTo: this.route,
            queryParams: this.queryParams,
            fragment: this.fragment,
            preserveQueryParams: zh(this.preserve),
            queryParamsHandling: this.queryParamsHandling,
            preserveFragment: zh(this.preserveFragment),
          });
        }
      }
      function zh(e) {
        return "" === e || !!e;
      }
      class Hh {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new $h()),
            (this.attachRef = null);
        }
      }
      class $h {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(e, t) {
          const n = this.getOrCreateContext(e);
          (n.outlet = t), this.contexts.set(e, n);
        }
        onChildOutletDestroyed(e) {
          const t = this.getContext(e);
          t && (t.outlet = null);
        }
        onOutletDeactivated() {
          const e = this.contexts;
          return (this.contexts = new Map()), e;
        }
        onOutletReAttached(e) {
          this.contexts = e;
        }
        getOrCreateContext(e) {
          let t = this.getContext(e);
          return t || ((t = new Hh()), this.contexts.set(e, t)), t;
        }
        getContext(e) {
          return this.contexts.get(e) || null;
        }
      }
      class Vh {
        constructor(e, t, n, r, s) {
          (this.parentContexts = e),
            (this.location = t),
            (this.resolver = n),
            (this.changeDetector = s),
            (this.activated = null),
            (this._activatedRoute = null),
            (this.activateEvents = new _s()),
            (this.deactivateEvents = new _s()),
            (this.name = r || "primary"),
            e.onChildOutletCreated(this.name, this);
        }
        ngOnDestroy() {
          this.parentContexts.onChildOutletDestroyed(this.name);
        }
        ngOnInit() {
          if (!this.activated) {
            const e = this.parentContexts.getContext(this.name);
            e &&
              e.route &&
              (e.attachRef
                ? this.attach(e.attachRef, e.route)
                : this.activateWith(e.route, e.resolver || null));
          }
        }
        get isActivated() {
          return !!this.activated;
        }
        get component() {
          if (!this.activated) throw new Error("Outlet is not activated");
          return this.activated.instance;
        }
        get activatedRoute() {
          if (!this.activated) throw new Error("Outlet is not activated");
          return this._activatedRoute;
        }
        get activatedRouteData() {
          return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
        }
        detach() {
          if (!this.activated) throw new Error("Outlet is not activated");
          this.location.detach();
          const e = this.activated;
          return (this.activated = null), (this._activatedRoute = null), e;
        }
        attach(e, t) {
          (this.activated = e),
            (this._activatedRoute = t),
            this.location.insert(e.hostView);
        }
        deactivate() {
          if (this.activated) {
            const e = this.component;
            this.activated.destroy(),
              (this.activated = null),
              (this._activatedRoute = null),
              this.deactivateEvents.emit(e);
          }
        }
        activateWith(e, t) {
          if (this.isActivated)
            throw new Error("Cannot activate an already activated outlet");
          this._activatedRoute = e;
          const n = (t = t || this.resolver).resolveComponentFactory(
              e._futureSnapshot.routeConfig.component
            ),
            r = this.parentContexts.getOrCreateContext(this.name).children,
            s = new Bh(e, r, this.location.injector);
          (this.activated = this.location.createComponent(
            n,
            this.location.length,
            s
          )),
            this.changeDetector.markForCheck(),
            this.activateEvents.emit(this.activated.instance);
        }
      }
      class Bh {
        constructor(e, t, n) {
          (this.route = e), (this.childContexts = t), (this.parent = n);
        }
        get(e, t) {
          return e === Iu
            ? this.route
            : e === $h
            ? this.childContexts
            : this.parent.get(e, t);
        }
      }
      class qh {}
      class Qh {
        preload(e, t) {
          return t().pipe(Ya(() => Ta(null)));
        }
      }
      class Wh {
        preload(e, t) {
          return Ta(null);
        }
      }
      class Kh {
        constructor(e, t, n, r, s) {
          (this.router = e),
            (this.injector = r),
            (this.preloadingStrategy = s),
            (this.loader = new Ph(
              t,
              n,
              (t) => e.triggerEvent(new Pc(t)),
              (t) => e.triggerEvent(new Oc(t))
            ));
        }
        setUpPreloading() {
          this.subscription = this.router.events
            .pipe(
              Da((e) => e instanceof Cc),
              pl(() => this.preload())
            )
            .subscribe(() => {});
        }
        preload() {
          const e = this.injector.get(Le);
          return this.processRoutes(e, this.router.config);
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        processRoutes(e, t) {
          const n = [];
          for (const r of t)
            if (r.loadChildren && !r.canLoad && r._loadedConfig) {
              const e = r._loadedConfig;
              n.push(this.processRoutes(e.module, e.routes));
            } else
              r.loadChildren && !r.canLoad
                ? n.push(this.preloadConfig(e, r))
                : r.children && n.push(this.processRoutes(e, r.children));
          return Q(n).pipe(
            Y(),
            $((e) => {})
          );
        }
        preloadConfig(e, t) {
          return this.preloadingStrategy.preload(t, () =>
            this.loader
              .load(e.injector, t)
              .pipe(
                W(
                  (e) => (
                    (t._loadedConfig = e),
                    this.processRoutes(e.module, e.routes)
                  )
                )
              )
          );
        }
      }
      class Zh {
        constructor(e, t, n = {}) {
          (this.router = e),
            (this.viewportScroller = t),
            (this.options = n),
            (this.lastId = 0),
            (this.lastSource = "imperative"),
            (this.restoredId = 0),
            (this.store = {}),
            (n.scrollPositionRestoration =
              n.scrollPositionRestoration || "disabled"),
            (n.anchorScrolling = n.anchorScrolling || "disabled");
        }
        init() {
          "disabled" !== this.options.scrollPositionRestoration &&
            this.viewportScroller.setHistoryScrollRestoration("manual"),
            (this.routerEventsSubscription = this.createScrollEvents()),
            (this.scrollEventsSubscription = this.consumeScrollEvents());
        }
        createScrollEvents() {
          return this.router.events.subscribe((e) => {
            e instanceof Sc
              ? ((this.store[
                  this.lastId
                ] = this.viewportScroller.getScrollPosition()),
                (this.lastSource = e.navigationTrigger),
                (this.restoredId = e.restoredState
                  ? e.restoredState.navigationId
                  : 0))
              : e instanceof Cc &&
                ((this.lastId = e.id),
                this.scheduleScrollEvent(
                  e,
                  this.router.parseUrl(e.urlAfterRedirects).fragment
                ));
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe((e) => {
            e instanceof Uc &&
              (e.position
                ? "top" === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : "enabled" === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(e.position)
                : e.anchor && "enabled" === this.options.anchorScrolling
                ? this.viewportScroller.scrollToAnchor(e.anchor)
                : "disabled" !== this.options.scrollPositionRestoration &&
                  this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(e, t) {
          this.router.triggerEvent(
            new Uc(
              e,
              "popstate" === this.lastSource
                ? this.store[this.restoredId]
                : null,
              t
            )
          );
        }
        ngOnDestroy() {
          this.routerEventsSubscription &&
            this.routerEventsSubscription.unsubscribe(),
            this.scrollEventsSubscription &&
              this.scrollEventsSubscription.unsubscribe();
        }
      }
      const Gh = new ke("ROUTER_CONFIGURATION"),
        Yh = new ke("ROUTER_FORROOT_GUARD"),
        Xh = [
          ia,
          { provide: ou, useClass: au },
          {
            provide: Uh,
            useFactory: id,
            deps: [
              ci,
              ou,
              $h,
              ia,
              kt,
              hi,
              Ds,
              Rh,
              Gh,
              [Oh, new ue()],
              [Ah, new ue()],
            ],
          },
          $h,
          { provide: Iu, useFactory: od, deps: [Uh] },
          { provide: hi, useClass: fi },
          Kh,
          Wh,
          Qh,
          { provide: Gh, useValue: { enableTracing: !1 } },
        ];
      function Jh() {
        return new si("Router", Uh);
      }
      class ed {
        constructor(e, t) {}
        static forRoot(e, t) {
          return {
            ngModule: ed,
            providers: [
              Xh,
              sd(e),
              { provide: Yh, useFactory: rd, deps: [[Uh, new ue(), new de()]] },
              { provide: Gh, useValue: t || {} },
              {
                provide: ra,
                useFactory: nd,
                deps: [ta, [new ce(sa), new ue()], Gh],
              },
              { provide: Zh, useFactory: td, deps: [Uh, ba, Gh] },
              {
                provide: qh,
                useExisting:
                  t && t.preloadingStrategy ? t.preloadingStrategy : Wh,
              },
              { provide: si, multi: !0, useFactory: Jh },
              [
                ad,
                { provide: ws, multi: !0, useFactory: ld, deps: [ad] },
                { provide: ud, useFactory: cd, deps: [ad] },
                { provide: xs, multi: !0, useExisting: ud },
              ],
            ],
          };
        }
        static forChild(e) {
          return { ngModule: ed, providers: [sd(e)] };
        }
      }
      function td(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new Zh(e, t, n);
      }
      function nd(e, t, n = {}) {
        return n.useHash ? new aa(e, t) : new la(e, t);
      }
      function rd(e) {
        if (e)
          throw new Error(
            "RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."
          );
        return "guarded";
      }
      function sd(e) {
        return [
          { provide: Mt, multi: !0, useValue: e },
          { provide: Rh, multi: !0, useValue: e },
        ];
      }
      function id(e, t, n, r, s, i, o, a, l = {}, c, u) {
        const h = new Uh(null, t, n, r, s, i, o, Gc(a));
        if (
          (c && (h.urlHandlingStrategy = c),
          u && (h.routeReuseStrategy = u),
          l.errorHandler && (h.errorHandler = l.errorHandler),
          l.malformedUriErrorHandler &&
            (h.malformedUriErrorHandler = l.malformedUriErrorHandler),
          l.enableTracing)
        ) {
          const e = yl();
          h.events.subscribe((t) => {
            e.logGroup("Router Event: " + t.constructor.name),
              e.log(t.toString()),
              e.log(t),
              e.logGroupEnd();
          });
        }
        return (
          l.onSameUrlNavigation &&
            (h.onSameUrlNavigation = l.onSameUrlNavigation),
          l.paramsInheritanceStrategy &&
            (h.paramsInheritanceStrategy = l.paramsInheritanceStrategy),
          l.urlUpdateStrategy && (h.urlUpdateStrategy = l.urlUpdateStrategy),
          l.relativeLinkResolution &&
            (h.relativeLinkResolution = l.relativeLinkResolution),
          h
        );
      }
      function od(e) {
        return e.routerState.root;
      }
      class ad {
        constructor(e) {
          (this.injector = e),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new k());
        }
        appInitializer() {
          return this.injector.get(na, Promise.resolve(null)).then(() => {
            let e = null;
            const t = new Promise((t) => (e = t)),
              n = this.injector.get(Uh),
              r = this.injector.get(Gh);
            if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) e(!0);
            else if ("disabled" === r.initialNavigation)
              n.setUpLocationChangeListener(), e(!0);
            else {
              if ("enabled" !== r.initialNavigation)
                throw new Error(
                  `Invalid initialNavigation options: '${r.initialNavigation}'`
                );
              (n.hooks.afterPreactivation = () =>
                this.initNavigation
                  ? Ta(null)
                  : ((this.initNavigation = !0),
                    e(!0),
                    this.resultOfPreactivationDone)),
                n.initialNavigation();
            }
            return t;
          });
        }
        bootstrapListener(e) {
          const t = this.injector.get(Gh),
            n = this.injector.get(Kh),
            r = this.injector.get(Zh),
            s = this.injector.get(Uh),
            i = this.injector.get(ci);
          e === i.components[0] &&
            (this.isLegacyEnabled(t)
              ? s.initialNavigation()
              : this.isLegacyDisabled(t) && s.setUpLocationChangeListener(),
            n.setUpPreloading(),
            r.init(),
            s.resetRootComponentType(i.componentTypes[0]),
            this.resultOfPreactivationDone.next(null),
            this.resultOfPreactivationDone.complete());
        }
        isLegacyEnabled(e) {
          return (
            "legacy_enabled" === e.initialNavigation ||
            !0 === e.initialNavigation ||
            void 0 === e.initialNavigation
          );
        }
        isLegacyDisabled(e) {
          return (
            "legacy_disabled" === e.initialNavigation ||
            !1 === e.initialNavigation
          );
        }
      }
      function ld(e) {
        return e.appInitializer.bind(e);
      }
      function cd(e) {
        return e.bootstrapListener.bind(e);
      }
      const ud = new ke("Router Initializer");
      var hd = Vn({ encapsulation: 2, styles: [], data: {} });
      function dd(e) {
        return qi(
          0,
          [
            (e()(),
            Ai(
              0,
              16777216,
              null,
              null,
              1,
              "router-outlet",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            Jr(1, 212992, null, 0, Vh, [$h, kn, Gt, [8, null], St], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function pd(e) {
        return qi(
          0,
          [
            (e()(),
            Ai(
              0,
              0,
              null,
              null,
              1,
              "ng-component",
              [],
              null,
              null,
              null,
              dd,
              hd
            )),
            Jr(1, 49152, null, 0, jc, [], null, null),
          ],
          null,
          null
        );
      }
      var fd = Ar("ng-component", jc, pd, {}, {}, []);
      class md {}
      class gd {}
      class yd {
        constructor() {
          this.align = "start";
        }
      }
      class _d {
        constructor(e) {
          this._animationMode = e;
        }
      }
      class vd {}
      class bd {}
      class wd {}
      const Ed = new ln("8.2.3");
      function Sd(e) {
        return null != e && "" + e != "false";
      }
      function Cd(e) {
        return e instanceof en ? e.nativeElement : e;
      }
      let Td;
      try {
        Td = "undefined" != typeof Intl && Intl.v8BreakIterator;
      } catch (Bg) {
        Td = !1;
      }
      let xd,
        kd = (() => {
          class e {
            constructor(e) {
              (this._platformId = e),
                (this.isBrowser = this._platformId
                  ? va(this._platformId)
                  : "object" == typeof document && !!document),
                (this.EDGE =
                  this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT =
                  this.isBrowser &&
                  /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                  this.isBrowser &&
                  !(!window.chrome && !Td) &&
                  "undefined" != typeof CSS &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.WEBKIT =
                  this.isBrowser &&
                  /AppleWebKit/i.test(navigator.userAgent) &&
                  !this.BLINK &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.IOS =
                  this.isBrowser &&
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !("MSStream" in window)),
                (this.FIREFOX =
                  this.isBrowser &&
                  /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                  this.isBrowser &&
                  /android/i.test(navigator.userAgent) &&
                  !this.TRIDENT),
                (this.SAFARI =
                  this.isBrowser &&
                  /safari/i.test(navigator.userAgent) &&
                  this.WEBKIT);
            }
          }
          return (
            (e.ngInjectableDef = me({
              factory: function () {
                return new e(De(Ts, 8));
              },
              token: e,
              providedIn: "root",
            })),
            e
          );
        })();
      class Id {}
      function Ad(e) {
        return (function () {
          if (null == xd && "undefined" != typeof window)
            try {
              window.addEventListener(
                "test",
                null,
                Object.defineProperty({}, "passive", { get: () => (xd = !0) })
              );
            } finally {
              xd = xd || !1;
            }
          return xd;
        })()
          ? e
          : !!e.capture;
      }
      class Nd extends d {
        constructor(e, t) {
          super();
        }
        schedule(e, t = 0) {
          return this;
        }
      }
      class Rd extends Nd {
        constructor(e, t) {
          super(e, t),
            (this.scheduler = e),
            (this.work = t),
            (this.pending = !1);
        }
        schedule(e, t = 0) {
          if (this.closed) return this;
          this.state = e;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, t)),
            (this.pending = !0),
            (this.delay = t),
            (this.id = this.id || this.requestAsyncId(r, this.id, t)),
            this
          );
        }
        requestAsyncId(e, t, n = 0) {
          return setInterval(e.flush.bind(e, this), n);
        }
        recycleAsyncId(e, t, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return t;
          clearInterval(t);
        }
        execute(e, t) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const n = this._execute(e, t);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(e, t) {
          let n = !1,
            r = void 0;
          try {
            this.work(e);
          } catch (s) {
            (n = !0), (r = (!!s && s) || new Error(s));
          }
          if (n) return this.unsubscribe(), r;
        }
        _unsubscribe() {
          const e = this.id,
            t = this.scheduler,
            n = t.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != e && (this.id = this.recycleAsyncId(t, e, null)),
            (this.delay = null);
        }
      }
      let Pd = (() => {
        class e {
          constructor(t, n = e.now) {
            (this.SchedulerAction = t), (this.now = n);
          }
          schedule(e, t = 0, n) {
            return new this.SchedulerAction(this, e).schedule(n, t);
          }
        }
        return (e.now = () => Date.now()), e;
      })();
      class Od extends Pd {
        constructor(e, t = Pd.now) {
          super(e, () =>
            Od.delegate && Od.delegate !== this ? Od.delegate.now() : t()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(e, t = 0, n) {
          return Od.delegate && Od.delegate !== this
            ? Od.delegate.schedule(e, t, n)
            : super.schedule(e, t, n);
        }
        flush(e) {
          const { actions: t } = this;
          if (this.active) return void t.push(e);
          let n;
          this.active = !0;
          do {
            if ((n = e.execute(e.state, e.delay))) break;
          } while ((e = t.shift()));
          if (((this.active = !1), n)) {
            for (; (e = t.shift()); ) e.unsubscribe();
            throw n;
          }
        }
      }
      const Dd = new Od(Rd),
        Md = Ad({ passive: !0, capture: !0 });
      let Fd = (() => {
        class e {
          constructor(e, t) {
            (this._ngZone = e),
              (this._platform = t),
              (this._origin = null),
              (this._windowFocused = !1),
              (this._elementInfo = new Map()),
              (this._monitoredElementCount = 0),
              (this._documentKeydownListener = () => {
                (this._lastTouchTarget = null),
                  this._setOriginForCurrentEventQueue("keyboard");
              }),
              (this._documentMousedownListener = () => {
                this._lastTouchTarget ||
                  this._setOriginForCurrentEventQueue("mouse");
              }),
              (this._documentTouchstartListener = (e) => {
                null != this._touchTimeoutId &&
                  clearTimeout(this._touchTimeoutId),
                  (this._lastTouchTarget = e.composedPath
                    ? e.composedPath()[0]
                    : e.target),
                  (this._touchTimeoutId = setTimeout(
                    () => (this._lastTouchTarget = null),
                    650
                  ));
              }),
              (this._windowFocusListener = () => {
                (this._windowFocused = !0),
                  (this._windowFocusTimeoutId = setTimeout(
                    () => (this._windowFocused = !1)
                  ));
              });
          }
          monitor(e, t = !1) {
            if (!this._platform.isBrowser) return Ta(null);
            const n = Cd(e);
            if (this._elementInfo.has(n)) {
              let e = this._elementInfo.get(n);
              return (e.checkChildren = t), e.subject.asObservable();
            }
            let r = { unlisten: () => {}, checkChildren: t, subject: new k() };
            this._elementInfo.set(n, r), this._incrementMonitoredElementCount();
            let s = (e) => this._onFocus(e, n),
              i = (e) => this._onBlur(e, n);
            return (
              this._ngZone.runOutsideAngular(() => {
                n.addEventListener("focus", s, !0),
                  n.addEventListener("blur", i, !0);
              }),
              (r.unlisten = () => {
                n.removeEventListener("focus", s, !0),
                  n.removeEventListener("blur", i, !0);
              }),
              r.subject.asObservable()
            );
          }
          stopMonitoring(e) {
            const t = Cd(e),
              n = this._elementInfo.get(t);
            n &&
              (n.unlisten(),
              n.subject.complete(),
              this._setClasses(t),
              this._elementInfo.delete(t),
              this._decrementMonitoredElementCount());
          }
          focusVia(e, t, n) {
            const r = Cd(e);
            this._setOriginForCurrentEventQueue(t),
              "function" == typeof r.focus && r.focus(n);
          }
          ngOnDestroy() {
            this._elementInfo.forEach((e, t) => this.stopMonitoring(t));
          }
          _toggleClass(e, t, n) {
            n ? e.classList.add(t) : e.classList.remove(t);
          }
          _setClasses(e, t) {
            this._elementInfo.get(e) &&
              (this._toggleClass(e, "cdk-focused", !!t),
              this._toggleClass(e, "cdk-touch-focused", "touch" === t),
              this._toggleClass(e, "cdk-keyboard-focused", "keyboard" === t),
              this._toggleClass(e, "cdk-mouse-focused", "mouse" === t),
              this._toggleClass(e, "cdk-program-focused", "program" === t));
          }
          _setOriginForCurrentEventQueue(e) {
            this._ngZone.runOutsideAngular(() => {
              (this._origin = e),
                (this._originTimeoutId = setTimeout(
                  () => (this._origin = null),
                  1
                ));
            });
          }
          _wasCausedByTouch(e) {
            let t = e.target;
            return (
              this._lastTouchTarget instanceof Node &&
              t instanceof Node &&
              (t === this._lastTouchTarget || t.contains(this._lastTouchTarget))
            );
          }
          _onFocus(e, t) {
            const n = this._elementInfo.get(t);
            if (!n || (!n.checkChildren && t !== e.target)) return;
            let r = this._origin;
            r ||
              (r =
                this._windowFocused && this._lastFocusOrigin
                  ? this._lastFocusOrigin
                  : this._wasCausedByTouch(e)
                  ? "touch"
                  : "program"),
              this._setClasses(t, r),
              this._emitOrigin(n.subject, r),
              (this._lastFocusOrigin = r);
          }
          _onBlur(e, t) {
            const n = this._elementInfo.get(t);
            !n ||
              (n.checkChildren &&
                e.relatedTarget instanceof Node &&
                t.contains(e.relatedTarget)) ||
              (this._setClasses(t), this._emitOrigin(n.subject, null));
          }
          _emitOrigin(e, t) {
            this._ngZone.run(() => e.next(t));
          }
          _incrementMonitoredElementCount() {
            1 == ++this._monitoredElementCount &&
              this._platform.isBrowser &&
              this._ngZone.runOutsideAngular(() => {
                document.addEventListener(
                  "keydown",
                  this._documentKeydownListener,
                  Md
                ),
                  document.addEventListener(
                    "mousedown",
                    this._documentMousedownListener,
                    Md
                  ),
                  document.addEventListener(
                    "touchstart",
                    this._documentTouchstartListener,
                    Md
                  ),
                  window.addEventListener("focus", this._windowFocusListener);
              });
          }
          _decrementMonitoredElementCount() {
            --this._monitoredElementCount ||
              (document.removeEventListener(
                "keydown",
                this._documentKeydownListener,
                Md
              ),
              document.removeEventListener(
                "mousedown",
                this._documentMousedownListener,
                Md
              ),
              document.removeEventListener(
                "touchstart",
                this._documentTouchstartListener,
                Md
              ),
              window.removeEventListener("focus", this._windowFocusListener),
              clearTimeout(this._windowFocusTimeoutId),
              clearTimeout(this._touchTimeoutId),
              clearTimeout(this._originTimeoutId));
          }
        }
        return (
          (e.ngInjectableDef = me({
            factory: function () {
              return new e(De(qs), De(kd));
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
      const Ld = new ln("8.2.3"),
        Ud = new ke("mat-sanity-checks", {
          providedIn: "root",
          factory: function () {
            return !0;
          },
        });
      class jd {
        constructor(e, t) {
          (this._sanityChecksEnabled = e),
            (this._hammerLoader = t),
            (this._hasDoneGlobalChecks = !1),
            (this._hasCheckedHammer = !1),
            (this._document =
              "object" == typeof document && document ? document : null),
            (this._window =
              "object" == typeof window && window ? window : null),
            this._areChecksEnabled() &&
              !this._hasDoneGlobalChecks &&
              (this._checkDoctypeIsDefined(),
              this._checkThemeIsPresent(),
              this._checkCdkVersionMatch(),
              (this._hasDoneGlobalChecks = !0));
        }
        _areChecksEnabled() {
          return this._sanityChecksEnabled && Ze() && !this._isTestEnv();
        }
        _isTestEnv() {
          const e = this._window;
          return e && (e.__karma__ || e.jasmine);
        }
        _checkDoctypeIsDefined() {
          this._document &&
            !this._document.doctype &&
            console.warn(
              "Current document does not have a doctype. This may cause some Angular Material components not to behave as expected."
            );
        }
        _checkThemeIsPresent() {
          if (
            !this._document ||
            !this._document.body ||
            "function" != typeof getComputedStyle
          )
            return;
          const e = this._document.createElement("div");
          e.classList.add("mat-theme-loaded-marker"),
            this._document.body.appendChild(e);
          const t = getComputedStyle(e);
          t &&
            "none" !== t.display &&
            console.warn(
              "Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"
            ),
            this._document.body.removeChild(e);
        }
        _checkCdkVersionMatch() {
          Ld.full !== Ed.full &&
            console.warn(
              "The Angular Material version (" +
                Ld.full +
                ") does not match the Angular CDK version (" +
                Ed.full +
                ").\nPlease ensure the versions of these two packages exactly match."
            );
        }
        _checkHammerIsAvailable() {
          !this._hasCheckedHammer &&
            this._window &&
            (!this._areChecksEnabled() ||
              this._window.Hammer ||
              this._hammerLoader ||
              console.warn(
                "Could not find HammerJS. Certain Angular Material components may not work correctly."
              ),
            (this._hasCheckedHammer = !0));
        }
      }
      function zd(e) {
        return class extends e {
          constructor(...e) {
            super(...e), (this._disabled = !1);
          }
          get disabled() {
            return this._disabled;
          }
          set disabled(e) {
            this._disabled = Sd(e);
          }
        };
      }
      function Hd(e, t) {
        return class extends e {
          get color() {
            return this._color;
          }
          set color(e) {
            const n = e || t;
            n !== this._color &&
              (this._color &&
                this._elementRef.nativeElement.classList.remove(
                  "mat-" + this._color
                ),
              n && this._elementRef.nativeElement.classList.add("mat-" + n),
              (this._color = n));
          }
          constructor(...e) {
            super(...e), (this.color = t);
          }
        };
      }
      function $d(e) {
        return class extends e {
          constructor(...e) {
            super(...e), (this._disableRipple = !1);
          }
          get disableRipple() {
            return this._disableRipple;
          }
          set disableRipple(e) {
            this._disableRipple = Sd(e);
          }
        };
      }
      let Vd;
      try {
        Vd = "undefined" != typeof Intl;
      } catch (Bg) {
        Vd = !1;
      }
      const Bd = (function () {
        var e = { FADING_IN: 0, VISIBLE: 1, FADING_OUT: 2, HIDDEN: 3 };
        return (
          (e[e.FADING_IN] = "FADING_IN"),
          (e[e.VISIBLE] = "VISIBLE"),
          (e[e.FADING_OUT] = "FADING_OUT"),
          (e[e.HIDDEN] = "HIDDEN"),
          e
        );
      })();
      class qd {
        constructor(e, t, n) {
          (this._renderer = e),
            (this.element = t),
            (this.config = n),
            (this.state = Bd.HIDDEN);
        }
        fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }
      const Qd = { enterDuration: 450, exitDuration: 400 },
        Wd = Ad({ passive: !0 });
      class Kd {
        constructor(e, t, n, r) {
          (this._target = e),
            (this._ngZone = t),
            (this._isPointerDown = !1),
            (this._triggerEvents = new Map()),
            (this._activeRipples = new Set()),
            (this._onMousedown = (e) => {
              const t = (function (e) {
                  return 0 === e.buttons;
                })(e),
                n =
                  this._lastTouchStartEvent &&
                  Date.now() < this._lastTouchStartEvent + 800;
              this._target.rippleDisabled ||
                t ||
                n ||
                ((this._isPointerDown = !0),
                this.fadeInRipple(
                  e.clientX,
                  e.clientY,
                  this._target.rippleConfig
                ));
            }),
            (this._onTouchStart = (e) => {
              if (!this._target.rippleDisabled) {
                (this._lastTouchStartEvent = Date.now()),
                  (this._isPointerDown = !0);
                const t = e.changedTouches;
                for (let e = 0; e < t.length; e++)
                  this.fadeInRipple(
                    t[e].clientX,
                    t[e].clientY,
                    this._target.rippleConfig
                  );
              }
            }),
            (this._onPointerUp = () => {
              this._isPointerDown &&
                ((this._isPointerDown = !1),
                this._activeRipples.forEach((e) => {
                  !e.config.persistent &&
                    (e.state === Bd.VISIBLE ||
                      (e.config.terminateOnPointerUp &&
                        e.state === Bd.FADING_IN)) &&
                    e.fadeOut();
                }));
            }),
            r.isBrowser &&
              ((this._containerElement = Cd(n)),
              this._triggerEvents
                .set("mousedown", this._onMousedown)
                .set("mouseup", this._onPointerUp)
                .set("mouseleave", this._onPointerUp)
                .set("touchstart", this._onTouchStart)
                .set("touchend", this._onPointerUp)
                .set("touchcancel", this._onPointerUp));
        }
        fadeInRipple(e, t, n = {}) {
          const r = (this._containerRect =
              this._containerRect ||
              this._containerElement.getBoundingClientRect()),
            s = Object.assign({}, Qd, n.animation);
          n.centered &&
            ((e = r.left + r.width / 2), (t = r.top + r.height / 2));
          const i =
              n.radius ||
              (function (e, t, n) {
                const r = Math.max(Math.abs(e - n.left), Math.abs(e - n.right)),
                  s = Math.max(Math.abs(t - n.top), Math.abs(t - n.bottom));
                return Math.sqrt(r * r + s * s);
              })(e, t, r),
            o = e - r.left,
            a = t - r.top,
            l = s.enterDuration,
            c = document.createElement("div");
          c.classList.add("mat-ripple-element"),
            (c.style.left = o - i + "px"),
            (c.style.top = a - i + "px"),
            (c.style.height = 2 * i + "px"),
            (c.style.width = 2 * i + "px"),
            (c.style.backgroundColor = n.color || null),
            (c.style.transitionDuration = l + "ms"),
            this._containerElement.appendChild(c),
            window.getComputedStyle(c).getPropertyValue("opacity"),
            (c.style.transform = "scale(1)");
          const u = new qd(this, c, n);
          return (
            (u.state = Bd.FADING_IN),
            this._activeRipples.add(u),
            n.persistent || (this._mostRecentTransientRipple = u),
            this._runTimeoutOutsideZone(() => {
              const e = u === this._mostRecentTransientRipple;
              (u.state = Bd.VISIBLE),
                n.persistent || (e && this._isPointerDown) || u.fadeOut();
            }, l),
            u
          );
        }
        fadeOutRipple(e) {
          const t = this._activeRipples.delete(e);
          if (
            (e === this._mostRecentTransientRipple &&
              (this._mostRecentTransientRipple = null),
            this._activeRipples.size || (this._containerRect = null),
            !t)
          )
            return;
          const n = e.element,
            r = Object.assign({}, Qd, e.config.animation);
          (n.style.transitionDuration = r.exitDuration + "ms"),
            (n.style.opacity = "0"),
            (e.state = Bd.FADING_OUT),
            this._runTimeoutOutsideZone(() => {
              (e.state = Bd.HIDDEN), n.parentNode.removeChild(n);
            }, r.exitDuration);
        }
        fadeOutAll() {
          this._activeRipples.forEach((e) => e.fadeOut());
        }
        setupTriggerEvents(e) {
          const t = Cd(e);
          t &&
            t !== this._triggerElement &&
            (this._removeTriggerEvents(),
            this._ngZone.runOutsideAngular(() => {
              this._triggerEvents.forEach((e, n) => {
                t.addEventListener(n, e, Wd);
              });
            }),
            (this._triggerElement = t));
        }
        _runTimeoutOutsideZone(e, t = 0) {
          this._ngZone.runOutsideAngular(() => setTimeout(e, t));
        }
        _removeTriggerEvents() {
          this._triggerElement &&
            this._triggerEvents.forEach((e, t) => {
              this._triggerElement.removeEventListener(t, e, Wd);
            });
        }
      }
      const Zd = new ke("mat-ripple-global-options");
      class Gd {
        constructor(e, t, n, r, s) {
          (this._elementRef = e),
            (this.radius = 0),
            (this._disabled = !1),
            (this._isInitialized = !1),
            (this._globalOptions = r || {}),
            (this._rippleRenderer = new Kd(this, t, e, n)),
            "NoopAnimations" === s &&
              (this._globalOptions.animation = {
                enterDuration: 0,
                exitDuration: 0,
              });
        }
        get disabled() {
          return this._disabled;
        }
        set disabled(e) {
          (this._disabled = e), this._setupTriggerEventsIfEnabled();
        }
        get trigger() {
          return this._trigger || this._elementRef.nativeElement;
        }
        set trigger(e) {
          (this._trigger = e), this._setupTriggerEventsIfEnabled();
        }
        ngOnInit() {
          (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
        }
        ngOnDestroy() {
          this._rippleRenderer._removeTriggerEvents();
        }
        fadeOutAll() {
          this._rippleRenderer.fadeOutAll();
        }
        get rippleConfig() {
          return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: Object.assign(
              {},
              this._globalOptions.animation,
              this.animation
            ),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
          };
        }
        get rippleDisabled() {
          return this.disabled || !!this._globalOptions.disabled;
        }
        _setupTriggerEventsIfEnabled() {
          !this.disabled &&
            this._isInitialized &&
            this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
        launch(e, t = 0, n) {
          return "number" == typeof e
            ? this._rippleRenderer.fadeInRipple(
                e,
                t,
                Object.assign({}, this.rippleConfig, n)
              )
            : this._rippleRenderer.fadeInRipple(
                0,
                0,
                Object.assign({}, this.rippleConfig, e)
              );
        }
      }
      class Yd {}
      class Xd {}
      function Jd(e, t = null) {
        return { type: 2, steps: e, options: t };
      }
      function ep(e) {
        return { type: 6, styles: e, offset: null };
      }
      function tp(e) {
        Promise.resolve(null).then(e);
      }
      class np {
        constructor(e = 0, t = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this.parentPlayer = null),
            (this.totalTime = e + t);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((e) => e()),
            (this._onDoneFns = []));
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          tp(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((e) => e()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((e) => e()),
            (this._onDestroyFns = []));
        }
        reset() {}
        setPosition(e) {}
        getPosition() {
          return 0;
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach((e) => e()), (t.length = 0);
        }
      }
      class rp {
        constructor(e) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = e);
          let t = 0,
            n = 0,
            r = 0;
          const s = this.players.length;
          0 == s
            ? tp(() => this._onFinish())
            : this.players.forEach((e) => {
                e.onDone(() => {
                  ++t == s && this._onFinish();
                }),
                  e.onDestroy(() => {
                    ++n == s && this._onDestroy();
                  }),
                  e.onStart(() => {
                    ++r == s && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (e, t) => Math.max(e, t.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((e) => e()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((e) => e.init());
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((e) => e()),
            (this._onStartFns = []));
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((e) => e.play());
        }
        pause() {
          this.players.forEach((e) => e.pause());
        }
        restart() {
          this.players.forEach((e) => e.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((e) => e.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((e) => e.destroy()),
            this._onDestroyFns.forEach((e) => e()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((e) => e.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(e) {
          const t = e * this.totalTime;
          this.players.forEach((e) => {
            const n = e.totalTime ? Math.min(1, t / e.totalTime) : 1;
            e.setPosition(n);
          });
        }
        getPosition() {
          let e = 0;
          return (
            this.players.forEach((t) => {
              const n = t.getPosition();
              e = Math.min(n, e);
            }),
            e
          );
        }
        beforeDestroy() {
          this.players.forEach((e) => {
            e.beforeDestroy && e.beforeDestroy();
          });
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach((e) => e()), (t.length = 0);
        }
      }
      function sp() {
        return "undefined" != typeof process;
      }
      function ip(e) {
        switch (e.length) {
          case 0:
            return new np();
          case 1:
            return e[0];
          default:
            return new rp(e);
        }
      }
      function op(e, t, n, r, s = {}, i = {}) {
        const o = [],
          a = [];
        let l = -1,
          c = null;
        if (
          (r.forEach((e) => {
            const n = e.offset,
              r = n == l,
              u = (r && c) || {};
            Object.keys(e).forEach((n) => {
              let r = n,
                a = e[n];
              if ("offset" !== n)
                switch (((r = t.normalizePropertyName(r, o)), a)) {
                  case "!":
                    a = s[n];
                    break;
                  case "*":
                    a = i[n];
                    break;
                  default:
                    a = t.normalizeStyleValue(n, r, a, o);
                }
              u[r] = a;
            }),
              r || a.push(u),
              (c = u),
              (l = n);
          }),
          o.length)
        ) {
          const e = "\n - ";
          throw new Error(
            `Unable to animate due to the following errors:${e}${o.join(e)}`
          );
        }
        return a;
      }
      function ap(e, t, n, r) {
        switch (t) {
          case "start":
            e.onStart(() => r(n && lp(n, "start", e)));
            break;
          case "done":
            e.onDone(() => r(n && lp(n, "done", e)));
            break;
          case "destroy":
            e.onDestroy(() => r(n && lp(n, "destroy", e)));
        }
      }
      function lp(e, t, n) {
        const r = n.totalTime,
          s = cp(
            e.element,
            e.triggerName,
            e.fromState,
            e.toState,
            t || e.phaseName,
            null == r ? e.totalTime : r,
            !!n.disabled
          ),
          i = e._data;
        return null != i && (s._data = i), s;
      }
      function cp(e, t, n, r, s = "", i = 0, o) {
        return {
          element: e,
          triggerName: t,
          fromState: n,
          toState: r,
          phaseName: s,
          totalTime: i,
          disabled: !!o,
        };
      }
      function up(e, t, n) {
        let r;
        return (
          e instanceof Map
            ? ((r = e.get(t)), r || e.set(t, (r = n)))
            : ((r = e[t]), r || (r = e[t] = n)),
          r
        );
      }
      function hp(e) {
        const t = e.indexOf(":");
        return [e.substring(1, t), e.substr(t + 1)];
      }
      let dp = (e, t) => !1,
        pp = (e, t) => !1,
        fp = (e, t, n) => [];
      const mp = sp();
      (mp || "undefined" != typeof Element) &&
        ((dp = (e, t) => e.contains(t)),
        (pp = (() => {
          if (mp || Element.prototype.matches) return (e, t) => e.matches(t);
          {
            const e = Element.prototype,
              t =
                e.matchesSelector ||
                e.mozMatchesSelector ||
                e.msMatchesSelector ||
                e.oMatchesSelector ||
                e.webkitMatchesSelector;
            return t ? (e, n) => t.apply(e, [n]) : pp;
          }
        })()),
        (fp = (e, t, n) => {
          let r = [];
          if (n) r.push(...e.querySelectorAll(t));
          else {
            const n = e.querySelector(t);
            n && r.push(n);
          }
          return r;
        }));
      let gp = null,
        yp = !1;
      function _p(e) {
        gp ||
          ((gp = ("undefined" != typeof document ? document.body : null) || {}),
          (yp = !!gp.style && "WebkitAppearance" in gp.style));
        let t = !0;
        return (
          gp.style &&
            !(function (e) {
              return "ebkit" == e.substring(1, 6);
            })(e) &&
            ((t = e in gp.style), !t && yp) &&
            (t =
              "Webkit" + e.charAt(0).toUpperCase() + e.substr(1) in gp.style),
          t
        );
      }
      const vp = pp,
        bp = dp,
        wp = fp;
      function Ep(e) {
        const t = {};
        return (
          Object.keys(e).forEach((n) => {
            const r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
            t[r] = e[n];
          }),
          t
        );
      }
      class Sp {
        validateStyleProperty(e) {
          return _p(e);
        }
        matchesElement(e, t) {
          return vp(e, t);
        }
        containsElement(e, t) {
          return bp(e, t);
        }
        query(e, t, n) {
          return wp(e, t, n);
        }
        computeStyle(e, t, n) {
          return n || "";
        }
        animate(e, t, n, r, s, i = [], o) {
          return new np(n, r);
        }
      }
      let Cp = (() => {
        class e {}
        return (e.NOOP = new Sp()), e;
      })();
      function Tp(e) {
        if ("number" == typeof e) return e;
        const t = e.match(/^(-?[\.\d]+)(m?s)/);
        return !t || t.length < 2 ? 0 : xp(parseFloat(t[1]), t[2]);
      }
      function xp(e, t) {
        switch (t) {
          case "s":
            return 1e3 * e;
          default:
            return e;
        }
      }
      function kp(e, t, n) {
        return e.hasOwnProperty("duration")
          ? e
          : (function (e, t, n) {
              let r,
                s = 0,
                i = "";
              if ("string" == typeof e) {
                const n = e.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === n)
                  return (
                    t.push(`The provided timing value "${e}" is invalid.`),
                    { duration: 0, delay: 0, easing: "" }
                  );
                r = xp(parseFloat(n[1]), n[2]);
                const o = n[3];
                null != o && (s = xp(parseFloat(o), n[4]));
                const a = n[5];
                a && (i = a);
              } else r = e;
              if (!n) {
                let n = !1,
                  i = t.length;
                r < 0 &&
                  (t.push(
                    "Duration values below 0 are not allowed for this animation step."
                  ),
                  (n = !0)),
                  s < 0 &&
                    (t.push(
                      "Delay values below 0 are not allowed for this animation step."
                    ),
                    (n = !0)),
                  n &&
                    t.splice(
                      i,
                      0,
                      `The provided timing value "${e}" is invalid.`
                    );
              }
              return { duration: r, delay: s, easing: i };
            })(e, t, n);
      }
      function Ip(e, t = {}) {
        return (
          Object.keys(e).forEach((n) => {
            t[n] = e[n];
          }),
          t
        );
      }
      function Ap(e, t, n = {}) {
        if (t) for (let r in e) n[r] = e[r];
        else Ip(e, n);
        return n;
      }
      function Np(e, t, n) {
        return n ? t + ":" + n + ";" : "";
      }
      function Rp(e) {
        let t = "";
        for (let n = 0; n < e.style.length; n++) {
          const r = e.style.item(n);
          t += Np(0, r, e.style.getPropertyValue(r));
        }
        for (const n in e.style)
          e.style.hasOwnProperty(n) &&
            !n.startsWith("_") &&
            (t += Np(
              0,
              n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              e.style[n]
            ));
        e.setAttribute("style", t);
      }
      function Pp(e, t, n) {
        e.style &&
          (Object.keys(t).forEach((r) => {
            const s = zp(r);
            n && !n.hasOwnProperty(r) && (n[r] = e.style[s]),
              (e.style[s] = t[r]);
          }),
          sp() && Rp(e));
      }
      function Op(e, t) {
        e.style &&
          (Object.keys(t).forEach((t) => {
            const n = zp(t);
            e.style[n] = "";
          }),
          sp() && Rp(e));
      }
      function Dp(e) {
        return Array.isArray(e) ? (1 == e.length ? e[0] : Jd(e)) : e;
      }
      const Mp = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function Fp(e) {
        let t = [];
        if ("string" == typeof e) {
          const n = e.toString();
          let r;
          for (; (r = Mp.exec(n)); ) t.push(r[1]);
          Mp.lastIndex = 0;
        }
        return t;
      }
      function Lp(e, t, n) {
        const r = e.toString(),
          s = r.replace(Mp, (e, r) => {
            let s = t[r];
            return (
              t.hasOwnProperty(r) ||
                (n.push("Please provide a value for the animation param " + r),
                (s = "")),
              s.toString()
            );
          });
        return s == r ? e : s;
      }
      function Up(e) {
        const t = [];
        let n = e.next();
        for (; !n.done; ) t.push(n.value), (n = e.next());
        return t;
      }
      const jp = /-+([a-z0-9])/g;
      function zp(e) {
        return e.replace(jp, (...e) => e[1].toUpperCase());
      }
      function Hp(e, t) {
        return 0 === e || 0 === t;
      }
      function $p(e, t, n) {
        const r = Object.keys(n);
        if (r.length && t.length) {
          let i = t[0],
            o = [];
          if (
            (r.forEach((e) => {
              i.hasOwnProperty(e) || o.push(e), (i[e] = n[e]);
            }),
            o.length)
          )
            for (var s = 1; s < t.length; s++) {
              let n = t[s];
              o.forEach(function (t) {
                n[t] = Bp(e, t);
              });
            }
        }
        return t;
      }
      function Vp(e, t, n) {
        switch (t.type) {
          case 7:
            return e.visitTrigger(t, n);
          case 0:
            return e.visitState(t, n);
          case 1:
            return e.visitTransition(t, n);
          case 2:
            return e.visitSequence(t, n);
          case 3:
            return e.visitGroup(t, n);
          case 4:
            return e.visitAnimate(t, n);
          case 5:
            return e.visitKeyframes(t, n);
          case 6:
            return e.visitStyle(t, n);
          case 8:
            return e.visitReference(t, n);
          case 9:
            return e.visitAnimateChild(t, n);
          case 10:
            return e.visitAnimateRef(t, n);
          case 11:
            return e.visitQuery(t, n);
          case 12:
            return e.visitStagger(t, n);
          default:
            throw new Error(
              "Unable to resolve animation metadata node #" + t.type
            );
        }
      }
      function Bp(e, t) {
        return window.getComputedStyle(e)[t];
      }
      function qp(e, t) {
        const n = [];
        return (
          "string" == typeof e
            ? e.split(/\s*,\s*/).forEach((e) =>
                (function (e, t, n) {
                  if (":" == e[0]) {
                    const r = (function (e, t) {
                      switch (e) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (e, t) => parseFloat(t) > parseFloat(e);
                        case ":decrement":
                          return (e, t) => parseFloat(t) < parseFloat(e);
                        default:
                          return (
                            t.push(
                              `The transition alias value "${e}" is not supported`
                            ),
                            "* => *"
                          );
                      }
                    })(e, n);
                    if ("function" == typeof r) return void t.push(r);
                    e = r;
                  }
                  const r = e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == r || r.length < 4)
                    return (
                      n.push(
                        `The provided transition expression "${e}" is not supported`
                      ),
                      t
                    );
                  const s = r[1],
                    i = r[2],
                    o = r[3];
                  t.push(Kp(s, o)),
                    "<" != i[0] || ("*" == s && "*" == o) || t.push(Kp(o, s));
                })(e, n, t)
              )
            : n.push(e),
          n
        );
      }
      const Qp = new Set(["true", "1"]),
        Wp = new Set(["false", "0"]);
      function Kp(e, t) {
        const n = Qp.has(e) || Wp.has(e),
          r = Qp.has(t) || Wp.has(t);
        return (s, i) => {
          let o = "*" == e || e == s,
            a = "*" == t || t == i;
          return (
            !o && n && "boolean" == typeof s && (o = s ? Qp.has(e) : Wp.has(e)),
            !a && r && "boolean" == typeof i && (a = i ? Qp.has(t) : Wp.has(t)),
            o && a
          );
        };
      }
      const Zp = new RegExp("s*:selfs*,?", "g");
      function Gp(e, t, n) {
        return new Yp(e).build(t, n);
      }
      class Yp {
        constructor(e) {
          this._driver = e;
        }
        build(e, t) {
          const n = new Xp(t);
          return this._resetContextStyleTimingState(n), Vp(this, Dp(e), n);
        }
        _resetContextStyleTimingState(e) {
          (e.currentQuerySelector = ""),
            (e.collectedStyles = {}),
            (e.collectedStyles[""] = {}),
            (e.currentTime = 0);
        }
        visitTrigger(e, t) {
          let n = (t.queryCount = 0),
            r = (t.depCount = 0);
          const s = [],
            i = [];
          return (
            "@" == e.name.charAt(0) &&
              t.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            e.definitions.forEach((e) => {
              if ((this._resetContextStyleTimingState(t), 0 == e.type)) {
                const n = e,
                  r = n.name;
                r
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((e) => {
                    (n.name = e), s.push(this.visitState(n, t));
                  }),
                  (n.name = r);
              } else if (1 == e.type) {
                const s = this.visitTransition(e, t);
                (n += s.queryCount), (r += s.depCount), i.push(s);
              } else
                t.errors.push(
                  "only state() and transition() definitions can sit inside of a trigger()"
                );
            }),
            {
              type: 7,
              name: e.name,
              states: s,
              transitions: i,
              queryCount: n,
              depCount: r,
              options: null,
            }
          );
        }
        visitState(e, t) {
          const n = this.visitStyle(e.styles, t),
            r = (e.options && e.options.params) || null;
          if (n.containsDynamicStyles) {
            const s = new Set(),
              i = r || {};
            if (
              (n.styles.forEach((e) => {
                if (Jp(e)) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    Fp(t[e]).forEach((e) => {
                      i.hasOwnProperty(e) || s.add(e);
                    });
                  });
                }
              }),
              s.size)
            ) {
              const n = Up(s.values());
              t.errors.push(
                `state("${
                  e.name
                }", ...) must define default values for all the following style substitutions: ${n.join(
                  ", "
                )}`
              );
            }
          }
          return {
            type: 0,
            name: e.name,
            style: n,
            options: r ? { params: r } : null,
          };
        }
        visitTransition(e, t) {
          (t.queryCount = 0), (t.depCount = 0);
          const n = Vp(this, Dp(e.animation), t);
          return {
            type: 1,
            matchers: qp(e.expr, t.errors),
            animation: n,
            queryCount: t.queryCount,
            depCount: t.depCount,
            options: ef(e.options),
          };
        }
        visitSequence(e, t) {
          return {
            type: 2,
            steps: e.steps.map((e) => Vp(this, e, t)),
            options: ef(e.options),
          };
        }
        visitGroup(e, t) {
          const n = t.currentTime;
          let r = 0;
          const s = e.steps.map((e) => {
            t.currentTime = n;
            const s = Vp(this, e, t);
            return (r = Math.max(r, t.currentTime)), s;
          });
          return (
            (t.currentTime = r), { type: 3, steps: s, options: ef(e.options) }
          );
        }
        visitAnimate(e, t) {
          const n = (function (e, t) {
            let n = null;
            if (e.hasOwnProperty("duration")) n = e;
            else if ("number" == typeof e) return tf(kp(e, t).duration, 0, "");
            const r = e;
            if (
              r
                .split(/\s+/)
                .some((e) => "{" == e.charAt(0) && "{" == e.charAt(1))
            ) {
              const e = tf(0, 0, "");
              return (e.dynamic = !0), (e.strValue = r), e;
            }
            return (n = n || kp(r, t)), tf(n.duration, n.delay, n.easing);
          })(e.timings, t.errors);
          let r;
          t.currentAnimateTimings = n;
          let s = e.styles ? e.styles : ep({});
          if (5 == s.type) r = this.visitKeyframes(s, t);
          else {
            let s = e.styles,
              i = !1;
            if (!s) {
              i = !0;
              const e = {};
              n.easing && (e.easing = n.easing), (s = ep(e));
            }
            t.currentTime += n.duration + n.delay;
            const o = this.visitStyle(s, t);
            (o.isEmptyStep = i), (r = o);
          }
          return (
            (t.currentAnimateTimings = null),
            { type: 4, timings: n, style: r, options: null }
          );
        }
        visitStyle(e, t) {
          const n = this._makeStyleAst(e, t);
          return this._validateStyleAst(n, t), n;
        }
        _makeStyleAst(e, t) {
          const n = [];
          Array.isArray(e.styles)
            ? e.styles.forEach((e) => {
                "string" == typeof e
                  ? "*" == e
                    ? n.push(e)
                    : t.errors.push(
                        `The provided style string value ${e} is not allowed.`
                      )
                  : n.push(e);
              })
            : n.push(e.styles);
          let r = !1,
            s = null;
          return (
            n.forEach((e) => {
              if (Jp(e)) {
                const t = e,
                  n = t.easing;
                if ((n && ((s = n), delete t.easing), !r))
                  for (let e in t)
                    if (t[e].toString().indexOf("{{") >= 0) {
                      r = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: n,
              easing: s,
              offset: e.offset,
              containsDynamicStyles: r,
              options: null,
            }
          );
        }
        _validateStyleAst(e, t) {
          const n = t.currentAnimateTimings;
          let r = t.currentTime,
            s = t.currentTime;
          n && s > 0 && (s -= n.duration + n.delay),
            e.styles.forEach((e) => {
              "string" != typeof e &&
                Object.keys(e).forEach((n) => {
                  if (!this._driver.validateStyleProperty(n))
                    return void t.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    );
                  const i = t.collectedStyles[t.currentQuerySelector],
                    o = i[n];
                  let a = !0;
                  o &&
                    (s != r &&
                      s >= o.startTime &&
                      r <= o.endTime &&
                      (t.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${s}ms" and "${r}ms"`
                      ),
                      (a = !1)),
                    (s = o.startTime)),
                    a && (i[n] = { startTime: s, endTime: r }),
                    t.options &&
                      (function (e, t, n) {
                        const r = t.params || {},
                          s = Fp(e);
                        s.length &&
                          s.forEach((e) => {
                            r.hasOwnProperty(e) ||
                              n.push(
                                `Unable to resolve the local animation param ${e} in the given list of values`
                              );
                          });
                      })(e[n], t.options, t.errors);
                });
            });
        }
        visitKeyframes(e, t) {
          const n = { type: 5, styles: [], options: null };
          if (!t.currentAnimateTimings)
            return (
              t.errors.push(
                "keyframes() must be placed inside of a call to animate()"
              ),
              n
            );
          let r = 0;
          const s = [];
          let i = !1,
            o = !1,
            a = 0;
          const l = e.steps.map((e) => {
            const n = this._makeStyleAst(e, t);
            let l =
                null != n.offset
                  ? n.offset
                  : (function (e) {
                      if ("string" == typeof e) return null;
                      let t = null;
                      if (Array.isArray(e))
                        e.forEach((e) => {
                          if (Jp(e) && e.hasOwnProperty("offset")) {
                            const n = e;
                            (t = parseFloat(n.offset)), delete n.offset;
                          }
                        });
                      else if (Jp(e) && e.hasOwnProperty("offset")) {
                        const n = e;
                        (t = parseFloat(n.offset)), delete n.offset;
                      }
                      return t;
                    })(n.styles),
              c = 0;
            return (
              null != l && (r++, (c = n.offset = l)),
              (o = o || c < 0 || c > 1),
              (i = i || c < a),
              (a = c),
              s.push(c),
              n
            );
          });
          o &&
            t.errors.push(
              "Please ensure that all keyframe offsets are between 0 and 1"
            ),
            i &&
              t.errors.push(
                "Please ensure that all keyframe offsets are in order"
              );
          const c = e.steps.length;
          let u = 0;
          r > 0 && r < c
            ? t.errors.push(
                "Not all style() steps within the declared keyframes() contain offsets"
              )
            : 0 == r && (u = 1 / (c - 1));
          const h = c - 1,
            d = t.currentTime,
            p = t.currentAnimateTimings,
            f = p.duration;
          return (
            l.forEach((e, r) => {
              const i = u > 0 ? (r == h ? 1 : u * r) : s[r],
                o = i * f;
              (t.currentTime = d + p.delay + o),
                (p.duration = o),
                this._validateStyleAst(e, t),
                (e.offset = i),
                n.styles.push(e);
            }),
            n
          );
        }
        visitReference(e, t) {
          return {
            type: 8,
            animation: Vp(this, Dp(e.animation), t),
            options: ef(e.options),
          };
        }
        visitAnimateChild(e, t) {
          return t.depCount++, { type: 9, options: ef(e.options) };
        }
        visitAnimateRef(e, t) {
          return {
            type: 10,
            animation: this.visitReference(e.animation, t),
            options: ef(e.options),
          };
        }
        visitQuery(e, t) {
          const n = t.currentQuerySelector,
            r = e.options || {};
          t.queryCount++, (t.currentQuery = e);
          const [s, i] = (function (e) {
            const t = !!e.split(/\s*,\s*/).find((e) => ":self" == e);
            return (
              t && (e = e.replace(Zp, "")),
              [
                (e = e
                  .replace(/@\*/g, ".ng-trigger")
                  .replace(/@\w+/g, (e) => ".ng-trigger-" + e.substr(1))
                  .replace(/:animating/g, ".ng-animating")),
                t,
              ]
            );
          })(e.selector);
          (t.currentQuerySelector = n.length ? n + " " + s : s),
            up(t.collectedStyles, t.currentQuerySelector, {});
          const o = Vp(this, Dp(e.animation), t);
          return (
            (t.currentQuery = null),
            (t.currentQuerySelector = n),
            {
              type: 11,
              selector: s,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: i,
              animation: o,
              originalSelector: e.selector,
              options: ef(e.options),
            }
          );
        }
        visitStagger(e, t) {
          t.currentQuery ||
            t.errors.push("stagger() can only be used inside of query()");
          const n =
            "full" === e.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : kp(e.timings, t.errors, !0);
          return {
            type: 12,
            animation: Vp(this, Dp(e.animation), t),
            timings: n,
            options: null,
          };
        }
      }
      class Xp {
        constructor(e) {
          (this.errors = e),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function Jp(e) {
        return !Array.isArray(e) && "object" == typeof e;
      }
      function ef(e) {
        var t;
        return (
          e
            ? (e = Ip(e)).params && (e.params = (t = e.params) ? Ip(t) : null)
            : (e = {}),
          e
        );
      }
      function tf(e, t, n) {
        return { duration: e, delay: t, easing: n };
      }
      function nf(e, t, n, r, s, i, o = null, a = !1) {
        return {
          type: 1,
          element: e,
          keyframes: t,
          preStyleProps: n,
          postStyleProps: r,
          duration: s,
          delay: i,
          totalTime: s + i,
          easing: o,
          subTimeline: a,
        };
      }
      class rf {
        constructor() {
          this._map = new Map();
        }
        consume(e) {
          let t = this._map.get(e);
          return t ? this._map.delete(e) : (t = []), t;
        }
        append(e, t) {
          let n = this._map.get(e);
          n || this._map.set(e, (n = [])), n.push(...t);
        }
        has(e) {
          return this._map.has(e);
        }
        clear() {
          this._map.clear();
        }
      }
      const sf = new RegExp(":enter", "g"),
        of = new RegExp(":leave", "g");
      function af(e, t, n, r, s, i = {}, o = {}, a, l, c = []) {
        return new lf().buildKeyframes(e, t, n, r, s, i, o, a, l, c);
      }
      class lf {
        buildKeyframes(e, t, n, r, s, i, o, a, l, c = []) {
          l = l || new rf();
          const u = new uf(e, t, l, r, s, c, []);
          (u.options = a),
            u.currentTimeline.setStyles([i], null, u.errors, a),
            Vp(this, n, u);
          const h = u.timelines.filter((e) => e.containsAnimation());
          if (h.length && Object.keys(o).length) {
            const e = h[h.length - 1];
            e.allowOnlyTimelineStyles() || e.setStyles([o], null, u.errors, a);
          }
          return h.length
            ? h.map((e) => e.buildKeyframes())
            : [nf(t, [], [], [], 0, 0, "", !1)];
        }
        visitTrigger(e, t) {}
        visitState(e, t) {}
        visitTransition(e, t) {}
        visitAnimateChild(e, t) {
          const n = t.subInstructions.consume(t.element);
          if (n) {
            const r = t.createSubContext(e.options),
              s = t.currentTimeline.currentTime,
              i = this._visitSubInstructions(n, r, r.options);
            s != i && t.transformIntoNewTimeline(i);
          }
          t.previousNode = e;
        }
        visitAnimateRef(e, t) {
          const n = t.createSubContext(e.options);
          n.transformIntoNewTimeline(),
            this.visitReference(e.animation, n),
            t.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (t.previousNode = e);
        }
        _visitSubInstructions(e, t, n) {
          let r = t.currentTimeline.currentTime;
          const s = null != n.duration ? Tp(n.duration) : null,
            i = null != n.delay ? Tp(n.delay) : null;
          return (
            0 !== s &&
              e.forEach((e) => {
                const n = t.appendInstructionToTimeline(e, s, i);
                r = Math.max(r, n.duration + n.delay);
              }),
            r
          );
        }
        visitReference(e, t) {
          t.updateOptions(e.options, !0),
            Vp(this, e.animation, t),
            (t.previousNode = e);
        }
        visitSequence(e, t) {
          const n = t.subContextCount;
          let r = t;
          const s = e.options;
          if (
            s &&
            (s.params || s.delay) &&
            ((r = t.createSubContext(s)),
            r.transformIntoNewTimeline(),
            null != s.delay)
          ) {
            6 == r.previousNode.type &&
              (r.currentTimeline.snapshotCurrentStyles(),
              (r.previousNode = cf));
            const e = Tp(s.delay);
            r.delayNextStep(e);
          }
          e.steps.length &&
            (e.steps.forEach((e) => Vp(this, e, r)),
            r.currentTimeline.applyStylesToKeyframe(),
            r.subContextCount > n && r.transformIntoNewTimeline()),
            (t.previousNode = e);
        }
        visitGroup(e, t) {
          const n = [];
          let r = t.currentTimeline.currentTime;
          const s = e.options && e.options.delay ? Tp(e.options.delay) : 0;
          e.steps.forEach((i) => {
            const o = t.createSubContext(e.options);
            s && o.delayNextStep(s),
              Vp(this, i, o),
              (r = Math.max(r, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline);
          }),
            n.forEach((e) => t.currentTimeline.mergeTimelineCollectedStyles(e)),
            t.transformIntoNewTimeline(r),
            (t.previousNode = e);
        }
        _visitTiming(e, t) {
          if (e.dynamic) {
            const n = e.strValue;
            return kp(t.params ? Lp(n, t.params, t.errors) : n, t.errors);
          }
          return { duration: e.duration, delay: e.delay, easing: e.easing };
        }
        visitAnimate(e, t) {
          const n = (t.currentAnimateTimings = this._visitTiming(e.timings, t)),
            r = t.currentTimeline;
          n.delay && (t.incrementTime(n.delay), r.snapshotCurrentStyles());
          const s = e.style;
          5 == s.type
            ? this.visitKeyframes(s, t)
            : (t.incrementTime(n.duration),
              this.visitStyle(s, t),
              r.applyStylesToKeyframe()),
            (t.currentAnimateTimings = null),
            (t.previousNode = e);
        }
        visitStyle(e, t) {
          const n = t.currentTimeline,
            r = t.currentAnimateTimings;
          !r && n.getCurrentStyleProperties().length && n.forwardFrame();
          const s = (r && r.easing) || e.easing;
          e.isEmptyStep
            ? n.applyEmptyStep(s)
            : n.setStyles(e.styles, s, t.errors, t.options),
            (t.previousNode = e);
        }
        visitKeyframes(e, t) {
          const n = t.currentAnimateTimings,
            r = t.currentTimeline.duration,
            s = n.duration,
            i = t.createSubContext().currentTimeline;
          (i.easing = n.easing),
            e.styles.forEach((e) => {
              i.forwardTime((e.offset || 0) * s),
                i.setStyles(e.styles, e.easing, t.errors, t.options),
                i.applyStylesToKeyframe();
            }),
            t.currentTimeline.mergeTimelineCollectedStyles(i),
            t.transformIntoNewTimeline(r + s),
            (t.previousNode = e);
        }
        visitQuery(e, t) {
          const n = t.currentTimeline.currentTime,
            r = e.options || {},
            s = r.delay ? Tp(r.delay) : 0;
          s &&
            (6 === t.previousNode.type ||
              (0 == n &&
                t.currentTimeline.getCurrentStyleProperties().length)) &&
            (t.currentTimeline.snapshotCurrentStyles(), (t.previousNode = cf));
          let i = n;
          const o = t.invokeQuery(
            e.selector,
            e.originalSelector,
            e.limit,
            e.includeSelf,
            !!r.optional,
            t.errors
          );
          t.currentQueryTotal = o.length;
          let a = null;
          o.forEach((n, r) => {
            t.currentQueryIndex = r;
            const o = t.createSubContext(e.options, n);
            s && o.delayNextStep(s),
              n === t.element && (a = o.currentTimeline),
              Vp(this, e.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (i = Math.max(i, o.currentTimeline.currentTime));
          }),
            (t.currentQueryIndex = 0),
            (t.currentQueryTotal = 0),
            t.transformIntoNewTimeline(i),
            a &&
              (t.currentTimeline.mergeTimelineCollectedStyles(a),
              t.currentTimeline.snapshotCurrentStyles()),
            (t.previousNode = e);
        }
        visitStagger(e, t) {
          const n = t.parentContext,
            r = t.currentTimeline,
            s = e.timings,
            i = Math.abs(s.duration),
            o = i * (t.currentQueryTotal - 1);
          let a = i * t.currentQueryIndex;
          switch (s.duration < 0 ? "reverse" : s.easing) {
            case "reverse":
              a = o - a;
              break;
            case "full":
              a = n.currentStaggerTime;
          }
          const l = t.currentTimeline;
          a && l.delayNextStep(a);
          const c = l.currentTime;
          Vp(this, e.animation, t),
            (t.previousNode = e),
            (n.currentStaggerTime =
              r.currentTime - c + (r.startTime - n.currentTimeline.startTime));
        }
      }
      const cf = {};
      class uf {
        constructor(e, t, n, r, s, i, o, a) {
          (this._driver = e),
            (this.element = t),
            (this.subInstructions = n),
            (this._enterClassName = r),
            (this._leaveClassName = s),
            (this.errors = i),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = cf),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = a || new hf(this._driver, t, 0)),
            o.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(e, t) {
          if (!e) return;
          const n = e;
          let r = this.options;
          null != n.duration && (r.duration = Tp(n.duration)),
            null != n.delay && (r.delay = Tp(n.delay));
          const s = n.params;
          if (s) {
            let e = r.params;
            e || (e = this.options.params = {}),
              Object.keys(s).forEach((n) => {
                (t && e.hasOwnProperty(n)) || (e[n] = Lp(s[n], e, this.errors));
              });
          }
        }
        _copyOptions() {
          const e = {};
          if (this.options) {
            const t = this.options.params;
            if (t) {
              const n = (e.params = {});
              Object.keys(t).forEach((e) => {
                n[e] = t[e];
              });
            }
          }
          return e;
        }
        createSubContext(e = null, t, n) {
          const r = t || this.element,
            s = new uf(
              this._driver,
              r,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(r, n || 0)
            );
          return (
            (s.previousNode = this.previousNode),
            (s.currentAnimateTimings = this.currentAnimateTimings),
            (s.options = this._copyOptions()),
            s.updateOptions(e),
            (s.currentQueryIndex = this.currentQueryIndex),
            (s.currentQueryTotal = this.currentQueryTotal),
            (s.parentContext = this),
            this.subContextCount++,
            s
          );
        }
        transformIntoNewTimeline(e) {
          return (
            (this.previousNode = cf),
            (this.currentTimeline = this.currentTimeline.fork(this.element, e)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(e, t, n) {
          const r = {
              duration: null != t ? t : e.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != n ? n : 0) +
                e.delay,
              easing: "",
            },
            s = new df(
              this._driver,
              e.element,
              e.keyframes,
              e.preStyleProps,
              e.postStyleProps,
              r,
              e.stretchStartingKeyframe
            );
          return this.timelines.push(s), r;
        }
        incrementTime(e) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + e);
        }
        delayNextStep(e) {
          e > 0 && this.currentTimeline.delayNextStep(e);
        }
        invokeQuery(e, t, n, r, s, i) {
          let o = [];
          if ((r && o.push(this.element), e.length > 0)) {
            e = (e = e.replace(sf, "." + this._enterClassName)).replace(
              of,
              "." + this._leaveClassName
            );
            let t = this._driver.query(this.element, e, 1 != n);
            0 !== n &&
              (t = n < 0 ? t.slice(t.length + n, t.length) : t.slice(0, n)),
              o.push(...t);
          }
          return (
            s ||
              0 != o.length ||
              i.push(
                `\`query("${t}")\` returned zero elements. (Use \`query("${t}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          );
        }
      }
      class hf {
        constructor(e, t, n, r) {
          (this._driver = e),
            (this.element = t),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = r),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(
              t
            )),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                t,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(e) {
          const t =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || t
            ? (this.forwardTime(this.currentTime + e),
              t && this.snapshotCurrentStyles())
            : (this.startTime += e);
        }
        fork(e, t) {
          return (
            this.applyStylesToKeyframe(),
            new hf(
              this._driver,
              e,
              t || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(e) {
          this.applyStylesToKeyframe(),
            (this.duration = e),
            this._loadKeyframe();
        }
        _updateStyle(e, t) {
          (this._localTimelineStyles[e] = t),
            (this._globalTimelineStyles[e] = t),
            (this._styleSummary[e] = { time: this.currentTime, value: t });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(e) {
          e && (this._previousKeyframe.easing = e),
            Object.keys(this._globalTimelineStyles).forEach((e) => {
              (this._backFill[e] = this._globalTimelineStyles[e] || "*"),
                (this._currentKeyframe[e] = "*");
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(e, t, n, r) {
          t && (this._previousKeyframe.easing = t);
          const s = (r && r.params) || {},
            i = (function (e, t) {
              const n = {};
              let r;
              return (
                e.forEach((e) => {
                  "*" === e
                    ? ((r = r || Object.keys(t)),
                      r.forEach((e) => {
                        n[e] = "*";
                      }))
                    : Ap(e, !1, n);
                }),
                n
              );
            })(e, this._globalTimelineStyles);
          Object.keys(i).forEach((e) => {
            const t = Lp(i[e], s, n);
            (this._pendingStyles[e] = t),
              this._localTimelineStyles.hasOwnProperty(e) ||
                (this._backFill[e] = this._globalTimelineStyles.hasOwnProperty(
                  e
                )
                  ? this._globalTimelineStyles[e]
                  : "*"),
              this._updateStyle(e, t);
          });
        }
        applyStylesToKeyframe() {
          const e = this._pendingStyles,
            t = Object.keys(e);
          0 != t.length &&
            ((this._pendingStyles = {}),
            t.forEach((t) => {
              this._currentKeyframe[t] = e[t];
            }),
            Object.keys(this._localTimelineStyles).forEach((e) => {
              this._currentKeyframe.hasOwnProperty(e) ||
                (this._currentKeyframe[e] = this._localTimelineStyles[e]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((e) => {
            const t = this._localTimelineStyles[e];
            (this._pendingStyles[e] = t), this._updateStyle(e, t);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const e = [];
          for (let t in this._currentKeyframe) e.push(t);
          return e;
        }
        mergeTimelineCollectedStyles(e) {
          Object.keys(e._styleSummary).forEach((t) => {
            const n = this._styleSummary[t],
              r = e._styleSummary[t];
            (!n || r.time > n.time) && this._updateStyle(t, r.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const e = new Set(),
            t = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration;
          let r = [];
          this._keyframes.forEach((s, i) => {
            const o = Ap(s, !0);
            Object.keys(o).forEach((n) => {
              const r = o[n];
              "!" == r ? e.add(n) : "*" == r && t.add(n);
            }),
              n || (o.offset = i / this.duration),
              r.push(o);
          });
          const s = e.size ? Up(e.values()) : [],
            i = t.size ? Up(t.values()) : [];
          if (n) {
            const e = r[0],
              t = Ip(e);
            (e.offset = 0), (t.offset = 1), (r = [e, t]);
          }
          return nf(
            this.element,
            r,
            s,
            i,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class df extends hf {
        constructor(e, t, n, r, s, i, o = !1) {
          super(e, t, i.delay),
            (this.element = t),
            (this.keyframes = n),
            (this.preStyleProps = r),
            (this.postStyleProps = s),
            (this._stretchStartingKeyframe = o),
            (this.timings = {
              duration: i.duration,
              delay: i.delay,
              easing: i.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let e = this.keyframes,
            { delay: t, duration: n, easing: r } = this.timings;
          if (this._stretchStartingKeyframe && t) {
            const s = [],
              i = n + t,
              o = t / i,
              a = Ap(e[0], !1);
            (a.offset = 0), s.push(a);
            const l = Ap(e[0], !1);
            (l.offset = pf(o)), s.push(l);
            const c = e.length - 1;
            for (let r = 1; r <= c; r++) {
              let o = Ap(e[r], !1);
              (o.offset = pf((t + o.offset * n) / i)), s.push(o);
            }
            (n = i), (t = 0), (r = ""), (e = s);
          }
          return nf(
            this.element,
            e,
            this.preStyleProps,
            this.postStyleProps,
            n,
            t,
            r,
            !0
          );
        }
      }
      function pf(e, t = 3) {
        const n = Math.pow(10, t - 1);
        return Math.round(e * n) / n;
      }
      class ff {}
      class mf extends ff {
        normalizePropertyName(e, t) {
          return zp(e);
        }
        normalizeStyleValue(e, t, n, r) {
          let s = "";
          const i = n.toString().trim();
          if (gf[t] && 0 !== n && "0" !== n)
            if ("number" == typeof n) s = "px";
            else {
              const t = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              t &&
                0 == t[1].length &&
                r.push(`Please provide a CSS unit value for ${e}:${n}`);
            }
          return i + s;
        }
      }
      const gf = (() =>
        (function (e) {
          const t = {};
          return e.forEach((e) => (t[e] = !0)), t;
        })(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        ))();
      function yf(e, t, n, r, s, i, o, a, l, c, u, h, d) {
        return {
          type: 0,
          element: e,
          triggerName: t,
          isRemovalTransition: s,
          fromState: n,
          fromStyles: i,
          toState: r,
          toStyles: o,
          timelines: a,
          queriedElements: l,
          preStyleProps: c,
          postStyleProps: u,
          totalTime: h,
          errors: d,
        };
      }
      const _f = {};
      class vf {
        constructor(e, t, n) {
          (this._triggerName = e), (this.ast = t), (this._stateStyles = n);
        }
        match(e, t, n, r) {
          return (function (e, t, n, r, s) {
            return e.some((e) => e(t, n, r, s));
          })(this.ast.matchers, e, t, n, r);
        }
        buildStyles(e, t, n) {
          const r = this._stateStyles["*"],
            s = this._stateStyles[e],
            i = r ? r.buildStyles(t, n) : {};
          return s ? s.buildStyles(t, n) : i;
        }
        build(e, t, n, r, s, i, o, a, l, c) {
          const u = [],
            h = (this.ast.options && this.ast.options.params) || _f,
            d = this.buildStyles(n, (o && o.params) || _f, u),
            p = (a && a.params) || _f,
            f = this.buildStyles(r, p, u),
            m = new Set(),
            g = new Map(),
            y = new Map(),
            _ = "void" === r,
            v = { params: Object.assign({}, h, p) },
            b = c ? [] : af(e, t, this.ast.animation, s, i, d, f, v, l, u);
          let w = 0;
          if (
            (b.forEach((e) => {
              w = Math.max(e.duration + e.delay, w);
            }),
            u.length)
          )
            return yf(t, this._triggerName, n, r, _, d, f, [], [], g, y, w, u);
          b.forEach((e) => {
            const n = e.element,
              r = up(g, n, {});
            e.preStyleProps.forEach((e) => (r[e] = !0));
            const s = up(y, n, {});
            e.postStyleProps.forEach((e) => (s[e] = !0)), n !== t && m.add(n);
          });
          const E = Up(m.values());
          return yf(t, this._triggerName, n, r, _, d, f, b, E, g, y, w);
        }
      }
      class bf {
        constructor(e, t) {
          (this.styles = e), (this.defaultParams = t);
        }
        buildStyles(e, t) {
          const n = {},
            r = Ip(this.defaultParams);
          return (
            Object.keys(e).forEach((t) => {
              const n = e[t];
              null != n && (r[t] = n);
            }),
            this.styles.styles.forEach((e) => {
              if ("string" != typeof e) {
                const s = e;
                Object.keys(s).forEach((e) => {
                  let i = s[e];
                  i.length > 1 && (i = Lp(i, r, t)), (n[e] = i);
                });
              }
            }),
            n
          );
        }
      }
      class wf {
        constructor(e, t) {
          (this.name = e),
            (this.ast = t),
            (this.transitionFactories = []),
            (this.states = {}),
            t.states.forEach((e) => {
              this.states[e.name] = new bf(
                e.style,
                (e.options && e.options.params) || {}
              );
            }),
            Ef(this.states, "true", "1"),
            Ef(this.states, "false", "0"),
            t.transitions.forEach((t) => {
              this.transitionFactories.push(new vf(e, t, this.states));
            }),
            (this.fallbackTransition = new vf(
              e,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(e, t) => !0],
                options: null,
                queryCount: 0,
                depCount: 0,
              },
              this.states
            ));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(e, t, n, r) {
          return (
            this.transitionFactories.find((s) => s.match(e, t, n, r)) || null
          );
        }
        matchStyles(e, t, n) {
          return this.fallbackTransition.buildStyles(e, t, n);
        }
      }
      function Ef(e, t, n) {
        e.hasOwnProperty(t)
          ? e.hasOwnProperty(n) || (e[n] = e[t])
          : e.hasOwnProperty(n) && (e[t] = e[n]);
      }
      const Sf = new rf();
      class Cf {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this._driver = t),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(e, t) {
          const n = [],
            r = Gp(this._driver, t, n);
          if (n.length)
            throw new Error(
              "Unable to build the animation due to the following errors: " +
                n.join("\n")
            );
          this._animations[e] = r;
        }
        _buildPlayer(e, t, n) {
          const r = e.element,
            s = op(0, this._normalizer, 0, e.keyframes, t, n);
          return this._driver.animate(
            r,
            s,
            e.duration,
            e.delay,
            e.easing,
            [],
            !0
          );
        }
        create(e, t, n = {}) {
          const r = [],
            s = this._animations[e];
          let i;
          const o = new Map();
          if (
            (s
              ? ((i = af(
                  this._driver,
                  t,
                  s,
                  "ng-enter",
                  "ng-leave",
                  {},
                  {},
                  n,
                  Sf,
                  r
                )),
                i.forEach((e) => {
                  const t = up(o, e.element, {});
                  e.postStyleProps.forEach((e) => (t[e] = null));
                }))
              : (r.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (i = [])),
            r.length)
          )
            throw new Error(
              "Unable to create the animation due to the following errors: " +
                r.join("\n")
            );
          o.forEach((e, t) => {
            Object.keys(e).forEach((n) => {
              e[n] = this._driver.computeStyle(t, n, "*");
            });
          });
          const a = ip(
            i.map((e) => {
              const t = o.get(e.element);
              return this._buildPlayer(e, {}, t);
            })
          );
          return (
            (this._playersById[e] = a),
            a.onDestroy(() => this.destroy(e)),
            this.players.push(a),
            a
          );
        }
        destroy(e) {
          const t = this._getPlayer(e);
          t.destroy(), delete this._playersById[e];
          const n = this.players.indexOf(t);
          n >= 0 && this.players.splice(n, 1);
        }
        _getPlayer(e) {
          const t = this._playersById[e];
          if (!t)
            throw new Error(
              "Unable to find the timeline player referenced by " + e
            );
          return t;
        }
        listen(e, t, n, r) {
          const s = cp(t, "", "", "");
          return ap(this._getPlayer(e), n, s, r), () => {};
        }
        command(e, t, n, r) {
          if ("register" == n) return void this.register(e, r[0]);
          if ("create" == n) return void this.create(e, t, r[0] || {});
          const s = this._getPlayer(e);
          switch (n) {
            case "play":
              s.play();
              break;
            case "pause":
              s.pause();
              break;
            case "reset":
              s.reset();
              break;
            case "restart":
              s.restart();
              break;
            case "finish":
              s.finish();
              break;
            case "init":
              s.init();
              break;
            case "setPosition":
              s.setPosition(parseFloat(r[0]));
              break;
            case "destroy":
              this.destroy(e);
          }
        }
      }
      const Tf = [],
        xf = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        kf = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        };
      class If {
        constructor(e, t = "") {
          this.namespaceId = t;
          const n = e && e.hasOwnProperty("value");
          if (((this.value = null != (r = n ? e.value : e) ? r : null), n)) {
            const t = Ip(e);
            delete t.value, (this.options = t);
          } else this.options = {};
          var r;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(e) {
          const t = e.params;
          if (t) {
            const e = this.options.params;
            Object.keys(t).forEach((n) => {
              null == e[n] && (e[n] = t[n]);
            });
          }
        }
      }
      const Af = new If("void");
      class Nf {
        constructor(e, t, n) {
          (this.id = e),
            (this.hostElement = t),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + e),
            Lf(t, this._hostClassName);
        }
        listen(e, t, n, r) {
          if (!this._triggers.hasOwnProperty(t))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${t}" doesn't exist!`
            );
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${t}" because the provided event is undefined!`
            );
          if ("start" != (s = n) && "done" != s)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${t}" is not supported!`
            );
          var s;
          const i = up(this._elementListeners, e, []),
            o = { name: t, phase: n, callback: r };
          i.push(o);
          const a = up(this._engine.statesByElement, e, {});
          return (
            a.hasOwnProperty(t) ||
              (Lf(e, "ng-trigger"), Lf(e, "ng-trigger-" + t), (a[t] = Af)),
            () => {
              this._engine.afterFlush(() => {
                const e = i.indexOf(o);
                e >= 0 && i.splice(e, 1), this._triggers[t] || delete a[t];
              });
            }
          );
        }
        register(e, t) {
          return !this._triggers[e] && ((this._triggers[e] = t), !0);
        }
        _getTrigger(e) {
          const t = this._triggers[e];
          if (!t)
            throw new Error(
              `The provided animation trigger "${e}" has not been registered!`
            );
          return t;
        }
        trigger(e, t, n, r = !0) {
          const s = this._getTrigger(t),
            i = new Pf(this.id, t, e);
          let o = this._engine.statesByElement.get(e);
          o ||
            (Lf(e, "ng-trigger"),
            Lf(e, "ng-trigger-" + t),
            this._engine.statesByElement.set(e, (o = {})));
          let a = o[t];
          const l = new If(n, this.id);
          if (
            (!(n && n.hasOwnProperty("value")) &&
              a &&
              l.absorbOptions(a.options),
            (o[t] = l),
            a || (a = Af),
            "void" !== l.value && a.value === l.value)
          ) {
            if (
              !(function (e, t) {
                const n = Object.keys(e),
                  r = Object.keys(t);
                if (n.length != r.length) return !1;
                for (let s = 0; s < n.length; s++) {
                  const r = n[s];
                  if (!t.hasOwnProperty(r) || e[r] !== t[r]) return !1;
                }
                return !0;
              })(a.params, l.params)
            ) {
              const t = [],
                n = s.matchStyles(a.value, a.params, t),
                r = s.matchStyles(l.value, l.params, t);
              t.length
                ? this._engine.reportError(t)
                : this._engine.afterFlush(() => {
                    Op(e, n), Pp(e, r);
                  });
            }
            return;
          }
          const c = up(this._engine.playersByElement, e, []);
          c.forEach((e) => {
            e.namespaceId == this.id &&
              e.triggerName == t &&
              e.queued &&
              e.destroy();
          });
          let u = s.matchTransition(a.value, l.value, e, l.params),
            h = !1;
          if (!u) {
            if (!r) return;
            (u = s.fallbackTransition), (h = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: e,
              triggerName: t,
              transition: u,
              fromState: a,
              toState: l,
              player: i,
              isFallbackTransition: h,
            }),
            h ||
              (Lf(e, "ng-animate-queued"),
              i.onStart(() => {
                Uf(e, "ng-animate-queued");
              })),
            i.onDone(() => {
              let t = this.players.indexOf(i);
              t >= 0 && this.players.splice(t, 1);
              const n = this._engine.playersByElement.get(e);
              if (n) {
                let e = n.indexOf(i);
                e >= 0 && n.splice(e, 1);
              }
            }),
            this.players.push(i),
            c.push(i),
            i
          );
        }
        deregister(e) {
          delete this._triggers[e],
            this._engine.statesByElement.forEach((t, n) => {
              delete t[e];
            }),
            this._elementListeners.forEach((t, n) => {
              this._elementListeners.set(
                n,
                t.filter((t) => t.name != e)
              );
            });
        }
        clearElementCache(e) {
          this._engine.statesByElement.delete(e),
            this._elementListeners.delete(e);
          const t = this._engine.playersByElement.get(e);
          t &&
            (t.forEach((e) => e.destroy()),
            this._engine.playersByElement.delete(e));
        }
        _signalRemovalForInnerTriggers(e, t, n = !1) {
          this._engine.driver.query(e, ".ng-trigger", !0).forEach((e) => {
            if (e.__ng_removed) return;
            const n = this._engine.fetchNamespacesByElement(e);
            n.size
              ? n.forEach((n) => n.triggerLeaveAnimation(e, t, !1, !0))
              : this.clearElementCache(e);
          });
        }
        triggerLeaveAnimation(e, t, n, r) {
          const s = this._engine.statesByElement.get(e);
          if (s) {
            const i = [];
            if (
              (Object.keys(s).forEach((t) => {
                if (this._triggers[t]) {
                  const n = this.trigger(e, t, "void", r);
                  n && i.push(n);
                }
              }),
              i.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, e, !0, t),
                n && ip(i).onDone(() => this._engine.processLeaveNode(e)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(e) {
          const t = this._elementListeners.get(e);
          if (t) {
            const n = new Set();
            t.forEach((t) => {
              const r = t.name;
              if (n.has(r)) return;
              n.add(r);
              const s = this._triggers[r].fallbackTransition,
                i = this._engine.statesByElement.get(e)[r] || Af,
                o = new If("void"),
                a = new Pf(this.id, r, e);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: e,
                  triggerName: r,
                  transition: s,
                  fromState: i,
                  toState: o,
                  player: a,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(e, t) {
          const n = this._engine;
          if (
            (e.childElementCount &&
              this._signalRemovalForInnerTriggers(e, t, !0),
            this.triggerLeaveAnimation(e, t, !0))
          )
            return;
          let r = !1;
          if (n.totalAnimations) {
            const t = n.players.length ? n.playersByQueriedElement.get(e) : [];
            if (t && t.length) r = !0;
            else {
              let t = e;
              for (; (t = t.parentNode); )
                if (n.statesByElement.get(t)) {
                  r = !0;
                  break;
                }
            }
          }
          this.prepareLeaveAnimationListeners(e),
            r
              ? n.markElementAsRemoved(this.id, e, !1, t)
              : (n.afterFlush(() => this.clearElementCache(e)),
                n.destroyInnerAnimations(e),
                n._onRemovalComplete(e, t));
        }
        insertNode(e, t) {
          Lf(e, this._hostClassName);
        }
        drainQueuedTransitions(e) {
          const t = [];
          return (
            this._queue.forEach((n) => {
              const r = n.player;
              if (r.destroyed) return;
              const s = n.element,
                i = this._elementListeners.get(s);
              i &&
                i.forEach((t) => {
                  if (t.name == n.triggerName) {
                    const r = cp(
                      s,
                      n.triggerName,
                      n.fromState.value,
                      n.toState.value
                    );
                    (r._data = e), ap(n.player, t.phase, r, t.callback);
                  }
                }),
                r.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      r.destroy();
                    })
                  : t.push(n);
            }),
            (this._queue = []),
            t.sort((e, t) => {
              const n = e.transition.ast.depCount,
                r = t.transition.ast.depCount;
              return 0 == n || 0 == r
                ? n - r
                : this._engine.driver.containsElement(e.element, t.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(e) {
          this.players.forEach((e) => e.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, e);
        }
        elementContainsData(e) {
          let t = !1;
          return (
            this._elementListeners.has(e) && (t = !0),
            (t = !!this._queue.find((t) => t.element === e) || t),
            t
          );
        }
      }
      class Rf {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this.driver = t),
            (this._normalizer = n),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (e, t) => {});
        }
        _onRemovalComplete(e, t) {
          this.onRemovalComplete(e, t);
        }
        get queuedPlayers() {
          const e = [];
          return (
            this._namespaceList.forEach((t) => {
              t.players.forEach((t) => {
                t.queued && e.push(t);
              });
            }),
            e
          );
        }
        createNamespace(e, t) {
          const n = new Nf(e, t, this);
          return (
            t.parentNode
              ? this._balanceNamespaceList(n, t)
              : (this.newHostElements.set(t, n), this.collectEnterElement(t)),
            (this._namespaceLookup[e] = n)
          );
        }
        _balanceNamespaceList(e, t) {
          const n = this._namespaceList.length - 1;
          if (n >= 0) {
            let r = !1;
            for (let s = n; s >= 0; s--)
              if (
                this.driver.containsElement(
                  this._namespaceList[s].hostElement,
                  t
                )
              ) {
                this._namespaceList.splice(s + 1, 0, e), (r = !0);
                break;
              }
            r || this._namespaceList.splice(0, 0, e);
          } else this._namespaceList.push(e);
          return this.namespacesByHostElement.set(t, e), e;
        }
        register(e, t) {
          let n = this._namespaceLookup[e];
          return n || (n = this.createNamespace(e, t)), n;
        }
        registerTrigger(e, t, n) {
          let r = this._namespaceLookup[e];
          r && r.register(t, n) && this.totalAnimations++;
        }
        destroy(e, t) {
          if (!e) return;
          const n = this._fetchNamespace(e);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement),
              delete this._namespaceLookup[e];
            const t = this._namespaceList.indexOf(n);
            t >= 0 && this._namespaceList.splice(t, 1);
          }),
            this.afterFlushAnimationsDone(() => n.destroy(t));
        }
        _fetchNamespace(e) {
          return this._namespaceLookup[e];
        }
        fetchNamespacesByElement(e) {
          const t = new Set(),
            n = this.statesByElement.get(e);
          if (n) {
            const e = Object.keys(n);
            for (let r = 0; r < e.length; r++) {
              const s = n[e[r]].namespaceId;
              if (s) {
                const e = this._fetchNamespace(s);
                e && t.add(e);
              }
            }
          }
          return t;
        }
        trigger(e, t, n, r) {
          if (Of(t)) {
            const s = this._fetchNamespace(e);
            if (s) return s.trigger(t, n, r), !0;
          }
          return !1;
        }
        insertNode(e, t, n, r) {
          if (!Of(t)) return;
          const s = t.__ng_removed;
          if (s && s.setForRemoval) {
            (s.setForRemoval = !1), (s.setForMove = !0);
            const e = this.collectedLeaveElements.indexOf(t);
            e >= 0 && this.collectedLeaveElements.splice(e, 1);
          }
          if (e) {
            const r = this._fetchNamespace(e);
            r && r.insertNode(t, n);
          }
          r && this.collectEnterElement(t);
        }
        collectEnterElement(e) {
          this.collectedEnterElements.push(e);
        }
        markElementAsDisabled(e, t) {
          t
            ? this.disabledNodes.has(e) ||
              (this.disabledNodes.add(e), Lf(e, "ng-animate-disabled"))
            : this.disabledNodes.has(e) &&
              (this.disabledNodes.delete(e), Uf(e, "ng-animate-disabled"));
        }
        removeNode(e, t, n, r) {
          if (Of(t)) {
            const s = e ? this._fetchNamespace(e) : null;
            if (
              (s ? s.removeNode(t, r) : this.markElementAsRemoved(e, t, !1, r),
              n)
            ) {
              const n = this.namespacesByHostElement.get(t);
              n && n.id !== e && n.removeNode(t, r);
            }
          } else this._onRemovalComplete(t, r);
        }
        markElementAsRemoved(e, t, n, r) {
          this.collectedLeaveElements.push(t),
            (t.__ng_removed = {
              namespaceId: e,
              setForRemoval: r,
              hasAnimation: n,
              removedBeforeQueried: !1,
            });
        }
        listen(e, t, n, r, s) {
          return Of(t) ? this._fetchNamespace(e).listen(t, n, r, s) : () => {};
        }
        _buildInstruction(e, t, n, r, s) {
          return e.transition.build(
            this.driver,
            e.element,
            e.fromState.value,
            e.toState.value,
            n,
            r,
            e.fromState.options,
            e.toState.options,
            t,
            s
          );
        }
        destroyInnerAnimations(e) {
          let t = this.driver.query(e, ".ng-trigger", !0);
          t.forEach((e) => this.destroyActiveAnimationsForElement(e)),
            0 != this.playersByQueriedElement.size &&
              ((t = this.driver.query(e, ".ng-animating", !0)),
              t.forEach((e) => this.finishActiveQueriedAnimationOnElement(e)));
        }
        destroyActiveAnimationsForElement(e) {
          const t = this.playersByElement.get(e);
          t &&
            t.forEach((e) => {
              e.queued ? (e.markedForDestroy = !0) : e.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(e) {
          const t = this.playersByQueriedElement.get(e);
          t && t.forEach((e) => e.finish());
        }
        whenRenderingDone() {
          return new Promise((e) => {
            if (this.players.length) return ip(this.players).onDone(() => e());
            e();
          });
        }
        processLeaveNode(e) {
          const t = e.__ng_removed;
          if (t && t.setForRemoval) {
            if (((e.__ng_removed = xf), t.namespaceId)) {
              this.destroyInnerAnimations(e);
              const n = this._fetchNamespace(t.namespaceId);
              n && n.clearElementCache(e);
            }
            this._onRemovalComplete(e, t.setForRemoval);
          }
          this.driver.matchesElement(e, ".ng-animate-disabled") &&
            this.markElementAsDisabled(e, !1),
            this.driver.query(e, ".ng-animate-disabled", !0).forEach((e) => {
              this.markElementAsDisabled(e, !1);
            });
        }
        flush(e = -1) {
          let t = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((e, t) =>
                this._balanceNamespaceList(e, t)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              Lf(this.collectedEnterElements[n], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const n = [];
            try {
              t = this._flushAnimations(n, e);
            } finally {
              for (let e = 0; e < n.length; e++) n[e]();
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((e) => e()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const e = this._whenQuietFns;
            (this._whenQuietFns = []),
              t.length
                ? ip(t).onDone(() => {
                    e.forEach((e) => e());
                  })
                : e.forEach((e) => e());
          }
        }
        reportError(e) {
          throw new Error(
            "Unable to process animations due to the following failed trigger transitions\n " +
              e.join("\n")
          );
        }
        _flushAnimations(e, t) {
          const n = new rf(),
            r = [],
            s = new Map(),
            i = [],
            o = new Map(),
            a = new Map(),
            l = new Map(),
            c = new Set();
          this.disabledNodes.forEach((e) => {
            c.add(e);
            const t = this.driver.query(e, ".ng-animate-queued", !0);
            for (let n = 0; n < t.length; n++) c.add(t[n]);
          });
          const u = this.bodyNode,
            h = Array.from(this.statesByElement.keys()),
            d = Ff(h, this.collectedEnterElements),
            p = new Map();
          let f = 0;
          d.forEach((e, t) => {
            const n = "ng-enter" + f++;
            p.set(t, n), e.forEach((e) => Lf(e, n));
          });
          const m = [],
            g = new Set(),
            y = new Set();
          for (let N = 0; N < this.collectedLeaveElements.length; N++) {
            const e = this.collectedLeaveElements[N],
              t = e.__ng_removed;
            t &&
              t.setForRemoval &&
              (m.push(e),
              g.add(e),
              t.hasAnimation
                ? this.driver
                    .query(e, ".ng-star-inserted", !0)
                    .forEach((e) => g.add(e))
                : y.add(e));
          }
          const _ = new Map(),
            v = Ff(h, Array.from(g));
          v.forEach((e, t) => {
            const n = "ng-leave" + f++;
            _.set(t, n), e.forEach((e) => Lf(e, n));
          }),
            e.push(() => {
              d.forEach((e, t) => {
                const n = p.get(t);
                e.forEach((e) => Uf(e, n));
              }),
                v.forEach((e, t) => {
                  const n = _.get(t);
                  e.forEach((e) => Uf(e, n));
                }),
                m.forEach((e) => {
                  this.processLeaveNode(e);
                });
            });
          const b = [],
            w = [];
          for (let N = this._namespaceList.length - 1; N >= 0; N--)
            this._namespaceList[N].drainQueuedTransitions(t).forEach((e) => {
              const t = e.player,
                s = e.element;
              if ((b.push(t), this.collectedEnterElements.length)) {
                const e = s.__ng_removed;
                if (e && e.setForMove) return void t.destroy();
              }
              const c = !u || !this.driver.containsElement(u, s),
                h = _.get(s),
                d = p.get(s),
                f = this._buildInstruction(e, n, d, h, c);
              if (f.errors && f.errors.length) w.push(f);
              else {
                if (c)
                  return (
                    t.onStart(() => Op(s, f.fromStyles)),
                    t.onDestroy(() => Pp(s, f.toStyles)),
                    void r.push(t)
                  );
                if (e.isFallbackTransition)
                  return (
                    t.onStart(() => Op(s, f.fromStyles)),
                    t.onDestroy(() => Pp(s, f.toStyles)),
                    void r.push(t)
                  );
                f.timelines.forEach((e) => (e.stretchStartingKeyframe = !0)),
                  n.append(s, f.timelines),
                  i.push({ instruction: f, player: t, element: s }),
                  f.queriedElements.forEach((e) => up(o, e, []).push(t)),
                  f.preStyleProps.forEach((e, t) => {
                    const n = Object.keys(e);
                    if (n.length) {
                      let e = a.get(t);
                      e || a.set(t, (e = new Set())),
                        n.forEach((t) => e.add(t));
                    }
                  }),
                  f.postStyleProps.forEach((e, t) => {
                    const n = Object.keys(e);
                    let r = l.get(t);
                    r || l.set(t, (r = new Set())), n.forEach((e) => r.add(e));
                  });
              }
            });
          if (w.length) {
            const e = [];
            w.forEach((t) => {
              e.push(`@${t.triggerName} has failed due to:\n`),
                t.errors.forEach((t) => e.push(`- ${t}\n`));
            }),
              b.forEach((e) => e.destroy()),
              this.reportError(e);
          }
          const E = new Map(),
            S = new Map();
          i.forEach((e) => {
            const t = e.element;
            n.has(t) &&
              (S.set(t, t),
              this._beforeAnimationBuild(
                e.player.namespaceId,
                e.instruction,
                E
              ));
          }),
            r.forEach((e) => {
              const t = e.element;
              this._getPreviousPlayers(
                t,
                !1,
                e.namespaceId,
                e.triggerName,
                null
              ).forEach((e) => {
                up(E, t, []).push(e), e.destroy();
              });
            });
          const C = m.filter((e) => zf(e, a, l)),
            T = new Map();
          Mf(T, this.driver, y, l, "*").forEach((e) => {
            zf(e, a, l) && C.push(e);
          });
          const x = new Map();
          d.forEach((e, t) => {
            Mf(x, this.driver, new Set(e), a, "!");
          }),
            C.forEach((e) => {
              const t = T.get(e),
                n = x.get(e);
              T.set(e, Object.assign({}, t, n));
            });
          const k = [],
            I = [],
            A = {};
          i.forEach((e) => {
            const { element: t, player: i, instruction: o } = e;
            if (n.has(t)) {
              if (c.has(t))
                return (
                  i.onDestroy(() => Pp(t, o.toStyles)),
                  (i.disabled = !0),
                  i.overrideTotalTime(o.totalTime),
                  void r.push(i)
                );
              let e = A;
              if (S.size > 1) {
                let n = t;
                const r = [];
                for (; (n = n.parentNode); ) {
                  const t = S.get(n);
                  if (t) {
                    e = t;
                    break;
                  }
                  r.push(n);
                }
                r.forEach((t) => S.set(t, e));
              }
              const n = this._buildAnimation(i.namespaceId, o, E, s, x, T);
              if ((i.setRealPlayer(n), e === A)) k.push(i);
              else {
                const t = this.playersByElement.get(e);
                t && t.length && (i.parentPlayer = ip(t)), r.push(i);
              }
            } else
              Op(t, o.fromStyles),
                i.onDestroy(() => Pp(t, o.toStyles)),
                I.push(i),
                c.has(t) && r.push(i);
          }),
            I.forEach((e) => {
              const t = s.get(e.element);
              if (t && t.length) {
                const n = ip(t);
                e.setRealPlayer(n);
              }
            }),
            r.forEach((e) => {
              e.parentPlayer ? e.syncPlayerEvents(e.parentPlayer) : e.destroy();
            });
          for (let N = 0; N < m.length; N++) {
            const e = m[N],
              t = e.__ng_removed;
            if ((Uf(e, "ng-leave"), t && t.hasAnimation)) continue;
            let n = [];
            if (o.size) {
              let t = o.get(e);
              t && t.length && n.push(...t);
              let r = this.driver.query(e, ".ng-animating", !0);
              for (let e = 0; e < r.length; e++) {
                let t = o.get(r[e]);
                t && t.length && n.push(...t);
              }
            }
            const r = n.filter((e) => !e.destroyed);
            r.length ? jf(this, e, r) : this.processLeaveNode(e);
          }
          return (
            (m.length = 0),
            k.forEach((e) => {
              this.players.push(e),
                e.onDone(() => {
                  e.destroy();
                  const t = this.players.indexOf(e);
                  this.players.splice(t, 1);
                }),
                e.play();
            }),
            k
          );
        }
        elementContainsData(e, t) {
          let n = !1;
          const r = t.__ng_removed;
          return (
            r && r.setForRemoval && (n = !0),
            this.playersByElement.has(t) && (n = !0),
            this.playersByQueriedElement.has(t) && (n = !0),
            this.statesByElement.has(t) && (n = !0),
            this._fetchNamespace(e).elementContainsData(t) || n
          );
        }
        afterFlush(e) {
          this._flushFns.push(e);
        }
        afterFlushAnimationsDone(e) {
          this._whenQuietFns.push(e);
        }
        _getPreviousPlayers(e, t, n, r, s) {
          let i = [];
          if (t) {
            const t = this.playersByQueriedElement.get(e);
            t && (i = t);
          } else {
            const t = this.playersByElement.get(e);
            if (t) {
              const e = !s || "void" == s;
              t.forEach((t) => {
                t.queued || ((e || t.triggerName == r) && i.push(t));
              });
            }
          }
          return (
            (n || r) &&
              (i = i.filter(
                (e) => !((n && n != e.namespaceId) || (r && r != e.triggerName))
              )),
            i
          );
        }
        _beforeAnimationBuild(e, t, n) {
          const r = t.element,
            s = t.isRemovalTransition ? void 0 : e,
            i = t.isRemovalTransition ? void 0 : t.triggerName;
          for (const o of t.timelines) {
            const e = o.element,
              a = e !== r,
              l = up(n, e, []);
            this._getPreviousPlayers(e, a, s, i, t.toState).forEach((e) => {
              const t = e.getRealPlayer();
              t.beforeDestroy && t.beforeDestroy(), e.destroy(), l.push(e);
            });
          }
          Op(r, t.fromStyles);
        }
        _buildAnimation(e, t, n, r, s, i) {
          const o = t.triggerName,
            a = t.element,
            l = [],
            c = new Set(),
            u = new Set(),
            h = t.timelines.map((t) => {
              const h = t.element;
              c.add(h);
              const d = h.__ng_removed;
              if (d && d.removedBeforeQueried)
                return new np(t.duration, t.delay);
              const p = h !== a,
                f = (function (e) {
                  const t = [];
                  return (
                    (function e(t, n) {
                      for (let r = 0; r < t.length; r++) {
                        const s = t[r];
                        s instanceof rp ? e(s.players, n) : n.push(s);
                      }
                    })(e, t),
                    t
                  );
                })((n.get(h) || Tf).map((e) => e.getRealPlayer())).filter(
                  (e) => !!e.element && e.element === h
                ),
                m = s.get(h),
                g = i.get(h),
                y = op(0, this._normalizer, 0, t.keyframes, m, g),
                _ = this._buildPlayer(t, y, f);
              if ((t.subTimeline && r && u.add(h), p)) {
                const t = new Pf(e, o, h);
                t.setRealPlayer(_), l.push(t);
              }
              return _;
            });
          l.forEach((e) => {
            up(this.playersByQueriedElement, e.element, []).push(e),
              e.onDone(() =>
                (function (e, t, n) {
                  let r;
                  if (e instanceof Map) {
                    if (((r = e.get(t)), r)) {
                      if (r.length) {
                        const e = r.indexOf(n);
                        r.splice(e, 1);
                      }
                      0 == r.length && e.delete(t);
                    }
                  } else if (((r = e[t]), r)) {
                    if (r.length) {
                      const e = r.indexOf(n);
                      r.splice(e, 1);
                    }
                    0 == r.length && delete e[t];
                  }
                  return r;
                })(this.playersByQueriedElement, e.element, e)
              );
          }),
            c.forEach((e) => Lf(e, "ng-animating"));
          const d = ip(h);
          return (
            d.onDestroy(() => {
              c.forEach((e) => Uf(e, "ng-animating")), Pp(a, t.toStyles);
            }),
            u.forEach((e) => {
              up(r, e, []).push(d);
            }),
            d
          );
        }
        _buildPlayer(e, t, n) {
          return t.length > 0
            ? this.driver.animate(
                e.element,
                t,
                e.duration,
                e.delay,
                e.easing,
                n
              )
            : new np(e.duration, e.delay);
        }
      }
      class Pf {
        constructor(e, t, n) {
          (this.namespaceId = e),
            (this.triggerName = t),
            (this.element = n),
            (this._player = new np()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(e) {
          this._containsRealPlayer ||
            ((this._player = e),
            Object.keys(this._queuedCallbacks).forEach((t) => {
              this._queuedCallbacks[t].forEach((n) => ap(e, t, void 0, n));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(e.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(e) {
          this.totalTime = e;
        }
        syncPlayerEvents(e) {
          const t = this._player;
          t.triggerCallback && e.onStart(() => t.triggerCallback("start")),
            e.onDone(() => this.finish()),
            e.onDestroy(() => this.destroy());
        }
        _queueEvent(e, t) {
          up(this._queuedCallbacks, e, []).push(t);
        }
        onDone(e) {
          this.queued && this._queueEvent("done", e), this._player.onDone(e);
        }
        onStart(e) {
          this.queued && this._queueEvent("start", e), this._player.onStart(e);
        }
        onDestroy(e) {
          this.queued && this._queueEvent("destroy", e),
            this._player.onDestroy(e);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(e) {
          this.queued || this._player.setPosition(e);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(e) {
          const t = this._player;
          t.triggerCallback && t.triggerCallback(e);
        }
      }
      function Of(e) {
        return e && 1 === e.nodeType;
      }
      function Df(e, t) {
        const n = e.style.display;
        return (e.style.display = null != t ? t : "none"), n;
      }
      function Mf(e, t, n, r, s) {
        const i = [];
        n.forEach((e) => i.push(Df(e)));
        const o = [];
        r.forEach((n, r) => {
          const i = {};
          n.forEach((e) => {
            const n = (i[e] = t.computeStyle(r, e, s));
            (n && 0 != n.length) || ((r.__ng_removed = kf), o.push(r));
          }),
            e.set(r, i);
        });
        let a = 0;
        return n.forEach((e) => Df(e, i[a++])), o;
      }
      function Ff(e, t) {
        const n = new Map();
        if ((e.forEach((e) => n.set(e, [])), 0 == t.length)) return n;
        const r = new Set(t),
          s = new Map();
        return (
          t.forEach((e) => {
            const t = (function e(t) {
              if (!t) return 1;
              let i = s.get(t);
              if (i) return i;
              const o = t.parentNode;
              return (i = n.has(o) ? o : r.has(o) ? 1 : e(o)), s.set(t, i), i;
            })(e);
            1 !== t && n.get(t).push(e);
          }),
          n
        );
      }
      function Lf(e, t) {
        if (e.classList) e.classList.add(t);
        else {
          let n = e.$$classes;
          n || (n = e.$$classes = {}), (n[t] = !0);
        }
      }
      function Uf(e, t) {
        if (e.classList) e.classList.remove(t);
        else {
          let n = e.$$classes;
          n && delete n[t];
        }
      }
      function jf(e, t, n) {
        ip(n).onDone(() => e.processLeaveNode(t));
      }
      function zf(e, t, n) {
        const r = n.get(e);
        if (!r) return !1;
        let s = t.get(e);
        return s ? r.forEach((e) => s.add(e)) : t.set(e, r), n.delete(e), !0;
      }
      class Hf {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this._driver = t),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (e, t) => {}),
            (this._transitionEngine = new Rf(e, t, n)),
            (this._timelineEngine = new Cf(e, t, n)),
            (this._transitionEngine.onRemovalComplete = (e, t) =>
              this.onRemovalComplete(e, t));
        }
        registerTrigger(e, t, n, r, s) {
          const i = e + "-" + r;
          let o = this._triggerCache[i];
          if (!o) {
            const e = [],
              t = Gp(this._driver, s, e);
            if (e.length)
              throw new Error(
                `The animation trigger "${r}" has failed to build due to the following errors:\n - ${e.join(
                  "\n - "
                )}`
              );
            (o = (function (e, t) {
              return new wf(e, t);
            })(r, t)),
              (this._triggerCache[i] = o);
          }
          this._transitionEngine.registerTrigger(t, r, o);
        }
        register(e, t) {
          this._transitionEngine.register(e, t);
        }
        destroy(e, t) {
          this._transitionEngine.destroy(e, t);
        }
        onInsert(e, t, n, r) {
          this._transitionEngine.insertNode(e, t, n, r);
        }
        onRemove(e, t, n, r) {
          this._transitionEngine.removeNode(e, t, r || !1, n);
        }
        disableAnimations(e, t) {
          this._transitionEngine.markElementAsDisabled(e, t);
        }
        process(e, t, n, r) {
          if ("@" == n.charAt(0)) {
            const [e, s] = hp(n);
            this._timelineEngine.command(e, t, s, r);
          } else this._transitionEngine.trigger(e, t, n, r);
        }
        listen(e, t, n, r, s) {
          if ("@" == n.charAt(0)) {
            const [e, r] = hp(n);
            return this._timelineEngine.listen(e, t, r, s);
          }
          return this._transitionEngine.listen(e, t, n, r, s);
        }
        flush(e = -1) {
          this._transitionEngine.flush(e);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function $f(e, t) {
        let n = null,
          r = null;
        return (
          Array.isArray(t) && t.length
            ? ((n = Bf(t[0])), t.length > 1 && (r = Bf(t[t.length - 1])))
            : t && (n = Bf(t)),
          n || r ? new Vf(e, n, r) : null
        );
      }
      let Vf = (() => {
        class e {
          constructor(t, n, r) {
            (this._element = t),
              (this._startStyles = n),
              (this._endStyles = r),
              (this._state = 0);
            let s = e.initialStylesByElement.get(t);
            s || e.initialStylesByElement.set(t, (s = {})),
              (this._initialStyles = s);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                Pp(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (Pp(this._element, this._initialStyles),
                this._endStyles &&
                  (Pp(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (e.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (Op(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (Op(this._element, this._endStyles),
                  (this._endStyles = null)),
                Pp(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (e.initialStylesByElement = new WeakMap()), e;
      })();
      function Bf(e) {
        let t = null;
        const n = Object.keys(e);
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          qf(s) && ((t = t || {}), (t[s] = e[s]));
        }
        return t;
      }
      function qf(e) {
        return "display" === e || "position" === e;
      }
      class Qf {
        constructor(e, t, n, r, s, i, o) {
          (this._element = e),
            (this._name = t),
            (this._duration = n),
            (this._delay = r),
            (this._easing = s),
            (this._fillMode = i),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = (e) => this._handleCallback(e));
        }
        apply() {
          !(function (e, t) {
            const n = Xf(e, "").trim();
            n.length &&
              ((function (e, t) {
                let n = 0;
                for (let r = 0; r < e.length; r++) "," === e.charAt(r) && n++;
              })(n),
              (t = `${n}, ${t}`)),
              Yf(e, "", t);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            Gf(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          Wf(this._element, this._name, "paused");
        }
        resume() {
          Wf(this._element, this._name, "running");
        }
        setPosition(e) {
          const t = Kf(this._element, this._name);
          (this._position = e * this._duration),
            Yf(this._element, "Delay", `-${this._position}ms`, t);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(e) {
          const t = e._ngTestManualTimestamp || Date.now(),
            n = 1e3 * parseFloat(e.elapsedTime.toFixed(3));
          e.animationName == this._name &&
            Math.max(t - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            Gf(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (e, t) {
              const n = Xf(e, "").split(","),
                r = Zf(n, t);
              r >= 0 && (n.splice(r, 1), Yf(e, "", n.join(",")));
            })(this._element, this._name));
        }
      }
      function Wf(e, t, n) {
        Yf(e, "PlayState", n, Kf(e, t));
      }
      function Kf(e, t) {
        const n = Xf(e, "");
        return n.indexOf(",") > 0 ? Zf(n.split(","), t) : Zf([n], t);
      }
      function Zf(e, t) {
        for (let n = 0; n < e.length; n++) if (e[n].indexOf(t) >= 0) return n;
        return -1;
      }
      function Gf(e, t, n) {
        n
          ? e.removeEventListener("animationend", t)
          : e.addEventListener("animationend", t);
      }
      function Yf(e, t, n, r) {
        const s = "animation" + t;
        if (null != r) {
          const t = e.style[s];
          if (t.length) {
            const e = t.split(",");
            (e[r] = n), (n = e.join(","));
          }
        }
        e.style[s] = n;
      }
      function Xf(e, t) {
        return e.style["animation" + t];
      }
      class Jf {
        constructor(e, t, n, r, s, i, o, a) {
          (this.element = e),
            (this.keyframes = t),
            (this.animationName = n),
            (this._duration = r),
            (this._delay = s),
            (this._finalStyles = o),
            (this._specialStyles = a),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = i || "linear"),
            (this.totalTime = r + s),
            this._buildStyler();
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach((e) => e()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach((e) => e()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach((e) => e()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(e) {
          this._styler.setPosition(e);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          this._styler.destroy(), this._buildStyler(), this._styler.apply();
        }
        _buildStyler() {
          this._styler = new Qf(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            "forwards",
            () => this.finish()
          );
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach((e) => e()), (t.length = 0);
        }
        beforeDestroy() {
          this.init();
          const e = {};
          if (this.hasStarted()) {
            const t = this._state >= 3;
            Object.keys(this._finalStyles).forEach((n) => {
              "offset" != n &&
                (e[n] = t ? this._finalStyles[n] : Bp(this.element, n));
            });
          }
          this.currentSnapshot = e;
        }
      }
      class em extends np {
        constructor(e, t) {
          super(),
            (this.element = e),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = Ep(t));
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach((e) => {
              this._startingStyles[e] = this.element.style[e];
            }),
            super.init());
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach((e) =>
              this.element.style.setProperty(e, this._styles[e])
            ),
            super.play());
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach((e) => {
              const t = this._startingStyles[e];
              t
                ? this.element.style.setProperty(e, t)
                : this.element.style.removeProperty(e);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      class tm {
        constructor() {
          (this._count = 0),
            (this._head = document.querySelector("head")),
            (this._warningIssued = !1);
        }
        validateStyleProperty(e) {
          return _p(e);
        }
        matchesElement(e, t) {
          return vp(e, t);
        }
        containsElement(e, t) {
          return bp(e, t);
        }
        query(e, t, n) {
          return wp(e, t, n);
        }
        computeStyle(e, t, n) {
          return window.getComputedStyle(e)[t];
        }
        buildKeyframeElement(e, t, n) {
          n = n.map((e) => Ep(e));
          let r = `@keyframes ${t} {\n`,
            s = "";
          n.forEach((e) => {
            s = " ";
            const t = parseFloat(e.offset);
            (r += `${s}${100 * t}% {\n`),
              (s += " "),
              Object.keys(e).forEach((t) => {
                const n = e[t];
                switch (t) {
                  case "offset":
                    return;
                  case "easing":
                    return void (
                      n && (r += `${s}animation-timing-function: ${n};\n`)
                    );
                  default:
                    return void (r += `${s}${t}: ${n};\n`);
                }
              }),
              (r += s + "}\n");
          }),
            (r += "}\n");
          const i = document.createElement("style");
          return (i.innerHTML = r), i;
        }
        animate(e, t, n, r, s, i = [], o) {
          o && this._notifyFaultyScrubber();
          const a = i.filter((e) => e instanceof Jf),
            l = {};
          Hp(n, r) &&
            a.forEach((e) => {
              let t = e.currentSnapshot;
              Object.keys(t).forEach((e) => (l[e] = t[e]));
            });
          const c = (function (e) {
            let t = {};
            return (
              e &&
                (Array.isArray(e) ? e : [e]).forEach((e) => {
                  Object.keys(e).forEach((n) => {
                    "offset" != n && "easing" != n && (t[n] = e[n]);
                  });
                }),
              t
            );
          })((t = $p(e, t, l)));
          if (0 == n) return new em(e, c);
          const u = "gen_css_kf_" + this._count++,
            h = this.buildKeyframeElement(e, u, t);
          document.querySelector("head").appendChild(h);
          const d = $f(e, t),
            p = new Jf(e, t, u, n, r, s, c, d);
          return (
            p.onDestroy(() => {
              var e;
              (e = h).parentNode.removeChild(e);
            }),
            p
          );
        }
        _notifyFaultyScrubber() {
          this._warningIssued ||
            (console.warn(
              "@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n",
              "  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."
            ),
            (this._warningIssued = !0));
        }
      }
      class nm {
        constructor(e, t, n, r) {
          (this.element = e),
            (this.keyframes = t),
            (this.options = n),
            (this._specialStyles = r),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((e) => e()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const e = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            e,
            this.options
          )),
            (this._finalKeyframe = e.length ? e[e.length - 1] : {}),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(e, t, n) {
          return e.animate(t, n);
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((e) => e()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((e) => e()),
            (this._onDestroyFns = []));
        }
        setPosition(e) {
          this.domPlayer.currentTime = e * this.time;
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const e = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach((t) => {
              "offset" != t &&
                (e[t] = this._finished
                  ? this._finalKeyframe[t]
                  : Bp(this.element, t));
            }),
            (this.currentSnapshot = e);
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach((e) => e()), (t.length = 0);
        }
      }
      class rm {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            sm().toString()
          )),
            (this._cssKeyframesDriver = new tm());
        }
        validateStyleProperty(e) {
          return _p(e);
        }
        matchesElement(e, t) {
          return vp(e, t);
        }
        containsElement(e, t) {
          return bp(e, t);
        }
        query(e, t, n) {
          return wp(e, t, n);
        }
        computeStyle(e, t, n) {
          return window.getComputedStyle(e)[t];
        }
        overrideWebAnimationsSupport(e) {
          this._isNativeImpl = e;
        }
        animate(e, t, n, r, s, i = [], o) {
          if (!o && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(e, t, n, r, s, i);
          const a = {
            duration: n,
            delay: r,
            fill: 0 == r ? "both" : "forwards",
          };
          s && (a.easing = s);
          const l = {},
            c = i.filter((e) => e instanceof nm);
          Hp(n, r) &&
            c.forEach((e) => {
              let t = e.currentSnapshot;
              Object.keys(t).forEach((e) => (l[e] = t[e]));
            });
          const u = $f(e, (t = $p(e, (t = t.map((e) => Ap(e, !1))), l)));
          return new nm(e, t, a, u);
        }
      }
      function sm() {
        return (
          ("undefined" != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      class im extends Xd {
        constructor(e, t) {
          super(),
            (this._nextAnimationId = 0),
            (this._renderer = e.createRenderer(t.body, {
              id: "0",
              encapsulation: He.None,
              styles: [],
              data: { animation: [] },
            }));
        }
        build(e) {
          const t = this._nextAnimationId.toString();
          this._nextAnimationId++;
          const n = Array.isArray(e) ? Jd(e) : e;
          return (
            lm(this._renderer, null, t, "register", [n]),
            new om(t, this._renderer)
          );
        }
      }
      class om extends class {} {
        constructor(e, t) {
          super(), (this._id = e), (this._renderer = t);
        }
        create(e, t) {
          return new am(this._id, e, t || {}, this._renderer);
        }
      }
      class am {
        constructor(e, t, n, r) {
          (this.id = e),
            (this.element = t),
            (this._renderer = r),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", n);
        }
        _listen(e, t) {
          return this._renderer.listen(this.element, `@@${this.id}:${e}`, t);
        }
        _command(e, ...t) {
          return lm(this._renderer, this.element, this.id, e, t);
        }
        onDone(e) {
          this._listen("done", e);
        }
        onStart(e) {
          this._listen("start", e);
        }
        onDestroy(e) {
          this._listen("destroy", e);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset");
        }
        setPosition(e) {
          this._command("setPosition", e);
        }
        getPosition() {
          return 0;
        }
      }
      function lm(e, t, n, r, s) {
        return e.setProperty(t, `@@${n}:${r}`, s);
      }
      class cm {
        constructor(e, t, n) {
          (this.delegate = e),
            (this.engine = t),
            (this._zone = n),
            (this._currentId = 0),
            (this._microtaskId = 1),
            (this._animationCallbacksBuffer = []),
            (this._rendererCache = new Map()),
            (this._cdRecurDepth = 0),
            (this.promise = Promise.resolve(0)),
            (t.onRemovalComplete = (e, t) => {
              t && t.parentNode(e) && t.removeChild(e.parentNode, e);
            });
        }
        createRenderer(e, t) {
          const n = this.delegate.createRenderer(e, t);
          if (!(e && t && t.data && t.data.animation)) {
            let e = this._rendererCache.get(n);
            return (
              e ||
                ((e = new um("", n, this.engine)),
                this._rendererCache.set(n, e)),
              e
            );
          }
          const r = t.id,
            s = t.id + "-" + this._currentId;
          return (
            this._currentId++,
            this.engine.register(s, e),
            t.data.animation.forEach((t) =>
              this.engine.registerTrigger(r, s, e, t.name, t)
            ),
            new hm(this, s, n, this.engine)
          );
        }
        begin() {
          this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
        }
        _scheduleCountTask() {
          this.promise.then(() => {
            this._microtaskId++;
          });
        }
        scheduleListenerCallback(e, t, n) {
          e >= 0 && e < this._microtaskId
            ? this._zone.run(() => t(n))
            : (0 == this._animationCallbacksBuffer.length &&
                Promise.resolve(null).then(() => {
                  this._zone.run(() => {
                    this._animationCallbacksBuffer.forEach((e) => {
                      const [t, n] = e;
                      t(n);
                    }),
                      (this._animationCallbacksBuffer = []);
                  });
                }),
              this._animationCallbacksBuffer.push([t, n]));
        }
        end() {
          this._cdRecurDepth--,
            0 == this._cdRecurDepth &&
              this._zone.runOutsideAngular(() => {
                this._scheduleCountTask(), this.engine.flush(this._microtaskId);
              }),
            this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.engine.whenRenderingDone();
        }
      }
      class um {
        constructor(e, t, n) {
          (this.namespaceId = e),
            (this.delegate = t),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode
              ? (e) => t.destroyNode(e)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(e, t) {
          return this.delegate.createElement(e, t);
        }
        createComment(e) {
          return this.delegate.createComment(e);
        }
        createText(e) {
          return this.delegate.createText(e);
        }
        appendChild(e, t) {
          this.delegate.appendChild(e, t),
            this.engine.onInsert(this.namespaceId, t, e, !1);
        }
        insertBefore(e, t, n) {
          this.delegate.insertBefore(e, t, n),
            this.engine.onInsert(this.namespaceId, t, e, !0);
        }
        removeChild(e, t, n) {
          this.engine.onRemove(this.namespaceId, t, this.delegate, n);
        }
        selectRootElement(e, t) {
          return this.delegate.selectRootElement(e, t);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setAttribute(e, t, n, r) {
          this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          "@" == t.charAt(0) && "@.disabled" == t
            ? this.disableAnimations(e, !!n)
            : this.delegate.setProperty(e, t, n);
        }
        setValue(e, t) {
          this.delegate.setValue(e, t);
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        disableAnimations(e, t) {
          this.engine.disableAnimations(e, t);
        }
      }
      class hm extends um {
        constructor(e, t, n, r) {
          super(t, n, r), (this.factory = e), (this.namespaceId = t);
        }
        setProperty(e, t, n) {
          "@" == t.charAt(0)
            ? "." == t.charAt(1) && "@.disabled" == t
              ? this.disableAnimations(e, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, e, t.substr(1), n)
            : this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if ("@" == t.charAt(0)) {
            const r = (function (e) {
              switch (e) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return e;
              }
            })(e);
            let s = t.substr(1),
              i = "";
            return (
              "@" != s.charAt(0) &&
                ([s, i] = (function (e) {
                  const t = e.indexOf(".");
                  return [e.substring(0, t), e.substr(t + 1)];
                })(s)),
              this.engine.listen(this.namespaceId, r, s, i, (e) => {
                this.factory.scheduleListenerCallback(e._data || -1, n, e);
              })
            );
          }
          return this.delegate.listen(e, t, n);
        }
      }
      class dm extends Hf {
        constructor(e, t, n) {
          super(e.body, t, n);
        }
      }
      function pm() {
        return "function" == typeof sm() ? new rm() : new tm();
      }
      function fm() {
        return new mf();
      }
      function mm(e, t, n) {
        return new cm(e, t, n);
      }
      const gm = new ke("AnimationModuleType");
      class ym {}
      var _m = Vn({
        encapsulation: 2,
        styles: [
          ".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}",
        ],
        data: {},
      });
      function vm(e) {
        return qi(2, [ji(null, 0), ji(null, 1)], null, null);
      }
      var bm = Vn({ encapsulation: 2, styles: [], data: {} });
      function wm(e) {
        return qi(
          2,
          [
            ji(null, 0),
            (e()(),
            Ai(
              1,
              0,
              null,
              null,
              1,
              "div",
              [["class", "mat-card-header-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            ji(null, 1),
            ji(null, 2),
          ],
          null,
          null
        );
      }
      const Em = [
        "mat-button",
        "mat-flat-button",
        "mat-icon-button",
        "mat-raised-button",
        "mat-stroked-button",
        "mat-mini-fab",
        "mat-fab",
      ];
      class Sm {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const Cm = Hd(zd($d(Sm)));
      class Tm extends Cm {
        constructor(e, t, n) {
          super(e),
            (this._focusMonitor = t),
            (this._animationMode = n),
            (this.isRoundButton = this._hasHostAttributes(
              "mat-fab",
              "mat-mini-fab"
            )),
            (this.isIconButton = this._hasHostAttributes("mat-icon-button"));
          for (const r of Em)
            this._hasHostAttributes(r) &&
              this._getHostElement().classList.add(r);
          e.nativeElement.classList.add("mat-button-base"),
            this._focusMonitor.monitor(this._elementRef, !0),
            this.isRoundButton && (this.color = "accent");
        }
        ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        focus(e = "program", t) {
          this._focusMonitor.focusVia(this._getHostElement(), e, t);
        }
        _getHostElement() {
          return this._elementRef.nativeElement;
        }
        _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        _hasHostAttributes(...e) {
          return e.some((e) => this._getHostElement().hasAttribute(e));
        }
      }
      class xm {}
      var km = Vn({
        encapsulation: 2,
        styles: [
          ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}",
        ],
        data: {},
      });
      function Im(e) {
        return qi(
          2,
          [
            Di(671088640, 1, { ripple: 0 }),
            (e()(),
            Ai(
              1,
              0,
              null,
              null,
              1,
              "span",
              [["class", "mat-button-wrapper"]],
              null,
              null,
              null,
              null,
              null
            )),
            ji(null, 0),
            (e()(),
            Ai(
              3,
              0,
              null,
              null,
              1,
              "div",
              [
                ["class", "mat-button-ripple mat-ripple"],
                ["matRipple", ""],
              ],
              [
                [2, "mat-button-ripple-round", null],
                [2, "mat-ripple-unbounded", null],
              ],
              null,
              null,
              null,
              null
            )),
            Jr(
              4,
              212992,
              [[1, 4]],
              0,
              Gd,
              [en, qs, kd, [2, Zd], [2, gm]],
              {
                centered: [0, "centered"],
                disabled: [1, "disabled"],
                trigger: [2, "trigger"],
              },
              null
            ),
            (e()(),
            Ai(
              5,
              0,
              null,
              null,
              0,
              "div",
              [["class", "mat-button-focus-overlay"]],
              null,
              null,
              null,
              null,
              null
            )),
          ],
          function (e, t) {
            var n = t.component;
            e(
              t,
              4,
              0,
              n.isIconButton,
              n._isRippleDisabled(),
              n._getHostElement()
            );
          },
          function (e, t) {
            var n = t.component;
            e(t, 3, 0, n.isRoundButton || n.isIconButton, zr(t, 4).unbounded);
          }
        );
      }
      class Am {
        constructor(e) {
          this.heroesService = e;
        }
        ngOnInit() {
          this.getAllHeroes();
        }
        getAllHeroes() {
          this.heroesService.getAllHeroes().subscribe((e) => {
            this.heroes = e;
          });
        }
      }
      class Nm {}
      class Rm {}
      class Pm {
        constructor(e) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            e
              ? (this.lazyInit =
                  "string" == typeof e
                    ? () => {
                        (this.headers = new Map()),
                          e.split("\n").forEach((e) => {
                            const t = e.indexOf(":");
                            if (t > 0) {
                              const n = e.slice(0, t),
                                r = n.toLowerCase(),
                                s = e.slice(t + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r)
                                  ? this.headers.get(r).push(s)
                                  : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(e).forEach((t) => {
                            let n = e[t];
                            const r = t.toLowerCase();
                            "string" == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(t, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(e) {
          return this.init(), this.headers.has(e.toLowerCase());
        }
        get(e) {
          this.init();
          const t = this.headers.get(e.toLowerCase());
          return t && t.length > 0 ? t[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(e) {
          return this.init(), this.headers.get(e.toLowerCase()) || null;
        }
        append(e, t) {
          return this.clone({ name: e, value: t, op: "a" });
        }
        set(e, t) {
          return this.clone({ name: e, value: t, op: "s" });
        }
        delete(e, t) {
          return this.clone({ name: e, value: t, op: "d" });
        }
        maybeSetNormalizedName(e, t) {
          this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Pm
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
              (this.lazyUpdate = null)));
        }
        copyFrom(e) {
          e.init(),
            Array.from(e.headers.keys()).forEach((t) => {
              this.headers.set(t, e.headers.get(t)),
                this.normalizedNames.set(t, e.normalizedNames.get(t));
            });
        }
        clone(e) {
          const t = new Pm();
          return (
            (t.lazyInit =
              this.lazyInit && this.lazyInit instanceof Pm
                ? this.lazyInit
                : this),
            (t.lazyUpdate = (this.lazyUpdate || []).concat([e])),
            t
          );
        }
        applyUpdate(e) {
          const t = e.name.toLowerCase();
          switch (e.op) {
            case "a":
            case "s":
              let n = e.value;
              if (("string" == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(e.name, t);
              const r = ("a" === e.op ? this.headers.get(t) : void 0) || [];
              r.push(...n), this.headers.set(t, r);
              break;
            case "d":
              const s = e.value;
              if (s) {
                let e = this.headers.get(t);
                if (!e) return;
                (e = e.filter((e) => -1 === s.indexOf(e))),
                  0 === e.length
                    ? (this.headers.delete(t), this.normalizedNames.delete(t))
                    : this.headers.set(t, e);
              } else this.headers.delete(t), this.normalizedNames.delete(t);
          }
        }
        forEach(e) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((t) =>
              e(this.normalizedNames.get(t), this.headers.get(t))
            );
        }
      }
      class Om {
        encodeKey(e) {
          return Dm(e);
        }
        encodeValue(e) {
          return Dm(e);
        }
        decodeKey(e) {
          return decodeURIComponent(e);
        }
        decodeValue(e) {
          return decodeURIComponent(e);
        }
      }
      function Dm(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/gi, "$")
          .replace(/%2C/gi, ",")
          .replace(/%3B/gi, ";")
          .replace(/%2B/gi, "+")
          .replace(/%3D/gi, "=")
          .replace(/%3F/gi, "?")
          .replace(/%2F/gi, "/");
      }
      class Mm {
        constructor(e = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = e.encoder || new Om()),
            e.fromString)
          ) {
            if (e.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function (e, t) {
              const n = new Map();
              return (
                e.length > 0 &&
                  e.split("&").forEach((e) => {
                    const r = e.indexOf("="),
                      [s, i] =
                        -1 == r
                          ? [t.decodeKey(e), ""]
                          : [
                              t.decodeKey(e.slice(0, r)),
                              t.decodeValue(e.slice(r + 1)),
                            ],
                      o = n.get(s) || [];
                    o.push(i), n.set(s, o);
                  }),
                n
              );
            })(e.fromString, this.encoder);
          } else
            e.fromObject
              ? ((this.map = new Map()),
                Object.keys(e.fromObject).forEach((t) => {
                  const n = e.fromObject[t];
                  this.map.set(t, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(e) {
          return this.init(), this.map.has(e);
        }
        get(e) {
          this.init();
          const t = this.map.get(e);
          return t ? t[0] : null;
        }
        getAll(e) {
          return this.init(), this.map.get(e) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(e, t) {
          return this.clone({ param: e, value: t, op: "a" });
        }
        set(e, t) {
          return this.clone({ param: e, value: t, op: "s" });
        }
        delete(e, t) {
          return this.clone({ param: e, value: t, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((e) => {
                const t = this.encoder.encodeKey(e);
                return this.map
                  .get(e)
                  .map((e) => t + "=" + this.encoder.encodeValue(e))
                  .join("&");
              })
              .join("&")
          );
        }
        clone(e) {
          const t = new Mm({ encoder: this.encoder });
          return (
            (t.cloneFrom = this.cloneFrom || this),
            (t.updates = (this.updates || []).concat([e])),
            t
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((e) => this.map.set(e, this.cloneFrom.map.get(e))),
              this.updates.forEach((e) => {
                switch (e.op) {
                  case "a":
                  case "s":
                    const t =
                      ("a" === e.op ? this.map.get(e.param) : void 0) || [];
                    t.push(e.value), this.map.set(e.param, t);
                    break;
                  case "d":
                    if (void 0 === e.value) {
                      this.map.delete(e.param);
                      break;
                    }
                    {
                      let t = this.map.get(e.param) || [];
                      const n = t.indexOf(e.value);
                      -1 !== n && t.splice(n, 1),
                        t.length > 0
                          ? this.map.set(e.param, t)
                          : this.map.delete(e.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function Fm(e) {
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer;
      }
      function Lm(e) {
        return "undefined" != typeof Blob && e instanceof Blob;
      }
      function Um(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      }
      class jm {
        constructor(e, t, n, r) {
          let s;
          if (
            ((this.url = t),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = e.toUpperCase()),
            (function (e) {
              switch (e) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new Pm()),
            this.params)
          ) {
            const e = this.params.toString();
            if (0 === e.length) this.urlWithParams = t;
            else {
              const n = t.indexOf("?");
              this.urlWithParams =
                t + (-1 === n ? "?" : n < t.length - 1 ? "&" : "") + e;
            }
          } else (this.params = new Mm()), (this.urlWithParams = t);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Fm(this.body) ||
              Lm(this.body) ||
              Um(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof Mm
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Um(this.body)
            ? null
            : Lm(this.body)
            ? this.body.type || null
            : Fm(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof Mm
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              Array.isArray(this.body)
            ? "application/json"
            : null;
        }
        clone(e = {}) {
          const t = e.method || this.method,
            n = e.url || this.url,
            r = e.responseType || this.responseType,
            s = void 0 !== e.body ? e.body : this.body,
            i =
              void 0 !== e.withCredentials
                ? e.withCredentials
                : this.withCredentials,
            o =
              void 0 !== e.reportProgress
                ? e.reportProgress
                : this.reportProgress;
          let a = e.headers || this.headers,
            l = e.params || this.params;
          return (
            void 0 !== e.setHeaders &&
              (a = Object.keys(e.setHeaders).reduce(
                (t, n) => t.set(n, e.setHeaders[n]),
                a
              )),
            e.setParams &&
              (l = Object.keys(e.setParams).reduce(
                (t, n) => t.set(n, e.setParams[n]),
                l
              )),
            new jm(t, n, s, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: r,
              withCredentials: i,
            })
          );
        }
      }
      const zm = (function () {
        var e = {
          Sent: 0,
          UploadProgress: 1,
          ResponseHeader: 2,
          DownloadProgress: 3,
          Response: 4,
          User: 5,
        };
        return (
          (e[e.Sent] = "Sent"),
          (e[e.UploadProgress] = "UploadProgress"),
          (e[e.ResponseHeader] = "ResponseHeader"),
          (e[e.DownloadProgress] = "DownloadProgress"),
          (e[e.Response] = "Response"),
          (e[e.User] = "User"),
          e
        );
      })();
      class Hm {
        constructor(e, t = 200, n = "OK") {
          (this.headers = e.headers || new Pm()),
            (this.status = void 0 !== e.status ? e.status : t),
            (this.statusText = e.statusText || n),
            (this.url = e.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class $m extends Hm {
        constructor(e = {}) {
          super(e), (this.type = zm.ResponseHeader);
        }
        clone(e = {}) {
          return new $m({
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class Vm extends Hm {
        constructor(e = {}) {
          super(e),
            (this.type = zm.Response),
            (this.body = void 0 !== e.body ? e.body : null);
        }
        clone(e = {}) {
          return new Vm({
            body: void 0 !== e.body ? e.body : this.body,
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class Bm extends Hm {
        constructor(e) {
          super(e, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? "Http failure during parsing for " +
                  (e.url || "(unknown url)")
                : `Http failure response for ${e.url || "(unknown url)"}: ${
                    e.status
                  } ${e.statusText}`),
            (this.error = e.error || null);
        }
      }
      function qm(e, t) {
        return {
          body: t,
          headers: e.headers,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials,
        };
      }
      class Qm {
        constructor(e) {
          this.handler = e;
        }
        request(e, t, n = {}) {
          let r;
          if (e instanceof jm) r = e;
          else {
            let s = void 0;
            s = n.headers instanceof Pm ? n.headers : new Pm(n.headers);
            let i = void 0;
            n.params &&
              (i =
                n.params instanceof Mm
                  ? n.params
                  : new Mm({ fromObject: n.params })),
              (r = new jm(e, t, void 0 !== n.body ? n.body : null, {
                headers: s,
                params: i,
                reportProgress: n.reportProgress,
                responseType: n.responseType || "json",
                withCredentials: n.withCredentials,
              }));
          }
          const s = Ta(r).pipe(pl((e) => this.handler.handle(e)));
          if (e instanceof jm || "events" === n.observe) return s;
          const i = s.pipe(Da((e) => e instanceof Vm));
          switch (n.observe || "body") {
            case "body":
              switch (r.responseType) {
                case "arraybuffer":
                  return i.pipe(
                    $((e) => {
                      if (null !== e.body && !(e.body instanceof ArrayBuffer))
                        throw new Error("Response is not an ArrayBuffer.");
                      return e.body;
                    })
                  );
                case "blob":
                  return i.pipe(
                    $((e) => {
                      if (null !== e.body && !(e.body instanceof Blob))
                        throw new Error("Response is not a Blob.");
                      return e.body;
                    })
                  );
                case "text":
                  return i.pipe(
                    $((e) => {
                      if (null !== e.body && "string" != typeof e.body)
                        throw new Error("Response is not a string.");
                      return e.body;
                    })
                  );
                case "json":
                default:
                  return i.pipe($((e) => e.body));
              }
            case "response":
              return i;
            default:
              throw new Error(
                `Unreachable: unhandled observe type ${n.observe}}`
              );
          }
        }
        delete(e, t = {}) {
          return this.request("DELETE", e, t);
        }
        get(e, t = {}) {
          return this.request("GET", e, t);
        }
        head(e, t = {}) {
          return this.request("HEAD", e, t);
        }
        jsonp(e, t) {
          return this.request("JSONP", e, {
            params: new Mm().append(t, "JSONP_CALLBACK"),
            observe: "body",
            responseType: "json",
          });
        }
        options(e, t = {}) {
          return this.request("OPTIONS", e, t);
        }
        patch(e, t, n = {}) {
          return this.request("PATCH", e, qm(n, t));
        }
        post(e, t, n = {}) {
          return this.request("POST", e, qm(n, t));
        }
        put(e, t, n = {}) {
          return this.request("PUT", e, qm(n, t));
        }
      }
      class Wm {
        constructor(e, t) {
          (this.next = e), (this.interceptor = t);
        }
        handle(e) {
          return this.interceptor.intercept(e, this.next);
        }
      }
      const Km = new ke("HTTP_INTERCEPTORS");
      class Zm {
        intercept(e, t) {
          return t.handle(e);
        }
      }
      const Gm = /^\)\]\}',?\n/;
      class Ym {}
      class Xm {
        constructor() {}
        build() {
          return new XMLHttpRequest();
        }
      }
      class Jm {
        constructor(e) {
          this.xhrFactory = e;
        }
        handle(e) {
          if ("JSONP" === e.method)
            throw new Error(
              "Attempted to construct Jsonp request without JsonpClientModule installed."
            );
          return new w((t) => {
            const n = this.xhrFactory.build();
            if (
              (n.open(e.method, e.urlWithParams),
              e.withCredentials && (n.withCredentials = !0),
              e.headers.forEach((e, t) => n.setRequestHeader(e, t.join(","))),
              e.headers.has("Accept") ||
                n.setRequestHeader(
                  "Accept",
                  "application/json, text/plain, */*"
                ),
              !e.headers.has("Content-Type"))
            ) {
              const t = e.detectContentTypeHeader();
              null !== t && n.setRequestHeader("Content-Type", t);
            }
            if (e.responseType) {
              const t = e.responseType.toLowerCase();
              n.responseType = "json" !== t ? t : "text";
            }
            const r = e.serializeBody();
            let s = null;
            const i = () => {
                if (null !== s) return s;
                const t = 1223 === n.status ? 204 : n.status,
                  r = n.statusText || "OK",
                  i = new Pm(n.getAllResponseHeaders()),
                  o =
                    (function (e) {
                      return "responseURL" in e && e.responseURL
                        ? e.responseURL
                        : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
                        ? e.getResponseHeader("X-Request-URL")
                        : null;
                    })(n) || e.url;
                return (
                  (s = new $m({
                    headers: i,
                    status: t,
                    statusText: r,
                    url: o,
                  })),
                  s
                );
              },
              o = () => {
                let { headers: r, status: s, statusText: o, url: a } = i(),
                  l = null;
                204 !== s &&
                  (l = void 0 === n.response ? n.responseText : n.response),
                  0 === s && (s = l ? 200 : 0);
                let c = s >= 200 && s < 300;
                if ("json" === e.responseType && "string" == typeof l) {
                  const e = l;
                  l = l.replace(Gm, "");
                  try {
                    l = "" !== l ? JSON.parse(l) : null;
                  } catch (u) {
                    (l = e), c && ((c = !1), (l = { error: u, text: l }));
                  }
                }
                c
                  ? (t.next(
                      new Vm({
                        body: l,
                        headers: r,
                        status: s,
                        statusText: o,
                        url: a || void 0,
                      })
                    ),
                    t.complete())
                  : t.error(
                      new Bm({
                        error: l,
                        headers: r,
                        status: s,
                        statusText: o,
                        url: a || void 0,
                      })
                    );
              },
              a = (e) => {
                const { url: r } = i(),
                  s = new Bm({
                    error: e,
                    status: n.status || 0,
                    statusText: n.statusText || "Unknown Error",
                    url: r || void 0,
                  });
                t.error(s);
              };
            let l = !1;
            const c = (r) => {
                l || (t.next(i()), (l = !0));
                let s = { type: zm.DownloadProgress, loaded: r.loaded };
                r.lengthComputable && (s.total = r.total),
                  "text" === e.responseType &&
                    n.responseText &&
                    (s.partialText = n.responseText),
                  t.next(s);
              },
              u = (e) => {
                let n = { type: zm.UploadProgress, loaded: e.loaded };
                e.lengthComputable && (n.total = e.total), t.next(n);
              };
            return (
              n.addEventListener("load", o),
              n.addEventListener("error", a),
              e.reportProgress &&
                (n.addEventListener("progress", c),
                null !== r &&
                  n.upload &&
                  n.upload.addEventListener("progress", u)),
              n.send(r),
              t.next({ type: zm.Sent }),
              () => {
                n.removeEventListener("error", a),
                  n.removeEventListener("load", o),
                  e.reportProgress &&
                    (n.removeEventListener("progress", c),
                    null !== r &&
                      n.upload &&
                      n.upload.removeEventListener("progress", u)),
                  n.abort();
              }
            );
          });
        }
      }
      const eg = new ke("XSRF_COOKIE_NAME"),
        tg = new ke("XSRF_HEADER_NAME");
      class ng {}
      class rg {
        constructor(e, t, n) {
          (this.doc = e),
            (this.platform = t),
            (this.cookieName = n),
            (this.lastCookieString = ""),
            (this.lastToken = null),
            (this.parseCount = 0);
        }
        getToken() {
          if ("server" === this.platform) return null;
          const e = this.doc.cookie || "";
          return (
            e !== this.lastCookieString &&
              (this.parseCount++,
              (this.lastToken = pa(e, this.cookieName)),
              (this.lastCookieString = e)),
            this.lastToken
          );
        }
      }
      class sg {
        constructor(e, t) {
          (this.tokenService = e), (this.headerName = t);
        }
        intercept(e, t) {
          const n = e.url.toLowerCase();
          if (
            "GET" === e.method ||
            "HEAD" === e.method ||
            n.startsWith("http://") ||
            n.startsWith("https://")
          )
            return t.handle(e);
          const r = this.tokenService.getToken();
          return (
            null === r ||
              e.headers.has(this.headerName) ||
              (e = e.clone({ headers: e.headers.set(this.headerName, r) })),
            t.handle(e)
          );
        }
      }
      class ig {
        constructor(e, t) {
          (this.backend = e), (this.injector = t), (this.chain = null);
        }
        handle(e) {
          if (null === this.chain) {
            const e = this.injector.get(Km, []);
            this.chain = e.reduceRight((e, t) => new Wm(e, t), this.backend);
          }
          return this.chain.handle(e);
        }
      }
      class og {
        static disable() {
          return { ngModule: og, providers: [{ provide: sg, useClass: Zm }] };
        }
        static withOptions(e = {}) {
          return {
            ngModule: og,
            providers: [
              e.cookieName ? { provide: eg, useValue: e.cookieName } : [],
              e.headerName ? { provide: tg, useValue: e.headerName } : [],
            ],
          };
        }
      }
      class ag {}
      let lg = (() => {
        class e {
          constructor(e) {
            (this.http = e),
              (this.TS = "1"),
              (this.PUBLIC_KEY = "390603e52d88b75740f00914c4e37adb"),
              (this.HASH = "1e941387665084635fb13e9118718ec4"),
              (this.URL_API = "https://gateway.marvel.com:443/v1/public"),
              (this.heroes_URL = `${this.URL_API}/characters?orderBy=-modified&limit=100&ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`);
          }
          getAllHeroes() {
            return this.http
              .get(this.heroes_URL)
              .pipe($((e) => e.data.results));
          }
          getAllMagazineType(e, t) {
            return this.http
              .get(
                `${this.URL_API}/characters/${e}/${t}?orderBy=onsaleDate&limit=100&ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
              )
              .pipe($((e) => e.data.results));
          }
        }
        return (
          (e.ngInjectableDef = me({
            factory: function () {
              return new e(De(Qm));
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
      var cg = Vn({
        encapsulation: 0,
        styles: [
          [
            ".content[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around}.matCard[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:2px solid #f5f5f5;width:330px;margin-top:10px}.matCardContent[_ngcontent-%COMP%]{margin-top:10px}.matCardContent[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{margin:0}",
          ],
        ],
        data: {},
      });
      function ug(e) {
        return qi(
          0,
          [
            (e()(),
            Ai(
              0,
              0,
              null,
              null,
              18,
              "mat-card",
              [["class", "matCard mat-card"]],
              [[2, "_mat-animation-noopable", null]],
              null,
              null,
              vm,
              _m
            )),
            Jr(1, 49152, null, 0, _d, [[2, gm]], null, null),
            (e()(),
            Ai(
              2,
              0,
              null,
              0,
              4,
              "mat-card-header",
              [["class", "mat-card-header"]],
              null,
              null,
              null,
              wm,
              bm
            )),
            Jr(3, 49152, null, 0, vd, [], null, null),
            (e()(),
            Ai(
              4,
              0,
              null,
              1,
              2,
              "mat-card-title",
              [["class", "mat-card-title"]],
              null,
              null,
              null,
              null,
              null
            )),
            Jr(5, 16384, null, 0, gd, [], null, null),
            (e()(), $i(6, null, ["", ""])),
            (e()(),
            Ai(
              7,
              0,
              null,
              0,
              0,
              "img",
              [["width", "330px"]],
              [[8, "src", 4]],
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ai(
              8,
              0,
              null,
              0,
              3,
              "mat-card-content",
              [["class", "matCardContent mat-card-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            Jr(9, 16384, null, 0, md, [], null, null),
            (e()(),
            Ai(10, 0, null, null, 1, "p", [], null, null, null, null, null)),
            (e()(), $i(11, null, ["", ""])),
            (e()(),
            Ai(
              12,
              0,
              null,
              0,
              6,
              "mat-card-actions",
              [["class", "mat-card-actions"]],
              [[2, "mat-card-actions-align-end", null]],
              null,
              null,
              null,
              null
            )),
            Jr(13, 16384, null, 0, yd, [], null, null),
            (e()(),
            Ai(
              14,
              0,
              null,
              null,
              4,
              "button",
              [
                ["color", "primary"],
                ["mat-raised-button", ""],
              ],
              [
                [1, "disabled", 0],
                [2, "_mat-animation-noopable", null],
              ],
              [[null, "click"]],
              function (e, t, n) {
                var r = !0;
                return (
                  "click" === t && (r = !1 !== zr(e, 15).onClick() && r), r
                );
              },
              Im,
              km
            )),
            Jr(
              15,
              16384,
              null,
              0,
              jh,
              [Uh, Iu, [8, null], on, en],
              { routerLink: [0, "routerLink"] },
              null
            ),
            Hi(16, 3),
            Jr(
              17,
              180224,
              null,
              0,
              Tm,
              [en, Fd, [2, gm]],
              { color: [0, "color"] },
              null
            ),
            (e()(), $i(-1, 0, ["Comics"])),
          ],
          function (e, t) {
            var n = e(t, 16, 0, "/heroe", t.context.$implicit.id, "comics");
            e(t, 15, 0, n), e(t, 17, 0, "primary");
          },
          function (e, t) {
            e(t, 0, 0, "NoopAnimations" === zr(t, 1)._animationMode),
              e(t, 6, 0, t.context.$implicit.name),
              e(
                t,
                7,
                0,
                gr(
                  2,
                  "",
                  t.context.$implicit.thumbnail.path,
                  ".",
                  t.context.$implicit.thumbnail.extension,
                  ""
                )
              ),
              e(t, 11, 0, t.context.$implicit.description),
              e(t, 12, 0, "end" === zr(t, 13).align),
              e(
                t,
                14,
                0,
                zr(t, 17).disabled || null,
                "NoopAnimations" === zr(t, 17)._animationMode
              );
          }
        );
      }
      function hg(e) {
        return qi(
          0,
          [
            (e()(),
            Ai(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ii(16777216, null, null, 1, null, ug)),
            Jr(
              2,
              278528,
              null,
              0,
              ma,
              [kn, Tn, bn],
              { ngForOf: [0, "ngForOf"] },
              null
            ),
          ],
          function (e, t) {
            e(t, 2, 0, t.component.heroes);
          },
          null
        );
      }
      function dg(e) {
        return qi(
          0,
          [
            (e()(),
            Ai(
              0,
              0,
              null,
              null,
              1,
              "app-heroes",
              [],
              null,
              null,
              null,
              hg,
              cg
            )),
            Jr(1, 114688, null, 0, Am, [lg], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var pg = Ar("app-heroes", Am, dg, {}, {}, []);
      class fg {
        constructor(e, t) {
          (this.activatedRoute = e), (this.heroesService = t);
        }
        ngOnInit() {
          const e = this.activatedRoute.snapshot.paramMap.get("id"),
            t = this.activatedRoute.snapshot.paramMap.get("type");
          console.log(e, t), this.getAllMagazines(e, t);
        }
        getAllMagazines(e, t) {
          this.heroesService.getAllMagazineType(e, t).subscribe((e) => {
            (this.magazines = e),
              console.log("llamada getAllMagazines", this.magazines);
          });
        }
      }
      var mg = Vn({
        encapsulation: 0,
        styles: [
          [
            ".content[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around}.matCard[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:2px solid #f5f5f5;width:330px;margin-top:10px}.heroList[_ngcontent-%COMP%]{display:inline}.matCardContent[_ngcontent-%COMP%]{margin-top:10px}.matCardContent[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{margin:0}",
          ],
        ],
        data: {},
      });
      function gg(e) {
        return qi(
          0,
          [
            (e()(),
            Ai(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "heroList"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ai(1, 0, null, null, 1, "span", [], null, null, null, null, null)),
            (e()(), $i(2, null, [" | ", ""])),
          ],
          null,
          function (e, t) {
            e(t, 2, 0, t.context.$implicit.name);
          }
        );
      }
      function yg(e) {
        return qi(
          0,
          [
            (e()(),
            Ai(
              0,
              0,
              null,
              null,
              20,
              "mat-card",
              [["class", "matCard mat-card"]],
              [[2, "_mat-animation-noopable", null]],
              null,
              null,
              vm,
              _m
            )),
            Jr(1, 49152, null, 0, _d, [[2, gm]], null, null),
            (e()(),
            Ai(
              2,
              0,
              null,
              0,
              4,
              "mat-card-header",
              [["class", "mat-card-header"]],
              null,
              null,
              null,
              wm,
              bm
            )),
            Jr(3, 49152, null, 0, vd, [], null, null),
            (e()(),
            Ai(
              4,
              0,
              null,
              1,
              2,
              "mat-card-title",
              [["class", "mat-card-title"]],
              null,
              null,
              null,
              null,
              null
            )),
            Jr(5, 16384, null, 0, gd, [], null, null),
            (e()(), $i(6, null, ["", ""])),
            (e()(),
            Ai(
              7,
              0,
              null,
              0,
              0,
              "img",
              [["width", "330px"]],
              [[8, "src", 4]],
              null,
              null,
              null,
              null
            )),
            (e()(),
            Ai(
              8,
              0,
              null,
              0,
              5,
              "mat-card-content",
              [["class", "matCardContent mat-card-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            Jr(9, 16384, null, 0, md, [], null, null),
            (e()(),
            Ai(10, 0, null, null, 1, "h5", [], null, null, null, null, null)),
            (e()(), $i(-1, null, ["Heroes in the history"])),
            (e()(), Ii(16777216, null, null, 1, null, gg)),
            Jr(
              13,
              278528,
              null,
              0,
              ma,
              [kn, Tn, bn],
              { ngForOf: [0, "ngForOf"] },
              null
            ),
            (e()(),
            Ai(
              14,
              0,
              null,
              0,
              6,
              "mat-card-actions",
              [["class", "mat-card-actions"]],
              [[2, "mat-card-actions-align-end", null]],
              null,
              null,
              null,
              null
            )),
            Jr(15, 16384, null, 0, yd, [], null, null),
            (e()(),
            Ai(
              16,
              0,
              null,
              null,
              4,
              "button",
              [
                ["color", "warn"],
                ["mat-raised-button", ""],
              ],
              [
                [1, "disabled", 0],
                [2, "_mat-animation-noopable", null],
              ],
              [[null, "click"]],
              function (e, t, n) {
                var r = !0;
                return (
                  "click" === t && (r = !1 !== zr(e, 17).onClick() && r), r
                );
              },
              Im,
              km
            )),
            Jr(
              17,
              16384,
              null,
              0,
              jh,
              [Uh, Iu, [8, null], on, en],
              { routerLink: [0, "routerLink"] },
              null
            ),
            Hi(18, 1),
            Jr(
              19,
              180224,
              null,
              0,
              Tm,
              [en, Fd, [2, gm]],
              { color: [0, "color"] },
              null
            ),
            (e()(), $i(-1, 0, ["Back"])),
          ],
          function (e, t) {
            e(t, 13, 0, t.context.$implicit.characters.items);
            var n = e(t, 18, 0, "/");
            e(t, 17, 0, n), e(t, 19, 0, "warn");
          },
          function (e, t) {
            e(t, 0, 0, "NoopAnimations" === zr(t, 1)._animationMode),
              e(t, 6, 0, t.context.$implicit.title),
              e(
                t,
                7,
                0,
                gr(
                  2,
                  "",
                  t.context.$implicit.thumbnail.path,
                  ".",
                  t.context.$implicit.thumbnail.extension,
                  ""
                )
              ),
              e(t, 14, 0, "end" === zr(t, 15).align),
              e(
                t,
                16,
                0,
                zr(t, 19).disabled || null,
                "NoopAnimations" === zr(t, 19)._animationMode
              );
          }
        );
      }
      function _g(e) {
        return qi(
          0,
          [
            (e()(),
            Ai(
              0,
              0,
              null,
              null,
              2,
              "div",
              [["class", "content"]],
              null,
              null,
              null,
              null,
              null
            )),
            (e()(), Ii(16777216, null, null, 1, null, yg)),
            Jr(
              2,
              278528,
              null,
              0,
              ma,
              [kn, Tn, bn],
              { ngForOf: [0, "ngForOf"] },
              null
            ),
          ],
          function (e, t) {
            e(t, 2, 0, t.component.magazines);
          },
          null
        );
      }
      function vg(e) {
        return qi(
          0,
          [
            (e()(),
            Ai(0, 0, null, null, 1, "app-heroe", [], null, null, null, _g, mg)),
            Jr(1, 114688, null, 0, fg, [Iu, lg], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      var bg = Ar("app-heroe", fg, vg, {}, {}, []),
        wg = Vn({ encapsulation: 0, styles: [[""]], data: {} });
      function Eg(e) {
        return qi(
          0,
          [
            (e()(),
            Ai(
              0,
              16777216,
              null,
              null,
              1,
              "router-outlet",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            Jr(1, 212992, null, 0, Vh, [$h, kn, Gt, [8, null], St], null, null),
          ],
          function (e, t) {
            e(t, 1, 0);
          },
          null
        );
      }
      function Sg(e) {
        return qi(
          0,
          [
            (e()(),
            Ai(0, 0, null, null, 1, "app-root", [], null, null, null, Eg, wg)),
            Jr(1, 49152, null, 0, ea, [], null, null),
          ],
          null,
          null
        );
      }
      var Cg = Ar("app-root", ea, Sg, {}, {}, []);
      function Tg(e, t) {
        return new w(
          t
            ? (n) => t.schedule(xg, 0, { error: e, subscriber: n })
            : (t) => t.error(e)
        );
      }
      function xg({ error: e, subscriber: t }) {
        t.error(e);
      }
      function kg(e, t, n, s) {
        return (
          r(n) && ((s = n), (n = void 0)),
          s
            ? kg(e, t, n).pipe($((e) => (l(e) ? s(...e) : s(e))))
            : new w((r) => {
                !(function e(t, n, r, s, i) {
                  let o;
                  if (
                    (function (e) {
                      return (
                        e &&
                        "function" == typeof e.addEventListener &&
                        "function" == typeof e.removeEventListener
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.addEventListener(n, r, i),
                      (o = () => e.removeEventListener(n, r, i));
                  } else if (
                    (function (e) {
                      return (
                        e &&
                        "function" == typeof e.on &&
                        "function" == typeof e.off
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.on(n, r), (o = () => e.off(n, r));
                  } else if (
                    (function (e) {
                      return (
                        e &&
                        "function" == typeof e.addListener &&
                        "function" == typeof e.removeListener
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.addListener(n, r), (o = () => e.removeListener(n, r));
                  } else {
                    if (!t || !t.length)
                      throw new TypeError("Invalid event target");
                    for (let o = 0, a = t.length; o < a; o++)
                      e(t[o], n, r, s, i);
                  }
                  s.add(o);
                })(
                  e,
                  t,
                  function (e) {
                    r.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : e
                    );
                  },
                  r,
                  n
                );
              })
        );
      }
      const Ig = new w(_);
      let Ag = (() => {
        class e {
          constructor(e, t, n) {
            (this.kind = e),
              (this.value = t),
              (this.error = n),
              (this.hasValue = "N" === e);
          }
          observe(e) {
            switch (this.kind) {
              case "N":
                return e.next && e.next(this.value);
              case "E":
                return e.error && e.error(this.error);
              case "C":
                return e.complete && e.complete();
            }
          }
          do(e, t, n) {
            switch (this.kind) {
              case "N":
                return e && e(this.value);
              case "E":
                return t && t(this.error);
              case "C":
                return n && n();
            }
          }
          accept(e, t, n) {
            return e && "function" == typeof e.next
              ? this.observe(e)
              : this.do(e, t, n);
          }
          toObservable() {
            switch (this.kind) {
              case "N":
                return Ta(this.value);
              case "E":
                return Tg(this.error);
              case "C":
                return Sa();
            }
            throw new Error("unexpected notification kind value");
          }
          static createNext(t) {
            return void 0 !== t ? new e("N", t) : e.undefinedValueNotification;
          }
          static createError(t) {
            return new e("E", void 0, t);
          }
          static createComplete() {
            return e.completeNotification;
          }
        }
        return (
          (e.completeNotification = new e("C")),
          (e.undefinedValueNotification = new e("N", void 0)),
          e
        );
      })();
      class Ng {
        constructor(e, t) {
          (this.delay = e), (this.scheduler = t);
        }
        call(e, t) {
          return t.subscribe(new Rg(e, this.delay, this.scheduler));
        }
      }
      class Rg extends m {
        constructor(e, t, n) {
          super(e),
            (this.delay = t),
            (this.scheduler = n),
            (this.queue = []),
            (this.active = !1),
            (this.errored = !1);
        }
        static dispatch(e) {
          const t = e.source,
            n = t.queue,
            r = e.scheduler,
            s = e.destination;
          for (; n.length > 0 && n[0].time - r.now() <= 0; )
            n.shift().notification.observe(s);
          if (n.length > 0) {
            const t = Math.max(0, n[0].time - r.now());
            this.schedule(e, t);
          } else this.unsubscribe(), (t.active = !1);
        }
        _schedule(e) {
          (this.active = !0),
            this.destination.add(
              e.schedule(Rg.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: e,
              })
            );
        }
        scheduleNotification(e) {
          if (!0 === this.errored) return;
          const t = this.scheduler,
            n = new Pg(t.now() + this.delay, e);
          this.queue.push(n), !1 === this.active && this._schedule(t);
        }
        _next(e) {
          this.scheduleNotification(Ag.createNext(e));
        }
        _error(e) {
          (this.errored = !0),
            (this.queue = []),
            this.destination.error(e),
            this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(Ag.createComplete()), this.unsubscribe();
        }
      }
      class Pg {
        constructor(e, t) {
          (this.time = e), (this.notification = t);
        }
      }
      const Og =
        "Service workers are disabled or not supported by this browser";
      class Dg {
        constructor(e) {
          if (((this.serviceWorker = e), e)) {
            const t = kg(e, "controllerchange").pipe($(() => e.controller)),
              n = cl(
                Pa(() => Ta(e.controller)),
                t
              );
            (this.worker = n.pipe(Da((e) => !!e))),
              (this.registration = this.worker.pipe(
                ol(() => e.getRegistration())
              ));
            const r = kg(e, "message")
              .pipe($((e) => e.data))
              .pipe(Da((e) => e && e.type))
              .pipe(ie(new k()));
            r.connect(), (this.events = r);
          } else
            this.worker = this.events = this.registration = Pa(() =>
              Tg(
                new Error(
                  "Service workers are disabled or not supported by this browser"
                )
              )
            );
        }
        postMessage(e, t) {
          return this.worker
            .pipe(
              el(1),
              $a((n) => {
                n.postMessage(Object.assign({ action: e }, t));
              })
            )
            .toPromise()
            .then(() => {});
        }
        postMessageWithStatus(e, t, n) {
          const r = this.waitForStatus(n),
            s = this.postMessage(e, t);
          return Promise.all([r, s]).then(() => {});
        }
        generateNonce() {
          return Math.round(1e7 * Math.random());
        }
        eventsOfType(e) {
          return this.events.pipe(Da((t) => t.type === e));
        }
        nextEventOfType(e) {
          return this.eventsOfType(e).pipe(el(1));
        }
        waitForStatus(e) {
          return this.eventsOfType("STATUS")
            .pipe(
              Da((t) => t.nonce === e),
              el(1),
              $((e) => {
                if (!e.status) throw new Error(e.error);
              })
            )
            .toPromise();
        }
        get isEnabled() {
          return !!this.serviceWorker;
        }
      }
      class Mg {
        constructor(e) {
          if (
            ((this.sw = e), (this.subscriptionChanges = new k()), !e.isEnabled)
          )
            return (
              (this.messages = Ig),
              (this.notificationClicks = Ig),
              void (this.subscription = Ig)
            );
          (this.messages = this.sw.eventsOfType("PUSH").pipe($((e) => e.data))),
            (this.notificationClicks = this.sw
              .eventsOfType("NOTIFICATION_CLICK")
              .pipe($((e) => e.data))),
            (this.pushManager = this.sw.registration.pipe(
              $((e) => e.pushManager)
            ));
          const t = this.pushManager.pipe(ol((e) => e.getSubscription()));
          this.subscription = X(t, this.subscriptionChanges);
        }
        get isEnabled() {
          return this.sw.isEnabled;
        }
        requestSubscription(e) {
          if (!this.sw.isEnabled) return Promise.reject(new Error(Og));
          const t = { userVisibleOnly: !0 };
          let n = this.decodeBase64(
              e.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+")
            ),
            r = new Uint8Array(new ArrayBuffer(n.length));
          for (let s = 0; s < n.length; s++) r[s] = n.charCodeAt(s);
          return (
            (t.applicationServerKey = r),
            this.pushManager
              .pipe(
                ol((e) => e.subscribe(t)),
                el(1)
              )
              .toPromise()
              .then((e) => (this.subscriptionChanges.next(e), e))
          );
        }
        unsubscribe() {
          return this.sw.isEnabled
            ? this.subscription
                .pipe(
                  el(1),
                  ol((e) => {
                    if (null === e)
                      throw new Error("Not subscribed to push notifications.");
                    return e.unsubscribe().then((e) => {
                      if (!e) throw new Error("Unsubscribe failed!");
                      this.subscriptionChanges.next(null);
                    });
                  })
                )
                .toPromise()
            : Promise.reject(new Error(Og));
        }
        decodeBase64(e) {
          return atob(e);
        }
      }
      class Fg {
        constructor(e) {
          if (((this.sw = e), !e.isEnabled))
            return (this.available = Ig), void (this.activated = Ig);
          (this.available = this.sw.eventsOfType("UPDATE_AVAILABLE")),
            (this.activated = this.sw.eventsOfType("UPDATE_ACTIVATED"));
        }
        get isEnabled() {
          return this.sw.isEnabled;
        }
        checkForUpdate() {
          if (!this.sw.isEnabled) return Promise.reject(new Error(Og));
          const e = this.sw.generateNonce();
          return this.sw.postMessageWithStatus(
            "CHECK_FOR_UPDATES",
            { statusNonce: e },
            e
          );
        }
        activateUpdate() {
          if (!this.sw.isEnabled) return Promise.reject(new Error(Og));
          const e = this.sw.generateNonce();
          return this.sw.postMessageWithStatus(
            "ACTIVATE_UPDATE",
            { statusNonce: e },
            e
          );
        }
      }
      class Lg {}
      const Ug = new ke("NGSW_REGISTER_SCRIPT");
      function jg(e, t, n, r) {
        return () => {
          if (!va(r) || !("serviceWorker" in navigator) || !1 === n.enabled)
            return;
          let s;
          if (
            (navigator.serviceWorker.addEventListener(
              "controllerchange",
              () => {
                null !== navigator.serviceWorker.controller &&
                  navigator.serviceWorker.controller.postMessage({
                    action: "INITIALIZE",
                  });
              }
            ),
            "function" == typeof n.registrationStrategy)
          )
            s = n.registrationStrategy();
          else {
            const [t, ...r] = (
              n.registrationStrategy || "registerWhenStable"
            ).split(":");
            switch (t) {
              case "registerImmediately":
                s = Ta(null);
                break;
              case "registerWithDelay":
                s = Ta(null).pipe(
                  (function (e, t = Dd) {
                    var n;
                    const r =
                      (n = e) instanceof Date && !isNaN(+n)
                        ? +e - t.now()
                        : Math.abs(e);
                    return (e) => e.lift(new Ng(r, t));
                  })(+r[0] || 0)
                );
                break;
              case "registerWhenStable":
                s = e.get(ci).isStable.pipe(Da((e) => e));
                break;
              default:
                throw new Error(
                  "Unknown ServiceWorker registration strategy: " +
                    n.registrationStrategy
                );
            }
          }
          s.pipe(el(1)).subscribe(() =>
            navigator.serviceWorker
              .register(t, { scope: n.scope })
              .catch((e) =>
                console.error("Service worker registration failed with:", e)
              )
          );
        };
      }
      function zg(e, t) {
        return new Dg(
          va(t) && !1 !== e.enabled ? navigator.serviceWorker : void 0
        );
      }
      class Hg {
        static register(e, t = {}) {
          return {
            ngModule: Hg,
            providers: [
              { provide: Ug, useValue: e },
              { provide: Lg, useValue: t },
              { provide: Dg, useFactory: zg, deps: [Lg, Ts] },
              {
                provide: ws,
                useFactory: jg,
                deps: [kt, Ug, Lg, Ts],
                multi: !0,
              },
            ],
          };
        }
      }
      class $g {}
      var Vg = Yo(Jo, [ea], function (e) {
        return (function (e) {
          const t = {},
            n = [];
          let r = !1;
          for (let s = 0; s < e.length; s++) {
            const i = e[s];
            i.token === Tt && !0 === i.value && (r = !0),
              1073741824 & i.flags && n.push(i.token),
              (i.index = s),
              (t[$n(i.token)] = i);
          }
          return {
            factory: null,
            providersByKey: t,
            providers: e,
            modules: n,
            isRoot: r,
          };
        })([
          Er(512, Gt, Yt, [[8, [fd, pg, bg, Cg]], [3, Gt], Le]),
          Er(5120, Is, Ti, [[3, Is]]),
          Er(4608, ha, da, [Is, [2, ua]]),
          Er(5120, ps, xi, [qs]),
          Er(5120, bn, Si, []),
          Er(5120, wn, Ci, []),
          Er(4608, hc, dc, [_a]),
          Er(6144, _t, null, [hc]),
          Er(4608, sc, oc, []),
          Er(
            5120,
            Ol,
            function (e, t, n, r, s, i, o, a) {
              return [new nc(e, t, n), new uc(r), new ac(s, i, o, a)];
            },
            [_a, qs, Ts, _a, _a, sc, ks, [2, ic]]
          ),
          Er(4608, Dl, Dl, [Ol, qs]),
          Er(135680, Ll, Ll, [_a]),
          Er(4608, $l, $l, [Dl, Ll, Ss]),
          Er(5120, Cp, pm, []),
          Er(5120, ff, fm, []),
          Er(4608, Hf, dm, [_a, Cp, ff]),
          Er(5120, rn, mm, [$l, Hf, qs]),
          Er(6144, Fl, null, [Ll]),
          Er(4608, Xs, Xs, [qs]),
          Er(5120, Iu, od, [Uh]),
          Er(4608, Wh, Wh, []),
          Er(6144, qh, null, [Wh]),
          Er(135680, Kh, Kh, [Uh, hi, Ds, kt, qh]),
          Er(4608, Qh, Qh, []),
          Er(5120, Zh, td, [Uh, ba, Gh]),
          Er(5120, ud, cd, [ad]),
          Er(
            5120,
            xs,
            function (e) {
              return [e];
            },
            [ud]
          ),
          Er(4608, ng, rg, [_a, Ts, eg]),
          Er(4608, sg, sg, [ng, tg]),
          Er(
            5120,
            Km,
            function (e) {
              return [e];
            },
            [sg]
          ),
          Er(4608, Xm, Xm, []),
          Er(6144, Ym, null, [Xm]),
          Er(4608, Jm, Jm, [Ym]),
          Er(6144, Rm, null, [Jm]),
          Er(4608, Nm, ig, [Rm, kt]),
          Er(4608, Qm, Qm, [Nm]),
          Er(4608, Xd, im, [rn, _a]),
          Er(5120, Dg, zg, [Lg, Ts]),
          Er(4608, Mg, Mg, [Dg]),
          Er(4608, Fg, Fg, [Dg]),
          Er(1073742336, ya, ya, []),
          Er(1024, Qe, bc, []),
          Er(
            1024,
            si,
            function () {
              return [Jh()];
            },
            []
          ),
          Er(512, ad, ad, [kt]),
          Er(256, Ss, "serverApp", []),
          Er(2048, xl, null, [Ss]),
          Er(256, Ug, "marvel-heroes/ngsw-worker.js", []),
          Er(256, Lg, { enabled: !0 }, []),
          Er(
            1024,
            ws,
            function (e, t, n, r, s, i, o, a, l) {
              return [
                ((c = e),
                Nl("probe", Pl),
                Nl(
                  "coreTokens",
                  Object.assign(
                    {},
                    Rl,
                    (c || []).reduce((e, t) => ((e[t.name] = t.token), e), {})
                  )
                ),
                () => Pl),
                ld(t),
                kl(n, r, s),
                jg(i, o, a, l),
              ];
              var c;
            },
            [[2, si], ad, xl, _a, kt, kt, Ug, Lg, Ts]
          ),
          Er(512, Es, Es, [[2, ws]]),
          Er(131584, ci, ci, [qs, ks, kt, Qe, Gt, Es]),
          Er(1073742336, ki, ki, [ci]),
          Er(1073742336, wc, wc, [[3, wc]]),
          Er(1024, Yh, rd, [[3, Uh]]),
          Er(512, ou, au, []),
          Er(512, $h, $h, []),
          Er(256, Gh, {}, []),
          Er(1024, ra, nd, [ta, [2, sa], Gh]),
          Er(512, ia, ia, [ra, ta]),
          Er(512, Ds, Ds, []),
          Er(512, hi, fi, [Ds, [2, di]]),
          Er(
            1024,
            Rh,
            function () {
              return [
                [
                  { path: "", component: Am },
                  { path: "heroe/:id/:type", component: fg },
                  { path: "**", component: Am },
                ],
              ];
            },
            []
          ),
          Er(1024, Uh, id, [
            ci,
            ou,
            $h,
            ia,
            kt,
            hi,
            Ds,
            Rh,
            Gh,
            [2, Oh],
            [2, Ah],
          ]),
          Er(1073742336, ed, ed, [
            [2, Yh],
            [2, Uh],
          ]),
          Er(1073742336, $g, $g, []),
          Er(1073742336, og, og, []),
          Er(1073742336, ag, ag, []),
          Er(1073742336, ym, ym, []),
          Er(1073742336, wd, wd, []),
          Er(1073742336, jd, jd, [
            [2, Ud],
            [2, ic],
          ]),
          Er(1073742336, bd, bd, []),
          Er(1073742336, Id, Id, []),
          Er(1073742336, Yd, Yd, []),
          Er(1073742336, xm, xm, []),
          Er(1073742336, Hg, Hg, []),
          Er(1073742336, Jo, Jo, []),
          Er(256, Tt, !0, []),
          Er(256, eg, "XSRF-TOKEN", []),
          Er(256, tg, "X-XSRF-TOKEN", []),
          Er(256, gm, "BrowserAnimations", []),
        ]);
      });
      (function () {
        if (Ke)
          throw new Error("Cannot enable prod mode after platform setup.");
        We = !1;
      })(),
        document.addEventListener("DOMContentLoaded", () => {
          vc()
            .bootstrapModuleFactory(Vg)
            .catch((e) => console.error(e));
        });
    },
    zn8P: function (e, t) {
      function n(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = "zn8P");
    },
  },
  [[0, 0]],
]);
