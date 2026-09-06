// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Attachment, AttachmentContent, AttachmentProgress, AttachmentTitle } from "./attachment";

describe("Attachment", () => {
  it("renders title and progress state", () => {
    render(
      <Attachment progress={64}>
        <AttachmentContent>
          <AttachmentTitle>dashboard.pdf</AttachmentTitle>
          <AttachmentProgress value={64} />
        </AttachmentContent>
      </Attachment>
    );

    expect(screen.getByText("dashboard.pdf").closest("[data-uploading='true']")).toBeInTheDocument();
  });
});
