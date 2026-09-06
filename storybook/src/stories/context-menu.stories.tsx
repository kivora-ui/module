import type { Meta, StoryObj } from "@storybook/react";
import { Copy, Download, FolderOpen, RefreshCw, Trash2 } from "lucide-react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from "@kivora/nextjs";

const meta = {
  title: "Components/Context Menu",
  component: ContextMenu,
  parameters: { layout: "centered" }
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-44 w-80 items-center justify-center rounded-md border border-dashed border-border/70 bg-muted/30 text-sm text-muted-foreground">
        Right click this area
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>Project</ContextMenuLabel>
        <ContextMenuItem>
          <FolderOpen className="h-4 w-4" />
          Open
          <ContextMenuShortcut>⌘O</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Copy className="h-4 w-4" />
          Duplicate
          <ContextMenuShortcut>⌘D</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Export</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <Download className="h-4 w-4" />
              PDF
            </ContextMenuItem>
            <ContextMenuItem>
              <Download className="h-4 w-4" />
              CSV
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          <RefreshCw className="h-4 w-4" />
          Auto refresh
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="editor">
          <ContextMenuRadioItem value="editor">Editor</ContextMenuRadioItem>
          <ContextMenuRadioItem value="viewer">Viewer</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-destructive focus:text-destructive">
          <Trash2 className="h-4 w-4" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
};
