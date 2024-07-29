import { render, screen } from "@testing-library/react";
import { UserProjects } from "./index";

// Mock do routePaths
jest.mock("@/constant/RoutePaths", () => ({
	routePaths: {
		userProjects: {
			path: "user-projects",
			title: "Projetos",
		},
	},
}));

describe("UserProjects Component", () => {
	test("should render without crashing", () => {
		render(<UserProjects />);
		expect(screen.getByText("Projetos")).toBeInTheDocument();
	});

	test("should display all projects with images, names, and descriptions", () => {
		render(<UserProjects />);

		// Verificar se todos os projetos são exibidos
		const projects = [
			"Sistema de Trade Marketing",
			"App de Inventário Mobile",
			"Plataforma de E-commerce",
			"Aplicativo de Chat em Tempo Real",
		];

		projects.forEach(name => {
			expect(screen.getByText(name)).toBeInTheDocument();
		});

		// Verificar imagens dos projetos
		const projectImages = screen.getAllByRole("img");
		expect(projectImages).toHaveLength(projects.length);
		projectImages.forEach(img => {
			expect(img).toHaveAttribute("alt");
		});
	});

	test("should render 'Ver todos os projetos' button with correct link", () => {
		render(<UserProjects />);

		const allProjectsButton = screen.getByRole("link", { name: /Ver todos os projetos/i });
		expect(allProjectsButton).toBeInTheDocument();
		expect(allProjectsButton).toHaveAttribute("href", "https://www.leonardopetta.dev/projects");
	});
});
