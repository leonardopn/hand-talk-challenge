import dayjs from "dayjs";
import { Application, NextFunction, Request, Response } from "express";
import { Controller } from "../../classes/Controller";
import { HttpsError } from "../../errors/HttpsError";
import { DomainTokenService } from "../DomainToken/service";
import { COLLECT_ANALYTIC_DATA_DTO, CollectAnalyticDataDto, LIST_ANALYTIC_DATA_DTO } from "./dto";
import { AnalyticsService } from "./service";

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
	 *     summary: Lista os últimos 20 dados analíticos por domínio
	 *     tags: [Analytics]
	 *     parameters:
	 *       - in: query
	 *         name: token
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: O token do domínio que será utilizado para filtrar resultados.
	 *     responses:
	 *       200:
	 *         description: Sucesso contendo até 20 dados.
	 *       404:
	 *         description: Quando algum dos parâmetros informados não estiver padronizado ou o token passado não existir na base.
	 *       500:
	 *         description: Qualquer outra situação inesperada
	 */
	private async list(req: Request, res: Response, next: NextFunction) {
		try {
			const parsedQuery = LIST_ANALYTIC_DATA_DTO.parse(req.query);

			const domainToken = await this.domainTokenService.getOneByToken(parsedQuery.token);

			if (!domainToken) {
				throw new HttpsError(
					"Nenhum token encontrado para o domínio informado",
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
	 *     summary: Cria um novo dado analítico coletado externamente.
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
	 *       201:
	 *         description: Sucesso contendo o dado criado.
	 *       401:
	 *         description: Quando não houver permissão para acessar a rota.
	 *       404:
	 *         description: Quando algum dos parâmetros informados não estiver padronizado.
	 *       428:
	 *         description: Quando o token não for informado no cabeçalho.
	 *       429:
	 *         description: Quando o token realizou muitas requisições em um curto período.
	 *       500:
	 *         description: Qualquer outra situação inesperada.
	 */
	private async collect(req: Request, res: Response, next: NextFunction) {
		try {
			// Middleware já faz essa validação
			const parsedBody = req.body as CollectAnalyticDataDto;

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
			if (!token)
				throw new HttpsError(
					"Token ausente do cabeçalho de requisição",
					"Pré-condição Necessária (428)"
				);

			const domainToken = await this.domainTokenService.getOneByToken(token);
			if (!domainToken)
				throw new HttpsError("Token inexistente no sistema", "Não Encontrado (404)");

			const parsedBody = COLLECT_ANALYTIC_DATA_DTO.parse(req.body);
			if (parsedBody.domain !== domainToken.domain) {
				throw new HttpsError(
					`Token inválido para o domínio ${parsedBody.domain}`,
					"Não Autorizado (401)"
				);
			}

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
