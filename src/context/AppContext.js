import React, {createContext, useContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {AuthContext} from './AuthContext';
import {Alert} from 'react-native';
import {loadAnimals} from '../services/loadAnimals';
import {loadEarnings} from '../services/loadEarnings';
import {loadExpenses} from '../services/loadExpenses';

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

  const [animal, setAnimal] = useState(animalState);

  const [animals, setAnimals] = useState(null);
  const [earnings, setEarnings] = useState(null);
  const [expenses, setExpenses] = useState(null);

  const [categories, setCategories] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // <----- GETTING APPLICATION DATA ------>

  const getAnimals = async () => {
    if (userID) {
      const animals = await loadAnimals(userID);
      setAnimals(animals);
    }
  };
  const getEarnings = async () => {
    if (userID) {
      const earnings = await loadEarnings(userID);
      setEarnings(earnings);
    }
  };
  const getExpenses = async () => {
    if (userID) {
      const expenses = await loadExpenses(userID);
      setExpenses(expenses);
    }
  };

  // <----- QUERYS ------>
  useEffect(() => {
    getAnimals();
  }, [userID]);
  useEffect(() => {
    getExpenses();
  }, [userID]);
  useEffect(() => {
    getEarnings();
  }, [userID]);

  // <----- FIREBASE FUNCTIONS ------>

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
    const {concept, description, value} = data;
    await firestore()
      .collection(`Users/${userID}/earnings`)
      .add({concept: concept, description: description, value: Number(value)})
      .then(() => {
        Alert.alert(
          'Ingreso añadido',
          'Tu ingreso se añadió satisfactoriamente.',
        );
        getEarnings();
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
        Alert.alert('Gasto añadido', 'Tu gasto se añadió satisfactoriamente.');
        getExpenses();
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
    data: {earnings, expenses, animals, getEarnings, getExpenses, getAnimals},
    modal: {modalIsOpen, setModalIsOpen},
    animal,
    setAnimal,

    firebase: {newAnimal, newProfit, newExpense, getAnimals},

    categories,
    setCategories,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
