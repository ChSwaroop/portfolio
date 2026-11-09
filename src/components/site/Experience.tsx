import { experience, type Role } from '@/data/portfolio'
import { Reveal, Section } from './primitives'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const fmt = (ym: string) => {
  const [y, m] = ym.split('-').map(Number)
  return `${MONTHS[m - 1]} ${y}`
}
const dates = (r: Role) => `${fmt(r.start)} – ${r.end ? fmt(r.end) : 'Present'}`

// Oldest first, so the numbers read as a journey: 01 → 03.
const journey = [...experience].reverse()
// Tilt and drop of each card on wide screens, like the reference's scattered steps.
const poses = ['lg:-rotate-3 lg:mt-10', 'lg:rotate-2', 'lg:-rotate-2 lg:mt-14']

export function Experience() {
  return (
    <Section id="work" eyebrow="/ Where I’ve worked" title="My journey so far">
      <div className="relative">
        <svg aria-hidden="true" viewBox="0 0 1000 120" fill="none" className="pointer-events-none absolute inset-x-0 -top-10 hidden w-full text-lime-strong lg:block">
          <path d="M150 90 C 300 -10, 420 10, 500 50 S 760 120, 860 20" stroke="currentColor" strokeWidth="2" strokeDasharray="6 8" strokeLinecap="round" />
          <circle cx="500" cy="50" r="6" fill="currentColor" />
          <circle cx="860" cy="20" r="6" fill="currentColor" />
        </svg>
        <ol className="m-0 grid list-none grid-cols-1 gap-5 p-0 lg:grid-cols-3 lg:gap-6">
          {journey.map((r, i) => (
            <li key={r.company} className="flex">
              <Reveal delay={i * 0.08} className="flex flex-1">
              <article
                className={`flex flex-1 flex-col gap-5 rounded-3xl border border-line bg-surface p-7 shadow-[0_24px_48px_-28px_var(--shadow)] transition-transform duration-300 hover:rotate-0 ${poses[i] ?? ''}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-5xl font-light tracking-[-0.04em] text-faint tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  {r.end === null ? (
                    <span className="flex items-center gap-1.5 rounded-full bg-lime px-2.5 py-1 text-xs font-semibold text-on-lime">
                      <span aria-hidden="true" className="size-1.5 animate-breathe rounded-full bg-on-lime" />
                      Current
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-faint">{dates(r)}</span>
                  <h3 className="m-0 font-serif text-[34px] leading-[1.05] italic">{r.company}</h3>
                  <span className="text-[15px] font-medium">{r.role}</span>
                </div>
                <p className="m-0 text-[15px] leading-relaxed text-pretty text-muted-fg">{r.summary}</p>
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-fg">
                      <span aria-hidden="true" className="mt-2 size-1.5 flex-none rounded-full bg-lime-strong" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {r.tags.map((t) => (
                    <span key={t} className="rounded-full bg-raised px-3 py-1 text-xs text-muted-fg">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
