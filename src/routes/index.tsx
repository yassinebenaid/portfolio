import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/content";
import { pageUrl, personJsonLd, seoDescription, seoTitle, shareImage } from "@/lib/seo";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seoTitle },
      { name: "description", content: seoDescription },
      { name: "author", content: profile.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: seoTitle },
      { property: "og:description", content: seoDescription },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: pageUrl("/") },
      { property: "profile:first_name", content: profile.firstName },
      { property: "profile:last_name", content: profile.name.replace(profile.firstName, "").trim() },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: seoTitle },
      { name: "twitter:description", content: seoDescription },
      ...(shareImage
        ? [
            { property: "og:image", content: shareImage },
            { property: "og:image:alt", content: `Portrait of ${profile.name}` },
            { name: "twitter:image", content: shareImage },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: pageUrl("/") }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(personJsonLd()) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <AnimatedBackground />
      <ScrollProgress />
      <main className="relative z-10 mx-auto max-w-3xl px-5">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}
