import type { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@kivora/nextjs";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
};

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            8
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
};

export const Compact: Story = {
  render: () => (
    <Pagination className="justify-start">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="h-8 px-2 text-xs">
            Prev
          </PaginationPrevious>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="h-8 min-w-8 px-2 text-xs" isActive>
            12
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className="h-8 px-2 text-xs" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
};

export const ButtonPagination: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationButton aria-label="Previous page">Prev</PaginationButton>
        </PaginationItem>
        {[1, 2, 3, 4].map((page) => (
          <PaginationItem key={page}>
            <PaginationButton isActive={page === 2} aria-label={`Page ${page}`}>
              {page}
            </PaginationButton>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationButton aria-label="Next page">Next</PaginationButton>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
};

export const InPanel: Story = {
  render: () => (
    <div className="flex w-[42rem] max-w-full items-center justify-between gap-4 rounded-md border border-border/70 px-4 py-3">
      <p className="text-sm text-muted-foreground">Showing 21-30 of 96 records</p>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="h-8 px-2 text-xs">
              Prev
            </PaginationPrevious>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="h-8 min-w-8 px-2 text-xs" isActive>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="h-8 px-2 text-xs" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
};
