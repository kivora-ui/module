// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useBreakpoint } from "./use-breakpoint";

function setWidth(width: number) {
  Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: width });
  window.dispatchEvent(new Event("resize"));
}

describe("useBreakpoint", () => {
  afterEach(() => setWidth(1024));

  it("returns mobile below the tablet breakpoint", () => {
    setWidth(500);
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe("mobile");
  });

  it("updates on resize", () => {
    setWidth(500);
    const { result } = renderHook(() => useBreakpoint());
    act(() => setWidth(1280));
    expect(result.current).toBe("desktop");
  });
});
