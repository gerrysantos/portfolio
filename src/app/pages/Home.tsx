import { motion } from "motion/react";
import { ArrowDownToLine, ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

import { projects, services, site, toolkit } from "../../data/site";
import { Lines, Magnetic, Parallax, Reveal } from "../components/motion";
import { WorkCard } from "../components/WorkCard";
import { cx } from "../lib/cx";

const ease = [0.22, 1, 0.36, 1] as const;

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
        <HeroField />
        <div className="relative mx-auto grid w-full max-w-350 gap-14 px-5 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] tracking-[0.01em] text-muted"
            >
              <span className="inline-flex items-center gap-2">
                <span
                  className={cx(
                    "round size-2 rounded-full",
                    site.available ? "bg-[#3f9d5a]" : "bg-faint",
                  )}
                />
                {site.available
                  ? "Open to full-stack roles and freelance work"
                  : "Not taking new work right now"}
              </span>
              <span className="hidden h-3 w-px bg-line-strong sm:block" />
              <span>
                {site.name} — {site.role.toLowerCase()} in{" "}
                {site.location.split(",")[0]}
              </span>
            </motion.div>

            <h1 className="font-display mt-7 text-[clamp(54px,7.6vw,108px)]">
              {["Front end.", "Back end.", "Shipped."].map((line, i) => (
                <span
                  key={line}
                  className="block overflow-hidden pb-[0.06em] mb-[-0.06em]"
                >
                  <motion.span
                    className={cx("block", i === 2 && "text-accent")}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.1, delay: 0.25 + i * 0.12, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease }}
              className="mt-8 max-w-lg text-pretty text-[17px] leading-relaxed text-muted sm:text-[19px]"
            >
              {site.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a
                  href="#work"
                  className="inline-flex h-12 items-center gap-2 rounded-control bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-[#2b2925]"
                >
                  See selected work
                  <ArrowUpRight className="size-4" />
                </a>
              </Magnetic>
              <a
                href={site.resume}
                download
                className="inline-flex h-12 items-center gap-2 rounded-control border border-line-strong px-6 text-[15px] font-medium transition-colors hover:border-fg"
              >
                <ArrowDownToLine className="size-4" />
                Résumé
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="mt-8 max-w-md border-t border-line pt-5 text-[13.5px] leading-relaxed text-muted"
            >
              Currently building Shopify and WordPress storefronts at Vismay
              International Corporation.
            </motion.p>
          </div>

          <CodePanel />
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line py-5" aria-hidden>
        <ul className="font-display flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-[28px] text-fg/70 sm:text-[36px]">
          {[...site.marquee, ...site.marquee].map((item, i) => (
            <li key={i} className="flex items-center gap-10">
              {item}
              <span className="round size-2 rounded-full bg-accent" />
            </li>
          ))}
        </ul>
      </div>

      {/* Work */}
      <section
        id="work"
        className="mx-auto max-w-350 scroll-mt-20 px-5 pt-24 sm:px-8 sm:pt-32"
      >
        <div className="flex items-end justify-between gap-6">
          <Lines
            as="h2"
            className="font-display text-[44px] sm:text-[64px]"
            lines={["Selected work"]}
          />
          <Reveal className="hidden max-w-60 text-right text-[14px] text-muted sm:block">
            {projects.length} projects — e-commerce, real estate, AI
          </Reveal>
        </div>
        <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
          {projects.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-350 px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <Parallax
              src="/images/portrait.jpg"
              alt={site.name}
              className="aspect-3/4 max-w-115 rounded-image"
              strength={6}
            />
          </Reveal>
          <div className="flex flex-col justify-center">
            <Lines
              as="h2"
              className="font-display text-balance text-[40px] sm:text-[56px] lg:text-[64px]"
              lines={["Front-end polish,", "back-end sense"]}
            />
            <Reveal
              delay={0.2}
              className="mt-8 max-w-xl text-pretty text-[17px] leading-relaxed text-muted"
            >
              <p>
                I started in IT support and reporting, moved into building
                websites, and now work across the stack: React interfaces,
                Express APIs, MySQL and MongoDB data, and Shopify storefronts
                for brands that are already selling.
              </p>
              <p className="mt-4">
                I work from {site.location}, with teams and clients in Manila
                and abroad.
              </p>
            </Reveal>
            <Reveal
              delay={0.3}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <Link
                to="/about"
                className="link-draw inline-flex items-center gap-1.5 text-[15px] font-medium"
              >
                More about me
                <ArrowUpRight className="size-4" />
              </Link>
              <a
                href={site.resume}
                download
                className="link-draw inline-flex items-center gap-1.5 text-[15px] text-muted hover:text-fg"
              >
                Download résumé
                <ArrowDownToLine className="size-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-350 px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <Lines
              as="h2"
              className="font-display text-[40px] sm:text-[56px]"
              lines={["What I do"]}
            />
            <Reveal
              delay={0.1}
              className="mt-4 max-w-xs text-[15px] text-muted"
            >
              Four things, done properly. Most projects need two of them.
            </Reveal>
          </div>
          <Services />
        </div>
      </section>

      {/* Toolkit */}
      <section className="mx-auto max-w-[350 px-5 pt-32 sm:px-8 sm:pt-44">
        <Toolkit />
      </section>
    </>
  );
}

// Blueprint grid with a faint accent wash behind the hero: enough texture to
// feel like a work surface without competing with the type. The grain keeps it
// from looking like a flat gradient.
function HeroField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="grid-field absolute inset-0" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0"
      >
        <div className="round absolute top-[-30%] right-[-10%] h-[80%] w-[55%] rounded-full bg-[radial-gradient(closest-side,rgb(47_59_255/0.2),transparent)] blur-3xl" />
        <div className="round absolute bottom-[-25%] left-[-10%] h-[70%] w-[48%] rounded-full bg-[radial-gradient(closest-side,rgb(255_106_61/0.16),transparent)] blur-3xl" />
      </motion.div>
      <div className="grain absolute inset-0" />
    </div>
  );
}

// A small editor window: the quickest way to show what he actually does.
const codeLines: [string, string?][][] = [
  [
    ["const ", "text-[#8f97ff]"],
    ["gerry", "text-[#f5f3ee]"],
    [" = {", "text-white/40"],
  ],
  [
    ["  role", "text-[#d8d4ca]"],
    [": ", "text-white/40"],
    ["'Web Developer'", "text-[#a9c98a]"],
    [",", "text-white/40"],
  ],
  [
    ["  base", "text-[#d8d4ca]"],
    [": ", "text-white/40"],
    ["'Taguig, PH'", "text-[#a9c98a]"],
    [",", "text-white/40"],
  ],
  [
    ["  experience", "text-[#d8d4ca]"],
    [": ", "text-white/40"],
    ["11", "text-[#e5a07c]"],
    [",", "text-white/40"],
  ],
  [
    ["  stack", "text-[#d8d4ca]"],
    [": [", "text-white/40"],
    ["'React'", "text-[#a9c98a]"],
    [", ", "text-white/40"],
    ["'Node'", "text-[#a9c98a]"],
    [",", "text-white/40"],
  ],
  [
    ["         ", ""],
    ["'MySQL'", "text-[#a9c98a]"],
    [", ", "text-white/40"],
    ["'Shopify'", "text-[#a9c98a]"],
    ["],", "text-white/40"],
  ],
  [
    ["  openToWork", "text-[#d8d4ca]"],
    [": ", "text-white/40"],
    ["true", "text-[#8f97ff]"],
    [",", "text-white/40"],
  ],
  [["}", "text-white/40"]],
];

function CodePanel() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.45, ease }}
      className="relative lg:justify-self-end lg:w-full lg:max-w-140"
    >
      <div
        aria-hidden
        className="round absolute -inset-2 rounded-[30px] bg-accent/10 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#15171c] text-[#f5f3ee] shadow-[0_40px_90px_-50px_rgba(20,19,17,0.7)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="round size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="round size-2.5 rounded-full bg-[#febc2e]" />
          <span className="round size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[12px] text-white/45">
            gerry.ts
          </span>
          <span className="ml-auto rounded-md border border-white/10 px-1.5 py-0.5 font-mono text-[10.5px] text-white/40">
            TS
          </span>
        </div>
        <code className="block overflow-x-auto px-5 py-5 font-mono text-[12px] leading-[1.9] sm:text-[13px]">
          {codeLines.map((line, i) => (
            <span key={i} className="flex gap-3 whitespace-pre">
              <span className="w-3 shrink-0 select-none text-right text-white/20">
                {i + 1}
              </span>
              <span>
                {line.map(([text, tone], j) => (
                  <span key={j} className={tone}>
                    {text}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </code>
        <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-2.5 font-mono text-[11px] text-white/35">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#28c840]" />
            typecheck passing
          </span>
          <span>localhost:5173</span>
        </div>
      </div>
    </motion.figure>
  );
}

function Services() {
  const [open, setOpen] = useState(0);
  return (
    <ul className="border-t border-line">
      {services.map((s, i) => {
        const isOpen = open === i;
        return (
          <li key={s.title} className="border-b border-line">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group flex w-full items-center gap-6 py-7 text-left"
            >
              <span className="w-10 shrink-0 text-[14px] tabular-nums text-faint">
                0{i + 1}
              </span>
              <span
                className={cx(
                  "font-display flex-1 text-[32px] transition-colors sm:text-[44px]",
                  isOpen ? "text-fg" : "text-fg/60 group-hover:text-fg",
                )}
              >
                {s.title}
              </span>
              <span
                className={cx(
                  "grid size-10 shrink-0 place-items-center rounded-xl border border-line-strong transition-colors duration-300",
                  isOpen && "border-fg bg-fg text-bg",
                )}
              >
                <Plus
                  className={cx(
                    "size-4 transition-transform duration-500",
                    isOpen && "rotate-45",
                  )}
                />
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.45, ease }}
              className="overflow-hidden"
            >
              <p className="max-w-xl pb-8 pl-16 text-pretty text-[16px] leading-relaxed text-muted">
                {s.body}
              </p>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
}

function Toolkit() {
  return (
    <div className="rounded-4xl bg-fg px-6 py-14 text-bg sm:px-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <Lines
            as="h2"
            className="font-display text-[40px] sm:text-[56px]"
            lines={["Toolkit"]}
          />
          <Reveal
            delay={0.15}
            className="mt-5 max-w-sm text-[15px] leading-relaxed text-bg/60"
          >
            The stack I reach for, from the first layout to the database.
            Currently going deeper into full-stack work — larger APIs and more
            of the back end.
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {toolkit.map((group) => (
              <div key={group.group} className="border-t border-bg/15 pt-4">
                <dt className="text-[13px] uppercase tracking-[0.14em] text-bg/45">
                  {group.group}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-bg/90">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  );
}
