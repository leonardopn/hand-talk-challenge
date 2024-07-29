import { render, screen, waitFor } from "@testing-library/react";
import { AnalyticPluginScript } from "./index";

describe("AnalyticPluginScript Component", () => {
	it("should render the Script component with correct src and strategy", () => {
		render(<AnalyticPluginScript />);
		const script = screen.getByLabelText("Script para carregar o plugin de analitica");
		expect(script).toBeInTheDocument();
		expect(script).toHaveAttribute("src", "/plugins/pluginAnalytics/index.js");
		expect(script).toHaveAttribute("data-nscript", "afterInteractive");
	});
});
