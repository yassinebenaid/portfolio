import { spaces } from "@/utils/const";
import Icon from "./icon";

type FooterLink = {
  href: string;
  label: string;
};

export default function Footer() {
  return (
    <footer className="w-full max-w-sm mx-auto mt-auto">
      <hr className="border-zinc-700 my-4" />
      <section className="flex flex-col justify-center">
        <div className="flex flex-row justify-center gap-2">
          {spaces.map((space, index) => (
            <a
              key={`footer-space-${index}`}
              href={space.href}
              target="_blank"
              className="italic text-zinc-400 bg-transparent hover:bg-zinc-800 transition-colors ease-in-out rounded-lg p-2 outline-none focus-visible:outline-zinc-400"
              title={space.title}
            >
              <Icon icon={space.icon} />
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
}
