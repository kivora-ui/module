"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@kivora/theme";
import { useOverlayViewport } from "../hooks/use-overlay-viewport";

export type DrawerProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

interface DrawerContextValue {
  open: boolean;
}

const DrawerContext = React.createContext<DrawerContextValue | null>(null);

export function Drawer({ open, defaultOpen = false, onOpenChange, ...props }: DrawerProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;

  return (
    <DrawerContext.Provider value={{ open: currentOpen }}>
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
    </DrawerContext.Provider>
  );
}

export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerClose = DialogPrimitive.Close;
export const DrawerPortal = DialogPrimitive.Portal;

function useDrawerState() {
  const context = React.useContext(DrawerContext);
  if (!context) {
    throw new Error("Drawer components must be used within Drawer");
  }
  return context;
}

export const DrawerOverlay = React.forwardRef<
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
DrawerOverlay.displayName = DialogPrimitive.Overlay.displayName;

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  showHandle?: boolean;
}

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(({ children, className, showHandle = true, style, ...props }, ref) => {
  const { open } = useDrawerState();
  const viewport = useOverlayViewport(open, ref);

  return (
    <AnimatePresence>
      {open ? (
        <DrawerPortal forceMount>
          <DrawerOverlay />
          <DialogPrimitive.Content forceMount asChild {...props}>
            <motion.div
              ref={viewport.ref}
              style={{ ...viewport.style, ...(viewport.bounds ? { bottom: viewport.bounds.bottom } : {}), ...style }}
              className={cn(
                "fixed inset-x-0 bottom-0 z-50 mx-auto flex max-h-[calc(var(--kivora-viewport-height,100dvh)*0.9)] overflow-y-auto overscroll-contain w-full max-w-2xl flex-col gap-4 rounded-t-xl border border-border/70 bg-background p-6 shadow-2xl outline-none",
                className
              )}
              initial={{ y: "100%", opacity: 0.98 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "100%", opacity: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {showHandle ? <div className="mx-auto h-1.5 w-12 rounded-full bg-muted-foreground/25" /> : null}
              {children}
              <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </motion.div>
          </DialogPrimitive.Content>
        </DrawerPortal>
      ) : null}
    </AnimatePresence>
  );
});
DrawerContent.displayName = DialogPrimitive.Content.displayName;

export const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

export const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

export const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
));
DrawerTitle.displayName = DialogPrimitive.Title.displayName;

export const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = DialogPrimitive.Description.displayName;
