import * as React from 'react';

type Store = Map<string, unknown>;
export const ExampleStateContext = React.createContext<Store | null>(null);

// Persist demo values across list recycling and search without subscribing the
// gallery (or sibling examples) to every keystroke and gesture.
export function useExampleState<T = undefined>(
  key: string,
  initial?: T | (() => T),
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const store = React.useContext(ExampleStateContext)!;
  const [value, setValue] = React.useState<T>(() => {
    if (!store.has(key)) {
      store.set(
        key,
        typeof initial === 'function' ? (initial as () => T)() : initial,
      );
    }
    return store.get(key) as T;
  });
  const update = React.useCallback(
    (next: React.SetStateAction<T>) => {
      const previous = store.get(key) as T;
      const resolved =
        typeof next === 'function' ? (next as (value: T) => T)(previous) : next;
      if (Object.is(previous, resolved)) return;
      store.set(key, resolved);
      setValue(resolved);
    },
    [key, store],
  );
  return [value, update];
}
