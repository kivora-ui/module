import * as React from "react";
import { Text, View, type PressableProps } from "react-native";
import { cn } from "@kivora/theme";

export interface SliderProps extends Omit<PressableProps, "onValueChange"> {
  defaultValue?: number[];
  formatValue?: (value: number, index: number, values: number[]) => React.ReactNode;
  max?: number;
  min?: number;
  onValueChange?: (value: number[]) => void;
  rangeClassName?: string;
  showValue?: boolean;
  step?: number;
  thumbClassName?: string;
  trackClassName?: string;
  valueLabelClassName?: string;
  value?: number[];
}

const getPercentage = (value: number, min: number, max: number) => {
  if (max <= min) {
    return 0;
  }
  return Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
};

function ValueLabel({ children, center, width, className, onHeight }: {
  children: React.ReactNode;
  center: number;
  width: number;
  className?: string;
  onHeight: (height: number) => void;
}) {
  const [labelWidth, setLabelWidth] = React.useState(0);
  return (
    <View
      style={{
        position: "absolute",
        alignSelf: "flex-start",
        left: Math.max(0, Math.min(width - labelWidth, center - labelWidth / 2)),
        maxWidth: width || undefined,
      }}
      onLayout={({ nativeEvent: { layout } }) => {
        // Yoga rounds to physical pixels. Feeding fractional measurements back
        // into the absolute position can alternate forever on Android densities.
        setLabelWidth(Math.ceil(layout.width));
        onHeight(Math.ceil(layout.height));
      }}
    >
      <Text
        style={{ includeFontPadding: false }}
        className={cn(
          "rounded-md border border-border bg-popover px-2 py-1 text-center text-xs font-medium text-popover-foreground",
          className,
        )}
      >
        {children}
      </Text>
    </View>
  );
}

export const Slider: React.ForwardRefExoticComponent<
  SliderProps & React.RefAttributes<React.ComponentRef<typeof View>>
> = React.forwardRef<React.ComponentRef<typeof View>, SliderProps>(
  (
    {
      className,
      defaultValue = [0],
      disabled,
      formatValue = (currentValue) => currentValue,
      max = 100,
      min = 0,
      onValueChange,
      rangeClassName,
      showValue = false,
      step = 1,
      thumbClassName,
      trackClassName,
      valueLabelClassName,
      value,
      style,
      onLayout,
      onAccessibilityAction,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const [width, setWidth] = React.useState(0);
    const [labelHeight, setLabelHeight] = React.useState(24);
    const activeIndex = React.useRef(0);
    const upper = Math.max(min, max);
    const increment = Number.isFinite(step) && step > 0 ? step : 1;
    const snap = (n: number) => {
      const bounded = Math.min(upper, Math.max(min, n));
      if (bounded === upper) return upper;
      return Math.min(
        upper,
        Math.max(
          min,
          Number((min + Math.round((bounded - min) / increment) * increment).toFixed(10))
        )
      );
    };
    const values = (value ?? internalValue).length
      ? (value ?? internalValue)
          .map((n) => snap(Number.isFinite(n) ? n : min))
          .sort((a, b) => a - b)
      : [min];
    activeIndex.current = Math.min(activeIndex.current, values.length - 1);
    const latest = React.useRef(values);
    latest.current = values;
    const usableWidth = Math.max(0, width - 20);
    const position = (n: number) => (usableWidth * getPercentage(n, min, upper)) / 100;
    const update = (n: number) => {
      if (disabled || upper <= min) return;
      const next = [...latest.current];
      const index = activeIndex.current;
      next[index] = Math.max(next[index - 1] ?? min, Math.min(next[index + 1] ?? upper, snap(n)));
      if (next[index] === latest.current[index]) return;
      latest.current = next;
      if (value === undefined) setInternalValue(next);
      onValueChange?.(next);
    };
    const fromX = (x: number) =>
      min + Math.max(0, Math.min(1, (x - 10) / usableWidth)) * (upper - min);
    const start = values.length > 1 ? position(values[0] ?? min) : 0;
    const end = position(values[values.length - 1] ?? min);

    return (
      <View
        ref={ref}
        {...props}
        style={typeof style === "function" ? style({ pressed: false }) : style}
        accessible
        accessibilityRole="adjustable"
        accessibilityState={{ disabled: !!disabled }}
        accessibilityValue={{ max: upper, min, now: values[activeIndex.current] ?? values[0] }}
        accessibilityActions={[{ name: "increment" }, { name: "decrement" }]}
        onAccessibilityAction={(event) => {
          const action = event.nativeEvent.actionName;
          if (action === "increment" || action === "decrement") {
            update(
              (latest.current[activeIndex.current] ?? min) +
                (action === "increment" ? increment : -increment)
            );
          }
          onAccessibilityAction?.(event);
        }}
        onLayout={(event) => {
          setWidth(event.nativeEvent.layout.width);
          onLayout?.(event);
        }}
        onStartShouldSetResponder={() => !disabled && usableWidth > 0 && upper > min}
        onResponderTerminationRequest={() => false}
        onResponderGrant={(event) => {
          const target = fromX(event.nativeEvent.locationX);
          activeIndex.current = values.reduce(
            (closest, n, index) =>
              Math.abs(n - target) < Math.abs((values[closest] ?? min) - target) ? index : closest,
            0
          );
          update(target);
        }}
        onResponderMove={(event) => update(fromX(event.nativeEvent.locationX))}
        className={cn("w-full", disabled && "opacity-50", className)}
      >
        {showValue ? (
          <View pointerEvents="none" style={{ height: labelHeight + 4 }}>
            {values.map((n, index) => (
              <ValueLabel
                key={index}
                center={10 + position(n)}
                width={width}
                className={valueLabelClassName}
                onHeight={setLabelHeight}
              >
                {formatValue(n, index, values)}
              </ValueLabel>
            ))}
          </View>
        ) : null}
        <View
          pointerEvents="none"
          style={{ height: 48, marginHorizontal: 10, justifyContent: "center" }}
        >
          <View
            className={cn("h-2 w-full overflow-hidden rounded-full bg-secondary", trackClassName)}
          >
            <View
              className={cn("h-full bg-primary", rangeClassName)}
              style={{ marginLeft: start, width: end - start }}
            />
          </View>
          {values.map((n, index) => (
            <View
              key={index}
              className={cn(
                "absolute h-5 w-5 rounded-full border border-primary bg-background",
                thumbClassName
              )}
              style={{ left: position(n), transform: [{ translateX: -10 }] }}
            />
          ))}
        </View>
      </View>
    );
  }
);
Slider.displayName = "Slider";
