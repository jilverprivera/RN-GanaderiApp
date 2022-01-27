import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/Stack';

import {AuthProvider} from './src/context/AuthContext';
import {AppProvider} from './src/context/AppContext';
import {ThemeProvider} from './src/context/ThemeContext';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppProvider>
          <ThemeProvider>
            <StackNavigation />
          </ThemeProvider>
        </AppProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
