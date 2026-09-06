import { vars } from 'nativewind';

export function themeVariables(dark: boolean) {
  const palette = dark
    ? {
        background: '20 20 20',
        foreground: '245 245 245',
        card: '30 30 30',
        primary: '237 237 237',
        contrast: '24 24 24',
        secondary: '43 43 43',
        muted: '170 170 170',
        border: '62 62 62',
      }
    : {
        background: '247 247 245',
        foreground: '24 24 24',
        card: '255 255 255',
        primary: '30 30 30',
        contrast: '255 255 255',
        secondary: '235 235 233',
        muted: '100 100 100',
        border: '216 216 214',
      };
  return vars({
    '--background': palette.background,
    '--foreground': palette.foreground,
    '--card': palette.card,
    '--card-foreground': palette.foreground,
    '--popover': palette.card,
    '--popover-foreground': palette.foreground,
    '--primary': palette.primary,
    '--primary-foreground': palette.contrast,
    '--secondary': palette.secondary,
    '--secondary-foreground': palette.foreground,
    '--muted': palette.secondary,
    '--muted-foreground': palette.muted,
    '--accent': palette.secondary,
    '--accent-foreground': palette.foreground,
    '--border': palette.border,
    '--input': palette.border,
    '--ring': palette.muted,
    '--destructive': dark ? '248 113 113' : '185 28 28',
    '--destructive-foreground': '255 255 255',
  });
}
