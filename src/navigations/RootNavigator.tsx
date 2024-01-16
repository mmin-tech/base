import React from 'react';
import {AuthNavigator, MainNavigator} from 'navigations/index';

const RootNavigator = () => {
  const mode: string = 'loading';
  switch (mode) {
    case 'loading':
      return <MainNavigator />;
    case 'auth':
      return <AuthNavigator />;
    default:
      return <MainNavigator />;
  }
};

export default RootNavigator;
