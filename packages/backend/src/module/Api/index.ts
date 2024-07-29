import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import setupSwagger from "../../configs/Swagger";
import { AnalyticsController } from "../Analytics/controller";
import { AuthController } from "../Auth/controller";
import { DomainTokenController } from "../DomainToken/controller";
import { BodyValidatorErrorHandler } from "./middlewares/BodyValidatorErrorHandler";
import { ErrorHandler } from "./middlewares/ErrorHandler";

export class ApiModule {
	private api: Application;

	constructor() {
		this.api = express();

		this.registerSecurityMiddlewares();

		this.api.use(express.json());

		this.registerRoutes();

		this.registerErrorMiddlewares();
	}

	async startApi() {
		this.api.listen(process.env.PORT, () => {
			console.log(`Listening on port ${process.env.PORT}`);
		});
	}

	private registerRoutes() {
		setupSwagger(this.api);
		new AnalyticsController(this.api);
		new DomainTokenController(this.api);
		new AuthController(this.api);
	}

	private registerErrorMiddlewares() {
		this.api.use(BodyValidatorErrorHandler);
		this.api.use(ErrorHandler);
	}

	private registerSecurityMiddlewares() {
		this.api.use(cors());
		this.api.use(helmet());
	}
}
