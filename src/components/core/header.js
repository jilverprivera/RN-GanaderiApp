import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {COLORS, FONTS, SIZES} from '../../constants';

const Header = ({navigation, title}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...styles.container, top: top + 10}}>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.toggleDrawer()}>
        <Icon name="bars" size={32} color={COLORS.black} />
      </TouchableOpacity>

      {title && <Text style={styles.title}>{title}</Text>}
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('SearchScreen')}>
        <Icon name="search" size={28} color={COLORS.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: SIZES.width * 0.95,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttons: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.regular,
    color: COLORS.black,
  },
});
