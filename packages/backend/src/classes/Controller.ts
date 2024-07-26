import { Application } from "express";

export abstract class Controller {
	protected path: string;
	protected api: Application;

	constructor(api: Application, path: string) {
		this.api = api;
		this.path = path;

		this.registerRoutes();
	}

	protected abstract registerRoutes(): void;

	protected joinRoutePath(routePath: string) {
		return this.path + routePath;
	}
}
