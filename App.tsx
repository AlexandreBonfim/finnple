import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

// me
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

// const App: React.FC = () => (
//   <NavigationContainer>
//     <StatusBar />
//     <Routes />
//   </NavigationContainer>
// );

// export default App;

  // *** Template from expo install ***
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}