import type { DeepPartial, KivoraTheme } from "./types";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function mergeTheme(base: KivoraTheme, override?: DeepPartial<KivoraTheme>): KivoraTheme {
  if (!override) return base;

  const result: Record<string, unknown> = { ...base };
  for (const key of Object.keys(override) as Array<keyof KivoraTheme>) {
    const overrideValue = override[key];
    const baseValue = base[key];
    if (isPlainObject(overrideValue) && isPlainObject(baseValue)) {
      result[key] = { ...baseValue, ...overrideValue };
    } else if (overrideValue !== undefined) {
      result[key] = overrideValue;
    }
  }
  return result as unknown as KivoraTheme;
}
