import express, { Application } from "express";

import { AnalyticsController } from "../Analytics/controller";
import setupSwagger from "../../configs/Swagger";

export class ApiModule {
	private api: Application;

	constructor() {
		this.api = express();

		setupSwagger(this.api);
		new AnalyticsController(this.api);
	}

	startApi() {
		this.api.listen(4000, () => {
			console.log("Listening on port 4000");
		});
	}
}
