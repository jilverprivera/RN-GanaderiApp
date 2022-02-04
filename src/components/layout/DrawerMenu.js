import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import ProfileButton from '../drawer/ProfileButton';
import ScreenButton from '../drawer/ScreenButton';

const screenList = [
  {iconName: 'home', name: 'Inicio', route: 'HomeScreen'},
  {iconName: 'th-large', name: 'Tus animales', route: 'AnimalListScreen'},
  {iconName: 'plus', name: 'Añadir nuevo', route: 'RegisterScreen'},
  {iconName: 'search', name: 'Buscar contacto', route: 'SearchScreen'},
  {iconName: 'info-circle', name: 'Ayuda', route: 'InformationScreen'},
];

const DrawerMenu = () => {
  return (
    <DrawerContentScrollView style={{flex: 1}}>
      <ProfileButton />

      {screenList.map(screen => (
        <ScreenButton key={screen.route} {...screen} />
      ))}
    </DrawerContentScrollView>
  );
};

export default DrawerMenu;
