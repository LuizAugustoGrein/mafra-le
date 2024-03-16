import React from 'react';
import { Image, View } from 'react-native';
import { useEffect, useState } from "react";

const eyesImages = {
  eye1: require('../../assets/avatar/eye/1.png'),
  eye2: require('../../assets/avatar/eye/2.png'),
  eye3: require('../../assets/avatar/eye/3.png'),
  eye4: require('../../assets/avatar/eye/4.png'),
  eye5: require('../../assets/avatar/eye/5.png'),
  eye6: require('../../assets/avatar/eye/6.png'),
  eye7: require('../../assets/avatar/eye/7.png'),
  eye8: require('../../assets/avatar/eye/8.png'),
  eye9: require('../../assets/avatar/eye/9.png'),
  eye10: require('../../assets/avatar/eye/10.png')
};

export default function Eyes({ eyeColor }) {

  const [imageSource, setImageSource] = useState(eyesImages[`eye${eyeColor}`]);

  useEffect(() => {
    setImageSource(eyesImages[`eye${eyeColor}`]);
  }, [eyeColor]);

  return <>
    <Image source={imageSource} resizeMode="contain" style={{
      width: '100%',
      height: '95%',
      position: 'absolute',
      top: 0
    }} />
  </>
}
