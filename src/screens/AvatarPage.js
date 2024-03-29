import { StyleSheet, Text, View, ScrollView, React } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';
import { useCallback, useEffect, useState, useContext } from 'react';
import WelcomeDescription from '../components/WelcomeDescription';
import * as ScreenOrientation from "expo-screen-orientation";

import { useNavigation } from '@react-navigation/native';

import { useFocusEffect } from '@react-navigation/native';

import { AuthContext } from '../contexts/auth';

import SkinColor from '../avatar/SkinColor';
import Hair from '../avatar/Hair';
import Eyes from '../avatar/Eyes';

const hairImages = {
  hair1: require('../../assets/avatar/hair/1/10.png'),
  hair2: require('../../assets/avatar/hair/2/10.png'),
  hair3: require('../../assets/avatar/hair/3/10.png'),
  hair4: require('../../assets/avatar/hair/4/10.png'),
};

export default function AvatarPage () {

  const { updateAvatar } = useContext(AuthContext);

  const [skinColor, setSkinColor] = useState(3);
  const [eyeColor, setEyeColor] = useState(10);
  const [hairType, setHairType] = useState(0);
  const [hairColor, setHairColor] = useState(10);

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
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#FFE1B6' }, (skinColor == 1) ? styles.avatarOptionSelected : {}]} onPress={() => setSkinColor(1)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#EBC896' }, (skinColor == 2) ? styles.avatarOptionSelected : {}]} onPress={() => setSkinColor(2)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#FDC473' }, (skinColor == 3) ? styles.avatarOptionSelected : {}]} onPress={() => setSkinColor(3)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#9D835E' }, (skinColor == 4) ? styles.avatarOptionSelected : {}]} onPress={() => setSkinColor(4)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#442B22' }, (skinColor == 5) ? styles.avatarOptionSelected : {}]} onPress={() => setSkinColor(5)}></TouchableOpacity>
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
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#663300' }, (eyeColor == 1) ? styles.avatarOptionSelected : {}]} onPress={() => setEyeColor(1)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#0000FF' }, (eyeColor == 2) ? styles.avatarOptionSelected : {}]} onPress={() => setEyeColor(2)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#008000' }, (eyeColor == 3) ? styles.avatarOptionSelected : {}]} onPress={() => setEyeColor(3)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#808080' }, (eyeColor == 4) ? styles.avatarOptionSelected : {}]} onPress={() => setEyeColor(4)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#FFBF00' }, (eyeColor == 5) ? styles.avatarOptionSelected : {}]} onPress={() => setEyeColor(5)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#D4AF37' }, (eyeColor == 6) ? styles.avatarOptionSelected : {}]} onPress={() => setEyeColor(6)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#996633' }, (eyeColor == 7) ? styles.avatarOptionSelected : {}]} onPress={() => setEyeColor(7)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#8A2BE2' }, (eyeColor == 8) ? styles.avatarOptionSelected : {}]} onPress={() => setEyeColor(8)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#FF0000' }, (eyeColor == 9) ? styles.avatarOptionSelected : {}]} onPress={() => setEyeColor(9)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#000000' }, (eyeColor == 10) ? styles.avatarOptionSelected : {}]} onPress={() => setEyeColor(10)}></TouchableOpacity>
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
                    <TouchableOpacity style={[styles.hairOption, { backgroundColor: '#ccc' }, (hairType == 1) ? styles.avatarOptionSelected : {} ]} onPress={() => setHairType(1)}>
                      <Image source={hairImages['hair1']} resizeMode="contain" style={{
                        width: '110%',
                        maxHeight: '280%'
                      }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.hairOption, { backgroundColor: '#ccc' }, (hairType == 2) ? styles.avatarOptionSelected : {} ]} onPress={() => setHairType(2)}>
                      <Image source={hairImages['hair2']} resizeMode="contain" style={{
                        width: '110%',
                        maxHeight: '280%'
                      }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.hairOption, { backgroundColor: '#ccc' }, (hairType == 3) ? styles.avatarOptionSelected : {} ]} onPress={() => setHairType(3)}>
                      <Image source={hairImages['hair3']} resizeMode="contain" style={{
                        width: '110%',
                        maxHeight: '280%',
                        marginLeft: 5
                      }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.hairOption, { backgroundColor: '#ccc' }, (hairType == 4) ? styles.avatarOptionSelected : {} ]} onPress={() => setHairType(4)}>
                      <Image source={hairImages['hair4']} resizeMode="contain" style={{
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
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#663300' }, (hairColor == 1) ? styles.avatarOptionSelected : {}]} onPress={() => setHairColor(1)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#0000FF' }, (hairColor == 2) ? styles.avatarOptionSelected : {}]} onPress={() => setHairColor(2)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#008000' }, (hairColor == 3) ? styles.avatarOptionSelected : {}]} onPress={() => setHairColor(3)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#808080' }, (hairColor == 4) ? styles.avatarOptionSelected : {}]} onPress={() => setHairColor(4)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#FFBF00' }, (hairColor == 5) ? styles.avatarOptionSelected : {}]} onPress={() => setHairColor(5)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#D4AF37' }, (hairColor == 6) ? styles.avatarOptionSelected : {}]} onPress={() => setHairColor(6)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#996633' }, (hairColor == 7) ? styles.avatarOptionSelected : {}]} onPress={() => setHairColor(7)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#8A2BE2' }, (hairColor == 8) ? styles.avatarOptionSelected : {}]} onPress={() => setHairColor(8)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#FF0000' }, (hairColor == 9) ? styles.avatarOptionSelected : {}]} onPress={() => setHairColor(9)}></TouchableOpacity>
                    <TouchableOpacity style={[styles.avatarOption, { backgroundColor: '#000000' }, (hairColor == 10) ? styles.avatarOptionSelected : {}]} onPress={() => setHairColor(10)}></TouchableOpacity>
                  </View>
                </ScrollView>
              </>
            }
            {(step == 1) &&
              <TouchableOpacity style={[styles.confirmButton]} onPress={() => { setStep(step + 1); }}>
                  <Text style={styles.confirmButtonText}>Continuar</Text>
              </TouchableOpacity>
            }
            {(step == 2) &&
              <View style={{ display: 'flex', flexDirection: 'row', marginRight: 40 }}>
                <TouchableOpacity style={[styles.backButtonHalf]} onPress={() => { setStep(step - 1); }}>
                  <Text style={styles.confirmButtonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.confirmButtonHalf]} onPress={() => { setStep(step + 1); }}>
                  <Text style={styles.confirmButtonText}>Continuar</Text>
                </TouchableOpacity>
              </View>
            }
            {(step == 3) &&
              <View style={{ display: 'flex', flexDirection: 'row', marginRight: 40 }}>
                <TouchableOpacity style={[styles.backButtonHalf]} onPress={() => { setStep(step - 1); }}>
                  <Text style={styles.confirmButtonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.confirmButtonHalf]} onPress={() => { setStep(step + 1); }}>
                  <Text style={styles.confirmButtonText}>Continuar</Text>
                </TouchableOpacity>
              </View>
            }
            {(step == 4) &&
              <View style={{ display: 'flex', flexDirection: 'row', marginRight: 40 }}>
                <TouchableOpacity style={[styles.backButtonHalf]} onPress={() => { setStep(step - 1); }}>
                  <Text style={styles.confirmButtonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.confirmButtonHalf]} onPress={() => { updateAvatar(skinColor, eyeColor, hairType, hairColor) }}>
                  <Text style={styles.confirmButtonText}>Confirmar</Text>
                </TouchableOpacity>
              </View>
            }
        </View>
        <View style={styles.previewSection}>
          <SkinColor skinOption={skinColor}></SkinColor>
          <Hair hairType={hairType} hairColor={hairColor}></Hair>
          <Eyes eyeColor={eyeColor} ></Eyes>
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
    avatarOption: {
        width: 70,
        height: 70,
        margin: 5,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10
    },
    avatarOptionSelected: {
      borderWidth: 5,
      borderColor: 'green'
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
    backButtonHalf: {
      backgroundColor: '#383838',
      padding: 10,
      width: '50%',
      borderBottomLeftRadius: 15,
    },
    confirmButtonHalf: {
      backgroundColor: 'green',
      padding: 10,
      width: '50%',
      borderBottomRightRadius: 15,
    },
    confirmButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});
