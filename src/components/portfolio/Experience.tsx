import { ArrowUpRight, MapPin } from "lucide-react";
import { experiences } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <SectionHeading index="01" eyebrow="Career" title="Experience" subtitle="Roles I have held, most recent first." />
      <Reveal className="relative">
        <div className="timeline-line absolute bottom-0 left-[11px] top-2 w-[2px] rounded-full sm:left-[15px]" />
        <ol className="space-y-6">
          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${exp.period}`} className="relative pl-10 sm:pl-14">
              <span className="absolute left-0 top-7 grid h-6 w-6 place-items-center rounded-full border-2 border-background bg-foreground sm:left-1">
                {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping-soft" />}
                <span className={exp.current ? "relative h-2 w-2 rounded-full bg-primary" : "relative h-2 w-2 rounded-full bg-background"} />
              </span>
              <Reveal delay={i * 120}>
                <article className="glass group rounded-3xl p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-bold sm:text-xl">{exp.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    {exp.companyUrl ? (
                      <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 font-semibold text-primary hover:underline">
                        {exp.company}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <span className="font-semibold text-primary">{exp.company}</span>
                    )}
                    {exp.location && (
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" /> {exp.location}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-muted-foreground">{exp.summary}</p>
                  {exp.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
