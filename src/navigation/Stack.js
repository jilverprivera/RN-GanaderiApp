import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';

import {AuthContext} from '../context/AuthContext';

import DrawerNavigation from './Drawer';
import LoadingScreen from '../screens/LoadingScreen';
import {Recovery, SignIn, SignUp, WelcomeScreen} from '../screens/public';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const {userState} = useContext(AuthContext);

  if (userState.status === 'checking') return <LoadingScreen />;

  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{headerShown: false}}>
      {userState.status === 'authenticated' ? (
        <Stack.Screen name="drawer" component={DrawerNavigation} />
      ) : (
        <>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="SignInScreen" component={SignIn} />
          <Stack.Screen name="SignUpScreen" component={SignUp} />
          <Stack.Screen name="RecoveryScreen" component={Recovery} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
