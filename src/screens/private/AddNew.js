import React, {useContext} from 'react';
import {Switch, Text, TextInput, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Header from '../../components/ui/Header';
import {COLORS} from '../../constants';
import {AppContext} from '../../context/AppContext';
import {AddNewStyle, UIStyle} from '../../styles';
import BornAnimal from '../../components/new/bornAnimal';
import BoughtAnimal from '../../components/new/boughtAnimal';

const AddNew = ({navigation, animated}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        ...animated,
      }}>
      <View style={UIStyle.container}>

        <Text style={AddNewStyle.title}>Datos Basicos</Text>

        <Text style={AddNewStyle.sectionTitle}>Nombre</Text>
        <TextInput />
        <Text style={AddNewStyle.sectionTitle}>Sexo</Text>
        <View style={AddNewStyle.wrapper}>
          <Text style={AddNewStyle.text}>Hembra</Text>
          <Switch />
        </View>
        <View style={AddNewStyle.wrapper}>
          <Text style={AddNewStyle.text}>Macho</Text>
          <Switch />
        </View>
        <BornAnimal />
        <BoughtAnimal/>
      </View>
    </Animated.View>
  );
};

export default AddNew;
