import React from 'react';
import Animated from 'react-native-reanimated';
import {Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import AnimalCard from '../../components/animals/AnimalCard';
import Background from '../../components/ui/Background';
import Header from '../../components/ui/Header';
import Buttons from '../../components/home/Buttons';

import {homeStyle, UIStyle} from '../../styles';
import {COLORS, SIZES} from '../../constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Chispitas',
    sex: 'Hembra',
    state: true,
    gain: '$231.000',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Chiripas',
    sex: 'Hembra',
    state: false,
    gain: '$0',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Facunda',
    sex: 'Hembra',
    state: true,
    gain: '$231.000',
  },
];

const Home = ({navigation}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
      }}>
      <Background />
      <View style={UIStyle.container}>
        {/* <Header navigation={navigation} /> */}
        <View style={homeStyle.welcomeContainer}>
          <Text style={homeStyle.principalText}>¡Hola!</Text>
          <Text style={homeStyle.principalText}>Jilver Pacheco</Text>
        </View>
        <View>
          <Text style={homeStyle.text}>Tus animales</Text>
        </View>
      </View>
      <View style={{height: 250}}>
        <Carousel
          data={DATA}
          renderItem={({item}) => (
            <AnimalCard item={item} navigation={navigation} />
          )}
          sliderWidth={SIZES.width}
          itemWidth={SIZES.width * 0.85}
          inactiveSlideOpacity={0.9}
        />
        {/* <Pagination
          dotsLength={DATA.length}
          activeDotIndex={currentIndex}
          dotStyle={{width: 15, height: 7.5, borderRadius:5}}
        /> */}
      </View>

      <Buttons />
    </Animated.View>
  );
};

export default Home;
