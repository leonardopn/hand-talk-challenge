import { AnalyticPluginScript } from "@/components/Plugins/AnalyticPluginScript";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import { ThemeProvider } from "@/providers/NextThemeProvider";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
	title: "Hand Talk Blog",
	description:
		"Blog sobre a empresa Hand Talk e todas as novidades no mundo do desenvolvimento com acessibilidade.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={twMerge(lato.className, "bg-brand-primary-main")}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{children}
					<AnalyticPluginScript />
				</ThemeProvider>
			</body>
		</html>
	);
}
