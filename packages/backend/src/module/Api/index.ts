import { ExpressApi } from "../../implementations/ExpressApi";
import { IApi } from "../../interfaces/IApi";
import { AnalyticsController } from "../Analytics/controller";

export class ApiModule {
	private api: IApi;

	constructor() {
		this.api = new ExpressApi();

		new AnalyticsController(this.api);
	}

	startApi() {
		this.api.listen(4000, () => {
			console.log("Listening on port 4000");
		});
	}
}
