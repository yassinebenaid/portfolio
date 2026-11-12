import type { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SocialIcon } from "./SocialIcon";

function ProjectCard({ project }: { project: Project }) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--px", `${x * 100}%`);
    el.style.setProperty("--py", `${y * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - y) * 8}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 10}deg`);
  };
  const onLeave = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };
  const mainUrl = project.liveUrl ?? project.repoUrl;

  return (
    <article onMouseMove={onMove} onMouseLeave={onLeave} className="tilt-card glass group relative flex h-full flex-col rounded-3xl p-6 text-left">
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-2xl transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
          {project.emoji ?? "✦"}
        </span>
        {project.year && <span className="font-mono text-xs text-muted-foreground">{project.year}</span>}
      </div>
      <h3 className="mt-5 font-display text-3xl leading-none">
        {mainUrl ? (
          <a href={mainUrl} target="_blank" rel="noreferrer" className="after:absolute after:inset-0">
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p className="mt-3 flex-1 text-sm text-muted-foreground">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[11px] text-muted-foreground">
            #{t.toLowerCase().replace(/\s+/g, "")}
          </span>
        ))}
      </div>
      <div className="relative z-10 mt-5 flex items-center gap-2">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="chip">
            Live <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="chip">
            <SocialIcon name="github" className="h-3.5 w-3.5" /> Code
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <SectionHeading index="02" eyebrow="Work" title="Selected projects" subtitle="Open-source work and personal projects." />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 120} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
