import type { Profile } from "./types";

export const profile: Profile = {
  name: "Yassine Benaid",
  firstName: "Yassine",
  initials: "YB",
  // Your site's public address (e.g. "https://yassinebenaid.com"). Makes links in search/AI metadata absolute.
  siteUrl: "https://yassine.benaid.me",
  role: "Senior Software Engineer",
  focus: ["compilers", "developer tools", "CLI tools", "Go libraries"],
  bio: "Software engineer with a strong interest in Go, Unix and programming language tooling. I enjoy building fast, reliable tools that other developers rely on.",
  location: "Morocco",
  // Leave empty to hide the email line in the footer.
  email: "",
  avatar: "https://avatars.githubusercontent.com/u/101285507?v=4",
  yearsOfExperience: 4,
  // Optional link to a CV / resume PDF. Shows a "Resume" button when set.
  resumeUrl: "",
};
