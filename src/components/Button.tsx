import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
type Props = TouchableOpacityProps & {
  style?: ViewStyle;
  titleStyle?: TextStyle;
  title?: String;
};
const Button: FC<Props> = props => {
  const {style, titleStyle, title = 'Touch'} = props;
  const containerStyle = StyleSheet.flatten([styles.container, style]);
  const titleTextStyle = StyleSheet.flatten([styles.title, titleStyle]);

  return (
    <TouchableOpacity {...props} style={containerStyle}>
      <Text style={titleTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  title: {
    fontSize: 15,
    color: 'white',
  },
});
export default Button;
