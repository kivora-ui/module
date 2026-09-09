import * as React from 'react';
import { act, create, type ReactTestRenderer } from 'react-test-renderer';
import { expect, it, vi } from 'vitest';
import type { LucideIcon, LucideProps } from 'lucide-react-native';

const theme = vi.hoisted(() => ({ resolvedColorMode: 'dark' }));
vi.mock('../../../packages/native/src/provider', () => ({ useKivoraTheme: () => theme }));
import { Icon } from '../../../packages/native/src/components/icon';

Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
const Glyph = React.forwardRef((props: LucideProps, ref: React.Ref<unknown>) =>
  React.createElement('svg', { ...props, ref })
) as LucideIcon;

it('adapts to the theme and exposes labeled icons while hiding decorations', async () => {
  let tree!: ReactTestRenderer;
  await act(() => { tree = create(<Icon icon={Glyph} />); });
  try {
    expect(tree.root.findByType('svg').props).toMatchObject({
      size: 24, color: '#fafafa', accessible: false,
      importantForAccessibility: 'no-hide-descendants', accessibilityElementsHidden: true,
    });
    theme.resolvedColorMode = 'light';
    await act(() => tree.update(<Icon icon={Glyph} label="Completado" size={32} strokeWidth={3} />));
    expect(tree.root.findByType('svg').props).toMatchObject({
      color: '#171717', size: 32, strokeWidth: 3, accessible: true,
      accessibilityLabel: 'Completado', accessibilityRole: 'image', accessibilityElementsHidden: false,
    });
    await act(() => tree.update(<Icon icon={Glyph} accessibilityLabel="Favorito" color="red" />));
    expect(tree.root.findByType('svg').props).toMatchObject({
      accessible: true, accessibilityLabel: 'Favorito', color: 'red',
    });
  } finally {
    await act(() => tree.unmount());
    theme.resolvedColorMode = 'dark';
  }
});
