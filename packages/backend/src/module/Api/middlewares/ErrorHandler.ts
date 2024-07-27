import { NextFunction, Request, Response } from "express";

import { HttpsError } from "../../../errors/HttpsError";

export function ErrorHandler(err: HttpsError, _: Request, res: Response, next: NextFunction) {
	console.log(err.stack);

	const errStatus = err.statusCode || 500;
	const errMsg = err.message || "Tivemos problema para realizar esta requisição";

	res.status(errStatus).json({
		status: errStatus,
		message: errMsg,
		stack: process.env.NODE_ENV === "development" ? err.stack : {},
	});

	next();
}
