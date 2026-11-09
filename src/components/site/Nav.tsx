import { Briefcase, FolderGit2, House, Mail, UserRound, type LucideIcon } from 'lucide-react'
import { m } from 'motion/react'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { nav, profile, type NavId } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/use-active-section'
import { useScrolled } from '@/hooks/use-scrolled'
import { resolveTheme, useThemeStore } from '@/stores/themeStore'

const icons: Record<NavId, LucideIcon> = {
  top: House,
  about: UserRound,
  work: Briefcase,
  projects: FolderGit2,
  contact: Mail,
}

const ids = nav.map((item) => item.id)

function ThemeToggle() {
  const { theme, setTheme } = useThemeStore()
  const resolved = resolveTheme(theme)
  return (
    <AnimatedThemeToggler
      theme={resolved}
      onThemeChange={setTheme}
      duration={600}
      aria-label={resolved === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid size-11 cursor-pointer place-items-center rounded-full border border-line bg-surface/70 text-muted-fg backdrop-blur-md transition-colors hover:border-line-strong hover:text-fg [&_svg]:size-[18px] [&_svg]:stroke-[1.75]"
    />
  )
}

/** Dark pill of section links; the white pill slides to the section in view. */
function SectionPills({ glass }: { glass: boolean }) {
  const active = useActiveSection(ids)
  return (
    <ul
      className={`m-0 flex list-none items-center gap-0.5 rounded-full border p-1.5 shadow-[0_12px_32px_-12px_var(--shadow)] transition-[background-color,border-color,box-shadow] duration-500 ${
        glass
          ? 'border-white/15 bg-pill/70 shadow-[inset_0_1px_0_rgb(255_255_255/0.18),inset_0_-1px_0_rgb(255_255_255/0.05),0_16px_40px_-14px_var(--shadow)] backdrop-blur-xl backdrop-saturate-[1.8]'
          : 'border-transparent bg-pill'
      }`}
    >
      {nav.map((item) => {
        const Icon = icons[item.id]
        const on = item.id === active
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={on ? 'location' : undefined}
              className={`relative flex min-h-11 items-center gap-2 rounded-full px-3 text-[15px] whitespace-nowrap transition-colors sm:px-4 ${
                on ? 'text-pill-active-fg' : 'text-pill-fg/85 hover:text-pill-fg'
              }`}
            >
              {on && (
                <m.span
                  layoutId="nav-pill"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-pill-active"
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                />
              )}
              <Icon aria-hidden="true" className={`relative size-[18px] ${on ? '' : 'sm:hidden'}`} strokeWidth={1.75} />
              <span className={`relative ${on ? '' : 'sr-only sm:not-sr-only'}`}>{item.label}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export function Nav() {
  const scrolled = useScrolled()
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 pb-6">
      {/* Frosted band behind the bar once the page scrolls; it fades out at its lower edge. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-bg/40 backdrop-blur-2xl backdrop-saturate-150 transition-opacity duration-500 [mask-image:linear-gradient(to_bottom,black_55%,transparent)] ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <nav aria-label="Sections" className="pointer-events-auto relative mx-auto flex max-w-[1200px] items-center justify-center gap-3 px-4 pt-4 sm:px-8 md:justify-between lg:px-10">
        <a href="#top" className="hidden min-h-11 min-w-40 items-center font-serif text-2xl text-fg italic md:flex">
          {profile.name}
        </a>
        <SectionPills glass={scrolled} />
        <div className="flex min-w-40 justify-end max-md:min-w-0">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
