"use client";

import { siteConfig } from "@/lib/data";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-20 md:pt-28 lg:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent_85%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[700px] w-[1100px] -translate-x-1/2 rounded-full orb-glow blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 opacity-40 dot-field md:h-[520px] md:w-[520px]"
      />

      <div className="container relative pb-24 md:pb-32">
        <motion.div
          className="eyebrow mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {siteConfig.name} — {siteConfig.title} · {siteConfig.location}
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <motion.h1
              className="display text-balance text-[clamp(2rem,5vw,4.25rem)] leading-[1.15]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              NestJS &amp; Next.js Developer | RAG Pipelines &amp; LLM Agents |
              LangGraph
            </motion.h1>

            <motion.div
              className="mt-6 flex flex-wrap items-center gap-2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="icon-btn grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="icon-btn grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:salahadinjuharleo@gmail.com"
                aria-label="Email"
                className="icon-btn grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.p
              className="mt-8 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              {siteConfig.hero.description}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-3"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <Link
                href="#work"
                className="btn-glow inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-accent-foreground"
              >
                Explore Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/60 px-6 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/5"
              >
                Contact
              </Link>
            </motion.div>
          </div>

          <motion.aside
            className="relative mx-auto w-full max-w-sm lg:mt-2"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <div className="shimmer-border relative overflow-hidden rounded-2xl border border-border bg-surface">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--accent)/0.22),transparent_70%)]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.png"
                alt={`${siteConfig.name} portrait`}
                className="relative h-auto w-full object-cover grayscale contrast-[1.05] transition duration-700 hover:grayscale-0 hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/5" />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl"
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
