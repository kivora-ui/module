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
  downloadFile(options: { fromUrl: string; toFile: string; progress?: (progress: { bytesWritten: number; contentLength: number }) => void }): { jobId: number; promise: Promise<{ statusCode: number }> };
  stopDownload(jobId: number): void;
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

  constructor(private fs: OfflineFileSystem, private drmProvider?: OfflineDrmProvider) {
    this.mediaDir = `${fs.documentDirectoryPath}/kivora-downloads`;
    this.manifestPath = `${this.mediaDir}/manifest.json`;
    this.ready = this.loadManifest();
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

  private extensionFor(mimeType?: string) {
    return mimeType?.includes('mp4') ? 'mp4' : 'bin';
  }

  private updateEntry(id: string, patch: Partial<OfflineDownloadEntry>) {
    this.patch(this.state.map(entry => entry.id === id ? { ...entry, ...patch } : entry));
  }

  private jobs = new Map<string, number>();

  download = async (source: PlayerSource): Promise<void> => {
    const reason = unsupportedReason(source, !!this.drmProvider);
    if (reason) throw new OfflineUnsupportedError(reason, source.id);
    await this.ready;
    const existing = this.state.find(entry => entry.id === source.id);
    if (existing && existing.state !== 'error') return;

    const toFile = `${this.mediaDir}/${source.id}.${this.extensionFor(source.mimeType)}`;
    this.patch([...this.state.filter(entry => entry.id !== source.id), { id: source.id, source, state: 'queued', progress: 0 }]);
    this.updateEntry(source.id, { state: 'downloading' });

    const { jobId, promise } = this.fs.downloadFile({
      fromUrl: source.src,
      toFile,
      progress: ({ bytesWritten, contentLength }) => {
        this.updateEntry(source.id, { progress: contentLength > 0 ? bytesWritten / contentLength : 0 });
      },
    });
    this.jobs.set(source.id, jobId);
    try {
      const result = await promise;
      if (result.statusCode >= 200 && result.statusCode < 300) {
        this.updateEntry(source.id, { state: 'downloaded', progress: 1, localUri: toFile });
      } else {
        this.updateEntry(source.id, { state: 'error', error: `HTTP ${result.statusCode}` });
      }
    } catch (error) {
      this.updateEntry(source.id, { state: 'error', error: error instanceof Error ? error.message : String(error) });
    } finally {
      this.jobs.delete(source.id);
    }
    await this.saveManifest();
  };

  remove = async (id: string): Promise<void> => {
    await this.ready;
    const jobId = this.jobs.get(id);
    if (jobId !== undefined) { this.fs.stopDownload(jobId); this.jobs.delete(id); }
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
