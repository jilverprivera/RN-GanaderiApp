import React from 'react';
import {Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {COLORS} from '../../constants';
import {UIStyle} from '../../styles';

const SearchScreen = ({navigation, animated}) => {
  return (
    <Animated.View
      style={{
        ...UIStyle.animatedContainer,
        ...animated,
      }}>
      <View></View>
    </Animated.View>
  );
};

export default SearchScreen;
