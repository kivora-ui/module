const en = {

  uploadedFiles: 'Uploaded files', startUpload: 'Upload', remove: 'Remove', clearAll: 'Clear all', reviewHint: 'Review your files, then choose Upload to start.', grid: 'Grid view', list: 'List view', retry: 'Retry', edit: 'Edit image', addMore: 'Add more', choose: 'Choose files', title: 'Add files', sources: 'File sources', files: 'My device', camera: 'Camera',

  hint: 'Choose a source. Uploads start automatically.', drop: 'Or drop files here', back: 'Back to sources',

  close: 'Close', open: 'Open picker', loading: 'Opening source...', cancel: 'Cancel',

  photo: 'Take photo', cameraPreview: 'Camera preview', cameraError: 'Could not access the camera. Check camera permission and try again.',

  captureError: 'Could not capture the photo. Try again.', selectionError: 'Could not add these files. Check the file limits and try again.',

  ready: 'Ready', uploading: 'Uploading', paused: 'Paused', success: 'Completed', error: 'Failed', canceled: 'Canceled',

  upload: 'File upload', dismiss: 'Dismiss upload notification', preview: 'File preview',

};

export type UploadMessages = typeof en;

export interface UploadLocaleOptions { locale?: string; messages?: Partial<UploadMessages>; }

const es: UploadMessages = {

  uploadedFiles: 'Archivos subidos', startUpload: 'Subir', remove: 'Eliminar', clearAll: 'Limpiar todo', reviewHint: 'Revisa los archivos y pulsa Subir para comenzar.', grid: 'Vista de cuadrícula', list: 'Vista de lista', retry: 'Reintentar', edit: 'Editar imagen', addMore: 'Agregar más', choose: 'Seleccionar archivos', title: 'Añadir archivos', sources: 'Fuentes de archivos', files: 'Mi dispositivo', camera: 'Cámara',

  hint: 'Elige una fuente. Los archivos se suben automáticamente.', drop: 'O arrastra archivos aquí', back: 'Volver a las fuentes',

  close: 'Cerrar', open: 'Abrir selector', loading: 'Abriendo fuente...', cancel: 'Cancelar',

  photo: 'Hacer foto', cameraPreview: 'Vista previa de la cámara', cameraError: 'No se pudo acceder a la cámara. Revisa el permiso e inténtalo de nuevo.',

  captureError: 'No se pudo capturar la foto. Inténtalo de nuevo.', selectionError: 'No se pudieron añadir los archivos. Revisa los límites e inténtalo de nuevo.',

  ready: 'Preparado', uploading: 'Subiendo', paused: 'En pausa', success: 'Completado', error: 'Error', canceled: 'Cancelado',

  upload: 'Subida de archivo', dismiss: 'Cerrar notificación de subida', preview: 'Vista previa del archivo',

};

export function getUploadMessages({ locale = 'en', messages }: UploadLocaleOptions = {}): UploadMessages {

  return { ...(locale.toLowerCase().split(/[-_]/)[0] === 'es' ? es : en), ...messages };

}

