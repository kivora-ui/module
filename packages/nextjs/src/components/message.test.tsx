// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Message, MessageContent, MessageFooter, MessageGroup, MessageHeader } from "./message";

describe("Message", () => {
  it("renders aligned message parts", () => {
    render(
      <MessageGroup>
        <Message align="end">
          <MessageContent>
            <MessageHeader>You</MessageHeader>
            Message body
            <MessageFooter>Sent</MessageFooter>
          </MessageContent>
        </Message>
      </MessageGroup>
    );

    expect(screen.getByText("You").closest("[data-align='end']")).toHaveClass("flex-row-reverse");
    expect(screen.getByText("Sent")).toHaveClass("text-muted-foreground");
  });
});
