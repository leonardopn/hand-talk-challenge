import {
	CREATE_ONE_DOMAIN_TOKEN_DTO,
	DOMAIN_TOKEN_DTO,
	CreateOneDomainTokenDto,
	DomainTokenDto,
} from "./dto";

describe("DTOs", () => {
	describe("CREATE_ONE_DOMAIN_TOKEN_DTO", () => {
		it("should validate a correct DTO", () => {
			const data: CreateOneDomainTokenDto = {
				createdBy: "user123",
				domain: "example.com",
			};

			const result = CREATE_ONE_DOMAIN_TOKEN_DTO.safeParse(data);

			expect(result.success).toBe(true);
			expect(result.data).toEqual(data);
		});

		it("should invalidate DTO with missing createdBy", () => {
			const data = {
				createdBy: "",
				domain: "example.com",
			};

			const result = CREATE_ONE_DOMAIN_TOKEN_DTO.safeParse(data);

			expect(result.success).toBe(false);
			expect(result.error?.issues).toContainEqual(
				expect.objectContaining({ path: ["createdBy"], code: "too_small" })
			);
		});

		it("should invalidate DTO with missing domain", () => {
			const data = {
				createdBy: "user123",
				domain: "",
			};

			const result = CREATE_ONE_DOMAIN_TOKEN_DTO.safeParse(data);

			expect(result.success).toBe(false);
			expect(result.error?.issues).toContainEqual(
				expect.objectContaining({ path: ["domain"], code: "too_small" })
			);
		});
	});

	describe("DOMAIN_TOKEN_DTO", () => {
		it("should validate a correct DTO", () => {
			const data: DomainTokenDto = {
				id: "token123",
				domain: "example.com",
			};

			const result = DOMAIN_TOKEN_DTO.safeParse(data);

			expect(result.success).toBe(true);
			expect(result.data).toEqual(data);
		});

		it("should invalidate DTO with missing id", () => {
			const data = {
				id: "",
				domain: "example.com",
			};

			const result = DOMAIN_TOKEN_DTO.safeParse(data);

			expect(result.success).toBe(false);
			expect(result.error?.issues).toContainEqual(
				expect.objectContaining({ path: ["id"], code: "too_small" })
			);
		});

		it("should invalidate DTO with missing domain", () => {
			const data = {
				id: "token123",
				domain: "",
			};

			const result = DOMAIN_TOKEN_DTO.safeParse(data);

			expect(result.success).toBe(false);
			expect(result.error?.issues).toContainEqual(
				expect.objectContaining({ path: ["domain"], code: "too_small" })
			);
		});
	});
});
