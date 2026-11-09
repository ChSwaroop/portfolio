import { Briefcase, FolderGit2, House, Mail, Moon, Sun, UserRound, type LucideIcon } from 'lucide-react'
import { m } from 'motion/react'
import { nav, profile, type NavId } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/use-active-section'
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
  const isDark = resolveTheme(theme) === 'dark'
  const Icon = isDark ? Sun : Moon
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid size-11 place-items-center rounded-full border border-line bg-surface/70 text-muted-fg backdrop-blur-md transition-colors hover:border-line-strong hover:text-fg"
    >
      <Icon aria-hidden="true" className="size-[18px]" strokeWidth={1.75} />
    </button>
  )
}

/** Dark pill of section links; the white pill slides to the section in view. */
function SectionPills() {
  const active = useActiveSection(ids)
  return (
    <ul className="m-0 flex list-none items-center gap-0.5 rounded-full bg-pill p-1.5 shadow-[0_12px_32px_-12px_var(--shadow)]">
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
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 bg-linear-to-b from-bg via-bg/90 to-transparent pb-6">
      <nav aria-label="Sections" className="pointer-events-auto mx-auto flex max-w-[1200px] items-center justify-center gap-3 px-4 pt-4 sm:px-8 md:justify-between lg:px-10">
        <a href="#top" className="hidden min-h-11 min-w-40 items-center font-serif text-2xl text-fg italic md:flex">
          {profile.name}
        </a>
        <SectionPills />
        <div className="flex min-w-40 justify-end max-md:min-w-0">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
