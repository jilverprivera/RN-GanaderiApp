import React from 'react';
import {Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {COLORS} from '../../constants';
import {UIStyle} from '../../styles';

const List = ({navigation}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        overflow: 'hidden',
      }}>
      <View style={UIStyle.container}></View>
    </Animated.View>
  );
};

export default List;
