import { useReducedMotion } from "react-native-reanimated";
import * as React from "react";
import {
  Modal,
  Pressable,
  View,
  type PressableProps,
  type ViewProps,
} from "react-native";
import { BottomSheet } from "./bottom-sheet";
import { styledText, styledView } from "../lib/primitives";
import { cn } from "@kivora/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { KeyboardScrollView } from "./keyboard-scroll-view";
interface SheetState {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const Context = React.createContext<SheetState | null>(null);
function useSheet() {
  const ctx = React.useContext(Context);
  if (!ctx) throw new Error("Sheet components require Sheet");
  return ctx;
}
export type SheetSide = "bottom" | "top" | "left" | "right";
export interface SheetProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}
export function Sheet({
  open,
  defaultOpen = false,
  onOpenChange,
  children,
}: SheetProps) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const context = React.useMemo<SheetState>(
    () => ({
      open: open ?? internal,
      setOpen: (next) => {
        if (open === undefined) setInternal(next);
        onOpenChange?.(next);
      },
    }),
    [open, internal, onOpenChange],
  );
  return <Context.Provider value={context}>{children}</Context.Provider>;
}
export function SheetTrigger({ onPress, ...props }: PressableProps) {
  const ctx = useSheet();
  return (
    <Pressable
      accessibilityRole="button"
      {...props}
      onPress={(e) => {
        ctx.setOpen(true);
        onPress?.(e);
      }}
    />
  );
}
export function SheetClose({ onPress, ...props }: PressableProps) {
  const ctx = useSheet();
  return (
    <Pressable
      accessibilityRole="button"
      {...props}
      onPress={(e) => {
        ctx.setOpen(false);
        onPress?.(e);
      }}
    />
  );
}
export interface SheetContentProps extends ViewProps {
  side?: SheetSide;
}
export function SheetContent({
  side = "bottom",
  className,
  children,
  ...props
}: SheetContentProps) {
  const ctx = useSheet();
  const insets = useSafeAreaInsets();
  const reducedMotion = useReducedMotion();
  if (side === "bottom")
    return (
      <BottomSheet
        open={ctx.open}
        onOpenChange={ctx.setOpen}
        className={className}
        children={children}
        {...props}
      />
    );
  return (
    <Modal
      visible={ctx.open}
      transparent
      animationType={reducedMotion ? "none" : "fade"}
      onRequestClose={() => ctx.setOpen(false)}
    >
      <KeyboardProvider preload={false}>
        <View
          className={cn(
            "flex-1 bg-black/50",
            side === "right" ? "items-end" : "items-start",
          )}
        >
          <Pressable
            accessibilityLabel="Cerrar panel"
            style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
            onPress={() => ctx.setOpen(false)}
          />
          <KeyboardScrollView
            bottomOffset={24}
            keyboardShouldPersistTaps="handled"
            style={{
              flexGrow: 0,
              maxHeight: "100%",
              height: side === "top" ? undefined : "100%",
              width: side === "top" ? "100%" : "80%",
            }}
            contentContainerStyle={{ flexGrow: 1 }}
          >
          <View
            {...props}
            style={[
              {
                paddingTop: Math.max(24, insets.top),
                paddingBottom: Math.max(24, insets.bottom),
              },
              props.style,
            ]}
            className={cn(
              "gap-4 bg-background p-6",
              "w-full flex-grow",
              className,
            )}
          >{children}</View>
          </KeyboardScrollView>
        </View>
      </KeyboardProvider>
    </Modal>
  );
}
export const SheetTitle: ReturnType<typeof styledText> = styledText(
  "SheetTitle",
  "text-xl font-semibold",
);
export const SheetDescription: ReturnType<typeof styledText> = styledText(
  "SheetDescription",
  "text-muted-foreground",
);
export const SheetHeader: ReturnType<typeof styledView> = styledView(
  "SheetHeader",
  "gap-2",
);
export const SheetFooter: ReturnType<typeof styledView> = styledView(
  "SheetFooter",
  "flex-row flex-wrap justify-end gap-2",
);
/** The native host owns its overlay and portal; these preserve composition without a second overlay. */
export function SheetPortal({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}
export function SheetOverlay() {
  return null;
}
