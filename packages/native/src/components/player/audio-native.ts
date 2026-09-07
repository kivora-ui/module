import * as React from 'react';
import { NativeEventEmitter, NativeModules, Platform } from 'react-native';
import type { PlayerController } from './controller';
import type { PlayerSnapshot } from './types';

let nextOwner = 0;
export function useNativeAudio(controller: PlayerController, state: PlayerSnapshot) {
  const [owner] = React.useState(() => `audio-${++nextOwner}`);
  const native = Platform.OS === 'android' ? NativeModules.KivoraAudio : undefined;
  React.useEffect(() => {
    if (!native) return;
    const subscription = new NativeEventEmitter(native).addListener('KivoraAudioSleepExpired', event => {
      if ((event as { owner: string }).owner === owner) controller.finishSleepTimer();
    });
    return () => { subscription.remove(); native.clear(owner); };
  }, [native, owner, controller]);
  React.useEffect(() => {
    if (!native) return;
    if (state.source?.type !== 'audio' || state.casting || !state.mediaUri || state.phase === 'idle') { native.clear(owner); return; }
    native.configure(owner, state.mediaUri, state.sleepTimer?.mode === 'deadline' ? state.sleepTimer.deadline : null, state.sleepTimer?.mode === 'episode' && !state.ad);
  }, [native, owner, state.source?.type, state.casting, state.mediaUri, state.phase, state.ad?.id, state.sleepTimer]);
}
