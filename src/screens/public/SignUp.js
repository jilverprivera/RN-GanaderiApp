import React, {useContext} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useForm} from '../../hooks/useForm';
import {AuthContext} from '../../context/AuthContext';

import {Input} from '../../components/auth/Input';

import {COLORS, FONTS, SIZES} from '../../constants';

import {authStyle, UIStyle} from '../../styles';

const SignUp = ({navigation}) => {
  const {StartRegisterWithEmailPasswordAndName} = useContext(AuthContext);

  const {form, onChange} = useForm({name: '', email: '', password: ''});
  const {name, email, password} = form;

  return (
    <SafeAreaView style={{...UIStyle.global, backgroundColor: COLORS.green}}>
      <Text style={authStyle.title}>Registro</Text>
      <View style={authStyle.wrapper}>
        <KeyboardAvoidingView
          style={authStyle.keyboardContent}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input
            name="Nombre"
            keyboardType="email-address"
            onChange={onChange}
            capitalize="none"
            valueType="name"
          />
          <Input
            name="Correo electrónico"
            keyboardType="email-address"
            onChange={onChange}
            capitalize="none"
            valueType="email"
          />
          <Input
            name="Contraseña"
            secureEntry={true}
            onChange={onChange}
            capitalize="none"
            valueType="password"
          />
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={authStyle.authButton}
          onPress={() =>
            StartRegisterWithEmailPasswordAndName(email, password, name)
          }>
          <Text style={authStyle.authButtonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}
          onPress={() => navigation.navigate('signIn')}>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.regular,
              color: COLORS.black,
            }}>
            ¿Ya estas registrado?, inicia sesión
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
