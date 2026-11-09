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

/** Small italic serif label above a section title, as in the reference design. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('m-0 font-serif text-lg text-muted-fg italic', className)}>{children}</p>
}

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}) {
  const headingId = `${id}-title`
  return (
    <section id={id} aria-labelledby={headingId} className={cn('mx-auto max-w-[1200px] px-5 pt-24 sm:px-8 md:pt-32 lg:px-10', className)}>
      <Reveal className="mb-12 flex flex-col items-center gap-2 text-center md:mb-16">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={headingId} className="m-0 text-[clamp(34px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.035em]">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  )
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted-fg', className)}>{children}</span>
  )
}
