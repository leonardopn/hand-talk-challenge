import { render, screen, fireEvent } from "@testing-library/react";
import { GoToTopButton } from "./index";

// Mock useWindowScroll to control scroll position
jest.mock("react-use", () => ({
	useWindowScroll: jest.fn(() => ({ y: 0 })),
}));

describe("GoToTopButton Component", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should not render the button when y is less than 20", () => {
		(require("react-use").useWindowScroll as jest.Mock).mockReturnValue({ y: 10 });
		render(<GoToTopButton />);
		expect(screen.queryByRole("button")).toBeNull();
	});

	it("should render the button when y is greater than or equal to 20", () => {
		(require("react-use").useWindowScroll as jest.Mock).mockReturnValue({ y: 30 });
		render(<GoToTopButton />);
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	it("should scroll to the top of the page when clicked", () => {
		(require("react-use").useWindowScroll as jest.Mock).mockReturnValue({ y: 30 });
		window.scrollTo = jest.fn(); // Mock scrollTo
		render(<GoToTopButton />);
		fireEvent.click(screen.getByRole("button"));
		expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
	});

	it("should render with aria-label 'Botão voltar para o topo'", () => {
		(require("react-use").useWindowScroll as jest.Mock).mockReturnValue({ y: 30 });
		render(<GoToTopButton />);
		expect(screen.getByLabelText("Botão voltar para o topo")).toBeInTheDocument();
	});

	it("should apply correct styles and props to Button", () => {
		(require("react-use").useWindowScroll as jest.Mock).mockReturnValue({ y: 30 });
		render(<GoToTopButton />);
		const button = screen.getByRole("button");
		expect(button).toHaveClass("fixed bottom-3 right-3 px-2 py-2 animate-in fade-in");
		expect(button).toHaveAttribute("aria-label", "Botão voltar para o topo");
	});
});
