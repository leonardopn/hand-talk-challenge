import Toastify from "toastify-js";
import { SendAnalyticDataButton } from "../components/SendAnalyticDataButton";
import { ApiService } from "../service/api";
import { AnalyticsCollector } from "./AnalyticsCollector";

export class AnalyticsPlugin {
	private static token: string;
	private static button: SendAnalyticDataButton;
	private static isConfigured = false;
	private static analyticsCollector: AnalyticsCollector;

	static setConfigs(token: string, getThemeChangeCount: () => number) {
		if (this.isConfigured) {
			return;
		}

		this.token = token;

		this.analyticsCollector = new AnalyticsCollector(getThemeChangeCount);

		this.button = new SendAnalyticDataButton(this.sendData.bind(this));

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
			this.button.toggleLoading();

			const apiService = new ApiService(this.token);

			const collectedData = this.analyticsCollector.collectAnalyticsData();

			await apiService.sendData(collectedData);

			Toastify({
				text: "Dados coletados com sucesso!",
				style: {
					background: "#20C6AD",
					borderRadius: "5px",
				},
			}).showToast();
		} catch (error) {
			console.error(error);

			const errorMessage =
				error instanceof Error
					? error.message
					: "Falha ao enviar dados, tente novamente mais tarde.";

			Toastify({
				text: errorMessage,
				style: {
					background: "#FF4D4D",
					borderRadius: "5px",
				},
			}).showToast();
		} finally {
			this.button.toggleLoading();
		}
	}
}
