import { Application, NextFunction, Request, Response } from "express";
import { Controller } from "../../classes/Controller";
import { AuthService } from "./service";
import { AUTHENTICATE_USER_DTO } from "./dto";

export class AuthController extends Controller {
	private authService: AuthService;

	constructor(api: Application) {
		super(api, "/auth");

		this.authService = new AuthService();
	}

	protected registerRoutes(): void {
		this.api.post(this.joinRoutePath("/authenticate"), this.authenticate.bind(this));
	}

	/**
	 * @swagger
	 * /auth/authenticate:
	 *   post:
	 *     summary: Authenticate a user with email and password
	 *     tags: [Auth]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               email:
	 *                 type: string
	 *                 example: leonardocps9@gmail.com
	 *               password:
	 *                 type: string
	 *                 example: 123456
	 */
	async authenticate(req: Request, rest: Response, next: NextFunction) {
		try {
			const { email, password } = AUTHENTICATE_USER_DTO.parse(req.body);

			const { token } = await this.authService.authenticate(email, password);

			rest.send({ token });
		} catch (error) {
			next(error);
		}
	}
}
