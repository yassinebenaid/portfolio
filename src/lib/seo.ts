// Builds search-engine and AI-agent metadata from the content files, so the
// structured data and /llms.txt never drift from what the page shows.
import { experiences, profile, projects, skills, socials } from "@/content";
import type { Experience } from "@/content";

const MONTHS: Record<string, string> = {
  jan: "01", feb: "02", mar: "03", apr: "04", may: "05", jun: "06",
  jul: "07", aug: "08", sep: "09", oct: "10", nov: "11", dec: "12",
};

/** "Feb 2023" -> "2023-02"; anything unparseable (e.g. "Present") -> undefined. */
export function toIsoMonth(label: string | undefined): string | undefined {
  const m = label?.trim().match(/^([A-Za-z]{3})[a-z]*\.?\s+(\d{4})$/);
  if (!m?.[1] || !m[2]) return undefined;
  const month = MONTHS[m[1].toLowerCase()];
  return month ? `${m[2]}-${month}` : undefined;
}

export function periodRange(exp: Experience) {
  const [start, end] = exp.period.split(/\s+[—–-]\s+/);
  return { startDate: toIsoMonth(start), endDate: exp.current ? undefined : toIsoMonth(end) };
}

const siteUrl = (profile.siteUrl ?? "").replace(/\/+$/, "");
/** Absolute when `profile.siteUrl` is set, otherwise relative to the host. */
export const pageUrl = (path = "/") => `${siteUrl}${path}`;

/**
 * The address agents and search engines should reach you at: `profile.email` when
 * set, otherwise the first `mailto:` entry in the social links.
 */
export const contactEmail =
  profile.email || socials.find((s) => s.url.startsWith("mailto:"))?.url.replace(/^mailto:/, "") || "";

const current = experiences.find((e) => e.current) ?? experiences[0];
const allSkills = [...new Set(skills.flatMap((g) => g.items.map((s) => s.name)))];

export const seoTitle = `${profile.name} — ${profile.role}${current ? ` at ${current.company}` : ""}`;

export const seoDescription = [
  `${profile.name} is a ${profile.role}${current ? ` at ${current.company}` : ""}`,
  profile.location ? `, based in ${profile.location}` : "",
  `, with ${profile.yearsOfExperience}+ years building backend systems, infrastructure and developer tools`,
  allSkills.length ? ` (${allSkills.slice(0, 4).join(", ")}).` : ".",
].join("");

/** GitHub avatars accept a size parameter; ask for a share-sized square. */
export const shareImage = profile.avatar?.startsWith("https://")
  ? `${profile.avatar}${profile.avatar.includes("?") ? "&" : "?"}s=640`
  : undefined;

export function personJsonLd() {
  const personId = pageUrl("/#person");
  const orgs = new Map<string, { "@type": "Organization"; name: string; url?: string | undefined }>();
  for (const e of experiences) orgs.set(e.company, { "@type": "Organization", name: e.company, url: e.companyUrl });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": pageUrl("/#website"),
        url: pageUrl("/"),
        name: profile.name,
        description: seoDescription,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": pageUrl("/#profilepage"),
        url: pageUrl("/"),
        name: seoTitle,
        description: seoDescription,
        isPartOf: { "@id": pageUrl("/#website") },
        mainEntity: { "@id": personId },
        ...(shareImage ? { primaryImageOfPage: shareImage } : {}),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        givenName: profile.firstName,
        familyName: profile.name.replace(profile.firstName, "").trim() || undefined,
        jobTitle: profile.role,
        description: profile.bio,
        url: pageUrl("/"),
        ...(shareImage ? { image: shareImage } : {}),
        ...(contactEmail ? { email: `mailto:${contactEmail}` } : {}),
        ...(profile.location ? { address: { "@type": "PostalAddress", addressCountry: profile.location } } : {}),
        // `sameAs` is for profiles elsewhere, so mail addresses and this site's own URL are left out.
        sameAs: socials
          .filter((s) => s.url.startsWith("http") && s.url.replace(/\/+$/, "") !== pageUrl("/").replace(/\/+$/, ""))
          .map((s) => s.url),
        knowsAbout: allSkills,
        ...(current ? { worksFor: orgs.get(current.company) } : {}),
        hasOccupation: experiences.map((e) => {
          const { startDate, endDate } = periodRange(e);
          return {
            "@type": "EmployeeRole",
            roleName: e.role,
            description: e.summary,
            startDate,
            endDate,
            skills: e.tech.join(", "),
            memberOf: orgs.get(e.company),
          };
        }),
      },
      ...projects.map((p) => ({
        "@type": "SoftwareSourceCode",
        name: p.title,
        description: p.description,
        url: p.liveUrl ?? p.repoUrl,
        ...(p.repoUrl ? { codeRepository: p.repoUrl } : {}),
        keywords: p.tech.join(", "),
        author: { "@id": personId },
      })),
    ],
  };
}

/** Markdown summary served at /llms.txt (https://llmstxt.org). */
export function llmsText() {
  const lines: string[] = [];
  const push = (...l: string[]) => lines.push(...l);

  push(`# ${profile.name}`, "", `> ${seoDescription}`, "", profile.bio, "");

  push("## Profile", "");
  push(`- Name: ${profile.name}`);
  push(`- Role: ${profile.role}${current ? ` at ${current.company}` : ""}`);
  if (profile.location) push(`- Location: ${profile.location}`);
  push(`- Experience: ${profile.yearsOfExperience}+ years`);
  if (contactEmail) push(`- Email: ${contactEmail}`);
  if (profile.resumeUrl) push(`- Resume: ${profile.resumeUrl}`);
  push("");

  push("## Links", "");
  for (const s of socials) push(`- [${s.label}](${s.url})`);
  push("");

  push("## Experience", "");
  for (const e of experiences) {
    const company = e.companyUrl ? `[${e.company}](${e.companyUrl})` : e.company;
    push(`- **${e.role}, ${company}** (${e.period}): ${e.summary} Tools: ${e.tech.join(", ")}.`);
  }
  push("");

  push("## Projects", "");
  for (const p of projects) {
    const url = p.liveUrl ?? p.repoUrl;
    const name = url ? `[${p.title}](${url})` : p.title;
    const repo = p.repoUrl && p.repoUrl !== url ? ` Source: ${p.repoUrl}.` : "";
    push(`- ${name}: ${p.description} Tech: ${p.tech.join(", ")}.${repo}`);
  }
  push("");

  push("## Skills", "");
  for (const g of skills) push(`- ${g.title}: ${g.items.map((s) => s.name).join(", ")}`);
  push("");

  push("## Pages", "", `- [Portfolio](${pageUrl("/")}): The full one-page profile with experience, projects and skills.`, "");

  return lines.join("\n");
}

/** XML sitemap served at /sitemap.xml (see vite.config `pages`). */
export function sitemapXml() {
  const lastmod = new Date().toISOString().slice(0, 10);
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `  <url><loc>${pageUrl("/")}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>`,
    "</urlset>",
    "",
  ].join("\n");
}

/** robots.txt served at /robots.txt, pointing crawlers at the sitemap. */
export function robotsTxt() {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    ...(siteUrl ? [`Sitemap: ${pageUrl("/sitemap.xml")}`] : []),
    "",
  ].join("\n");
}
