import * as React from "react";
import {
  Modal,
  Keyboard,
  View,
  useWindowDimensions,
  TextInput,
  type TextInputProps,
  type ViewProps,
} from "react-native";
import GorhomBottomSheet, {
  BottomSheetBackdrop,
  useBottomSheetTimingConfigs,
  type BottomSheetBackdropProps,
  type BottomSheetBackgroundProps,
} from "@gorhom/bottom-sheet";
import { Easing, ReduceMotion, type WithTimingConfig } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { cn } from "@kivora/theme";
import { useKivoraTheme } from "../provider";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { KeyboardSheetScrollView } from "../lib/keyboard-sheet-scroll-view";

export interface BottomSheetProps extends ViewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Opening duration in milliseconds. Defaults to 320; minimum 1. */
  animationDuration?: number;
  /** Closing duration. Defaults to animationDuration + 60 ms; minimum 1. */
  closingAnimationDuration?: number;
  /** Timing curve shared by opening and closing. Defaults to Easing.out(Easing.cubic). */
  animationEasing?: WithTimingConfig["easing"];
}

const DEFAULT_ANIMATION_EASING = Easing.out(Easing.cubic);

function SheetBackground({ style }: BottomSheetBackgroundProps) {
  return (
    <View
      pointerEvents="none"
      style={style}
      className="rounded-t-2xl border border-border bg-popover"
    />
  );
}

function SheetBackdrop(props: BottomSheetBackdropProps) {
  return (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      pressBehavior="close"
      opacity={0.45}
      accessibilityLabel="Cerrar panel"
      accessibilityHint="Cierra el panel inferior"
    />
  );
}

/** A native Modal hosts Gorhom so sheets retain theme/context and Android back handling. */
export function BottomSheet({
  open,
  onOpenChange,
  children,
  className,
  animationDuration = 320,
  closingAnimationDuration,
  animationEasing = DEFAULT_ANIMATION_EASING,
  ...props
}: BottomSheetProps) {
  const sheet = React.useRef<GorhomBottomSheet>(null);
  const [mounted, setMounted] = React.useState(open);
  const [hasOpened, setHasOpened] = React.useState(false);
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { resolvedColorMode } = useKivoraTheme();
  const openingDuration = Number.isFinite(animationDuration) ? Math.max(1, animationDuration) : 320;
  const openingConfigs = useBottomSheetTimingConfigs({
    duration: openingDuration,
    easing: animationEasing,
    reduceMotion: ReduceMotion.System,
  });
  const closingConfigs = useBottomSheetTimingConfigs({
    duration: closingAnimationDuration !== undefined && Number.isFinite(closingAnimationDuration)
      ? Math.max(1, closingAnimationDuration)
      : openingDuration + 60,
    easing: animationEasing,
    reduceMotion: ReduceMotion.System,
  });
  const latest = React.useRef({ open, onOpenChange, openingConfigs, closingConfigs });
  latest.current = { open, onOpenChange, openingConfigs, closingConfigs };

  React.useLayoutEffect(() => {
    if (open) {
      Keyboard.dismiss();
      setMounted(true);
      sheet.current?.expand(latest.current.openingConfigs);
    } else {
      sheet.current?.close(latest.current.closingConfigs);
    }
  }, [open]);

  const close = React.useCallback(() => {
    Keyboard.dismiss();
    sheet.current?.close(latest.current.closingConfigs);
  }, []);
  const onClose = React.useCallback(() => {
    Keyboard.dismiss();
    setMounted(false);
    setHasOpened(false);
    if (latest.current.open) latest.current.onOpenChange(false);
  }, []);
  const onChange = React.useCallback((index: number) => {
    if (index >= 0) setHasOpened(true);
  }, []);

  // Mount in the same commit as the opening prop. Retain only for the exit
  // animation instead of waiting for an effect before creating the native Modal.
  if (!open && !mounted) return null;
  return (
    <Modal
      transparent
      visible
      animationType="none"
      statusBarTranslucent
      navigationBarTranslucent
      onRequestClose={close}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardProvider statusBarTranslucent navigationBarTranslucent preload={false}>
          <GorhomBottomSheet
            ref={sheet}
            index={0}
            // Mount with the opening timing; subsequent backdrop and gesture
            // transitions use the slightly slower closing timing.
            animationConfigs={hasOpened || !open ? closingConfigs : openingConfigs}
            enableDynamicSizing
            enablePanDownToClose
            maxDynamicContentSize={Math.max(1, height * 0.8 - insets.top)}
            topInset={insets.top}
            backdropComponent={SheetBackdrop}
            backgroundComponent={SheetBackground}
            handleIndicatorStyle={{
              backgroundColor:
                resolvedColorMode === "dark" ? "#a3a3a3" : "#737373",
            }}
            keyboardBehavior="interactive"
            keyboardBlurBehavior="restore"
            android_keyboardInputMode="adjustResize"
            enableBlurKeyboardOnGesture
            onClose={onClose}
            onChange={onChange}
          >
            <KeyboardSheetScrollView
              bottomOffset={24}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{
                paddingBottom: Math.max(insets.bottom, 16),
              }}
            >
              <View {...props} className={cn("gap-4 px-4 pb-4", className)}>
                {children}
              </View>
            </KeyboardSheetScrollView>
          </GorhomBottomSheet>
        </KeyboardProvider>
      </GestureHandlerRootView>
    </Modal>
  );
}

// KeyboardAwareScrollView owns focus tracking. A regular TextInput avoids
// applying Gorhom's keyboard translation on top of the automatic scroll.
export const BottomSheetInput: React.ForwardRefExoticComponent<
  TextInputProps & React.RefAttributes<React.ComponentRef<typeof TextInput>>
> = React.forwardRef<React.ComponentRef<typeof TextInput>, TextInputProps>(
  ({ className, ...props }, ref) => (
    <TextInput
      ref={ref}
      placeholderTextColor="#737373"
      {...props}
      className={cn(
        "min-h-12 rounded-md border border-input bg-background px-3 py-2 text-base text-foreground",
        className,
      )}
    />
  ),
);
BottomSheetInput.displayName = "BottomSheetInput";
