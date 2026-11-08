import { m, useReducedMotion } from 'motion/react'
import { experience, type Role } from '@/data/portfolio'
import { Reveal, Section, Tag } from './primitives'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const toIndex = (ym: string) => {
  const [y, m] = ym.split('-').map(Number)
  return y * 12 + (m - 1)
}
const fmt = (ym: string) => {
  const [y, m] = ym.split('-').map(Number)
  return `${MONTHS[m - 1]} ${y}`
}
const now = new Date()
const nowIndex = now.getFullYear() * 12 + now.getMonth()

const axisStart = Math.min(...experience.map((r) => toIndex(r.start)))
const axisEnd = nowIndex + 1 // through the end of the current month
const span = axisEnd - axisStart
const pct = (i: number) => ((i - axisStart) / span) * 100

const startYear = Math.floor(axisStart / 12)
const ticks = [
  { label: `${MONTHS[axisStart % 12].toUpperCase()} ${startYear}`, left: 0 },
  ...Array.from({ length: Math.floor((axisEnd - 1) / 12) - startYear }, (_, k) => {
    const y = startYear + k + 1
    return { label: String(y), left: pct(y * 12) }
  }),
]

const dates = (r: Role) => `${fmt(r.start)} — ${r.end ? fmt(r.end) : 'Present'}`
const months = (r: Role) => (r.end ? toIndex(r.end) : nowIndex) - toIndex(r.start) + 1
const duration = (r: Role) => (r.end ? `${months(r)} mo` : 'ongoing')

// Oldest bar grows first.
const order = [...experience].sort((a, b) => toIndex(a.start) - toIndex(b.start)).map((r) => r.company)

function Gantt() {
  const reduce = useReducedMotion()
  const summary = experience.map((r) => `${r.company}, ${dates(r)}`).join('; ')

  return (
    <figure aria-label={`Timeline: ${summary}`} className="m-0 mb-4 rounded-xl border border-line bg-surface px-4 pt-5 pb-6 sm:px-7">
      <div className="flex gap-4">
        <div className="flex w-[88px] flex-none flex-col sm:w-[150px]">
          <span className="h-7" />
          {experience.map((r) => (
            <div key={r.company} className="flex h-12 min-w-0 flex-col justify-center">
              <span className="truncate text-sm font-semibold">{r.company}</span>
              <span className="truncate font-mono text-[11px] text-faint">{r.short}</span>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className="relative min-w-0 flex-auto">
          <div className="absolute inset-0">
            {ticks.map((t) => (
              <span key={t.label}>
                <span className="absolute inset-y-0 w-px bg-line-soft" style={{ left: `${t.left}%` }} />
                <span className="absolute top-0 pl-1.5 font-mono text-[11px] whitespace-nowrap text-faint" style={{ left: `${t.left}%` }}>
                  <span className="sm:hidden">’{t.label.slice(-2)}</span>
                  <span className="hidden sm:inline">{t.label}</span>
                </span>
              </span>
            ))}
            <span className="absolute inset-y-0 right-0 w-px bg-signal/40" />
            <span className="absolute top-0 right-1.5 font-mono text-[11px] text-signal">NOW</span>
          </div>
          <div className="relative pt-7">
            {experience.map((r) => {
              const left = pct(toIndex(r.start))
              const width = pct((r.end ? toIndex(r.end) : nowIndex) + 1) - left
              const delay = order.indexOf(r.company) * 0.32
              const current = r.end === null
              return (
                <div key={r.company} className="relative h-12" title={`${r.company}: ${dates(r)}`}>
                  <m.span
                    className={`absolute top-3.5 h-5 origin-left rounded-[3px] ${current ? 'stripes animate-stripes bg-signal' : 'bg-bar'}`}
                    style={{ left: `${left}%`, width: `${width}%` }}
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay }}
                  />
                  <m.span
                    className={`absolute top-3.5 pl-2 font-mono text-[11px] leading-5 font-semibold whitespace-nowrap ${current ? 'text-on-signal' : 'text-bar-fg'}`}
                    style={{ left: `${left}%` }}
                    initial={reduce ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: delay + 0.65 }}
                  >
                    {duration(r)}
                  </m.span>
                </div>
              )
            })}
            {/* Pulse on the NOW line, level with the current role */}
            <span className="absolute top-[47px] -right-[5px] grid size-2.5 place-items-center">
              <span className="absolute size-2.5 animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
              <span className="relative size-2.5 rounded-full bg-signal shadow-[0_0_0_3px_var(--surface)]" />
            </span>
          </div>
        </div>
      </div>
    </figure>
  )
}

export function Experience() {
  return (
    <Section id="work" index="01" title="Experience" meta={`${experience[experience.length - 1].start.replace('-', '.')} → present`}>
      <Reveal>
        <Gantt />
      </Reveal>
      <div>
        {experience.map((r) => (
          <Reveal key={r.company}>
            <article className="flex flex-wrap gap-x-12 gap-y-4 border-b border-line py-9">
              <div className="flex min-w-0 flex-[1_1_220px] flex-col gap-1.5">
                <span className="font-mono text-xs text-faint">{dates(r)}</span>
                <h3 className="m-0 text-[22px] font-semibold tracking-[-0.02em]">{r.company}</h3>
                <span className="text-[15px] text-muted-fg">{r.role}</span>
                {r.end === null && (
                  <span className="mt-1.5 flex items-center gap-1.5 self-start rounded bg-signal/12 px-2 py-1 font-mono text-[11px] font-semibold tracking-[0.04em] text-signal">
                    <span aria-hidden="true" className="size-1.5 animate-breathe rounded-full bg-signal" />
                    CURRENT
                  </span>
                )}
              </div>
              <div className="flex min-w-0 flex-[999_1_440px] flex-col gap-[18px]">
                <p className="m-0 text-[17px] leading-relaxed text-pretty">{r.summary}</p>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex gap-3.5 text-[15px] leading-relaxed text-muted-fg">
                      <span aria-hidden="true" className="mt-2.5 size-[5px] flex-none bg-signal" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
