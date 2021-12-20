import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const Animal = StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.8,
    height: 210,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  nameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
  },
  animalName: {
    color: COLORS.black,
    fontSize: SIZES.medium,
    fontFamily: FONTS.medium,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#eee',
    marginRight: 10,
  },
});
