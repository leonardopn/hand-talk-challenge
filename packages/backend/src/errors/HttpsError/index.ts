import { httpStatusCodes } from "../../constant/HttpStatusCodes";

export class HttpsError extends Error {
	statusCode!: number;
	humanizedStatusCode!: keyof typeof httpStatusCodes;

	constructor(message: string, errCode?: keyof typeof httpStatusCodes) {
		super(message);

		this.setStatusCodeByErrorCode(errCode);
	}

	protected setStatusCodeByErrorCode(errCode?: keyof typeof httpStatusCodes) {
		this.humanizedStatusCode = errCode || "Erro Interno do Servidor (500)";

		this.statusCode = httpStatusCodes[this.humanizedStatusCode];
	}
}
