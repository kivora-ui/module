import type { Meta, StoryObj } from "@storybook/react";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@kivora/nextjs";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Kivora UI</CardTitle>
        <CardDescription>Componentes accesibles para web y native.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Contenido de ejemplo dentro de la card.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Aceptar</Button>
      </CardFooter>
    </Card>
  )
};
