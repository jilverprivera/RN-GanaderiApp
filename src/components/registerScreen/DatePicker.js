import React from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({showDate, setShowDate, date, setDate}) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDate(false);
  };
  return (
    <View>
      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
