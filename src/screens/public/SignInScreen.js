import React, {useContext, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {useForm} from '../../hooks/useForm';
import {AuthContext} from '../../context/AuthContext';

import Input from '../../components/core/input';
import {Background} from '../../components/auth';

import {COLORS, FONTS, SIZES} from '../../constants';

import {authStyle, UIStyle} from '../../styles';

const SignInScreen = ({navigation}) => {
  const {top} = useSafeAreaInsets();
  const {StartLoginWithEmailAndPassword} = useContext(AuthContext);
  const [error, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const {form, onChange} = useForm({email: '', password: ''});
  const {email, password} = form;

  const formValid = () => {
    if (email.length <= 5 || email.length === 0 || password.length <= 6) {
      setError(true);
      Alert.alert(
        'Ops, algo salio mal...',
        'Tu correo electrónico o contraseña son invalidos, intenta de nuevo.',
        [{text: 'OK', onPress: () => setError(false)}],
      );
    }
  };

  const handleSignIn = () => {
    formValid();
    if (email.length >= 5 && password.length >= 6) {
      setIsLoading(true);
      StartLoginWithEmailAndPassword(email, password);
      setIsLoading(false);
    }
  };

  return (
    <>
      <StatusBar hidden />
      <View
        style={{
          ...authStyle.container,
          backgroundColor: COLORS.auxiliar_primary,
        }}>
        <Background />
        <TouchableOpacity
          style={{...authStyle.backBtn, top: top + 30}}
          onPress={() => navigation.navigate('WelcomeScreen')}>
          <Icon name="arrow-left" size={30} color={COLORS.auxiliar_primary} />
        </TouchableOpacity>

        <View style={styles.wrapper} />
        <Text style={authStyle.message}>Bienvenido de nuevo</Text>
        <Text style={authStyle.auxiliarMessage}>Ingresa en tu cuenta</Text>
        <KeyboardAvoidingView
          style={authStyle.keyboardContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input
            keyboardType="email-address"
            onChange={onChange}
            capitalize="none"
            valueType="email"
            placeholder="Correo electrónico"
          />
          <Input
            secureEntry={true}
            onChange={onChange}
            capitalize="none"
            valueType="password"
            placeholder="Contraseña"
          />
        </KeyboardAvoidingView>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{width: SIZES.width * 0.9, alignItems: 'flex-end'}}
          onPress={() => navigation.navigate('RecoveryScreen')}>
          <Text
            style={{
              color: COLORS.gray,
              fontFamily: FONTS.bold,
              fontSize: SIZES.small,
            }}>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={isLoading}
          style={authStyle.btnSign}
          onPress={() => handleSignIn()}>
          <Text style={{...UIStyle.semiBoldText, color: COLORS.white}}>
            Inciar sesión
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: SIZES.width,
    height: SIZES.height * 0.8,
    backgroundColor: COLORS.background,
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 40,
    borderTopLeftRadius: 60,
  },
});

// behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
