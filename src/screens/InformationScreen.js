import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {GLOBALS} from '../styles';
import {ThemeContext} from '../context/ThemeContext';

const InformationScreen = () => {
  const {Colors} = useContext(ThemeContext);
  return (
    <View style={{...GLOBALS.container, backgroundColor: Colors.background}}>
      <Text style={{...GLOBALS.mediumFamily, color: Colors.secondary}}>
        InformationScreen
      </Text>
    </View>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({});
