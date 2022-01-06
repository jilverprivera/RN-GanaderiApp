import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState} from 'react';
import Animated from 'react-native-reanimated';
import {StyleSheet} from 'react-native';

import DrawerMenu from '../components/core/drawerMenu';

import {
  AnalyticScreen,
  DetailScreen,
  HomeScreen,
  ListScreen,
  NewRegisterScreen,
  ProfileScreen,
  SearchScreen,
} from '../screens/private';

import {COLORS} from '../constants';

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
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={styles.container}
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
      <Drawer.Screen name="HomeScreen">
        {props => <HomeScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="ProfileScreen">
        {props => <ProfileScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="ListScreen">
        {props => <ListScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="AnalyticScreen">
        {props => <AnalyticScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="NewRegisterScreen">
        {props => <NewRegisterScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>
      <Drawer.Screen name="SearchScreen">
        {props => <SearchScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>

      <Drawer.Screen name="DetailScreen">
        {props => <DetailScreen {...props} animated={animatedStyle} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '65%',
    backgroundColor: COLORS.green,
  },
});
