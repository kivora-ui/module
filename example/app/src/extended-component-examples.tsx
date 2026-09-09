import { useExampleState } from './example-state';
import React from 'react';
import { Text, View } from 'react-native';
import * as K from '@kivora/native';
import Check from 'lucide-react-native/icons/check';

const t = 'text-base text-foreground';
const trigger = 'min-h-12 justify-center rounded-lg border border-border px-3';
const products = ['Gasas estériles', 'Termómetro digital', 'Protector solar'];

const ExampleAspectRatio = React.memo(function ExampleAspectRatio() {
  return (
    <K.AspectRatio
      ratio={16 / 9}
      className="items-center justify-center rounded-xl bg-muted"
    >
      <Text className={t}>Imagen de producto · 16:9</Text>
    </K.AspectRatio>
  );
});

const ExampleAttachment = React.memo(function ExampleAttachment() {
  return (
    <K.Attachment>
      <K.AttachmentMedia>
        <Text className={t}>PDF</Text>
      </K.AttachmentMedia>
      <K.AttachmentContent>
        <K.AttachmentTitle>Albarán de recepción</K.AttachmentTitle>
        <K.AttachmentDescription>PDF · 240 KB</K.AttachmentDescription>
        <K.AttachmentProgress value={70} />
      </K.AttachmentContent>
    </K.Attachment>
  );
});

const ExampleBreadcrumb = React.memo(function ExampleBreadcrumb() {
  const [menu, setMenu] = useExampleState(
    'ExampleBreadcrumb:menu',
    'Sin acción seleccionada',
  );
  return (
    <K.Breadcrumb>
      <K.BreadcrumbList>
        <K.BreadcrumbItem>
          <K.BreadcrumbLink onPress={() => setMenu('Inventario')}>
            Inventario
          </K.BreadcrumbLink>
        </K.BreadcrumbItem>
        <K.BreadcrumbSeparator />
        <K.BreadcrumbItem>
          <K.BreadcrumbPage>Recepciones</K.BreadcrumbPage>
        </K.BreadcrumbItem>
      </K.BreadcrumbList>
      <Text className={t}>{menu}</Text>
    </K.Breadcrumb>
  );
});

const ExampleBubble = React.memo(function ExampleBubble() {
  return (
    <K.Bubble>
      <K.BubbleContent>
        El proveedor entregará el pedido a las 10:00.
      </K.BubbleContent>
    </K.Bubble>
  );
});

const ExampleButtonGroup = React.memo(function ExampleButtonGroup() {
  const [menu, setMenu] = useExampleState(
    'ExampleButtonGroup:menu',
    'Sin acción seleccionada',
  );
  return (
    <K.ButtonGroup>
      {['Guardar', 'Revisar'].map(label => (
        <K.Button key={label} variant="outline" onPress={() => setMenu(label)}>
          <Text className={t}>{label}</Text>
        </K.Button>
      ))}
      <Text className={t}>{menu}</Text>
    </K.ButtonGroup>
  );
});

const ExampleCalendar = React.memo(function ExampleCalendar() {
  const [calendar, setCalendar] = useExampleState<
    Date | K.DateRange | Date[] | undefined
  >('ExampleCalendar:calendar');
  return <K.Calendar selected={calendar} onSelect={setCalendar} />;
});

const ExampleDatePicker = React.memo(function ExampleDatePicker() {
  const [date, setDate] = useExampleState<K.DatePickerValue | undefined>(
    'ExampleDatePicker:date',
  );
  const [range, setRange] = useExampleState<K.DatePickerValue | undefined>(
    'ExampleDatePicker:range',
  );
  return (
    <View className="gap-3">
      <K.DatePicker
        value={date}
        onValueChange={setDate}
        withTime
        timeFormat="24h"
        placeholder="Fecha de recepción"
      />
      <K.DatePicker
        mode="range"
        value={range}
        onValueChange={setRange}
        placeholder="Periodo de ventas"
      />
    </View>
  );
});

const ExampleCarousel = React.memo(function ExampleCarousel() {
  const [slide, setSlide] = React.useState(0);
  const [loop, setLoop] = useExampleState('ExampleCarousel:loop', false);
  const [layout, setLayout] = useExampleState(
    'ExampleCarousel:layout',
    '1,25 tarjetas',
  );
  const offers = [
    {
      name: 'Gasas est\u00e9riles',
      category: 'BOTIQU\u00cdN',
      detail: 'Cuidado diario',
      stock: '24 disponibles',
      price: '3,50 \u20ac',
      symbol: '+',
    },
    {
      name: 'Term\u00f3metro digital',
      category: 'BIENESTAR',
      detail: 'Control en casa',
      stock: '4 disponibles',
      price: '12,90 \u20ac',
      symbol: '\u00b0C',
    },
    {
      name: 'Protector solar',
      category: 'DERMOCOSM\u00c9TICA',
      detail: 'Protecci\u00f3n SPF 50+',
      stock: '12 disponibles',
      price: '18,50 \u20ac',
      symbol: '50+',
    },
  ];
  return (
    <View className="gap-4">
      <Text className={t}>Destacados de la farmacia</Text>
      <Text className="text-sm text-muted-foreground">
        Desliza las tarjetas o usa los puntos. Puedes reproducir y pausar el
        recorrido.
      </Text>
      <K.Select value={layout} onValueChange={setLayout}>
        <K.SelectTrigger
          accessibilityLabel="Presentación del carrusel"
          className="min-h-12"
        >
          <K.SelectValue />
        </K.SelectTrigger>
        <K.SelectContent>
          {['Una tarjeta', '1,25 tarjetas', '1,5 tarjetas', 'Dos tarjetas', 'Vertical'].map(option => (
            <K.SelectItem
              key={option}
              value={option}
              accessibilityLabel={option}
            >
              <Text className={t}>{option}</Text>
            </K.SelectItem>
          ))}
        </K.SelectContent>
      </K.Select>
      <K.Switch
        label="Repetir en bucle"
        checked={loop}
        onCheckedChange={setLoop}
      />
      <K.Carousel
        onIndexChange={setSlide}
        orientation={layout === 'Vertical' ? 'vertical' : 'horizontal'}
        settings={{
          infinite: loop,
          dots: true,
          speed: 300,
          autoplaySpeed: 3000,
          slidesToShow: layout === 'Dos tarjetas' ? 2 : layout === '1,25 tarjetas' ? 1.25 : layout === '1,5 tarjetas' ? 1.5 : 1,
        }}
      >
        <K.CarouselContent height={280}>
          {offers.map(offer => (
            <K.CarouselItem key={offer.name}>
              <View className="flex-1 gap-2 rounded-2xl border border-border bg-muted/40 p-4">
                <Text className="text-xs font-semibold text-muted-foreground">
                  {offer.category}
                </Text>
                <View className="h-16 items-center justify-center rounded-xl bg-background">
                  <Text className="text-3xl font-semibold text-foreground">
                    {offer.symbol}
                  </Text>
                </View>
                <Text className="text-lg font-semibold text-foreground">
                  {offer.name}
                </Text>
                <Text className="text-sm text-muted-foreground">
                  {offer.detail}
                </Text>
                <View className="gap-1" style={{ marginTop: 'auto' }}>
                  <Text className="text-lg font-semibold text-foreground">
                    {offer.price}
                  </Text>
                  <Text className="text-xs text-muted-foreground">
                    {offer.stock}
                  </Text>
                </View>
              </View>
            </K.CarouselItem>
          ))}
        </K.CarouselContent>
        <K.CarouselControls>
          <K.CarouselPrevious />
          <Text className={t} accessibilityLiveRegion="polite">
            {slide + 1} / 3
          </Text>
          <K.CarouselNext />
          <K.CarouselPlay />
          <K.CarouselPause />
        </K.CarouselControls>
      </K.Carousel>
    </View>
  );
});

const ExampleChart = React.memo(function ExampleChart() {
  return (
    <K.ChartContainer
      config={{ ventas: { label: 'Ventas', color: '#737373' } }}
      data={[
        { label: 'Mañana', value: 120 },
        { label: 'Tarde', value: 85 },
        { label: 'Noche', value: 40 },
      ]}
    >
      <K.ChartLegend />
      <K.ChartTooltip />
    </K.ChartContainer>
  );
});

const ExampleCode = React.memo(function ExampleCode() {
  return (
    <K.Code
      language="json"
      code={'{\n  "producto": "Gasas",\n  "stock": 24\n}'}
      showLineNumbers
    />
  );
});

const ExampleDirection = React.memo(function ExampleDirection() {
  return (
    <K.DirectionProvider dir="rtl">
      <View className="flex-row gap-4">
        <Text className={t}>1</Text>
        <Text className={t}>2</Text>
        <Text className={t}>3</Text>
      </View>
    </K.DirectionProvider>
  );
});

const ExampleDrawer = React.memo(function ExampleDrawer() {
  return (
    <K.Drawer>
      <K.DrawerTrigger className={trigger}>
        <Text className={t}>Abrir detalle del pedido</Text>
      </K.DrawerTrigger>
      <K.DrawerContent>
        <K.DrawerTitle>Detalle del pedido</K.DrawerTitle>
        <K.DrawerDescription>
          3 cajas pendientes de recepción.
        </K.DrawerDescription>
        <K.DrawerClose className={trigger}>
          <Text className={t}>Cerrar pedido</Text>
        </K.DrawerClose>
      </K.DrawerContent>
    </K.Drawer>
  );
});

const ExampleEmpty = React.memo(function ExampleEmpty() {
  const [status, setStatus] = React.useState('');
  return (
    <K.Empty>
      <K.EmptyHeader>
        <K.EmptyTitle>Sin pedidos pendientes</K.EmptyTitle>
        <K.EmptyDescription>Las recepciones están al día.</K.EmptyDescription>
      </K.EmptyHeader>
      <K.EmptyFooter>
        <K.Button
          variant="outline"
          onPress={async () => {
            try {
              const id = await K.toast('Lista actualizada');
              setStatus(id ? 'Notificación enviada.' : 'Notificaciones desactivadas.');
            } catch { setStatus('No se pudo mostrar la notificación.'); }
          }}
        >
          <Text className={t}>Actualizar pedidos</Text>
        </K.Button>
        {!!status && <Text className={t} accessibilityLiveRegion="polite">{status}</Text>}
      </K.EmptyFooter>
    </K.Empty>
  );
});

const ExampleField = React.memo(function ExampleField() {
  return (
    <K.Field>
      <K.FieldLabel>Referencia del albarán</K.FieldLabel>
      <K.Input
        accessibilityLabel="Referencia del albarán"
        placeholder="ALB-2026-001"
      />
      <K.FieldDescription>
        Referencia entregada por el proveedor.
      </K.FieldDescription>
      <K.FieldError
        errors={[{ message: 'Ejemplo: la referencia es obligatoria.' }]}
      />
    </K.Field>
  );
});

const ExampleInputGroup = React.memo(function ExampleInputGroup() {
  return (
    <K.InputGroup>
      <K.InputGroupAddon>
        <Text className={t}>€</Text>
      </K.InputGroupAddon>
      <K.Input
        className="flex-1 border-0"
        keyboardType="decimal-pad"
        accessibilityLabel="Importe del pedido"
        placeholder="0,00"
      />
    </K.InputGroup>
  );
});

const ExampleInputOTP = React.memo(function ExampleInputOTP() {
  const [otp, setOtp] = useExampleState('ExampleInputOTP:otp', '');
  return (
    <View className="gap-3">
      <K.InputOTP value={otp} onChange={setOtp} maxLength={6} />
      <Text className={t}>Código: {otp || 'Pendiente'}</Text>
    </View>
  );
});

const ExampleItem = React.memo(function ExampleItem() {
  return (
    <K.Item>
      <K.ItemMedia>
        <Text className={t}>24</Text>
      </K.ItemMedia>
      <K.ItemContent>
        <K.ItemTitle>Gasas estériles</K.ItemTitle>
        <K.ItemDescription>24 unidades disponibles</K.ItemDescription>
      </K.ItemContent>
    </K.Item>
  );
});

const ExampleKbd = React.memo(function ExampleKbd() {
  return (
    <View className="flex-row items-center gap-3">
      <K.Kbd>Enter</K.Kbd>
      <Text className={t}>Confirmar búsqueda</Text>
    </View>
  );
});

const ExampleMarker = React.memo(function ExampleMarker() {
  return (
    <K.Marker>
      <K.MarkerIcon>
        <Text className={t}>✓</Text>
      </K.MarkerIcon>
      <K.MarkerContent>Revisado</K.MarkerContent>
    </K.Marker>
  );
});

const ExampleMenu = React.memo(function ExampleMenu() {
  const [menu, setMenu] = useExampleState(
    'ExampleMenu:menu',
    'Sin acción seleccionada',
  );
  return (
    <K.Menu variant="bar">
      <K.MenuDropdown>
        <K.MenuTrigger className={trigger}>
          <Text className={t}>Ventas</Text>
        </K.MenuTrigger>
        <K.MenuContent>
          <K.MenuItem onSelect={() => setMenu('Informe preparado')}>
            Preparar informe
          </K.MenuItem>
        </K.MenuContent>
      </K.MenuDropdown>
      <Text className={t}>{menu}</Text>
    </K.Menu>
  );
});

const ExampleMessage = React.memo(function ExampleMessage() {
  return (
    <K.Message>
      <K.MessageContent>
        <K.MessageHeader>
          <Text className="font-semibold text-foreground">Ana · 09:30</Text>
        </K.MessageHeader>
        <Text className={t}>
          Recepción completada. Ya puedes revisar las existencias.
        </Text>
        <K.MessageFooter>
          <Text className="text-sm text-muted-foreground">Leído</Text>
        </K.MessageFooter>
      </K.MessageContent>
    </K.Message>
  );
});

const ExampleMessageScroller = React.memo(function ExampleMessageScroller() {
  return (
    <K.MessageScroller style={{ height: 180 }} nestedScrollEnabled>
      {Array.from({ length: 8 }, (_, i) => (
        <Text key={i} className="py-3 text-foreground">
          Mensaje {i + 1}: actualización de pedido
        </Text>
      ))}
    </K.MessageScroller>
  );
});

const ExamplePagination = React.memo(function ExamplePagination() {
  const [page, setPage] = useExampleState('ExamplePagination:page', 1);
  return (
    <K.Pagination>
      <K.PaginationPrevious
        disabled={page === 1}
        onPress={() => setPage(p => p - 1)}
      />
      <Text className={t}>Página {page} de 3</Text>
      <K.PaginationNext
        disabled={page === 3}
        onPress={() => setPage(p => p + 1)}
      />
    </K.Pagination>
  );
});

const ExampleQuestionnaire = React.memo(function ExampleQuestionnaire() {
  const [answer, setAnswer] = useExampleState(
    'ExampleQuestionnaire:answer',
    'Pendiente',
  );
  return (
    <View className="gap-3">
      <K.Questionnaire
        questions={[
          {
            id: 'delivery',
            title: '¿Se han recibido todas las cajas?',
            options: [
              { label: 'Sí', value: 'yes' },
              { label: 'No', value: 'no' },
            ],
          },
          {
            id: 'notes',
            title: 'Observaciones',
            type: 'freeform',
            optional: true,
          },
        ]}
        onComplete={() => setAnswer('Revisión guardada')}
      />
      <Text className={t}>{answer}</Text>
    </View>
  );
});

const ExampleScrollArea = React.memo(function ExampleScrollArea() {
  return (
    <View className="gap-4">
    <K.ScrollArea style={{ height: 160 }} nestedScrollEnabled>
      {products.concat(products, products).map((name, i) => (
        <Text key={i} className="py-3 text-foreground">
          {i + 1}. {name}
        </Text>
      ))}
    </K.ScrollArea>
    <K.ScrollArea virtualized style={{ height: 160 }} nestedScrollEnabled
      data={Array.from({ length: 1000 }, (_, i) => `Producto ${i + 1}`)}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Text className={t} style={{ height: 40 }}>{item}</Text>}
    />
    </View>
  );
});

const ExampleSheet = React.memo(function ExampleSheet() {
  return (
    <K.Sheet>
      <K.SheetTrigger className={trigger}>
        <Text className={t}>Abrir ficha lateral</Text>
      </K.SheetTrigger>
      <K.SheetContent side="right">
        <K.SheetTitle>Ficha de proveedor</K.SheetTitle>
        <K.SheetDescription>Distribuciones Oliva</K.SheetDescription>
        <K.SheetClose className={trigger}>
          <Text className={t}>Cerrar ficha</Text>
        </K.SheetClose>
      </K.SheetContent>
    </K.Sheet>
  );
});

const ExampleSpinner = React.memo(function ExampleSpinner() {
  return (
    <View className="flex-row gap-3">
      <K.Spinner />
      <Text className={t}>Consultando existencias…</Text>
    </View>
  );
});

const ExampleToast = React.memo(function ExampleToast() {
  const [status, setStatus] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  return (
    <View className="gap-3">
      <K.Button variant="outline" disabled={busy} onPress={async () => {
        setBusy(true);
        try {
          const id = await K.toast.success('Pedido guardado', {
            description: 'El ejemplo no modifica el inventario.',
          });
          setStatus(id ? 'Notificación enviada al sistema.' : 'Las notificaciones están desactivadas.');
        } catch {
          setStatus('No se pudo mostrar la notificación.');
        } finally { setBusy(false); }
      }}>
        <Text className={t}>Mostrar notificación</Text>
      </K.Button>
      {!!status && <Text accessibilityLiveRegion="polite" className={t}>{status}</Text>}
      <K.Button variant="ghost" onPress={() => void K.toast.openSettings().catch(() => setStatus('No se pudieron abrir los ajustes.'))}>
        <Text className={t}>Ajustes de notificaciones</Text>
      </K.Button>
    </View>
  );
});

const ExampleToggle = React.memo(function ExampleToggle() {
  return (
    <K.Toggle variant="outline">
      {pressed => (
        <Text className={t}>
          {pressed ? '★ Guardado en favoritos' : '☆ Añadir a favoritos'}
        </Text>
      )}
    </K.Toggle>
  );
});

const ExampleToggleGroup = React.memo(function ExampleToggleGroup() {
  return (
    <K.ToggleGroup type="multiple" defaultValue={['morning']}>
      <K.ToggleGroupItem value="morning">Mañana</K.ToggleGroupItem>
      <K.ToggleGroupItem value="evening">Tarde</K.ToggleGroupItem>
    </K.ToggleGroup>
  );
});

const ExampleTypography = React.memo(function ExampleTypography() {
  return (
    <View className="gap-2">
      <K.TypographyH2>Farmacia Oliva</K.TypographyH2>
      <K.TypographyLead>Gestión de tienda</K.TypographyLead>
      <K.TypographyP>Consulta ventas, pedidos y existencias.</K.TypographyP>
      <K.TypographyMuted>Actualizado hoy</K.TypographyMuted>
    </View>
  );
});

export const extendedComponentExamples = [
  {
    name: 'AspectRatio',
    description: 'Contenedor proporcional de producto.',
    content: <ExampleAspectRatio />,
  },
  {
    name: 'Attachment',
    description: 'Documento, descripción, progreso y acción.',
    content: <ExampleAttachment />,
  },
  {
    name: 'Breadcrumb',
    description: 'Navegación con acciones táctiles.',
    content: <ExampleBreadcrumb />,
  },
  {
    name: 'Bubble',
    description: 'Burbuja de información del pedido.',
    content: <ExampleBubble />,
  },
  {
    name: 'ButtonGroup',
    description: 'Acciones relacionadas en un grupo.',
    content: <ExampleButtonGroup />,
  },
  {
    name: 'Calendar',
    description: 'Calendario local sin desplazamientos de zona horaria.',
    content: <ExampleCalendar />,
  },
  {
    name: 'DatePicker',
    description: 'Fecha, rango y hora en un panel inferior.',
    content: <ExampleDatePicker />,
  },
  {
    name: 'Carousel',
    description: 'Desliza productos o utiliza los controles.',
    content: <ExampleCarousel />,
  },
  {
    name: 'Chart',
    description: 'Ventas por turno; pulsa una barra para ver su valor.',
    content: <ExampleChart />,
  },
  {
    name: 'Code',
    description: 'Código seleccionable y compartible con Android.',
    content: <ExampleCode />,
  },
  {
    name: 'Direction',
    description: 'Distribución del contenido de derecha a izquierda.',
    content: <ExampleDirection />,
  },
  {
    name: 'Drawer',
    description: 'Panel inferior Gorhom con composición de Drawer.',
    content: <ExampleDrawer />,
  },
  {
    name: 'Empty',
    description: 'Estado vacío con una acción.',
    content: <ExampleEmpty />,
  },
  {
    name: 'Field',
    description: 'Etiqueta, descripción y error de validación.',
    content: <ExampleField />,
  },
  {
    name: 'InputGroup',
    description: 'Campo con un prefijo alineado.',
    content: <ExampleInputGroup />,
  },
  {
    name: 'InputOTP',
    description: 'Entrada de código con pegado y autocompletado.',
    content: <ExampleInputOTP />,
  },
  {
    name: 'Item',
    description: 'Fila de producto con título y descripción.',
    content: <ExampleItem />,
  },
  { name: 'Icon', description: 'Iconos Lucide accesibles.', content: <K.Icon icon={Check} label="Completado" /> },
  {
    name: 'Kbd',
    description: 'Etiqueta para un atajo de teclado físico.',
    content: <ExampleKbd />,
  },
  {
    name: 'Marker',
    description: 'Indicador compacto del estado del pedido.',
    content: <ExampleMarker />,
  },
  {
    name: 'Menu',
    description: 'Menús de acciones adaptados a pulsación.',
    content: <ExampleMenu />,
  },
  {
    name: 'Message',
    description: 'Mensaje del equipo con cabecera y contenido.',
    content: <ExampleMessage />,
  },
  {
    name: 'MessageScroller',
    description: 'Historial desplazable de mensajes.',
    content: <ExampleMessageScroller />,
  },
  {
    name: 'Pagination',
    description: 'Paginación controlada con límites.',
    content: <ExamplePagination />,
  },
  {
    name: 'Questionnaire',
    description: 'Revisión guiada con respuestas obligatorias.',
    content: <ExampleQuestionnaire />,
  },
  {
    name: 'ScrollArea',
    description: 'Lista desplazable con indicadores nativos.',
    content: <ExampleScrollArea />,
  },
  {
    name: 'Sheet',
    description: 'Panel lateral para detalles secundarios.',
    content: <ExampleSheet />,
  },
  {
    name: 'Spinner',
    description: 'Indicador nativo de carga.',
    content: <ExampleSpinner />,
  },
  {
    name: 'Toast',
    description: 'Notificación local en el sistema del dispositivo.',
    content: <ExampleToast />,
  },
  {
    name: 'Toggle',
    description: 'Texto que cambia según el estado seleccionado.',
    content: <ExampleToggle />,
  },
  {
    name: 'ToggleGroup',
    description: 'Selección múltiple de turnos.',
    content: <ExampleToggleGroup />,
  },
  {
    name: 'Typography',
    description: 'Jerarquía tipográfica con escalado del sistema.',
    content: <ExampleTypography />,
  },
];
