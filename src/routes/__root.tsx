import { useThemeStore } from '@/stores/themeStore';
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useEffect } from 'react';
import '../index.css'
import Header from '@/components/Header';

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
            <Header />
            <hr />
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




