import { FirebaseError } from "firebase/app";
import {
	FirebaseAuthErrorsCode,
	firebaseMappedAuthErrors,
} from "../../constant/FirebaseAuthErrors";
import { HttpsError } from "../HttpsError";

export class FirebaseAuthError extends HttpsError {
	constructor(error: any) {
		super("Ocorreu um erro ao tentar autenticar usuário.", "Erro Interno do Servidor (500)");

		if (error instanceof FirebaseError) {
			this.handleError(error.code);
		} else {
			if (error instanceof Error) {
				this.message = error.message;
			}
		}
	}

	private handleError(errorCode: FirebaseAuthErrorsCode) {
		if (errorCode.includes("auth/invalid")) {
			this.setStatusCodeByErrorCode("Requisição Inválida (400)");
		}

		switch (errorCode) {
			case "auth/id-token-expired":
			case "auth/id-token-revoked":
				this.setStatusCodeByErrorCode("Não Autorizado (401)");
				break;
			case "auth/internal-error":
				this.setStatusCodeByErrorCode("Erro Interno do Servidor (500)");
			default:
				break;
		}

		this.message =
			errorCode +
				" - " +
				firebaseMappedAuthErrors[errorCode as keyof typeof firebaseMappedAuthErrors] ||
			"Ocorreu um erro ao tentar autenticar usuário.";
	}
}
