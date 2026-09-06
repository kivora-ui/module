import { createRequire } from 'node:module';
import { defineConfig } from 'vitest/config';
const require = createRequire(import.meta.url);

// Library sources must use the app's React and native peers, as they do in Metro.
export default defineConfig({
  resolve: {
    alias: ['react', 'react/jsx-runtime', 'react-native', 'react-native-reanimated',
      'react-native-safe-area-context', 'react-native-keyboard-controller'].map(name => ({
        find: new RegExp(`^${name.replaceAll('/', '\\/')}$`), replacement: require.resolve(name),
      })),
  },
});
