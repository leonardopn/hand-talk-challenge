import { ApiService } from "./api";

describe("ApiService", () => {
	const mockFetch = jest.fn();
	const baseUrl = process.env.API_URL || "";
	const token = "test-token";
	let apiService: ApiService;

	beforeAll(() => {
		// Set up the global fetch mock
		global.fetch = mockFetch;
	});

	beforeEach(() => {
		// Reset mocks and create a new instance of the service
		mockFetch.mockReset();
		apiService = new ApiService(token);
	});

	it("should successfully send data", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			status: 200,
			json: async () => ({}),
		});

		await expect(apiService.sendData({ key: "value" })).resolves.toBeUndefined();

		expect(mockFetch).toHaveBeenCalledWith(`${baseUrl}/analytics/collect`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ key: "value" }),
		});
	});

	it("should throw an error for a non-200 response", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 500,
			json: async () => ({ message: "Server error" }),
		});

		await expect(apiService.sendData({ key: "value" })).rejects.toThrow("Server error");
	});

	it("should throw a default error message if error message is not available", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 500,
			json: async () => ({}),
		});

		await expect(apiService.sendData({ key: "value" })).rejects.toThrow("Erro ao enviar dados");
	});
});
