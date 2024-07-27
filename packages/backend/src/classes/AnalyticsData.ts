import { IDefaultDocument } from "../interfaces/IDefaultDocument";

type Device = "desktop" | "android" | "ios";

export class AnalyticsData implements IDefaultDocument {
	id: string;
	os: string;
	domain: string;
	createdAt: number;
	themeChanges: number;
	device: Device;

	constructor(
		id: string,
		os: string,
		domain: string,
		themeChanges: number,
		device: Device,
		createdAt?: number
	) {
		this.id = id;
		this.os = os;
		this.domain = domain;
		this.device = device;
		this.themeChanges = themeChanges;
		this.createdAt = createdAt ?? new Date().getTime();
	}
}
