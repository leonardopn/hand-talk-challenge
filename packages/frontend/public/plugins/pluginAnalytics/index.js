!(function (t, n) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = n())
		: "function" == typeof define && define.amd
			? define("MyPlugin", [], n)
			: "object" == typeof exports
				? (exports.MyPlugin = n())
				: (t.MyPlugin = n());
})(self, () =>
	(() => {
		"use strict";
		var t = {
				558: (t, n) => {
					Object.defineProperty(n, "__esModule", { value: !0 }),
						(n.AnalyticsCollector = void 0);
					var e = (function () {
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
					n.AnalyticsCollector = e;
				},
				218: function (t, n, e) {
					var i =
							(this && this.__awaiter) ||
							function (t, n, e, i) {
								return new (e || (e = Promise))(function (o, r) {
									function s(t) {
										try {
											c(i.next(t));
										} catch (t) {
											r(t);
										}
									}
									function a(t) {
										try {
											c(i.throw(t));
										} catch (t) {
											r(t);
										}
									}
									function c(t) {
										var n;
										t.done
											? o(t.value)
											: ((n = t.value),
												n instanceof e
													? n
													: new e(function (t) {
															t(n);
														})).then(s, a);
									}
									c((i = i.apply(t, n || [])).next());
								});
							},
						o =
							(this && this.__generator) ||
							function (t, n) {
								var e,
									i,
									o,
									r,
									s = {
										label: 0,
										sent: function () {
											if (1 & o[0]) throw o[1];
											return o[1];
										},
										trys: [],
										ops: [],
									};
								return (
									(r = { next: a(0), throw: a(1), return: a(2) }),
									"function" == typeof Symbol &&
										(r[Symbol.iterator] = function () {
											return this;
										}),
									r
								);
								function a(a) {
									return function (c) {
										return (function (a) {
											if (e)
												throw new TypeError(
													"Generator is already executing."
												);
											for (; r && ((r = 0), a[0] && (s = 0)), s; )
												try {
													if (
														((e = 1),
														i &&
															(o =
																2 & a[0]
																	? i.return
																	: a[0]
																		? i.throw ||
																			((o = i.return) &&
																				o.call(i),
																			0)
																		: i.next) &&
															!(o = o.call(i, a[1])).done)
													)
														return o;
													switch (
														((i = 0),
														o && (a = [2 & a[0], o.value]),
														a[0])
													) {
														case 0:
														case 1:
															o = a;
															break;
														case 4:
															return (
																s.label++, { value: a[1], done: !1 }
															);
														case 5:
															s.label++, (i = a[1]), (a = [0]);
															continue;
														case 7:
															(a = s.ops.pop()), s.trys.pop();
															continue;
														default:
															if (
																!(
																	(o =
																		(o = s.trys).length > 0 &&
																		o[o.length - 1]) ||
																	(6 !== a[0] && 2 !== a[0])
																)
															) {
																s = 0;
																continue;
															}
															if (
																3 === a[0] &&
																(!o || (a[1] > o[0] && a[1] < o[3]))
															) {
																s.label = a[1];
																break;
															}
															if (6 === a[0] && s.label < o[1]) {
																(s.label = o[1]), (o = a);
																break;
															}
															if (o && s.label < o[2]) {
																(s.label = o[2]), s.ops.push(a);
																break;
															}
															o[2] && s.ops.pop(), s.trys.pop();
															continue;
													}
													a = n.call(t, s);
												} catch (t) {
													(a = [6, t]), (i = 0);
												} finally {
													e = o = 0;
												}
											if (5 & a[0]) throw a[1];
											return { value: a[0] ? a[1] : void 0, done: !0 };
										})([a, c]);
									};
								}
							};
					Object.defineProperty(n, "__esModule", { value: !0 }),
						(n.AnalyticsPlugin = void 0);
					var r = e(90),
						s = e(226),
						a = e(558),
						c = (function () {
							function t() {}
							return (
								(t.setConfigs = function (t, n, e) {
									this.isConfigured ||
										((this.token = t),
										(this.analyticsCollector = new a.AnalyticsCollector(n)),
										(this.button = new r.SendAnalyticDataButton(
											e,
											this.sendData.bind(this)
										)),
										(this.isConfigured = !0));
								}),
								(t.clearConfigs = function () {
									(this.isConfigured = !1), this.button && this.button.remove();
								}),
								(t.sendData = function () {
									return i(this, void 0, void 0, function () {
										var t, n, e;
										return o(this, function (i) {
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
														(t = new s.ApiService(this.token)),
														(n =
															this.analyticsCollector.collectAnalyticsData()),
														[4, t.sendData(n)]
													);
												case 2:
													return i.sent(), [3, 5];
												case 3:
													return (e = i.sent()), console.error(e), [3, 5];
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
					n.AnalyticsPlugin = c;
				},
				90: (t, n) => {
					Object.defineProperty(n, "__esModule", { value: !0 }),
						(n.SendAnalyticDataButton = void 0);
					var e = (function () {
						function t(t, n) {
							(this.isLoading = !1),
								(this.instance = this.mountButton(n)),
								this.applyStyle(t),
								this.render();
						}
						return (
							(t.prototype.mountButton = function (t) {
								var n = "analytics-plugin-button-collect",
									e = document.getElementById(n);
								if (e) return e;
								var i = document.createElement("button");
								return (i.id = n), t && (i.onclick = t), i;
							}),
							(t.prototype.applyStyle = function (t) {
								var n = this;
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
										n.isLoading || (n.instance.style.opacity = "0.8");
									}),
									(this.instance.onmouseout = function () {
										n.isLoading || (n.instance.style.opacity = "1");
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
					n.SendAnalyticDataButton = e;
				},
				226: function (t, n) {
					var e =
							(this && this.__awaiter) ||
							function (t, n, e, i) {
								return new (e || (e = Promise))(function (o, r) {
									function s(t) {
										try {
											c(i.next(t));
										} catch (t) {
											r(t);
										}
									}
									function a(t) {
										try {
											c(i.throw(t));
										} catch (t) {
											r(t);
										}
									}
									function c(t) {
										var n;
										t.done
											? o(t.value)
											: ((n = t.value),
												n instanceof e
													? n
													: new e(function (t) {
															t(n);
														})).then(s, a);
									}
									c((i = i.apply(t, n || [])).next());
								});
							},
						i =
							(this && this.__generator) ||
							function (t, n) {
								var e,
									i,
									o,
									r,
									s = {
										label: 0,
										sent: function () {
											if (1 & o[0]) throw o[1];
											return o[1];
										},
										trys: [],
										ops: [],
									};
								return (
									(r = { next: a(0), throw: a(1), return: a(2) }),
									"function" == typeof Symbol &&
										(r[Symbol.iterator] = function () {
											return this;
										}),
									r
								);
								function a(a) {
									return function (c) {
										return (function (a) {
											if (e)
												throw new TypeError(
													"Generator is already executing."
												);
											for (; r && ((r = 0), a[0] && (s = 0)), s; )
												try {
													if (
														((e = 1),
														i &&
															(o =
																2 & a[0]
																	? i.return
																	: a[0]
																		? i.throw ||
																			((o = i.return) &&
																				o.call(i),
																			0)
																		: i.next) &&
															!(o = o.call(i, a[1])).done)
													)
														return o;
													switch (
														((i = 0),
														o && (a = [2 & a[0], o.value]),
														a[0])
													) {
														case 0:
														case 1:
															o = a;
															break;
														case 4:
															return (
																s.label++, { value: a[1], done: !1 }
															);
														case 5:
															s.label++, (i = a[1]), (a = [0]);
															continue;
														case 7:
															(a = s.ops.pop()), s.trys.pop();
															continue;
														default:
															if (
																!(
																	(o =
																		(o = s.trys).length > 0 &&
																		o[o.length - 1]) ||
																	(6 !== a[0] && 2 !== a[0])
																)
															) {
																s = 0;
																continue;
															}
															if (
																3 === a[0] &&
																(!o || (a[1] > o[0] && a[1] < o[3]))
															) {
																s.label = a[1];
																break;
															}
															if (6 === a[0] && s.label < o[1]) {
																(s.label = o[1]), (o = a);
																break;
															}
															if (o && s.label < o[2]) {
																(s.label = o[2]), s.ops.push(a);
																break;
															}
															o[2] && s.ops.pop(), s.trys.pop();
															continue;
													}
													a = n.call(t, s);
												} catch (t) {
													(a = [6, t]), (i = 0);
												} finally {
													e = o = 0;
												}
											if (5 & a[0]) throw a[1];
											return { value: a[0] ? a[1] : void 0, done: !0 };
										})([a, c]);
									};
								}
							};
					Object.defineProperty(n, "__esModule", { value: !0 }), (n.ApiService = void 0);
					var o = (function () {
						function t(t) {
							(this.baseUrl = "http://localhost:4000"), (this.token = t);
						}
						return (
							(t.prototype.sendData = function (t) {
								return e(this, void 0, void 0, function () {
									return i(this, function (n) {
										switch (n.label) {
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
												if (!n.sent().ok)
													throw new Error("Failed to send data");
												return [2];
										}
									});
								});
							}),
							t
						);
					})();
					n.ApiService = o;
				},
			},
			n = {};
		function e(i) {
			var o = n[i];
			if (void 0 !== o) return o.exports;
			var r = (n[i] = { exports: {} });
			return t[i].call(r.exports, r, r.exports, e), r.exports;
		}
		var i = {};
		return (
			(() => {
				var t = i;
				Object.defineProperty(t, "__esModule", { value: !0 });
				var n = e(218);
				window.AnalyticsPlugin = {
					setConfigs: n.AnalyticsPlugin.setConfigs.bind(n.AnalyticsPlugin),
					clearConfigs: n.AnalyticsPlugin.clearConfigs.bind(n.AnalyticsPlugin),
				};
			})(),
			i
		);
	})()
);
