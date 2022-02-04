import {StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../constants';

export const REGISTER_STYLES = StyleSheet.create({
  galleryBtn: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  removeImageBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  image: {width: 150, height: 150, borderRadius: 15, marginBottom: 10},

  animalSexWrapper: {
    width: SIZES.width * 0.9,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 15,
  },

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
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
  },
  btnDateText: {
    fontSize: SIZES.regular,
  },

  btnSave: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginTop: 15,
    borderRadius: 10,
  },
  // <--- ANIMAL SEX --->

  animalSexBtn: {
    width: SIZES.width * 0.5 - 40,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  animalSexText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.regular,
  },
  sexTextActive: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.regular,
  },
});
