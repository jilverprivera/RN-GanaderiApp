import {useContext} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

import {AppContext} from '../context/AppContext';

export const useCreateAnimal = () => {
  const {animal, setAnimal} = useContext(AppContext);

  const handleAnimalSex = (sex = '') => {
    sex === 'male'
      ? setAnimal({...animal, sex: 'male'})
      : setAnimal({...animal, sex: 'female'});
  };

  const handleAnimalOrigin = (origin = '') => {
    if (origin === 'purchased') {
      animal.purchased
        ? setAnimal({...animal, purchased: false})
        : setAnimal({...animal, purchased: true, born: false});
    } else {
      animal.born
        ? setAnimal({...animal, born: false})
        : setAnimal({...animal, born: true, purchased: false});
    }
  };

  const handleAnimalSold = () => {
    animal.sold
      ? setAnimal({...animal, sold: false})
      : setAnimal({...animal, sold: true});
  };

  const getImageFromGallery = async () => {
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
        setAnimal({
          ...animal,
          uri: resp.assets[0].uri,
          filename: resp.assets[0].fileName,
        });
      },
    );
  };

  const removeImage = () => {
    setAnimal({...animal, uri: null, filename: null});
  };

  return {
    handleAnimalSex,
    handleAnimalOrigin,
    handleAnimalSold,
    getImageFromGallery,
    removeImage,
  };
};
