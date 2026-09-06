import { useReducedMotion } from "react-native-reanimated";
import * as React from "react";
import {
  Modal,
  Pressable,
  Text,
  View,
  type ModalProps,
  type PressableProps,
  type TextProps,
  type ViewProps,
} from "react-native";
import { cn } from "@kivora/theme";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { KeyboardScrollView } from "./keyboard-scroll-view";

interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

function useDialog() {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog components must be used within Dialog");
  }
  return context;
}

export interface DialogProps {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface DialogTriggerProps extends PressableProps {
  asChild?: boolean;
  children?: React.ReactNode;
}

export interface DialogContentProps extends Omit<
  ModalProps,
  "visible" | "transparent" | "animationType"
> {
  children?: React.ReactNode;
  className?: string;
}

export type DialogCloseProps = PressableProps;
export type DialogHeaderProps = ViewProps;
export type DialogFooterProps = ViewProps;
export type DialogTitleProps = TextProps;
export type DialogDescriptionProps = TextProps;

export function Dialog({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
}: DialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = open !== undefined;
  const currentOpen = isControlled ? open : internalOpen;

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const context = React.useMemo(
    () => ({ open: currentOpen, setOpen }),
    [currentOpen, setOpen],
  );
  return (
    <DialogContext.Provider value={context}>{children}</DialogContext.Provider>
  );
}

export function DialogTrigger({
  asChild: _asChild,
  onPress,
  ...props
}: DialogTriggerProps) {
  const { setOpen } = useDialog();
  return (
    <Pressable
      accessibilityRole="button"
      onPress={(event) => {
        onPress?.(event);
        setOpen(true);
      }}
      {...props}
    />
  );
}

export function DialogContent({
  children,
  className,
  onRequestClose,
  ...props
}: DialogContentProps) {
  const { open, setOpen } = useDialog();
  const reducedMotion = useReducedMotion();
  return (
    <Modal
      animationType={reducedMotion ? "none" : "fade"}
      transparent
      visible={open}
      onRequestClose={(event) => {
        onRequestClose?.(event);
        setOpen(false);
      }}
      {...props}
    >
      <KeyboardProvider preload={false}>
        <KeyboardScrollView
          bottomOffset={24}
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: "center", padding: 16 }}
          className="bg-background/80"
        >
          <View
            className={cn(
              "w-full max-w-lg gap-4 rounded-lg border border-border/60 bg-background p-6 shadow-sm",
              className,
            )}
          >
            {children}
          </View>
        </KeyboardScrollView>
      </KeyboardProvider>
    </Modal>
  );
}

export function DialogClose({ onPress, ...props }: DialogCloseProps) {
  const { setOpen } = useDialog();
  return (
    <Pressable
      accessibilityRole="button"
      onPress={(event) => {
        onPress?.(event);
        setOpen(false);
      }}
      {...props}
    />
  );
}

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return <View className={cn("gap-1.5", className)} {...props} />;
}

export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return (
    <View
      className={cn("gap-2 sm:flex-row sm:justify-end", className)}
      {...props}
    />
  );
}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <Text
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <Text
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export function DialogPortal({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

export function DialogOverlay(props: ViewProps) {
  return <View {...props} />;
}
