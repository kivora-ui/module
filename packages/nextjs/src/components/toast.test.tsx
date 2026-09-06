// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toaster } from "./toast";

describe("Toaster", () => {
  it("renders sonner toaster", () => {
    render(<Toaster />);

    expect(screen.getByLabelText(/Notifications/)).toBeInTheDocument();
  });
});
