import React from 'react';
import {Text, View} from 'react-native';
import {resumeStyle} from '../../styles';

const Gains = () => {
  return (
    <View style={resumeStyle.gainContainer}>
      <View style={resumeStyle.gainWrapper}>
        <View style={resumeStyle.investedWrapper}>
          <View style={resumeStyle.invested}>
            <Text style={resumeStyle.gainTitle}>Total invertido</Text>
            <Text style={resumeStyle.gainValue}>$ 25.000.000 COP</Text>
          </View>
          <View style={resumeStyle.invested}>
            <Text style={resumeStyle.gainTitle}>Total ganancias</Text>
            <Text style={resumeStyle.gainValue}>$ 45.000.000 COP</Text>
          </View>
        </View>
        <View style={resumeStyle.invested}>
          <Text style={resumeStyle.gainTitle}>Margen de ganancias</Text>
          <Text style={resumeStyle.gainValue}>$ 20.000.000 COP</Text>
        </View>
      </View>
    </View>
  );
};

export default Gains;
