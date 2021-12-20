import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const menu = StyleSheet.create({
  global: {
    flex: 1,
    width: '65%',
    backgroundColor: COLORS.green,
    borderWidth: 1,
  },

  container: {flex: 1, width: '90%', alignSelf: 'center'},
  appIconWrapper: {
    marginVertical: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  appIcon: {width: 50, height: 50, borderRadius: 40, marginHorizontal: 20},
  appName: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.h2,
    color: COLORS.white,
    letterSpacing: 3,
  },
  routeButton: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    // borderWidth: 1
  },
  iconWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginRight: 5,
  },
  routeText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.regular,
    color: COLORS.white,
  },
});
