import { render } from "@testing-library/react";
import { Button } from "./index";

describe("Button Component", () => {
	it("should render without crashing", () => {
		const { container } = render(<Button aria-label="Test Button">Click Me</Button>);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("should apply the primary color scheme by default", () => {
		const { container } = render(<Button aria-label="Test Button">Click Me</Button>);
		expect(container.firstChild).toHaveClass(
			"bg-brand-secondary-main hover:bg-brand-secondary-medium active:bg-brand-secondary-light focus:ring-highlight-primary-light"
		);
	});

	it("should apply the purple color scheme when specified", () => {
		const { container } = render(
			<Button colorScheme="purple" aria-label="Test Button">
				Click Me
			</Button>
		);
		expect(container.firstChild).toHaveClass(
			"bg-highlight-primary-main hover:bg-highlight-primary-medium active:bg-highlight-primary-light focus:ring-brand-secondary-light"
		);
	});

	it("should render with an aria-label", () => {
		const { getByLabelText } = render(<Button aria-label="Accessible Button">Click Me</Button>);
		expect(getByLabelText("Accessible Button")).toBeInTheDocument();
	});

	it("should pass additional props to the button element", () => {
		const { getByRole } = render(
			<Button aria-label="Test Button" disabled>
				Click Me
			</Button>
		);
		expect(getByRole("button")).toBeDisabled();
	});
});
