"use client";

import * as React from "react";
import { darkTheme, lightTheme, mergeTheme, resolveColorMode } from "@kivora/theme";
import type { ColorMode, DeepPartial, KivoraTheme } from "@kivora/theme";

interface KivoraContextValue {
  theme: KivoraTheme;
  colorMode: ColorMode;
  resolvedColorMode: "light" | "dark";
  themeName?: string;
}

const KivoraContext = React.createContext<KivoraContextValue | null>(null);

export interface KivoraProviderProps {
  children: React.ReactNode;
  colorMode?: ColorMode;
  theme?: string;
  themeOverrides?: DeepPartial<KivoraTheme>;
}

export function KivoraProvider({
  children,
  colorMode = "system",
  theme,
  themeOverrides
}: KivoraProviderProps) {
  // Match SSR initially; the effect resolves the user's preference after hydration.
  const [systemColorMode, setSystemColorMode] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    if (colorMode !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => setSystemColorMode(media.matches ? "dark" : "light");
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [colorMode]);

  const resolvedColorMode = resolveColorMode(colorMode, systemColorMode);

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", resolvedColorMode === "dark");
    if (theme) {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }, [resolvedColorMode, theme]);

  const activeTheme = React.useMemo(
    () => mergeTheme(resolvedColorMode === "dark" ? darkTheme : lightTheme, themeOverrides),
    [resolvedColorMode, themeOverrides]
  );

  const value = React.useMemo<KivoraContextValue>(
    () => ({ theme: activeTheme, colorMode, resolvedColorMode, themeName: theme }),
    [activeTheme, colorMode, resolvedColorMode, theme]
  );

  return <KivoraContext.Provider value={value}>{children}</KivoraContext.Provider>;
}

export function useKivoraTheme(): KivoraContextValue {
  const ctx = React.useContext(KivoraContext);
  if (!ctx) {
    throw new Error("useKivoraTheme must be used within a KivoraProvider");
  }
  return ctx;
}
