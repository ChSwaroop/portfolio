import { useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { stats } from '@/data/portfolio'

const scramble = (value: string) => value.replace(/[0-9]/g, () => String(Math.floor(Math.random() * 10)))

/** Digits flicker like a decoding readout, then lock in left to right. */
export function KeyNumbers() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDListElement>(null)
  const inView = useInView(ref, { once: true })
  const [progress, setProgress] = useState(reduce ? 1 : 0)

  useEffect(() => {
    if (reduce) {
      setProgress(1)
      return
    }
    if (!inView) return
    let raf = 0
    let last = 0
    const start = performance.now()
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / 1500)
      // ~16 updates per second is plenty for a flicker and keeps renders cheap
      if (t - last > 60 || p === 1) {
        last = t
        setProgress(p)
      }
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce])

  return (
    <section aria-label="Key numbers" className="border-b border-line">
      <dl ref={ref} className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 sm:px-8 md:grid-cols-4 lg:px-10">
        {stats.map((s, i) => {
          const settled = progress >= 0.35 + i * 0.17
          return (
            <div
              key={s.label}
              className={`flex flex-col-reverse gap-1.5 py-7 ${i % 2 === 1 ? 'border-l border-line pl-6' : ''} ${i === 2 ? 'md:border-l md:border-line md:pl-6' : ''} ${i >= 2 ? 'border-t border-line md:border-t-0' : ''}`}
            >
              <dt className="font-mono text-xs tracking-[0.04em] text-faint uppercase">{s.label}</dt>
              <dd className="m-0 text-[32px] leading-none font-semibold tracking-[-0.03em] tabular-nums md:text-4xl">
                <span className="sr-only">{s.value}</span>
                <span aria-hidden="true" className={settled ? 'text-fg' : 'text-faint'}>
                  {settled ? s.value : scramble(s.value)}
                </span>
              </dd>
            </div>
          )
        })}
      </dl>
    </section>
  )
}
