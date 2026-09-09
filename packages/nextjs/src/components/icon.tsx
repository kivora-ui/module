import * as React from "react";
import type { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@kivora/theme";

export interface IconProps extends Omit<LucideProps, "ref"> {
  /** Lucide component to render, imported from lucide-react. */
  icon: LucideIcon;
  /** Accessible name. Omit for decorative icons. */
  label?: string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, label, size = 24, className, ...props }, ref) => {
    const accessible = Boolean(label || props["aria-label"] || props["aria-labelledby"]);
    return (
      <IconComponent
        ref={ref}
        size={size}
        className={cn("shrink-0", className)}
        role={accessible ? "img" : undefined}
        aria-hidden={accessible ? undefined : true}
        aria-label={label}
        focusable="false"
        {...props}
      />
    );
  }
);
Icon.displayName = "Icon";
