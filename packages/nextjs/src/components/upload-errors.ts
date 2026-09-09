import type Uppy from '@uppy/core';
import type { Body, Meta } from '@uppy/core';

/** Transport errors can contain entire response bodies, URLs and server traces. */
export function uploadFailureMessage(locale?: string): string {
  return locale?.toLowerCase().startsWith('es')
    ? 'No se pudo subir el archivo. Puedes reintentar o eliminarlo.'
    : 'The file could not be uploaded. You can retry or remove it.';
}

/** Uppy already reports failures through file state; avoid a second dev overlay. */
export const uploadLogger = {
  debug() {},
  warn() {},
  error() { console.debug('Kivora: upload operation failed; see file status.'); },
};

export function protectUploadErrorMessages(uppy: Uppy<Meta, Body>): void {
  const inform = uppy.info.bind(uppy);
  uppy.info = (message, type, duration) => inform(
    type === 'error' && typeof message === 'object' && message !== null
      ? { message: message.message }
      : message,
    type,
    duration,
  );
}
