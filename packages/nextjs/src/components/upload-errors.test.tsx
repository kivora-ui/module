import { createRef } from 'react';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import Uppy, { type Meta, type Body } from '@uppy/core';
import { getUploadMessages } from '@kivora/upload';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { UploadDashboardControls } from './upload-dashboard-controls';
import { protectUploadErrorMessages, uploadFailureMessage, uploadLogger } from './upload-errors';

const rawError = 'tus: unexpected response POST /private/upload <!DOCTYPE html>PRIVATE_SERVER_TRACE';
const engines: Uppy<Meta, Body>[] = [];
function engine() {
  const uppy = new Uppy<Meta, Body>({ autoProceed: false, logger: uploadLogger });
  engines.push(uppy);
  protectUploadErrorMessages(uppy);
  return uppy;
}
afterEach(() => {
  cleanup();
  engines.splice(0).forEach(uppy => uppy.destroy());
  vi.restoreAllMocks();
});

describe('upload error presentation', () => {
  it('keeps the translated informer message without server details', () => {
    const uppy = engine();
    uppy.info({ message: 'Could not upload report.pdf', details: rawError }, 'error', 0);
    expect(uppy.getState().info[0]).toMatchObject({ message: 'Could not upload report.pdf', type: 'error' });
    expect(JSON.stringify(uppy.getState().info)).not.toContain('PRIVATE_SERVER_TRACE');
  });

  it('handles an actual Uppy upload-error event without technical informer details or console errors', () => {
    const uppy = engine();
    const id = uppy.addFile({ name: 'report.txt', type: 'text/plain', data: new Blob(['test']) });
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(console, 'debug').mockImplementation(() => {});
    uppy.emit('upload-error', uppy.getFile(id), new Error(rawError));
    expect(uppy.getFile(id).error).toBeTruthy();
    expect(JSON.stringify(uppy.getState().info)).not.toContain('PRIVATE_SERVER_TRACE');
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('retains restriction messages and ordinary notices', () => {
    const uppy = engine();
    uppy.info('Maximum file size is 10 MB', 'error', 0);
    uppy.info({ message: 'Notice', details: 'Useful guidance' }, 'info', 0);
    expect(uppy.getState().info).toEqual(expect.arrayContaining([
      expect.objectContaining({ message: 'Maximum file size is 10 MB' }),
      expect.objectContaining({ message: 'Notice', details: 'Useful guidance' }),
    ]));
  });

  it.each(['es', 'es-MX', 'en', undefined])('renders a safe alert and retains retry/removal for %s', locale => {
    const uppy = engine();
    const id = uppy.addFile({ name: 'report.txt', type: 'text/plain', data: new Blob(['test']) });
    uppy.setFileState(id, { error: rawError });
    const retry = vi.spyOn(uppy, 'retryUpload').mockResolvedValue(undefined);
    render(<UploadDashboardControls target={createRef<HTMLDivElement>()} label="Sources" uppy={uppy} messages={getUploadMessages({ locale })} locale={locale} />);
    expect(screen.getByRole('alert')).toHaveTextContent(uploadFailureMessage(locale));
    expect(document.body.textContent).not.toContain('PRIVATE_SERVER_TRACE');
    const t = getUploadMessages({ locale });
    fireEvent.click(screen.getByRole('button', { name: `${t.retry}: report.txt` }));
    expect(retry).toHaveBeenCalledWith(id);
    act(() => uppy.setFileState(id, { error: null }));
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: `${t.remove}: report.txt` }));
    expect(uppy.getFiles()).toHaveLength(0);
  });

  it('shows a safe alert when starting the upload rejects', async () => {
    const uppy = engine();
    uppy.addFile({ name: 'report.txt', type: 'text/plain', data: new Blob(['test']) });
    vi.spyOn(uppy, 'upload').mockRejectedValue(new Error(rawError));
    render(<UploadDashboardControls target={createRef<HTMLDivElement>()} label="Sources" uppy={uppy} messages={getUploadMessages({ locale: 'es' })} locale="es" />);
    fireEvent.click(screen.getByRole('button', { name: 'Subir' }));
    expect(await screen.findByRole('alert')).toHaveTextContent(uploadFailureMessage('es'));
    expect(document.body.textContent).not.toContain('PRIVATE_SERVER_TRACE');
  });
});
