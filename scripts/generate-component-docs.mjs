import { promises as fs } from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const rootDir = process.cwd();
const docsDir = path.join(rootDir, 'docs', 'components');

const packages = [
  {
    platform: 'nextjs',
    packageName: '@kivora/nextjs',
    label: 'Web',
    tsconfigPath: path.join(rootDir, 'packages', 'nextjs', 'tsconfig.json'),
    indexPath: path.join(rootDir, 'packages', 'nextjs', 'src', 'index.ts')
  },
  {
    platform: 'native',
    packageName: '@kivora/native',
    label: 'Native',
    tsconfigPath: path.join(rootDir, 'packages', 'native', 'tsconfig.json'),
    indexPath: path.join(rootDir, 'packages', 'native', 'src', 'index.ts')
  }
];

const primaryExportMap = {
  accordion: 'Accordion',
  alert: 'Alert',
  'aspect-ratio': 'AspectRatio',
  attachment: 'Attachment',
  avatar: 'Avatar',
  badge: 'Badge',
  barcode: 'Barcode',
  'bottom-sheet': 'BottomSheet',
  breadcrumb: 'Breadcrumb',
  bubble: 'Bubble',
  button: 'Button',
  'button-group': 'ButtonGroup',
  calendar: 'Calendar',
  card: 'Card',
  carousel: 'Carousel',
  chart: 'ChartContainer',
  checkbox: 'Checkbox',
  code: 'Code',
  command: 'Command',
  'context-menu': 'ContextMenu',
  'date-picker': 'DatePicker',
  dialog: 'Dialog',
  direction: 'DirectionProvider',
  drawer: 'Drawer',
  empty: 'Empty',
  field: 'Field',
  'file-upload': 'FileUpload',
  'hover-card': 'HoverCard',
  icon: 'Icon',
  input: 'Input',
  'input-group': 'InputGroup',
  'input-otp': 'InputOTP',
  item: 'Item',
  kbd: 'Kbd',
  'keyboard-scroll-view': 'KeyboardScrollView',
  label: 'Label',
  marker: 'Marker',
  menu: 'Menu',
  message: 'Message',
  'message-scroller': 'MessageScroller',
  'navigation-menu': 'NavigationMenu',
  pagination: 'Pagination',
  player: 'Player',
  popover: 'Popover',
  progress: 'Progress',
  questionnaire: 'Questionnaire',
  'radio-group': 'RadioGroup',
  resizable: 'ResizablePanelGroup',
  'scroll-area': 'ScrollArea',
  select: 'Select',
  separator: 'Separator',
  sheet: 'Sheet',
  skeleton: 'Skeleton',
  slider: 'Slider',
  spinner: 'Spinner',
  switch: 'Switch',
  table: 'Table',
  tabs: 'Tabs',
  textarea: 'Textarea',
  toast: 'Toast',
  toggle: 'Toggle',
  'toggle-group': 'ToggleGroup',
  tooltip: 'Tooltip',
  typography: 'Typography'
};

const summaryMap = {
  accordion: 'Acordeón para revelar y ocultar bloques de contenido en secciones plegables.',
  alert: 'Bloque de feedback para mostrar avisos, errores, estados vacíos o mensajes de éxito.',
  'aspect-ratio': 'Contenedor que preserva una proporción fija al renderizar medios o bloques responsivos.',
  attachment: 'Patrón visual para representar archivos adjuntos con media, acciones y progreso.',
  avatar: 'Avatar con imagen y fallback para identidad de usuario o entidad.',
  badge: 'Etiqueta compacta para estados, categorías o contadores breves.',
  barcode: 'Renderiza códigos de barras SVG a partir de los formatos soportados por `@kivora/codes`.',
  'bottom-sheet': 'Hoja inferior nativa para acciones contextuales, formularios cortos y contenido modal.',
  breadcrumb: 'Navegación jerárquica para rutas o pasos dentro de una interfaz.',
  bubble: 'Burbuja de contenido para chats, anotaciones o bloques resaltados.',
  button: 'Botón principal del sistema con variantes visuales y tamaños compartidos.',
  'button-group': 'Agrupa botones relacionados y alinea acciones horizontales o verticales.',
  calendar: 'Calendario visual para seleccionar días o rangos y mostrar estados por fecha.',
  card: 'Contenedor estructurado con header, contenido y footer para módulos de UI.',
  carousel: 'Carrusel para listas horizontales, galerías y contenido desplazable con controles.',
  chart: 'Ayudantes para componer gráficas con tooltip y leyenda consistentes.',
  checkbox: 'Casilla de verificación controlada o no controlada para estados booleanos.',
  code: 'Bloque de código formateado con soporte de tema y scroll.',
  command: 'Paleta de comandos web para búsqueda rápida, acciones y navegación.',
  'context-menu': 'Menú contextual web disparado por clic derecho o gesto equivalente.',
  'date-picker': 'Selector de fecha o rango con presets y composición sobre calendario.',
  dialog: 'Modal de confirmación o formulario que bloquea la interacción exterior.',
  direction: 'Provider de dirección LTR/RTL para adaptar componentes sensibles a lectura.',
  drawer: 'Panel deslizante web desde un borde para navegación o acciones secundarias.',
  empty: 'Plantilla de estado vacío con icono, título, descripción y pie opcional.',
  field: 'Primitivas de campo de formulario con label, descripción, error y agrupación.',
  'file-upload': 'Flujo de subida de archivos con controlador, estado, fuentes y previsualización.',
  'hover-card': 'Tarjeta informativa web que se abre al pasar o enfocar un trigger.',
  input: 'Campo de entrada de texto de una línea con estilos del sistema.',
  'input-group': 'Agrupa un input con addons o botones antes y después del campo.',
  'input-otp': 'Entrada segmentada para códigos OTP o verificaciones por dígitos.',
  item: 'Patrón flexible de fila o bloque con media, contenido, acciones y footer.',
  kbd: 'Representación visual de teclas o atajos de teclado.',
  'keyboard-scroll-view': 'Scroll nativo que se adapta al teclado para formularios largos.',
  label: 'Label accesible para asociar texto descriptivo a controles de formulario.',
  marker: 'Píldora o marca visual para destacar contenido corto o iconografía pequeña.',
  message: 'Estructura de mensaje con avatar, cabecera, contenido y grupos conversacionales.',
  'message-scroller': 'Contenedor de scroll para conversaciones con anclaje al final y seguimiento.',
  'navigation-menu': 'Menú de navegación web para secciones complejas y contenido expandido.',
  pagination: 'Controles de paginación para navegar páginas, rangos o cursores.',
  player: 'Conjunto de reproductor multimedia, controlador y ayudas de offline/cast según plataforma.',
  popover: 'Capa flotante anclada a un trigger para acciones ligeras o contenido contextual.',
  progress: 'Barra de progreso lineal para cargas, procesos y porcentajes.',
  questionnaire: 'Cuestionario guiado por pasos o preguntas con navegación entre respuestas.',
  'radio-group': 'Grupo de opciones mutuamente excluyentes con radios accesibles.',
  resizable: 'Paneles redimensionables web para layouts divididos.',
  'scroll-area': 'Área de scroll estilizada con viewport y barras consistentes.',
  select: 'Selector de opciones con trigger, lista, grupos y variantes según plataforma.',
  separator: 'Separador horizontal o vertical para dividir contenido relacionado.',
  sheet: 'Panel superpuesto desde un borde para formularios, detalles o navegación secundaria.',
  skeleton: 'Placeholder de carga para reservar espacio mientras llegan datos.',
  slider: 'Control deslizante para seleccionar uno o varios valores numéricos.',
  menu: 'Menú de acciones desplegable o barra de menús con variant="bar". Los elementos de una barra se agrupan con MenuDropdown.',
  icon: 'Icono Lucide con tamaño, color, grosor de trazo y etiqueta accesible. Importa el icono de Lucide y pásalo mediante icon; omite label si es decorativo.',
  spinner: 'Indicador de carga breve para operaciones en curso.',
  switch: 'Interruptor binario para activar o desactivar una preferencia.',
  table: 'Primitivas de tabla para cabeceras, filas, celdas y captions.',
  tabs: 'Navegación por pestañas para alternar vistas hermanas.',
  textarea: 'Campo multilínea para texto largo, comentarios o descripciones.',
  toast: 'Notificaciones efímeras y apilables para feedback no bloqueante.',
  toggle: 'Botón con estado seleccionado/no seleccionado.',
  'toggle-group': 'Grupo de toggles de selección simple o múltiple.',
  tooltip: 'Ayuda contextual breve anclada a un elemento.',
  typography: 'Primitivas tipográficas para títulos, cuerpos y escalas de texto.'
};

const exampleMap = {
  accordion: {
    nextjs: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@kivora/nextjs";

export function Example() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="shipping">
        <AccordionTrigger>Envíos</AccordionTrigger>
        <AccordionContent>
          Entregamos de lunes a sábado y mostramos seguimiento en tiempo real.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    native: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="shipping">
        <AccordionTrigger>
          <Text>Envíos</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>Entregamos de lunes a sábado y mostramos seguimiento en tiempo real.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`
  },
  alert: {
    nextjs: `import { Alert, AlertDescription, AlertTitle } from "@kivora/nextjs";

export function Example() {
  return (
    <Alert>
      <AlertTitle>Cambios guardados</AlertTitle>
      <AlertDescription>La configuración ya está sincronizada.</AlertDescription>
    </Alert>
  );
}`,
    native: `import { Alert, AlertDescription, AlertTitle } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Alert>
      <AlertTitle>
        <Text>Cambios guardados</Text>
      </AlertTitle>
      <AlertDescription>
        <Text>La configuración ya está sincronizada.</Text>
      </AlertDescription>
    </Alert>
  );
}`
  },
  attachment: {
    nextjs: `import {
  Attachment,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentProgress,
  AttachmentTitle
} from "@kivora/nextjs";

export function Example() {
  return (
    <Attachment>
      <AttachmentMedia>PDF</AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>factura-septiembre.pdf</AttachmentTitle>
        <AttachmentDescription>Factura emitida · 2.4 MB</AttachmentDescription>
        <AttachmentProgress value={72} />
      </AttachmentContent>
      <AttachmentActions>
        <button type="button">Cancelar</button>
      </AttachmentActions>
    </Attachment>
  );
}`,
    native: `import {
  Attachment,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentProgress,
  AttachmentTitle
} from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Attachment>
      <AttachmentMedia>
        <Text>PDF</Text>
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>
          <Text>factura-septiembre.pdf</Text>
        </AttachmentTitle>
        <AttachmentDescription>
          <Text>Factura emitida · 2.4 MB</Text>
        </AttachmentDescription>
        <AttachmentProgress value={72} />
      </AttachmentContent>
      <AttachmentActions>
        <Text>Cancelar</Text>
      </AttachmentActions>
    </Attachment>
  );
}`
  },
  avatar: {
    nextjs: `import { Avatar, AvatarFallback, AvatarImage } from "@kivora/nextjs";

export function Example() {
  return (
    <Avatar>
      <AvatarImage src="/avatar.jpg" alt="Ana Torres" />
      <AvatarFallback>AT</AvatarFallback>
    </Avatar>
  );
}`,
    native: `import { Avatar, AvatarFallback, AvatarImage } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Avatar>
      <AvatarImage source={{ uri: "https://example.com/avatar.jpg" }} accessibilityLabel="Ana Torres" />
      <AvatarFallback>
        <Text>AT</Text>
      </AvatarFallback>
    </Avatar>
  );
}`
  },
  'bottom-sheet': {
    native: `import { BottomSheet, BottomSheetInput, Button } from "@kivora/native";
import { Text, View } from "react-native";
import { useState } from "react";

export function Example() {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Button onPress={() => setOpen(true)}>Abrir</Button>
      <BottomSheet open={open} onOpenChange={setOpen}>
        <View className="gap-3 p-4">
          <Text className="text-lg font-semibold">Datos de entrega</Text>
          <BottomSheetInput placeholder="Instrucciones para el repartidor" />
        </View>
      </BottomSheet>
    </View>
  );
}`
  },
  breadcrumb: {
    nextjs: `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@kivora/nextjs";

export function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Pedidos</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`,
    native: `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Text>Inicio</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Text>/</Text>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <Text>Pedidos</Text>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`
  },
  button: {
    nextjs: `import { Button } from "@kivora/nextjs";

export function Example() {
  return <Button variant="default">Guardar cambios</Button>;
}`,
    native: `import { Button } from "@kivora/native";

export function Example() {
  return <Button variant="default">Guardar cambios</Button>;
}`
  },
  calendar: {
    nextjs: `import { Calendar } from "@kivora/nextjs";
import { useState } from "react";

export function Example() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}`,
    native: `import { Calendar } from "@kivora/native";
import { useState } from "react";

export function Example() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}`
  },
  card: {
    nextjs: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kivora/nextjs";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen diario</CardTitle>
        <CardDescription>Pedidos y actividad del turno</CardDescription>
      </CardHeader>
      <CardContent>42 pedidos confirmados.</CardContent>
    </Card>
  );
}`,
    native: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Text>Resumen diario</Text>
        </CardTitle>
        <CardDescription>
          <Text>Pedidos y actividad del turno</Text>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text>42 pedidos confirmados.</Text>
      </CardContent>
    </Card>
  );
}`
  },
  carousel: {
    nextjs: `import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@kivora/nextjs";

export function Example() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Slide 1</CarouselItem>
        <CarouselItem>Slide 2</CarouselItem>
        <CarouselItem>Slide 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`,
    native: `import { Carousel, CarouselContent, CarouselItem } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Text>Slide 1</Text>
        </CarouselItem>
        <CarouselItem>
          <Text>Slide 2</Text>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}`
  },
  checkbox: {
    nextjs: `import { Checkbox } from "@kivora/nextjs";
import { useState } from "react";

export function Example() {
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onCheckedChange={setChecked} aria-label="Aceptar términos" />;
}`,
    native: `import { Checkbox } from "@kivora/native";
import { useState } from "react";

export function Example() {
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onCheckedChange={setChecked} accessibilityLabel="Aceptar términos" />;
}`
  },
  'date-picker': {
    nextjs: `import { DatePicker } from "@kivora/nextjs";
import { useState } from "react";

export function Example() {
  const [value, setValue] = useState<Date | undefined>(new Date());
  return <DatePicker value={value} onValueChange={setValue} />;
}`,
    native: `import { DatePicker } from "@kivora/native";
import { useState } from "react";

export function Example() {
  const [value, setValue] = useState<Date | undefined>(new Date());
  return <DatePicker value={value} onValueChange={setValue} />;
}`
  },
  dialog: {
    nextjs: `import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@kivora/nextjs";

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar acción</DialogTitle>
          <DialogDescription>Este cambio afecta a todo el equipo.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}`,
    native: `import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Abrir modal</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Text>Confirmar acción</Text>
          </DialogTitle>
          <DialogDescription>
            <Text>Este cambio afecta a todo el equipo.</Text>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}`
  },
  'file-upload': {
    nextjs: `import { FileUpload, UploadController } from "@kivora/nextjs";

const controller = new UploadController({
  endpoint: "https://example.com/files"
});

export function Example() {
  return (
    <FileUpload
      controller={controller}
      pickFiles={async () => []}
      variant="advanced"
      showStatus
    />
  );
}`,
    native: `import { FileUpload, UploadController } from "@kivora/native";

const controller = new UploadController({
  endpoint: "https://example.com/files"
});

export function Example() {
  return (
    <FileUpload
      controller={controller}
      pickFiles={async () => []}
      variant="advanced"
      showStatus
    />
  );
}`
  },
  input: {
    nextjs: `import { Input } from "@kivora/nextjs";

export function Example() {
  return <Input placeholder="Nombre del paciente" />;
}`,
    native: `import { Input } from "@kivora/native";

export function Example() {
  return <Input placeholder="Nombre del paciente" />;
}`
  },
  'input-group': {
    nextjs: `import { Input, InputGroup, InputGroupAddon } from "@kivora/nextjs";

export function Example() {
  return (
    <InputGroup>
      <InputGroupAddon>+34</InputGroupAddon>
      <Input placeholder="600 123 123" />
    </InputGroup>
  );
}`,
    native: `import { Input, InputGroup, InputGroupAddon } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <Text>+34</Text>
      </InputGroupAddon>
      <Input placeholder="600 123 123" />
    </InputGroup>
  );
}`
  },
  'input-otp': {
    nextjs: `import { InputOTP, InputOTPGroup, InputOTPSlot } from "@kivora/nextjs";

export function Example() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`,
    native: `import { InputOTP, InputOTPGroup, InputOTPSlot } from "@kivora/native";

export function Example() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`
  },
  item: {
    nextjs: `import { Item, ItemActions, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@kivora/nextjs";

export function Example() {
  return (
    <Item>
      <ItemContent>
        <ItemHeader>
          <ItemTitle>Pedido #1042</ItemTitle>
          <ItemDescription>Entrega prevista en 15 minutos</ItemDescription>
        </ItemHeader>
      </ItemContent>
      <ItemActions>
        <button type="button">Ver</button>
      </ItemActions>
    </Item>
  );
}`,
    native: `import { Item, ItemActions, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Item>
      <ItemContent>
        <ItemHeader>
          <ItemTitle>
            <Text>Pedido #1042</Text>
          </ItemTitle>
          <ItemDescription>
            <Text>Entrega prevista en 15 minutos</Text>
          </ItemDescription>
        </ItemHeader>
      </ItemContent>
      <ItemActions>
        <Text>Ver</Text>
      </ItemActions>
    </Item>
  );
}`
  },
  'keyboard-scroll-view': {
    native: `import { KeyboardScrollView, Input } from "@kivora/native";

export function Example() {
  return (
    <KeyboardScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Input placeholder="Nombre" />
      <Input placeholder="Correo electrónico" keyboardType="email-address" />
      <Input placeholder="Notas" />
    </KeyboardScrollView>
  );
}`
  },
  message: {
    nextjs: `import { Message, MessageContent, MessageFooter, MessageHeader } from "@kivora/nextjs";

export function Example() {
  return (
    <Message>
      <MessageHeader>Farmacia Central</MessageHeader>
      <MessageContent>Tu pedido ya está en preparación.</MessageContent>
      <MessageFooter>Hace 2 min</MessageFooter>
    </Message>
  );
}`,
    native: `import { Message, MessageContent, MessageFooter, MessageHeader } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Message>
      <MessageHeader>
        <Text>Farmacia Central</Text>
      </MessageHeader>
      <MessageContent>
        <Text>Tu pedido ya está en preparación.</Text>
      </MessageContent>
      <MessageFooter>
        <Text>Hace 2 min</Text>
      </MessageFooter>
    </Message>
  );
}`
  },
  player: {
    nextjs: `import { Player } from "@kivora/nextjs";

export function Example() {
  return (
    <Player
      title="Demo de audio"
      source={{ src: "https://example.com/audio.mp3", type: "audio/mpeg" }}
    />
  );
}`,
    native: `import { Player } from "@kivora/native";

export function Example() {
  return (
    <Player
      title="Demo de audio"
      source={{ src: "https://example.com/audio.mp3", type: "audio/mpeg" }}
    />
  );
}`
  },
  popover: {
    nextjs: `import { Button, Popover, PopoverContent, PopoverTrigger } from "@kivora/nextjs";

export function Example() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Abrir</Button>
      </PopoverTrigger>
      <PopoverContent align="start">Contenido contextual.</PopoverContent>
    </Popover>
  );
}`,
    native: `import { Button, Popover, PopoverContent, PopoverTrigger } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">Abrir</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Text>Contenido contextual.</Text>
      </PopoverContent>
    </Popover>
  );
}`
  },
  'radio-group': {
    nextjs: `import { RadioGroup, RadioGroupItem } from "@kivora/nextjs";

export function Example() {
  return (
    <RadioGroup defaultValue="delivery">
      <RadioGroupItem value="delivery">Entrega</RadioGroupItem>
      <RadioGroupItem value="pickup">Recogida</RadioGroupItem>
    </RadioGroup>
  );
}`,
    native: `import { RadioGroup, RadioGroupItem } from "@kivora/native";

export function Example() {
  return (
    <RadioGroup defaultValue="delivery">
      <RadioGroupItem value="delivery" label="Entrega" />
      <RadioGroupItem value="pickup" label="Recogida" />
    </RadioGroup>
  );
}`
  },
  barcode: {
    nextjs: `import { Barcode } from "@kivora/nextjs";

export function Example() {
  return <><Barcode format="code128" value="KIVORA-2026" />
    <Barcode format="qrcode" value="https://kivora.app" width={200} height={200} /></>;
}`,
    native: `import { Barcode } from "@kivora/native";

export function Example() {
  return <><Barcode format="code128" value="KIVORA-2026" />
    <Barcode format="qrcode" value="https://kivora.app" width={200} height={200} /></>;
}`
  },
  menu: {
    nextjs: `import { Button, Menu, MenuTrigger, MenuContent, MenuItem } from "@kivora/nextjs";

export function Example() {
  return <Menu><MenuTrigger asChild><Button>Acciones</Button></MenuTrigger>
    <MenuContent><MenuItem onSelect={() => console.log("Editar")}>Editar</MenuItem></MenuContent>
  </Menu>;
}`,
    native: `import { Menu, MenuTrigger, MenuContent, MenuItem } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return <Menu><MenuTrigger><Text>Acciones</Text></MenuTrigger>
    <MenuContent><MenuItem onSelect={() => console.log("Editar")}>Editar</MenuItem></MenuContent>
  </Menu>;
}`
  },
  'scroll-area': {
    nextjs: `import { ScrollArea } from "@kivora/nextjs";

export function Example() {
  return <ScrollArea virtualized className="h-64" items={Array.from({ length: 1000 }, (_, i) => i)}
    estimateSize={() => 40} renderItem={(item) => <div>{item}</div>} />;
}`,
    native: `import { ScrollArea } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return <ScrollArea virtualized style={{ height: 240 }} data={Array.from({ length: 1000 }, (_, i) => i)}
    keyExtractor={(item) => String(item)} renderItem={({ item }) => <Text>{item}</Text>} />;
}`
  },
  icon: {
    nextjs: `import { Icon } from "@kivora/nextjs";
import { Check } from "lucide-react";

export function Example() {
  return <Icon icon={Check} size={24} color="#16a34a" strokeWidth={2} label="Completado" />;
}`,
    native: `import { Icon } from "@kivora/native";
import Check from "lucide-react-native/icons/check";

// Renderiza dentro de KivoraProvider para adaptar el color al modo claro u oscuro.
export function Example() {
  return <Icon icon={Check} size={24} color="#16a34a" strokeWidth={2} label="Completado" />;
}`
  },
  select: {
    nextjs: `import { Select } from "@kivora/nextjs";

const options = [
  { value: "low", label: "Baja" },
  { value: "high", label: "Alta" }
];

export function Example() {
  return (
    <>
      <Select options={options} placeholder="Selecciona prioridad" />
      <Select isCreatable isMulti options={options} placeholder="Selecciona o crea" />
      <Select defaultOptions cacheOptions loadOptions={async (query) =>
        options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase()))
      } />
    </>
  );
}`,
    native: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Selecciona prioridad" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="low">
          <Text>Baja</Text>
        </SelectItem>
        <SelectItem value="high">
          <Text>Alta</Text>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}`
  },
  table: {
    nextjs: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@kivora/nextjs";

export function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Pedido</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>#1042</TableCell>
          <TableCell>Preparación</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`,
    native: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Text>Pedido</Text>
          </TableHead>
          <TableHead>
            <Text>Estado</Text>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Text>#1042</Text>
          </TableCell>
          <TableCell>
            <Text>Preparación</Text>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`
  },
  tabs: {
    nextjs: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@kivora/nextjs";

export function Example() {
  return (
    <Tabs defaultValue="details">
      <TabsList>
        <TabsTrigger value="details">Detalles</TabsTrigger>
        <TabsTrigger value="history">Historial</TabsTrigger>
      </TabsList>
      <TabsContent value="details">Contenido principal.</TabsContent>
      <TabsContent value="history">Actividad anterior.</TabsContent>
    </Tabs>
  );
}`,
    native: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Tabs defaultValue="details">
      <TabsList>
        <TabsTrigger value="details">
          <Text>Detalles</Text>
        </TabsTrigger>
        <TabsTrigger value="history">
          <Text>Historial</Text>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <Text>Contenido principal.</Text>
      </TabsContent>
      <TabsContent value="history">
        <Text>Actividad anterior.</Text>
      </TabsContent>
    </Tabs>
  );
}`
  },
  toast: {
    nextjs: `import { Button, Toast, ToastAction, ToastDescription, ToastTitle } from "@kivora/nextjs";

export function Example() {
  return (
    <Toast>
      <div>
        <ToastTitle>Subida completada</ToastTitle>
        <ToastDescription>El archivo ya está disponible.</ToastDescription>
      </div>
      <ToastAction altText="Ver">Ver</ToastAction>
    </Toast>
  );
}`,
    native: `import { Toast, ToastDescription, ToastTitle } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <Toast>
      <ToastTitle>
        <Text>Subida completada</Text>
      </ToastTitle>
      <ToastDescription>
        <Text>El archivo ya está disponible.</Text>
      </ToastDescription>
    </Toast>
  );
}`
  },
  tooltip: {
    nextjs: `import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@kivora/nextjs";

export function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Ayuda</Button>
        </TooltipTrigger>
        <TooltipContent>Texto explicativo breve.</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`,
    native: `import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@kivora/native";
import { Text } from "react-native";

export function Example() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Ayuda</Button>
        </TooltipTrigger>
        <TooltipContent>
          <Text>Texto explicativo breve.</Text>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`
  }
};

function toTitleCase(value) {
  return value
    .split(/[-/]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function escapeInline(value) {
  return String(value).replace(/`/g, '\\`');
}

function escapeTable(value) {
  return String(value)
    .replace(/\|/g, '\\|')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseTsConfig(tsconfigPath) {
  const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
  if (configFile.error) {
    throw new Error(ts.formatDiagnosticsWithColorAndContext([configFile.error], formatHost));
  }
  const parsed = ts.parseJsonConfigFileContent(configFile.config, ts.sys, path.dirname(tsconfigPath));
  if (parsed.errors.length) {
    throw new Error(ts.formatDiagnosticsWithColorAndContext(parsed.errors, formatHost));
  }
  return parsed;
}

const formatHost = {
  getCanonicalFileName: (fileName) => fileName,
  getCurrentDirectory: () => rootDir,
  getNewLine: () => '\n'
};

function loadModulePaths(indexPath) {
  const source = ts.sys.readFile(indexPath) ?? '';
  const sourceFile = ts.createSourceFile(indexPath, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const moduleIds = new Map();

  for (const statement of sourceFile.statements) {
    if (!ts.isExportDeclaration(statement) || !statement.moduleSpecifier) continue;
    if (!ts.isStringLiteral(statement.moduleSpecifier)) continue;
    if (statement.isTypeOnly) continue;

    const specifier = statement.moduleSpecifier.text;
    if (!specifier.startsWith('./components/')) continue;

    const raw = specifier.slice('./components/'.length);
    const docId = raw.startsWith('player/') ? 'player' : raw;
    const current = moduleIds.get(docId) ?? new Set();
    current.add(raw);
    moduleIds.set(docId, current);
  }

  return moduleIds;
}

function normalizePath(filePath) {
  return filePath.split(path.sep).join('/');
}

function collectOwnPropNames(node) {
  const names = new Set();

  function visitTypeNode(typeNode) {
    if (!typeNode) return;
    if (ts.isParenthesizedTypeNode(typeNode)) {
      visitTypeNode(typeNode.type);
      return;
    }
    if (ts.isIntersectionTypeNode(typeNode) || ts.isUnionTypeNode(typeNode)) {
      for (const child of typeNode.types) visitTypeNode(child);
      return;
    }
    if (ts.isTypeLiteralNode(typeNode)) {
      for (const member of typeNode.members) {
        if ((ts.isPropertySignature(member) || ts.isMethodSignature(member)) && member.name) {
          names.add(member.name.getText());
        }
      }
    }
  }

  if (ts.isInterfaceDeclaration(node)) {
    for (const member of node.members) {
      if ((ts.isPropertySignature(member) || ts.isMethodSignature(member)) && member.name) {
        names.add(member.name.getText());
      }
    }
  }

  if (ts.isTypeAliasDeclaration(node)) {
    visitTypeNode(node.type);
  }

  return names;
}

function getComposition(node) {
  if (!node) return null;
  if (ts.isInterfaceDeclaration(node)) {
    const clauses = node.heritageClauses?.flatMap((clause) => clause.types.map((type) => type.getText())) ?? [];
    return clauses.length ? clauses.join(' & ') : null;
  }
  if (ts.isTypeAliasDeclaration(node)) {
    return node.type.getText().replace(/\s+/g, ' ').trim();
  }
  return null;
}

function isComponentModuleExport(name) {
  return !name.endsWith('Props') && !name.endsWith('Ref') && !name.endsWith('ContextValue') && name !== 'default';
}

function getModuleSymbol(checker, sourceFile) {
  return sourceFile.symbol ?? checker.getSymbolAtLocation(sourceFile);
}

function getExportMetadata(program, checker, sourceFile) {
  const symbol = getModuleSymbol(checker, sourceFile);
  if (!symbol) return { values: [], propTypes: [], otherTypes: [] };
  const exports = checker.getExportsOfModule(symbol);
  const values = [];
  const propTypes = [];
  const otherTypes = [];

  for (const exported of exports) {
    const name = exported.getName();
    const flags = exported.getFlags();
    if (name === 'default') continue;

    if (flags & ts.SymbolFlags.ValueModule) continue;

    if (name.endsWith('Props')) {
      propTypes.push(name);
      continue;
    }

    if (flags & (ts.SymbolFlags.TypeAlias | ts.SymbolFlags.Interface | ts.SymbolFlags.TypeParameter | ts.SymbolFlags.Enum)) {
      otherTypes.push(name);
      continue;
    }

    if (isComponentModuleExport(name)) {
      values.push(name);
    }
  }

  return {
    values: [...new Set(values)].sort((a, b) => a.localeCompare(b)),
    propTypes: [...new Set(propTypes)].sort((a, b) => a.localeCompare(b)),
    otherTypes: [...new Set(otherTypes)].sort((a, b) => a.localeCompare(b))
  };
}

function getPropRows(checker, propSymbol) {
  const declaration = propSymbol.valueDeclaration ?? propSymbol.declarations?.[0];
  const declaredType = checker.getDeclaredTypeOfSymbol(propSymbol);
  const properties = checker.getPropertiesOfType(declaredType);
  const ownPropNames = collectOwnPropNames(declaration);
  const composition = getComposition(declaration);
  const rows = properties.map((property) => {
    const propertyDeclaration = property.valueDeclaration ?? property.declarations?.[0] ?? declaration;
    const propertyType = checker.getTypeOfSymbolAtLocation(property, propertyDeclaration);
    const typeText = checker.typeToString(
      propertyType,
      propertyDeclaration,
      ts.TypeFormatFlags.NoTruncation |
        ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope |
        ts.TypeFormatFlags.InTypeAlias
    );
    const docs = ts.displayPartsToString(property.getDocumentationComment(checker)).trim();
    const isOwn = ownPropNames.has(property.getName()) || !property.declarations?.length;
    return {
      name: property.getName(),
      type: typeText,
      optional: (property.getFlags() & ts.SymbolFlags.Optional) !== 0,
      description: docs,
      own: isOwn,
      source: property.declarations?.[0]?.getSourceFile().fileName ? normalizePath(path.relative(rootDir, property.declarations[0].getSourceFile().fileName)) : null
    };
  });

  rows.sort((left, right) => left.name.localeCompare(right.name));

  return {
    composition,
    own: rows.filter((row) => row.own),
    inherited: rows.filter((row) => !row.own)
  };
}

function buildDefaultExample(docId, packageName, platform, exportNames) {
  const primaryExport = primaryExportMap[docId] ?? exportNames[0];
  if (!primaryExport) return null;
  const importLine = `import { ${primaryExport} } from "${packageName}";`;

  if (platform === 'native') {
    if (['badge', 'button', 'label', 'toggle'].includes(docId)) {
      return `${importLine}\n\nexport function Example() {\n  return <${primaryExport}>Ejemplo</${primaryExport}>;\n}`;
    }
    if (['switch', 'checkbox', 'input', 'progress', 'slider', 'spinner', 'skeleton', 'separator', 'barcode'].includes(docId)) {
      const body = docId === 'progress' ? `<${primaryExport} value={64} />` : docId === 'slider' ? `<${primaryExport} defaultValue={[50]} />` : docId === 'switch' ? `<${primaryExport} checked />` : docId === 'checkbox' ? `<${primaryExport} checked />` : docId === 'separator' ? `<${primaryExport} />` : `<${primaryExport} />`;
      return `${importLine}\n\nexport function Example() {\n  return ${body};\n}`;
    }
    return `${importLine}\nimport { Text } from "react-native";\n\nexport function Example() {\n  return (\n    <${primaryExport}>\n      <Text>Ejemplo básico</Text>\n    </${primaryExport}>\n  );\n}`;
  }

  if (['input', 'textarea'].includes(docId)) {
    return `${importLine}\n\nexport function Example() {\n  return <${primaryExport} placeholder="Ejemplo básico" />;\n}`;
  }
  if (['switch', 'checkbox', 'progress', 'slider', 'spinner', 'skeleton', 'separator', 'barcode'].includes(docId)) {
    const body = docId === 'progress' ? `<${primaryExport} value={64} />` : docId === 'slider' ? `<${primaryExport} defaultValue={[50]} />` : docId === 'switch' ? `<${primaryExport} checked />` : docId === 'checkbox' ? `<${primaryExport} checked aria-label="Ejemplo" />` : docId === 'separator' ? `<${primaryExport} />` : `<${primaryExport} />`;
    return `${importLine}\n\nexport function Example() {\n  return ${body};\n}`;
  }
  return `${importLine}\n\nexport function Example() {\n  return <${primaryExport}>Ejemplo básico</${primaryExport}>;\n}`;
}

function renderPropTable(rows, includeSource = false) {
  if (!rows.length) return '_Sin props documentadas en este nivel._';
  const header = includeSource
    ? '| Prop | Tipo | Opcional | Descripción | Origen |\n| --- | --- | --- | --- | --- |'
    : '| Prop | Tipo | Opcional | Descripción |\n| --- | --- | --- | --- |';
  const body = rows.map((row) => {
    const description = row.description ? escapeTable(row.description) : '—';
    const source = row.source ? `\`${escapeInline(row.source)}\`` : 'externo';
    return includeSource
      ? `| \`${escapeInline(row.name)}\` | \`${escapeInline(row.type)}\` | ${row.optional ? 'sí' : 'no'} | ${description} | ${source} |`
      : `| \`${escapeInline(row.name)}\` | \`${escapeInline(row.type)}\` | ${row.optional ? 'sí' : 'no'} | ${description} |`;
  });
  return [header, ...body].join('\n');
}

async function ensureCleanGeneratedFiles() {
  await fs.mkdir(docsDir, { recursive: true });
  const existing = await fs.readdir(docsDir, { withFileTypes: true });
  await Promise.all(
    existing
      .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
      .map((entry) => fs.unlink(path.join(docsDir, entry.name)))
  );
}

function getDescription(docId) {
  return summaryMap[docId] ?? `Documentación de uso para el componente ${toTitleCase(docId)}.`;
}

async function main() {
  await ensureCleanGeneratedFiles();

  const packageContexts = packages.map((pkg) => {
    const parsed = parseTsConfig(pkg.tsconfigPath);
    const program = ts.createProgram({
      rootNames: parsed.fileNames,
      options: parsed.options
    });
    const checker = program.getTypeChecker();
    return { ...pkg, parsed, program, checker, modules: loadModulePaths(pkg.indexPath) };
  });

  const candidateDocIds = [...new Set(packageContexts.flatMap((pkg) => [...pkg.modules.keys()]))].sort((a, b) => a.localeCompare(b));
  const allDocIds = [];
  const indexRows = [];

  for (const docId of candidateDocIds) {
    let hasVisualExport = false;

    for (const pkg of packageContexts) {
      const modulePaths = pkg.modules.get(docId);
      if (!modulePaths) continue;

      for (const rawModulePath of modulePaths) {
        const sourcePathTsx = path.join(rootDir, 'packages', pkg.platform, 'src', 'components', `${rawModulePath}.tsx`);
        const sourcePathTs = path.join(rootDir, 'packages', pkg.platform, 'src', 'components', `${rawModulePath}.ts`);
        const sourcePath = ts.sys.fileExists(sourcePathTsx) ? sourcePathTsx : sourcePathTs;
        const sourceFile = pkg.program.getSourceFile(sourcePath);
        if (!sourceFile) continue;

        const meta = getExportMetadata(pkg.program, pkg.checker, sourceFile);
        if (meta.values.length > 0) {
          hasVisualExport = true;
          break;
        }
      }

      if (hasVisualExport) break;
    }

    if (primaryExportMap[docId] && hasVisualExport) {
      allDocIds.push(docId);
    }
  }

  for (const docId of allDocIds) {
    const title = toTitleCase(docId);
    const sections = [
      `# ${title}`,
      '',
      '> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.',
      '',
      '## Qué es',
      '',
      getDescription(docId),
      '',
      '## Disponibilidad',
      ''
    ];

    for (const pkg of packageContexts) {
      const modulePaths = pkg.modules.get(docId);
      sections.push(`- **${pkg.label}:** ${modulePaths ? `sí, vía \`${pkg.packageName}\`` : 'no disponible'}`);
    }

    sections.push('', '## Imports', '');

    const exportMetaByPlatform = {};
    const propDocsByPlatform = {};

    for (const pkg of packageContexts) {
      const modulePaths = pkg.modules.get(docId);
      if (!modulePaths) continue;

      const exportValues = new Set();
      const propTypes = new Set();
      const otherTypes = new Set();
      const propDocEntries = [];

      for (const rawModulePath of modulePaths) {
        const sourcePathTsx = path.join(rootDir, 'packages', pkg.platform, 'src', 'components', `${rawModulePath}.tsx`);
        const sourcePathTs = path.join(rootDir, 'packages', pkg.platform, 'src', 'components', `${rawModulePath}.ts`);
        const sourcePath = ts.sys.fileExists(sourcePathTsx) ? sourcePathTsx : sourcePathTs;
        const sourceFile = pkg.program.getSourceFile(sourcePath);
        if (!sourceFile) continue;

        const meta = getExportMetadata(pkg.program, pkg.checker, sourceFile);
        meta.values.forEach((value) => exportValues.add(value));
        meta.propTypes.forEach((propType) => propTypes.add(propType));
        meta.otherTypes.forEach((typeName) => otherTypes.add(typeName));

        const moduleSymbol = getModuleSymbol(pkg.checker, sourceFile);
        if (moduleSymbol) {
          const exports = pkg.checker.getExportsOfModule(moduleSymbol);
          for (const exported of exports) {
            if (!exported.getName().endsWith('Props')) continue;
            propDocEntries.push({
              name: exported.getName(),
              file: normalizePath(path.relative(rootDir, sourcePath)),
              ...getPropRows(pkg.checker, exported)
            });
          }
        }
      }

      exportMetaByPlatform[pkg.platform] = {
        values: [...exportValues].sort((a, b) => a.localeCompare(b)),
        propTypes: [...propTypes].sort((a, b) => a.localeCompare(b)),
        otherTypes: [...otherTypes].sort((a, b) => a.localeCompare(b))
      };
      propDocsByPlatform[pkg.platform] = propDocEntries.sort((a, b) => a.name.localeCompare(b.name));

      sections.push(`### ${pkg.packageName}`, '', '```tsx');
      sections.push(`import { ${[...exportValues].sort((a, b) => a.localeCompare(b)).join(', ')} } from "${pkg.packageName}";`);
      sections.push('```', '');
    }

    sections.push('## Exporta', '');
    for (const pkg of packageContexts) {
      const meta = exportMetaByPlatform[pkg.platform];
      if (!meta) continue;
      sections.push(`### ${pkg.label}`, '');
      sections.push(`- **Componentes y helpers visuales:** ${meta.values.length ? meta.values.map((value) => `\`${value}\``).join(', ') : '—'}`);
      sections.push(`- **Tipos de props:** ${meta.propTypes.length ? meta.propTypes.map((value) => `\`${value}\``).join(', ') : '—'}`);
      sections.push(`- **Tipos relacionados:** ${meta.otherTypes.length ? meta.otherTypes.map((value) => `\`${value}\``).join(', ') : '—'}`);
      sections.push('');
    }

    sections.push('## Ejemplos', '');
    for (const pkg of packageContexts) {
      const meta = exportMetaByPlatform[pkg.platform];
      if (!meta) continue;
      const example = exampleMap[docId]?.[pkg.platform] ?? buildDefaultExample(docId, pkg.packageName, pkg.platform, meta.values);
      if (!example) continue;
      sections.push(`### ${pkg.label}`, '', '```tsx', example, '```', '');
    }

    sections.push('## Props', '');
    for (const pkg of packageContexts) {
      const propEntries = propDocsByPlatform[pkg.platform];
      if (!propEntries?.length) continue;
      sections.push(`### ${pkg.label}`, '');
      for (const entry of propEntries) {
        sections.push(`#### \`${entry.name}\``, '');
        sections.push(`- **Definido en:** \`${entry.file}\``);
        if (entry.composition) {
          sections.push(`- **Composición base:** \`${escapeInline(entry.composition)}\``);
        }
        sections.push('', '**Props propias**', '', renderPropTable(entry.own), '');
        if (entry.inherited.length) {
          sections.push('<details>');
          sections.push(`<summary>Props heredadas o compuestas de \`${entry.name}\` (${entry.inherited.length})</summary>`);
          sections.push('', renderPropTable(entry.inherited, true), '', '</details>', '');
        }
      }
    }

    const outputPath = path.join(docsDir, `${docId}.md`);
    await fs.writeFile(outputPath, `${sections.join('\n')}\n`, 'utf8');

    const availability = packageContexts.map((pkg) => (pkg.modules.has(docId) ? pkg.label : '—')).join(' / ');
    indexRows.push(`| [${title}](./${docId}.md) | ${availability} | ${getDescription(docId)} |`);
  }

  const readme = [
    '# Componentes',
    '',
    '> Archivos generados automáticamente por `node scripts/generate-component-docs.mjs`.',
    '',
    '| Componente | Plataformas | Resumen |',
    '| --- | --- | --- |',
    ...indexRows
  ].join('\n');

  await fs.writeFile(path.join(docsDir, 'README.md'), `${readme}\n`, 'utf8');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
