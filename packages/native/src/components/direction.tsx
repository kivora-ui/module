import * as React from "react";
import { View, type ViewProps } from "react-native";
export type Direction = "ltr" | "rtl";
const DirectionContext = React.createContext<Direction>("ltr");
export interface DirectionProviderProps extends ViewProps {
  dir: Direction;
}
export function DirectionProvider({
  dir,
  style,
  ...props
}: DirectionProviderProps) {
  return (
    <DirectionContext.Provider value={dir}>
      <View {...props} style={[{ direction: dir }, style]} />
    </DirectionContext.Provider>
  );
}
export const useDirection = () => React.useContext(DirectionContext);
