"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { AnimatePresence, motion } from "motion/react";

export type CollapsibleProps = React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>;

interface CollapsibleContextValue {
  open: boolean;
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(null);

export function Collapsible({
  defaultOpen = false,
  open,
  onOpenChange,
  ...props
}: CollapsibleProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const currentOpen = open ?? internalOpen;

  return (
    <CollapsibleContext.Provider value={{ open: currentOpen }}>
      <CollapsiblePrimitive.Root
        open={currentOpen}
        onOpenChange={(nextOpen) => {
          if (open === undefined) {
            setInternalOpen(nextOpen);
          }
          onOpenChange?.(nextOpen);
        }}
        {...props}
      />
    </CollapsibleContext.Provider>
  );
}

export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

export interface CollapsibleContentProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content> {}

export const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  CollapsibleContentProps
>(({ children, className, forceMount, ...props }, ref) => {
  const context = React.useContext(CollapsibleContext);
  if (!context) {
    throw new Error("CollapsibleContent must be used within Collapsible");
  }

  return (
    <AnimatePresence initial={false}>
      {(context.open || forceMount) ? (
        <CollapsiblePrimitive.Content ref={ref} asChild forceMount {...props}>
          <motion.div
            className="overflow-hidden will-change-[height,opacity]"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.26, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.18, ease: "easeOut" }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.12, ease: "easeIn" }
              }
            }}
          >
            <div className={className}>{children}</div>
          </motion.div>
        </CollapsiblePrimitive.Content>
      ) : null}
    </AnimatePresence>
  );
});
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName;
