// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "./breadcrumb";

describe("Breadcrumb", () => {
  it("renders a breadcrumb navigation landmark", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Settings</BreadcrumbPage>
        </BreadcrumbItem>
      </Breadcrumb>
    );

    expect(screen.getByRole("navigation", { name: "breadcrumb" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByText("Settings")).toHaveAttribute("aria-current", "page");
  });

  it("supports custom separators", () => {
    render(<BreadcrumbSeparator>/</BreadcrumbSeparator>);

    expect(screen.getByText("/")).toHaveAttribute("aria-hidden", "true");
  });

  it("renders an accessible ellipsis", () => {
    render(<BreadcrumbEllipsis />);

    expect(screen.getByRole("img", { name: "More pages" })).toBeInTheDocument();
  });
});
