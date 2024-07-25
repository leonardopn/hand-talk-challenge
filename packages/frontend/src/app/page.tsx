import Script from "next/script";

export default function Home() {
	return (
		<main id="root">
			<Script src={"/plugins/pluginAnalytics/index.js"} strategy="afterInteractive" />
			<h1>oi</h1>
		</main>
	);
}
