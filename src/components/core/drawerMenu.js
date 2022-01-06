import React, {useContext} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {AuthContext} from '../../context/AuthContext';

import {COLORS, FONTS, SIZES} from '../../constants';

const principalScreens = [
  {icon: 'home', name: 'Inicio', route: 'HomeScreen'},
  {icon: 'user-alt', name: 'Perfil', route: 'ProfileScreen'},
  {icon: 'list', name: 'Listado de animales', route: 'ListScreen'},
  {icon: 'chart-line', name: 'Estadisticas', route: 'AnalyticScreen'},
];

const secondaryScreens = [
  {icon: 'plus', name: 'Nuevo registro', route: 'NewRegisterScreen'},
  {icon: 'search', name: 'Buscar', route: 'SearchScreen'},
  {icon: 'question', name: 'Buscar', route: 'InformationScreen'},
];

const DrawerMenu = ({navigation}) => {
  const {SignOut} = useContext(AuthContext);
  return (
    <DrawerContentScrollView>
      <View style={menu.icon} />

      {principalScreens.map(screen => (
        <TouchableOpacity
          key={screen.route}
          style={menu.route}
          activeOpacity={0.7}
          onPress={() => navigation.navigate(screen.route)}>
          <View style={menu.iconWrapper}>
            <Icon name={screen.icon} size={25} color={COLORS.white} />
          </View>
          <Text style={menu.routeText}>{screen.name}</Text>
        </TouchableOpacity>
      ))}

      <View style={menu.separator} />

      {secondaryScreens.map(screen => (
        <TouchableOpacity
          key={screen.route}
          style={menu.route}
          activeOpacity={0.7}
          onPress={() => navigation.navigate(screen.route)}>
          <View style={menu.iconWrapper}>
            <Icon name={screen.icon} size={25} color={COLORS.white} />
          </View>
          <Text style={menu.routeText}>{screen.name}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={menu.route}
        activeOpacity={0.7}
        onPress={() => SignOut()}>
        <View style={menu.iconWrapper}>
          <Icon name="sign-out-alt" size={25} color={COLORS.white} />
        </View>
        <Text style={menu.routeText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default DrawerMenu;

const menu = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    borderWidth: 1,
    marginVertical: 40,
    borderRadius: 5,
    alignSelf: 'center',
  },
  separator: {
    marginVertical: 10,
    borderWidth: 0.25,
    width: '90%',
    alignSelf: 'center',
    borderColor: COLORS.lime,
  },

  route: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 0,
    paddingHorizontal: 5,
    // borderWidth: 1,
    alignItems: 'center',
  },
  iconWrapper: {
    width: 45,
    height: 45,
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
