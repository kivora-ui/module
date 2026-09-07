import type { ReactNode } from 'react';
import type shaka from 'shaka-player';
import type { PlayerController } from './controller';

export type PlayerPhase = 'idle' | 'splash' | 'loading' | 'content' | 'ad' | 'ended' | 'error';
export type PlayerControlsVariant = 'standard' | 'compact' | 'cinema' | 'series';
export interface PlayerProgram {
  title: string;
  subtitle?: string;
  description?: string;
  metadata?: string;
  badge?: string;
}
export interface PlayerQueueItem {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  /** Watched fraction from 0 to 1. */
  progress?: number;
}
export interface PlayerThumbnail {
  src: string;
  width: number;
  height: number;
  x: number;
  y: number;
  sprite: boolean;
}
export interface PlayerTextTrack {
  src: string;
  language: string;
  label?: string;
  kind?: 'subtitles' | 'captions';
  mimeType?: string;
  default?: boolean;
}
export interface PlayerAdBreak {
  id: string;
  src: string;
  at: 'pre' | 'post' | number;
  mimeType?: string;
  skipAfter?: number;
  /** Optional limit for the creative, in seconds. */
  duration?: number;
}
export interface PlayerAds {
  /** VAST or VMAP URL. Requests are made only after play is requested. */
  tagUrl?: string;
  breaks?: PlayerAdBreak[];
  /** A failure is non-blocking unless explicitly configured otherwise. */
  onError?: 'continue' | 'stop';
}
export interface PlayerSource {
  id: string;
  src: string;
  title: string;
  type?: 'video' | 'audio';
  mimeType?: string;
  poster?: string;
  startTime?: number;
  textTracks?: PlayerTextTrack[];
  /** Optional WebVTT image/sprite track. Manifest image tracks work automatically. */
  thumbnails?: { src: string; mimeType?: string };
  drm?: Omit<Partial<shaka.extern.DrmConfiguration>, 'advanced' | 'retryParameters'> & {
    advanced?: Record<string, Partial<shaka.extern.AdvancedDrmConfiguration>>;
    retryParameters?: Partial<shaka.extern.RetryParameters>;
  };
  /** Scoped networking hooks, including authentication and license wrapping. */
  requestFilter?: shaka.extern.RequestFilter;
  responseFilter?: shaka.extern.ResponseFilter;
  /** Advanced Shaka configuration; applied before the explicit source DRM settings. */
  configuration?: Record<string, unknown>;
  ads?: PlayerAds;
  splash?: { src: string; poster?: string; maxDuration?: number };
  /** Explicit opt-in. Requires VOD HLS/DASH and browser storage support. */
  offline?: { enabled: boolean; persistentLicense?: boolean; maxHeight?: number };
  /** Explicitly supplied clear-media file export. Never used for DRM sources. */
  downloadUrl?: string;
}
export interface PlayerSnapshot {
  phase: PlayerPhase;
  source?: PlayerSource;
  paused: boolean;
  buffering: boolean;
  currentTime: number;
  duration: number;
  seekStart: number;
  seekEnd: number;
  live: boolean;
  volume: number;
  muted: boolean;
  rate: number;
  audioTracks: shaka.extern.AudioTrack[];
  videoTracks: shaka.extern.VideoTrack[];
  textTracks: shaka.extern.TextTrack[];
  automaticQuality: boolean;
  textVisible: boolean;
  ad?: { title: string; remaining: number; canSkip: boolean; linear: boolean };
  error?: { code: string; recoverable: boolean };
  downloadProgress?: number;
  downloading: boolean;
  offlineSupported: boolean;
  downloads: PlayerDownload[];
}
export interface PlayerDownload {
  uri: string;
  sourceId: string;
  title: string;
  size: number;
  duration: number;
  expiration: number;
  type?: 'video' | 'audio';
}
export interface PlayerEvent {
  type: string;
  sourceId?: string;
  phase: PlayerPhase;
  time: number;
  timestamp: number;
  /** No license data, credentials or signed URLs are emitted automatically. */
  detail?: Record<string, unknown>;
}
export interface PlayerPluginContext {
  controller: PlayerController;
  engine: shaka.Player;
  media: HTMLVideoElement;
  signal: AbortSignal;
  on: (listener: (event: PlayerEvent) => void) => () => void;
}
export interface PlayerPlugin {
  id: string;
  /** Called once per connection, before loading media. Return a cleanup function. */
  setup: (context: PlayerPluginContext) => void | (() => void) | Promise<void | (() => void)>;
}
export interface PlayerOverlayContext {
  controller: PlayerController;
  state: PlayerSnapshot;
}
export interface PlayerOverlay {
  id: string;
  phases?: PlayerPhase[];
  render: (context: PlayerOverlayContext) => ReactNode;
}
export interface PlayerControllerOptions {
  plugins?: PlayerPlugin[];
  onEvent?: (event: PlayerEvent) => void;
  /** Optional Shaka text displayer/plugin registration, before player creation. */
  configureEngine?: (library: typeof shaka) => void | Promise<void>;
}
