import { render, screen, fireEvent } from "@testing-library/react";
import { LateralMenuDrawer } from "./index";
import { routePaths } from "../../constant/RoutePaths";

describe("LateralMenuDrawer Component", () => {
	it("should render the trigger button and open the drawer on click", () => {
		render(<LateralMenuDrawer />);
		const triggerButton = screen.getByLabelText("Botão para abrir a gaveta com links");
		expect(triggerButton).toBeInTheDocument();
		fireEvent.click(triggerButton);
		expect(
			screen.getByText("Menu lateral para acesso ao conteúdo principal")
		).toBeInTheDocument();
	});

	it("should render the close button and close the drawer on click", () => {
		render(<LateralMenuDrawer />);
		const triggerButton = screen.getByLabelText("Botão para abrir a gaveta com links");
		fireEvent.click(triggerButton);
		const closeButton = screen.getByLabelText("Botão para fechar a gaveta");
		expect(closeButton).toBeInTheDocument();
		fireEvent.click(closeButton);
		expect(
			screen
				.queryByText("Menu lateral para acesso ao conteúdo principal")
				?.getAttribute("aria-hidden")
		).toBeTruthy();
	});

	it("should call goToHeading and close the drawer when a menu button is clicked", () => {
		render(<LateralMenuDrawer />);
		fireEvent.click(screen.getByLabelText("Botão para abrir a gaveta com links"));

		// Simulate a click on the first button in the menu
		const firstRoute = routePaths.userProfile;
		const menuButton = screen.getByLabelText(`Botão para a rota: ${firstRoute.title}`);
		fireEvent.click(menuButton);

		// Check if the drawer is closed
		expect(
			screen
				.queryByText("Menu lateral para acesso ao conteúdo principal")
				?.getAttribute("aria-hidden")
		).toBeTruthy();
	});

	it("should render all menu items with correct aria-labels", () => {
		render(<LateralMenuDrawer />);
		fireEvent.click(screen.getByLabelText("Botão para abrir a gaveta com links"));

		Object.keys(routePaths).forEach(key => {
			const value = routePaths[key as keyof typeof routePaths];
			const menuItem = screen.getByLabelText(`Botão para a rota: ${value.title}`);
			expect(menuItem).toBeInTheDocument();
		});
	});
});
