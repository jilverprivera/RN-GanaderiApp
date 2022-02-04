import React from 'react';
import {Text, View} from 'react-native';

import Input from '../core/input';

import {authStyle} from '../../styles';

const AuthInput = ({
  name,
  keyboardType,
  secureEntry,
  onChange,
  valueType,
  capitalize,
}) => {
  return (
    <View style={authStyle.inputWrapper}>
      <Text style={authStyle.inputText}>{name}</Text>
      <Input
        keyboardType={keyboardType}
        secureEntry={secureEntry}
        onChange={onChange}
        valueType={valueType}
        capitalize={capitalize}
      />
    </View>
  );
};

export default AuthInput;
