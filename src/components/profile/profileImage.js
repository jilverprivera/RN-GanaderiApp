import React, {useContext} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
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
    <TouchableOpacity
      onPress={() => takePhotoFromGallery()}
      onLongPress={() => takePhotoFromCamera()}
      activeOpacity={0.8}
      style={styles.container}>
      {!userImage ? (
        <Image
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={styles.image}
          resizeMode="center"
        />
      ) : (
        <Image
          source={{
            uri: userImage,
          }}
          style={styles.image}
          //   resizeMode="center"
        />
      )}
    </TouchableOpacity>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    width: 125,
    height: 125,
    alignSelf: 'center',
    borderRadius: 62.5,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: 125,
    height: 125,
    // borderRadius: 62.5,
  },
});
