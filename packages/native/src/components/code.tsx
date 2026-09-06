import * as React from "react";
import { ScrollView, Share, Text, View, type ViewProps } from "react-native";
import { Button } from "./button";
import { cn } from "@kivora/theme";
import { useKivoraTheme } from "../provider";
import { codeLines } from "../lib/code-tokens";
export type CodeTheme = "light" | "dark" | "system";
export interface CodeProps extends ViewProps {
  code?: string;
  language?: string;
  showLineNumbers?: boolean;
  theme?: CodeTheme;
}
export function Code({
  code,
  children,
  language = "text",
  showLineNumbers,
  theme = "system",
  className,
  style,
  ...props
}: CodeProps) {
  const source = code ?? (typeof children === "string" ? children : "");
  const { resolvedColorMode } = useKivoraTheme();
  const dark = (theme === "system" ? resolvedColorMode : theme) === "dark";
  const ink = { color: dark ? "#abb2bf" : "#383a42" };
  const lines = React.useMemo(() => codeLines(source, language), [source, language]);
  const colors: Record<string, string> = {
    comment: dark ? "#9da5b4" : "#696c77",
    string: dark ? "#98c379" : "#507b28",
    keyword: dark ? "#c678dd" : "#a626a4",
    boolean: dark ? "#d19a66" : "#986801",
    number: dark ? "#d19a66" : "#986801",
    property: dark ? "#e06c75" : "#a62632",
    "property-access": dark ? "#e06c75" : "#a62632",
    function: dark ? "#61afef" : "#036bb8",
    tag: dark ? "#e06c75" : "#a62632",
    "attr-name": dark ? "#d19a66" : "#986801",
    "attr-value": dark ? "#98c379" : "#507b28",
    operator: dark ? "#56b6c2" : "#087f8c",
    "class-name": dark ? "#e5c07b" : "#986801",
  };
  return (
    <View
      {...props}
      className={cn(
        "gap-2 rounded-lg border border-border bg-muted p-3",
        className,
      )}
      style={[
        { backgroundColor: dark ? "#282c34" : "#fafafa" },
        style,
      ]}
    >
      <View className="flex-row items-center justify-between">
        <Text style={ink} className="text-sm text-muted-foreground">
          {language}
        </Text>
        <Button
          variant="ghost"
          accessibilityLabel="Compartir código"
          onPress={() => void Share.share({ message: source })}
        >
          <Text style={ink} className="text-foreground">
            Compartir
          </Text>
        </Button>
      </View>
      <ScrollView horizontal>
        <Text
          selectable
          style={ink}
          className="font-mono text-sm text-foreground"
        >
          {lines.map((line, i) => <React.Fragment key={i}>
            {i > 0 ? "\n" : null}
            {showLineNumbers && <Text style={{ color: dark ? "#9da5b4" : "#696c77" }}>{`${String(i + 1).padStart(String(lines.length).length)}  `}</Text>}
            {line.map((token, j) => <Text key={j} style={{ color: colors[token.type ?? ""] ?? ink.color }}>{token.text}</Text>)}
          </React.Fragment>)}
        </Text>
      </ScrollView>
    </View>
  );
}
