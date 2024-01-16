import React, {FC, useState} from 'react';
import {Appearance, Text, View} from 'react-native';
import {appStyles} from 'shared';
import {Button} from 'components';
import setColorScheme = Appearance.setColorScheme;
import {Canvas, Mask, Group, Circle, Rect} from '@shopify/react-native-skia';

type Props = {};
const Home: FC<Props> = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const onPress = () => {
    const temp = theme === 'light' ? 'dark' : 'light';
    setTheme(temp);
    setColorScheme(temp);
  };

  return (
    <View>
      <Canvas style={{width: 256, height: 256}}>
        <Mask
          mode="luminance"
          mask={
            <Group>
              <Circle cx={128} cy={128} r={128} color="white" />
              <Circle cx={128} cy={128} r={64} color="black" />
            </Group>
          }>
          <Rect x={0} y={0} width={256} height={256} color="lightblue" />
        </Mask>
      </Canvas>
      <Button title={'Change'} onPress={onPress} />
      <Text>Home</Text>
    </View>
  );
};
export default Home;
