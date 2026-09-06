import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@kivora/nextjs";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion className="w-96 max-w-full" collapsible defaultValue="item-1" type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>Producto</AccordionTrigger>
        <AccordionContent>
          Componentes preparados para web y mobile, con estilos compartidos desde el sistema.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Accesibilidad</AccordionTrigger>
        <AccordionContent>
          El comportamiento base viene de Radix, con foco visible y soporte de teclado.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Personalizacion</AccordionTrigger>
        <AccordionContent>
          Cada parte acepta `className` para ajustar el layout en superficies mas complejas.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
};

export const Multiple: Story = {
  render: () => (
    <Accordion className="w-96 max-w-full" defaultValue={["security", "billing"]} type="multiple">
      <AccordionItem value="security">
        <AccordionTrigger>Seguridad</AccordionTrigger>
        <AccordionContent>
          Gestiona sesiones, verificacion en dos pasos y permisos del workspace.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="billing">
        <AccordionTrigger>Facturacion</AccordionTrigger>
        <AccordionContent>
          Revisa facturas, metodos de pago y limites del plan contratado.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="members">
        <AccordionTrigger>Miembros</AccordionTrigger>
        <AccordionContent>
          Invita personas, asigna roles y consulta el historial de actividad.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
};

export const DisabledItem: Story = {
  render: () => (
    <Accordion className="w-96 max-w-full" collapsible type="single">
      <AccordionItem value="available">
        <AccordionTrigger>Disponible</AccordionTrigger>
        <AccordionContent>Esta seccion se puede abrir normalmente.</AccordionContent>
      </AccordionItem>
      <AccordionItem disabled value="disabled">
        <AccordionTrigger>Bloqueado</AccordionTrigger>
        <AccordionContent>Esta seccion esta deshabilitada.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
};
