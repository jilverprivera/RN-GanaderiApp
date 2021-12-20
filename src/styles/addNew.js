import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const AddNewStyle = StyleSheet.create({
  title: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.regular,
    textTransform: 'uppercase',
    color: COLORS.black,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: "row"
  },
  sectionTitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.semiRegular,
    // textTransform: "uppercase",
    color: COLORS.black,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.regular,
    // textTransform: "uppercase",
    color: COLORS.black,
  },
});
