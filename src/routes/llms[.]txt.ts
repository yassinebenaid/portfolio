import { createFileRoute } from "@tanstack/react-router";
import { llmsText } from "@/lib/seo";

// Prerendered to dist/client/llms.txt at build time (see vite.config `pages`).
export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(llmsText(), {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        }),
    },
  },
});
