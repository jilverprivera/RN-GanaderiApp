import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants';

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.button}>
      <View style={styles.container}>{children}</View>
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;

const styles = StyleSheet.create({
  button: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.lime,
    justifyContent: 'center',
    alignItems: 'center',

    color: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 6,
  },
});
