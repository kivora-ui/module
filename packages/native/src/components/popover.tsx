import * as React from "react";
import {
  AccessibilityInfo, Animated, BackHandler, Easing, findNodeHandle, I18nManager, Keyboard, Modal,
  Pressable, ScrollView, StyleSheet, TextInput, View, useWindowDimensions,
  type GestureResponderEvent, type PressableProps, type ViewProps,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useReducedMotion } from "react-native-reanimated";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { cn } from "@kivora/theme";
import { positionPopover, type PopoverRect, type PopoverSide, type PopoverAlign } from "../lib/popover-position";

type NativeView = React.ComponentRef<typeof View>;

interface PopoverContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  trigger: React.MutableRefObject<NativeView | null>;
  anchor: React.MutableRefObject<NativeView | null>;
}
const PopoverContext = React.createContext<PopoverContextValue | null>(null);
function usePopover() {
  const context = React.useContext(PopoverContext);
  if (!context) throw new Error("Popover components require Popover");
  return context;
}
function assignRef<T>(ref: React.ForwardedRef<T> | undefined, value: T | null) {
  if (typeof ref === "function") ref(value);
  else if (ref) ref.current = value;
}
export interface PopoverProps {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}
export function Popover({ children, defaultOpen = false, onOpenChange, open }: PopoverProps) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const trigger = React.useRef<NativeView>(null);
  const anchor = React.useRef<NativeView>(null);
  const setOpen = React.useCallback((next: boolean) => {
    if (open === undefined) setInternal(next);
    onOpenChange?.(next);
  }, [open, onOpenChange]);
  const context = React.useMemo(() => ({ open: open ?? internal, setOpen, trigger, anchor }), [open, internal, setOpen]);
  return <PopoverContext.Provider value={context}>{children}</PopoverContext.Provider>;
}

export interface PopoverTriggerProps extends PressableProps { asChild?: boolean }
export const PopoverTrigger: React.ForwardRefExoticComponent<PopoverTriggerProps & React.RefAttributes<NativeView>> = React.forwardRef<NativeView, PopoverTriggerProps>(
  ({ asChild, children, onPress, disabled, ...props }, forwardedRef) => {
    const c = usePopover();
    const child = asChild ? React.Children.only(children) as React.ReactElement<PressableProps & { ref?: React.Ref<NativeView> }> : null;
    const ref = React.useCallback((node: NativeView | null) => {
      c.trigger.current = node;
      assignRef(forwardedRef, node);
      assignRef(child?.props.ref, node);
    }, [c.trigger, forwardedRef, child?.props.ref]);
    const press = (event: GestureResponderEvent) => {
      child?.props.onPress?.(event);
      onPress?.(event);
      if (!event.defaultPrevented && !(disabled ?? child?.props.disabled)) c.setOpen(!c.open);
    };
    const merged = { ...props, ref, collapsable: false, disabled: disabled ?? child?.props.disabled,
      accessibilityRole: props.accessibilityRole ?? "button" as const,
      accessibilityState: { ...child?.props.accessibilityState, ...props.accessibilityState, expanded: c.open, disabled: !!(disabled ?? child?.props.disabled) },
      onPress: press };
    return child ? React.cloneElement(child, merged) : <Pressable {...merged}>{children}</Pressable>;
  });
PopoverTrigger.displayName = "PopoverTrigger";

export interface PopoverAnchorProps extends ViewProps { asChild?: boolean }
export const PopoverAnchor: React.ForwardRefExoticComponent<PopoverAnchorProps & React.RefAttributes<NativeView>> = React.forwardRef<NativeView, PopoverAnchorProps>(({ asChild, children, ...props }, forwardedRef) => {
  const c = usePopover();
  const child = asChild ? React.Children.only(children) as React.ReactElement<ViewProps & { ref?: React.Ref<NativeView> }> : null;
  const ref = React.useCallback((node: NativeView | null) => {
    c.anchor.current = node; assignRef(forwardedRef, node); assignRef(child?.props.ref, node);
  }, [c.anchor, forwardedRef, child?.props.ref]);
  return child ? React.cloneElement(child, { ...props, ref, collapsable: false }) : <View {...props} ref={ref} collapsable={false}>{children}</View>;
});
PopoverAnchor.displayName = "PopoverAnchor";

export interface PopoverContentProps extends ViewProps {
  side?: PopoverSide;
  align?: PopoverAlign;
  sideOffset?: number;
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionPadding?: number;
  onInteractOutside?: (event: GestureResponderEvent) => void;
}
export const PopoverContent: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<NativeView>> = React.forwardRef<NativeView, PopoverContentProps>(
  ({ children, className, style, side = "bottom", align = "center", sideOffset = 8,
    alignOffset = 0, avoidCollisions = true, collisionPadding = 8, onInteractOutside, onLayout, onFocus, ...props }, forwardedRef) => {
    const c = usePopover();
    const insets = useSafeAreaInsets();
    const window = useWindowDimensions();
    const reducedMotion = useReducedMotion();
    const root = React.useRef<NativeView>(null);
    const surface = React.useRef<NativeView>(null);
    const scroll = React.useRef<React.ComponentRef<typeof ScrollView>>(null);
    const scrollOffset = React.useRef(0);
    const focused = React.useRef<ReturnType<typeof TextInput.State.currentlyFocusedInput> | null>(null);
    const [focusVersion, setFocusVersion] = React.useState(0);
    const revealInput = React.useCallback(() => {
      const input = focused.current;
      if (!input || input !== TextInput.State.currentlyFocusedInput()) return;
      scroll.current?.getNativeScrollRef()?.measureInWindow((_x, top, _width, height) => {
        input.measureInWindow((_ix, y, _iw, inputHeight) => {
          const delta = y + inputHeight > top + height - 12 ? y + inputHeight - (top + height - 12)
            : y < top + 12 ? y - top - 12 : 0;
          if (delta) scroll.current?.scrollTo({ y: Math.max(0, scrollOffset.current + delta), animated: false });
        });
      });
    }, []);
    const animation = React.useRef(new Animated.Value(0)).current;
    const [present, setPresent] = React.useState(c.open);
    const [frame, setFrame] = React.useState<PopoverRect | null>(null);
    const [anchor, setAnchor] = React.useState<PopoverRect | null>(null);
    const [size, setSize] = React.useState({ width: 0, height: 0 });
    const [keyboardTop, setKeyboardTop] = React.useState<number | null>(null);
    const visible = React.useRef(c.open);
    visible.current = c.open;
    const ref = React.useCallback((node: NativeView | null) => { surface.current = node; assignRef(forwardedRef, node); }, [forwardedRef]);
    const measure = React.useCallback(() => {
      root.current?.measureInWindow((x, y, width, height) => {
        if (!visible.current || !width || !height) return;
        setFrame(previous => previous?.x === x && previous.y === y && previous.width === width && previous.height === height
          ? previous : { x, y, width, height });
        (c.anchor.current ?? c.trigger.current)?.measureInWindow((ax, ay, aw, ah) => {
          if (!visible.current) return;
          setAnchor({ x: ax - x, y: ay - y, width: aw, height: ah });
        });
      });
    }, [c.anchor, c.trigger]);
    React.useEffect(() => {
      let measurement = 0;
      if (c.open) {
        setPresent(true); setAnchor(null); animation.setValue(0);
        measurement = requestAnimationFrame(measure);
      }
      else {
        Animated.timing(animation, { toValue: 0, duration: reducedMotion ? 0 : 160, useNativeDriver: true }).start(({ finished }) => {
          if (finished && !visible.current) {
            setPresent(false);
            const node = findNodeHandle(c.trigger.current);
            if (node) AccessibilityInfo.setAccessibilityFocus(node);
          }
        });
      }
      return () => { cancelAnimationFrame(measurement); animation.stopAnimation(); };
    }, [c.open, animation, reducedMotion, c.trigger, measure]);
    React.useEffect(() => {
      if (!c.open || !anchor || !size.height) return;
      Animated.timing(animation, { toValue: 1, duration: reducedMotion ? 0 : 160,
        easing: Easing.bezier(0.16, 1, 0.3, 1), useNativeDriver: true }).start();
    }, [c.open, !!anchor, size.height > 0, reducedMotion, animation]);
    React.useEffect(() => {
      if (!c.open) return;
      setKeyboardTop(Keyboard.metrics()?.screenY ?? null);
      const show = Keyboard.addListener("keyboardDidShow", event => { setKeyboardTop(event.endCoordinates.screenY); measure(); });
      const hide = Keyboard.addListener("keyboardDidHide", () => { setKeyboardTop(null); measure(); });
      return () => { show.remove(); hide.remove(); };
    }, [c.open, measure]);
    const handleBack = React.useCallback(() => {
      if (Keyboard.isVisible()) Keyboard.dismiss();
      else c.setOpen(false);
      return true;
    }, [c.setOpen]);
    React.useEffect(() => {
      if (!c.open) return;
      const subscription = BackHandler.addEventListener("hardwareBackPress", handleBack);
      return () => subscription.remove();
    }, [c.open, handleBack]);
    React.useEffect(() => { if (present) measure(); }, [present, window.width, window.height, measure]);
    const padding = Math.max(0, collisionPadding);
    const area = { x: insets.left + padding, y: Math.max(0, insets.top - (frame?.y ?? 0)) + padding,
      width: Math.max(1, (frame?.width ?? window.width) - insets.left - insets.right - padding * 2),
      height: 1 };
    const bottom = Math.min(frame?.height ?? window.height, keyboardTop === null ? Infinity : keyboardTop - (frame?.y ?? 0));
    area.height = Math.max(1, bottom - (keyboardTop === null ? insets.bottom : 0) - padding - area.y);
    const position = positionPopover(anchor ?? { x: 0, y: 0, width: 0, height: 0 }, size, area, side, align, sideOffset, alignOffset, avoidCollisions, I18nManager.isRTL);
    React.useEffect(() => {
      if (!present) return;
      // Reveal the input after the floating panel has moved; keyboard-aware
      // automatic scrolling would compensate twice and scroll the content away.
      let nextFrame = 0;
      const frame = requestAnimationFrame(() => { nextFrame = requestAnimationFrame(revealInput); });
      return () => { cancelAnimationFrame(frame); cancelAnimationFrame(nextFrame); };
    }, [present, position.x, position.y, size.height, keyboardTop, focusVersion, revealInput]);
    if (!present) return null;
    return <Modal transparent visible animationType="none"
      onShow={measure} onRequestClose={() => { handleBack(); }} supportedOrientations={["portrait", "landscape"]}>
      <KeyboardProvider preload={false}>
        <View ref={root} collapsable={false} style={{ flex: 1 }} onLayout={measure}>
          <Pressable accessibilityLabel="Cerrar ventana emergente" accessibilityRole="button" style={StyleSheet.absoluteFill}
            onPress={event => { onInteractOutside?.(event); if (!event.defaultPrevented) c.setOpen(false); }} />
          <Animated.View pointerEvents={c.open && anchor ? "auto" : "none"}
            style={{ position: "absolute", left: position.x, top: position.y, maxWidth: area.width, maxHeight: area.height,
              opacity: anchor ? animation : 0, transform: [{ scale: animation.interpolate({ inputRange: [0, 1], outputRange: [0.96, 1] }) },
                { translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [-4, 0] }) }] }}>
            <View {...props} ref={ref} accessibilityViewIsModal onAccessibilityEscape={() => c.setOpen(false)}
              onFocus={event => {
                onFocus?.(event);
                focused.current = TextInput.State.currentlyFocusedInput();
                setFocusVersion(value => value + 1);
              }}
              className={cn("w-72 rounded-md border border-border bg-popover p-4 shadow-md", className)}
              style={[style, { maxWidth: area.width, maxHeight: area.height, flexShrink: 1 }]}
              onLayout={event => {
                const { width, height } = event.nativeEvent.layout;
                setSize(previous => previous.width === width && previous.height === height ? previous : { width, height });
                onLayout?.(event);
              }}>
              <ScrollView ref={scroll} style={{ flexGrow: 0, flexShrink: 1 }} keyboardShouldPersistTaps="handled"
                bounces={false} scrollEventThrottle={16} onScroll={event => { scrollOffset.current = event.nativeEvent.contentOffset.y; }}>
                {children}
              </ScrollView>
            </View>
          </Animated.View>
        </View>
      </KeyboardProvider>
    </Modal>;
  });
PopoverContent.displayName = "PopoverContent";

export interface PopoverCloseProps extends PressableProps { asChild?: boolean }
export const PopoverClose: React.ForwardRefExoticComponent<PopoverCloseProps & React.RefAttributes<NativeView>> = React.forwardRef<NativeView, PopoverCloseProps>(({ asChild, children, onPress, ...props }, ref) => {
  const c = usePopover();
  const child = asChild ? React.Children.only(children) as React.ReactElement<PressableProps & { ref?: React.Ref<NativeView> }> : null;
  const mergedRef = React.useCallback((node: NativeView | null) => { assignRef(ref, node); assignRef(child?.props.ref, node); }, [ref, child?.props.ref]);
  const press = (event: GestureResponderEvent) => {
    child?.props.onPress?.(event); onPress?.(event);
    if (!event.defaultPrevented) c.setOpen(false);
  };
  return child ? React.cloneElement(child, { ...props, ref: mergedRef, onPress: press })
    : <Pressable accessibilityRole="button" {...props} ref={mergedRef} onPress={press}>{children}</Pressable>;
});
PopoverClose.displayName = "PopoverClose";
