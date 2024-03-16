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
import Hair from '../avatar/Hair';

const hairImages = {
  hair1: require('../../assets/avatar/hair/1/10.png'),
  hair2: require('../../assets/avatar/hair/2/10.png'),
};

export default function AvatarPage () {

  const [skinColor, setSkinColor] = useState(3);
  const [eyeColor, setEyeColor] = useState(10);
  const [hairType, setHairType] = useState(0);
  const [hairColor, setHairColor] = useState(0);

  const [step, setStep] = useState(1);

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
            {step == 1 &&
              <>
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
              </>
            }
            {step == 2 &&
              <>
                <View style={styles.choseOptionTitle}>
                  <Text style={styles.choseOptionTitleText}>Cor dos olhos</Text>
                </View>
                <ScrollView style={styles.choseOptionScroll}>
                  <View style={styles.choseOptionContent}>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#663300' }]} onPress={() => setEyeColor(1)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#0000FF' }]} onPress={() => setEyeColor(2)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#008000' }]} onPress={() => setEyeColor(3)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#808080' }]} onPress={() => setEyeColor(4)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#FFBF00' }]} onPress={() => setEyeColor(5)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#D4AF37' }]} onPress={() => setEyeColor(6)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#996633' }]} onPress={() => setEyeColor(7)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#8A2BE2' }]} onPress={() => setEyeColor(8)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#FF0000' }]} onPress={() => setEyeColor(9)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#000000' }]} onPress={() => setEyeColor(10)}></TouchableOpacity>
                  </View>
                </ScrollView>
              </>
            }
            {step == 3 &&
              <>
                <View style={styles.choseOptionTitle}>
                  <Text style={styles.choseOptionTitleText}>Tipo de cabelo</Text>
                </View>
                <ScrollView style={styles.choseOptionScroll}>
                  <View style={styles.choseOptionContent}>
                    <TouchableOpacity style={[styles.hairOption, { backgroundColor: '#ccc' } ]} onPress={() => setHairType(1)}>
                      <Image source={hairImages['hair1']} resizeMode="contain" style={{
                        width: '110%',
                        maxHeight: '280%'
                      }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.hairOption, { backgroundColor: '#ccc' } ]} onPress={() => setHairType(2)}>
                      <Image source={hairImages['hair2']} resizeMode="contain" style={{
                        width: '110%',
                        maxHeight: '280%'
                      }} />
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </>
            }
            {step == 4 &&
              <>
                <View style={styles.choseOptionTitle}>
                  <Text style={styles.choseOptionTitleText}>Cor do cabelo</Text>
                </View>
                <ScrollView style={styles.choseOptionScroll}>
                  <View style={styles.choseOptionContent}>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#663300' }]} onPress={() => setHairColor(1)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#0000FF' }]} onPress={() => setHairColor(2)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#008000' }]} onPress={() => setHairColor(3)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#808080' }]} onPress={() => setHairColor(4)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#FFBF00' }]} onPress={() => setHairColor(5)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#D4AF37' }]} onPress={() => setHairColor(6)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#996633' }]} onPress={() => setHairColor(7)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#8A2BE2' }]} onPress={() => setHairColor(8)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#FF0000' }]} onPress={() => setHairColor(9)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.skinOption, { backgroundColor: '#000000' }]} onPress={() => setHairColor(10)}></TouchableOpacity>
                  </View>
                </ScrollView>
              </>
            }
            <TouchableOpacity style={[styles.confirmButton]} onPress={() => { setStep(step + 1); }}>
                <Text style={styles.confirmButtonText}>Continuar</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.previewSection}>
          <SkinColor skinOption={skinColor}></SkinColor>
          <Hair hairType={hairType}></Hair>
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
        borderRadius: 20,
        position: 'relative'
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
    hairOption: {
      width: 100,
      height: 100,
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
