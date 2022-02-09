import firestore from '@react-native-firebase/firestore';

export const loadExpenses = async uid => {
  const expenses = [];

  const expenseSnapshot = await firestore()
    .collection(`Users/${uid}/expenses`)
    .get();
  expenseSnapshot.forEach(snap => {
    expenses.push({id: snap.id, ...snap.data()});
  });
  return expenses;
};
