/**
 * NativeWind Preset for ProtocolSync Mobile (React Native)
 * Auto-consumes design tokens from design-tokens.json
 *
 * Usage in portal-mobile:
 *   const nativewindPreset = require('@protocolsync/shared-styles/mobile/nativewind-preset');
 *   module.exports = { presets: [nativewindPreset], ... }
 *
 * Note: NativeWind uses pixel values for spacing/fontSize (not rem)
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
        sans: [tokens.typography.fontFamily.primary],
        lato: [tokens.typography.fontFamily.primary],
      },
      fontSize: {
        // NativeWind uses pixel values for React Native
        xxs: tokens.typography.fontSize.xxs,
        xs: tokens.typography.fontSize.xs,
        s: tokens.typography.fontSize.s,
        m: tokens.typography.fontSize.m,
        l: tokens.typography.fontSize.l,
        xl: tokens.typography.fontSize.xl,
        xxl: tokens.typography.fontSize.xxl,
      },
      fontWeight: {
        regular: tokens.typography.fontWeight.regular,
        semibold: tokens.typography.fontWeight.semibold,
        bold: tokens.typography.fontWeight.bold,
      },
      spacing: {
        // Pixel values for React Native
        xxs: tokens.spacing.xxs,
        xs: tokens.spacing.xs,
        s: tokens.spacing.s,
        m: tokens.spacing.m,
        l: tokens.spacing.l,
        xl: tokens.spacing.xl,
      },
      borderRadius: {
        none: 0,
        DEFAULT: 4,
        md: 6,
        lg: 8,
        xl: 12,
        round: 9999,
      },
    },
  },
};
