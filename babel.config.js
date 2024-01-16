module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components/index',
          '@shared': './src/shared/index',
          '@screens': './src/screens/index',
          '@navigations': './src/navigations/index',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
