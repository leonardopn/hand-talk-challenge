import {
	COLLECT_ANALYTIC_DATA_DTO,
	LIST_ANALYTIC_DATA_DTO,
	CollectAnalyticDataDto,
	ListAnalyticDataDto,
} from "./dto";

describe("COLLECT_ANALYTIC_DATA_DTO", () => {
	it("should validate a correct DTO", () => {
		const data: CollectAnalyticDataDto = {
			device: "desktop",
			os: "Windows 10",
			domain: "example.com",
			themeChanges: 3,
		};

		const result = COLLECT_ANALYTIC_DATA_DTO.safeParse(data);

		expect(result.success).toBe(true);
		expect(result.data).toEqual(data);
	});

	it("should invalidate DTO with incorrect device", () => {
		const data = {
			device: "mobile", // Invalid device type
			os: "Windows 10",
			domain: "example.com",
			themeChanges: 3,
		};

		const result = COLLECT_ANALYTIC_DATA_DTO.safeParse(data);

		expect(result.success).toBe(false);
		expect(result.error?.issues).toContainEqual(
			expect.objectContaining({ path: ["device"], code: "invalid_enum_value" })
		);
	});

	it("should invalidate DTO with empty OS", () => {
		const data = {
			device: "desktop",
			os: "", // Invalid OS
			domain: "example.com",
			themeChanges: 3,
		};

		const result = COLLECT_ANALYTIC_DATA_DTO.safeParse(data);

		expect(result.success).toBe(false);
		expect(result.error?.issues).toContainEqual(
			expect.objectContaining({ path: ["os"], code: "too_small" })
		);
	});

	it("should invalidate DTO with negative themeChanges", () => {
		const data = {
			device: "desktop",
			os: "Windows 10",
			domain: "example.com",
			themeChanges: -1, // Invalid themeChanges
		};

		const result = COLLECT_ANALYTIC_DATA_DTO.safeParse(data);

		expect(result.success).toBe(false);
		expect(result.error?.issues).toContainEqual(
			expect.objectContaining({
				path: ["themeChanges"],
				message: "Number must be greater than or equal to 0",
			})
		);
	});
});

describe("LIST_ANALYTIC_DATA_DTO", () => {
	it("should validate a correct DTO", () => {
		const data: ListAnalyticDataDto = {
			token: "valid-token",
		};

		const result = LIST_ANALYTIC_DATA_DTO.safeParse(data);

		expect(result.success).toBe(true);
		expect(result.data).toEqual(data);
	});

	it("should invalidate DTO with empty token", () => {
		const data = {
			token: "", // Invalid token
		};

		const result = LIST_ANALYTIC_DATA_DTO.safeParse(data);

		expect(result.success).toBe(false);
		expect(result.error?.issues).toContainEqual(
			expect.objectContaining({ path: ["token"], code: "too_small" })
		);
	});
});
