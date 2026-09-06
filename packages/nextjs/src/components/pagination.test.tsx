// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "./pagination";

describe("Pagination", () => {
  it("renders pagination navigation", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="/page/1" isActive>
              1
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    expect(screen.getByRole("navigation", { name: "pagination" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "1" })).toHaveAttribute("aria-current", "page");
  });

  it("supports controlled page buttons", () => {
    render(<PaginationButton isActive>2</PaginationButton>);

    expect(screen.getByRole("button", { name: "2" })).toHaveAttribute("type", "button");
    expect(screen.getByRole("button", { name: "2" })).toHaveAttribute("aria-current", "page");
  });

  it("renders previous next and ellipsis helpers", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/page/1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="/page/3" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    expect(screen.getByRole("link", { name: "Previous" })).toHaveAttribute("href", "/page/1");
    expect(screen.getByRole("link", { name: "Next" })).toHaveAttribute("href", "/page/3");
    expect(screen.getByText("More pages")).toBeInTheDocument();
  });
});
