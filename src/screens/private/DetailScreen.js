import React, {useContext} from 'react';
import Animated from 'react-native-reanimated';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {ThemeContext} from '../../context/ThemeContext';

import {GLOBALS} from '../../styles';

const DetailScreen = ({route, navigation}) => {
  const {Colors} = useContext(ThemeContext);
  //   const {name, uri} = route.params;

  return (
    <Animated.View
      style={{
        ...GLOBALS.container,
        backgroundColor: Colors.background,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={STYLES.btnBack}>
          <Icon name="arrow-left" size={28} color={Colors.secondary} />
        </View>
      </TouchableOpacity>
      {/* <Text>{name}</Text> */}
    </Animated.View>
  );
};

export default DetailScreen;

const STYLES = StyleSheet.create({
  btnBack: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
