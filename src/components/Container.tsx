import React, {FC} from 'react';
import {KeyboardAvoidingView, Platform, View, ViewStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';

type Props = {
  children?: JSX.Element | JSX.Element[];
  style?: ViewStyle;
  removeIOS?: boolean;
  keyboardVerticalOffset?: number;
  backgroundColor?: string;
};
const Container: FC<Props> = ({
  style,
  children,
  removeIOS = false,
  keyboardVerticalOffset = 0,
}) => {
  const {colors} = useTheme();
  const backgroundColor = colors.background;
  return (
    <View style={{flex: 1}}>
      {!removeIOS && Platform.OS === 'ios' ? (
        <KeyboardAvoidingView
          style={{flex: 1}}
          keyboardVerticalOffset={keyboardVerticalOffset}
          behavior={'padding'}>
          <View style={[style, {backgroundColor: backgroundColor, flex: 1}]}>
            {children}
          </View>
        </KeyboardAvoidingView>
      ) : (
        <View style={[style, {backgroundColor: backgroundColor, flex: 1}]}>
          {children}
        </View>
      )}
    </View>
  );
};
export default Container;
