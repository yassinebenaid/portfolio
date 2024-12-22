"use client";

import Avatar from "@/components/avatar";
import CopyInput from "@/components/copy-input";
import Icon from "@/components/icon";
import { Section, SectionItem, SectionTitle } from "@/components/section";
import {
  spaces,
  projects,
  githubAvatarURL,
  experiences,
  getcataIcon,
} from "@/utils/const";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const sectionStagger = stagger(0.1);

export default function Page() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "section",
      { opacity: [0, 1] },
      { duration: 1, delay: sectionStagger },
    );
  }, [animate, scope]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={scope}
      className="max-w-sm w-full mx-auto"
    >
      <Header />

      <Section>
        <h2>
          <SectionTitle>Projects</SectionTitle>
        </h2>

        {projects.map(({ title, href, description, icon }, index) => {
          return (
            <SectionItem key={`projects-${index}`} href={href}>
              <span className="p-2 rounded-lg bg-zinc-700/25">
                <Icon icon={icon} className="h-6 w-6" />
              </span>
              <div className="flex flex-col ">
                <span className="text-lg">{title}</span>
                <span className="text-sm text-zinc-400">{description}</span>
              </div>
            </SectionItem>
          );
        })}
      </Section>

      <Section>
        <h2>
          <SectionTitle>Experiences</SectionTitle>
        </h2>

        {experiences.map(({ title, date, company }, index) => {
          return (
            <SectionItem key={`projects-${index}`} href={company.href}>
              <div className="flex flex-col ">
                <span className="text-lg">{title}</span>
                <div className="flex items-center text-xs text-zinc-400 gap-4">
                  <span className="text-sm text-zinc-400">{company.name}</span>
                  <span className="text-sm text-zinc-400 w-1 h-1 rounded-full bg-zinc-400"></span>
                  <div className="flex items-center text-sm text-zinc-400 gap-1">
                    <span>{date.from}</span>
                    <span>-</span>
                    <span>{date.to}</span>
                  </div>
                </div>
              </div>
            </SectionItem>
          );
        })}
      </Section>

      <Section>
        <h2>
          <SectionTitle>Spaces</SectionTitle>
        </h2>

        {spaces.map(({ title, icon, href, handle }, index) => (
          <SectionItem key={`spaces-item-${index}`} href={href}>
            <span className="p-2 rounded-lg bg-zinc-100/5">
              <Icon icon={icon} className="h-6 w-6" />
            </span>
            <div className="flex flex-col ">
              <span className="text-lg">{title}</span>
              {handle ? (
                <span className="text-sm text-zinc-400">{handle}</span>
              ) : null}
            </div>
          </SectionItem>
        ))}
      </Section>
    </motion.main>
  );
}

const Header = () => {
  return (
    <div className="text-zinc-400">
      <div className="flex flex-row gap-4 items-center">
        <Avatar src={githubAvatarURL} />

        <span className="flex flex-col">
          <h1 className="font-bold text-lg text-zinc-50">Yassine Benaid</h1>
          <span className="text-sm font-normal">oct. 2003</span>
        </span>
      </div>

      <section className="block text-lg my-4">
        <p>
          Backend Engineer, Go enthusiast, passionate about TDD, Unix and
          language applications.
        </p>
      </section>

      <LookingForWork />
    </div>
  );
};

function LookingForWork() {
  return (
    <section className="flex flex-col justify-center gap-4 my-8">
      <CopyInput />
    </section>
  );
}
