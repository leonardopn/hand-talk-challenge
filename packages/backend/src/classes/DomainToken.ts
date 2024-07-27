import { IDefaultDocument } from "../interfaces/IDefaultDocument";

export class DomainToken implements IDefaultDocument {
	id: string;
	createdAt: string;
	createdBy: string;
	domain: string;
	token: string;

	constructor(id: string, createdBy: string, domain: string, token: string) {
		this.id = id;
		this.token = token;
		this.domain = domain;
		this.createdBy = createdBy;
		this.createdAt = new Date().toISOString();
	}
}
