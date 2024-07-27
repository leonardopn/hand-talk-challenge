import express, { Application } from "express";
import { AnalyticsController } from "../Analytics/controller";
import setupSwagger from "../../configs/Swagger";
import { DomainTokenController } from "../DomainToken/controller";
import { ErrorHandler } from "./middlewares/ErrorHandler";

export class ApiModule {
	private api: Application;

	constructor() {
		this.api = express();

		this.api.use(express.json());

		this.registerRoutes();

		this.registerMiddlewares();
	}

	startApi() {
		this.api.listen(4000, () => {
			console.log("Listening on port 4000");
		});
	}

	private registerRoutes() {
		setupSwagger(this.api);
		new AnalyticsController(this.api);
		new DomainTokenController(this.api);
	}

	private registerMiddlewares() {
		this.api.use(ErrorHandler);
	}
}
