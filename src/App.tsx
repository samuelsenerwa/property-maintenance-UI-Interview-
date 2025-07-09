import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
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
    </Provider>
  );
}
