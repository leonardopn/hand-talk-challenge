import { Controller } from "../../classes/Controller";
import { IApi, IRequest, IResponse } from "../../interfaces/IApi";
import { AnalyticsService } from "./service";

export class AnalyticsController extends Controller {
	private service: AnalyticsService;

	constructor(api: IApi) {
		super(api, "/analytics");

		this.service = new AnalyticsService();
	}

	protected registerRoutes() {
		this.api.get(this.joinRoutePath("/list"), this.list.bind(this));
		this.api.post(this.joinRoutePath("/collect"), this.collect.bind(this));
	}

	private async list(req: IRequest, res: IResponse) {
		const analytics = await this.service.list();
		res.send(analytics);
	}

	private collect(req: IRequest, res: IResponse) {
		res.send("TODO: implement analytics collect");
	}
}
