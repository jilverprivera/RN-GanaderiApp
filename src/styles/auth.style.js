import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const authStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backBtn: {
    position: 'absolute',
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  message: {
    color: COLORS.black,
    fontFamily: FONTS.semibold,
    fontSize: SIZES.large,
    marginBottom: 5,
  },
  auxiliarMessage: {
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize: SIZES.regular,
    marginBottom: 30,
  },

  keyboardContainer: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
  },

  btnSign: {
    // position: 'absolute',
    // bottom: 50,
    marginTop: 50,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lime,
    paddingVertical: 15,
    marginTop: 50,
    borderRadius: 20,
  },
});
