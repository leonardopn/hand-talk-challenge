import { IDefaultDocument } from "../interfaces/IDefaultDocument";

export class DomainToken implements IDefaultDocument {
	id: string;
	createdAt: number;
	createdBy: string;
	domain: string;
	token: string;

	constructor(id: string, createdBy: string, domain: string, token: string, createdAt?: number) {
		this.id = id;
		this.token = token;
		this.domain = domain;
		this.createdBy = createdBy;
		this.createdAt = createdAt ?? new Date().getTime();
	}
}
