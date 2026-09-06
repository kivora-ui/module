import * as React from 'react';
import { act, create, type ReactTestRenderer } from 'react-test-renderer';
import { expect, it } from 'vitest';
import { ExampleStateContext, useExampleState } from './example-state';

Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });

it('updates only the changed example and restores values after recycling', async () => {
  const store = new Map<string, unknown>();
  const renders = { first: 0, second: 0 };
  let update!: React.Dispatch<React.SetStateAction<number>>;
  const Example = React.memo(function Example({
    id,
  }: {
    id: 'first' | 'second';
  }) {
    const [value, setValue] = useExampleState(id, 0);
    renders[id]++;
    if (id === 'first') update = setValue;
    return <output>{value}</output>;
  });
  const tree = (show: boolean) => (
    <ExampleStateContext.Provider value={store}>
      {show && <Example key="first" id="first" />}
      <Example key="second" id="second" />
    </ExampleStateContext.Provider>
  );
  let renderer!: ReactTestRenderer;
  await act(() => {
    renderer = create(tree(true));
  });
  const before = { ...renders };
  await act(() => {
    update(n => n + 1);
    update(n => n + 1);
  });
  expect(store.get('first')).toBe(2);
  expect(renders.first).toBeGreaterThan(before.first);
  expect(renders.second).toBe(before.second);
  const settled = renders.first;
  await act(() => update(2));
  expect(renders.first).toBe(settled);
  await act(() => renderer.update(tree(false)));
  await act(() => renderer.update(tree(true)));
  expect(renderer.root.findAllByType('output')[0]?.children).toEqual(['2']);
  expect(renderer.root.findAllByType('output')[1]?.children).toEqual(['0']);
  await act(() => renderer.unmount());
});
