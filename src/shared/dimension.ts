import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {RFValue} from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

const fontScale = (size: number) => {
  return RFValue(size);
};
export default {
  isTablet: DeviceInfo.isTablet(),
  appBar: Platform.select({android: 56, ios: 44}),
  input: height * 0.052,
  widthScreen: width,
  heightScreen: height,
  yottaLargeText: 36,
  zettaLargeText: 34,
  exaLargeText: 32,
  petaLargeText: 30,
  teraLargeText: 28,
  megaLargeText: 26,
  xxxLargeText: 24,
  xxLargeText: 22,
  xLargeText: 20,
  largeText: 18,
  mediumText: 16,
  normalText: 14,
  smallText: 12,
  tinyText: 10,
  atomText: 8,
  fontScale,
};
