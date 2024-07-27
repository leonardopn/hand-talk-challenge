import dayjs from "dayjs";
import { IDefaultDocument } from "../interfaces/IDefaultDocument";

export class DomainToken implements IDefaultDocument {
	id: string;
	createdAt: number;
	createdBy: string;
	domain: string;
	token: string;

	rateLimit: RateLimit;

	constructor(
		id: string,
		createdBy: string,
		domain: string,
		token: string,
		rateLimit?: RateLimit,
		createdAt?: number
	) {
		this.id = id;
		this.token = token;
		this.domain = domain;
		this.createdBy = createdBy;
		this.createdAt = createdAt ?? new Date().getTime();
		this.rateLimit = rateLimit ?? {
			limit: 5,
			remaining: 5,
			resetAt: dayjs().add(10, "minutes").toISOString(),
		};
	}

	private recalculateRateLimit() {
		const now = dayjs();
		const resetAt = dayjs(this.rateLimit.resetAt);

		if (now.isAfter(resetAt)) {
			this.rateLimit.remaining = this.rateLimit.limit - 1;
			this.rateLimit.resetAt = now.add(10, "minutes").toISOString();
		} else {
			this.rateLimit.remaining = this.rateLimit.remaining - 1;
		}
	}

	isAllowedToRequest() {
		this.recalculateRateLimit();

		return this.rateLimit.remaining >= 0;
	}
}

type RateLimit = { limit: number; remaining: number; resetAt: string };
