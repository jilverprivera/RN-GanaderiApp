import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Input} from '../../components/auth/Input';
import {COLORS, FONTS, SIZES} from '../../constants';
import {authStyle, UIStyle} from '../../styles';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={{...UIStyle.global, backgroundColor: COLORS.green}}>
      <Text style={authStyle.title}>Ingresar</Text>
      <View style={authStyle.wrapper}>
        <KeyboardAvoidingView
          style={authStyle.keyboardContent}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input
            name="Correo electrónico"
            keyboardType="email-address"
            //   onChange={onChange}
            capitalize="none"
            valueType="email"
          />
          <Input
            name="Contraseña"
            secureEntry={true}
            //   onChange={onChange}
            capitalize="none"
            valueType="password"
          />
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={authStyle.authButton}
          onPress={() => navigation.navigate('drawer')}>
          <Text style={authStyle.authButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}
          onPress={() => navigation.navigate('signUp')}>
          <Text
            style={{
              fontFamily: FONTS.medium,
              fontSize: SIZES.regular,
              color: COLORS.black,
            }}>
            ¿Eres nuevo?, Registrate
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
