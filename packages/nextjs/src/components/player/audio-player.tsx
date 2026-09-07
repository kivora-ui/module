"use client";
import * as React from 'react';
import { Player, type PlayerProps } from './player';
import { PlayerController } from './controller';
import type { PlayerSource } from './types';
import { DismissAudioContext } from './playback-context';

export interface AudioPlayerContextValue {
  controller: PlayerController;
  play: (source: PlayerSource) => void;
  close: () => void;
}
const AudioContext = React.createContext<AudioPlayerContextValue | null>(null);
/** Mount in an application layout to keep audio playing across route changes. */
export function AudioPlayerProvider({ children, ...props }: React.PropsWithChildren<Omit<PlayerProps, 'source' | 'controller' | 'autoPlay'>>) {
  const [controller] = React.useState(() => new PlayerController(props.options));
  const [source, setSource] = React.useState<PlayerSource>();
  const value = React.useMemo<AudioPlayerContextValue>(() => ({
    controller,
    play: next => setSource({ ...next, type: 'audio' }),
    close: () => { controller.pause(); setSource(undefined); },
  }), [controller]);
  return <AudioContext.Provider value={value}>
    <DismissAudioContext.Provider value={value.close}>
      {children}
      {source && <Player {...props} controller={controller} source={source} autoPlay presentation={props.presentation ?? 'footer'} />}
    </DismissAudioContext.Provider>
  </AudioContext.Provider>;
}
export function useAudioPlayer(): AudioPlayerContextValue {
  const context = React.useContext(AudioContext);
  if (!context) throw new Error('useAudioPlayer requires AudioPlayerProvider');
  return context;
}
