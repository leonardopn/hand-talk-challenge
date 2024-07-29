import { render, screen } from "@testing-library/react";
import { UserAbout } from "./index";

// Mock do routePaths
jest.mock("@/constant/RoutePaths", () => ({
	routePaths: {
		userAbout: {
			path: "user-about",
			title: "Sobre mim",
		},
	},
}));

const skills = [
	{
		category: "Front-End",
		technologies: ["React", "Next.js", "React Native", "Material-UI (MUI)"],
	},
	{
		category: "Back-End",
		technologies: ["Node.js", "Express.js"],
	},
	{
		category: "Linguagens",
		technologies: ["JavaScript", "TypeScript"],
	},
	{
		category: "Bancos de dados",
		technologies: ["MongoDB", "Firebase Firestore", "Firebase Realtime Database"],
	},
	{
		category: "Serviços em nuvem",
		technologies: ["Firebase Functions", "Firebase Authentication", "Firebase Hosting"],
	},
	{
		category: "Ferramentas de desenvolvedor",
		technologies: ["Git", "Webpack", "Babel"],
	},
	{
		category: "Outras tecnologias",
		technologies: ["RESTful APIs", "GraphQL", "Redux", "Context API"],
	},
];

describe("UserAbout Component", () => {
	test("should render without crashing", () => {
		render(<UserAbout />);
		expect(screen.getByText("Sobre mim")).toBeInTheDocument();
	});

	test("should render skills correctly", () => {
		render(<UserAbout />);
		skills.forEach(skill => {
			expect(screen.getByText(skill.category + ":")).toBeInTheDocument();
			skill.technologies.forEach(tech => {
				expect(screen.getByText(tech)).toBeInTheDocument();
			});
		});
	});

	test("should render skills section with correct structure", () => {
		render(<UserAbout />);
		const skillSection = screen.getByText("Habilidades").closest("section");
		expect(skillSection).toBeInTheDocument();
		expect(skillSection?.querySelectorAll("li")).toHaveLength(
			skills.reduce((count, skill) => count + skill.technologies.length + 1, 0)
		);
	});
});
