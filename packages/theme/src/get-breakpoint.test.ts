import { describe, expect, it } from "vitest";
import { getBreakpoint } from "./get-breakpoint";

describe("getBreakpoint", () => {
  it("returns mobile below the tablet threshold", () => {
    expect(getBreakpoint(500)).toBe("mobile");
  });

  it("returns tablet at and above the tablet threshold", () => {
    expect(getBreakpoint(768)).toBe("tablet");
    expect(getBreakpoint(900)).toBe("tablet");
  });

  it("returns desktop at and above the desktop threshold", () => {
    expect(getBreakpoint(1024)).toBe("desktop");
    expect(getBreakpoint(1440)).toBe("desktop");
  });
});
