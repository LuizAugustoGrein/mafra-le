import React from 'react';
import { Image, View } from 'react-native';
import { useEffect, useState } from "react";

const hairImages = {
  hair1: require('../../assets/avatar/hair/1/10.png'),
  hair2: require('../../assets/avatar/hair/2/10.png'),
  hair3: require('../../assets/avatar/hair/3/10.png'),
  hair4: require('../../assets/avatar/hair/4/10.png'),
  hair5: require('../../assets/avatar/hair/5/10.png'),
  hair6: require('../../assets/avatar/hair/6/10.png'),
  hair7: require('../../assets/avatar/hair/7/10.png'),
  hair8: {
    color1: require('../../assets/avatar/hair/8/1.png'),
    color2: require('../../assets/avatar/hair/8/2.png'),
    color3: require('../../assets/avatar/hair/8/3.png'),
    color4: require('../../assets/avatar/hair/8/4.png'),
    color5: require('../../assets/avatar/hair/8/5.png')
  }
};

const hair1colors = {
  1: require('../../assets/avatar/hair/1/1.png'),
  2: require('../../assets/avatar/hair/1/2.png'),
  3: require('../../assets/avatar/hair/1/3.png'),
  4: require('../../assets/avatar/hair/1/4.png'),
  5: require('../../assets/avatar/hair/1/5.png'),
  6: require('../../assets/avatar/hair/1/6.png'),
  7: require('../../assets/avatar/hair/1/7.png'),
  8: require('../../assets/avatar/hair/1/8.png'),
  9: require('../../assets/avatar/hair/1/9.png'),
  10: require('../../assets/avatar/hair/1/10.png'),
};

const hair2colors = {
  1: require('../../assets/avatar/hair/2/1.png'),
  2: require('../../assets/avatar/hair/2/2.png'),
  3: require('../../assets/avatar/hair/2/3.png'),
  4: require('../../assets/avatar/hair/2/4.png'),
  5: require('../../assets/avatar/hair/2/5.png'),
  6: require('../../assets/avatar/hair/2/6.png'),
  7: require('../../assets/avatar/hair/2/7.png'),
  8: require('../../assets/avatar/hair/2/8.png'),
  9: require('../../assets/avatar/hair/2/9.png'),
  10: require('../../assets/avatar/hair/2/10.png'),
};

const hair3colors = {
  1: require('../../assets/avatar/hair/3/1.png'),
  2: require('../../assets/avatar/hair/3/2.png'),
  3: require('../../assets/avatar/hair/3/3.png'),
  4: require('../../assets/avatar/hair/3/4.png'),
  5: require('../../assets/avatar/hair/3/5.png'),
  6: require('../../assets/avatar/hair/3/6.png'),
  7: require('../../assets/avatar/hair/3/7.png'),
  8: require('../../assets/avatar/hair/3/8.png'),
  9: require('../../assets/avatar/hair/3/9.png'),
  10: require('../../assets/avatar/hair/3/10.png'),
};

const hair4colors = {
  1: require('../../assets/avatar/hair/4/1.png'),
  2: require('../../assets/avatar/hair/4/2.png'),
  3: require('../../assets/avatar/hair/4/3.png'),
  4: require('../../assets/avatar/hair/4/4.png'),
  5: require('../../assets/avatar/hair/4/5.png'),
  6: require('../../assets/avatar/hair/4/6.png'),
  7: require('../../assets/avatar/hair/4/7.png'),
  8: require('../../assets/avatar/hair/4/8.png'),
  9: require('../../assets/avatar/hair/4/9.png'),
  10: require('../../assets/avatar/hair/4/10.png'),
};

const hair5colors = {
  1: require('../../assets/avatar/hair/5/1.png'),
  2: require('../../assets/avatar/hair/5/2.png'),
  3: require('../../assets/avatar/hair/5/3.png'),
  4: require('../../assets/avatar/hair/5/4.png'),
  5: require('../../assets/avatar/hair/5/5.png'),
  6: require('../../assets/avatar/hair/5/6.png'),
  7: require('../../assets/avatar/hair/5/7.png'),
  8: require('../../assets/avatar/hair/5/8.png'),
  9: require('../../assets/avatar/hair/5/9.png'),
  10: require('../../assets/avatar/hair/5/10.png'),
};

const hair6colors = {
  1: require('../../assets/avatar/hair/6/1.png'),
  2: require('../../assets/avatar/hair/6/2.png'),
  3: require('../../assets/avatar/hair/6/3.png'),
  4: require('../../assets/avatar/hair/6/4.png'),
  5: require('../../assets/avatar/hair/6/5.png'),
  6: require('../../assets/avatar/hair/6/6.png'),
  7: require('../../assets/avatar/hair/6/7.png'),
  8: require('../../assets/avatar/hair/6/8.png'),
  9: require('../../assets/avatar/hair/6/9.png'),
  10: require('../../assets/avatar/hair/6/10.png'),
};

const hair7colors = {
  1: require('../../assets/avatar/hair/7/1.png'),
  2: require('../../assets/avatar/hair/7/2.png'),
  3: require('../../assets/avatar/hair/7/3.png'),
  4: require('../../assets/avatar/hair/7/4.png'),
  5: require('../../assets/avatar/hair/7/5.png'),
  6: require('../../assets/avatar/hair/7/6.png'),
  7: require('../../assets/avatar/hair/7/7.png'),
  8: require('../../assets/avatar/hair/7/8.png'),
  9: require('../../assets/avatar/hair/7/9.png'),
  10: require('../../assets/avatar/hair/7/10.png'),
};

const noHairColors = {
  1: require('../../assets/avatar/hair/8/1.png'),
  2: require('../../assets/avatar/hair/8/2.png'),
  3: require('../../assets/avatar/hair/8/3.png'),
  4: require('../../assets/avatar/hair/8/4.png'),
  5: require('../../assets/avatar/hair/8/5.png')
};

export default function hair({ hairType, hairColor, skinColor }) {

  const [imageSource, setImageSource] = useState(hairImages[`hair${hairType}`]);

  useEffect(() => {
    if (hairType == 8) {
      setImageSource(hairImages[`hair8`][`color${skinColor}`]);
    } else {
      setImageSource(hairImages[`hair${hairType}`]);
    }
  }, [hairType]);

  useEffect(() => {
    if (hairType && hairColor) {
      var sourceURL;
      switch (hairType) {
        case 1:
          sourceURL = hair1colors[hairColor];
          break;
        case 2:
          sourceURL = hair2colors[hairColor];
          break;
        case 3:
          sourceURL = hair3colors[hairColor];
          break;
        case 4:
          sourceURL = hair4colors[hairColor];
          break;
        case 5:
          sourceURL = hair5colors[hairColor];
          break;
        case 6:
          sourceURL = hair6colors[hairColor];
          break;
        case 7:
          sourceURL = hair7colors[hairColor];
          break;
        case 8:
          sourceURL = noHairColors[skinColor];
          break;
        default:
          break;
      }
      if (sourceURL) {
        setImageSource(sourceURL);
      }
    }
  }, [hairColor, skinColor]);

  return <>
    <Image source={imageSource} resizeMode="contain" style={{
      width: '100%',
      height: '95%',
      position: 'absolute',
      top: 0
    }} />
  </>
}
