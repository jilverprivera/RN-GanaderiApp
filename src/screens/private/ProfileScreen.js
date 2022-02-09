import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import {AuthContext} from '../../context/AuthContext';
import {ThemeContext} from '../../context/ThemeContext';
import {Header} from '../../components/layout';
import ProfileImage from '../../components/profile/profileImage';
import Button from '../../components/profile/button';
import DarkModeBtn from '../../components/profile/darkModeBtn';

import {SIZES} from '../../constants';

import {GLOBALS} from '../../styles';
import {PROFILE_STYLES} from '../../components/profile/styles';

const SPIRNG_CONFIG = {
  damping: 80,
  overshootClampling: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const ProfileScreen = ({navigation, route, animated}) => {
  const {userState, SignOut} = useContext(AuthContext);
  const {userName} = userState;
  const {Colors} = useContext(ThemeContext);

  const top = useSharedValue(SIZES.height);

  const style = useAnimatedStyle(() => {
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
    <Animated.View
      style={{
        ...animated,
        ...GLOBALS.container,
        backgroundColor: Colors.background,
      }}>
      <Header navigation={navigation} route={route} />
      <View style={PROFILE_STYLES.userContainer}>
        <ProfileImage />
        <View>
          <Text style={{...PROFILE_STYLES.userName, color: Colors.secondary}}>
            {userName}
          </Text>
          {/* TODO: user Level */}
          <Text
            style={{...PROFILE_STYLES.userCategory, color: Colors.secondary}}>
            Ganadero Amateur
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          top.value = withSpring(SIZES.height * 0.5, SPIRNG_CONFIG);
        }}>
        <Text>Open Sheet</Text>
      </TouchableOpacity>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            style,
            PROFILE_STYLES.configurationContainer,
            {backgroundColor: Colors.primary},
          ]}>
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
              style={{
                ...PROFILE_STYLES.LogOutBtn,
                backgroundColor: Colors.red,
              }}>
              <Text
                style={{...GLOBALS.semiBoldFamily, color: Colors.secondary}}>
                Cerrar sesión
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default ProfileScreen;
