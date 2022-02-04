import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {GLOBALS} from '../../styles';
import {ThemeContext} from '../../context/ThemeContext';

const ProfileEditScreen = () => {
  const {Colors} = useContext(ThemeContext);
  return (
    <View style={{...GLOBALS.container, backgroundColor: Colors.background}}>
      <Text style={{...GLOBALS.mediumFamily, color: Colors.secondary}}>
      ProfileEditScreen
      </Text>
    </View>
  );
};

export default ProfileEditScreen;

const styles = StyleSheet.create({});
