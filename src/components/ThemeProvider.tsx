import React, { createContext, useContext, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { lightColors, darkColors } from '../utils/theme';
import { StatusBar } from 'react-native';
import { selectDarkMode } from '../store/slices/themeSlice';

// Create a theme context
interface ThemeContextType {
  colors: typeof lightColors;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  colors: lightColors,
  isDarkMode: false,
});

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Get dark mode state from Redux
  const isDarkMode = useSelector(selectDarkMode);
  
  // Select the appropriate color scheme
  const colors = isDarkMode ? darkColors : lightColors;
  
  // Value to be provided to consumers
  const themeContextValue = {
    colors,
    isDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <StatusBar 
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
        backgroundColor={colors.background}
      />
      {children}
    </ThemeContext.Provider>
  );
};
