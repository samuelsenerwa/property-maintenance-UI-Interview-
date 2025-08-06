import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import { Navigation } from './navigation';
import { useFonts } from 'expo-font';
import { fontConfig } from './utils/fonts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { ThemeProvider } from './components/ThemeProvider';

Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
]);

SplashScreen.preventAutoHideAsync();

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

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
    <Provider store={store}>
      <ConvexProvider client={convex}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
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
        </ThemeProvider>
      </PersistGate>
    </ConvexProvider>
    </Provider>
  );
}
