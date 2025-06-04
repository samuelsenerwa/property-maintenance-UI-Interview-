import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Navigation } from './navigation';
import { useFonts } from 'expo-font';
import { fontConfig } from './utils/fonts';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
  const [fontsLoaded] = useFonts(fontConfig);

  React.useEffect(() => {
    if (fontsLoaded) {
      // Only hide splash screen once fonts are loaded
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Don't render anything until fonts are loaded
  }

  return (
    <Navigation
      linking={{
        enabled: 'auto',
        prefixes: [
          // Match the scheme defined in app.json
          'propertymaintenance://',
        ],
      }}
      onReady={() => {
        // SplashScreen is now hidden in the useEffect above
      }}
    />
  );
}
