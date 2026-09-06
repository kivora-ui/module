// @vitest-environment jsdom
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Code } from "./code";

describe("Code", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined)
      }
    });
  });

  it("renders an inline code element", () => {
    render(<Code inline>pnpm install</Code>);

    expect(screen.getByText("pnpm install").tagName).toBe("CODE");
  });

  it("renders a syntax highlighted block with filename", () => {
    render(
      <Code filename="button.tsx" language="tsx">
        {"export function Button() {\n  return <button />;\n}"}
      </Code>
    );

    expect(screen.getByText("button.tsx")).toBeInTheDocument();
    expect(screen.getByText(/export/)).toBeInTheDocument();
  });

  it("copies code when copyable", async () => {
    render(
      <Code copyable language="ts">
        {"const value = 1;"}
      </Code>
    );

    fireEvent.click(screen.getByRole("button", { name: "Copy code" }));

    await waitFor(() => expect(navigator.clipboard.writeText).toHaveBeenCalledWith("const value = 1;"));
    expect(screen.getByRole("button", { name: "Code copied" })).toBeInTheDocument();
  });
});
