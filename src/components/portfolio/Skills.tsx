import type { CSSProperties } from "react";
import { skills, type Skill } from "@/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const brandColor = (s: Skill) => (s.logo ? `#${s.logo.hex}` : (s.color ?? "var(--primary)"));

function SkillMark({ skill, className }: { skill: Skill; className?: string }) {
  return (
    <span className={cn("skill-icon", className)} aria-hidden>
      {skill.logo ? (
        <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="currentColor">
          <path d={skill.logo.path} />
        </svg>
      ) : (
        <span className="font-mono text-[0.7em] font-bold leading-none">{skill.badge ?? skill.name.slice(0, 2)}</span>
      )}
    </span>
  );
}

function LogoRow({ items, reverse }: { items: Skill[]; reverse?: boolean }) {
  return (
    <div className="marquee-mask -mx-4 overflow-hidden py-3">
      <div
        className={cn(
          "flex w-max gap-4 px-2 hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {[...items, ...items].map((s, i) => (
          <span key={i} className="logo-pill" style={{ "--brand": brandColor(s) } as CSSProperties}>
            <SkillMark skill={s} className="h-8 w-8 rounded-full text-sm" />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const all = skills.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);

  return (
    <section id="skills" className="py-24">
      <SectionHeading index="03" eyebrow="Toolbox" title="Skills" subtitle="Languages, platforms and tools I work with." />

      <Reveal className="mb-14 space-y-1">
        <LogoRow items={all.slice(0, half)} />
        <LogoRow items={all.slice(half)} reverse />
      </Reveal>

      <div className="flex flex-wrap justify-center gap-5">
        {skills.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 90} className="w-full sm:w-[calc(50%-0.625rem)]">
            <div className="glass h-full rounded-3xl p-5 text-center">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{g.title}</h3>
              <ul className="flex flex-wrap justify-center gap-x-1 gap-y-3">
                {g.items.map((s, i) => (
                  <li
                    key={s.name}
                    className="skill-tile w-[4.6rem]"
                    style={{ "--brand": brandColor(s), "--i": i + gi } as CSSProperties}
                  >
                    <div className="skill-card flex h-full flex-col items-center gap-2 rounded-2xl border border-transparent px-1 py-3">
                      <SkillMark skill={s} className="h-12 w-12 rounded-2xl text-base" />
                      <span className="text-[0.7rem] font-semibold leading-tight text-foreground/80">{s.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
