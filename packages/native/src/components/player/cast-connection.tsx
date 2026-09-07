import * as React from 'react';
import type { PlayerController } from './controller';
import { CastBridge, type CastClient } from './cast';

export interface PlayerCast {
  CastButton: React.ComponentType<{ accessibilityLabel?: string; tintColor?: string; style?: { width: number; height: number } }>;
  useRemoteMediaClient: () => CastClient | null;
}
export function CastConnection({ sdk, eligible, controller, bridge, pauseLocal }: { sdk: PlayerCast; eligible: boolean; controller: PlayerController; bridge: React.MutableRefObject<CastBridge | undefined>; pauseLocal: () => void }) {
  const client = sdk.useRemoteMediaClient();
  React.useEffect(() => {
    if (!client || !eligible) return;
    const connection = new CastBridge(controller, client, pauseLocal);
    bridge.current = connection;
    return () => { connection.disconnect(); if (bridge.current === connection) bridge.current = undefined; };
  }, [client, eligible, controller, bridge, pauseLocal]);
  return null;
}
