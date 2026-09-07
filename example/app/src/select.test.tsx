import * as React from 'react';
import { act, create, type ReactTestRenderer } from 'react-test-renderer';
import { expect, it, vi } from 'vitest';

vi.mock('react-native', () => ({
  Pressable: 'button', Text: 'text', View: 'view',
  useWindowDimensions: () => ({ width: 390, height: 844 }),
}));
vi.mock('lucide-react-native/icons/chevron-down', () => ({ default: () => null }));
vi.mock('../../../packages/native/src/provider', () => ({ useKivoraTheme: () => ({ resolvedColorMode: 'dark' }) }));
vi.mock('../../../packages/native/src/components/bottom-sheet', () => ({
  BottomSheet: ({ open, children }: { open: boolean; children: React.ReactNode }) => open ? <>{children}</> : null,
}));
import { Text } from 'react-native';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../../packages/native/src/components/select';

Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });

it('renders plain format labels inside native Text and selects an option from the sheet', async () => {
  const onValueChange = vi.fn();
  let tree!: ReactTestRenderer;
  await act(() => { tree = create(
    <Select defaultValue="code128" onValueChange={onValueChange}>
      <SelectTrigger><SelectValue /></SelectTrigger>
      <SelectContent>
        <SelectItem value="code128">code128</SelectItem>
        <SelectItem value="ean13">ean13</SelectItem>
        <SelectItem value="custom"><Text>Custom label</Text></SelectItem>
      </SelectContent>
    </Select>,
  ); });
  try {
    await act(() => tree.root.findByType('button').props.onPress({}));
    const buttons = tree.root.findAllByType('button');
    expect(buttons).toHaveLength(4);
    expect(buttons[1].findByType('text').children).toEqual(['code128']);
    expect(buttons[2].findByType('text').children).toEqual(['ean13']);
    expect(buttons[3].findAllByType('text')).toHaveLength(1);
    await act(() => buttons[2].props.onPress({}));
    expect(onValueChange).toHaveBeenCalledWith('ean13');
    expect(tree.root.findAllByType('button')).toHaveLength(1);
    expect(tree.root.findByType('text').children).toEqual(['ean13']);
  } finally {
    await act(() => tree.unmount());
  }
});
