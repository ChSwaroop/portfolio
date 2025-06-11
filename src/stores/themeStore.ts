import { create } from "zustand";
import { persist } from "zustand/middleware";

// It manages the theme state using Zustand and persists it in local storage.
export type Theme = "light" | "dark" | "system";

export interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme",
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);
