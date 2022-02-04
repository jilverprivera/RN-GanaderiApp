import React, {useContext, useState} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {ThemeContext} from '../../context/ThemeContext';
import {Header} from '../../components/layout';
import {ModalNotifications, CarouselCard} from '../../components/home';

import {SIZES} from '../../constants';

import {GLOBALS} from '../../styles';
import {AppContext} from '../../context/AppContext';

const HomeScreen = ({navigation, route, animated}) => {
  const {animals} = useContext(AppContext);
  const {Colors, darkMode} = useContext(ThemeContext);

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Animated.ScrollView
      style={{
        ...GLOBALS.container,
        ...animated,
        backgroundColor: Colors.background,
      }}>
      <StatusBar
        hidden={false}
        animated={true}
        backgroundColor={Colors.background}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        showHideTransition="fade"
      />
      <Header navigation={navigation} route={route} />

      <ModalNotifications
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />

      <View style={STYLES.carouselContainer}>
        {!animals ? (
          <ActivityIndicator size="large" color={Colors.lime} />
        ) : (
          <>
            <Carousel
              data={animals}
              renderItem={({item}) => <CarouselCard {...item} />}
              sliderWidth={SIZES.width}
              itemWidth={SIZES.width * 0.9}
              inactiveSlideOpacity={0.9}
              layout="default"
              onSnapToItem={index => setActiveIndex(index)}
            />
            <Pagination
              dotsLength={animals.length}
              activeDotIndex={activeIndex}
              dotStyle={{width: 12.5, height: 5, backgroundColor: Colors.lime}}
            />
          </>
        )}
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AnimalsScreen')}>
        <View style={{...STYLES.wrapper, backgroundColor: Colors.lime}}>
          <Text style={{...GLOBALS.mediumFamily, color: Colors.secondary}}>
            Tus animales
          </Text>
          <View
            style={{...STYLES.arrowContainer, backgroundColor: Colors.primary}}>
            <Icon name="arrow-right" size={28} color={Colors.lime} />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.ScrollView>
  );
};

export default HomeScreen;

const STYLES = StyleSheet.create({
  carouselContainer: {
    height: 435,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    height: 90,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  arrowContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
