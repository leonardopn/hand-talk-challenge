import { Application, Request, Response, Router } from "express";
import { Controller } from "../../classes/Controller";
import { AnalyticsService } from "./service";
import { COLLECT_ANALYTIC_DATA_DTO, LIST_ANALYTIC_DATA_DTO } from "./dto";
import { DomainTokenService } from "../DomainToken/service";

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
		this.api.post(this.joinRoutePath("/collect"), this.collect.bind(this));
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
	private async list(req: Request, res: Response) {
		const parsedQuery = LIST_ANALYTIC_DATA_DTO.parse(req.query);

		const domainToken = await this.domainTokenService.getOneByToken(parsedQuery.token);

		if (!domainToken) {
			return res.status(404).send("No data found for the provided token");
		}

		const data = await this.analyticsService.listLastTwentyByDomain(domainToken.domain);

		res.send(data);
	}

	/**
	 * @swagger
	 * /analytics/collect:
	 *   post:
	 *     summary: Collect data from plugin
	 *     tags: [Analytics]
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
	 *                 example: example.com
	 *               themeChanges:
	 *                 type: number
	 *                 example: 5
	 *     responses:
	 *       200:
	 *         description: Data collected successfully
	 *       500:
	 *         description: Error collecting data
	 */
	private async collect(req: Request, res: Response) {
		const parsedBody = COLLECT_ANALYTIC_DATA_DTO.parse(req.body);

		const createdData = await this.analyticsService.createOne(parsedBody);

		res.status(201).send(createdData);
	}
}
