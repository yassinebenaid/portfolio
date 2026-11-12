import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
}: {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span className="text-primary">{index}</span> / {eyebrow}
      </p>
      <h2 className="font-display text-5xl leading-none tracking-tight sm:text-6xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-md text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}
