import { Controller } from "../../classes/Controller";
import { IApi, IRequest, IResponse } from "../../interfaces/IApi";

export class AnalyticsController extends Controller {
	constructor(api: IApi) {
		super(api, "/analytics");
	}

	protected registerRoutes() {
		this.api.get(this.joinRoutePath("/list"), this.list.bind(this));
		this.api.post(this.joinRoutePath("/collect"), this.collect.bind(this));
	}

	private list(req: IRequest, res: IResponse) {
		res.send("TODO: implement analytics list");
	}

	private collect(req: IRequest, res: IResponse) {
		res.send("TODO: implement analytics collect");
	}
}
