import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from 'navigations';
import {darkTheme, lightTheme} from 'shared';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === 'dark' ? darkTheme : lightTheme}>
      <SafeAreaProvider style={{flex: 1}}>
        <StatusBar translucent backgroundColor={'transparent'} />
        <RootNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
