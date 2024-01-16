import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from 'screens';

type RootProps = {
  Home: undefined;
};

const AuthStack = createNativeStackNavigator<RootProps>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={'Home'} component={Home} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
