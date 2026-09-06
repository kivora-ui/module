"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@kivora/theme";

interface HoverCardContextValue {
  open: boolean;
}

const HoverCardContext = React.createContext<HoverCardContextValue | null>(null);

export type HoverCardProps = React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Root>;

export function HoverCard({
  closeDelay = 120,
  defaultOpen = false,
  open,
  onOpenChange,
  openDelay = 160,
  ...props
}: HoverCardProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;

  return (
    <HoverCardContext.Provider value={{ open: currentOpen }}>
      <HoverCardPrimitive.Root
        closeDelay={closeDelay}
        open={currentOpen}
        onOpenChange={(nextOpen) => {
          if (open === undefined) {
            setInternalOpen(nextOpen);
          }
          onOpenChange?.(nextOpen);
        }}
        openDelay={openDelay}
        {...props}
      />
    </HoverCardContext.Provider>
  );
}

export const HoverCardTrigger = HoverCardPrimitive.Trigger;

export interface HoverCardContentProps
  extends React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> {}

export const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(({ align = "center", children, className, sideOffset = 8, ...props }, ref) => {
  const context = React.useContext(HoverCardContext);
  if (!context) {
    throw new Error("HoverCardContent must be used within HoverCard");
  }

  return (
    <AnimatePresence>
      {context.open ? (
        <HoverCardPrimitive.Portal forceMount>
          <HoverCardPrimitive.Content
            ref={ref}
            align={align}
            asChild
            forceMount
            sideOffset={sideOffset}
            {...props}
          >
            <motion.div
              className={cn(
                "z-50 w-80 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none",
                className
              )}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              style={{ transformOrigin: "var(--radix-hover-card-content-transform-origin)" }}
              transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
            >
              {children}
            </motion.div>
          </HoverCardPrimitive.Content>
        </HoverCardPrimitive.Portal>
      ) : null}
    </AnimatePresence>
  );
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
