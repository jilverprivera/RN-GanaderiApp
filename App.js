import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/Stack';

import {AuthProvider} from './src/context/AuthContext';
import {AppProvider} from './src/context/AppContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppProvider>
          <StackNavigation />
        </AppProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
