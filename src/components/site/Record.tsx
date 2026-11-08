import { achievements, education } from '@/data/portfolio'
import { Reveal, Section } from './primitives'

export function Record() {
  return (
    <Section id="record" index="04" title="Record" meta="achievements · education">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal className="min-w-0">
          <h3 className="m-0 mb-3 font-mono text-xs font-medium tracking-[0.06em] text-faint">ACHIEVEMENTS</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left font-mono text-[11px] tracking-[0.06em] text-faint">
                <th scope="col" className="w-24 border-b border-line py-2.5 pr-4 font-medium">RESULT</th>
                <th scope="col" className="border-b border-line py-2.5 font-medium">WHERE</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((a) => (
                <tr key={a.title}>
                  <td className="border-b border-line py-[18px] pr-4 align-top font-mono text-xl font-semibold whitespace-nowrap text-signal tabular-nums">
                    {a.result}
                  </td>
                  <td className="border-b border-line py-[18px] align-top">
                    <span className="block text-base font-semibold">{a.title}</span>
                    <span className="mt-1 block text-sm text-muted-fg">{a.detail}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Reveal className="min-w-0" delay={0.08}>
          <h3 className="m-0 mb-3 font-mono text-xs font-medium tracking-[0.06em] text-faint">EDUCATION</h3>
          <ol className="m-0 list-none border-t border-line p-0">
            {education.map((e, i) => (
              <li key={e.degree} className="flex gap-[18px] border-b border-line py-[22px]">
                <span
                  aria-hidden="true"
                  className={`mt-[7px] size-[9px] flex-none rounded-full border-2 ${i === 0 ? 'border-signal bg-signal' : 'border-line-strong'}`}
                />
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-[17px] font-semibold tracking-[-0.01em]">{e.degree}</span>
                  <span className="text-[15px] text-muted-fg">{e.school}</span>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  )
}
