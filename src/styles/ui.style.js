import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const UIStyle = StyleSheet.create({
  animatedContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  container: {
    marginTop: 20,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // <--- TEXT --->
  lightText: {
    color: COLORS.black,
    fontSize: SIZES.regular,
    fontFamily: FONTS.light,
  },
  regularText: {
    color: COLORS.black,
    fontSize: SIZES.regular,
    fontFamily: FONTS.regular,
  },
  mediumText: {
    color: COLORS.black,
    fontSize: SIZES.regular,
    fontFamily: FONTS.medium,
  },
  semiBoldText: {
    color: COLORS.black,
    fontSize: SIZES.regular,
    fontFamily: FONTS.semibold,
  },
});
