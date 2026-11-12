import { createFileRoute } from "@tanstack/react-router";
import { sitemapXml } from "@/lib/seo";

// Prerendered to dist/client/sitemap.xml at build time (see vite.config `pages`).
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(sitemapXml(), {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        }),
    },
  },
});
