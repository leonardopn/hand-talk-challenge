import { AnalyticsCollector } from "./index";

describe("AnalyticsCollector", () => {
	let getThemeChangeCountMock: jest.Mock;

	// Backup dos estados originais
	const originalNavigator = { ...window.navigator };
	const originalLocation = { ...window.location };

	beforeEach(() => {
		getThemeChangeCountMock = jest.fn();
	});

	afterEach(() => {
		// Restaura o estado original de `navigator` e `location`
		Object.defineProperty(window, "navigator", {
			value: originalNavigator,
			writable: true,
		});

		Object.defineProperty(window, "location", {
			value: originalLocation,
			writable: true,
		});

		jest.restoreAllMocks();
	});

	describe("collectAnalyticsData", () => {
		it("should collect correct data for android device", () => {
			Object.defineProperty(window, "navigator", {
				value: {
					userAgent:
						"Mozilla/5.0 (Linux; Android 9; Pixel 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Mobile Safari/537.36",
					platform: "Linux armv8l",
				},
				configurable: true,
				writable: true,
			});

			Object.defineProperty(window, "location", {
				value: { origin: "https://example.com" },
				configurable: true,
				writable: true,
			});

			const analyticsCollector = new AnalyticsCollector(getThemeChangeCountMock);
			getThemeChangeCountMock.mockReturnValue(5);

			const result = analyticsCollector.collectAnalyticsData();

			expect(result).toEqual({
				device: "android",
				os: "Linux armv8l",
				domain: "https://example.com",
				themeChanges: 5,
			});
		});

		it("should collect correct data for iOS device", () => {
			Object.defineProperty(window, "navigator", {
				value: {
					userAgent:
						"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
					platform: "iPhone",
				},
				configurable: true,
				writable: true,
			});

			const analyticsCollector = new AnalyticsCollector(getThemeChangeCountMock);
			getThemeChangeCountMock.mockReturnValue(3);

			const result = analyticsCollector.collectAnalyticsData();

			expect(result).toEqual({
				device: "ios",
				os: "iPhone",
				domain: window.location.origin,
				themeChanges: 3,
			});
		});

		it("should collect correct data for desktop device", () => {
			Object.defineProperty(window, "navigator", {
				value: {
					userAgent:
						"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
					platform: "Win32",
				},
				configurable: true,
				writable: true,
			});

			const analyticsCollector = new AnalyticsCollector(getThemeChangeCountMock);
			getThemeChangeCountMock.mockReturnValue(0);

			const result = analyticsCollector.collectAnalyticsData();

			expect(result).toEqual({
				device: "desktop",
				os: "Win32",
				domain: window.location.origin,
				themeChanges: 0,
			});
		});

		it("should use a default function for getThemeChangeCount if not provided", () => {
			Object.defineProperty(window, "navigator", {
				value: {
					userAgent:
						"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
					platform: "Win32",
				},
				configurable: true,
				writable: true,
			});

			const analyticsCollector = new AnalyticsCollector();
			expect(analyticsCollector.collectAnalyticsData().themeChanges).toEqual(0);
		});
	});
});
