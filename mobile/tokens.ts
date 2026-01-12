/**
 * Design Tokens for React Native
 * Generated from design-tokens.json
 */

import tokens from '../design-tokens.json';

// Export with proper TypeScript types
export interface ColorTokens {
  brand: {
    primary: string;
    secondary: string;
  };
  accent: {
    green100: string;
    green300: string;
    green500: string;
    green700: string;
    green900: string;
  };
  text: {
    default: string;
    subtle: string;
    inverse: string;
    error: string;
    success: string;
    link: string;
  };
  background: {
    page: string;
    card: string;
    focus: string;
    successLight: string;
    subtle: string;
  };
  border: {
    light: string;
    medium: string;
  };
}

export interface SpacingTokens {
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
}

export interface TypographyTokens {
  fontFamily: string;
  fontSize: {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
  };
  fontWeight: {
    regular: string;
    semibold: string;
    bold: string;
  };
}

export interface ShadowToken {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export interface ShadowTokens {
  default: ShadowToken;
  lifted: ShadowToken;
  card: ShadowToken;
  cardLg: ShadowToken;
}

export interface DesignTokens {
  color: ColorTokens;
  spacing: SpacingTokens;
  typography: TypographyTokens;
  shadow: ShadowTokens;
}

export const designTokens: DesignTokens = tokens as DesignTokens;

// Re-export for convenience
export const { color, spacing, typography, shadow } = designTokens;

export default designTokens;
