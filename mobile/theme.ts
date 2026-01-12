/**
 * React Native Paper Theme Configuration
 * Uses ProtocolSync design tokens for consistent branding
 */

import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import type { MD3Theme } from 'react-native-paper';
import { designTokens } from './tokens';

/**
 * Light theme for React Native Paper
 * Matches the web portal styling
 */
export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: designTokens.color.brand.primary,
    onPrimary: designTokens.color.text.inverse,
    primaryContainer: designTokens.color.accent.green100,
    onPrimaryContainer: designTokens.color.brand.primary,
    
    secondary: designTokens.color.brand.secondary,
    onSecondary: designTokens.color.text.inverse,
    secondaryContainer: designTokens.color.background.focus,
    onSecondaryContainer: designTokens.color.text.default,
    
    tertiary: designTokens.color.accent.green500,
    onTertiary: designTokens.color.text.inverse,
    tertiaryContainer: designTokens.color.accent.green100,
    onTertiaryContainer: designTokens.color.accent.green900,
    
    error: designTokens.color.text.error,
    onError: designTokens.color.text.inverse,
    errorContainer: '#FFDDDD',
    onErrorContainer: designTokens.color.text.error,
    
    background: designTokens.color.background.page,
    onBackground: designTokens.color.text.default,
    
    surface: designTokens.color.background.card,
    onSurface: designTokens.color.text.default,
    surfaceVariant: designTokens.color.background.subtle,
    onSurfaceVariant: designTokens.color.text.subtle,
    
    outline: designTokens.color.border.medium,
    outlineVariant: designTokens.color.border.light,
    
    inverseSurface: designTokens.color.brand.primary,
    inverseOnSurface: designTokens.color.text.inverse,
    inversePrimary: designTokens.color.accent.green100,
    
    shadow: '#000000',
    scrim: '#000000',
    
    // Custom colors
    backdrop: 'rgba(0, 0, 0, 0.5)',
    elevation: {
      level0: 'transparent',
      level1: designTokens.color.background.card,
      level2: designTokens.color.background.card,
      level3: designTokens.color.background.card,
      level4: designTokens.color.background.card,
      level5: designTokens.color.background.card,
    },
    surfaceDisabled: 'rgba(30, 58, 82, 0.12)',
    onSurfaceDisabled: 'rgba(30, 58, 82, 0.38)',
  },
};

/**
 * Dark theme for React Native Paper
 * Optional - for future dark mode support
 */
export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: designTokens.color.accent.green300,
    secondary: designTokens.color.brand.secondary,
    tertiary: designTokens.color.accent.green500,
    background: '#121212',
    surface: '#1E1E1E',
  },
};

// Default export is light theme
export default lightTheme;
