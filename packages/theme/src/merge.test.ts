import { describe, expect, it } from "vitest";
import { mergeTheme } from "./merge";
import { lightTheme } from "./themes";

describe("mergeTheme", () => {
  it("returns the base theme unchanged when no override is given", () => {
    expect(mergeTheme(lightTheme)).toEqual(lightTheme);
  });

  it("merges a partial color override on top of the base theme", () => {
    const result = mergeTheme(lightTheme, { color: { primary: "oklch(0.6 0.2 260)" } });
    expect(result.color.primary).toBe("oklch(0.6 0.2 260)");
    expect(result.color.background).toBe(lightTheme.color.background);
  });

  it("does not mutate the base theme", () => {
    mergeTheme(lightTheme, { color: { primary: "oklch(0.6 0.2 260)" } });
    expect(lightTheme.color.primary).toBe("oklch(0.205 0 0)");
  });
});
