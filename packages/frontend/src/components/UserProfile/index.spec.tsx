import { render, screen, waitFor } from "@testing-library/react";
import { UserProfile } from "./index";

// Mock do routePaths
jest.mock("@/constant/RoutePaths", () => ({
	routePaths: {
		userProfile: {
			path: "user-profile",
			title: "Perfil",
		},
	},
}));

describe("UserProfile Component", () => {
	test("should render without crashing", () => {
		render(<UserProfile />);
		expect(screen.getByText("Leonardo Petta do Nascimento")).toBeInTheDocument();
	});

	test("should render 'Entre em contato' button with correct link", () => {
		render(<UserProfile />);
		const button = screen.getByRole("button", { name: /Entre em contato/i });
		expect(button).toBeInTheDocument();
		expect(button.closest("a")).toHaveAttribute("href", "https://github.com/leonardopn");
	});
});
