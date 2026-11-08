import { profile, projects } from '@/data/portfolio'
import { ArrowUpRight, Reveal, Section } from './primitives'

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      meta={
        <a href={profile.github.href} className="flex min-h-11 items-center gap-1.5 text-muted-fg hover:text-fg">
          All repos on GitHub
          <ArrowUpRight />
        </a>
      }
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06} className="flex">
            <article className="group flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-line-strong">
              <div aria-hidden="true" className="hatch relative flex aspect-[16/10] flex-col justify-between border-b border-line bg-raised p-5 font-mono">
                <span className="text-xs text-faint">
                  ~/{p.name.toLowerCase().replace(/\s+/g, '-')}
                </span>
                <span className="text-[13px] leading-relaxed text-muted-fg">
                  {p.stack.slice(0, 3).join(' · ').toLowerCase()}
                </span>
                <span className="absolute right-5 bottom-5 size-2 rounded-[2px] bg-signal transition-transform duration-300 group-hover:scale-150" />
              </div>
              <div className="flex flex-auto flex-col gap-3 px-[22px] pt-[22px]">
                <div className="flex items-center justify-between gap-2 font-mono text-xs">
                  <span className="text-faint">{p.id}</span>
                  <span className="rounded border border-line px-2 py-[3px] text-muted-fg">{p.kind}</span>
                </div>
                <h3 className="m-0 text-[21px] font-semibold tracking-[-0.02em]">{p.name}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-pretty text-muted-fg">{p.summary}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded bg-raised px-2 py-1 font-mono text-xs text-muted-fg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={p.href}
                className="mt-[18px] flex min-h-[52px] items-center justify-between border-t border-line px-[22px] text-sm font-medium text-fg transition-colors hover:bg-raised"
              >
                View source<span className="sr-only"> for {p.name}</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
