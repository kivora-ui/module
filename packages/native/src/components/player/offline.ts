import * as React from 'react';
import type { OfflineDownloadEntry, OfflineDrmProvider, PlayerSource } from './types';

/** Minimal file system surface the manager needs; the real implementation
 * lives in `offline-native.ts` so this file never imports react-native-fs
 * and stays testable with a plain in-memory fake. */
export interface OfflineFileSystem {
  documentDirectoryPath: string;
  exists(path: string): Promise<boolean>;
  mkdir(path: string): Promise<void>;
  readFile(path: string): Promise<string>;
  writeFile(path: string, contents: string): Promise<void>;
  unlink(path: string): Promise<void>;
}

/** Real background transfer, decoupled from the file-system concerns above so
 * `offline-native.ts` can back it with a library that manages its own OS-level
 * background session instead of `react-native-fs`. */
export interface OfflineTransport {
  supportsSegmented?: boolean;
  /** Starts a new transfer. `id` is the download entry's stable id (`source.id`),
   * used as the job's identity so a later app restart can re-attach to it. */
  start(options: {
    id: string;
    fromUrl: string;
    toFile: string;
    mimeType?: string;
    title?: string;
    headers?: Record<string, string>;
    onProgress: (progress: { bytesWritten: number; contentLength: number }) => void;
    onDone: (localUri?: string, notificationHandled?: boolean) => void;
    onError: (message: string) => void;
  }): void;
  /** Cancels an in-flight transfer. No-op if `id` has no active job. */
  stop(id: string): void | Promise<void>;
  /** Called once when the manager is constructed. Re-attaches the given
   * callbacks to whatever transfers survived an app restart, and returns the
   * ids of the ones it found. */
  resumeExisting(callbacks: {
    onProgress: (id: string, progress: { bytesWritten: number; contentLength: number }) => void;
    onDone: (id: string, localUri?: string, notificationHandled?: boolean) => void;
    onError: (id: string, message: string) => void;
  }): Promise<string[]>;
}

export class OfflineUnsupportedError extends Error {
  constructor(public readonly reason: 'segmented-format' | 'drm', public readonly sourceId: string) {
    super(reason === 'drm'
      ? `Offline DRM download is not supported yet (source: ${sourceId})`
      : `Offline download of segmented streams (HLS/DASH) is not supported yet (source: ${sourceId})`);
    this.name = 'OfflineUnsupportedError';
  }
}

export function adaptiveMimeType(source: Pick<PlayerSource, 'src' | 'mimeType'>): string | undefined {
  const mime = source.mimeType?.toLowerCase();
  const path = source.src.split(/[?#]/, 1)[0]!.toLowerCase();
  if (mime?.includes('dash') || path.endsWith('.mpd')) return 'application/dash+xml';
  if (mime?.includes('mpegurl') || path.endsWith('.m3u8')) return 'application/x-mpegurl';
  return undefined;
}

function unsupportedReason(source: PlayerSource, hasDrmProvider: boolean, supportsSegmented: boolean): 'segmented-format' | 'drm' | undefined {
  if (adaptiveMimeType(source) && !supportsSegmented) return 'segmented-format';
  if (adaptiveMimeType(source) && source.nativeSource?.drm) return 'drm';
  if (source.nativeSource?.drm && !hasDrmProvider) return 'drm';
  return undefined;
}

/** Downloads sources supported by the platform transport for offline playback.
 * Mirrors `PlayerController`'s subscribe/getSnapshot shape so it can back a
 * `useSyncExternalStore`-based hook the same way. */
export class OfflineDownloadManager {
  private state: OfflineDownloadEntry[] = [];
  private listeners = new Set<() => void>();
  private readonly mediaDir: string;
  private readonly manifestPath: string;
  private readonly ready: Promise<void>;
  private manifestWrites: Promise<void> = Promise.resolve();
  private initialized = false;
  private reconciliation?: Promise<void>;
  private starting: Promise<void> = Promise.resolve();
  private active = new Map<string, symbol>();
  private removing = new Set<string>();
  /** Resolvers for `download()` calls currently in flight, keyed by source id.
   * Lets `remove()` settle the caller's pending promise when a download is
   * cancelled mid-flight instead of leaving it hanging forever. */
  private resolvers = new Map<string, () => void>();

  constructor(
    private fs: OfflineFileSystem,
    private transport: OfflineTransport,
    private drmProvider?: OfflineDrmProvider,
    private onDownloadComplete?: (entry: OfflineDownloadEntry) => void,
  ) {
    this.mediaDir = `${fs.documentDirectoryPath}/kivora-downloads`;
    this.manifestPath = `${this.mediaDir}/manifest.json`;
    this.ready = this.loadManifest().then(() => this.resumeAll()).then(() => {
      this.initialized = true;
      this.pump();
    });
  }

  getSnapshot = () => this.state;
  getServerSnapshot = () => this.state;
  subscribe = (listener: () => void) => { this.listeners.add(listener); return () => { this.listeners.delete(listener); }; };
  private patch(next: OfflineDownloadEntry[]) { this.state = next; this.listeners.forEach(listener => listener()); }

  private async loadManifest() {
    try {
      if (await this.fs.exists(this.manifestPath)) {
        const raw = await this.fs.readFile(this.manifestPath);
        this.patch(JSON.parse(raw) as OfflineDownloadEntry[]);
      }
    } catch {
      // Missing or corrupt manifest: start from an empty, recoverable state.
    }
  }

  private saveManifest() {
    const contents = JSON.stringify(this.state);
    const write = this.manifestWrites.then(async () => {
      await this.fs.mkdir(this.mediaDir);
      await this.fs.writeFile(this.manifestPath, contents);
    });
    this.manifestWrites = write.catch(() => {});
    return write;
  }

  /** Re-attaches to any transfer that survived an app restart. Any entry left
   * 'downloading' in the manifest that the transport doesn't recognize was
   * lost (OS discarded it, or resume failed) and is marked as errored. */
  private async resumeAll() {
    const pending = this.state.filter(entry => entry.state === 'downloading');
    const attempts = new Map(pending.map(entry => [entry.id, this.active.get(entry.id) ?? Symbol(entry.id)]));
    attempts.forEach((attempt, id) => this.active.set(id, attempt));
    if (pending.length === 0) return;
    let resumed: string[];
    try {
      resumed = await this.transport.resumeExisting({
        onProgress: (id, progress) => this.progress(id, attempts.get(id), progress),
        onDone: (id, localUri, notificationHandled) => { void this.finish(id, attempts.get(id), undefined, localUri, notificationHandled); },
        onError: (id, message) => { void this.finish(id, attempts.get(id), message); },
      });
    } catch {
      for (const entry of pending) {
        if (!this.isCurrent(entry.id, attempts.get(entry.id))) continue;
        this.removing.add(entry.id);
        try {
          await this.transport.stop(entry.id);
        } catch {
          continue;
        } finally {
          this.removing.delete(entry.id);
        }
        await this.finish(entry.id, attempts.get(entry.id), 'Download interrupted');
      }
      return;
    }
    for (const entry of pending) {
      if (!resumed.includes(entry.id)) await this.finish(entry.id, attempts.get(entry.id), 'Download interrupted');
    }
    const surviving = pending.filter(entry => this.isCurrent(entry.id, attempts.get(entry.id)));
    for (const entry of surviving.slice(1)) {
      this.removing.add(entry.id);
      try {
        await this.transport.stop(entry.id);
        this.active.delete(entry.id);
        this.updateEntry(entry.id, { state: 'queued', progress: 0 });
        await this.saveManifest();
      } catch {
        continue;
      } finally {
        this.removing.delete(entry.id);
      }
    }
  }

  private extensionFor(mimeType?: string) {
    return mimeType?.includes('mp4') ? 'mp4' : 'bin';
  }

  private updateEntry(id: string, patch: Partial<OfflineDownloadEntry>) {
    this.patch(this.state.map(entry => entry.id === id ? { ...entry, ...patch } : entry));
  }

  private isCurrent(id: string, attempt: symbol | undefined) {
    return attempt !== undefined && this.active.get(id) === attempt && !this.removing.has(id)
      && this.state.some(entry => entry.id === id && entry.state === 'downloading');
  }

  reconcile = async (): Promise<void> => {
    await this.ready;
    if (this.reconciliation) return this.reconciliation;
    this.initialized = false;
    this.reconciliation = this.starting.then(() => this.resumeAll()).finally(() => {
      this.reconciliation = undefined;
      this.initialized = true;
      this.pump();
    });
    await this.reconciliation;
  };

  private progress(id: string, attempt: symbol | undefined, progress: { bytesWritten: number; contentLength: number }) {
    if (this.isCurrent(id, attempt)) this.updateEntry(id, { progress: progress.contentLength > 0 ? progress.bytesWritten / progress.contentLength : 0 });
  }

  private async finish(id: string, attempt: symbol | undefined, error?: string, localUri?: string, notificationHandled = false) {
    if (!this.isCurrent(id, attempt)) return;
    this.updateEntry(id, error === undefined
      ? { state: 'downloaded', progress: 1, localUri: localUri ?? this.localFileFor(id) }
      : { state: 'error', error });
    try {
      await this.saveManifest();
      const entry = this.state.find(item => item.id === id);
      if (error === undefined && entry && !this.removing.has(id) && !notificationHandled) this.onDownloadComplete?.(entry);
    } finally {
      if (this.active.get(id) === attempt && !this.removing.has(id)) {
        this.active.delete(id);
        this.settle(id);
        this.pump();
      }
    }
  }

  private localFileFor(id: string): string {
    const entry = this.state.find(item => item.id === id);
    return entry?.localUri ?? `${this.mediaDir}/${id}`;
  }

  download = async (source: PlayerSource): Promise<void> => {
    const reason = unsupportedReason(source, !!this.drmProvider, !!this.transport.supportsSegmented);
    if (reason) throw new OfflineUnsupportedError(reason, source.id);
    await this.ready;
    await this.reconciliation;
    const existing = this.state.find(entry => entry.id === source.id);
    if (this.removing.has(source.id) || this.active.has(source.id) || (existing && existing.state !== 'error')) return;

    const toFile = `${this.mediaDir}/${source.id}.${this.extensionFor(source.mimeType)}`;
    this.patch([...this.state.filter(entry => entry.id !== source.id), { id: source.id, source, state: 'queued', progress: 0, localUri: toFile }]);
    const completion = new Promise<void>(resolve => { this.resolvers.set(source.id, resolve); });
    await this.saveManifest();
    this.pump();
    await completion;
  };

  private pump() {
    if (!this.initialized || this.active.size > 0 || this.removing.size > 0) return;
    const entry = this.state.find(item => item.state === 'queued');
    if (!entry) return;
    const attempt = Symbol(entry.id);
    this.active.set(entry.id, attempt);
    this.updateEntry(entry.id, { state: 'downloading' });
    this.starting = this.start(entry, attempt);
  }

  private async start(entry: OfflineDownloadEntry, attempt: symbol) {
    const { id, source } = entry;
    try {
      await this.saveManifest();
      if (!this.isCurrent(id, attempt)) return;
      this.transport.start({
        id,
        fromUrl: source.src,
        toFile: this.localFileFor(id),
        mimeType: adaptiveMimeType(source) ?? source.mimeType,
        title: source.title,
        headers: source.nativeSource?.headers,
        onProgress: progress => this.progress(id, attempt, progress),
        onDone: (localUri, notificationHandled) => { void this.finish(id, attempt, undefined, localUri, notificationHandled); },
        onError: message => { void this.finish(id, attempt, message); },
      });
    } catch (error) {
      await this.finish(id, attempt, error instanceof Error ? error.message : String(error));
    }
  }

  /** Resolves a pending `download()` call for `id`, if one exists, exactly once. */
  private settle(id: string) {
    const resolve = this.resolvers.get(id);
    if (resolve) {
      this.resolvers.delete(id);
      resolve();
    }
  }

  remove = async (id: string): Promise<void> => {
    await this.ready;
    await this.reconciliation;
    if (this.removing.has(id)) return;
    this.removing.add(id);
    try {
      await this.transport.stop(id);
      const entry = this.state.find(item => item.id === id);
      if (entry?.localUri && !adaptiveMimeType(entry.source)) {
        try { await this.fs.unlink(entry.localUri); } catch { /* already gone: nothing to clean up */ }
      }
      this.patch(this.state.filter(item => item.id !== id));
      try {
        await this.saveManifest();
      } finally {
        this.settle(id);
        this.active.delete(id);
      }
    } finally {
      this.removing.delete(id);
      this.pump();
    }
  };

  getPlaybackSource = (id: string): PlayerSource | undefined => {
    const entry = this.state.find(item => item.id === id);
    if (!entry || entry.state !== 'downloaded' || !entry.localUri) return undefined;
    const src = /^[a-z][a-z\d+.-]*:/i.test(entry.localUri) ? entry.localUri : `file://${entry.localUri}`;
    return { ...entry.source, src, mimeType: adaptiveMimeType(entry.source) ?? entry.source.mimeType, intro: undefined, ads: undefined };
  };
}

export function useOfflineDownloads(manager: OfflineDownloadManager) {
  return React.useSyncExternalStore(manager.subscribe, manager.getSnapshot, manager.getServerSnapshot);
}
