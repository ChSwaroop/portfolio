import { m, useReducedMotion } from "motion/react";
import { useId } from "react";
import { experience, type Role } from "@/data/portfolio";
import { Reveal, Section } from "./primitives";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const fmt = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
};
const dates = (r: Role) =>
  `${fmt(r.start)} – ${r.end ? fmt(r.end) : "Present"}`;

// Tilt and drop of each card on wide screens, like the reference's scattered steps.
const poses = ["lg:-rotate-3 lg:mt-12", "lg:rotate-3", "lg:-rotate-3 lg:mt-14"];

/**
 * Hand-drawn lines joining a card to the one before it, with a ring at each end.
 * Each sits in the later card's cell and reaches back over the earlier card.
 */
const connectors = [
  null,
  {
    // Rises from the first card's top corner and arcs onto the second card's top edge.
    className: "-left-24 -top-3 h-[190px] w-[150px]",
    viewBox: "0 0 150 190",
    d: "M40 174 C 34 100, 54 24, 96 12 C 110 10, 120 11, 128 14",
    start: [40, 174],
    end: [128, 14],
  },
  {
    // Leaves the second card's side, curls into a loop and drops onto the third card.
    className: "-left-28 top-[34%] h-[130px] w-[150px]",
    viewBox: "0 0 150 130",
    d: "M14 44 C 48 40, 78 52, 94 30 C 108 10, 86 -4, 76 16 C 66 38, 96 62, 110 80 C 120 94, 124 104, 124 112",
    start: [14, 44],
    end: [124, 112],
  },
] as const;

function Connector({ index }: { index: number }) {
  const reduce = useReducedMotion();
  const c = connectors[index];
  const maskId = `connector-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  if (!c) return null;
  // Lines draw once the cards have settled, one after the other.
  const delay = 0.5 + (index - 1) * 0.75;
  const ring = (at: readonly [number, number], d: number) => (
    <m.circle
      cx={at[0]}
      cy={at[1]}
      r="6"
      strokeWidth="2.5"
      className="fill-surface"
      variants={{
        hidden: { opacity: 0, scale: 0 },
        shown: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.3, ease: "backOut", delay: d }}
      style={{ transformOrigin: `${at[0]}px ${at[1]}px` }}
    />
  );
  return (
    <m.svg
      aria-hidden="true"
      viewBox={c.viewBox}
      fill="none"
      stroke="currentColor"
      className={`pointer-events-none absolute z-10 hidden overflow-visible text-lime-strong lg:block ${c.className}`}
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -120px 0px" }}
    >
      {/* The dots are revealed through a solid stroke that draws in, so they appear in sequence. */}
      <mask id={maskId} maskUnits="userSpaceOnUse">
        <m.path
          d={c.d}
          stroke="#fff"
          strokeWidth="8"
          strokeLinecap="round"
          variants={{ hidden: { pathLength: 0 }, shown: { pathLength: 1 } }}
          transition={{
            duration: 0.7,
            ease: [0.6, 0, 0.3, 1],
            delay: delay + 0.15,
          }}
        />
      </mask>
      <path
        d={c.d}
        mask={`url(#${maskId})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="0.1 7"
      />
      {ring(c.start, delay)}
      {ring(c.end, delay + 0.8)}
    </m.svg>
  );
}

export function Experience() {
  return (
    <Section id="work" eyebrow="/ Where I’ve worked" title="My journey so far">
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[8%] inset-y-[10%] rounded-full bg-lime/35 blur-[90px]"
        />
        <ol className="relative m-0 grid list-none grid-cols-1 gap-5 p-0 lg:grid-cols-3 lg:gap-3">
          {experience.map((r, i) => (
            <li key={r.company} className="relative flex">
              <Reveal delay={i * 0.1} className="flex flex-1">
                <article
                  className={`flex min-h-[380px] flex-1 flex-col gap-6 rounded-2xl border border-line bg-raised/90 p-7 shadow-[0_24px_48px_-28px_var(--shadow)] backdrop-blur-sm transition-transform duration-300 hover:rotate-0 lg:min-h-[420px] ${poses[i] ?? ""}`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-faint">{dates(r)}</span>
                      {r.end === null ? (
                        <span className="flex items-center gap-1.5 rounded-full bg-lime px-2.5 py-1 text-xs font-semibold text-on-lime">
                          <span
                            aria-hidden="true"
                            className="size-1.5 animate-breathe rounded-full bg-on-lime"
                          />
                          Current
                        </span>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs text-muted-fg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto flex flex-col gap-2">
                    <h3 className="m-0 text-[34px] leading-[1.05] font-normal tracking-[-0.03em]">
                      {r.company}
                    </h3>
                    <span className="text-[15px] font-medium">{r.role}</span>
                    <p className="m-0 text-[15px] leading-relaxed text-pretty text-muted-fg">
                      {r.summary}
                    </p>
                  </div>
                </article>
              </Reveal>
              <Connector index={i} />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
