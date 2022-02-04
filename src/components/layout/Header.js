import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from '../../context/ThemeContext';
import {useHomeRoute} from '../../hooks/useHomeRoute';
import CustomDrawerBtn from '../drawer/CustomDrawerBtn';
import {GLOBALS} from '../../styles';
import {SIZES} from '../../constants';
import {AppContext} from '../../context/AppContext';

const Header = ({navigation, route}) => {
  const {modal} = useContext(AppContext);
  const {setModalIsOpen} = modal;

  const {Colors} = useContext(ThemeContext);

  const {isHome} = useHomeRoute(route);
  return (
    <View
      style={{
        ...styles.container,
        justifyContent: isHome ? 'space-between' : 'flex-start',
      }}>
      <CustomDrawerBtn navigation={navigation} />
      {isHome && (
        <>
          <View>
            <Text
              style={{
                ...GLOBALS.lightFamily,
                fontSize: SIZES.small,
                color: Colors.secondary,
              }}>
              GanaderiApp
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setModalIsOpen(true)}
            style={styles.notificationBtn}>
            <Icon name="bell" color={Colors.secondary} size={24} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.9,
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  notificationBtn: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
