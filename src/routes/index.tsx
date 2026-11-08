import { createFileRoute } from '@tanstack/react-router'
import { Contact, Footer } from '@/components/site/Contact'
import { Experience } from '@/components/site/Experience'
import { Hero } from '@/components/site/Hero'
import { KeyNumbers } from '@/components/site/KeyNumbers'
import { Nav } from '@/components/site/Nav'
import { Projects } from '@/components/site/Projects'
import { Record } from '@/components/site/Record'
import { Stack } from '@/components/site/Stack'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div id="top" className="min-h-screen bg-bg text-fg">
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-signal px-4 py-3 text-sm font-semibold text-on-signal focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <KeyNumbers />
        <Experience />
        <Stack />
        <Projects />
        <Record />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
