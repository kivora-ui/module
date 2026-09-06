import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@kivora/theme";

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  ratio?: number;
}

export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ asChild = false, className, ratio = 16 / 9, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-ratio={ratio}
        className={cn("relative w-full overflow-hidden", className)}
        style={{
          aspectRatio: ratio,
          ...style
        }}
        {...props}
      />
    );
  }
);
AspectRatio.displayName = "AspectRatio";
