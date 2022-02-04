import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from '../../context/ThemeContext';

import {GLOBALS} from '../../styles';

const ScreenButton = ({name, iconName, route}) => {
  const {Colors} = useContext(ThemeContext);

  const {navigate} = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigate(route)}>
      <View style={styles.buttonContainer}>
        <View style={styles.icon}>
          <Icon name={iconName} size={24} color={Colors.secondary} />
        </View>
        <Text style={{...GLOBALS.mediumFamily, color: Colors.secondary}}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScreenButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  icon: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginRight: 5,
  },
});
