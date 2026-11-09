import type { CSSProperties } from 'react'
import { profile, stackLayers, stats } from '@/data/portfolio'
import { Eyebrow, Reveal } from './primitives'

const core = stackLayers.flatMap((l) => l.items.filter((i) => i.core).map((i) => ({ name: i.name, layer: l.name })))
const others = stackLayers.flatMap((l) => l.items.filter((i) => !i.core).map((i) => ({ name: i.name, layer: l.name })))
const chips = [...core, ...others].slice(0, 8)

// Where each chip floats around the paragraph on wide screens: [side, top %, tilt].
const spots: [side: 'left' | 'right', top: number, tilt: number][] = [
  ['left', 4, -6],
  ['right', 0, 5],
  ['left', 34, 4],
  ['right', 30, -4],
  ['left', 64, -3],
  ['right', 60, 6],
  ['left', 92, 5],
  ['right', 90, -5],
]

function Chip({ name, layer, className, style }: { name: string; layer: string; className?: string; style?: CSSProperties }) {
  return (
    <span className={`flex items-center gap-2 rounded-xl bg-surface py-1.5 pr-3 pl-1.5 text-sm shadow-[0_8px_24px_-12px_var(--shadow)] ${className ?? ''}`} style={style}>
      <span aria-hidden="true" className="grid size-6 place-items-center rounded-lg bg-lime text-[11px] font-semibold text-on-lime">
        {name.slice(0, 2)}
      </span>
      <span className="font-medium">{name}</span>
      <span className="sr-only">({layer})</span>
    </span>
  )
}

export function About() {
  const [lead, rest] = profile.about.split(profile.aboutHighlight)
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-[1200px] px-5 pt-24 sm:px-8 md:pt-32 lg:px-10">
      <Reveal className="relative flex flex-col items-center gap-5 text-center lg:px-56">
        <Eyebrow>Hello!</Eyebrow>
        <h2 id="about-title" className="sr-only">About</h2>
        <p className="m-0 max-w-[22em] text-[clamp(26px,3.4vw,40px)] leading-[1.2] font-medium tracking-[-0.03em] text-balance">
          {lead}
          <span className="text-gradient">{profile.aboutHighlight}</span>
          {rest}
        </p>
        <ul aria-label="Main tools" className="m-0 flex list-none flex-wrap justify-center gap-2.5 p-0 lg:contents">
          {chips.map((c, i) => {
            const [side, top, tilt] = spots[i]
            return (
              <li key={c.name} className="lg:absolute" style={{ top: `${top}%`, [side]: i % 4 < 2 ? 0 : '3rem' }}>
                <Chip name={c.name} layer={c.layer} style={{ rotate: `${tilt}deg` }} />
              </li>
            )
          })}
        </ul>
      </Reveal>
      <Reveal delay={0.08}>
        <dl className="m-0 mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1.5 rounded-2xl border border-line bg-surface p-5">
              <dt className="text-sm text-muted-fg">{s.label}</dt>
              <dd className="m-0 text-4xl font-medium tracking-[-0.04em] tabular-nums">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
