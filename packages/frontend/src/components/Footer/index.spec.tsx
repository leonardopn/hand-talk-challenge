import { render } from "@testing-library/react";
import { Footer } from "./index";

describe("Footer Component", () => {
	it("should render without crashing", () => {
		const { container } = render(<Footer />);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("should render the 'Feito com' text and Heart icon", () => {
		const { getByText, container } = render(<Footer />);
		expect(getByText(/Feito com/i)).toBeInTheDocument();
		expect(container.querySelector("svg")).toBeInTheDocument();
	});

	it("should render the link to Hand Talk's website", () => {
		const { getByText } = render(<Footer />);
		const link = getByText("Hand Talk.");
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "https://www.handtalk.me");
		expect(link).toHaveAttribute("target", "_blank");
		expect(link).toHaveAttribute("rel", "noreferrer");
	});

	it("should render the copyright text", () => {
		const { getByText } = render(<Footer />);
		expect(getByText(/Copyright 2024. Todos os direitos reservados./i)).toBeInTheDocument();
	});

	it("should apply correct classes", () => {
		const { container } = render(<Footer />);
		expect(container.firstChild).toHaveClass(
			"bg-brand-secondary-main text-brand-primary-main h-20 text-center flex flex-col justify-center shadow-level1 mt-auto dark:bg-highlight-primary-main"
		);
	});
});
