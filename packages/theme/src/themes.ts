import { colorTokens, fontSizeTokens, radiusTokens, spacingTokens } from "./tokens";
import type { KivoraTheme } from "./types";

export const lightTheme: KivoraTheme = {
  color: colorTokens.light,
  radius: radiusTokens,
  spacing: spacingTokens,
  fontSize: fontSizeTokens
};

export const darkTheme: KivoraTheme = {
  color: colorTokens.dark,
  radius: radiusTokens,
  spacing: spacingTokens,
  fontSize: fontSizeTokens
};
