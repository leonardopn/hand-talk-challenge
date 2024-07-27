export class AnalyticsCollector {
	private getThemeChangeCount: () => number;

	constructor(getThemeChangeCount: () => number = () => 0) {
		this.getThemeChangeCount = getThemeChangeCount;
	}

	private getDeviceType() {
		return /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop";
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
