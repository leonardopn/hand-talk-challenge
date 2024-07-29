import { render, screen } from "@testing-library/react";
import { PostCard } from "./index";
import { IPost } from "@/interfaces/Post";

// Mock para o post
const mockPost: IPost = {
	id: 1,
	title: "Test Post",
	content: "This is a test content",
	date: "2024-07-28",
	readingTime: "5 min read",
	link: "https://example.com/post",
};

describe("PostCard Component", () => {
	test("renders post title", () => {
		render(<PostCard post={mockPost} />);
		const titleElement = screen.getByText(mockPost.title);
		expect(titleElement).toBeInTheDocument();
	});

	test("renders post content", () => {
		render(<PostCard post={mockPost} />);
		const contentElement = screen.getByText(mockPost.content);
		expect(contentElement).toBeInTheDocument();
	});

	test("renders post date", () => {
		render(<PostCard post={mockPost} />);
		const dateElement = screen.getByText(mockPost.date);
		expect(dateElement).toBeInTheDocument();
	});

	test("renders post reading time", () => {
		render(<PostCard post={mockPost} />);
		const readingTimeElement = screen.getByText(mockPost.readingTime);
		expect(readingTimeElement).toBeInTheDocument();
	});

	test("renders post link with correct attributes", () => {
		render(<PostCard post={mockPost} />);
		const linkElement = screen.getByRole("link");
		expect(linkElement).toHaveAttribute("href", mockPost.link);
		expect(linkElement).toHaveAttribute("target", "_blank");
		expect(linkElement).toHaveAttribute("rel", "noreferrer");
	});

	test("renders Calendar icon", () => {
		render(<PostCard post={mockPost} />);
		const calendarIcon = screen.getByLabelText("Ícone de calendário");
		expect(calendarIcon).toBeInTheDocument();
	});

	test("renders Clock icon", () => {
		render(<PostCard post={mockPost} />);
		const clockIcon = screen.getByLabelText("Ícone de relógio");
		expect(clockIcon).toBeInTheDocument();
	});
});
