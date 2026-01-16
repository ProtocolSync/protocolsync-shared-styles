/**
 * Design Tokens Type Declarations
 * Auto-generated structure matching design-tokens.json
 */

export interface DesignTokens {
  color: {
    brand: {
      primary: string;
      secondary: string;
      accentGreen: string;
      accentGreen100: string;
      accentGreen300: string;
      accentGreen500: string;
      accentGreen700: string;
      accentGreen900: string;
    };
    accent: {
      green100: string;
      green300: string;
      green500: string;
      green600: string;
      green700: string;
      green900: string;
      blue500: string;
    };
    text: {
      default: string;
      heading: string;
      body: string;
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
      subtle: string;
    };
  };
  spacing: {
    xxs: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
  };
  typography: {
    fontFamily: {
      primary: string;
    };
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
  };
  borderRadius: {
    none: string;
    default: string;
    round: string;
  };
  shadow: {
    default: string;
    lifted: string;
  };
  shadowMobile: {
    default: ShadowToken;
    lifted: ShadowToken;
    card: ShadowToken;
    cardLg: ShadowToken;
  };
}

export interface ShadowToken {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export declare const designTokens: DesignTokens;
export default designTokens;
