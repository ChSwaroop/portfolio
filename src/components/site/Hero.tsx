import { m, useInView, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { profile, trace } from '@/data/portfolio'
import { useTicker } from '@/hooks/use-ticker'
import { ArrowUpRight } from './primitives'

/** Rolls through the headline words like an odometer. Static under reduced motion. */
function WordRoller({ words }: { words: readonly string[] }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref)
  const tick = useTicker(3000, !reduce && inView)
  const loop = [...words, words[0]]
  const [index, setIndex] = useState(0)
  const [jump, setJump] = useState(false)

  useEffect(() => {
    if (tick === 0) return
    setJump(false)
    setIndex((i) => i + 1)
  }, [tick])

  // After landing on the duplicated first word, snap back to the real one without animating.
  useEffect(() => {
    if (index !== loop.length - 1) return
    const id = window.setTimeout(() => {
      setJump(true)
      setIndex(0)
    }, 750)
    return () => window.clearTimeout(id)
  }, [index, loop.length])

  return (
    <span ref={ref} aria-hidden="true" className="flex items-center gap-[0.1em]">
      <span className="block h-[1.1em] overflow-hidden">
        <m.span
          className="flex flex-col"
          animate={{ y: `-${index * 1.1}em` }}
          transition={jump || reduce ? { duration: 0 } : { duration: 0.7, ease: [0.7, 0, 0.2, 1] }}
        >
          {loop.map((w, i) => (
            <span key={i} className="block h-[1.1em] leading-[1.1em] whitespace-nowrap text-signal">
              {w}
            </span>
          ))}
        </m.span>
      </span>
      <span className="block h-[0.86em] w-[0.07em] animate-blink bg-signal motion-reduce:animate-none" />
    </span>
  )
}

/** A request trace waterfall that replays every few seconds while on screen. */
function TracePanel() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)
  const cycle = useTicker(7000, !reduce && inView)
  const cols = 'grid grid-cols-[minmax(0,118px)_minmax(0,92px)_minmax(0,1fr)] gap-3'

  return (
    <figure
      ref={ref}
      aria-label="How I build: a request traced from the React frontend through Go services and data stores to an LLM retrieval step"
      className="m-0 min-w-0 overflow-hidden rounded-xl border border-line bg-surface shadow-[0_1px_0_var(--line),0_24px_48px_-24px_var(--shadow)]"
    >
      <div className="flex items-center justify-between gap-3 border-b border-line px-[18px] py-3.5 font-mono text-xs">
        <span className="flex items-center gap-2.5 text-fg">
          <span className="rounded bg-signal/12 px-2 py-[3px] font-semibold text-signal">TRACE</span>
          how-i-build
        </span>
        <span className="flex items-center gap-2 text-faint">
          <span aria-hidden="true" className="size-1.5 animate-breathe rounded-full bg-signal" />
          {reduce ? '' : 'live · '}
          {trace.length} spans
        </span>
      </div>
      <div className={`${cols} px-[18px] pt-2.5 pb-1.5 font-mono text-[11px] tracking-[0.06em] text-faint`}>
        <span>SPAN</span>
        <span>LAYER</span>
        <span>REQUEST → RESPONSE</span>
      </div>
      <div className="relative px-[18px] pb-3">
        {!reduce && (
          <div aria-hidden="true" className={`pointer-events-none absolute inset-x-[18px] top-0 bottom-3 z-10 ${cols}`}>
            <span />
            <span />
            <span className="relative block">
              <m.span
                key={cycle}
                className="absolute inset-y-0 w-px bg-fg"
                initial={{ left: '0%', opacity: 0.7 }}
                animate={{ left: '100%', opacity: [0.7, 0.7, 0] }}
                transition={{ duration: 2.6, ease: [0.4, 0, 0.2, 1], opacity: { duration: 2.6, times: [0, 0.85, 1] } }}
              />
            </span>
          </div>
        )}
        {trace.map((span, i) => (
          <div key={span.name} className={`${cols} h-10 items-center border-t border-line-soft`}>
            <span className="truncate font-mono text-[13px] text-fg" style={{ paddingLeft: span.depth * 8 }}>
              {span.name}
            </span>
            <span className="truncate text-[13px] text-muted-fg">{span.layer}</span>
            <span aria-hidden="true" className="relative block h-3">
              <m.span
                key={`${span.name}-${cycle}`}
                className={
                  span.highlight
                    ? 'stripes absolute top-0 h-3 origin-left animate-stripes rounded-[2px] bg-signal'
                    : 'absolute top-0 h-3 origin-left rounded-[2px] bg-bar'
                }
                style={{ left: `${span.offset * 100}%`, width: `${span.width * 100}%` }}
                initial={reduce ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1], delay: i * 0.17 }}
              />
            </span>
          </div>
        ))}
      </div>
      <figcaption className="border-t border-line px-[18px] py-3.5 font-mono text-xs leading-relaxed text-faint">
        React on the surface, Go underneath, LLMs where they earn their latency.
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="dot-grid border-b border-line">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-[72px] lg:px-10 lg:py-[120px]">
        <div className="flex min-w-0 flex-col gap-7">
          <m.p
            className="m-0 flex items-center gap-2.5 font-mono text-[13px] text-muted-fg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span aria-hidden="true" className="size-2 rounded-[2px] bg-signal" />
            {profile.role.replace('Software Development Engineer', 'SDE')} at {profile.company} · {profile.location}
          </m.p>
          <h1 id="hero-title" className="m-0 text-[clamp(40px,5vw,64px)] leading-[1.04] font-semibold tracking-[-0.035em]">
            <span className="sr-only">
              {profile.headlinePrefix} {profile.headlineWords.join(' ')}
            </span>
            <span aria-hidden="true" className="block">
              {profile.headlinePrefix}
            </span>
            <WordRoller words={profile.headlineWords} />
          </h1>
          <p className="m-0 max-w-[34em] text-[17px] leading-relaxed text-pretty text-muted-fg md:text-[19px]">{profile.intro}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="flex min-h-12 items-center gap-2.5 rounded-lg bg-signal px-5 text-[15px] font-semibold text-on-signal transition-transform hover:-translate-y-px"
            >
              See the work
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href={profile.resume}
              download
              className="flex min-h-12 items-center gap-2.5 rounded-lg border border-line-strong bg-surface px-5 text-[15px] font-medium text-fg transition-colors hover:border-faint"
            >
              Download resume
              <span className="font-mono text-xs text-faint">PDF</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[13px]">
            <a href={profile.github.href} className="flex min-h-11 items-center gap-1.5 text-muted-fg hover:text-fg">
              github/{profile.github.handle}
              <ArrowUpRight />
            </a>
            <a href={profile.linkedin.href} className="flex min-h-11 items-center gap-1.5 text-muted-fg hover:text-fg">
              linkedin/{profile.linkedin.handle}
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <TracePanel />
      </div>
    </section>
  )
}
