"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@kivora/theme";
import { useOverlayViewport } from "../hooks/use-overlay-viewport";

interface PopoverContextValue {
  open: boolean;
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

export type PopoverProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>;

export function Popover({ defaultOpen = false, open, onOpenChange, ...props }: PopoverProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;

  return (
    <PopoverContext.Provider value={{ open: currentOpen }}>
      <PopoverPrimitive.Root
        open={currentOpen}
        onOpenChange={(nextOpen) => {
          if (open === undefined) {
            setInternalOpen(nextOpen);
          }
          onOpenChange?.(nextOpen);
        }}
        {...props}
      />
    </PopoverContext.Provider>
  );
}

export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverAnchor = PopoverPrimitive.Anchor;
export const PopoverClose = PopoverPrimitive.Close;

export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {}

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ align = "center", children, className, sideOffset = 8, style, ...props }, ref) => {
  const context = React.useContext(PopoverContext);
  const viewport = useOverlayViewport(!!context?.open, ref, true);
  if (!context) {
    throw new Error("PopoverContent must be used within Popover");
  }

  return (
    <AnimatePresence>
      {context.open ? (
        <PopoverPrimitive.Portal forceMount>
          <PopoverPrimitive.Content
            ref={viewport.ref}
            align={align}
            asChild
            forceMount
            sideOffset={sideOffset}
            {...props}
          >
            <motion.div
              style={{ ...viewport.style, position: "relative", top: "var(--kivora-viewport-shift, 0px)", ...style }}
              className={cn(
                "z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none",
                className
              )}
              initial={{ opacity: 0, scale: 0.96, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -4 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              {children}
            </motion.div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      ) : null}
    </AnimatePresence>
  );
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;
