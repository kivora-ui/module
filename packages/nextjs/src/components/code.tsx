"use client";

import * as React from "react";
import { Check, Clipboard } from "lucide-react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark, atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { cn } from "@kivora/theme";
import { Button } from "./button";

export type CodeTheme = "light" | "dark";

export interface CodeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  children: string;
  copyable?: boolean;
  filename?: string;
  inline?: boolean;
  language?: string;
  showLineNumbers?: boolean;
  theme?: CodeTheme;
  wrapLongLines?: boolean;
}

export const Code = React.forwardRef<HTMLDivElement, CodeProps>(
  (
    {
      children,
      className,
      copyable = false,
      filename,
      inline = false,
      language = "tsx",
      showLineNumbers = false,
      theme = "light",
      wrapLongLines = true,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = React.useState(false);
    const code = String(children).trimEnd();

    React.useEffect(() => {
      if (!copied) {
        return;
      }

      const timeout = window.setTimeout(() => setCopied(false), 1200);
      return () => window.clearTimeout(timeout);
    }, [copied]);

    if (inline) {
      return (
        <code
          className={cn(
            "rounded border border-border/70 bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground",
            className
          )}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        >
          {code}
        </code>
      );
    }

    const isDark = theme === "dark";

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-md border border-border/70 bg-card text-card-foreground shadow-sm",
          isDark && "bg-zinc-950 text-zinc-50",
          className
        )}
        {...props}
      >
        {(filename || copyable) ? (
          <div
            className={cn(
              "flex min-h-10 items-center justify-between gap-3 border-b border-border/60 bg-muted/50 px-3",
              isDark && "border-white/10 bg-white/5"
            )}
          >
            <div className="min-w-0 truncate font-mono text-xs text-muted-foreground">
              {filename ?? language}
            </div>
            {copyable ? (
              <Button
                aria-label={copied ? "Code copied" : "Copy code"}
                className={cn("h-8 w-8", isDark && "text-zinc-300 hover:bg-white/10 hover:text-white")}
                size="icon"
                type="button"
                variant="ghost"
                onClick={() => {
                  void navigator.clipboard?.writeText(code);
                  setCopied(true);
                }}
              >
                {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
              </Button>
            ) : null}
          </div>
        ) : null}
        <SyntaxHighlighter
          PreTag="div"
          codeTagProps={{
            className: "font-mono text-sm"
          }}
          customStyle={{
            background: "transparent",
            margin: 0,
            padding: "1rem"
          }}
          language={language}
          lineNumberStyle={{
            color: isDark ? "rgba(244,244,245,0.4)" : "rgba(39,39,42,0.45)",
            minWidth: "2.5em",
            paddingRight: "1em",
            textAlign: "right",
            userSelect: "none"
          }}
          showLineNumbers={showLineNumbers}
          style={isDark ? atomOneDark : atomOneLight}
          wrapLongLines={wrapLongLines}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    );
  }
);
Code.displayName = "Code";
