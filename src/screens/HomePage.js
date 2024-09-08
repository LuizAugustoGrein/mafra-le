import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import CustomButton from '../components/CustomButton';
import WelcomeDescription from '../components/WelcomeDescription';
import LogoImage from '../components/LogoImage';
import * as ScreenOrientation from "expo-screen-orientation";

import { useNavigation } from '@react-navigation/native';

export default function HomePage () {

  const navigation = useNavigation();

  async function lockOrientation () {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.DEFAULT
    );
  }

  useFocusEffect(
    useCallback(() => {
      lockOrientation();
    }, [])
  );

  useEffect(() => {
    const backAction = () => {
        BackHandler.exitApp();
        return true;
    };

    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['rgba(142,29,27,1)', 'rgba(59,34,38,1)', 'rgba(59,34,38,1)', 'rgba(142,29,27,1)']}
        style={styles.main}
        start={[0, 1]}
        end={[0, 0]}
      >
        <LogoImage></LogoImage>

        <Text style={styles.welcomeTitle}>BEM-VINDO AO</Text>

        <View style={styles.appNameWelcome}>
          <Text style={[styles.welcomeTitle, styles.welcomeTitleColoredOne]}>MAFRA</Text>
          <Text style={[styles.welcomeTitle, styles.welcomeTitleColoredTwo]}> LÊ</Text>
        </View>

        <WelcomeDescription text="SUA PORTA DE ENTRADA PARA UM UNIVERSO DE LEITURA E CONHECIMENTO!"></WelcomeDescription>
        <WelcomeDescription text="ABRA AS PÁGINAS VIRTUAIS E MERGULHE EM UM OCEANO DE AVENTURAS."></WelcomeDescription>
        <WelcomeDescription text="ESTÁ PRONTO PARA DESBRAVAR MAFRA E SE TORNAR O MELHOR LEITOR?"></WelcomeDescription>
        <WelcomeDescription text="VAMOS JUNTOS NESSA JORNADA LITERÁRIA DE DESCOBERTAS E AMPLIAÇÃO DE HORIZONTES!"></WelcomeDescription>

        <Text style={styles.confirmationText}>VOCÊ ESTÁ PRONTO?</Text>

        <CustomButton text="ESTOU PRONTO!" action={() => { navigation.navigate('EnterFormPage'); }}></CustomButton>
      </LinearGradient>
    </ScrollView>
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
      marginTop: 20
    },
    container: {
      flex: 1,
      backgroundColor: 'rgb(142,29,27)'
    },
    main: {
      flex: 1,
      paddingTop: 80,
      paddingBottom: 80
    }
});
