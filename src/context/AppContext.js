import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [selected, setSelected] = useState('animals');
  const [currentIndex, setCurrentIndex] = useState(0);

  // <----- add new configuration ------>
  const [boughtAnimal, setBoughtAnimal] = useState(false);
  const [bornAnimal, setBornAnimal] = useState(false);

  const handleAnimal = (isBought = '') => {
    if (isBought === 'bought') {
      setBoughtAnimal(!boughtAnimal);
      setBornAnimal(false);
    } else {
      setBornAnimal(!bornAnimal);
      setBoughtAnimal(false);
    }
  };

  const state = {
    buttons: {selected, setSelected},
    animalCard: {currentIndex, setCurrentIndex},

    addNew: {
      boughtAnimal,
      setBoughtAnimal,
      bornAnimal,
      setBornAnimal,
      handleAnimal,
    },
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
