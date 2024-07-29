import { useThemeChangeCounterContext } from "@/contexts/ThemeChangeCounterContext";
import { render, screen, waitFor } from "@testing-library/react";
import { useTheme } from "next-themes";
import { ThemeModeToggle } from "./index";

// Mocking next-themes and ThemeChangeCounterContext
jest.mock("next-themes", () => ({
	useTheme: jest.fn(),
}));

jest.mock("@/contexts/ThemeChangeCounterContext", () => ({
	useThemeChangeCounterContext: jest.fn(),
}));

describe("ThemeModeToggle", () => {
	const mockSetTheme = jest.fn();
	const mockSetThemeChangeCounter = jest.fn();

	beforeEach(() => {
		(useTheme as jest.Mock).mockReturnValue({
			setTheme: mockSetTheme,
			themes: ["light", "dark", "system"],
			theme: "system",
		});

		(useThemeChangeCounterContext as jest.Mock).mockReturnValue({
			setThemeChangeCounter: mockSetThemeChangeCounter,
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("displays correct icon based on theme", async () => {
		// Testa para tema 'light'
		(useTheme as jest.Mock).mockReturnValue({
			setTheme: mockSetTheme,
			themes: ["light", "dark", "system"],
			theme: "light",
		});
		render(<ThemeModeToggle />);
		await waitFor(() => expect(screen.getByTestId("sun-icon")).toBeInTheDocument());

		// Testa para tema 'dark'
		(useTheme as jest.Mock).mockReturnValue({
			setTheme: mockSetTheme,
			themes: ["light", "dark", "system"],
			theme: "dark",
		});
		render(<ThemeModeToggle />);
		await waitFor(() => expect(screen.getByTestId("moon-icon")).toBeInTheDocument());

		// Testa para tema 'system'
		(useTheme as jest.Mock).mockReturnValue({
			setTheme: mockSetTheme,
			themes: ["light", "dark", "system"],
			theme: "system",
		});
		render(<ThemeModeToggle />);
		await waitFor(() => expect(screen.getByTestId("sun-moon-icon")).toBeInTheDocument());
	});
});
