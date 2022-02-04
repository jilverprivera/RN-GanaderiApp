import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../constants';

export const GLOBALS = StyleSheet.create({
  container: {
    width: SIZES.width,
    flex: 1,

    // alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  wrapper: {
    width: SIZES.width * 0.9,
    flex: 1,
    alignSelf: 'center',
  },

  // <--- FONTS --->
  lightFamily: {
    fontSize: SIZES.regular,
    fontFamily: FONTS.light,
  },
  regularFamily: {
    fontSize: SIZES.regular,
    fontFamily: FONTS.regular,
  },
  mediumFamily: {
    fontSize: SIZES.regular,
    fontFamily: FONTS.medium,
  },
  semiBoldFamily: {
    fontSize: SIZES.regular,
    fontFamily: FONTS.semibold,
  },
});
