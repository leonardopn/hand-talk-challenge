import { render, screen } from "@testing-library/react";
import { ResponsiveLogo } from "./index";
import { getImageProps } from "next/image";

jest.mock("next/image", () => ({
	__esModule: true,
	default: (props: any) => <img {...props} />,
	getImageProps: jest.fn(),
}));

describe("ResponsiveLogo Component", () => {
	beforeEach(() => {
		(getImageProps as jest.Mock)
			.mockReturnValueOnce({
				props: {
					src: "/img/logo-icon.svg",
					alt: "Hand talk logo",
					width: 20,
					height: 20,
					className: "w-10 sm:w-40",
				},
			})
			.mockReturnValueOnce({
				props: {
					src: "/img/logo-full.svg",
					alt: "Hand talk logo",
					width: 20,
					height: 20,
					className: "w-10 sm:w-40",
				},
			});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("renders the correct source for small screens", () => {
		render(<ResponsiveLogo />);
		const imgElement = screen.getByRole("img");
		expect(imgElement).toHaveAttribute("src", "/img/logo-icon.svg");
		expect(imgElement).toHaveAttribute("alt", "Hand talk logo");
	});

	test("renders the correct sourceSet for larger screens", () => {
		render(<ResponsiveLogo />);
		const iconSource = screen.getByTestId("logo-icon");
		const fullSource = screen.getByTestId("logo-full");

		expect(iconSource).toHaveAttribute("media", "(max-width: 640px)");
		expect(iconSource).toHaveAttribute("srcSet", "/img/logo-icon.svg");

		expect(fullSource).toHaveAttribute("media", "(min-width: 640px)");
		expect(fullSource).toHaveAttribute("srcSet", "/img/logo-full.svg");
	});

	test("has the correct class names applied", () => {
		render(<ResponsiveLogo />);
		const imgElement = screen.getByRole("img");
		expect(imgElement).toHaveClass("w-10 sm:w-40");
	});
});
