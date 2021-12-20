import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import Gains from '../../components/resume/Gains';

import Header from '../../components/ui/Header';

import {COLORS} from '../../constants';
import {resumeStyle} from '../../styles';

const Resume = ({navigation, animated}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        overflow: 'hidden',
        ...animated,
      }}>
      <ScrollView>
        <Text style={resumeStyle.title}>Resumen</Text>
        <Gains />
        <View>
          <Text style={resumeStyle.title}>Animales</Text>
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default Resume;
