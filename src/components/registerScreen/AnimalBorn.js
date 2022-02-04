import React, {useContext, useState} from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';

import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';
import {useCreateAnimal} from '../../hooks';

import Input from '../core/input';
import DatePicker from './DatePicker';

import {GLOBALS} from '../../styles';
import {REGISTER_STYLES} from './styles';

const AnimalBorn = ({date, setDate, onChange}) => {
  const {animal} = useContext(AppContext);
  const {Colors} = useContext(ThemeContext);
  const {born} = animal;

  const {handleAnimalOrigin} = useCreateAnimal();
  const [showDate, setShowDate] = useState(false);
  return (
    <View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={GLOBALS.regularFamily}>¿Animal nacido en finca?</Text>
        <Switch
          trackColor={{false: Colors.gray, true: Colors.gray}}
          thumbColor={born ? Colors.green : Colors.primary}
          ios_backgroundColor={Colors.gray}
          onValueChange={() => handleAnimalOrigin('')}
          value={born}
        />
      </View>
      {born && (
        <>
          <View style={{...REGISTER_STYLES.dateContainer}}>
            <View>
              <Text style={GLOBALS.lightFamily}>Fecha</Text>
              <Text style={GLOBALS.semiBoldFamily}>
                {date &&
                  `${date.getDate()} / ${
                    date.getMonth() + 1
                  } / ${date.getFullYear()}`}
              </Text>
            </View>
            <TouchableOpacity
              style={{...REGISTER_STYLES.btnDate}}
              onPress={() => setShowDate(true)}>
              <Text style={{...REGISTER_STYLES.btnDateText}}>
                Establecer fecha
              </Text>
            </TouchableOpacity>
            <DatePicker
              showDate={showDate}
              setShowDate={setShowDate}
              date={date || new Date()}
              setDate={setDate}
            />
          </View>
          <Input
            onChange={onChange}
            valueType={'bornWeight'}
            placeholder="Peso (Kilogramos)"
            keyboardType="decimal-pad"
          />
        </>
      )}
    </View>
  );
};

export default AnimalBorn;
