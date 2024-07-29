declare global {
	namespace NodeJS {
		interface ProcessEnv {
			/**
			 * Modo atual da aplicação
			 */
			NODE_ENV: "development" | "production" | "test";

			/**
			 * Porta que a api está rodando
			 */
			PORT: number;

			/**
			 * Chave de segurança do JWT que deve ser usado para assinar tokens de domínio.
			 */
			JWT_SECRET: string;

			/**
			 * Url do banco de dados do Firebase
			 */
			FIREBASE_DATABASE_URL: string;

			FIREBASE_API_KEY: string;
			FIREBASE_AUTH_DOMAIN: string;
			FIREBASE_STORAGE_BUCKET: string;
			FIREBASE_MESSAGING_SENDER_ID: string;
			FIREBASE_APP_ID: string;
			FIREBASE_MEASUREMENT_ID: string;
		}
	}
}

export {};
