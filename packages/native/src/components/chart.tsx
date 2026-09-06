import * as React from "react";
import { Pressable, Text, View, type ViewProps } from "react-native";
export type ChartConfig = Record<string, { label?: string; color?: string }>;
export interface ChartDatum {
  label: string;
  value: number;
  key?: string;
}
interface ChartState {
  config: ChartConfig;
  selected?: ChartDatum;
}
const Context = React.createContext<ChartState>({ config: {} });
export interface ChartContainerProps extends ViewProps {
  config: ChartConfig;
  data?: ChartDatum[];
  height?: number;
  onValueSelect?: (value: ChartDatum) => void;
}
/** Native bars with touch selection; web chart-renderer children are not transferable. */
export function ChartContainer({
  config,
  data = [],
  height = 180,
  onValueSelect,
  children,
  ...props
}: ChartContainerProps) {
  const [selected, setSelected] = React.useState<ChartDatum>();
  const max = Math.max(1, ...data.map((d) => Math.abs(d.value)));
  return (
    <Context.Provider value={{ config, selected }}>
      <View {...props} className="gap-3">
        <View style={{ height }} className="flex-row items-end gap-2">
          {data.map((d, i) => (
            <Pressable
              key={d.key ?? i}
              accessibilityRole="button"
              accessibilityLabel={`${d.label}: ${d.value}`}
              accessibilityState={{ selected: selected === d }}
              style={{ flex: 1, height: "100%", justifyContent: "flex-end" }}
              onPress={() => {
                setSelected(d);
                onValueSelect?.(d);
              }}
            >
              <Text className="text-center text-sm text-foreground">
                {d.value}
              </Text>
              <View
                style={{
                  height: Math.max(
                    2,
                    (Math.abs(d.value) / max) * (height - 50),
                  ),
                  backgroundColor: config[d.key ?? d.label]?.color ?? "#737373",
                  opacity: selected && selected !== d ? 0.45 : 1,
                }}
                className="rounded-t"
              />
              <Text
                numberOfLines={1}
                className="mt-1 text-center text-sm text-muted-foreground"
              >
                {d.label}
              </Text>
            </Pressable>
          ))}
        </View>
        {children}
      </View>
    </Context.Provider>
  );
}
export function ChartLegend() {
  const { config } = React.useContext(Context);
  return (
    <View className="flex-row flex-wrap gap-3">
      {Object.entries(config).map(([key, item]) => (
        <View key={key} className="flex-row items-center gap-2">
          <View
            style={{ backgroundColor: item.color ?? "#737373" }}
            className="h-3 w-3 rounded"
          />
          <Text className="text-sm text-foreground">{item.label ?? key}</Text>
        </View>
      ))}
    </View>
  );
}
export interface ChartTooltipContentProps extends ViewProps {
  formatter?: (value: number, label: string) => React.ReactNode;
}
export function ChartTooltipContent({
  formatter,
  ...props
}: ChartTooltipContentProps) {
  const { selected } = React.useContext(Context);
  return selected ? (
    <View {...props} className="rounded border border-border bg-popover p-2">
      <Text className="text-popover-foreground">
        {formatter
          ? formatter(selected.value, selected.label)
          : `${selected.label}: ${selected.value}`}
      </Text>
    </View>
  ) : null;
}
export const ChartTooltip = ChartTooltipContent;
