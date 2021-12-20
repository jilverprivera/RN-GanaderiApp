import React from 'react';

import {useNavigation} from '@react-navigation/core';
import {Text, TouchableOpacity, View} from 'react-native';
import {Animal, UIStyle} from '../../styles';

const AnimalCard = ({item}) => {
  const {navigate} = useNavigation();

  const {name, sex, state, gain} = item;
  return (
    <TouchableOpacity
      style={Animal.card}
      activeOpacity={0.8}
      onPress={() => navigate('detail', {...item})}>
      <View style={Animal.nameContainer}>
        <View style={Animal.imageContainer}></View>
        <Text style={Animal.animalName}>{name}</Text>
      </View>
      <Text style={{...UIStyle.text, marginVertical: 3}}>Sexo: {sex}</Text>
      <Text style={{...UIStyle.text, marginVertical: 3}}>
        Estado: {state ? 'Vendido' : 'No vendido'}
      </Text>
      <Text style={{...UIStyle.text, marginVertical: 3}}>
        Estado: {gain !== '$0' ? gain : '$0'}
      </Text>
    </TouchableOpacity>
  );
};

export default AnimalCard;
