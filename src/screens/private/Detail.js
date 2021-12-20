import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, StatusBar} from 'react-native';
import Animated from 'react-native-reanimated';
import Header from '../../components/ui/Header';
import {COLORS, SIZES} from '../../constants';
import {UIStyle} from '../../styles';

// const DATA = [
//     {
//         start: ""
//         question: ""
//     },
//     {},
//     {}
// ];

const Detail = ({route, navigation, animated}) => {
  const {name, sex, state, gain} = route.params;

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        ...animated,
      }}>
      <View style={UIStyle.container}>
        <Header navigation={navigation} />
      </View>
      {/* <StatusBar
        animated={true}
        backgroundColor={COLORS.lime}
        barStyle="dark-content"
        showHideTransition="fade"
      /> */}

      {/* <View style={{height: SIZES.height}}> */}
      {/* <Carousel
          data={DATA}
          renderItem={({item}) => (
            <AnimalCard item={item} navigation={navigation} />
          )}
          sliderWidth={SIZES.width}
          itemWidth={SIZES.width * 0.85}
          inactiveSlideOpacity={0.9}
          onSnapToItem={index => setCurrentIndex(index)}
        />
        {/* <Pagination
          dotsLength={DATA.length}
          activeDotIndex={currentIndex}
          dotStyle={{width: 15, height: 7.5, borderRadius:5}}
        /> */}
      {/* </View> */}
    </Animated.View>
  );
};

export default Detail;
