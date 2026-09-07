import type { OfflineTransport } from './offline';

export interface AdaptiveDownload {
  id: string;
  state: 'queued' | 'downloading' | 'paused' | 'downloaded' | 'error' | 'removed';
  progress: number;
  localUri?: string;
  error?: string;
}

interface AdaptiveModule {
  start(options: { id: string; url: string; mimeType: string; title: string; headers?: Record<string, string> }): Promise<void>;
  remove(id: string): Promise<void>;
  getDownloads(): Promise<AdaptiveDownload[]>;
}

export function createAdaptiveTransport(native: AdaptiveModule, subscribe: (listener: (download: AdaptiveDownload) => void) => void): OfflineTransport {
  type Callbacks = Pick<Parameters<OfflineTransport['start']>[0], 'onProgress' | 'onDone' | 'onError'>;
  const jobs = new Map<string, Callbacks>();
  let restoring: Map<string, AdaptiveDownload> | undefined;
  const update = (download: AdaptiveDownload) => {
    const callbacks = jobs.get(download.id);
    if (!callbacks) return;
    if (download.state === 'downloaded' || download.state === 'error' || download.state === 'removed') jobs.delete(download.id);
    if (download.state === 'downloaded') callbacks.onDone(download.localUri, true);
    else if (download.state === 'error') callbacks.onError(download.error ?? 'Download failed');
    else if (download.state === 'removed') callbacks.onError('Download removed');
    else callbacks.onProgress({ bytesWritten: download.progress, contentLength: 1 });
  };
  subscribe(download => {
    restoring?.set(download.id, download);
    update(download);
  });
  return {
    supportsSegmented: true,
    start: ({ id, fromUrl, mimeType, title, headers, onProgress, onDone, onError }) => {
      const callbacks = { onProgress, onDone, onError };
      jobs.set(id, callbacks);
      void native.start({ id, url: fromUrl, mimeType: mimeType!, title: title ?? id, headers }).catch(error => {
        if (jobs.get(id) !== callbacks) return;
        jobs.delete(id);
        onError(error instanceof Error ? error.message : String(error));
      });
    },
    stop: async id => {
      jobs.delete(id);
      await native.remove(id);
    },
    resumeExisting: async ({ onProgress, onDone, onError }) => {
      const events = new Map<string, AdaptiveDownload>();
      restoring = events;
      let downloads: AdaptiveDownload[];
      try {
        downloads = await native.getDownloads();
      } finally {
        restoring = undefined;
      }
      for (const download of downloads) {
        jobs.set(download.id, {
          onProgress: progress => onProgress(download.id, progress),
          onDone: (localUri, handled) => onDone(download.id, localUri, handled),
          onError: error => onError(download.id, error),
        });
        update(events.get(download.id) ?? download);
      }
      return [...new Set([...downloads.map(download => download.id), ...jobs.keys()])];
    },
  };
}
