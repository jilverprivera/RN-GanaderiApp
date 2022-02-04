import 'react-native-gesture-handler'
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';

import {AuthContext} from '../context/AuthContext';

import DrawerNavigation from './Drawer';
import LoadingScreen from '../screens/LoadingScreen';
import InformationScreen from '../screens/InformationScreen';
import {RecoveryScreen, SignInScreen, SignUpScreen, WelcomeScreen} from '../screens/public';
import {DetailScreen, ProfileEditScreen} from '../screens/private';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const {userState} = useContext(AuthContext);

  if (userState.status === 'checking') return <LoadingScreen />;

  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{headerShown: false}}>
      {userState.status === 'authenticated' ? (
        <>
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="ProfileEditScreen" component={ProfileEditScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />
        </>
      )}
      <Stack.Screen name="InformationScreen" component={InformationScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
