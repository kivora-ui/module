"use client";

import * as React from "react";
import {
  flexRender,
  type ColumnFiltersState,
  type PaginationState,
  type RowData,
  type RowSelectionState,
  type SortingState,
} from "@tanstack/react-table";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useLegacyTable,
  type LegacyColumnDef,
} from "@tanstack/react-table/legacy";
import {
  ChevronDown,
  ChevronsUpDown,
  ChevronUp,
  ListFilter,
  X,
} from "lucide-react";
import { cn } from "@kivora/theme";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./sheet";
import { useBreakpoint } from "../hooks/use-breakpoint";
import { Switch } from "./switch";
import { Input } from "./input";
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationItem,
} from "./pagination";
import { Select, type SelectOption } from "./select";

function TableFilterPanel({
  open,
  onOpenChange,
  trigger,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: React.ReactElement;
  children: React.ReactNode;
}) {
  const mobile = useBreakpoint() === "mobile";
  const [internalOpen, setInternalOpen] = React.useState(false);
  const currentOpen = open ?? internalOpen;
  const changeOpen = (next: boolean) => {
    if (open === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  };
  if (mobile)
    return (
      <Sheet open={currentOpen} onOpenChange={changeOpen}>
        <SheetTrigger asChild>{trigger}</SheetTrigger>
        <SheetContent
          side="bottom"
          aria-describedby={undefined}
          className="max-h-[85dvh] overflow-y-auto rounded-t-2xl px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-6"
        >
          <SheetTitle className="sr-only">Filters</SheetTitle>
          {children}
          <Button type="button" onClick={() => changeOpen(false)}>
            Show results
          </Button>
        </SheetContent>
      </Sheet>
    );
  return (
    <Popover open={currentOpen} onOpenChange={changeOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        aria-label="Filters"
        align="end"
        className="w-[min(22rem,calc(100vw-2rem))] max-h-[min(70dvh,var(--radix-popover-content-available-height))] overflow-y-auto p-4"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}

/** columnId is the column's id (or accessorKey when no id is specified). */
export type DataTableFilter = {
  columnId: string;
  label: string;
  description?: string;
} & (
  | { type: "text"; placeholder?: string }
  | {
      type: "select";
      placeholder?: string;
      options: { label: string; value: string | number | boolean }[];
    }
  | { type: "switch" }
);

export interface DataTableAction<TData extends RowData> {
  icon: React.ReactNode;
  label: string;
  onClick?: (row: TData) => void;
}

export interface DataTableBulkAction<TData extends RowData> {
  icon: React.ReactNode;
  label: string;
  onClick?: (rows: TData[]) => void;
}

export const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="min-w-0 w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/40 font-medium [&>tr]:last:border-b-0",
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-border/70 transition-colors hover:bg-muted/40 data-[state=selected]:bg-muted/50",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-11 px-4 text-left align-middle font-medium text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("px-4 py-3 align-middle", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export interface DataTableProps<
  TData extends RowData,
> extends React.HTMLAttributes<HTMLTableElement> {
  advanced?: boolean;
  columns: LegacyColumnDef<TData, unknown>[];
  data: TData[];
  emptyMessage?: React.ReactNode;
  filterable?: boolean;
  filters?: DataTableFilter[];
  filterMenuOpen?: boolean;
  multiSelect?: boolean;
  onFilterMenuOpenChange?: (open: boolean) => void;
  pageSize?: number;
  pageSizeOptions?: number[];
  paginated?: boolean;
  paginationVariant?: "buttons" | "numbers";
  renderRowActions?: (row: TData) => React.ReactNode;
  rowActions?: DataTableAction<TData>[];
  bulkActions?: DataTableBulkAction<TData>[];
  searchable?: boolean;
  searchPlaceholder?: string;
  selectable?: boolean;
}

export type DataTableColumnDef<TData extends RowData> = LegacyColumnDef<
  TData,
  unknown
>;

export function DataTable<TData extends RowData>({
  advanced = false,
  columns,
  data,
  emptyMessage = "No results.",
  filterable,
  filters,
  filterMenuOpen,
  className,
  multiSelect,
  onFilterMenuOpenChange,
  pageSize = 5,
  pageSizeOptions = [5, 10, 20, 50, 100],
  paginated,
  paginationVariant = "buttons",
  renderRowActions,
  rowActions,
  bulkActions,
  searchable,
  searchPlaceholder = "Search...",
  selectable,
  ...props
}: DataTableProps<TData>) {
  const enableSearch = searchable ?? advanced;
  const enableFilters =
    filterable ?? (filters !== undefined ? filters.length > 0 : advanced);
  const filterId = React.useId();
  const [filterPortalTarget, setFilterPortalTarget] =
    React.useState<HTMLElement | null>(null);
  React.useEffect(() => setFilterPortalTarget(document.body), []);
  const enablePagination = paginated ?? advanced;
  const enableSelection = selectable ?? advanced;
  const enableMultiSelection = multiSelect ?? advanced;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize,
  });
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const configuredColumns = React.useMemo(() => {
    function configure(
      definitions: readonly LegacyColumnDef<TData, unknown>[],
    ): LegacyColumnDef<TData, unknown>[] {
      return definitions.map((column) => {
        if ("columns" in column && column.columns)
          return { ...column, columns: configure(column.columns) };
        const id =
          column.id ??
          ("accessorKey" in column
            ? String(column.accessorKey).replaceAll(".", "_")
            : undefined);
        const filter = filters?.find((item) => item.columnId === id);
        if (filters && !filter) return column;
        return {
          ...column,
          filterFn:
            column.filterFn ??
            (filter?.type === "select" || filter?.type === "switch"
              ? (row, columnId, value) => row.getValue(columnId) === value
              : "includesString"),
        };
      });
    }
    return configure(columns);
  }, [columns, filters]);
  const table = useLegacyTable({
    data,
    columns: configuredColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel:
      enableSearch || enableFilters ? getFilteredRowModel() : undefined,
    getPaginationRowModel: enablePagination
      ? getPaginationRowModel()
      : undefined,
    getSortedRowModel: advanced ? getSortedRowModel() : undefined,
    enableRowSelection: enableSelection,
    enableMultiRowSelection: enableMultiSelection,
    sortDescFirst: false,
    state: { columnFilters, globalFilter, pagination, rowSelection, sorting },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
  });
  const tableState = table.getState();
  const rowCount = table.getFilteredRowModel().rows.length;
  const selectedCount = table.getSelectedRowModel().rows.length;
  const selectedRows = table
    .getSelectedRowModel()
    .rows.map((row) => row.original);
  const hasRowActions = Boolean(renderRowActions || rowActions?.length);
  const pageCount = table.getPageCount();
  const pageIndexes = Array.from({ length: pageCount }, (_, index) => index);
  const pageSizeSelectOptions = React.useMemo<SelectOption[]>(
    () =>
      pageSizeOptions.map((option) => ({
        label: String(option),
        value: String(option),
      })),
    [pageSizeOptions],
  );
  const pageSizeValue =
    pageSizeSelectOptions.find(
      (option) => option.value === String(tableState.pagination.pageSize),
    ) ?? pageSizeSelectOptions[0];
  const filterableColumns = table
    .getAllLeafColumns()
    .filter((column) => column.getCanFilter() && column.columnDef.header);
  const filterDefinitions: DataTableFilter[] =
    filters ??
    filterableColumns.map((column) => ({
      type: "text",
      columnId: column.id,
      label:
        typeof column.columnDef.header === "string"
          ? column.columnDef.header
          : column.id,
    }));
  const availableFilters = filterDefinitions
    .map((definition) => {
      const column = table
        .getAllLeafColumns()
        .find((column) => column.id === definition.columnId);
      if (!column)
        throw new Error(
          `DataTable filter "${definition.label}" refers to unknown column "${definition.columnId}".`,
        );
      return { definition, column };
    })
    .filter(({ column }) => column.getCanFilter());
  function setFilter(columnId: string, value: unknown) {
    table.getColumn(columnId)?.setFilterValue(value);
    table.setPageIndex(0);
  }
  function clearFilters() {
    table.resetColumnFilters();
    table.setPageIndex(0);
  }
  const columnCount =
    (table.getAllColumns().length || columns.length || 1) +
    (enableSelection ? 1 : 0) +
    (hasRowActions ? 1 : 0);

  return (
    <div className="min-w-0 w-full space-y-3">
      {enableSearch || enableFilters || Boolean(bulkActions?.length) ? (
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {enableSearch ? (
            <Input
              className="w-full sm:flex-1"
              value={globalFilter}
              onChange={(event) => table.setGlobalFilter(event.target.value)}
              placeholder={searchPlaceholder}
            />
          ) : (
            <span />
          )}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {enableFilters ? (
              <TableFilterPanel
                open={filterMenuOpen}
                onOpenChange={onFilterMenuOpenChange}
                trigger={
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <ListFilter className="h-4 w-4" aria-hidden="true" />
                    Filters
                    {columnFilters.length ? (
                      <span className="rounded bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                        {columnFilters.length}
                      </span>
                    ) : null}
                  </Button>
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold">Filters</h3>
                  {columnFilters.length ? (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                      onClick={clearFilters}
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                      Clear
                    </Button>
                  ) : null}
                </div>
                <p className="mb-4 mt-1 text-sm text-muted-foreground">
                  Combine filters to narrow the results. Changes apply
                  immediately.
                </p>
                <div className="space-y-3">
                  {availableFilters.map(({ definition, column }) => {
                    const id = `${filterId}-${column.id}`;
                    const value = column.getFilterValue();
                    return (
                      <div key={column.id} className="space-y-1.5">
                        <div className="flex items-center justify-between gap-3">
                          <label htmlFor={id} className="text-sm font-medium">
                            {definition.label}
                          </label>
                          {definition.type === "switch" && (
                            <Switch
                              id={id}
                              checked={value === true}
                              onCheckedChange={(checked) =>
                                setFilter(column.id, checked ? true : undefined)
                              }
                              aria-describedby={
                                definition.description
                                  ? `${id}-description`
                                  : undefined
                              }
                            />
                          )}
                        </div>
                        {definition.description && (
                          <p
                            id={`${id}-description`}
                            className="text-xs text-muted-foreground"
                          >
                            {definition.description}
                          </p>
                        )}
                        {definition.type === "text" && (
                          <Input
                            id={id}
                            value={String(value ?? "")}
                            onChange={(event) =>
                              setFilter(
                                column.id,
                                event.target.value || undefined,
                              )
                            }
                            placeholder={definition.placeholder ?? "Filter..."}
                            aria-label={
                              filters ? definition.label : `Filter ${column.id}`
                            }
                            aria-describedby={
                              definition.description
                                ? `${id}-description`
                                : undefined
                            }
                          />
                        )}
                        {definition.type === "select" && (
                          <Select
                            inputId={id}
                            instanceId={id}
                            aria-label={definition.label}
                            isSearchable={false}
                            menuPlacement="auto"
                            menuPortalTarget={filterPortalTarget}
                            menuPosition="fixed"
                            menuShouldScrollIntoView={false}
                            mobileSheetTitle={definition.label}
                            options={[
                              {
                                label: definition.placeholder ?? "All",
                                value: "all",
                              },
                              ...definition.options.map((option, index) => ({
                                label: option.label,
                                value: String(index),
                              })),
                            ]}
                            value={
                              value === undefined
                                ? {
                                    label: definition.placeholder ?? "All",
                                    value: "all",
                                  }
                                : {
                                    label:
                                      definition.options.find(
                                        (option) => option.value === value,
                                      )?.label ?? String(value),
                                    value: String(
                                      definition.options.findIndex(
                                        (option) => option.value === value,
                                      ),
                                    ),
                                  }
                            }
                            onChange={(option) =>
                              setFilter(
                                column.id,
                                !option || option.value === "all"
                                  ? undefined
                                  : definition.options[Number(option.value)]
                                      ?.value,
                              )
                            }
                            aria-describedby={
                              definition.description
                                ? `${id}-description`
                                : undefined
                            }
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </TableFilterPanel>
            ) : null}
            {bulkActions?.length && selectedCount ? (
              <div className="flex items-center gap-1 rounded-md border border-border/70 bg-background p-1">
                {bulkActions.map((action) => (
                  <Button
                    key={action.label}
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    aria-label={action.label}
                    title={action.label}
                    onClick={() => action.onClick?.(selectedRows)}
                  >
                    {action.icon}
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      {enableFilters && columnFilters.length > 0 && (
        <div
          aria-label="Active filters"
          className="flex flex-wrap items-center gap-2"
        >
          {availableFilters
            .filter(({ column }) => column.getIsFiltered())
            .map(({ definition, column }) => {
              const value = column.getFilterValue();
              const label =
                definition.type === "select"
                  ? definition.options.find((option) => option.value === value)
                      ?.label
                  : definition.type === "switch"
                    ? undefined
                    : String(value);
              return (
                <Button
                  key={column.id}
                  type="button"
                  size="sm"
                  variant="secondary"
                  className="h-auto min-h-8 max-w-full whitespace-normal text-left"
                  aria-label={`Remove filter ${definition.label}`}
                  onClick={() => setFilter(column.id, undefined)}
                >
                  {definition.label}
                  {label ? `: ${label}` : ""}
                  <X className="h-3 w-3 shrink-0" aria-hidden="true" />
                </Button>
              );
            })}
          <span role="status" className="text-sm text-muted-foreground">
            {rowCount} results
          </span>
        </div>
      )}
      <Table className={className} {...props}>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {enableSelection ? (
                <TableHead className="w-10 px-3">
                  <Checkbox
                    aria-label="Select all rows"
                    checked={
                      table.getIsAllPageRowsSelected() ||
                      (table.getIsSomePageRowsSelected()
                        ? "indeterminate"
                        : false)
                    }
                    onCheckedChange={(checked) =>
                      table.toggleAllPageRowsSelected(Boolean(checked))
                    }
                  />
                </TableHead>
              ) : null}
              {headerGroup.headers.map((header) => {
                const canSort = advanced && header.column.getCanSort();
                const sorted = header.column.getIsSorted();

                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div className="group flex items-center gap-2">
                        <button
                          type="button"
                          className={cn(
                            "inline-flex items-center gap-1 text-left font-medium outline-none transition-colors",
                            canSort
                              ? "cursor-pointer hover:text-foreground"
                              : "cursor-default",
                          )}
                          disabled={!canSort}
                          onClick={
                            canSort
                              ? header.column.getToggleSortingHandler()
                              : undefined
                          }
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {canSort ? (
                            <span
                              className={cn(
                                "text-muted-foreground transition-opacity",
                                sorted
                                  ? "opacity-100"
                                  : "opacity-0 group-hover:opacity-60",
                              )}
                              aria-hidden="true"
                            >
                              {sorted === "asc" ? (
                                <ChevronUp className="h-3.5 w-3.5" />
                              ) : sorted === "desc" ? (
                                <ChevronDown className="h-3.5 w-3.5" />
                              ) : (
                                <ChevronsUpDown className="h-3.5 w-3.5" />
                              )}
                            </span>
                          ) : null}
                        </button>
                      </div>
                    )}
                  </TableHead>
                );
              })}
              {hasRowActions ? (
                <TableHead className="w-16 text-right">Actions</TableHead>
              ) : null}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
              >
                {enableSelection ? (
                  <TableCell className="w-10 px-3">
                    <Checkbox
                      aria-label="Select row"
                      checked={row.getIsSelected()}
                      disabled={!row.getCanSelect()}
                      onCheckedChange={(checked) =>
                        row.toggleSelected(Boolean(checked))
                      }
                    />
                  </TableCell>
                ) : null}
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                {hasRowActions ? (
                  <TableCell className="text-right">
                    {rowActions?.length ? (
                      <div className="flex items-center justify-end gap-1">
                        {rowActions.map((action) => (
                          <Button
                            key={action.label}
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            aria-label={action.label}
                            title={action.label}
                            onClick={() => action.onClick?.(row.original)}
                          >
                            {action.icon}
                          </Button>
                        ))}
                      </div>
                    ) : (
                      renderRowActions?.(row.original)
                    )}
                  </TableCell>
                ) : null}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columnCount}
                className="h-24 text-center text-muted-foreground"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {enableSelection || enablePagination ? (
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          {enableSelection ? (
            <span>
              {selectedCount} of {rowCount} selected
            </span>
          ) : (
            <span />
          )}
          {enablePagination ? (
            <div className="flex flex-wrap items-center justify-end gap-2">
              <label className="flex items-center gap-2">
                <span>Rows</span>
                <Select
                  aria-label="Rows per page"
                  className="w-24"
                  inputId="data-table-page-size"
                  isSearchable={false}
                  menuPlacement="top"
                  mobileSheetTitle="Rows per page"
                  onChange={(option) => {
                    if (option) {
                      table.setPageSize(Number(option.value));
                    }
                  }}
                  options={pageSizeSelectOptions}
                  value={pageSizeValue}
                />
              </label>
              <Pagination className="mx-0 min-w-0 max-w-full w-auto">
                <PaginationContent className="flex-wrap justify-end">
                  {paginationVariant === "numbers" ? (
                    pageIndexes.map((pageIndex) => (
                      <PaginationItem key={pageIndex}>
                        <PaginationButton
                          isActive={
                            pageIndex === tableState.pagination.pageIndex
                          }
                          aria-label={`Page ${pageIndex + 1}`}
                          onClick={() => table.setPageIndex(pageIndex)}
                        >
                          {pageIndex + 1}
                        </PaginationButton>
                      </PaginationItem>
                    ))
                  ) : (
                    <PaginationItem>
                      <span className="flex h-9 items-center px-2">
                        Page {tableState.pagination.pageIndex + 1} of{" "}
                        {pageCount}
                      </span>
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationButton
                      className="px-3"
                      disabled={!table.getCanPreviousPage()}
                      onClick={() => table.previousPage()}
                    >
                      Previous
                    </PaginationButton>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationButton
                      className="px-3"
                      disabled={!table.getCanNextPage()}
                      onClick={() => table.nextPage()}
                    >
                      Next
                    </PaginationButton>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
