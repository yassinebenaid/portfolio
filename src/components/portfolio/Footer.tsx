import { ArrowUp } from "lucide-react";
import { profile } from "@/content";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="pb-16 pt-24 text-center">
      <Reveal>
        <div className="mx-auto mb-10 h-px w-24 bg-brand" />
        <p className="font-display text-4xl italic sm:text-5xl">{profile.name}</p>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {profile.role} · {profile.location}
        </p>
        {profile.email && (
          <a href={`mailto:${profile.email}`} className="mt-4 inline-block font-mono text-sm text-primary hover:underline">
            {profile.email}
          </a>
        )}
        <div className="mt-10">
          <a href="#top" aria-label="Back to top" className="icon-btn">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-8 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </Reveal>
    </footer>
  );
}
