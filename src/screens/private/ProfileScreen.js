import React, {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {GLOBALS} from '../../styles';
import ProfileImage from '../../components/profile/profileImage';
import {AuthContext} from '../../context/AuthContext';
import {COLORS, FONTS, SIZES} from '../../constants';
import {ThemeContext} from '../../context/ThemeContext';
// import Button from '../../components/profile/button';
// import DarkModeBtn from '../../components/profile/darkModeBtn';
import {useHomeRoute} from '../../hooks/useHomeRoute';

import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  //   useAnimatedGestureHandler,
  //   useSharedValue,
  //   useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import Configuration from '../../components/profile/Configuration';

const SPIRNG_CONFIG = {
  damping: 80,
  overshootClampling: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const ProfileScreen = ({navigation, route}) => {
  const {userState, SignOut} = useContext(AuthContext);
  const {userName} = userState;
  const {isHome} = useHomeRoute(route);
  const {darkMode, handleDarkMode, Colors} = useContext(ThemeContext);

  //   const top = useSharedValue(SIZES.height);

  //   const style = useAnimatedStyle(() => {
  //     return {
  //       top: top.value,
  //     };
  //   });
  //   const gestureHandler = useAnimatedGestureHandler({
  //     onStart(_, context) {
  //       context.startTop = top.value;
  //     },
  //     onActive(event, context) {
  //       top.value = context.startTop + event.translationY;
  //     },
  //     onEnd() {
  //       if (top.value > SIZES.height / 2 + 200) {
  //         top.value = SIZES.height;
  //       } else {
  //         top.value = SIZES.height / 2;
  //       }
  //     },
  //   });

  return (
    <SafeAreaView
      style={{...GLOBALS.container, backgroundColor: Colors.background}}>
      <View style={styles.container}>
        <ProfileImage />
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userCategory}>Ganadero Amateur</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Text>Open Sheet</Text>
      </TouchableOpacity>
      <Configuration top={top} />
      {/* <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: Colors.primary,
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
            style,
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
                borderRadius:3
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
              style={{...styles.signOutBtn, backgroundColor: Colors.red}}>
              <Text
                style={{...GLOBALS.semiBoldFamily, color: Colors.secondary}}>
                Cerrar sesión
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </PanGestureHandler> */}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.8,
    borderWidth: 1,

    alignSelf: 'center',
    paddingVertical: 40,
    borderBottomRightRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },

  userName: {
    ...GLOBALS.semiBoldFamily,
    textAlign: 'center',
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginBottom: 5,
  },
  userCategory: {
    ...GLOBALS.lightFamily,
    textAlign: 'center',
    fontSize: SIZES.small,
    color: COLORS.white,
  },

  signOutBtn: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 20,
  },
});
