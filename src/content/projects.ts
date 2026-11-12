import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Bunster",
    emoji: "🐚",
    description: "Compiles shell scripts into static, self-contained binaries. Thousands of stars on GitHub.",
    tech: ["Go", "Compilers", "Shell"],
    liveUrl: "https://bunster.netlify.app",
    repoUrl: "https://github.com/yassinebenaid/bunster",
  },
  {
    title: "godump",
    emoji: "🔍",
    description: "Dump any Go variable with ease: a pretty, readable printer for debugging Go programs.",
    tech: ["Go", "Debugging"],
    repoUrl: "https://github.com/yassinebenaid/godump",
  },
  {
    title: "Nishimia",
    emoji: "🧠",
    description: "An interpreted, dynamically typed programming language written from scratch.",
    tech: ["Go", "Interpreters"],
    repoUrl: "https://github.com/yassinebenaid/nishimia",
  },
  {
    title: "Prompts",
    emoji: "⌨️",
    description: "Build intuitive, interactive command-line prompts with ease.",
    tech: ["Go", "CLI"],
    repoUrl: "https://github.com/yassinebenaid/prompts",
  },
];
