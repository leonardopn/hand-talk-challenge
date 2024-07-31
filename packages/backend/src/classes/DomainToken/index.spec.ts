import dayjs from "dayjs";
import { DomainToken } from "./index"; // Ajuste o caminho conforme necessário

describe("DomainToken", () => {
	let domainToken: DomainToken;

	beforeEach(() => {
		domainToken = new DomainToken("1", "testUser", "testDomain", "testToken");
	});

	test("should create a new DomainToken with default values", () => {
		expect(domainToken.id).toBe("1");
		expect(domainToken.createdBy).toBe("testUser");
		expect(domainToken.domain).toBe("testDomain");
		expect(domainToken.token).toBe("testToken");
		expect(domainToken.createdAt).toBeLessThanOrEqual(new Date().getTime());

		expect(domainToken.rateLimit.limit).toBe(5);
		expect(domainToken.rateLimit.remaining).toBe(5);
		expect(dayjs(domainToken.rateLimit.resetAt).isAfter(dayjs())).toBe(true);
	});

	test("should correctly recalculate rate limit when limit is not exceeded", () => {
		const initialRemaining = domainToken.rateLimit.remaining;
		domainToken.isAllowedToRequest();

		expect(domainToken.rateLimit.remaining).toBe(initialRemaining - 1);
	});

	test("should correctly recalculate rate limit when limit is exceeded", () => {
		// Ajuste o rate limit para simular o limite excedido
		domainToken.rateLimit.remaining = 0;
		domainToken.rateLimit.resetAt = dayjs().subtract(1, "minute").toISOString();

		domainToken.isAllowedToRequest();

		expect(domainToken.rateLimit.remaining).toBe(domainToken.rateLimit.limit - 1);
		expect(dayjs(domainToken.rateLimit.resetAt).isAfter(dayjs())).toBe(true);
	});

	test("should return true when allowed to request", () => {
		domainToken.rateLimit.remaining = 1;

		const isAllowed = domainToken.isAllowedToRequest();

		expect(isAllowed).toBe(true);
	});

	test("should return false when not allowed to request", () => {
		domainToken.rateLimit.remaining = 0;
		domainToken.rateLimit.resetAt = dayjs().add(1, "minute").toISOString();

		const isAllowed = domainToken.isAllowedToRequest();

		expect(isAllowed).toBe(false);
	});
});
