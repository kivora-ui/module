import * as React from "react";
import { AccessibilityInfo, Text, View, type TextProps, type ViewProps } from "react-native";
import Animated, { cancelAnimation, Easing, ReduceMotion, useAnimatedProps, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";
import { SelectionView } from "./selection-motion";

export type AnimationPreset = "fade" | "fade-up" | "fade-down" | "scale";
export interface AnimationOptions {
  /** Milliseconds. */
  duration?: number;
  delay?: number;
  replayKey?: string | number;
  disabled?: boolean;
}
function useProgress({ duration = 500, delay = 0, replayKey, disabled }: AnimationOptions, loop = false) {
  const progress = useSharedValue(1);
  // Start static until the asynchronous accessibility preference is known.
  const [reduced, setReduced] = React.useState(true);
  React.useEffect(() => {
    let active = true;
    let changed = false;
    const subscription = AccessibilityInfo.addEventListener("reduceMotionChanged", value => { changed = true; setReduced(value); });
    AccessibilityInfo.isReduceMotionEnabled().then(value => { if (active && !changed) setReduced(value); }).catch(() => {});
    return () => { active = false; subscription.remove(); };
  }, []);
  React.useEffect(() => {
    cancelAnimation(progress);
    progress.value = 1;
    if (!disabled && !reduced) {
      progress.value = 0;
      const animation = withTiming(1, { duration: Math.max(loop ? 100 : 0, duration), easing: Easing.inOut(Easing.ease), reduceMotion: ReduceMotion.System });
      progress.value = withDelay(Math.max(0, delay), loop ? withRepeat(animation, -1, true, undefined, ReduceMotion.System) : animation, ReduceMotion.System);
    }
    return () => cancelAnimation(progress);
  }, [duration, delay, replayKey, disabled, reduced, loop, progress]);
  return progress;
}
export interface AnimationProps extends ViewProps, AnimationOptions { preset?: AnimationPreset }
export function Animation({ preset = "fade-up", duration, delay, replayKey, disabled, style, ...props }: AnimationProps) {
  const progress = useProgress({ duration, delay, replayKey, disabled });
  const animatedStyle = useAnimatedStyle(() => ({ opacity: progress.value, transform: [{ translateY: (1 - progress.value) * (preset === "fade-up" ? 20 : preset === "fade-down" ? -20 : 0) }, { scale: preset === "scale" ? 0.85 + progress.value * 0.15 : 1 }] }));
  return <View {...props} style={style}><SelectionView style={animatedStyle}>{props.children}</SelectionView></View>;
}
export interface AnimatedTextProps extends Omit<ViewProps, "children">, AnimationOptions {
  children: string;
  split?: "words" | "characters";
  preset?: AnimationPreset;
  stagger?: number;
  textStyle?: TextProps["style"];
}
export function AnimatedText({ children, split = "words", preset = "fade-up", stagger = 50, delay = 0, duration = 400, replayKey, disabled, textStyle, style, ...props }: AnimatedTextProps) {
  const parts = split === "words" ? children.split(/(\s+)/u) : Array.from(children);
  return <View {...props} accessible accessibilityLabel={props.accessibilityLabel ?? children} style={style}><View key={`${children}:${split}`} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={{ flexDirection: "row", flexWrap: "wrap" }}>{parts.map((part, index) => <Animation key={index} preset={preset} duration={duration} delay={Math.max(0, delay) + index * Math.max(0, stagger)} replayKey={replayKey} disabled={disabled}><Text style={textStyle}>{part}</Text></Animation>)}</View></View>;
}
const MotionPath = Animated.createAnimatedComponent(Path);
export interface AnimatedPathProps extends AnimationOptions {
  d: string;
  /** Actual path length in SVG units (required by react-native-svg). */
  pathLength: number;
  viewBox?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  label?: string;
}
export function AnimatedPath({ d, pathLength, viewBox = "0 0 24 24", size = 48, color = "currentColor", strokeWidth = 2, label, ...options }: AnimatedPathProps) {
  const progress = useProgress({ duration: 1000, ...options, replayKey: `${options.replayKey ?? ''}:${d}:${pathLength}` });
  const length = Math.max(0, pathLength);
  const animatedProps = useAnimatedProps(() => ({ strokeDashoffset: length * (1 - progress.value) }));
  return <Svg width={size} height={size} viewBox={viewBox} accessible={!!label} accessibilityElementsHidden={!label} importantForAccessibility={label ? "auto" : "no-hide-descendants"} accessibilityLabel={label}><MotionPath d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={[length, length]} animatedProps={animatedProps} /></Svg>;
}
export interface AnimatedLoaderProps {
  variant?: "dots" | "bars";
  label?: string;
  color?: string;
  size?: number;
  duration?: number;
  disabled?: boolean;
}
function LoaderPart({ index, variant, size, color, duration, disabled }: Required<Pick<AnimatedLoaderProps, "variant" | "size" | "color">> & Pick<AnimatedLoaderProps, "duration" | "disabled"> & { index: number }) {
  const progress = useProgress({ duration: duration ?? 700, delay: index * 120, disabled }, true);
  const style = useAnimatedStyle(() => ({ opacity: 0.4 + progress.value * 0.6, transform: [{ translateY: variant === "dots" ? -size * (1 - progress.value) : 0 }, { scaleY: variant === "bars" ? 0.4 + progress.value * 0.6 : 1 }] }));
  return <SelectionView style={[{ width: size, height: variant === "bars" ? size * 3 : size, borderRadius: variant === "dots" ? size : 2, backgroundColor: color }, style]} />;
}
export function AnimatedLoader({ variant = "dots", label = "Cargando", color = "#71717a", size = 8, duration, disabled }: AnimatedLoaderProps) {
  return <View accessible accessibilityLabel={label} accessibilityRole="progressbar" style={{ flexDirection: "row", alignItems: "center", gap: size / 2, height: size * 3 }}>{[0, 1, 2].map(index => <LoaderPart key={index} index={index} variant={variant} size={size} color={color} duration={duration} disabled={disabled} />)}</View>;
}
