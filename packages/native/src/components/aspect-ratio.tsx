import * as React from "react";
import { View, type ViewProps } from "react-native";
export interface AspectRatioProps extends ViewProps {
  ratio?: number;
}
export function AspectRatio({ ratio = 1, style, ...props }: AspectRatioProps) {
  return (
    <View
      {...props}
      style={[{ width: "100%", aspectRatio: ratio > 0 ? ratio : 1 }, style]}
    />
  );
}
