export interface IRequest {
	body: any;
	params: any;
	query: any;
	headers: any;
}

export interface IResponse {
	send: (body: any) => void;
	status: (statusCode: number) => IResponse;
}

export type RequestHandler = (req: IRequest, res: IResponse, next?: (data?: any) => void) => void;

export interface IApi {
	get(path: string, handler: RequestHandler): void;
	post(path: string, handler: RequestHandler): void;
	use(path: string, ...handlers: Array<RequestHandler>): void;
	listen(port: number, callback: () => void): void;
}
