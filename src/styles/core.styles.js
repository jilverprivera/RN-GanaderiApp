import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const coreStyles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: COLORS.auxiliar,
    padding: 10,
    borderRadius: 10,
    marginVertical: 0,
    fontSize: SIZES.regular,
    fontFamily: FONTS.regular,
    color: COLORS.black,
  },
  inputIOS: {
    borderColor: COLORS.gray,
    borderBottomWidth: 1.5,
    paddingBottom: 4,
  },
});
