import React, {createContext, useEffect, useState} from 'react';
import {Appearance} from 'react-native';

const darkTheme = {
  background: '#22282c',

  primary: '#373D41',
  secondary: '#FFFFFF',

  gray: '#8A8C90',
  lime: '#06D6A0',
  red: '#EF476F',
  yellow: '#FFD166',
};

const lightTheme = {
  background: '#F7F7F7',

  primary: '#FFFFFF',
  secondary: '#0C0F16',

  gray: '#9E9E9E',
  lime: '#99EE99',
  red: '#EF476F',
  yellow: '#FFD166',
};

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [Colors, setColors] = useState(lightTheme);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (Appearance.getColorScheme() === 'light') {
      setLightTheme();
      setDarkMode(false);
    } else {
      setDarkTheme();
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, [darkMode]);

  const setDarkTheme = () => {
    setColors({...darkTheme});
  };

  const setLightTheme = () => {
    setColors({...lightTheme});
  };

  const state = {
    darkMode,
    Colors,
    handleDarkMode,
  };
  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};
