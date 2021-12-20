import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../constants';
import {homeStyle} from '../../styles';
import {AppContext} from '../../context/AppContext';

const Buttons = () => {
  const {buttons} = useContext(AppContext);

  const {selected, setSelected} = buttons;

  return (
    <View style={homeStyle.btnContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          ...homeStyle.btn,
          backgroundColor: selected === 'animals' ? COLORS.green : COLORS.white,
        }}
        onPress={() => setSelected('animals')}>
        <MaterialCommunityIcons name="cow" size={30} color={COLORS.black} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          ...homeStyle.btn,
          backgroundColor: selected === 'gains' ? COLORS.green : COLORS.white,
        }}
        onPress={() => setSelected('gains')}>
        <MaterialCommunityIcons
          name="currency-usd"
          size={30}
          color={COLORS.black}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          ...homeStyle.btn,
          backgroundColor:
            selected === 'analytics' ? COLORS.green : COLORS.white,
        }}
        onPress={() => setSelected('analytics')}>
        <Ionicons name="analytics-outline" size={30} color={COLORS.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
