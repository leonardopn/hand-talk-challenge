import { cleanup, render, screen } from "@testing-library/react";
import { TopBar } from "./index";

describe("TopBar Component", () => {
	beforeEach(() => {
		render(<TopBar />);
	});

	afterEach(() => {
		cleanup(); // Limpa o DOM
	});

	test("renders the ResponsiveLogo component", () => {
		// Verifica se o componente ResponsiveLogo está presente
		const logo = screen.getByAltText("Hand talk logo");
		expect(logo).toBeInTheDocument();
	});

	test("renders the ThemeModeToggle component", () => {
		// Verifica se o componente ThemeModeToggle está presente
		const themeToggle = screen.getByRole("button", {
			name: /Botão para alternar entre tema claro e escuro/i,
		});
		expect(themeToggle).toBeInTheDocument();
	});

	test("renders the LateralMenuDrawer component", () => {
		// Verifica se o componente LateralMenuDrawer está presente
		const drawerButton = screen.getByLabelText(/Botão para abrir a gaveta com links/i);
		expect(drawerButton).toBeInTheDocument();
	});

	test("renders the correct link for the logo", () => {
		// Verifica se o link para a logo está correto
		const logoLink = screen.getByRole("link", { name: /Hand Talk/i });
		expect(logoLink).toHaveAttribute("href", "https://www.handtalk.me");
	});

	test("TopBar has the correct CSS classes", () => {
		// Verifica se a classe CSS do TopBar está aplicada corretamente
		const topBar = screen.getByTestId("top-bar"); // "banner" role can be used to identify the TopBar
		expect(topBar).toHaveClass("bg-brand-secondary-main");
		expect(topBar).toHaveClass("p-nano");
		expect(topBar).toHaveClass("flex");
		expect(topBar).toHaveClass("w-full");
		expect(topBar).toHaveClass("items-center");
		expect(topBar).toHaveClass("justify-between");
		expect(topBar).toHaveClass("h-16");
		expect(topBar).toHaveClass("shadow-level1");
		expect(topBar).toHaveClass("dark:bg-highlight-primary-main");
	});
});
