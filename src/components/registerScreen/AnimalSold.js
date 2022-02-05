import React, {useContext, useState} from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';

import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';
import {useCreateAnimal} from '../../hooks';

import Input from '../core/input';
import DatePicker from './DatePicker';

import {REGISTER_STYLES} from './styles';
import {GLOBALS} from '../../styles';

const AnimalSold = ({date, setDate, onChange}) => {
  const {animal} = useContext(AppContext);
  const {Colors} = useContext(ThemeContext);
  const {sold} = animal;

  const {handleAnimalSold} = useCreateAnimal();

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
        <Text style={GLOBALS.regularFamily}>¿Animal vendido?</Text>
        <Switch
          trackColor={{false: Colors.gray, true: Colors.gray}}
          thumbColor={sold ? Colors.lime : Colors.primary}
          ios_backgroundColor={Colors.gray}
          onValueChange={() => handleAnimalSold()}
          value={sold}
        />
      </View>
      {sold && (
        <>
          <View style={{...REGISTER_STYLES.dateContainer}}>
            <View>
              <Text style={{...GLOBALS.mediumFamily, color: Colors.secondary}}>
                Fecha de registro
              </Text>
              <Text style={GLOBALS.semiBoldFamily}>
                {date &&
                  `${date.getDate()} / ${
                    date.getMonth() + 1
                  } / ${date.getFullYear()}`}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                ...REGISTER_STYLES.btnDate,
                backgroundColor: Colors.primary,
              }}
              onPress={() => setShowDate(true)}>
              <Text
                style={{...REGISTER_STYLES.btnDateText, color: Colors.yellow}}>
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
            valueType={'soldWeight'}
            placeholder="Peso (Kilogramos)"
            keyboardType="decimal-pad"
          />
          <Input
            onChange={onChange}
            valueType={'soldPrice'}
            placeholder="Precio"
            keyboardType="decimal-pad"
          />
        </>
      )}
    </View>
  );
};

export default AnimalSold;
