import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';

import ImageColors from 'react-native-image-colors';
import {ThemeContext} from '../../context/ThemeContext';
import {SIZES} from '../../constants';
import {GLOBALS} from '../../styles';

const AnimalCard = animal => {
  const isMounted = useRef(true);
  const {Colors} = useContext(ThemeContext);
  const [bgColor, setBgColor] = useState(Colors.primary);

  useEffect(() => {
    ImageColors.getColors(animal.uri, {
      fallback: Colors.primary,
    }).then(colors => {
      if (!isMounted.current) return;
      colors.platform === 'android'
        ? setBgColor(colors.average || Colors.primary)
        : setBgColor(colors.dominant || Colors.primary);
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={{
          ...styles.cardContainer,
          backgroundColor: Colors.primary,
        }}>
        <Image source={{uri: animal.uri}} style={styles.animalImage} />
        <Text
          style={{
            ...GLOBALS.semiBoldFamily,
            color: Colors.secondary,
            fontSize: SIZES.medium,
          }}>
          {animal.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AnimalCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: SIZES.width * 0.45,
    margin: 9,
    position: 'relative',
    borderRadius: 10,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    overflow: 'hidden',
  },

  animalImage: {
    width: '90%',
    height: 150,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 7.5,
    marginBottom: 15,
  },
});
