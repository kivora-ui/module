import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "@kivora/nextjs";

const meta: Meta<typeof Code> = {
  title: "Components/Code",
  component: Code,
  args: {
    children: `import { Button } from "@kivora/nextjs";

export function Toolbar() {
  return (
    <div className="flex items-center gap-2">
      <Button>Save</Button>
      <Button variant="outline">Preview</Button>
    </div>
  );
}`,
    copyable: true,
    filename: "toolbar.tsx",
    language: "tsx",
    showLineNumbers: true,
    theme: "light",
    wrapLongLines: true
  },
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark"]
    },
    language: {
      control: "select",
      options: ["tsx", "ts", "jsx", "js", "css", "json", "bash"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  render: (args) => <Code className="w-[42rem] max-w-full" {...args} />
};

export const Dark: Story = {
  args: {
    theme: "dark",
    filename: "api.ts",
    language: "ts",
    children: `type User = {
  id: string;
  email: string;
};

async function getUser(id: string): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}`
  },
  render: (args) => <Code className="w-[42rem] max-w-full" {...args} />
};

export const Inline: Story = {
  args: {
    children: "pnpm --filter @kivora/nextjs build",
    inline: true
  },
  render: (args) => (
    <p className="max-w-xl text-sm text-muted-foreground">
      Ejecuta <Code {...args} /> antes de publicar el paquete.
    </p>
  )
};

export const LongLines: Story = {
  args: {
    filename: "config.json",
    language: "json",
    showLineNumbers: true,
    children: `{
  "url": "https://api.kivora.dev/workspaces/foundation/components/code/examples/with-a-very-long-path-that-should-wrap-cleanly",
  "features": ["copy", "themes", "lineNumbers", "wrapping"]
}`
  },
  render: (args) => <Code className="w-[34rem] max-w-full" {...args} />
};
