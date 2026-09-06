import { breakpoints } from "./breakpoints";
import type { Breakpoint } from "./breakpoints";

export function getBreakpoint(width: number): Breakpoint {
  if (width >= breakpoints.desktop) return "desktop";
  if (width >= breakpoints.tablet) return "tablet";
  return "mobile";
}
