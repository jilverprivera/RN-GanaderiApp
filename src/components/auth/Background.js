import {Image, StyleSheet} from 'react-native';
import React from 'react';

import BG_IMAGE from '../../../assets/images/background.png';
import {SIZES} from '../../constants';

const Background = () => {
  return <Image source={BG_IMAGE} style={styles.background} />;
};

export default Background;

const styles = StyleSheet.create({
  background: {
    height: SIZES.height,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
