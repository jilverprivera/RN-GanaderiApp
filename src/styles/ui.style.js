import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const UIStyle = StyleSheet.create({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: SIZES.width,
    height: SIZES.height * 0.4,
    backgroundColor: COLORS.lime,
  },
  header: {
    position: 'relative',
    width: SIZES.width * 0.9,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  global: {
    flex: 1,
    width: SIZES.width,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },

  container: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
  },

  text: {
    color: COLORS.black,
    fontSize: SIZES.regular,
    fontFamily: FONTS.regular,
  },
});
