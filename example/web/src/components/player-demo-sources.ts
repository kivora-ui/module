import type { PlayerSource } from '@kivora/nextjs';

export type PlayerDemoSource = PlayerSource & {
  label?: string;
  attribution?: string;
  reference?: string;
};

// Public integration samples from the publishers' own demo catalogs.
// Keep license endpoints scoped to these test assets; no production credentials.
const shakaCatalog = 'https://shaka-project.github.io/shaka-player/demo/';
const icons = 'https://storage.googleapis.com/shaka-asset-icons/';
// Public sample entitlement published in Shaka's Axinom test catalog.
const axinomTestMessage = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiYjMzNjRlYjUtNTFmNi00YWUzLThjOTgtMzNjZWQ1ZTMxYzc4IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiOWViNDA1MGQtZTQ0Yi00ODAyLTkzMmUtMjdkNzUwODNlMjY2IiwiZW5jcnlwdGVkX2tleSI6ImxLM09qSExZVzI0Y3Iya3RSNzRmbnc9PSJ9XX19.4lWwW46k-oWcah8oN18LPj5OLS5ZU-_AQv7fe0JhNjA';
export const publicPlayerSources: PlayerDemoSource[] = [
  {
    id: 'sintel-public', label: 'Sintel · DASH', title: 'Sintel',
    src: 'https://storage.googleapis.com/shaka-demo-assets/sintel/dash.mpd',
    mimeType: 'application/dash+xml', poster: `${icons}sintel.png`,
    thumbnails: { src: '/player-thumbnails/sintel/thumbnails.vtt' },
    offline: { enabled: true, maxHeight: 720 },
    attribution: 'Sintel — Blender Foundation · Shaka Player', reference: shakaCatalog,
  },
  {
    id: 'angel-hls-public', label: 'Angel One · HLS', title: 'Angel One',
    src: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/hls.m3u8',
    mimeType: 'application/x-mpegurl', poster: `${icons}angel_one.png`,
    offline: { enabled: true, maxHeight: 720 },
    attribution: 'Angel One — muestra pública de Shaka Player', reference: shakaCatalog,
  },
  {
    id: 'flower-mp4-public', label: 'Flower · MP4', title: 'Flower',
    src: 'https://developer.mozilla.org/shared-assets/videos/flower.mp4',
    mimeType: 'video/mp4',
    attribution: 'Flower — muestra pública de MDN', reference: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video',
  },
  {
    id: 'angel-widevine-public', label: 'Angel One · Widevine', title: 'Angel One · Widevine',
    src: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd',
    mimeType: 'application/dash+xml', poster: `${icons}angel_one.png`,
    drm: { servers: { 'com.widevine.alpha': 'https://proxy.uat.widevine.com/proxy' } },
    attribution: 'Angel One — DRM de prueba de Shaka / Widevine', reference: shakaCatalog,
  },
  {
    id: 'tears-drm-public', label: 'Tears of Steel · Widevine / PlayReady', title: 'Tears of Steel · DRM',
    src: 'https://media.axprod.net/TestVectors/v7-MultiDRM-SingleKey/Manifest.mpd',
    mimeType: 'application/dash+xml', poster: `${icons}tears_of_steel.png`,
    drm: {
      servers: {
        'com.widevine.alpha': 'https://drm-widevine-licensing.axtest.net/AcquireLicense',
        'com.microsoft.playready': 'https://drm-playready-licensing.axtest.net/AcquireLicense',
      },
      advanced: {
        'com.widevine.alpha': { headers: { 'X-AxDRM-Message': axinomTestMessage } },
        'com.microsoft.playready': { headers: { 'X-AxDRM-Message': axinomTestMessage } },
      },
    },
    attribution: 'Tears of Steel — Blender Foundation · DRM de prueba de Axinom', reference: shakaCatalog,
  },
];
