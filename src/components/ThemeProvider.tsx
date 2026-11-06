import Head from "next/head";
import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  DEFAULT_THEME,
  isTheme,
  THEME_COLORS,
  THEME_STORAGE_KEY,
} from "../utils/theme";
import type { Theme } from "../utils/theme";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  const applyTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }, []);

  useEffect(() => {
    let initial = document.documentElement.dataset.theme;
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      initial = isTheme(saved) ? saved : DEFAULT_THEME;
    } catch {
      // Retain the pre-paint theme when browser storage is unavailable.
    }
    applyTheme(isTheme(initial) ? initial : DEFAULT_THEME);

    const syncPreference = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
      applyTheme(isTheme(event.newValue) ? event.newValue : DEFAULT_THEME);
    };

    window.addEventListener("storage", syncPreference);
    return () => {
      window.removeEventListener("storage", syncPreference);
    };
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Keep the current choice for this session even if it cannot be saved.
    }
  }, [applyTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Head>
        <meta
          name="theme-color"
          content={THEME_COLORS[theme]}
          key="theme-color"
        />
      </Head>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
