import { AnalyticsData } from "../../classes/AnalyticsData";
import { Service } from "../../classes/Service";
import { CollectAnalyticDataDto } from "./dto";

export class AnalyticsService extends Service {
	constructor() {
		super("analyticsData");
	}

	async listLastTwentyByDomain(domain: string) {
		const result = await this.noSqlDb.getMany<keyof AnalyticsData, AnalyticsData>(
			this.collection,
			{
				equals: {
					field: "domain",
					value: domain,
				},
			},
			{
				field: "createdAt",
				direction: "desc",
			},
			{ direction: "end", value: 20 }
		);

		return result.map(
			data =>
				new AnalyticsData(
					data.id,
					data.os,
					data.domain,
					data.themeChanges,
					data.device,
					data.createdAt
				)
		);
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
