// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet
} from "./field";

describe("Field", () => {
  it("renders label, description, and error text", () => {
    render(
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <FieldContent>
          <input id="email" aria-describedby="email-help email-error" />
          <FieldDescription id="email-help">Use your work email.</FieldDescription>
          <FieldError id="email-error">Email is required.</FieldError>
        </FieldContent>
      </Field>
    );

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByText("Use your work email.")).toHaveClass("text-muted-foreground");
    expect(screen.getByText("Email is required.")).toHaveClass("text-destructive");
  });

  it("supports horizontal orientation", () => {
    render(<Field orientation="horizontal" data-testid="field" />);

    expect(screen.getByTestId("field")).toHaveAttribute("data-orientation", "horizontal");
    expect(screen.getByTestId("field")).toHaveClass("grid-cols-[10rem_minmax(0,1fr)]");
  });

  it("groups fields inside a fieldset", () => {
    render(
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldGroup>
          <Field>Field content</Field>
        </FieldGroup>
      </FieldSet>
    );

    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Field content")).toBeInTheDocument();
  });

  it("renders a subtle separator", () => {
    render(<FieldSeparator data-testid="separator" />);

    expect(screen.getByTestId("separator")).toHaveClass("bg-border/70");
  });
});
