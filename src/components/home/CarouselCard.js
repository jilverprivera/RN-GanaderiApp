import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import {ThemeContext} from '../../context/ThemeContext';

import {SIZES} from '../../constants';

import {GLOBALS} from '../../styles';

const CarouselCard = item => {
  const {name, sex, born, uri, purchasedPrice, sold, soldPrice} = item;

  const {navigate} = useNavigation();
  const {Colors} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate('DetailScreen', {...item})}>
      <View style={{...STYLES.cardContainer, backgroundColor: Colors.primary}}>
        <Image source={{uri: uri}} style={STYLES.image} />

        <View style={STYLES.informationWrapper}>
          <View style={STYLES.headerCard}>
            <Text
              style={{
                ...STYLES.animalName,
                color: Colors.secondary,
              }}>
              {name}
            </Text>
            <View style={STYLES.animalSex}>
              <Icon
                name={sex === 'male' ? 'mars' : 'venus'}
                size={24}
                color={Colors.secondary}
              />
              <Text style={{...GLOBALS.mediumFamily, color: Colors.secondary}}>
                {sex === 'male' ? 'Macho' : 'Hembra'}
              </Text>
            </View>
          </View>

          <Text style={{...STYLES.text, color: Colors.secondary}}>
            Origen: {born ? 'Nacido en finca' : 'Comprado'}
          </Text>

          <Text style={{...STYLES.text, color: Colors.secondary}}>
            Estado: {sold ? 'Vendido' : 'No vendido'}
          </Text>

          <Text style={{...STYLES.text, color: Colors.secondary}}>
            Ganancias:
            {sold ? ` ${soldPrice - purchasedPrice} COP` : ' Aún no vendido'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CarouselCard;

const STYLES = StyleSheet.create({
  cardContainer: {
    width: SIZES.width * 0.9,
    overflow: 'hidden',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: SIZES.width * 0.9,
    height: 200,
  },

  informationWrapper: {
    paddingHorizontal: 10,
    marginVertical: 15,
  },

  headerCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  animalName: {
    ...GLOBALS.semiBoldFamily,
    fontSize: SIZES.semiLarge,
  },
  animalSex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginRight: 30,
  },
  text: {
    ...GLOBALS.regularFamily,
    marginVertical: 5,
  },
});
