import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';
import {GLOBALS} from '../../styles';
import {REGISTER_STYLES} from './styles';

const SaveButton = ({func, form, date}) => {
  const {Colors} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={{...REGISTER_STYLES.btnSave, backgroundColor: Colors.lime}}
      onPress={() => func({...form, date})}>
      <Text style={{...GLOBALS.semiBoldFamily, color: Colors.secondary}}>
        Guardar
      </Text>
    </TouchableOpacity>
  );
};

export default SaveButton;

const styles = StyleSheet.create({});
