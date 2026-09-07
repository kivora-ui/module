import type { ReactVideoSource, OnLoadData } from 'react-native-video';

export type PlayerControlsVariant = 'compact' | 'cinema' | 'series' | 'standard';
export type PlayerOrientation = 'auto' | 'landscape';
export interface PlayerAdBreak {
  id: string;
  src: string;
  mimeType?: string;
  at: 'pre' | 'post' | number;
  duration?: number;
  skipAfter?: number;
  title?: string;
}
export interface PlayerSource {
  id: string;
  src: string;
  title: string;
  type?: 'video' | 'audio';
  mimeType?: string;
  poster?: string;
  startTime?: number;
  /** Native headers, DRM, side-loaded text tracks and buffering options. */
  nativeSource?: Omit<ReactVideoSource, 'uri' | 'startPosition' | 'ad'>;
  ads?: { breaks?: PlayerAdBreak[]; tagUrl?: string; onError?: 'continue' | 'stop' };
}
export interface PlayerProgram { title?: string; subtitle?: string; description?: string; metadata?: string; badge?: string }
export interface PlayerQueueItem { id: string; title: string; subtitle?: string; image?: string; progress?: number }
export interface PlayerSnapshot {
  source?: PlayerSource;
  phase: 'idle' | 'loading' | 'content' | 'ad' | 'ended' | 'error';
  paused: boolean;
  buffering: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  muted: boolean;
  rate: number;
  revision: number;
  mediaUri?: string;
  mediaMimeType?: string;
  startTime: number;
  ad?: { id: string; title: string; remaining: number; canSkip: boolean; ima?: boolean };
  audioTracks: OnLoadData['audioTracks'];
  textTracks: OnLoadData['textTracks'];
  videoTracks: OnLoadData['videoTracks'];
  audioTrack: string;
  textTrack: string;
  videoTrack: string;
  error?: string;
}
export interface PlayerEvent { type: string; state: PlayerSnapshot }
export type OfflineDownloadState = 'queued' | 'downloading' | 'paused' | 'downloaded' | 'error';
export interface OfflineDownloadEntry {
  id: string;
  source: PlayerSource;
  state: OfflineDownloadState;
  progress: number;
  localUri?: string;
  error?: string;
}
export interface OfflineDrmProvider {
  acquireLicense(source: PlayerSource): Promise<{ localUri: string }>;
  releaseLicense(source: PlayerSource): Promise<void>;
}
