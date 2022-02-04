import {useEffect, useState} from 'react';

export const useHomeRoute = route => {
  const {name} = route;
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    name === 'HomeScreen' ? setIsHome(true) : setIsHome(false);
  }, [name]);

  return {
    isHome,
  };
};
