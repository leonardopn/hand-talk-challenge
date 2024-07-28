declare global {
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
