import {useEffect, useState} from 'react';

export const useDebounce = (input, time = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeOut);
    };
  }, [input]);

  return {
    debouncedValue,
  };
};
