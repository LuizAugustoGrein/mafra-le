import React from 'react';
import { Image, View } from 'react-native';

const hairImages = {
  hair1: require('../../assets/avatar/hair/1/10.png'),
  hair2: require('../../assets/avatar/hair/2/10.png'),
};

function hair(option) {
  const imageSource = hairImages[`hair${option}`];

  return <Image source={imageSource} resizeMode="contain" style={{
    width: '100%',
    height: '95%',
    position: 'absolute',
    top: 0
  }} />
}

export default function Hair({ hairType }) {
  return hair(hairType);
}
