import { pick, isErrorWithCode, errorCodes } from '@react-native-documents/picker';
import { launchCamera, launchImageLibrary, type ImagePickerResponse } from 'react-native-image-picker';
import { tableExamples } from './table-examples';
import { FlashList } from '@shopify/flash-list';
import { ExampleStateContext, useExampleState } from './example-state';
import React, { useRef, useState } from 'react';
import { Text, View, type ScrollViewProps } from 'react-native';
import { KeyboardScrollView, type KeyboardScrollViewRef } from '@kivora/native';
import * as K from '@kivora/native';
import { extendedComponentExamples } from './extended-component-examples';

const text = 'text-base text-foreground';

// FlashList needs a stable component that forwards its native scroll ref.
const KeyboardAwareListScrollView = React.forwardRef<KeyboardScrollViewRef, ScrollViewProps>(
  (props, ref) => <KeyboardScrollView {...props} ref={ref} bottomOffset={24} />,
);

type SelectionValues = { checkbox: boolean; switch: boolean };

// Keep frequent interactions local. Rebuilding the entire gallery on each tap
// delayed feedback even when only one example was visible. The ref preserves
// the selected values when the search temporarily unmounts an example.
function SelectionExample({
  kind,
  values,
}: {
  kind: keyof SelectionValues;
  values: React.RefObject<SelectionValues>;
}) {
  const [checked, setChecked] = useExampleState(
    `${kind}:checked`,
    () => values.current[kind],
  );
  const onCheckedChange = (next: boolean) => {
    values.current[kind] = next;
    setChecked(next);
  };
  return kind === 'checkbox' ? (
    <K.Checkbox
      label={checked ? 'Producto revisado' : 'Pendiente de revisión'}
      accessibilityLabel="Producto revisado"
      checked={checked}
      onCheckedChange={onCheckedChange}
      className="h-6 w-6"
      hitSlop={12}
    />
  ) : (
    <K.Switch
      label={checked ? 'Avisos activados' : 'Avisos desactivados'}
      accessibilityLabel="Avisos de ejemplo"
      checked={checked}
      onCheckedChange={onCheckedChange}
      hitSlop={12}
    />
  );
}

// Opening and editing the sheet must not rebuild the component gallery.
function BottomSheetExample() {
  const [sheetOpen, setSheetOpen] = useExampleState(
    'BottomSheetExample:sheetOpen',
    false,
  );
  const [sheetNote, setSheetNote] = useExampleState(
    'BottomSheetExample:sheetNote',
    '',
  );
  return (
    <>
      <K.Button className="h-12" onPress={() => setSheetOpen(true)}>
        <Text className="text-base font-semibold text-primary-foreground">
          Abrir panel inferior
        </Text>
      </K.Button>
      <K.BottomSheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <K.CardTitle>Nota de reposición</K.CardTitle>
        <Text className={text}>
          Desliza hacia abajo, pulsa fuera o usa Atrás para cerrar.
        </Text>
        <K.BottomSheetInput
          accessibilityLabel="Nota del panel"
          placeholder="Escribe una nota…"
          value={sheetNote}
          onChangeText={setSheetNote}
        />
        <K.Button className="h-12" onPress={() => setSheetOpen(false)}>
          <Text className="text-base font-semibold text-primary-foreground">
            Cerrar panel inferior
          </Text>
        </K.Button>
        {Array.from({ length: 18 }, (_, index) => (
          <Text key={index} className="py-2 text-base text-foreground">
            Producto de ejemplo {index + 1}
          </Text>
        ))}
      </K.BottomSheet>
    </>
  );
}

const ExampleBottomSheet = React.memo(function ExampleBottomSheet() {
  return <BottomSheetExample />;
});

const ExampleButton = React.memo(function ExampleButton() {
  const [presses, setPresses] = useExampleState('ExampleButton:presses', 0);
  return (
    <View className="gap-3">
      <K.Button className="h-12" onPress={() => setPresses(p => p + 1)}>
        <Text className="text-base font-semibold text-primary-foreground">
          Probar botón
        </Text>
      </K.Button>
      <K.Button
        variant="outline"
        className="h-12"
        onPress={() => setPresses(0)}
      >
        <Text className={text}>Reiniciar contador</Text>
      </K.Button>
      <K.Button disabled className="h-12">
        <Text className="text-base text-primary-foreground">Desactivado</Text>
      </K.Button>
      <Text accessibilityLiveRegion="polite" className={text}>
        Pulsaciones: {presses}
      </Text>
    </View>
  );
});

const ExampleInput = React.memo(function ExampleInput() {
  const [name, setName] = useExampleState('ExampleInput:name', '');
  return (
    <K.Input
      accessibilityLabel="Nombre de ejemplo"
      placeholder="Nombre del producto"
      value={name}
      onChangeText={setName}
      className="h-12 text-base"
    />
  );
});

const ExampleTextarea = React.memo(function ExampleTextarea() {
  const [notes, setNotes] = useExampleState('ExampleTextarea:notes', '');
  return (
    <K.Textarea
      accessibilityLabel="Notas de ejemplo"
      placeholder="Escribe una nota…"
      value={notes}
      onChangeText={setNotes}
      className="min-h-28 text-base"
    />
  );
});

const ExampleCheckbox = React.memo(function ExampleCheckbox() {
  const selectionValues = useRef<SelectionValues>({
    checkbox: false,
    switch: true,
  });
  return <SelectionExample kind="checkbox" values={selectionValues} />;
});

const ExampleSwitch = React.memo(function ExampleSwitch() {
  const selectionValues = useRef<SelectionValues>({
    checkbox: false,
    switch: true,
  });
  return <SelectionExample kind="switch" values={selectionValues} />;
});

const ExampleSelect = React.memo(function ExampleSelect() {
  const [category, setCategory] = useExampleState(
    'ExampleSelect:category',
    'Higiene',
  );
  return (
    <K.Select value={category} onValueChange={setCategory}>
      <K.SelectTrigger
        accessibilityLabel="Categoría de ejemplo"
        className="h-12"
      >
        <K.SelectValue className="text-base" />
      </K.SelectTrigger>
      <K.SelectContent>
        {['Higiene', 'Botiquín', 'Bienestar'].map(option => (
          <K.SelectItem
            key={option}
            value={option}
            accessibilityLabel={option}
            className="min-h-12"
          >
            <Text className={text}>{option}</Text>
          </K.SelectItem>
        ))}
      </K.SelectContent>
    </K.Select>
  );
});

const ExampleBadge = React.memo(function ExampleBadge() {
  return (
    <View className="flex-row flex-wrap gap-3">
      <K.Badge>Disponible</K.Badge>
      <K.Badge variant="secondary">En revisión</K.Badge>
      <K.Badge variant="outline">Pendiente</K.Badge>
      <K.Badge variant="destructive">Agotado</K.Badge>
    </View>
  );
});

const ExampleSlideryProgress = React.memo(function ExampleSlideryProgress() {
  const [progress, setProgress] = useExampleState(
    'ExampleSlideryProgress:progress',
    [40],
  );
  return (
    <View className="gap-4">
      <K.Slider
        accessibilityLabel="Progreso de ejemplo"
        value={progress}
        onValueChange={setProgress}
        step={10}
        formatValue={value => `${value} %`}
        showValue
      />
      <K.Progress
        accessibilityLabel="Porcentaje completado"
        value={progress[0]}
      />
      <K.Button
        variant="outline"
        className="h-12"
        onPress={() => setProgress([0])}
      >
        <Text className={text}>Reiniciar progreso</Text>
      </K.Button>
    </View>
  );
});

const ExampleTabs = React.memo(function ExampleTabs() {
  return (
    <K.Tabs defaultValue="stock">
      <K.TabsList>
        <K.TabsTrigger value="stock" className="min-h-12 justify-center">
          Stock
        </K.TabsTrigger>
        <K.TabsTrigger value="orders" className="min-h-12 justify-center">
          Pedidos
        </K.TabsTrigger>
      </K.TabsList>
      <K.TabsContent value="stock">
        <Text className={text}>24 unidades disponibles.</Text>
      </K.TabsContent>
      <K.TabsContent value="orders">
        <Text className={text}>2 pedidos pendientes.</Text>
      </K.TabsContent>
    </K.Tabs>
  );
});

const ExampleAlert = React.memo(function ExampleAlert() {
  return (
    <K.Alert>
      <K.AlertTitle>Inventario actualizado</K.AlertTitle>
      <K.AlertDescription>
        La entrada de mercancía se ha registrado.
      </K.AlertDescription>
    </K.Alert>
  );
});

const ExampleCardySeparator = React.memo(function ExampleCardySeparator() {
  return (
    <K.Card className="gap-4 p-4">
      <K.CardTitle>Pedido de reposición</K.CardTitle>
      <K.CardDescription>Proveedor de ejemplo</K.CardDescription>
      <K.Separator />
      <Text className={text}>Entrega prevista para mañana.</Text>
    </K.Card>
  );
});

const ExampleAccordion = React.memo(function ExampleAccordion() {
  return (
    <K.Accordion type="single" collapsible>
      <K.AccordionItem value="delivery">
        <K.AccordionTrigger>Entrega del pedido</K.AccordionTrigger>
        <K.AccordionContent>
          <Text className={text}>Recogida en farmacia de 09:00 a 21:00.</Text>
        </K.AccordionContent>
      </K.AccordionItem>
    </K.Accordion>
  );
});

const ExampleAvatar = React.memo(function ExampleAvatar() {
  return (
    <View className="flex-row items-center gap-3">
      <K.Avatar>
        <K.AvatarFallback
          style={{ textAlign: 'center', textAlignVertical: 'center' }}
        >
          AO
        </K.AvatarFallback>
      </K.Avatar>
      <Text className={text}>Ana · Mostrador</Text>
    </View>
  );
});

const ExampleCollapsible = React.memo(function ExampleCollapsible() {
  return (
    <K.Collapsible>
      <K.CollapsibleTrigger>
        <Text className={text}>Ver instrucciones</Text>
      </K.CollapsibleTrigger>
      <K.CollapsibleContent>
        <Text className={text}>
          Comprueba las unidades antes de confirmar la recepción.
        </Text>
      </K.CollapsibleContent>
    </K.Collapsible>
  );
});

const ExampleDialog = React.memo(function ExampleDialog() {
  return (
    <K.Dialog>
      <K.DialogTrigger className="min-h-12 justify-center">
        <Text className={text}>Ver aviso de recepción</Text>
      </K.DialogTrigger>
      <K.DialogContent>
        <K.DialogTitle>Recepción de mercancía</K.DialogTitle>
        <K.DialogDescription>
          Este aviso es un ejemplo; no modifica el inventario.
        </K.DialogDescription>
        <K.DialogClose className="min-h-12 justify-center">
          <Text className={text}>Cerrar aviso</Text>
        </K.DialogClose>
      </K.DialogContent>
    </K.Dialog>
  );
});


const ExampleLabel = React.memo(function ExampleLabel() {
  return (
    <View className="gap-2">
      <K.Label>Referencia de recepción</K.Label>
      <K.Input
        accessibilityLabel="Referencia de recepción"
        placeholder="ALB-001"
      />
    </View>
  );
});

const ExamplePopover = React.memo(function ExamplePopover() {
  const [query, setQuery] = useExampleState('ExamplePopover:query', '');
  return (
    <K.Popover>
      <K.PopoverTrigger asChild>
        <K.Button variant="outline"><Text className={text}>Ver horario</Text></K.Button>
      </K.PopoverTrigger>
      <Text className={text}>Consulta nuestro horario de atención.</Text>
      <K.PopoverContent testID="popover-content">
        <Text className={text}>Lunes a sábado · 09:00–21:00</Text>
        <K.Input accessibilityLabel="Consulta sobre el horario" placeholder="Tu consulta" value={query} onChangeText={setQuery} />
        <K.PopoverClose className="min-h-12 justify-center">
          <Text className={text}>Cerrar horario</Text>
        </K.PopoverClose>
      </K.PopoverContent>
    </K.Popover>
  );
});

const ExampleRadioGroup = React.memo(function ExampleRadioGroup() {
  const [delivery, setDelivery] = useExampleState(
    'ExampleRadioGroup:delivery',
    'store',
  );
  return (
    <K.RadioGroup value={delivery} onValueChange={setDelivery}>
      {[
        ['store', 'Recogida en farmacia'],
        ['delivery', 'Entrega a domicilio'],
      ].map(([value, label]) => (
        <K.RadioGroupItem key={value} value={value!} label={label} />
      ))}
      <Text className={text}>
        Seleccionado: {delivery === 'store' ? 'Recogida' : 'Domicilio'}
      </Text>
    </K.RadioGroup>
  );
});

const ExampleTable = React.memo(function ExampleTable() {
  return (
    <K.Table>
      <K.TableHeader>
        <K.TableRow>
          <K.TableHead>Producto</K.TableHead>
          <K.TableHead>Stock</K.TableHead>
        </K.TableRow>
      </K.TableHeader>
      <K.TableBody>
        <K.TableRow>
          <K.TableCell>Gasas</K.TableCell>
          <K.TableCell>24</K.TableCell>
        </K.TableRow>
        <K.TableRow>
          <K.TableCell>Termómetro</K.TableCell>
          <K.TableCell>8</K.TableCell>
        </K.TableRow>
      </K.TableBody>
    </K.Table>
  );
});

const ExampleTooltip = React.memo(function ExampleTooltip() {
  return (
    <K.TooltipProvider>
      <K.Tooltip>
        <K.PopoverAnchor asChild>
          <Text className={text}>
            Configura el{' '}
            <K.TooltipTrigger asChild accessibilityHint="Pulsa para conocer qué significa stock mínimo">
              <Text className="rounded-sm bg-primary/10 px-0.5 font-semibold text-primary underline">stock mínimo ⓘ</Text>
            </K.TooltipTrigger>
            {' '}para recibir avisos de reposición.
          </Text>
        </K.PopoverAnchor>
        <K.TooltipContent>
          Umbral utilizado para los avisos de reposición.
        </K.TooltipContent>
      </K.Tooltip>
    </K.TooltipProvider>
  );
});

const ExampleSkeleton = React.memo(function ExampleSkeleton() {
  return (
    <View className="gap-3">
      <K.Skeleton className="h-5 w-40" />
      <K.Skeleton className="h-4 w-full" />
      <K.Skeleton className="h-4 w-3/4" />
    </View>
  );
});

let backgroundUploadSession: Promise<K.UploadController> | undefined;
async function pickUploadMedia(camera: boolean) {
  await K.toast.requestPermission();
  const result: ImagePickerResponse = camera
    ? await launchCamera({ mediaType: 'photo', saveToPhotos: false })
    : await launchImageLibrary({ mediaType: 'mixed', selectionLimit: 10 });
  if (result.didCancel) return [];
  if (result.errorCode) throw new Error(result.errorMessage || result.errorCode);
  return (result.assets ?? []).map(asset => {
    if (!asset.uri || asset.fileSize === undefined) throw new Error('Cannot read selected media.');
    const name = asset.fileName || `photo-${Date.now()}.jpg`;
    const type = asset.type || 'image/jpeg';
    return { name, type, size: asset.fileSize, data: { uri: asset.uri, name, type } };
  });
}
function FileUploadExample() {
  const [controller, setController] = React.useState<K.UploadController>();
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    let mounted = true;
    backgroundUploadSession ??= K.createBackgroundUploadController({ endpoint: 'http://127.0.0.1:1080/files', maxFiles: 20 });
    void backgroundUploadSession.then(value => { if (mounted) setController(value); }).catch(error => { if (mounted) setError(String(error)); });
    return () => { mounted = false; };
  }, []);
  if (!controller) return <Text className="text-foreground">{error || 'Preparing uploads...'}</Text>;
  return <K.FileUpload controller={controller} variant="advanced" locale="es" sources={[
    { id: 'camera', label: 'Cámara', pickFiles: () => pickUploadMedia(true) },
    { id: 'photos', label: 'Fotos y vídeos', pickFiles: () => pickUploadMedia(false) },
  ]} pickFiles={async () => {
    try {
      await K.toast.requestPermission();
      const selected = await pick({ allowMultiSelection: true });
      return await Promise.all(selected.map(async file => {
        if (file.size === null) throw new Error('Cannot determine file size.');
        if (file.size > 50 * 1024 * 1024) throw new Error('Maximum file size is 50 MB.');
        const name = file.name ?? 'file';
        return { name, size: file.size, type: file.type ?? 'application/octet-stream', data: { uri: file.uri, name, type: file.type ?? 'application/octet-stream' } };
      }));
    } catch (error) {
      if (isErrorWithCode(error) && error.code === errorCodes.OPERATION_CANCELED) return [];
      throw error;
    }
  }} />;
}

function QRCodeExample() {
  const [value, setValue] = useExampleState('QRCode:value', 'https://example.com');
  return <View className="gap-4">
    <K.Input accessibilityLabel="Contenido del QR" value={value} onChangeText={setValue} />
    <K.QRCode value={value} size={200} accessibilityLabel="Código QR generado" />
  </View>;
}

function BarcodeExample() {
  const [value, setValue] = useExampleState('Barcode:value', 'KIVORA-12345');
  const [format, setFormat] = useExampleState<K.BarcodeFormat>('Barcode:format', 'code128');
  const samples: Record<K.BarcodeFormat, string> = {
    code128: 'KIVORA-12345', code39: 'KIVORA-12345', ean13: '5901234123457',
    ean8: '96385074', upca: '012345678905', interleaved2of5: '12345678',
    qrcode: 'https://example.com', datamatrix: 'KIVORA-12345', pdf417: 'KIVORA-12345', azteccode: 'KIVORA-12345',
  };
  return <View className="gap-4">
    <K.Select value={format} onValueChange={next => {
      setFormat(next as K.BarcodeFormat); setValue(samples[next as K.BarcodeFormat]);
    }}>
      <K.SelectTrigger accessibilityLabel="Formato del código"><K.SelectValue /></K.SelectTrigger>
      <K.SelectContent>{K.barcodeFormats.map(item => <K.SelectItem key={item} value={item}>{item}</K.SelectItem>)}</K.SelectContent>
    </K.Select>
    <K.Input accessibilityLabel="Contenido del código de barras" value={value} onChangeText={setValue} />
    <K.Barcode value={value} format={format} width={240} displayValue />
  </View>;
}

const examples = [
  { name: 'FileUpload', description: 'Selecciona archivos para subirlos automáticamente. Consulta el progreso y cancela la subida desde las notificaciones.', content: <FileUploadExample /> },
  { name: 'QRCode', description: 'Genera un QR local para un enlace o texto.', content: <QRCodeExample /> },
  { name: 'Barcode', description: 'Code 128, EAN, UPC, Data Matrix, PDF417 y Aztec.', content: <BarcodeExample /> },
  {
    name: 'BottomSheet',
    description: 'Panel Gorhom con gestos, desplazamiento y teclado.',
    content: <ExampleBottomSheet />,
  },
  {
    name: 'Button',
    description: 'Variantes, pulsaciones y estado desactivado.',
    content: <ExampleButton />,
  },
  {
    name: 'Input',
    description: 'Entrada de texto controlada.',
    content: <ExampleInput />,
  },
  {
    name: 'Textarea',
    description: 'Notas con varias líneas.',
    content: <ExampleTextarea />,
  },
  {
    name: 'Checkbox',
    description: 'Selección individual.',
    content: <ExampleCheckbox />,
  },
  {
    name: 'Switch',
    description: 'Activar o desactivar una opción.',
    content: <ExampleSwitch />,
  },
  {
    name: 'Select',
    description: 'Selección de categoría con el control nativo de Kivora.',
    content: <ExampleSelect />,
  },
  {
    name: 'Badge',
    description: 'Etiquetas de estado.',
    content: <ExampleBadge />,
  },
  {
    name: 'Slider y Progress',
    description:
      'Arrastra el círculo o pulsa la barra para ajustar el porcentaje.',
    content: <ExampleSlideryProgress />,
  },
  {
    name: 'Tabs',
    description: 'Cambiar entre paneles.',
    content: <ExampleTabs />,
  },
  {
    name: 'Alert',
    description: 'Mensaje informativo.',
    content: <ExampleAlert />,
  },
  {
    name: 'Card y Separator',
    description: 'Agrupación de contenido y separador.',
    content: <ExampleCardySeparator />,
  },
  {
    name: 'Accordion',
    description: 'Información desplegable del pedido.',
    content: <ExampleAccordion />,
  },
  {
    name: 'Avatar',
    description: 'Identificación del empleado.',
    content: <ExampleAvatar />,
  },
  {
    name: 'Collapsible',
    description: 'Mostrar y ocultar detalles.',
    content: <ExampleCollapsible />,
  },
  {
    name: 'Dialog',
    description: 'Diálogo centrado con cierre y botón Atrás.',
    content: <ExampleDialog />,
  },
  {
    name: 'Label',
    description: 'Etiqueta de un campo.',
    content: <ExampleLabel />,
  },
  {
    name: 'Popover',
    description: 'Información contextual desplegable.',
    content: <ExamplePopover />,
  },
  {
    name: 'RadioGroup',
    description: 'Elegir una única modalidad de entrega.',
    content: <ExampleRadioGroup />,
  },
  {
    name: 'Table',
    description:
      'Tabla básica; la versión nativa no incluye DataTable avanzado.',
    content: <ExampleTable />,
  },
  {
    name: 'Tooltip',
    description: 'Ayuda temporal al pulsar o mantener pulsado el control.',
    content: <ExampleTooltip />,
  },
  {
    name: 'Skeleton',
    description: 'Representación del contenido mientras carga.',
    content: <ExampleSkeleton />,
  },
];

export function ComponentScreen({ onBack }: { onBack: () => void }) {
  const [search, setSearch] = useState('');
  const stateStore = useRef(new Map<string, unknown>()).current;

  const filtered = [
    ...examples,
    ...extendedComponentExamples,
    ...tableExamples,
  ].filter(example =>
    `${example.name} ${example.description}`
      .toLocaleLowerCase('es')
      .includes(search.trim().toLocaleLowerCase('es')),
  );
  return (
    <ExampleStateContext.Provider value={stateStore}>
      <FlashList
        renderScrollComponent={KeyboardAwareListScrollView}
        data={filtered}
        keyExtractor={exampleKey}
        getItemType={exampleKey}
        renderItem={renderExample}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ padding: 20 }}
        ListHeaderComponent={
          <View className="gap-5">
            <K.Button variant="outline" className="h-12" onPress={onBack}>
              <Text className={text}>Volver a Ajustes</Text>
            </K.Button>
            <Text className="text-base leading-6 text-muted-foreground">
              Prueba los ejemplos sin modificar el inventario ni las ventas.
              Puedes cambiar el tema con el botón de la cabecera.
            </Text>
            <K.Input
              accessibilityLabel="Buscar componentes"
              value={search}
              onChangeText={setSearch}
              placeholder="Buscar componentes…"
              className="h-12 text-base"
            />
            <Text className="text-sm text-muted-foreground">
              {filtered.length} ejemplos
            </Text>
            {!filtered.length && (
              <Text className={text}>
                No hay componentes que coincidan con la búsqueda.
              </Text>
            )}
          </View>
        }
      />
    </ExampleStateContext.Provider>
  );
}

type Example = { name: string; description: string; content: React.ReactNode };
const exampleKey = (example: Example) => example.name;
const renderExample = ({ item }: { item: Example }) => (
  <K.Card className="gap-4 p-5 mt-5">
    <K.CardTitle>{item.name}</K.CardTitle>
    <K.CardDescription>{item.description}</K.CardDescription>
    {item.content}
  </K.Card>
);
