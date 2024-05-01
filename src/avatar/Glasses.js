import React from 'react';
import { Image, View } from 'react-native';
import { useEffect, useState } from "react";

const glassesImages = {
  glasses1: require('../../assets/avatar/glasses/1/10.png'),
  glasses2: require('../../assets/avatar/glasses/2/10.png')
};

const glasses1colors = {
  1: require('../../assets/avatar/glasses/1/1.png'),
  2: require('../../assets/avatar/glasses/1/2.png'),
  3: require('../../assets/avatar/glasses/1/3.png'),
  4: require('../../assets/avatar/glasses/1/4.png'),
  5: require('../../assets/avatar/glasses/1/5.png'),
  6: require('../../assets/avatar/glasses/1/6.png'),
  7: require('../../assets/avatar/glasses/1/7.png'),
  8: require('../../assets/avatar/glasses/1/8.png'),
  9: require('../../assets/avatar/glasses/1/9.png'),
  10: require('../../assets/avatar/glasses/1/10.png'),
};

const glasses2colors = {
  1: require('../../assets/avatar/glasses/2/1.png'),
  2: require('../../assets/avatar/glasses/2/2.png'),
  3: require('../../assets/avatar/glasses/2/3.png'),
  4: require('../../assets/avatar/glasses/2/4.png'),
  5: require('../../assets/avatar/glasses/2/5.png'),
  6: require('../../assets/avatar/glasses/2/6.png'),
  7: require('../../assets/avatar/glasses/2/7.png'),
  8: require('../../assets/avatar/glasses/2/8.png'),
  9: require('../../assets/avatar/glasses/2/9.png'),
  10: require('../../assets/avatar/glasses/2/10.png'),
};

export default function Glasses({ glassesType, glassesColor }) {

  const [imageSource, setImageSource] = useState(glassesImages[`glasses${glassesType}`]);

  useEffect(() => {
    setImageSource(glassesImages[`glasses${glassesType}`]);
  }, [glassesType]);

  useEffect(() => {
    if (glassesType && glassesColor) {
      var sourceURL;
      switch (glassesType) {
        case 0:
          sourceURL = null;
          break;
        case 1:
          sourceURL = glasses1colors[glassesColor];
          break;
        case 2:
          sourceURL = glasses2colors[glassesColor];
          break;
        default:
          break;
      }
      if (sourceURL) {
        setImageSource(sourceURL);
      }
    }
  }, [glassesColor]);

  return <>
    {glassesType != 0 &&
      <Image source={imageSource} resizeMode="contain" style={{
        width: '100%',
        height: '95%',
        position: 'absolute',
        top: 0
      }} />
    }
  </>
}
