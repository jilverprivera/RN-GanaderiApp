import React, {useContext} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';

import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';
import {Header} from '../../components/layout';
import {
  Animal,
  Categories,
  Expenses,
  Profits,
} from '../../components/registerScreen';
import {SIZES} from '../../constants';
import {GLOBALS} from '../../styles';

const RegisterScreen = ({navigation, route, animated}) => {
  const {categories} = useContext(AppContext);
  const {Colors} = useContext(ThemeContext);

  return (
    <Animated.View
      style={{
        ...GLOBALS.container,
        ...animated,
        backgroundColor: Colors.background,
      }}>
      <Header navigation={navigation} route={route} />
      <View style={STYLES.pageTitle} >
        <View style={STYLES.wrapper}>
          <View style={{marginBottom: 15}}>
            <Text style={{...STYLES.text, color: Colors.secondary}}>
              Añadir
            </Text>
            <Text style={{...STYLES.text, color: Colors.secondary}}>
              Nuevo registro
            </Text>
          </View>
          <Categories />
        </View>
      </View>
      <ScrollView
        style={{...STYLES.container}}
        showsVerticalScrollIndicator={false}>
        {categories === 0 && <Profits />}
        {categories === 1 && <Expenses />}
        {categories === 2 && <Animal />}
      </ScrollView>
    </Animated.View>
  );
};

export default RegisterScreen;

const STYLES = StyleSheet.create({
  pageTitle: {
    width: SIZES.width,
    borderBottomRightRadius: 50,
  },

  wrapper: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    marginVertical: 20,
  },
  container: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    flex: 1,
  },
  text: {
    ...GLOBALS.semiBoldFamily,
    fontSize: SIZES.large,
  },
});
