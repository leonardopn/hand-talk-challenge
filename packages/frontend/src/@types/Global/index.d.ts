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
			 * Token para acesso a coleta de dados pelo plugin Analytics
			 */
			NEXT_PUBLIC_ANALYTICS_PLUGIN_TOKEN: string;
		}
	}
}

export {};
