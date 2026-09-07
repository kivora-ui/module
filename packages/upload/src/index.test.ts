import { expect, it, vi } from 'vitest';
const jobs = vi.hoisted(() => [] as any[]);
vi.mock('tus-js-client', () => ({ Upload: class {
  url = 'http://localhost/files/test';
  start = vi.fn(); abort = vi.fn(async () => {});
  constructor(public data: unknown, public options: any) { jobs.push(this); }
} }));
import { UploadController } from './index';
const file = { name: 'test.txt', size: 4, type: 'text/plain', data: new Blob(['test']) };
it('isolates adapter configuration and disposes adapter sessions once', async () => {
  const controller = new UploadController({ endpoint: '/files', accept: ['image/*'], headers: { test: 'original' } });
  const options = controller.getOptions();
  options.accept!.push('text/plain'); options.headers.test = 'changed';
  expect(controller.getOptions().accept).toEqual(['image/*']);
  expect(controller.getOptions().headers.test).toBe('original');
  const cleanup = vi.fn(); controller.onDispose(cleanup);
  await controller.dispose(); await controller.dispose();
  expect(cleanup).toHaveBeenCalledOnce();
});
it('starts automatically and reports completion only once', () => {
  const onComplete = vi.fn();
  const c = new UploadController({ endpoint: '/files', onComplete });
  c.add([file]);
  expect(c.getSnapshot()[0]?.status).toBe('uploading');
  expect(jobs.at(-1).start).toHaveBeenCalledOnce();
  jobs.at(-1).options.onSuccess(); jobs.at(-1).options.onSuccess();
  expect(onComplete).toHaveBeenCalledOnce();
});
it('validates a whole batch before adding files', () => {
  const c = new UploadController({ endpoint: '/files', maxFileSize: 5 });
  expect(() => c.add([file, { ...file, size: 6 }])).toThrow();
  expect(c.getSnapshot()).toEqual([]);
});
it('ignores late completion after cancel and retry', async () => {
  const c = new UploadController({ endpoint: '/files' }); c.add([file]); c.start('1');
  const old = jobs.at(-1); await c.cancel('1'); c.start('1');
  old.options.onSuccess(); expect(c.getSnapshot()[0]?.status).toBe('uploading');
  jobs.at(-1).options.onSuccess(); expect(c.getSnapshot()[0]?.status).toBe('success');
});
it('resumes with the server upload URL and removes canceled items', async () => {
  const c = new UploadController({ endpoint: '/files' }); c.add([file]); c.start('1');
  jobs.at(-1).options.onUploadUrlAvailable(); await c.pause('1'); c.start('1');
  expect(jobs.at(-1).options.uploadUrl).toBe('http://localhost/files/test');
  await c.remove('1'); jobs.at(-1).options.onSuccess(); expect(c.getSnapshot()).toEqual([]);
});
it('accepts zero-byte files and rejects disallowed types', () => {
  const c = new UploadController({ endpoint: '/files', accept: ['.txt'] });
  c.add([{ ...file, size: 0 }]); expect(c.getSnapshot()).toHaveLength(1);
  expect(() => c.add([{ ...file, name: 'test.pdf' }])).toThrow();
});
