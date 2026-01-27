import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "dark" | "light";

export interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      
      toggleTheme: () => {
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        }));
      },
      
      setTheme: (theme) => {
        set({ theme });
      },
    }),
    {
      name: "fakestore-theme",
    },
  ),
);
