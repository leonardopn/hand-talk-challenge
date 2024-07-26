import { IDefaultDocument } from "../interfaces/IDefaultDocument";

type Device = "desktop" | "android" | "ios";

export class AnalyticsData implements IDefaultDocument {
	id: string;
	os: string;
	domain: string;
	createdAt: string;
	themeChanges: number;
	device: Device;

	constructor(id: string, os: string, domain: string, themeChanges: number, device: Device) {
		this.id = id;
		this.os = os;
		this.domain = domain;
		this.device = device;
		this.themeChanges = themeChanges;
		this.createdAt = new Date().toISOString();
	}
}
