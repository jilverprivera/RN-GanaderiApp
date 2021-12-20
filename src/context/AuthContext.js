import React, {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const initialState = {
  status: 'checking',
  userID: null,
  userName: null,
};

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userState, setUserState] = useState(initialState);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      user?.uid
        ? setUserState({
            ...userState,
            status: 'authenticated',
            userID: user.uid,
            userName: user.displayName,
          })
        : setUserState({
            ...userState,
            status: 'not-authenticated',
          });
    });
  }, []);

  const StartRegisterWithEmailPasswordAndName = async (
    email,
    password,
    name,
  ) => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({user}) => {
        await user.updateProfile({displayName: name});
        setUserState({
          ...userState,
          status: 'authenticated',
          userId: user.uid,
          userName: name,
        });
        // await firestore()
        //   .collection(`Users/${user.uid}/personal`)
        //   .add({uid: user.uid, userName: name, email: email});
      });
  };

  const SignOut = async () => {
    await auth().signOut();
    setUserState({
      ...userState,
      status: 'not-authenticated',
      userId: null,
      userName: null,
    });
  };

  const state = {
    userState,
    StartRegisterWithEmailPasswordAndName,
    SignOut,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
