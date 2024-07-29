import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { UserAbout } from "@/components/UserAbout";
import { UserPosts } from "@/components/UserPosts";
import { UserProfile } from "@/components/UserProfile";
import { UserProjects } from "@/components/UserProjects";

export default function Home() {
	return (
		<main className="gap-sm flex flex-col min-h-screen">
			<header className="sticky top-0 w-full z-50">
				<TopBar />
			</header>
			<section className="grid grid-cols-1 gap-sm lg:grid-cols-2 lg:mx-sm max-w-screen-2xl justify-center self-center">
				<div className="flex flex-col gap-sm">
					<UserProfile />
					<UserAbout className="sticky top-0" />
				</div>
				<UserProjects />
				<UserPosts className="lg:col-span-2" />
			</section>
			<Footer />
		</main>
	);
}
