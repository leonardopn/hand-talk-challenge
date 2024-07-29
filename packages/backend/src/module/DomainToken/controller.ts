import { Application, NextFunction, Request, Response } from "express";
import { Controller } from "../../classes/Controller";
import { CREATE_ONE_DOMAIN_TOKEN_DTO } from "./dto";
import { DomainTokenService } from "./service";
import { AuthService } from "../Auth/service";
import { HttpsError } from "../../errors/HttpsError";

export class DomainTokenController extends Controller {
	private service: DomainTokenService;
	private authService: AuthService;

	constructor(api: Application) {
		super(api, "/domain-token");

		this.service = new DomainTokenService();
		this.authService = new AuthService();
	}

	protected registerRoutes(): void {
		this.api.post(this.joinRoutePath("/"), this.createOne.bind(this));
	}

	/**
	 * @swagger
	 * /domain-token:
	 *   post:
	 *     summary: Cria um novo token de domínio
	 *     tags: [Domain Token]
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               domain:
	 *                 type: string
	 *                 example: http://localhost:3000
	 *     responses:
	 *       201:
	 *         description: Sucesso contendo o token de domínio.
	 *       428:
	 *         description: Quando o token não for informado no cabeçalho.
	 *       409:
	 *         description: Quando o domínio informado ja possui um token associado.
	 *       404:
	 *         description: Quando algum dos parâmetros informados não estiver padronizado.
	 *       500:
	 *         description: Qualquer outra situação inesperada
	 */
	private async createOne(req: Request, res: Response, next: NextFunction) {
		try {
			const { authorization } = req.headers;

			const token = authorization?.split(" ")?.[1];
			if (!token)
				throw new HttpsError(
					"Token ausente no cabeçalho da requisição.",
					"Pré-condição Necessária (428)"
				);

			const parsedToken = await this.authService.verifyToken(token);

			const parsedBody = CREATE_ONE_DOMAIN_TOKEN_DTO.parse({
				...req.body,
				createdBy: parsedToken.uid,
			});

			const foundDomainToken = await this.service.getOneByDomain(parsedBody.domain);

			if (foundDomainToken) {
				throw new HttpsError(
					`Domínio "${parsedBody.domain}" já possui um token associado.`,
					"Conflito (409)"
				);
			}

			const domainToken = await this.service.createOne(parsedBody);

			res.status(201).send(domainToken);
		} catch (error) {
			next(error);
		}
	}
}
