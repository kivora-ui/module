// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioGroup, RadioGroupItem } from "./radio-group";

describe("RadioGroup", () => {
  it("renders a selected radio item", () => {
    render(
      <RadioGroup aria-label="Plan" defaultValue="team">
        <RadioGroupItem aria-label="Personal" value="personal" />
        <RadioGroupItem aria-label="Team" value="team" />
      </RadioGroup>
    );

    expect(screen.getByRole("radio", { name: "Team" })).toBeChecked();
  });

  it("changes the selected value", async () => {
    render(
      <RadioGroup aria-label="Plan" defaultValue="personal">
        <RadioGroupItem aria-label="Personal" value="personal" />
        <RadioGroupItem aria-label="Team" value="team" />
      </RadioGroup>
    );

    await userEvent.click(screen.getByRole("radio", { name: "Team" }));

    expect(screen.getByRole("radio", { name: "Team" })).toBeChecked();
    expect(screen.getByRole("radio", { name: "Personal" })).not.toBeChecked();
  });

  it("marks an item as invalid", () => {
    render(
      <RadioGroup aria-label="Plan">
        <RadioGroupItem aria-label="Team" invalid value="team" />
      </RadioGroup>
    );

    expect(screen.getByRole("radio", { name: "Team" })).toBeInvalid();
  });

  it("disables items when the group is disabled", () => {
    render(
      <RadioGroup aria-label="Plan" disabled>
        <RadioGroupItem aria-label="Team" value="team" />
      </RadioGroup>
    );

    expect(screen.getByRole("radio", { name: "Team" })).toBeDisabled();
  });
});
