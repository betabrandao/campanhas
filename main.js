/*! For license information please see main.f0167708310a335630bd.bundle.js.LICENSE.txt */ 
(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [
        function (t, e) {
            t.exports = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            };
        },
        function (t, e) {
            function n(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            t.exports = function (t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
        },
        function (t, e, n) {
            t.exports = n(10);
        },
        function (t, e) {
            function n(e) {
                return (
                    (t.exports = n = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    n(e)
                );
            }
            t.exports = n;
        },
        function (t, e) {
            function n(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        u = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(u) : Promise.resolve(u).then(r, i);
            }
            t.exports = function (t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (i, o) {
                        var a = t.apply(e, r);
                        function s(t) {
                            n(a, i, o, s, u, "next", t);
                        }
                        function u(t) {
                            n(a, i, o, s, u, "throw", t);
                        }
                        s(void 0);
                    });
                };
            };
        },
        function (t, e, n) {
            var r = n(11);
            t.exports = function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && r(t, e);
            };
        },
        function (t, e, n) {
            var r = n(12),
                i = n(13);
            t.exports = function (t, e) {
                return !e || ("object" !== r(e) && "function" != typeof e) ? i(t) : e;
            };
        },
        function (t, e, n) {
            "use strict";
            t.exports = function (t) {
                var e = [];
                return (
                    (e.toString = function () {
                        return this.map(function (e) {
                            var n = (function (t, e) {
                                var n = t[1] || "",
                                    r = t[3];
                                if (!r) return n;
                                if (e && "function" == typeof btoa) {
                                    var i = ((a = r), (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s)), "/*# ".concat(u, " */")),
                                        o = r.sources.map(function (t) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
                                        });
                                    return [n].concat(o).concat([i]).join("\n");
                                }
                                var a, s, u;
                                return [n].join("\n");
                            })(e, t);
                            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
                        }).join("");
                    }),
                    (e.i = function (t, n, r) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        var i = {};
                        if (r)
                            for (var o = 0; o < this.length; o++) {
                                var a = this[o][0];
                                null != a && (i[a] = !0);
                            }
                        for (var s = 0; s < t.length; s++) {
                            var u = [].concat(t[s]);
                            (r && i[u[0]]) || (n && (u[2] ? (u[2] = "".concat(n, " and ").concat(u[2])) : (u[2] = n)), e.push(u));
                        }
                    }),
                    e
                );
            };
        },
        function (t, e, n) {
            t.exports = n(21);
        },
        function (t, e) {
            "serviceWorker" in navigator && navigator.serviceWorker.register("service-worker.js");
        },
        function (t, e, n) {
            var r = (function (t) {
                "use strict";
                var e,
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    i = "function" == typeof Symbol ? Symbol : {},
                    o = i.iterator || "@@iterator",
                    a = i.asyncIterator || "@@asyncIterator",
                    s = i.toStringTag || "@@toStringTag";
                function u(t, e, n) {
                    return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
                }
                try {
                    u({}, "");
                } catch (t) {
                    u = function (t, e, n) {
                        return (t[e] = n);
                    };
                }
                function h(t, e, n, r) {
                    var i = e && e.prototype instanceof m ? e : m,
                        o = Object.create(i.prototype),
                        a = new S(r || []);
                    return (
                        (o._invoke = (function (t, e, n) {
                            var r = l;
                            return function (i, o) {
                                if (r === p) throw new Error("Generator is already running");
                                if (r === d) {
                                    if ("throw" === i) throw o;
                                    return E();
                                }
                                for (n.method = i, n.arg = o; ; ) {
                                    var a = n.delegate;
                                    if (a) {
                                        var s = O(a, n);
                                        if (s) {
                                            if (s === _) continue;
                                            return s;
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if (r === l) throw ((r = d), n.arg);
                                        n.dispatchException(n.arg);
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    r = p;
                                    var u = c(t, e, n);
                                    if ("normal" === u.type) {
                                        if (((r = n.done ? d : f), u.arg === _)) continue;
                                        return { value: u.arg, done: n.done };
                                    }
                                    "throw" === u.type && ((r = d), (n.method = "throw"), (n.arg = u.arg));
                                }
                            };
                        })(t, n, a)),
                        o
                    );
                }
                function c(t, e, n) {
                    try {
                        return { type: "normal", arg: t.call(e, n) };
                    } catch (t) {
                        return { type: "throw", arg: t };
                    }
                }
                t.wrap = h;
                var l = "suspendedStart",
                    f = "suspendedYield",
                    p = "executing",
                    d = "completed",
                    _ = {};
                function m() {}
                function v() {}
                function g() {}
                var y = {};
                y[o] = function () {
                    return this;
                };
                var b = Object.getPrototypeOf,
                    w = b && b(b(C([])));
                w && w !== n && r.call(w, o) && (y = w);
                var x = (g.prototype = m.prototype = Object.create(y));
                function T(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        u(t, e, function (t) {
                            return this._invoke(e, t);
                        });
                    });
                }
                function k(t, e) {
                    function n(i, o, a, s) {
                        var u = c(t[i], t, o);
                        if ("throw" !== u.type) {
                            var h = u.arg,
                                l = h.value;
                            return l && "object" == typeof l && r.call(l, "__await")
                                ? e.resolve(l.__await).then(
                                      function (t) {
                                          n("next", t, a, s);
                                      },
                                      function (t) {
                                          n("throw", t, a, s);
                                      }
                                  )
                                : e.resolve(l).then(
                                      function (t) {
                                          (h.value = t), a(h);
                                      },
                                      function (t) {
                                          return n("throw", t, a, s);
                                      }
                                  );
                        }
                        s(u.arg);
                    }
                    var i;
                    this._invoke = function (t, r) {
                        function o() {
                            return new e(function (e, i) {
                                n(t, r, e, i);
                            });
                        }
                        return (i = i ? i.then(o, o) : o());
                    };
                }
                function O(t, n) {
                    var r = t.iterator[n.method];
                    if (r === e) {
                        if (((n.delegate = null), "throw" === n.method)) {
                            if (t.iterator.return && ((n.method = "return"), (n.arg = e), O(t, n), "throw" === n.method)) return _;
                            (n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a 'throw' method"));
                        }
                        return _;
                    }
                    var i = c(r, t.iterator, n.arg);
                    if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), _;
                    var o = i.arg;
                    return o
                        ? o.done
                            ? ((n[t.resultName] = o.value), (n.next = t.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = e)), (n.delegate = null), _)
                            : o
                        : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), _);
                }
                function A(t) {
                    var e = { tryLoc: t[0] };
                    1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
                }
                function M(t) {
                    var e = t.completion || {};
                    (e.type = "normal"), delete e.arg, (t.completion = e);
                }
                function S(t) {
                    (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(A, this), this.reset(!0);
                }
                function C(t) {
                    if (t) {
                        var n = t[o];
                        if (n) return n.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var i = -1,
                                a = function n() {
                                    for (; ++i < t.length; ) if (r.call(t, i)) return (n.value = t[i]), (n.done = !1), n;
                                    return (n.value = e), (n.done = !0), n;
                                };
                            return (a.next = a);
                        }
                    }
                    return { next: E };
                }
                function E() {
                    return { value: e, done: !0 };
                }
                return (
                    (v.prototype = x.constructor = g),
                    (g.constructor = v),
                    (v.displayName = u(g, s, "GeneratorFunction")),
                    (t.isGeneratorFunction = function (t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === v || "GeneratorFunction" === (e.displayName || e.name));
                    }),
                    (t.mark = function (t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), u(t, s, "GeneratorFunction")), (t.prototype = Object.create(x)), t;
                    }),
                    (t.awrap = function (t) {
                        return { __await: t };
                    }),
                    T(k.prototype),
                    (k.prototype[a] = function () {
                        return this;
                    }),
                    (t.AsyncIterator = k),
                    (t.async = function (e, n, r, i, o) {
                        void 0 === o && (o = Promise);
                        var a = new k(h(e, n, r, i), o);
                        return t.isGeneratorFunction(n)
                            ? a
                            : a.next().then(function (t) {
                                  return t.done ? t.value : a.next();
                              });
                    }),
                    T(x),
                    u(x, s, "Generator"),
                    (x[o] = function () {
                        return this;
                    }),
                    (x.toString = function () {
                        return "[object Generator]";
                    }),
                    (t.keys = function (t) {
                        var e = [];
                        for (var n in t) e.push(n);
                        return (
                            e.reverse(),
                            function n() {
                                for (; e.length; ) {
                                    var r = e.pop();
                                    if (r in t) return (n.value = r), (n.done = !1), n;
                                }
                                return (n.done = !0), n;
                            }
                        );
                    }),
                    (t.values = C),
                    (S.prototype = {
                        constructor: S,
                        reset: function (t) {
                            if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(M), !t))
                                for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                        },
                        stop: function () {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type) throw t.arg;
                            return this.rval;
                        },
                        dispatchException: function (t) {
                            if (this.done) throw t;
                            var n = this;
                            function i(r, i) {
                                return (s.type = "throw"), (s.arg = t), (n.next = r), i && ((n.method = "next"), (n.arg = e)), !!i;
                            }
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var a = this.tryEntries[o],
                                    s = a.completion;
                                if ("root" === a.tryLoc) return i("end");
                                if (a.tryLoc <= this.prev) {
                                    var u = r.call(a, "catchLoc"),
                                        h = r.call(a, "finallyLoc");
                                    if (u && h) {
                                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                                    } else if (u) {
                                        if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    } else {
                                        if (!h) throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (t, e) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var i = this.tryEntries[n];
                                if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var o = i;
                                    break;
                                }
                            }
                            o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                            var a = o ? o.completion : {};
                            return (a.type = t), (a.arg = e), o ? ((this.method = "next"), (this.next = o.finallyLoc), _) : this.complete(a);
                        },
                        complete: function (t, e) {
                            if ("throw" === t.type) throw t.arg;
                            return (
                                "break" === t.type || "continue" === t.type
                                    ? (this.next = t.arg)
                                    : "return" === t.type
                                    ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                                    : "normal" === t.type && e && (this.next = e),
                                _
                            );
                        },
                        finish: function (t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), M(n), _;
                            }
                        },
                        catch: function (t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.tryLoc === t) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var i = r.arg;
                                        M(n);
                                    }
                                    return i;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function (t, n, r) {
                            return (this.delegate = { iterator: C(t), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = e), _;
                        },
                    }),
                    t
                );
            })(t.exports);
            try {
                regeneratorRuntime = r;
            } catch (t) {
                Function("r", "regeneratorRuntime = r")(r);
            }
        },
        function (t, e) {
            function n(e, r) {
                return (
                    (t.exports = n =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        }),
                    n(e, r)
                );
            }
            t.exports = n;
        },
        function (t, e) {
            function n(e) {
                return (
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? (t.exports = n = function (t) {
                              return typeof t;
                          })
                        : (t.exports = n = function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          }),
                    n(e)
                );
            }
            t.exports = n;
        },
        function (t, e) {
            t.exports = function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            };
        },
        function (t, e, n) {
            var r = n(15),
                i = n(16),
                o = n(17),
                a =
                    ' <div class="home view"> <div class="contentarea"> <div class="content-left"> <h1 class="contentarea-title">Clique no botão abaixo para criar a sua foto:</h1> <div class="camera"> <video id="video" playsinline="true" autoplay="true" muted="true">Video stream not available.</video> </div> <button id="takebutton">Tirar foto</button> </div> <div class="content-right"> <div class="output"> <div class="legend-buttons"> <button id="text1button">Prof Fabinho</button> <button id="text2button">Habraços de Luta</button> </div> <img id="photo" alt="The screen capture will appear in this box."> </div> <div class="result-buttons"> <button id="backbutton">Nova foto</button> <button id="downloadbutton">Baixar a foto</button> </div> </div> <canvas id="canvas"></canvas> <canvas id="canvasStream"></canvas> <img id="instaPost1" alt="The border will appear on the result." src="' +
                    r(i) +
                    '"> <img id="instaPost2" alt="The border will appear on the result." src="' +
                    r(o) +
                    '"> </div> ';
            t.exports = a;
        },
        function (t, e, n) {
            "use strict";
            t.exports = function (t, e) {
                return e || (e = {}), "string" != typeof (t = t && t.__esModule ? t.default : t) ? t : (e.hash && (t += e.hash), e.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(t) ? '"'.concat(t, '"') : t);
            };
        },
        function (t, e, n) {
            "use strict";
            n.r(e), (e.default = "images/insta-post1.png");
        },
        function (t, e, n) {
            "use strict";
            n.r(e), (e.default = "images/insta-post2.png");
        },
        function (t, e, n) {
            var r = n(19),
                i = n(20);
            "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[t.i, i, ""]]);
            var o = { insert: "head", singleton: !1 };
            r(i, o);
            t.exports = i.locals || {};
        },
        function (t, e, n) {
            "use strict";
            var r,
                i = function () {
                    return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
                },
                o = (function () {
                    var t = {};
                    return function (e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (t) {
                                    n = null;
                                }
                            t[e] = n;
                        }
                        return t[e];
                    };
                })(),
                a = [];
            function s(t) {
                for (var e = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === t) {
                        e = n;
                        break;
                    }
                return e;
            }
            function u(t, e) {
                for (var n = {}, r = [], i = 0; i < t.length; i++) {
                    var o = t[i],
                        u = e.base ? o[0] + e.base : o[0],
                        h = n[u] || 0,
                        c = "".concat(u, " ").concat(h);
                    n[u] = h + 1;
                    var l = s(c),
                        f = { css: o[1], media: o[2], sourceMap: o[3] };
                    -1 !== l ? (a[l].references++, a[l].updater(f)) : a.push({ identifier: c, updater: m(f, e), references: 1 }), r.push(c);
                }
                return r;
            }
            function h(t) {
                var e = document.createElement("style"),
                    r = t.attributes || {};
                if (void 0 === r.nonce) {
                    var i = n.nc;
                    i && (r.nonce = i);
                }
                if (
                    (Object.keys(r).forEach(function (t) {
                        e.setAttribute(t, r[t]);
                    }),
                    "function" == typeof t.insert)
                )
                    t.insert(e);
                else {
                    var a = o(t.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(e);
                }
                return e;
            }
            var c,
                l =
                    ((c = []),
                    function (t, e) {
                        return (c[t] = e), c.filter(Boolean).join("\n");
                    });
            function f(t, e, n, r) {
                var i = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (t.styleSheet) t.styleSheet.cssText = l(e, i);
                else {
                    var o = document.createTextNode(i),
                        a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o);
                }
            }
            function p(t, e, n) {
                var r = n.css,
                    i = n.media,
                    o = n.sourceMap;
                if (
                    (i ? t.setAttribute("media", i) : t.removeAttribute("media"),
                    o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
                    t.styleSheet)
                )
                    t.styleSheet.cssText = r;
                else {
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(r));
                }
            }
            var d = null,
                _ = 0;
            function m(t, e) {
                var n, r, i;
                if (e.singleton) {
                    var o = _++;
                    (n = d || (d = h(e))), (r = f.bind(null, n, o, !1)), (i = f.bind(null, n, o, !0));
                } else
                    (n = h(e)),
                        (r = p.bind(null, n, e)),
                        (i = function () {
                            !(function (t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t);
                            })(n);
                        });
                return (
                    r(t),
                    function (e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            r((t = e));
                        } else i();
                    }
                );
            }
            t.exports = function (t, e) {
                (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = i());
                var n = u((t = t || []), e);
                return function (t) {
                    if (((t = t || []), "[object Array]" === Object.prototype.toString.call(t))) {
                        for (var r = 0; r < n.length; r++) {
                            var i = s(n[r]);
                            a[i].references--;
                        }
                        for (var o = u(t, e), h = 0; h < n.length; h++) {
                            var c = s(n[h]);
                            0 === a[c].references && (a[c].updater(), a.splice(c, 1));
                        }
                        n = o;
                    }
                };
            };
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var r = n(7),
                i = n.n(r)()(!0);
            i.push([t.i, "", "", { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" }]), (e.default = i);
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            var r = n(0),
                i = n.n(r),
                o = (n(9), n(2)),
                a = n.n(o),
                s = n(4),
                u = n.n(s),
                h = n(1),
                c = n.n(h),
                l = function (t) {
                    var e = t.result.slice(1),
                        n = Array.from(t.route.path.matchAll(/:(\w+)/g)).map(function (t) {
                            return t[1];
                        });
                    return Object.fromEntries(
                        n.map(function (t, n) {
                            return [t, e[n]];
                        })
                    );
                },
                f = (function () {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        i()(this, t),
                            (this.routes = n),
                            "" != e ? ((this.container = document.querySelector(e)), this.container ? this.setListeners() : console.error("The container can not be null!")) : console.error("An id of the container is required!");
                    }
                    var e;
                    return (
                        c()(t, [
                            {
                                key: "setListeners",
                                value: function () {
                                    var t = this;
                                    window.addEventListener("popstate", function () {
                                        t.update();
                                    }),
                                        document.addEventListener("DOMContentLoaded", function () {
                                            document.body.addEventListener("click", function (e) {
                                                if (e.target.matches("[router-link]")) {
                                                    if ((e.preventDefault(), e.target.href == location.href)) return;
                                                    t.navigateTo(e.target.href);
                                                }
                                            }),
                                                t.update();
                                        });
                                },
                            },
                            {
                                key: "navigateTo",
                                value: function (t) {
                                    history.pushState(null, null, t), this.update();
                                },
                            },
                            {
                                key: "update",
                                value:
                                    ((e = u()(
                                        a.a.mark(function t() {
                                            var e, n, r;
                                            return a.a.wrap(
                                                function (t) {
                                                    for (;;)
                                                        switch ((t.prev = t.next)) {
                                                            case 0:
                                                                return (
                                                                    (e = this.routes.map(function (t) {
                                                                        return { route: t, result: location.pathname.match(((e = t.path), new RegExp("^" + e.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"))) };
                                                                        var e;
                                                                    })),
                                                                    (n = e.find(function (t) {
                                                                        return null !== t.result;
                                                                    })) || (n = { route: this.routes[0], result: [location.pathname] }),
                                                                    (r = new n.route.view(l(n))),
                                                                    (t.next = 6),
                                                                    r.hide()
                                                                );
                                                            case 6:
                                                                this.container.innerHTML = n.route.template;
                                                            case 7:
                                                            case "end":
                                                                return t.stop();
                                                        }
                                                },
                                                t,
                                                this
                                            );
                                        })
                                    )),
                                    function () {
                                        return e.apply(this, arguments);
                                    }),
                            },
                        ]),
                        t
                    );
                })(),
                p = n(5),
                d = n.n(p),
                _ = n(6),
                m = n.n(_),
                v = n(3),
                g = n.n(v);
            function y(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function b(t, e) {
                (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
            }
            var w,
                x,
                T,
                k,
                O,
                A,
                M,
                S,
                C,
                E,
                P,
                D,
                L,
                R,
                B,
                F,
                z,
                I,
                j,
                N,
                U,
                Y,
                q,
                X,
                G,
                V,
                H,
                W,
                Q = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
                $ = { duration: 0.5, overwrite: !1, delay: 0 },
                J = 1e8,
                Z = 1e-8,
                K = 2 * Math.PI,
                tt = K / 4,
                et = 0,
                nt = Math.sqrt,
                rt = Math.cos,
                it = Math.sin,
                ot = function (t) {
                    return "string" == typeof t;
                },
                at = function (t) {
                    return "function" == typeof t;
                },
                st = function (t) {
                    return "number" == typeof t;
                },
                ut = function (t) {
                    return void 0 === t;
                },
                ht = function (t) {
                    return "object" == typeof t;
                },
                ct = function (t) {
                    return !1 !== t;
                },
                lt = function () {
                    return "undefined" != typeof window;
                },
                ft = function (t) {
                    return at(t) || ot(t);
                },
                pt = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
                dt = Array.isArray,
                _t = /(?:-?\.?\d|\.)+/gi,
                mt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                vt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                gt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                yt = /[+-]=-?[.\d]+/,
                bt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
                wt = /[\d.+\-=]+(?:e[-+]\d*)*/i,
                xt = {},
                Tt = {},
                kt = function (t) {
                    return (Tt = $t(t, xt)) && Fn;
                },
                Ot = function (t, e) {
                    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
                },
                At = function (t, e) {
                    return !e && console.warn(t);
                },
                Mt = function (t, e) {
                    return (t && (xt[t] = e) && Tt && (Tt[t] = e)) || xt;
                },
                St = function () {
                    return 0;
                },
                Ct = {},
                Et = [],
                Pt = {},
                Dt = {},
                Lt = {},
                Rt = 30,
                Bt = [],
                Ft = "",
                zt = function (t) {
                    var e,
                        n,
                        r = t[0];
                    if ((ht(r) || at(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
                        for (n = Bt.length; n-- && !Bt[n].targetTest(r); );
                        e = Bt[n];
                    }
                    for (n = t.length; n--; ) (t[n] && (t[n]._gsap || (t[n]._gsap = new sn(t[n], e)))) || t.splice(n, 1);
                    return t;
                },
                It = function (t) {
                    return t._gsap || zt(Oe(t))[0]._gsap;
                },
                jt = function (t, e, n) {
                    return (n = t[e]) && at(n) ? t[e]() : (ut(n) && t.getAttribute && t.getAttribute(e)) || n;
                },
                Nt = function (t, e) {
                    return (t = t.split(",")).forEach(e) || t;
                },
                Ut = function (t) {
                    return Math.round(1e5 * t) / 1e5 || 0;
                },
                Yt = function (t, e) {
                    for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
                    return r < n;
                },
                qt = function (t, e, n) {
                    var r,
                        i = st(t[1]),
                        o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
                        a = t[o];
                    if ((i && (a.duration = t[1]), (a.parent = n), e)) {
                        for (r = a; n && !("immediateRender" in r); ) (r = n.vars.defaults || {}), (n = ct(n.vars.inherit) && n.parent);
                        (a.immediateRender = ct(r.immediateRender)), e < 2 ? (a.runBackwards = 1) : (a.startAt = t[o - 1]);
                    }
                    return a;
                },
                Xt = function () {
                    var t,
                        e,
                        n = Et.length,
                        r = Et.slice(0);
                    for (Pt = {}, Et.length = 0, t = 0; t < n; t++) (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
                },
                Gt = function (t, e, n, r) {
                    Et.length && Xt(), t.render(e, n, r), Et.length && Xt();
                },
                Vt = function (t) {
                    var e = parseFloat(t);
                    return (e || 0 === e) && (t + "").match(bt).length < 2 ? e : ot(t) ? t.trim() : t;
                },
                Ht = function (t) {
                    return t;
                },
                Wt = function (t, e) {
                    for (var n in e) n in t || (t[n] = e[n]);
                    return t;
                },
                Qt = function (t, e) {
                    for (var n in e) n in t || "duration" === n || "ease" === n || (t[n] = e[n]);
                },
                $t = function (t, e) {
                    for (var n in e) t[n] = e[n];
                    return t;
                },
                Jt = function t(e, n) {
                    for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = ht(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
                    return e;
                },
                Zt = function (t, e) {
                    var n,
                        r = {};
                    for (n in t) n in e || (r[n] = t[n]);
                    return r;
                },
                Kt = function (t) {
                    var e = t.parent || x,
                        n = t.keyframes ? Qt : Wt;
                    if (ct(t.inherit)) for (; e; ) n(t, e.vars.defaults), (e = e.parent || e._dp);
                    return t;
                },
                te = function (t, e, n, r) {
                    void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
                    var i = e._prev,
                        o = e._next;
                    i ? (i._next = o) : t[n] === e && (t[n] = o), o ? (o._prev = i) : t[r] === e && (t[r] = i), (e._next = e._prev = e.parent = null);
                },
                ee = function (t, e) {
                    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
                },
                ne = function (t, e) {
                    if (t && (!e || e._end > t._dur || e._start < 0)) for (var n = t; n; ) (n._dirty = 1), (n = n.parent);
                    return t;
                },
                re = function (t) {
                    for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
                    return t;
                },
                ie = function t(e) {
                    return !e || (e._ts && t(e.parent));
                },
                oe = function (t) {
                    return t._repeat ? ae(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
                },
                ae = function (t, e) {
                    var n = Math.floor((t /= e));
                    return t && n === t ? n - 1 : n;
                },
                se = function (t, e) {
                    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
                },
                ue = function (t) {
                    return (t._end = Ut(t._start + (t._tDur / Math.abs(t._ts || t._rts || Z) || 0)));
                },
                he = function (t, e) {
                    var n = t._dp;
                    return n && n.smoothChildTiming && t._ts && ((t._start = Ut(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), ue(t), n._dirty || ne(n, t)), t;
                },
                ce = function (t, e) {
                    var n;
                    if (((e._time || (e._initted && !e._dur)) && ((n = se(t.rawTime(), e)), (!e._dur || be(0, e.totalDuration(), n) - e._tTime > Z) && e.render(n, !0)), ne(t, e)._dp && t._initted && t._time >= t._dur && t._ts)) {
                        if (t._dur < t.duration()) for (n = t; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
                        t._zTime = -1e-8;
                    }
                },
                le = function (t, e, n, r) {
                    return (
                        e.parent && ee(e),
                        (e._start = Ut(n + e._delay)),
                        (e._end = Ut(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
                        (function (t, e, n, r, i) {
                            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
                            var o,
                                a = t[r];
                            if (i) for (o = e[i]; a && a[i] > o; ) a = a._prev;
                            a ? ((e._next = a._next), (a._next = e)) : ((e._next = t[n]), (t[n] = e)), e._next ? (e._next._prev = e) : (t[r] = e), (e._prev = a), (e.parent = e._dp = t);
                        })(t, e, "_first", "_last", t._sort ? "_start" : 0),
                        (t._recent = e),
                        r || ce(t, e),
                        t
                    );
                },
                fe = function (t, e) {
                    return (xt.ScrollTrigger || Ot("scrollTrigger", e)) && xt.ScrollTrigger.create(e, t);
                },
                pe = function (t, e, n, r) {
                    return dn(t, e), t._initted ? (!n && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && M !== He.frame ? (Et.push(t), (t._lazy = [e, r]), 1) : void 0) : 1;
                },
                de = function t(e) {
                    var n = e.parent;
                    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
                },
                _e = function (t, e, n, r) {
                    var i = t._repeat,
                        o = Ut(e) || 0,
                        a = t._tTime / t._tDur;
                    return a && !r && (t._time *= o / t._dur), (t._dur = o), (t._tDur = i ? (i < 0 ? 1e10 : Ut(o * (i + 1) + t._rDelay * i)) : o), a && !r ? he(t, (t._tTime = t._tDur * a)) : t.parent && ue(t), n || ne(t.parent, t), t;
                },
                me = function (t) {
                    return t instanceof hn ? ne(t) : _e(t, t._dur);
                },
                ve = { _start: 0, endTime: St },
                ge = function t(e, n) {
                    var r,
                        i,
                        o = e.labels,
                        a = e._recent || ve,
                        s = e.duration() >= J ? a.endTime(!1) : e._dur;
                    return ot(n) && (isNaN(n) || n in o)
                        ? "<" === (r = n.charAt(0)) || ">" === r
                            ? ("<" === r ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0)
                            : (r = n.indexOf("=")) < 0
                            ? (n in o || (o[n] = s), o[n])
                            : ((i = +(n.charAt(r - 1) + n.substr(r + 1))), r > 1 ? t(e, n.substr(0, r - 1)) + i : s + i)
                        : null == n
                        ? s
                        : +n;
                },
                ye = function (t, e) {
                    return t || 0 === t ? e(t) : e;
                },
                be = function (t, e, n) {
                    return n < t ? t : n > e ? e : n;
                },
                we = function (t) {
                    if ("string" != typeof t) return "";
                    var e = wt.exec(t);
                    return e ? t.substr(e.index + e[0].length) : "";
                },
                xe = [].slice,
                Te = function (t, e) {
                    return t && ht(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && ht(t[0]))) && !t.nodeType && t !== T;
                },
                ke = function (t, e, n) {
                    return (
                        void 0 === n && (n = []),
                        t.forEach(function (t) {
                            var r;
                            return (ot(t) && !e) || Te(t, 1) ? (r = n).push.apply(r, Oe(t)) : n.push(t);
                        }) || n
                    );
                },
                Oe = function (t, e) {
                    return !ot(t) || e || (!k && We()) ? (dt(t) ? ke(t, e) : Te(t) ? xe.call(t, 0) : t ? [t] : []) : xe.call(O.querySelectorAll(t), 0);
                },
                Ae = function (t) {
                    return t.sort(function () {
                        return 0.5 - Math.random();
                    });
                },
                Me = function (t) {
                    if (at(t)) return t;
                    var e = ht(t) ? t : { each: t },
                        n = en(e.ease),
                        r = e.from || 0,
                        i = parseFloat(e.base) || 0,
                        o = {},
                        a = r > 0 && r < 1,
                        s = isNaN(r) || a,
                        u = e.axis,
                        h = r,
                        c = r;
                    return (
                        ot(r) ? (h = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0) : !a && s && ((h = r[0]), (c = r[1])),
                        function (t, a, l) {
                            var f,
                                p,
                                d,
                                _,
                                m,
                                v,
                                g,
                                y,
                                b,
                                w = (l || e).length,
                                x = o[w];
                            if (!x) {
                                if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, J])[1])) {
                                    for (g = -J; g < (g = l[b++].getBoundingClientRect().left) && b < w; );
                                    b--;
                                }
                                for (x = o[w] = [], f = s ? Math.min(b, w) * h - 0.5 : r % b, p = s ? (w * c) / b - 0.5 : (r / b) | 0, g = 0, y = J, v = 0; v < w; v++)
                                    (d = (v % b) - f), (_ = p - ((v / b) | 0)), (x[v] = m = u ? Math.abs("y" === u ? _ : d) : nt(d * d + _ * _)), m > g && (g = m), m < y && (y = m);
                                "random" === r && Ae(x),
                                    (x.max = g - y),
                                    (x.min = y),
                                    (x.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (b > w ? w - 1 : u ? ("y" === u ? w / b : b) : Math.max(b, w / b)) || 0) * ("edges" === r ? -1 : 1)),
                                    (x.b = w < 0 ? i - w : i),
                                    (x.u = we(e.amount || e.each) || 0),
                                    (n = n && w < 0 ? Ke(n) : n);
                            }
                            return (w = (x[t] - x.min) / x.max || 0), Ut(x.b + (n ? n(w) : w) * x.v) + x.u;
                        }
                    );
                },
                Se = function (t) {
                    var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                    return function (n) {
                        var r = Math.round(parseFloat(n) / t) * t * e;
                        return (r - (r % 1)) / e + (st(n) ? 0 : we(n));
                    };
                },
                Ce = function (t, e) {
                    var n,
                        r,
                        i = dt(t);
                    return (
                        !i && ht(t) && ((n = i = t.radius || J), t.values ? ((t = Oe(t.values)), (r = !st(t[0])) && (n *= n)) : (t = Se(t.increment))),
                        ye(
                            e,
                            i
                                ? at(t)
                                    ? function (e) {
                                          return (r = t(e)), Math.abs(r - e) <= n ? r : e;
                                      }
                                    : function (e) {
                                          for (var i, o, a = parseFloat(r ? e.x : e), s = parseFloat(r ? e.y : 0), u = J, h = 0, c = t.length; c--; )
                                              (i = r ? (i = t[c].x - a) * i + (o = t[c].y - s) * o : Math.abs(t[c] - a)) < u && ((u = i), (h = c));
                                          return (h = !n || u <= n ? t[h] : e), r || h === e || st(e) ? h : h + we(e);
                                      }
                                : Se(t)
                        )
                    );
                },
                Ee = function (t, e, n, r) {
                    return ye(dt(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
                        return dt(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n) * n * r) / r;
                    });
                },
                Pe = function (t, e, n) {
                    return ye(n, function (n) {
                        return t[~~e(n)];
                    });
                },
                De = function (t) {
                    for (var e, n, r, i, o = 0, a = ""; ~(e = t.indexOf("random(", o)); )
                        (r = t.indexOf(")", e)), (i = "[" === t.charAt(e + 7)), (n = t.substr(e + 7, r - e - 7).match(i ? bt : _t)), (a += t.substr(o, e - o) + Ee(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)), (o = r + 1);
                    return a + t.substr(o, t.length - o);
                },
                Le = function (t, e, n, r, i) {
                    var o = e - t,
                        a = r - n;
                    return ye(i, function (e) {
                        return n + (((e - t) / o) * a || 0);
                    });
                },
                Re = function (t, e, n) {
                    var r,
                        i,
                        o,
                        a = t.labels,
                        s = J;
                    for (r in a) (i = a[r] - e) < 0 == !!n && i && s > (i = Math.abs(i)) && ((o = r), (s = i));
                    return o;
                },
                Be = function (t, e, n) {
                    var r,
                        i,
                        o = t.vars,
                        a = o[e];
                    if (a) return (r = o[e + "Params"]), (i = o.callbackScope || t), n && Et.length && Xt(), r ? a.apply(i, r) : a.call(i);
                },
                Fe = function (t) {
                    return ee(t), t.progress() < 1 && Be(t, "onInterrupt"), t;
                },
                ze = function (t) {
                    var e = (t = (!t.name && t.default) || t).name,
                        n = at(t),
                        r =
                            e && !n && t.init
                                ? function () {
                                      this._props = [];
                                  }
                                : t,
                        i = { init: St, render: Mn, add: fn, kill: Cn, modifier: Sn, rawVars: 0 },
                        o = { targetTest: 0, get: 0, getSetter: Tn, aliases: {}, register: 0 };
                    if ((We(), t !== r)) {
                        if (Dt[e]) return;
                        Wt(r, Wt(Zt(t, i), o)), $t(r.prototype, $t(i, Zt(t, o))), (Dt[(r.prop = e)] = r), t.targetTest && (Bt.push(r), (Ct[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                    }
                    Mt(e, r), t.register && t.register(Fn, r, Dn);
                },
                Ie = 255,
                je = {
                    aqua: [0, Ie, Ie],
                    lime: [0, Ie, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, Ie],
                    navy: [0, 0, 128],
                    white: [Ie, Ie, Ie],
                    olive: [128, 128, 0],
                    yellow: [Ie, Ie, 0],
                    orange: [Ie, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [Ie, 0, 0],
                    pink: [Ie, 192, 203],
                    cyan: [0, Ie, Ie],
                    transparent: [Ie, Ie, Ie, 0],
                },
                Ne = function (t, e, n) {
                    return ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < 0.5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * Ie + 0.5) | 0;
                },
                Ue = function (t, e, n) {
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        h,
                        c,
                        l,
                        f,
                        p = t ? (st(t) ? [t >> 16, (t >> 8) & Ie, t & Ie] : 0) : je.black;
                    if (!p) {
                        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), je[t])) p = je[t];
                        else if ("#" === t.charAt(0)) {
                            if ((t.length < 6 && ((r = t.charAt(1)), (i = t.charAt(2)), (o = t.charAt(3)), (t = "#" + r + r + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))), 9 === t.length))
                                return [(p = parseInt(t.substr(1, 6), 16)) >> 16, (p >> 8) & Ie, p & Ie, parseInt(t.substr(7), 16) / 255];
                            p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Ie, t & Ie];
                        } else if ("hsl" === t.substr(0, 3))
                            if (((p = f = t.match(_t)), e)) {
                                if (~t.indexOf("=")) return (p = t.match(mt)), n && p.length < 4 && (p[3] = 1), p;
                            } else
                                (a = (+p[0] % 360) / 360),
                                    (s = +p[1] / 100),
                                    (r = 2 * (u = +p[2] / 100) - (i = u <= 0.5 ? u * (s + 1) : u + s - u * s)),
                                    p.length > 3 && (p[3] *= 1),
                                    (p[0] = Ne(a + 1 / 3, r, i)),
                                    (p[1] = Ne(a, r, i)),
                                    (p[2] = Ne(a - 1 / 3, r, i));
                        else p = t.match(_t) || je.transparent;
                        p = p.map(Number);
                    }
                    return (
                        e &&
                            !f &&
                            ((r = p[0] / Ie),
                            (i = p[1] / Ie),
                            (o = p[2] / Ie),
                            (u = ((h = Math.max(r, i, o)) + (c = Math.min(r, i, o))) / 2),
                            h === c ? (a = s = 0) : ((l = h - c), (s = u > 0.5 ? l / (2 - h - c) : l / (h + c)), (a = h === r ? (i - o) / l + (i < o ? 6 : 0) : h === i ? (o - r) / l + 2 : (r - i) / l + 4), (a *= 60)),
                            (p[0] = ~~(a + 0.5)),
                            (p[1] = ~~(100 * s + 0.5)),
                            (p[2] = ~~(100 * u + 0.5))),
                        n && p.length < 4 && (p[3] = 1),
                        p
                    );
                },
                Ye = function (t) {
                    var e = [],
                        n = [],
                        r = -1;
                    return (
                        t.split(Xe).forEach(function (t) {
                            var i = t.match(vt) || [];
                            e.push.apply(e, i), n.push((r += i.length + 1));
                        }),
                        (e.c = n),
                        e
                    );
                },
                qe = function (t, e, n) {
                    var r,
                        i,
                        o,
                        a,
                        s = "",
                        u = (t + s).match(Xe),
                        h = e ? "hsla(" : "rgba(",
                        c = 0;
                    if (!u) return t;
                    if (
                        ((u = u.map(function (t) {
                            return (t = Ue(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
                        })),
                        n && ((o = Ye(t)), (r = n.c).join(s) !== o.c.join(s)))
                    )
                        for (a = (i = t.replace(Xe, "1").split(vt)).length - 1; c < a; c++) s += i[c] + (~r.indexOf(c) ? u.shift() || h + "0,0,0,0)" : (o.length ? o : u.length ? u : n).shift());
                    if (!i) for (a = (i = t.split(Xe)).length - 1; c < a; c++) s += i[c] + u[c];
                    return s + i[a];
                },
                Xe = (function () {
                    var t,
                        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                    for (t in je) e += "|" + t + "\\b";
                    return new RegExp(e + ")", "gi");
                })(),
                Ge = /hsl[a]?\(/,
                Ve = function (t) {
                    var e,
                        n = t.join(" ");
                    if (((Xe.lastIndex = 0), Xe.test(n))) return (e = Ge.test(n)), (t[1] = qe(t[1], e)), (t[0] = qe(t[0], e, Ye(t[1]))), !0;
                },
                He =
                    ((F = Date.now),
                    (z = 500),
                    (I = 33),
                    (j = F()),
                    (N = j),
                    (Y = U = 1e3 / 240),
                    (X = function t(e) {
                        var n,
                            r,
                            i,
                            o,
                            a = F() - N,
                            s = !0 === e;
                        if ((a > z && (j += a - I), ((n = (i = (N += a) - j) - Y) > 0 || s) && ((o = ++L.frame), (R = i - 1e3 * L.time), (L.time = i /= 1e3), (Y += n + (n >= U ? 4 : U - n)), (r = 1)), s || (E = P(t)), r))
                            for (B = 0; B < q.length; B++) q[B](i, R, o, e);
                    }),
                    (L = {
                        time: 0,
                        frame: 0,
                        tick: function () {
                            X(!0);
                        },
                        deltaRatio: function (t) {
                            return R / (1e3 / (t || 60));
                        },
                        wake: function () {
                            A &&
                                (!k &&
                                    lt() &&
                                    ((T = k = window), (O = T.document || {}), (xt.gsap = Fn), (T.gsapVersions || (T.gsapVersions = [])).push(Fn.version), kt(Tt || T.GreenSockGlobals || (!T.gsap && T) || {}), (D = T.requestAnimationFrame)),
                                E && L.sleep(),
                                (P =
                                    D ||
                                    function (t) {
                                        return setTimeout(t, (Y - 1e3 * L.time + 1) | 0);
                                    }),
                                (C = 1),
                                X(2));
                        },
                        sleep: function () {
                            (D ? T.cancelAnimationFrame : clearTimeout)(E), (C = 0), (P = St);
                        },
                        lagSmoothing: function (t, e) {
                            (z = t || 1e8), (I = Math.min(e, z, 0));
                        },
                        fps: function (t) {
                            (U = 1e3 / (t || 240)), (Y = 1e3 * L.time + U);
                        },
                        add: function (t) {
                            q.indexOf(t) < 0 && q.push(t), We();
                        },
                        remove: function (t) {
                            var e;
                            ~(e = q.indexOf(t)) && q.splice(e, 1) && B >= e && B--;
                        },
                        _listeners: (q = []),
                    })),
                We = function () {
                    return !C && He.wake();
                },
                Qe = {},
                $e = /^[\d.\-M][\d.\-,\s]/,
                Je = /["']/g,
                Ze = function (t) {
                    for (var e, n, r, i = {}, o = t.substr(1, t.length - 3).split(":"), a = o[0], s = 1, u = o.length; s < u; s++)
                        (n = o[s]), (e = s !== u - 1 ? n.lastIndexOf(",") : n.length), (r = n.substr(0, e)), (i[a] = isNaN(r) ? r.replace(Je, "").trim() : +r), (a = n.substr(e + 1).trim());
                    return i;
                },
                Ke = function (t) {
                    return function (e) {
                        return 1 - t(1 - e);
                    };
                },
                tn = function t(e, n) {
                    for (var r, i = e._first; i; )
                        i instanceof hn ? t(i, n) : !i.vars.yoyoEase || (i._yoyo && i._repeat) || i._yoyo === n || (i.timeline ? t(i.timeline, n) : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = n))), (i = i._next);
                },
                en = function (t, e) {
                    return (
                        (t &&
                            (at(t)
                                ? t
                                : Qe[t] ||
                                  (function (t) {
                                      var e,
                                          n,
                                          r,
                                          i,
                                          o = (t + "").split("("),
                                          a = Qe[o[0]];
                                      return a && o.length > 1 && a.config
                                          ? a.config.apply(
                                                null,
                                                ~t.indexOf("{") ? [Ze(o[1])] : ((e = t), (n = e.indexOf("(") + 1), (r = e.indexOf(")")), (i = e.indexOf("(", n)), e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(Vt)
                                            )
                                          : Qe._CE && $e.test(t)
                                          ? Qe._CE("", t)
                                          : a;
                                  })(t))) ||
                        e
                    );
                },
                nn = function (t, e, n, r) {
                    void 0 === n &&
                        (n = function (t) {
                            return 1 - e(1 - t);
                        }),
                        void 0 === r &&
                            (r = function (t) {
                                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                            });
                    var i,
                        o = { easeIn: e, easeOut: n, easeInOut: r };
                    return (
                        Nt(t, function (t) {
                            for (var e in ((Qe[t] = xt[t] = o), (Qe[(i = t.toLowerCase())] = n), o)) Qe[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Qe[t + "." + e] = o[e];
                        }),
                        o
                    );
                },
                rn = function (t) {
                    return function (e) {
                        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
                    };
                },
                on = function t(e, n, r) {
                    var i = n >= 1 ? n : 1,
                        o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
                        a = (o / K) * (Math.asin(1 / i) || 0),
                        s = function (t) {
                            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * it((t - a) * o) + 1;
                        },
                        u =
                            "out" === e
                                ? s
                                : "in" === e
                                ? function (t) {
                                      return 1 - s(1 - t);
                                  }
                                : rn(s);
                    return (
                        (o = K / o),
                        (u.config = function (n, r) {
                            return t(e, n, r);
                        }),
                        u
                    );
                },
                an = function t(e, n) {
                    void 0 === n && (n = 1.70158);
                    var r = function (t) {
                            return t ? --t * t * ((n + 1) * t + n) + 1 : 0;
                        },
                        i =
                            "out" === e
                                ? r
                                : "in" === e
                                ? function (t) {
                                      return 1 - r(1 - t);
                                  }
                                : rn(r);
                    return (
                        (i.config = function (n) {
                            return t(e, n);
                        }),
                        i
                    );
                };
            Nt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
                var n = e < 5 ? e + 1 : e;
                nn(
                    t + ",Power" + (n - 1),
                    e
                        ? function (t) {
                              return Math.pow(t, n);
                          }
                        : function (t) {
                              return t;
                          },
                    function (t) {
                        return 1 - Math.pow(1 - t, n);
                    },
                    function (t) {
                        return t < 0.5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2;
                    }
                );
            }),
                (Qe.Linear.easeNone = Qe.none = Qe.Linear.easeIn),
                nn("Elastic", on("in"), on("out"), on()),
                (G = 7.5625),
                (H = 1 / (V = 2.75)),
                nn(
                    "Bounce",
                    function (t) {
                        return 1 - W(1 - t);
                    },
                    (W = function (t) {
                        return t < H ? G * t * t : t < 0.7272727272727273 ? G * Math.pow(t - 1.5 / V, 2) + 0.75 : t < 0.9090909090909092 ? G * (t -= 2.25 / V) * t + 0.9375 : G * Math.pow(t - 2.625 / V, 2) + 0.984375;
                    })
                ),
                nn("Expo", function (t) {
                    return t ? Math.pow(2, 10 * (t - 1)) : 0;
                }),
                nn("Circ", function (t) {
                    return -(nt(1 - t * t) - 1);
                }),
                nn("Sine", function (t) {
                    return 1 === t ? 1 : 1 - rt(t * tt);
                }),
                nn("Back", an("in"), an("out"), an()),
                (Qe.SteppedEase = Qe.steps = xt.SteppedEase = {
                    config: function (t, e) {
                        void 0 === t && (t = 1);
                        var n = 1 / t,
                            r = t + (e ? 0 : 1),
                            i = e ? 1 : 0;
                        return function (t) {
                            return (((r * be(0, 0.99999999, t)) | 0) + i) * n;
                        };
                    },
                }),
                ($.ease = Qe["quad.out"]),
                Nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
                    return (Ft += t + "," + t + "Params,");
                });
            var sn = function (t, e) {
                    (this.id = et++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : jt), (this.set = e ? e.getSetter : Tn);
                },
                un = (function () {
                    function t(t, e) {
                        var n = t.parent || x;
                        (this.vars = t),
                            (this._delay = +t.delay || 0),
                            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                            (this._ts = 1),
                            _e(this, +t.duration, 1, 1),
                            (this.data = t.data),
                            C || He.wake(),
                            n && le(n, this, e || 0 === e ? e : n._time, 1),
                            t.reversed && this.reverse(),
                            t.paused && this.paused(!0);
                    }
                    var e = t.prototype;
                    return (
                        (e.delay = function (t) {
                            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
                        }),
                        (e.duration = function (t) {
                            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
                        }),
                        (e.totalDuration = function (t) {
                            return arguments.length ? ((this._dirty = 0), _e(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                        }),
                        (e.totalTime = function (t, e) {
                            if ((We(), !arguments.length)) return this._tTime;
                            var n = this._dp;
                            if (n && n.smoothChildTiming && this._ts) {
                                for (he(this, t), !n._dp || n.parent || ce(n, this); n.parent; )
                                    n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), (n = n.parent);
                                !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && le(this._dp, this, this._start - this._delay);
                            }
                            return (
                                (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === Z) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), Gt(this, t, e)), this
                            );
                        }),
                        (e.time = function (t, e) {
                            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + oe(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
                        }),
                        (e.totalProgress = function (t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                        }),
                        (e.progress = function (t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + oe(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                        }),
                        (e.iteration = function (t, e) {
                            var n = this.duration() + this._rDelay;
                            return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? ae(this._tTime, n) + 1 : 1;
                        }),
                        (e.timeScale = function (t) {
                            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                            if (this._rts === t) return this;
                            var e = this.parent && this._ts ? se(this.parent._time, this) : this._tTime;
                            return (this._rts = +t || 0), (this._ts = this._ps || -1e-8 === t ? 0 : this._rts), re(this.totalTime(be(-this._delay, this._tDur, e), !0));
                        }),
                        (e.paused = function (t) {
                            return arguments.length
                                ? (this._ps !== t &&
                                      ((this._ps = t),
                                      t
                                          ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                          : (We(),
                                            (this._ts = this._rts),
                                            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= Z) && Math.abs(this._zTime) !== Z))),
                                  this)
                                : this._ps;
                        }),
                        (e.startTime = function (t) {
                            if (arguments.length) {
                                this._start = t;
                                var e = this.parent || this._dp;
                                return e && (e._sort || !this.parent) && le(e, this, t - this._delay), this;
                            }
                            return this._start;
                        }),
                        (e.endTime = function (t) {
                            return this._start + (ct(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
                        }),
                        (e.rawTime = function (t) {
                            var e = this.parent || this._dp;
                            return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? se(e.rawTime(t), this) : this._tTime) : this._tTime;
                        }),
                        (e.globalTime = function (t) {
                            for (var e = this, n = arguments.length ? t : e.rawTime(); e; ) (n = e._start + n / (e._ts || 1)), (e = e._dp);
                            return n;
                        }),
                        (e.repeat = function (t) {
                            return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), me(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
                        }),
                        (e.repeatDelay = function (t) {
                            return arguments.length ? ((this._rDelay = t), me(this)) : this._rDelay;
                        }),
                        (e.yoyo = function (t) {
                            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                        }),
                        (e.seek = function (t, e) {
                            return this.totalTime(ge(this, t), ct(e));
                        }),
                        (e.restart = function (t, e) {
                            return this.play().totalTime(t ? -this._delay : 0, ct(e));
                        }),
                        (e.play = function (t, e) {
                            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                        }),
                        (e.reverse = function (t, e) {
                            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                        }),
                        (e.pause = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!0);
                        }),
                        (e.resume = function () {
                            return this.paused(!1);
                        }),
                        (e.reversed = function (t) {
                            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
                        }),
                        (e.invalidate = function () {
                            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
                        }),
                        (e.isActive = function () {
                            var t,
                                e = this.parent || this._dp,
                                n = this._start;
                            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - Z));
                        }),
                        (e.eventCallback = function (t, e, n) {
                            var r = this.vars;
                            return arguments.length > 1 ? (e ? ((r[t] = e), n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t];
                        }),
                        (e.then = function (t) {
                            var e = this;
                            return new Promise(function (n) {
                                var r = at(t) ? t : Ht,
                                    i = function () {
                                        var t = e.then;
                                        (e.then = null), at(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), (e.then = t);
                                    };
                                (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? i() : (e._prom = i);
                            });
                        }),
                        (e.kill = function () {
                            Fe(this);
                        }),
                        t
                    );
                })();
            Wt(un.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
            var hn = (function (t) {
                function e(e, n) {
                    var r;
                    return (
                        void 0 === e && (e = {}),
                        ((r = t.call(this, e, n) || this).labels = {}),
                        (r.smoothChildTiming = !!e.smoothChildTiming),
                        (r.autoRemoveChildren = !!e.autoRemoveChildren),
                        (r._sort = ct(e.sortChildren)),
                        r.parent && ce(r.parent, y(r)),
                        e.scrollTrigger && fe(y(r), e.scrollTrigger),
                        r
                    );
                }
                b(e, t);
                var n = e.prototype;
                return (
                    (n.to = function (t, e, n) {
                        return new gn(t, qt(arguments, 0, this), ge(this, st(e) ? arguments[3] : n)), this;
                    }),
                    (n.from = function (t, e, n) {
                        return new gn(t, qt(arguments, 1, this), ge(this, st(e) ? arguments[3] : n)), this;
                    }),
                    (n.fromTo = function (t, e, n, r) {
                        return new gn(t, qt(arguments, 2, this), ge(this, st(e) ? arguments[4] : r)), this;
                    }),
                    (n.set = function (t, e, n) {
                        return (e.duration = 0), (e.parent = this), Kt(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new gn(t, e, ge(this, n), 1), this;
                    }),
                    (n.call = function (t, e, n) {
                        return le(this, gn.delayedCall(0, t, e), ge(this, n));
                    }),
                    (n.staggerTo = function (t, e, n, r, i, o, a) {
                        return (n.duration = e), (n.stagger = n.stagger || r), (n.onComplete = o), (n.onCompleteParams = a), (n.parent = this), new gn(t, n, ge(this, i)), this;
                    }),
                    (n.staggerFrom = function (t, e, n, r, i, o, a) {
                        return (n.runBackwards = 1), (Kt(n).immediateRender = ct(n.immediateRender)), this.staggerTo(t, e, n, r, i, o, a);
                    }),
                    (n.staggerFromTo = function (t, e, n, r, i, o, a, s) {
                        return (r.startAt = n), (Kt(r).immediateRender = ct(r.immediateRender)), this.staggerTo(t, e, r, i, o, a, s);
                    }),
                    (n.render = function (t, e, n) {
                        var r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            h,
                            c,
                            l,
                            f,
                            p,
                            d,
                            _ = this._time,
                            m = this._dirty ? this.totalDuration() : this._tDur,
                            v = this._dur,
                            g = this !== x && t > m - Z && t >= 0 ? m : t < Z ? 0 : t,
                            y = this._zTime < 0 != t < 0 && (this._initted || !v);
                        if (g !== this._tTime || n || y) {
                            if ((_ !== this._time && v && ((g += this._time - _), (t += this._time - _)), (r = g), (l = this._start), (u = !(c = this._ts)), y && (v || (_ = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
                                if (((p = this._yoyo), (s = v + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * s + t, e, n);
                                if (
                                    ((r = Ut(g % s)),
                                    g === m ? ((a = this._repeat), (r = v)) : ((a = ~~(g / s)) && a === g / s && ((r = v), a--), r > v && (r = v)),
                                    (f = ae(this._tTime, s)),
                                    !_ && this._tTime && f !== a && (f = a),
                                    p && 1 & a && ((r = v - r), (d = 1)),
                                    a !== f && !this._lock)
                                ) {
                                    var b = p && 1 & f,
                                        w = b === (p && 1 & a);
                                    if (
                                        (a < f && (b = !b),
                                        (_ = b ? 0 : v),
                                        (this._lock = 1),
                                        (this.render(_ || (d ? 0 : Ut(a * s)), e, !v)._lock = 0),
                                        !e && this.parent && Be(this, "onRepeat"),
                                        this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1),
                                        _ !== this._time || u !== !this._ts)
                                    )
                                        return this;
                                    if (((v = this._dur), (m = this._tDur), w && ((this._lock = 2), (_ = b ? v : -1e-4), this.render(_, !0), this.vars.repeatRefresh && !d && this.invalidate()), (this._lock = 0), !this._ts && !u))
                                        return this;
                                    tn(this, d);
                                }
                            }
                            if (
                                (this._hasPause &&
                                    !this._forcing &&
                                    this._lock < 2 &&
                                    (h = (function (t, e, n) {
                                        var r;
                                        if (n > e)
                                            for (r = t._first; r && r._start <= n; ) {
                                                if (!r._dur && "isPause" === r.data && r._start > e) return r;
                                                r = r._next;
                                            }
                                        else
                                            for (r = t._last; r && r._start >= n; ) {
                                                if (!r._dur && "isPause" === r.data && r._start < e) return r;
                                                r = r._prev;
                                            }
                                    })(this, Ut(_), Ut(r))) &&
                                    (g -= r - (r = h._start)),
                                (this._tTime = g),
                                (this._time = r),
                                (this._act = !c),
                                this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (_ = 0)),
                                !_ && (r || (!v && t >= 0)) && !e && Be(this, "onStart"),
                                r >= _ && t >= 0)
                            )
                                for (i = this._first; i; ) {
                                    if (((o = i._next), (i._act || r >= i._start) && i._ts && h !== i)) {
                                        if (i.parent !== this) return this.render(t, e, n);
                                        if ((i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n), r !== this._time || (!this._ts && !u))) {
                                            (h = 0), o && (g += this._zTime = -1e-8);
                                            break;
                                        }
                                    }
                                    i = o;
                                }
                            else {
                                i = this._last;
                                for (var T = t < 0 ? t : r; i; ) {
                                    if (((o = i._prev), (i._act || T <= i._end) && i._ts && h !== i)) {
                                        if (i.parent !== this) return this.render(t, e, n);
                                        if ((i.render(i._ts > 0 ? (T - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (T - i._start) * i._ts, e, n), r !== this._time || (!this._ts && !u))) {
                                            (h = 0), o && (g += this._zTime = T ? -1e-8 : Z);
                                            break;
                                        }
                                    }
                                    i = o;
                                }
                            }
                            if (h && !e && (this.pause(), (h.render(r >= _ ? 0 : -1e-8)._zTime = r >= _ ? 1 : -1), this._ts)) return (this._start = l), ue(this), this.render(t, e, n);
                            this._onUpdate && !e && Be(this, "onUpdate", !0),
                                ((g === m && m >= this.totalDuration()) || (!g && _)) &&
                                    ((l !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                                        this._lock ||
                                        ((t || !v) && ((g === m && this._ts > 0) || (!g && this._ts < 0)) && ee(this, 1),
                                        e || (t < 0 && !_) || (!g && !_) || (Be(this, g === m ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < m && this.timeScale() > 0) && this._prom())));
                        }
                        return this;
                    }),
                    (n.add = function (t, e) {
                        var n = this;
                        if ((st(e) || (e = ge(this, e)), !(t instanceof un))) {
                            if (dt(t))
                                return (
                                    t.forEach(function (t) {
                                        return n.add(t, e);
                                    }),
                                    this
                                );
                            if (ot(t)) return this.addLabel(t, e);
                            if (!at(t)) return this;
                            t = gn.delayedCall(0, t);
                        }
                        return this !== t ? le(this, t, e) : this;
                    }),
                    (n.getChildren = function (t, e, n, r) {
                        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -J);
                        for (var i = [], o = this._first; o; ) o._start >= r && (o instanceof gn ? e && i.push(o) : (n && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, n)))), (o = o._next);
                        return i;
                    }),
                    (n.getById = function (t) {
                        for (var e = this.getChildren(1, 1, 1), n = e.length; n--; ) if (e[n].vars.id === t) return e[n];
                    }),
                    (n.remove = function (t) {
                        return ot(t) ? this.removeLabel(t) : at(t) ? this.killTweensOf(t) : (te(this, t), t === this._recent && (this._recent = this._last), ne(this));
                    }),
                    (n.totalTime = function (e, n) {
                        return arguments.length
                            ? ((this._forcing = 1),
                              !this._dp && this._ts && (this._start = Ut(He.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                              t.prototype.totalTime.call(this, e, n),
                              (this._forcing = 0),
                              this)
                            : this._tTime;
                    }),
                    (n.addLabel = function (t, e) {
                        return (this.labels[t] = ge(this, e)), this;
                    }),
                    (n.removeLabel = function (t) {
                        return delete this.labels[t], this;
                    }),
                    (n.addPause = function (t, e, n) {
                        var r = gn.delayedCall(0, e || St, n);
                        return (r.data = "isPause"), (this._hasPause = 1), le(this, r, ge(this, t));
                    }),
                    (n.removePause = function (t) {
                        var e = this._first;
                        for (t = ge(this, t); e; ) e._start === t && "isPause" === e.data && ee(e), (e = e._next);
                    }),
                    (n.killTweensOf = function (t, e, n) {
                        for (var r = this.getTweensOf(t, n), i = r.length; i--; ) cn !== r[i] && r[i].kill(t, e);
                        return this;
                    }),
                    (n.getTweensOf = function (t, e) {
                        for (var n, r = [], i = Oe(t), o = this._first, a = st(e); o; )
                            o instanceof gn
                                ? Yt(o._targets, i) && (a ? (!cn || (o._initted && o._ts)) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && r.push(o)
                                : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
                                (o = o._next);
                        return r;
                    }),
                    (n.tweenTo = function (t, e) {
                        e = e || {};
                        var n = this,
                            r = ge(n, t),
                            i = e,
                            o = i.startAt,
                            a = i.onStart,
                            s = i.onStartParams,
                            u = i.immediateRender,
                            h = gn.to(
                                n,
                                Wt(
                                    {
                                        ease: "none",
                                        lazy: !1,
                                        immediateRender: !1,
                                        time: r,
                                        overwrite: "auto",
                                        duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || Z,
                                        onStart: function () {
                                            n.pause();
                                            var t = e.duration || Math.abs((r - n._time) / n.timeScale());
                                            h._dur !== t && _e(h, t, 0, 1).render(h._time, !0, !0), a && a.apply(h, s || []);
                                        },
                                    },
                                    e
                                )
                            );
                        return u ? h.render(0) : h;
                    }),
                    (n.tweenFromTo = function (t, e, n) {
                        return this.tweenTo(e, Wt({ startAt: { time: ge(this, t) } }, n));
                    }),
                    (n.recent = function () {
                        return this._recent;
                    }),
                    (n.nextLabel = function (t) {
                        return void 0 === t && (t = this._time), Re(this, ge(this, t));
                    }),
                    (n.previousLabel = function (t) {
                        return void 0 === t && (t = this._time), Re(this, ge(this, t), 1);
                    }),
                    (n.currentLabel = function (t) {
                        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Z);
                    }),
                    (n.shiftChildren = function (t, e, n) {
                        void 0 === n && (n = 0);
                        for (var r, i = this._first, o = this.labels; i; ) i._start >= n && ((i._start += t), (i._end += t)), (i = i._next);
                        if (e) for (r in o) o[r] >= n && (o[r] += t);
                        return ne(this);
                    }),
                    (n.invalidate = function () {
                        var e = this._first;
                        for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
                        return t.prototype.invalidate.call(this);
                    }),
                    (n.clear = function (t) {
                        void 0 === t && (t = !0);
                        for (var e, n = this._first; n; ) (e = n._next), this.remove(n), (n = e);
                        return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ne(this);
                    }),
                    (n.totalDuration = function (t) {
                        var e,
                            n,
                            r,
                            i = 0,
                            o = this,
                            a = o._last,
                            s = J;
                        if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
                        if (o._dirty) {
                            for (r = o.parent; a; )
                                (e = a._prev),
                                    a._dirty && a.totalDuration(),
                                    (n = a._start) > s && o._sort && a._ts && !o._lock ? ((o._lock = 1), (le(o, a, n - a._delay, 1)._lock = 0)) : (s = n),
                                    n < 0 && a._ts && ((i -= n), ((!r && !o._dp) || (r && r.smoothChildTiming)) && ((o._start += n / o._ts), (o._time -= n), (o._tTime -= n)), o.shiftChildren(-n, !1, -Infinity), (s = 0)),
                                    a._end > i && a._ts && (i = a._end),
                                    (a = e);
                            _e(o, o === x && o._time > i ? o._time : i, 1, 1), (o._dirty = 0);
                        }
                        return o._tDur;
                    }),
                    (e.updateRoot = function (t) {
                        if ((x._ts && (Gt(x, se(t, x)), (M = He.frame)), He.frame >= Rt)) {
                            Rt += Q.autoSleep || 120;
                            var e = x._first;
                            if ((!e || !e._ts) && Q.autoSleep && He._listeners.length < 2) {
                                for (; e && !e._ts; ) e = e._next;
                                e || He.sleep();
                            }
                        }
                    }),
                    e
                );
            })(un);
            Wt(hn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
            var cn,
                ln = function (t, e, n, r, i, o, a) {
                    var s,
                        u,
                        h,
                        c,
                        l,
                        f,
                        p,
                        d,
                        _ = new Dn(this._pt, t, e, 0, 1, An, null, i),
                        m = 0,
                        v = 0;
                    for (_.b = n, _.e = r, n += "", (p = ~(r += "").indexOf("random(")) && (r = De(r)), o && (o((d = [n, r]), t, e), (n = d[0]), (r = d[1])), u = n.match(gt) || []; (s = gt.exec(r)); )
                        (c = s[0]),
                            (l = r.substring(m, s.index)),
                            h ? (h = (h + 1) % 5) : "rgba(" === l.substr(-5) && (h = 1),
                            c !== u[v++] &&
                                ((f = parseFloat(u[v - 1]) || 0),
                                (_._pt = { _next: _._pt, p: l || 1 === v ? l : ",", s: f, c: "=" === c.charAt(1) ? parseFloat(c.substr(2)) * ("-" === c.charAt(0) ? -1 : 1) : parseFloat(c) - f, m: h && h < 4 ? Math.round : 0 }),
                                (m = gt.lastIndex));
                    return (_.c = m < r.length ? r.substring(m, r.length) : ""), (_.fp = a), (yt.test(r) || p) && (_.e = 0), (this._pt = _), _;
                },
                fn = function (t, e, n, r, i, o, a, s, u) {
                    at(r) && (r = r(i || 0, t, o));
                    var h,
                        c = t[e],
                        l = "get" !== n ? n : at(c) ? (u ? t[e.indexOf("set") || !at(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]()) : c,
                        f = at(c) ? (u ? wn : bn) : yn;
                    if ((ot(r) && (~r.indexOf("random(") && (r = De(r)), "=" === r.charAt(1) && (r = parseFloat(l) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (we(l) || 0))), l !== r))
                        return isNaN(l * r)
                            ? (!c && !(e in t) && Ot(e, r), ln.call(this, t, e, l, r, f, s || Q.stringFilter, u))
                            : ((h = new Dn(this._pt, t, e, +l || 0, r - (l || 0), "boolean" == typeof c ? On : kn, 0, f)), u && (h.fp = u), a && h.modifier(a, this, t), (this._pt = h));
                },
                pn = function (t, e, n, r, i, o) {
                    var a, s, u, h;
                    if (
                        Dt[t] &&
                        !1 !==
                            (a = new Dt[t]()).init(
                                i,
                                a.rawVars
                                    ? e[t]
                                    : (function (t, e, n, r, i) {
                                          if ((at(t) && (t = _n(t, i, e, n, r)), !ht(t) || (t.style && t.nodeType) || dt(t) || pt(t))) return ot(t) ? _n(t, i, e, n, r) : t;
                                          var o,
                                              a = {};
                                          for (o in t) a[o] = _n(t[o], i, e, n, r);
                                          return a;
                                      })(e[t], r, i, o, n),
                                n,
                                r,
                                o
                            ) &&
                        ((n._pt = s = new Dn(n._pt, i, t, 0, 1, a.render, a, 0, a.priority)), n !== S)
                    )
                        for (u = n._ptLookup[n._targets.indexOf(i)], h = a._props.length; h--; ) u[a._props[h]] = s;
                    return a;
                },
                dn = function t(e, n) {
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        h,
                        c,
                        l,
                        f,
                        p,
                        d,
                        _,
                        m = e.vars,
                        v = m.ease,
                        g = m.startAt,
                        y = m.immediateRender,
                        b = m.lazy,
                        T = m.onUpdate,
                        k = m.onUpdateParams,
                        O = m.callbackScope,
                        A = m.runBackwards,
                        M = m.yoyoEase,
                        S = m.keyframes,
                        C = m.autoRevert,
                        E = e._dur,
                        P = e._startAt,
                        D = e._targets,
                        L = e.parent,
                        R = L && "nested" === L.data ? L.parent._targets : D,
                        B = "auto" === e._overwrite && !w,
                        F = e.timeline;
                    if ((F && (!S || !v) && (v = "none"), (e._ease = en(v, $.ease)), (e._yEase = M ? Ke(en(!0 === M ? v : M, $.ease)) : 0), M && e._yoyo && !e._repeat && ((M = e._yEase), (e._yEase = e._ease), (e._ease = M)), !F)) {
                        if (((d = (c = D[0] ? It(D[0]).harness : 0) && m[c.prop]), (r = Zt(m, Ct)), P && P.render(-1, !0).kill(), g)) {
                            if (
                                (ee((e._startAt = gn.set(D, Wt({ data: "isStart", overwrite: !1, parent: L, immediateRender: !0, lazy: ct(b), startAt: null, delay: 0, onUpdate: T, onUpdateParams: k, callbackScope: O, stagger: 0 }, g)))), y)
                            )
                                if (n > 0) C || (e._startAt = 0);
                                else if (E && !(n < 0 && P)) return void (n && (e._zTime = n));
                        } else if (A && E)
                            if (P) !C && (e._startAt = 0);
                            else if ((n && (y = !1), (o = Wt({ overwrite: !1, data: "isFromStart", lazy: y && ct(b), immediateRender: y, stagger: 0, parent: L }, r)), d && (o[c.prop] = d), ee((e._startAt = gn.set(D, o))), y)) {
                                if (!n) return;
                            } else t(e._startAt, Z);
                        for (e._pt = 0, b = (E && ct(b)) || (b && !E), i = 0; i < D.length; i++) {
                            if (
                                ((h = (s = D[i])._gsap || zt(D)[i]._gsap),
                                (e._ptLookup[i] = f = {}),
                                Pt[h.id] && Et.length && Xt(),
                                (p = R === D ? i : R.indexOf(s)),
                                c &&
                                    !1 !== (l = new c()).init(s, d || r, e, p, R) &&
                                    ((e._pt = a = new Dn(e._pt, s, l.name, 0, 1, l.render, l, 0, l.priority)),
                                    l._props.forEach(function (t) {
                                        f[t] = a;
                                    }),
                                    l.priority && (u = 1)),
                                !c || d)
                            )
                                for (o in r) Dt[o] && (l = pn(o, r, e, p, s, R)) ? l.priority && (u = 1) : (f[o] = a = fn.call(e, s, o, "get", r[o], p, R, 0, m.stringFilter));
                            e._op && e._op[i] && e.kill(s, e._op[i]), B && e._pt && ((cn = e), x.killTweensOf(s, f, e.globalTime(0)), (_ = !e.parent), (cn = 0)), e._pt && b && (Pt[h.id] = 1);
                        }
                        u && Pn(e), e._onInit && e._onInit(e);
                    }
                    (e._from = !F && !!m.runBackwards), (e._onUpdate = T), (e._initted = (!e._op || e._pt) && !_);
                },
                _n = function (t, e, n, r, i) {
                    return at(t) ? t.call(e, n, r, i) : ot(t) && ~t.indexOf("random(") ? De(t) : t;
                },
                mn = Ft + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
                vn = (mn + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
                gn = (function (t) {
                    function e(e, n, r, i) {
                        var o;
                        "number" == typeof n && ((r.duration = n), (n = r), (r = null));
                        var a,
                            s,
                            u,
                            h,
                            c,
                            l,
                            f,
                            p,
                            d = (o = t.call(this, i ? n : Kt(n), r) || this).vars,
                            _ = d.duration,
                            m = d.delay,
                            v = d.immediateRender,
                            g = d.stagger,
                            b = d.overwrite,
                            T = d.keyframes,
                            k = d.defaults,
                            O = d.scrollTrigger,
                            A = d.yoyoEase,
                            M = o.parent,
                            S = (dt(e) || pt(e) ? st(e[0]) : "length" in n) ? [e] : Oe(e);
                        if (((o._targets = S.length ? zt(S) : At("GSAP target " + e + " not found. https://greensock.com", !Q.nullTargetWarn) || []), (o._ptLookup = []), (o._overwrite = b), T || g || ft(_) || ft(m))) {
                            if (((n = o.vars), (a = o.timeline = new hn({ data: "nested", defaults: k || {} })).kill(), (a.parent = a._dp = y(o)), (a._start = 0), T))
                                Wt(a.vars.defaults, { ease: "none" }),
                                    T.forEach(function (t) {
                                        return a.to(S, t, ">");
                                    });
                            else {
                                if (((h = S.length), (f = g ? Me(g) : St), ht(g))) for (c in g) ~mn.indexOf(c) && (p || (p = {}), (p[c] = g[c]));
                                for (s = 0; s < h; s++) {
                                    for (c in ((u = {}), n)) vn.indexOf(c) < 0 && (u[c] = n[c]);
                                    (u.stagger = 0),
                                        A && (u.yoyoEase = A),
                                        p && $t(u, p),
                                        (l = S[s]),
                                        (u.duration = +_n(_, y(o), s, l, S)),
                                        (u.delay = (+_n(m, y(o), s, l, S) || 0) - o._delay),
                                        !g && 1 === h && u.delay && ((o._delay = m = u.delay), (o._start += m), (u.delay = 0)),
                                        a.to(l, u, f(s, l, S));
                                }
                                a.duration() ? (_ = m = 0) : (o.timeline = 0);
                            }
                            _ || o.duration((_ = a.duration()));
                        } else o.timeline = 0;
                        return (
                            !0 !== b || w || ((cn = y(o)), x.killTweensOf(S), (cn = 0)),
                            M && ce(M, y(o)),
                            (v || (!_ && !T && o._start === Ut(M._time) && ct(v) && ie(y(o)) && "nested" !== M.data)) && ((o._tTime = -1e-8), o.render(Math.max(0, -m))),
                            O && fe(y(o), O),
                            o
                        );
                    }
                    b(e, t);
                    var n = e.prototype;
                    return (
                        (n.render = function (t, e, n) {
                            var r,
                                i,
                                o,
                                a,
                                s,
                                u,
                                h,
                                c,
                                l,
                                f = this._time,
                                p = this._tDur,
                                d = this._dur,
                                _ = t > p - Z && t >= 0 ? p : t < Z ? 0 : t;
                            if (d) {
                                if (_ !== this._tTime || !t || n || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != t < 0)) {
                                    if (((r = _), (c = this.timeline), this._repeat)) {
                                        if (((a = d + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * a + t, e, n);
                                        if (
                                            ((r = Ut(_ % a)),
                                            _ === p ? ((o = this._repeat), (r = d)) : ((o = ~~(_ / a)) && o === _ / a && ((r = d), o--), r > d && (r = d)),
                                            (u = this._yoyo && 1 & o) && ((l = this._yEase), (r = d - r)),
                                            (s = ae(this._tTime, a)),
                                            r === f && !n && this._initted)
                                        )
                                            return this;
                                        o !== s && (c && this._yEase && tn(c, u), !this.vars.repeatRefresh || u || this._lock || ((this._lock = n = 1), (this.render(Ut(a * o), !0).invalidate()._lock = 0)));
                                    }
                                    if (!this._initted) {
                                        if (pe(this, t < 0 ? t : r, n, e)) return (this._tTime = 0), this;
                                        if (d !== this._dur) return this.render(t, e, n);
                                    }
                                    for (
                                        this._tTime = _,
                                            this._time = r,
                                            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                                            this.ratio = h = (l || this._ease)(r / d),
                                            this._from && (this.ratio = h = 1 - h),
                                            r && !f && !e && Be(this, "onStart"),
                                            i = this._pt;
                                        i;

                                    )
                                        i.r(h, i.d), (i = i._next);
                                    (c && c.render(t < 0 ? t : !r && u ? -1e-8 : c._dur * h, e, n)) || (this._startAt && (this._zTime = t)),
                                        this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), Be(this, "onUpdate")),
                                        this._repeat && o !== s && this.vars.onRepeat && !e && this.parent && Be(this, "onRepeat"),
                                        (_ !== this._tDur && _) ||
                                            this._tTime !== _ ||
                                            (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                                            (t || !d) && ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) && ee(this, 1),
                                            e || (t < 0 && !f) || (!_ && !f) || (Be(this, _ === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < p && this.timeScale() > 0) && this._prom()));
                                }
                            } else
                                !(function (t, e, n, r) {
                                    var i,
                                        o,
                                        a,
                                        s = t.ratio,
                                        u = e < 0 || (!e && ((!t._start && de(t)) || ((t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data))) ? 0 : 1,
                                        h = t._rDelay,
                                        c = 0;
                                    if (
                                        (h && t._repeat && ((c = be(0, t._tDur, e)), (o = ae(c, h)), (a = ae(t._tTime, h)), t._yoyo && 1 & o && (u = 1 - u), o !== a && ((s = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())),
                                        u !== s || r || t._zTime === Z || (!e && t._zTime))
                                    ) {
                                        if (!t._initted && pe(t, e, r, n)) return;
                                        for (a = t._zTime, t._zTime = e || (n ? Z : 0), n || (n = e && !a), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = c, n || Be(t, "onStart"), i = t._pt; i; ) i.r(u, i.d), (i = i._next);
                                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                                            t._onUpdate && !n && Be(t, "onUpdate"),
                                            c && t._repeat && !n && t.parent && Be(t, "onRepeat"),
                                            (e >= t._tDur || e < 0) && t.ratio === u && (u && ee(t, 1), n || (Be(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                                    } else t._zTime || (t._zTime = e);
                                })(this, t, e, n);
                            return this;
                        }),
                        (n.targets = function () {
                            return this._targets;
                        }),
                        (n.invalidate = function () {
                            return (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this);
                        }),
                        (n.kill = function (t, e) {
                            if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? Fe(this) : this;
                            if (this.timeline) {
                                var n = this.timeline.totalDuration();
                                return this.timeline.killTweensOf(t, e, cn && !0 !== cn.vars.overwrite)._first || Fe(this), this.parent && n !== this.timeline.totalDuration() && _e(this, (this._dur * this.timeline._tDur) / n, 0, 1), this;
                            }
                            var r,
                                i,
                                o,
                                a,
                                s,
                                u,
                                h,
                                c = this._targets,
                                l = t ? Oe(t) : c,
                                f = this._ptLookup,
                                p = this._pt;
                            if (
                                (!e || "all" === e) &&
                                (function (t, e) {
                                    for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n]; );
                                    return n < 0;
                                })(c, l)
                            )
                                return "all" === e && (this._pt = 0), Fe(this);
                            for (
                                r = this._op = this._op || [],
                                    "all" !== e &&
                                        (ot(e) &&
                                            ((s = {}),
                                            Nt(e, function (t) {
                                                return (s[t] = 1);
                                            }),
                                            (e = s)),
                                        (e = (function (t, e) {
                                            var n,
                                                r,
                                                i,
                                                o,
                                                a = t[0] ? It(t[0]).harness : 0,
                                                s = a && a.aliases;
                                            if (!s) return e;
                                            for (r in ((n = $t({}, e)), s)) if ((r in n)) for (i = (o = s[r].split(",")).length; i--; ) n[o[i]] = n[r];
                                            return n;
                                        })(c, e))),
                                    h = c.length;
                                h--;

                            )
                                if (~l.indexOf(c[h]))
                                    for (s in ((i = f[h]), "all" === e ? ((r[h] = e), (a = i), (o = {})) : ((o = r[h] = r[h] || {}), (a = e)), a))
                                        (u = i && i[s]) && (("kill" in u.d && !0 !== u.d.kill(s)) || te(this, u, "_pt"), delete i[s]), "all" !== o && (o[s] = 1);
                            return this._initted && !this._pt && p && Fe(this), this;
                        }),
                        (e.to = function (t, n) {
                            return new e(t, n, arguments[2]);
                        }),
                        (e.from = function (t, n) {
                            return new e(t, qt(arguments, 1));
                        }),
                        (e.delayedCall = function (t, n, r, i) {
                            return new e(n, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: n, onReverseComplete: n, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: i });
                        }),
                        (e.fromTo = function (t, n, r) {
                            return new e(t, qt(arguments, 2));
                        }),
                        (e.set = function (t, n) {
                            return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(t, n);
                        }),
                        (e.killTweensOf = function (t, e, n) {
                            return x.killTweensOf(t, e, n);
                        }),
                        e
                    );
                })(un);
            Wt(gn.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
                Nt("staggerTo,staggerFrom,staggerFromTo", function (t) {
                    gn[t] = function () {
                        var e = new hn(),
                            n = xe.call(arguments, 0);
                        return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n);
                    };
                });
            var yn = function (t, e, n) {
                    return (t[e] = n);
                },
                bn = function (t, e, n) {
                    return t[e](n);
                },
                wn = function (t, e, n, r) {
                    return t[e](r.fp, n);
                },
                xn = function (t, e, n) {
                    return t.setAttribute(e, n);
                },
                Tn = function (t, e) {
                    return at(t[e]) ? bn : ut(t[e]) && t.setAttribute ? xn : yn;
                },
                kn = function (t, e) {
                    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
                },
                On = function (t, e) {
                    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
                },
                An = function (t, e) {
                    var n = e._pt,
                        r = "";
                    if (!t && e.b) r = e.b;
                    else if (1 === t && e.e) r = e.e;
                    else {
                        for (; n; ) (r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r), (n = n._next);
                        r += e.c;
                    }
                    e.set(e.t, e.p, r, e);
                },
                Mn = function (t, e) {
                    for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next);
                },
                Sn = function (t, e, n, r) {
                    for (var i, o = this._pt; o; ) (i = o._next), o.p === r && o.modifier(t, e, n), (o = i);
                },
                Cn = function (t) {
                    for (var e, n, r = this._pt; r; ) (n = r._next), (r.p === t && !r.op) || r.op === t ? te(this, r, "_pt") : r.dep || (e = 1), (r = n);
                    return !e;
                },
                En = function (t, e, n, r) {
                    r.mSet(t, e, r.m.call(r.tween, n, r.mt), r);
                },
                Pn = function (t) {
                    for (var e, n, r, i, o = t._pt; o; ) {
                        for (e = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
                        (o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o), (o._next = n) ? (n._prev = o) : (i = o), (o = e);
                    }
                    t._pt = r;
                },
                Dn = (function () {
                    function t(t, e, n, r, i, o, a, s, u) {
                        (this.t = e), (this.s = r), (this.c = i), (this.p = n), (this.r = o || kn), (this.d = a || this), (this.set = s || yn), (this.pr = u || 0), (this._next = t), t && (t._prev = this);
                    }
                    return (
                        (t.prototype.modifier = function (t, e, n) {
                            (this.mSet = this.mSet || this.set), (this.set = En), (this.m = t), (this.mt = n), (this.tween = e);
                        }),
                        t
                    );
                })();
            Nt(
                Ft +
                    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
                function (t) {
                    return (Ct[t] = 1);
                }
            ),
                (xt.TweenMax = xt.TweenLite = gn),
                (xt.TimelineLite = xt.TimelineMax = hn),
                (x = new hn({ sortChildren: !1, defaults: $, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
                (Q.stringFilter = Ve);
            var Ln = {
                registerPlugin: function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    e.forEach(function (t) {
                        return ze(t);
                    });
                },
                timeline: function (t) {
                    return new hn(t);
                },
                getTweensOf: function (t, e) {
                    return x.getTweensOf(t, e);
                },
                getProperty: function (t, e, n, r) {
                    ot(t) && (t = Oe(t)[0]);
                    var i = It(t || {}).get,
                        o = n ? Ht : Vt;
                    return (
                        "native" === n && (n = ""),
                        t
                            ? e
                                ? o(((Dt[e] && Dt[e].get) || i)(t, e, n, r))
                                : function (e, n, r) {
                                      return o(((Dt[e] && Dt[e].get) || i)(t, e, n, r));
                                  }
                            : t
                    );
                },
                quickSetter: function (t, e, n) {
                    if ((t = Oe(t)).length > 1) {
                        var r = t.map(function (t) {
                                return Fn.quickSetter(t, e, n);
                            }),
                            i = r.length;
                        return function (t) {
                            for (var e = i; e--; ) r[e](t);
                        };
                    }
                    t = t[0] || {};
                    var o = Dt[e],
                        a = It(t),
                        s = (a.harness && (a.harness.aliases || {})[e]) || e,
                        u = o
                            ? function (e) {
                                  var r = new o();
                                  (S._pt = 0), r.init(t, n ? e + n : e, S, 0, [t]), r.render(1, r), S._pt && Mn(1, S);
                              }
                            : a.set(t, s);
                    return o
                        ? u
                        : function (e) {
                              return u(t, s, n ? e + n : e, a, 1);
                          };
                },
                isTweening: function (t) {
                    return x.getTweensOf(t, !0).length > 0;
                },
                defaults: function (t) {
                    return t && t.ease && (t.ease = en(t.ease, $.ease)), Jt($, t || {});
                },
                config: function (t) {
                    return Jt(Q, t || {});
                },
                registerEffect: function (t) {
                    var e = t.name,
                        n = t.effect,
                        r = t.plugins,
                        i = t.defaults,
                        o = t.extendTimeline;
                    (r || "").split(",").forEach(function (t) {
                        return t && !Dt[t] && !xt[t] && At(e + " effect requires " + t + " plugin.");
                    }),
                        (Lt[e] = function (t, e, r) {
                            return n(Oe(t), Wt(e || {}, i), r);
                        }),
                        o &&
                            (hn.prototype[e] = function (t, n, r) {
                                return this.add(Lt[e](t, ht(n) ? n : (r = n) && {}, this), r);
                            });
                },
                registerEase: function (t, e) {
                    Qe[t] = en(e);
                },
                parseEase: function (t, e) {
                    return arguments.length ? en(t, e) : Qe;
                },
                getById: function (t) {
                    return x.getById(t);
                },
                exportRoot: function (t, e) {
                    void 0 === t && (t = {});
                    var n,
                        r,
                        i = new hn(t);
                    for (i.smoothChildTiming = ct(t.smoothChildTiming), x.remove(i), i._dp = 0, i._time = i._tTime = x._time, n = x._first; n; )
                        (r = n._next), (!e && !n._dur && n instanceof gn && n.vars.onComplete === n._targets[0]) || le(i, n, n._start - n._delay), (n = r);
                    return le(x, i, 0), i;
                },
                utils: {
                    wrap: function t(e, n, r) {
                        var i = n - e;
                        return dt(e)
                            ? Pe(e, t(0, e.length), n)
                            : ye(r, function (t) {
                                  return ((i + ((t - e) % i)) % i) + e;
                              });
                    },
                    wrapYoyo: function t(e, n, r) {
                        var i = n - e,
                            o = 2 * i;
                        return dt(e)
                            ? Pe(e, t(0, e.length - 1), n)
                            : ye(r, function (t) {
                                  return e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t);
                              });
                    },
                    distribute: Me,
                    random: Ee,
                    snap: Ce,
                    normalize: function (t, e, n) {
                        return Le(t, e, 0, 1, n);
                    },
                    getUnit: we,
                    clamp: function (t, e, n) {
                        return ye(n, function (n) {
                            return be(t, e, n);
                        });
                    },
                    splitColor: Ue,
                    toArray: Oe,
                    mapRange: Le,
                    pipe: function () {
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return function (t) {
                            return e.reduce(function (t, e) {
                                return e(t);
                            }, t);
                        };
                    },
                    unitize: function (t, e) {
                        return function (n) {
                            return t(parseFloat(n)) + (e || we(n));
                        };
                    },
                    interpolate: function t(e, n, r, i) {
                        var o = isNaN(e + n)
                            ? 0
                            : function (t) {
                                  return (1 - t) * e + t * n;
                              };
                        if (!o) {
                            var a,
                                s,
                                u,
                                h,
                                c,
                                l = ot(e),
                                f = {};
                            if ((!0 === r && (i = 1) && (r = null), l)) (e = { p: e }), (n = { p: n });
                            else if (dt(e) && !dt(n)) {
                                for (u = [], h = e.length, c = h - 2, s = 1; s < h; s++) u.push(t(e[s - 1], e[s]));
                                h--,
                                    (o = function (t) {
                                        t *= h;
                                        var e = Math.min(c, ~~t);
                                        return u[e](t - e);
                                    }),
                                    (r = n);
                            } else i || (e = $t(dt(e) ? [] : {}, e));
                            if (!u) {
                                for (a in n) fn.call(f, e, a, "get", n[a]);
                                o = function (t) {
                                    return Mn(t, f) || (l ? e.p : e);
                                };
                            }
                        }
                        return ye(r, o);
                    },
                    shuffle: Ae,
                },
                install: kt,
                effects: Lt,
                ticker: He,
                updateRoot: hn.updateRoot,
                plugins: Dt,
                globalTimeline: x,
                core: {
                    PropTween: Dn,
                    globals: Mt,
                    Tween: gn,
                    Timeline: hn,
                    Animation: un,
                    getCache: It,
                    _removeLinkedListItem: te,
                    suppressOverwrites: function (t) {
                        return (w = t);
                    },
                },
            };
            Nt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
                return (Ln[t] = gn[t]);
            }),
                He.add(hn.updateRoot),
                (S = Ln.to({}, { duration: 0 }));
            var Rn = function (t, e) {
                    for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; ) n = n._next;
                    return n;
                },
                Bn = function (t, e) {
                    return {
                        name: t,
                        rawVars: 1,
                        init: function (t, n, r) {
                            r._onInit = function (t) {
                                var r, i;
                                if (
                                    (ot(n) &&
                                        ((r = {}),
                                        Nt(n, function (t) {
                                            return (r[t] = 1);
                                        }),
                                        (n = r)),
                                    e)
                                ) {
                                    for (i in ((r = {}), n)) r[i] = e(n[i]);
                                    n = r;
                                }
                                !(function (t, e) {
                                    var n,
                                        r,
                                        i,
                                        o = t._targets;
                                    for (n in e) for (r = o.length; r--; ) (i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = Rn(i, n)), i && i.modifier && i.modifier(e[n], t, o[r], n));
                                })(t, n);
                            };
                        },
                    };
                },
                Fn =
                    Ln.registerPlugin(
                        {
                            name: "attr",
                            init: function (t, e, n, r, i) {
                                var o, a;
                                for (o in e) (a = this.add(t, "setAttribute", (t.getAttribute(o) || 0) + "", e[o], r, i, 0, 0, o)) && (a.op = o), this._props.push(o);
                            },
                        },
                        {
                            name: "endArray",
                            init: function (t, e) {
                                for (var n = e.length; n--; ) this.add(t, n, t[n] || 0, e[n]);
                            },
                        },
                        Bn("roundProps", Se),
                        Bn("modifiers"),
                        Bn("snap", Ce)
                    ) || Ln;
            (gn.version = hn.version = Fn.version = "3.6.0"), (A = 1), lt() && We();
            Qe.Power0, Qe.Power1, Qe.Power2, Qe.Power3, Qe.Power4, Qe.Linear, Qe.Quad, Qe.Cubic, Qe.Quart, Qe.Quint, Qe.Strong, Qe.Elastic, Qe.Back, Qe.SteppedEase, Qe.Bounce, Qe.Sine, Qe.Expo, Qe.Circ;
            var zn,
                In,
                jn,
                Nn,
                Un,
                Yn,
                qn,
                Xn,
                Gn = {},
                Vn = 180 / Math.PI,
                Hn = Math.PI / 180,
                Wn = Math.atan2,
                Qn = /([A-Z])/g,
                $n = /(?:left|right|width|margin|padding|x)/i,
                Jn = /[\s,\(]\S/,
                Zn = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
                Kn = function (t, e) {
                    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
                },
                tr = function (t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
                },
                er = function (t, e) {
                    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
                },
                nr = function (t, e) {
                    var n = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e);
                },
                rr = function (t, e) {
                    return e.set(e.t, e.p, t ? e.e : e.b, e);
                },
                ir = function (t, e) {
                    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
                },
                or = function (t, e, n) {
                    return (t.style[e] = n);
                },
                ar = function (t, e, n) {
                    return t.style.setProperty(e, n);
                },
                sr = function (t, e, n) {
                    return (t._gsap[e] = n);
                },
                ur = function (t, e, n) {
                    return (t._gsap.scaleX = t._gsap.scaleY = n);
                },
                hr = function (t, e, n, r, i) {
                    var o = t._gsap;
                    (o.scaleX = o.scaleY = n), o.renderTransform(i, o);
                },
                cr = function (t, e, n, r, i) {
                    var o = t._gsap;
                    (o[e] = n), o.renderTransform(i, o);
                },
                lr = "transform",
                fr = lr + "Origin",
                pr = function (t, e) {
                    var n = In.createElementNS ? In.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : In.createElement(t);
                    return n.style ? n : In.createElement(t);
                },
                dr = function t(e, n, r) {
                    var i = getComputedStyle(e);
                    return i[n] || i.getPropertyValue(n.replace(Qn, "-$1").toLowerCase()) || i.getPropertyValue(n) || (!r && t(e, mr(n) || n, 1)) || "";
                },
                _r = "O,Moz,ms,Ms,Webkit".split(","),
                mr = function (t, e, n) {
                    var r = (e || Un).style,
                        i = 5;
                    if (t in r && !n) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(_r[i] + t in r); );
                    return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? _r[i] : "") + t;
                },
                vr = function () {
                    "undefined" != typeof window &&
                        window.document &&
                        ((zn = window),
                        (In = zn.document),
                        (jn = In.documentElement),
                        (Un = pr("div") || { style: {} }),
                        (Yn = pr("div")),
                        (lr = mr(lr)),
                        (fr = lr + "Origin"),
                        (Un.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                        (Xn = !!mr("perspective")),
                        (Nn = 1));
                },
                gr = function t(e) {
                    var n,
                        r = pr("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                        i = this.parentNode,
                        o = this.nextSibling,
                        a = this.style.cssText;
                    if ((jn.appendChild(r), r.appendChild(this), (this.style.display = "block"), e))
                        try {
                            (n = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
                        } catch (t) {}
                    else this._gsapBBox && (n = this._gsapBBox());
                    return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), jn.removeChild(r), (this.style.cssText = a), n;
                },
                yr = function (t, e) {
                    for (var n = e.length; n--; ) if (t.hasAttribute(e[n])) return t.getAttribute(e[n]);
                },
                br = function (t) {
                    var e;
                    try {
                        e = t.getBBox();
                    } catch (n) {
                        e = gr.call(t, !0);
                    }
                    return (e && (e.width || e.height)) || t.getBBox === gr || (e = gr.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +yr(t, ["x", "cx", "x1"]) || 0, y: +yr(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
                },
                wr = function (t) {
                    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !br(t));
                },
                xr = function (t, e) {
                    if (e) {
                        var n = t.style;
                        e in Gn && e !== fr && (e = lr), n.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), n.removeProperty(e.replace(Qn, "-$1").toLowerCase())) : n.removeAttribute(e);
                    }
                },
                Tr = function (t, e, n, r, i, o) {
                    var a = new Dn(t._pt, e, n, 0, 1, o ? ir : rr);
                    return (t._pt = a), (a.b = r), (a.e = i), t._props.push(n), a;
                },
                kr = { deg: 1, rad: 1, turn: 1 },
                Or = function t(e, n, r, i) {
                    var o,
                        a,
                        s,
                        u,
                        h = parseFloat(r) || 0,
                        c = (r + "").trim().substr((h + "").length) || "px",
                        l = Un.style,
                        f = $n.test(n),
                        p = "svg" === e.tagName.toLowerCase(),
                        d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
                        _ = 100,
                        m = "px" === i,
                        v = "%" === i;
                    return i === c || !h || kr[i] || kr[c]
                        ? h
                        : ("px" !== c && !m && (h = t(e, n, r, "px")),
                          (u = e.getCTM && wr(e)),
                          (!v && "%" !== c) || (!Gn[n] && !~n.indexOf("adius"))
                              ? ((l[f ? "width" : "height"] = _ + (m ? c : i)),
                                (a = ~n.indexOf("adius") || ("em" === i && e.appendChild && !p) ? e : e.parentNode),
                                u && (a = (e.ownerSVGElement || {}).parentNode),
                                (a && a !== In && a.appendChild) || (a = In.body),
                                (s = a._gsap) && v && s.width && f && s.time === He.time
                                    ? Ut((h / s.width) * _)
                                    : ((v || "%" === c) && (l.position = dr(e, "position")),
                                      a === e && (l.position = "static"),
                                      a.appendChild(Un),
                                      (o = Un[d]),
                                      a.removeChild(Un),
                                      (l.position = "absolute"),
                                      f && v && (((s = It(a)).time = He.time), (s.width = a[d])),
                                      Ut(m ? (o * h) / _ : o && h ? (_ / o) * h : 0)))
                              : ((o = u ? e.getBBox()[f ? "width" : "height"] : e[d]), Ut(v ? (h / o) * _ : (h / 100) * o)));
                },
                Ar = function (t, e, n, r) {
                    var i;
                    return (
                        Nn || vr(),
                        e in Zn && "transform" !== e && ~(e = Zn[e]).indexOf(",") && (e = e.split(",")[0]),
                        Gn[e] && "transform" !== e
                            ? ((i = zr(t, r)), (i = "transformOrigin" !== e ? i[e] : Ir(dr(t, fr)) + " " + i.zOrigin + "px"))
                            : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = (Er[e] && Er[e](t, e, n)) || dr(t, e) || jt(t, e) || ("opacity" === e ? 1 : 0)),
                        n && !~(i + "").trim().indexOf(" ") ? Or(t, e, i, n) + n : i
                    );
                },
                Mr = function (t, e, n, r) {
                    if (!n || "none" === n) {
                        var i = mr(e, t, 1),
                            o = i && dr(t, i, 1);
                        o && o !== n ? ((e = i), (n = o)) : "borderColor" === e && (n = dr(t, "borderTopColor"));
                    }
                    var a,
                        s,
                        u,
                        h,
                        c,
                        l,
                        f,
                        p,
                        d,
                        _,
                        m,
                        v,
                        g = new Dn(this._pt, t.style, e, 0, 1, An),
                        y = 0,
                        b = 0;
                    if (((g.b = n), (g.e = r), (n += ""), "auto" === (r += "") && ((t.style[e] = r), (r = dr(t, e) || r), (t.style[e] = n)), Ve((a = [n, r])), (r = a[1]), (u = (n = a[0]).match(vt) || []), (r.match(vt) || []).length)) {
                        for (; (s = vt.exec(r)); )
                            (f = s[0]),
                                (d = r.substring(y, s.index)),
                                c ? (c = (c + 1) % 5) : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) || (c = 1),
                                f !== (l = u[b++] || "") &&
                                    ((h = parseFloat(l) || 0),
                                    (m = l.substr((h + "").length)),
                                    (v = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) && (f = f.substr(2)),
                                    (p = parseFloat(f)),
                                    (_ = f.substr((p + "").length)),
                                    (y = vt.lastIndex - _.length),
                                    _ || ((_ = _ || Q.units[e] || m), y === r.length && ((r += _), (g.e += _))),
                                    m !== _ && (h = Or(t, e, l, _) || 0),
                                    (g._pt = { _next: g._pt, p: d || 1 === b ? d : ",", s: h, c: v ? v * p : p - h, m: (c && c < 4) || "zIndex" === e ? Math.round : 0 }));
                        g.c = y < r.length ? r.substring(y, r.length) : "";
                    } else g.r = "display" === e && "none" === r ? ir : rr;
                    return yt.test(r) && (g.e = 0), (this._pt = g), g;
                },
                Sr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
                Cr = function (t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var n,
                            r,
                            i,
                            o = e.t,
                            a = o.style,
                            s = e.u,
                            u = o._gsap;
                        if ("all" === s || !0 === s) (a.cssText = ""), (r = 1);
                        else for (i = (s = s.split(",")).length; --i > -1; ) (n = s[i]), Gn[n] && ((r = 1), (n = "transformOrigin" === n ? fr : lr)), xr(o, n);
                        r && (xr(o, lr), u && (u.svg && o.removeAttribute("transform"), zr(o, 1), (u.uncache = 1)));
                    }
                },
                Er = {
                    clearProps: function (t, e, n, r, i) {
                        if ("isFromStart" !== i.data) {
                            var o = (t._pt = new Dn(t._pt, e, n, 0, 0, Cr));
                            return (o.u = r), (o.pr = -10), (o.tween = i), t._props.push(n), 1;
                        }
                    },
                },
                Pr = [1, 0, 0, 1, 0, 0],
                Dr = {},
                Lr = function (t) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
                },
                Rr = function (t) {
                    var e = dr(t, lr);
                    return Lr(e) ? Pr : e.substr(7).match(mt).map(Ut);
                },
                Br = function (t, e) {
                    var n,
                        r,
                        i,
                        o,
                        a = t._gsap || It(t),
                        s = t.style,
                        u = Rr(t);
                    return a.svg && t.getAttribute("transform")
                        ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",")
                            ? Pr
                            : u
                        : (u !== Pr ||
                              t.offsetParent ||
                              t === jn ||
                              a.svg ||
                              ((i = s.display),
                              (s.display = "block"),
                              ((n = t.parentNode) && t.offsetParent) || ((o = 1), (r = t.nextSibling), jn.appendChild(t)),
                              (u = Rr(t)),
                              i ? (s.display = i) : xr(t, "display"),
                              o && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : jn.removeChild(t))),
                          e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
                },
                Fr = function (t, e, n, r, i, o) {
                    var a,
                        s,
                        u,
                        h = t._gsap,
                        c = i || Br(t, !0),
                        l = h.xOrigin || 0,
                        f = h.yOrigin || 0,
                        p = h.xOffset || 0,
                        d = h.yOffset || 0,
                        _ = c[0],
                        m = c[1],
                        v = c[2],
                        g = c[3],
                        y = c[4],
                        b = c[5],
                        w = e.split(" "),
                        x = parseFloat(w[0]) || 0,
                        T = parseFloat(w[1]) || 0;
                    n
                        ? c !== Pr && (s = _ * g - m * v) && ((u = x * (-m / s) + T * (_ / s) - (_ * b - m * y) / s), (x = x * (g / s) + T * (-v / s) + (v * b - g * y) / s), (T = u))
                        : ((x = (a = br(t)).x + (~w[0].indexOf("%") ? (x / 100) * a.width : x)), (T = a.y + (~(w[1] || w[0]).indexOf("%") ? (T / 100) * a.height : T))),
                        r || (!1 !== r && h.smooth) ? ((y = x - l), (b = T - f), (h.xOffset = p + (y * _ + b * v) - y), (h.yOffset = d + (y * m + b * g) - b)) : (h.xOffset = h.yOffset = 0),
                        (h.xOrigin = x),
                        (h.yOrigin = T),
                        (h.smooth = !!r),
                        (h.origin = e),
                        (h.originIsAbsolute = !!n),
                        (t.style[fr] = "0px 0px"),
                        o && (Tr(o, h, "xOrigin", l, x), Tr(o, h, "yOrigin", f, T), Tr(o, h, "xOffset", p, h.xOffset), Tr(o, h, "yOffset", d, h.yOffset)),
                        t.setAttribute("data-svg-origin", x + " " + T);
                },
                zr = function (t, e) {
                    var n = t._gsap || new sn(t);
                    if ("x" in n && !e && !n.uncache) return n;
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        h,
                        c,
                        l,
                        f,
                        p,
                        d,
                        _,
                        m,
                        v,
                        g,
                        y,
                        b,
                        w,
                        x,
                        T,
                        k,
                        O,
                        A,
                        M,
                        S,
                        C,
                        E,
                        P,
                        D,
                        L,
                        R,
                        B = t.style,
                        F = n.scaleX < 0,
                        z = "px",
                        I = "deg",
                        j = dr(t, fr) || "0";
                    return (
                        (r = i = o = u = h = c = l = f = p = 0),
                        (a = s = 1),
                        (n.svg = !(!t.getCTM || !wr(t))),
                        (m = Br(t, n.svg)),
                        n.svg && ((A = !n.uncache && t.getAttribute("data-svg-origin")), Fr(t, A || j, !!A || n.originIsAbsolute, !1 !== n.smooth, m)),
                        (d = n.xOrigin || 0),
                        (_ = n.yOrigin || 0),
                        m !== Pr &&
                            ((b = m[0]),
                            (w = m[1]),
                            (x = m[2]),
                            (T = m[3]),
                            (r = k = m[4]),
                            (i = O = m[5]),
                            6 === m.length
                                ? ((a = Math.sqrt(b * b + w * w)),
                                  (s = Math.sqrt(T * T + x * x)),
                                  (u = b || w ? Wn(w, b) * Vn : 0),
                                  (l = x || T ? Wn(x, T) * Vn + u : 0) && (s *= Math.cos(l * Hn)),
                                  n.svg && ((r -= d - (d * b + _ * x)), (i -= _ - (d * w + _ * T))))
                                : ((R = m[6]),
                                  (D = m[7]),
                                  (C = m[8]),
                                  (E = m[9]),
                                  (P = m[10]),
                                  (L = m[11]),
                                  (r = m[12]),
                                  (i = m[13]),
                                  (o = m[14]),
                                  (h = (v = Wn(R, P)) * Vn),
                                  v &&
                                      ((A = k * (g = Math.cos(-v)) + C * (y = Math.sin(-v))),
                                      (M = O * g + E * y),
                                      (S = R * g + P * y),
                                      (C = k * -y + C * g),
                                      (E = O * -y + E * g),
                                      (P = R * -y + P * g),
                                      (L = D * -y + L * g),
                                      (k = A),
                                      (O = M),
                                      (R = S)),
                                  (c = (v = Wn(-x, P)) * Vn),
                                  v && ((g = Math.cos(-v)), (L = T * (y = Math.sin(-v)) + L * g), (b = A = b * g - C * y), (w = M = w * g - E * y), (x = S = x * g - P * y)),
                                  (u = (v = Wn(w, b)) * Vn),
                                  v && ((A = b * (g = Math.cos(v)) + w * (y = Math.sin(v))), (M = k * g + O * y), (w = w * g - b * y), (O = O * g - k * y), (b = A), (k = M)),
                                  h && Math.abs(h) + Math.abs(u) > 359.9 && ((h = u = 0), (c = 180 - c)),
                                  (a = Ut(Math.sqrt(b * b + w * w + x * x))),
                                  (s = Ut(Math.sqrt(O * O + R * R))),
                                  (v = Wn(k, O)),
                                  (l = Math.abs(v) > 2e-4 ? v * Vn : 0),
                                  (p = L ? 1 / (L < 0 ? -L : L) : 0)),
                            n.svg && ((A = t.getAttribute("transform")), (n.forceCSS = t.setAttribute("transform", "") || !Lr(dr(t, lr))), A && t.setAttribute("transform", A))),
                        Math.abs(l) > 90 && Math.abs(l) < 270 && (F ? ((a *= -1), (l += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180)) : ((s *= -1), (l += l <= 0 ? 180 : -180))),
                        (n.x = r - ((n.xPercent = r && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? (t.offsetWidth * n.xPercent) / 100 : 0) + z),
                        (n.y = i - ((n.yPercent = i && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? (t.offsetHeight * n.yPercent) / 100 : 0) + z),
                        (n.z = o + z),
                        (n.scaleX = Ut(a)),
                        (n.scaleY = Ut(s)),
                        (n.rotation = Ut(u) + I),
                        (n.rotationX = Ut(h) + I),
                        (n.rotationY = Ut(c) + I),
                        (n.skewX = l + I),
                        (n.skewY = f + I),
                        (n.transformPerspective = p + z),
                        (n.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (B[fr] = Ir(j)),
                        (n.xOffset = n.yOffset = 0),
                        (n.force3D = Q.force3D),
                        (n.renderTransform = n.svg ? Gr : Xn ? Xr : Nr),
                        (n.uncache = 0),
                        n
                    );
                },
                Ir = function (t) {
                    return (t = t.split(" "))[0] + " " + t[1];
                },
                jr = function (t, e, n) {
                    var r = we(e);
                    return Ut(parseFloat(e) + parseFloat(Or(t, "x", n + "px", r))) + r;
                },
                Nr = function (t, e) {
                    (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Xr(t, e);
                },
                Ur = "0deg",
                Yr = "0px",
                qr = ") ",
                Xr = function (t, e) {
                    var n = e || this,
                        r = n.xPercent,
                        i = n.yPercent,
                        o = n.x,
                        a = n.y,
                        s = n.z,
                        u = n.rotation,
                        h = n.rotationY,
                        c = n.rotationX,
                        l = n.skewX,
                        f = n.skewY,
                        p = n.scaleX,
                        d = n.scaleY,
                        _ = n.transformPerspective,
                        m = n.force3D,
                        v = n.target,
                        g = n.zOrigin,
                        y = "",
                        b = ("auto" === m && t && 1 !== t) || !0 === m;
                    if (g && (c !== Ur || h !== Ur)) {
                        var w,
                            x = parseFloat(h) * Hn,
                            T = Math.sin(x),
                            k = Math.cos(x);
                        (x = parseFloat(c) * Hn), (w = Math.cos(x)), (o = jr(v, o, T * w * -g)), (a = jr(v, a, -Math.sin(x) * -g)), (s = jr(v, s, k * w * -g + g));
                    }
                    _ !== Yr && (y += "perspective(" + _ + qr),
                        (r || i) && (y += "translate(" + r + "%, " + i + "%) "),
                        (b || o !== Yr || a !== Yr || s !== Yr) && (y += s !== Yr || b ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + qr),
                        u !== Ur && (y += "rotate(" + u + qr),
                        h !== Ur && (y += "rotateY(" + h + qr),
                        c !== Ur && (y += "rotateX(" + c + qr),
                        (l === Ur && f === Ur) || (y += "skew(" + l + ", " + f + qr),
                        (1 === p && 1 === d) || (y += "scale(" + p + ", " + d + qr),
                        (v.style[lr] = y || "translate(0, 0)");
                },
                Gr = function (t, e) {
                    var n,
                        r,
                        i,
                        o,
                        a,
                        s = e || this,
                        u = s.xPercent,
                        h = s.yPercent,
                        c = s.x,
                        l = s.y,
                        f = s.rotation,
                        p = s.skewX,
                        d = s.skewY,
                        _ = s.scaleX,
                        m = s.scaleY,
                        v = s.target,
                        g = s.xOrigin,
                        y = s.yOrigin,
                        b = s.xOffset,
                        w = s.yOffset,
                        x = s.forceCSS,
                        T = parseFloat(c),
                        k = parseFloat(l);
                    (f = parseFloat(f)),
                        (p = parseFloat(p)),
                        (d = parseFloat(d)) && ((p += d = parseFloat(d)), (f += d)),
                        f || p
                            ? ((f *= Hn),
                              (p *= Hn),
                              (n = Math.cos(f) * _),
                              (r = Math.sin(f) * _),
                              (i = Math.sin(f - p) * -m),
                              (o = Math.cos(f - p) * m),
                              p && ((d *= Hn), (a = Math.tan(p - d)), (i *= a = Math.sqrt(1 + a * a)), (o *= a), d && ((a = Math.tan(d)), (n *= a = Math.sqrt(1 + a * a)), (r *= a))),
                              (n = Ut(n)),
                              (r = Ut(r)),
                              (i = Ut(i)),
                              (o = Ut(o)))
                            : ((n = _), (o = m), (r = i = 0)),
                        ((T && !~(c + "").indexOf("px")) || (k && !~(l + "").indexOf("px"))) && ((T = Or(v, "x", c, "px")), (k = Or(v, "y", l, "px"))),
                        (g || y || b || w) && ((T = Ut(T + g - (g * n + y * i) + b)), (k = Ut(k + y - (g * r + y * o) + w))),
                        (u || h) && ((a = v.getBBox()), (T = Ut(T + (u / 100) * a.width)), (k = Ut(k + (h / 100) * a.height))),
                        (a = "matrix(" + n + "," + r + "," + i + "," + o + "," + T + "," + k + ")"),
                        v.setAttribute("transform", a),
                        x && (v.style[lr] = a);
                },
                Vr = function (t, e, n, r, i, o) {
                    var a,
                        s,
                        u = 360,
                        h = ot(i),
                        c = parseFloat(i) * (h && ~i.indexOf("rad") ? Vn : 1),
                        l = o ? c * o : c - r,
                        f = r + l + "deg";
                    return (
                        h &&
                            ("short" === (a = i.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -360),
                            "cw" === a && l < 0 ? (l = ((l + 36e9) % u) - ~~(l / u) * u) : "ccw" === a && l > 0 && (l = ((l - 36e9) % u) - ~~(l / u) * u)),
                        (t._pt = s = new Dn(t._pt, e, n, r, l, tr)),
                        (s.e = f),
                        (s.u = "deg"),
                        t._props.push(n),
                        s
                    );
                },
                Hr = function (t, e, n) {
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        h,
                        c = Yn.style,
                        l = n._gsap;
                    for (i in ((c.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;"), (c[lr] = e), In.body.appendChild(Yn), (r = zr(Yn, 1)), Gn))
                        (o = l[i]) !== (a = r[i]) &&
                            "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
                            ((s = we(o) !== (h = we(a)) ? Or(n, i, o, h) : parseFloat(o)), (u = parseFloat(a)), (t._pt = new Dn(t._pt, l, i, s, u - s, Kn)), (t._pt.u = h || 0), t._props.push(i));
                    In.body.removeChild(Yn);
                };
            Nt("padding,margin,Width,Radius", function (t, e) {
                var n = "Top",
                    r = "Right",
                    i = "Bottom",
                    o = "Left",
                    a = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (n) {
                        return e < 2 ? t + n : "border" + n + t;
                    });
                Er[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
                    var o, s;
                    if (arguments.length < 4)
                        return (
                            (o = a.map(function (e) {
                                return Ar(t, e, n);
                            })),
                            5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s
                        );
                    (o = (r + "").split(" ")),
                        (s = {}),
                        a.forEach(function (t, e) {
                            return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
                        }),
                        t.init(e, s, i);
                };
            });
            var Wr,
                Qr,
                $r,
                Jr = {
                    name: "css",
                    register: vr,
                    targetTest: function (t) {
                        return t.style && t.nodeType;
                    },
                    init: function (t, e, n, r, i) {
                        var o,
                            a,
                            s,
                            u,
                            h,
                            c,
                            l,
                            f,
                            p,
                            d,
                            _,
                            m,
                            v,
                            g,
                            y,
                            b,
                            w,
                            x,
                            T,
                            k = this._props,
                            O = t.style,
                            A = n.vars.startAt;
                        for (l in (Nn || vr(), e))
                            if ("autoRound" !== l && ((a = e[l]), !Dt[l] || !pn(l, e, n, r, t, i)))
                                if (((h = typeof a), (c = Er[l]), "function" === h && (h = typeof (a = a.call(n, r, t, i))), "string" === h && ~a.indexOf("random(") && (a = De(a)), c)) c(this, t, l, a, n) && (y = 1);
                                else if ("--" === l.substr(0, 2))
                                    (o = (getComputedStyle(t).getPropertyValue(l) + "").trim()), (a += ""), (f = we(o)), (p = we(a)) ? f !== p && (o = Or(t, l, o, p) + p) : f && (a += f), this.add(O, "setProperty", o, a, r, i, 0, 0, l);
                                else if ("undefined" !== h) {
                                    if (
                                        (A && l in A ? ((o = "function" == typeof A[l] ? A[l].call(n, r, t, i) : A[l]), l in Q.units && !we(o) && (o += Q.units[l]), "=" === (o + "").charAt(1) && (o = Ar(t, l))) : (o = Ar(t, l)),
                                        (u = parseFloat(o)),
                                        (d = "string" === h && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)),
                                        (s = parseFloat(a)),
                                        l in Zn &&
                                            ("autoAlpha" === l && (1 === u && "hidden" === Ar(t, "visibility") && s && (u = 0), Tr(this, O, "visibility", u ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)),
                                            "scale" !== l && "transform" !== l && ~(l = Zn[l]).indexOf(",") && (l = l.split(",")[0])),
                                        (_ = l in Gn))
                                    )
                                        if (
                                            (m ||
                                                (((v = t._gsap).renderTransform && !e.parseTransform) || zr(t, e.parseTransform),
                                                (g = !1 !== e.smoothOrigin && v.smooth),
                                                ((m = this._pt = new Dn(this._pt, O, lr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                                            "scale" === l)
                                        )
                                            (this._pt = new Dn(this._pt, v, "scaleY", v.scaleY, d ? d * s : s - v.scaleY)), k.push("scaleY", l), (l += "X");
                                        else {
                                            if ("transformOrigin" === l) {
                                                (w = void 0),
                                                    (x = void 0),
                                                    (T = void 0),
                                                    (w = (b = a).split(" ")),
                                                    (x = w[0]),
                                                    (T = w[1] || "50%"),
                                                    ("top" !== x && "bottom" !== x && "left" !== T && "right" !== T) || ((b = x), (x = T), (T = b)),
                                                    (w[0] = Sr[x] || x),
                                                    (w[1] = Sr[T] || T),
                                                    (a = w.join(" ")),
                                                    v.svg ? Fr(t, a, 0, g, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && Tr(this, v, "zOrigin", v.zOrigin, p), Tr(this, O, l, Ir(o), Ir(a)));
                                                continue;
                                            }
                                            if ("svgOrigin" === l) {
                                                Fr(t, a, 1, g, 0, this);
                                                continue;
                                            }
                                            if (l in Dr) {
                                                Vr(this, v, l, u, a, d);
                                                continue;
                                            }
                                            if ("smoothOrigin" === l) {
                                                Tr(this, v, "smooth", v.smooth, a);
                                                continue;
                                            }
                                            if ("force3D" === l) {
                                                v[l] = a;
                                                continue;
                                            }
                                            if ("transform" === l) {
                                                Hr(this, a, t);
                                                continue;
                                            }
                                        }
                                    else l in O || (l = mr(l) || l);
                                    if (_ || ((s || 0 === s) && (u || 0 === u) && !Jn.test(a) && l in O))
                                        s || (s = 0),
                                            (f = (o + "").substr((u + "").length)) !== (p = we(a) || (l in Q.units ? Q.units[l] : f)) && (u = Or(t, l, o, p)),
                                            (this._pt = new Dn(this._pt, _ ? v : O, l, u, d ? d * s : s - u, _ || ("px" !== p && "zIndex" !== l) || !1 === e.autoRound ? Kn : nr)),
                                            (this._pt.u = p || 0),
                                            f !== p && ((this._pt.b = o), (this._pt.r = er));
                                    else if (l in O) Mr.call(this, t, l, o, a);
                                    else {
                                        if (!(l in t)) {
                                            Ot(l, a);
                                            continue;
                                        }
                                        this.add(t, l, t[l], a, r, i);
                                    }
                                    k.push(l);
                                }
                        y && Pn(this);
                    },
                    get: Ar,
                    aliases: Zn,
                    getSetter: function (t, e, n) {
                        var r = Zn[e];
                        return (
                            r && r.indexOf(",") < 0 && (e = r),
                            e in Gn && e !== fr && (t._gsap.x || Ar(t, "x")) ? (n && qn === n ? ("scale" === e ? ur : sr) : (qn = n || {}) && ("scale" === e ? hr : cr)) : t.style && !ut(t.style[e]) ? or : ~e.indexOf("-") ? ar : Tn(t, e)
                        );
                    },
                    core: { _removeProperty: xr, _getMatrix: Br },
                };
            (Fn.utils.checkPrefix = mr),
                ($r = Nt((Wr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Qr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
                    Gn[t] = 1;
                })),
                Nt(Qr, function (t) {
                    (Q.units[t] = "deg"), (Dr[t] = 1);
                }),
                (Zn[$r[13]] = Wr + "," + Qr),
                Nt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
                    var e = t.split(":");
                    Zn[e[1]] = $r[e[0]];
                }),
                Nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
                    Q.units[t] = "px";
                }),
                Fn.registerPlugin(Jr);
            var Zr = (Fn.registerPlugin(Jr) || Fn).core.Tween;
            function Kr(t) {
                var e = this;
                (this.elementBindings = []),
                    (this.value = t.object[t.property]),
                    (this.valueGetter = function () {
                        return e.value;
                    }),
                    (this.valueSetter = function (t) {
                        e.value = t;
                        for (var n = 0; n < e.elementBindings.length; n++) {
                            var r = e.elementBindings[n];
                            r.element[r.attribute] = t;
                        }
                    }),
                    (this.addBinding = function (t, n, r) {
                        var i = { element: t, attribute: n };
                        return (
                            r &&
                                (t.addEventListener(r, function (r) {
                                    e.valueSetter(t[n]);
                                }),
                                (i.event = r)),
                            e.elementBindings.push(i),
                            (t[n] = e.value),
                            e
                        );
                    }),
                    Object.defineProperty(t.object, t.property, { get: this.valueGetter, set: this.valueSetter }),
                    (t.object[t.property] = this.value);
            }
            function ti(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = g()(t);
                    if (e) {
                        var i = g()(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return m()(this, n);
                };
            }
            function ei(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = g()(t);
                    if (e) {
                        var i = g()(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return m()(this, n);
                };
            }
            var ni = (function (t) {
                d()(n, t);
                var e = ei(n);
                function n(t) {
                    var r;
                    return (
                        i()(this, n),
                        (r = e.call(this, t)).setTitle("Campanhas"),
                        (r.width = 1080),
                        (r.height = 0),
                        (r.isMobile = navigator.userAgent.toLowerCase().match(/mobile/i)),
                        (r.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream),
                        (r.streaming = !1),
                        (r.currentStep = 0),
                        (r.imageData = null),
                        (r.video = null),
                        (r.canvas = null),
                        (r.canvasStream = null),
                        (r.photo = null),
                        (r.takebutton = null),
                        (r.downloadbutton = null),
                        (r.backbutton = null),
                        (r.modalbackbutton = null),
                        (r.text1button = null),
                        (r.text2button = null),
                        r
                    );
                }
                return (
                    c()(n, [
                        {
                            key: "mounted",
                            value: function () {
                                this.setup();
                            },
                        },
                        {
                            key: "setup",
                            value: function () {
                                var t = this;
                                (this.video = document.getElementById("video")),
                                    (this.canvas = document.getElementById("canvas")),
                                    (this.canvasStream = document.getElementById("canvasStream")),
                                    (this.photo = document.getElementById("photo")),
                                    (this.takebutton = document.getElementById("takebutton")),
                                    (this.downloadbutton = document.getElementById("downloadbutton")),
                                    (this.backbutton = document.getElementById("backbutton")),
                                    (this.modalbackbutton = document.getElementById("modalbackbutton")),
                                    (this.text1button = document.getElementById("text1button")),
                                    (this.text2button = document.getElementById("text2button")),
                                    navigator.mediaDevices
                                        .getUserMedia({ video: !0, audio: !1 })
                                        .then(function (e) {
                                            (t.video.srcObject = e), t.video.play(), Zr.to(".camera", 0.6, { autoAlpha: 1, delay: 1 });
                                        })
                                        .catch(function (t) {
                                            console.log("An error occurred: " + t);
                                        }),
                                    this.video.addEventListener(
                                        "canplay",
                                        function (e) {
                                            t.streaming ||
                                                ((t.height = t.video.videoHeight / (t.video.videoWidth / t.width)),
                                                isNaN(t.height) && !t.isMobile && (t.height = t.width / (4 / 3)),
                                                t.video.setAttribute("width", t.width),
                                                t.video.setAttribute("height", t.height),
                                                t.canvas.setAttribute("width", t.width),
                                                t.canvas.setAttribute("height", t.height),
                                                t.canvasStream.setAttribute("width", t.width),
                                                t.canvasStream.setAttribute("height", t.height),
                                                (t.streaming = !0));
                                        },
                                        !1
                                    ),
                                    this.takebutton.addEventListener(
                                        "click",
                                        function (e) {
                                            t.takepicture(), e.preventDefault();
                                        },
                                        !1
                                    ),
                                    this.downloadbutton.addEventListener(
                                        "click",
                                        function (e) {
                                            t.downloadPicture(t.canvas.toDataURL()), e.preventDefault();
                                        },
                                        !1
                                    ),
                                    this.backbutton.addEventListener(
                                        "click",
                                        function (e) {
                                            t.tryAgain(), e.preventDefault();
                                        },
                                        !1
                                    ),
                                    this.text1button.addEventListener(
                                        "click",
                                        function (e) {
                                            t.setLegend("1"), e.preventDefault();
                                        },
                                        !1
                                    ),
                                    this.text2button.addEventListener(
                                        "click",
                                        function (e) {
                                            t.setLegend("2"), e.preventDefault();
                                        },
                                        !1
                                    ),
                                    this.modalbackbutton.addEventListener(
                                        "click",
                                        function (e) {
                                            Zr.to(".modal-info", 0.6, { autoAlpha: 0 }), t.copyToClipboard(), e.preventDefault();
                                        },
                                        !1
                                    ),
                                    this.clearphoto();
                            },
                        },
                        {
                            key: "clearphoto",
                            value: function () {
                                var t = canvas.getContext("2d");
                                (t.fillStyle = "#AAA"), t.fillRect(0, 0, this.canvas.width, this.canvas.height);
                                var e = this.canvas.toDataURL("image/png");
                                this.photo.setAttribute("src", e);
                            },
                        },
                        {
                            key: "takepicture",
                            value: function () {
                                Zr.fromTo(
                                    ".content-left",
                                    0.6,
                                    { autoAlpha: 1 },
                                    {
                                        autoAlpha: 0,
                                        onComplete: function () {
                                            Zr.set(".content-left", { display: "none" }), Zr.fromTo(".content-right", 0.6, { display: "block", autoAlpha: 0 }, { autoAlpha: 1, onComplete: function () {} });
                                        },
                                    }
                                ),
                                    this.width && this.height ? this.buildPicture(1) : this.clearphoto();
                            },
                        },
                        {
                            key: "tryAgain",
                            value: function () {
                                (this.currentStep = 0),
                                    Zr.fromTo(
                                        ".content-right",
                                        0.6,
                                        { autoAlpha: 1 },
                                        {
                                            autoAlpha: 0,
                                            onComplete: function () {
                                                Zr.set(".content-right", { display: "none" }), Zr.fromTo(".content-left", 0.6, { display: "block", autoAlpha: 0 }, { autoAlpha: 1, onComplete: function () {} });
                                            },
                                        }
                                    ),
                                    this.clearphoto();
                            },
                        },
                        {
                            key: "setLegend",
                            value: function (t) {
                                this.clearphoto(), this.buildPicture(t);
                            },
                        },
                        {
                            key: "buildPicture",
                            value: function (t) {
                                var e = this.canvas.getContext("2d"),
                                    n = document.getElementById("instaPost".concat(t));
                                if (((this.canvas.width = 1080), (this.canvas.height = 1080), 0 == this.currentStep)) {
                                    var r = this.canvasStream.getContext("2d");
                                    (this.canvasStream.width = (this.isMobile, 1080)),
                                        (this.canvasStream.height = this.isMobile ? 1920 : 1080),
                                        this.isMobile ? r.drawImage(this.video, 50, 0.1 * -this.height, 980, 1280) : r.drawImage(this.video, 0, 0.2 * this.height, this.width, 810);
                                }
                                e.drawImage(this.canvasStream, 0, 0, this.isMobile ? 1080 : this.width, this.isMobile ? 1920 : 1080), e.drawImage(n, 0, 0, this.width, 1080);
                                var i = this.canvas.toDataURL();
                                this.photo.setAttribute("src", i), (this.currentStep = 1);
                            },
                        },
                        {
                            key: "downloadPicture",
                            value: function (t) {
                                var e = document.createElement("a");
                                (e.download = "Campanhas.png"), (e.href = t), document.body.appendChild(e), e.click(), Zr.to(".modal-info", 0.6, { autoAlpha: 1, display: "flex", delay: 2 });
                            },
                        },
                        {
                            key: "copyToClipboard",
                            value: function () {
                                var t = document.createElement("textarea");
                                (t.value = "#melhorversão<"), document.body.appendChild(t), t.select(), t.setSelectionRange(0, 99999), document.execCommand("copy"), document.body.removeChild(t);
                            },
                        },
                    ]),
                    n
                );
            })(
                (function (t) {
                    d()(r, t);
                    var e,
                        n = ti(r);
                    function r(t) {
                        return i()(this, r), n.call(this, t);
                    }
                    return (
                        c()(r, [
                            {
                                key: "show",
                                value: function () {
                                    Zr.fromTo(this.$el, 1, { autoAlpha: 0 }, { autoAlpha: 1 });
                                },
                            },
                            {
                                key: "hide",
                                value:
                                    ((e = u()(
                                        a.a.mark(function t() {
                                            var e = this;
                                            return a.a.wrap(function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return t.abrupt(
                                                                "return",
                                                                new Promise(function (t) {
                                                                    Zr.fromTo(e.$el, 0.6, { autoAlpha: 1 }, { autoAlpha: 0, onComplete: t });
                                                                })
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            }, t);
                                        })
                                    )),
                                    function () {
                                        return e.apply(this, arguments);
                                    }),
                            },
                        ]),
                        r
                    );
                })(
                    (function () {
                        function t(e) {
                            var n = this;
                            i()(this, t),
                                (this.params = e),
                                (this.$el = document.querySelector("#app").firstElementChild),
                                (this.loaded = !1),
                                document.querySelector("#app").addEventListener(
                                    "DOMNodeInserted",
                                    function (t) {
                                        !n.loaded && t.target && t.target.classList && t.target.classList.contains("view") && ((n.$el = t.target), n.addBindings(), n.mounted(), n.show(), console.log("App changed", t), (n.loaded = !0));
                                    },
                                    !1
                                );
                        }
                        return (
                            c()(t, [
                                { key: "mounted", value: function () {} },
                                {
                                    key: "addBindings",
                                    value: function () {
                                        var t = this;
                                        Array.from(document.querySelectorAll("[bind-value]")).map(function (e) {
                                            var n = e.getAttribute("bind-value");
                                            if (!t[n]) {
                                                var r = e.getAttribute("bind-type");
                                                t[n] = "";
                                                var i = new Kr({ object: t, property: n });
                                                "input" === r ? i.addBinding(e, "value", "keyup") : i.addBinding(e, "innerHTML");
                                            }
                                        });
                                    },
                                },
                                {
                                    key: "setTitle",
                                    value: function (t) {
                                        document.title = t;
                                    },
                                },
                                { key: "destroy", value: function () {} },
                            ]),
                            t
                        );
                    })()
                )
            );
            n(18);
            new (function t() {
                i()(this, t), (this.router = new f("#app", [{ path: "/", view: ni, template: n(14) }]));
            })();
        },
    ],
    [[8, 1]],
]);
