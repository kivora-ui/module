import * as React from "react";
import type { LucideIcon, LucideProps } from "lucide-react-native";
import type { Svg } from "react-native-svg";
import { useKivoraTheme } from "../provider";

export interface IconProps extends Omit<LucideProps, "ref"> {
  /** Lucide component to render, imported from lucide-react-native. */
  icon: LucideIcon;
  /** Accessible name. Omit for decorative icons. */
  label?: string;
}

export const Icon = React.forwardRef<Svg, IconProps>(
  ({ icon: IconComponent, label, size = 24, color, ...props }, ref) => {
    // Lucide forwards its ref to Svg, but its LucideIcon alias omits RefAttributes.
    const IconWithRef = IconComponent as React.ComponentType<LucideProps & React.RefAttributes<Svg>>;
    const { resolvedColorMode } = useKivoraTheme();
    const accessible = Boolean(label || props.accessibilityLabel || props["aria-label"]);
    return (
      <IconWithRef
        ref={ref}
        size={size}
        color={color ?? (resolvedColorMode === "dark" ? "#fafafa" : "#171717")}
        accessible={accessible}
        accessibilityRole={accessible ? "image" : undefined}
        accessibilityLabel={label}
        accessibilityElementsHidden={!accessible}
        importantForAccessibility={accessible ? "auto" : "no-hide-descendants"}
        {...props}
      />
    );
  }
);
Icon.displayName = "Icon";
