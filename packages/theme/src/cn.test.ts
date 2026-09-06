import { describe, expect, it } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("resolves conflicting Tailwind classes, keeping the last one", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });

  it("drops falsy values", () => {
    expect(cn("text-sm", false, undefined, "font-medium")).toBe("text-sm font-medium");
  });
});
