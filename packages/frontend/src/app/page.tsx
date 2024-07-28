import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { UserAbout } from "@/components/UserAbout";
import { UserPosts } from "@/components/UserPosts";
import { UserProfile } from "@/components/UserProfile";
import { UserProjects } from "@/components/UserProjects";

export default function Home() {
	return (
		<main className="gap-sm flex flex-col min-h-screen">
			<header className="fixed top-0 w-full">
				<TopBar />
			</header>
			<section className="flex flex-col gap-sm mt-24">
				<UserProfile />
				<UserAbout />
				<UserProjects />
				<UserPosts />
			</section>
			<Footer />
		</main>
	);
}
