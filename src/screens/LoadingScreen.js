import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

import {COLORS, FONTS, SIZES} from '../constants';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.lime} />
      <Text style={styles.largeText}>Aguarde un momento...</Text>
      <Text style={styles.text}>Estamos verificando su información</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    borderWidth: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  largeText: {
    marginTop: 40,
    marginBottom: 10,
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.black,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.regular,
    color: COLORS.black,
  },
});
