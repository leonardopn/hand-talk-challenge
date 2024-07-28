/*! For license information please see index.js.LICENSE.txt */
!(function (t, e) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = e())
		: "function" == typeof define && define.amd
			? define("MyPlugin", [], e)
			: "object" == typeof exports
				? (exports.MyPlugin = e())
				: (t.MyPlugin = e());
})(self, () =>
	(() => {
		var t = {
				45: (t, e, n) => {
					"use strict";
					n.d(e, { A: () => r });
					var o = n(63),
						i = n.n(o),
						s = n(248),
						a = n.n(s)()(i());
					a.push([
						t.id,
						"/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    background: transparent;\n    border: 0;\n    color: white;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 1em;\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n",
						"",
					]);
					const r = a;
				},
				248: t => {
					"use strict";
					t.exports = function (t) {
						var e = [];
						return (
							(e.toString = function () {
								return this.map(function (e) {
									var n = "",
										o = void 0 !== e[5];
									return (
										e[4] && (n += "@supports (".concat(e[4], ") {")),
										e[2] && (n += "@media ".concat(e[2], " {")),
										o &&
											(n += "@layer".concat(
												e[5].length > 0 ? " ".concat(e[5]) : "",
												" {"
											)),
										(n += t(e)),
										o && (n += "}"),
										e[2] && (n += "}"),
										e[4] && (n += "}"),
										n
									);
								}).join("");
							}),
							(e.i = function (t, n, o, i, s) {
								"string" == typeof t && (t = [[null, t, void 0]]);
								var a = {};
								if (o)
									for (var r = 0; r < this.length; r++) {
										var c = this[r][0];
										null != c && (a[c] = !0);
									}
								for (var l = 0; l < t.length; l++) {
									var u = [].concat(t[l]);
									(o && a[u[0]]) ||
										(void 0 !== s &&
											(void 0 === u[5] ||
												(u[1] = "@layer"
													.concat(
														u[5].length > 0 ? " ".concat(u[5]) : "",
														" {"
													)
													.concat(u[1], "}")),
											(u[5] = s)),
										n &&
											(u[2]
												? ((u[1] = "@media "
														.concat(u[2], " {")
														.concat(u[1], "}")),
													(u[2] = n))
												: (u[2] = n)),
										i &&
											(u[4]
												? ((u[1] = "@supports ("
														.concat(u[4], ") {")
														.concat(u[1], "}")),
													(u[4] = i))
												: (u[4] = "".concat(i))),
										e.push(u));
								}
							}),
							e
						);
					};
				},
				63: t => {
					"use strict";
					t.exports = function (t) {
						return t[1];
					};
				},
				196: (t, e, n) => {
					"use strict";
					n.r(e), n.d(e, { default: () => v });
					var o = n(478),
						i = n.n(o),
						s = n(135),
						a = n.n(s),
						r = n(301),
						c = n.n(r),
						l = n(222),
						u = n.n(l),
						d = n(626),
						p = n.n(d),
						f = n(279),
						h = n.n(f),
						y = n(45),
						m = {};
					(m.styleTagTransform = h()),
						(m.setAttributes = u()),
						(m.insert = c().bind(null, "head")),
						(m.domAPI = a()),
						(m.insertStyleElement = p()),
						i()(y.A, m);
					const v = y.A && y.A.locals ? y.A.locals : void 0;
				},
				478: t => {
					"use strict";
					var e = [];
					function n(t) {
						for (var n = -1, o = 0; o < e.length; o++)
							if (e[o].identifier === t) {
								n = o;
								break;
							}
						return n;
					}
					function o(t, o) {
						for (var s = {}, a = [], r = 0; r < t.length; r++) {
							var c = t[r],
								l = o.base ? c[0] + o.base : c[0],
								u = s[l] || 0,
								d = "".concat(l, " ").concat(u);
							s[l] = u + 1;
							var p = n(d),
								f = {
									css: c[1],
									media: c[2],
									sourceMap: c[3],
									supports: c[4],
									layer: c[5],
								};
							if (-1 !== p) e[p].references++, e[p].updater(f);
							else {
								var h = i(f, o);
								(o.byIndex = r),
									e.splice(r, 0, { identifier: d, updater: h, references: 1 });
							}
							a.push(d);
						}
						return a;
					}
					function i(t, e) {
						var n = e.domAPI(e);
						return (
							n.update(t),
							function (e) {
								if (e) {
									if (
										e.css === t.css &&
										e.media === t.media &&
										e.sourceMap === t.sourceMap &&
										e.supports === t.supports &&
										e.layer === t.layer
									)
										return;
									n.update((t = e));
								} else n.remove();
							}
						);
					}
					t.exports = function (t, i) {
						var s = o((t = t || []), (i = i || {}));
						return function (t) {
							t = t || [];
							for (var a = 0; a < s.length; a++) {
								var r = n(s[a]);
								e[r].references--;
							}
							for (var c = o(t, i), l = 0; l < s.length; l++) {
								var u = n(s[l]);
								0 === e[u].references && (e[u].updater(), e.splice(u, 1));
							}
							s = c;
						};
					};
				},
				301: t => {
					"use strict";
					var e = {};
					t.exports = function (t, n) {
						var o = (function (t) {
							if (void 0 === e[t]) {
								var n = document.querySelector(t);
								if (
									window.HTMLIFrameElement &&
									n instanceof window.HTMLIFrameElement
								)
									try {
										n = n.contentDocument.head;
									} catch (t) {
										n = null;
									}
								e[t] = n;
							}
							return e[t];
						})(t);
						if (!o)
							throw new Error(
								"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
							);
						o.appendChild(n);
					};
				},
				626: t => {
					"use strict";
					t.exports = function (t) {
						var e = document.createElement("style");
						return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
					};
				},
				222: (t, e, n) => {
					"use strict";
					t.exports = function (t) {
						var e = n.nc;
						e && t.setAttribute("nonce", e);
					};
				},
				135: t => {
					"use strict";
					t.exports = function (t) {
						if ("undefined" == typeof document)
							return { update: function () {}, remove: function () {} };
						var e = t.insertStyleElement(t);
						return {
							update: function (n) {
								!(function (t, e, n) {
									var o = "";
									n.supports && (o += "@supports (".concat(n.supports, ") {")),
										n.media && (o += "@media ".concat(n.media, " {"));
									var i = void 0 !== n.layer;
									i &&
										(o += "@layer".concat(
											n.layer.length > 0 ? " ".concat(n.layer) : "",
											" {"
										)),
										(o += n.css),
										i && (o += "}"),
										n.media && (o += "}"),
										n.supports && (o += "}");
									var s = n.sourceMap;
									s &&
										"undefined" != typeof btoa &&
										(o +=
											"\n/*# sourceMappingURL=data:application/json;base64,".concat(
												btoa(
													unescape(encodeURIComponent(JSON.stringify(s)))
												),
												" */"
											)),
										e.styleTagTransform(o, t, e.options);
								})(e, t, n);
							},
							remove: function () {
								!(function (t) {
									if (null === t.parentNode) return !1;
									t.parentNode.removeChild(t);
								})(e);
							},
						};
					};
				},
				279: t => {
					"use strict";
					t.exports = function (t, e) {
						if (e.styleSheet) e.styleSheet.cssText = t;
						else {
							for (; e.firstChild; ) e.removeChild(e.firstChild);
							e.appendChild(document.createTextNode(t));
						}
					};
				},
				202: function (t) {
					var e;
					(e = function (t) {
						var e = function (t) {
							return new e.lib.init(t);
						};
						function n(t, e) {
							return e.offset[t]
								? isNaN(e.offset[t])
									? e.offset[t]
									: e.offset[t] + "px"
								: "0px";
						}
						function o(t, e) {
							return !(
								!t ||
								"string" != typeof e ||
								!(t.className && t.className.trim().split(/\s+/gi).indexOf(e) > -1)
							);
						}
						return (
							(e.defaults = {
								oldestFirst: !0,
								text: "Toastify is awesome!",
								node: void 0,
								duration: 3e3,
								selector: void 0,
								callback: function () {},
								destination: void 0,
								newWindow: !1,
								close: !1,
								gravity: "toastify-top",
								positionLeft: !1,
								position: "",
								backgroundColor: "",
								avatar: "",
								className: "",
								stopOnFocus: !0,
								onClick: function () {},
								offset: { x: 0, y: 0 },
								escapeMarkup: !0,
								ariaLive: "polite",
								style: { background: "" },
							}),
							(e.lib = e.prototype =
								{
									toastify: "1.12.0",
									constructor: e,
									init: function (t) {
										return (
											t || (t = {}),
											(this.options = {}),
											(this.toastElement = null),
											(this.options.text = t.text || e.defaults.text),
											(this.options.node = t.node || e.defaults.node),
											(this.options.duration =
												0 === t.duration
													? 0
													: t.duration || e.defaults.duration),
											(this.options.selector =
												t.selector || e.defaults.selector),
											(this.options.callback =
												t.callback || e.defaults.callback),
											(this.options.destination =
												t.destination || e.defaults.destination),
											(this.options.newWindow =
												t.newWindow || e.defaults.newWindow),
											(this.options.close = t.close || e.defaults.close),
											(this.options.gravity =
												"bottom" === t.gravity
													? "toastify-bottom"
													: e.defaults.gravity),
											(this.options.positionLeft =
												t.positionLeft || e.defaults.positionLeft),
											(this.options.position =
												t.position || e.defaults.position),
											(this.options.backgroundColor =
												t.backgroundColor || e.defaults.backgroundColor),
											(this.options.avatar = t.avatar || e.defaults.avatar),
											(this.options.className =
												t.className || e.defaults.className),
											(this.options.stopOnFocus =
												void 0 === t.stopOnFocus
													? e.defaults.stopOnFocus
													: t.stopOnFocus),
											(this.options.onClick =
												t.onClick || e.defaults.onClick),
											(this.options.offset = t.offset || e.defaults.offset),
											(this.options.escapeMarkup =
												void 0 !== t.escapeMarkup
													? t.escapeMarkup
													: e.defaults.escapeMarkup),
											(this.options.ariaLive =
												t.ariaLive || e.defaults.ariaLive),
											(this.options.style = t.style || e.defaults.style),
											t.backgroundColor &&
												(this.options.style.background = t.backgroundColor),
											this
										);
									},
									buildToast: function () {
										if (!this.options) throw "Toastify is not initialized";
										var t = document.createElement("div");
										for (var e in ((t.className =
											"toastify on " + this.options.className),
										this.options.position
											? (t.className += " toastify-" + this.options.position)
											: !0 === this.options.positionLeft
												? ((t.className += " toastify-left"),
													console.warn(
														"Property `positionLeft` will be depreciated in further versions. Please use `position` instead."
													))
												: (t.className += " toastify-right"),
										(t.className += " " + this.options.gravity),
										this.options.backgroundColor &&
											console.warn(
												'DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'
											),
										this.options.style))
											t.style[e] = this.options.style[e];
										if (
											(this.options.ariaLive &&
												t.setAttribute("aria-live", this.options.ariaLive),
											this.options.node &&
												this.options.node.nodeType === Node.ELEMENT_NODE)
										)
											t.appendChild(this.options.node);
										else if (
											(this.options.escapeMarkup
												? (t.innerText = this.options.text)
												: (t.innerHTML = this.options.text),
											"" !== this.options.avatar)
										) {
											var o = document.createElement("img");
											(o.src = this.options.avatar),
												(o.className = "toastify-avatar"),
												"left" == this.options.position ||
												!0 === this.options.positionLeft
													? t.appendChild(o)
													: t.insertAdjacentElement("afterbegin", o);
										}
										if (!0 === this.options.close) {
											var i = document.createElement("button");
											(i.type = "button"),
												i.setAttribute("aria-label", "Close"),
												(i.className = "toast-close"),
												(i.innerHTML = "&#10006;"),
												i.addEventListener(
													"click",
													function (t) {
														t.stopPropagation(),
															this.removeElement(this.toastElement),
															window.clearTimeout(
																this.toastElement.timeOutValue
															);
													}.bind(this)
												);
											var s =
												window.innerWidth > 0
													? window.innerWidth
													: screen.width;
											("left" == this.options.position ||
												!0 === this.options.positionLeft) &&
											s > 360
												? t.insertAdjacentElement("afterbegin", i)
												: t.appendChild(i);
										}
										if (this.options.stopOnFocus && this.options.duration > 0) {
											var a = this;
											t.addEventListener("mouseover", function (e) {
												window.clearTimeout(t.timeOutValue);
											}),
												t.addEventListener("mouseleave", function () {
													t.timeOutValue = window.setTimeout(function () {
														a.removeElement(t);
													}, a.options.duration);
												});
										}
										if (
											(void 0 !== this.options.destination &&
												t.addEventListener(
													"click",
													function (t) {
														t.stopPropagation(),
															!0 === this.options.newWindow
																? window.open(
																		this.options.destination,
																		"_blank"
																	)
																: (window.location =
																		this.options.destination);
													}.bind(this)
												),
											"function" == typeof this.options.onClick &&
												void 0 === this.options.destination &&
												t.addEventListener(
													"click",
													function (t) {
														t.stopPropagation(), this.options.onClick();
													}.bind(this)
												),
											"object" == typeof this.options.offset)
										) {
											var r = n("x", this.options),
												c = n("y", this.options),
												l = "left" == this.options.position ? r : "-" + r,
												u =
													"toastify-top" == this.options.gravity
														? c
														: "-" + c;
											t.style.transform = "translate(" + l + "," + u + ")";
										}
										return t;
									},
									showToast: function () {
										var t;
										if (
											((this.toastElement = this.buildToast()),
											!(t =
												"string" == typeof this.options.selector
													? document.getElementById(this.options.selector)
													: this.options.selector instanceof
																HTMLElement ||
														  ("undefined" != typeof ShadowRoot &&
																this.options.selector instanceof
																	ShadowRoot)
														? this.options.selector
														: document.body))
										)
											throw "Root element is not defined";
										var n = e.defaults.oldestFirst ? t.firstChild : t.lastChild;
										return (
											t.insertBefore(this.toastElement, n),
											e.reposition(),
											this.options.duration > 0 &&
												(this.toastElement.timeOutValue = window.setTimeout(
													function () {
														this.removeElement(this.toastElement);
													}.bind(this),
													this.options.duration
												)),
											this
										);
									},
									hideToast: function () {
										this.toastElement.timeOutValue &&
											clearTimeout(this.toastElement.timeOutValue),
											this.removeElement(this.toastElement);
									},
									removeElement: function (t) {
										(t.className = t.className.replace(" on", "")),
											window.setTimeout(
												function () {
													this.options.node &&
														this.options.node.parentNode &&
														this.options.node.parentNode.removeChild(
															this.options.node
														),
														t.parentNode && t.parentNode.removeChild(t),
														this.options.callback.call(t),
														e.reposition();
												}.bind(this),
												400
											);
									},
								}),
							(e.reposition = function () {
								for (
									var t,
										e = { top: 15, bottom: 15 },
										n = { top: 15, bottom: 15 },
										i = { top: 15, bottom: 15 },
										s = document.getElementsByClassName("toastify"),
										a = 0;
									a < s.length;
									a++
								) {
									t =
										!0 === o(s[a], "toastify-top")
											? "toastify-top"
											: "toastify-bottom";
									var r = s[a].offsetHeight;
									(t = t.substr(9, t.length - 1)),
										(window.innerWidth > 0
											? window.innerWidth
											: screen.width) <= 360
											? ((s[a].style[t] = i[t] + "px"), (i[t] += r + 15))
											: !0 === o(s[a], "toastify-left")
												? ((s[a].style[t] = e[t] + "px"), (e[t] += r + 15))
												: ((s[a].style[t] = n[t] + "px"), (n[t] += r + 15));
								}
								return this;
							}),
							(e.lib.init.prototype = e.lib),
							e
						);
					}),
						t.exports ? (t.exports = e()) : (this.Toastify = e());
				},
				558: (t, e) => {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 }),
						(e.AnalyticsCollector = void 0);
					var n = (function () {
						function t(t) {
							void 0 === t &&
								(t = function () {
									return 0;
								}),
								(this.getThemeChangeCount = t);
						}
						return (
							(t.prototype.getDeviceType = function () {
								return /Mobi|Android/i.test(navigator.userAgent)
									? "mobile"
									: "desktop";
							}),
							(t.prototype.getOperatingSystem = function () {
								return navigator.platform;
							}),
							(t.prototype.collectAnalyticsData = function () {
								return {
									device: this.getDeviceType(),
									os: this.getOperatingSystem(),
									domain: window.location.origin,
									themeChanges: this.getThemeChangeCount(),
								};
							}),
							t
						);
					})();
					e.AnalyticsCollector = n;
				},
				218: function (t, e, n) {
					"use strict";
					var o =
							(this && this.__awaiter) ||
							function (t, e, n, o) {
								return new (n || (n = Promise))(function (i, s) {
									function a(t) {
										try {
											c(o.next(t));
										} catch (t) {
											s(t);
										}
									}
									function r(t) {
										try {
											c(o.throw(t));
										} catch (t) {
											s(t);
										}
									}
									function c(t) {
										var e;
										t.done
											? i(t.value)
											: ((e = t.value),
												e instanceof n
													? e
													: new n(function (t) {
															t(e);
														})).then(a, r);
									}
									c((o = o.apply(t, e || [])).next());
								});
							},
						i =
							(this && this.__generator) ||
							function (t, e) {
								var n,
									o,
									i,
									s,
									a = {
										label: 0,
										sent: function () {
											if (1 & i[0]) throw i[1];
											return i[1];
										},
										trys: [],
										ops: [],
									};
								return (
									(s = { next: r(0), throw: r(1), return: r(2) }),
									"function" == typeof Symbol &&
										(s[Symbol.iterator] = function () {
											return this;
										}),
									s
								);
								function r(r) {
									return function (c) {
										return (function (r) {
											if (n)
												throw new TypeError(
													"Generator is already executing."
												);
											for (; s && ((s = 0), r[0] && (a = 0)), a; )
												try {
													if (
														((n = 1),
														o &&
															(i =
																2 & r[0]
																	? o.return
																	: r[0]
																		? o.throw ||
																			((i = o.return) &&
																				i.call(o),
																			0)
																		: o.next) &&
															!(i = i.call(o, r[1])).done)
													)
														return i;
													switch (
														((o = 0),
														i && (r = [2 & r[0], i.value]),
														r[0])
													) {
														case 0:
														case 1:
															i = r;
															break;
														case 4:
															return (
																a.label++, { value: r[1], done: !1 }
															);
														case 5:
															a.label++, (o = r[1]), (r = [0]);
															continue;
														case 7:
															(r = a.ops.pop()), a.trys.pop();
															continue;
														default:
															if (
																!(
																	(i =
																		(i = a.trys).length > 0 &&
																		i[i.length - 1]) ||
																	(6 !== r[0] && 2 !== r[0])
																)
															) {
																a = 0;
																continue;
															}
															if (
																3 === r[0] &&
																(!i || (r[1] > i[0] && r[1] < i[3]))
															) {
																a.label = r[1];
																break;
															}
															if (6 === r[0] && a.label < i[1]) {
																(a.label = i[1]), (i = r);
																break;
															}
															if (i && a.label < i[2]) {
																(a.label = i[2]), a.ops.push(r);
																break;
															}
															i[2] && a.ops.pop(), a.trys.pop();
															continue;
													}
													r = e.call(t, a);
												} catch (t) {
													(r = [6, t]), (o = 0);
												} finally {
													n = i = 0;
												}
											if (5 & r[0]) throw r[1];
											return { value: r[0] ? r[1] : void 0, done: !0 };
										})([r, c]);
									};
								}
							},
						s =
							(this && this.__importDefault) ||
							function (t) {
								return t && t.__esModule ? t : { default: t };
							};
					Object.defineProperty(e, "__esModule", { value: !0 }),
						(e.AnalyticsPlugin = void 0);
					var a = s(n(202)),
						r = n(90),
						c = n(226),
						l = n(558),
						u = (function () {
							function t() {}
							return (
								(t.setConfigs = function (t, e, n) {
									this.isConfigured ||
										((this.token = t),
										(this.analyticsCollector = new l.AnalyticsCollector(e)),
										(this.button = new r.SendAnalyticDataButton(
											n,
											this.sendData.bind(this)
										)),
										(this.isConfigured = !0));
								}),
								(t.clearConfigs = function () {
									(this.isConfigured = !1), this.button && this.button.remove();
								}),
								(t.sendData = function () {
									return o(this, void 0, void 0, function () {
										var t, e, n, o;
										return i(this, function (i) {
											switch (i.label) {
												case 0:
													if (!this.isConfigured)
														throw new Error(
															"Plugin not configured, Run AnalyticsPlugin.setConfigs() first"
														);
													i.label = 1;
												case 1:
													return (
														i.trys.push([1, 3, 4, 5]),
														this.button.toggleLoading(),
														(t = new c.ApiService(this.token)),
														(e =
															this.analyticsCollector.collectAnalyticsData()),
														[4, t.sendData(e)]
													);
												case 2:
													return (
														i.sent(),
														(0, a.default)({
															text: "Dados coletados com sucesso!",
															style: {
																background: "#20C6AD",
																borderRadius: "5px",
															},
														}).showToast(),
														[3, 5]
													);
												case 3:
													return (
														(n = i.sent()),
														console.error(n),
														(o =
															n instanceof Error
																? n.message
																: "Falha ao enviar dados, tente novamente mais tarde."),
														(0, a.default)({
															text: o,
															style: {
																background: "#FF4D4D",
																borderRadius: "5px",
															},
														}).showToast(),
														[3, 5]
													);
												case 4:
													return this.button.toggleLoading(), [7];
												case 5:
													return [2];
											}
										});
									});
								}),
								(t.isConfigured = !1),
								t
							);
						})();
					e.AnalyticsPlugin = u;
				},
				90: (t, e) => {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 }),
						(e.SendAnalyticDataButton = void 0);
					var n = (function () {
						function t(t, e) {
							(this.isLoading = !1),
								(this.instance = this.mountButton(e)),
								this.applyStyle(t),
								this.render();
						}
						return (
							(t.prototype.mountButton = function (t) {
								var e = "analytics-plugin-button-collect",
									n = document.getElementById(e);
								if (n) return n;
								var o = document.createElement("button");
								return (o.id = e), t && (o.onclick = t), o;
							}),
							(t.prototype.applyStyle = function (t) {
								var e = this;
								(this.instance.style.position = "fixed"),
									(this.instance.style.bottom = "10px"),
									(this.instance.style.right = "10px"),
									(this.instance.style.zIndex = "10"),
									(this.instance.style.padding = "10px 20px"),
									(this.instance.style.backgroundColor = "#F06F06"),
									(this.instance.style.color = "#ffffff"),
									(this.instance.style.border = "none"),
									(this.instance.style.borderRadius = "5px"),
									(this.instance.style.cursor = "pointer"),
									(this.instance.innerText = "Coletar dados"),
									(this.instance.style.transition = "opacity 0.2s ease-in-out"),
									(this.instance.onmouseover = function () {
										e.isLoading || (e.instance.style.opacity = "0.8");
									}),
									(this.instance.onmouseout = function () {
										e.isLoading || (e.instance.style.opacity = "1");
									}),
									Object.assign(this.instance.style, t);
							}),
							(t.prototype.render = function () {
								document.body.appendChild(this.instance);
							}),
							(t.prototype.remove = function () {
								this.instance.remove();
							}),
							(t.prototype.toggleLoading = function () {
								(this.isLoading = !this.isLoading),
									this.isLoading
										? ((this.instance.innerText = "Enviando dados..."),
											(this.instance.style.opacity = "0.5"),
											(this.instance.disabled = !0),
											(this.instance.style.cursor = "not-allowed"))
										: ((this.instance.innerText = "Coletar dados"),
											(this.instance.disabled = !1),
											(this.instance.style.opacity = "1"),
											(this.instance.style.cursor = "pointer"));
							}),
							t
						);
					})();
					e.SendAnalyticDataButton = n;
				},
				226: function (t, e) {
					"use strict";
					var n =
							(this && this.__awaiter) ||
							function (t, e, n, o) {
								return new (n || (n = Promise))(function (i, s) {
									function a(t) {
										try {
											c(o.next(t));
										} catch (t) {
											s(t);
										}
									}
									function r(t) {
										try {
											c(o.throw(t));
										} catch (t) {
											s(t);
										}
									}
									function c(t) {
										var e;
										t.done
											? i(t.value)
											: ((e = t.value),
												e instanceof n
													? e
													: new n(function (t) {
															t(e);
														})).then(a, r);
									}
									c((o = o.apply(t, e || [])).next());
								});
							},
						o =
							(this && this.__generator) ||
							function (t, e) {
								var n,
									o,
									i,
									s,
									a = {
										label: 0,
										sent: function () {
											if (1 & i[0]) throw i[1];
											return i[1];
										},
										trys: [],
										ops: [],
									};
								return (
									(s = { next: r(0), throw: r(1), return: r(2) }),
									"function" == typeof Symbol &&
										(s[Symbol.iterator] = function () {
											return this;
										}),
									s
								);
								function r(r) {
									return function (c) {
										return (function (r) {
											if (n)
												throw new TypeError(
													"Generator is already executing."
												);
											for (; s && ((s = 0), r[0] && (a = 0)), a; )
												try {
													if (
														((n = 1),
														o &&
															(i =
																2 & r[0]
																	? o.return
																	: r[0]
																		? o.throw ||
																			((i = o.return) &&
																				i.call(o),
																			0)
																		: o.next) &&
															!(i = i.call(o, r[1])).done)
													)
														return i;
													switch (
														((o = 0),
														i && (r = [2 & r[0], i.value]),
														r[0])
													) {
														case 0:
														case 1:
															i = r;
															break;
														case 4:
															return (
																a.label++, { value: r[1], done: !1 }
															);
														case 5:
															a.label++, (o = r[1]), (r = [0]);
															continue;
														case 7:
															(r = a.ops.pop()), a.trys.pop();
															continue;
														default:
															if (
																!(
																	(i =
																		(i = a.trys).length > 0 &&
																		i[i.length - 1]) ||
																	(6 !== r[0] && 2 !== r[0])
																)
															) {
																a = 0;
																continue;
															}
															if (
																3 === r[0] &&
																(!i || (r[1] > i[0] && r[1] < i[3]))
															) {
																a.label = r[1];
																break;
															}
															if (6 === r[0] && a.label < i[1]) {
																(a.label = i[1]), (i = r);
																break;
															}
															if (i && a.label < i[2]) {
																(a.label = i[2]), a.ops.push(r);
																break;
															}
															i[2] && a.ops.pop(), a.trys.pop();
															continue;
													}
													r = e.call(t, a);
												} catch (t) {
													(r = [6, t]), (o = 0);
												} finally {
													n = i = 0;
												}
											if (5 & r[0]) throw r[1];
											return { value: r[0] ? r[1] : void 0, done: !0 };
										})([r, c]);
									};
								}
							};
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.ApiService = void 0);
					var i = (function () {
						function t(t) {
							(this.baseUrl = "http://localhost:4000"), (this.token = t);
						}
						return (
							(t.prototype.sendData = function (t) {
								return n(this, void 0, void 0, function () {
									var e, n, i;
									return o(this, function (o) {
										switch (o.label) {
											case 0:
												return [
													4,
													fetch(
														"".concat(
															this.baseUrl,
															"/analytics/collect"
														),
														{
															method: "POST",
															headers: {
																"Content-Type": "application/json",
																Authorization: "Bearer ".concat(
																	this.token
																),
															},
															body: JSON.stringify(t),
														}
													),
												];
											case 1:
												return (e = o.sent()).ok || 200 === e.status
													? [3, 3]
													: [4, e.json()];
											case 2:
												throw (
													((n = o.sent()),
													(i = n.message || "Erro ao enviar dados"),
													new Error(i))
												);
											case 3:
												return [2];
										}
									});
								});
							}),
							t
						);
					})();
					e.ApiService = i;
				},
			},
			e = {};
		function n(o) {
			var i = e[o];
			if (void 0 !== i) return i.exports;
			var s = (e[o] = { id: o, exports: {} });
			return t[o].call(s.exports, s, s.exports, n), s.exports;
		}
		(n.n = t => {
			var e = t && t.__esModule ? () => t.default : () => t;
			return n.d(e, { a: e }), e;
		}),
			(n.d = (t, e) => {
				for (var o in e)
					n.o(e, o) &&
						!n.o(t, o) &&
						Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
			}),
			(n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
			(n.r = t => {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(t, "__esModule", { value: !0 });
			}),
			(n.nc = void 0);
		var o = {};
		return (
			(() => {
				"use strict";
				var t = o;
				Object.defineProperty(t, "__esModule", { value: !0 });
				var e = n(218);
				n(196),
					(window.AnalyticsPlugin = {
						setConfigs: e.AnalyticsPlugin.setConfigs.bind(e.AnalyticsPlugin),
						clearConfigs: e.AnalyticsPlugin.clearConfigs.bind(e.AnalyticsPlugin),
					});
			})(),
			o
		);
	})()
);
