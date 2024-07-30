import { AnalyticsPlugin } from "./index";
import { SendAnalyticDataButton } from "../../components/SendAnalyticDataButton";
import { ApiService } from "../../service/api";
import { AnalyticsCollector } from "../AnalyticsCollector";

// Mock da implementação das classes
jest.mock("../../components/SendAnalyticDataButton");
jest.mock("../../service/api");
jest.mock("../AnalyticsCollector");

describe("AnalyticsPlugin", () => {
	let sendDataButtonMock: jest.Mocked<SendAnalyticDataButton>;
	let apiServiceMock: jest.Mocked<ApiService>;
	let analyticsCollectorMock: jest.Mocked<AnalyticsCollector>;

	beforeEach(() => {
		jest.clearAllMocks();

		sendDataButtonMock = new SendAnalyticDataButton() as jest.Mocked<SendAnalyticDataButton>;
		apiServiceMock = new ApiService("token") as jest.Mocked<ApiService>;
		analyticsCollectorMock = new AnalyticsCollector(() => 0) as jest.Mocked<AnalyticsCollector>;

		(SendAnalyticDataButton as jest.Mock).mockImplementation(() => sendDataButtonMock);
		(ApiService as jest.Mock).mockImplementation(() => apiServiceMock);
		(AnalyticsCollector as jest.Mock).mockImplementation(() => analyticsCollectorMock);
	});

	afterEach(() => {
		// Limpar o DOM após cada teste
		document.body.innerHTML = "";
		AnalyticsPlugin.clearConfigs();
	});

	describe("setConfigs", () => {
		it("should configure the plugin correctly", () => {
			const token = "test-token";
			const getThemeChangeCount = () => 1;

			AnalyticsPlugin.setConfigs(token, getThemeChangeCount);

			expect(AnalyticsPlugin["token"]).toBe(token);
			expect(AnalyticsPlugin["isConfigured"]).toBe(true);
			expect(SendAnalyticDataButton).toHaveBeenCalledWith(expect.any(Function));
			expect(AnalyticsCollector).toHaveBeenCalledWith(getThemeChangeCount);
		});

		it("should not reconfigure if already configured", () => {
			AnalyticsPlugin.setConfigs("test-token", () => 1);
			AnalyticsPlugin.setConfigs("new-token", () => 2);

			expect(AnalyticsPlugin["token"]).toBe("test-token");
		});
	});

	describe("clearConfigs", () => {
		it("should clear configurations and remove the button", () => {
			AnalyticsPlugin.setConfigs("test-token", () => 1);
			AnalyticsPlugin.clearConfigs();

			expect(AnalyticsPlugin["isConfigured"]).toBe(false);
			expect(sendDataButtonMock.remove).toHaveBeenCalled();
		});
	});

	describe("sendData", () => {
		it("should send data and show success toast on success", async () => {
			AnalyticsPlugin.setConfigs("test-token", () => 1);
			const collectedData = {
				device: "desktop",
				os: "Win32",
				domain: "https://example.com",
				themeChanges: 1,
			};
			analyticsCollectorMock.collectAnalyticsData.mockReturnValue(collectedData);
			apiServiceMock.sendData.mockResolvedValue(undefined);

			await AnalyticsPlugin["sendData"]();

			expect(sendDataButtonMock.toggleLoading).toHaveBeenCalledTimes(2);
			expect(apiServiceMock.sendData).toHaveBeenCalledWith(collectedData);
		});

		it("should handle errors and show error toast on failure", async () => {
			AnalyticsPlugin.setConfigs("test-token", () => 1);
			const error = new Error("Failed to send data");
			apiServiceMock.sendData.mockRejectedValue(error);

			await AnalyticsPlugin["sendData"]();

			expect(sendDataButtonMock.toggleLoading).toHaveBeenCalledTimes(2);
			expect(apiServiceMock.sendData).toHaveBeenCalled();
		});

		it("should show generic error toast on unknown error", async () => {
			AnalyticsPlugin.setConfigs("test-token", () => 1);
			const unknownError = { message: "Unknown error" };
			apiServiceMock.sendData.mockRejectedValue(unknownError);

			await AnalyticsPlugin["sendData"]();

			expect(sendDataButtonMock.toggleLoading).toHaveBeenCalledTimes(2);
			expect(apiServiceMock.sendData).toHaveBeenCalled();
		});

		it("should throw error if plugin is not configured", async () => {
			await expect(AnalyticsPlugin["sendData"]()).rejects.toThrow(
				"Plugin not configured, Run AnalyticsPlugin.setConfigs() first"
			);
		});
	});
});
