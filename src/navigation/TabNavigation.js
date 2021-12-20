import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomTabBarButton from '../components/navigation/CustomTabBarButton';

import {AddNew, Home, List, Resume, Search} from '../screens/private';

import {COLORS} from '../constants';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabContent,
        tabBarIcon: ({focused}) => {
          let iconName = '';
          switch (route.name) {
            case 'home':
              iconName = 'home-outline';
              break;

            case 'list':
              iconName = 'list-outline';
              break;

            case 'resume':
              iconName = 'analytics-outline';
              break;

            case 'search':
              iconName = 'search-outline';
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={30}
              color={focused ? COLORS.black : COLORS.gray}
            />
          );
        },
      })}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="list" component={List} />
      <Tab.Screen
        name="addNew"
        component={AddNew}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="add-outline"
              size={50}
              color={focused ? COLORS.black : COLORS.gray}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen name="resume" component={Resume} />
      <Tab.Screen name="search" component={Search} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabContent: {
    height: 60,
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    borderRadius: 10,
  },
});
