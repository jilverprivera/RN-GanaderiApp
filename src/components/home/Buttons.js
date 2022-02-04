import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import {UIStyle} from '../../styles';

const Buttons = ({selected, setSelected}) => {
  return (
    <View style={styles.lastMovementsWrapper}>
      <TouchableOpacity
        style={styles.movementBtn}
        activeOpacity={0.8}
        onPress={() => setSelected('all')}>
        <Text
          style={{
            ...UIStyle.semiBoldText,
            color: selected === 'all' ? COLORS.green : COLORS.gray,
          }}>
          Todos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.movementBtn}
        activeOpacity={0.8}
        onPress={() => setSelected('profits')}>
        <Text
          style={{
            ...UIStyle.semiBoldText,
            color: selected === 'profits' ? COLORS.green : COLORS.gray,
          }}>
          Ingresos
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.movementBtn}
        activeOpacity={0.8}
        onPress={() => setSelected('expenses')}>
        <Text
          style={{
            ...UIStyle.semiBoldText,
            color: selected === 'expenses' ? COLORS.green : COLORS.gray,
          }}>
          Gastos
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  lastMovementsWrapper: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  movementBtn: {
    paddingVertical: 10,
    marginRight: 15,
  },
});
