// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  DataTable,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./table";
import type { DataTableColumnDef } from "./table";

describe("Table", () => {
  it("renders a semantic table structure", () => {
    render(
      <Table>
        <TableCaption>Latest invoices</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV-001</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("Latest invoices")).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "Invoice" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "$250.00" })).toBeInTheDocument();
  });

  it("applies custom classes to table pieces", () => {
    render(
      <Table className="min-w-[640px]">
        <TableBody>
          <TableRow className="bg-muted">
            <TableCell className="font-medium">Workspace</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByRole("table")).toHaveClass("min-w-[640px]");
    expect(screen.getByRole("cell")).toHaveClass("font-medium");
  });

  it("uses TanStack sorting when advanced is enabled", async () => {
    const user = userEvent.setup();
    const columns: DataTableColumnDef<{ name: string; amount: number }>[] = [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "amount", header: "Amount" }
    ];

    render(
      <DataTable
        advanced
        columns={columns}
        data={[
          { name: "Starter", amount: 30 },
          { name: "Enterprise", amount: 10 }
        ]}
      />
    );

    await user.click(screen.getByRole("button", { name: "Amount" }));

    const rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("Enterprise");
    expect(rows[2]).toHaveTextContent("Starter");
  });

  it("renders an empty state in advanced mode", () => {
    const columns: DataTableColumnDef<{ name: string }>[] = [{ accessorKey: "name", header: "Name" }];

    render(<DataTable advanced columns={columns} data={[]} emptyMessage="No invoices yet" />);

    expect(screen.getByRole("cell", { name: "No invoices yet" })).toHaveAttribute("colspan", "2");
  });

  it("filters rows with global search", async () => {
    const user = userEvent.setup();
    const columns: DataTableColumnDef<{ name: string; team: string }>[] = [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "team", header: "Team" }
    ];

    render(
      <DataTable
        searchable
        columns={columns}
        data={[
          { name: "Marta", team: "Design" },
          { name: "Leo", team: "Engineering" }
        ]}
      />
    );

    await user.type(screen.getByPlaceholderText("Search..."), "leo");

    expect(screen.queryByText("Marta")).not.toBeInTheDocument();
    expect(screen.getByText("Leo")).toBeInTheDocument();
  });

  it("filters rows by column", async () => {
    const user = userEvent.setup();
    const columns: DataTableColumnDef<{ name: string; status: string }>[] = [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "status", header: "Status" }
    ];

    render(
      <DataTable
        filterable
        filterMenuOpen
        columns={columns}
        data={[
          { name: "Invoice A", status: "Paid" },
          { name: "Invoice B", status: "Draft" }
        ]}
      />
    );

    fireEvent.change(screen.getByLabelText("Filter status"), { target: { value: "draft" } });

    expect(screen.queryByText("Invoice A")).not.toBeInTheDocument();
    expect(screen.getByText("Invoice B")).toBeInTheDocument();
  });

  it("paginates rows", () => {
    const columns: DataTableColumnDef<{ name: string }>[] = [{ accessorKey: "name", header: "Name" }];

    render(
      <DataTable
        paginated
        pageSize={1}
        columns={columns}
        data={[{ name: "First" }, { name: "Second" }]}
      />
    );

    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.queryByText("Second")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.queryByText("First")).not.toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("supports numbered pagination and page size changes", async () => {
    const columns: DataTableColumnDef<{ name: string }>[] = [{ accessorKey: "name", header: "Name" }];

    render(
      <DataTable
        paginated
        paginationVariant="numbers"
        pageSize={1}
        columns={columns}
        data={[{ name: "First" }, { name: "Second" }]}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Page 2" }));
    expect(screen.getByText("Second")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByRole("combobox", { name: "Rows per page" }));
    await waitFor(() => {
      expect(screen.getByRole("option", { name: "5" })).toBeInTheDocument();
    });
    fireEvent.click(screen.getByRole("option", { name: "5" }));

    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });

  it("selects rows and renders row actions", () => {
    const columns: DataTableColumnDef<{ name: string }>[] = [{ accessorKey: "name", header: "Name" }];

    render(
      <DataTable
        selectable
        rowActions={[{ icon: <span aria-hidden="true">O</span>, label: "Open row" }]}
        columns={columns}
        data={[{ name: "Marta" }]}
      />
    );

    fireEvent.click(screen.getByLabelText("Select row"));

    expect(screen.getByText("1 of 1 selected")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open row" })).toBeInTheDocument();
  });

  it("shows bulk actions after selecting rows", () => {
    const columns: DataTableColumnDef<{ name: string }>[] = [{ accessorKey: "name", header: "Name" }];
    const selected: { name: string }[][] = [];

    render(
      <DataTable
        selectable
        bulkActions={[
          {
            icon: <span aria-hidden="true">A</span>,
            label: "Archive selected",
            onClick: (rows) => selected.push(rows)
          }
        ]}
        columns={columns}
        data={[{ name: "Marta" }]}
      />
    );

    expect(screen.queryByRole("button", { name: "Archive selected" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Select row"));
    fireEvent.click(screen.getByRole("button", { name: "Archive selected" }));

    expect(selected).toEqual([[{ name: "Marta" }]]);
  });
});
