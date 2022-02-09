import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Background} from '../../components/auth';

import {COLORS, FONTS, SIZES} from '../../constants';

// Gestiona tus ingresos y gastos derivados del ganado.
const WelcomeScreen = ({navigation}) => {
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Background />
        <View style={styles.messageWrapper}>
          <Text style={styles.message}>Gestiona </Text>
          <Text style={styles.message}>tu finca facilmente</Text>
          <Text style={styles.littleMessage}>
            Controla tus ingresos y gastos, asi como tus animales
          </Text>
        </View>

        <View style={styles.btnWrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{...styles.btn, backgroundColor: COLORS.lime}}
            onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={{...styles.btnText, color: COLORS.white}}>
              Iniciar sesión
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{...styles.btn, backgroundColor: COLORS.white}}
            onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{...styles.btnText, color: COLORS.black}}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    backgroundColor: COLORS.auxiliar_primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  messageWrapper: {
    width: SIZES.width * 0.85,
  },
  message: {
    width: '90%',
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.semibold,
    fontSize: SIZES.large,
    lineHeight: 45,
  },
  littleMessage: {
    marginTop: 15,
    width: '90%',
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: SIZES.regular,
  },

  btnWrapper: {
    position: 'absolute',
    bottom: 50,
  },
  btn: {
    width: SIZES.width * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    alignSelf: 'center',
  },
  btnText: {
    fontFamily: FONTS.semibold,
    fontSize: SIZES.medium,
  },
});
