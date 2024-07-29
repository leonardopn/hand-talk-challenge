import { render } from "@testing-library/react";
import { Card } from "./index";

describe("Card Component", () => {
	it("should render without crashing", () => {
		const { container } = render(<Card>Test</Card>);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("should render children correctly", () => {
		const { getByText } = render(
			<Card>
				<p>Child Content</p>
			</Card>
		);
		expect(getByText("Child Content")).toBeInTheDocument();
	});

	it("should apply custom classes", () => {
		const { container } = render(<Card className="custom-class">Test</Card>);
		expect(container.firstChild).toHaveClass("custom-class");
	});

	it("should apply default classes", () => {
		const { container } = render(<Card>Test</Card>);
		expect(container.firstChild).toHaveClass(
			"gap-xs flex flex-col bg-neutral-high-lightest dark:bg-brand-primary-dark shadow-level1 p-xxxs h-fit lg:rounded-sm"
		);
	});

	it("should pass additional props to the div", () => {
		const { container } = render(
			<Card data-testid="card" id="card-id">
				Test
			</Card>
		);
		const card = container.firstChild;
		expect(card).toHaveAttribute("data-testid", "card");
		expect(card).toHaveAttribute("id", "card-id");
	});
});
