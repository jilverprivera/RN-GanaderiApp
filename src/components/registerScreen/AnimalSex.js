import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {ThemeContext} from '../../context/ThemeContext';
import {AppContext} from '../../context/AppContext';
import {useCreateAnimal} from '../../hooks';

import { FONTS } from '../../constants';

import {REGISTER_STYLES} from './styles';
import {GLOBALS} from '../../styles';

const AnimalSex = () => {
  const {animal} = useContext(AppContext);
  const {Colors} = useContext(ThemeContext);
  const {sex} = animal;

  const {handleAnimalSex} = useCreateAnimal();
  return (
    <View>
      <Text
        style={{
          ...GLOBALS.regularFamily,
          color: Colors.secondary,
          marginBottom: 15,
        }}>
        Seleccione el sexo del animal
      </Text>
      <View
        style={{
          ...REGISTER_STYLES.animalSexWrapper,
          backgroundColor: Colors.primary,
        }}>
        <TouchableOpacity
          onPress={() => handleAnimalSex('male')}
          style={
            sex === 'male'
              ? {
                  ...REGISTER_STYLES.animalSexBtn,
                  backgroundColor: Colors.gray,
                }
              : {...REGISTER_STYLES.animalSexBtn}
          }>
          <Text
            style={
              sex === 'male'
                ? {
                    ...REGISTER_STYLES.animalSexText,
                    color: Colors.secondary,
                    fontFamily: FONTS.bold,
                  }
                : {...REGISTER_STYLES.animalSexText, color: Colors.secondary}
            }>
            Macho
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleAnimalSex('female')}
          style={
            sex === 'female'
              ? {
                  ...REGISTER_STYLES.animalSexBtn,
                  backgroundColor: Colors.gray,
                }
              : {...REGISTER_STYLES.animalSexBtn}
          }>
          <Text
            style={
              sex === 'female'
                ? {
                    ...REGISTER_STYLES.animalSexText,
                    color: Colors.secondary,
                    fontFamily: FONTS.bold,
                  }
                : {...REGISTER_STYLES.animalSexText, color: Colors.secondary}
            }>
            Hembra
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnimalSex;

const styles = StyleSheet.create({});
