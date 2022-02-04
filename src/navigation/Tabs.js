import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  AnalyticScreen,
  HomeScreen,
  AnimalsScreen,
  NewRegisterScreen,
  ProfileScreen,
} from '../screens/private';
import {COLORS} from '../constants';
import {ThemeContext} from '../context/ThemeContext';

const Tabs = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => {
    const {Colors} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.button}>
      <View style={{...styles.container, backgroundColor: Colors.lime}}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const TabsNavigation = () => {
  const {Colors} = useContext(ThemeContext);
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: [{...styles.tabBarStyle, backgroundColor: Colors.primary}],
        tabBarIcon: ({focused}) => {
          let iconName = '';
          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home';
              break;

            case 'ProfileScreen':
              iconName = 'user-alt';
              break;

            case 'AnalyticScreen':
              iconName = 'chart-line';
              break;

            case 'AnimalsScreen':
              iconName = 'th-large';
              break;
          }
          return (
            <Icon
              name={iconName}
              size={24}
              color={focused ? Colors.lime : Colors.gray}
            />
          );
        },
      })}
      initialRouteName="HomeScreen">
      <Tabs.Screen name="HomeScreen" component={HomeScreen} />
      <Tabs.Screen name="AnimalsScreen" component={AnimalsScreen} />
      <Tabs.Screen
        name="NewRegisterScreen"
        component={NewRegisterScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="plus"
              size={35}
              color={focused ? Colors.secondary : Colors.gray}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen name="AnalyticScreen" component={AnalyticScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    // left: 20,
    // right: 20,
    height: 65,
    borderTopWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white,
    
  },
  button: {
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 60,
    height: 60,
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
