import * as React from 'react';
import { View } from 'react-native';
import { Player, type PlayerProps } from './player';
import { PlayerController } from './controller';
import type { PlayerSource } from './types';
export interface AudioPlayerContextValue { controller: PlayerController; play: (source: PlayerSource) => void; close: () => void }
const AudioContext = React.createContext<AudioPlayerContextValue | null>(null);
export interface AudioPlayerProviderProps extends Omit<PlayerProps, 'source' | 'controller' | 'autoPlay' | 'onClose'> {
  /**
   * Height (px) of the host app's bottom navigation, e.g. from react-navigation's
   * `useBottomTabBarHeight()`. The mini dock floats this far above the screen's
   * bottom edge instead of sitting inline, so it never overlaps or hides behind it.
   */
  bottomOffset?: number;
}
/** Place around your navigator. The audio dock survives screen changes. */
export function AudioPlayerProvider({ children, bottomOffset = 0, ...props }: React.PropsWithChildren<AudioPlayerProviderProps>) {
  const [controller] = React.useState(() => new PlayerController());
  const [source, setSource] = React.useState<PlayerSource>();
  const value = React.useMemo<AudioPlayerContextValue>(() => ({ controller, play: next => setSource({ ...next, type: 'audio' }), close: () => { controller.close(); setSource(undefined); } }), [controller]);
  return <AudioContext.Provider value={value}>
    <View style={{ flex: 1 }}>{children}</View>
    {source && <View style={{ position: 'absolute', left: 0, right: 0, bottom: bottomOffset }}>
      <Player {...props} source={source} controller={controller} autoPlay presentation="footer" onClose={value.close} />
    </View>}
  </AudioContext.Provider>;
}
export function useAudioPlayer() {
  const context = React.useContext(AudioContext);
  if (!context) throw new Error('useAudioPlayer requires AudioPlayerProvider');
  return context;
}
