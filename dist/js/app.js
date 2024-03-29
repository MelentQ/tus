(() => {
    var __webpack_modules__ = {
        125: function(module) {
            /*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2023 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.8
 */
            !function(e, t) {
                if (true) module.exports = t(); else ;
            }("undefined" != typeof self && self, (function() {
                return function() {
                    "use strict";
                    var e = {
                        8741: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
                            t.default = i;
                        },
                        3976: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = i(2839), a = {
                                _maxTestPos: 500,
                                placeholder: "_",
                                optionalmarker: [ "[", "]" ],
                                quantifiermarker: [ "{", "}" ],
                                groupmarker: [ "(", ")" ],
                                alternatormarker: "|",
                                escapeChar: "\\",
                                mask: null,
                                regex: null,
                                oncomplete: function() {},
                                onincomplete: function() {},
                                oncleared: function() {},
                                repeat: 0,
                                greedy: !1,
                                autoUnmask: !1,
                                removeMaskOnSubmit: !1,
                                clearMaskOnLostFocus: !0,
                                insertMode: !0,
                                insertModeVisual: !0,
                                clearIncomplete: !1,
                                alias: null,
                                onKeyDown: function() {},
                                onBeforeMask: null,
                                onBeforePaste: function(e, t) {
                                    return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                                },
                                onBeforeWrite: null,
                                onUnMask: null,
                                showMaskOnFocus: !0,
                                showMaskOnHover: !0,
                                onKeyValidation: function() {},
                                skipOptionalPartCharacter: " ",
                                numericInput: !1,
                                rightAlign: !1,
                                undoOnEscape: !0,
                                radixPoint: "",
                                _radixDance: !1,
                                groupSeparator: "",
                                keepStatic: null,
                                positionCaretOnTab: !0,
                                tabThrough: !1,
                                supportsInputType: [ "text", "tel", "url", "password", "search" ],
                                ignorables: [ n.keys.Backspace, n.keys.Tab, n.keys.Pause, n.keys.Escape, n.keys.PageUp, n.keys.PageDown, n.keys.End, n.keys.Home, n.keys.ArrowLeft, n.keys.ArrowUp, n.keys.ArrowRight, n.keys.ArrowDown, n.keys.Insert, n.keys.Delete, n.keys.ContextMenu, n.keys.F1, n.keys.F2, n.keys.F3, n.keys.F4, n.keys.F5, n.keys.F6, n.keys.F7, n.keys.F8, n.keys.F9, n.keys.F10, n.keys.F11, n.keys.F12, n.keys.Process, n.keys.Unidentified, n.keys.Shift, n.keys.Control, n.keys.Alt, n.keys.Tab, n.keys.AltGraph, n.keys.CapsLock ],
                                isComplete: null,
                                preValidation: null,
                                postValidation: null,
                                staticDefinitionSymbol: void 0,
                                jitMasking: !1,
                                nullable: !0,
                                inputEventOnly: !1,
                                noValuePatching: !1,
                                positionCaretOnClick: "lvp",
                                casing: null,
                                inputmode: "text",
                                importDataAttributes: !0,
                                shiftPositions: !0,
                                usePrototypeDefinitions: !0,
                                validationEventTimeOut: 3e3,
                                substitutes: {}
                            };
                            t.default = a;
                        },
                        7392: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            t.default = {
                                9: {
                                    validator: "[0-9０-９]",
                                    definitionSymbol: "*"
                                },
                                a: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    definitionSymbol: "*"
                                },
                                "*": {
                                    validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
                                }
                            };
                        },
                        253: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i) {
                                if (void 0 === i) return e.__data ? e.__data[t] : null;
                                e.__data = e.__data || {}, e.__data[t] = i;
                            };
                        },
                        3776: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.Event = void 0, t.off = function(e, t) {
                                var i, n;
                                f(this[0]) && e && (i = this[0].eventRegistry, n = this[0], e.split(" ").forEach((function(e) {
                                    var a = l(e.split("."), 2);
                                    (function(e, n) {
                                        var a, r, o = [];
                                        if (e.length > 0) if (void 0 === t) for (a = 0, r = i[e][n].length; a < r; a++) o.push({
                                            ev: e,
                                            namespace: n && n.length > 0 ? n : "global",
                                            handler: i[e][n][a]
                                        }); else o.push({
                                            ev: e,
                                            namespace: n && n.length > 0 ? n : "global",
                                            handler: t
                                        }); else if (n.length > 0) for (var s in i) for (var l in i[s]) if (l === n) if (void 0 === t) for (a = 0, 
                                        r = i[s][l].length; a < r; a++) o.push({
                                            ev: s,
                                            namespace: l,
                                            handler: i[s][l][a]
                                        }); else o.push({
                                            ev: s,
                                            namespace: l,
                                            handler: t
                                        });
                                        return o;
                                    })(a[0], a[1]).forEach((function(e) {
                                        var t = e.ev, a = e.handler;
                                        !function(e, t, a) {
                                            if (e in i == 1) if (n.removeEventListener ? n.removeEventListener(e, a, !1) : n.detachEvent && n.detachEvent("on".concat(e), a), 
                                            "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(a), 1); else i[e][t].splice(i[e][t].indexOf(a), 1);
                                        }(t, e.namespace, a);
                                    }));
                                })));
                                return this;
                            }, t.on = function(e, t) {
                                if (f(this[0])) {
                                    var i = this[0].eventRegistry, n = this[0];
                                    e.split(" ").forEach((function(e) {
                                        var a = l(e.split("."), 2), r = a[0], o = a[1];
                                        !function(e, a) {
                                            n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on".concat(e), t), 
                                            i[e] = i[e] || {}, i[e][a] = i[e][a] || [], i[e][a].push(t);
                                        }(r, void 0 === o ? "global" : o);
                                    }));
                                }
                                return this;
                            }, t.trigger = function(e) {
                                var t = arguments;
                                if (f(this[0])) for (var i = this[0].eventRegistry, n = this[0], r = "string" == typeof e ? e.split(" ") : [ e.type ], s = 0; s < r.length; s++) {
                                    var l = r[s].split("."), c = l[0], u = l[1] || "global";
                                    if (void 0 !== document && "global" === u) {
                                        var d, p = {
                                            bubbles: !0,
                                            cancelable: !0,
                                            composed: !0,
                                            detail: arguments[1]
                                        };
                                        if (document.createEvent) {
                                            try {
                                                if ("input" === c) p.inputType = "insertText", d = new InputEvent(c, p); else d = new CustomEvent(c, p);
                                            } catch (e) {
                                                (d = document.createEvent("CustomEvent")).initCustomEvent(c, p.bubbles, p.cancelable, p.detail);
                                            }
                                            e.type && (0, a.default)(d, e), n.dispatchEvent(d);
                                        } else (d = document.createEventObject()).eventType = c, d.detail = arguments[1], 
                                        e.type && (0, a.default)(d, e), n.fireEvent("on" + d.eventType, d);
                                    } else if (void 0 !== i[c]) {
                                        arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                                        arguments[0].detail = arguments.slice(1);
                                        var h = i[c];
                                        ("global" === u ? Object.values(h).flat() : h[u]).forEach((function(e) {
                                            return e.apply(n, t);
                                        }));
                                    }
                                }
                                return this;
                            };
                            var n, a = u(i(600)), r = u(i(9380)), o = u(i(4963)), s = u(i(8741));
                            function l(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var n, a, r, o, s = [], l = !0, c = !1;
                                        try {
                                            if (r = (i = i.call(e)).next, 0 === t) {
                                                if (Object(i) !== i) return;
                                                l = !1;
                                            } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return s;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return c(e, t);
                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function c(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                                return n;
                            }
                            function u(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            function f(e) {
                                return e instanceof Element;
                            }
                            t.Event = n, "function" == typeof r.default.CustomEvent ? t.Event = n = r.default.CustomEvent : s.default && (t.Event = n = function(e, t) {
                                t = t || {
                                    bubbles: !1,
                                    cancelable: !1,
                                    composed: !0,
                                    detail: void 0
                                };
                                var i = document.createEvent("CustomEvent");
                                return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
                            }, n.prototype = r.default.Event.prototype);
                        },
                        600: function(e, t) {
                            function i(e) {
                                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, i(e);
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function e() {
                                var t, n, a, r, o, s, l = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                                "boolean" == typeof l && (f = l, l = arguments[c] || {}, c++);
                                "object" !== i(l) && "function" != typeof l && (l = {});
                                for (;c < u; c++) if (null != (t = arguments[c])) for (n in t) a = l[n], l !== (r = t[n]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                                s = a && Array.isArray(a) ? a : []) : s = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, 
                                l[n] = e(f, s, r)) : void 0 !== r && (l[n] = r));
                                return l;
                            };
                        },
                        4963: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = s(i(600)), a = s(i(9380)), r = s(i(253)), o = i(3776);
                            function s(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var l = a.default.document;
                            function c(e) {
                                return e instanceof c ? e : this instanceof c ? void (null != e && e !== a.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : l.querySelector(e), 
                                void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
                            }
                            c.prototype = {
                                on: o.on,
                                off: o.off,
                                trigger: o.trigger
                            }, c.extend = n.default, c.data = r.default, c.Event = o.Event;
                            var u = c;
                            t.default = u;
                        },
                        9845: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mobile = t.iphone = t.ie = void 0;
                            var n, a = (n = i(9380)) && n.__esModule ? n : {
                                default: n
                            };
                            var r = a.default.navigator && a.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, s = navigator.userAgentData && navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, l = /iphone/i.test(r);
                            t.iphone = l, t.mobile = s, t.ie = o;
                        },
                        7184: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e) {
                                return e.replace(i, "\\$1");
                            };
                            var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
                        },
                        6030: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventHandlers = void 0;
                            var n = i(8711), a = i(2839), r = i(9845), o = i(7215), s = i(7760), l = i(4713);
                            function c(e, t) {
                                var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!i) {
                                    if (Array.isArray(e) || (i = function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return u(e, t);
                                        var i = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === i && e.constructor && (i = e.constructor.name);
                                        if ("Map" === i || "Set" === i) return Array.from(e);
                                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return u(e, t);
                                    }(e)) || t && e && "number" == typeof e.length) {
                                        i && (e = i);
                                        var n = 0, a = function() {};
                                        return {
                                            s: a,
                                            n: function() {
                                                return n >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[n++]
                                                };
                                            },
                                            e: function(e) {
                                                throw e;
                                            },
                                            f: a
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var r, o = !0, s = !1;
                                return {
                                    s: function() {
                                        i = i.call(e);
                                    },
                                    n: function() {
                                        var e = i.next();
                                        return o = e.done, e;
                                    },
                                    e: function(e) {
                                        s = !0, r = e;
                                    },
                                    f: function() {
                                        try {
                                            o || null == i.return || i.return();
                                        } finally {
                                            if (s) throw r;
                                        }
                                    }
                                };
                            }
                            function u(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                                return n;
                            }
                            var f = {
                                keyEvent: function(e, t, i, c, u) {
                                    var d = this.inputmask, p = d.opts, h = d.dependencyLib, v = d.maskset, m = this, g = h(m), y = e.key, k = n.caret.call(d, m), b = p.onKeyDown.call(this, e, n.getBuffer.call(d), k, p);
                                    if (void 0 !== b) return b;
                                    if (y === a.keys.Backspace || y === a.keys.Delete || r.iphone && y === a.keys.BACKSPACE_SAFARI || e.ctrlKey && y === a.keys.x && !("oncut" in m)) e.preventDefault(), 
                                    o.handleRemove.call(d, m, y, k), (0, s.writeBuffer)(m, n.getBuffer.call(d, !0), v.p, e, m.inputmask._valueGet() !== n.getBuffer.call(d).join("")); else if (y === a.keys.End || y === a.keys.PageDown) {
                                        e.preventDefault();
                                        var x = n.seekNext.call(d, n.getLastValidPosition.call(d));
                                        n.caret.call(d, m, e.shiftKey ? k.begin : x, x, !0);
                                    } else y === a.keys.Home && !e.shiftKey || y === a.keys.PageUp ? (e.preventDefault(), 
                                    n.caret.call(d, m, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && y === a.keys.Escape && !0 !== e.altKey ? ((0, 
                                    s.checkVal)(m, !0, !1, d.undoValue.split("")), g.trigger("click")) : y !== a.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== d.userOptions.insertMode ? !0 === p.tabThrough && y === a.keys.Tab ? !0 === e.shiftKey ? (k.end = n.seekPrevious.call(d, k.end, !0), 
                                    !0 === l.getTest.call(d, k.end - 1).match.static && k.end--, k.begin = n.seekPrevious.call(d, k.end, !0), 
                                    k.begin >= 0 && k.end > 0 && (e.preventDefault(), n.caret.call(d, m, k.begin, k.end))) : (k.begin = n.seekNext.call(d, k.begin, !0), 
                                    k.end = n.seekNext.call(d, k.begin, !0), k.end < v.maskLength && k.end--, k.begin <= v.maskLength && (e.preventDefault(), 
                                    n.caret.call(d, m, k.begin, k.end))) : e.shiftKey || p.insertModeVisual && !1 === p.insertMode && (y === a.keys.ArrowRight ? setTimeout((function() {
                                        var e = n.caret.call(d, m);
                                        n.caret.call(d, m, e.begin);
                                    }), 0) : y === a.keys.ArrowLeft && setTimeout((function() {
                                        var e = n.translatePosition.call(d, m.inputmask.caretPos.begin);
                                        n.translatePosition.call(d, m.inputmask.caretPos.end);
                                        d.isRTL ? n.caret.call(d, m, e + (e === v.maskLength ? 0 : 1)) : n.caret.call(d, m, e - (0 === e ? 0 : 1));
                                    }), 0)) : o.isSelection.call(d, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, 
                                    n.caret.call(d, m, k.begin, k.begin));
                                    return d.isComposing = y == a.keys.Process || y == a.keys.Unidentified, d.ignorable = p.ignorables.includes(y), 
                                    f.keypressEvent.call(this, e, t, i, c, u);
                                },
                                keypressEvent: function(e, t, i, r, l) {
                                    var c = this.inputmask || this, u = c.opts, f = c.dependencyLib, d = c.maskset, p = c.el, h = f(p), v = e.key;
                                    if (!0 === t || e.ctrlKey && e.altKey || !(e.ctrlKey || e.metaKey || c.ignorable)) {
                                        if (v) {
                                            var m, g = t ? {
                                                begin: l,
                                                end: l
                                            } : n.caret.call(c, p);
                                            v = u.substitutes[v] || v, d.writeOutBuffer = !0;
                                            var y = o.isValid.call(c, g, v, r, void 0, void 0, void 0, t);
                                            if (!1 !== y && (n.resetMaskSet.call(c, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(c, y.pos.begin ? y.pos.begin : y.pos), 
                                            d.p = m), m = u.numericInput && void 0 === y.caret ? n.seekPrevious.call(c, m) : m, 
                                            !1 !== i && (setTimeout((function() {
                                                u.onKeyValidation.call(p, v, y);
                                            }), 0), d.writeOutBuffer && !1 !== y)) {
                                                var k = n.getBuffer.call(c);
                                                (0, s.writeBuffer)(p, k, m, e, !0 !== t);
                                            }
                                            if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                                        }
                                    } else v === a.keys.Enter && c.undoValue !== c._valueGet(!0) && (c.undoValue = c._valueGet(!0), 
                                    setTimeout((function() {
                                        h.trigger("change");
                                    }), 0));
                                },
                                pasteEvent: function(e) {
                                    var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                                    i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                                    var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                                    if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                                    u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                                    window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                                        if (!e.clipboardData || !e.clipboardData.getData) return !0;
                                        r = l + e.clipboardData.getData("text/plain") + u;
                                    }
                                    var f = r;
                                    if (i.isRTL) {
                                        f = f.split("");
                                        var d, p = c(n.getBufferTemplate.call(i));
                                        try {
                                            for (p.s(); !(d = p.n()).done; ) {
                                                var h = d.value;
                                                f[0] === h && f.shift();
                                            }
                                        } catch (e) {
                                            p.e(e);
                                        } finally {
                                            p.f();
                                        }
                                        f = f.join("");
                                    }
                                    if ("function" == typeof a.onBeforePaste) {
                                        if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                                        f || (f = r);
                                    }
                                    (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                                },
                                inputFallBackEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, o = t.dependencyLib;
                                    var c, u = this, d = u.inputmask._valueGet(!0), p = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), h = n.caret.call(t, u, void 0, void 0, !0);
                                    if (p !== d) {
                                        if (c = function(e, a, r) {
                                            for (var o, s, c, u = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = u.length >= d.length ? u.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], y = "~"; u.length < h; ) u.push(y);
                                            for (;d.length < h; ) d.push(y);
                                            for (;f.length < v; ) f.unshift(y);
                                            for (;p.length < v; ) p.unshift(y);
                                            var k = u.concat(f), b = d.concat(p);
                                            for (s = 0, o = k.length; s < o; s++) switch (c = l.getPlaceholder.call(t, n.translatePosition.call(t, s)), 
                                            m) {
                                              case "insertText":
                                                b[s - 1] === k[s] && r.begin == k.length - 1 && g.push(k[s]), s = o;
                                                break;

                                              case "insertReplacementText":
                                              case "deleteContentBackward":
                                                k[s] === y ? r.end++ : s = o;
                                                break;

                                              default:
                                                k[s] !== b[s] && (k[s + 1] !== y && k[s + 1] !== c && void 0 !== k[s + 1] || (b[s] !== c || b[s + 1] !== y) && b[s] !== y ? b[s + 1] === y && b[s] === k[s + 1] ? (m = "insertText", 
                                                g.push(k[s]), r.begin--, r.end--) : k[s] !== c && k[s] !== y && (k[s + 1] === y || b[s] !== k[s] && b[s + 1] === k[s + 1]) ? (m = "insertReplacementText", 
                                                g.push(k[s]), r.begin--) : k[s] === y ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, s), !0) || b[s] === i.radixPoint) && r.end++) : s = o : (m = "insertText", 
                                                g.push(k[s]), r.begin--, r.end--));
                                            }
                                            return {
                                                action: m,
                                                data: g,
                                                caret: r
                                            };
                                        }(d, p, h), (u.inputmask.shadowRoot || u.ownerDocument).activeElement !== u && u.focus(), 
                                        (0, s.writeBuffer)(u, n.getBuffer.call(t)), n.caret.call(t, u, h.begin, h.end, !0), 
                                        !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === c.action && t.isComposing) return !1;
                                        switch ("insertCompositionText" === e.inputType && "insertText" === c.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, 
                                        c.action) {
                                          case "insertText":
                                          case "insertReplacementText":
                                            c.data.forEach((function(e, i) {
                                                var n = new o.Event("keypress");
                                                n.key = e, t.ignorable = !1, f.keypressEvent.call(u, n);
                                            })), setTimeout((function() {
                                                t.$el.trigger("keyup");
                                            }), 0);
                                            break;

                                          case "deleteContentBackward":
                                            var v = new o.Event("keydown");
                                            v.key = a.keys.Backspace, f.keyEvent.call(u, v);
                                            break;

                                          default:
                                            (0, s.applyInputValue)(u, d), n.caret.call(t, u, h.begin, h.end, !0);
                                        }
                                        e.preventDefault();
                                    }
                                },
                                setValueEvent: function(e) {
                                    var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                                    void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                                },
                                focusEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = null == t ? void 0 : t._valueGet();
                                    i.showMaskOnFocus && a !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(this, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                                    !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || o.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || f.clickEvent.apply(this, [ e, !0 ]), 
                                    t.undoValue = null == t ? void 0 : t._valueGet(!0);
                                },
                                invalidEvent: function(e) {
                                    this.inputmask.validationEvent = !0;
                                },
                                mouseleaveEvent: function() {
                                    var e = this.inputmask, t = e.opts, i = this;
                                    e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                                    s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                                },
                                clickEvent: function(e, t) {
                                    var i = this.inputmask;
                                    i.clicked++;
                                    var a = this;
                                    if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                                        var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                                        void 0 !== r && n.caret.call(i, a, r);
                                    }
                                },
                                cutEvent: function(e) {
                                    var t = this.inputmask, i = t.maskset, r = this, l = n.caret.call(t, r), c = t.isRTL ? n.getBuffer.call(t).slice(l.end, l.begin) : n.getBuffer.call(t).slice(l.begin, l.end), u = t.isRTL ? c.reverse().join("") : c.join("");
                                    window.navigator.clipboard ? window.navigator.clipboard.writeText(u) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", u), 
                                    o.handleRemove.call(t, r, a.keys.Delete, l), (0, s.writeBuffer)(r, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                                },
                                blurEvent: function(e) {
                                    var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                                    t.clicked = 0;
                                    var r = a(this), l = this;
                                    if (l.inputmask) {
                                        (0, s.HandleNativePlaceholder)(l, t.originalPlaceholder);
                                        var c = l.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                                        "" !== c && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && c === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                                        !1 === o.isComplete.call(t, u) && (setTimeout((function() {
                                            r.trigger("incomplete");
                                        }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                                        (0, s.writeBuffer)(l, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                                        r.trigger("change"));
                                    }
                                },
                                mouseenterEvent: function() {
                                    var e = this.inputmask, t = e.opts.showMaskOnHover, i = this;
                                    if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                                        var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                                        t && (0, s.HandleNativePlaceholder)(i, a);
                                    }
                                },
                                submitEvent: function() {
                                    var e = this.inputmask, t = e.opts;
                                    e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                                    t.clearIncomplete && !1 === o.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                                    t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                                        (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                                    }), 0));
                                },
                                resetEvent: function() {
                                    var e = this.inputmask;
                                    e.refreshValue = !0, setTimeout((function() {
                                        (0, s.applyInputValue)(e.el, e._valueGet(!0));
                                    }), 0);
                                }
                            };
                            t.EventHandlers = f;
                        },
                        9716: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventRuler = void 0;
                            var n, a = (n = i(2394)) && n.__esModule ? n : {
                                default: n
                            }, r = i(2839), o = i(8711), s = i(7760);
                            var l = {
                                on: function(e, t, i) {
                                    var n = e.inputmask.dependencyLib, l = function(t) {
                                        t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                                        var l, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                                        if (void 0 === u && "FORM" !== this.nodeName) {
                                            var d = n.data(c, "_inputmask_opts");
                                            n(c).off(), d && new a.default(d).mask(c);
                                        } else {
                                            if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === r.keys.c || !1 === f.tabThrough && t.key === r.keys.Tab))) {
                                                switch (t.type) {
                                                  case "input":
                                                    if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                                    break;

                                                  case "click":
                                                  case "focus":
                                                    return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, s.HandleNativePlaceholder)(e, (u.isRTL ? o.getBufferTemplate.call(u).slice().reverse() : o.getBufferTemplate.call(u)).join("")), 
                                                    setTimeout((function() {
                                                        e.focus();
                                                    }), f.validationEventTimeOut), !1) : (l = arguments, void setTimeout((function() {
                                                        e.inputmask && i.apply(c, l);
                                                    }), 0));
                                                }
                                                var p = i.apply(c, arguments);
                                                return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                                            }
                                            t.preventDefault();
                                        }
                                    };
                                    [ "submit", "reset" ].includes(t) ? (l = l.bind(e), null !== e.form && n(e.form).on(t, l)) : n(e).on(t, l), 
                                    e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(l);
                                },
                                off: function(e, t) {
                                    if (e.inputmask && e.inputmask.events) {
                                        var i = e.inputmask.dependencyLib, n = e.inputmask.events;
                                        for (var a in t && ((n = [])[t] = e.inputmask.events[t]), n) {
                                            for (var r = n[a]; r.length > 0; ) {
                                                var o = r.pop();
                                                [ "submit", "reset" ].includes(a) ? null !== e.form && i(e.form).off(a, o) : i(e).off(a, o);
                                            }
                                            delete e.inputmask.events[a];
                                        }
                                    }
                                }
                            };
                            t.EventRuler = l;
                        },
                        219: function(e, t, i) {
                            var n = d(i(2394)), a = i(2839), r = d(i(7184)), o = i(8711), s = i(4713);
                            function l(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var n, a, r, o, s = [], l = !0, c = !1;
                                        try {
                                            if (r = (i = i.call(e)).next, 0 === t) {
                                                if (Object(i) !== i) return;
                                                l = !1;
                                            } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return s;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return c(e, t);
                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function c(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                                return n;
                            }
                            function u(e) {
                                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, u(e);
                            }
                            function f(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var n = t[i];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                                    Object.defineProperty(e, (a = n.key, r = void 0, r = function(e, t) {
                                        if ("object" !== u(e) || null === e) return e;
                                        var i = e[Symbol.toPrimitive];
                                        if (void 0 !== i) {
                                            var n = i.call(e, t || "default");
                                            if ("object" !== u(n)) return n;
                                            throw new TypeError("@@toPrimitive must return a primitive value.");
                                        }
                                        return ("string" === t ? String : Number)(e);
                                    }(a, "string"), "symbol" === u(r) ? r : String(r)), n);
                                }
                                var a, r;
                            }
                            function d(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var p = n.default.dependencyLib, h = function() {
                                function e(t, i, n) {
                                    !function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    }(this, e), this.mask = t, this.format = i, this.opts = n, this._date = new Date(1, 0, 1), 
                                    this.initDateObject(t, this.opts);
                                }
                                var t, i, n;
                                return t = e, (i = [ {
                                    key: "date",
                                    get: function() {
                                        return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                                        this._date;
                                    }
                                }, {
                                    key: "initDateObject",
                                    value: function(e, t) {
                                        var i;
                                        for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                            var n = new RegExp("\\d+$").exec(i[0]), a = n ? i[0][0] + "x" : i[0], r = void 0;
                                            if (void 0 !== e) {
                                                if (n) {
                                                    var o = P(t).lastIndex, s = E(i.index, t);
                                                    P(t).lastIndex = o, r = e.slice(0, e.indexOf(s.nextMatch[0]));
                                                } else r = e.slice(0, g[a] && g[a][4] || a.length);
                                                e = e.slice(r.length);
                                            }
                                            Object.prototype.hasOwnProperty.call(g, a) && this.setValue(this, r, a, g[a][2], g[a][1]);
                                        }
                                    }
                                }, {
                                    key: "setValue",
                                    value: function(e, t, i, n, a) {
                                        if (void 0 !== t && (e[n] = "ampm" === n ? t : t.replace(/[^0-9]/g, "0"), e["raw" + n] = t.replace(/\s/g, "_")), 
                                        void 0 !== a) {
                                            var r = e[n];
                                            ("day" === n && 29 === parseInt(r) || "month" === n && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                            "day" === n && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === n && (m = !0), 
                                            "year" === n && (m = !0, r.length < 4 && (r = M(r, 4, !0))), "" === r || isNaN(r) || a.call(e._date, r), 
                                            "ampm" === n && a.call(e._date, r);
                                        }
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        this._date = new Date(1, 0, 1);
                                    }
                                }, {
                                    key: "reInit",
                                    value: function() {
                                        this._date = void 0, this.date;
                                    }
                                } ]) && f(t.prototype, i), n && f(t, n), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e;
                            }(), v = (new Date).getFullYear(), m = !1, g = {
                                d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                                dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                                    return M(Date.prototype.getDate.call(this), 2);
                                } ],
                                ddd: [ "" ],
                                dddd: [ "" ],
                                m: [ "[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return Date.prototype.getMonth.call(this) + 1;
                                } ],
                                mm: [ "0[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return M(Date.prototype.getMonth.call(this) + 1, 2);
                                } ],
                                mmm: [ "" ],
                                mmmm: [ "" ],
                                yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                                    return M(Date.prototype.getFullYear.call(this), 2);
                                } ],
                                yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                                    return M(Date.prototype.getFullYear.call(this), 4);
                                } ],
                                h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                                    return M(Date.prototype.getHours.call(this), 2);
                                } ],
                                hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return Date.prototype.getHours;
                                } ],
                                H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                                    return M(Date.prototype.getHours.call(this), 2);
                                } ],
                                Hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return function() {
                                        return M(Date.prototype.getHours.call(this), e);
                                    };
                                } ],
                                M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                                MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                                    return M(Date.prototype.getMinutes.call(this), 2);
                                } ],
                                s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                                ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                                    return M(Date.prototype.getSeconds.call(this), 2);
                                } ],
                                l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return M(Date.prototype.getMilliseconds.call(this), 3);
                                }, 3 ],
                                L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return M(Date.prototype.getMilliseconds.call(this), 2);
                                }, 2 ],
                                t: [ "[ap]", k, "ampm", b, 1 ],
                                tt: [ "[ap]m", k, "ampm", b, 2 ],
                                T: [ "[AP]", k, "ampm", b, 1 ],
                                TT: [ "[AP]M", k, "ampm", b, 2 ],
                                Z: [ ".*", void 0, "Z", function() {
                                    var e = this.toString().match(/\((.+)\)/)[1];
                                    e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                                        return l(e, 1)[0];
                                    })).join(""));
                                    return e;
                                } ],
                                o: [ "" ],
                                S: [ "" ]
                            }, y = {
                                isoDate: "yyyy-mm-dd",
                                isoTime: "HH:MM:ss",
                                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                            };
                            function k(e) {
                                var t = this.getHours();
                                e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                            }
                            function b() {
                                var e = this.getHours();
                                return (e = e || 12) >= 12 ? "PM" : "AM";
                            }
                            function x(e) {
                                var t = new RegExp("\\d+$").exec(e[0]);
                                if (t && void 0 !== t[0]) {
                                    var i = g[e[0][0] + "x"].slice("");
                                    return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                                }
                                if (g[e[0]]) return g[e[0]];
                            }
                            function P(e) {
                                if (!e.tokenizer) {
                                    var t = [], i = [];
                                    for (var n in g) if (/\.*x$/.test(n)) {
                                        var a = n[0] + "\\d+";
                                        -1 === i.indexOf(a) && i.push(a);
                                    } else -1 === t.indexOf(n[0]) && t.push(n[0]);
                                    e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                                    e.tokenizer = new RegExp(e.tokenizer, "g");
                                }
                                return e.tokenizer;
                            }
                            function w(e, t, i) {
                                if (!m) return !0;
                                if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                                if ("29" == e.day) {
                                    var n = E(t.pos, i);
                                    if ("yyyy" === n.targetMatch[0] && t.pos - n.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                                    t;
                                } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                                e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                                    pos: t.pos,
                                    c: "0"
                                }, {
                                    pos: t.pos + 1,
                                    c: t.c
                                } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                                return !1;
                            }
                            function S(e, t, i, n) {
                                var a, o, s = "";
                                for (P(i).lastIndex = 0; a = P(i).exec(e); ) if (void 0 === t) if (o = x(a)) s += "(" + o[0] + ")"; else switch (a[0]) {
                                  case "[":
                                    s += "(";
                                    break;

                                  case "]":
                                    s += ")?";
                                    break;

                                  default:
                                    s += (0, r.default)(a[0]);
                                } else if (o = x(a)) if (!0 !== n && o[3]) s += o[3].call(t.date); else o[2] ? s += t["raw" + o[2]] : s += a[0]; else s += a[0];
                                return s;
                            }
                            function M(e, t, i) {
                                for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                                return e;
                            }
                            function _(e, t, i) {
                                return "string" == typeof e ? new h(e, t, i) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                            }
                            function O(e, t) {
                                return S(t.inputFormat, {
                                    date: e
                                }, t);
                            }
                            function E(e, t) {
                                var i, n, a = 0, r = 0;
                                for (P(t).lastIndex = 0; n = P(t).exec(t.inputFormat); ) {
                                    var o = new RegExp("\\d+$").exec(n[0]);
                                    if ((a += r = o ? parseInt(o[0]) : n[0].length) >= e + 1) {
                                        i = n, n = P(t).exec(t.inputFormat);
                                        break;
                                    }
                                }
                                return {
                                    targetMatchIndex: a - r,
                                    nextMatch: n,
                                    targetMatch: i
                                };
                            }
                            n.default.extendAliases({
                                datetime: {
                                    mask: function(e) {
                                        return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = y[e.inputFormat] || e.inputFormat, 
                                        e.displayFormat = y[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = y[e.outputFormat] || e.outputFormat || e.inputFormat, 
                                        e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                                        e.regex = S(e.inputFormat, void 0, e), e.min = _(e.min, e.inputFormat, e), e.max = _(e.max, e.inputFormat, e), 
                                        null;
                                    },
                                    placeholder: "",
                                    inputFormat: "isoDateTime",
                                    displayFormat: null,
                                    outputFormat: null,
                                    min: null,
                                    max: null,
                                    skipOptionalPartCharacter: "",
                                    i18n: {
                                        dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                                        monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                                        ordinalSuffix: [ "st", "nd", "rd", "th" ]
                                    },
                                    preValidation: function(e, t, i, n, a, r, o, s) {
                                        if (s) return !0;
                                        if (isNaN(i) && e[t] !== i) {
                                            var l = E(t, a);
                                            if (l.nextMatch && l.nextMatch[0] === i && l.targetMatch[0].length > 1) {
                                                var c = g[l.targetMatch[0]][0];
                                                if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                                {
                                                    fuzzy: !0,
                                                    buffer: e,
                                                    refreshFromBuffer: {
                                                        start: t - 1,
                                                        end: t + 1
                                                    },
                                                    pos: t + 1
                                                };
                                            }
                                        }
                                        return !0;
                                    },
                                    postValidation: function(e, t, i, n, a, r, o, l) {
                                        var c, u;
                                        if (o) return !0;
                                        if (!1 === n && (((c = E(t + 1, a)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]] || (c = E(t + 2, a)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]]) && (u = g[c.targetMatch[0]][0]), 
                                        void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(i + "0") ? (e[t] = i, 
                                        e[t + 1] = "0", n = {
                                            pos: t + 2,
                                            caret: t
                                        }) : new RegExp(u).test("0" + i) && (e[t] = "0", e[t + 1] = i, n = {
                                            pos: t + 2
                                        })), !1 === n)) return n;
                                        if (n.fuzzy && (e = n.buffer, t = n.pos), (c = E(t, a)).targetMatch && c.targetMatch[0] && void 0 !== g[c.targetMatch[0]]) {
                                            var f = g[c.targetMatch[0]];
                                            u = f[0];
                                            var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                            if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), 
                                            "year" == f[2]) for (var p = s.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                                            delete r.validPositions[h];
                                        }
                                        var m = n, y = _(e.join(""), a.inputFormat, a);
                                        return m && !isNaN(y.date.getTime()) && (a.prefillYear && (m = function(e, t, i) {
                                            if (e.year !== e.rawyear) {
                                                var n = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = n.slice(0, a.length), o = n.slice(a.length);
                                                if (2 === a.length && a === r) {
                                                    var s = new Date(v, e.month - 1, e.day);
                                                    e.day == s.getDate() && (!i.max || i.max.date.getTime() >= s.getTime()) && (e.date.setFullYear(v), 
                                                    e.year = n, t.insert = [ {
                                                        pos: t.pos + 1,
                                                        c: o[0]
                                                    }, {
                                                        pos: t.pos + 2,
                                                        c: o[1]
                                                    } ]);
                                                }
                                            }
                                            return t;
                                        }(y, m, a)), m = function(e, t, i, n, a) {
                                            if (!t) return t;
                                            if (t && i.min && !isNaN(i.min.date.getTime())) {
                                                var r;
                                                for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                                    var o;
                                                    if ((o = x(r)) && o[3]) {
                                                        for (var s = o[1], l = e[o[2]], c = i.min[o[2]], u = i.max ? i.max[o[2]] : c, f = [], d = !1, p = 0; p < c.length; p++) void 0 !== n.validPositions[p + r.index] || d ? (f[p] = l[p], 
                                                        d = d || l[p] > c[p]) : (f[p] = c[p], "year" === o[2] && l.length - 1 == p && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                                        "ampm" === o[2] && c != u && i.min.date.getTime() > e.date.getTime() && (f[p] = u[p]));
                                                        s.call(e._date, f.join(""));
                                                    }
                                                }
                                                t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                                            }
                                            return t && i.max && (isNaN(i.max.date.getTime()) || (t = i.max.date.getTime() >= e.date.getTime())), 
                                            t;
                                        }(y, m = w.call(this, y, m, a), a, r)), void 0 !== t && m && n.pos !== t ? {
                                            buffer: S(a.inputFormat, y, a).split(""),
                                            refreshFromBuffer: {
                                                start: t,
                                                end: n.pos
                                            },
                                            pos: n.caret || n.pos
                                        } : m;
                                    },
                                    onKeyDown: function(e, t, i, n) {
                                        e.ctrlKey && e.key === a.keys.ArrowRight && (this.inputmask._valueSet(O(new Date, n)), 
                                        p(this).trigger("setvalue"));
                                    },
                                    onUnMask: function(e, t, i) {
                                        return t ? S(i.outputFormat, _(e, i.inputFormat, i), i, !0) : t;
                                    },
                                    casing: function(e, t, i, n) {
                                        return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                                    },
                                    onBeforeMask: function(e, t) {
                                        return "[object Date]" === Object.prototype.toString.call(e) && (e = O(e, t)), e;
                                    },
                                    insertMode: !1,
                                    insertModeVisual: !1,
                                    shiftPositions: !1,
                                    keepStatic: !1,
                                    inputmode: "numeric",
                                    prefillYear: !0
                                }
                            });
                        },
                        3851: function(e, t, i) {
                            var n, a = (n = i(2394)) && n.__esModule ? n : {
                                default: n
                            }, r = i(8711), o = i(4713);
                            a.default.extendDefinitions({
                                A: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "&": {
                                    validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "#": {
                                    validator: "[0-9A-Fa-f]",
                                    casing: "upper"
                                }
                            });
                            var s = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
                            function l(e, t, i, n, a) {
                                return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                                s.test(e);
                            }
                            a.default.extendAliases({
                                cssunit: {
                                    regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                                },
                                url: {
                                    regex: "(https?|ftp)://.*",
                                    autoUnmask: !1,
                                    keepStatic: !1,
                                    tabThrough: !0
                                },
                                ip: {
                                    mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                                    definitions: {
                                        i: {
                                            validator: l
                                        },
                                        j: {
                                            validator: l
                                        },
                                        k: {
                                            validator: l
                                        },
                                        l: {
                                            validator: l
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "decimal",
                                    substitutes: {
                                        ",": "."
                                    }
                                },
                                email: {
                                    mask: function(e) {
                                        var t = e.separator, i = e.quantifier, n = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = n;
                                        if (t) for (var r = 0; r < i; r++) a += "[".concat(t).concat(n, "]");
                                        return a;
                                    },
                                    greedy: !1,
                                    casing: "lower",
                                    separator: null,
                                    quantifier: 5,
                                    skipOptionalPartCharacter: "",
                                    onBeforePaste: function(e, t) {
                                        return (e = e.toLowerCase()).replace("mailto:", "");
                                    },
                                    definitions: {
                                        "*": {
                                            validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                                        },
                                        "-": {
                                            validator: "[0-9A-Za-z-]"
                                        }
                                    },
                                    onUnMask: function(e, t, i) {
                                        return e;
                                    },
                                    inputmode: "email"
                                },
                                mac: {
                                    mask: "##:##:##:##:##:##"
                                },
                                vin: {
                                    mask: "V{13}9{4}",
                                    definitions: {
                                        V: {
                                            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                            casing: "upper"
                                        }
                                    },
                                    clearIncomplete: !0,
                                    autoUnmask: !0
                                },
                                ssn: {
                                    mask: "999-99-9999",
                                    postValidation: function(e, t, i, n, a, s, l) {
                                        var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                                        return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                                    }
                                }
                            });
                        },
                        207: function(e, t, i) {
                            var n = s(i(2394)), a = s(i(7184)), r = i(8711), o = i(2839);
                            function s(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var l = n.default.dependencyLib;
                            function c(e, t) {
                                for (var i = "", a = 0; a < e.length; a++) n.default.prototype.definitions[e.charAt(a)] || t.definitions[e.charAt(a)] || t.optionalmarker[0] === e.charAt(a) || t.optionalmarker[1] === e.charAt(a) || t.quantifiermarker[0] === e.charAt(a) || t.quantifiermarker[1] === e.charAt(a) || t.groupmarker[0] === e.charAt(a) || t.groupmarker[1] === e.charAt(a) || t.alternatormarker === e.charAt(a) ? i += "\\" + e.charAt(a) : i += e.charAt(a);
                                return i;
                            }
                            function u(e, t, i, n) {
                                if (e.length > 0 && t > 0 && (!i.digitsOptional || n)) {
                                    var a = e.indexOf(i.radixPoint), r = !1;
                                    i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(i.radixPoint), 
                                    a = e.length - 1);
                                    for (var o = 1; o <= t; o++) isFinite(e[a + o]) || (e[a + o] = "0");
                                }
                                return r && e.push(i.negationSymbol.back), e;
                            }
                            function f(e, t) {
                                var i = 0;
                                for (var n in "+" === e && (i = r.seekNext.call(this, t.validPositions.length - 1)), 
                                t.tests) if ((n = parseInt(n)) >= i) for (var a = 0, o = t.tests[n].length; a < o; a++) if ((void 0 === t.validPositions[n] || "-" === e) && t.tests[n][a].match.def === e) return n + (void 0 !== t.validPositions[n] && "-" !== e ? 1 : 0);
                                return i;
                            }
                            function d(e, t) {
                                for (var i = -1, n = 0, a = t.validPositions.length; n < a; n++) {
                                    var r = t.validPositions[n];
                                    if (r && r.match.def === e) {
                                        i = n;
                                        break;
                                    }
                                }
                                return i;
                            }
                            function p(e, t, i, n, a) {
                                var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || n && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                                return a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                                    insert: {
                                        pos: r === i ? r + 1 : r,
                                        c: a.radixPoint
                                    },
                                    pos: i
                                } : o;
                            }
                            n.default.extendAliases({
                                numeric: {
                                    mask: function(e) {
                                        e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                                        " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                                        "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                                        var t = "0", i = e.radixPoint;
                                        !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                                        e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                                        "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                                        e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                                        e.numericInput = !0);
                                        var n, r = "[+]";
                                        if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                                        e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                                        e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                                        r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                            var o = e.digits.toString().split(",");
                                            isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (n = r + i + t + "{0," + e.digits + "}", 
                                            e.keepStatic = !0) : r += i + t + "{" + e.digits + "}");
                                        } else e.inputmode = "numeric";
                                        return r += c(e.suffix, e), r += "[-]", n && (r = [ n + c(e.suffix, e) + "[-]", r ]), 
                                        e.greedy = !1, function(e) {
                                            void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                            a.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                            e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                            null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, a.default)(e.groupSeparator), "g"), ""), 
                                            "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                            isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                                        }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                                        r;
                                    },
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "999){+|1}";
                                    },
                                    digits: "*",
                                    digitsOptional: !0,
                                    enforceDigitsOnBlur: !1,
                                    radixPoint: ".",
                                    positionCaretOnClick: "radixFocus",
                                    _radixDance: !0,
                                    groupSeparator: "",
                                    allowMinus: !0,
                                    negationSymbol: {
                                        front: "-",
                                        back: ""
                                    },
                                    prefix: "",
                                    suffix: "",
                                    min: null,
                                    max: null,
                                    SetMaxOnOverflow: !1,
                                    step: 1,
                                    inputType: "text",
                                    unmaskAsNumber: !1,
                                    roundingFN: Math.round,
                                    inputmode: "decimal",
                                    shortcuts: {
                                        k: "1000",
                                        m: "1000000"
                                    },
                                    placeholder: "0",
                                    greedy: !1,
                                    rightAlign: !0,
                                    insertMode: !0,
                                    autoUnmask: !1,
                                    skipOptionalPartCharacter: "",
                                    usePrototypeDefinitions: !1,
                                    stripLeadingZeroes: !0,
                                    substituteRadixPoint: !0,
                                    definitions: {
                                        0: {
                                            validator: p
                                        },
                                        1: {
                                            validator: p,
                                            definitionSymbol: "9"
                                        },
                                        9: {
                                            validator: "[0-9０-９٠-٩۰-۹]",
                                            definitionSymbol: "*"
                                        },
                                        "+": {
                                            validator: function(e, t, i, n, a) {
                                                return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                                            }
                                        },
                                        "-": {
                                            validator: function(e, t, i, n, a) {
                                                return a.allowMinus && e === a.negationSymbol.back;
                                            }
                                        }
                                    },
                                    preValidation: function(e, t, i, n, a, r, o, s) {
                                        if (!1 !== a.__financeInput && i === a.radixPoint) return !1;
                                        var l = e.indexOf(a.radixPoint), c = t;
                                        if (t = function(e, t, i, n, a) {
                                            return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= i && (i > 0 || t == a.radixPoint) && (void 0 === n.validPositions[e - 1] || n.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), 
                                            e;
                                        }(t, i, l, r, a), "-" === i || i === a.negationSymbol.front) {
                                            if (!0 !== a.allowMinus) return !1;
                                            var u = !1, p = d("+", r), h = d("-", r);
                                            return -1 !== p && (u = [ p, h ]), !1 !== u ? {
                                                remove: u,
                                                caret: c - a.negationSymbol.back.length
                                            } : {
                                                insert: [ {
                                                    pos: f.call(this, "+", r),
                                                    c: a.negationSymbol.front,
                                                    fromIsValid: !0
                                                }, {
                                                    pos: f.call(this, "-", r),
                                                    c: a.negationSymbol.back,
                                                    fromIsValid: void 0
                                                } ],
                                                caret: c + a.negationSymbol.back.length
                                            };
                                        }
                                        if (i === a.groupSeparator) return {
                                            caret: c
                                        };
                                        if (s) return !0;
                                        if (-1 !== l && !0 === a._radixDance && !1 === n && i === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && l !== t) return {
                                            caret: a._radixDance && t === l - 1 ? l + 1 : l
                                        };
                                        if (!1 === a.__financeInput) if (n) {
                                            if (a.digitsOptional) return {
                                                rewritePosition: o.end
                                            };
                                            if (!a.digitsOptional) {
                                                if (o.begin > l && o.end <= l) return i === a.radixPoint ? {
                                                    insert: {
                                                        pos: l + 1,
                                                        c: "0",
                                                        fromIsValid: !0
                                                    },
                                                    rewritePosition: l
                                                } : {
                                                    rewritePosition: l + 1
                                                };
                                                if (o.begin < l) return {
                                                    rewritePosition: o.begin - 1
                                                };
                                            }
                                        } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                            rewritePosition: l
                                        };
                                        return {
                                            rewritePosition: t
                                        };
                                    },
                                    postValidation: function(e, t, i, n, a, r, o) {
                                        if (!1 === n) return n;
                                        if (o) return !0;
                                        if (null !== a.min || null !== a.max) {
                                            var s = a.onUnMask(e.slice().reverse().join(""), void 0, l.extend({}, a, {
                                                unmaskAsNumber: !0
                                            }));
                                            if (null !== a.min && s < a.min && (s.toString().length > a.min.toString().length || s < 0)) return !1;
                                            if (null !== a.max && s > a.max) return !!a.SetMaxOnOverflow && {
                                                refreshFromBuffer: !0,
                                                buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                            };
                                        }
                                        return n;
                                    },
                                    onUnMask: function(e, t, i) {
                                        if ("" === t && !0 === i.nullable) return t;
                                        var n = e.replace(i.prefix, "");
                                        return n = (n = n.replace(i.suffix, "")).replace(new RegExp((0, a.default)(i.groupSeparator), "g"), ""), 
                                        "" !== i.placeholder.charAt(0) && (n = n.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                                        i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== n.indexOf(i.radixPoint) && (n = n.replace(a.default.call(this, i.radixPoint), ".")), 
                                        n = (n = n.replace(new RegExp("^" + (0, a.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        a.default)(i.negationSymbol.back) + "$"), ""), Number(n)) : n;
                                    },
                                    isComplete: function(e, t) {
                                        var i = (t.numericInput ? e.slice().reverse() : e).join("");
                                        return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, a.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        a.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                                        a.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                                        a.default)(t.radixPoint), ".")), isFinite(i);
                                    },
                                    onBeforeMask: function(e, t) {
                                        var i = t.radixPoint || ",";
                                        isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                                        var n = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, r = e.split(i), o = r[0].replace(/[^\-0-9]/g, ""), s = r.length > 1 ? r[1].replace(/[^0-9]/g, "") : "", l = r.length > 1;
                                        e = o + ("" !== s ? i + s : s);
                                        var c = 0;
                                        if ("" !== i && (c = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                                        "" !== s || !t.digitsOptional)) {
                                            var f = Math.pow(10, c || 1);
                                            e = e.replace((0, a.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(c)), 
                                            e = e.toString().replace(".", i);
                                        }
                                        if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                                        null !== t.min || null !== t.max) {
                                            var d = e.toString().replace(i, ".");
                                            null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                                        }
                                        return n && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), c, t, l).join("");
                                    },
                                    onBeforeWrite: function(e, t, i, n) {
                                        function r(e, t) {
                                            if (!1 !== n.__financeInput || t) {
                                                var i = e.indexOf(n.radixPoint);
                                                -1 !== i && e.splice(i, 1);
                                            }
                                            if ("" !== n.groupSeparator) for (;-1 !== (i = e.indexOf(n.groupSeparator)); ) e.splice(i, 1);
                                            return e;
                                        }
                                        var o, s;
                                        if (n.stripLeadingZeroes && (s = function(e, t) {
                                            var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, a.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                            a.default)(t.prefix) + ")(.*)(" + (0, a.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                            a.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), n = i ? i[2] : "", r = !1;
                                            return n && (n = n.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(n)), 
                                            !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < n.length)) && r;
                                        }(t, n))) for (var c = t.join("").lastIndexOf(s[0].split("").reverse().join("")) - (s[0] == s.input ? 0 : 1), f = s[0] == s.input ? 1 : 0, d = s[0].length - f; d > 0; d--) delete this.maskset.validPositions[c + d], 
                                        delete t[c + d];
                                        if (e) switch (e.type) {
                                          case "blur":
                                          case "checkval":
                                            if (null !== n.min) {
                                                var p = n.onUnMask(t.slice().reverse().join(""), void 0, l.extend({}, n, {
                                                    unmaskAsNumber: !0
                                                }));
                                                if (null !== n.min && p < n.min) return {
                                                    refreshFromBuffer: !0,
                                                    buffer: u(n.min.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                                };
                                            }
                                            if (t[t.length - 1] === n.negationSymbol.front) {
                                                var h = new RegExp("(^" + ("" != n.negationSymbol.front ? (0, a.default)(n.negationSymbol.front) + "?" : "") + (0, 
                                                a.default)(n.prefix) + ")(.*)(" + (0, a.default)(n.suffix) + ("" != n.negationSymbol.back ? (0, 
                                                a.default)(n.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                                0 == (h ? h[2] : "") && (o = {
                                                    refreshFromBuffer: !0,
                                                    buffer: [ 0 ]
                                                });
                                            } else if ("" !== n.radixPoint) t.indexOf(n.radixPoint) === n.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + n.suffix.length) : (t.splice(0, 1 + n.suffix.length), 
                                            o = {
                                                refreshFromBuffer: !0,
                                                buffer: r(t)
                                            }));
                                            if (n.enforceDigitsOnBlur) {
                                                var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                                o.refreshFromBuffer = !0, o.buffer = u(v, n.digits, n, !0).reverse();
                                            }
                                        }
                                        return o;
                                    },
                                    onKeyDown: function(e, t, i, n) {
                                        var a, r = l(this);
                                        if (3 != e.location) {
                                            var s, c = e.key;
                                            if ((s = n.shortcuts && n.shortcuts[c]) && s.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(s)), 
                                            r.trigger("setvalue"), !1;
                                        }
                                        if (e.ctrlKey) switch (e.key) {
                                          case o.keys.ArrowUp:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(n.step)), 
                                            r.trigger("setvalue"), !1;

                                          case o.keys.ArrowDown:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(n.step)), 
                                            r.trigger("setvalue"), !1;
                                        }
                                        if (!e.shiftKey && (e.key === o.keys.Delete || e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI) && i.begin !== t.length) {
                                            if (t[e.key === o.keys.Delete ? i.begin - 1 : i.end] === n.negationSymbol.front) return a = t.slice().reverse(), 
                                            "" !== n.negationSymbol.front && a.shift(), "" !== n.negationSymbol.back && a.pop(), 
                                            r.trigger("setvalue", [ a.join(""), i.begin ]), !1;
                                            if (!0 === n._radixDance) {
                                                var f = t.indexOf(n.radixPoint);
                                                if (n.digitsOptional) {
                                                    if (0 === f) return (a = t.slice().reverse()).pop(), r.trigger("setvalue", [ a.join(""), i.begin >= a.length ? a.length : i.begin ]), 
                                                    !1;
                                                } else if (-1 !== f && (i.begin < f || i.end < f || e.key === o.keys.Delete && (i.begin === f || i.begin - 1 === f))) {
                                                    var d = void 0;
                                                    return i.begin === i.end && (e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI ? i.begin++ : e.key === o.keys.Delete && i.begin - 1 === f && (d = l.extend({}, i), 
                                                    i.begin--, i.end--)), (a = t.slice().reverse()).splice(a.length - i.begin, i.begin - i.end + 1), 
                                                    a = u(a, n.digits, n).join(""), d && (i = d), r.trigger("setvalue", [ a, i.begin >= a.length ? f + 1 : i.begin ]), 
                                                    !1;
                                                }
                                            }
                                        }
                                    }
                                },
                                currency: {
                                    prefix: "",
                                    groupSeparator: ",",
                                    alias: "numeric",
                                    digits: 2,
                                    digitsOptional: !1
                                },
                                decimal: {
                                    alias: "numeric"
                                },
                                integer: {
                                    alias: "numeric",
                                    inputmode: "numeric",
                                    digits: 0
                                },
                                percentage: {
                                    alias: "numeric",
                                    min: 0,
                                    max: 100,
                                    suffix: " %",
                                    digits: 0,
                                    allowMinus: !1
                                },
                                indianns: {
                                    alias: "numeric",
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                                    },
                                    groupSeparator: ",",
                                    radixPoint: ".",
                                    placeholder: "0",
                                    digits: 2,
                                    digitsOptional: !1
                                }
                            });
                        },
                        9380: function(e, t, i) {
                            var n;
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var a = ((n = i(8741)) && n.__esModule ? n : {
                                default: n
                            }).default ? window : {};
                            t.default = a;
                        },
                        7760: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.HandleNativePlaceholder = function(e, t) {
                                var i = e ? e.inputmask : this;
                                if (s.ie) {
                                    if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                                        var n = r.getBuffer.call(i).slice(), a = e.inputmask._valueGet();
                                        if (a !== t) {
                                            var o = r.getLastValidPosition.call(i);
                                            -1 === o && a === r.getBufferTemplate.call(i).join("") ? n = [] : -1 !== o && u.call(i, n), 
                                            d(e, n);
                                        }
                                    }
                                } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                            }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                                var t = e ? e.inputmask : this, i = t.opts, n = t.maskset;
                                if (e) {
                                    if (void 0 === e.inputmask) return e.value;
                                    e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                                }
                                for (var a = [], o = n.validPositions, s = 0, l = o.length; s < l; s++) o[s] && o[s].match && (1 != o[s].match.static || Array.isArray(n.metadata) && !0 !== o[s].generatedInput) && a.push(o[s].input);
                                var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                                if ("function" == typeof i.onUnMask) {
                                    var f = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join("");
                                    u = i.onUnMask.call(t, f, u, i);
                                }
                                return u;
                            }, t.writeBuffer = d;
                            var n = i(2839), a = i(4713), r = i(8711), o = i(7215), s = i(9845), l = i(6030);
                            function c(e, t) {
                                var i = e ? e.inputmask : this, n = i.opts;
                                e.inputmask.refreshValue = !1, "function" == typeof n.onBeforeMask && (t = n.onBeforeMask.call(i, t, n) || t), 
                                f(e, !0, !1, t = (t || "").toString().split("")), i.undoValue = i._valueGet(!0), 
                                (n.clearMaskOnLostFocus || n.clearIncomplete) && e.inputmask._valueGet() === r.getBufferTemplate.call(i).join("") && -1 === r.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                            }
                            function u(e) {
                                e.length = 0;
                                for (var t, i = a.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                                return e;
                            }
                            function f(e, t, i, n, s) {
                                var c = e ? e.inputmask : this, u = c.maskset, f = c.opts, p = c.dependencyLib, h = n.slice(), v = "", m = -1, g = void 0, y = f.skipOptionalPartCharacter;
                                f.skipOptionalPartCharacter = "", r.resetMaskSet.call(c), u.tests = {}, m = f.radixPoint ? r.determineNewCaretPosition.call(c, {
                                    begin: 0,
                                    end: 0
                                }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, u.p = m, c.caretPos = {
                                    begin: m
                                };
                                var k = [], b = c.caretPos;
                                if (h.forEach((function(e, t) {
                                    if (void 0 !== e) {
                                        var n = new p.Event("_checkval");
                                        n.key = e, v += e;
                                        var o = r.getLastValidPosition.call(c, void 0, !0);
                                        !function(e, t) {
                                            for (var i = a.getMaskTemplate.call(c, !0, 0).slice(e, r.seekNext.call(c, e, !1, !1)).join("").replace(/'/g, ""), n = i.indexOf(t); n > 0 && " " === i[n - 1]; ) n--;
                                            var o = 0 === n && !r.isMask.call(c, e) && (a.getTest.call(c, e).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e).match.static && a.getTest.call(c, e).match.nativeDef === "'" + t.charAt(0) || " " === a.getTest.call(c, e).match.nativeDef && (a.getTest.call(c, e + 1).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e + 1).match.static && a.getTest.call(c, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                            if (!o && n > 0 && !r.isMask.call(c, e, !1, !0)) {
                                                var s = r.seekNext.call(c, e);
                                                c.caretPos.begin < s && (c.caretPos = {
                                                    begin: s
                                                });
                                            }
                                            return o;
                                        }(m, v) ? (g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, c.caretPos.begin)) && (m = c.caretPos.begin + 1, 
                                        v = "") : g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, o + 1), g ? (void 0 !== g.pos && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static && void 0 === u.validPositions[g.pos].alternation && (k.push(g.pos), 
                                        c.isRTL || (g.forwardPosition = g.pos + 1)), d.call(c, void 0, r.getBuffer.call(c), g.forwardPosition, n, !1), 
                                        c.caretPos = {
                                            begin: g.forwardPosition,
                                            end: g.forwardPosition
                                        }, b = c.caretPos) : void 0 === u.validPositions[t] && h[t] === a.getPlaceholder.call(c, t) && r.isMask.call(c, t, !0) ? c.caretPos.begin++ : c.caretPos = b;
                                    }
                                })), k.length > 0) {
                                    var x, P, w = r.seekNext.call(c, -1, void 0, !1);
                                    if (!o.isComplete.call(c, r.getBuffer.call(c)) && k.length <= w || o.isComplete.call(c, r.getBuffer.call(c)) && k.length > 0 && k.length !== w && 0 === k[0]) for (var S = w; void 0 !== (x = k.shift()); ) {
                                        var M = new p.Event("_checkval");
                                        if ((P = u.validPositions[x]).generatedInput = !0, M.key = P.input, (g = l.EventHandlers.keypressEvent.call(c, M, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static) k.push(g.pos); else if (!g) break;
                                        S++;
                                    }
                                }
                                t && d.call(c, e, r.getBuffer.call(c), g ? g.forwardPosition : c.caretPos.begin, s || new p.Event("checkval"), s && ("input" === s.type && c.undoValue !== r.getBuffer.call(c).join("") || "paste" === s.type)), 
                                f.skipOptionalPartCharacter = y;
                            }
                            function d(e, t, i, a, s) {
                                var l = e ? e.inputmask : this, c = l.opts, u = l.dependencyLib;
                                if (a && "function" == typeof c.onBeforeWrite) {
                                    var f = c.onBeforeWrite.call(l, a, t, i, c);
                                    if (f) {
                                        if (f.refreshFromBuffer) {
                                            var d = f.refreshFromBuffer;
                                            o.refreshFromBuffer.call(l, !0 === d ? d : d.start, d.end, f.buffer || t), t = r.getBuffer.call(l, !0);
                                        }
                                        void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                                    }
                                }
                                if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || r.caret.call(l, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.key === n.keys.Delete || a.key === n.keys.Backspace)), 
                                !0 === s)) {
                                    var p = u(e), h = e.inputmask._valueGet();
                                    e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                                        h === r.getBufferTemplate.call(l).join("") ? p.trigger("cleared") : !0 === o.isComplete.call(l, t) && p.trigger("complete");
                                    }), 0);
                                }
                            }
                        },
                        2394: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = i(157), a = m(i(4963)), r = m(i(9380)), o = i(2391), s = i(4713), l = i(8711), c = i(7215), u = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
                            function v(e) {
                                return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, v(e);
                            }
                            function m(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var g = r.default.document, y = "_inputmask_opts";
                            function k(e, t, i) {
                                if (h.default) {
                                    if (!(this instanceof k)) return new k(e, t, i);
                                    this.dependencyLib = a.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                                    !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                                    e && (t.alias = e)), this.opts = a.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                                    this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                                    this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, 
                                    this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, 
                                    this.isComposing = !1, this.hasAlternator = !1;
                                }
                            }
                            function b(e, t, i) {
                                var n = k.prototype.aliases[e];
                                return n ? (n.alias && b(n.alias, void 0, i), a.default.extend(!0, i, n), a.default.extend(!0, i, t), 
                                !0) : (null === i.mask && (i.mask = e), !1);
                            }
                            k.prototype = {
                                dataAttribute: "data-inputmask",
                                defaults: p.default,
                                definitions: d.default,
                                aliases: {},
                                masksCache: {},
                                get isRTL() {
                                    return this.opts.isRTL || this.opts.numericInput;
                                },
                                mask: function(e) {
                                    var t = this;
                                    return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                                    (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : [].slice.call(e)).forEach((function(e, i) {
                                        var s = a.default.extend(!0, {}, t.opts);
                                        if (function(e, t, i, n) {
                                            function o(t, a) {
                                                var o = "" === n ? t : n + "-" + t;
                                                null !== (a = void 0 !== a ? a : e.getAttribute(o)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = r.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), 
                                                i[t] = a);
                                            }
                                            if (!0 === t.importDataAttributes) {
                                                var s, l, c, u, f = e.getAttribute(n);
                                                if (f && "" !== f && (f = f.replace(/'/g, '"'), l = JSON.parse("{" + f + "}")), 
                                                l) for (u in c = void 0, l) if ("alias" === u.toLowerCase()) {
                                                    c = l[u];
                                                    break;
                                                }
                                                for (s in o("alias", c), i.alias && b(i.alias, i, t), t) {
                                                    if (l) for (u in c = void 0, l) if (u.toLowerCase() === s.toLowerCase()) {
                                                        c = l[u];
                                                        break;
                                                    }
                                                    o(s, c);
                                                }
                                            }
                                            a.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                            ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                            t.isRTL = !0);
                                            return Object.keys(i).length;
                                        }(e, s, a.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                            var l = (0, o.generateMaskSet)(s, t.noMasksCache);
                                            void 0 !== l && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                            e.inputmask = new k(void 0, void 0, !0), e.inputmask.opts = s, e.inputmask.noMasksCache = t.noMasksCache, 
                                            e.inputmask.userOptions = a.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                            e.inputmask.$el = (0, a.default)(e), e.inputmask.maskset = l, a.default.data(e, y, t.userOptions), 
                                            n.mask.call(e.inputmask));
                                        }
                                    })), e && e[0] && e[0].inputmask || this;
                                },
                                option: function(e, t) {
                                    return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (a.default.extend(this.userOptions, e), 
                                    this.el && !0 !== t && this.mask(this.el), this) : void 0;
                                },
                                unmaskedvalue: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    void 0 === this.el || void 0 !== e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        u.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts);
                                    }
                                    return u.unmaskedvalue.call(this, this.el);
                                },
                                remove: function() {
                                    if (this.el) {
                                        a.default.data(this.el, y, null);
                                        var e = this.opts.autoUnmask ? (0, u.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                                        e !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                                        f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                            get: this.__valueGet,
                                            set: this.__valueSet,
                                            configurable: !0
                                        }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                                        this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                                    }
                                    return this.el;
                                },
                                getemptymask: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    (this.isRTL ? l.getBufferTemplate.call(this).reverse() : l.getBufferTemplate.call(this)).join("");
                                },
                                hasMaskedValue: function() {
                                    return !this.opts.autoUnmask;
                                },
                                isComplete: function() {
                                    return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    c.isComplete.call(this, l.getBuffer.call(this));
                                },
                                getmetadata: function() {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    Array.isArray(this.maskset.metadata)) {
                                        var e = s.getMaskTemplate.call(this, !0, 0, !1).join("");
                                        return this.maskset.metadata.forEach((function(t) {
                                            return t.mask !== e || (e = t, !1);
                                        })), e;
                                    }
                                    return this.maskset.metadata;
                                },
                                isValid: function(e) {
                                    if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                                    e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        u.checkVal.call(this, void 0, !0, !1, t);
                                    } else e = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                                    for (var i = l.getBuffer.call(this), n = l.determineLastRequiredPosition.call(this), a = i.length - 1; a > n && !l.isMask.call(this, a); a--) ;
                                    return i.splice(n, a + 1 - n), c.isComplete.call(this, i) && e === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""));
                                },
                                format: function(e, t) {
                                    this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                                    var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                    u.checkVal.call(this, void 0, !0, !1, i);
                                    var n = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                                    return t ? {
                                        value: n,
                                        metadata: this.getmetadata()
                                    } : n;
                                },
                                setValue: function(e) {
                                    this.el && (0, a.default)(this.el).trigger("setvalue", [ e ]);
                                },
                                analyseMask: o.analyseMask
                            }, k.extendDefaults = function(e) {
                                a.default.extend(!0, k.prototype.defaults, e);
                            }, k.extendDefinitions = function(e) {
                                a.default.extend(!0, k.prototype.definitions, e);
                            }, k.extendAliases = function(e) {
                                a.default.extend(!0, k.prototype.aliases, e);
                            }, k.format = function(e, t, i) {
                                return k(t).format(e, i);
                            }, k.unmask = function(e, t) {
                                return k(t).unmaskedvalue(e);
                            }, k.isValid = function(e, t) {
                                return k(t).isValid(e);
                            }, k.remove = function(e) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask && e.inputmask.remove();
                                }));
                            }, k.setValue = function(e, t) {
                                "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask ? e.inputmask.setValue(t) : (0, a.default)(e).trigger("setvalue", [ t ]);
                                }));
                            }, k.dependencyLib = a.default, r.default.Inputmask = k;
                            var x = k;
                            t.default = x;
                        },
                        5296: function(e, t, i) {
                            function n(e) {
                                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, n(e);
                            }
                            var a = h(i(9380)), r = h(i(2394)), o = h(i(8741));
                            function s(e, t) {
                                for (var i = 0; i < t.length; i++) {
                                    var a = t[i];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, (r = a.key, o = void 0, o = function(e, t) {
                                        if ("object" !== n(e) || null === e) return e;
                                        var i = e[Symbol.toPrimitive];
                                        if (void 0 !== i) {
                                            var a = i.call(e, t || "default");
                                            if ("object" !== n(a)) return a;
                                            throw new TypeError("@@toPrimitive must return a primitive value.");
                                        }
                                        return ("string" === t ? String : Number)(e);
                                    }(r, "string"), "symbol" === n(o) ? o : String(o)), a);
                                }
                                var r, o;
                            }
                            function l(e) {
                                var t = f();
                                return function() {
                                    var i, a = p(e);
                                    if (t) {
                                        var r = p(this).constructor;
                                        i = Reflect.construct(a, arguments, r);
                                    } else i = a.apply(this, arguments);
                                    return function(e, t) {
                                        if (t && ("object" === n(t) || "function" == typeof t)) return t;
                                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                        return function(e) {
                                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return e;
                                        }(e);
                                    }(this, i);
                                };
                            }
                            function c(e) {
                                var t = "function" == typeof Map ? new Map : void 0;
                                return c = function(e) {
                                    if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                                    var i;
                                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== t) {
                                        if (t.has(e)) return t.get(e);
                                        t.set(e, n);
                                    }
                                    function n() {
                                        return u(e, arguments, p(this).constructor);
                                    }
                                    return n.prototype = Object.create(e.prototype, {
                                        constructor: {
                                            value: n,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), d(n, e);
                                }, c(e);
                            }
                            function u(e, t, i) {
                                return u = f() ? Reflect.construct.bind() : function(e, t, i) {
                                    var n = [ null ];
                                    n.push.apply(n, t);
                                    var a = new (Function.bind.apply(e, n));
                                    return i && d(a, i.prototype), a;
                                }, u.apply(null, arguments);
                            }
                            function f() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                            function d(e, t) {
                                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                    return e.__proto__ = t, e;
                                }, d(e, t);
                            }
                            function p(e) {
                                return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e);
                                }, p(e);
                            }
                            function h(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var v = a.default.document;
                            if (o.default && v && v.head && v.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                                var m = function(e) {
                                    !function(e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                        e.prototype = Object.create(t && t.prototype, {
                                            constructor: {
                                                value: e,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), Object.defineProperty(e, "prototype", {
                                            writable: !1
                                        }), t && d(e, t);
                                    }(o, e);
                                    var t, i, n, a = l(o);
                                    function o() {
                                        var e;
                                        !function(e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        }(this, o);
                                        var t = (e = a.call(this)).getAttributeNames(), i = e.attachShadow({
                                            mode: "closed"
                                        }), n = v.createElement("input");
                                        for (var s in n.type = "text", i.appendChild(n), t) Object.prototype.hasOwnProperty.call(t, s) && n.setAttribute(t[s], e.getAttribute(t[s]));
                                        var l = new r.default;
                                        return l.dataAttribute = "", l.mask(n), n.inputmask.shadowRoot = i, e;
                                    }
                                    return t = o, i && s(t.prototype, i), n && s(t, n), Object.defineProperty(t, "prototype", {
                                        writable: !1
                                    }), t;
                                }(c(HTMLElement));
                                a.default.customElements.define("input-mask", m);
                            }
                        },
                        2839: function(e, t) {
                            function i(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != i) {
                                        var n, a, r, o, s = [], l = !0, c = !1;
                                        try {
                                            if (r = (i = i.call(e)).next, 0 === t) {
                                                if (Object(i) !== i) return;
                                                l = !1;
                                            } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return s;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return n(e, t);
                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return n(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function n(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                                return n;
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                                return r[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                            }, t.toKeyCode = function(e) {
                                return a[e];
                            };
                            var a = {
                                AltGraph: 18,
                                ArrowDown: 40,
                                ArrowLeft: 37,
                                ArrowRight: 39,
                                ArrowUp: 38,
                                Backspace: 8,
                                BACKSPACE_SAFARI: 127,
                                CapsLock: 20,
                                Delete: 46,
                                End: 35,
                                Enter: 13,
                                Escape: 27,
                                Home: 36,
                                Insert: 45,
                                PageDown: 34,
                                PageUp: 33,
                                Space: 32,
                                Tab: 9,
                                c: 67,
                                x: 88,
                                z: 90,
                                Shift: 16,
                                Control: 17,
                                Alt: 18,
                                Pause: 19,
                                Meta_LEFT: 91,
                                Meta_RIGHT: 92,
                                ContextMenu: 93,
                                Process: 229,
                                Unidentified: 229,
                                F1: 112,
                                F2: 113,
                                F3: 114,
                                F4: 115,
                                F5: 116,
                                F6: 117,
                                F7: 118,
                                F8: 119,
                                F9: 120,
                                F10: 121,
                                F11: 122,
                                F12: 123
                            };
                            t.keyCode = a;
                            var r = Object.entries(a).reduce((function(e, t) {
                                var n = i(t, 2), a = n[0], r = n[1];
                                return e[r] = void 0 === e[r] ? a : e[r], e;
                            }), {}), o = Object.entries(a).reduce((function(e, t) {
                                var n = i(t, 2), a = n[0];
                                n[1];
                                return e[a] = "Space" === a ? " " : a, e;
                            }), {});
                            t.keys = o;
                        },
                        2391: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.analyseMask = function(e, t, i) {
                                var n, o, s, l, c, u, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new a.default, v = [], m = [], g = !1;
                                function y(e, n, a) {
                                    a = void 0 !== a ? a : e.matches.length;
                                    var o = e.matches[a - 1];
                                    if (t) {
                                        if (0 === n.indexOf("[") || p && /\\d|\\s|\\w|\\p/i.test(n) || "." === n) {
                                            var s = i.casing ? "i" : "";
                                            /^\\p\{.*}$/i.test(n) && (s += "u"), e.matches.splice(a++, 0, {
                                                fn: new RegExp(n, s),
                                                static: !1,
                                                optionality: !1,
                                                newBlockMarker: void 0 === o ? "master" : o.def !== n,
                                                casing: null,
                                                def: n,
                                                placeholder: void 0,
                                                nativeDef: n
                                            });
                                        } else p && (n = n[n.length - 1]), n.split("").forEach((function(t, n) {
                                            o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                                fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                                static: !0,
                                                optionality: !1,
                                                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                                casing: null,
                                                def: i.staticDefinitionSymbol || t,
                                                placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                                nativeDef: (p ? "'" : "") + t
                                            });
                                        }));
                                        p = !1;
                                    } else {
                                        var l = i.definitions && i.definitions[n] || i.usePrototypeDefinitions && r.default.prototype.definitions[n];
                                        l && !p ? e.matches.splice(a++, 0, {
                                            fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                                this.test = l.validator;
                                            } : new RegExp("."),
                                            static: l.static || !1,
                                            optionality: l.optional || !1,
                                            defOptionality: l.optional || !1,
                                            newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || n),
                                            casing: l.casing,
                                            def: l.definitionSymbol || n,
                                            placeholder: l.placeholder,
                                            nativeDef: n,
                                            generated: l.generated
                                        }) : (e.matches.splice(a++, 0, {
                                            fn: /[a-z]/i.test(i.staticDefinitionSymbol || n) ? new RegExp("[" + (i.staticDefinitionSymbol || n) + "]", i.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== n && !0 !== o.static,
                                            casing: null,
                                            def: i.staticDefinitionSymbol || n,
                                            placeholder: void 0 !== i.staticDefinitionSymbol ? n : void 0,
                                            nativeDef: (p ? "'" : "") + n
                                        }), p = !1);
                                    }
                                }
                                function k() {
                                    if (v.length > 0) {
                                        if (y(l = v[v.length - 1], o), l.isAlternator) {
                                            c = v.pop();
                                            for (var e = 0; e < c.matches.length; e++) c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                                            v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                                        }
                                    } else y(h, o);
                                }
                                function b(e) {
                                    var t = new a.default(!0);
                                    return t.openGroup = !1, t.matches = e, t;
                                }
                                function x() {
                                    if ((s = v.pop()).openGroup = !1, void 0 !== s) if (v.length > 0) {
                                        if ((l = v[v.length - 1]).matches.push(s), l.isAlternator) {
                                            for (var e = (c = v.pop()).matches[0].matches ? c.matches[0].matches.length : 1, t = 0; t < c.matches.length; t++) c.matches[t].isGroup = !1, 
                                            c.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (c.matches[t].matches ? c.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                                            e = c.matches[t].matches ? c.matches[t].matches.length : 1;
                                            v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                                        }
                                    } else h.matches.push(s); else k();
                                }
                                function P(e) {
                                    var t = e.pop();
                                    return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                                }
                                t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                                for (;n = t ? d.exec(e) : f.exec(e); ) {
                                    if (o = n[0], t) {
                                        switch (o.charAt(0)) {
                                          case "?":
                                            o = "{0,1}";
                                            break;

                                          case "+":
                                          case "*":
                                            o = "{" + o + "}";
                                            break;

                                          case "|":
                                            if (0 === v.length) {
                                                var w = b(h.matches);
                                                w.openGroup = !0, v.push(w), h.matches = [], g = !0;
                                            }
                                        }
                                        switch (o) {
                                          case "\\d":
                                            o = "[0-9]";
                                            break;

                                          case "\\p":
                                            o += d.exec(e)[0], o += d.exec(e)[0];
                                        }
                                    }
                                    if (p) k(); else switch (o.charAt(0)) {
                                      case "$":
                                      case "^":
                                        t || k();
                                        break;

                                      case i.escapeChar:
                                        p = !0, t && k();
                                        break;

                                      case i.optionalmarker[1]:
                                      case i.groupmarker[1]:
                                        x();
                                        break;

                                      case i.optionalmarker[0]:
                                        v.push(new a.default(!1, !0));
                                        break;

                                      case i.groupmarker[0]:
                                        v.push(new a.default(!0));
                                        break;

                                      case i.quantifiermarker[0]:
                                        var S = new a.default(!1, !1, !0), M = (o = o.replace(/[{}?]/g, "")).split("|"), _ = M[0].split(","), O = isNaN(_[0]) ? _[0] : parseInt(_[0]), E = 1 === _.length ? O : isNaN(_[1]) ? _[1] : parseInt(_[1]), T = isNaN(M[1]) ? M[1] : parseInt(M[1]);
                                        "*" !== O && "+" !== O || (O = "*" === E ? 0 : 1), S.quantifier = {
                                            min: O,
                                            max: E,
                                            jit: T
                                        };
                                        var j = v.length > 0 ? v[v.length - 1].matches : h.matches;
                                        (n = j.pop()).isGroup || (n = b([ n ])), j.push(n), j.push(S);
                                        break;

                                      case i.alternatormarker:
                                        if (v.length > 0) {
                                            var A = (l = v[v.length - 1]).matches[l.matches.length - 1];
                                            u = l.openGroup && (void 0 === A.matches || !1 === A.isGroup && !1 === A.isAlternator) ? v.pop() : P(l.matches);
                                        } else u = P(h.matches);
                                        if (u.isAlternator) v.push(u); else if (u.alternatorGroup ? (c = v.pop(), u.alternatorGroup = !1) : c = new a.default(!1, !1, !1, !0), 
                                        c.matches.push(u), v.push(c), u.openGroup) {
                                            u.openGroup = !1;
                                            var D = new a.default(!0);
                                            D.alternatorGroup = !0, v.push(D);
                                        }
                                        break;

                                      default:
                                        k();
                                    }
                                }
                                g && x();
                                for (;v.length > 0; ) s = v.pop(), h.matches.push(s);
                                h.matches.length > 0 && (!function e(n) {
                                    n && n.matches && n.matches.forEach((function(a, r) {
                                        var o = n.matches[r + 1];
                                        (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, 
                                        t || (y(a, i.groupmarker[0], 0), !0 !== a.openGroup && y(a, i.groupmarker[1]))), 
                                        e(a);
                                    }));
                                }(h), m.push(h));
                                (i.numericInput || i.isRTL) && function e(t) {
                                    for (var n in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, n)) {
                                        var a = parseInt(n);
                                        if (t.matches[n].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                                            var r = t.matches[n];
                                            t.matches.splice(n, 1), t.matches.splice(a + 1, 0, r);
                                        }
                                        void 0 !== t.matches[n].matches ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((o = t.matches[n]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                                        o);
                                    }
                                    var o;
                                    return t;
                                }(m[0]);
                                return m;
                            }, t.generateMaskSet = function(e, t) {
                                var i;
                                function a(e, t) {
                                    var i = t.repeat, n = t.groupmarker, a = t.quantifiermarker, r = t.keepStatic;
                                    if (i > 0 || "*" === i || "+" === i) {
                                        var l = "*" === i ? 0 : "+" === i ? 1 : i;
                                        e = n[0] + e + n[1] + a[0] + l + "," + i + a[1];
                                    }
                                    if (!0 === r) {
                                        var c = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                                        c && c.forEach((function(t, i) {
                                            var n = function(e, t) {
                                                return function(e) {
                                                    if (Array.isArray(e)) return e;
                                                }(e) || function(e, t) {
                                                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                    if (null != i) {
                                                        var n, a, r, o, s = [], l = !0, c = !1;
                                                        try {
                                                            if (r = (i = i.call(e)).next, 0 === t) {
                                                                if (Object(i) !== i) return;
                                                                l = !1;
                                                            } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                                        } catch (e) {
                                                            c = !0, a = e;
                                                        } finally {
                                                            try {
                                                                if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                                            } finally {
                                                                if (c) throw a;
                                                            }
                                                        }
                                                        return s;
                                                    }
                                                }(e, t) || function(e, t) {
                                                    if (!e) return;
                                                    if ("string" == typeof e) return s(e, t);
                                                    var i = Object.prototype.toString.call(e).slice(8, -1);
                                                    "Object" === i && e.constructor && (i = e.constructor.name);
                                                    if ("Map" === i || "Set" === i) return Array.from(e);
                                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return s(e, t);
                                                }(e, t) || function() {
                                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                }();
                                            }(t.split("["), 2), a = n[0], r = n[1];
                                            r = r.replace("]", ""), e = e.replace(new RegExp("".concat((0, o.default)(a), "\\[").concat((0, 
                                            o.default)(r), "\\]")), a.charAt(0) === r.charAt(0) ? "(".concat(a, "|").concat(a).concat(r, ")") : "".concat(a, "[").concat(r, "]"));
                                        }));
                                    }
                                    return e;
                                }
                                function l(e, i, o) {
                                    var s, l, c = !1;
                                    return null !== e && "" !== e || ((c = null !== o.regex) ? e = (e = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (c = !0, 
                                    e = ".*")), 1 === e.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), 
                                    e = a(e, o), l = c ? "regex_" + o.regex : o.numericInput ? e.split("").reverse().join("") : e, 
                                    null !== o.keepStatic && (l = "ks_" + o.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (s = {
                                        mask: e,
                                        maskToken: r.default.prototype.analyseMask(e, c, o),
                                        validPositions: [],
                                        _buffer: void 0,
                                        buffer: void 0,
                                        tests: {},
                                        excludes: {},
                                        metadata: i,
                                        maskLength: void 0,
                                        jitOffset: {}
                                    }, !0 !== t && (r.default.prototype.masksCache[l] = s, s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                                    s;
                                }
                                "function" == typeof e.mask && (e.mask = e.mask(e));
                                if (Array.isArray(e.mask)) {
                                    if (e.mask.length > 1) {
                                        null === e.keepStatic && (e.keepStatic = !0);
                                        var c = e.groupmarker[0];
                                        return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                            c.length > 1 && (c += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? c += t.mask : c += t;
                                        })), l(c += e.groupmarker[1], e.mask, e);
                                    }
                                    e.mask = e.mask.pop();
                                }
                                i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? l(e.mask.mask, e.mask, e) : l(e.mask, e.mask, e);
                                null === e.keepStatic && (e.keepStatic = !1);
                                return i;
                            };
                            var n = l(i(4963)), a = l(i(9695)), r = l(i(2394)), o = l(i(7184));
                            function s(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                                return n;
                            }
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                        },
                        157: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mask = function() {
                                var e = this, t = this.opts, i = this.el, u = this.dependencyLib;
                                o.EventRuler.off(i);
                                var f = function(t, i) {
                                    "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.keys.Enter);
                                    var s = t.getAttribute("type"), l = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                                    if (!l) if ("input" === t.tagName.toLowerCase()) {
                                        var c = document.createElement("input");
                                        c.setAttribute("type", s), l = "text" === c.type, c = null;
                                    } else l = "partial";
                                    return !1 !== l ? function(t) {
                                        var n, s;
                                        function l() {
                                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== a.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? r.clearOptionalTail.call(e, a.getBuffer.call(e).slice()).reverse() : r.clearOptionalTail.call(e, a.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                                        }
                                        function c(e) {
                                            s.call(this, e), this.inputmask && (0, r.applyInputValue)(this, e);
                                        }
                                        if (!t.inputmask.__valueGet) {
                                            if (!0 !== i.noValuePatching) {
                                                if (Object.getOwnPropertyDescriptor) {
                                                    var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                                    f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                                        get: l,
                                                        set: c,
                                                        configurable: !0
                                                    })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                                        return this.textContent;
                                                    }, s = function(e) {
                                                        this.textContent = e;
                                                    }, Object.defineProperty(t, "value", {
                                                        get: l,
                                                        set: c,
                                                        configurable: !0
                                                    }));
                                                } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                                s = t.__lookupSetter__("value"), t.__defineGetter__("value", l), t.__defineSetter__("value", c));
                                                t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                                            }
                                            t.inputmask._valueGet = function(t) {
                                                return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                                            }, t.inputmask._valueSet = function(t, i) {
                                                s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                                            }, void 0 === n && (n = function() {
                                                return this.value;
                                            }, s = function(e) {
                                                this.value = e;
                                            }, function(t) {
                                                if (u.valHooks && (void 0 === u.valHooks[t] || !0 !== u.valHooks[t].inputmaskpatch)) {
                                                    var n = u.valHooks[t] && u.valHooks[t].get ? u.valHooks[t].get : function(e) {
                                                        return e.value;
                                                    }, o = u.valHooks[t] && u.valHooks[t].set ? u.valHooks[t].set : function(e, t) {
                                                        return e.value = t, e;
                                                    };
                                                    u.valHooks[t] = {
                                                        get: function(t) {
                                                            if (t.inputmask) {
                                                                if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                                var r = n(t);
                                                                return -1 !== a.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? r : "";
                                                            }
                                                            return n(t);
                                                        },
                                                        set: function(e, t) {
                                                            var i = o(e, t);
                                                            return e.inputmask && (0, r.applyInputValue)(e, t), i;
                                                        },
                                                        inputmaskpatch: !0
                                                    };
                                                }
                                            }(t.type), function(e) {
                                                o.EventRuler.on(e, "mouseenter", (function() {
                                                    var e = this, t = e.inputmask._valueGet(!0);
                                                    t != (e.inputmask.isRTL ? a.getBuffer.call(e.inputmask).slice().reverse() : a.getBuffer.call(e.inputmask)).join("") && (0, 
                                                    r.applyInputValue)(e, t);
                                                }));
                                            }(t));
                                        }
                                    }(t) : t.inputmask = void 0, l;
                                }(i, t);
                                if (!1 !== f) {
                                    e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                                    -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                                    i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                                    s.iphone && (t.insertModeVisual = !1, i.setAttribute("autocorrect", "off")), o.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                                    o.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), o.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                                    o.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), o.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                                    o.EventRuler.on(i, "click", c.EventHandlers.clickEvent), o.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                                    o.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), o.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                                    o.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), o.EventRuler.on(i, "complete", t.oncomplete), 
                                    o.EventRuler.on(i, "incomplete", t.onincomplete), o.EventRuler.on(i, "cleared", t.oncleared), 
                                    !0 !== t.inputEventOnly && o.EventRuler.on(i, "keydown", c.EventHandlers.keyEvent), 
                                    (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), o.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent)), 
                                    o.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), a.getBufferTemplate.call(e).join(""), 
                                    e.undoValue = e._valueGet(!0);
                                    var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                                    if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                                        (0, r.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                                        var p = a.getBuffer.call(e).slice();
                                        !1 === l.isComplete.call(e, p) && t.clearIncomplete && a.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === a.getLastValidPosition.call(e) ? p = [] : r.clearOptionalTail.call(e, p)), 
                                        (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                                        r.writeBuffer)(i, p), d === i && a.caret.call(e, i, a.seekNext.call(e, a.getLastValidPosition.call(e)));
                                    }
                                }
                            };
                            var n = i(2839), a = i(8711), r = i(7760), o = i(9716), s = i(9845), l = i(7215), c = i(6030);
                        },
                        9695: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, i, n) {
                                this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                                this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, 
                                this.quantifier = {
                                    min: 1,
                                    max: 1
                                };
                            };
                        },
                        3194: function() {
                            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                                value: function(e, t) {
                                    if (null == this) throw new TypeError('"this" is null or not defined');
                                    var i = Object(this), n = i.length >>> 0;
                                    if (0 === n) return !1;
                                    for (var a = 0 | t, r = Math.max(a >= 0 ? a : n - Math.abs(a), 0); r < n; ) {
                                        if (i[r] === e) return !0;
                                        r++;
                                    }
                                    return !1;
                                }
                            });
                        },
                        9302: function() {
                            var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), i = Function.bind.call(Function.call, Array.prototype.concat), n = Object.keys;
                            Object.entries || (Object.entries = function(a) {
                                return e(n(a), (function(e, n) {
                                    return i(e, "string" == typeof n && t(a, n) ? [ [ n, a[n] ] ] : []);
                                }), []);
                            });
                        },
                        7149: function() {
                            function e(t) {
                                return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, e(t);
                            }
                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                                return e.__proto__;
                            } : function(e) {
                                return e.constructor.prototype;
                            });
                        },
                        4013: function() {
                            String.prototype.includes || (String.prototype.includes = function(e, t) {
                                return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                            });
                        },
                        8711: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.caret = function(e, t, i, n, a) {
                                var r, o = this, s = this.opts;
                                if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                                i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                                i = r.endOffset) : document.selection && document.selection.createRange && (i = (t = 0 - (r = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + r.text.length), 
                                {
                                    begin: n ? t : c.call(o, t),
                                    end: n ? i : c.call(o, i)
                                };
                                if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                                void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                                "number" == typeof t) {
                                    t = n ? t : c.call(o, t), i = "number" == typeof (i = n ? i : c.call(o, i)) ? i : t;
                                    var l = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                                    if (e.scrollLeft = l > e.scrollWidth ? l : 0, e.inputmask.caretPos = {
                                        begin: t,
                                        end: i
                                    }, s.insertModeVisual && !1 === s.insertMode && t === i && (a || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                                        if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                            var u = document.createTextNode("");
                                            e.appendChild(u);
                                        }
                                        r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                        r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                                        r.collapse(!0);
                                        var f = window.getSelection();
                                        f.removeAllRanges(), f.addRange(r);
                                    } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                                    r.moveStart("character", t), r.select());
                                }
                            }, t.determineLastRequiredPosition = function(e) {
                                var t, i, r = this, s = r.maskset, l = r.dependencyLib, c = n.getMaskTemplate.call(r, !0, o.call(r), !0, !0), u = c.length, f = o.call(r), d = {}, p = s.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                                for (t = f + 1; t < c.length; t++) h = (i = n.getTestTemplate.call(r, t, h, t - 1)).locator.slice(), 
                                d[t] = l.extend(!0, {}, i);
                                var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                                for (t = u - 1; t > f && ((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && a.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== n.getTests.call(r, t)[0].def)) && c[t] === n.getPlaceholder.call(r, t, i.match); t--) u--;
                                return e ? {
                                    l: u,
                                    def: d[u] ? d[u].match : void 0
                                } : u;
                            }, t.determineNewCaretPosition = function(e, t, i) {
                                var a = this, c = a.maskset, u = a.opts;
                                t && (a.isRTL ? e.end = e.begin : e.begin = e.end);
                                if (e.begin === e.end) {
                                    switch (i = i || u.positionCaretOnClick) {
                                      case "none":
                                        break;

                                      case "select":
                                        e = {
                                            begin: 0,
                                            end: r.call(a).length
                                        };
                                        break;

                                      case "ignore":
                                        e.end = e.begin = l.call(a, o.call(a));
                                        break;

                                      case "radixFocus":
                                        if (a.clicked > 1 && 0 == c.validPositions.length) break;
                                        if (function(e) {
                                            if ("" !== u.radixPoint && 0 !== u.digits) {
                                                var t = c.validPositions;
                                                if (void 0 === t[e] || t[e].input === n.getPlaceholder.call(a, e)) {
                                                    if (e < l.call(a, -1)) return !0;
                                                    var i = r.call(a).indexOf(u.radixPoint);
                                                    if (-1 !== i) {
                                                        for (var o = 0, s = t.length; o < s; o++) if (t[o] && i < o && t[o].input !== n.getPlaceholder.call(a, o)) return !1;
                                                        return !0;
                                                    }
                                                }
                                            }
                                            return !1;
                                        }(e.begin)) {
                                            var f = r.call(a).join("").indexOf(u.radixPoint);
                                            e.end = e.begin = u.numericInput ? l.call(a, f) : f;
                                            break;
                                        }

                                      default:
                                        var d = e.begin, p = o.call(a, d, !0), h = l.call(a, -1 !== p || s.call(a, 0) ? p : -1);
                                        if (d <= h) e.end = e.begin = s.call(a, d, !1, !0) ? d : l.call(a, d); else {
                                            var v = c.validPositions[p], m = n.getTestTemplate.call(a, h, v ? v.match.locator : void 0, v), g = n.getPlaceholder.call(a, h, m.match);
                                            if ("" !== g && r.call(a)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !s.call(a, h, u.keepStatic, !0) && m.match.def === g) {
                                                var y = l.call(a, h);
                                                (d >= y || d === h) && (h = y);
                                            }
                                            e.end = e.begin = h;
                                        }
                                    }
                                    return e;
                                }
                            }, t.getBuffer = r, t.getBufferTemplate = function() {
                                var e = this.maskset;
                                void 0 === e._buffer && (e._buffer = n.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                                return e._buffer;
                            }, t.getLastValidPosition = o, t.isMask = s, t.resetMaskSet = function(e) {
                                var t = this.maskset;
                                t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
                            }, t.seekNext = l, t.seekPrevious = function(e, t) {
                                var i = this, a = e - 1;
                                if (e <= 0) return 0;
                                for (;a > 0 && (!0 === t && (!0 !== n.getTest.call(i, a).match.newBlockMarker || !s.call(i, a, void 0, !0)) || !0 !== t && !s.call(i, a, void 0, !0)); ) a--;
                                return a;
                            }, t.translatePosition = c;
                            var n = i(4713), a = i(7215);
                            function r(e) {
                                var t = this, i = t.maskset;
                                return void 0 !== i.buffer && !0 !== e || (i.buffer = n.getMaskTemplate.call(t, !0, o.call(t), !0), 
                                void 0 === i._buffer && (i._buffer = i.buffer.slice())), i.buffer;
                            }
                            function o(e, t, i) {
                                var n = this.maskset, a = -1, r = -1, o = i || n.validPositions;
                                void 0 === e && (e = -1);
                                for (var s = 0, l = o.length; s < l; s++) o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (a = s), 
                                s >= e && (r = s));
                                return -1 === a || a == e ? r : -1 == r || e - a < r - e ? a : r;
                            }
                            function s(e, t, i) {
                                var a = this, r = this.maskset, o = n.getTestTemplate.call(a, e).match;
                                if ("" === o.def && (o = n.getTest.call(a, e).match), !0 !== o.static) return o.fn;
                                if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                                if (!0 !== t && e > -1) {
                                    if (i) {
                                        var s = n.getTests.call(a, e);
                                        return s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0);
                                    }
                                    var l = n.determineTestTemplate.call(a, e, n.getTests.call(a, e)), c = n.getPlaceholder.call(a, e, l.match);
                                    return l.match.def !== c;
                                }
                                return !1;
                            }
                            function l(e, t, i) {
                                var a = this;
                                void 0 === i && (i = !0);
                                for (var r = e + 1; "" !== n.getTest.call(a, r).match.def && (!0 === t && (!0 !== n.getTest.call(a, r).match.newBlockMarker || !s.call(a, r, void 0, !0)) || !0 !== t && !s.call(a, r, void 0, i)); ) r++;
                                return r;
                            }
                            function c(e) {
                                var t = this.opts, i = this.el;
                                return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = this._valueGet().length - e) < 0 && (e = 0), 
                                e;
                            }
                        },
                        4713: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.determineTestTemplate = c, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, n, a) {
                                var r = this, o = this.opts, u = this.maskset, f = o.greedy;
                                a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                                t = t || 0;
                                var p, h, v, m, g = [], y = 0;
                                do {
                                    if (!0 === e && u.validPositions[y]) h = (v = a && u.validPositions[y].match.optionality && void 0 === u.validPositions[y + 1] && (!0 === u.validPositions[y].generatedInput || u.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? c.call(r, y, d.call(r, y, p, y - 1)) : u.validPositions[y]).match, 
                                    p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : s.call(r, y, h)); else {
                                        h = (v = l.call(r, y, p, y - 1)).match, p = v.locator.slice();
                                        var k = !0 !== n && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                                        (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || u.validPositions[y - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && u.tests[y]) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === i ? h.nativeDef : s.call(r, g.length, h)) : m = !1;
                                    }
                                    y++;
                                } while (!0 !== h.static || "" !== h.def || t > y);
                                "" === g[g.length - 1] && g.pop();
                                !1 === i && void 0 !== u.maskLength || (u.maskLength = y - 1);
                                return o.greedy = f, g;
                            }, t.getPlaceholder = s, t.getTest = u, t.getTestTemplate = l, t.getTests = d, t.isSubsetOf = f;
                            var n, a = (n = i(2394)) && n.__esModule ? n : {
                                default: n
                            };
                            function r(e, t) {
                                var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                                if ("" !== i) for (;i.length < t; ) i += "0";
                                return i;
                            }
                            function o(e) {
                                var t = e.locator[e.alternation];
                                return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                            }
                            function s(e, t, i) {
                                var n = this.opts, a = this.maskset;
                                if (void 0 !== (t = t || u.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(n) : t.placeholder;
                                if (!0 === t.static) {
                                    if (e > -1 && void 0 === a.validPositions[e]) {
                                        var r, o = d.call(this, e), s = [];
                                        if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var l = 0; l < o.length; l++) if ("" !== o[l].match.def && !0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (!0 === o[l].match.static || void 0 === r || !1 !== o[l].match.fn.test(r.match.def, a, e, !0, n)) && (s.push(o[l]), 
                                        !0 === o[l].match.static && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return n.placeholder.charAt(e % n.placeholder.length);
                                    }
                                    return t.def;
                                }
                                return n.placeholder.charAt(e % n.placeholder.length);
                            }
                            function l(e, t, i) {
                                return this.maskset.validPositions[e] || c.call(this, e, d.call(this, e, t ? t.slice() : t, i));
                            }
                            function c(e, t) {
                                var i = this.opts, n = 0, a = function(e, t) {
                                    var i = 0, n = !1;
                                    t.forEach((function(e) {
                                        e.match.optionality && (0 !== i && i !== e.match.optionality && (n = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                                    })), i && (0 == e || 1 == t.length ? i = 0 : n || (i = 0));
                                    return i;
                                }(e, t);
                                e = e > 0 ? e - 1 : 0;
                                var o, s, l, c = r(u.call(this, e));
                                i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (n = 1);
                                for (var f = 0; f < t.length - n; f++) {
                                    var d = t[f];
                                    o = r(d, c.length);
                                    var p = Math.abs(o - c);
                                    (void 0 === s || "" !== o && p < s || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!d.match.optionality || d.match.optionality - a < 1 || !d.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !d.match.optionalQuantifier) && (s = p, 
                                    l = d);
                                }
                                return l;
                            }
                            function u(e, t) {
                                var i = this.maskset;
                                return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
                            }
                            function f(e, t, i) {
                                function n(e) {
                                    for (var t, i = [], n = -1, a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (t = e.charCodeAt(a + 1); ++n < t; ) i.push(String.fromCharCode(n)); else n = e.charCodeAt(a), 
                                    i.push(e.charAt(a));
                                    return i.join("");
                                }
                                return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== n(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n(e.match.fn.toString().replace(/[[\]/]/g, "")));
                            }
                            function d(e, t, i) {
                                var n, r, o = this, s = this.dependencyLib, l = this.maskset, u = this.opts, d = this.el, p = l.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, y = t ? t.join("") : "";
                                function k(t, i, r, s) {
                                    function c(r, s, p) {
                                        function v(e, t) {
                                            var i = 0 === t.matches.indexOf(e);
                                            return i || t.matches.every((function(n, a) {
                                                return !0 === n.isQuantifier ? i = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(n, "matches") && (i = v(e, n)), 
                                                !i;
                                            })), i;
                                        }
                                        function x(e, t, i) {
                                            var n, a;
                                            if ((l.tests[e] || l.validPositions[e]) && (l.tests[e] || [ l.validPositions[e] ]).every((function(e, r) {
                                                if (e.mloc[t]) return n = e, !1;
                                                var o = void 0 !== i ? i : e.alternation, s = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                                return (void 0 === a || s < a) && -1 !== s && (n = e, a = s), !0;
                                            })), n) {
                                                var r = n.locator[n.alternation];
                                                return (n.mloc[t] || n.mloc[r] || n.locator).slice((void 0 !== i ? i : n.alternation) + 1);
                                            }
                                            return void 0 !== i ? x(e, t) : void 0;
                                        }
                                        function P(e, t) {
                                            var i = e.alternation, n = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                                            if (!n && i > t.alternation) for (var a = t.alternation; a < i; a++) if (e.locator[a] !== t.locator[a]) {
                                                i = a, n = !0;
                                                break;
                                            }
                                            if (n) {
                                                e.mloc = e.mloc || {};
                                                var r = e.locator[i];
                                                if (void 0 !== r) {
                                                    if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                                    void 0 !== t) {
                                                        for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                                        e.locator[i] = Object.keys(e.mloc).join(",");
                                                    }
                                                    return !0;
                                                }
                                                e.alternation = void 0;
                                            }
                                            return !1;
                                        }
                                        function w(e, t) {
                                            if (e.locator.length !== t.locator.length) return !1;
                                            for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                                            return !0;
                                        }
                                        if (h > e + u._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + l.mask;
                                        if (h === e && void 0 === r.matches) {
                                            if (m.push({
                                                match: r,
                                                locator: s.reverse(),
                                                cd: y,
                                                mloc: {}
                                            }), !r.optionality || void 0 !== p || !(u.definitions && u.definitions[r.nativeDef] && u.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                            g = !0, h = e;
                                        } else if (void 0 !== r.matches) {
                                            if (r.isGroup && p !== r) return function() {
                                                if (r = c(t.matches[t.matches.indexOf(r) + 1], s, p)) return !0;
                                            }();
                                            if (r.isOptional) return function() {
                                                var t = r, a = m.length;
                                                if (r = k(r, i, s, p), m.length > 0) {
                                                    if (m.forEach((function(e, t) {
                                                        t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                                    })), n = m[m.length - 1].match, void 0 !== p || !v(n, t)) return r;
                                                    g = !0, h = e;
                                                }
                                            }();
                                            if (r.isAlternator) return function() {
                                                o.hasAlternator = !0;
                                                var n, a, v, y = r, k = [], b = m.slice(), S = s.length, M = !1, _ = i.length > 0 ? i.shift() : -1;
                                                if (-1 === _ || "string" == typeof _) {
                                                    var O, E = h, T = i.slice(), j = [];
                                                    if ("string" == typeof _) j = _.split(","); else for (O = 0; O < y.matches.length; O++) j.push(O.toString());
                                                    if (void 0 !== l.excludes[e]) {
                                                        for (var A = j.slice(), D = 0, B = l.excludes[e].length; D < B; D++) {
                                                            var C = l.excludes[e][D].toString().split(":");
                                                            s.length == C[1] && j.splice(j.indexOf(C[0]), 1);
                                                        }
                                                        0 === j.length && (delete l.excludes[e], j = A);
                                                    }
                                                    (!0 === u.keepStatic || isFinite(parseInt(u.keepStatic)) && E >= u.keepStatic) && (j = j.slice(0, 1));
                                                    for (var R = 0; R < j.length; R++) {
                                                        O = parseInt(j[R]), m = [], i = "string" == typeof _ && x(h, O, S) || T.slice();
                                                        var L = y.matches[O];
                                                        if (L && c(L, [ O ].concat(s), p)) r = !0; else if (0 === R && (M = !0), L && L.matches && L.matches.length > y.matches[0].matches.length) break;
                                                        n = m.slice(), h = E, m = [];
                                                        for (var F = 0; F < n.length; F++) {
                                                            var I = n[F], N = !1;
                                                            I.match.jit = I.match.jit || M, I.alternation = I.alternation || S, P(I);
                                                            for (var V = 0; V < k.length; V++) {
                                                                var G = k[V];
                                                                if ("string" != typeof _ || void 0 !== I.alternation && j.includes(I.locator[I.alternation].toString())) {
                                                                    if (I.match.nativeDef === G.match.nativeDef) {
                                                                        N = !0, P(G, I);
                                                                        break;
                                                                    }
                                                                    if (f(I, G, u)) {
                                                                        P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I));
                                                                        break;
                                                                    }
                                                                    if (f(G, I, u)) {
                                                                        P(G, I);
                                                                        break;
                                                                    }
                                                                    if (v = G, !0 === (a = I).match.static && !0 !== v.match.static && v.match.fn.test(a.match.def, l, e, !1, u, !1)) {
                                                                        w(I, G) || void 0 !== d.inputmask.userOptions.keepStatic ? P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I)) : u.keepStatic = !0;
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                            N || k.push(I);
                                                        }
                                                    }
                                                    m = b.concat(k), h = e, g = m.length > 0, r = k.length > 0, i = T.slice();
                                                } else r = c(y.matches[_] || t.matches[_], [ _ ].concat(s), p);
                                                if (r) return !0;
                                            }();
                                            if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function() {
                                                for (var a = r, o = !1, f = i.length > 0 ? i.shift() : 0; f < (isNaN(a.quantifier.max) ? f + 1 : a.quantifier.max) && h <= e; f++) {
                                                    var d = t.matches[t.matches.indexOf(a) - 1];
                                                    if (r = c(d, [ f ].concat(s), d)) {
                                                        if (m.forEach((function(t, i) {
                                                            (n = b(d, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = f >= a.quantifier.min, 
                                                            n.jit = (f + 1) * (d.matches.indexOf(n) + 1) > a.quantifier.jit, n.optionalQuantifier && v(n, d) && (g = !0, 
                                                            h = e, u.greedy && null == l.validPositions[e - 1] && f > a.quantifier.min && -1 != [ "*", "+" ].indexOf(a.quantifier.max) && (m.pop(), 
                                                            y = void 0), o = !0, r = !1), !o && n.jit && (l.jitOffset[e] = d.matches.length - d.matches.indexOf(n));
                                                        })), o) break;
                                                        return !0;
                                                    }
                                                }
                                            }();
                                            if (r = k(r, i, s, p)) return !0;
                                        } else h++;
                                    }
                                    for (var p = i.length > 0 ? i.shift() : 0; p < t.matches.length; p++) if (!0 !== t.matches[p].isQuantifier) {
                                        var v = c(t.matches[p], [ p ].concat(r), s);
                                        if (v && h === e) return v;
                                        if (h > e) break;
                                    }
                                }
                                function b(e, t) {
                                    var i = -1 != e.matches.indexOf(t);
                                    return i || e.matches.forEach((function(e, n) {
                                        void 0 === e.matches || i || (i = b(e, t));
                                    })), i;
                                }
                                if (e > -1) {
                                    if (void 0 === t) {
                                        for (var x, P = e - 1; void 0 === (x = l.validPositions[P] || l.tests[P]) && P > -1; ) P--;
                                        void 0 !== x && P > -1 && (v = function(e, t) {
                                            var i, n = [];
                                            return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === u.keepStatic ? 0 === (n = c.call(o, e, t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : t.forEach((function(e) {
                                                "" !== e.def && (0 === n.length ? (i = e.alternation, n = e.locator.slice()) : e.locator[i] && -1 === n[i].toString().indexOf(e.locator[i]) && (n[i] += "," + e.locator[i]));
                                            }))), n;
                                        }(P, x), y = v.join(""), h = P);
                                    }
                                    if (l.tests[e] && l.tests[e][0].cd === y) return l.tests[e];
                                    for (var w = v.shift(); w < p.length; w++) if (k(p[w], v, [ w ]) && h === e || h > e) break;
                                }
                                return (0 === m.length || g) && m.push({
                                    match: {
                                        fn: null,
                                        static: !0,
                                        optionality: !1,
                                        casing: null,
                                        def: "",
                                        placeholder: ""
                                    },
                                    locator: [],
                                    mloc: {},
                                    cd: y
                                }), void 0 !== t && l.tests[e] ? r = s.extend(!0, [], m) : (l.tests[e] = s.extend(!0, [], m), 
                                r = l.tests[e]), m.forEach((function(e) {
                                    e.match.optionality = e.match.defOptionality || !1;
                                })), r;
                            }
                        },
                        7215: function(e, t, i) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                                for (var n, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], s = 0; s < o.length; s++) -1 !== (n = e.indexOf(o[s])) && e.splice(n, 1);
                                for (var l = 0; l < e.length; l++) if (a.includes(e[l])) {
                                    r = !0;
                                    break;
                                }
                                return r;
                            }, t.handleRemove = function(e, t, i, o, l) {
                                var c = this, u = this.maskset, f = this.opts;
                                if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), 
                                c.isRTL)) {
                                    var d = i.end;
                                    i.end = i.begin, i.begin = d;
                                }
                                var p, h = r.getLastValidPosition.call(c, void 0, !0);
                                i.end >= r.getBuffer.call(c).length && h >= i.end && (i.end = h + 1);
                                t === a.keys.Backspace ? i.end - i.begin < 1 && (i.begin = r.seekPrevious.call(c, i.begin)) : t === a.keys.Delete && i.begin === i.end && (i.end = r.isMask.call(c, i.end, !0, !0) ? i.end + 1 : r.seekNext.call(c, i.end) + 1);
                                if (!1 !== (p = v.call(c, i))) {
                                    if (!0 !== o && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(c, i.begin).match.def.indexOf("|")) {
                                        var m = s.call(c, !0);
                                        if (m) {
                                            var g = void 0 !== m.caret ? m.caret : m.pos ? r.seekNext.call(c, m.pos.begin ? m.pos.begin : m.pos) : r.getLastValidPosition.call(c, -1, !0);
                                            (t !== a.keys.Delete || i.begin > g) && i.begin;
                                        }
                                    }
                                    !0 !== o && (u.p = t === a.keys.Delete ? i.begin + p : i.begin, u.p = r.determineNewCaretPosition.call(c, {
                                        begin: u.p,
                                        end: u.p
                                    }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin);
                                }
                            }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = p, 
                            t.revalidateMask = v;
                            var n = i(4713), a = i(2839), r = i(8711), o = i(6030);
                            function s(e, t, i, a, o, l) {
                                var c, u, d, p, h, v, m, g, y, k, b, x = this, P = this.dependencyLib, w = this.opts, S = x.maskset, M = P.extend(!0, [], S.validPositions), _ = P.extend(!0, {}, S.tests), O = !1, E = !1, T = void 0 !== o ? o : r.getLastValidPosition.call(x);
                                if (l && (k = l.begin, b = l.end, l.begin > l.end && (k = l.end, b = l.begin)), 
                                -1 === T && void 0 === o) c = 0, u = (p = n.getTest.call(x, c)).alternation; else for (;T >= 0; T--) if ((d = S.validPositions[T]) && void 0 !== d.alternation) {
                                    if (T <= (e || 0) && p && p.locator[d.alternation] !== d.locator[d.alternation]) break;
                                    c = T, u = S.validPositions[c].alternation, p = d;
                                }
                                if (void 0 !== u) {
                                    m = parseInt(c), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                                    n.getDecisionTaker)(p) + ":" + p.alternation);
                                    var j = [], A = -1;
                                    for (h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (j.push(t), 
                                    A = j.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < k || h >= b) && j.push(v.input), 
                                    delete S.validPositions[h];
                                    for (-1 === A && void 0 !== t && (j.push(t), A = j.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                                        for (S.tests = {}, r.resetMaskSet.call(x, !0), O = !0, h = 0; h < j.length && (g = O.caret || r.getLastValidPosition.call(x, void 0, !0) + 1, 
                                        y = j[h], O = f.call(x, g, y, !1, a, !0)); h++) h === A && (E = O), 1 == e && O && (E = {
                                            caretPos: h
                                        });
                                        if (O) break;
                                        if (r.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, [], M), 
                                        S.tests = P.extend(!0, {}, _), !S.excludes[m]) {
                                            E = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        var D = (0, n.getDecisionTaker)(p);
                                        if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                                            E = s.call(x, e, t, i, a, m - 1, l);
                                            break;
                                        }
                                        for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                                    }
                                }
                                return E && !1 === w.keepStatic || delete S.excludes[m], E;
                            }
                            function l(e, t, i) {
                                var n = this.opts, r = this.maskset;
                                switch (n.casing || t.casing) {
                                  case "upper":
                                    e = e.toUpperCase();
                                    break;

                                  case "lower":
                                    e = e.toLowerCase();
                                    break;

                                  case "title":
                                    var o = r.validPositions[i - 1];
                                    e = 0 === i || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                                    break;

                                  default:
                                    if ("function" == typeof n.casing) {
                                        var s = Array.prototype.slice.call(arguments);
                                        s.push(r.validPositions), e = n.casing.apply(this, s);
                                    }
                                }
                                return e;
                            }
                            function c(e) {
                                var t = this, i = this.opts, a = this.maskset;
                                if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                                if ("*" !== i.repeat) {
                                    var o = !1, s = r.determineLastRequiredPosition.call(t, !0), l = r.seekPrevious.call(t, s.l);
                                    if (void 0 === s.def || s.def.newBlockMarker || s.def.optionality || s.def.optionalQuantifier) {
                                        o = !0;
                                        for (var c = 0; c <= l; c++) {
                                            var u = n.getTestTemplate.call(t, c).match;
                                            if (!0 !== u.static && void 0 === a.validPositions[c] && !0 !== u.optionality && !0 !== u.optionalQuantifier || !0 === u.static && e[c] !== n.getPlaceholder.call(t, c, u)) {
                                                o = !1;
                                                break;
                                            }
                                        }
                                    }
                                    return o;
                                }
                            }
                            function u(e) {
                                var t = this.opts.insertMode ? 0 : 1;
                                return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                            }
                            function f(e, t, i, a, o, d, m) {
                                var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                                i = !0 === i;
                                var x = e;
                                function P(e) {
                                    if (void 0 !== e) {
                                        if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                                        e.remove.sort((function(e, t) {
                                            return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                                        })).forEach((function(e) {
                                            v.call(g, {
                                                begin: e,
                                                end: e + 1
                                            });
                                        })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                                        e.insert.sort((function(e, t) {
                                            return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                                        })).forEach((function(e) {
                                            "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                                        })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                            var t = e.refreshFromBuffer;
                                            p.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                                        }
                                        void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                                    }
                                    return e;
                                }
                                function w(t, i, o) {
                                    var s = !1;
                                    return n.getTests.call(g, t).every((function(c, f) {
                                        var d = c.match;
                                        if (r.getBuffer.call(g, !0), !1 !== (s = (!d.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, o, k, u.call(g, e)) : (i === d.def || i === k.skipOptionalPartCharacter) && "" !== d.def && {
                                            c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                                            pos: t
                                        }))) {
                                            var p = void 0 !== s.c ? s.c : i, h = t;
                                            return p = p === k.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                                            !0 !== (s = P(s)) && void 0 !== s.pos && s.pos !== t && (h = s.pos), !0 !== s && void 0 === s.pos && void 0 === s.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                                input: l.call(g, p, d, h)
                                            }), a, h) && (s = !1), !1);
                                        }
                                        return !0;
                                    })), s;
                                }
                                void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                                var S = !0, M = y.extend(!0, {}, b.validPositions);
                                if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== o && !0 !== a) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0, 
                                delete b.tests[_]);
                                if ("function" == typeof k.preValidation && !0 !== a && !0 !== d && (S = P(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, i || o))), 
                                !0 === S) {
                                    if (S = w(x, t, i), (!i || !0 === a) && !1 === S && !0 !== d) {
                                        var O = b.validPositions[x];
                                        if (!O || !0 !== O.match.static || O.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                            if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                                var E = !1;
                                                if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== o && (S.caret = x), 
                                                E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) for (var T = x + 1, j = r.seekNext.call(g, x, !1, 0 !== x); T <= j; T++) if (!1 !== (S = w(T, t, i))) {
                                                    S = h.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                                    break;
                                                }
                                            }
                                        } else S = {
                                            caret: r.seekNext.call(g, x)
                                        };
                                    }
                                    g.hasAlternator && !0 !== o && !i && (!1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = s.call(g, x, t, i, a, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = s.call(g, !0))), 
                                    !0 === S && (S = {
                                        pos: x
                                    });
                                }
                                if ("function" == typeof k.postValidation && !0 !== a && !0 !== d) {
                                    var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, i, m);
                                    void 0 !== A && (S = !0 === A ? S : A);
                                }
                                S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === d ? (r.resetMaskSet.call(g, !0), 
                                b.validPositions = y.extend(!0, [], M)) : h.call(g, void 0, x, !0);
                                var D = P(S);
                                void 0 !== g.maxLength && r.getBuffer.call(g).length > g.maxLength && !a && (r.resetMaskSet.call(g, !0), 
                                b.validPositions = y.extend(!0, [], M), D = !1);
                                return D;
                            }
                            function d(e, t, i) {
                                for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), s = 0; s < o.length; s++) {
                                    if (o[s].match && (o[s].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[s].match.nativeDef === t.match.nativeDef || i.regex && !o[s].match.static && o[s].match.fn.test(t.input, a, e, !1, i))) {
                                        r = !0;
                                        break;
                                    }
                                    if (o[s].match && o[s].match.def === t.match.nativeDef) {
                                        r = void 0;
                                        break;
                                    }
                                }
                                return !1 === r && void 0 !== a.jitOffset[e] && (r = d.call(this, e + a.jitOffset[e], t, i)), 
                                r;
                            }
                            function p(e, t, i) {
                                var n, a, s = this, l = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, d = s.isRTL ? i.slice().reverse() : i;
                                if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(s), l.tests = {}, 
                                e = 0, t = i.length, a = r.determineNewCaretPosition.call(s, {
                                    begin: 0,
                                    end: 0
                                }, !1).begin; else {
                                    for (n = e; n < t; n++) delete l.validPositions[n];
                                    a = e;
                                }
                                var p = new u.Event("keypress");
                                for (n = e; n < t; n++) {
                                    p.key = d[n].toString(), s.ignorable = !1;
                                    var h = o.EventHandlers.keypressEvent.call(s, p, !0, !1, !1, a);
                                    !1 !== h && void 0 !== h && (a = h.forwardPosition);
                                }
                                c.skipOptionalPartCharacter = f;
                            }
                            function h(e, t, i) {
                                var a = this, o = this.maskset, s = this.dependencyLib;
                                if (void 0 === e) for (e = t - 1; e > 0 && !o.validPositions[e]; e--) ;
                                for (var l = e; l < t; l++) if (void 0 === o.validPositions[l] && !r.isMask.call(a, l, !1)) if (0 == l ? n.getTest.call(a, l) : o.validPositions[l - 1]) {
                                    var c = n.getTests.call(a, l).slice();
                                    "" === c[c.length - 1].match.def && c.pop();
                                    var u, d = n.determineTestTemplate.call(a, l, c);
                                    if (d && (!0 !== d.match.jit || "master" === d.match.newBlockMarker && (u = o.validPositions[l + 1]) && !0 === u.match.optionalQuantifier) && ((d = s.extend({}, d, {
                                        input: n.getPlaceholder.call(a, l, d.match, !0) || d.match.def
                                    })).generatedInput = !0, v.call(a, l, d, !0), !0 !== i)) {
                                        var p = o.validPositions[t].input;
                                        return o.validPositions[t] = void 0, f.call(a, t, p, !0, !0);
                                    }
                                }
                            }
                            function v(e, t, i, a) {
                                var o = this, s = this.maskset, l = this.opts, c = this.dependencyLib;
                                function u(e, t, i) {
                                    var n = t[e];
                                    if (void 0 !== n && !0 === n.match.static && !0 !== n.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                                        var a = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                                        return a && r;
                                    }
                                    return !1;
                                }
                                var p = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                                if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, void 0 === i && (h !== v || l.insertMode && void 0 !== s.validPositions[a] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                                    var g, y = c.extend(!0, {}, s.validPositions), k = r.getLastValidPosition.call(o, void 0, !0);
                                    for (s.p = h, g = k; g >= h; g--) delete s.validPositions[g], void 0 === t && delete s.tests[g + 1];
                                    var b, x, P = a, w = P;
                                    for (t && (s.validPositions[a] = c.extend(!0, {}, t), w++, P++), g = t ? v : v - 1; g <= k; g++) {
                                        if (void 0 !== (b = y[g]) && !0 !== b.generatedInput && (g >= v || g >= h && u(g, y, {
                                            begin: h,
                                            end: v
                                        }))) {
                                            for (;"" !== n.getTest.call(o, w).match.def; ) {
                                                if (!1 !== (x = d.call(o, w, b, l)) || "+" === b.match.def) {
                                                    "+" === b.match.def && r.getBuffer.call(o, !0);
                                                    var S = f.call(o, w, b.input, "+" !== b.match.def, !0);
                                                    if (m = !1 !== S, P = (S.pos || w) + 1, !m && x) break;
                                                } else m = !1;
                                                if (m) {
                                                    void 0 === t && b.match.static && g === e.begin && p++;
                                                    break;
                                                }
                                                if (!m && r.getBuffer.call(o), w > s.maskLength) break;
                                                w++;
                                            }
                                            "" == n.getTest.call(o, w).match.def && (m = !1), w = P;
                                        }
                                        if (!m) break;
                                    }
                                    if (!m) return s.validPositions = c.extend(!0, [], y), r.resetMaskSet.call(o, !0), 
                                    !1;
                                } else t && n.getTest.call(o, a).match.cd === t.match.cd && (s.validPositions[a] = c.extend(!0, {}, t));
                                return r.resetMaskSet.call(o, !0), p;
                            }
                        }
                    }, t = {};
                    function i(n) {
                        var a = t[n];
                        if (void 0 !== a) return a.exports;
                        var r = t[n] = {
                            exports: {}
                        };
                        return e[n](r, r.exports, i), r.exports;
                    }
                    var n = {};
                    return function() {
                        var e, t = n;
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = void 0, i(7149), i(3194), i(9302), i(4013), i(3851), i(219), i(207), 
                        i(5296);
                        var a = ((e = i(2394)) && e.__esModule ? e : {
                            default: e
                        }).default;
                        t.default = a;
                    }(), n;
                }();
            }));
        },
        972: (__webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.a(__webpack_module__, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
                try {
                    var _files_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(307);
                    __webpack_require__(287);
                    var _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(566);
                    __webpack_require__(80);
                    __webpack_require__(348);
                    __webpack_require__(713);
                    __webpack_require__(784);
                    __webpack_require__(366);
                    __webpack_require__(380);
                    var _files_script_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(794);
                    var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ _files_script_js__WEBPACK_IMPORTED_MODULE_9__ ]);
                    _files_script_js__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
                    window["FLS"] = true;
                    _files_functions_js__WEBPACK_IMPORTED_MODULE_0__.An();
                    _files_functions_js__WEBPACK_IMPORTED_MODULE_0__.Fp();
                    _files_functions_js__WEBPACK_IMPORTED_MODULE_0__.Fd();
                    _files_functions_js__WEBPACK_IMPORTED_MODULE_0__.lq();
                    _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__.Gz();
                    __webpack_async_result__();
                } catch (e) {
                    __webpack_async_result__(e);
                }
            }));
        },
        80: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                Z: () => __WEBPACK_DEFAULT_EXPORT__
            });
            var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(627);
            const Method = {
                GET: "GET",
                POST: "POST",
                PUT: "PUT",
                DELETE: "DELETE"
            };
            const headers = new Headers;
            headers.append("X-Requested-With", "XMLHttpRequest");
            new DOMParser;
            const checkStatus = response => {
                if (!response.ok) throw Error(response.statusText);
                return response;
            };
            const extractIn = (response, format = "json") => {
                const formats = {
                    json: () => response.json(),
                    text: () => response.text(),
                    formData: () => response.formData(),
                    blob: () => response.blob()
                };
                if (format in formats) return formats[format]();
                return console.error("there is no such format");
            };
            const showStatus = status => {
                const activeModal = document.querySelector(".popup_show");
                if (activeModal) {
                    const closeBtn = activeModal.querySelector(".popup__close");
                    const event = new Event("click");
                    closeBtn.dispatchEvent(event);
                }
                _modules_js__WEBPACK_IMPORTED_MODULE_0__.S.popup.open("#status-template");
            };
            const request = async ({url, body = null, method = Method.GET}, format, cb = showStatus) => {
                try {
                    const response = await fetch(url, {
                        method,
                        body,
                        headers
                    });
                    if (response.redirected) {
                        window.location.href = response.url;
                        return;
                    }
                    const status = await checkStatus(response);
                    const data = await extractIn(status, format);
                    if (cb) return cb(data);
                    return data;
                } catch (err) {
                    showStatus(err);
                    return console.error(err);
                }
            };
            const __WEBPACK_DEFAULT_EXPORT__ = {
                load({url, format, cb}) {
                    return request({
                        url
                    }, format, cb);
                },
                upload({url, body, boolean, format, cb}) {
                    if (!boolean) headers.append("Content-Type", "application/x-www-form-urlencoded");
                    return request({
                        url,
                        method: Method.POST,
                        body,
                        headers
                    }, format, cb);
                }
            };
        },
        566: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                Gz: () => formSubmit,
                MK: () => formFieldsInit,
                gv: () => formValidate,
                hf: () => initInputMask
            });
            var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(627);
            __webpack_require__(307);
            var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
            function formFieldsInit(options = {
                viewPass: false,
                autoHeight: false
            }) {
                document.body.addEventListener("focusin", (function(e) {
                    const targetElement = e.target;
                    if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                        if (!targetElement.hasAttribute("data-no-focus-classes")) {
                            targetElement.classList.add("_form-focus");
                            targetElement.parentElement.classList.add("_form-focus");
                        }
                        formValidate.removeError(targetElement);
                        targetElement.hasAttribute("data-validate") ? formValidate.removeError(targetElement) : null;
                    }
                }));
                document.body.addEventListener("focusout", (function(e) {
                    const targetElement = e.target;
                    if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                        if (!targetElement.hasAttribute("data-no-focus-classes")) {
                            targetElement.classList.remove("_form-focus");
                            targetElement.parentElement.classList.remove("_form-focus");
                        }
                        targetElement.hasAttribute("data-validate") ? formValidate.validateInput(targetElement) : null;
                    }
                }));
                if (options.viewPass) document.addEventListener("click", (function(e) {
                    let targetElement = e.target;
                    if (targetElement.closest('[class*="__viewpass"]')) {
                        let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                        targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                        targetElement.classList.toggle("_viewpass-active");
                    }
                }));
                if (options.autoHeight) {
                    const textareas = document.querySelectorAll("textarea[data-autoheight]");
                    if (textareas.length) {
                        textareas.forEach((textarea => {
                            const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                            const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                            setHeight(textarea, Math.min(startHeight, maxHeight));
                            textarea.addEventListener("input", (() => {
                                if (textarea.scrollHeight > startHeight) {
                                    textarea.style.height = `auto`;
                                    setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                                }
                            }));
                        }));
                        function setHeight(textarea, height) {
                            textarea.style.height = `${height}px`;
                        }
                    }
                }
            }
            let formValidate = {
                getErrors(form) {
                    let error = 0;
                    let formRequiredItems = form.querySelectorAll("*[data-required]");
                    if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                        if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                    }));
                    return error;
                },
                validateInput(formRequiredItem) {
                    let error = 0;
                    if (formRequiredItem.dataset.required === "email") {
                        formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                        if (this.emailTest(formRequiredItem)) {
                            this.addError(formRequiredItem);
                            error++;
                        } else this.removeError(formRequiredItem);
                    } else if (formRequiredItem.dataset.required === "tel") if (!this.phoneTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem); else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                        this.addError(formRequiredItem);
                        error++;
                    } else if (!formRequiredItem.value.trim()) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                    return error;
                },
                addError(formRequiredItem) {
                    formRequiredItem.classList.add("_form-error");
                    formRequiredItem.parentElement.classList.add("_form-error");
                    let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                    if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                    if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
                },
                removeError(formRequiredItem) {
                    formRequiredItem.classList.remove("_form-error");
                    formRequiredItem.parentElement.classList.remove("_form-error");
                    if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
                },
                formClean(form) {
                    form.reset();
                    setTimeout((() => {
                        let inputs = form.querySelectorAll("input,textarea");
                        for (let index = 0; index < inputs.length; index++) {
                            const el = inputs[index];
                            el.parentElement.classList.remove("_form-focus");
                            el.classList.remove("_form-focus");
                            formValidate.removeError(el);
                        }
                        let checkboxes = form.querySelectorAll(".checkbox__input");
                        if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                            const checkbox = checkboxes[index];
                            checkbox.checked = false;
                        }
                        if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.S.select) {
                            let selects = form.querySelectorAll(".select");
                            if (selects.length) for (let index = 0; index < selects.length; index++) {
                                const select = selects[index].querySelector("select");
                                _modules_js__WEBPACK_IMPORTED_MODULE_0__.S.select.selectBuild(select);
                            }
                        }
                    }), 0);
                },
                emailTest(formRequiredItem) {
                    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
                },
                phoneTest(formRequiredItem) {
                    const phoneNumberPattern = /^\+7 \([1-9]\d{2}\) [1-9]\d{2}-[1-9]\d{3}$/;
                    return phoneNumberPattern.test(formRequiredItem.value);
                }
            };
            function formSubmit() {
                const forms = document.forms;
                if (forms.length) {
                    console.log("12312");
                    for (const form of forms) {
                        document.addEventListener("submit", (function(e) {
                            const form = e.target;
                            formSubmitAction(form, e);
                        }));
                        form.addEventListener("reset", (function(e) {
                            const form = e.target;
                            formValidate.formClean(form);
                        }));
                    }
                }
                async function formSubmitAction(form, e) {
                    const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                    if (error === 0) {
                        const ajax = form.hasAttribute("data-ajax");
                        if (ajax) {
                            e.preventDefault();
                            const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                            const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                            const formData = new FormData(form);
                            console.log(formMethod);
                            form.classList.add("_sending");
                            if (formMethod === "GET") _api_js__WEBPACK_IMPORTED_MODULE_2__.Z.load({
                                url: formAction,
                                method: formMethod,
                                format: "text",
                                cb: response => {
                                    formSent(form, response);
                                }
                            }); else _api_js__WEBPACK_IMPORTED_MODULE_2__.Z.upload({
                                url: formAction,
                                method: formMethod,
                                body: formData,
                                cb: response => {
                                    formSent(form, response);
                                }
                            });
                        }
                    } else {
                        e.preventDefault();
                        if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                            form.dataset.gotoError && form.dataset.gotoError;
                        }
                    }
                }
                function formSent(form, responseResult = ``) {
                    document.dispatchEvent(new CustomEvent("formSent", {
                        detail: {
                            form
                        }
                    }));
                    setTimeout((() => {
                        if (_modules_js__WEBPACK_IMPORTED_MODULE_0__.S.popup) {
                            const popupSelector = form.dataset.popupMessage;
                            const activeModal = document.querySelector(".popup_show");
                            if (activeModal) _modules_js__WEBPACK_IMPORTED_MODULE_0__.S.popup.close(activeModal, 100);
                            const popup = document.querySelector(popupSelector);
                            if (popup) _modules_js__WEBPACK_IMPORTED_MODULE_0__.S.popup.open(popupSelector); else {
                                const parser = new DOMParser;
                                const response = parser.parseFromString(responseResult, "text/html");
                                const el = response.body.querySelector(popupSelector);
                                document.body.appendChild(el);
                                setTimeout((() => {
                                    _modules_js__WEBPACK_IMPORTED_MODULE_0__.S.popup.open(popupSelector);
                                }), 110);
                            }
                        }
                    }), 0);
                    formValidate.formClean(form);
                }
            }
            const initInputMask = (context = document) => {
                const telInputs = context.querySelectorAll('input[type="tel"]');
                telInputs.forEach((input => {
                    Inputmask({
                        mask: "+7 (999) 999-9999",
                        showMaskOnHover: false
                    }).mask(input);
                }));
            };
        },
        713: (__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {
            "use strict";
            var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(627);
            __webpack_require__(125);
            const inputMasks = document.querySelectorAll('input[type="tel"]');
            if (inputMasks.length) _modules_js__WEBPACK_IMPORTED_MODULE_0__.S.inputmask = Inputmask("+7(999) 999-9999", {
                showMaskOnHover: false
            }).mask(inputMasks);
        },
        784: () => {
            "use strict";
            var PipsMode;
            (function(PipsMode) {
                PipsMode["Range"] = "range";
                PipsMode["Steps"] = "steps";
                PipsMode["Positions"] = "positions";
                PipsMode["Count"] = "count";
                PipsMode["Values"] = "values";
            })(PipsMode || (PipsMode = {}));
            var PipsType;
            (function(PipsType) {
                PipsType[PipsType["None"] = -1] = "None";
                PipsType[PipsType["NoValue"] = 0] = "NoValue";
                PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
                PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
            })(PipsType || (PipsType = {}));
            function isValidFormatter(entry) {
                return isValidPartialFormatter(entry) && typeof entry.from === "function";
            }
            function isValidPartialFormatter(entry) {
                return typeof entry === "object" && typeof entry.to === "function";
            }
            function removeElement(el) {
                el.parentElement.removeChild(el);
            }
            function isSet(value) {
                return value !== null && value !== void 0;
            }
            function preventDefault(e) {
                e.preventDefault();
            }
            function unique(array) {
                return array.filter((function(a) {
                    return !this[a] ? this[a] = true : false;
                }), {});
            }
            function closest(value, to) {
                return Math.round(value / to) * to;
            }
            function offset(elem, orientation) {
                var rect = elem.getBoundingClientRect();
                var doc = elem.ownerDocument;
                var docElem = doc.documentElement;
                var pageOffset = getPageOffset(doc);
                if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) pageOffset.x = 0;
                return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
            }
            function isNumeric(a) {
                return typeof a === "number" && !isNaN(a) && isFinite(a);
            }
            function addClassFor(element, className, duration) {
                if (duration > 0) {
                    addClass(element, className);
                    setTimeout((function() {
                        removeClass(element, className);
                    }), duration);
                }
            }
            function limit(a) {
                return Math.max(Math.min(a, 100), 0);
            }
            function asArray(a) {
                return Array.isArray(a) ? a : [ a ];
            }
            function countDecimals(numStr) {
                numStr = String(numStr);
                var pieces = numStr.split(".");
                return pieces.length > 1 ? pieces[1].length : 0;
            }
            function addClass(el, className) {
                if (el.classList && !/\s/.test(className)) el.classList.add(className); else el.className += " " + className;
            }
            function removeClass(el, className) {
                if (el.classList && !/\s/.test(className)) el.classList.remove(className); else el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            }
            function hasClass(el, className) {
                return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
            }
            function getPageOffset(doc) {
                var supportPageOffset = window.pageXOffset !== void 0;
                var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
                var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
                var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
                return {
                    x,
                    y
                };
            }
            function getActions() {
                return window.navigator.pointerEnabled ? {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                } : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                };
            }
            function getSupportsPassive() {
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, "passive", {
                        get: function() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener("test", null, opts);
                } catch (e) {}
                return supportsPassive;
            }
            function getSupportsTouchActionNone() {
                return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
            }
            function subRangeRatio(pa, pb) {
                return 100 / (pb - pa);
            }
            function fromPercentage(range, value, startRange) {
                return value * 100 / (range[startRange + 1] - range[startRange]);
            }
            function toPercentage(range, value) {
                return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
            }
            function isPercentage(range, value) {
                return value * (range[1] - range[0]) / 100 + range[0];
            }
            function getJ(value, arr) {
                var j = 1;
                while (value >= arr[j]) j += 1;
                return j;
            }
            function toStepping(xVal, xPct, value) {
                if (value >= xVal.slice(-1)[0]) return 100;
                var j = getJ(value, xVal);
                var va = xVal[j - 1];
                var vb = xVal[j];
                var pa = xPct[j - 1];
                var pb = xPct[j];
                return pa + toPercentage([ va, vb ], value) / subRangeRatio(pa, pb);
            }
            function fromStepping(xVal, xPct, value) {
                if (value >= 100) return xVal.slice(-1)[0];
                var j = getJ(value, xPct);
                var va = xVal[j - 1];
                var vb = xVal[j];
                var pa = xPct[j - 1];
                var pb = xPct[j];
                return isPercentage([ va, vb ], (value - pa) * subRangeRatio(pa, pb));
            }
            function getStep(xPct, xSteps, snap, value) {
                if (value === 100) return value;
                var j = getJ(value, xPct);
                var a = xPct[j - 1];
                var b = xPct[j];
                if (snap) {
                    if (value - a > (b - a) / 2) return b;
                    return a;
                }
                if (!xSteps[j - 1]) return value;
                return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
            }
            var Spectrum = function() {
                function Spectrum(entry, snap, singleStep) {
                    this.xPct = [];
                    this.xVal = [];
                    this.xSteps = [];
                    this.xNumSteps = [];
                    this.xHighestCompleteStep = [];
                    this.xSteps = [ singleStep || false ];
                    this.xNumSteps = [ false ];
                    this.snap = snap;
                    var index;
                    var ordered = [];
                    Object.keys(entry).forEach((function(index) {
                        ordered.push([ asArray(entry[index]), index ]);
                    }));
                    ordered.sort((function(a, b) {
                        return a[0][0] - b[0][0];
                    }));
                    for (index = 0; index < ordered.length; index++) this.handleEntryPoint(ordered[index][1], ordered[index][0]);
                    this.xNumSteps = this.xSteps.slice(0);
                    for (index = 0; index < this.xNumSteps.length; index++) this.handleStepPoint(index, this.xNumSteps[index]);
                }
                Spectrum.prototype.getDistance = function(value) {
                    var distances = [];
                    for (var index = 0; index < this.xNumSteps.length - 1; index++) distances[index] = fromPercentage(this.xVal, value, index);
                    return distances;
                };
                Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
                    var xPct_index = 0;
                    if (value < this.xPct[this.xPct.length - 1]) while (value > this.xPct[xPct_index + 1]) xPct_index++; else if (value === this.xPct[this.xPct.length - 1]) xPct_index = this.xPct.length - 2;
                    if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++;
                    if (distances === null) distances = [];
                    var start_factor;
                    var rest_factor = 1;
                    var rest_rel_distance = distances[xPct_index];
                    var range_pct = 0;
                    var rel_range_distance = 0;
                    var abs_distance_counter = 0;
                    var range_counter = 0;
                    if (direction) start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]); else start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
                    while (rest_rel_distance > 0) {
                        range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                        if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                            rel_range_distance = range_pct * start_factor;
                            rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                            start_factor = 1;
                        } else {
                            rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
                            rest_factor = 0;
                        }
                        if (direction) {
                            abs_distance_counter -= rel_range_distance;
                            if (this.xPct.length + range_counter >= 1) range_counter--;
                        } else {
                            abs_distance_counter += rel_range_distance;
                            if (this.xPct.length - range_counter >= 1) range_counter++;
                        }
                        rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
                    }
                    return value + abs_distance_counter;
                };
                Spectrum.prototype.toStepping = function(value) {
                    value = toStepping(this.xVal, this.xPct, value);
                    return value;
                };
                Spectrum.prototype.fromStepping = function(value) {
                    return fromStepping(this.xVal, this.xPct, value);
                };
                Spectrum.prototype.getStep = function(value) {
                    value = getStep(this.xPct, this.xSteps, this.snap, value);
                    return value;
                };
                Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
                    var j = getJ(value, this.xPct);
                    if (value === 100 || isDown && value === this.xPct[j - 1]) j = Math.max(j - 1, 1);
                    return (this.xVal[j] - this.xVal[j - 1]) / size;
                };
                Spectrum.prototype.getNearbySteps = function(value) {
                    var j = getJ(value, this.xPct);
                    return {
                        stepBefore: {
                            startValue: this.xVal[j - 2],
                            step: this.xNumSteps[j - 2],
                            highestStep: this.xHighestCompleteStep[j - 2]
                        },
                        thisStep: {
                            startValue: this.xVal[j - 1],
                            step: this.xNumSteps[j - 1],
                            highestStep: this.xHighestCompleteStep[j - 1]
                        },
                        stepAfter: {
                            startValue: this.xVal[j],
                            step: this.xNumSteps[j],
                            highestStep: this.xHighestCompleteStep[j]
                        }
                    };
                };
                Spectrum.prototype.countStepDecimals = function() {
                    var stepDecimals = this.xNumSteps.map(countDecimals);
                    return Math.max.apply(null, stepDecimals);
                };
                Spectrum.prototype.hasNoSize = function() {
                    return this.xVal[0] === this.xVal[this.xVal.length - 1];
                };
                Spectrum.prototype.convert = function(value) {
                    return this.getStep(this.toStepping(value));
                };
                Spectrum.prototype.handleEntryPoint = function(index, value) {
                    var percentage;
                    if (index === "min") percentage = 0; else if (index === "max") percentage = 100; else percentage = parseFloat(index);
                    if (!isNumeric(percentage) || !isNumeric(value[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                    this.xPct.push(percentage);
                    this.xVal.push(value[0]);
                    var value1 = Number(value[1]);
                    if (!percentage) {
                        if (!isNaN(value1)) this.xSteps[0] = value1;
                    } else this.xSteps.push(isNaN(value1) ? false : value1);
                    this.xHighestCompleteStep.push(0);
                };
                Spectrum.prototype.handleStepPoint = function(i, n) {
                    if (!n) return;
                    if (this.xVal[i] === this.xVal[i + 1]) {
                        this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                        return;
                    }
                    this.xSteps[i] = fromPercentage([ this.xVal[i], this.xVal[i + 1] ], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
                    var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
                    var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
                    var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
                    this.xHighestCompleteStep[i] = step;
                };
                return Spectrum;
            }();
            var defaultFormatter = {
                to: function(value) {
                    return value === void 0 ? "" : value.toFixed(2);
                },
                from: Number
            };
            var cssClasses = {
                target: "target",
                base: "base",
                origin: "origin",
                handle: "handle",
                handleLower: "handle-lower",
                handleUpper: "handle-upper",
                touchArea: "touch-area",
                horizontal: "horizontal",
                vertical: "vertical",
                background: "background",
                connect: "connect",
                connects: "connects",
                ltr: "ltr",
                rtl: "rtl",
                textDirectionLtr: "txt-dir-ltr",
                textDirectionRtl: "txt-dir-rtl",
                draggable: "draggable",
                drag: "state-drag",
                tap: "state-tap",
                active: "active",
                tooltip: "tooltip",
                pips: "pips",
                pipsHorizontal: "pips-horizontal",
                pipsVertical: "pips-vertical",
                marker: "marker",
                markerHorizontal: "marker-horizontal",
                markerVertical: "marker-vertical",
                markerNormal: "marker-normal",
                markerLarge: "marker-large",
                markerSub: "marker-sub",
                value: "value",
                valueHorizontal: "value-horizontal",
                valueVertical: "value-vertical",
                valueNormal: "value-normal",
                valueLarge: "value-large",
                valueSub: "value-sub"
            };
            var INTERNAL_EVENT_NS = {
                tooltips: ".__tooltips",
                aria: ".__aria"
            };
            function testStep(parsed, entry) {
                if (!isNumeric(entry)) throw new Error("noUiSlider: 'step' is not numeric.");
                parsed.singleStep = entry;
            }
            function testKeyboardPageMultiplier(parsed, entry) {
                if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
                parsed.keyboardPageMultiplier = entry;
            }
            function testKeyboardMultiplier(parsed, entry) {
                if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
                parsed.keyboardMultiplier = entry;
            }
            function testKeyboardDefaultStep(parsed, entry) {
                if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
                parsed.keyboardDefaultStep = entry;
            }
            function testRange(parsed, entry) {
                if (typeof entry !== "object" || Array.isArray(entry)) throw new Error("noUiSlider: 'range' is not an object.");
                if (entry.min === void 0 || entry.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
                parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
            }
            function testStart(parsed, entry) {
                entry = asArray(entry);
                if (!Array.isArray(entry) || !entry.length) throw new Error("noUiSlider: 'start' option is incorrect.");
                parsed.handles = entry.length;
                parsed.start = entry;
            }
            function testSnap(parsed, entry) {
                if (typeof entry !== "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
                parsed.snap = entry;
            }
            function testAnimate(parsed, entry) {
                if (typeof entry !== "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
                parsed.animate = entry;
            }
            function testAnimationDuration(parsed, entry) {
                if (typeof entry !== "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
                parsed.animationDuration = entry;
            }
            function testConnect(parsed, entry) {
                var connect = [ false ];
                var i;
                if (entry === "lower") entry = [ true, false ]; else if (entry === "upper") entry = [ false, true ];
                if (entry === true || entry === false) {
                    for (i = 1; i < parsed.handles; i++) connect.push(entry);
                    connect.push(false);
                } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); else connect = entry;
                parsed.connect = connect;
            }
            function testOrientation(parsed, entry) {
                switch (entry) {
                  case "horizontal":
                    parsed.ort = 0;
                    break;

                  case "vertical":
                    parsed.ort = 1;
                    break;

                  default:
                    throw new Error("noUiSlider: 'orientation' option is invalid.");
                }
            }
            function testMargin(parsed, entry) {
                if (!isNumeric(entry)) throw new Error("noUiSlider: 'margin' option must be numeric.");
                if (entry === 0) return;
                parsed.margin = parsed.spectrum.getDistance(entry);
            }
            function testLimit(parsed, entry) {
                if (!isNumeric(entry)) throw new Error("noUiSlider: 'limit' option must be numeric.");
                parsed.limit = parsed.spectrum.getDistance(entry);
                if (!parsed.limit || parsed.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
            }
            function testPadding(parsed, entry) {
                var index;
                if (!isNumeric(entry) && !Array.isArray(entry)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
                if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
                if (entry === 0) return;
                if (!Array.isArray(entry)) entry = [ entry, entry ];
                parsed.padding = [ parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1]) ];
                for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
                var totalPadding = entry[0] + entry[1];
                var firstValue = parsed.spectrum.xVal[0];
                var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
                if (totalPadding / (lastValue - firstValue) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
            }
            function testDirection(parsed, entry) {
                switch (entry) {
                  case "ltr":
                    parsed.dir = 0;
                    break;

                  case "rtl":
                    parsed.dir = 1;
                    break;

                  default:
                    throw new Error("noUiSlider: 'direction' option was not recognized.");
                }
            }
            function testBehaviour(parsed, entry) {
                if (typeof entry !== "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
                var tap = entry.indexOf("tap") >= 0;
                var drag = entry.indexOf("drag") >= 0;
                var fixed = entry.indexOf("fixed") >= 0;
                var snap = entry.indexOf("snap") >= 0;
                var hover = entry.indexOf("hover") >= 0;
                var unconstrained = entry.indexOf("unconstrained") >= 0;
                var dragAll = entry.indexOf("drag-all") >= 0;
                var smoothSteps = entry.indexOf("smooth-steps") >= 0;
                if (fixed) {
                    if (parsed.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                    testMargin(parsed, parsed.start[1] - parsed.start[0]);
                }
                if (unconstrained && (parsed.margin || parsed.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
                parsed.events = {
                    tap: tap || snap,
                    drag,
                    dragAll,
                    smoothSteps,
                    fixed,
                    snap,
                    hover,
                    unconstrained
                };
            }
            function testTooltips(parsed, entry) {
                if (entry === false) return;
                if (entry === true || isValidPartialFormatter(entry)) {
                    parsed.tooltips = [];
                    for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry);
                } else {
                    entry = asArray(entry);
                    if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                    entry.forEach((function(formatter) {
                        if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                    }));
                    parsed.tooltips = entry;
                }
            }
            function testHandleAttributes(parsed, entry) {
                if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
                parsed.handleAttributes = entry;
            }
            function testAriaFormat(parsed, entry) {
                if (!isValidPartialFormatter(entry)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
                parsed.ariaFormat = entry;
            }
            function testFormat(parsed, entry) {
                if (!isValidFormatter(entry)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
                parsed.format = entry;
            }
            function testKeyboardSupport(parsed, entry) {
                if (typeof entry !== "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
                parsed.keyboardSupport = entry;
            }
            function testDocumentElement(parsed, entry) {
                parsed.documentElement = entry;
            }
            function testCssPrefix(parsed, entry) {
                if (typeof entry !== "string" && entry !== false) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
                parsed.cssPrefix = entry;
            }
            function testCssClasses(parsed, entry) {
                if (typeof entry !== "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
                if (typeof parsed.cssPrefix === "string") {
                    parsed.cssClasses = {};
                    Object.keys(entry).forEach((function(key) {
                        parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
                    }));
                } else parsed.cssClasses = entry;
            }
            function testOptions(options) {
                var parsed = {
                    margin: null,
                    limit: null,
                    padding: null,
                    animate: true,
                    animationDuration: 300,
                    ariaFormat: defaultFormatter,
                    format: defaultFormatter
                };
                var tests = {
                    step: {
                        r: false,
                        t: testStep
                    },
                    keyboardPageMultiplier: {
                        r: false,
                        t: testKeyboardPageMultiplier
                    },
                    keyboardMultiplier: {
                        r: false,
                        t: testKeyboardMultiplier
                    },
                    keyboardDefaultStep: {
                        r: false,
                        t: testKeyboardDefaultStep
                    },
                    start: {
                        r: true,
                        t: testStart
                    },
                    connect: {
                        r: true,
                        t: testConnect
                    },
                    direction: {
                        r: true,
                        t: testDirection
                    },
                    snap: {
                        r: false,
                        t: testSnap
                    },
                    animate: {
                        r: false,
                        t: testAnimate
                    },
                    animationDuration: {
                        r: false,
                        t: testAnimationDuration
                    },
                    range: {
                        r: true,
                        t: testRange
                    },
                    orientation: {
                        r: false,
                        t: testOrientation
                    },
                    margin: {
                        r: false,
                        t: testMargin
                    },
                    limit: {
                        r: false,
                        t: testLimit
                    },
                    padding: {
                        r: false,
                        t: testPadding
                    },
                    behaviour: {
                        r: true,
                        t: testBehaviour
                    },
                    ariaFormat: {
                        r: false,
                        t: testAriaFormat
                    },
                    format: {
                        r: false,
                        t: testFormat
                    },
                    tooltips: {
                        r: false,
                        t: testTooltips
                    },
                    keyboardSupport: {
                        r: true,
                        t: testKeyboardSupport
                    },
                    documentElement: {
                        r: false,
                        t: testDocumentElement
                    },
                    cssPrefix: {
                        r: true,
                        t: testCssPrefix
                    },
                    cssClasses: {
                        r: true,
                        t: testCssClasses
                    },
                    handleAttributes: {
                        r: false,
                        t: testHandleAttributes
                    }
                };
                var defaults = {
                    connect: false,
                    direction: "ltr",
                    behaviour: "tap",
                    orientation: "horizontal",
                    keyboardSupport: true,
                    cssPrefix: "noUi-",
                    cssClasses,
                    keyboardPageMultiplier: 5,
                    keyboardMultiplier: 1,
                    keyboardDefaultStep: 10
                };
                if (options.format && !options.ariaFormat) options.ariaFormat = options.format;
                Object.keys(tests).forEach((function(name) {
                    if (!isSet(options[name]) && defaults[name] === void 0) {
                        if (tests[name].r) throw new Error("noUiSlider: '" + name + "' is required.");
                        return;
                    }
                    tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
                }));
                parsed.pips = options.pips;
                var d = document.createElement("div");
                var msPrefix = d.style.msTransform !== void 0;
                var noPrefix = d.style.transform !== void 0;
                parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
                var styles = [ [ "left", "top" ], [ "right", "bottom" ] ];
                parsed.style = styles[parsed.dir][parsed.ort];
                return parsed;
            }
            function scope(target, options, originalOptions) {
                var actions = getActions();
                var supportsTouchActionNone = getSupportsTouchActionNone();
                var supportsPassive = supportsTouchActionNone && getSupportsPassive();
                var scope_Target = target;
                var scope_Base;
                var scope_Handles;
                var scope_Connects;
                var scope_Pips;
                var scope_Tooltips;
                var scope_Spectrum = options.spectrum;
                var scope_Values = [];
                var scope_Locations = [];
                var scope_HandleNumbers = [];
                var scope_ActiveHandlesCount = 0;
                var scope_Events = {};
                var scope_Document = target.ownerDocument;
                var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
                var scope_Body = scope_Document.body;
                var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
                function addNodeTo(addTarget, className) {
                    var div = scope_Document.createElement("div");
                    if (className) addClass(div, className);
                    addTarget.appendChild(div);
                    return div;
                }
                function addOrigin(base, handleNumber) {
                    var origin = addNodeTo(base, options.cssClasses.origin);
                    var handle = addNodeTo(origin, options.cssClasses.handle);
                    addNodeTo(handle, options.cssClasses.touchArea);
                    handle.setAttribute("data-handle", String(handleNumber));
                    if (options.keyboardSupport) {
                        handle.setAttribute("tabindex", "0");
                        handle.addEventListener("keydown", (function(event) {
                            return eventKeydown(event, handleNumber);
                        }));
                    }
                    if (options.handleAttributes !== void 0) {
                        var attributes_1 = options.handleAttributes[handleNumber];
                        Object.keys(attributes_1).forEach((function(attribute) {
                            handle.setAttribute(attribute, attributes_1[attribute]);
                        }));
                    }
                    handle.setAttribute("role", "slider");
                    handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
                    if (handleNumber === 0) addClass(handle, options.cssClasses.handleLower); else if (handleNumber === options.handles - 1) addClass(handle, options.cssClasses.handleUpper);
                    origin.handle = handle;
                    return origin;
                }
                function addConnect(base, add) {
                    if (!add) return false;
                    return addNodeTo(base, options.cssClasses.connect);
                }
                function addElements(connectOptions, base) {
                    var connectBase = addNodeTo(base, options.cssClasses.connects);
                    scope_Handles = [];
                    scope_Connects = [];
                    scope_Connects.push(addConnect(connectBase, connectOptions[0]));
                    for (var i = 0; i < options.handles; i++) {
                        scope_Handles.push(addOrigin(base, i));
                        scope_HandleNumbers[i] = i;
                        scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
                    }
                }
                function addSlider(addTarget) {
                    addClass(addTarget, options.cssClasses.target);
                    if (options.dir === 0) addClass(addTarget, options.cssClasses.ltr); else addClass(addTarget, options.cssClasses.rtl);
                    if (options.ort === 0) addClass(addTarget, options.cssClasses.horizontal); else addClass(addTarget, options.cssClasses.vertical);
                    var textDirection = getComputedStyle(addTarget).direction;
                    if (textDirection === "rtl") addClass(addTarget, options.cssClasses.textDirectionRtl); else addClass(addTarget, options.cssClasses.textDirectionLtr);
                    return addNodeTo(addTarget, options.cssClasses.base);
                }
                function addTooltip(handle, handleNumber) {
                    if (!options.tooltips || !options.tooltips[handleNumber]) return false;
                    return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
                }
                function isSliderDisabled() {
                    return scope_Target.hasAttribute("disabled");
                }
                function isHandleDisabled(handleNumber) {
                    var handleOrigin = scope_Handles[handleNumber];
                    return handleOrigin.hasAttribute("disabled");
                }
                function disable(handleNumber) {
                    if (handleNumber !== null && handleNumber !== void 0) {
                        scope_Handles[handleNumber].setAttribute("disabled", "");
                        scope_Handles[handleNumber].handle.removeAttribute("tabindex");
                    } else {
                        scope_Target.setAttribute("disabled", "");
                        scope_Handles.forEach((function(handle) {
                            handle.handle.removeAttribute("tabindex");
                        }));
                    }
                }
                function enable(handleNumber) {
                    if (handleNumber !== null && handleNumber !== void 0) {
                        scope_Handles[handleNumber].removeAttribute("disabled");
                        scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
                    } else {
                        scope_Target.removeAttribute("disabled");
                        scope_Handles.forEach((function(handle) {
                            handle.removeAttribute("disabled");
                            handle.handle.setAttribute("tabindex", "0");
                        }));
                    }
                }
                function removeTooltips() {
                    if (scope_Tooltips) {
                        removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                        scope_Tooltips.forEach((function(tooltip) {
                            if (tooltip) removeElement(tooltip);
                        }));
                        scope_Tooltips = null;
                    }
                }
                function tooltips() {
                    removeTooltips();
                    scope_Tooltips = scope_Handles.map(addTooltip);
                    bindEvent("update" + INTERNAL_EVENT_NS.tooltips, (function(values, handleNumber, unencoded) {
                        if (!scope_Tooltips || !options.tooltips) return;
                        if (scope_Tooltips[handleNumber] === false) return;
                        var formattedValue = values[handleNumber];
                        if (options.tooltips[handleNumber] !== true) formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                        scope_Tooltips[handleNumber].innerHTML = formattedValue;
                    }));
                }
                function aria() {
                    removeEvent("update" + INTERNAL_EVENT_NS.aria);
                    bindEvent("update" + INTERNAL_EVENT_NS.aria, (function(values, handleNumber, unencoded, tap, positions) {
                        scope_HandleNumbers.forEach((function(index) {
                            var handle = scope_Handles[index];
                            var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                            var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                            var now = positions[index];
                            var text = String(options.ariaFormat.to(unencoded[index]));
                            min = scope_Spectrum.fromStepping(min).toFixed(1);
                            max = scope_Spectrum.fromStepping(max).toFixed(1);
                            now = scope_Spectrum.fromStepping(now).toFixed(1);
                            handle.children[0].setAttribute("aria-valuemin", min);
                            handle.children[0].setAttribute("aria-valuemax", max);
                            handle.children[0].setAttribute("aria-valuenow", now);
                            handle.children[0].setAttribute("aria-valuetext", text);
                        }));
                    }));
                }
                function getGroup(pips) {
                    if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) return scope_Spectrum.xVal;
                    if (pips.mode === PipsMode.Count) {
                        if (pips.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                        var interval = pips.values - 1;
                        var spread = 100 / interval;
                        var values = [];
                        while (interval--) values[interval] = interval * spread;
                        values.push(100);
                        return mapToRange(values, pips.stepped);
                    }
                    if (pips.mode === PipsMode.Positions) return mapToRange(pips.values, pips.stepped);
                    if (pips.mode === PipsMode.Values) {
                        if (pips.stepped) return pips.values.map((function(value) {
                            return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                        }));
                        return pips.values;
                    }
                    return [];
                }
                function mapToRange(values, stepped) {
                    return values.map((function(value) {
                        return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                    }));
                }
                function generateSpread(pips) {
                    function safeIncrement(value, increment) {
                        return Number((value + increment).toFixed(7));
                    }
                    var group = getGroup(pips);
                    var indexes = {};
                    var firstInRange = scope_Spectrum.xVal[0];
                    var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
                    var ignoreFirst = false;
                    var ignoreLast = false;
                    var prevPct = 0;
                    group = unique(group.slice().sort((function(a, b) {
                        return a - b;
                    })));
                    if (group[0] !== firstInRange) {
                        group.unshift(firstInRange);
                        ignoreFirst = true;
                    }
                    if (group[group.length - 1] !== lastInRange) {
                        group.push(lastInRange);
                        ignoreLast = true;
                    }
                    group.forEach((function(current, index) {
                        var step;
                        var i;
                        var q;
                        var low = current;
                        var high = group[index + 1];
                        var newPct;
                        var pctDifference;
                        var pctPos;
                        var type;
                        var steps;
                        var realSteps;
                        var stepSize;
                        var isSteps = pips.mode === PipsMode.Steps;
                        if (isSteps) step = scope_Spectrum.xNumSteps[index];
                        if (!step) step = high - low;
                        if (high === void 0) high = low;
                        step = Math.max(step, 1e-7);
                        for (i = low; i <= high; i = safeIncrement(i, step)) {
                            newPct = scope_Spectrum.toStepping(i);
                            pctDifference = newPct - prevPct;
                            steps = pctDifference / (pips.density || 1);
                            realSteps = Math.round(steps);
                            stepSize = pctDifference / realSteps;
                            for (q = 1; q <= realSteps; q += 1) {
                                pctPos = prevPct + q * stepSize;
                                indexes[pctPos.toFixed(5)] = [ scope_Spectrum.fromStepping(pctPos), 0 ];
                            }
                            type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                            if (!index && ignoreFirst && i !== high) type = 0;
                            if (!(i === high && ignoreLast)) indexes[newPct.toFixed(5)] = [ i, type ];
                            prevPct = newPct;
                        }
                    }));
                    return indexes;
                }
                function addMarking(spread, filterFunc, formatter) {
                    var _a, _b;
                    var element = scope_Document.createElement("div");
                    var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, 
                    _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, 
                    _a);
                    var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, 
                    _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, 
                    _b);
                    var valueOrientationClasses = [ options.cssClasses.valueHorizontal, options.cssClasses.valueVertical ];
                    var markerOrientationClasses = [ options.cssClasses.markerHorizontal, options.cssClasses.markerVertical ];
                    addClass(element, options.cssClasses.pips);
                    addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
                    function getClasses(type, source) {
                        var a = source === options.cssClasses.value;
                        var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                        var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                        return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
                    }
                    function addSpread(offset, value, type) {
                        type = filterFunc ? filterFunc(value, type) : type;
                        if (type === PipsType.None) return;
                        var node = addNodeTo(element, false);
                        node.className = getClasses(type, options.cssClasses.marker);
                        node.style[options.style] = offset + "%";
                        if (type > PipsType.NoValue) {
                            node = addNodeTo(element, false);
                            node.className = getClasses(type, options.cssClasses.value);
                            node.setAttribute("data-value", String(value));
                            node.style[options.style] = offset + "%";
                            node.innerHTML = String(formatter.to(value));
                        }
                    }
                    Object.keys(spread).forEach((function(offset) {
                        addSpread(offset, spread[offset][0], spread[offset][1]);
                    }));
                    return element;
                }
                function removePips() {
                    if (scope_Pips) {
                        removeElement(scope_Pips);
                        scope_Pips = null;
                    }
                }
                function pips(pips) {
                    removePips();
                    var spread = generateSpread(pips);
                    var filter = pips.filter;
                    var format = pips.format || {
                        to: function(value) {
                            return String(Math.round(value));
                        }
                    };
                    scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
                    return scope_Pips;
                }
                function baseSize() {
                    var rect = scope_Base.getBoundingClientRect();
                    var alt = "offset" + [ "Width", "Height" ][options.ort];
                    return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
                }
                function attachEvent(events, element, callback, data) {
                    var method = function(event) {
                        var e = fixEvent(event, data.pageOffset, data.target || element);
                        if (!e) return false;
                        if (isSliderDisabled() && !data.doNotReject) return false;
                        if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) return false;
                        if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) return false;
                        if (data.hover && e.buttons) return false;
                        if (!supportsPassive) e.preventDefault();
                        e.calcPoint = e.points[options.ort];
                        callback(e, data);
                        return;
                    };
                    var methods = [];
                    events.split(" ").forEach((function(eventName) {
                        element.addEventListener(eventName, method, supportsPassive ? {
                            passive: true
                        } : false);
                        methods.push([ eventName, method ]);
                    }));
                    return methods;
                }
                function fixEvent(e, pageOffset, eventTarget) {
                    var touch = e.type.indexOf("touch") === 0;
                    var mouse = e.type.indexOf("mouse") === 0;
                    var pointer = e.type.indexOf("pointer") === 0;
                    var x = 0;
                    var y = 0;
                    if (e.type.indexOf("MSPointer") === 0) pointer = true;
                    if (e.type === "mousedown" && !e.buttons && !e.touches) return false;
                    if (touch) {
                        var isTouchOnTarget = function(checkTouch) {
                            var target = checkTouch.target;
                            return target === eventTarget || eventTarget.contains(target) || e.composed && e.composedPath().shift() === eventTarget;
                        };
                        if (e.type === "touchstart") {
                            var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                            if (targetTouches.length > 1) return false;
                            x = targetTouches[0].pageX;
                            y = targetTouches[0].pageY;
                        } else {
                            var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                            if (!targetTouch) return false;
                            x = targetTouch.pageX;
                            y = targetTouch.pageY;
                        }
                    }
                    pageOffset = pageOffset || getPageOffset(scope_Document);
                    if (mouse || pointer) {
                        x = e.clientX + pageOffset.x;
                        y = e.clientY + pageOffset.y;
                    }
                    e.pageOffset = pageOffset;
                    e.points = [ x, y ];
                    e.cursor = mouse || pointer;
                    return e;
                }
                function calcPointToPercentage(calcPoint) {
                    var location = calcPoint - offset(scope_Base, options.ort);
                    var proposal = location * 100 / baseSize();
                    proposal = limit(proposal);
                    return options.dir ? 100 - proposal : proposal;
                }
                function getClosestHandle(clickedPosition) {
                    var smallestDifference = 100;
                    var handleNumber = false;
                    scope_Handles.forEach((function(handle, index) {
                        if (isHandleDisabled(index)) return;
                        var handlePosition = scope_Locations[index];
                        var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                        var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                        var isCloser = differenceWithThisHandle < smallestDifference;
                        var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                        if (isCloser || isCloserAfter || clickAtEdge) {
                            handleNumber = index;
                            smallestDifference = differenceWithThisHandle;
                        }
                    }));
                    return handleNumber;
                }
                function documentLeave(event, data) {
                    if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) eventEnd(event, data);
                }
                function eventMove(event, data) {
                    if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) return eventEnd(event, data);
                    var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
                    var proposal = movement * 100 / data.baseSize;
                    moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
                }
                function eventEnd(event, data) {
                    if (data.handle) {
                        removeClass(data.handle, options.cssClasses.active);
                        scope_ActiveHandlesCount -= 1;
                    }
                    data.listeners.forEach((function(c) {
                        scope_DocumentElement.removeEventListener(c[0], c[1]);
                    }));
                    if (scope_ActiveHandlesCount === 0) {
                        removeClass(scope_Target, options.cssClasses.drag);
                        setZindex();
                        if (event.cursor) {
                            scope_Body.style.cursor = "";
                            scope_Body.removeEventListener("selectstart", preventDefault);
                        }
                    }
                    if (options.events.smoothSteps) {
                        data.handleNumbers.forEach((function(handleNumber) {
                            setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                        }));
                        data.handleNumbers.forEach((function(handleNumber) {
                            fireEvent("update", handleNumber);
                        }));
                    }
                    data.handleNumbers.forEach((function(handleNumber) {
                        fireEvent("change", handleNumber);
                        fireEvent("set", handleNumber);
                        fireEvent("end", handleNumber);
                    }));
                }
                function eventStart(event, data) {
                    if (data.handleNumbers.some(isHandleDisabled)) return;
                    var handle;
                    if (data.handleNumbers.length === 1) {
                        var handleOrigin = scope_Handles[data.handleNumbers[0]];
                        handle = handleOrigin.children[0];
                        scope_ActiveHandlesCount += 1;
                        addClass(handle, options.cssClasses.active);
                    }
                    event.stopPropagation();
                    var listeners = [];
                    var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                        target: event.target,
                        handle,
                        connect: data.connect,
                        listeners,
                        startCalcPoint: event.calcPoint,
                        baseSize: baseSize(),
                        pageOffset: event.pageOffset,
                        handleNumbers: data.handleNumbers,
                        buttonsProperty: event.buttons,
                        locations: scope_Locations.slice()
                    });
                    var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                        target: event.target,
                        handle,
                        listeners,
                        doNotReject: true,
                        handleNumbers: data.handleNumbers
                    });
                    var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                        target: event.target,
                        handle,
                        listeners,
                        doNotReject: true,
                        handleNumbers: data.handleNumbers
                    });
                    listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
                    if (event.cursor) {
                        scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                        if (scope_Handles.length > 1) addClass(scope_Target, options.cssClasses.drag);
                        scope_Body.addEventListener("selectstart", preventDefault, false);
                    }
                    data.handleNumbers.forEach((function(handleNumber) {
                        fireEvent("start", handleNumber);
                    }));
                }
                function eventTap(event) {
                    event.stopPropagation();
                    var proposal = calcPointToPercentage(event.calcPoint);
                    var handleNumber = getClosestHandle(proposal);
                    if (handleNumber === false) return;
                    if (!options.events.snap) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                    setHandle(handleNumber, proposal, true, true);
                    setZindex();
                    fireEvent("slide", handleNumber, true);
                    fireEvent("update", handleNumber, true);
                    if (!options.events.snap) {
                        fireEvent("change", handleNumber, true);
                        fireEvent("set", handleNumber, true);
                    } else eventStart(event, {
                        handleNumbers: [ handleNumber ]
                    });
                }
                function eventHover(event) {
                    var proposal = calcPointToPercentage(event.calcPoint);
                    var to = scope_Spectrum.getStep(proposal);
                    var value = scope_Spectrum.fromStepping(to);
                    Object.keys(scope_Events).forEach((function(targetEvent) {
                        if ("hover" === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach((function(callback) {
                            callback.call(scope_Self, value);
                        }));
                    }));
                }
                function eventKeydown(event, handleNumber) {
                    if (isSliderDisabled() || isHandleDisabled(handleNumber)) return false;
                    var horizontalKeys = [ "Left", "Right" ];
                    var verticalKeys = [ "Down", "Up" ];
                    var largeStepKeys = [ "PageDown", "PageUp" ];
                    var edgeKeys = [ "Home", "End" ];
                    if (options.dir && !options.ort) horizontalKeys.reverse(); else if (options.ort && !options.dir) {
                        verticalKeys.reverse();
                        largeStepKeys.reverse();
                    }
                    var key = event.key.replace("Arrow", "");
                    var isLargeDown = key === largeStepKeys[0];
                    var isLargeUp = key === largeStepKeys[1];
                    var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
                    var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
                    var isMin = key === edgeKeys[0];
                    var isMax = key === edgeKeys[1];
                    if (!isDown && !isUp && !isMin && !isMax) return true;
                    event.preventDefault();
                    var to;
                    if (isUp || isDown) {
                        var direction = isDown ? 0 : 1;
                        var steps = getNextStepsForHandle(handleNumber);
                        var step = steps[direction];
                        if (step === null) return false;
                        if (step === false) step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                        if (isLargeUp || isLargeDown) step *= options.keyboardPageMultiplier; else step *= options.keyboardMultiplier;
                        step = Math.max(step, 1e-7);
                        step *= isDown ? -1 : 1;
                        to = scope_Values[handleNumber] + step;
                    } else if (isMax) to = options.spectrum.xVal[options.spectrum.xVal.length - 1]; else to = options.spectrum.xVal[0];
                    setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
                    fireEvent("slide", handleNumber);
                    fireEvent("update", handleNumber);
                    fireEvent("change", handleNumber);
                    fireEvent("set", handleNumber);
                    return false;
                }
                function bindSliderEvents(behaviour) {
                    if (!behaviour.fixed) scope_Handles.forEach((function(handle, index) {
                        attachEvent(actions.start, handle.children[0], eventStart, {
                            handleNumbers: [ index ]
                        });
                    }));
                    if (behaviour.tap) attachEvent(actions.start, scope_Base, eventTap, {});
                    if (behaviour.hover) attachEvent(actions.move, scope_Base, eventHover, {
                        hover: true
                    });
                    if (behaviour.drag) scope_Connects.forEach((function(connect, index) {
                        if (connect === false || index === 0 || index === scope_Connects.length - 1) return;
                        var handleBefore = scope_Handles[index - 1];
                        var handleAfter = scope_Handles[index];
                        var eventHolders = [ connect ];
                        var handlesToDrag = [ handleBefore, handleAfter ];
                        var handleNumbersToDrag = [ index - 1, index ];
                        addClass(connect, options.cssClasses.draggable);
                        if (behaviour.fixed) {
                            eventHolders.push(handleBefore.children[0]);
                            eventHolders.push(handleAfter.children[0]);
                        }
                        if (behaviour.dragAll) {
                            handlesToDrag = scope_Handles;
                            handleNumbersToDrag = scope_HandleNumbers;
                        }
                        eventHolders.forEach((function(eventHolder) {
                            attachEvent(actions.start, eventHolder, eventStart, {
                                handles: handlesToDrag,
                                handleNumbers: handleNumbersToDrag,
                                connect
                            });
                        }));
                    }));
                }
                function bindEvent(namespacedEvent, callback) {
                    scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
                    scope_Events[namespacedEvent].push(callback);
                    if (namespacedEvent.split(".")[0] === "update") scope_Handles.forEach((function(a, index) {
                        fireEvent("update", index);
                    }));
                }
                function isInternalNamespace(namespace) {
                    return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
                }
                function removeEvent(namespacedEvent) {
                    var event = namespacedEvent && namespacedEvent.split(".")[0];
                    var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
                    Object.keys(scope_Events).forEach((function(bind) {
                        var tEvent = bind.split(".")[0];
                        var tNamespace = bind.substring(tEvent.length);
                        if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) if (!isInternalNamespace(tNamespace) || namespace === tNamespace) delete scope_Events[bind];
                    }));
                }
                function fireEvent(eventName, handleNumber, tap) {
                    Object.keys(scope_Events).forEach((function(targetEvent) {
                        var eventType = targetEvent.split(".")[0];
                        if (eventName === eventType) scope_Events[targetEvent].forEach((function(callback) {
                            callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
                        }));
                    }));
                }
                function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
                    var distance;
                    if (scope_Handles.length > 1 && !options.events.unconstrained) {
                        if (lookBackward && handleNumber > 0) {
                            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                            to = Math.max(to, distance);
                        }
                        if (lookForward && handleNumber < scope_Handles.length - 1) {
                            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                            to = Math.min(to, distance);
                        }
                    }
                    if (scope_Handles.length > 1 && options.limit) {
                        if (lookBackward && handleNumber > 0) {
                            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                            to = Math.min(to, distance);
                        }
                        if (lookForward && handleNumber < scope_Handles.length - 1) {
                            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                            to = Math.max(to, distance);
                        }
                    }
                    if (options.padding) {
                        if (handleNumber === 0) {
                            distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                            to = Math.max(to, distance);
                        }
                        if (handleNumber === scope_Handles.length - 1) {
                            distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                            to = Math.min(to, distance);
                        }
                    }
                    if (!smoothSteps) to = scope_Spectrum.getStep(to);
                    to = limit(to);
                    if (to === reference[handleNumber] && !getValue) return false;
                    return to;
                }
                function inRuleOrder(v, a) {
                    var o = options.ort;
                    return (o ? a : v) + ", " + (o ? v : a);
                }
                function moveHandles(upward, proposal, locations, handleNumbers, connect) {
                    var proposals = locations.slice();
                    var firstHandle = handleNumbers[0];
                    var smoothSteps = options.events.smoothSteps;
                    var b = [ !upward, upward ];
                    var f = [ upward, !upward ];
                    handleNumbers = handleNumbers.slice();
                    if (upward) handleNumbers.reverse();
                    if (handleNumbers.length > 1) handleNumbers.forEach((function(handleNumber, o) {
                        var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                        if (to === false) proposal = 0; else {
                            proposal = to - proposals[handleNumber];
                            proposals[handleNumber] = to;
                        }
                    })); else b = f = [ true ];
                    var state = false;
                    handleNumbers.forEach((function(handleNumber, o) {
                        state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
                    }));
                    if (state) {
                        handleNumbers.forEach((function(handleNumber) {
                            fireEvent("update", handleNumber);
                            fireEvent("slide", handleNumber);
                        }));
                        if (connect != void 0) fireEvent("drag", firstHandle);
                    }
                }
                function transformDirection(a, b) {
                    return options.dir ? 100 - a - b : a;
                }
                function updateHandlePosition(handleNumber, to) {
                    scope_Locations[handleNumber] = to;
                    scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
                    var translation = transformDirection(to, 0) - scope_DirOffset;
                    var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
                    scope_Handles[handleNumber].style[options.transformRule] = translateRule;
                    updateConnect(handleNumber);
                    updateConnect(handleNumber + 1);
                }
                function setZindex() {
                    scope_HandleNumbers.forEach((function(handleNumber) {
                        var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                        var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                        scope_Handles[handleNumber].style.zIndex = String(zIndex);
                    }));
                }
                function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
                    if (!exactInput) to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
                    if (to === false) return false;
                    updateHandlePosition(handleNumber, to);
                    return true;
                }
                function updateConnect(index) {
                    if (!scope_Connects[index]) return;
                    var l = 0;
                    var h = 100;
                    if (index !== 0) l = scope_Locations[index - 1];
                    if (index !== scope_Connects.length - 1) h = scope_Locations[index];
                    var connectWidth = h - l;
                    var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
                    var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
                    scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
                }
                function resolveToValue(to, handleNumber) {
                    if (to === null || to === false || to === void 0) return scope_Locations[handleNumber];
                    if (typeof to === "number") to = String(to);
                    to = options.format.from(to);
                    if (to !== false) to = scope_Spectrum.toStepping(to);
                    if (to === false || isNaN(to)) return scope_Locations[handleNumber];
                    return to;
                }
                function valueSet(input, fireSetEvent, exactInput) {
                    var values = asArray(input);
                    var isInit = scope_Locations[0] === void 0;
                    fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
                    if (options.animate && !isInit) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                    scope_HandleNumbers.forEach((function(handleNumber) {
                        setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
                    }));
                    var i = scope_HandleNumbers.length === 1 ? 0 : 1;
                    if (isInit && scope_Spectrum.hasNoSize()) {
                        exactInput = true;
                        scope_Locations[0] = 0;
                        if (scope_HandleNumbers.length > 1) {
                            var space_1 = 100 / (scope_HandleNumbers.length - 1);
                            scope_HandleNumbers.forEach((function(handleNumber) {
                                scope_Locations[handleNumber] = handleNumber * space_1;
                            }));
                        }
                    }
                    for (;i < scope_HandleNumbers.length; ++i) scope_HandleNumbers.forEach((function(handleNumber) {
                        setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                    }));
                    setZindex();
                    scope_HandleNumbers.forEach((function(handleNumber) {
                        fireEvent("update", handleNumber);
                        if (values[handleNumber] !== null && fireSetEvent) fireEvent("set", handleNumber);
                    }));
                }
                function valueReset(fireSetEvent) {
                    valueSet(options.start, fireSetEvent);
                }
                function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
                    handleNumber = Number(handleNumber);
                    if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
                    setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
                    fireEvent("update", handleNumber);
                    if (fireSetEvent) fireEvent("set", handleNumber);
                }
                function valueGet(unencoded) {
                    if (unencoded === void 0) unencoded = false;
                    if (unencoded) return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
                    var values = scope_Values.map(options.format.to);
                    if (values.length === 1) return values[0];
                    return values;
                }
                function destroy() {
                    removeEvent(INTERNAL_EVENT_NS.aria);
                    removeEvent(INTERNAL_EVENT_NS.tooltips);
                    Object.keys(options.cssClasses).forEach((function(key) {
                        removeClass(scope_Target, options.cssClasses[key]);
                    }));
                    while (scope_Target.firstChild) scope_Target.removeChild(scope_Target.firstChild);
                    delete scope_Target.noUiSlider;
                }
                function getNextStepsForHandle(handleNumber) {
                    var location = scope_Locations[handleNumber];
                    var nearbySteps = scope_Spectrum.getNearbySteps(location);
                    var value = scope_Values[handleNumber];
                    var increment = nearbySteps.thisStep.step;
                    var decrement = null;
                    if (options.snap) return [ value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null ];
                    if (increment !== false) if (value + increment > nearbySteps.stepAfter.startValue) increment = nearbySteps.stepAfter.startValue - value;
                    if (value > nearbySteps.thisStep.startValue) decrement = nearbySteps.thisStep.step; else if (nearbySteps.stepBefore.step === false) decrement = false; else decrement = value - nearbySteps.stepBefore.highestStep;
                    if (location === 100) increment = null; else if (location === 0) decrement = null;
                    var stepDecimals = scope_Spectrum.countStepDecimals();
                    if (increment !== null && increment !== false) increment = Number(increment.toFixed(stepDecimals));
                    if (decrement !== null && decrement !== false) decrement = Number(decrement.toFixed(stepDecimals));
                    return [ decrement, increment ];
                }
                function getNextSteps() {
                    return scope_HandleNumbers.map(getNextStepsForHandle);
                }
                function updateOptions(optionsToUpdate, fireSetEvent) {
                    var v = valueGet();
                    var updateAble = [ "margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips" ];
                    updateAble.forEach((function(name) {
                        if (optionsToUpdate[name] !== void 0) originalOptions[name] = optionsToUpdate[name];
                    }));
                    var newOptions = testOptions(originalOptions);
                    updateAble.forEach((function(name) {
                        if (optionsToUpdate[name] !== void 0) options[name] = newOptions[name];
                    }));
                    scope_Spectrum = newOptions.spectrum;
                    options.margin = newOptions.margin;
                    options.limit = newOptions.limit;
                    options.padding = newOptions.padding;
                    if (options.pips) pips(options.pips); else removePips();
                    if (options.tooltips) tooltips(); else removeTooltips();
                    scope_Locations = [];
                    valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
                }
                function setupSlider() {
                    scope_Base = addSlider(scope_Target);
                    addElements(options.connect, scope_Base);
                    bindSliderEvents(options.events);
                    valueSet(options.start);
                    if (options.pips) pips(options.pips);
                    if (options.tooltips) tooltips();
                    aria();
                }
                setupSlider();
                var scope_Self = {
                    destroy,
                    steps: getNextSteps,
                    on: bindEvent,
                    off: removeEvent,
                    get: valueGet,
                    set: valueSet,
                    setHandle: valueSetHandle,
                    reset: valueReset,
                    disable,
                    enable,
                    __moveHandles: function(upward, proposal, handleNumbers) {
                        moveHandles(upward, proposal, scope_Locations, handleNumbers);
                    },
                    options: originalOptions,
                    updateOptions,
                    target: scope_Target,
                    removePips,
                    removeTooltips,
                    getPositions: function() {
                        return scope_Locations.slice();
                    },
                    getTooltips: function() {
                        return scope_Tooltips;
                    },
                    getOrigins: function() {
                        return scope_Handles;
                    },
                    pips
                };
                return scope_Self;
            }
            function initialize(target, originalOptions) {
                if (!target || !target.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + target);
                if (target.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
                var options = testOptions(originalOptions);
                var api = scope(target, options, originalOptions);
                target.noUiSlider = api;
                return api;
            }
            function rangeInit() {
                let rangeBlocks = document.querySelectorAll(".filter-item__range");
                if (rangeBlocks) rangeBlocks.forEach((function(item) {
                    var formatForSlider = {
                        from: function(formattedValue) {
                            return Number(formattedValue);
                        },
                        to: function(numericValue) {
                            return Math.round(numericValue);
                        }
                    };
                    let rangeItem = item.querySelector(".range-slider");
                    let min = Number(rangeItem.dataset.min);
                    let max = Number(rangeItem.dataset.max);
                    initialize(rangeItem, {
                        start: [ min, max ],
                        connect: true,
                        range: {
                            min,
                            max
                        },
                        format: formatForSlider
                    });
                    let inputMin = item.querySelector(".js-range-input-min");
                    let inputMax = item.querySelector(".js-range-input-max");
                    let inputs = [ inputMin, inputMax ];
                    if (inputMax) {
                        inputMin.addEventListener("change", setPriceValues);
                        inputMax.addEventListener("change", setPriceValues);
                        function setPriceValues() {
                            let priceStartValue;
                            let priceEndValue;
                            if (inputMin.value != "") priceStartValue = inputMin.value;
                            if (inputMax.value != "") priceEndValue = inputMax.value;
                            rangeItem.noUiSlider.set([ priceStartValue, priceEndValue ]);
                        }
                        rangeItem.noUiSlider.on("change", (function(values, handle) {
                            inputs[handle].value = values[handle];
                        }));
                    }
                }));
            }
            rangeInit();
        },
        307: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                An: () => isWebp,
                Fd: () => filterInit,
                Fp: () => menuInit,
                P2: () => throttle,
                Ww: () => _slideUp,
                _y: () => _slideToggle,
                d0: () => FLS,
                fA: () => bodyLockStatus,
                lq: () => spollers,
                qg: () => bodyLock,
                xF: () => bodyUnlock
            });
            __webpack_require__(627);
            function isWebp() {
                function testWebP(callback) {
                    let webP = new Image;
                    webP.onload = webP.onerror = function() {
                        callback(webP.height == 2);
                    };
                    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
                }
                testWebP((function(support) {
                    let className = support === true ? "webp" : "no-webp";
                    document.documentElement.classList.add(className);
                }));
            }
            let _slideUp = (target, duration = 500, showmore = 0) => {
                if (!target.classList.contains("_slide")) {
                    target.classList.add("_slide");
                    target.style.transitionProperty = "height, margin, padding";
                    target.style.transitionDuration = duration + "ms";
                    target.style.height = `${target.offsetHeight}px`;
                    target.offsetHeight;
                    target.style.overflow = "hidden";
                    target.style.height = showmore ? `${showmore}px` : `0px`;
                    target.style.paddingTop = 0;
                    target.style.paddingBottom = 0;
                    target.style.marginTop = 0;
                    target.style.marginBottom = 0;
                    window.setTimeout((() => {
                        target.hidden = !showmore ? true : false;
                        !showmore ? target.style.removeProperty("height") : null;
                        target.style.removeProperty("padding-top");
                        target.style.removeProperty("padding-bottom");
                        target.style.removeProperty("margin-top");
                        target.style.removeProperty("margin-bottom");
                        !showmore ? target.style.removeProperty("overflow") : null;
                        target.style.removeProperty("transition-duration");
                        target.style.removeProperty("transition-property");
                        target.classList.remove("_slide");
                        document.dispatchEvent(new CustomEvent("slideUpDone", {
                            detail: {
                                target
                            }
                        }));
                    }), duration);
                }
            };
            let _slideDown = (target, duration = 500, showmore = 0) => {
                if (!target.classList.contains("_slide")) {
                    target.classList.add("_slide");
                    target.hidden = target.hidden ? false : null;
                    showmore ? target.style.removeProperty("height") : null;
                    let height = target.offsetHeight;
                    target.style.overflow = "hidden";
                    target.style.height = showmore ? `${showmore}px` : `0px`;
                    target.style.paddingTop = 0;
                    target.style.paddingBottom = 0;
                    target.style.marginTop = 0;
                    target.style.marginBottom = 0;
                    target.offsetHeight;
                    target.style.transitionProperty = "height, margin, padding";
                    target.style.transitionDuration = duration + "ms";
                    target.style.height = height + "px";
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    window.setTimeout((() => {
                        target.style.removeProperty("height");
                        target.style.removeProperty("overflow");
                        target.style.removeProperty("transition-duration");
                        target.style.removeProperty("transition-property");
                        target.classList.remove("_slide");
                        document.dispatchEvent(new CustomEvent("slideDownDone", {
                            detail: {
                                target
                            }
                        }));
                    }), duration);
                }
            };
            let _slideToggle = (target, duration = 500) => {
                if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
            };
            let bodyLockStatus = true;
            let bodyLockToggle = (delay = 500) => {
                if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
            };
            let bodyUnlock = (delay = 500) => {
                let body = document.querySelector("body");
                if (bodyLockStatus) {
                    let lock_padding = document.querySelectorAll("[data-lp]");
                    setTimeout((() => {
                        for (let index = 0; index < lock_padding.length; index++) {
                            const el = lock_padding[index];
                            el.style.paddingRight = "0px";
                        }
                        body.style.paddingRight = "0px";
                        document.documentElement.classList.remove("lock");
                    }), delay);
                    bodyLockStatus = false;
                    setTimeout((function() {
                        bodyLockStatus = true;
                    }), delay);
                }
            };
            let bodyLock = (delay = 500) => {
                let body = document.querySelector("body");
                if (bodyLockStatus) {
                    let lock_padding = document.querySelectorAll("[data-lp]");
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                    }
                    body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                    document.documentElement.classList.add("lock");
                    bodyLockStatus = false;
                    setTimeout((function() {
                        bodyLockStatus = true;
                    }), delay);
                }
            };
            function spollers() {
                const spollersArray = document.querySelectorAll("[data-spollers]");
                if (spollersArray.length > 0) {
                    document.addEventListener("click", setSpollerAction);
                    const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                        return !item.dataset.spollers.split(",")[0];
                    }));
                    if (spollersRegular.length) initSpollers(spollersRegular);
                    let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                    if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                        mdQueriesItem.matchMedia.addEventListener("change", (function() {
                            initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                        }));
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    function initSpollers(spollersArray, matchMedia = false) {
                        spollersArray.forEach((spollersBlock => {
                            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                            if (matchMedia.matches || !matchMedia) {
                                spollersBlock.classList.add("_spoller-init");
                                initSpollerBody(spollersBlock);
                            } else {
                                spollersBlock.classList.remove("_spoller-init");
                                initSpollerBody(spollersBlock, false);
                            }
                        }));
                    }
                    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                        let spollerItems = spollersBlock.querySelectorAll("details");
                        if (spollerItems.length) spollerItems.forEach((spollerItem => {
                            let spollerTitle = spollerItem.querySelector("summary");
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerItem.hasAttribute("data-open")) {
                                    spollerItem.open = false;
                                    spollerTitle.nextElementSibling.hidden = true;
                                } else {
                                    spollerTitle.classList.add("_spoller-active");
                                    spollerItem.open = true;
                                }
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.classList.remove("_spoller-active");
                                spollerItem.open = true;
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                    function setSpollerAction(e) {
                        const el = e.target;
                        if (el.closest("summary") && el.closest("[data-spollers]")) {
                            e.preventDefault();
                            if (el.closest("[data-spollers]").classList.contains("_spoller-init")) {
                                const spollerTitle = el.closest("summary");
                                const spollerBlock = spollerTitle.closest("details");
                                const spollersBlock = spollerTitle.closest("[data-spollers]");
                                const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                                const scrollSpoller = spollerBlock.hasAttribute("data-spoller-scroll");
                                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                                if (!spollersBlock.querySelectorAll("._slide").length) {
                                    if (oneSpoller && !spollerBlock.open) hideSpollersBody(spollersBlock);
                                    !spollerBlock.open ? spollerBlock.open = true : setTimeout((() => {
                                        spollerBlock.open = false;
                                    }), spollerSpeed);
                                    spollerTitle.classList.toggle("_spoller-active");
                                    _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                                    if (scrollSpoller && spollerTitle.classList.contains("_spoller-active")) {
                                        const scrollSpollerValue = spollerBlock.dataset.spollerScroll;
                                        const scrollSpollerOffset = +scrollSpollerValue ? +scrollSpollerValue : 0;
                                        const scrollSpollerNoHeader = spollerBlock.hasAttribute("data-spoller-scroll-noheader") ? document.querySelector(".header").offsetHeight : 0;
                                        window.scrollTo({
                                            top: spollerBlock.offsetTop - (scrollSpollerOffset + scrollSpollerNoHeader),
                                            behavior: "smooth"
                                        });
                                    }
                                }
                            }
                        }
                        if (!el.closest("[data-spollers]")) {
                            const spollersClose = document.querySelectorAll("[data-spoller-close]");
                            if (spollersClose.length) spollersClose.forEach((spollerClose => {
                                const spollersBlock = spollerClose.closest("[data-spollers]");
                                const spollerCloseBlock = spollerClose.parentNode;
                                if (spollersBlock.classList.contains("_spoller-init")) {
                                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                                    spollerClose.classList.remove("_spoller-active");
                                    _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                                    setTimeout((() => {
                                        spollerCloseBlock.open = false;
                                    }), spollerSpeed);
                                }
                            }));
                        }
                    }
                    function hideSpollersBody(spollersBlock) {
                        const spollerActiveBlock = spollersBlock.querySelector("details[open]");
                        if (spollerActiveBlock && !spollersBlock.querySelectorAll("._slide").length) {
                            const spollerActiveTitle = spollerActiveBlock.querySelector("summary");
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerActiveTitle.classList.remove("_spoller-active");
                            _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                            setTimeout((() => {
                                spollerActiveBlock.open = false;
                            }), spollerSpeed);
                        }
                    }
                }
            }
            function menuInit() {
                const iconMenu = document.querySelector(".icon-menu");
                if (iconMenu) {
                    setAttr([ iconMenu ], "aria-expanded");
                    document.addEventListener("click", (function(e) {
                        if (bodyLockStatus && e.target.closest(".icon-menu")) {
                            bodyLockToggle();
                            toggleAttr([ iconMenu ], "aria-expanded");
                            document.documentElement.classList.toggle("menu-open");
                        }
                    }));
                }
            }
            function filterInit() {
                let filterOpenBtn = document.querySelector('[data-filter="open"]');
                let filterCloseBtn = document.querySelector('[data-filter="close"]');
                let filterOverlay = document.querySelector('[data-filter="overlay"]');
                let filter = document.querySelector('[data-filter="filters"]');
                function filterOpen() {
                    bodyLock();
                    filter.classList.add("is-open");
                }
                function filterClose() {
                    bodyUnlock();
                    filter.classList.remove("is-open");
                }
                if (filterOpenBtn) filterOpenBtn.addEventListener("click", (function() {
                    filterOpen();
                }));
                if (filterCloseBtn) filterCloseBtn.addEventListener("click", (function() {
                    filterClose();
                }));
                if (filterOverlay) filterOverlay.addEventListener("click", (function() {
                    filterClose();
                }));
            }
            function setAttr(array, attr) {
                for (let index = 0; index < array.length; index++) {
                    const element = array[index];
                    if (!element.hasAttribute(attr)) element.setAttribute(attr, "false");
                }
            }
            function toggleAttr(array, attr) {
                for (let index = 0; index < array.length; index++) {
                    const element = array[index];
                    if (element.getAttribute(attr) === "false") element.setAttribute(attr, "true"); else element.setAttribute(attr, "false");
                }
            }
            function FLS(message) {
                setTimeout((() => {
                    if (window.FLS) console.log(message);
                }), 0);
            }
            function uniqArray(array) {
                return array.filter((function(item, index, self) {
                    return self.indexOf(item) === index;
                }));
            }
            function dataMediaQueries(array, dataSetValue) {
                const media = Array.from(array).filter((function(item, index, self) {
                    if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
                }));
                if (media.length) {
                    const breakpointsArray = [];
                    media.forEach((item => {
                        const params = item.dataset[dataSetValue];
                        const breakpoint = {};
                        const paramsArray = params.split(",");
                        breakpoint.value = paramsArray[0];
                        breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                        breakpoint.item = item;
                        breakpointsArray.push(breakpoint);
                    }));
                    let mdQueries = breakpointsArray.map((function(item) {
                        return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                    }));
                    mdQueries = uniqArray(mdQueries);
                    const mdQueriesArray = [];
                    if (mdQueries.length) {
                        mdQueries.forEach((breakpoint => {
                            const paramsArray = breakpoint.split(",");
                            const mediaBreakpoint = paramsArray[1];
                            const mediaType = paramsArray[2];
                            const matchMedia = window.matchMedia(paramsArray[0]);
                            const itemsArray = breakpointsArray.filter((function(item) {
                                if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                            }));
                            mdQueriesArray.push({
                                itemsArray,
                                matchMedia
                            });
                        }));
                        return mdQueriesArray;
                    }
                }
            }
            const throttle = (delay, fn) => {
                let last;
                let deferTimer;
                return (...args) => {
                    const context = void 0;
                    const now = +new Date;
                    if (last && now < last + delay) {
                        clearTimeout(deferTimer);
                        deferTimer = setTimeout((() => {
                            last = now;
                            fn.apply(context, args);
                        }), delay);
                    } else {
                        last = now;
                        fn.apply(context, args);
                    }
                };
            };
        },
        627: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.d(__webpack_exports__, {
                S: () => flsModules
            });
            const flsModules = {};
        },
        794: (__webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.a(__webpack_module__, (async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
                try {
                    __webpack_require__(627);
                    var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(307);
                    const {default: gsap} = await __webpack_require__.e(775).then(__webpack_require__.bind(__webpack_require__, 358));
                    const {ScrollTrigger} = await __webpack_require__.e(775).then(__webpack_require__.bind(__webpack_require__, 92));
                    if (document.querySelector('[data-role*="tabs"]')) {
                        let tabsContainers = document.querySelectorAll('[data-role*="tabs"]');
                        tabsContainers.forEach((wrapper => {
                            let controls = wrapper.querySelectorAll("[data-tabs-control]"), panels = wrapper.querySelectorAll("[data-tabs-panel]");
                            controls.forEach((control => {
                                control.addEventListener("click", (e => {
                                    if (e.target.closest("[data-tabs-control]")) {
                                        e.preventDefault();
                                        let activeControl = e.target.closest("[data-tabs-control]"), activeId = activeControl.dataset.tabsControl;
                                        if (!activeControl.classList.contains("is-active")) {
                                            controls.forEach((oneMoreControl => {
                                                oneMoreControl.classList.remove("is-active");
                                            }));
                                            activeControl.classList.add("is-active");
                                            panels.forEach((panel => {
                                                panel.classList.remove("is-open");
                                            }));
                                            panels.forEach((panel => {
                                                if (panel.dataset.tabsPanel == activeId) panel.classList.add("is-open");
                                            }));
                                        }
                                    }
                                }));
                            }));
                        }));
                    }
                    gsap.registerPlugin(ScrollTrigger);
                    const setMinHeight = el => {
                        const height = el.getBoundingClientRect().height;
                        console.log(el);
                        document.body.setAttribute("style", `--height:${height}px`);
                    };
                    const hero = document.querySelector(".hero");
                    if (hero) {
                        setMinHeight(hero);
                        gsap.to(hero, {
                            y: -200,
                            scrollTrigger: {
                                scrub: .2,
                                trigger: hero,
                                pin: true,
                                start: "top top",
                                end: "top -100%",
                                invalidateOnRefresh: false
                            },
                            ease: "none"
                        });
                        gsap.fromTo(".hero-item__title-text", {
                            opacity: 0,
                            autoAlpha: 0,
                            y: 200
                        }, {
                            duration: 1,
                            opacity: 1,
                            autoAlpha: 1,
                            y: 0
                        });
                        gsap.fromTo(".hero-item__btn", {
                            opacity: 0,
                            autoAlpha: 0
                        }, {
                            opacity: 1,
                            autoAlpha: 1
                        });
                        gsap.fromTo(".hero-item__more", {
                            opacity: 0,
                            autoAlpha: 0
                        }, {
                            opacity: 1,
                            autoAlpha: 1
                        });
                        gsap.fromTo(".hero-item__adress", {
                            opacity: 0,
                            autoAlpha: 0
                        }, {
                            opacity: 1,
                            autoAlpha: 1
                        });
                        gsap.fromTo(".hero-item__details-list", {
                            opacity: 0,
                            y: 100
                        }, {
                            duration: 1.5,
                            opacity: 1,
                            y: 0
                        });
                        gsap.fromTo(".hero-item__details-point-round", {
                            scale: 0
                        }, {
                            duration: 1,
                            scale: 1
                        });
                        window.addEventListener("resize", (() => {
                            (0, _functions_js__WEBPACK_IMPORTED_MODULE_1__.P2)(200, setMinHeight(hero));
                        }));
                    }
                    const imgGallery = document.querySelector(".s-about__gallery") || false;
                    if (imgGallery) {
                        const pinWrap = imgGallery.querySelector(".s-about__gallery-slider");
                        let pinWrapWidth;
                        let horizontalScrollLength;
                        let spacer;
                        if (window.matchMedia("(min-width: 768px)").matches) spacer = 300; else spacer = 50;
                        function refresh() {
                            pinWrapWidth = pinWrap.scrollWidth;
                            horizontalScrollLength = pinWrapWidth - window.innerWidth + spacer;
                        }
                        refresh();
                        gsap.to(pinWrap, {
                            scrollTrigger: {
                                scrub: .2,
                                trigger: imgGallery,
                                pin: false,
                                start: "top bottom",
                                end: "top -100%",
                                invalidateOnRefresh: true
                            },
                            x: () => -horizontalScrollLength,
                            ease: "none"
                        });
                        ScrollTrigger.addEventListener("refreshInit", refresh);
                    }
                    let containerGallery = document.querySelectorAll(".js-marque");
                    if (containerGallery) containerGallery.forEach((item => {
                        const upGallery = item.querySelector(".js-up-gallery");
                        const downGallery = item.querySelector(".js-down-gallery");
                        if (window.matchMedia("(max-width: 767px)").matches) {
                            gsap.to(downGallery, {
                                scrollTrigger: {
                                    scrub: .2,
                                    trigger: item,
                                    pin: false,
                                    start: "top center",
                                    end: "top -500%",
                                    invalidateOnRefresh: true
                                },
                                x: () => -downGallery.scrollWidth,
                                ease: "none"
                            });
                            gsap.to(upGallery, {
                                scrollTrigger: {
                                    scrub: .2,
                                    trigger: item,
                                    pin: false,
                                    start: "top center",
                                    end: "top -500%",
                                    invalidateOnRefresh: true
                                },
                                x: () => upGallery.scrollWidth,
                                ease: "none"
                            });
                        } else {
                            gsap.to(downGallery, {
                                scrollTrigger: {
                                    scrub: .2,
                                    trigger: item,
                                    pin: false,
                                    start: "top bottom",
                                    end: "top -200%",
                                    invalidateOnRefresh: true
                                },
                                y: () => downGallery.scrollHeight,
                                ease: "none"
                            });
                            gsap.to(upGallery, {
                                scrollTrigger: {
                                    scrub: .2,
                                    trigger: item,
                                    pin: false,
                                    start: "top bottom",
                                    end: "top -500%",
                                    invalidateOnRefresh: true
                                },
                                y: () => -upGallery.scrollHeight,
                                ease: "none"
                            });
                        }
                    }));
                    let cardsWrapper = document.querySelectorAll(".cards");
                    if (cardsWrapper) if (window.matchMedia("(min-width: 1024px)").matches) cardsWrapper.forEach((item => {
                        let cards = item.querySelectorAll(".card");
                        let stickDistance = 20;
                        ScrollTrigger.create({
                            trigger: cards[0],
                            start: "center center"
                        });
                        let lastCardST = ScrollTrigger.create({
                            trigger: cards[cards.length - 1],
                            start: "bottom 760",
                            opacity: 1
                        });
                        cards.forEach(((card, index) => {
                            let opacityState;
                            var scale = 1 - (cards.length - index) * .025;
                            console.log(index, cards.length);
                            if (index === cards.length - 1) opacityState = 1; else opacityState = 0;
                            let scaleDown = gsap.to(card, {
                                scale,
                                "transform-origin": '"50% ' + (lastCardST.start + stickDistance) + '"',
                                opacity: opacityState
                            });
                            ScrollTrigger.create({
                                trigger: card,
                                start: "top 100px",
                                end: () => lastCardST.start + stickDistance,
                                pin: true,
                                pinSpacing: false,
                                ease: "none",
                                animation: scaleDown,
                                toggleActions: "restart none none reverse"
                            });
                        }));
                    }));
                    let aboutSection = document.querySelector(".s-about");
                    if (aboutSection) {
                        let aboutImg = aboutSection.querySelector(".s-about__img img");
                        let aboutSize = aboutSection.querySelector(".s-about__size");
                        gsap.fromTo(aboutImg, {
                            scale: .8
                        }, {
                            duration: 1,
                            scale: 1,
                            scrollTrigger: {
                                trigger: aboutSection,
                                scrub: 1.5,
                                start: "top center",
                                end: "+=400",
                                ease: "power1.out"
                            }
                        });
                        gsap.fromTo(aboutSize, {
                            y: 50,
                            opacity: 0
                        }, {
                            duration: 1.5,
                            y: 0,
                            opacity: 1,
                            scrollTrigger: {
                                trigger: aboutSection,
                                scrub: .5,
                                scrub: 1.5,
                                start: "-50px center",
                                end: "+=400",
                                ease: "power1.out"
                            }
                        });
                    }
                    let historySection = document.querySelector(".history");
                    if (historySection) {
                        let historyImg = historySection.querySelector(".history__main-img img");
                        gsap.fromTo(historyImg, {
                            scale: 1.2,
                            duration: 2.5
                        }, {
                            duration: 4,
                            scale: 1,
                            scrollTrigger: {
                                trigger: historySection,
                                scrub: 1.5,
                                start: "top center",
                                end: "+=500 center",
                                ease: "power1.out"
                            }
                        });
                    }
                    let bureauSection = document.querySelector(".bureau");
                    if (bureauSection) {
                        bureauSection.querySelector(".bureau__img-main");
                        let bureauImgSmall = bureauSection.querySelector(".bureau__img-small");
                        let bureauText = bureauSection.querySelector(".bureau__desc");
                        gsap.from(bureauImgSmall, {
                            scrollTrigger: {
                                scrub: .2,
                                trigger: bureauSection,
                                pin: false,
                                start: "top center",
                                end: "bottom bottom",
                                invalidateOnRefresh: true
                            },
                            opacity: 0,
                            ease: "none"
                        });
                        gsap.to(bureauText, {
                            scrollTrigger: {
                                scrub: .2,
                                trigger: bureauSection,
                                pin: false,
                                start: "top 100vh",
                                end: "bottom bottom",
                                invalidateOnRefresh: true
                            },
                            y: 0,
                            ease: "none"
                        });
                    }
                    var header = document.querySelector(".header");
                    var sticky = header.offsetTop;
                    function initStickyHeader() {
                        if (window.pageYOffset > sticky) header.classList.add("sticky"); else header.classList.remove("sticky");
                    }
                    window.onscroll = function() {
                        initStickyHeader();
                    };
                    let vh = window.innerHeight * .01;
                    document.documentElement.style.setProperty("--vh", `${vh}px`);
                    window.addEventListener("resize", (() => {
                        let vh = window.innerHeight * .01;
                        document.documentElement.style.setProperty("--vh", `${vh}px`);
                    }));
                    let complexesDropdown = document.querySelector(".js-dropdown");
                    if (complexesDropdown) {
                        let complexesDropdownHead = document.querySelector(".js-dropdown-toggle");
                        let complexesDropdownList = document.querySelector(".js-dropdown-content");
                        (0, _functions_js__WEBPACK_IMPORTED_MODULE_1__.Ww)(complexesDropdownList);
                        complexesDropdownHead.addEventListener("click", (function() {
                            complexesDropdownHead.classList.toggle("is-active");
                            (0, _functions_js__WEBPACK_IMPORTED_MODULE_1__._y)(complexesDropdownList);
                        }));
                    }
                    let houseFloors = document.querySelectorAll(".js-house-floor");
                    let mediaEvent;
                    if (window.matchMedia) mediaEvent = window.matchMedia("(max-width: 1023px)").matches ? "click" : "mouseenter";
                    if (houseFloors) {
                        let houseInfo = document.querySelectorAll(".js-house-info");
                        houseFloors.forEach((item => {
                            let dataFloor = item.dataset.floor;
                            item.dataset.floorType;
                            item.dataset.position;
                            console.log(item.offsetTop);
                            const svgElement = item.ownerSVGElement || pathElement;
                            const svgBox = svgElement.getBoundingClientRect();
                            console.log(svgElement);
                            let boundingBox = item.getBoundingClientRect();
                            const topPositionWithinSVG = boundingBox.top - svgBox.top;
                            const leftPositionWithinSVG = boundingBox.left - svgBox.left;
                            console.log(topPositionWithinSVG, leftPositionWithinSVG);
                            item.addEventListener(mediaEvent, (function() {
                                item.classList.add("is-active");
                                item.getBoundingClientRect();
                                let houseFloorInfo = document.querySelector(`.js-house-info[data-floor-info="${dataFloor}"]`);
                                houseFloorInfo.classList.add("is-open");
                            }));
                            item.addEventListener("mouseleave", (function() {
                                item.classList.remove("is-active");
                                let houseFloorInfo = document.querySelector(`.js-house-info[data-floor-info="${dataFloor}"]`);
                                houseFloorInfo.classList.remove("is-open");
                            }));
                        }));
                        if (houseInfo) houseInfo.forEach((item => {
                            let overlay = item.querySelector(".js-house-info-overlay");
                            overlay.addEventListener("click", (function() {
                                item.classList.remove("is-open");
                            }));
                        }));
                    }
                    let dragHint = document.querySelectorAll(".js-drag-hint");
                    if (dragHint) dragHint.forEach((item => {
                        item.addEventListener("touchstart", (() => {
                            item.classList.add("is-hidden");
                        }));
                    }));
                    __webpack_async_result__();
                } catch (e) {
                    __webpack_async_result__(e);
                }
            }), 1);
        },
        380: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__(307);
            __webpack_require__(627);
            let addWindowScrollEvent = false;
            window.addEventListener("hashchange", (() => {
                const anchor = window.location.hash;
                if (anchor) {
                    const target = document.getElementById(anchor.substring(1));
                    if (target) target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest"
                    });
                }
            }));
            setTimeout((() => {
                if (addWindowScrollEvent) {
                    let windowScroll = new Event("windowScroll");
                    window.addEventListener("scroll", (function(e) {
                        document.dispatchEvent(windowScroll);
                    }));
                }
            }), 0);
        },
        366: () => {
            "use strict";
            function isObject(obj) {
                return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
            }
            function extend(target, src) {
                if (target === void 0) target = {};
                if (src === void 0) src = {};
                Object.keys(src).forEach((key => {
                    if (typeof target[key] === "undefined") target[key] = src[key]; else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
                }));
            }
            const ssrDocument = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector() {
                    return null;
                },
                querySelectorAll() {
                    return [];
                },
                getElementById() {
                    return null;
                },
                createEvent() {
                    return {
                        initEvent() {}
                    };
                },
                createElement() {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute() {},
                        getElementsByTagName() {
                            return [];
                        }
                    };
                },
                createElementNS() {
                    return {};
                },
                importNode() {
                    return null;
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };
            function ssr_window_esm_getDocument() {
                const doc = typeof document !== "undefined" ? document : {};
                extend(doc, ssrDocument);
                return doc;
            }
            const ssrWindow = {
                document: ssrDocument,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function CustomEvent() {
                    return this;
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle() {
                    return {
                        getPropertyValue() {
                            return "";
                        }
                    };
                },
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia() {
                    return {};
                },
                requestAnimationFrame(callback) {
                    if (typeof setTimeout === "undefined") {
                        callback();
                        return null;
                    }
                    return setTimeout(callback, 0);
                },
                cancelAnimationFrame(id) {
                    if (typeof setTimeout === "undefined") return;
                    clearTimeout(id);
                }
            };
            function ssr_window_esm_getWindow() {
                const win = typeof window !== "undefined" ? window : {};
                extend(win, ssrWindow);
                return win;
            }
            function utils_classesToTokens(classes) {
                if (classes === void 0) classes = "";
                return classes.trim().split(" ").filter((c => !!c.trim()));
            }
            function deleteProps(obj) {
                const object = obj;
                Object.keys(object).forEach((key => {
                    try {
                        object[key] = null;
                    } catch (e) {}
                    try {
                        delete object[key];
                    } catch (e) {}
                }));
            }
            function utils_nextTick(callback, delay) {
                if (delay === void 0) delay = 0;
                return setTimeout(callback, delay);
            }
            function utils_now() {
                return Date.now();
            }
            function utils_getComputedStyle(el) {
                const window = ssr_window_esm_getWindow();
                let style;
                if (window.getComputedStyle) style = window.getComputedStyle(el, null);
                if (!style && el.currentStyle) style = el.currentStyle;
                if (!style) style = el.style;
                return style;
            }
            function utils_getTranslate(el, axis) {
                if (axis === void 0) axis = "x";
                const window = ssr_window_esm_getWindow();
                let matrix;
                let curTransform;
                let transformMatrix;
                const curStyle = utils_getComputedStyle(el);
                if (window.WebKitCSSMatrix) {
                    curTransform = curStyle.transform || curStyle.webkitTransform;
                    if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                    transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
                } else {
                    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                    matrix = transformMatrix.toString().split(",");
                }
                if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
                if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
                return curTransform || 0;
            }
            function utils_isObject(o) {
                return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
            }
            function isNode(node) {
                if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
                return node && (node.nodeType === 1 || node.nodeType === 11);
            }
            function utils_extend() {
                const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
                const noExtend = [ "__proto__", "constructor", "prototype" ];
                for (let i = 1; i < arguments.length; i += 1) {
                    const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                        const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                            const nextKey = keysArray[nextIndex];
                            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                            if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                                to[nextKey] = {};
                                if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                            } else to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
                return to;
            }
            function utils_setCSSProperty(el, varName, varValue) {
                el.style.setProperty(varName, varValue);
            }
            function animateCSSModeScroll(_ref) {
                let {swiper, targetPosition, side} = _ref;
                const window = ssr_window_esm_getWindow();
                const startPosition = -swiper.translate;
                let startTime = null;
                let time;
                const duration = swiper.params.speed;
                swiper.wrapperEl.style.scrollSnapType = "none";
                window.cancelAnimationFrame(swiper.cssModeFrameID);
                const dir = targetPosition > startPosition ? "next" : "prev";
                const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
                const animate = () => {
                    time = (new Date).getTime();
                    if (startTime === null) startTime = time;
                    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                    const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                    if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                    swiper.wrapperEl.scrollTo({
                        [side]: currentPosition
                    });
                    if (isOutOfBound(currentPosition, targetPosition)) {
                        swiper.wrapperEl.style.overflow = "hidden";
                        swiper.wrapperEl.style.scrollSnapType = "";
                        setTimeout((() => {
                            swiper.wrapperEl.style.overflow = "";
                            swiper.wrapperEl.scrollTo({
                                [side]: currentPosition
                            });
                        }));
                        window.cancelAnimationFrame(swiper.cssModeFrameID);
                        return;
                    }
                    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
                };
                animate();
            }
            function utils_getSlideTransformEl(slideEl) {
                return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
            }
            function utils_elementChildren(element, selector) {
                if (selector === void 0) selector = "";
                return [ ...element.children ].filter((el => el.matches(selector)));
            }
            function showWarning(text) {
                try {
                    console.warn(text);
                    return;
                } catch (err) {}
            }
            function utils_createElement(tag, classes) {
                if (classes === void 0) classes = [];
                const el = document.createElement(tag);
                el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
                return el;
            }
            function elementPrevAll(el, selector) {
                const prevEls = [];
                while (el.previousElementSibling) {
                    const prev = el.previousElementSibling;
                    if (selector) {
                        if (prev.matches(selector)) prevEls.push(prev);
                    } else prevEls.push(prev);
                    el = prev;
                }
                return prevEls;
            }
            function elementNextAll(el, selector) {
                const nextEls = [];
                while (el.nextElementSibling) {
                    const next = el.nextElementSibling;
                    if (selector) {
                        if (next.matches(selector)) nextEls.push(next);
                    } else nextEls.push(next);
                    el = next;
                }
                return nextEls;
            }
            function elementStyle(el, prop) {
                const window = ssr_window_esm_getWindow();
                return window.getComputedStyle(el, null).getPropertyValue(prop);
            }
            function elementIndex(el) {
                let child = el;
                let i;
                if (child) {
                    i = 0;
                    while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                    return i;
                }
                return;
            }
            function utils_elementParents(el, selector) {
                const parents = [];
                let parent = el.parentElement;
                while (parent) {
                    if (selector) {
                        if (parent.matches(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentElement;
                }
                return parents;
            }
            function utils_elementTransitionEnd(el, callback) {
                function fireCallBack(e) {
                    if (e.target !== el) return;
                    callback.call(el, e);
                    el.removeEventListener("transitionend", fireCallBack);
                }
                if (callback) el.addEventListener("transitionend", fireCallBack);
            }
            function elementOuterSize(el, size, includeMargins) {
                const window = ssr_window_esm_getWindow();
                if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
                return el.offsetWidth;
            }
            let support;
            function calcSupport() {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                return {
                    smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                    touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
                };
            }
            function getSupport() {
                if (!support) support = calcSupport();
                return support;
            }
            let deviceCached;
            function calcDevice(_temp) {
                let {userAgent} = _temp === void 0 ? {} : _temp;
                const support = getSupport();
                const window = ssr_window_esm_getWindow();
                const platform = window.navigator.platform;
                const ua = userAgent || window.navigator.userAgent;
                const device = {
                    ios: false,
                    android: false
                };
                const screenWidth = window.screen.width;
                const screenHeight = window.screen.height;
                const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
                let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
                const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
                const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                const windows = platform === "Win32";
                let macos = platform === "MacIntel";
                const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
                if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                    ipad = ua.match(/(Version)\/([\d.]+)/);
                    if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                    macos = false;
                }
                if (android && !windows) {
                    device.os = "android";
                    device.android = true;
                }
                if (ipad || iphone || ipod) {
                    device.os = "ios";
                    device.ios = true;
                }
                return device;
            }
            function getDevice(overrides) {
                if (overrides === void 0) overrides = {};
                if (!deviceCached) deviceCached = calcDevice(overrides);
                return deviceCached;
            }
            let browser;
            function calcBrowser() {
                const window = ssr_window_esm_getWindow();
                let needPerspectiveFix = false;
                function isSafari() {
                    const ua = window.navigator.userAgent.toLowerCase();
                    return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
                }
                if (isSafari()) {
                    const ua = String(window.navigator.userAgent);
                    if (ua.includes("Version/")) {
                        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                    }
                }
                return {
                    isSafari: needPerspectiveFix || isSafari(),
                    needPerspectiveFix,
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
                };
            }
            function getBrowser() {
                if (!browser) browser = calcBrowser();
                return browser;
            }
            function Resize(_ref) {
                let {swiper, on, emit} = _ref;
                const window = ssr_window_esm_getWindow();
                let observer = null;
                let animationFrame = null;
                const resizeHandler = () => {
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    emit("beforeResize");
                    emit("resize");
                };
                const createObserver = () => {
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    observer = new ResizeObserver((entries => {
                        animationFrame = window.requestAnimationFrame((() => {
                            const {width, height} = swiper;
                            let newWidth = width;
                            let newHeight = height;
                            entries.forEach((_ref2 => {
                                let {contentBoxSize, contentRect, target} = _ref2;
                                if (target && target !== swiper.el) return;
                                newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                                newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                            }));
                            if (newWidth !== width || newHeight !== height) resizeHandler();
                        }));
                    }));
                    observer.observe(swiper.el);
                };
                const removeObserver = () => {
                    if (animationFrame) window.cancelAnimationFrame(animationFrame);
                    if (observer && observer.unobserve && swiper.el) {
                        observer.unobserve(swiper.el);
                        observer = null;
                    }
                };
                const orientationChangeHandler = () => {
                    if (!swiper || swiper.destroyed || !swiper.initialized) return;
                    emit("orientationchange");
                };
                on("init", (() => {
                    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                        createObserver();
                        return;
                    }
                    window.addEventListener("resize", resizeHandler);
                    window.addEventListener("orientationchange", orientationChangeHandler);
                }));
                on("destroy", (() => {
                    removeObserver();
                    window.removeEventListener("resize", resizeHandler);
                    window.removeEventListener("orientationchange", orientationChangeHandler);
                }));
            }
            function Observer(_ref) {
                let {swiper, extendParams, on, emit} = _ref;
                const observers = [];
                const window = ssr_window_esm_getWindow();
                const attach = function(target, options) {
                    if (options === void 0) options = {};
                    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                    const observer = new ObserverFunc((mutations => {
                        if (swiper.__preventObserver__) return;
                        if (mutations.length === 1) {
                            emit("observerUpdate", mutations[0]);
                            return;
                        }
                        const observerUpdate = function observerUpdate() {
                            emit("observerUpdate", mutations[0]);
                        };
                        if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                    }));
                    observer.observe(target, {
                        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                        childList: typeof options.childList === "undefined" ? true : options.childList,
                        characterData: typeof options.characterData === "undefined" ? true : options.characterData
                    });
                    observers.push(observer);
                };
                const init = () => {
                    if (!swiper.params.observer) return;
                    if (swiper.params.observeParents) {
                        const containerParents = utils_elementParents(swiper.hostEl);
                        for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                    }
                    attach(swiper.hostEl, {
                        childList: swiper.params.observeSlideChildren
                    });
                    attach(swiper.wrapperEl, {
                        attributes: false
                    });
                };
                const destroy = () => {
                    observers.forEach((observer => {
                        observer.disconnect();
                    }));
                    observers.splice(0, observers.length);
                };
                extendParams({
                    observer: false,
                    observeParents: false,
                    observeSlideChildren: false
                });
                on("init", init);
                on("destroy", destroy);
            }
            var eventsEmitter = {
                on(events, handler, priority) {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (typeof handler !== "function") return self;
                    const method = priority ? "unshift" : "push";
                    events.split(" ").forEach((event => {
                        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                        self.eventsListeners[event][method](handler);
                    }));
                    return self;
                },
                once(events, handler, priority) {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (typeof handler !== "function") return self;
                    function onceHandler() {
                        self.off(events, onceHandler);
                        if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                        handler.apply(self, args);
                    }
                    onceHandler.__emitterProxy = handler;
                    return self.on(events, onceHandler, priority);
                },
                onAny(handler, priority) {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (typeof handler !== "function") return self;
                    const method = priority ? "unshift" : "push";
                    if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                    return self;
                },
                offAny(handler) {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (!self.eventsAnyListeners) return self;
                    const index = self.eventsAnyListeners.indexOf(handler);
                    if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                    return self;
                },
                off(events, handler) {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (!self.eventsListeners) return self;
                    events.split(" ").forEach((event => {
                        if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                        }));
                    }));
                    return self;
                },
                emit() {
                    const self = this;
                    if (!self.eventsListeners || self.destroyed) return self;
                    if (!self.eventsListeners) return self;
                    let events;
                    let data;
                    let context;
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    if (typeof args[0] === "string" || Array.isArray(args[0])) {
                        events = args[0];
                        data = args.slice(1, args.length);
                        context = self;
                    } else {
                        events = args[0].events;
                        data = args[0].data;
                        context = args[0].context || self;
                    }
                    data.unshift(context);
                    const eventsArray = Array.isArray(events) ? events : events.split(" ");
                    eventsArray.forEach((event => {
                        if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                            eventHandler.apply(context, [ event, ...data ]);
                        }));
                        if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                            eventHandler.apply(context, data);
                        }));
                    }));
                    return self;
                }
            };
            function updateSize() {
                const swiper = this;
                let width;
                let height;
                const el = swiper.el;
                if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
                if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
                if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
                width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
                height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
                if (Number.isNaN(width)) width = 0;
                if (Number.isNaN(height)) height = 0;
                Object.assign(swiper, {
                    width,
                    height,
                    size: swiper.isHorizontal() ? width : height
                });
            }
            function updateSlides() {
                const swiper = this;
                function getDirectionPropertyValue(node, label) {
                    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
                }
                const params = swiper.params;
                const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
                const isVirtual = swiper.virtual && params.virtual.enabled;
                const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
                const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
                const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
                let snapGrid = [];
                const slidesGrid = [];
                const slidesSizesGrid = [];
                let offsetBefore = params.slidesOffsetBefore;
                if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
                let offsetAfter = params.slidesOffsetAfter;
                if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
                const previousSnapGridLength = swiper.snapGrid.length;
                const previousSlidesGridLength = swiper.slidesGrid.length;
                let spaceBetween = params.spaceBetween;
                let slidePosition = -offsetBefore;
                let prevSlideSize = 0;
                let index = 0;
                if (typeof swiperSize === "undefined") return;
                if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
                swiper.virtualSize = -spaceBetween;
                slides.forEach((slideEl => {
                    if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                    slideEl.style.marginBottom = "";
                    slideEl.style.marginTop = "";
                }));
                if (params.centeredSlides && params.cssMode) {
                    utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                    utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
                }
                const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
                if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
                let slideSize;
                const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
                for (let i = 0; i < slidesLength; i += 1) {
                    slideSize = 0;
                    let slide;
                    if (slides[i]) slide = slides[i];
                    if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                    if (slides[i] && elementStyle(slide, "display") === "none") continue;
                    if (params.slidesPerView === "auto") {
                        if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                        const slideStyles = getComputedStyle(slide);
                        const currentTransform = slide.style.transform;
                        const currentWebKitTransform = slide.style.webkitTransform;
                        if (currentTransform) slide.style.transform = "none";
                        if (currentWebKitTransform) slide.style.webkitTransform = "none";
                        if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                            const width = getDirectionPropertyValue(slideStyles, "width");
                            const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                            const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                            const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                            const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                            const boxSizing = slideStyles.getPropertyValue("box-sizing");
                            if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                                const {clientWidth, offsetWidth} = slide;
                                slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                            }
                        }
                        if (currentTransform) slide.style.transform = currentTransform;
                        if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                        if (params.roundLengths) slideSize = Math.floor(slideSize);
                    } else {
                        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                        if (params.roundLengths) slideSize = Math.floor(slideSize);
                        if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                    }
                    if (slides[i]) slides[i].swiperSlideSize = slideSize;
                    slidesSizesGrid.push(slideSize);
                    if (params.centeredSlides) {
                        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                        if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                        slidesGrid.push(slidePosition);
                    } else {
                        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                        slidesGrid.push(slidePosition);
                        slidePosition = slidePosition + slideSize + spaceBetween;
                    }
                    swiper.virtualSize += slideSize + spaceBetween;
                    prevSlideSize = slideSize;
                    index += 1;
                }
                swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
                if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
                if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
                if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
                if (!params.centeredSlides) {
                    const newSlidesGrid = [];
                    for (let i = 0; i < snapGrid.length; i += 1) {
                        let slidesGridItem = snapGrid[i];
                        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                        if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                    }
                    snapGrid = newSlidesGrid;
                    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
                }
                if (isVirtual && params.loop) {
                    const size = slidesSizesGrid[0] + spaceBetween;
                    if (params.slidesPerGroup > 1) {
                        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                        const groupSize = size * params.slidesPerGroup;
                        for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                    }
                    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                        if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                        swiper.virtualSize += size;
                    }
                }
                if (snapGrid.length === 0) snapGrid = [ 0 ];
                if (spaceBetween !== 0) {
                    const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                    slides.filter(((_, slideIndex) => {
                        if (!params.cssMode || params.loop) return true;
                        if (slideIndex === slides.length - 1) return false;
                        return true;
                    })).forEach((slideEl => {
                        slideEl.style[key] = `${spaceBetween}px`;
                    }));
                }
                if (params.centeredSlides && params.centeredSlidesBounds) {
                    let allSlidesSize = 0;
                    slidesSizesGrid.forEach((slideSizeValue => {
                        allSlidesSize += slideSizeValue + (spaceBetween || 0);
                    }));
                    allSlidesSize -= spaceBetween;
                    const maxSnap = allSlidesSize - swiperSize;
                    snapGrid = snapGrid.map((snap => {
                        if (snap <= 0) return -offsetBefore;
                        if (snap > maxSnap) return maxSnap + offsetAfter;
                        return snap;
                    }));
                }
                if (params.centerInsufficientSlides) {
                    let allSlidesSize = 0;
                    slidesSizesGrid.forEach((slideSizeValue => {
                        allSlidesSize += slideSizeValue + (spaceBetween || 0);
                    }));
                    allSlidesSize -= spaceBetween;
                    if (allSlidesSize < swiperSize) {
                        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                        snapGrid.forEach(((snap, snapIndex) => {
                            snapGrid[snapIndex] = snap - allSlidesOffset;
                        }));
                        slidesGrid.forEach(((snap, snapIndex) => {
                            slidesGrid[snapIndex] = snap + allSlidesOffset;
                        }));
                    }
                }
                Object.assign(swiper, {
                    slides,
                    snapGrid,
                    slidesGrid,
                    slidesSizesGrid
                });
                if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                    utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                    utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                    const addToSnapGrid = -swiper.snapGrid[0];
                    const addToSlidesGrid = -swiper.slidesGrid[0];
                    swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                    swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
                }
                if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
                if (snapGrid.length !== previousSnapGridLength) {
                    if (swiper.params.watchOverflow) swiper.checkOverflow();
                    swiper.emit("snapGridLengthChange");
                }
                if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
                if (params.watchSlidesProgress) swiper.updateSlidesOffset();
                swiper.emit("slidesUpdated");
                if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                    if (slidesLength <= params.maxBackfaceHiddenSlides) {
                        if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                    } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
                }
            }
            function updateAutoHeight(speed) {
                const swiper = this;
                const activeSlides = [];
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                let newHeight = 0;
                let i;
                if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
                const getSlideByIndex = index => {
                    if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                    return swiper.slides[index];
                };
                if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                    activeSlides.push(slide);
                })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                    const index = swiper.activeIndex + i;
                    if (index > swiper.slides.length && !isVirtual) break;
                    activeSlides.push(getSlideByIndex(index));
                } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
                for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                    const height = activeSlides[i].offsetHeight;
                    newHeight = height > newHeight ? height : newHeight;
                }
                if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
            }
            function updateSlidesOffset() {
                const swiper = this;
                const slides = swiper.slides;
                const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
                for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
            }
            function updateSlidesProgress(translate) {
                if (translate === void 0) translate = this && this.translate || 0;
                const swiper = this;
                const params = swiper.params;
                const {slides, rtlTranslate: rtl, snapGrid} = swiper;
                if (slides.length === 0) return;
                if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
                let offsetCenter = -translate;
                if (rtl) offsetCenter = translate;
                slides.forEach((slideEl => {
                    slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
                }));
                swiper.visibleSlidesIndexes = [];
                swiper.visibleSlides = [];
                let spaceBetween = params.spaceBetween;
                if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
                for (let i = 0; i < slides.length; i += 1) {
                    const slide = slides[i];
                    let slideOffset = slide.swiperSlideOffset;
                    if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                    const slideBefore = -(offsetCenter - slideOffset);
                    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                    if (isVisible) {
                        swiper.visibleSlides.push(slide);
                        swiper.visibleSlidesIndexes.push(i);
                        slides[i].classList.add(params.slideVisibleClass);
                    }
                    if (isFullyVisible) slides[i].classList.add(params.slideFullyVisibleClass);
                    slide.progress = rtl ? -slideProgress : slideProgress;
                    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
                }
            }
            function updateProgress(translate) {
                const swiper = this;
                if (typeof translate === "undefined") {
                    const multiplier = swiper.rtlTranslate ? -1 : 1;
                    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
                }
                const params = swiper.params;
                const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                let {progress, isBeginning, isEnd, progressLoop} = swiper;
                const wasBeginning = isBeginning;
                const wasEnd = isEnd;
                if (translatesDiff === 0) {
                    progress = 0;
                    isBeginning = true;
                    isEnd = true;
                } else {
                    progress = (translate - swiper.minTranslate()) / translatesDiff;
                    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                    isBeginning = isBeginningRounded || progress <= 0;
                    isEnd = isEndRounded || progress >= 1;
                    if (isBeginningRounded) progress = 0;
                    if (isEndRounded) progress = 1;
                }
                if (params.loop) {
                    const firstSlideIndex = swiper.getSlideIndexByData(0);
                    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                    const translateAbs = Math.abs(translate);
                    if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                    if (progressLoop > 1) progressLoop -= 1;
                }
                Object.assign(swiper, {
                    progress,
                    progressLoop,
                    isBeginning,
                    isEnd
                });
                if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
                if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
                if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
                if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
                swiper.emit("progress", progress);
            }
            function updateSlidesClasses() {
                const swiper = this;
                const {slides, params, slidesEl, activeIndex} = swiper;
                const isVirtual = swiper.virtual && params.virtual.enabled;
                const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
                const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
                slides.forEach((slideEl => {
                    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                }));
                let activeSlide;
                let prevSlide;
                let nextSlide;
                if (isVirtual) if (params.loop) {
                    let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                    if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                    if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                    activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
                } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                    activeSlide = slides.filter((slideEl => slideEl.column === activeIndex))[0];
                    nextSlide = slides.filter((slideEl => slideEl.column === activeIndex + 1))[0];
                    prevSlide = slides.filter((slideEl => slideEl.column === activeIndex - 1))[0];
                } else activeSlide = slides[activeIndex];
                if (activeSlide) {
                    activeSlide.classList.add(params.slideActiveClass);
                    if (gridEnabled) {
                        if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                        if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                    } else {
                        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                        if (params.loop && !nextSlide) nextSlide = slides[0];
                        if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                        if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                        if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
                    }
                }
                swiper.emitSlidesClasses();
            }
            const processLazyPreloader = (swiper, imageEl) => {
                if (!swiper || swiper.destroyed || !swiper.params) return;
                const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
                const slideEl = imageEl.closest(slideSelector());
                if (slideEl) {
                    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                    if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                        if (slideEl.shadowRoot) {
                            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                            if (lazyEl) lazyEl.remove();
                        }
                    }));
                    if (lazyEl) lazyEl.remove();
                }
            };
            const unlazy = (swiper, index) => {
                if (!swiper.slides[index]) return;
                const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
                if (imageEl) imageEl.removeAttribute("loading");
            };
            const preload = swiper => {
                if (!swiper || swiper.destroyed || !swiper.params) return;
                let amount = swiper.params.lazyPreloadPrevNext;
                const len = swiper.slides.length;
                if (!len || !amount || amount < 0) return;
                amount = Math.min(amount, len);
                const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
                const activeIndex = swiper.activeIndex;
                if (swiper.params.grid && swiper.params.grid.rows > 1) {
                    const activeColumn = activeIndex;
                    const preloadColumns = [ activeColumn - amount ];
                    preloadColumns.push(...Array.from({
                        length: amount
                    }).map(((_, i) => activeColumn + slidesPerView + i)));
                    swiper.slides.forEach(((slideEl, i) => {
                        if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                    }));
                    return;
                }
                const slideIndexLastInView = activeIndex + slidesPerView - 1;
                if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                    const realIndex = (i % len + len) % len;
                    if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
                } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
            };
            function getActiveIndexByTranslate(swiper) {
                const {slidesGrid, params} = swiper;
                const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
                let activeIndex;
                for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
                return activeIndex;
            }
            function updateActiveIndex(newActiveIndex) {
                const swiper = this;
                const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
                const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
                let activeIndex = newActiveIndex;
                let snapIndex;
                const getVirtualRealIndex = aIndex => {
                    let realIndex = aIndex - swiper.virtual.slidesBefore;
                    if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                    if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                    return realIndex;
                };
                if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
                if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
                }
                if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
                if (activeIndex === previousIndex && !swiper.params.loop) {
                    if (snapIndex !== previousSnapIndex) {
                        swiper.snapIndex = snapIndex;
                        swiper.emit("snapIndexChange");
                    }
                    return;
                }
                if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                    swiper.realIndex = getVirtualRealIndex(activeIndex);
                    return;
                }
                const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
                let realIndex;
                if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                    const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
                    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                    if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
                } else if (swiper.slides[activeIndex]) {
                    const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                    if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
                } else realIndex = activeIndex;
                Object.assign(swiper, {
                    previousSnapIndex,
                    snapIndex,
                    previousRealIndex,
                    realIndex,
                    previousIndex,
                    activeIndex
                });
                if (swiper.initialized) preload(swiper);
                swiper.emit("activeIndexChange");
                swiper.emit("snapIndexChange");
                if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                    if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                    swiper.emit("slideChange");
                }
            }
            function updateClickedSlide(el, path) {
                const swiper = this;
                const params = swiper.params;
                let slide = el.closest(`.${params.slideClass}, swiper-slide`);
                if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                    if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
                }));
                let slideFound = false;
                let slideIndex;
                if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                    slideFound = true;
                    slideIndex = i;
                    break;
                }
                if (slide && slideFound) {
                    swiper.clickedSlide = slide;
                    if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
                } else {
                    swiper.clickedSlide = void 0;
                    swiper.clickedIndex = void 0;
                    return;
                }
                if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
            }
            var update = {
                updateSize,
                updateSlides,
                updateAutoHeight,
                updateSlidesOffset,
                updateSlidesProgress,
                updateProgress,
                updateSlidesClasses,
                updateActiveIndex,
                updateClickedSlide
            };
            function getSwiperTranslate(axis) {
                if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
                const swiper = this;
                const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
                if (params.virtualTranslate) return rtl ? -translate : translate;
                if (params.cssMode) return translate;
                let currentTranslate = utils_getTranslate(wrapperEl, axis);
                currentTranslate += swiper.cssOverflowAdjustment();
                if (rtl) currentTranslate = -currentTranslate;
                return currentTranslate || 0;
            }
            function setTranslate(translate, byController) {
                const swiper = this;
                const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
                let x = 0;
                let y = 0;
                const z = 0;
                if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
                if (params.roundLengths) {
                    x = Math.floor(x);
                    y = Math.floor(y);
                }
                swiper.previousTranslate = swiper.translate;
                swiper.translate = swiper.isHorizontal() ? x : y;
                if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                    if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
                }
                let newProgress;
                const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
                if (newProgress !== progress) swiper.updateProgress(translate);
                swiper.emit("setTranslate", swiper.translate, byController);
            }
            function minTranslate() {
                return -this.snapGrid[0];
            }
            function maxTranslate() {
                return -this.snapGrid[this.snapGrid.length - 1];
            }
            function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
                if (translate === void 0) translate = 0;
                if (speed === void 0) speed = this.params.speed;
                if (runCallbacks === void 0) runCallbacks = true;
                if (translateBounds === void 0) translateBounds = true;
                const swiper = this;
                const {params, wrapperEl} = swiper;
                if (swiper.animating && params.preventInteractionOnTransition) return false;
                const minTranslate = swiper.minTranslate();
                const maxTranslate = swiper.maxTranslate();
                let newTranslate;
                if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
                swiper.updateProgress(newTranslate);
                if (params.cssMode) {
                    const isH = swiper.isHorizontal();
                    if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                        if (!swiper.support.smoothScroll) {
                            animateCSSModeScroll({
                                swiper,
                                targetPosition: -newTranslate,
                                side: isH ? "left" : "top"
                            });
                            return true;
                        }
                        wrapperEl.scrollTo({
                            [isH ? "left" : "top"]: -newTranslate,
                            behavior: "smooth"
                        });
                    }
                    return true;
                }
                if (speed === 0) {
                    swiper.setTransition(0);
                    swiper.setTranslate(newTranslate);
                    if (runCallbacks) {
                        swiper.emit("beforeTransitionStart", speed, internal);
                        swiper.emit("transitionEnd");
                    }
                } else {
                    swiper.setTransition(speed);
                    swiper.setTranslate(newTranslate);
                    if (runCallbacks) {
                        swiper.emit("beforeTransitionStart", speed, internal);
                        swiper.emit("transitionStart");
                    }
                    if (!swiper.animating) {
                        swiper.animating = true;
                        if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                            if (!swiper || swiper.destroyed) return;
                            if (e.target !== this) return;
                            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                            swiper.onTranslateToWrapperTransitionEnd = null;
                            delete swiper.onTranslateToWrapperTransitionEnd;
                            if (runCallbacks) swiper.emit("transitionEnd");
                        };
                        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    }
                }
                return true;
            }
            var translate = {
                getTranslate: getSwiperTranslate,
                setTranslate,
                minTranslate,
                maxTranslate,
                translateTo
            };
            function setTransition(duration, byController) {
                const swiper = this;
                if (!swiper.params.cssMode) {
                    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
                }
                swiper.emit("setTransition", duration, byController);
            }
            function transitionEmit(_ref) {
                let {swiper, runCallbacks, direction, step} = _ref;
                const {activeIndex, previousIndex} = swiper;
                let dir = direction;
                if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
                swiper.emit(`transition${step}`);
                if (runCallbacks && activeIndex !== previousIndex) {
                    if (dir === "reset") {
                        swiper.emit(`slideResetTransition${step}`);
                        return;
                    }
                    swiper.emit(`slideChangeTransition${step}`);
                    if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
                }
            }
            function transitionStart(runCallbacks, direction) {
                if (runCallbacks === void 0) runCallbacks = true;
                const swiper = this;
                const {params} = swiper;
                if (params.cssMode) return;
                if (params.autoHeight) swiper.updateAutoHeight();
                transitionEmit({
                    swiper,
                    runCallbacks,
                    direction,
                    step: "Start"
                });
            }
            function transitionEnd(runCallbacks, direction) {
                if (runCallbacks === void 0) runCallbacks = true;
                const swiper = this;
                const {params} = swiper;
                swiper.animating = false;
                if (params.cssMode) return;
                swiper.setTransition(0);
                transitionEmit({
                    swiper,
                    runCallbacks,
                    direction,
                    step: "End"
                });
            }
            var transition = {
                setTransition,
                transitionStart,
                transitionEnd
            };
            function slideTo(index, speed, runCallbacks, internal, initial) {
                if (index === void 0) index = 0;
                if (speed === void 0) speed = this.params.speed;
                if (runCallbacks === void 0) runCallbacks = true;
                if (typeof index === "string") index = parseInt(index, 10);
                const swiper = this;
                let slideIndex = index;
                if (slideIndex < 0) slideIndex = 0;
                const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
                if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
                const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
                let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
                if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
                const translate = -snapGrid[snapIndex];
                if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                    const normalizedTranslate = -Math.floor(translate * 100);
                    const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                    const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                    if (typeof slidesGrid[i + 1] !== "undefined") {
                        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                    } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
                }
                if (swiper.initialized && slideIndex !== activeIndex) {
                    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
                }
                if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
                swiper.updateProgress(translate);
                let direction;
                if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
                if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                    swiper.updateActiveIndex(slideIndex);
                    if (params.autoHeight) swiper.updateAutoHeight();
                    swiper.updateSlidesClasses();
                    if (params.effect !== "slide") swiper.setTranslate(translate);
                    if (direction !== "reset") {
                        swiper.transitionStart(runCallbacks, direction);
                        swiper.transitionEnd(runCallbacks, direction);
                    }
                    return false;
                }
                if (params.cssMode) {
                    const isH = swiper.isHorizontal();
                    const t = rtl ? translate : -translate;
                    if (speed === 0) {
                        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                        if (isVirtual) {
                            swiper.wrapperEl.style.scrollSnapType = "none";
                            swiper._immediateVirtual = true;
                        }
                        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                            swiper._cssModeVirtualInitialSet = true;
                            requestAnimationFrame((() => {
                                wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                            }));
                        } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        if (isVirtual) requestAnimationFrame((() => {
                            swiper.wrapperEl.style.scrollSnapType = "";
                            swiper._immediateVirtual = false;
                        }));
                    } else {
                        if (!swiper.support.smoothScroll) {
                            animateCSSModeScroll({
                                swiper,
                                targetPosition: t,
                                side: isH ? "left" : "top"
                            });
                            return true;
                        }
                        wrapperEl.scrollTo({
                            [isH ? "left" : "top"]: t,
                            behavior: "smooth"
                        });
                    }
                    return true;
                }
                swiper.setTransition(speed);
                swiper.setTranslate(translate);
                swiper.updateActiveIndex(slideIndex);
                swiper.updateSlidesClasses();
                swiper.emit("beforeTransitionStart", speed, internal);
                swiper.transitionStart(runCallbacks, direction);
                if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                }
                return true;
            }
            function slideToLoop(index, speed, runCallbacks, internal) {
                if (index === void 0) index = 0;
                if (speed === void 0) speed = this.params.speed;
                if (runCallbacks === void 0) runCallbacks = true;
                if (typeof index === "string") {
                    const indexAsNumber = parseInt(index, 10);
                    index = indexAsNumber;
                }
                const swiper = this;
                const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
                let newIndex = index;
                if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                    let targetSlideIndex;
                    if (gridEnabled) {
                        const slideIndex = newIndex * swiper.params.grid.rows;
                        targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                    } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                    const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                    const {centeredSlides} = swiper.params;
                    let slidesPerView = swiper.params.slidesPerView;
                    if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                        if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                    }
                    let needLoopFix = cols - targetSlideIndex < slidesPerView;
                    if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                    if (needLoopFix) {
                        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                        swiper.loopFix({
                            direction,
                            slideTo: true,
                            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                        });
                    }
                    if (gridEnabled) {
                        const slideIndex = newIndex * swiper.params.grid.rows;
                        newIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                    } else newIndex = swiper.getSlideIndexByData(newIndex);
                }
                requestAnimationFrame((() => {
                    swiper.slideTo(newIndex, speed, runCallbacks, internal);
                }));
                return swiper;
            }
            function slideNext(speed, runCallbacks, internal) {
                if (speed === void 0) speed = this.params.speed;
                if (runCallbacks === void 0) runCallbacks = true;
                const swiper = this;
                const {enabled, params, animating} = swiper;
                if (!enabled) return swiper;
                let perGroup = params.slidesPerGroup;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
                const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
                const isVirtual = swiper.virtual && params.virtual.enabled;
                if (params.loop) {
                    if (animating && !isVirtual && params.loopPreventsSliding) return false;
                    swiper.loopFix({
                        direction: "next"
                    });
                    swiper._clientLeft = swiper.wrapperEl.clientLeft;
                    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                        requestAnimationFrame((() => {
                            swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                        }));
                        return true;
                    }
                }
                if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
                return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
            }
            function slidePrev(speed, runCallbacks, internal) {
                if (speed === void 0) speed = this.params.speed;
                if (runCallbacks === void 0) runCallbacks = true;
                const swiper = this;
                const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
                if (!enabled) return swiper;
                const isVirtual = swiper.virtual && params.virtual.enabled;
                if (params.loop) {
                    if (animating && !isVirtual && params.loopPreventsSliding) return false;
                    swiper.loopFix({
                        direction: "prev"
                    });
                    swiper._clientLeft = swiper.wrapperEl.clientLeft;
                }
                const translate = rtlTranslate ? swiper.translate : -swiper.translate;
                function normalize(val) {
                    if (val < 0) return -Math.floor(Math.abs(val));
                    return Math.floor(val);
                }
                const normalizedTranslate = normalize(translate);
                const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
                let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
                if (typeof prevSnap === "undefined" && params.cssMode) {
                    let prevSnapIndex;
                    snapGrid.forEach(((snap, snapIndex) => {
                        if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                    }));
                    if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
                }
                let prevIndex = 0;
                if (typeof prevSnap !== "undefined") {
                    prevIndex = slidesGrid.indexOf(prevSnap);
                    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                        prevIndex = Math.max(prevIndex, 0);
                    }
                }
                if (params.rewind && swiper.isBeginning) {
                    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
                } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                    }));
                    return true;
                }
                return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
            }
            function slideReset(speed, runCallbacks, internal) {
                if (speed === void 0) speed = this.params.speed;
                if (runCallbacks === void 0) runCallbacks = true;
                const swiper = this;
                return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
            }
            function slideToClosest(speed, runCallbacks, internal, threshold) {
                if (speed === void 0) speed = this.params.speed;
                if (runCallbacks === void 0) runCallbacks = true;
                if (threshold === void 0) threshold = .5;
                const swiper = this;
                let index = swiper.activeIndex;
                const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
                const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
                const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
                if (translate >= swiper.snapGrid[snapIndex]) {
                    const currentSnap = swiper.snapGrid[snapIndex];
                    const nextSnap = swiper.snapGrid[snapIndex + 1];
                    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
                } else {
                    const prevSnap = swiper.snapGrid[snapIndex - 1];
                    const currentSnap = swiper.snapGrid[snapIndex];
                    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
                }
                index = Math.max(index, 0);
                index = Math.min(index, swiper.slidesGrid.length - 1);
                return swiper.slideTo(index, speed, runCallbacks, internal);
            }
            function slideToClickedSlide() {
                const swiper = this;
                const {params, slidesEl} = swiper;
                const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
                let slideToIndex = swiper.clickedIndex;
                let realIndex;
                const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
                if (params.loop) {
                    if (swiper.animating) return;
                    realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                    if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                        swiper.loopFix();
                        slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                        utils_nextTick((() => {
                            swiper.slideTo(slideToIndex);
                        }));
                    } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                        swiper.loopFix();
                        slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                        utils_nextTick((() => {
                            swiper.slideTo(slideToIndex);
                        }));
                    } else swiper.slideTo(slideToIndex);
                } else swiper.slideTo(slideToIndex);
            }
            var slide = {
                slideTo,
                slideToLoop,
                slideNext,
                slidePrev,
                slideReset,
                slideToClosest,
                slideToClickedSlide
            };
            function loopCreate(slideRealIndex) {
                const swiper = this;
                const {params, slidesEl} = swiper;
                if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
                const initSlides = () => {
                    const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                    slides.forEach(((el, index) => {
                        el.setAttribute("data-swiper-slide-index", index);
                    }));
                };
                const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
                const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
                const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
                const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
                const addBlankSlides = amountOfSlides => {
                    for (let i = 0; i < amountOfSlides; i += 1) {
                        const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                        swiper.slidesEl.append(slideEl);
                    }
                };
                if (shouldFillGroup) {
                    if (params.loopAddBlankSlides) {
                        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                        addBlankSlides(slidesToAdd);
                        swiper.recalcSlides();
                        swiper.updateSlides();
                    } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                    initSlides();
                } else if (shouldFillGrid) {
                    if (params.loopAddBlankSlides) {
                        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                        addBlankSlides(slidesToAdd);
                        swiper.recalcSlides();
                        swiper.updateSlides();
                    } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                    initSlides();
                } else initSlides();
                swiper.loopFix({
                    slideRealIndex,
                    direction: params.centeredSlides ? void 0 : "next"
                });
            }
            function loopFix(_temp) {
                let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
                const swiper = this;
                if (!swiper.params.loop) return;
                swiper.emit("beforeLoopFix");
                const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
                const {centeredSlides} = params;
                swiper.allowSlidePrev = true;
                swiper.allowSlideNext = true;
                if (swiper.virtual && params.virtual.enabled) {
                    if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                    swiper.allowSlidePrev = allowSlidePrev;
                    swiper.allowSlideNext = allowSlideNext;
                    swiper.emit("loopFix");
                    return;
                }
                let slidesPerView = params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
                let loopedSlides = slidesPerGroup;
                if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
                loopedSlides += params.loopAdditionalSlides;
                swiper.loopedSlides = loopedSlides;
                const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
                if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                const prependSlidesIndexes = [];
                const appendSlidesIndexes = [];
                let activeIndex = swiper.activeIndex;
                if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
                const isNext = direction === "next" || !direction;
                const isPrev = direction === "prev" || !direction;
                let slidesPrepended = 0;
                let slidesAppended = 0;
                const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
                const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
                const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
                if (activeColIndexWithShift < loopedSlides) {
                    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                        const index = i - Math.floor(i / cols) * cols;
                        if (gridEnabled) {
                            const colIndexToPrepend = cols - index - 1;
                            for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                        } else prependSlidesIndexes.push(cols - index - 1);
                    }
                } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                    for (let i = 0; i < slidesAppended; i += 1) {
                        const index = i - Math.floor(i / cols) * cols;
                        if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                            if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                        })); else appendSlidesIndexes.push(index);
                    }
                }
                swiper.__preventObserver__ = true;
                requestAnimationFrame((() => {
                    swiper.__preventObserver__ = false;
                }));
                if (isPrev) prependSlidesIndexes.forEach((index => {
                    slides[index].swiperLoopMoveDOM = true;
                    slidesEl.prepend(slides[index]);
                    slides[index].swiperLoopMoveDOM = false;
                }));
                if (isNext) appendSlidesIndexes.forEach((index => {
                    slides[index].swiperLoopMoveDOM = true;
                    slidesEl.append(slides[index]);
                    slides[index].swiperLoopMoveDOM = false;
                }));
                swiper.recalcSlides();
                if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                    swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
                }));
                if (params.watchSlidesProgress) swiper.updateSlidesOffset();
                if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                    if (typeof slideRealIndex === "undefined") {
                        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                        const diff = newSlideTranslate - currentSlideTranslate;
                        if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                            swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                            if (setTranslate) {
                                swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                                swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                            }
                        }
                    } else if (setTranslate) {
                        const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                        swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else {
                    const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
                }
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                if (swiper.controller && swiper.controller.control && !byController) {
                    const loopParams = {
                        slideRealIndex,
                        direction,
                        setTranslate,
                        activeSlideIndex,
                        byController: true
                    };
                    if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                        if (!c.destroyed && c.params.loop) c.loopFix({
                            ...loopParams,
                            slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                        });
                    })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                        ...loopParams,
                        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                }
                swiper.emit("loopFix");
            }
            function loopDestroy() {
                const swiper = this;
                const {params, slidesEl} = swiper;
                if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
                swiper.recalcSlides();
                const newSlidesOrder = [];
                swiper.slides.forEach((slideEl => {
                    const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                    newSlidesOrder[index] = slideEl;
                }));
                swiper.slides.forEach((slideEl => {
                    slideEl.removeAttribute("data-swiper-slide-index");
                }));
                newSlidesOrder.forEach((slideEl => {
                    slidesEl.append(slideEl);
                }));
                swiper.recalcSlides();
                swiper.slideTo(swiper.realIndex, 0);
            }
            var loop = {
                loopCreate,
                loopFix,
                loopDestroy
            };
            function setGrabCursor(moving) {
                const swiper = this;
                if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
                const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
                if (swiper.isElement) swiper.__preventObserver__ = true;
                el.style.cursor = "move";
                el.style.cursor = moving ? "grabbing" : "grab";
                if (swiper.isElement) requestAnimationFrame((() => {
                    swiper.__preventObserver__ = false;
                }));
            }
            function unsetGrabCursor() {
                const swiper = this;
                if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
                if (swiper.isElement) swiper.__preventObserver__ = true;
                swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
                if (swiper.isElement) requestAnimationFrame((() => {
                    swiper.__preventObserver__ = false;
                }));
            }
            var grabCursor = {
                setGrabCursor,
                unsetGrabCursor
            };
            function closestElement(selector, base) {
                if (base === void 0) base = this;
                function __closestFrom(el) {
                    if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                    if (el.assignedSlot) el = el.assignedSlot;
                    const found = el.closest(selector);
                    if (!found && !el.getRootNode) return null;
                    return found || __closestFrom(el.getRootNode().host);
                }
                return __closestFrom(base);
            }
            function preventEdgeSwipe(swiper, event, startX) {
                const window = ssr_window_esm_getWindow();
                const {params} = swiper;
                const edgeSwipeDetection = params.edgeSwipeDetection;
                const edgeSwipeThreshold = params.edgeSwipeThreshold;
                if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                    if (edgeSwipeDetection === "prevent") {
                        event.preventDefault();
                        return true;
                    }
                    return false;
                }
                return true;
            }
            function onTouchStart(event) {
                const swiper = this;
                const document = ssr_window_esm_getDocument();
                let e = event;
                if (e.originalEvent) e = e.originalEvent;
                const data = swiper.touchEventsData;
                if (e.type === "pointerdown") {
                    if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                    data.pointerId = e.pointerId;
                } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
                if (e.type === "touchstart") {
                    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                    return;
                }
                const {params, touches, enabled} = swiper;
                if (!enabled) return;
                if (!params.simulateTouch && e.pointerType === "mouse") return;
                if (swiper.animating && params.preventInteractionOnTransition) return;
                if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
                let targetEl = e.target;
                if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
                if ("which" in e && e.which === 3) return;
                if ("button" in e && e.button > 0) return;
                if (data.isTouched && data.isMoved) return;
                const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
                const eventPath = e.composedPath ? e.composedPath() : e.path;
                if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
                const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
                const isTargetShadow = !!(e.target && e.target.shadowRoot);
                if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                    swiper.allowClick = true;
                    return;
                }
                if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
                touches.currentX = e.pageX;
                touches.currentY = e.pageY;
                const startX = touches.currentX;
                const startY = touches.currentY;
                if (!preventEdgeSwipe(swiper, e, startX)) return;
                Object.assign(data, {
                    isTouched: true,
                    isMoved: false,
                    allowTouchCallbacks: true,
                    isScrolling: void 0,
                    startMoving: void 0
                });
                touches.startX = startX;
                touches.startY = startY;
                data.touchStartTime = utils_now();
                swiper.allowClick = true;
                swiper.updateSize();
                swiper.swipeDirection = void 0;
                if (params.threshold > 0) data.allowThresholdMove = false;
                let preventDefault = true;
                if (targetEl.matches(data.focusableElements)) {
                    preventDefault = false;
                    if (targetEl.nodeName === "SELECT") data.isTouched = false;
                }
                if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
                if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
                swiper.emit("touchStart", e);
            }
            function onTouchMove(event) {
                const document = ssr_window_esm_getDocument();
                const swiper = this;
                const data = swiper.touchEventsData;
                const {params, touches, rtlTranslate: rtl, enabled} = swiper;
                if (!enabled) return;
                if (!params.simulateTouch && event.pointerType === "mouse") return;
                let e = event;
                if (e.originalEvent) e = e.originalEvent;
                if (e.type === "pointermove") {
                    if (data.touchId !== null) return;
                    const id = e.pointerId;
                    if (id !== data.pointerId) return;
                }
                let targetTouch;
                if (e.type === "touchmove") {
                    targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
                } else targetTouch = e;
                if (!data.isTouched) {
                    if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                    return;
                }
                const pageX = targetTouch.pageX;
                const pageY = targetTouch.pageY;
                if (e.preventedByNestedSwiper) {
                    touches.startX = pageX;
                    touches.startY = pageY;
                    return;
                }
                if (!swiper.allowTouchMove) {
                    if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                    if (data.isTouched) {
                        Object.assign(touches, {
                            startX: pageX,
                            startY: pageY,
                            currentX: pageX,
                            currentY: pageY
                        });
                        data.touchStartTime = utils_now();
                    }
                    return;
                }
                if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                    if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                        data.isTouched = false;
                        data.isMoved = false;
                        return;
                    }
                } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
                if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                    data.isMoved = true;
                    swiper.allowClick = false;
                    return;
                }
                if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
                touches.previousX = touches.currentX;
                touches.previousY = touches.currentY;
                touches.currentX = pageX;
                touches.currentY = pageY;
                const diffX = touches.currentX - touches.startX;
                const diffY = touches.currentY - touches.startY;
                if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
                if (typeof data.isScrolling === "undefined") {
                    let touchAngle;
                    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                    }
                }
                if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
                if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
                if (data.isScrolling) {
                    data.isTouched = false;
                    return;
                }
                if (!data.startMoving) return;
                swiper.allowClick = false;
                if (!params.cssMode && e.cancelable) e.preventDefault();
                if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
                let diff = swiper.isHorizontal() ? diffX : diffY;
                let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
                if (params.oneWayMovement) {
                    diff = Math.abs(diff) * (rtl ? 1 : -1);
                    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
                }
                touches.diff = diff;
                diff *= params.touchRatio;
                if (rtl) {
                    diff = -diff;
                    touchesDiff = -touchesDiff;
                }
                const prevTouchesDirection = swiper.touchesDirection;
                swiper.swipeDirection = diff > 0 ? "prev" : "next";
                swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
                const isLoop = swiper.params.loop && !params.cssMode;
                const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
                if (!data.isMoved) {
                    if (isLoop && allowLoopFix) swiper.loopFix({
                        direction: swiper.swipeDirection
                    });
                    data.startTranslate = swiper.getTranslate();
                    swiper.setTransition(0);
                    if (swiper.animating) {
                        const evt = new window.CustomEvent("transitionend", {
                            bubbles: true,
                            cancelable: true
                        });
                        swiper.wrapperEl.dispatchEvent(evt);
                    }
                    data.allowMomentumBounce = false;
                    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                    swiper.emit("sliderFirstMove", e);
                }
                let loopFixed;
                (new Date).getTime();
                if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY,
                        startTranslate: data.currentTranslate
                    });
                    data.loopSwapReset = true;
                    data.startTranslate = data.currentTranslate;
                    return;
                }
                swiper.emit("sliderMove", e);
                data.isMoved = true;
                data.currentTranslate = diff + data.startTranslate;
                let disableParentSwiper = true;
                let resistanceRatio = params.resistanceRatio;
                if (params.touchReleaseOnEdges) resistanceRatio = 0;
                if (diff > 0) {
                    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
                        direction: "prev",
                        setTranslate: true,
                        activeSlideIndex: 0
                    });
                    if (data.currentTranslate > swiper.minTranslate()) {
                        disableParentSwiper = false;
                        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                    }
                } else if (diff < 0) {
                    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
                        direction: "next",
                        setTranslate: true,
                        activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                    });
                    if (data.currentTranslate < swiper.maxTranslate()) {
                        disableParentSwiper = false;
                        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                    }
                }
                if (disableParentSwiper) e.preventedByNestedSwiper = true;
                if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
                if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
                if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
                if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                    if (!data.allowThresholdMove) {
                        data.allowThresholdMove = true;
                        touches.startX = touches.currentX;
                        touches.startY = touches.currentY;
                        data.currentTranslate = data.startTranslate;
                        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                        return;
                    }
                } else {
                    data.currentTranslate = data.startTranslate;
                    return;
                }
                if (!params.followFinger || params.cssMode) return;
                if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
                swiper.updateProgress(data.currentTranslate);
                swiper.setTranslate(data.currentTranslate);
            }
            function onTouchEnd(event) {
                const swiper = this;
                const data = swiper.touchEventsData;
                let e = event;
                if (e.originalEvent) e = e.originalEvent;
                let targetTouch;
                const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
                if (!isTouchEvent) {
                    if (data.touchId !== null) return;
                    if (e.pointerId !== data.pointerId) return;
                    targetTouch = e;
                } else {
                    targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
                }
                if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                    const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                    if (!proceed) return;
                }
                data.pointerId = null;
                data.touchId = null;
                const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
                if (!enabled) return;
                if (!params.simulateTouch && e.pointerType === "mouse") return;
                if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
                data.allowTouchCallbacks = false;
                if (!data.isTouched) {
                    if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                    data.isMoved = false;
                    data.startMoving = false;
                    return;
                }
                if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
                const touchEndTime = utils_now();
                const timeDiff = touchEndTime - data.touchStartTime;
                if (swiper.allowClick) {
                    const pathTree = e.path || e.composedPath && e.composedPath();
                    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                    swiper.emit("tap click", e);
                    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
                }
                data.lastClickTime = utils_now();
                utils_nextTick((() => {
                    if (!swiper.destroyed) swiper.allowClick = true;
                }));
                if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                    data.isTouched = false;
                    data.isMoved = false;
                    data.startMoving = false;
                    return;
                }
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                let currentPos;
                if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
                if (params.cssMode) return;
                if (params.freeMode && params.freeMode.enabled) {
                    swiper.freeMode.onTouchEnd({
                        currentPos
                    });
                    return;
                }
                const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
                let stopIndex = 0;
                let groupSize = swiper.slidesSizesGrid[0];
                for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                    if (typeof slidesGrid[i + increment] !== "undefined") {
                        if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                            stopIndex = i;
                            groupSize = slidesGrid[i + increment] - slidesGrid[i];
                        }
                    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                        stopIndex = i;
                        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                    }
                }
                let rewindFirstIndex = null;
                let rewindLastIndex = null;
                if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
                const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
                const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (timeDiff > params.longSwipesMs) {
                    if (!params.longSwipes) {
                        swiper.slideTo(swiper.activeIndex);
                        return;
                    }
                    if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                    if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
                } else {
                    if (!params.shortSwipes) {
                        swiper.slideTo(swiper.activeIndex);
                        return;
                    }
                    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                    if (!isNavButtonTarget) {
                        if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                        if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                    } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
                }
            }
            function onResize() {
                const swiper = this;
                const {params, el} = swiper;
                if (el && el.offsetWidth === 0) return;
                if (params.breakpoints) swiper.setBreakpoint();
                const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                swiper.allowSlideNext = true;
                swiper.allowSlidePrev = true;
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateSlidesClasses();
                const isVirtualLoop = isVirtual && params.loop;
                if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
                if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                    clearTimeout(swiper.autoplay.resizeTimeout);
                    swiper.autoplay.resizeTimeout = setTimeout((() => {
                        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                    }), 500);
                }
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
            }
            function onClick(e) {
                const swiper = this;
                if (!swiper.enabled) return;
                if (!swiper.allowClick) {
                    if (swiper.params.preventClicks) e.preventDefault();
                    if (swiper.params.preventClicksPropagation && swiper.animating) {
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                    }
                }
            }
            function onScroll() {
                const swiper = this;
                const {wrapperEl, rtlTranslate, enabled} = swiper;
                if (!enabled) return;
                swiper.previousTranslate = swiper.translate;
                if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
                if (swiper.translate === 0) swiper.translate = 0;
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                let newProgress;
                const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
                if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
                if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
                swiper.emit("setTranslate", swiper.translate, false);
            }
            function onLoad(e) {
                const swiper = this;
                processLazyPreloader(swiper, e.target);
                if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
                swiper.update();
            }
            function onDocumentTouchStart() {
                const swiper = this;
                if (swiper.documentTouchHandlerProceeded) return;
                swiper.documentTouchHandlerProceeded = true;
                if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
            }
            const events = (swiper, method) => {
                const document = ssr_window_esm_getDocument();
                const {params, el, wrapperEl, device} = swiper;
                const capture = !!params.nested;
                const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
                const swiperMethod = method;
                document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                    passive: false,
                    capture
                });
                el[domMethod]("touchstart", swiper.onTouchStart, {
                    passive: false
                });
                el[domMethod]("pointerdown", swiper.onTouchStart, {
                    passive: false
                });
                document[domMethod]("touchmove", swiper.onTouchMove, {
                    passive: false,
                    capture
                });
                document[domMethod]("pointermove", swiper.onTouchMove, {
                    passive: false,
                    capture
                });
                document[domMethod]("touchend", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("pointerup", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("pointercancel", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("touchcancel", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("pointerout", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("pointerleave", swiper.onTouchEnd, {
                    passive: true
                });
                document[domMethod]("contextmenu", swiper.onTouchEnd, {
                    passive: true
                });
                if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
                if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
                if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
                el[domMethod]("load", swiper.onLoad, {
                    capture: true
                });
            };
            function attachEvents() {
                const swiper = this;
                const {params} = swiper;
                swiper.onTouchStart = onTouchStart.bind(swiper);
                swiper.onTouchMove = onTouchMove.bind(swiper);
                swiper.onTouchEnd = onTouchEnd.bind(swiper);
                swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
                if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
                swiper.onClick = onClick.bind(swiper);
                swiper.onLoad = onLoad.bind(swiper);
                events(swiper, "on");
            }
            function detachEvents() {
                const swiper = this;
                events(swiper, "off");
            }
            var events$1 = {
                attachEvents,
                detachEvents
            };
            const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
            function setBreakpoint() {
                const swiper = this;
                const {realIndex, initialized, params, el} = swiper;
                const breakpoints = params.breakpoints;
                if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
                const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
                if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
                const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
                const breakpointParams = breakpointOnlyParams || swiper.originalParams;
                const wasMultiRow = isGridEnabled(swiper, params);
                const isMultiRow = isGridEnabled(swiper, breakpointParams);
                const wasEnabled = params.enabled;
                if (wasMultiRow && !isMultiRow) {
                    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                    swiper.emitContainerClasses();
                } else if (!wasMultiRow && isMultiRow) {
                    el.classList.add(`${params.containerModifierClass}grid`);
                    if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                    swiper.emitContainerClasses();
                }
                [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                    if (typeof breakpointParams[prop] === "undefined") return;
                    const wasModuleEnabled = params[prop] && params[prop].enabled;
                    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                    if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                    if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
                }));
                const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
                const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
                const wasLoop = params.loop;
                if (directionChanged && initialized) swiper.changeDirection();
                utils_extend(swiper.params, breakpointParams);
                const isEnabled = swiper.params.enabled;
                const hasLoop = swiper.params.loop;
                Object.assign(swiper, {
                    allowTouchMove: swiper.params.allowTouchMove,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev
                });
                if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
                swiper.currentBreakpoint = breakpoint;
                swiper.emit("_beforeBreakpoint", breakpointParams);
                if (initialized) if (needsReLoop) {
                    swiper.loopDestroy();
                    swiper.loopCreate(realIndex);
                    swiper.updateSlides();
                } else if (!wasLoop && hasLoop) {
                    swiper.loopCreate(realIndex);
                    swiper.updateSlides();
                } else if (wasLoop && !hasLoop) swiper.loopDestroy();
                swiper.emit("breakpoint", breakpointParams);
            }
            function getBreakpoint(breakpoints, base, containerEl) {
                if (base === void 0) base = "window";
                if (!breakpoints || base === "container" && !containerEl) return;
                let breakpoint = false;
                const window = ssr_window_esm_getWindow();
                const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
                const points = Object.keys(breakpoints).map((point => {
                    if (typeof point === "string" && point.indexOf("@") === 0) {
                        const minRatio = parseFloat(point.substr(1));
                        const value = currentHeight * minRatio;
                        return {
                            value,
                            point
                        };
                    }
                    return {
                        value: point,
                        point
                    };
                }));
                points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
                for (let i = 0; i < points.length; i += 1) {
                    const {point, value} = points[i];
                    if (base === "window") {
                        if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                    } else if (value <= containerEl.clientWidth) breakpoint = point;
                }
                return breakpoint || "max";
            }
            var breakpoints = {
                setBreakpoint,
                getBreakpoint
            };
            function prepareClasses(entries, prefix) {
                const resultClasses = [];
                entries.forEach((item => {
                    if (typeof item === "object") Object.keys(item).forEach((classNames => {
                        if (item[classNames]) resultClasses.push(prefix + classNames);
                    })); else if (typeof item === "string") resultClasses.push(prefix + item);
                }));
                return resultClasses;
            }
            function addClasses() {
                const swiper = this;
                const {classNames, params, rtl, el, device} = swiper;
                const suffixes = prepareClasses([ "initialized", params.direction, {
                    "free-mode": swiper.params.freeMode && params.freeMode.enabled
                }, {
                    autoheight: params.autoHeight
                }, {
                    rtl
                }, {
                    grid: params.grid && params.grid.rows > 1
                }, {
                    "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
                }, {
                    android: device.android
                }, {
                    ios: device.ios
                }, {
                    "css-mode": params.cssMode
                }, {
                    centered: params.cssMode && params.centeredSlides
                }, {
                    "watch-progress": params.watchSlidesProgress
                } ], params.containerModifierClass);
                classNames.push(...suffixes);
                el.classList.add(...classNames);
                swiper.emitContainerClasses();
            }
            function removeClasses() {
                const swiper = this;
                const {el, classNames} = swiper;
                el.classList.remove(...classNames);
                swiper.emitContainerClasses();
            }
            var classes = {
                addClasses,
                removeClasses
            };
            function checkOverflow() {
                const swiper = this;
                const {isLocked: wasLocked, params} = swiper;
                const {slidesOffsetBefore} = params;
                if (slidesOffsetBefore) {
                    const lastSlideIndex = swiper.slides.length - 1;
                    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                    swiper.isLocked = swiper.size > lastSlideRightEdge;
                } else swiper.isLocked = swiper.snapGrid.length === 1;
                if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
                if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
                if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
                if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
            }
            var checkOverflow$1 = {
                checkOverflow
            };
            var defaults = {
                init: true,
                direction: "horizontal",
                oneWayMovement: false,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: false,
                updateOnWindowResize: true,
                resizeObserver: true,
                nested: false,
                createElements: false,
                eventsPrefix: "swiper",
                enabled: true,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: false,
                userAgent: null,
                url: null,
                edgeSwipeDetection: false,
                edgeSwipeThreshold: 20,
                autoHeight: false,
                setWrapperSize: false,
                virtualTranslate: false,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: false,
                centeredSlides: false,
                centeredSlidesBounds: false,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: true,
                centerInsufficientSlides: false,
                watchOverflow: true,
                roundLengths: false,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: true,
                shortSwipes: true,
                longSwipes: true,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: true,
                allowTouchMove: true,
                threshold: 5,
                touchMoveStopPropagation: false,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: false,
                touchReleaseOnEdges: false,
                uniqueNavElements: true,
                resistance: true,
                resistanceRatio: .85,
                watchSlidesProgress: false,
                grabCursor: false,
                preventClicks: true,
                preventClicksPropagation: true,
                slideToClickedSlide: false,
                loop: false,
                loopAddBlankSlides: true,
                loopAdditionalSlides: 0,
                loopPreventsSliding: true,
                rewind: false,
                allowSlidePrev: true,
                allowSlideNext: true,
                swipeHandler: null,
                noSwiping: true,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: true,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: true,
                _emitClasses: false
            };
            function moduleExtendParams(params, allModulesParams) {
                return function extendParams(obj) {
                    if (obj === void 0) obj = {};
                    const moduleParamName = Object.keys(obj)[0];
                    const moduleParams = obj[moduleParamName];
                    if (typeof moduleParams !== "object" || moduleParams === null) {
                        utils_extend(allModulesParams, obj);
                        return;
                    }
                    if (params[moduleParamName] === true) params[moduleParamName] = {
                        enabled: true
                    };
                    if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                    if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                    if (!(moduleParamName in params && "enabled" in moduleParams)) {
                        utils_extend(allModulesParams, obj);
                        return;
                    }
                    if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                    if (!params[moduleParamName]) params[moduleParamName] = {
                        enabled: false
                    };
                    utils_extend(allModulesParams, obj);
                };
            }
            const prototypes = {
                eventsEmitter,
                update,
                translate,
                transition,
                slide,
                loop,
                grabCursor,
                events: events$1,
                breakpoints,
                checkOverflow: checkOverflow$1,
                classes
            };
            const extendedDefaults = {};
            class swiper_core_Swiper {
                constructor() {
                    let el;
                    let params;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                    if (!params) params = {};
                    params = utils_extend({}, params);
                    if (el && !params.el) params.el = el;
                    const document = ssr_window_esm_getDocument();
                    if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                        const swipers = [];
                        document.querySelectorAll(params.el).forEach((containerEl => {
                            const newParams = utils_extend({}, params, {
                                el: containerEl
                            });
                            swipers.push(new swiper_core_Swiper(newParams));
                        }));
                        return swipers;
                    }
                    const swiper = this;
                    swiper.__swiper__ = true;
                    swiper.support = getSupport();
                    swiper.device = getDevice({
                        userAgent: params.userAgent
                    });
                    swiper.browser = getBrowser();
                    swiper.eventsListeners = {};
                    swiper.eventsAnyListeners = [];
                    swiper.modules = [ ...swiper.__modules__ ];
                    if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                    const allModulesParams = {};
                    swiper.modules.forEach((mod => {
                        mod({
                            params,
                            swiper,
                            extendParams: moduleExtendParams(params, allModulesParams),
                            on: swiper.on.bind(swiper),
                            once: swiper.once.bind(swiper),
                            off: swiper.off.bind(swiper),
                            emit: swiper.emit.bind(swiper)
                        });
                    }));
                    const swiperParams = utils_extend({}, defaults, allModulesParams);
                    swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                    swiper.originalParams = utils_extend({}, swiper.params);
                    swiper.passedParams = utils_extend({}, params);
                    if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                        swiper.on(eventName, swiper.params.on[eventName]);
                    }));
                    if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                    Object.assign(swiper, {
                        enabled: swiper.params.enabled,
                        el,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal() {
                            return swiper.params.direction === "horizontal";
                        },
                        isVertical() {
                            return swiper.params.direction === "vertical";
                        },
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: true,
                        isEnd: false,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: false,
                        cssOverflowAdjustment() {
                            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                        },
                        allowSlideNext: swiper.params.allowSlideNext,
                        allowSlidePrev: swiper.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: swiper.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: true,
                        allowTouchMove: swiper.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    });
                    swiper.emit("_swiper");
                    if (swiper.params.init) swiper.init();
                    return swiper;
                }
                getDirectionLabel(property) {
                    if (this.isHorizontal()) return property;
                    return {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[property];
                }
                getSlideIndex(slideEl) {
                    const {slidesEl, params} = this;
                    const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                    const firstSlideIndex = elementIndex(slides[0]);
                    return elementIndex(slideEl) - firstSlideIndex;
                }
                getSlideIndexByData(index) {
                    return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
                }
                recalcSlides() {
                    const swiper = this;
                    const {slidesEl, params} = swiper;
                    swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                }
                enable() {
                    const swiper = this;
                    if (swiper.enabled) return;
                    swiper.enabled = true;
                    if (swiper.params.grabCursor) swiper.setGrabCursor();
                    swiper.emit("enable");
                }
                disable() {
                    const swiper = this;
                    if (!swiper.enabled) return;
                    swiper.enabled = false;
                    if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                    swiper.emit("disable");
                }
                setProgress(progress, speed) {
                    const swiper = this;
                    progress = Math.min(Math.max(progress, 0), 1);
                    const min = swiper.minTranslate();
                    const max = swiper.maxTranslate();
                    const current = (max - min) * progress + min;
                    swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                emitContainerClasses() {
                    const swiper = this;
                    if (!swiper.params._emitClasses || !swiper.el) return;
                    const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                    swiper.emit("_containerClasses", cls.join(" "));
                }
                getSlideClasses(slideEl) {
                    const swiper = this;
                    if (swiper.destroyed) return "";
                    return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
                }
                emitSlidesClasses() {
                    const swiper = this;
                    if (!swiper.params._emitClasses || !swiper.el) return;
                    const updates = [];
                    swiper.slides.forEach((slideEl => {
                        const classNames = swiper.getSlideClasses(slideEl);
                        updates.push({
                            slideEl,
                            classNames
                        });
                        swiper.emit("_slideClass", slideEl, classNames);
                    }));
                    swiper.emit("_slideClasses", updates);
                }
                slidesPerViewDynamic(view, exact) {
                    if (view === void 0) view = "current";
                    if (exact === void 0) exact = false;
                    const swiper = this;
                    const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                    let spv = 1;
                    if (typeof params.slidesPerView === "number") return params.slidesPerView;
                    if (params.centeredSlides) {
                        let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
                        let breakLoop;
                        for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                            slideSize += slides[i].swiperSlideSize;
                            spv += 1;
                            if (slideSize > swiperSize) breakLoop = true;
                        }
                        for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                            slideSize += slides[i].swiperSlideSize;
                            spv += 1;
                            if (slideSize > swiperSize) breakLoop = true;
                        }
                    } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                        const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                        if (slideInView) spv += 1;
                    } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                        const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                        if (slideInView) spv += 1;
                    }
                    return spv;
                }
                update() {
                    const swiper = this;
                    if (!swiper || swiper.destroyed) return;
                    const {snapGrid, params} = swiper;
                    if (params.breakpoints) swiper.setBreakpoint();
                    [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                        if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                    }));
                    swiper.updateSize();
                    swiper.updateSlides();
                    swiper.updateProgress();
                    swiper.updateSlidesClasses();
                    function setTranslate() {
                        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                        swiper.setTranslate(newTranslate);
                        swiper.updateActiveIndex();
                        swiper.updateSlidesClasses();
                    }
                    let translated;
                    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                        setTranslate();
                        if (params.autoHeight) swiper.updateAutoHeight();
                    } else {
                        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                            const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                            translated = swiper.slideTo(slides.length - 1, 0, false, true);
                        } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                        if (!translated) setTranslate();
                    }
                    if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                    swiper.emit("update");
                }
                changeDirection(newDirection, needUpdate) {
                    if (needUpdate === void 0) needUpdate = true;
                    const swiper = this;
                    const currentDirection = swiper.params.direction;
                    if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                    if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                    swiper.emitContainerClasses();
                    swiper.params.direction = newDirection;
                    swiper.slides.forEach((slideEl => {
                        if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                    }));
                    swiper.emit("changeDirection");
                    if (needUpdate) swiper.update();
                    return swiper;
                }
                changeLanguageDirection(direction) {
                    const swiper = this;
                    if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                    swiper.rtl = direction === "rtl";
                    swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                    if (swiper.rtl) {
                        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                        swiper.el.dir = "rtl";
                    } else {
                        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                        swiper.el.dir = "ltr";
                    }
                    swiper.update();
                }
                mount(element) {
                    const swiper = this;
                    if (swiper.mounted) return true;
                    let el = element || swiper.params.el;
                    if (typeof el === "string") el = document.querySelector(el);
                    if (!el) return false;
                    el.swiper = swiper;
                    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") swiper.isElement = true;
                    const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                    const getWrapper = () => {
                        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                            const res = el.shadowRoot.querySelector(getWrapperSelector());
                            return res;
                        }
                        return utils_elementChildren(el, getWrapperSelector())[0];
                    };
                    let wrapperEl = getWrapper();
                    if (!wrapperEl && swiper.params.createElements) {
                        wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                        el.append(wrapperEl);
                        utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                            wrapperEl.append(slideEl);
                        }));
                    }
                    Object.assign(swiper, {
                        el,
                        wrapperEl,
                        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                        hostEl: swiper.isElement ? el.parentNode.host : el,
                        mounted: true,
                        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                    });
                    return true;
                }
                init(el) {
                    const swiper = this;
                    if (swiper.initialized) return swiper;
                    const mounted = swiper.mount(el);
                    if (mounted === false) return swiper;
                    swiper.emit("beforeInit");
                    if (swiper.params.breakpoints) swiper.setBreakpoint();
                    swiper.addClasses();
                    swiper.updateSize();
                    swiper.updateSlides();
                    if (swiper.params.watchOverflow) swiper.checkOverflow();
                    if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                    if (swiper.params.loop) swiper.loopCreate();
                    swiper.attachEvents();
                    const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                    if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                    lazyElements.forEach((imageEl => {
                        if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                            processLazyPreloader(swiper, e.target);
                        }));
                    }));
                    preload(swiper);
                    swiper.initialized = true;
                    preload(swiper);
                    swiper.emit("init");
                    swiper.emit("afterInit");
                    return swiper;
                }
                destroy(deleteInstance, cleanStyles) {
                    if (deleteInstance === void 0) deleteInstance = true;
                    if (cleanStyles === void 0) cleanStyles = true;
                    const swiper = this;
                    const {params, el, wrapperEl, slides} = swiper;
                    if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                    swiper.emit("beforeDestroy");
                    swiper.initialized = false;
                    swiper.detachEvents();
                    if (params.loop) swiper.loopDestroy();
                    if (cleanStyles) {
                        swiper.removeClasses();
                        el.removeAttribute("style");
                        wrapperEl.removeAttribute("style");
                        if (slides && slides.length) slides.forEach((slideEl => {
                            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                            slideEl.removeAttribute("style");
                            slideEl.removeAttribute("data-swiper-slide-index");
                        }));
                    }
                    swiper.emit("destroy");
                    Object.keys(swiper.eventsListeners).forEach((eventName => {
                        swiper.off(eventName);
                    }));
                    if (deleteInstance !== false) {
                        swiper.el.swiper = null;
                        deleteProps(swiper);
                    }
                    swiper.destroyed = true;
                    return null;
                }
                static extendDefaults(newDefaults) {
                    utils_extend(extendedDefaults, newDefaults);
                }
                static get extendedDefaults() {
                    return extendedDefaults;
                }
                static get defaults() {
                    return defaults;
                }
                static installModule(mod) {
                    if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                    const modules = swiper_core_Swiper.prototype.__modules__;
                    if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
                }
                static use(module) {
                    if (Array.isArray(module)) {
                        module.forEach((m => swiper_core_Swiper.installModule(m)));
                        return swiper_core_Swiper;
                    }
                    swiper_core_Swiper.installModule(module);
                    return swiper_core_Swiper;
                }
            }
            Object.keys(prototypes).forEach((prototypeGroup => {
                Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                    swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                }));
            }));
            swiper_core_Swiper.use([ Resize, Observer ]);
            function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
                if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                    if (!params[key] && params.auto === true) {
                        let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                        if (!element) {
                            element = utils_createElement("div", checkProps[key]);
                            element.className = checkProps[key];
                            swiper.el.append(element);
                        }
                        params[key] = element;
                        originalParams[key] = element;
                    }
                }));
                return params;
            }
            function Navigation(_ref) {
                let {swiper, extendParams, on, emit} = _ref;
                extendParams({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: false,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                });
                swiper.navigation = {
                    nextEl: null,
                    prevEl: null
                };
                const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
                function getEl(el) {
                    let res;
                    if (el && typeof el === "string" && swiper.isElement) {
                        res = swiper.el.querySelector(el);
                        if (res) return res;
                    }
                    if (el) {
                        if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                        if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                    }
                    if (el && !res) return el;
                    return res;
                }
                function toggleEl(el, disabled) {
                    const params = swiper.params.navigation;
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        if (subEl) {
                            subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                            if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                            if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                        }
                    }));
                }
                function update() {
                    const {nextEl, prevEl} = swiper.navigation;
                    if (swiper.params.loop) {
                        toggleEl(prevEl, false);
                        toggleEl(nextEl, false);
                        return;
                    }
                    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
                }
                function onPrevClick(e) {
                    e.preventDefault();
                    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                    swiper.slidePrev();
                    emit("navigationPrev");
                }
                function onNextClick(e) {
                    e.preventDefault();
                    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                    swiper.slideNext();
                    emit("navigationNext");
                }
                function init() {
                    const params = swiper.params.navigation;
                    swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    });
                    if (!(params.nextEl || params.prevEl)) return;
                    let nextEl = getEl(params.nextEl);
                    let prevEl = getEl(params.prevEl);
                    Object.assign(swiper.navigation, {
                        nextEl,
                        prevEl
                    });
                    nextEl = makeElementsArray(nextEl);
                    prevEl = makeElementsArray(prevEl);
                    const initButton = (el, dir) => {
                        if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                        if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                    };
                    nextEl.forEach((el => initButton(el, "next")));
                    prevEl.forEach((el => initButton(el, "prev")));
                }
                function destroy() {
                    let {nextEl, prevEl} = swiper.navigation;
                    nextEl = makeElementsArray(nextEl);
                    prevEl = makeElementsArray(prevEl);
                    const destroyButton = (el, dir) => {
                        el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                        el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                    };
                    nextEl.forEach((el => destroyButton(el, "next")));
                    prevEl.forEach((el => destroyButton(el, "prev")));
                }
                on("init", (() => {
                    if (swiper.params.navigation.enabled === false) disable(); else {
                        init();
                        update();
                    }
                }));
                on("toEdge fromEdge lock unlock", (() => {
                    update();
                }));
                on("destroy", (() => {
                    destroy();
                }));
                on("enable disable", (() => {
                    let {nextEl, prevEl} = swiper.navigation;
                    nextEl = makeElementsArray(nextEl);
                    prevEl = makeElementsArray(prevEl);
                    if (swiper.enabled) {
                        update();
                        return;
                    }
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
                }));
                on("click", ((_s, e) => {
                    let {nextEl, prevEl} = swiper.navigation;
                    nextEl = makeElementsArray(nextEl);
                    prevEl = makeElementsArray(prevEl);
                    const targetEl = e.target;
                    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                        let isHidden;
                        if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                        if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                        [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                    }
                }));
                const enable = () => {
                    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                    init();
                    update();
                };
                const disable = () => {
                    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                    destroy();
                };
                Object.assign(swiper.navigation, {
                    enable,
                    disable,
                    update,
                    init,
                    destroy
                });
            }
            function classes_to_selector_classesToSelector(classes) {
                if (classes === void 0) classes = "";
                return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
            }
            function Pagination(_ref) {
                let {swiper, extendParams, on, emit} = _ref;
                const pfx = "swiper-pagination";
                extendParams({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: false,
                        hideOnClick: false,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: false,
                        type: "bullets",
                        dynamicBullets: false,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: number => number,
                        formatFractionTotal: number => number,
                        bulletClass: `${pfx}-bullet`,
                        bulletActiveClass: `${pfx}-bullet-active`,
                        modifierClass: `${pfx}-`,
                        currentClass: `${pfx}-current`,
                        totalClass: `${pfx}-total`,
                        hiddenClass: `${pfx}-hidden`,
                        progressbarFillClass: `${pfx}-progressbar-fill`,
                        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                        clickableClass: `${pfx}-clickable`,
                        lockClass: `${pfx}-lock`,
                        horizontalClass: `${pfx}-horizontal`,
                        verticalClass: `${pfx}-vertical`,
                        paginationDisabledClass: `${pfx}-disabled`
                    }
                });
                swiper.pagination = {
                    el: null,
                    bullets: []
                };
                let bulletSize;
                let dynamicBulletIndex = 0;
                const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
                function isPaginationDisabled() {
                    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
                }
                function setSideBullets(bulletEl, position) {
                    const {bulletActiveClass} = swiper.params.pagination;
                    if (!bulletEl) return;
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) {
                        bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                        bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                        if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                    }
                }
                function onBulletClick(e) {
                    const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                    if (!bulletEl) return;
                    e.preventDefault();
                    const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) {
                        if (swiper.realIndex === index) return;
                        swiper.slideToLoop(index);
                    } else swiper.slideTo(index);
                }
                function update() {
                    const rtl = swiper.rtl;
                    const params = swiper.params.pagination;
                    if (isPaginationDisabled()) return;
                    let el = swiper.pagination.el;
                    el = makeElementsArray(el);
                    let current;
                    let previousIndex;
                    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.loop) {
                        previousIndex = swiper.previousRealIndex || 0;
                        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                    } else if (typeof swiper.snapIndex !== "undefined") {
                        current = swiper.snapIndex;
                        previousIndex = swiper.previousSnapIndex;
                    } else {
                        previousIndex = swiper.previousIndex || 0;
                        current = swiper.activeIndex || 0;
                    }
                    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                        const bullets = swiper.pagination.bullets;
                        let firstIndex;
                        let lastIndex;
                        let midIndex;
                        if (params.dynamicBullets) {
                            bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                            el.forEach((subEl => {
                                subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                            }));
                            if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                                dynamicBulletIndex += current - (previousIndex || 0);
                                if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                            }
                            firstIndex = Math.max(current - dynamicBulletIndex, 0);
                            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                            midIndex = (lastIndex + firstIndex) / 2;
                        }
                        bullets.forEach((bulletEl => {
                            const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                            bulletEl.classList.remove(...classesToRemove);
                        }));
                        if (el.length > 1) bullets.forEach((bullet => {
                            const bulletIndex = elementIndex(bullet);
                            if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                            if (params.dynamicBullets) {
                                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                                if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                                if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                            }
                        })); else {
                            const bullet = bullets[current];
                            if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                            if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                                bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                            }));
                            if (params.dynamicBullets) {
                                const firstDisplayedBullet = bullets[firstIndex];
                                const lastDisplayedBullet = bullets[lastIndex];
                                for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                                setSideBullets(firstDisplayedBullet, "prev");
                                setSideBullets(lastDisplayedBullet, "next");
                            }
                        }
                        if (params.dynamicBullets) {
                            const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                            const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                            const offsetProp = rtl ? "right" : "left";
                            bullets.forEach((bullet => {
                                bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                            }));
                        }
                    }
                    el.forEach(((subEl, subElIndex) => {
                        if (params.type === "fraction") {
                            subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                                fractionEl.textContent = params.formatFractionCurrent(current + 1);
                            }));
                            subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                                totalEl.textContent = params.formatFractionTotal(total);
                            }));
                        }
                        if (params.type === "progressbar") {
                            let progressbarDirection;
                            if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                            const scale = (current + 1) / total;
                            let scaleX = 1;
                            let scaleY = 1;
                            if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                            subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                                progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                                progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                            }));
                        }
                        if (params.type === "custom" && params.renderCustom) {
                            subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                            if (subElIndex === 0) emit("paginationRender", subEl);
                        } else {
                            if (subElIndex === 0) emit("paginationRender", subEl);
                            emit("paginationUpdate", subEl);
                        }
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }));
                }
                function render() {
                    const params = swiper.params.pagination;
                    if (isPaginationDisabled()) return;
                    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
                    let el = swiper.pagination.el;
                    el = makeElementsArray(el);
                    let paginationHTML = "";
                    if (params.type === "bullets") {
                        let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                        for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                    }
                    if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                    if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    swiper.pagination.bullets = [];
                    el.forEach((subEl => {
                        if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                        if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                    }));
                    if (params.type !== "custom") emit("paginationRender", el[0]);
                }
                function init() {
                    swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const params = swiper.params.pagination;
                    if (!params.el) return;
                    let el;
                    if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                    if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                    if (!el) el = params.el;
                    if (!el || el.length === 0) return;
                    if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                        el = [ ...swiper.el.querySelectorAll(params.el) ];
                        if (el.length > 1) el = el.filter((subEl => {
                            if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                            return true;
                        }))[0];
                    }
                    if (Array.isArray(el) && el.length === 1) el = el[0];
                    Object.assign(swiper.pagination, {
                        el
                    });
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                        subEl.classList.add(params.modifierClass + params.type);
                        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.type === "bullets" && params.dynamicBullets) {
                            subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                            dynamicBulletIndex = 0;
                            if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                        }
                        if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                        if (params.clickable) subEl.addEventListener("click", onBulletClick);
                        if (!swiper.enabled) subEl.classList.add(params.lockClass);
                    }));
                }
                function destroy() {
                    const params = swiper.params.pagination;
                    if (isPaginationDisabled()) return;
                    let el = swiper.pagination.el;
                    if (el) {
                        el = makeElementsArray(el);
                        el.forEach((subEl => {
                            subEl.classList.remove(params.hiddenClass);
                            subEl.classList.remove(params.modifierClass + params.type);
                            subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                            if (params.clickable) {
                                subEl.classList.remove(...(params.clickableClass || "").split(" "));
                                subEl.removeEventListener("click", onBulletClick);
                            }
                        }));
                    }
                    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
                }
                on("changeDirection", (() => {
                    if (!swiper.pagination || !swiper.pagination.el) return;
                    const params = swiper.params.pagination;
                    let {el} = swiper.pagination;
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.horizontalClass, params.verticalClass);
                        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    }));
                }));
                on("init", (() => {
                    if (swiper.params.pagination.enabled === false) disable(); else {
                        init();
                        render();
                        update();
                    }
                }));
                on("activeIndexChange", (() => {
                    if (typeof swiper.snapIndex === "undefined") update();
                }));
                on("snapIndexChange", (() => {
                    update();
                }));
                on("snapGridLengthChange", (() => {
                    render();
                    update();
                }));
                on("destroy", (() => {
                    destroy();
                }));
                on("enable disable", (() => {
                    let {el} = swiper.pagination;
                    if (el) {
                        el = makeElementsArray(el);
                        el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                    }
                }));
                on("lock unlock", (() => {
                    update();
                }));
                on("click", ((_s, e) => {
                    const targetEl = e.target;
                    const el = makeElementsArray(swiper.pagination.el);
                    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                        const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                        if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                        el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                    }
                }));
                const enable = () => {
                    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                    let {el} = swiper.pagination;
                    if (el) {
                        el = makeElementsArray(el);
                        el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                    }
                    init();
                    render();
                    update();
                };
                const disable = () => {
                    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                    let {el} = swiper.pagination;
                    if (el) {
                        el = makeElementsArray(el);
                        el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                    }
                    destroy();
                };
                Object.assign(swiper.pagination, {
                    enable,
                    disable,
                    render,
                    update,
                    init,
                    destroy
                });
            }
            function Controller(_ref) {
                let {swiper, extendParams, on} = _ref;
                extendParams({
                    controller: {
                        control: void 0,
                        inverse: false,
                        by: "slide"
                    }
                });
                swiper.controller = {
                    control: void 0
                };
                function LinearSpline(x, y) {
                    const binarySearch = function search() {
                        let maxIndex;
                        let minIndex;
                        let guess;
                        return (array, val) => {
                            minIndex = -1;
                            maxIndex = array.length;
                            while (maxIndex - minIndex > 1) {
                                guess = maxIndex + minIndex >> 1;
                                if (array[guess] <= val) minIndex = guess; else maxIndex = guess;
                            }
                            return maxIndex;
                        };
                    }();
                    this.x = x;
                    this.y = y;
                    this.lastIndex = x.length - 1;
                    let i1;
                    let i3;
                    this.interpolate = function interpolate(x2) {
                        if (!x2) return 0;
                        i3 = binarySearch(this.x, x2);
                        i1 = i3 - 1;
                        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
                    };
                    return this;
                }
                function getInterpolateFunction(c) {
                    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
                }
                function setTranslate(_t, byController) {
                    const controlled = swiper.controller.control;
                    let multiplier;
                    let controlledTranslate;
                    const Swiper = swiper.constructor;
                    function setControlledTranslate(c) {
                        if (c.destroyed) return;
                        const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                        if (swiper.params.controller.by === "slide") {
                            getInterpolateFunction(c);
                            controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                        }
                        if (!controlledTranslate || swiper.params.controller.by === "container") {
                            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                            if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) multiplier = 1;
                            controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                        }
                        if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
                        c.updateProgress(controlledTranslate);
                        c.setTranslate(controlledTranslate, swiper);
                        c.updateActiveIndex();
                        c.updateSlidesClasses();
                    }
                    if (Array.isArray(controlled)) {
                        for (let i = 0; i < controlled.length; i += 1) if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
                    } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
                }
                function setTransition(duration, byController) {
                    const Swiper = swiper.constructor;
                    const controlled = swiper.controller.control;
                    let i;
                    function setControlledTransition(c) {
                        if (c.destroyed) return;
                        c.setTransition(duration, swiper);
                        if (duration !== 0) {
                            c.transitionStart();
                            if (c.params.autoHeight) utils_nextTick((() => {
                                c.updateAutoHeight();
                            }));
                            utils_elementTransitionEnd(c.wrapperEl, (() => {
                                if (!controlled) return;
                                c.transitionEnd();
                            }));
                        }
                    }
                    if (Array.isArray(controlled)) {
                        for (i = 0; i < controlled.length; i += 1) if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
                    } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
                }
                function removeSpline() {
                    if (!swiper.controller.control) return;
                    if (swiper.controller.spline) {
                        swiper.controller.spline = void 0;
                        delete swiper.controller.spline;
                    }
                }
                on("beforeInit", (() => {
                    if (typeof window !== "undefined" && (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
                        const controlElement = document.querySelector(swiper.params.controller.control);
                        if (controlElement && controlElement.swiper) swiper.controller.control = controlElement.swiper; else if (controlElement) {
                            const onControllerSwiper = e => {
                                swiper.controller.control = e.detail[0];
                                swiper.update();
                                controlElement.removeEventListener("init", onControllerSwiper);
                            };
                            controlElement.addEventListener("init", onControllerSwiper);
                        }
                        return;
                    }
                    swiper.controller.control = swiper.params.controller.control;
                }));
                on("update", (() => {
                    removeSpline();
                }));
                on("resize", (() => {
                    removeSpline();
                }));
                on("observerUpdate", (() => {
                    removeSpline();
                }));
                on("setTranslate", ((_s, translate, byController) => {
                    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
                    swiper.controller.setTranslate(translate, byController);
                }));
                on("setTransition", ((_s, duration, byController) => {
                    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
                    swiper.controller.setTransition(duration, byController);
                }));
                Object.assign(swiper.controller, {
                    setTranslate,
                    setTransition
                });
            }
            function A11y(_ref) {
                let {swiper, extendParams, on} = _ref;
                extendParams({
                    a11y: {
                        enabled: true,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                        id: null
                    }
                });
                swiper.a11y = {
                    clicked: false
                };
                let liveRegion = null;
                function notify(message) {
                    const notification = liveRegion;
                    if (notification.length === 0) return;
                    notification.innerHTML = "";
                    notification.innerHTML = message;
                }
                const makeElementsArray = el => (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
                function getRandomNumber(size) {
                    if (size === void 0) size = 16;
                    const randomChar = () => Math.round(16 * Math.random()).toString(16);
                    return "x".repeat(size).replace(/x/g, randomChar);
                }
                function makeElFocusable(el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.setAttribute("tabIndex", "0");
                    }));
                }
                function makeElNotFocusable(el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.setAttribute("tabIndex", "-1");
                    }));
                }
                function addElRole(el, role) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.setAttribute("role", role);
                    }));
                }
                function addElRoleDescription(el, description) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.setAttribute("aria-roledescription", description);
                    }));
                }
                function addElControls(el, controls) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.setAttribute("aria-controls", controls);
                    }));
                }
                function addElLabel(el, label) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.setAttribute("aria-label", label);
                    }));
                }
                function addElId(el, id) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.setAttribute("id", id);
                    }));
                }
                function addElLive(el, live) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.setAttribute("aria-live", live);
                    }));
                }
                function disableEl(el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.setAttribute("aria-disabled", true);
                    }));
                }
                function enableEl(el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.setAttribute("aria-disabled", false);
                    }));
                }
                function onEnterOrSpaceKey(e) {
                    if (e.keyCode !== 13 && e.keyCode !== 32) return;
                    const params = swiper.params.a11y;
                    const targetEl = e.target;
                    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) if (!e.target.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass))) return;
                    if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
                        if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
                        if (swiper.isEnd) notify(params.lastSlideMessage); else notify(params.nextSlideMessage);
                    }
                    if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
                        if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
                        if (swiper.isBeginning) notify(params.firstSlideMessage); else notify(params.prevSlideMessage);
                    }
                    if (swiper.pagination && targetEl.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass))) targetEl.click();
                }
                function updateNavigation() {
                    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
                    const {nextEl, prevEl} = swiper.navigation;
                    if (prevEl) if (swiper.isBeginning) {
                        disableEl(prevEl);
                        makeElNotFocusable(prevEl);
                    } else {
                        enableEl(prevEl);
                        makeElFocusable(prevEl);
                    }
                    if (nextEl) if (swiper.isEnd) {
                        disableEl(nextEl);
                        makeElNotFocusable(nextEl);
                    } else {
                        enableEl(nextEl);
                        makeElFocusable(nextEl);
                    }
                }
                function hasPagination() {
                    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
                }
                function hasClickablePagination() {
                    return hasPagination() && swiper.params.pagination.clickable;
                }
                function updatePagination() {
                    const params = swiper.params.a11y;
                    if (!hasPagination()) return;
                    swiper.pagination.bullets.forEach((bulletEl => {
                        if (swiper.params.pagination.clickable) {
                            makeElFocusable(bulletEl);
                            if (!swiper.params.pagination.renderBullet) {
                                addElRole(bulletEl, "button");
                                addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
                            }
                        }
                        if (bulletEl.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletActiveClass))) bulletEl.setAttribute("aria-current", "true"); else bulletEl.removeAttribute("aria-current");
                    }));
                }
                const initNavEl = (el, wrapperId, message) => {
                    makeElFocusable(el);
                    if (el.tagName !== "BUTTON") {
                        addElRole(el, "button");
                        el.addEventListener("keydown", onEnterOrSpaceKey);
                    }
                    addElLabel(el, message);
                    addElControls(el, wrapperId);
                };
                const handlePointerDown = () => {
                    swiper.a11y.clicked = true;
                };
                const handlePointerUp = () => {
                    requestAnimationFrame((() => {
                        requestAnimationFrame((() => {
                            if (!swiper.destroyed) swiper.a11y.clicked = false;
                        }));
                    }));
                };
                const handleFocus = e => {
                    if (swiper.a11y.clicked) return;
                    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
                    if (!slideEl || !swiper.slides.includes(slideEl)) return;
                    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
                    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
                    if (isActive || isVisible) return;
                    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
                    if (swiper.isHorizontal()) swiper.el.scrollLeft = 0; else swiper.el.scrollTop = 0;
                    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
                };
                const initSlides = () => {
                    const params = swiper.params.a11y;
                    if (params.itemRoleDescriptionMessage) addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
                    if (params.slideRole) addElRole(swiper.slides, params.slideRole);
                    const slidesLength = swiper.slides.length;
                    if (params.slideLabelMessage) swiper.slides.forEach(((slideEl, index) => {
                        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
                        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                        addElLabel(slideEl, ariaLabelMessage);
                    }));
                };
                const init = () => {
                    const params = swiper.params.a11y;
                    swiper.el.append(liveRegion);
                    const containerEl = swiper.el;
                    if (params.containerRoleDescriptionMessage) addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
                    if (params.containerMessage) addElLabel(containerEl, params.containerMessage);
                    const wrapperEl = swiper.wrapperEl;
                    const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
                    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
                    addElId(wrapperEl, wrapperId);
                    addElLive(wrapperEl, live);
                    initSlides();
                    let {nextEl, prevEl} = swiper.navigation ? swiper.navigation : {};
                    nextEl = makeElementsArray(nextEl);
                    prevEl = makeElementsArray(prevEl);
                    if (nextEl) nextEl.forEach((el => initNavEl(el, wrapperId, params.nextSlideMessage)));
                    if (prevEl) prevEl.forEach((el => initNavEl(el, wrapperId, params.prevSlideMessage)));
                    if (hasClickablePagination()) {
                        const paginationEl = makeElementsArray(swiper.pagination.el);
                        paginationEl.forEach((el => {
                            el.addEventListener("keydown", onEnterOrSpaceKey);
                        }));
                    }
                    swiper.el.addEventListener("focus", handleFocus, true);
                    swiper.el.addEventListener("pointerdown", handlePointerDown, true);
                    swiper.el.addEventListener("pointerup", handlePointerUp, true);
                };
                function destroy() {
                    if (liveRegion) liveRegion.remove();
                    let {nextEl, prevEl} = swiper.navigation ? swiper.navigation : {};
                    nextEl = makeElementsArray(nextEl);
                    prevEl = makeElementsArray(prevEl);
                    if (nextEl) nextEl.forEach((el => el.removeEventListener("keydown", onEnterOrSpaceKey)));
                    if (prevEl) prevEl.forEach((el => el.removeEventListener("keydown", onEnterOrSpaceKey)));
                    if (hasClickablePagination()) {
                        const paginationEl = makeElementsArray(swiper.pagination.el);
                        paginationEl.forEach((el => {
                            el.removeEventListener("keydown", onEnterOrSpaceKey);
                        }));
                    }
                    swiper.el.removeEventListener("focus", handleFocus, true);
                    swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
                    swiper.el.removeEventListener("pointerup", handlePointerUp, true);
                }
                on("beforeInit", (() => {
                    liveRegion = utils_createElement("span", swiper.params.a11y.notificationClass);
                    liveRegion.setAttribute("aria-live", "assertive");
                    liveRegion.setAttribute("aria-atomic", "true");
                }));
                on("afterInit", (() => {
                    if (!swiper.params.a11y.enabled) return;
                    init();
                }));
                on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                    if (!swiper.params.a11y.enabled) return;
                    initSlides();
                }));
                on("fromEdge toEdge afterInit lock unlock", (() => {
                    if (!swiper.params.a11y.enabled) return;
                    updateNavigation();
                }));
                on("paginationUpdate", (() => {
                    if (!swiper.params.a11y.enabled) return;
                    updatePagination();
                }));
                on("destroy", (() => {
                    if (!swiper.params.a11y.enabled) return;
                    destroy();
                }));
            }
            function Autoplay(_ref) {
                let {swiper, extendParams, on, emit, params} = _ref;
                swiper.autoplay = {
                    running: false,
                    paused: false,
                    timeLeft: 0
                };
                extendParams({
                    autoplay: {
                        enabled: false,
                        delay: 3e3,
                        waitForTransition: true,
                        disableOnInteraction: false,
                        stopOnLastSlide: false,
                        reverseDirection: false,
                        pauseOnMouseEnter: false
                    }
                });
                let timeout;
                let raf;
                let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
                let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
                let autoplayTimeLeft;
                let autoplayStartTime = (new Date).getTime();
                let wasPaused;
                let isTouched;
                let pausedByTouch;
                let touchStartTimeout;
                let slideChanged;
                let pausedByInteraction;
                let pausedByPointerEnter;
                function onTransitionEnd(e) {
                    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
                    if (e.target !== swiper.wrapperEl) return;
                    swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
                    if (pausedByPointerEnter) return;
                    resume();
                }
                const calcTimeLeft = () => {
                    if (swiper.destroyed || !swiper.autoplay.running) return;
                    if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                        autoplayDelayCurrent = autoplayTimeLeft;
                        wasPaused = false;
                    }
                    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
                    swiper.autoplay.timeLeft = timeLeft;
                    emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
                    raf = requestAnimationFrame((() => {
                        calcTimeLeft();
                    }));
                };
                const getSlideDelay = () => {
                    let activeSlideEl;
                    if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
                    if (!activeSlideEl) return;
                    const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
                    return currentSlideDelay;
                };
                const run = delayForce => {
                    if (swiper.destroyed || !swiper.autoplay.running) return;
                    cancelAnimationFrame(raf);
                    calcTimeLeft();
                    let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
                    autoplayDelayTotal = swiper.params.autoplay.delay;
                    autoplayDelayCurrent = swiper.params.autoplay.delay;
                    const currentSlideDelay = getSlideDelay();
                    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                        delay = currentSlideDelay;
                        autoplayDelayTotal = currentSlideDelay;
                        autoplayDelayCurrent = currentSlideDelay;
                    }
                    autoplayTimeLeft = delay;
                    const speed = swiper.params.speed;
                    const proceed = () => {
                        if (!swiper || swiper.destroyed) return;
                        if (swiper.params.autoplay.reverseDirection) {
                            if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                                swiper.slidePrev(speed, true, true);
                                emit("autoplay");
                            } else if (!swiper.params.autoplay.stopOnLastSlide) {
                                swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                                emit("autoplay");
                            }
                        } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                            swiper.slideNext(speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            swiper.slideTo(0, speed, true, true);
                            emit("autoplay");
                        }
                        if (swiper.params.cssMode) {
                            autoplayStartTime = (new Date).getTime();
                            requestAnimationFrame((() => {
                                run();
                            }));
                        }
                    };
                    if (delay > 0) {
                        clearTimeout(timeout);
                        timeout = setTimeout((() => {
                            proceed();
                        }), delay);
                    } else requestAnimationFrame((() => {
                        proceed();
                    }));
                    return delay;
                };
                const start = () => {
                    autoplayStartTime = (new Date).getTime();
                    swiper.autoplay.running = true;
                    run();
                    emit("autoplayStart");
                };
                const stop = () => {
                    swiper.autoplay.running = false;
                    clearTimeout(timeout);
                    cancelAnimationFrame(raf);
                    emit("autoplayStop");
                };
                const pause = (internal, reset) => {
                    if (swiper.destroyed || !swiper.autoplay.running) return;
                    clearTimeout(timeout);
                    if (!internal) pausedByInteraction = true;
                    const proceed = () => {
                        emit("autoplayPause");
                        if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
                    };
                    swiper.autoplay.paused = true;
                    if (reset) {
                        if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                        slideChanged = false;
                        proceed();
                        return;
                    }
                    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
                    autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
                    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
                    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
                    proceed();
                };
                const resume = () => {
                    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
                    autoplayStartTime = (new Date).getTime();
                    if (pausedByInteraction) {
                        pausedByInteraction = false;
                        run(autoplayTimeLeft);
                    } else run();
                    swiper.autoplay.paused = false;
                    emit("autoplayResume");
                };
                const onVisibilityChange = () => {
                    if (swiper.destroyed || !swiper.autoplay.running) return;
                    const document = ssr_window_esm_getDocument();
                    if (document.visibilityState === "hidden") {
                        pausedByInteraction = true;
                        pause(true);
                    }
                    if (document.visibilityState === "visible") resume();
                };
                const onPointerEnter = e => {
                    if (e.pointerType !== "mouse") return;
                    pausedByInteraction = true;
                    pausedByPointerEnter = true;
                    if (swiper.animating || swiper.autoplay.paused) return;
                    pause(true);
                };
                const onPointerLeave = e => {
                    if (e.pointerType !== "mouse") return;
                    pausedByPointerEnter = false;
                    if (swiper.autoplay.paused) resume();
                };
                const attachMouseEvents = () => {
                    if (swiper.params.autoplay.pauseOnMouseEnter) {
                        swiper.el.addEventListener("pointerenter", onPointerEnter);
                        swiper.el.addEventListener("pointerleave", onPointerLeave);
                    }
                };
                const detachMouseEvents = () => {
                    swiper.el.removeEventListener("pointerenter", onPointerEnter);
                    swiper.el.removeEventListener("pointerleave", onPointerLeave);
                };
                const attachDocumentEvents = () => {
                    const document = ssr_window_esm_getDocument();
                    document.addEventListener("visibilitychange", onVisibilityChange);
                };
                const detachDocumentEvents = () => {
                    const document = ssr_window_esm_getDocument();
                    document.removeEventListener("visibilitychange", onVisibilityChange);
                };
                on("init", (() => {
                    if (swiper.params.autoplay.enabled) {
                        attachMouseEvents();
                        attachDocumentEvents();
                        start();
                    }
                }));
                on("destroy", (() => {
                    detachMouseEvents();
                    detachDocumentEvents();
                    if (swiper.autoplay.running) stop();
                }));
                on("_freeModeStaticRelease", (() => {
                    if (pausedByTouch || pausedByInteraction) resume();
                }));
                on("_freeModeNoMomentumRelease", (() => {
                    if (!swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
                }));
                on("beforeTransitionStart", ((_s, speed, internal) => {
                    if (swiper.destroyed || !swiper.autoplay.running) return;
                    if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
                }));
                on("sliderFirstMove", (() => {
                    if (swiper.destroyed || !swiper.autoplay.running) return;
                    if (swiper.params.autoplay.disableOnInteraction) {
                        stop();
                        return;
                    }
                    isTouched = true;
                    pausedByTouch = false;
                    pausedByInteraction = false;
                    touchStartTimeout = setTimeout((() => {
                        pausedByInteraction = true;
                        pausedByTouch = true;
                        pause(true);
                    }), 200);
                }));
                on("touchEnd", (() => {
                    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
                    clearTimeout(touchStartTimeout);
                    clearTimeout(timeout);
                    if (swiper.params.autoplay.disableOnInteraction) {
                        pausedByTouch = false;
                        isTouched = false;
                        return;
                    }
                    if (pausedByTouch && swiper.params.cssMode) resume();
                    pausedByTouch = false;
                    isTouched = false;
                }));
                on("slideChange", (() => {
                    if (swiper.destroyed || !swiper.autoplay.running) return;
                    slideChanged = true;
                }));
                Object.assign(swiper.autoplay, {
                    start,
                    stop,
                    pause,
                    resume
                });
            }
            function Thumb(_ref) {
                let {swiper, extendParams, on} = _ref;
                extendParams({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: true,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs"
                    }
                });
                let initialized = false;
                let swiperCreated = false;
                swiper.thumbs = {
                    swiper: null
                };
                function onThumbClick() {
                    const thumbsSwiper = swiper.thumbs.swiper;
                    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                    const clickedIndex = thumbsSwiper.clickedIndex;
                    const clickedSlide = thumbsSwiper.clickedSlide;
                    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
                    if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
                    let slideToIndex;
                    if (thumbsSwiper.params.loop) slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10); else slideToIndex = clickedIndex;
                    if (swiper.params.loop) swiper.slideToLoop(slideToIndex); else swiper.slideTo(slideToIndex);
                }
                function init() {
                    const {thumbs: thumbsParams} = swiper.params;
                    if (initialized) return false;
                    initialized = true;
                    const SwiperClass = swiper.constructor;
                    if (thumbsParams.swiper instanceof SwiperClass) {
                        swiper.thumbs.swiper = thumbsParams.swiper;
                        Object.assign(swiper.thumbs.swiper.originalParams, {
                            watchSlidesProgress: true,
                            slideToClickedSlide: false
                        });
                        Object.assign(swiper.thumbs.swiper.params, {
                            watchSlidesProgress: true,
                            slideToClickedSlide: false
                        });
                        swiper.thumbs.swiper.update();
                    } else if (utils_isObject(thumbsParams.swiper)) {
                        const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                        Object.assign(thumbsSwiperParams, {
                            watchSlidesProgress: true,
                            slideToClickedSlide: false
                        });
                        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                        swiperCreated = true;
                    }
                    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
                    swiper.thumbs.swiper.on("tap", onThumbClick);
                    return true;
                }
                function update(initial) {
                    const thumbsSwiper = swiper.thumbs.swiper;
                    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                    const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
                    let thumbsToActivate = 1;
                    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
                    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
                    if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
                    thumbsToActivate = Math.floor(thumbsToActivate);
                    thumbsSwiper.slides.forEach((slideEl => slideEl.classList.remove(thumbActiveClass)));
                    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for (let i = 0; i < thumbsToActivate; i += 1) utils_elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl => {
                        slideEl.classList.add(thumbActiveClass);
                    })); else for (let i = 0; i < thumbsToActivate; i += 1) if (thumbsSwiper.slides[swiper.realIndex + i]) thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
                    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
                    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
                    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                        const currentThumbsIndex = thumbsSwiper.activeIndex;
                        let newThumbsIndex;
                        let direction;
                        if (thumbsSwiper.params.loop) {
                            const newThumbsSlide = thumbsSwiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`))[0];
                            newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
                            direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
                        } else {
                            newThumbsIndex = swiper.realIndex;
                            direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
                        }
                        if (useOffset) newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
                        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                            if (thumbsSwiper.params.centeredSlides) if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1; else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1; else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
                            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
                        }
                    }
                }
                on("beforeInit", (() => {
                    const {thumbs} = swiper.params;
                    if (!thumbs || !thumbs.swiper) return;
                    if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
                        const document = ssr_window_esm_getDocument();
                        const getThumbsElementAndInit = () => {
                            const thumbsElement = typeof thumbs.swiper === "string" ? document.querySelector(thumbs.swiper) : thumbs.swiper;
                            if (thumbsElement && thumbsElement.swiper) {
                                thumbs.swiper = thumbsElement.swiper;
                                init();
                                update(true);
                            } else if (thumbsElement) {
                                const onThumbsSwiper = e => {
                                    thumbs.swiper = e.detail[0];
                                    thumbsElement.removeEventListener("init", onThumbsSwiper);
                                    init();
                                    update(true);
                                    thumbs.swiper.update();
                                    swiper.update();
                                };
                                thumbsElement.addEventListener("init", onThumbsSwiper);
                            }
                            return thumbsElement;
                        };
                        const watchForThumbsToAppear = () => {
                            if (swiper.destroyed) return;
                            const thumbsElement = getThumbsElementAndInit();
                            if (!thumbsElement) requestAnimationFrame(watchForThumbsToAppear);
                        };
                        requestAnimationFrame(watchForThumbsToAppear);
                    } else {
                        init();
                        update(true);
                    }
                }));
                on("slideChange update resize observerUpdate", (() => {
                    update();
                }));
                on("setTransition", ((_s, duration) => {
                    const thumbsSwiper = swiper.thumbs.swiper;
                    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                    thumbsSwiper.setTransition(duration);
                }));
                on("beforeDestroy", (() => {
                    const thumbsSwiper = swiper.thumbs.swiper;
                    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                    if (swiperCreated) thumbsSwiper.destroy();
                }));
                Object.assign(swiper.thumbs, {
                    init,
                    update
                });
            }
            function effect_init_effectInit(params) {
                const {effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams} = params;
                on("beforeInit", (() => {
                    if (swiper.params.effect !== effect) return;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
                    if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
                    Object.assign(swiper.params, overwriteParamsResult);
                    Object.assign(swiper.originalParams, overwriteParamsResult);
                }));
                on("setTranslate", (() => {
                    if (swiper.params.effect !== effect) return;
                    setTranslate();
                }));
                on("setTransition", ((_s, duration) => {
                    if (swiper.params.effect !== effect) return;
                    setTransition(duration);
                }));
                on("transitionEnd", (() => {
                    if (swiper.params.effect !== effect) return;
                    if (recreateShadows) {
                        if (!getEffectParams || !getEffectParams().slideShadows) return;
                        swiper.slides.forEach((slideEl => {
                            slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl => shadowEl.remove()));
                        }));
                        recreateShadows();
                    }
                }));
                let requireUpdateOnVirtual;
                on("virtualUpdate", (() => {
                    if (swiper.params.effect !== effect) return;
                    if (!swiper.slides.length) requireUpdateOnVirtual = true;
                    requestAnimationFrame((() => {
                        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                            setTranslate();
                            requireUpdateOnVirtual = false;
                        }
                    }));
                }));
            }
            function effect_target_effectTarget(effectParams, slideEl) {
                const transformEl = utils_getSlideTransformEl(slideEl);
                if (transformEl !== slideEl) {
                    transformEl.style.backfaceVisibility = "hidden";
                    transformEl.style["-webkit-backface-visibility"] = "hidden";
                }
                return transformEl;
            }
            function effect_virtual_transition_end_effectVirtualTransitionEnd(_ref) {
                let {swiper, duration, transformElements, allSlides} = _ref;
                const {activeIndex} = swiper;
                const getSlide = el => {
                    if (!el.parentElement) {
                        const slide = swiper.slides.filter((slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode))[0];
                        return slide;
                    }
                    return el.parentElement;
                };
                if (swiper.params.virtualTranslate && duration !== 0) {
                    let eventTriggered = false;
                    let transitionEndTarget;
                    if (allSlides) transitionEndTarget = transformElements; else transitionEndTarget = transformElements.filter((transformEl => {
                        const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
                        return swiper.getSlideIndex(el) === activeIndex;
                    }));
                    transitionEndTarget.forEach((el => {
                        utils_elementTransitionEnd(el, (() => {
                            if (eventTriggered) return;
                            if (!swiper || swiper.destroyed) return;
                            eventTriggered = true;
                            swiper.animating = false;
                            const evt = new window.CustomEvent("transitionend", {
                                bubbles: true,
                                cancelable: true
                            });
                            swiper.wrapperEl.dispatchEvent(evt);
                        }));
                    }));
                }
            }
            function EffectFade(_ref) {
                let {swiper, extendParams, on} = _ref;
                extendParams({
                    fadeEffect: {
                        crossFade: false
                    }
                });
                const setTranslate = () => {
                    const {slides} = swiper;
                    const params = swiper.params.fadeEffect;
                    for (let i = 0; i < slides.length; i += 1) {
                        const slideEl = swiper.slides[i];
                        const offset = slideEl.swiperSlideOffset;
                        let tx = -offset;
                        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                        let ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
                        const targetEl = effect_target_effectTarget(params, slideEl);
                        targetEl.style.opacity = slideOpacity;
                        targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
                    }
                };
                const setTransition = duration => {
                    const transformElements = swiper.slides.map((slideEl => utils_getSlideTransformEl(slideEl)));
                    transformElements.forEach((el => {
                        el.style.transitionDuration = `${duration}ms`;
                    }));
                    effect_virtual_transition_end_effectVirtualTransitionEnd({
                        swiper,
                        duration,
                        transformElements,
                        allSlides: true
                    });
                };
                effect_init_effectInit({
                    effect: "fade",
                    swiper,
                    on,
                    setTranslate,
                    setTransition,
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: !swiper.params.cssMode
                    })
                });
            }
            function initSliders() {
                if (document.querySelector(".js-hero-slider")) {
                    new swiper_core_Swiper(".js-hero-slider", {
                        modules: [ A11y, EffectFade, Autoplay, Thumb, Controller ],
                        observer: true,
                        observeParents: true,
                        slidesPerView: 1,
                        spaceBetween: 0,
                        lazy: true,
                        autoplay: {
                            delay: 5e3,
                            disableOnInteraction: false
                        },
                        loop: true,
                        allowTouchMove: false,
                        watchSlidesProgress: true,
                        speed: 800,
                        effect: "fade",
                        thumbs: {
                            swiper: ".js-hero-thumbs"
                        }
                    });
                    document.querySelector(".hero__thumbs-next-circle");
                    new swiper_core_Swiper(".js-hero-thumbs", {
                        modules: [ A11y, Navigation, Autoplay, Thumb, Controller ],
                        observer: true,
                        observeParents: true,
                        direction: "horizontal",
                        loop: true,
                        autoplay: {
                            delay: 5e3,
                            disableOnInteraction: false
                        },
                        loop: true,
                        slidesPerView: "auto",
                        spaceBetween: 0,
                        speed: 800,
                        navigation: {
                            prevEl: ".js-hero-thumbs-prev",
                            nextEl: ".js-hero-thumbs-next"
                        },
                        breakpoints: {
                            1024: {
                                direction: "vertical"
                            }
                        },
                        on: {}
                    });
                }
                if (document.querySelector(".js-hero-bottom-slider")) new swiper_core_Swiper(".js-hero-bottom-slider", {
                    modules: [ A11y, Autoplay ],
                    spaceBetween: 40,
                    speed: 4e3,
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: true
                    },
                    loop: true,
                    slidesPerView: "auto",
                    allowTouchMove: false,
                    disableOnInteraction: true
                });
                if (document.querySelector(".js-stocks-slider")) new swiper_core_Swiper(".js-stocks-slider", {
                    modules: [ A11y, Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 30,
                    watchSlidesProgress: true,
                    speed: 800,
                    navigation: {
                        prevEl: ".js-stocks-slider-prev",
                        nextEl: ".js-stocks-slider-next"
                    },
                    pagination: {
                        clickable: true,
                        el: ".swiper-pagination"
                    }
                });
                let stockSlidersLeft = document.querySelectorAll(".js-stock-slider-left");
                if (stockSlidersLeft.length) stockSlidersLeft.forEach((slider => {
                    new swiper_core_Swiper(slider, {
                        modules: [ A11y, Autoplay ],
                        observer: true,
                        observeParents: true,
                        watchSlidesProgress: true,
                        direction: "horizontal",
                        spaceBetween: 8,
                        reverseDirection: true,
                        slidesPerView: "auto",
                        allowTouchMove: false,
                        disableOnInteraction: true,
                        breakpoints: {
                            767: {
                                direction: "vertical",
                                spaceBetween: 16
                            }
                        }
                    });
                }));
                let stockSlidersRight = document.querySelectorAll(".js-stock-slider-right");
                if (stockSlidersRight.length) stockSlidersRight.forEach((slider => {
                    new swiper_core_Swiper(slider, {
                        modules: [ A11y, Autoplay ],
                        observer: true,
                        observeParents: true,
                        watchSlidesProgress: true,
                        direction: "horizontal",
                        spaceBetween: 8,
                        inverse: true,
                        slidesPerView: "auto",
                        allowTouchMove: false,
                        disableOnInteraction: true,
                        breakpoints: {
                            767: {
                                direction: "vertical",
                                spaceBetween: 16
                            }
                        }
                    });
                }));
                if (document.querySelector(".js-services-slider")) new swiper_core_Swiper(".js-services-slider", {
                    modules: [ A11y, Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    speed: 600,
                    loop: false,
                    slidesPerView: 1.2,
                    spaceBetween: 8,
                    navigation: {
                        prevEl: ".js-services-slider-prev",
                        nextEl: ".js-services-slider-next"
                    },
                    breakpoints: {
                        495: {
                            slidesPerView: "auto",
                            spaceBetween: 16,
                            loop: true
                        }
                    }
                });
                let flatSliders = document.querySelectorAll(".js-flat-gallery");
                if (flatSliders.length) flatSliders.forEach((item => {
                    let slider = item.querySelector(".js-flat-slider");
                    let sliderPrev = item.querySelector(".js-flat-slider-prev");
                    let sliderNext = item.querySelector(".js-flat-slider-next");
                    let sliderPagination = item.querySelector(".swiper-pagination");
                    new swiper_core_Swiper(slider, {
                        modules: [ A11y, Navigation, Pagination ],
                        observer: true,
                        observeParents: true,
                        speed: 600,
                        loop: false,
                        slidesPerView: 1,
                        spaceBetween: 8,
                        pagination: {
                            el: sliderPagination,
                            clickable: true
                        },
                        navigation: {
                            prevEl: sliderPrev,
                            nextEl: sliderNext
                        }
                    });
                }));
                if (document.querySelector(".js-advantages-gallery")) {
                    new swiper_core_Swiper(".js-advantages-gallery", {
                        modules: [ A11y, Thumb, Navigation, Pagination, EffectFade ],
                        observer: true,
                        observeParents: true,
                        slidesPerView: 1,
                        spaceBetween: 0,
                        allowTouchMove: true,
                        freeMode: true,
                        watchSlidesProgress: true,
                        speed: 600,
                        effect: "fade",
                        thumbs: {
                            swiper: ".js-advantages-cards"
                        }
                    });
                }
                if (document.querySelector(".js-advantages-cards")) new swiper_core_Swiper(".js-advantages-cards", {
                    modules: [ A11y, Navigation, Thumb ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 16,
                    speed: 600,
                    breakpoints: {
                        495: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 5
                        }
                    }
                });
                if (document.querySelector(".js-gallery-slider")) new swiper_core_Swiper(".js-gallery-slider", {
                    modules: [ A11y, Navigation, Pagination ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 16,
                    speed: 600,
                    navigation: {
                        prevEl: ".js-gallery-slider-prev",
                        nextEl: ".js-gallery-slider-next"
                    },
                    pagination: {
                        type: "fraction",
                        formatFractionCurrent: num => num > 9 ? num : "0" + num,
                        formatFractionTotal: num => num > 9 ? num : "0" + num,
                        el: ".swiper-pagination"
                    }
                });
                if (document.querySelector(".js-similar-slider")) new swiper_core_Swiper(".js-similar-slider", {
                    modules: [ A11y ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    spaceBetween: 8,
                    allowTouchMove: true,
                    speed: 600,
                    breakpoints: {
                        767: {
                            slidesPerView: 2,
                            allowTouchMove: true
                        },
                        1024: {
                            slidesPerView: "auto",
                            allowTouchMove: false,
                            spaceBetween: 0
                        }
                    }
                });
                let historySliders = document.querySelectorAll(".js-history-slider");
                if (historySliders.length) historySliders.forEach((slider => {
                    let mql = window.matchMedia("(max-width: 992px)");
                    let historySlider;
                    if (mql.matches) historySlider = new swiper_core_Swiper(slider, {
                        modules: [ A11y, Autoplay ],
                        observer: true,
                        observeParents: true,
                        freeMode: true,
                        spaceBetween: 8,
                        slidesPerView: 1,
                        allowTouchMove: true,
                        disableOnInteraction: true,
                        init: true,
                        breakpoints: {
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 16
                            },
                            992: {
                                slidesPerView: "auto",
                                allowTouchMove: false,
                                spaceBetween: 0
                            }
                        }
                    });
                }));
                let notFoundSliders = document.querySelectorAll(".js-not-found-slider");
                if (notFoundSliders.length) notFoundSliders.forEach((slider => {
                    new swiper_core_Swiper(slider, {
                        modules: [ A11y, Autoplay ],
                        spaceBetween: 50,
                        speed: 4e3,
                        autoplay: {
                            delay: 0,
                            disableOnInteraction: true
                        },
                        loop: true,
                        slidesPerView: "auto",
                        allowTouchMove: false,
                        disableOnInteraction: true,
                        breakpoints: {
                            1024: {
                                spaceBetween: 100
                            }
                        }
                    });
                }));
                let floorNumsSliders = document.querySelectorAll(".js-floor-nums-slider");
                if (floorNumsSliders.length) floorNumsSliders.forEach((slider => {
                    new swiper_core_Swiper(slider, {
                        modules: [ A11y, Navigation ],
                        spaceBetween: 20,
                        direction: "horizontal",
                        slidesPerView: "auto",
                        centeredSlides: true,
                        allowTouchMove: true,
                        disableOnInteraction: true,
                        navigation: {
                            prevEl: ".js-floor-nums-prev",
                            nextEl: ".js-floor-nums-next"
                        },
                        breakpoints: {
                            1023: {
                                spaceBetween: 35,
                                direction: "vertical"
                            }
                        }
                    });
                }));
            }
            window.addEventListener("load", (function(e) {
                initSliders();
            }));
            window.initSliders = initSliders;
        },
        287: (__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {
            "use strict";
            var _files_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(627);
            var _files_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
            var _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(566);
            var _files_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(307);
            class Popup {
                constructor(options) {
                    let config = {
                        logging: true,
                        init: true,
                        attributeOpenButton: "data-popup",
                        attributeCloseButton: "data-close",
                        fixElementSelector: "[data-lp]",
                        youtubeAttribute: "data-popup-youtube",
                        youtubePlaceAttribute: "data-popup-youtube-place",
                        setAutoplayYoutube: true,
                        classes: {
                            popup: "popup",
                            popupContent: "popup__content",
                            popupActive: "popup_show",
                            bodyActive: "popup-show"
                        },
                        focusCatch: true,
                        closeEsc: true,
                        bodyLock: true,
                        hashSettings: {
                            location: true,
                            goHash: true
                        },
                        on: {
                            beforeOpen: function() {},
                            afterOpen: function() {},
                            beforeClose: function() {},
                            afterClose: function() {}
                        }
                    };
                    this.youTubeCode;
                    this.isOpen = false;
                    this.targetOpen = {
                        selector: false,
                        element: false
                    };
                    this.previousOpen = {
                        selector: false,
                        element: false
                    };
                    this.lastClosed = {
                        selector: false,
                        element: false
                    };
                    this._dataValue = false;
                    this.hash = false;
                    this._reopen = false;
                    this._selectorOpen = false;
                    this.lastFocusEl = false;
                    this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                    this.options = {
                        ...config,
                        ...options,
                        classes: {
                            ...config.classes,
                            ...options?.classes
                        },
                        hashSettings: {
                            ...config.hashSettings,
                            ...options?.hashSettings
                        },
                        on: {
                            ...config.on,
                            ...options?.on
                        }
                    };
                    this.bodyLock = false;
                    this.options.init ? this.initPopups() : null;
                }
                initPopups() {
                    this.popupLogging(`Проснулся`);
                    this.eventsPopup();
                }
                async getModal(link, selector) {
                    console.log(link);
                    _files_api_js__WEBPACK_IMPORTED_MODULE_1__.Z.load({
                        url: link,
                        format: "text",
                        cb: responseResult => {
                            const parser = new DOMParser;
                            const response = parser.parseFromString(responseResult, "text/html");
                            const el = response.querySelector(selector);
                            document.body.appendChild(el);
                            _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__.Gz();
                            _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__.MK({
                                viewPass: false,
                                autoHeight: false
                            });
                            _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__.hf();
                            initSliders();
                            this.open();
                        }
                    });
                }
                eventsPopup() {
                    document.addEventListener("click", async function(e) {
                        const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                        if (buttonOpen) {
                            e.preventDefault();
                            this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                            await this.getModal(buttonOpen.href, this._dataValue);
                            if (this._dataValue !== "error") {
                                if (!this.isOpen) this.lastFocusEl = buttonOpen;
                                this.targetOpen.selector = `${this._dataValue}`;
                                this._selectorOpen = true;
                                this.open();
                                return;
                            } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                            return;
                        }
                        const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                        if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                            e.preventDefault();
                            this.close();
                            return;
                        }
                    }.bind(this));
                    document.addEventListener("keydown", function(e) {
                        if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                            e.preventDefault();
                            this.close();
                            return;
                        }
                        if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                            this._focusCatch(e);
                            return;
                        }
                    }.bind(this));
                    if (this.options.hashSettings.goHash) {
                        window.addEventListener("hashchange", function() {
                            if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                        }.bind(this));
                        window.addEventListener("load", function() {
                            if (window.location.hash) this._openToHash();
                        }.bind(this));
                    }
                }
                open(selectorValue) {
                    if (_files_functions_js__WEBPACK_IMPORTED_MODULE_3__.fA) {
                        this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                        if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                            this.targetOpen.selector = selectorValue;
                            this._selectorOpen = true;
                        }
                        if (this.isOpen) {
                            this._reopen = true;
                            this.close();
                        }
                        if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                        if (!this._reopen) this.previousActiveElement = document.activeElement;
                        this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                        if (this.targetOpen.element) {
                            if (this.options.hashSettings.location) {
                                this._getHash();
                                this._setHash();
                            }
                            this.options.on.beforeOpen(this);
                            document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                                detail: {
                                    popup: this
                                }
                            }));
                            this.targetOpen.element.classList.add(this.options.classes.popupActive);
                            document.documentElement.classList.add(this.options.classes.bodyActive);
                            if (!this._reopen) !this.bodyLock ? (0, _files_functions_js__WEBPACK_IMPORTED_MODULE_3__.qg)() : null; else this._reopen = false;
                            this.targetOpen.element.setAttribute("aria-hidden", "false");
                            this.previousOpen.selector = this.targetOpen.selector;
                            this.previousOpen.element = this.targetOpen.element;
                            this._selectorOpen = false;
                            this.isOpen = true;
                            setTimeout((() => {
                                this._focusTrap();
                            }), 50);
                            this.options.on.afterOpen(this);
                            document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                                detail: {
                                    popup: this
                                }
                            }));
                            this.popupLogging(`Открыл попап`);
                        } else this.popupLogging(`Ей, такого попа нет. Проверьте правильность ввода.`);
                    }
                }
                close(selectorValue, timer = 800) {
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                    if (!this.isOpen || !_files_functions_js__WEBPACK_IMPORTED_MODULE_3__.fA) return;
                    this.options.on.beforeClose(this);
                    document.dispatchEvent(new CustomEvent("beforePopupClose", {
                        detail: {
                            popup: this
                        }
                    }));
                    this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                    this.previousOpen.element.setAttribute("aria-hidden", "true");
                    if (!this._reopen) {
                        document.documentElement.classList.remove(this.options.classes.bodyActive);
                        !this.bodyLock ? (0, _files_functions_js__WEBPACK_IMPORTED_MODULE_3__.xF)(timer) : null;
                        this.isOpen = false;
                    }
                    this._removeHash();
                    if (this._selectorOpen) {
                        this.lastClosed.selector = this.previousOpen.selector;
                        this.lastClosed.element = this.previousOpen.element;
                    }
                    this.options.on.afterClose(this);
                    document.dispatchEvent(new CustomEvent("afterPopupClose", {
                        detail: {
                            popup: this
                        }
                    }));
                    setTimeout((() => {
                        this._focusTrap();
                    }), 50);
                    console.log(this.previousOpen);
                    setTimeout((() => {
                        this.previousOpen.element.remove();
                    }), timer);
                    this.popupLogging(`Закрыл попап`);
                }
                _getHash() {
                    if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
                }
                async _openToHash() {
                    const button = document.querySelector(`[${this.options.attributeOpenButton}="${window.location.hash}"]`);
                    if (button) await this.getModal(button.href, button.getAttribute(this.options.attributeOpenButton)).then((() => {
                        this.open(button.getAttribute(this.options.attributeOpenButton));
                    }));
                }
                _setHash() {
                    history.pushState("", "", this.hash);
                }
                _removeHash() {
                    history.pushState("", "", window.location.href.split("#")[0]);
                }
                _focusCatch(e) {
                    const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                    const focusArray = Array.prototype.slice.call(focusable);
                    const focusedIndex = focusArray.indexOf(document.activeElement);
                    if (e.shiftKey && focusedIndex === 0) {
                        focusArray[focusArray.length - 1].focus();
                        e.preventDefault();
                    }
                    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                        focusArray[0].focus();
                        e.preventDefault();
                    }
                }
                _focusTrap() {
                    const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                    if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
                }
                popupLogging(message) {
                    this.options.logging ? (0, _files_functions_js__WEBPACK_IMPORTED_MODULE_3__.d0)(`[Попапос]: ${message}`) : null;
                }
            }
            _files_modules_js__WEBPACK_IMPORTED_MODULE_0__.S.popup = new Popup({});
        },
        348: (__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {
            "use strict";
            var _files_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(307);
            var _files_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(627);
            var _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(566);
            class SelectConstructor {
                constructor(props, data = null) {
                    let defaultConfig = {
                        init: true,
                        logging: true,
                        speed: 150
                    };
                    this.config = Object.assign(defaultConfig, props);
                    this.selectClasses = {
                        classSelect: "select",
                        classSelectBody: "select__body",
                        classSelectTitle: "select__title",
                        classSelectValue: "select__value",
                        classSelectLabel: "select__label",
                        classSelectInput: "select__input",
                        classSelectText: "select__text",
                        classSelectLink: "select__link",
                        classSelectOptions: "select__options",
                        classSelectOptionsScroll: "select__scroll",
                        classSelectOption: "select__option",
                        classSelectContent: "select__content",
                        classSelectRow: "select__row",
                        classSelectData: "select__asset",
                        classSelectDisabled: "_select-disabled",
                        classSelectTag: "_select-tag",
                        classSelectOpen: "_select-open",
                        classSelectActive: "_select-active",
                        classSelectFocus: "_select-focus",
                        classSelectMultiple: "_select-multiple",
                        classSelectCheckBox: "_select-checkbox",
                        classSelectOptionSelected: "_select-selected",
                        classSelectPseudoLabel: "_select-pseudo-label"
                    };
                    this._this = this;
                    if (this.config.init) {
                        const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                        if (selectItems.length) {
                            this.selectsInit(selectItems);
                            this.setLogging(`Прокинувся, построїв селектов: (${selectItems.length})`);
                        } else this.setLogging("Сплю, немає жодного select");
                    }
                }
                getSelectClass(className) {
                    return `.${className}`;
                }
                getSelectElement(selectItem, className) {
                    return {
                        originalSelect: selectItem.querySelector("select"),
                        selectElement: selectItem.querySelector(this.getSelectClass(className))
                    };
                }
                selectsInit(selectItems) {
                    selectItems.forEach(((originalSelect, index) => {
                        this.selectInit(originalSelect, index + 1);
                    }));
                    document.addEventListener("click", function(e) {
                        this.selectsActions(e);
                    }.bind(this));
                    document.addEventListener("keydown", function(e) {
                        this.selectsActions(e);
                    }.bind(this));
                    document.addEventListener("focusin", function(e) {
                        this.selectsActions(e);
                    }.bind(this));
                    document.addEventListener("focusout", function(e) {
                        this.selectsActions(e);
                    }.bind(this));
                }
                selectInit(originalSelect, index) {
                    const _this = this;
                    let selectItem = document.createElement("div");
                    selectItem.classList.add(this.selectClasses.classSelect);
                    originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                    selectItem.appendChild(originalSelect);
                    originalSelect.hidden = true;
                    index ? originalSelect.dataset.id = index : null;
                    if (this.getSelectPlaceholder(originalSelect)) {
                        originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                        if (this.getSelectPlaceholder(originalSelect).label.show) {
                            const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                            selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                        }
                    }
                    selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                    this.selectBuild(originalSelect);
                    originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : this.config.speed;
                    this.config.speed = +originalSelect.dataset.speed;
                    originalSelect.addEventListener("change", (function(e) {
                        _this.selectChange(e);
                    }));
                }
                selectBuild(originalSelect) {
                    const selectItem = originalSelect.parentElement;
                    selectItem.dataset.id = originalSelect.dataset.id;
                    originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
                    originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                    originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                    this.setSelectTitleValue(selectItem, originalSelect);
                    this.setOptions(selectItem, originalSelect);
                    originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                    originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                    this.selectDisabled(selectItem, originalSelect);
                }
                selectsActions(e) {
                    const targetElement = e.target;
                    const targetType = e.type;
                    if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                        const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                        const originalSelect = this.getSelectElement(selectItem).originalSelect;
                        if (targetType === "click") {
                            if (!originalSelect.disabled) {
                                this.selectsСlose();
                                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                                    const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                                    const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                                    this.optionAction(selectItem, originalSelect, optionItem);
                                } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                                    const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                                    this.optionAction(selectItem, originalSelect, optionItem);
                                }
                            }
                        } else if (targetType === "focusin" || targetType === "focusout") {
                            if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                        } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
                    } else this.selectsСlose();
                }
                selectsСlose(selectOneGroup) {
                    const selectsGroup = selectOneGroup ? selectOneGroup : document;
                    const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                    if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                        this.selectСlose(selectActiveItem);
                    }));
                }
                selectСlose(selectItem) {
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                    if (!selectOptions.classList.contains("_slide")) {
                        selectItem.classList.remove(this.selectClasses.classSelectOpen);
                        (0, _files_functions_js__WEBPACK_IMPORTED_MODULE_0__.Ww)(selectOptions, originalSelect.dataset.speed);
                        setTimeout((() => {
                            selectItem.style.zIndex = "";
                        }), originalSelect.dataset.speed);
                    }
                }
                selectAction(selectItem) {
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                    const selectOpenzIndex = originalSelect.dataset.zIndex ? originalSelect.dataset.zIndex : 3;
                    this.setOptionsPosition(selectItem);
                    if (originalSelect.closest("[data-one-select]")) {
                        const selectOneGroup = originalSelect.closest("[data-one-select]");
                        this.selectsСlose(selectOneGroup);
                    }
                    setTimeout((() => {
                        if (!selectOptions.classList.contains("_slide")) {
                            selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                            (0, _files_functions_js__WEBPACK_IMPORTED_MODULE_0__._y)(selectOptions, originalSelect.dataset.speed);
                            if (selectItem.classList.contains(this.selectClasses.classSelectOpen)) selectItem.style.zIndex = selectOpenzIndex; else setTimeout((() => {
                                selectItem.style.zIndex = "";
                            }), originalSelect.dataset.speed);
                        }
                    }), 0);
                }
                setSelectTitleValue(selectItem, originalSelect) {
                    const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                    const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                    if (selectItemTitle) selectItemTitle.remove();
                    selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
                    originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                }
                getSelectTitleValue(selectItem, originalSelect) {
                    let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                    if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                        selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                        if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                            document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                            if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                        }
                    }
                    selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                    let pseudoAttribute = "";
                    let pseudoAttributeClass = "";
                    if (originalSelect.hasAttribute("data-pseudo-label")) {
                        pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заповніть атрибут"`;
                        pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                    }
                    this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                    if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                        const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                        return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                    }
                }
                getSelectElementContent(selectOption) {
                    const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                    const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                    let selectOptionContentHTML = ``;
                    selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                    selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                    selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                    selectOptionContentHTML += selectOptionData ? `</span>` : "";
                    selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                    selectOptionContentHTML += selectOption.textContent;
                    selectOptionContentHTML += selectOptionData ? `</span>` : "";
                    selectOptionContentHTML += selectOptionData ? `</span>` : "";
                    return selectOptionContentHTML;
                }
                getSelectPlaceholder(originalSelect) {
                    const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                    if (selectPlaceholder) return {
                        value: selectPlaceholder.textContent,
                        show: selectPlaceholder.hasAttribute("data-show"),
                        label: {
                            show: selectPlaceholder.hasAttribute("data-label"),
                            text: selectPlaceholder.dataset.label
                        }
                    };
                }
                getSelectedOptionsData(originalSelect, type) {
                    let selectedOptions = [];
                    if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                    return {
                        elements: selectedOptions.map((option => option)),
                        values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                        html: selectedOptions.map((option => this.getSelectElementContent(option)))
                    };
                }
                getOptions(originalSelect) {
                    const selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                    const customMaxHeightValue = +originalSelect.dataset.scroll ? +originalSelect.dataset.scroll : null;
                    let selectOptions = Array.from(originalSelect.options);
                    if (selectOptions.length > 0) {
                        let selectOptionsHTML = ``;
                        if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                        selectOptionsHTML += `<div ${selectOptionsScroll} ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ""} class="${this.selectClasses.classSelectOptionsScroll}">`;
                        selectOptions.forEach((selectOption => {
                            selectOptionsHTML += this.getOption(selectOption, originalSelect);
                        }));
                        selectOptionsHTML += `</div>`;
                        return selectOptionsHTML;
                    }
                }
                getOption(selectOption, originalSelect) {
                    const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                    const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                    const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                    const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                    const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                    let selectOptionHTML = ``;
                    selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                    selectOptionHTML += this.getSelectElementContent(selectOption);
                    selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                    return selectOptionHTML;
                }
                setOptions(selectItem, originalSelect) {
                    const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                    selectItemOptions.innerHTML = this.getOptions(originalSelect);
                }
                setOptionsPosition(selectItem) {
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                    const selectItemScroll = this.getSelectElement(selectItem, this.selectClasses.classSelectOptionsScroll).selectElement;
                    const customMaxHeightValue = +originalSelect.dataset.scroll ? `${+originalSelect.dataset.scroll}px` : ``;
                    const selectOptionsPosMargin = +originalSelect.dataset.optionsMargin ? +originalSelect.dataset.optionsMargin : 10;
                    if (!selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
                        selectOptions.hidden = false;
                        const selectItemScrollHeight = selectItemScroll.offsetHeight ? selectItemScroll.offsetHeight : parseInt(window.getComputedStyle(selectItemScroll).getPropertyValue("max-height"));
                        const selectOptionsHeight = selectOptions.offsetHeight > selectItemScrollHeight ? selectOptions.offsetHeight : selectItemScrollHeight + selectOptions.offsetHeight;
                        const selectOptionsScrollHeight = selectOptionsHeight - selectItemScrollHeight;
                        selectOptions.hidden = true;
                        const selectItemHeight = selectItem.offsetHeight;
                        const selectItemPos = selectItem.getBoundingClientRect().top;
                        const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight;
                        const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin);
                        if (selectItemResult < 0) {
                            const newMaxHeightValue = selectOptionsHeight + selectItemResult;
                            if (newMaxHeightValue < 100) {
                                selectItem.classList.add("select--show-top");
                                selectItemScroll.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue;
                            } else {
                                selectItem.classList.remove("select--show-top");
                                selectItemScroll.style.maxHeight = `${newMaxHeightValue}px`;
                            }
                        }
                    } else setTimeout((() => {
                        selectItem.classList.remove("select--show-top");
                        selectItemScroll.style.maxHeight = customMaxHeightValue;
                    }), +originalSelect.dataset.speed);
                }
                optionAction(selectItem, originalSelect, optionItem) {
                    const selectOptions = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`);
                    if (!selectOptions.classList.contains("_slide")) {
                        if (originalSelect.multiple) {
                            optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                            const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                            originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                                originalSelectSelectedItem.removeAttribute("selected");
                            }));
                            const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                            selectSelectedItems.forEach((selectSelectedItems => {
                                originalSelect.querySelector(`option[value = "${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                            }));
                        } else {
                            if (!originalSelect.hasAttribute("data-show-selected")) setTimeout((() => {
                                if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                                optionItem.hidden = true;
                            }), this.config.speed);
                            originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                            this.selectAction(selectItem);
                        }
                        this.setSelectTitleValue(selectItem, originalSelect);
                        this.setSelectChange(originalSelect);
                    }
                }
                selectChange(e) {
                    const originalSelect = e.target;
                    this.selectBuild(originalSelect);
                    this.setSelectChange(originalSelect);
                }
                setSelectChange(originalSelect) {
                    if (originalSelect.hasAttribute("data-validate")) _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__.gv.validateInput(originalSelect);
                    if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                        let tempButton = document.createElement("button");
                        tempButton.type = "submit";
                        originalSelect.closest("form").append(tempButton);
                        tempButton.click();
                        tempButton.remove();
                    }
                    const selectItem = originalSelect.parentElement;
                    this.selectCallback(selectItem, originalSelect);
                }
                selectDisabled(selectItem, originalSelect) {
                    if (originalSelect.disabled) {
                        selectItem.classList.add(this.selectClasses.classSelectDisabled);
                        this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                    } else {
                        selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                        this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                    }
                }
                searchActions(selectItem) {
                    this.getSelectElement(selectItem).originalSelect;
                    const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                    const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                    const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption} `);
                    const _this = this;
                    selectInput.addEventListener("input", (function() {
                        selectOptionsItems.forEach((selectOptionsItem => {
                            if (selectOptionsItem.textContent.toUpperCase().includes(selectInput.value.toUpperCase())) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                        }));
                        selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
                    }));
                }
                selectCallback(selectItem, originalSelect) {
                    document.dispatchEvent(new CustomEvent("selectCallback", {
                        detail: {
                            select: originalSelect
                        }
                    }));
                }
                setLogging(message) {
                    this.config.logging ? (0, _files_functions_js__WEBPACK_IMPORTED_MODULE_0__.d0)(`[select]: ${message} `) : null;
                }
            }
            _files_modules_js__WEBPACK_IMPORTED_MODULE_1__.S.select = new SelectConstructor({});
            window.select = _files_modules_js__WEBPACK_IMPORTED_MODULE_1__.S.select;
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    __webpack_require__.m = __webpack_modules__;
    (() => {
        var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
        var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
        var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
        var resolveQueue = queue => {
            if (queue && queue.d < 1) {
                queue.d = 1;
                queue.forEach((fn => fn.r--));
                queue.forEach((fn => fn.r-- ? fn.r++ : fn()));
            }
        };
        var wrapDeps = deps => deps.map((dep => {
            if (dep !== null && typeof dep === "object") {
                if (dep[webpackQueues]) return dep;
                if (dep.then) {
                    var queue = [];
                    queue.d = 0;
                    dep.then((r => {
                        obj[webpackExports] = r;
                        resolveQueue(queue);
                    }), (e => {
                        obj[webpackError] = e;
                        resolveQueue(queue);
                    }));
                    var obj = {};
                    obj[webpackQueues] = fn => fn(queue);
                    return obj;
                }
            }
            var ret = {};
            ret[webpackQueues] = x => {};
            ret[webpackExports] = dep;
            return ret;
        }));
        __webpack_require__.a = (module, body, hasAwait) => {
            var queue;
            hasAwait && ((queue = []).d = -1);
            var depQueues = new Set;
            var exports = module.exports;
            var currentDeps;
            var outerResolve;
            var reject;
            var promise = new Promise(((resolve, rej) => {
                reject = rej;
                outerResolve = resolve;
            }));
            promise[webpackExports] = exports;
            promise[webpackQueues] = fn => (queue && fn(queue), depQueues.forEach(fn), promise["catch"]((x => {})));
            module.exports = promise;
            body((deps => {
                currentDeps = wrapDeps(deps);
                var fn;
                var getResult = () => currentDeps.map((d => {
                    if (d[webpackError]) throw d[webpackError];
                    return d[webpackExports];
                }));
                var promise = new Promise((resolve => {
                    fn = () => resolve(getResult);
                    fn.r = 0;
                    var fnQueue = q => q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, 
                    q.push(fn)));
                    currentDeps.map((dep => dep[webpackQueues](fnQueue)));
                }));
                return fn.r ? promise : getResult();
            }), (err => (err ? reject(promise[webpackError] = err) : outerResolve(exports), 
            resolveQueue(queue))));
            queue && queue.d < 0 && (queue.d = 0);
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.f = {};
        __webpack_require__.e = chunkId => Promise.all(Object.keys(__webpack_require__.f).reduce(((promises, key) => {
            __webpack_require__.f[key](chunkId, promises);
            return promises;
        }), []));
    })();
    (() => {
        __webpack_require__.u = chunkId => chunkId + ".app.js";
    })();
    (() => {
        __webpack_require__.miniCssF = chunkId => {};
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        var inProgress = {};
        var dataWebpackPrefix = "fls-start:";
        __webpack_require__.l = (url, done, key, chunkId) => {
            if (inProgress[url]) {
                inProgress[url].push(done);
                return;
            }
            var script, needAttach;
            if (key !== void 0) {
                var scripts = document.getElementsByTagName("script");
                for (var i = 0; i < scripts.length; i++) {
                    var s = scripts[i];
                    if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
                        script = s;
                        break;
                    }
                }
            }
            if (!script) {
                needAttach = true;
                script = document.createElement("script");
                script.charset = "utf-8";
                script.timeout = 120;
                if (__webpack_require__.nc) script.setAttribute("nonce", __webpack_require__.nc);
                script.setAttribute("data-webpack", dataWebpackPrefix + key);
                script.src = url;
            }
            inProgress[url] = [ done ];
            var onScriptComplete = (prev, event) => {
                script.onerror = script.onload = null;
                clearTimeout(timeout);
                var doneFns = inProgress[url];
                delete inProgress[url];
                script.parentNode && script.parentNode.removeChild(script);
                doneFns && doneFns.forEach((fn => fn(event)));
                if (prev) return prev(event);
            };
            var timeout = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: script
            }), 12e4);
            script.onerror = onScriptComplete.bind(null, script.onerror);
            script.onload = onScriptComplete.bind(null, script.onload);
            needAttach && document.head.appendChild(script);
        };
    })();
    (() => {
        __webpack_require__.p=baseUrl
    })();
    (() => {
        var installedChunks = {
            179: 0
        };
        __webpack_require__.f.j = (chunkId, promises) => {
            var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : void 0;
            if (installedChunkData !== 0) if (installedChunkData) promises.push(installedChunkData[2]); else if (true) {
                var promise = new Promise(((resolve, reject) => installedChunkData = installedChunks[chunkId] = [ resolve, reject ]));
                promises.push(installedChunkData[2] = promise);
                var url = __webpack_require__.p + __webpack_require__.u(chunkId);
                var error = new Error;
                var loadingEnded = event => {
                    if (__webpack_require__.o(installedChunks, chunkId)) {
                        installedChunkData = installedChunks[chunkId];
                        if (installedChunkData !== 0) installedChunks[chunkId] = void 0;
                        if (installedChunkData) {
                            var errorType = event && (event.type === "load" ? "missing" : event.type);
                            var realSrc = event && event.target && event.target.src;
                            error.message = "Loading chunk " + chunkId + " failed.\n(" + errorType + ": " + realSrc + ")";
                            error.name = "ChunkLoadError";
                            error.type = errorType;
                            error.request = realSrc;
                            installedChunkData[1](error);
                        }
                    }
                };
                __webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
            }
        };
        var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            var [chunkIds, moreModules, runtime] = data;
            var moduleId, chunkId, i = 0;
            if (chunkIds.some((id => installedChunks[id] !== 0))) {
                for (moduleId in moreModules) if (__webpack_require__.o(moreModules, moduleId)) __webpack_require__.m[moduleId] = moreModules[moduleId];
                if (runtime) runtime(__webpack_require__);
            }
            if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            for (;i < chunkIds.length; i++) {
                chunkId = chunkIds[i];
                if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) installedChunks[chunkId][0]();
                installedChunks[chunkId] = 0;
            }
        };
        var chunkLoadingGlobal = self["webpackChunkfls_start"] = self["webpackChunkfls_start"] || [];
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    })();
    __webpack_require__(972);
})();