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
			description: "Acesso rápido as rotas da API de dados analíticos.",
		},
		servers: [
			{
				url: `http://localhost:${process.env.PORT}`,
				description: "Servidor local",
			},
		],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
				},
			},
		},
	},
	apis: [join(__dirname, "../module/**/controller.ts")],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

const setupSwagger = (app: Application): void => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
};

export default setupSwagger;
