"use client";

import * as React from "react";
import { getBreakpoint } from "@kivora/theme";
import type { Breakpoint } from "@kivora/theme";

export function useBreakpoint(): Breakpoint {
  // The first client render must match the server before reading the viewport.
  const [breakpoint, setBreakpoint] = React.useState<Breakpoint>("mobile");

  React.useEffect(() => {
    function handleResize() {
      setBreakpoint(getBreakpoint(window.innerWidth));
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
