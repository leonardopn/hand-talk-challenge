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
			 * Url do banco de dados do Firebase
			 */
			FIREBASE_DATABASE_URL: string;

			/**
			 * Chave de segurança do JWT que deve ser usado para assinar tokens de domínio.
			 */
			JWT_SECRET: string;
		}
	}
}

export {};
