import {createDrawerNavigator} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import React, {useState} from 'react';

import DrawerMenu from '../components/ui/DrawerMenu';
import {AddNew, Detail, Home, List, Search, Resume} from '../screens/private';

import {COLORS} from '../constants';
import {menu} from '../components/ui/styles';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <Drawer.Navigator
      // hideStatusBar
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={menu.global}
      contentContainerStyle={{flex: 1}}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}
      sceneContainerStyle={{backgroundColor: COLORS.green}}
      drawerContent={props => {
        setProgress(props.progress);
        return <DrawerMenu {...props} />;
      }}>
      <Drawer.Screen name="home">
        {props => <Home {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="list">
        {props => <List {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="search">
        {props => <Search {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="detail">
        {props => <Detail {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="addNew">
        {props => <AddNew {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="resume">
        {props => <Resume {...props} animated={animatedStyle} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
