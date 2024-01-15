import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {appStyles} from 'shared';

type Props = {};
const Home: FC<Props> = () => {
  return (
    <View style={appStyles.center}>
      <Text>Home</Text>
    </View>
  );
};
export default Home;
