import Link from "next/link";

type SectionProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Section({ children, className }: SectionProps) {
  return (
    <section className={`my-8 flex flex-col gap-4 ${className}`}>
      {children}
    </section>
  );
}

type SectionTitleProps = {
  className?: string;
  children?: React.ReactNode;
};

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <span className={`text-2xl font-bold font-sans ${className}`}>
      {children}
    </span>
  );
}

type SectionItemProps = {
  className?: string;
  children?: React.ReactNode;
  href: string;
};

export function SectionItem({ className, children, href }: SectionItemProps) {
  return (
    <Link
      href={href}
      className={`h-20 flex flex-row items-center gap-4 p-4 bg-zinc-800/25 hover:bg-zinc-800/50 rounded-lg transition-all outline-none focus-visible:outline-zinc-400 ${className}`}
    >
      {children}
    </Link>
  );
}
