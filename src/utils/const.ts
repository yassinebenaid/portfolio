import { Icons } from "@/components/icon";

export const githubAvatarURL = "https://github.com/zachbharris.png";

export type Space = {
  title: string;
  icon: Icons;
  href: string;
  handle?: string;
}

export const spaces: Space[] = [
  {
    title: "GitHub",
    icon: "github",
    href: "https://github.com/zachbharris",
    handle: "@zachbharris",
  },
  {
    title: "Twitter",
    icon: "twitter",
    href: "https://twitter.com/zachbharris",
    handle: "@zachbharris",
  },
  {
    title: "Read.cv",
    icon: "readcv",
    href: "https://read.cv/zachbharris",
    handle: "/zachbharris",
  },
  {
    title: "LinkedIn",
    icon: "linkedin",
    href: "https://linkedin.com/in/zachbharris",
    handle: "/in/zachbharris",
  },
  {
    title: "Twitch",
    icon: "twitch",
    href: "https://twitch.tv/Trobleton",
    handle: "@Trobleton",
  },
];

type Project = {
  title: string;
  description: string;
  href: string;
  icon: Icons;
}

export const projects: Project[] = [
  { title: 'Linkify', description: 'Link in bio.', href: 'https://github.com/zachbharris/Linkify', icon: 'list-tree' },
  { title: 'Shrtn', description: 'Simple url shrtnr.', href: 'https://github.com/zachbharris/Shrtn', icon: 'magic-wand' },
]