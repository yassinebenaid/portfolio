import type { Social } from "./types";

export const socials: Social[] = [
  { label: "GitHub", url: "https://github.com/yassinebenaid", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/yassinebenaid", icon: "linkedin" },
  // Mail links open the visitor's mail app, so no target="_blank" is used for them.
  { label: "Email", url: "mailto:yassine@benaid.me", icon: "email" },
  { label: "Website", url: "https://yassine.benaid.me", icon: "website" },
];
