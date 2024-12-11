import Footer from "@/components/footer";
import { githubAvatarURL } from "@/utils/const";
import "../styles/globals.css";

export const metadata = {
	title: "Yassine Benaid",
	description:
		"Backend Engineer, Go enthusiast, passionate about TDD, Unix and language applications.",
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
