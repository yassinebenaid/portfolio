import { Icons } from "@/components/icon";

export const githubAvatarURL = "/profile-image.jpg";

export type Space = {
	title: string;
	icon: Icons;
	href: string;
	handle?: string;
};

export const spaces: Space[] = [
	{
		title: "GitHub",
		icon: "github",
		href: "https://github.com/yassinebenaid",
		handle: "@yassinebenaid",
	},
	{
		title: "Reddit",
		icon: "reddit",
		href: "https://www.reddit.com/user/yassinebenaid/",
		handle: "/yassinebenaid",
	},
	{
		title: "LinkedIn",
		icon: "linkedin",
		href: "https://linkedin.com/in/yassinebenaid",
		handle: "/in/yassinebenaid",
	},
	{
		title: "Twitter",
		icon: "twitter",
		href: "https://twitter.com/yassinebenaid",
		handle: "@yassinebenaid",
	},
];

type Project = {
	title: string;
	description: string;
	href: string;
	icon: Icons;
};

export const projects: Project[] = [
	{
		title: "godump",
		description: "Go library for variable formatting.",
		href: "https://github.com/yassinebenaid/godump",
		icon: "list-tree",
	},
	{
		title: "Bunster",
		description: "A compiler written in go.",
		href: "https://github.com/yassinebenaid/bunster",
		icon: "magic-wand",
	},
];
