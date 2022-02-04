import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from '../../context/ThemeContext';

import {SIZES} from '../../constants';

import {GLOBALS} from '../../styles';

const Button = ({title, iconName}) => {
  const {Colors} = useContext(ThemeContext);
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.iconContainer}>
          <Icon name={iconName} color={Colors.secondary} size={24} />
        </View>
        <Text
          style={{
            ...GLOBALS.semiBoldFamily,
            marginLeft: 10,
            color: Colors.secondary,
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{...styles.iconArrowContainer, backgroundColor: Colors.primary}}>
        <Icon name="chevron-right" color={Colors.secondary} size={28} />
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  iconContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconArrowContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
  },
});
