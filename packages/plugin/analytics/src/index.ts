import { AnalyticsPlugin } from "./classes/AnalyticsPlugin";
import "toastify-js/src/toastify.css";

window.AnalyticsPlugin = {
	setConfigs: AnalyticsPlugin.setConfigs.bind(AnalyticsPlugin),
	clearConfigs: AnalyticsPlugin.clearConfigs.bind(AnalyticsPlugin),
};
