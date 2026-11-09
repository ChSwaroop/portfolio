import { createFileRoute } from '@tanstack/react-router'
import { About } from '@/components/site/About'
import { Contact, Footer } from '@/components/site/Contact'
import { Experience } from '@/components/site/Experience'
import { Hero } from '@/components/site/Hero'
import { Nav } from '@/components/site/Nav'
import { Projects } from '@/components/site/Projects'
import { Record } from '@/components/site/Record'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div id="top" className="min-h-screen bg-bg text-fg">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-on-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Record />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
