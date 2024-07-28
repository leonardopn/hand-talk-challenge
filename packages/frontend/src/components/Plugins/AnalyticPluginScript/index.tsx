"use client";

import Script from "next/script";

export function AnalyticPluginScript() {
	return (
		<Script
			src={"/plugins/pluginAnalytics/index.js"}
			strategy="afterInteractive"
			onLoad={() => {
				window.AnalyticsPlugin.setConfigs(
					process.env.NEXT_PUBLIC_ANALYTICS_PLUGIN_TOKEN || "",
					() => {
						//TODO: Implementar a função que coleta a quantidade de vezes que o tema foi trocado
						return 0;
					}
				);
			}}
		/>
	);
}
