import jwt from "jsonwebtoken";
import { Service } from "../../classes/Service";
import { DomainToken } from "../../classes/DomainToken";
import { CreateOneDomainTokenDto } from "./dto";

export class DomainTokenService extends Service {
	constructor() {
		super("domainTokens");
	}

	async createOne(data: CreateOneDomainTokenDto) {
		const id = this.noSqlDb.generateId();

		const token = this.signToken({ id, domain: data.domain });

		const domainToken = new DomainToken(id, data.createdBy, data.domain, token);

		await this.noSqlDb.saveData(`${this.collection}/${id}`, domainToken);

		return domainToken;
	}

	async getOneByToken(token: string) {
		const result = await this.noSqlDb.getMany<keyof DomainToken, DomainToken>(this.collection, {
			equals: {
				field: "token",
				value: token,
			},
		});

		if (result.length === 0) {
			return null;
		}

		const foundDomainToken = result[0];

		return new DomainToken(
			foundDomainToken.id,
			foundDomainToken.createdBy,
			foundDomainToken.domain,
			foundDomainToken.token,
			foundDomainToken.createdAt
		);
	}

	private signToken(payload?: { [key: string]: any }): string {
		return jwt.sign(payload || {}, process.env.JWT_SECRET || "");
	}
}
