import * as React from 'react';
import { act, create, type ReactTestRenderer } from 'react-test-renderer';
import { expect, it, vi } from 'vitest';

vi.mock('react-native', () => ({
  Pressable: React.forwardRef((props: Record<string, unknown>, ref: React.ForwardedRef<unknown>) => {
    React.useImperativeHandle(ref, () => ({ measureInWindow: vi.fn() }), []);
    return React.createElement('button', props);
  }),
  View: 'view', StyleSheet: { absoluteFill: {} },
}));
vi.mock('react-native-safe-area-context', () => ({ useSafeAreaInsets: vi.fn() }));
vi.mock('react-native-reanimated', () => ({ useReducedMotion: vi.fn() }));
vi.mock('react-native-keyboard-controller', () => ({ KeyboardProvider: 'provider' }));
import { Popover, PopoverTrigger, PopoverClose } from '../../../packages/native/src/components/popover';
import { Pressable } from 'react-native';
import { Tooltip, TooltipTrigger } from '../../../packages/native/src/components/tooltip';

Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
const event = () => ({ defaultPrevented: false, preventDefault() { this.defaultPrevented = true; } });

it('keeps a long-pressed tooltip open on release and closes automatically', async () => {
  vi.useFakeTimers();
  let tree!: ReactTestRenderer;
  try {
    const childLongPress = vi.fn();
    await act(() => { tree = create(<Tooltip><TooltipTrigger asChild>
      <Pressable onLongPress={childLongPress} />
    </TooltipTrigger></Tooltip>); });
    const button = tree.root.findByType('button');
    expect(tree.root.findAllByType('button')).toHaveLength(1);
    await act(() => button.props.onPressIn(event()));
    await act(() => button.props.onLongPress(event()));
    await act(() => button.props.onPress(event()));
    expect(childLongPress).toHaveBeenCalledOnce();
    expect(button.props.accessibilityState.expanded).toBe(true);
    await act(() => { vi.advanceTimersByTime(5000); });
    expect(button.props.accessibilityState.expanded).toBe(false);
    await act(() => button.props.onPressIn(event()));
    await act(() => button.props.onPress(event()));
    expect(button.props.accessibilityState.expanded).toBe(true);
  } finally {
    if (tree) await act(() => tree.unmount());
    vi.useRealTimers();
  }
});

it('composes asChild without an extra touch target and preserves the child ref', async () => {
  const ref = React.createRef<React.ComponentRef<typeof Pressable>>();
  const onPress = vi.fn();
  let tree!: ReactTestRenderer;
  await act(() => { tree = create(<Popover><PopoverTrigger asChild>
    <Pressable ref={ref} onPress={onPress} accessibilityLabel="Open" />
  </PopoverTrigger></Popover>); });
  const button = tree.root.findByType('button');
  expect(tree.root.findAllByType('button')).toHaveLength(1);
  expect(ref.current).not.toBeNull();
  await act(() => button.props.onPress(event()));
  expect(onPress).toHaveBeenCalledOnce();
  expect(button.props.accessibilityState.expanded).toBe(true);
  await act(() => tree.unmount());
  expect(ref.current).toBeNull();
});

it('allows a child handler to prevent opening', async () => {
  const onOpenChange = vi.fn();
  let tree!: ReactTestRenderer;
  await act(() => { tree = create(<Popover onOpenChange={onOpenChange}><PopoverTrigger asChild>
    <Pressable onPress={e => e.preventDefault()} />
  </PopoverTrigger></Popover>); });
  await act(() => tree.root.findByType('button').props.onPress(event()));
  expect(onOpenChange).not.toHaveBeenCalled();
  await act(() => tree.unmount());
});

it('respects controlled open state and reports close requests', async () => {
  const onOpenChange = vi.fn();
  let tree!: ReactTestRenderer;
  await act(() => { tree = create(<Popover open onOpenChange={onOpenChange}>
    <PopoverTrigger /><PopoverClose />
  </Popover>); });
  await act(() => tree.root.findAllByType('button')[1]!.props.onPress(event()));
  expect(onOpenChange).toHaveBeenCalledWith(false);
  expect(tree.root.findAllByType('button')[0]!.props.accessibilityState.expanded).toBe(true);
  await act(() => tree.unmount());
});
