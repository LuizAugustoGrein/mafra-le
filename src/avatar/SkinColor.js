import React from 'react';
import { Image, View } from 'react-native';

const avatarImages = {
  skin1: require('../../assets/avatar/skin/1.png'),
  skin2: require('../../assets/avatar/skin/2.png'),
  skin3: require('../../assets/avatar/skin/3.png'),
  skin4: require('../../assets/avatar/skin/4.png'),
  skin5: require('../../assets/avatar/skin/5.png')
};

function avatar(option) {
  const imageSource = avatarImages[`skin${option}`];

  return <Image source={imageSource} resizeMode="contain" style={{
    width: '100%',
    height: '95%',
    position: 'absolute',
    top: 0
  }} />
}

export default function SkinColor({ skinOption }) {
  return avatar(skinOption);
}
