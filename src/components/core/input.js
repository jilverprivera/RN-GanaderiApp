import React, {useContext} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {FONTS, SIZES} from '../../constants';
import {ThemeContext} from '../../context/ThemeContext';

const Input = ({
  keyboardType,
  secureEntry,
  onChange,
  valueType,
  capitalize,
  placeholder,
}) => {
  const {Colors} = useContext(ThemeContext);
  return (
    <TextInput
      style={{
        ...styles.input,
        backgroundColor: Colors.primary,
        color: Colors.secondary,
      }}
      keyboardType={keyboardType}
      secureTextEntry={secureEntry}
      autoCapitalize={capitalize}
      onChangeText={value => onChange(value, valueType)}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray}
    />
  );
};
export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',

    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: SIZES.regular,
    fontFamily: FONTS.regular,
  },
});
