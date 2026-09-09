"use client";

import * as React from "react";
import { cn } from "@kivora/theme";
import { ScrollArea, type ScrollAreaProps } from "./scroll-area";

export interface MessageScrollerProps extends Extract<ScrollAreaProps, { virtualized?: false }> {
  follow?: boolean;
}

export const MessageScroller = React.forwardRef<HTMLDivElement, MessageScrollerProps>(
  ({ children, className, follow = true, ...props }, ref) => {
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!follow) return;
      contentRef.current?.scrollIntoView({ block: "end" });
    }, [children, follow]);

    return (
      <ScrollArea ref={ref} className={cn("h-full min-h-0", className)} {...props}>
        <div className="flex min-h-full flex-col gap-4 p-4">
          {children}
          <div ref={contentRef} />
        </div>
      </ScrollArea>
    );
  }
);
MessageScroller.displayName = "MessageScroller";
