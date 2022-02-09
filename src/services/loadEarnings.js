import firestore from '@react-native-firebase/firestore';

export const loadEarnings = async uid => {
  const earnings = [];

  const earningsSnapshot = await firestore()
    .collection(`Users/${uid}/earnings`)
    .get();
  earningsSnapshot.forEach(snap => {
    earnings.push({id: snap.id, ...snap.data()});
  });
  return earnings;
};
