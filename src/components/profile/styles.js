import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants';
import {GLOBALS} from '../../styles';

export const PROFILE_STYLES = StyleSheet.create({
  configurationContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  userContainer: {
    width: SIZES.width * 0.8,
    alignSelf: 'center',
    paddingVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    ...GLOBALS.semiBoldFamily,
    textAlign: 'center',
    fontSize: SIZES.medium,
    marginBottom: 5,
  },
  userCategory: {
    ...GLOBALS.lightFamily,
    textAlign: 'center',
    fontSize: SIZES.small,
  },

  LogOutBtn: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 20,
  },
});
