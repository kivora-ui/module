// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ChartTooltipContent } from "./chart";

describe("Chart", () => {
  it("renders tooltip content", () => {
    render(
      <ChartTooltipContent
        active
        label="January"
        payload={[{ color: "#2563eb", name: "Desktop", value: 1200 }]}
      />
    );

    expect(screen.getByText("January")).toBeInTheDocument();
    expect(screen.getByText("Desktop")).toBeInTheDocument();
    expect(screen.getByText("1200")).toBeInTheDocument();
  });
});
