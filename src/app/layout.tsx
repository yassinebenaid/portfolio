import Footer from "@/components/footer";
import { githubAvatarURL } from "@/utils/const";
import "../styles/globals.css";

export const metadata = {
	title: "Yassine Benaid",
	description:
		"Software Engineer by day, keyboard builder by night, and coffee\
 connoisseur all the time. Proud dad to a dog and cat who don't\
 care about my React skills.",
	openGraph: {
		type: "website",
		images: [{ url: githubAvatarURL }],
	},
	twitter: {
		images: [{ url: githubAvatarURL }],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en" className="min-h-screen">
			<body className="relative bg-zinc-900 text-zinc-50 p-4 min-h-screen flex flex-col selection:bg-zinc-600/25">
				{children}

				<Footer />
			</body>
		</html>
	);
}
