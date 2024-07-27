import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { HttpsError } from "../../../errors/HttpsError";

export function BodyValidatorErrorHandler(
	err: unknown,
	_: Request,
	__: Response,
	next: NextFunction
) {
	if (err instanceof ZodError) {
		next(new HttpsError(err.message, "Requisição Inválida (400)"));
	} else {
		next(err);
	}
}
