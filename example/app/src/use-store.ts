import { useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, restoreStore, type AppState } from './store';

const key = 'kivora-pharmacy-android-v1';
export function useStore() {
  const [state, setState] = useState(createStore);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const current = useRef(state);
  const queue = useRef(Promise.resolve());
  useEffect(() => {
    let mounted = true;
    AsyncStorage.getItem(key)
      .then(raw => {
        if (!mounted) return;
        const restored = raw ? restoreStore(raw) : createStore();
        current.current = restored;
        setState(restored);
        setReady(true);
      })
      .catch(() => {
        if (mounted)
          setError(
            'No se pudieron leer los datos guardados. Reinicia la aplicación para reintentar.',
          );
      });
    return () => {
      mounted = false;
    };
  }, []);
  const update = (change: (previous: AppState) => AppState) => {
    if (!ready) return;
    const next = change(current.current);
    current.current = next;
    setState(next);
    queue.current = queue.current
      .then(() => AsyncStorage.setItem(key, JSON.stringify(next)))
      .then(() => setError(''))
      .catch(() =>
        setError(
          'No se han podido guardar los últimos cambios en el dispositivo.',
        ),
      );
  };
  return { state, ready, error, update };
}
