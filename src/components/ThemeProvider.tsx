import Head from "next/head";
import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { isTheme, THEME_COLORS, THEME_STORAGE_KEY } from "../utils/theme";
import type { Theme } from "../utils/theme";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const preference = useRef<Theme | null>(null);

  const applyTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      preference.current = isTheme(saved) ? saved : null;
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
    const initial = document.documentElement.dataset.theme;
    const systemTheme = media.matches ? "light" : "dark";
    applyTheme(isTheme(initial) ? initial : systemTheme);

    const followSystem = () => {
      if (!preference.current) applyTheme(media.matches ? "light" : "dark");
    };
    const syncPreference = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
      preference.current = isTheme(event.newValue) ? event.newValue : null;
      applyTheme(preference.current || (media.matches ? "light" : "dark"));
    };

    media.addEventListener("change", followSystem);
    window.addEventListener("storage", syncPreference);
    return () => {
      media.removeEventListener("change", followSystem);
      window.removeEventListener("storage", syncPreference);
    };
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    preference.current = next;
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
