import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';

import {FONTS, SIZES} from '../../constants';

const data = [
  {id: 1, name: 'Ingresos'},
  {id: 1, name: 'Gastos'},
  {id: 1, name: 'Animal'},
];

const Categories = () => {
  const {categories, setCategories} = useContext(AppContext);
  const {Colors} = useContext(ThemeContext);

  return (
    <View style={{...STYLES.container, backgroundColor: Colors.lime}}>
      {data.map((category, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          style={{
            ...STYLES.btn,
            backgroundColor:
              categories === index ? Colors.primary : 'transparent',
          }}
          onPress={() => setCategories(index)}>
          <Text
            style={{
              ...STYLES.btnText,
              color: Colors.secondary,
              fontFamily: categories === index ? FONTS.bold : FONTS.regular,
            }}>
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Categories;

const STYLES = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  btnText: {
    fontSize: SIZES.regular,
  },
});
