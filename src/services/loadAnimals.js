import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const loadAnimals = async uid => {
  const arr = [];
  const animals = [];

  const animalSnap = await firestore().collection(`Users/${uid}/animals`).get();
  animalSnap.forEach(snap => {
    arr.push({id: snap.id, ...snap.data()});
  });
  arr.forEach(async animal => {
    if (animal.filename) {
      const newURL = await storage()
        .ref(`${uid}/animals/${animal.filename}`)
        .getDownloadURL();
      animals.push({...animal, uri: newURL});
    }
  });

  return animals;
};
