import { IApi } from "../interfaces/IApi";

export abstract class Controller {
	protected path: string;
	protected api: IApi;

	constructor(api: IApi, path: string) {
		this.api = api;
		this.path = path;

		this.registerRoutes();
	}

	protected abstract registerRoutes(): void;

	protected joinRoutePath(routePath: string) {
		return this.path + routePath;
	}
}
