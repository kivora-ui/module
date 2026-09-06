"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@kivora/theme";
import { useOverlayViewport } from "../hooks/use-overlay-viewport";

export type DialogAnimation = "scale" | "slide-up" | "slide-down" | "fade";

interface DialogContextValue {
  open: boolean;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

export type DialogProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

export function Dialog({ open, defaultOpen = false, onOpenChange, ...props }: DialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;

  return (
    <DialogContext.Provider value={{ open: currentOpen }}>
      <DialogPrimitive.Root
        open={currentOpen}
        onOpenChange={(nextOpen) => {
          if (open === undefined) {
            setInternalOpen(nextOpen);
          }
          onOpenChange?.(nextOpen);
        }}
        {...props}
      />
    </DialogContext.Provider>
  );
}

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogClose = DialogPrimitive.Close;

function useDialogAnimationState() {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog components must be used within Dialog");
  }
  return context;
}

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay forceMount asChild {...props}>
    <motion.div
      ref={ref}
      className={cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
    />
  </DialogPrimitive.Overlay>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const dialogAnimations: Record<
  DialogAnimation,
  {
    initial: { opacity: number; scale?: number; y?: number };
    animate: { opacity: number; scale?: number; y?: number };
    exit: { opacity: number; scale?: number; y?: number };
    transition: { duration: number; ease: [number, number, number, number] };
  }
> = {
  scale: {
    initial: { opacity: 0, scale: 0.96, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.96, y: 10 },
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
  },
  "slide-up": {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 24 },
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
  },
  "slide-down": {
    initial: { opacity: 0, y: -24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.16, ease: [0.16, 1, 0.3, 1] }
  }
};

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  animation?: DialogAnimation;
}

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ animation = "scale", className, children, style, ...props }, ref) => {
  const { open } = useDialogAnimationState();
  const viewport = useOverlayViewport(open, ref);
  const motionPreset = dialogAnimations[animation];

  return (
    <AnimatePresence>
      {open ? (
        <DialogPortal forceMount>
          <DialogOverlay />
          <DialogPrimitive.Content forceMount asChild {...props}>
            <motion.div
              ref={viewport.ref}
              style={{
                ...viewport.style,
                ...(viewport.bounds ? { top: viewport.bounds.top + viewport.bounds.height / 2 } : {}),
                ...style,
              }}
              className={cn(
                "fixed left-1/2 top-1/2 z-50 grid max-h-[calc(var(--kivora-viewport-height,100dvh)-2rem)] overflow-y-auto overscroll-contain w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-border/60 bg-background p-6 shadow-2xl outline-none sm:rounded-lg",
                className
              )}
              initial={motionPreset.initial}
              animate={motionPreset.animate}
              exit={motionPreset.exit}
              transition={motionPreset.transition}
            >
              {children}
              <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </motion.div>
          </DialogPrimitive.Content>
        </DialogPortal>
      ) : null}
    </AnimatePresence>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

export const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
