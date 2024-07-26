import { Application, Request, Response } from "express";
import { Controller } from "../../classes/Controller";

import { AnalyticsService } from "./service";

export class AnalyticsController extends Controller {
	private service: AnalyticsService;

	constructor(api: Application) {
		super(api, "/analytics");

		this.service = new AnalyticsService();
	}

	protected registerRoutes() {
		this.api.get(this.joinRoutePath("/list"), this.list.bind(this));
		this.api.post(this.joinRoutePath("/collect"), this.collect.bind(this));
	}

	private async list(req: Request, res: Response) {
		const analytics = await this.service.list();
		res.send(analytics);
	}

	private collect(req: Request, res: Response) {
		res.send("TODO: implement analytics collect");
	}
}
