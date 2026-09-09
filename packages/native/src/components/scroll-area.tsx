import * as React from "react";
import {
  FlatList,
  ScrollView,
  type FlatListProps,
  type ScrollViewProps,
  type ViewProps,
} from "react-native";
export type ScrollAreaProps<TItem = unknown> =
  | (ScrollViewProps & { virtualized?: false; ref?: React.Ref<React.ComponentRef<typeof ScrollView>> })
  | (FlatListProps<TItem> & { virtualized: true; ref?: React.Ref<FlatList<TItem>> });

export const ScrollArea = React.forwardRef(function ScrollAreaInner<TItem>(
  props: ScrollAreaProps<TItem>, ref: React.ForwardedRef<React.ComponentRef<typeof ScrollView> | FlatList<TItem>>
) {
  if (props.virtualized) {
    const { virtualized, ...rest } = props;
    return <FlatList keyboardShouldPersistTaps="handled" {...rest} ref={ref as React.Ref<FlatList<TItem>>} />;
  }
  const { virtualized, ...rest } = props;
  return <ScrollView keyboardShouldPersistTaps="handled" {...rest} ref={ref as React.Ref<React.ComponentRef<typeof ScrollView>>} />;
}) as <TItem = unknown>(props: ScrollAreaProps<TItem>) => React.ReactElement;

/** Native scroll indicators are owned by ScrollView; configure showsVerticalScrollIndicator there. */
export type ScrollBarProps = ViewProps;
export function ScrollBar(_props: ScrollBarProps) {
  return null;
}
