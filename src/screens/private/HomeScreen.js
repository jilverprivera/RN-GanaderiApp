import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';
import {Header} from '../../components/layout';
import {
  ModalNotifications,
  CarouselCard,
  WelcomeMessage,
} from '../../components/home';

import {FONTS, SIZES} from '../../constants';

import {GLOBALS} from '../../styles';
import {HOME_STYLES} from '../../components/home/HOME_STYLES';
import {VictoryPie} from 'victory-native';
import Svg from 'react-native-svg';

const HomeScreen = ({navigation, route, animated}) => {
  const {data} = useContext(AppContext);
  const {Colors, darkMode} = useContext(ThemeContext);

  const {earnings, expenses, animals} = data;

  const [activeIndex, setActiveIndex] = useState(0);
  const [selector, setSelector] = useState('earning/expense');
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [dataConcat, setDataConcat] = useState([]);

  useEffect(() => {
    // const data = [];
    // if (earnings && expenses) {
    //   setDataConcat([...earnings, ...expenses]);
    // }
  }, [earnings, expenses]);

  const userContability = () => {
    const userData = [];
    if (earnings && expenses) {
      userData.push(...earnings);
    }
    const TotalChart = userData.reduce((a, b) => a + Number(b.value || 0), 0);
    return {
      total: TotalChart,
    };
  };

  // <-- HOOKS --->
  return (
    <Animated.View
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

      <WelcomeMessage />

      <Text
        style={{
          ...HOME_STYLES.resumeText,
          color: Colors.secondary,
        }}>
        Resumen
      </Text>
      <View
        style={{
          ...HOME_STYLES.selectorContainer,
          backgroundColor: Colors.lime,
        }}>
        <TouchableOpacity
          onPress={() => setSelector('earning/expense')}
          activeOpacity={0.8}>
          <View
            style={{
              ...HOME_STYLES.selector,
              backgroundColor:
                selector === 'earning/expense' ? Colors.primary : 'transparent',
            }}>
            <Text
              style={{
                ...GLOBALS.semiBoldFamily,
                color:
                  selector === 'earning/expense'
                    ? Colors.secondary
                    : Colors.gray,
              }}>
              Ingresos/Gastos
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelector('animals')}
          activeOpacity={0.8}>
          <View
            style={{
              ...HOME_STYLES.selector,
              backgroundColor:
                selector === 'animals' ? Colors.primary : 'transparent',
            }}>
            <Text
              style={{
                ...GLOBALS.semiBoldFamily,
                color: selector === 'animals' ? Colors.secondary : Colors.gray,
              }}>
              Animales
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ModalNotifications
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
      />

      <ScrollView>
        {selector === 'animals' && (
          <>
            <View style={HOME_STYLES.carouselContainer}>
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
                    dotStyle={{
                      width: 12.5,
                      height: 5,
                      backgroundColor: Colors.lime,
                    }}
                  />
                </>
              )}
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('AnimalsScreen')}>
              <View style={{...STYLES.wrapper, backgroundColor: Colors.lime}}>
                <Text
                  style={{...GLOBALS.mediumFamily, color: Colors.secondary}}>
                  Tus animales
                </Text>
                <View
                  style={{
                    ...STYLES.arrowContainer,
                    backgroundColor: Colors.primary,
                  }}>
                  <Icon name="arrow-right" size={28} color={Colors.lime} />
                </View>
              </View>
            </TouchableOpacity>
          </>
        )}
        {selector === 'earning/expense' && (
          <View>
            <View>
              <Text>Categorias</Text>
              <Text>Ingresos: {earnings && earnings.length}</Text>
              <Text>Gastos: {expenses && expenses.length}</Text>
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Svg
                width={SIZES.width}
                height={SIZES.width}
                style={{width: '100%', height: 'auto'}}>
                <VictoryPie
                  data={[
                    // {x: 'Ingresos', y: 500},
                    // {x: 'Gastos', y: 200},
                    earnings
                  ]}
                  standalone={false} // Android workaround
                  labels={({datum}) => `${datum.value}`}
                  radius={() => SIZES.width * 0.4}
                  innerRadius={70}
                  labelRadius={({innerRadius}) =>
                    (SIZES.width * 0.4 + innerRadius) / 2.5
                  }
                  style={{
                    labels: {fill: '#000', ...FONTS.regular},
                    //   parent: {
                    //     ...styles.shadow,
                    //   },
                  }}
                  width={SIZES.width}
                  height={SIZES.width}
                  colorScale={['tomato', 'orange', 'cyan']}
                  // events={[
                  //   {
                  //     target: 'data',
                  //     eventHandlers: {
                  //       onPress: () => {
                  //         return [
                  //           {
                  //             target: 'labels',
                  //             mutation: props => {
                  //               let categoryName = chartData[props.index].name;
                  //               setSelectCategoryByName(categoryName);
                  //             },
                  //           },
                  //         ];
                  //       },
                  //     },
                  //   },
                  // ]}
                />
              </Svg>

              {/* {!earnings && <Text></Text>} */}
            </View>
          </View>
        )}
      </ScrollView>
    </Animated.View>
  );
};

export default HomeScreen;

// {
//     id: 1,
//     name: "Education",
//     icon: icons.education,
//     color: COLORS.yellow,
//     expenses: [
//         {
//             id: 1,
//             title: "Tuition Fee",
//             description: "Tuition fee",
//             location: "ByProgrammers' tuition center",
//             total: 100.00,
//             status: pendingStatus
//         },
//         {
//             id: 2,
//             title: "Arduino",
//             description: "Hardward",
//             location: "ByProgrammers' tuition center",
//             total: 30.00,
//             status: pendingStatus
//         },
//         {
//             id: 3,
//             title: "Javascript Books",
//             description: "Javascript books",
//             location: "ByProgrammers' Book Store",
//             total: 20.00,
//             status: confirmStatus
//         },
//         {
//             id: 4,
//             title: "PHP Books",
//             description: "PHP books",
//             location: "ByProgrammers' Book Store",
//             total: 20.00,
//             status: confirmStatus
//         }
//     ],
// },

const STYLES = StyleSheet.create({
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
