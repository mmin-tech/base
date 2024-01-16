import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from 'screens';

type MainProps = {
  Home: undefined;
};
const MainStack = createNativeStackNavigator<MainProps>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTitleAlign: 'left',
      }}>
      <MainStack.Screen
        options={{headerShown: false}}
        name={'Home'}
        component={Home}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
