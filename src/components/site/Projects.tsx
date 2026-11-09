import { profile, projects, type Project } from '@/data/portfolio'
import { newTab } from '@/lib/links'
import { ArrowUpRight, Reveal, Section } from './primitives'

/** A stylised app window standing in for a screenshot. */
function Preview({ p }: { p: Project }) {
  return (
    <div aria-hidden="true" className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-raised">
      <div className="absolute -right-10 -bottom-16 size-56 rounded-full bg-lime/50 blur-3xl transition-transform duration-500 group-hover:scale-125" />
      <div
        className={`absolute top-8 left-8 flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_48px_-24px_var(--shadow)] transition-transform duration-500 group-hover:-translate-y-1 ${
          p.kind === 'Mobile' ? 'bottom-0 w-36 rounded-b-none' : '-right-6 -bottom-6'
        }`}
      >
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-lime-strong" />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <span className="font-serif text-2xl leading-tight italic">{p.name}</span>
          <span className="h-2 w-3/4 rounded-full bg-raised" />
          <span className="h-2 w-1/2 rounded-full bg-raised" />
          <div className="mt-2 grid grid-cols-3 gap-2">
            <span className="h-10 rounded-lg bg-lime/60" />
            <span className="h-10 rounded-lg bg-raised" />
            <span className="h-10 rounded-lg bg-raised" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="/ Things I’ve built" title="Selected works">
      <ul className="m-0 grid list-none grid-cols-1 gap-x-6 gap-y-10 p-0 md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.id} className="flex">
            <Reveal delay={(i % 2) * 0.06} className="flex flex-1">
              <article className="group relative flex flex-1 flex-col gap-4 rounded-3xl border border-line bg-surface p-3 pb-6">
                <Preview p={p} />
                <div className="flex flex-col gap-2 px-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="m-0 text-xl font-medium tracking-[-0.02em]">
                      <a href={p.href} {...newTab} className="after:absolute after:inset-0 after:rounded-3xl">
                        {p.name}
                      </a>
                    </h3>
                    <span className="flex items-center gap-1.5 text-sm text-muted-fg group-hover:text-fg">
                      {p.kind}
                      <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <p className="m-0 text-[15px] leading-relaxed text-pretty text-muted-fg">{p.summary}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-full bg-raised px-3 py-1 text-xs text-muted-fg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
        <li className="flex">
          <Reveal delay={0.06} className="flex flex-1">
            <a
              href={profile.github.href}
              {...newTab}
              className="group flex min-h-72 flex-1 flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-line-strong p-8 text-center transition-colors hover:border-faint hover:bg-surface"
            >
              <span className="grid size-14 place-items-center rounded-full bg-ink text-on-ink transition-transform group-hover:-translate-y-1">
                <ArrowUpRight className="size-5" />
              </span>
              <span className="font-serif text-3xl italic">More on GitHub</span>
              <span className="text-sm text-muted-fg">github.com/{profile.github.handle}</span>
            </a>
          </Reveal>
        </li>
      </ul>
    </Section>
  )
}
