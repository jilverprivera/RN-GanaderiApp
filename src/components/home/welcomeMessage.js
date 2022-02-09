import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import {AuthContext} from '../../context/AuthContext';
import {ThemeContext} from '../../context/ThemeContext';
import {useCurrentHour} from '../../hooks';

import {HOME_STYLES} from './HOME_STYLES';

const WelcomeMessage = () => {
  const {userState} = useContext(AuthContext);
  const {userName} = userState;
  const {Colors} = useContext(ThemeContext);

  const {time} = useCurrentHour();
  return (
    <View style={HOME_STYLES.greetingContainer}>
      <Text
        style={{
          ...HOME_STYLES.greetingText,
          color: Colors.secondary,
        }}>
        {time === 'morning' && 'Buenos días'}
        {time === 'afternoon' && 'Buenos tardes'}
        {time === 'night' && 'Buenos noches'}
      </Text>
      <Text
        style={{
          ...HOME_STYLES.userName,
          color: Colors.secondary,
        }}>
        {userName}
      </Text>
    </View>
  );
};

export default WelcomeMessage;
