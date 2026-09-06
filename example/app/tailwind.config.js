const colors = [
  'background',
  'foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'destructive',
  'destructive-foreground',
  'border',
  'input',
  'ring',
];
module.exports = {
  content: [
    './App.tsx',
    './src/**/*.{ts,tsx}',
    '../../packages/native/src/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: Object.fromEntries(
        colors.map(name => [name, `rgb(var(--${name}) / <alpha-value>)`]),
      ),
    },
  },
  plugins: [],
};
