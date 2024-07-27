import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import setupSwagger from "../../configs/Swagger";
import { HttpsError } from "../../errors/HttpsError";
import { AnalyticsController } from "../Analytics/controller";
import { DomainTokenController } from "../DomainToken/controller";
import { DomainTokenService } from "../DomainToken/service";
import { BodyValidatorErrorHandler } from "./middlewares/BodyValidatorErrorHandler";
import { ErrorHandler } from "./middlewares/ErrorHandler";

export class ApiModule {
	private api: Application;

	private domainTokenService: DomainTokenService;

	constructor() {
		this.domainTokenService = new DomainTokenService();
		this.api = express();
	}

	async startApi() {
		const allowedDomains = await this.domainTokenService.getAllAllowedDomains();

		this.registerSecurityMiddlewares(allowedDomains);

		this.api.use(express.json());

		this.registerRoutes();

		this.registerErrorMiddlewares();

		this.api.listen(process.env.PORT, () => {
			console.log(`Listening on port ${process.env.PORT}`);
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

	private registerSecurityMiddlewares(allowedOrigins: string[]) {
		this.api.use(
			cors((req, callback) => {
				const origin = req.headers.origin;

				const isSameOrigin = !origin && (req.method === "GET" || req.method === "HEAD");

				if (isSameOrigin) {
					callback(null);
					return;
				}

				if (origin && allowedOrigins.includes(origin)) {
					callback(null);
				} else {
					callback(new HttpsError("Forbidden", "Proibido (403)"));
				}
			})
		);

		this.api.use(helmet());
	}
}
