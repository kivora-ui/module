import type { Meta, StoryObj } from "@storybook/react";
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@kivora/nextjs";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "success", "warning"]
    }
  },
  args: {
    variant: "default"
  }
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="max-w-xl">
      <Info className="h-4 w-4" />
      <AlertTitle>Actualizacion disponible</AlertTitle>
      <AlertDescription>
        Hay una nueva version preparada para revisar antes de publicarla.
      </AlertDescription>
    </Alert>
  )
};

export const Success: Story = {
  render: () => (
    <Alert className="max-w-xl" variant="success">
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Pago confirmado</AlertTitle>
      <AlertDescription>La factura se ha marcado como pagada correctamente.</AlertDescription>
    </Alert>
  )
};

export const Warning: Story = {
  render: () => (
    <Alert className="max-w-xl" variant="warning">
      <TriangleAlert className="h-4 w-4" />
      <AlertTitle>Limite cercano</AlertTitle>
      <AlertDescription>Quedan pocas ejecuciones disponibles en este workspace.</AlertDescription>
    </Alert>
  )
};

export const Destructive: Story = {
  render: () => (
    <Alert className="max-w-xl" variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>No se pudo guardar</AlertTitle>
      <AlertDescription>Revisa la conexion e intentalo de nuevo.</AlertDescription>
    </Alert>
  )
};

export const Stack: Story = {
  render: () => (
    <div className="grid max-w-xl gap-3">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Nota</AlertTitle>
        <AlertDescription>El cambio se aplicara despues de refrescar la pagina.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>Listo</AlertTitle>
        <AlertDescription>Los componentes se han sincronizado con Storybook.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlert className="h-4 w-4" />
        <AlertTitle>Atencion</AlertTitle>
        <AlertDescription>Este entorno todavia no tiene tests visuales automaticos.</AlertDescription>
      </Alert>
    </div>
  )
};
