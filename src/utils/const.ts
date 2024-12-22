import { Icons } from "@/components/icon";

export const githubAvatarURL = "/yassine-benaid.jpg";
export const getcataIcon = "/cata.svg";

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

type Experience = {
  title: string;
  date: {
    from: string;
    to: string;
  };
  company: {
    name: string;
    href: string;
  };
  // icon: Icons;
};

export const experiences: Experience[] = [
  {
    title: "Backend Engineer",
    date: {
      from: "03/2024",
      to: "present",
    },
    company: {
      name: "TijarTech",
      href: "https://www.tijartech.ma",
    },
  },
  {
    title: "Linux SysAdmin",
    date: {
      from: "10/2023",
      to: "03/2024",
    },
    company: {
      name: "CATA",
      href: "https://www.getcata.com",
    },
  },
  {
    title: "Software Engineer",
    date: {
      from: "01/2023",
      to: "03/2024",
    },
    company: {
      name: "CATA",
      href: "https://www.getcata.com",
    },
  },
];

export const skills: string[] = [
  "PHP",
  "GO",
  "Javascript",
  "Laravel",
  "VueJs",
  "Linux",
  "Docker",
  "Mysql",
  "Postgres",
  "Git",
  "HTML",
  "Tailwind CSS",
  "DevOps",
  "Language Development",
];
