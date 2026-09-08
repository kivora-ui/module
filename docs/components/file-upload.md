# File Upload

> Archivo generado automáticamente por `node scripts/generate-component-docs.mjs`. Edita el generador, no este markdown.

## Qué es

Flujo de subida de archivos con controlador, estado, fuentes y previsualización.

## Disponibilidad

- **Web:** sí, vía `@kivora/nextjs`
- **Native:** sí, vía `@kivora/native`

## Imports

### @kivora/nextjs

```tsx
import { FileUpload, FileUploadStatus } from "@kivora/nextjs";
```

### @kivora/native

```tsx
import { FileUpload } from "@kivora/native";
```

## Exporta

### Web

- **Componentes y helpers visuales:** `FileUpload`, `FileUploadStatus`
- **Tipos de props:** `FileUploadProps`
- **Tipos relacionados:** `FileUploadSource`, `FileUploadSourceContext`

### Native

- **Componentes y helpers visuales:** `FileUpload`
- **Tipos de props:** `FileUploadProps`
- **Tipos relacionados:** `FileUploadSource`, `FileUploadSourceContext`

## Ejemplos

### Web

```tsx
import { FileUpload, UploadController } from "@kivora/nextjs";

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
}
```

### Native

```tsx
import { FileUpload, UploadController } from "@kivora/native";

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
}
```

## Props

### Web

#### `FileUploadProps`

- **Definido en:** `packages/nextjs/src/components/file-upload.tsx`
- **Composición base:** `UploadLocaleOptions`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `accept` | `string | undefined` | sí | — |
| `camera` | `boolean | undefined` | sí | — |
| `controller` | `UploadController` | no | — |
| `dashboard` | `UploadDashboardOptions | undefined` | sí | — |
| `showStatus` | `boolean | undefined` | sí | — |
| `sources` | `FileUploadSource[] | undefined` | sí | — |
| `variant` | `"simple" | "advanced" | undefined` | sí | — |

<details>
<summary>Props heredadas o compuestas de `FileUploadProps` (2)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `locale` | `string | undefined` | sí | — | `packages/upload/src/locale.ts` |
| `messages` | `Partial<{ uploadedFiles: string; startUpload: string; remove: string; clearAll: string; reviewHint: string; grid: string; list: string; retry: string; edit: string; addMore: string; choose: string; title: string; sources: string; files: string; camera: string; hint: string; drop: string; back: string; close: string; open: string; loading: string; cancel: string; photo: string; cameraPreview: string; cameraError: string; captureError: string; selectionError: string; ready: string; uploading: string; paused: string; success: string; error: string; canceled: string; upload: string; dismiss: string; preview: string; }> | undefined` | sí | — | `packages/upload/src/locale.ts` |

</details>

### Native

#### `FileUploadProps`

- **Definido en:** `packages/native/src/components/file-upload.tsx`
- **Composición base:** `UploadLocaleOptions`

**Props propias**

| Prop | Tipo | Opcional | Descripción |
| --- | --- | --- | --- |
| `controller` | `UploadController` | no | — |
| `pickFiles` | `() => Promise<UploadFile[]>` | no | — |
| `showStatus` | `boolean | undefined` | sí | Opt in to an inline file list instead of relying only on system notifications. |
| `sources` | `FileUploadSource[] | undefined` | sí | — |
| `variant` | `"simple" | "advanced" | undefined` | sí | — |

<details>
<summary>Props heredadas o compuestas de `FileUploadProps` (2)</summary>

| Prop | Tipo | Opcional | Descripción | Origen |
| --- | --- | --- | --- | --- |
| `locale` | `string | undefined` | sí | — | `packages/upload/src/locale.ts` |
| `messages` | `Partial<{ uploadedFiles: string; startUpload: string; remove: string; clearAll: string; reviewHint: string; grid: string; list: string; retry: string; edit: string; addMore: string; choose: string; title: string; sources: string; files: string; camera: string; hint: string; drop: string; back: string; close: string; open: string; loading: string; cancel: string; photo: string; cameraPreview: string; cameraError: string; captureError: string; selectionError: string; ready: string; uploading: string; paused: string; success: string; error: string; canceled: string; upload: string; dismiss: string; preview: string; }> | undefined` | sí | — | `packages/upload/src/locale.ts` |

</details>

