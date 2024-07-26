import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";
import { join } from "path";

const swaggerOptions: swaggerJsdoc.Options = {
	swaggerDefinition: {
		openapi: "3.0.0",
		basePath: "/api",
		info: {
			title: "Analytics API",
			version: "1.0.0",
			description: "API documentation for the Backend Analytics API",
		},
		servers: [
			{
				url: `http://localhost:${process.env.PORT}`,
				description: "Local server",
			},
		],
	},
	apis: [join(__dirname, "../module/**/controller.ts")],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

const setupSwagger = (app: Application): void => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
};

export default setupSwagger;
