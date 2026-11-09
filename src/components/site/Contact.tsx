import { Mail } from 'lucide-react'
import { contactLinks, profile } from '@/data/portfolio'
import { ArrowUpRight, DownloadIcon, Eyebrow, Reveal } from './primitives'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-[1200px] px-5 pt-24 pb-16 sm:px-8 md:pt-32 md:pb-24 lg:px-10">
      <Reveal>
        <div className="glow relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-14 text-center md:px-12 md:py-20">
          <div className="relative flex flex-col items-center gap-5">
            <Eyebrow>/ Get in touch</Eyebrow>
            <h2 id="contact-title" className="m-0 text-[clamp(36px,6vw,72px)] leading-[1] font-medium tracking-[-0.045em] text-balance">
              Let’s build something <span className="font-serif font-normal tracking-[-0.02em] italic">together</span>
            </h2>
            <p className="m-0 max-w-[30em] text-[17px] leading-relaxed text-muted-fg">
              Email is the fastest way to reach me. I reply within a couple of days.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="flex min-h-12 max-w-full items-center gap-2.5 rounded-full bg-ink px-6 text-[15px] font-medium text-on-ink transition-transform hover:-translate-y-px"
            >
              <Mail aria-hidden="true" className="size-4 shrink-0" />
              <span className="truncate">{profile.email}</span>
            </a>
            <ul className="m-0 mt-4 flex list-none flex-wrap justify-center gap-2 p-0">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    download={l.download || undefined}
                    className="group flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface/80 px-4 text-sm font-medium text-fg transition-colors hover:border-line-strong"
                  >
                    {l.label}
                    {l.download ? (
                      <DownloadIcon className="size-3.5 text-muted-fg" />
                    ) : (
                      <ArrowUpRight className="text-muted-fg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 pb-8 text-sm text-faint sm:px-8 lg:px-10">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="font-serif text-lg italic">Designed &amp; built with care</span>
      <a href="#top" className="flex min-h-11 items-center text-muted-fg hover:text-fg">
        Back to top ↑
      </a>
    </footer>
  )
}
