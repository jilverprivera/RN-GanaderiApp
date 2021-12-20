import React, {useContext} from 'react';
import {Switch, Text, View} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {AddNewStyle} from '../../styles';

const BoughtAnimal = () => {
  const {addNew} = useContext(AppContext);
  const {boughtAnimal, handleAnimal} = addNew;
  return (
    <View>
      <View style={AddNewStyle.wrapper}>
        <Text style={AddNewStyle.text}>¿Animal comprado?</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={boughtAnimal ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => handleAnimal('bought')}
          value={boughtAnimal}
        />
      </View>
      {boughtAnimal && <Text>Bought</Text>}
    </View>
  );
};

export default BoughtAnimal;
