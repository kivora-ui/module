"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@kivora/theme";
import type { InputSize } from "@kivora/theme";

const sizeClasses: Record<InputSize, string> = {
  default: "min-h-24 px-3 py-2",
  sm: "min-h-20 px-3 py-1.5",
  lg: "min-h-32 px-4 py-3"
};

const textareaVariants = cva(
  "flex w-full rounded-md border border-input bg-background text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive",
  {
    variants: { size: sizeClasses },
    defaultVariants: { size: "default" }
  }
);

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  autoResize?: boolean;
  autoResizeDirection?: "down" | "up";
  invalid?: boolean;
  maxRows?: number;
  minRows?: number;
  showCount?: boolean;
}

function assignTextareaRef(
  ref: React.ForwardedRef<HTMLTextAreaElement>,
  element: HTMLTextAreaElement | null
) {
  if (typeof ref === "function") {
    ref(element);
    return;
  }

  if (ref) {
    ref.current = element;
  }
}

function getLineHeight(element: HTMLTextAreaElement) {
  const lineHeight = window.getComputedStyle(element).lineHeight;
  const parsedLineHeight = Number.parseFloat(lineHeight);
  return Number.isFinite(parsedLineHeight) ? parsedLineHeight : 20;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      autoResize = false,
      autoResizeDirection = "down",
      className,
      defaultValue,
      maxRows = 6,
      maxLength,
      minRows,
      onChange,
      showCount = false,
      size,
      invalid,
      value,
      "aria-invalid": ariaInvalid,
      ...props
    },
    ref
  ) => {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const [internalValue, setInternalValue] = React.useState(() =>
      typeof defaultValue === "string" || typeof defaultValue === "number" ? String(defaultValue) : ""
    );
    const currentValue = value === undefined ? internalValue : String(value);
    const count = currentValue.length;

    const resizeTextarea = React.useCallback(() => {
      const textarea = textareaRef.current;
      if (!autoResize || !textarea) {
        return;
      }

      const lineHeight = getLineHeight(textarea);
      const verticalPadding = textarea.offsetHeight - textarea.clientHeight;
      const minimumRows = minRows ?? 1;
      const minHeight = minimumRows * lineHeight + verticalPadding;
      const maxHeight = maxRows * lineHeight + verticalPadding;

      textarea.style.height = "auto";
      const nextHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);
      textarea.style.height = `${nextHeight}px`;
      textarea.style.overflowY = textarea.scrollHeight > maxHeight ? "auto" : "hidden";
    }, [autoResize, maxRows, minRows]);

    React.useLayoutEffect(() => {
      resizeTextarea();
    }, [currentValue, resizeTextarea]);

    return (
      <div
        className={cn(
          "flex w-full flex-col gap-1.5",
          autoResize && autoResizeDirection === "up" && "flex-col-reverse"
        )}
      >
        <textarea
          ref={(element) => {
            textareaRef.current = element;
            assignTextareaRef(ref, element);
          }}
          aria-invalid={ariaInvalid ?? invalid}
          className={cn(textareaVariants({ size, className }), autoResize && "min-h-0 resize-none")}
          defaultValue={defaultValue}
          maxLength={maxLength}
          value={value}
          onChange={(event) => {
            if (value === undefined) {
              setInternalValue(event.currentTarget.value);
            }
            onChange?.(event);
          }}
          {...props}
        />
        {showCount ? (
          <div
            className={cn(
              "text-right text-xs text-muted-foreground",
              maxLength !== undefined && count >= maxLength && "text-destructive"
            )}
          >
            {maxLength === undefined ? count : `${count}/${maxLength}`}
          </div>
        ) : null}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
