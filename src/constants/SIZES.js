import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const SIZES = {
  width,
  height,
  // <---- SIZES | 14, 16, 18, 22, 32, 64 ---->
  extraLarge: 64,
  large: 32,
  semiLarge: 22,
  medium: 18,
  regular: 16,
  small: 14,
};
