"use client";
import * as React from 'react';
import type { UploadFile, UploadMessages } from '@kivora/upload';
import { Button } from './button';

export function UploadCamera({ onCapture, messages }: { messages: UploadMessages; onCapture: (file: UploadFile) => void }) {
  const video = React.useRef<HTMLVideoElement>(null);
  const [ready, setReady] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    let disposed = false;
    let stream: MediaStream | undefined;
    void (async () => {
      try {
        if (!navigator.mediaDevices?.getUserMedia) throw new Error('Camera requires HTTPS and a supported browser.');
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        if (disposed) { stream.getTracks().forEach(track => track.stop()); return; }
        if (video.current) { video.current.srcObject = stream; await video.current.play(); }
      } catch (error) { if (!disposed) setError(messages.cameraError); }
    })();
    return () => { disposed = true; stream?.getTracks().forEach(track => track.stop()); };
  }, []);
  const capture = async () => {
    if (!video.current || busy) return;
    setBusy(true); setError('');
    try {
      const canvas = document.createElement('canvas');
      canvas.width = video.current.videoWidth; canvas.height = video.current.videoHeight;
      const context = canvas.getContext('2d');
      if (!context || !canvas.width) throw new Error('Camera is not ready.');
      context.drawImage(video.current, 0, 0);
      const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error('Could not capture photo.')), 'image/jpeg', 0.9));
      onCapture({ name: `photo-${Date.now()}.jpg`, size: blob.size, type: blob.type, data: blob });
    } catch (error) { setError(messages.captureError); }
    finally { setBusy(false); }
  };
  return <section aria-label={messages.cameraPreview} className="grid gap-3 rounded-lg border border-border p-3">
    <video ref={video} muted playsInline onLoadedData={() => setReady(true)} className="aspect-video w-full rounded-md bg-muted object-contain" />
    {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
    <div className="flex flex-wrap gap-2"><Button type="button" disabled={!ready || busy} onClick={() => { void capture(); }}>{messages.photo}</Button></div>
  </section>;
}
