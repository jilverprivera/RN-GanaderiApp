import React, {useContext, useState} from 'react';
import {Switch, Text, View, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {AppContext} from '../../context/AppContext';

import {AddNewStyle} from '../../styles';

const BornAnimal = () => {
  const {addNew} = useContext(AppContext);
  const [date, setDate] = useState(new Date());
  console.log(date);
  const [mode, setMode] = useState('date');
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const {bornAnimal, handleAnimal} = addNew;
  return (
    <View>
      <View style={AddNewStyle.wrapper}>
        <Text style={AddNewStyle.text}>¿Animal nacido en finca?</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={bornAnimal ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => handleAnimal('')}
          value={bornAnimal}
        />
      </View>
      <View>
        {bornAnimal && (
          <View>
            <Text>Born</Text>
          </View>
          //   <DateTimePicker
          //     testID="dateTimePicker"
          //     value={date}
          //     mode={mode}
          //     is24Hour={true}
          //     display="default"
          //     onChange={onChange}
          //   />
        )}
      </View>
    </View>
  );
};

export default BornAnimal;
