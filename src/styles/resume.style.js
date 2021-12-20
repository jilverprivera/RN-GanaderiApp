import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const resumeStyle = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: SIZES.medium,
    textTransform: 'uppercase',
    fontFamily: FONTS.semibold,
    color: COLORS.black,
    marginVertical: 10
  },
  gainContainer: {
    width: SIZES.width,
    backgroundColor: COLORS.lime,
    alignItems: 'center',
  },
  gainWrapper: {width: SIZES.width * 0.9, marginVertical: 40},
  investedWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  invested: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  gainTitle: {
    fontSize: SIZES.small,
    textTransform: 'uppercase',
    fontFamily: FONTS.regular,
    color: COLORS.black,
  },
  gainValue: {
    fontSize: SIZES.semiRegular,
    textTransform: 'uppercase',
    fontFamily: FONTS.semibold,
    color: COLORS.black,
  },
});
