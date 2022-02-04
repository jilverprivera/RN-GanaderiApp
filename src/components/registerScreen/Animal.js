import React, {useContext, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';
import {useCreateAnimal, useForm} from '../../hooks';

import AnimalSex from './AnimalSex';
import AnimalBorn from './AnimalBorn';
import Input from '../core/input';

import {GLOBALS} from '../../styles';
import {REGISTER_STYLES} from './styles';
import AnimalPurchased from './AnimalPurchased';
import AnimalSold from './AnimalSold';

const Animal = () => {
  const {Colors} = useContext(ThemeContext);
  const {animal, firebase} = useContext(AppContext);
  const {uri} = animal;
  const {newAnimal} = firebase;

  const [bornDate, setBornDate] = useState(null);
  const [purchasedDate, setPurchasedDate] = useState(null);
  const [soldDate, setSoldDate] = useState(null);

  const {getImageFromGallery, removeImage} = useCreateAnimal();

  const {form, onChange} = useForm({
    name: '',
    observations: '',
    bornWeight: '',
    purchasedWeight: '',
    purchasedPrice: '',
    soldWeight: '',
    soldPrice: '',
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginBottom: 120}}>
      <View>
        {animal.uri ? (
          <View style={{alignSelf: 'center', marginVertical: 20}}>
            <Image
              source={{uri: uri}}
              style={REGISTER_STYLES.image}
              resizeMode="contain"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => removeImage()}
              style={{
                ...REGISTER_STYLES.removeImageBtn,
                backgroundColor: Colors.red,
              }}>
              <Text style={{...GLOBALS.mediumFamily, color: Colors.primary}}>
                Quitar foto
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{alignSelf: 'center', marginBottom: 30}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                ...REGISTER_STYLES.galleryBtn,
                backgroundColor: Colors.primary,
              }}
              onPress={() => getImageFromGallery()}>
              <Icon name="plus" size={50} color={Colors.yellow} />
            </TouchableOpacity>
            <Text
              style={{
                ...GLOBALS.regularFamily,
                alignSelf: 'center',
                color: Colors.secondary,
              }}>
              Añadir foto
            </Text>
          </View>
        )}
      </View>

      <AnimalSex />

      <KeyboardAvoidingView>
        <Input
          onChange={onChange}
          valueType={'name'}
          placeholder="Nombre | Número de serie"
        />
        <Input
          onChange={onChange}
          valueType={'observations'}
          placeholder="Observaciones"
        />
      </KeyboardAvoidingView>

      <AnimalBorn date={bornDate} setDate={setBornDate} onChange={onChange} />
      <AnimalPurchased
        date={purchasedDate}
        setDate={setPurchasedDate}
        onChange={onChange}
      />
      <AnimalSold date={soldDate} setDate={setSoldDate} onChange={onChange} />

      <TouchableOpacity
        style={{...REGISTER_STYLES.btnSave, backgroundColor: Colors.green}}
        onPress={() =>
          newAnimal({...form, ...animal, bornDate, soldDate, purchasedDate})
        }>
        <Text style={{...GLOBALS.semiBoldFamily, color: Colors.secondary}}>
          Guardar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Animal;
