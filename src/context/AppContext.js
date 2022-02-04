import React, {createContext, useContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {AuthContext} from './AuthContext';
import {Alert} from 'react-native';
import {loadAnimals} from '../services/loadAnimals';

const animalState = {
  sex: 'male',
  born: false,
  purchased: false,
  sold: false,
  uri: null,
  filename: null,
};

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const {userState} = useContext(AuthContext);
  const {userID} = userState;

  const [animals, setAnimals] = useState(null);
  const [animal, setAnimal] = useState(animalState);
  const [categories, setCategories] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);


  //   // <----- QUERYS ------>
  useEffect(() => {
    getAnimals();
  }, [userID]);

  //   // <----- FIREBASE FUNCTIONS ------>
  const getAnimals = async () => {
    if (userID) {
      const animals = await loadAnimals(userID);
      setAnimals(animals);
    }
  };

  const uploadImage = async () => {
    let animalPath = `${userID}/animals/${animal.filename}`;
    await storage().ref(animalPath).putFile(animal.uri);
  };

  const newAnimal = async data => {
    await firestore()
      .collection(`Users/${userID}/animals`)
      .add({...data})
      .then(() => {
        Alert.alert(
          'Animal añadido',
          'Tu animal fue añadido satisfactoriamente.',
        );
      })
      .catch(() =>
        Alert.alert(
          'Error',
          'Surgio un pequeño inconveniente, vuelve a intentarlo de nuevo.',
        ),
      );

    if (animal.uri) {
      uploadImage();
    }
    setAnimal(animalState);
  };

  const newProfit = async data => {
    await firestore()
      .collection(`Users/${userID}/profits`)
      .add({...data})
      .then(() => {
        Alert.alert(
          'Mensaje',
          'Tu ingreso ha sido añadido satisfactoriamente.',
        );
      })
      .catch(() =>
        Alert.alert(
          'Error',
          'Surgio un pequeño inconveniente, vuelve a intentarlo de nuevo.',
        ),
      );
  };

  const newExpense = async data => {
    await firestore()
      .collection(`Users/${userID}/expenses`)
      .add({...data})
      .then(() => {
        Alert.alert(
            'Mensaje',
            'Tu gasto ha sido añadido satisfactoriamente.',
        );
      })
      .catch(() =>
        Alert.alert(
          'Error',
          'Surgio un pequeño inconveniente, vuelve a intentarlo de nuevo.',
        ),
      );
  };

  // <----- STATE ------>
  const state = {
    modal: {
      modalIsOpen,
      setModalIsOpen,
    },
    animal,
    setAnimal,

    animals,
    setAnimals,

    firebase: {
      newAnimal,
      newProfit,
      newExpense,
      getAnimals,
    },

    categories,
    setCategories,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
