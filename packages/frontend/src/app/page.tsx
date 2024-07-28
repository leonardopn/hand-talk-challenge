import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { UserProfile } from "@/components/UserProfile";

export default function Home() {
	return (
		<main className="gap-sm flex flex-col min-h-screen">
			<header>
				<TopBar />
			</header>
			<section>
				<UserProfile />
			</section>
			<Footer />
		</main>
	);
}
