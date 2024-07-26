import { ApiModule } from "../Api";

export class AppModule {
	apiModule: ApiModule;

	constructor() {
		this.apiModule = new ApiModule();
	}

	start(): void {
		this.apiModule.startApi();
	}
}
