import React, {useContext} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {AuthContext} from '../../context/AuthContext';

const ProfileImage = () => {
  const {userState, UploadImage} = useContext(AuthContext);
  const {userImage} = userState;

  const takePhotoFromCamera = () => {
    launchCamera(
      {
        cameraType: 'back',
        mediaType: 'photo',
        quality: 0.8,
      },
      resp => {
        if (resp.didCancel) {
          return;
        }
        if (!resp.assets[0].uri) {
          return;
        }
        UploadImage(resp.assets[0].uri);
      },
    );
  };

  const takePhotoFromGallery = async () => {
    await launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
      },
      resp => {
        if (resp.didCancel) {
          return;
        }
        if (!resp.assets[0].uri) {
          return;
        }
        UploadImage(resp.assets[0].uri);
      },
    );
  };

  return (
    <View
      //   onPress={() => takePhotoFromGallery()}
      //   onLongPress={() => takePhotoFromCamera()}
      //   activeOpacity={0.8}
      style={STYLES.container}>
      {!userImage ? (
        <Image
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={STYLES.image}
          resizeMode="center"
        />
      ) : (
        <Image
          source={{
            uri: userImage,
          }}
          style={STYLES.image}
        />
      )}
    </View>
  );
};

export default ProfileImage;

const STYLES = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 62.5,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    // borderRadius: 62.5,
  },
});
