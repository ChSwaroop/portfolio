import { resolveTheme, useThemeStore } from '@/stores/themeStore'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { domAnimation, LazyMotion, MotionConfig } from 'motion/react'
import { lazy, Suspense, useEffect } from 'react'
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import '../index.css'

const Devtools = import.meta.env.DEV
    ? lazy(() => import('@tanstack/react-router-devtools').then((m) => ({ default: m.TanStackRouterDevtools })))
    : () => null

const RootComponent = () => {
    const { theme } = useThemeStore()

    useEffect(() => {
        const apply = () => {
            const root = document.documentElement
            const resolved = resolveTheme(theme)
            root.classList.remove('light', 'dark')
            root.classList.add(resolved)
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolved === 'dark' ? '#0a0b0d' : '#f6f6f4')
        }
        apply()
        if (theme !== 'system') return
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        mq.addEventListener('change', apply)
        return () => mq.removeEventListener('change', apply)
    }, [theme])

    return (
        <MotionConfig reducedMotion="user">
          <LazyMotion features={domAnimation} strict>
            <Outlet />
            <Suspense fallback={null}>
                <Devtools />
            </Suspense>
          </LazyMotion>
        </MotionConfig>
    )
}

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: () => (
        <main className="grid min-h-screen place-items-center bg-bg p-6 text-fg">
            <div className="flex flex-col items-center gap-3 text-center">
                <span className="font-mono text-sm text-signal">404</span>
                <h1 className="text-2xl font-semibold">This page doesn’t exist.</h1>
                <a href="/" className="font-mono text-sm text-muted-fg underline underline-offset-4 hover:text-fg">Back home</a>
            </div>
        </main>
    ),
})
