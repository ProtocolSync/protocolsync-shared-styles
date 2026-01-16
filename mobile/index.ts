/**
 * Mobile Design System Entry Point
 * Export all mobile-specific design tokens and themes
 */

export { designTokens, color, spacing, typography, shadow } from './tokens';
export type { DesignTokens, ColorTokens, SpacingTokens, TypographyTokens, ShadowMobileTokens as ShadowTokens, ShadowMobileTokens, ShadowToken } from './tokens';
export { lightTheme, darkTheme } from './theme';

export { default as theme } from './theme';
