import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {UIStyle} from '../../styles/ui.style';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header = ({navigation}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{top: top + 10, ...UIStyle.header}}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Ionicons name="grid-outline" size={30} color={COLORS.black} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Ionicons name="search-outline" size={30} color={COLORS.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
