export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "youmacro-theme";
export const THEME_COLORS = { light: "#fff9fc", dark: "#101015" };

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

// Apply the saved preference before the page paints, including on static exports.
export const THEME_INIT_SCRIPT = `
  (function () {
    var theme;
    try { theme = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)}); } catch (error) {}
    if (theme !== 'light' && theme !== 'dark') {
      theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.dataset.theme = theme;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'light' ? '${THEME_COLORS.light}' : '${THEME_COLORS.dark}';
  })();
`;
