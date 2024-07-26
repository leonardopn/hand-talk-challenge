import express, { Application, Request, Response, NextFunction } from "express";
import { IApi, IRequest, IResponse, RequestHandler } from "../interfaces/IApi";
import setupSwagger from "../configs/Swagger";

export class ExpressApi implements IApi {
	private app: Application;

	constructor() {
		this.app = express();

		setupSwagger(this.app);
	}

	private wrapHandler(handler: RequestHandler) {
		return (req: Request, res: Response, next: NextFunction) => {
			const wrappedReq: IRequest = {
				body: req.body,
				params: req.params,
				query: req.query,
				headers: req.headers,
			};
			const wrappedRes: IResponse = {
				send: (body: any) => res.send(body),
				status: (statusCode: number) => {
					res.status(statusCode);
					return wrappedRes;
				},
			};

			handler(wrappedReq, wrappedRes, next);
		};
	}

	public get(path: string, handler: RequestHandler): void {
		this.app.get(path, this.wrapHandler(handler));
	}

	public post(path: string, handler: RequestHandler): void {
		this.app.post(path, this.wrapHandler(handler));
	}

	public use(path: string, ...handlers: Array<RequestHandler>): void {
		const wrappedHandlers = handlers.map(this.wrapHandler);
		this.app.use(path, ...wrappedHandlers);
	}

	public listen(port: number, callback: () => void): void {
		this.app.listen(port, callback);
	}
}
