import { achievements, education } from '@/data/portfolio'
import { Reveal, Section } from './primitives'

export function Record() {
  return (
    <Section id="record" eyebrow="/ Along the way" title="Achievements & education">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05} className="flex">
            <article className="flex flex-1 flex-col gap-4 rounded-3xl border border-line bg-surface p-6">
              <span className="font-serif text-5xl leading-none text-signal italic">{a.result}</span>
              <div className="mt-auto flex flex-col gap-1">
                <h3 className="m-0 text-base font-semibold">{a.title}</h3>
                <p className="m-0 text-sm leading-relaxed text-muted-fg">{a.detail}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <h3 className="sr-only">Education</h3>
        <ol className="m-0 mt-4 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
          {education.map((e) => (
            <li key={e.degree} className="flex items-center gap-4 rounded-3xl border border-line bg-surface p-6">
              <span aria-hidden="true" className="grid size-11 flex-none place-items-center rounded-full bg-lime text-lg text-on-lime">
                🎓
              </span>
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[17px] font-semibold tracking-[-0.01em]">{e.degree}</span>
                <span className="text-[15px] text-muted-fg">{e.school}</span>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  )
}
