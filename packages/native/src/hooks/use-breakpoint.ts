import { useWindowDimensions } from "react-native";
import { getBreakpoint } from "@kivora/theme";
import type { Breakpoint } from "@kivora/theme";

export function useBreakpoint(): Breakpoint {
  const { width } = useWindowDimensions();
  return getBreakpoint(width);
}
