import { Application, NextFunction, Request, Response } from "express";
import { Controller } from "../../classes/Controller";
import { HttpsError } from "../../errors/HttpsError";
import { DomainTokenService } from "../DomainToken/service";
import { COLLECT_ANALYTIC_DATA_DTO, LIST_ANALYTIC_DATA_DTO } from "./dto";

import { AnalyticsService } from "./service";
import dayjs from "dayjs";

export class AnalyticsController extends Controller {
	private analyticsService: AnalyticsService;
	private domainTokenService: DomainTokenService;

	constructor(api: Application) {
		super(api, "/analytics");

		this.analyticsService = new AnalyticsService();
		this.domainTokenService = new DomainTokenService();
	}

	protected registerRoutes() {
		this.api.get(this.joinRoutePath("/list"), this.list.bind(this));
		this.api.post(
			this.joinRoutePath("/collect"),
			this.verifyDomainToken.bind(this),
			this.collect.bind(this)
		);
	}

	/**
	 * @swagger
	 * /analytics/list:
	 *   get:
	 *     summary: List the last 20 data collections by token
	 *     tags: [Analytics]
	 *     parameters:
	 *       - in: query
	 *         name: token
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: The token to filter the data
	 *     responses:
	 *       200:
	 *         description: List of data collections
	 *       400:
	 *         description: Token is required
	 *       404:
	 *         description: No data found for the provided token
	 *       500:
	 *         description: Error listing data
	 */
	private async list(req: Request, res: Response, next: NextFunction) {
		try {
			const parsedQuery = LIST_ANALYTIC_DATA_DTO.parse(req.query);

			const domainToken = await this.domainTokenService.getOneByToken(parsedQuery.token);

			if (!domainToken) {
				throw new HttpsError(
					"No data found for the provided token",
					"Não Encontrado (404)"
				);
			}

			const data = await this.analyticsService.listLastTwentyByDomain(domainToken.domain);

			res.send(data);
		} catch (error) {
			next(error);
		}
	}

	/**
	 * @swagger
	 * /analytics/collect:
	 *   post:
	 *     summary: Collect data from plugin
	 *     tags: [Analytics]
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               device:
	 *                 type: string
	 *                 example: desktop
	 *               os:
	 *                 type: string
	 *                 example: windows
	 *               domain:
	 *                 type: string
	 *                 example: http://localhost:3000
	 *               themeChanges:
	 *                 type: number
	 *                 example: 5
	 *     responses:
	 *       200:
	 *         description: Data collected successfully
	 *       401:
	 *         description: Unauthorized
	 *       500:
	 *         description: Error collecting data
	 */
	private async collect(req: Request, res: Response, next: NextFunction) {
		try {
			const parsedBody = COLLECT_ANALYTIC_DATA_DTO.parse(req.body);

			const createdData = await this.analyticsService.createOne(parsedBody);

			res.status(201).send(createdData);
		} catch (error) {
			next(error);
		}
	}

	private async verifyDomainToken(req: Request, _: Response, next: NextFunction) {
		try {
			const { authorization } = req.headers;

			const token = authorization?.split(" ")?.[1];

			if (!token) throw new HttpsError("Token ausente", "Não Autorizado (401)");

			this.domainTokenService.verifyToken(token);

			const domainToken = await this.domainTokenService.getOneByToken(token);

			if (!domainToken) throw new HttpsError("Token inexistente", "Não Encontrado (404)");

			if (!domainToken.isAllowedToRequest()) {
				throw new HttpsError(
					`Token realizou muitas requisições em pouco tempo. Liberação do token em ${dayjs(domainToken.rateLimit.resetAt).format("DD/MM/YYYY HH:mm:ss")}`,
					"Muitas Requisições (429)"
				);
			}

			await this.domainTokenService.updateOne(domainToken);

			next();
		} catch (error) {
			next(error);
		}
	}
}
