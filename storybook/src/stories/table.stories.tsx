import type { Meta, StoryObj } from "@storybook/react";
import { Archive, Eye, Pencil, Trash2 } from "lucide-react";
import {
  Badge,
  DataTable,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@kivora/nextjs";
import type { DataTableColumnDef } from "@kivora/nextjs";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table
};

export default meta;
type Story = StoryObj<typeof Table>;

const invoices = [
  { id: "INV-001", customer: "Acme Studio", status: "Paid", method: "Card", amount: "$250.00" },
  { id: "INV-002", customer: "Northwind", status: "Pending", method: "Transfer", amount: "$180.00" },
  { id: "INV-003", customer: "Kivora Labs", status: "Draft", method: "Card", amount: "$420.00" },
  { id: "INV-004", customer: "Orbit Co.", status: "Paid", method: "PayPal", amount: "$315.00" },
  { id: "INV-005", customer: "Linear Works", status: "Pending", method: "Card", amount: "$640.00" },
  { id: "INV-006", customer: "Atlas Studio", status: "Paid", method: "Transfer", amount: "$125.00" },
  { id: "INV-007", customer: "Nova Partners", status: "Draft", method: "Card", amount: "$880.00" },
  { id: "INV-008", customer: "Helio Systems", status: "Paid", method: "PayPal", amount: "$520.00" }
];

const invoiceColumns: DataTableColumnDef<(typeof invoices)[number]>[] = [
  {
    accessorKey: "id",
    header: "Invoice",
    cell: ({ row }) => <span className="font-medium">{row.original.id}</span>
  },
  {
    accessorKey: "customer",
    header: "Customer"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.original.status === "Paid" ? "default" : "secondary"}>{row.original.status}</Badge>
    )
  },
  {
    accessorKey: "amount",
    header: () => <span className="ml-auto block text-right">Amount</span>,
    cell: ({ row }) => <span className="block text-right">{row.original.amount}</span>
  }
];

export const Default: Story = {
  render: () => (
    <div className="w-full">
      <Table>
        <TableCaption>Facturas recientes del workspace.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
};

export const WithFooter: Story = {
  render: () => (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell>
                <Badge variant={invoice.status === "Paid" ? "default" : "secondary"}>{invoice.status}</Badge>
              </TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$1,165.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
};

export const Dense: Story = {
  render: () => (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="h-9 py-2">Name</TableHead>
            <TableHead className="h-9 py-2">Role</TableHead>
            <TableHead className="h-9 py-2">Workspace</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            ["Marta Ruiz", "Owner", "Product"],
            ["Leo Martin", "Designer", "Brand"],
            ["Ana Soler", "Engineer", "Platform"]
          ].map(([name, role, workspace]) => (
            <TableRow key={name} className="hover:bg-transparent">
              <TableCell className="py-2 font-medium">{name}</TableCell>
              <TableCell className="py-2">{role}</TableCell>
              <TableCell className="py-2 text-muted-foreground">{workspace}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
};

type AdvancedStory = StoryObj<{ advanced: boolean }>;

export const Advanced: AdvancedStory = {
  args: {
    advanced: true
  },
  argTypes: {
    advanced: {
      control: "boolean"
    }
  },
  render: ({ advanced }) => (
    <div className="w-full">
      <DataTable
        advanced={advanced}
        columns={invoiceColumns}
        data={invoices}
        emptyMessage="No hay facturas disponibles."
      />
    </div>
  )
};

type FullFeatureStory = StoryObj<{
  filterable: boolean;
  multiSelect: boolean;
  pageSize: number;
  paginated: boolean;
  paginationVariant: "buttons" | "numbers";
  searchable: boolean;
  selectable: boolean;
}>;

export const FullFeature: FullFeatureStory = {
  parameters: {
    controls: {
      include: [
        "filterable",
        "multiSelect",
        "pageSize",
        "paginated",
        "paginationVariant",
        "searchable",
        "selectable"
      ]
    },
    docs: {
      source: {
        type: "code",
        code: `<DataTable
  advanced
  columns={invoiceColumns}
  data={invoices}
  filterable
  multiSelect
  pageSize={5}
  paginated
  paginationVariant="numbers"
  rowActions={rowActions}
  bulkActions={bulkActions}
  searchable
  selectable
/>`
      }
    }
  },
  args: {
    filterable: true,
    multiSelect: true,
    pageSize: 5,
    paginated: true,
    paginationVariant: "numbers",
    searchable: true,
    selectable: true
  },
  argTypes: {
    filterable: { control: "boolean" },
    multiSelect: { control: "boolean" },
    pageSize: { control: "select", options: [5, 10, 20, 50, 100] },
    paginated: { control: "boolean" },
    paginationVariant: { control: "radio", options: ["buttons", "numbers"] },
    searchable: { control: "boolean" },
    selectable: { control: "boolean" }
  },
  render: ({ filterable, multiSelect, pageSize, paginated, paginationVariant, searchable, selectable }) => (
    <div className="w-full">
      <DataTable
        advanced
        bulkActions={[
          { icon: <Archive className="h-4 w-4" />, label: "Archive selected" },
          { icon: <Trash2 className="h-4 w-4" />, label: "Delete selected" }
        ]}
        columns={invoiceColumns}
        data={invoices}
        filterable={filterable}
        multiSelect={multiSelect}
        pageSize={pageSize}
        paginated={paginated}
        paginationVariant={paginationVariant}
        rowActions={[
          { icon: <Eye className="h-4 w-4" />, label: "View invoice" },
          { icon: <Pencil className="h-4 w-4" />, label: "Edit invoice" },
          { icon: <Trash2 className="h-4 w-4" />, label: "Delete invoice" }
        ]}
        searchable={searchable}
        searchPlaceholder="Search invoices..."
        selectable={selectable}
      />
    </div>
  )
};

export const Empty: Story = {
  render: () => (
    <div className="w-full">
      <DataTable advanced columns={invoiceColumns} data={[]} emptyMessage="No hay facturas disponibles." />
    </div>
  )
};
