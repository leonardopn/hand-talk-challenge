import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { UserAbout } from "@/components/UserAbout";
import { UserProfile } from "@/components/UserProfile";
import { UserProjects } from "@/components/UserProjects";

export default function Home() {
	return (
		<main className="gap-sm flex flex-col min-h-screen">
			<header>
				<TopBar />
			</header>
			<section className="flex flex-col gap-xxs">
				<UserProfile />
				<UserAbout />
				<UserProjects />
			</section>
			<Footer />
		</main>
	);
}
