export const colors = ['background', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground', 'primary', 'primary-foreground', 'secondary', 'secondary-foreground', 'muted', 'muted-foreground', 'accent', 'accent-foreground', 'destructive', 'destructive-foreground', 'border', 'input', 'ring'];

export const webProvider = `'use client';
import { KivoraProvider } from '@kivora/nextjs';

export default function KivoraRoot({ children }) {
  return <KivoraProvider colorMode="system">{children}</KivoraProvider>;
}
`;

export const nativeProvider = `import { View, useColorScheme } from 'react-native';
import { vars } from 'nativewind';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { KivoraProvider } from '@kivora/native';
import './kivora.css';

export default function KivoraRoot({ children }) {
  const dark = useColorScheme() === 'dark';
  const foreground = dark ? '245 245 245' : '24 24 24';
  const card = dark ? '30 30 30' : '255 255 255';
  const secondary = dark ? '43 43 43' : '235 235 233';
  const border = dark ? '62 62 62' : '216 216 214';
  const theme = vars({
    '--background': dark ? '20 20 20' : '247 247 245',
    '--foreground': foreground,
    '--card': card,
    '--card-foreground': foreground,
    '--popover': card,
    '--popover-foreground': foreground,
    '--primary': dark ? '237 237 237' : '30 30 30',
    '--primary-foreground': dark ? '24 24 24' : '255 255 255',
    '--secondary': secondary,
    '--secondary-foreground': foreground,
    '--muted': secondary,
    '--muted-foreground': dark ? '170 170 170' : '100 100 100',
    '--accent': secondary,
    '--accent-foreground': foreground,
    '--destructive': dark ? '248 113 113' : '185 28 28',
    '--destructive-foreground': '255 255 255',
    '--border': border,
    '--input': border,
    '--ring': dark ? '170 170 170' : '100 100 100',
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <KeyboardProvider>
          <KivoraProvider colorMode="system">
            <View style={[{ flex: 1 }, theme]}>{children}</View>
          </KivoraProvider>
        </KeyboardProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
`;

export function provider(template, typed) {
  return typed ? template.replace('export default function', "import type { ReactNode } from 'react';\n\nexport default function").replace('({ children })', '({ children }: { children: ReactNode })') : template;
}
