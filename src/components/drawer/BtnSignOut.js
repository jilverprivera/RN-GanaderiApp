import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {AuthContext} from '../../context/AuthContext';
import {ThemeContext} from '../../context/ThemeContext';

const BtnSignOut = () => {
  const {SignOut} = useContext(AuthContext);
  const {Colors} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => SignOut()}>
        <View>
          <View style={styles.iconWrapper}>
            <Icon name="sign-out-alt" size={24} color={Colors.secondary} />
          </View>
          <Text style={styles.routeText}>Cerrar sesión</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BtnSignOut;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -10,
    width: "100%",
    height:100,

    borderWidth: 1,
  },
});
