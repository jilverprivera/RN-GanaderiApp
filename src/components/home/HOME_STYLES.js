import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';
import {GLOBALS} from '../../styles';

export const HOME_STYLES = StyleSheet.create({
  greetingContainer: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    marginVertical: 30,
  },
  greetingText: {
    ...GLOBALS.regularFamily,
    fontSize: SIZES.medium,
    marginBottom: 5,
  },
  userName: {...GLOBALS.semiBoldFamily, fontSize: SIZES.semiLarge},

  resumeText: {
    ...GLOBALS.mediumFamily,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    fontSize: SIZES.regular,
    marginBottom: 15,
  },
  selectorContainer: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding:10,
    borderRadius: 15,
    marginBottom:20
  },

  selector: {
    width: SIZES.width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 15,
  },

  carouselContainer: {
    height: 435,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
