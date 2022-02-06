import {useEffect, useState} from 'react';

export const useCurrentHour = () => {
  const date = new Date().getHours();
  const [time, setTime] = useState('morning');

  useEffect(() => {
    if (date >= 0 && date <= 11) {
      setTime('morning');
    } else if (date >= 12 && date <= 18) {
      setTime('afternoon');
    } else if (date >= 19 && date <= 23) {
      setTime('night');
    } else {
      setTime('morning');
    }
  }, [date]);

  return {time};
};
