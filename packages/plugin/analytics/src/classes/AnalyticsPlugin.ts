import { Button } from "../components/Button";
import { ApiService } from "../service/api";
import { AnalyticsCollector } from "./AnalyticsCollector";

export class AnalyticsPlugin {
	private static token: string;
	private static button: Button;
	private static isConfigured = false;
	private static analyticsCollector: AnalyticsCollector;

	static setConfigs(
		token: string,
		getThemeChangeCount: () => number,
		buttonStyle?: CSSStyleDeclaration
	) {
		if (this.isConfigured) {
			return;
		}

		this.token = token;

		this.analyticsCollector = new AnalyticsCollector(getThemeChangeCount);

		this.button = new Button(buttonStyle, this.sendData.bind(this));

		this.isConfigured = true;
	}

	static clearConfigs() {
		this.isConfigured = false;

		if (this.button) {
			this.button.remove();
		}
	}

	private static async sendData() {
		if (!this.isConfigured) {
			throw new Error("Plugin not configured, Run AnalyticsPlugin.setConfigs() first");
		}

		try {
			const apiService = new ApiService(this.token);

			const collectedData = this.analyticsCollector.collectAnalyticsData();

			await apiService.sendData(collectedData);
			alert("Dados enviados!");
		} catch (error) {
			console.error(error);
			alert("Erro ao enviar dados.");
		}
	}
}
