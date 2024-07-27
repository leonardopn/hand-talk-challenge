import express, { Application } from "express";
import { AnalyticsController } from "../Analytics/controller";
import setupSwagger from "../../configs/Swagger";
import { DomainTokenController } from "../DomainToken/controller";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import { BodyValidatorErrorHandler } from "./middlewares/BodyValidatorErrorHandler";
import helmet from "helmet";

export class ApiModule {
	private api: Application;

	constructor() {
		this.api = express();
		this.api.use(express.json());

		this.registerSecurityMiddlewares();

		this.registerRoutes();

		this.registerErrorMiddlewares();
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

	private registerErrorMiddlewares() {
		this.api.use(BodyValidatorErrorHandler);
		this.api.use(ErrorHandler);
	}

	private registerSecurityMiddlewares() {
		this.api.use(helmet());
	}
}
