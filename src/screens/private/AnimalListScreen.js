import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {GLOBALS, UIStyle} from '../../styles';
import {ThemeContext} from '../../context/ThemeContext';
import {AppContext} from '../../context/AppContext';
import AnimalCard from '../../components/animal/AnimalCard';
import {SIZES} from '../../constants';
import {Header} from '../../components/layout';

const AnimalListScreen = ({navigation, route, animated}) => {
  const {firebase, data} = useContext(AppContext);

  const {animals} = data;
  const {getAnimals} = firebase;
  const {Colors} = useContext(ThemeContext);

  return (
    <Animated.View
      style={{
        ...GLOBALS.container,
        backgroundColor: Colors.background,
        ...animated,
      }}>
      <Header navigation={navigation} route={route} />
      <View
        style={{...styles.headerWrapper, backgroundColor: Colors.background}}>
        <Text
          style={{
            ...GLOBALS.mediumFamily,
            color: Colors.secondary,
            fontSize: SIZES.large,
          }}>
          Tus Animales
        </Text>
      </View>
      {!animals ? (
        <View>
          <Text>No hay animales añadidos aún</Text>
        </View>
      ) : (
        <FlatList
          data={animals}
          keyExtractor={animal => animal.id}
          numColumns={2}
          renderItem={({item}) => <AnimalCard {...item} />}
          onEndReachedThreshold={0.4}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Animated.View>
  );
};

export default AnimalListScreen;

const styles = StyleSheet.create({
  header: {
    width: SIZES.width,
  },
  headerWrapper: {
    width: SIZES.width * 0.9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
});
