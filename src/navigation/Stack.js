import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';

import {AuthContext} from '../context/AuthContext';

import {Recovery, SignIn, SignUp} from '../screens/public';
import LoadingScreen from '../screens/LoadingScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const {userState} = useContext(AuthContext);

  if (userState.status === 'checking') return <LoadingScreen />;

  return (
    <Stack.Navigator
      initialRouteName="signIn"
      screenOptions={{headerShown: false}}>
      {userState.status === 'authenticated' ? (
        <Stack.Screen name="tabs" component={TabNavigation} />
      ) : (
        <>
          <Stack.Screen name="signIn" component={SignIn} />
          <Stack.Screen name="signUp" component={SignUp} />
          <Stack.Screen name="recovery" component={Recovery} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
