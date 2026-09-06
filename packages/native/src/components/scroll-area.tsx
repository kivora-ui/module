import * as React from "react";
import {
  FlatList,
  ScrollView,
  type FlatListProps,
  type ScrollViewProps,
  type ViewProps,
} from "react-native";
export type ScrollAreaProps = ScrollViewProps;
export const ScrollArea: React.ForwardRefExoticComponent<
  ScrollAreaProps & React.RefAttributes<React.ComponentRef<typeof ScrollView>>
> = React.forwardRef<React.ComponentRef<typeof ScrollView>, ScrollAreaProps>(
  (props, ref) => (
    <ScrollView ref={ref} keyboardShouldPersistTaps="handled" {...props} />
  ),
);
export type VirtualScrollAreaProps<T> = FlatListProps<T>;
export function VirtualScrollArea<T>(props: VirtualScrollAreaProps<T>) {
  return <FlatList keyboardShouldPersistTaps="handled" {...props} />;
}
/** Native scroll indicators are owned by ScrollView; configure showsVerticalScrollIndicator there. */
export type ScrollBarProps = ViewProps;
export function ScrollBar(_props: ScrollBarProps) {
  return null;
}
