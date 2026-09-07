"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@kivora/theme";
import { useOverlayViewport } from "../hooks/use-overlay-viewport";

export type SheetSide = "top" | "right" | "bottom" | "left";
export type SheetProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

interface SheetContextValue {
  open: boolean;
}

const SheetContext = React.createContext<SheetContextValue | null>(null);

export function Sheet({ open, defaultOpen = false, onOpenChange, ...props }: SheetProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;

  return (
    <SheetContext.Provider value={{ open: currentOpen }}>
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
    </SheetContext.Provider>
  );
}

export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetPortal = DialogPrimitive.Portal;

function useSheetState() {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("Sheet components must be used within Sheet");
  }
  return context;
}

export const SheetOverlay = React.forwardRef<
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
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const sideClasses: Record<SheetSide, string> = {
  top: "inset-x-0 top-0 border-b border-border/70",
  right: "inset-y-0 right-0 h-full w-3/4 border-l border-border/70 sm:max-w-sm",
  bottom: "inset-x-0 bottom-0 border-t border-border/70",
  left: "inset-y-0 left-0 h-full w-3/4 border-r border-border/70 sm:max-w-sm"
};

const sideMotion: Record<
  SheetSide,
  {
    initial: { x?: string; y?: string; opacity: number };
    animate: { x?: string; y?: string; opacity: number };
    exit: { x?: string; y?: string; opacity: number };
  }
> = {
  top: {
    initial: { y: "-100%", opacity: 0.95 },
    animate: { y: "0%", opacity: 1 },
    exit: { y: "-100%", opacity: 0.95 }
  },
  right: {
    initial: { x: "100%", opacity: 0.95 },
    animate: { x: "0%", opacity: 1 },
    exit: { x: "100%", opacity: 0.95 }
  },
  bottom: {
    initial: { y: "100%", opacity: 0.95 },
    animate: { y: "0%", opacity: 1 },
    exit: { y: "100%", opacity: 0.95 }
  },
  left: {
    initial: { x: "-100%", opacity: 0.95 },
    animate: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0.95 }
  }
};

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: SheetSide;
  closeLabel?: string;
  portalContainer?: HTMLElement | null;
}

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ side = "right", closeLabel = "Close", portalContainer, className, children, style, ...props }, ref) => {
  const { open } = useSheetState();
  const viewport = useOverlayViewport(open, ref);
  const motionPreset = sideMotion[side];

  return (
    <AnimatePresence>
      {open ? (
        <SheetPortal forceMount container={portalContainer}>
          <SheetOverlay />
          <DialogPrimitive.Content forceMount asChild {...props}>
            <motion.div
              ref={viewport.ref}
              style={{
                ...viewport.style,
                ...(viewport.bounds ? side === "bottom" ? { bottom: viewport.bounds.bottom } :
                  { top: viewport.bounds.top, ...(side !== "top" ? { height: viewport.bounds.height, bottom: "auto" } : {}) } : {}),
                ...style,
              }}
              className={cn(
                "fixed z-50 flex max-h-[var(--kivora-viewport-height,100dvh)] overflow-y-auto overscroll-contain flex-col gap-4 bg-background p-6 shadow-2xl outline-none",
                sideClasses[side],
                className
              )}
              initial={motionPreset.initial}
              animate={motionPreset.animate}
              exit={motionPreset.exit}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              {children}
              <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                <X className="h-4 w-4" />
                <span className="sr-only">{closeLabel}</span>
              </DialogPrimitive.Close>
            </motion.div>
          </DialogPrimitive.Content>
        </SheetPortal>
      ) : null}
    </AnimatePresence>
  );
});
SheetContent.displayName = DialogPrimitive.Content.displayName;

export const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

export const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

export const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
SheetTitle.displayName = DialogPrimitive.Title.displayName;

export const SheetDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = DialogPrimitive.Description.displayName;
