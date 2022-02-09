import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const registerStyle = StyleSheet.create({

// <--- DATE --->
  dateContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginVertical: 15,
  },
  btnDate: {
    backgroundColor: COLORS.yellow,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
  },
  btnDateText: {
    fontSize: SIZES.regular,
    color: COLORS.black,
  },


  btnSave: {
    width: '100%',
    backgroundColor: COLORS.lime,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginTop: 15,
    borderRadius: 10,
  },
// <--- ANIMAL SEX --->
  sexContainer: {
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 15,
  },
  sexButton: {
    width: SIZES.width * 0.5 - 40,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  sexButtonActive: {
    width: SIZES.width * 0.5 - 40,
    padding: 15,
    marginVertical: 10,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  sexText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.regular,
    color: COLORS.black,
  },
  sexTextActive: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.regular,
    color: COLORS.black,
  },
});
