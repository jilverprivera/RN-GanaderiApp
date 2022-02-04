import React, {useContext} from 'react';
import {
  Alert,
  Appearance,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useForm} from '../../hooks/useForm';
import {AuthContext} from '../../context/AuthContext';

import Input from '../../components/core/input';

import {COLORS, SIZES} from '../../constants';
import {authStyle, UIStyle} from '../../styles';
import {ThemeContext} from '../../context/ThemeContext';

const SignUpScreen = ({navigation}) => {
  const {top} = useSafeAreaInsets();
  const {StartRegisterWithEmailPasswordAndName} = useContext(AuthContext);
  const {Colors} = useContext(ThemeContext);

  const {form, onChange} = useForm({name: '', email: '', password: ''});
  const {name, email, password} = form;

  const handleSignUp = () => {
    StartRegisterWithEmailPasswordAndName(email, password, name);
  };
  return (
    <>
      <StatusBar hidden />
      <View
        style={{
          ...authStyle.container,
          backgroundColor: Colors.background,
        }}>
        <TouchableOpacity
          style={{
            ...authStyle.backBtn,
            backgroundColor: Colors.primary,
            top: top + 30,
          }}
          onPress={() => navigation.navigate('WelcomeScreen')}>
          <Icon name="arrow-left" size={30} color={Colors.secondary} />
        </TouchableOpacity>

        <Text style={{...authStyle.message, color: Colors.secondary}}>
          Registro
        </Text>
        <Text style={{...authStyle.auxiliarMessage, color: Colors.secondary}}>
          Crea tu cuenta nueva
        </Text>
        <KeyboardAvoidingView
          style={authStyle.keyboardContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input
            placeholder="Nombre"
            keyboardType="email-address"
            onChange={onChange}
            capitalize="none"
            valueType="name"
          />
          <Input
            placeholder="Correo electrónico"
            keyboardType="email-address"
            onChange={onChange}
            capitalize="none"
            valueType="email"
          />
          <Input
            placeholder="Contraseña"
            secureEntry={true}
            onChange={onChange}
            capitalize="none"
            valueType="password"
          />
          {/* <Input
            placeholder="Confirmar contraseña"
            secureEntry={true}
            onChange={onChange}
            capitalize="none"
            valueType="password"
          /> */}
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={authStyle.btnSign}
          onPress={() =>
            StartRegisterWithEmailPasswordAndName(email, password, name)
          }>
          <Text style={{...UIStyle.semiBoldText, color: COLORS.white}}>
            Registrate
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignUpScreen;
