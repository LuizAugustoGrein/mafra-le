import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, React } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import CustomButton from '../components/CustomButton';
import WelcomeDescription from '../components/WelcomeDescription';
import LogoImage from '../components/LogoImage';
import { CustomTextInput } from '../components/CustomTextInput';
import * as ScreenOrientation from "expo-screen-orientation";

import { useNavigation } from '@react-navigation/native';

import { useFocusEffect } from '@react-navigation/native';

import SkinColor from '../avatar/SkinColor';

export default function AvatarPage () {

  const [skinColor, setSkinColor] = useState(3);

  const navigation = useNavigation();

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
        colors={['rgba(142,29,27,1)', 'rgba(59,34,38,1)', 'rgba(59,34,38,1)', 'rgba(142,29,27,1)']}
        style={styles.main}
        start={[1, 0]}
        end={[0, 0]}
      >
        <View style={styles.optionsSection}>
            <WelcomeDescription text="Já começaremos a nossa grande aventura, mas primeiro, como você se parece?"></WelcomeDescription>
            <View style={styles.choseOptionTitle}>
                <Text style={styles.choseOptionTitleText}>Tom de pele</Text>
            </View>
            <ScrollView style={styles.choseOptionScroll}>
                <View style={styles.choseOptionContent}>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#FFE1B6' }]} onPress={() => setSkinColor(1)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#EBC896' }]} onPress={() => setSkinColor(2)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#FDC473' }]} onPress={() => setSkinColor(3)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#9D835E' }]} onPress={() => setSkinColor(4)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#442B22' }]} onPress={() => setSkinColor(5)}></TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity style={[styles.confirmButton]}>
                <Text style={styles.confirmButtonText}>Continuar</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.previewSection}>
          <SkinColor skinOption={skinColor}></SkinColor>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
    welcomeTitle: {
      color: 'white',
      fontSize: 40,
      textAlign: 'center',
      fontWeight: '700'
    },
    appNameWelcome: {
      flexDirection:'row',
      flexWrap:'wrap',
      alignSelf: 'center',
      marginBottom: 20
    },
    welcomeTitleColoredOne: {
      color: 'red'
    },
    welcomeTitleColoredTwo: {
      color: 'green'
    },
    confirmationText: {
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
      fontWeight: '700',
      marginTop: 30
    },
    container: {
      flex: 1,
      backgroundColor: 'rgb(142,29,27)'
    },
    main: {
      flex: 1,
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 60
    },
    optionsSection: {
        flex: 0.7,
    },
    previewSection: {
        flex: 0.3,
        backgroundColor: '#B37E7E',
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 20
    },
    choseOptionTitle: {
        backgroundColor: 'white',
        marginRight: 40,
        marginTop: 10,
        padding: 10,
        borderBottomWidth: 2,
        borderTopEndRadius: 15,
        borderTopLeftRadius: 15
    },
    choseOptionTitleText: {
        fontSize: 20
    },
    choseOptionScroll: {
        flex: 1,
        marginRight: 40,
        backgroundColor: 'white',
        padding: 10
    },
    choseOptionContent: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginBottom: 20
    },
    avatarPreview: {
        width: '90%',
        alignSelf: 'center',
        height: '100%',
        resizeMode: 'contain',
    },
    skinOption: {
        width: 70,
        height: 70,
        margin: 5,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10
    },
    confirmButton: {
        backgroundColor: 'green',
        marginRight: 40,
        padding: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    confirmButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});
