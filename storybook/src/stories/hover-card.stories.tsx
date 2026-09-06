import type { Meta, StoryObj } from "@storybook/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@kivora/nextjs";
import { CalendarDays, GitBranch, Star } from "lucide-react";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const UserPreview: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="px-0">
            @nora
          </Button>
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-80">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage alt="Nora Ramos" src="https://i.pravatar.cc/96?img=47" />
              <AvatarFallback>NR</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <div>
                <h4 className="text-sm font-semibold">Nora Ramos</h4>
                <p className="text-sm text-muted-foreground">@nora</p>
              </div>
              <p className="text-sm">
                Product designer centrada en sistemas, prototipos y flujos de onboarding.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                Activa desde marzo 2025
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
};

export const ProjectPreview: Story = {
  render: () => (
    <div className="flex min-h-48 items-center justify-center">
      <HoverCard openDelay={80}>
        <HoverCardTrigger asChild>
          <a className="text-sm font-medium text-primary underline-offset-4 hover:underline" href="#">
            Billing workspace
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-96">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="text-sm font-semibold">Billing workspace</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Panel para facturas, metodos de pago y limites de consumo.
                </p>
              </div>
              <Badge variant="secondary">Beta</Badge>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="rounded-md border border-border/70 p-2">
                <p className="font-medium">24</p>
                <p className="text-xs text-muted-foreground">Issues</p>
              </div>
              <div className="rounded-md border border-border/70 p-2">
                <p className="font-medium">8</p>
                <p className="text-xs text-muted-foreground">PRs</p>
              </div>
              <div className="rounded-md border border-border/70 p-2">
                <p className="font-medium">92%</p>
                <p className="text-xs text-muted-foreground">Health</p>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
};

export const InlineRichLink: Story = {
  render: () => (
    <div className="max-w-xl text-sm leading-6 text-muted-foreground">
      El equipo movio la rama{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a className="font-medium text-foreground underline-offset-4 hover:underline" href="#">
            foundation/storybook
          </a>
        </HoverCardTrigger>
        <HoverCardContent align="start" className="w-80">
          <div className="flex items-start gap-3">
            <div className="rounded-md border border-border/70 bg-muted p-2">
              <GitBranch className="h-4 w-4" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-foreground">foundation/storybook</h4>
              <p className="text-sm text-muted-foreground">
                Rama dedicada a completar componentes y ejemplos visuales del sistema.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Star className="h-3.5 w-3.5" />
                Ultima actualizacion hace unos minutos
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      para revisar interacciones antes de seguir con componentes mas complejos.
    </div>
  )
};
