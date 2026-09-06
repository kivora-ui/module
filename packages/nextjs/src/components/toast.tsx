"use client";

import * as React from "react";
import { Toaster as SonnerToaster, toast } from "sonner";
import { cn } from "@kivora/theme";

export type ToasterProps = React.ComponentPropsWithoutRef<typeof SonnerToaster>;

export function Toaster({ className, toastOptions, ...props }: ToasterProps) {
  return (
    <SonnerToaster
      className={cn("toaster group", className)}
      toastOptions={{
        ...toastOptions,
        classNames: {
          toast:
            "group toast group-[.toaster]:border-border/70 group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          ...toastOptions?.classNames
        }
      }}
      {...props}
    />
  );
}

export { toast };
