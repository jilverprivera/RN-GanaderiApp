import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

import {ThemeContext} from '../../context/ThemeContext';

import {SIZES} from '../../constants';
import Button from './button';
import DarkModeBtn from './darkModeBtn';
import {GLOBALS} from '../../styles';

const Configuration = () => {
  const {Colors} = useContext(ThemeContext);

  const top = useSharedValue(SIZES.height);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: top.value,
    };
  });
  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context) {
      context.startTop = top.value;
    },
    onActive(event, context) {
      top.value = context.startTop + event.translationY;
    },
    onEnd() {
      if (top.value > SIZES.height / 2 + 200) {
        top.value = SIZES.height;
      } else {
        top.value = SIZES.height / 2;
      }
    },
  });
  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={{
          ...STYLES.container,

          ...animatedStyle,
          backgroundColor: Colors.background,
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            height: 30,
            //   borderWidth: 1,
          }}
          onPress={() => {
            top.value = withSpring(SIZES.height * 0.5, SPIRNG_CONFIG);
          }}>
          <View
            style={{
              width: 100,
              borderWidth: 2,
              borderColor: Colors.secondary,
              borderRadius: 3,
            }}
          />
        </TouchableOpacity>
        <View style={{marginTop: 20}}>
          <Button title="Configura tu cuenta" iconName="edit" />
          <Button title="Ayuda" iconName="globe" />
          <DarkModeBtn title="Modo Oscuro" iconName="moon" />
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => SignOut()}
            style={{...STYLES.signOutBtn, backgroundColor: Colors.red}}>
            <Text style={{...GLOBALS.semiBoldFamily, color: Colors.secondary}}>
              Cerrar sesión
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Configuration;

const STYLES = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
