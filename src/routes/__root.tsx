import { useThemeStore } from '@/stores/themeStore';
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useEffect } from 'react';
import '../index.css'
import Header from '@/components/Header';
import CursorFollower from '@/components/CursorFollower';

const RootComponent = () => {
    //theme settings
    const { theme } = useThemeStore();

    useEffect(() => {
        const root = document.documentElement
        root.classList.remove('light', 'dark')
        console.log('root.classList', root.classList)

        if (theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            root.classList.add(prefersDark ? 'dark' : 'light')
        } else {
            root.classList.add(theme)
        }
    }, [theme])

    return (
        <>
            {/* Faded grid pattern at the top of the page */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] overflow-hidden
                    bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
                    bg-[size:44px_44px]
                    [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_40%,transparent_100%)]"
            />

            <CursorFollower />
            <Header />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    )
}

export const Route = createRootRoute({

    component: RootComponent,
    notFoundComponent: () => (
        <div className="p-4 text-red-500">
            <h1 className="text-2xl">404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    ),
})




