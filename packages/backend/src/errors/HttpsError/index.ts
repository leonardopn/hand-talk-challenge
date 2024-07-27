import { httpStatusCodes } from "../../constant/HttpStatusCodes";

export class HttpsError extends Error {
	statusCode: number;
	humanizedStatusCode: keyof typeof httpStatusCodes;

	constructor(message: string, errCode?: keyof typeof httpStatusCodes) {
		super(message);

		this.humanizedStatusCode = errCode || "Erro Interno do Servidor (500)";

		this.statusCode = httpStatusCodes[this.humanizedStatusCode];
	}
}
