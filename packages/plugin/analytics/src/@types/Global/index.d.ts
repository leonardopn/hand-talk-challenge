declare global {
	interface Window {
		AnalyticsPlugin: {
			setConfigs: (token: string, getThemeChangeCount: () => number) => void;
			clearConfigs: () => void;
		};
	}

	namespace NodeJS {
		interface ProcessEnv {
			/**
			 * URL para a api de analytics.
			 */
			API_URL: string;
		}
	}
}

export {};
