import React, {useContext, useState} from 'react';
import {StyleSheet} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {ThemeContext} from '../context/ThemeContext';
import DrawerMenu from '../components/layout/DrawerMenu';
import {
  AnimalListScreen,
  HomeScreen,
  ProfileScreen,
  RegisterScreen,
  SearchScreen,
} from '../screens/private';

import {SIZES} from '../constants';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const {Colors} = useContext(ThemeContext);

  const [progress, setProgress] = useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });
  const animatedStyle = {
    borderRadius,
    transform: [{scale}],
  };

  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={{...styles.container, backgroundColor: Colors.lime}}
      contentContainerStyle={{flex: 1}}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}
      sceneContainerStyle={{backgroundColor: Colors.lime}}
      initialRouteName="HomeScreen"
      drawerContent={props => {
        setProgress(props.progress);
        return <DrawerMenu {...props} />;
      }}>
      <Drawer.Screen name="HomeScreen">
        {props => <HomeScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="AnimalListScreen">
        {props => <AnimalListScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="ProfileScreen">
        {props => <ProfileScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="RegisterScreen">
        {props => <RegisterScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="SearchScreen">
        {props => <SearchScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '70%',
    // borderWidth: 1,
  },
});
