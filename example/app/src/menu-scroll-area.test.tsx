import * as React from 'react';
import type { ScrollView, FlatList } from 'react-native';
import { act, create, type ReactTestRenderer } from 'react-test-renderer';
import { expect, it, vi } from 'vitest';

vi.mock('react-native', () => ({ Pressable: 'button', Text: 'text', View: 'view', ScrollView: 'section', FlatList: 'ul' }));
vi.mock('../../../packages/native/src/components/checkbox', () => ({ Checkbox: () => null }));
vi.mock('../../../packages/native/src/components/bottom-sheet', () => ({
  BottomSheet: ({ open, children }: { open: boolean; children: React.ReactNode }) => open ? <>{children}</> : null,
}));
import { Menu, MenuDropdown, MenuTrigger, MenuContent, MenuItem } from '../../../packages/native/src/components/menu';
import { ScrollArea } from '../../../packages/native/src/components/scroll-area';

Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });

for (const bar of [false, true]) {
  it(`opens and selects a native ${bar ? 'bar' : 'dropdown'} menu`, async () => {
    const onSelect = vi.fn();
    const content = <><MenuTrigger testID="trigger" /><MenuContent><MenuItem onSelect={onSelect} testID="action">Editar</MenuItem></MenuContent></>;
    let tree!: ReactTestRenderer;
    await act(() => { tree = create(bar ? <Menu variant="bar"><MenuDropdown>{content}</MenuDropdown></Menu> : <Menu>{content}</Menu>); });
    try {
      expect(tree.root.findAllByType('button')).toHaveLength(1);
      await act(() => tree.root.findByType('button').props.onPress({}));
      expect(tree.root.findAllByType('button')).toHaveLength(2);
      await act(() => tree.root.findAllByType('button')[1].props.onPress({}));
      expect(onSelect).toHaveBeenCalledOnce();
      expect(tree.root.findAllByType('button')).toHaveLength(1);
    } finally { await act(() => tree.unmount()); }
  });
}

it('switches between scrolling content and a virtual list while preserving the ref and list configuration', async () => {
  let tree!: ReactTestRenderer;
  const instance = { scrollTo: vi.fn(), scrollToIndex: vi.fn() };
  const ref = React.createRef<React.ComponentRef<typeof ScrollView>>();
  const listRef = React.createRef<FlatList<string>>();
  await act(() => { tree = create(<ScrollArea ref={ref}>Contenido</ScrollArea>, { createNodeMock: () => instance }); });
  try {
    expect(ref.current).toBe(instance);
    expect(tree.root.findByType('section').children).toEqual(['Contenido']);
    const renderItem = vi.fn(() => null);
    const data = ['uno', 'dos'];
    await act(() => tree.update(<ScrollArea virtualized data={data} renderItem={renderItem} ref={listRef} horizontal />));
    expect(tree.root.findAllByType('section')).toHaveLength(0);
    expect(tree.root.findByType('ul').props).toMatchObject({ data, renderItem, horizontal: true, keyboardShouldPersistTaps: 'handled' });
    expect(ref.current).toBeNull();
    expect(listRef.current).toBe(instance);
  } finally { await act(() => tree.unmount()); }
});
