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
  /** Starts a new transfer. `id` is the download entry's stable id (`source.id`),
   * used as the job's identity so a later app restart can re-attach to it. */
  start(options: {
    id: string;
    fromUrl: string;
    toFile: string;
    onProgress: (progress: { bytesWritten: number; contentLength: number }) => void;
    onDone: () => void;
    onError: (message: string) => void;
  }): void;
  /** Cancels an in-flight transfer. No-op if `id` has no active job. */
  stop(id: string): void;
  /** Called once when the manager is constructed. Re-attaches the given
   * callbacks to whatever transfers survived an app restart, and returns the
   * ids of the ones it found. */
  resumeExisting(callbacks: {
    onProgress: (id: string, progress: { bytesWritten: number; contentLength: number }) => void;
    onDone: (id: string) => void;
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

function unsupportedReason(source: PlayerSource, hasDrmProvider: boolean): 'segmented-format' | 'drm' | undefined {
  if (source.mimeType?.includes('dash') || source.mimeType?.includes('mpegurl')) return 'segmented-format';
  if (source.nativeSource?.drm && !hasDrmProvider) return 'drm';
  return undefined;
}

/** Downloads progressive (non-segmented), non-DRM sources for offline playback.
 * Mirrors `PlayerController`'s subscribe/getSnapshot shape so it can back a
 * `useSyncExternalStore`-based hook the same way. */
export class OfflineDownloadManager {
  private state: OfflineDownloadEntry[] = [];
  private listeners = new Set<() => void>();
  private readonly mediaDir: string;
  private readonly manifestPath: string;
  private readonly ready: Promise<void>;

  constructor(
    private fs: OfflineFileSystem,
    private transport: OfflineTransport,
    private drmProvider?: OfflineDrmProvider,
    private onDownloadComplete?: (entry: OfflineDownloadEntry) => void,
  ) {
    this.mediaDir = `${fs.documentDirectoryPath}/kivora-downloads`;
    this.manifestPath = `${this.mediaDir}/manifest.json`;
    this.ready = this.loadManifest().then(() => this.resumeAll());
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

  private async saveManifest() {
    await this.fs.mkdir(this.mediaDir).catch(() => {});
    await this.fs.writeFile(this.manifestPath, JSON.stringify(this.state));
  }

  /** Re-attaches to any transfer that survived an app restart. Any entry left
   * 'downloading' in the manifest that the transport doesn't recognize was
   * lost (OS discarded it, or resume failed) and is marked as errored. */
  private async resumeAll() {
    try {
      const pending = this.state.filter(entry => entry.state === 'downloading');
      if (pending.length === 0) return;
      const resumed = await this.transport.resumeExisting({
        onProgress: (id, progress) => this.updateEntry(id, { progress: progress.contentLength > 0 ? progress.bytesWritten / progress.contentLength : 0 }),
        onDone: id => this.handleDone(id),
        onError: (id, message) => this.updateEntry(id, { state: 'error', error: message }),
      });
      const lost = pending.filter(entry => !resumed.includes(entry.id));
      if (lost.length > 0) {
        this.patch(this.state.map(entry => lost.some(l => l.id === entry.id) ? { ...entry, state: 'error', error: 'Download interrupted' } : entry));
        await this.saveManifest();
      }
    } catch {
      // Resume failure: mark all pending entries as interrupted rather than wedging the manager.
      const pending = this.state.filter(entry => entry.state === 'downloading');
      if (pending.length > 0) {
        this.patch(this.state.map(entry => pending.some(p => p.id === entry.id) ? { ...entry, state: 'error', error: 'Download interrupted' } : entry));
        await this.saveManifest();
      }
    }
  }

  private extensionFor(mimeType?: string) {
    return mimeType?.includes('mp4') ? 'mp4' : 'bin';
  }

  private updateEntry(id: string, patch: Partial<OfflineDownloadEntry>) {
    this.patch(this.state.map(entry => entry.id === id ? { ...entry, ...patch } : entry));
  }

  private async handleDone(id: string) {
    const toFile = this.localFileFor(id);
    this.updateEntry(id, { state: 'downloaded', progress: 1, localUri: toFile });
    await this.saveManifest();
    const entry = this.state.find(item => item.id === id);
    if (entry) this.onDownloadComplete?.(entry);
  }

  private localFileFor(id: string): string {
    const entry = this.state.find(item => item.id === id);
    return entry?.localUri ?? `${this.mediaDir}/${id}`;
  }

  download = async (source: PlayerSource): Promise<void> => {
    const reason = unsupportedReason(source, !!this.drmProvider);
    if (reason) throw new OfflineUnsupportedError(reason, source.id);
    await this.ready;
    const existing = this.state.find(entry => entry.id === source.id);
    if (existing && existing.state !== 'error') return;

    const toFile = `${this.mediaDir}/${source.id}.${this.extensionFor(source.mimeType)}`;
    this.patch([...this.state.filter(entry => entry.id !== source.id), { id: source.id, source, state: 'queued', progress: 0, localUri: toFile }]);
    this.updateEntry(source.id, { state: 'downloading' });

    await new Promise<void>(resolve => {
      this.transport.start({
        id: source.id,
        fromUrl: source.src,
        toFile,
        onProgress: progress => this.updateEntry(source.id, { progress: progress.contentLength > 0 ? progress.bytesWritten / progress.contentLength : 0 }),
        onDone: () => { void this.handleDone(source.id).then(resolve); },
        onError: message => { this.updateEntry(source.id, { state: 'error', error: message }); void this.saveManifest().then(resolve); },
      });
    });
  };

  remove = async (id: string): Promise<void> => {
    await this.ready;
    this.transport.stop(id);
    const entry = this.state.find(item => item.id === id);
    if (entry?.localUri) {
      try { await this.fs.unlink(entry.localUri); } catch { /* already gone: nothing to clean up */ }
    }
    this.patch(this.state.filter(item => item.id !== id));
    await this.saveManifest();
  };

  getPlaybackSource = (id: string): PlayerSource | undefined => {
    const entry = this.state.find(item => item.id === id);
    if (!entry || entry.state !== 'downloaded' || !entry.localUri) return undefined;
    return { ...entry.source, src: `file://${entry.localUri}` };
  };
}

export function useOfflineDownloads(manager: OfflineDownloadManager) {
  return React.useSyncExternalStore(manager.subscribe, manager.getSnapshot, manager.getServerSnapshot);
}
