import React from 'react';
import {TextInput, Platform} from 'react-native';
import {COLORS} from '../../constants';
import {coreStyles} from '../../styles';

const Input = ({
  keyboardType,
  secureEntry,
  onChange,
  valueType,
  capitalize,
}) => {
  return (
    <TextInput
      style={[coreStyles.input, Platform.OS === 'ios' && coreStyles.inputIOS]}
      keyboardType={keyboardType}
      secureTextEntry={secureEntry}
      autoCapitalize={capitalize}
      onChangeText={value => onChange(value, valueType)}
      underlineColorAndroid={COLORS.gray}
    />
  );
};
export default Input;
