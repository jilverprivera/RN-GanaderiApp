import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const homeStyle = StyleSheet.create({
 

  welcomeContainer: {
    width: '100%',
    marginVertical: 20,
  },

  principalText: {
    color: COLORS.black,
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
  },
  text: {
    color: COLORS.black,
    fontSize: SIZES.regular,
    fontFamily: FONTS.regular,
  },

  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
