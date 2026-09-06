import type { Meta, StoryObj } from "@storybook/react";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyInlineCode,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP
} from "@kivora/nextjs";

const meta: Meta<typeof TypographyH1> = {
  title: "Components/Typography",
  component: TypographyH1,
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-3xl p-8">
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof TypographyH1>;

export const Article: Story = {
  render: () => (
    <article>
      <TypographyH1>Build interfaces with quiet confidence</TypographyH1>
      <TypographyLead>
        Typography primitives keep product copy readable without forcing every screen to hand-roll spacing.
      </TypographyLead>
      <TypographyP>
        Use them for documentation, settings pages, empty states, and any content-heavy area where rhythm matters.
      </TypographyP>
      <TypographyH2>Principles</TypographyH2>
      <TypographyP>Components should be predictable, accessible, and easy to scan.</TypographyP>
      <TypographyList>
        <li>Use hierarchy intentionally.</li>
        <li>Keep spacing consistent.</li>
        <li>Prefer semantic HTML.</li>
      </TypographyList>
      <TypographyH3>Inline code</TypographyH3>
      <TypographyP>
        Run <TypographyInlineCode>pnpm typecheck</TypographyInlineCode> before publishing changes.
      </TypographyP>
      <TypographyBlockquote>Small details make repeated workflows feel calmer.</TypographyBlockquote>
      <TypographyMuted>Last updated September 2026</TypographyMuted>
    </article>
  )
};
