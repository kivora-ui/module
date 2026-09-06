import * as React from "react";
import { ActivityIndicator, type ActivityIndicatorProps } from "react-native";
import { useKivoraTheme } from "../provider";
export type SpinnerProps = ActivityIndicatorProps;
export function Spinner(props: SpinnerProps) {
  const { resolvedColorMode } = useKivoraTheme();
  return (
    <ActivityIndicator
      accessibilityLabel="Cargando"
      color={resolvedColorMode === "dark" ? "#fafafa" : "#171717"}
      {...props}
    />
  );
}
