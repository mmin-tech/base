import {DefaultTheme} from '@react-navigation/native';
import type {Theme} from '@react-navigation/native/src/types';

const defaultColor = {};
export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...defaultColor,
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export const darkTheme = {
  dark: false,
  colors: {
    ...defaultColor,
    primary: '#144272',
    background: '#0A2647',
    card: '#0A2647',
    border: '#2C74B3',
    text: 'white',
    notification: 'rgb(255, 59, 48)',
  },
};
