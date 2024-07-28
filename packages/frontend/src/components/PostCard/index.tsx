import { IPost } from "@/interfaces/Post";
import { Calendar, Clock } from "lucide-react";
import { tv } from "tailwind-variants";

interface PostCardProps {
	post: IPost;
}

export function PostCard({ post }: PostCardProps) {
	const iconClass = tv({ base: "inline size-xxs mr-1 mb-1 text-brand-secondary-main" });

	return (
		<a
			key={post.id}
			href={post.link}
			target="_blank"
			rel="noreferrer"
			className="no-underline hover:underline">
			<div className="text-justify space-y-1">
				<h3 className="font-bold">{post.title}</h3>
				<p className="text-neutral-low-medium text-xxs">{post.content}</p>
				<section className="flex items-center gap-2">
					<time className="text-neutral-low text-xxs">
						<Calendar className={iconClass()} />
						{post.date}
					</time>
					<span>
						<Clock className={iconClass()} />
						{post.readingTime}
					</span>
				</section>
			</div>
		</a>
	);
}
