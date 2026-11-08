import { contactLinks, profile } from '@/data/portfolio'
import { ArrowUpRight, DownloadIcon, Reveal } from './primitives'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-[1200px] px-5 pt-16 pb-16 sm:px-8 md:pt-24 md:pb-24 lg:px-10 lg:pt-28">
      <Reveal>
        <div className="dot-grid grid grid-cols-1 gap-x-16 gap-y-10 rounded-2xl border border-line bg-surface p-7 md:p-12 lg:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-[18px]">
            <span className="font-mono text-[13px] text-signal">05 — Contact</span>
            <h2 id="contact-title" className="m-0 text-[clamp(32px,4vw,48px)] leading-[1.05] font-semibold tracking-[-0.035em] text-balance">
              Building something data-heavy? Let’s talk.
            </h2>
            <p className="m-0 max-w-[30em] text-[17px] leading-relaxed text-muted-fg">
              Email is the fastest way to reach me. I reply within a couple of days.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="flex min-h-12 max-w-full items-center gap-2.5 self-start rounded-lg bg-signal px-5 font-mono text-[15px] font-semibold text-on-signal transition-transform hover:-translate-y-px"
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <span className="truncate">{profile.email}</span>
            </a>
          </div>
          <ul className="m-0 min-w-0 list-none self-end border-t border-line p-0">
            {contactLinks.map((l) => (
              <li key={l.label} className="border-b border-line">
                <a
                  href={l.href}
                  download={l.download || undefined}
                  className="group flex min-h-[60px] items-center gap-4 text-fg"
                >
                  <span className="w-[84px] flex-none font-mono text-xs tracking-[0.04em] text-faint uppercase">{l.label}</span>
                  <span className="min-w-0 flex-auto truncate text-base font-medium">{l.value}</span>
                  {l.download ? (
                    <DownloadIcon className="text-muted-fg transition-transform group-hover:translate-y-0.5" />
                  ) : (
                    <ArrowUpRight className="size-4 text-muted-fg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-5 font-mono text-xs text-faint sm:px-8 lg:px-10">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>React 19 · Vite · Tailwind v4 · Motion</span>
        <a href="#top" className="flex min-h-11 items-center text-muted-fg hover:text-fg">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
