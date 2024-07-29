import { Service } from "../../classes/Service";
import { FirebaseAuthentication } from "../../implementations/FirebaseAuthentication";
import { IAuthentication } from "../../interfaces/IAuthentication";

export class AuthService extends Service {
	private authService: IAuthentication;

	constructor() {
		super("auth");

		this.authService = new FirebaseAuthentication();
	}

	async authenticate(email: string, password: string) {
		return this.authService.authenticate(email, password);
	}

	async verifyToken(token: string) {
		return this.authService.verifyToken(token);
	}
}
