/**
 * Medibee Global Theme & Brand Configuration
 * Centralized theme settings for branding, logos, and design tokens.
 */

export const themeConfig = {
  brand: {
    name: 'Medibee',
    fullName: 'Medibee Global',
    tagline: 'Healthcare, Connected.',
    description: 'Cross-border medical care coordination for Cambodian patients seeking trusted treatment in India.',
    logo: {
      src: '/logo-transparent.png',
      light: '/logo-transparent.png',
      dark: '/logo-transparent.png',
      alt: 'Medibee Global Logo',
      width: 1899,
      height: 420,
      aspectRatio: 4.52, // 1899 : 420
    },
  },
  colors: {
    primary: {
      50: '#edf5fd',
      100: '#d6e9fa',
      200: '#b0d5f5',
      300: '#7ebbee',
      400: '#4b9ee5',
      500: '#1b5fae', // Deep Blue (for "Medi", "global", and globe icon)
      600: '#164e91',
      700: '#133f76',
      800: '#113562',
      900: '#112e52',
      950: '#0b1c36',
    },
    accent: {
      50: '#f4faf0',
      100: '#e5f5dc',
      200: '#cbedbd',
      300: '#a9e092',
      400: '#7ac143', // Lime/Leaf Green (for "bee" and swoosh)
      500: '#68a637',
      600: '#52852a',
      700: '#406723',
      800: '#355320',
      900: '#2d461e',
      950: '#14270c',
    },
    gradientCross: {
      start: '#2fb6a6', // Teal/Cyan (top-left)
      end: '#3a8fce',   // Sky Blue (bottom-right)
      angle: '135deg',
    },
  },
} as const;

export type ThemeConfig = typeof themeConfig;
