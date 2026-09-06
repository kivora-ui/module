// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { MessageScroller } from "./message-scroller";

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

describe("MessageScroller", () => {
  it("renders scrollable conversation content", () => {
    render(<MessageScroller className="h-64">Conversation</MessageScroller>);

    expect(screen.getByText("Conversation")).toBeInTheDocument();
  });
});
