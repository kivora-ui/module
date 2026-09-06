import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";

const kbdVariants = cva(
  "inline-flex shrink-0 select-none items-center justify-center rounded border font-mono font-medium leading-none shadow-sm",
  {
    variants: {
      variant: {
        default: "border-border/80 bg-muted text-muted-foreground",
        outline: "border-border/80 bg-background text-foreground",
        solid: "border-transparent bg-foreground text-background"
      },
      size: {
        sm: "h-5 min-w-5 px-1 text-[10px]",
        md: "h-6 min-w-6 px-1.5 text-xs",
        lg: "h-7 min-w-7 px-2 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size, variant, ...props }, ref) => (
    <kbd ref={ref} className={cn(kbdVariants({ size, variant, className }))} {...props} />
  )
);
Kbd.displayName = "Kbd";
