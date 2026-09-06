import { describe, expect, it } from "vitest";
import { resolveColorMode } from "./resolve-color-mode";

describe("resolveColorMode", () => {
  it("returns the explicit mode when it is light or dark", () => {
    expect(resolveColorMode("dark", "light")).toBe("dark");
    expect(resolveColorMode("light", "dark")).toBe("light");
  });

  it("falls back to the system color mode when set to system", () => {
    expect(resolveColorMode("system", "dark")).toBe("dark");
    expect(resolveColorMode("system", "light")).toBe("light");
  });
});
