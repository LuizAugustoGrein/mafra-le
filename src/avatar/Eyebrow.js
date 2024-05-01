import React from 'react';
import { Image, View } from 'react-native';
import { useEffect, useState } from "react";

const eyebrowsImages = {
  eyebrow1: require('../../assets/avatar/eyebrow/1.png'),
  eyebrow2: require('../../assets/avatar/eyebrow/2.png'),
  eyebrow3: require('../../assets/avatar/eyebrow/3.png'),
  eyebrow4: require('../../assets/avatar/eyebrow/4.png'),
  eyebrow5: require('../../assets/avatar/eyebrow/5.png'),
  eyebrow6: require('../../assets/avatar/eyebrow/6.png'),
  eyebrow7: require('../../assets/avatar/eyebrow/7.png'),
  eyebrow8: require('../../assets/avatar/eyebrow/8.png'),
  eyebrow9: require('../../assets/avatar/eyebrow/9.png'),
  eyebrow10: require('../../assets/avatar/eyebrow/10.png')
};

export default function Eyebrow({ eyebrowColor }) {

  const [imageSource, setImageSource] = useState(eyebrowsImages[`eyebrow${eyebrowColor}`]);

  useEffect(() => {
    setImageSource(eyebrowsImages[`eyebrow${eyebrowColor}`]);
  }, [eyebrowColor]);

  return <>
    <Image source={imageSource} resizeMode="contain" style={{
      width: '100%',
      height: '95%',
      position: 'absolute',
      top: 0
    }} />
  </>
}
