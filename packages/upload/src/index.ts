import { Upload } from 'tus-js-client';
export { fileKind, formatFileSize } from './file-kind';
export { getUploadMessages, type UploadMessages, type UploadLocaleOptions } from './locale';

export type UploadStatus = 'ready' | 'uploading' | 'paused' | 'success' | 'error' | 'canceled';
export interface UploadFile { name: string; size: number; type: string; taskId?: string; data: Blob | { uri: string; name?: string; type?: string }; }
export interface UploadItem { id: string; name: string; size: number; type: string; status: UploadStatus; progress: number; error?: string; url?: string; }
export interface UploadTask { canPause?: boolean; start(): void; abort(): Promise<void>; url: string | null; }
export interface UploadTaskConfig { endpoint: string; headers?: Record<string, string>; uploadUrl?: string; onCancel(): void; onProgress(sent: number, total: number): void; onSuccess(): void; onError(error: Error): void; onUploadUrlAvailable(): void; }
export interface UploadOptions { autoStart?: boolean; createTask?: (file: UploadFile, options: UploadTaskConfig) => UploadTask; onComplete?: (item: UploadItem) => void; endpoint: string; maxFiles?: number; maxFileSize?: number; accept?: string[]; headers?: Record<string, string>; }

/** Foreground Tus uploads. The controller must outlive the upload UI. */
export class UploadController {
  private items: UploadItem[] = [];
  private files = new Map<string, UploadFile>();
  private jobs = new Map<string, UploadTask>();
  private attempts = new Map<string, number>();
  private listeners = new Set<() => void>();
  private serial = 0;
  private cleanup = new Set<() => void>();
  constructor(private options: UploadOptions) {}
  /** Read-only transport configuration for platform upload adapters. */
  getOptions = () => ({ ...this.options, headers: { ...this.options.headers }, accept: this.options.accept?.slice() });
  onDispose(callback: () => void) { this.cleanup.add(callback); return () => { this.cleanup.delete(callback); }; }
  getSnapshot = () => this.items;
  getFile = (id: string) => this.files.get(id);
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  private patch(id: string, patch: Partial<UploadItem>) { this.items = this.items.map(item => item.id === id ? { ...item, ...patch } : item); this.emit(); }
  private emit() { this.listeners.forEach(listener => listener()); }
  add(files: UploadFile[]) {
    if (this.items.filter(item => item.status !== 'success' && item.status !== 'canceled').length + files.length > (this.options.maxFiles ?? 10)) throw new Error('Too many files.');
    for (const file of files) {
      if (!Number.isSafeInteger(file.size) || file.size < 0 || file.size > (this.options.maxFileSize ?? 50 * 1024 * 1024)) throw new Error(`File size not allowed: ${file.name}`);
      if (this.options.accept?.length && !this.options.accept.some(rule => rule.startsWith('.') ? file.name.toLowerCase().endsWith(rule.toLowerCase()) : rule.endsWith('/*') ? file.type.startsWith(rule.slice(0, -1)) : file.type === rule)) throw new Error(`File type not allowed: ${file.name}`);
    }
    const added: string[] = [];
    for (const file of files) {
      const id = String(++this.serial);
      added.push(id);
      this.files.set(id, file);
      this.items = [...this.items, { id, name: file.name, size: file.size, type: file.type, status: 'ready', progress: 0 }];
    }
    this.emit();
    if (this.options.autoStart !== false) added.forEach(id => this.start(id));
  }
  start(id: string) {
    const item = this.items.find(item => item.id === id);
    const file = this.files.get(id);
    if (!item || !file || item.status === 'uploading' || item.status === 'success') return;
    const attempt = (this.attempts.get(id) ?? 0) + 1;
    this.attempts.set(id, attempt);
    const valid = () => this.attempts.get(id) === attempt;
    this.patch(id, { status: 'uploading', error: undefined });
    let job: UploadTask;
    const config: UploadTaskConfig = {
      endpoint: this.options.endpoint, uploadUrl: item.url, headers: this.options.headers,
      onCancel: () => { if (valid()) this.patch(id, { status: 'canceled' }); },
      onProgress: (sent, total) => { if (valid()) this.patch(id, { progress: total ? sent / total * 100 : 0 }); },
      onUploadUrlAvailable: () => { if (valid()) this.patch(id, { url: job.url ?? undefined }); },
      onSuccess: () => {
        if (!valid() || this.items.find(item => item.id === id)?.status !== 'uploading') return;
        this.patch(id, { status: 'success', progress: 100, url: job.url ?? undefined });
        this.options.onComplete?.(this.items.find(item => item.id === id)!);
      },
      onError: error => { if (valid()) this.patch(id, { status: 'error', error: error.message }); },
    };
    try {
      job = this.options.createTask ? this.options.createTask(file, config) : new Upload(file.data as ConstructorParameters<typeof Upload>[0], {
        ...config, retryDelays: [1000, 3000, 5000], storeFingerprintForResuming: false,
        metadata: { filename: file.name, filetype: file.type },
      });
    } catch (error) { config.onError(error instanceof Error ? error : new Error(String(error))); return; }
    this.jobs.set(id, job);
    try { job.start(); } catch (error) { this.patch(id, { status: 'error', error: String(error) }); }
  }
  async pause(id: string) {
    if (this.jobs.get(id)?.canPause === false) throw new Error('This upload transport does not support pause.');
    if (this.items.find(item => item.id === id)?.status !== 'uploading') return;
    this.attempts.set(id, (this.attempts.get(id) ?? 0) + 1);
    await this.jobs.get(id)?.abort();
    this.patch(id, { status: 'paused' });
  }
  async cancel(id: string) {
    this.attempts.set(id, (this.attempts.get(id) ?? 0) + 1);
    await this.jobs.get(id)?.abort();
    this.patch(id, { status: 'canceled' });
  }
  async remove(id: string) {
    await this.cancel(id);
    this.files.delete(id); this.jobs.delete(id); this.attempts.delete(id);
    this.items = this.items.filter(item => item.id !== id); this.emit();
  }
  async dispose() {
    this.cleanup.forEach(callback => callback());
    this.cleanup.clear();
    this.listeners.clear();
    await Promise.all(this.items.map(item => this.cancel(item.id)));
  }
}
