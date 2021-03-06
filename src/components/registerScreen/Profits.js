import React, {useContext, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {AppContext} from '../../context/AppContext';
import {ThemeContext} from '../../context/ThemeContext';
import {useForm} from '../../hooks';

import Input from '../core/input';
import DatePicker from './DatePicker';

import {GLOBALS, UIStyle} from '../../styles';
import {REGISTER_STYLES} from './styles';
import SaveButton from './SaveButton';

const Profits = () => {
  const {firebase} = useContext(AppContext);
  const {newProfit} = firebase;
  const {Colors} = useContext(ThemeContext);

  const [date, setDate] = useState(null);
  const [showDate, setShowDate] = useState(false);

  const {form, onChange} = useForm({concept: '', description: '', value: 0});
  const {concept, description, value} = form;


  return (
    <ScrollView>
      <View style={REGISTER_STYLES.dateContainer}>
        <View>
          <Text style={{...GLOBALS.semiBoldFamily, color: Colors.secondary}}>
            Fecha de registro
          </Text>
          <Text style={UIStyle.semiBoldText}>
            {date &&
              `${date.getDate()} / ${
                date.getMonth() + 1
              } / ${date.getFullYear()}`}
          </Text>
        </View>
        <TouchableOpacity
          style={{...REGISTER_STYLES.btnDate, backgroundColor: Colors.primary}}
          onPress={() => setShowDate(true)}>
          <Text style={{...REGISTER_STYLES.btnDateText, color: Colors.yellow}}>
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

      <Input onChange={onChange} valueType={'concept'} placeholder="Concepto" />
      <Input
        onChange={onChange}
        valueType={'description'}
        placeholder="Descripción"
      />
      <Input
        onChange={onChange}
        valueType={'value'}
        placeholder="Valor"
        keyboardType="decimal-pad"
      />

      <TouchableOpacity
        style={{...REGISTER_STYLES.btnSave, backgroundColor: Colors.lime}}
        onPress={() => newProfit({...form, date})}>
        <Text style={{...GLOBALS.semiBoldFamily, color: Colors.secondary}}>
          Guardar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profits;
