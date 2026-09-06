"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { IMaskInput } from "react-imask";
import { cn } from "@kivora/theme";
import type { InputSize } from "@kivora/theme";

const sizeClasses: Record<InputSize, string> = {
  default: "h-10 px-3 py-2",
  sm: "h-9 px-3 py-1",
  lg: "h-11 px-4 py-2"
};

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive",
  {
    variants: { size: sizeClasses },
    defaultVariants: { size: "default" }
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  definitions?: Record<string, RegExp>;
  invalid?: boolean;
  lazy?: boolean;
  mask?: string | RegExp;
  onAccept?: (value: string, maskRef: unknown, event?: InputEvent) => void;
  onComplete?: (value: string, maskRef: unknown, event?: InputEvent) => void;
  overwrite?: boolean;
  placeholderChar?: string;
  unmask?: boolean | "typed";
}

const MaskedInput = IMaskInput as React.ComponentType<Record<string, unknown>>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      definitions,
      invalid,
      lazy,
      mask,
      onAccept,
      onComplete,
      overwrite,
      placeholderChar,
      size,
      type,
      unmask,
      "aria-invalid": ariaInvalid,
      ...props
    },
    ref
  ) => {
    const inputClassName = cn(inputVariants({ size, className }));

    if (mask) {
      const maskOptions: Record<string, unknown> = {
        ...props,
        "aria-invalid": ariaInvalid ?? invalid,
        className: inputClassName,
        inputRef: ref,
        mask,
        type: "text"
      };

      if (definitions !== undefined) {
        maskOptions.definitions = definitions;
      }
      if (lazy !== undefined) {
        maskOptions.lazy = lazy;
      }
      if (onAccept !== undefined) {
        maskOptions.onAccept = onAccept;
      }
      if (onComplete !== undefined) {
        maskOptions.onComplete = onComplete;
      }
      if (overwrite !== undefined) {
        maskOptions.overwrite = overwrite;
      }
      if (placeholderChar !== undefined) {
        maskOptions.placeholderChar = placeholderChar;
      }
      if (unmask !== undefined) {
        maskOptions.unmask = unmask;
      }

      return (
        <MaskedInput {...maskOptions} />
      );
    }

    return (
      <input
        ref={ref}
        aria-invalid={ariaInvalid ?? invalid}
        className={inputClassName}
        type={type}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
