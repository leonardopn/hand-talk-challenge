import { AnalyticsPlugin } from "./classes/AnalyticsPlugin";

window.AnalyticsPlugin = {
	setConfigs: AnalyticsPlugin.setConfigs.bind(AnalyticsPlugin),
	clearConfigs: AnalyticsPlugin.clearConfigs.bind(AnalyticsPlugin),
};
