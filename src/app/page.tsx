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
  skills,
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
          <SectionTitle>Skills</SectionTitle>
        </h2>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="bg-zinc-800/100 text-sm px-3 py-2 rounded-xl"
              >
                {skill}
              </div>
            );
          })}
        </div>
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
        <div>
          <Avatar priority={true} src={githubAvatarURL} />
        </div>

        <span className="flex flex-col">
          <h1 className="font-bold text-lg text-zinc-50">Yassine Benaid</h1>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <span className="text-sm font-normal">Morocco</span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="m2.899.804.595-.792.598.79A.747.747 0 0 1 4 1.806v4.886q-.532-.09-1-.201V1.813a.747.747 0 0 1-.1-1.01ZM13 1.806v4.685a15 15 0 0 1-1 .201v-4.88a.747.747 0 0 1-.1-1.007l.595-.792.598.79A.746.746 0 0 1 13 1.806m-3 0a.746.746 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v5.17q.512-.02 1-.055zm-3 0v5.176q-.512-.018-1-.054V1.813a.747.747 0 0 1-.1-1.01l.595-.79.598.789A.747.747 0 0 1 7 1.806" />
              <path d="M4.5 6.988V4.226a23 23 0 0 1 1-.114V7.16c0 .131.101.24.232.25l.231.017q.498.037 1.02.055l.258.01a.25.25 0 0 0 .26-.25V4.003a29 29 0 0 1 1 0V7.24a.25.25 0 0 0 .258.25l.259-.009q.52-.018 1.019-.055l.231-.017a.25.25 0 0 0 .232-.25V4.112q.518.047 1 .114v2.762a.25.25 0 0 0 .292.246l.291-.049q.547-.091 1.033-.208l.192-.046a.25.25 0 0 0 .192-.243V4.621c.672.184 1.251.409 1.677.678.415.261.823.655.823 1.2V13.5c0 .546-.408.94-.823 1.201-.44.278-1.043.51-1.745.696-1.41.376-3.33.603-5.432.603s-4.022-.227-5.432-.603c-.702-.187-1.305-.418-1.745-.696C.408 14.44 0 14.046 0 13.5v-7c0-.546.408-.94.823-1.201.426-.269 1.005-.494 1.677-.678v2.067c0 .116.08.216.192.243l.192.046q.486.116 1.033.208l.292.05a.25.25 0 0 0 .291-.247M1 8.82v1.659a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426V8.833l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277z" />
            </svg>
            <span className="text-sm font-normal">oct. 2003</span>
          </div>
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
