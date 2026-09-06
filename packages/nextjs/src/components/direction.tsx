"use client";

import * as React from "react";
import { DirectionProvider as RadixDirectionProvider } from "@radix-ui/react-direction";

export type Direction = "ltr" | "rtl";

export interface DirectionProviderProps {
  children?: React.ReactNode;
  className?: string;
  dir?: Direction;
}

export function DirectionProvider({ children, className, dir = "ltr" }: DirectionProviderProps) {
  return (
    <RadixDirectionProvider dir={dir}>
      <div className={className} dir={dir}>
        {children}
      </div>
    </RadixDirectionProvider>
  );
}
