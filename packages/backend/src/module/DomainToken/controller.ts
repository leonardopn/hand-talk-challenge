import { Application, Request, Response } from "express";
import { Controller } from "../../classes/Controller";
import { CREATE_ONE_DOMAIN_TOKEN_DTO } from "./dto";
import { DomainTokenService } from "./service";

export class DomainTokenController extends Controller {
	private service: DomainTokenService;

	constructor(api: Application) {
		super(api, "/domain-token");

		this.service = new DomainTokenService();
	}

	protected registerRoutes(): void {
		this.api.post(this.joinRoutePath("/"), this.createOne.bind(this));
	}

	/**
	 * @swagger
	 * /domain-token:
	 *   post:
	 *     summary: Create a new domain token
	 *     tags: [Domain Token]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               domain:
	 *                 type: string
	 *                 example: example.com
	 *               createdBy:
	 *                 type: string
	 *                 example: 4VTKkVScztar2u4KMuM3tERqE0o2
	 *     responses:
	 *       200:
	 *         description: Domain token created successfully
	 *       400:
	 *         description: Domain is required
	 */
	private async createOne(req: Request, res: Response) {
		const parsedBody = CREATE_ONE_DOMAIN_TOKEN_DTO.parse(req.body);

		const domainToken = await this.service.createOne(parsedBody);

		res.status(201).send(domainToken);
	}
}
