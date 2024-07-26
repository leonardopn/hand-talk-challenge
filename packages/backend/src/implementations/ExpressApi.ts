import express, { Request, Response, NextFunction } from "express";
import { IApi, IRequest, IResponse, RequestHandler } from "../interfaces/IApi";

class ExpressRequest implements IRequest {
	constructor(private req: Request) {}

	get body() {
		return this.req.body;
	}

	get params() {
		return this.req.params;
	}

	get query() {
		return this.req.query;
	}

	get headers() {
		return this.req.headers;
	}
}

class ExpressResponse implements IResponse {
	constructor(private res: Response) {}

	send(body: any) {
		this.res.send(body);
	}

	status(statusCode: number) {
		this.res.status(statusCode);
		return this;
	}
}

export class ExpressApi implements IApi {
	private app = express();

	constructor() {
		this.app.use(express.json());
	}

	get(path: string, handler: RequestHandler) {
		this.app.get(path, (req: Request, res: Response) =>
			handler(new ExpressRequest(req), new ExpressResponse(res))
		);
	}

	post(path: string, handler: RequestHandler) {
		this.app.post(path, (req: Request, res: Response) =>
			handler(new ExpressRequest(req), new ExpressResponse(res))
		);
	}

	listen(port: number, callback: () => void) {
		this.app.listen(port, callback);
	}
}
