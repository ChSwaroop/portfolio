import { nav, profile } from '@/data/portfolio'
import { useNow } from '@/hooks/use-ticker'
import { resolveTheme, useThemeStore } from '@/stores/themeStore'
import { DownloadIcon } from './primitives'

const clockFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: profile.timeZone,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

function Clock() {
  const now = useNow()
  return (
    <span className="hidden items-center gap-2 pr-2 font-mono text-xs text-faint tabular-nums lg:flex">
      <span aria-hidden="true" className="size-1.5 animate-breathe rounded-full bg-signal" />
      <span>
        <span className="sr-only">Local time in India: </span>
        {profile.timeZoneLabel} <time>{clockFormat.format(now)}</time>
      </span>
    </span>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useThemeStore()
  const isDark = resolveTheme(theme) === 'dark'
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid size-11 place-items-center rounded-lg border border-line text-muted-fg transition-colors hover:border-line-strong hover:text-fg"
    >
      {isDark ? (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  )
}

function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {nav.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="flex min-h-11 items-center gap-2 whitespace-nowrap rounded-md px-3 font-mono text-[13px] text-muted-fg transition-colors hover:bg-raised hover:text-fg"
          >
            <span className="text-faint">{item.n}</span>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-nav backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-4 py-2.5 md:gap-6">
          <a href="#top" className="flex min-h-11 items-center gap-3 text-fg">
            <span aria-hidden="true" className="relative grid size-8 place-items-center rounded-md border border-line-strong font-mono text-xs font-semibold">
              {profile.initials}
              <span className="absolute -right-[3px] -bottom-[3px] size-[7px] rounded-[2px] bg-signal" />
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.01em]">{profile.name}</span>
          </a>
          <NavLinks className="hidden flex-1 justify-center gap-0.5 md:flex" />
          <div className="ml-auto flex items-center gap-2">
            <Clock />
            <ThemeToggle />
            <a
              href={profile.resume}
              download
              className="flex min-h-11 items-center gap-2 rounded-lg bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              <DownloadIcon />
              Resume
            </a>
          </div>
        </div>
        <NavLinks className="-mx-2 flex gap-0.5 overflow-x-auto border-t border-line py-1 md:hidden" />
      </nav>
    </header>
  )
}
