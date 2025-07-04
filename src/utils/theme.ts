import { fonts } from './fonts';

// Typography styles using Outfit font
export const typography = {
  h1: {
    fontFamily: fonts.bold,
    fontSize: 28,
    lineHeight: 34,
  },
  h2: {
    fontFamily: fonts.bold,
    fontSize: 24,
    lineHeight: 30,
  },
  h3: {
    fontFamily: fonts.semiBold,
    fontSize: 20,
    lineHeight: 26,
  },
  h4: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    lineHeight: 24,
  },
  subtitle1: {
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 22,
  },
  subtitle2: {
    fontFamily: fonts.medium,
    fontSize: 14,
    lineHeight: 20,
  },
  body1: {
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontFamily: fonts.light,
    fontSize: 12,
    lineHeight: 16,
  },
  button: {
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 24,
  },
};

// Light mode colors
export const lightColors = {
  primary: '#2196F3',
  secondary: '#FF9800',
  background: '#F5F7FA',
  card: '#FFFFFF',
  text: '#333333',
  textSecondary: '#666666',
  border: '#E0E0E0',
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  iconBackground: '#F5F5F5',
};

// Dark mode colors
export const darkColors = {
  primary: '#2196F3',
  secondary: '#FF9800',
  background: '#121212',
  card: '#1E1E1E',
  text: '#FFFFFF',
  textSecondary: '#AAAAAA',
  border: '#333333',
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  iconBackground: '#333333',
};

// For backward compatibility
export const colors = lightColors;

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Border radius
export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 999,
};

// Theme object
export const theme = {
  light: {
    typography,
    colors: lightColors,
    spacing,
    borderRadius,
  },
  dark: {
    typography,
    colors: darkColors,
    spacing,
    borderRadius,
  },
};
