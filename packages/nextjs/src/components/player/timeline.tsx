"use client";
import * as React from 'react';
import { Slider } from '../slider';
import { PlayerController, playerTime } from './controller';
import type { PlayerSnapshot, PlayerThumbnail } from './types';
import type { PlayerMessages } from './locale';

export function PlayerTimeline({ controller, state, messages: t }: {
  controller: PlayerController; state: PlayerSnapshot; messages: PlayerMessages;
}) {
  const root = React.useRef<HTMLDivElement>(null);
  const [preview, setPreview] = React.useState<number | null>(null);
  const [thumbnail, setThumbnail] = React.useState<PlayerThumbnail | null>(null);
  const [failed, setFailed] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const end = state.seekEnd || state.duration;
  const disabled = !['content', 'ended'].includes(state.phase) || !end;
  const current = Math.max(state.seekStart, Math.min(state.currentTime, end || 0));
  const time = preview === null ? current : preview;
  const position = end > state.seekStart ? (time - state.seekStart) / (end - state.seekStart) * 100 : 0;
  React.useEffect(() => {
    let active = true;
    if (preview === null || disabled) { setThumbnail(null); return; }
    const timer = setTimeout(() => {
      void controller.getThumbnail(preview).then(value => { if (active) { setThumbnail(value); setFailed(false); } });
    }, 60);
    return () => { active = false; clearTimeout(timer); };
  }, [controller, preview, disabled, state.source]);
  React.useEffect(() => { setPreview(null); setThumbnail(null); setDragging(false); }, [state.source, disabled]);
  return <div className="kivora-player-timeline">
    <span className="kivora-player-time">{playerTime(current)}</span>
    <div ref={root} className="kivora-player-seek"
      onPointerMove={event => {
        if (disabled || (event.pointerType === 'touch' && !dragging)) return;
        const rect = root.current!.getBoundingClientRect();
        setPreview(state.seekStart + Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)) * (end - state.seekStart));
      }}
      onPointerDown={() => setDragging(true)}
      onPointerUp={event => { setDragging(false); const rect = root.current!.getBoundingClientRect(); if (event.pointerType === 'touch' || event.clientX < rect.left || event.clientX > rect.right) setPreview(null); }}
      onPointerCancel={() => { setDragging(false); setPreview(null); }}
      onPointerLeave={() => { if (!dragging) setPreview(null); }}
      onFocus={() => { setFocused(true); setPreview(current); }}
      onBlur={() => { setFocused(false); setPreview(null); }}>
      <Slider aria-label={t.seek} min={state.seekStart} max={Math.max(state.seekStart + 0.01, end)} step={0.1}
        trackClassName="kivora-player-seek-track" rangeClassName="kivora-player-seek-range" thumbClassName="kivora-player-seek-thumb"
        value={[current]} disabled={disabled} onValueChange={values => {
          const next = values[0] ?? 0; controller.seek(next); if (focused || dragging) setPreview(next);
        }} />
      {preview !== null && !disabled && <div className="kivora-player-preview" data-player-preview style={{ left: `clamp(87px, ${position}%, calc(100% - 87px))` }} aria-hidden="true">
        {thumbnail && !failed && <div className="kivora-player-preview-image" style={thumbnail.width > 0 && thumbnail.height > 0 ? { aspectRatio: `${thumbnail.width}/${thumbnail.height}` } : undefined}>
          <img key={thumbnail.src} src={thumbnail.src} alt="" onError={() => setFailed(true)}
            style={thumbnail.sprite && thumbnail.width > 0 ? { width: 'auto', maxWidth: 'none', height: 'auto', transformOrigin: 'top left', transform: `scale(${168 / thumbnail.width}) translate(${-thumbnail.x}px, ${-thumbnail.y}px)` } : undefined} />
        </div>}
        <span>{playerTime(time)}</span>
      </div>}
    </div>
    {state.live ? <button type="button" onClick={() => controller.seek(state.seekEnd)} aria-label={t.goLive} className="kivora-player-live">● {t.live}</button> : <span className="kivora-player-time">{playerTime(state.duration)}</span>}
  </div>;
}
