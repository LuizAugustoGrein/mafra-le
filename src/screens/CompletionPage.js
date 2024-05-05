import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { useCallback } from 'react';
import * as ScreenOrientation from "expo-screen-orientation";
import { useFocusEffect } from '@react-navigation/native';

export default function CompletionPage () {

  async function lockOrientation () {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  }

  useFocusEffect(
    useCallback(() => {
      lockOrientation();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../static/finished-back.png')}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.upperTextView}>
          <Text style={styles.upperText}>Parabéns, você se tornou o melhor de Mafra!</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Nos vemos em breve, prontos para novas jornadas!</Text>
        </View>
        <View style={styles.imageView}>
          <Image source={require('../static/best-reader-logo.png')} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  upperTextView: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: '65%',
    alignItems: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  upperText: {
    textAlign: 'center',
    color: '#FEAB00',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#7F5600',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 1,
  },
  textView: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FEAB00',
    fontSize: 25,
    fontWeight: 'bold',
    bottom: 30,
    textShadowColor: '#7F5600',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 1,
  },
  imageView: {
    position: 'absolute',
    top: 50,
    right: 0,
    width: '35%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
