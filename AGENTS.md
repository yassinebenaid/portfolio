<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules

- All portfolio content (profile, socials, experiences, projects, skills) lives in `src/content/*.ts`, typed by `src/content/types.ts`; UI components in `src/components/portfolio/` only read it. Why: the owner edits content freely without touching UI.
- The site must stay fully static: `/` is prerendered (vite.config `pages` + `prerender`), and `dist/client` is the deployable folder. Why: the owner hosts it on a plain CDN, so no per-request server logic, server functions or runtime data fetching.
- Skill logos are `simple-icons` objects imported per item in `src/content/skills.ts` (fallback: `badge` + `color`). Why: bundled at build time and tree-shaken, so the static site never fetches icons at runtime.
- Search/AI metadata (head tags, JSON-LD, `/llms.txt`) is derived from `src/content` in `src/lib/seo.ts`; `/llms.txt` is a server route prerendered via vite.config `pages`. Why: metadata never drifts from the page and output stays static.
