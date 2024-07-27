import express, { Application } from "express";
import { AnalyticsController } from "../Analytics/controller";
import setupSwagger from "../../configs/Swagger";
import { DomainTokenController } from "../DomainToken/controller";

export class ApiModule {
	private api: Application;

	constructor() {
		this.api = express();

		this.api.use(express.json());

		setupSwagger(this.api);

		new AnalyticsController(this.api);
		new DomainTokenController(this.api);
	}

	startApi() {
		this.api.listen(4000, () => {
			console.log("Listening on port 4000");
		});
	}
}
