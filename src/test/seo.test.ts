import { describe, expect, it } from "vitest";
import { experiences, profile, projects } from "@/content";
import { contactEmail, llmsText, pageUrl, periodRange, personJsonLd, robotsTxt, sitemapXml, toIsoMonth } from "@/lib/seo";

describe("SEO metadata", () => {
  it("turns display months into ISO months", () => {
    expect(toIsoMonth("Feb 2023")).toBe("2023-02");
    expect(toIsoMonth("Present")).toBeUndefined();
  });

  it("leaves the current role without an end date", () => {
    const current = experiences.find((e) => e.current)!;
    expect(periodRange(current)).toEqual({ startDate: "2026-08", endDate: undefined });
  });

  it("lists every role with dates in the structured data", () => {
    const person = personJsonLd()["@graph"].find((n) => n["@type"] === "Person") as {
      hasOccupation: { roleName: string; startDate?: string; endDate?: string; memberOf?: { name: string } }[];
    };
    expect(person.hasOccupation).toHaveLength(experiences.length);
    const cata = person.hasOccupation.find((o) => o.memberOf?.name === "Cata")!;
    expect(cata).toMatchObject({ startDate: "2023-02", endDate: "2024-03" });
  });

  it("puts every role and project in /llms.txt", () => {
    const text = llmsText();
    for (const e of experiences) expect(text).toContain(`${e.role}, [${e.company}]`);
    for (const p of projects) expect(text).toContain(p.title);
  });

  it("makes metadata links absolute once the site address is set", () => {
    expect(profile.siteUrl).toBe("https://yassine.benaid.me");
    expect(pageUrl("/")).toBe("https://yassine.benaid.me/");
  });

  it("reads the contact email from the mail social link", () => {
    expect(contactEmail).toBe("yassine@benaid.me");
    const person = personJsonLd()["@graph"].find((n) => n["@type"] === "Person") as { email?: string; sameAs: string[] };
    expect(person.email).toBe("mailto:yassine@benaid.me");
    // `sameAs` holds profiles elsewhere: no mail address, no link back to this page.
    expect(person.sameAs).not.toContain("mailto:yassine@benaid.me");
    expect(person.sameAs).not.toContain("https://yassine.benaid.me");
    expect(person.sameAs).not.toContain("https://yassine.benaid.me/");
    expect(person.sameAs).toContain("https://github.com/yassinebenaid");
    expect(llmsText()).toContain("- Email: yassine@benaid.me");
  });

  it("serves a sitemap and robots.txt for the site address", () => {
    expect(sitemapXml()).toContain("<loc>https://yassine.benaid.me/</loc>");
    expect(robotsTxt()).toContain("Sitemap: https://yassine.benaid.me/sitemap.xml");
  });
});
