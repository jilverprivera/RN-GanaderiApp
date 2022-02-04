import React, {useContext} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from '../../context/ThemeContext';

import {SIZES} from '../../constants';

import {GLOBALS} from '../../styles';

const DarkModeBtn = ({title, iconName}) => {
  const {darkMode, Colors, handleDarkMode} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
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
      <View style={{...styles.switchContainer, backgroundColor: Colors.primary}}>
        <Switch
          trackColor={{false: Colors.secondary, true: Colors.gray}}
          thumbColor={darkMode ? Colors.lime : Colors.gray}
          ios_backgroundColor={Colors.gray}
          onValueChange={() => handleDarkMode()}
          value={darkMode}
        />
      </View>
    </View>
  );
};

export default DarkModeBtn;

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

  switchContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
