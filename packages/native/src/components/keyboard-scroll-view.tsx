import * as React from "react";
import {
  KeyboardAwareScrollView,
  useFocusedInputHandler,
  useReanimatedFocusedInput,
  type KeyboardAwareScrollViewProps,
  type KeyboardAwareScrollViewRef,
} from "react-native-keyboard-controller";
import { runOnJS, useAnimatedReaction, useSharedValue } from "react-native-reanimated";

export type KeyboardScrollViewProps = KeyboardAwareScrollViewProps;
export type KeyboardScrollViewRef = KeyboardAwareScrollViewRef;

/** Keep the field's lower edge visible, not just the caret in a multiline input. */
export const KeyboardScrollView: React.ForwardRefExoticComponent<
  KeyboardScrollViewProps & React.RefAttributes<KeyboardScrollViewRef>
> = React.forwardRef<KeyboardScrollViewRef, KeyboardScrollViewProps>(
  ({ bottomOffset = 24, ...props }, ref) => {
    const { input } = useReanimatedFocusedInput();
    const selection = useSharedValue({ target: -1, bottom: 0 });
    const [remainingField, setRemainingField] = React.useState(0);

    useFocusedInputHandler({
      onSelectionChange: (event) => {
        "worklet";
        selection.value = { target: event.target, bottom: event.selection.end.y };
      },
    }, []);

    useAnimatedReaction(
      () => {
        const field = input.value;
        if (!field || field.target !== selection.value.target) return 0;
        // Very tall editors still need room for the current line; ordinary
        // inputs and textareas fit fully above the keyboard.
        return Math.min(160, Math.max(0, field.layout.height - selection.value.bottom));
      },
      (remaining, previous) => {
        if (remaining !== previous) runOnJS(setRemainingField)(remaining);
      },
    );

    return (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        {...props}
        ref={ref}
        bottomOffset={bottomOffset + remainingField}
      />
    );
  },
);
KeyboardScrollView.displayName = "KeyboardScrollView";
