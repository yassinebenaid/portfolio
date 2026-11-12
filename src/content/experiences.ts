import type { Experience } from "./types";

// Most recent first.
export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Journify",
    companyUrl: "https://journify.io/",
    period: "Aug 2026 — Present",
    current: true,
    summary:
      "Promoted to a senior role with more responsibility, building the infrastructure behind our campaign attribution products.",
    highlights: [
      "Own infrastructure for the campaign attribution products",
      "Carry a wider share of design and delivery on the backend team",
    ],
    tech: ["Go", "gRPC", "Protobuf", "Bigtable", "BigQuery", "GCP"],
  },
  {
    role: "Associate Software Engineer",
    company: "Journify",
    companyUrl: "https://journify.io/",
    period: "Oct 2025 — Aug 2026",
    summary:
      "Part of the team building our signal quality infrastructure. Primarily backend, but I also contribute to automations and the frontend.",
    highlights: [
      "Built parts of the signal quality infrastructure",
      "Contributed across backend, automations and frontend",
    ],
    tech: [
      "Go",
      "Protobuf",
      "gRPC",
      "Microservices",
      "Docker",
      "Bigtable",
      "BigQuery",
      "GCP",
      "React",
      "Astro",
    ],
  },
  {
    role: "Software Engineer",
    company: "TijarTech",
    companyUrl: "https://tijartech.ma/",
    period: "Mar 2024 — Oct 2025",
    summary:
      "Part of the team building and maintaining our van-sales management SaaS product, across both frontend and backend.",
    highlights: [
      "Worked on frontend and backend of the van-sales management SaaS",
      "Handled ongoing maintenance of the product",
    ],
    tech: ["PHP", "Laravel", "Inertia.js", "Vue.js", "Ansible", "AWS", "Docker"],
  },
  {
    role: "Software Engineer",
    company: "Cata",
    companyUrl: "https://www.linkedin.com/company/getcata/posts/",
    period: "Feb 2023 — Mar 2024",
    summary:
      "Responsible for building the frontend and backend of our ecommerce platform, plus its deployment and maintenance, along with internal data pipelines and automation scripts.",
    highlights: [
      "Built the ecommerce platform's frontend and backend",
      "Owned deployment and maintenance",
      "Wrote internal data pipelines and automation scripts",
    ],
    tech: ["PHP", "Go", "Laravel", "Inertia.js", "Vue.js", "Ansible", "AWS", "Docker"],
  },
];
