import { m, useInView, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { stackLayers } from '@/data/portfolio'
import { useTicker } from '@/hooks/use-ticker'
import { Reveal, Section } from './primitives'

const ease = [0.6, 0, 0.2, 1] as const

/** Skills grouped by where they run in a request, with a "packet" travelling L1 → L5. */
export function Stack() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const tick = useTicker(1000, !reduce && inView)
  const n = stackLayers.length
  const active = reduce ? n - 1 : tick % n
  const pos = (i: number) => `${((i + 0.5) / n) * 100}%`

  return (
    <Section id="stack" index="02" title="Stack" meta="by layer, screen → model">
      <Reveal>
        <div ref={ref}>
          <div aria-hidden="true" className="relative mb-2 hidden h-7 md:block">
            <span className="absolute top-[13px] h-px bg-line" style={{ left: pos(0), right: pos(0) }} />
            <m.span
              className="absolute top-[13px] h-px bg-signal"
              style={{ left: pos(0) }}
              animate={{ width: `${(active / n) * 100}%` }}
              transition={{ duration: 0.9, ease }}
            />
            {stackLayers.map((l, i) => (
              <span
                key={l.id}
                className={`absolute top-[9px] -ml-[5px] size-[9px] rounded-[2px] border transition-colors delay-300 duration-300 ${
                  i <= active ? 'border-signal bg-signal' : 'border-line-strong bg-surface'
                }`}
                style={{ left: pos(i) }}
              />
            ))}
            <m.span
              className="absolute top-1.5 -ml-[9px] size-[17px] rounded-full border border-signal"
              animate={{ left: pos(active) }}
              transition={{ duration: 0.9, ease }}
            />
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 md:grid-cols-5">
            {stackLayers.map((l, i) => {
              const on = !reduce && i === active
              return (
                <div
                  key={l.id}
                  className={`flex min-w-0 flex-col gap-[18px] px-[22px] pt-6 pb-7 transition-[background-color,box-shadow] duration-400 ${
                    on ? 'bg-raised shadow-[inset_0_2px_0_var(--signal)]' : 'bg-surface shadow-[inset_0_2px_0_transparent]'
                  }`}
                >
                  <div className="flex flex-col gap-1.5">
                    <span className={`font-mono text-[11px] tracking-[0.06em] transition-colors duration-400 ${on ? 'text-signal' : 'text-faint'}`}>
                      {l.id}
                    </span>
                    <h3 className="m-0 text-[17px] font-semibold tracking-[-0.01em]">{l.name}</h3>
                    <p className="m-0 text-[13px] leading-normal text-muted-fg">{l.note}</p>
                  </div>
                  <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                    {l.items.map((s) => (
                      <li key={s.name} className="flex items-center gap-2.5 font-mono text-sm">
                        <span
                          aria-hidden="true"
                          className={`size-[7px] flex-none rounded-[1px] border ${s.core ? 'border-signal bg-signal' : 'border-line-strong'}`}
                        />
                        {s.name}
                        {s.core && <span className="sr-only"> (daily driver)</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
          <p className="mt-3.5 flex items-center gap-2 font-mono text-xs text-faint">
            <span aria-hidden="true" className="size-[7px] rounded-[1px] bg-signal" />
            daily drivers
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
