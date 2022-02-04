import React, {useContext} from 'react';
import {Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import {GLOBALS} from '../../styles';
import {AppContext} from '../../context/AppContext';
import {SIZES} from '../../constants';
import {
  Animal,
  Categories,
  Expenses,
  Profits,
} from '../../components/registerScreen';
import {ThemeContext} from '../../context/ThemeContext';

const RegisterScreen = () => {
  const {categories} = useContext(AppContext);
  const {Colors} = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{...GLOBALS.container, backgroundColor: Colors.background}}>
      <View style={{...styles.header}}>
        <View style={styles.wrapper}>
          <View style={{marginBottom: 15}}>
            <Text style={{...styles.text, color: Colors.secondary}}>
              Añadir
            </Text>
            <Text style={{...styles.text, color: Colors.secondary}}>
              Nuevo registro
            </Text>
          </View>
          <Categories />
        </View>
      </View>
      <ScrollView
        style={{...styles.container}}
        showsVerticalScrollIndicator={false}>
        {categories === 0 && <Profits />}
        {categories === 1 && <Expenses />}
        {categories === 2 && <Animal />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  header: {
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
