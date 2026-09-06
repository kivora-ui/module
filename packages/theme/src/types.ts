export type ColorMode = "light" | "dark" | "system";

export type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

export interface KivoraColorTokens {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
}

export interface KivoraRadiusTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface KivoraSpacingTokens {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface KivoraFontSizeTokens {
  sm: number;
  base: number;
  lg: number;
}

export interface KivoraTheme {
  color: KivoraColorTokens;
  radius: KivoraRadiusTokens;
  spacing: KivoraSpacingTokens;
  fontSize: KivoraFontSizeTokens;
}

// Shared across @kivora/nextjs and @kivora/native so both Button
// implementations are forced to cover the same variant/size set.
export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "default" | "sm" | "lg" | "icon";

export type InputSize = "default" | "sm" | "lg";

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline";
