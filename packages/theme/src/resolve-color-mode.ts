import type { ColorMode } from "./types";

export function resolveColorMode(
  colorMode: ColorMode,
  systemColorMode: "light" | "dark"
): "light" | "dark" {
  return colorMode === "system" ? systemColorMode : colorMode;
}
