// @vitest-environment jsdom
import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  DataTable,
  type DataTableColumnDef,
  type DataTableFilter,
} from "./table";

// State and matching tests; the browser suite covers the real popover and focus.
vi.mock("./popover", () => ({
  Popover: ({ children }: React.PropsWithChildren) => children,
  PopoverTrigger: ({ children }: React.PropsWithChildren) => children,
  PopoverContent: ({ children }: React.PropsWithChildren) => (
    <div role="dialog">{children}</div>
  ),
}));

const data = [
  { name: "Alpha", status: "active", restock: true, count: 0 },
  { name: "Beta", status: "inactive", restock: false, count: 10 },
  { name: "Gamma", status: "active", restock: false, count: 5 },
];
const columns: DataTableColumnDef<(typeof data)[number]>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "restock", header: "Restock" },
  { accessorKey: "count", header: "Count" },
];
const filters: DataTableFilter[] = [
  { columnId: "name", type: "text", label: "Product" },
  {
    columnId: "status",
    type: "select",
    label: "State",
    options: [
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
    ],
  },
  { columnId: "restock", type: "switch", label: "Only restock" },
];

describe("DataTable filters", () => {
  it("uses a bottom sheet on mobile and retains filters after closing", () => {
    const previousWidth = window.innerWidth;
    Object.defineProperty(window, "innerWidth", { configurable: true, value: 390 });
    try {
      render(<DataTable data={data} columns={columns} filters={filters} />);
      fireEvent.click(screen.getByRole("button", { name: "Filters" }));
      const dialog = screen.getByRole("dialog", { name: "Filters" });
      expect(dialog.className).toContain("bottom-0");
      fireEvent.click(screen.getByRole("switch", { name: "Only restock" }));
      fireEvent.click(screen.getByRole("button", { name: "Show results" }));
      expect(screen.getByRole("cell", { name: "Alpha", hidden: true })).toBeInTheDocument();
      expect(screen.queryByRole("cell", { name: "Beta", hidden: true })).not.toBeInTheDocument();
    } finally {
      Object.defineProperty(window, "innerWidth", { configurable: true, value: previousWidth });
    }
  });
  it("combines exact states, boolean switches and text, and removes filters independently", () => {
    render(<DataTable data={data} columns={columns} filters={filters} />);
    fireEvent.mouseDown(screen.getByRole("combobox", { name: "State" }));
    fireEvent.click(screen.getByRole("option", { name: "Active" }));
    expect(
      screen.queryByRole("cell", { name: "Beta" }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Gamma" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("switch", { name: "Only restock" }));
    expect(
      screen.queryByRole("cell", { name: "Gamma" }),
    ).not.toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Product"), {
      target: { value: "BETA" },
    });
    expect(
      screen.getByRole("cell", { name: "No results." }),
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", { name: "Remove filter Product" }),
    );
    expect(screen.getByRole("cell", { name: "Alpha" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("switch", { name: "Only restock" }));
    expect(screen.getByRole("cell", { name: "Gamma" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));
    expect(screen.getByRole("cell", { name: "Beta" })).toBeInTheDocument();
  });

  it("supports false and zero as exact select values", () => {
    render(
      <DataTable
        data={data}
        columns={columns}
        filters={[
          {
            columnId: "restock",
            type: "select",
            label: "Restock",
            options: [{ label: "No", value: false }],
          },
          {
            columnId: "count",
            type: "select",
            label: "Count",
            options: [{ label: "Zero", value: 0 }],
          },
        ]}
      />,
    );
    fireEvent.mouseDown(screen.getByRole("combobox", { name: "Restock" }));
    fireEvent.click(screen.getByRole("option", { name: "No" }));
    expect(
      screen.queryByRole("cell", { name: "Alpha" }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Beta" })).toBeInTheDocument();
    fireEvent.mouseDown(screen.getByRole("combobox", { name: "Restock" }));
    fireEvent.click(screen.getByRole("option", { name: "All" }));
    fireEvent.mouseDown(screen.getByRole("combobox", { name: "Count" }));
    fireEvent.click(screen.getByRole("option", { name: "Zero" }));
    expect(screen.getByRole("cell", { name: "Alpha" })).toBeInTheDocument();
    expect(
      screen.queryByRole("cell", { name: "Beta" }),
    ).not.toBeInTheDocument();
  });

  it("preserves custom matching on accessorFn columns", () => {
    render(
      <DataTable
        data={data}
        columns={[
          {
            id: "product",
            accessorFn: (row) => row.name,
            header: "Product",
            filterFn: (row, id, value) =>
              String(row.getValue(id)).endsWith(String(value)),
          },
        ]}
        filters={[{ columnId: "product", type: "text", label: "Ends with" }]}
      />,
    );
    fireEvent.change(screen.getByLabelText("Ends with"), {
      target: { value: "pha" },
    });
    expect(screen.getByRole("cell", { name: "Alpha" })).toBeInTheDocument();
    expect(
      screen.queryByRole("cell", { name: "Beta" }),
    ).not.toBeInTheDocument();
  });
});
