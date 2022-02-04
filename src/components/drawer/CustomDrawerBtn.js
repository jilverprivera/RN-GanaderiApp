import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext';

const CustomDrawerBtn = ({navigation}) => {
  const {Colors} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.8}
      onPress={() => navigation.toggleDrawer()}>
      <View
        style={{...styles.line, width: 40, borderColor: Colors.secondary}}
      />
      <View
        style={{...styles.line, width: 30, borderColor: Colors.secondary}}
      />
    </TouchableOpacity>
  );
};

export default CustomDrawerBtn;

const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  line: {
    width: 40,
    height: 2,
    borderWidth: 2,
    marginVertical: 3,
    borderRadius: 2,
  },
});
