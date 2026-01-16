/**
 * Tailwind CSS Preset for ProtocolSync Web Projects
 * Auto-consumes design tokens from design-tokens.json
 *
 * Usage in consuming projects:
 *   import sharedPreset from '@protocolsync/shared-styles/tailwind-preset';
 *   export default { presets: [sharedPreset], ... }
 */

const tokens = require('../design-tokens.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: tokens.color.brand.primary,
          secondary: tokens.color.brand.secondary,
          accentGreen: {
            DEFAULT: tokens.color.brand.accentGreen,
            100: tokens.color.accent.green100,
            300: tokens.color.accent.green300,
            500: tokens.color.accent.green500,
            700: tokens.color.accent.green700,
            900: tokens.color.accent.green900,
          },
        },
        text: {
          DEFAULT: tokens.color.text.default,
          subtle: tokens.color.text.subtle,
          inverse: tokens.color.text.inverse,
          error: tokens.color.text.error,
          success: tokens.color.text.success,
          link: tokens.color.text.link,
        },
        background: {
          page: tokens.color.background.page,
          card: tokens.color.background.card,
          focus: tokens.color.background.focus,
          successLight: tokens.color.background.successLight,
          subtle: tokens.color.background.subtle,
        },
        border: {
          light: tokens.color.border.light,
          medium: tokens.color.border.medium,
        },
      },
      fontFamily: {
        sans: [tokens.typography.fontFamily.primary, 'sans-serif'],
      },
      fontSize: {
        xxs: [`${tokens.typography.fontSize.xxs / 16}rem`, { lineHeight: '1.4' }],
        xs: [`${tokens.typography.fontSize.xs / 16}rem`, { lineHeight: '1.4' }],
        s: [`${tokens.typography.fontSize.s / 16}rem`, { lineHeight: '1.5' }],
        m: [`${tokens.typography.fontSize.m / 16}rem`, { lineHeight: '1.5' }],
        l: [`${tokens.typography.fontSize.l / 16}rem`, { lineHeight: '1.3' }],
        xl: [`${tokens.typography.fontSize.xl / 16}rem`, { lineHeight: '1.2' }],
        xxl: [`${tokens.typography.fontSize.xxl / 16}rem`, { lineHeight: '1.1' }],
      },
      fontWeight: {
        regular: tokens.typography.fontWeight.regular,
        semibold: tokens.typography.fontWeight.semibold,
        bold: tokens.typography.fontWeight.bold,
      },
      spacing: {
        xxs: `${tokens.spacing.xxs / 16}rem`,
        xs: `${tokens.spacing.xs / 16}rem`,
        s: `${tokens.spacing.s / 16}rem`,
        m: `${tokens.spacing.m / 16}rem`,
        l: `${tokens.spacing.l / 16}rem`,
        xl: `${tokens.spacing.xl / 16}rem`,
      },
      borderRadius: {
        none: '0',
        DEFAULT: '4px',
        round: '50%',
      },
      boxShadow: {
        default: '0 2px 4px rgba(0, 0, 0, 0.1)',
        lifted: '0 8px 16px rgba(0, 0, 0, 0.15)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
};
