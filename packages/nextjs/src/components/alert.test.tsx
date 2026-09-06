// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert, AlertDescription, AlertTitle } from "./alert";

describe("Alert", () => {
  it("renders with alert role by default", () => {
    render(<Alert>Heads up</Alert>);

    expect(screen.getByRole("alert")).toHaveTextContent("Heads up");
  });

  it("supports title and description", () => {
    render(
      <Alert>
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>Update your card to keep the workspace active.</AlertDescription>
      </Alert>
    );

    expect(screen.getByText("Payment failed")).toBeInTheDocument();
    expect(screen.getByText("Update your card to keep the workspace active.")).toBeInTheDocument();
  });

  it("supports destructive variant", () => {
    render(
      <Alert data-testid="alert" variant="destructive">
        Error
      </Alert>
    );

    expect(screen.getByTestId("alert")).toHaveClass("border-destructive/35");
  });

  it("allows overriding the role", () => {
    render(<Alert role="status">Saved</Alert>);

    expect(screen.getByRole("status")).toHaveTextContent("Saved");
  });
});
