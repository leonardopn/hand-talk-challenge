import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

const swaggerOptions = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "API Documentation",
			version: "1.0.0",
			description: "API documentation for the project",
		},
		servers: [
			{
				url: `http://localhost:${process.env.PORT}`,
				description: "Local server to test and document the analytics api",
			},
		],
	},
	apis: [],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

const setupSwagger = (app: Application): void => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
};

export default setupSwagger;
