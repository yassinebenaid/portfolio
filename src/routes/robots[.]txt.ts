import { createFileRoute } from "@tanstack/react-router";
import { robotsTxt } from "@/lib/seo";

// Prerendered to dist/client/robots.txt at build time (see vite.config `pages`).
// Built from the content files so the Sitemap line always matches `profile.siteUrl`.
export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(robotsTxt(), {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        }),
    },
  },
});
