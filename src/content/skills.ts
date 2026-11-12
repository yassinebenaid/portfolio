import {
  siAnsible,
  siAstro,
  siDocker,
  siGit,
  siGnubash,
  siGo,
  siGooglebigquery,
  siGooglebigtable,
  siGooglecloud,
  siInertia,
  siJavascript,
  siLaravel,
  siLinux,
  siPhp,
  siReact,
  siTypescript,
  siVuedotjs,
} from "simple-icons";
import type { SkillGroup } from "./types";

// Logos come from the `simple-icons` package: import `si<Name>` and pass it as `logo`.
// Browse names at https://simpleicons.org. When a tool has no logo there, leave `logo`
// out and set `badge` (short text) and `color` instead.
export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "Go", logo: siGo },
      { name: "PHP", logo: siPhp },
      { name: "TypeScript", logo: siTypescript },
      { name: "JavaScript", logo: siJavascript },
      { name: "Bash", logo: siGnubash },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Laravel", logo: siLaravel },
      { name: "gRPC", badge: "gRPC", color: "#244C5A" },
      { name: "Protobuf", badge: "{ }", color: "#4285F4" },
      { name: "Microservices", badge: "µS", color: "#0F766E" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Vue.js", logo: siVuedotjs },
      { name: "Inertia.js", logo: siInertia },
      { name: "React", logo: siReact },
      { name: "Astro", logo: siAstro },
    ],
  },
  {
    title: "Cloud & Data",
    items: [
      { name: "Google Cloud", logo: siGooglecloud },
      { name: "AWS", badge: "AWS", color: "#FF9900" },
      { name: "BigQuery", logo: siGooglebigquery },
      { name: "Bigtable", logo: siGooglebigtable },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Docker", logo: siDocker },
      { name: "Ansible", logo: siAnsible },
      { name: "Git", logo: siGit },
      { name: "Linux", logo: siLinux },
    ],
  },
];
