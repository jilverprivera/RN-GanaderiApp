import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../context/AuthContext';
import {ThemeContext} from '../../context/ThemeContext';

import {SIZES} from '../../constants';

import {GLOBALS} from '../../styles';

const ProfileButton = () => {
  const {userState} = useContext(AuthContext);
  const {userName, userImage} = userState;

  const {Colors} = useContext(ThemeContext);

  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate('ProfileScreen')}>
      <View style={styles.profileBtn}>
        <Image
          source={{
            uri: !userImage
              ? 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
              : userImage,
          }}
          style={styles.userImage}
        />
        <View>
          <Text
            style={{
              ...GLOBALS.mediumFamily,
              color: Colors.secondary,
              fontSize: SIZES.medium,
            }}>
            {userName}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                ...GLOBALS.semiBoldFamily,
                color: Colors.secondary,
                marginRight: 10,
                fontSize: SIZES.small,
              }}>
              Ver perfil
            </Text>
            <Icon name="arrow-right" size={14} color={Colors.secondary} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileButton;

const styles = StyleSheet.create({
  profileBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 40,
    paddingHorizontal: 15,
  },
  userImage: {width: 60, height: 60, borderRadius: 40, marginRight: 15},
});
