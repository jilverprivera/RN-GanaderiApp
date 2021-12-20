import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {authStyle} from '../../styles';

export const Input = ({
  name,
  keyboardType,
  secureEntry,
  onChange,
  valueType,
  capitalize,
  small,
}) => {
  return (
    <View style={authStyle.inputWrapper}>
      <Text style={small ? authStyle.inputSmallText : authStyle.inputText}>
        {name}
      </Text>
      <TextInput
        style={authStyle.textInput}
        keyboardType={keyboardType}
        secureTextEntry={secureEntry}
        autoCapitalize={capitalize}
        onChangeText={value => onChange(value, valueType)}
      />
    </View>
  );
};
