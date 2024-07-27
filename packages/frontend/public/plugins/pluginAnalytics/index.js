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
		"use strict";
		var t = {
				558: (t, e) => {
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
					var o =
							(this && this.__awaiter) ||
							function (t, e, n, o) {
								return new (n || (n = Promise))(function (r, i) {
									function a(t) {
										try {
											u(o.next(t));
										} catch (t) {
											i(t);
										}
									}
									function s(t) {
										try {
											u(o.throw(t));
										} catch (t) {
											i(t);
										}
									}
									function u(t) {
										var e;
										t.done
											? r(t.value)
											: ((e = t.value),
												e instanceof n
													? e
													: new n(function (t) {
															t(e);
														})).then(a, s);
									}
									u((o = o.apply(t, e || [])).next());
								});
							},
						r =
							(this && this.__generator) ||
							function (t, e) {
								var n,
									o,
									r,
									i,
									a = {
										label: 0,
										sent: function () {
											if (1 & r[0]) throw r[1];
											return r[1];
										},
										trys: [],
										ops: [],
									};
								return (
									(i = { next: s(0), throw: s(1), return: s(2) }),
									"function" == typeof Symbol &&
										(i[Symbol.iterator] = function () {
											return this;
										}),
									i
								);
								function s(s) {
									return function (u) {
										return (function (s) {
											if (n)
												throw new TypeError(
													"Generator is already executing."
												);
											for (; i && ((i = 0), s[0] && (a = 0)), a; )
												try {
													if (
														((n = 1),
														o &&
															(r =
																2 & s[0]
																	? o.return
																	: s[0]
																		? o.throw ||
																			((r = o.return) &&
																				r.call(o),
																			0)
																		: o.next) &&
															!(r = r.call(o, s[1])).done)
													)
														return r;
													switch (
														((o = 0),
														r && (s = [2 & s[0], r.value]),
														s[0])
													) {
														case 0:
														case 1:
															r = s;
															break;
														case 4:
															return (
																a.label++, { value: s[1], done: !1 }
															);
														case 5:
															a.label++, (o = s[1]), (s = [0]);
															continue;
														case 7:
															(s = a.ops.pop()), a.trys.pop();
															continue;
														default:
															if (
																!(
																	(r =
																		(r = a.trys).length > 0 &&
																		r[r.length - 1]) ||
																	(6 !== s[0] && 2 !== s[0])
																)
															) {
																a = 0;
																continue;
															}
															if (
																3 === s[0] &&
																(!r || (s[1] > r[0] && s[1] < r[3]))
															) {
																a.label = s[1];
																break;
															}
															if (6 === s[0] && a.label < r[1]) {
																(a.label = r[1]), (r = s);
																break;
															}
															if (r && a.label < r[2]) {
																(a.label = r[2]), a.ops.push(s);
																break;
															}
															r[2] && a.ops.pop(), a.trys.pop();
															continue;
													}
													s = e.call(t, a);
												} catch (t) {
													(s = [6, t]), (o = 0);
												} finally {
													n = r = 0;
												}
											if (5 & s[0]) throw s[1];
											return { value: s[0] ? s[1] : void 0, done: !0 };
										})([s, u]);
									};
								}
							};
					Object.defineProperty(e, "__esModule", { value: !0 }),
						(e.AnalyticsPlugin = void 0);
					var i = n(659),
						a = n(226),
						s = n(558),
						u = (function () {
							function t() {}
							return (
								(t.setConfigs = function (t, e, n) {
									this.isConfigured ||
										((this.token = t),
										(this.analyticsCollector = new s.AnalyticsCollector(e)),
										(this.button = new i.Button(n, this.sendData.bind(this))),
										(this.isConfigured = !0));
								}),
								(t.clearConfigs = function () {
									(this.isConfigured = !1), this.button && this.button.remove();
								}),
								(t.sendData = function () {
									return o(this, void 0, void 0, function () {
										var t, e, n;
										return r(this, function (o) {
											switch (o.label) {
												case 0:
													if (!this.isConfigured)
														throw new Error(
															"Plugin not configured, Run AnalyticsPlugin.setConfigs() first"
														);
													o.label = 1;
												case 1:
													return (
														o.trys.push([1, 3, , 4]),
														(t = new a.ApiService(this.token)),
														(e =
															this.analyticsCollector.collectAnalyticsData()),
														[4, t.sendData(e)]
													);
												case 2:
													return (
														o.sent(), alert("Dados enviados!"), [3, 4]
													);
												case 3:
													return (
														(n = o.sent()),
														console.error(n),
														alert("Erro ao enviar dados."),
														[3, 4]
													);
												case 4:
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
				659: (t, e) => {
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.Button = void 0);
					var n = (function () {
						function t(t, e) {
							(this.instance = this.mountButton(t, e)), this.render();
						}
						return (
							(t.prototype.mountButton = function (t, e) {
								var n = "analytics-plugin-button-collect",
									o = document.getElementById(n);
								if (o) return o;
								var r = document.createElement("button");
								return (
									(r.style.position = "fixed"),
									(r.style.bottom = "10px"),
									(r.style.right = "10px"),
									(r.style.zIndex = "10"),
									(r.style.padding = "10px 20px"),
									(r.style.backgroundColor = "blue"),
									(r.style.color = "#ffffff"),
									(r.style.border = "none"),
									(r.style.borderRadius = "5px"),
									(r.style.cursor = "pointer"),
									(r.innerText = "Coletar dados"),
									(r.id = n),
									e && (r.onclick = e),
									t && Object.assign(r.style, t),
									r
								);
							}),
							(t.prototype.render = function () {
								document.body.appendChild(this.instance);
							}),
							(t.prototype.remove = function () {
								this.instance.remove();
							}),
							t
						);
					})();
					e.Button = n;
				},
				226: function (t, e) {
					var n =
							(this && this.__awaiter) ||
							function (t, e, n, o) {
								return new (n || (n = Promise))(function (r, i) {
									function a(t) {
										try {
											u(o.next(t));
										} catch (t) {
											i(t);
										}
									}
									function s(t) {
										try {
											u(o.throw(t));
										} catch (t) {
											i(t);
										}
									}
									function u(t) {
										var e;
										t.done
											? r(t.value)
											: ((e = t.value),
												e instanceof n
													? e
													: new n(function (t) {
															t(e);
														})).then(a, s);
									}
									u((o = o.apply(t, e || [])).next());
								});
							},
						o =
							(this && this.__generator) ||
							function (t, e) {
								var n,
									o,
									r,
									i,
									a = {
										label: 0,
										sent: function () {
											if (1 & r[0]) throw r[1];
											return r[1];
										},
										trys: [],
										ops: [],
									};
								return (
									(i = { next: s(0), throw: s(1), return: s(2) }),
									"function" == typeof Symbol &&
										(i[Symbol.iterator] = function () {
											return this;
										}),
									i
								);
								function s(s) {
									return function (u) {
										return (function (s) {
											if (n)
												throw new TypeError(
													"Generator is already executing."
												);
											for (; i && ((i = 0), s[0] && (a = 0)), a; )
												try {
													if (
														((n = 1),
														o &&
															(r =
																2 & s[0]
																	? o.return
																	: s[0]
																		? o.throw ||
																			((r = o.return) &&
																				r.call(o),
																			0)
																		: o.next) &&
															!(r = r.call(o, s[1])).done)
													)
														return r;
													switch (
														((o = 0),
														r && (s = [2 & s[0], r.value]),
														s[0])
													) {
														case 0:
														case 1:
															r = s;
															break;
														case 4:
															return (
																a.label++, { value: s[1], done: !1 }
															);
														case 5:
															a.label++, (o = s[1]), (s = [0]);
															continue;
														case 7:
															(s = a.ops.pop()), a.trys.pop();
															continue;
														default:
															if (
																!(
																	(r =
																		(r = a.trys).length > 0 &&
																		r[r.length - 1]) ||
																	(6 !== s[0] && 2 !== s[0])
																)
															) {
																a = 0;
																continue;
															}
															if (
																3 === s[0] &&
																(!r || (s[1] > r[0] && s[1] < r[3]))
															) {
																a.label = s[1];
																break;
															}
															if (6 === s[0] && a.label < r[1]) {
																(a.label = r[1]), (r = s);
																break;
															}
															if (r && a.label < r[2]) {
																(a.label = r[2]), a.ops.push(s);
																break;
															}
															r[2] && a.ops.pop(), a.trys.pop();
															continue;
													}
													s = e.call(t, a);
												} catch (t) {
													(s = [6, t]), (o = 0);
												} finally {
													n = r = 0;
												}
											if (5 & s[0]) throw s[1];
											return { value: s[0] ? s[1] : void 0, done: !0 };
										})([s, u]);
									};
								}
							};
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.ApiService = void 0);
					var r = (function () {
						function t(t) {
							(this.baseUrl = "http://localhost:4000"), (this.token = t);
						}
						return (
							(t.prototype.sendData = function (t) {
								return n(this, void 0, void 0, function () {
									return o(this, function (e) {
										switch (e.label) {
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
												if (!e.sent().ok)
													throw new Error("Failed to send data");
												return [2];
										}
									});
								});
							}),
							t
						);
					})();
					e.ApiService = r;
				},
			},
			e = {};
		function n(o) {
			var r = e[o];
			if (void 0 !== r) return r.exports;
			var i = (e[o] = { exports: {} });
			return t[o].call(i.exports, i, i.exports, n), i.exports;
		}
		var o = {};
		return (
			(() => {
				var t = o;
				Object.defineProperty(t, "__esModule", { value: !0 });
				var e = n(218);
				window.AnalyticsPlugin = {
					setConfigs: e.AnalyticsPlugin.setConfigs.bind(e.AnalyticsPlugin),
					clearConfigs: e.AnalyticsPlugin.clearConfigs.bind(e.AnalyticsPlugin),
				};
			})(),
			o
		);
	})()
);
