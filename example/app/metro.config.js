const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const root = path.resolve(__dirname, '../..');
const singleton = [
  'react',
  'react-native',
  'nativewind',
  'react-native-css-interop',
  'react-native-reanimated',
  'react-native-worklets',
  'react-native-keyboard-controller',
  'react-native-svg',
  'react-native-video',
  'react-native-google-cast',
  'react-native-orientation-locker',
  'react-native-fs',
  '@kesha-antonov/react-native-background-downloader',
  'react-native-safe-area-context',
  'react-native-gesture-handler',
];
module.exports = withNativeWind(
  mergeConfig(getDefaultConfig(__dirname), {
    watchFolders: [
      path.join(root, 'packages'),
      path.join(root, 'node_modules'),
    ],
    resolver: {
      nodeModulesPaths: [
        path.join(__dirname, 'node_modules'),
        path.join(root, 'node_modules'),
      ],
      resolveRequest(context, moduleName, platform) {
        if (
          singleton.some(
            name => moduleName === name || moduleName.startsWith(name + '/'),
          )
        ) {
          return context.resolveRequest(
            { ...context, originModulePath: path.join(__dirname, 'index.js') },
            moduleName,
            platform,
          );
        }
        return context.resolveRequest(context, moduleName, platform);
      },
    },
  }),
  { input: './global.css', inlineRem: 16 },
);
