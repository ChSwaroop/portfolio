import { m, useReducedMotion } from "motion/react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { RippleLink } from "@/components/ui/ripple-button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { profile, stackLayers } from "@/data/portfolio";
import { newTab } from "@/lib/links";
import { ArrowUpRight } from "./primitives";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] as const, delay },
});

const tech = stackLayers.flatMap((l) => l.items.map((i) => i.name));

/** The stack as a slow strip of names under the hero, standing in for client logos. */
function TechMarquee() {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="m-0 flex flex-none list-none items-center gap-12 p-0 pr-12"
    >
      {tech.map((t) => (
        <li
          key={t}
          className="flex items-center gap-3 text-xl font-semibold tracking-[-0.02em] whitespace-nowrap text-faint"
        >
          <span
            aria-hidden="true"
            className="size-2 rotate-45 rounded-[2px] bg-line-strong"
          />
          {t}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="relative overflow-hidden py-8 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <h2 className="sr-only">Tools I work with</h2>
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/**
 * The last word of the title types itself out once the headline has risen.
 * An invisible copy holds its width, so the centred line never shifts.
 */
function TypedTitle() {
  const reduce = useReducedMotion();
  const at = profile.title.lastIndexOf(" ");
  const lead = profile.title.slice(0, at + 1);
  const word = profile.title.slice(at + 1);
  return (
    <>
      <span className="sr-only">{profile.title}</span>
      <span aria-hidden="true">
        {lead}
        {reduce ? (
          word
        ) : (
          <span className="relative inline-block">
            <span className="invisible">{word}</span>
            <TypingAnimation
              delay={650}
              duration={65}
              className="absolute top-0 left-0 leading-[inherit] tracking-[inherit] whitespace-nowrap"
            >
              {word}
            </TypingAnimation>
          </span>
        )}
      </span>
    </>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="glow relative overflow-hidden"
    >
      <div className="mx-auto flex min-h-[min(780px,100svh)] max-w-[1200px] flex-col px-5 pt-32 sm:px-8 md:pt-40 lg:px-10">
        <m.p
          {...rise(0)}
          className="m-0 flex items-center gap-2 self-center rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm text-muted-fg backdrop-blur-sm"
        >
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-lime-strong"
          />
          <AnimatedShinyText
            shimmerWidth={120}
            className="mx-0 max-w-none text-muted-fg/80 via-fg via-50% motion-reduce:animate-none dark:text-muted-fg/80 dark:via-fg"
          >
            {profile.role} at {profile.company}
          </AnimatedShinyText>
        </m.p>

        <h1 id="hero-title" className="m-0 mt-7 text-center">
          <m.span
            {...rise(0.08)}
            className="block text-[clamp(52px,9vw,112px)] leading-[0.95] font-medium tracking-[-0.045em]"
          >
            Hi, I’m {profile.firstName}
          </m.span>
          <m.span
            {...rise(0.16)}
            className="block font-serif text-[clamp(52px,9.5vw,124px)] leading-[1] tracking-[-0.02em] italic"
          >
            <TypedTitle />
          </m.span>
        </h1>

        <div className="mt-10 grid flex-auto grid-cols-1 items-end gap-8 pb-6 md:mt-16 md:grid-cols-2">
          <m.div {...rise(0.24)} className="flex flex-col items-start gap-5">
            <span className="flex items-center gap-2.5 rounded-full bg-surface py-2 pr-4 pl-2 text-sm font-medium shadow-[0_8px_24px_-12px_var(--shadow)]">
              <span
                aria-hidden="true"
                className="grid size-6 place-items-center rounded-full bg-lime/40"
              >
                <span className="size-2.5 animate-breathe rounded-full bg-lime-strong" />
              </span>
              Available for new opportunities
            </span>
            <div className="flex flex-wrap gap-x-5 text-sm">
              <a
                href={profile.github.href}
                {...newTab}
                className="flex min-h-11 items-center gap-1.5 text-muted-fg hover:text-fg"
              >
                GitHub
                <ArrowUpRight />
              </a>
              <a
                href={profile.linkedin.href}
                {...newTab}
                className="flex min-h-11 items-center gap-1.5 text-muted-fg hover:text-fg"
              >
                LinkedIn
                <ArrowUpRight />
              </a>
              <a
                href={profile.leetcode.href}
                {...newTab}
                className="flex min-h-11 items-center gap-1.5 text-muted-fg hover:text-fg"
              >
                LeetCode
                <ArrowUpRight />
              </a>
            </div>
          </m.div>
          <m.div
            {...rise(0.32)}
            className="flex flex-col gap-6 md:items-end md:text-right"
          >
            <p className="m-0 max-w-[26em] text-[17px] leading-relaxed text-pretty text-muted-fg">
              {profile.intro}
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <RippleLink
                href="#contact"
                rippleColor="var(--on-ink)"
                className="min-h-12 gap-2.5 rounded-full bg-ink px-6 text-[15px] font-medium text-on-ink transition-transform hover:-translate-y-px"
              >
                Get in touch
                <ArrowUpRight className="size-4" />
              </RippleLink>
              <a
                href={profile.resume}
                {...newTab}
                className="flex min-h-12 items-center gap-2.5 rounded-full border border-line-strong bg-surface/70 px-6 text-[15px] font-medium text-fg backdrop-blur-sm transition-colors hover:border-faint"
              >
                Resume
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </m.div>
        </div>
      </div>
      <TechMarquee />
    </section>
  );
}
