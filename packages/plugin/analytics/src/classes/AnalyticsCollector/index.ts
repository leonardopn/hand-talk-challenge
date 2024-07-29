export class AnalyticsCollector {
	private getThemeChangeCount: () => number;

	constructor(getThemeChangeCount: () => number = () => 0) {
		this.getThemeChangeCount = getThemeChangeCount;
	}

	private getDeviceType() {
		const userAgent = navigator.userAgent.toLowerCase();

		if (/(android)/.test(userAgent)) {
			return "android";
		} else if (/(iphone|ipad|ipod)/.test(userAgent)) {
			return "ios";
		} else {
			return "desktop";
		}
	}

	private getOperatingSystem() {
		return navigator.platform;
	}

	collectAnalyticsData() {
		return {
			device: this.getDeviceType(),
			os: this.getOperatingSystem(),
			domain: window.location.origin,
			themeChanges: this.getThemeChangeCount(),
		};
	}
}
