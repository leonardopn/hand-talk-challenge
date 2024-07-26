import { AnalyticsData } from "../../classes/AnalyticsData";
import { Service } from "../../classes/Service";
import { CollectAnalyticDataDto } from "./dto";

export class AnalyticsService extends Service {
	constructor() {
		super("analyticsData");
	}

	list() {
		// TODO: implement analytics list
	}

	async createOne(data: CollectAnalyticDataDto) {
		const id = this.noSqlDb.generateId();

		const analyticData = new AnalyticsData(
			id,
			data.os,
			data.domain,
			data.themeChanges,
			data.device
		);

		await this.noSqlDb.saveData(`${this.collection}/${id}`, analyticData);

		return analyticData;
	}
}
