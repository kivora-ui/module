// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

describe("Accordion", () => {
  it("renders default open item", () => {
    render(
      <Accordion defaultValue="billing" type="single">
        <AccordionItem value="billing">
          <AccordionTrigger>Billing</AccordionTrigger>
          <AccordionContent>Manage invoices.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("Manage invoices.")).toBeVisible();
  });

  it("opens an item from the trigger", async () => {
    const user = userEvent.setup();

    render(
      <Accordion type="single">
        <AccordionItem value="security">
          <AccordionTrigger>Security</AccordionTrigger>
          <AccordionContent>Configure two factor access.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    await user.click(screen.getByRole("button", { name: /security/i }));

    expect(screen.getByText("Configure two factor access.")).toBeVisible();
  });

  it("supports multiple open items", () => {
    render(
      <Accordion defaultValue={["first", "second"]} type="multiple">
        <AccordionItem value="first">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>First content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="second">
          <AccordionTrigger>Second</AccordionTrigger>
          <AccordionContent>Second content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("First content")).toBeVisible();
    expect(screen.getByText("Second content")).toBeVisible();
  });

  it("can disable a trigger", () => {
    render(
      <Accordion type="single">
        <AccordionItem value="disabled">
          <AccordionTrigger disabled>Disabled</AccordionTrigger>
          <AccordionContent>Unavailable content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByRole("button", { name: /disabled/i })).toBeDisabled();
  });

  it("applies content animation classes", () => {
    render(
      <Accordion defaultValue="billing" type="single">
        <AccordionItem value="billing">
          <AccordionTrigger>Billing</AccordionTrigger>
          <AccordionContent data-testid="content">Manage invoices.</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByTestId("content")).toHaveClass("data-[state=open]:animate-accordion-down");
    expect(screen.getByTestId("content")).toHaveClass("data-[state=closed]:animate-accordion-up");
  });
});
