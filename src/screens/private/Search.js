import React from 'react';
import {Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Header from '../../components/ui/Header';
import {COLORS} from '../../constants';
import {UIStyle} from '../../styles';

const Search = ({navigation, animated}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        ...animated,
      }}>
      <View style={UIStyle.container}></View>
    </Animated.View>
  );
};

export default Search;
