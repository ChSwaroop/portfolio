// src/components/ThemeToggle.tsx
import { useThemeStore } from "@/stores/themeStore"

export default function ThemeToggle() {
    const { theme, setTheme } = useThemeStore()

    return (
        <div className="flex gap-2">
            <button
                className={`px-2 py-1 rounded ${theme === 'light' ? 'bg-gray-300' : ''}`}
                onClick={() => setTheme('light')}
            >
                Light
            </button>
            <button
                className={`px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-600 text-white' : ''}`}
                onClick={() => setTheme('dark')}
            >
                Dark
            </button>
            <button
                className={`px-2 py-1 rounded ${theme === 'system' ? 'bg-blue-300' : ''}`}
                onClick={() => setTheme('system')}
            >
                System
            </button>
        </div>
    )
}
