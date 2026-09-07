import type { ReactVideoSource, OnLoadData } from 'react-native-video';

export type PlayerControlsVariant = 'compact' | 'cinema' | 'series' | 'standard';
export type PlayerOrientation = 'auto' | 'landscape';
export interface PlayerCastMediaOptions {
  hlsSegmentFormat?: 'AAC' | 'AC3' | 'E-AC3' | 'FMP4' | 'MP3' | 'TS' | 'TS_AAC';
  hlsVideoSegmentFormat?: 'FMP4' | 'MPEG2-TS';
}
export interface PlayerAdBreak {
  id: string;
  src: string;
  mimeType?: string;
  cast?: PlayerCastMediaOptions;
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
  cast?: PlayerCastMediaOptions;
  poster?: string;
  subtitle?: string;
  intro?: { src: string; mimeType?: string; title?: string; cast?: PlayerCastMediaOptions };
  startTime?: number;
  /** Native headers, DRM, side-loaded text tracks and buffering options. */
  nativeSource?: Omit<ReactVideoSource, 'uri' | 'startPosition' | 'ad'>;
  ads?: { breaks?: PlayerAdBreak[]; tagUrl?: string; onError?: 'continue' | 'stop' };
}
export interface PlayerProgram { title?: string; subtitle?: string; description?: string; metadata?: string; badge?: string }
export interface PlayerQueueItem { id: string; title: string; subtitle?: string; image?: string; progress?: number }
export interface PlayerSnapshot {
  source?: PlayerSource;
  phase: 'idle' | 'loading' | 'intro' | 'content' | 'ad' | 'ended' | 'error';
  casting?: boolean;
  castError?: string;
  sleepTimer?: { mode: 'deadline'; deadline: number } | { mode: 'episode' };
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
