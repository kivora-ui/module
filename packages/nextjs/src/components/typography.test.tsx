// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyInlineCode,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP
} from "./typography";

describe("Typography", () => {
  it("renders heading styles", () => {
    render(<TypographyH1>Design system</TypographyH1>);

    expect(screen.getByRole("heading", { level: 1 })).toHaveClass("text-4xl", "font-extrabold");
  });

  it("renders paragraph and lead styles", () => {
    render(
      <>
        <TypographyLead>Composable UI primitives.</TypographyLead>
        <TypographyP>Readable content.</TypographyP>
      </>
    );

    expect(screen.getByText("Composable UI primitives.")).toHaveClass("text-xl");
    expect(screen.getByText("Readable content.")).toHaveClass("leading-7");
  });

  it("renders lists, quotes, code, and muted text", () => {
    render(
      <>
        <TypographyList>
          <li>Accessible</li>
        </TypographyList>
        <TypographyBlockquote>Keep it simple.</TypographyBlockquote>
        <TypographyInlineCode>pnpm test</TypographyInlineCode>
        <TypographyMuted>Secondary note</TypographyMuted>
      </>
    );

    expect(screen.getByText("Accessible").closest("ul")).toHaveClass("list-disc");
    expect(screen.getByText("Keep it simple.")).toHaveClass("italic");
    expect(screen.getByText("pnpm test")).toHaveClass("font-mono");
    expect(screen.getByText("Secondary note")).toHaveClass("text-muted-foreground");
  });
});
