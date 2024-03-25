import { StyleSheet, Text, View, ScrollView, React } from 'react-native';
import { Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useCallback, useEffect, useState, useContext } from 'react';
import * as ScreenOrientation from "expo-screen-orientation";
import { LinearGradient } from 'expo-linear-gradient';

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
      <LinearGradient
        colors={['rgba(129, 170, 83,1)', 'rgba(129, 170, 83,1)', 'rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)']}
        style={styles.main}
        start={[0, 1]}
        end={[0, 0]}
      >
        <View style={styles.imageColumn}>
          <Image
              source={require('../static/finished.png')}
              resizeMode='contain'
              style={{
                height: '100%',
                width: '100%'
              }}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(142,29,27)',
    flexDirection: 'row',
  },
  imageColumn: {
      flex: 1
  },
  contentColumn: {
      flex: 0.7,
      backgroundColor: 'white',
      padding: 25
  }
});
