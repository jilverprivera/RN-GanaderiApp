import React, {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {menu} from './styles';
import {COLORS} from '../../constants';

const Screens = [
  {icon: 'home-outline', name: 'Inicio', route: 'home'},
  {icon: 'add-outline', name: 'Añadir nuevo', route: 'addNew'},
  {icon: 'analytics-outline', name: 'Estadisticas', route: 'resume'},
  {icon: 'list-outline', name: 'Tus animales', route: 'list'},
  {icon: 'search-outline', name: 'Buscar', route: 'search'},
];

const DrawerMenu = ({navigation}) => {
  return (
    <DrawerContentScrollView>
      <View style={menu.appIconWrapper}>
        <Image
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={menu.appIcon}
        />
        <Text style={menu.appName}>GanaderiApp</Text>
      </View>
      <View>
        {Screens.map(screen => (
          <TouchableOpacity
            key={screen.route}
            style={menu.routeButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate(screen.route)}>
            <View style={menu.iconWrapper}>
              <Ionicons name={screen.icon} size={30} color={COLORS.white} />
            </View>
            <Text style={menu.routeText}>{screen.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Text>Más</Text>
        {/* <TouchableOpacity
        //   key={screen.route}
          style={menu.routeButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate(screen.route)}>
          <View style={menu.iconWrapper}>
            <Ionicons name="" size={30} color={COLORS.white} />
          </View>
          <Text style={menu.routeText}>{screen.name}</Text>
        </TouchableOpacity> */}
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerMenu;
