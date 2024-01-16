import React, {FC, useState} from 'react';
import {Appearance, StyleSheet, Text, View} from 'react-native';
import {Button, Container} from 'components';
import setColorScheme = Appearance.setColorScheme;
import {Canvas, Mask, Group, Circle, Rect} from '@shopify/react-native-skia';
import {useSharedValue, withSpring, withTiming} from 'react-native-reanimated';
import {appStyles, darkTheme, dimension, lightTheme} from 'shared';
import {wait} from 'utils';
type Props = {};
const r = 128;

const Home: FC<Props> = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const circle = useSharedValue(0);
  const onPress = () => {
    circle.value = withTiming(dimension.heightScreen * 2, {duration: 1000});
    const temp = theme === 'light' ? 'dark' : 'light';
    wait(500).then(() => {
      setColorScheme(temp);
    });
    wait(800).then(() => {
      setTheme(temp);
      circle.value = 0;
    });
  };
  const color =
    theme === 'dark'
      ? lightTheme.colors.background
      : darkTheme.colors.background;
  return (
    <Container style={appStyles.center}>
      <Canvas style={StyleSheet.absoluteFill} pointerEvents={'none'}>
        <Circle cx={r} cy={r} r={circle} color={color} />
      </Canvas>
      <Button title={theme?.toString()} onPress={onPress} />
      <Text>Home</Text>
    </Container>
  );
};
export default Home;
