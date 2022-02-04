import React, {createContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const initialState = {
  status: 'checking',
  userID: null,
  userName: null,
  userImage: null,
};

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userState, setUserState] = useState(initialState);

  const profileImagePath = `${userState.userID}/profile/image`;

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

  const getProfileImage = async () => {
    try {
      const url = await storage().ref(profileImagePath).getDownloadURL();
      setUserState({
        ...userState,
        userImage: url,
      });
    } catch (error) {
      setUserState({
        ...userState,
        userImage: null,
      });
    }
  };

  useEffect(() => {
    if (userState.userID) {
      getProfileImage();
    }
  }, [userState.userID]);

  const UploadImage = async uri => {
    const reference = storage().ref(profileImagePath);
    await reference.putFile(uri);
    setUserState({
      ...userState,
      userImage: uri,
    });
  };

  const StartLoginWithEmailAndPassword = async (email, password) => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        setUserState({
          ...userState,
          status: 'authenticated',
          userId: user.uid,
          userName: user.displayName,
        });
      });
  };

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
        await firestore()
          .collection(`Users/${user.uid}/data`)
          .add({uid: user.uid, userName: name, email: email});
      });
  };

  const SignOut = async () => {
    await auth().signOut();
    setUserState({
      ...userState,
      status: 'not-authenticated',
      userId: null,
      userName: null,
      userImage: null,
    });
  };

  const state = {
    userState,
    StartLoginWithEmailAndPassword,
    StartRegisterWithEmailPasswordAndName,
    SignOut,
    UploadImage,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
