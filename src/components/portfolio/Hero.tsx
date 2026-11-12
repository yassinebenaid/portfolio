import { useEffect, useRef, useState } from "react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { experiences, profile, projects, socials } from "@/content";
import { SocialIcon } from "./SocialIcon";

function RoleRotator({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (words.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className="relative inline-block [perspective:600px]">
      <span key={i} className="inline-block animate-word-in font-display text-[1.15em] italic text-primary">
        {words[i]}
      </span>
    </span>
  );
}

function Counter({ to, label, delay }: { to: number; label: string; delay: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const start = performance.now() + delay;
    const step = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / 1400));
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, delay]);
  return (
    <div ref={ref} className="px-4 text-center sm:px-8">
      <div className="font-display text-4xl leading-none sm:text-5xl">
        {n}
        <span className="text-primary">+</span>
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

export function Hero() {
  const letters = profile.name.split("");
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col items-center justify-center pb-16 pt-20 text-center">
      {/* Avatar */}
      <div className="rise relative mb-8 animate-float" style={{ animationDelay: "150ms" }}>
        <div className="absolute -inset-1.5 rounded-full bg-brand animate-spin-slow opacity-90 blur-[2px]" />
        <div className="relative grid h-28 w-28 place-items-center overflow-hidden rounded-full border-4 border-background bg-secondary sm:h-32 sm:w-32">
          {profile.avatar ? (
            <img src={profile.avatar} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
          ) : (
            <span className="font-display text-5xl italic">{profile.initials}</span>
          )}
        </div>
      </div>

      <h1 className="font-display text-6xl leading-[0.9] tracking-tight sm:text-8xl md:text-9xl" aria-label={profile.name}>
        {letters.map((ch, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={i < profile.firstName.length ? "letter text-gradient" : "letter"}
            style={{ animationDelay: `${500 + i * 45}ms` }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </h1>

      <p className="rise mt-6 text-lg font-medium sm:text-2xl" style={{ animationDelay: "1100ms" }}>
        {profile.role} · I build <RoleRotator words={profile.focus} />
      </p>

      <p className="rise mx-auto mt-5 max-w-xl text-balance text-muted-foreground sm:text-lg" style={{ animationDelay: "1250ms" }}>
        {profile.bio}
      </p>

      <p className="rise mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground" style={{ animationDelay: "1350ms" }}>
        <MapPin className="h-4 w-4 text-primary" /> {profile.location}
      </p>

      <div className="rise mt-8 flex flex-wrap items-center justify-center gap-2" style={{ animationDelay: "1450ms" }}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            {...(s.url.startsWith("mailto:") ? {} : { target: "_blank" })}
            rel="me noreferrer"
            aria-label={s.label}
            title={s.label}
            className="icon-btn"
          >
            <SocialIcon name={s.icon} />
          </a>
        ))}
        {profile.resumeUrl && (
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost ml-2">
            Resume <Download className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="rise glass mt-10 flex divide-x divide-border rounded-2xl py-4" style={{ animationDelay: "1600ms" }}>
        <Counter to={profile.yearsOfExperience} label="Years" delay={1600} />
        <Counter to={experiences.length} label="Positions" delay={1700} />
        <Counter to={projects.length} label="Projects" delay={1800} />
      </div>

      <a
        href="#experience"
        aria-label="Scroll down"
        className="rise mt-10 hidden flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary sm:flex"
        style={{ animationDelay: "1900ms" }}
      >
        <span className="flex h-9 w-5 justify-center rounded-full border-2 border-current pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-current animate-scroll-dot" />
        </span>
        <ArrowDown className="h-3 w-3" />
      </a>
    </section>
  );
}
