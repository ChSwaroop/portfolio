import { m, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn('size-3.5 shrink-0', className)}>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  )
}

export function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn('size-4 shrink-0', className)}>
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  )
}

/** Fades content up once as it scrolls into view. Static under reduced motion. */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.24, ease: 'easeOut', delay }}
    >
      {children}
    </m.div>
  )
}

export function Section({
  id,
  index,
  title,
  meta,
  children,
}: {
  id: string
  index: string
  title: string
  meta?: ReactNode
  children: ReactNode
}) {
  const headingId = `${id}-title`
  return (
    <section id={id} aria-labelledby={headingId} className="mx-auto max-w-[1200px] px-5 pt-16 sm:px-8 md:pt-24 lg:px-10 lg:pt-28">
      <Reveal>
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-line pb-4">
          <h2 id={headingId} className="flex items-baseline gap-3.5 text-[26px] font-semibold tracking-[-0.025em] md:text-[32px]">
            <span className="font-mono text-[13px] font-medium text-signal">{index}</span>
            {title}
          </h2>
          {meta ? <div className="font-mono text-xs text-faint">{meta}</div> : null}
        </div>
      </Reveal>
      {children}
    </section>
  )
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('rounded border border-line px-2 py-1 font-mono text-xs text-muted-fg', className)}>{children}</span>
  )
}
