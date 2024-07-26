declare global {
	namespace NodeJS {
		interface ProcessEnv {
			/**
			 * Porta que a api está rodando
			 */
			PORT: number;

			/**
			 * Url do banco de dados do Firebase
			 */
			FIREBASE_DATABASE_URL: string;
		}
	}
}

export {};
