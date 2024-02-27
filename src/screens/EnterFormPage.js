import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, React } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';
import { useCallback } from 'react';
import CustomButton from '../components/CustomButton';
import WelcomeDescription from '../components/WelcomeDescription';
import LogoImage from '../components/LogoImage';
import { CustomTextInput } from '../components/CustomTextInput';
import * as ScreenOrientation from "expo-screen-orientation";

import { useNavigation } from '@react-navigation/native';

import { useFocusEffect } from '@react-navigation/native';

export default function EnterFormPage () {

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

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(142,29,27,1)', 'rgba(59,34,38,1)', 'rgba(59,34,38,1)', 'rgba(142,29,27,1)']}
        style={styles.main}
        start={[0, 1]}
        end={[0, 0]}
      >
        <LogoImage></LogoImage>

        <WelcomeDescription text="Mas antes de tudo, vamos precisar do seu número de matrícula e série que está inserido atualmente."></WelcomeDescription>
        <WelcomeDescription text="Ele será utilizado para salvar seu progresso durante toda a nossa jornada."></WelcomeDescription>

        <View style={{marginTop: 30, marginHorizontal: '10%'}}>
          <CustomTextInput placeholder={'Ex: 12345'} upperText="Nº da matrícula:"></CustomTextInput>
          <CustomTextInput placeholder={'Escolha uma opção'} upperText="Série:"></CustomTextInput>

          <CustomButton text="Confirmar" action={() => { navigation.navigate('AvatarPage'); }}></CustomButton>
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
      paddingTop: 80
    }
});
