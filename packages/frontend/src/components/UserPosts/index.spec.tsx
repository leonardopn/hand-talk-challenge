import { render, screen } from "@testing-library/react";
import { UserPosts, posts } from "./index";
import { IPost } from "../../interfaces/Post";

// Mock do routePaths
jest.mock("@/constant/RoutePaths", () => ({
	routePaths: {
		userPosts: {
			path: "user-posts",
			title: "Últimas Postagens",
		},
	},
}));

// Mock do PostCard
jest.mock("../PostCard", () => ({
	PostCard: ({ post }: { post: IPost }) => (
		<div>
			<h3>{post.title}</h3>
			<p>{post.content}</p>
			<a href={post.link} target="_blank" rel="noreferrer">
				{post.title}
			</a>
			<p>{post.date}</p>
			<p>{post.readingTime}</p>
		</div>
	),
}));

describe("UserPosts Component", () => {
	test("should render without crashing", () => {
		render(<UserPosts />);
		expect(screen.getByText("Últimas Postagens")).toBeInTheDocument();
	});

	test("should render 'Ver todas as postagens' button with correct link", () => {
		render(<UserPosts />);
		const button = screen.getByText(/Ver todas as postagens/i);
		expect(button).toBeInTheDocument();
		expect(button.closest("a")).toHaveAttribute("href", "https://www.leonardopetta.dev/blog");
	});
});
