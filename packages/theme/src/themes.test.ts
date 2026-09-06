import { describe, expect, it } from "vitest";
import { darkTheme, lightTheme } from "./themes";

describe("lightTheme / darkTheme", () => {
  it("expose the same token keys so no platform can read an undefined value", () => {
    expect(Object.keys(lightTheme.color).sort()).toEqual(Object.keys(darkTheme.color).sort());
  });

  it("use different background colors for light and dark", () => {
    expect(lightTheme.color.background).not.toBe(darkTheme.color.background);
  });
});
