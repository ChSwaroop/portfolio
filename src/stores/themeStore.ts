import { create } from "zustand";
import { persist } from "zustand/middleware";

// Manages the theme with Zustand and persists it to localStorage under "theme".
// Light is the default; "system" follows prefers-color-scheme.
export type Theme = "light" | "dark" | "system";

export interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme",
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);

export function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
