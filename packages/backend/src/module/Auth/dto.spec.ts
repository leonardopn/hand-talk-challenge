import { AUTHENTICATE_USER_DTO, AuthenticateUserDto } from "./dto";

describe("AUTHENTICATE_USER_DTO", () => {
	it("should validate a correct DTO", () => {
		const data: AuthenticateUserDto = {
			email: "user@example.com",
			password: "securepassword",
		};

		const result = AUTHENTICATE_USER_DTO.safeParse(data);

		expect(result.success).toBe(true);
		expect(result.data).toEqual(data);
	});

	it("should invalidate DTO with invalid email", () => {
		const data = {
			email: "invalid-email",
			password: "securepassword",
		};

		const result = AUTHENTICATE_USER_DTO.safeParse(data);

		expect(result.success).toBe(false);
		expect(result.error?.issues).toContainEqual(
			expect.objectContaining({ path: ["email"], message: "Invalid email" })
		);
	});

	it("should invalidate DTO with short password", () => {
		const data = {
			email: "user@example.com",
			password: "short",
		};

		const result = AUTHENTICATE_USER_DTO.safeParse(data);

		expect(result.success).toBe(false);
		expect(result.error?.issues).toContainEqual(
			expect.objectContaining({
				path: ["password"],
				message: "String must contain at least 6 character(s)",
			})
		);
	});

	it("should invalidate DTO with missing email", () => {
		const data = {
			email: "",
			password: "securepassword",
		};

		const result = AUTHENTICATE_USER_DTO.safeParse(data);

		expect(result.success).toBe(false);
		expect(result.error?.issues).toContainEqual(
			expect.objectContaining({
				path: ["email"],
				code: "too_small",
			})
		);
	});

	it("should invalidate DTO with missing password", () => {
		const data = {
			email: "user@example.com",
		};

		const result = AUTHENTICATE_USER_DTO.safeParse(data);

		expect(result.success).toBe(false);
		expect(result.error?.issues).toContainEqual(
			expect.objectContaining({ path: ["password"], code: "invalid_type" })
		);
	});
});
