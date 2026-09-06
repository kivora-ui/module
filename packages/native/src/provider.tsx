import * as React from "react";
import { Appearance } from "react-native";
import { useColorScheme as useNativewindColorScheme } from "nativewind";
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
  const { setColorScheme } = useNativewindColorScheme();

  const [systemColorMode, setSystemColorMode] = React.useState<"light" | "dark">(
    () => Appearance.getColorScheme() ?? "light"
  );

  React.useEffect(() => {
    if (colorMode !== "system") return;
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemColorMode(colorScheme ?? "light");
    });
    return () => subscription.remove();
  }, [colorMode]);

  const resolvedColorMode = resolveColorMode(colorMode, systemColorMode);

  // nativewind@5 preview doesn't document setColorScheme's reference stability;
  // if it changes identity every render, this effect may re-fire more than needed.
  React.useEffect(() => {
    setColorScheme(resolvedColorMode);
  }, [resolvedColorMode, setColorScheme]);

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
