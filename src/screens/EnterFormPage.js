import { StyleSheet, View, React, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useState, useContext } from 'react';
import CustomButton from '../components/CustomButton';
import WelcomeDescription from '../components/WelcomeDescription';
import LogoImage from '../components/LogoImage';
import { CustomTextInput } from '../components/CustomTextInput';
import * as ScreenOrientation from "expo-screen-orientation";
import SelectDropdown from 'react-native-select-dropdown';

import { useNavigation } from '@react-navigation/native';

import { useFocusEffect } from '@react-navigation/native';

const selectOptions = ["Escolha uma opção", "1° Ano", "2° Ano", "3° Ano", "4° Ano", "5° Ano"];

import { AuthContext } from '../contexts/auth';

export default function EnterFormPage () {

  const { verifyLogin } = useContext(AuthContext);

  const [registrationNumber, setRegistrationNumber] = useState();

  const [error, setError] = useState();

  const [isFormOK, setIsFormOK] = useState(false);

  const navigation = useNavigation();

  async function lockOrientation () {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.DEFAULT
    );
  }

  async function login () {
    var loginResult = await verifyLogin(registrationNumber);
    if (loginResult && loginResult.error) {
      setError('Nº DE MATRÍCULA INCORRETO.');
    } else {
      setError(null);
    }
  }

  useFocusEffect(
    useCallback(() => {
      lockOrientation();
    }, [])
  );

  useEffect(() => {
    setError(null);
    if (registrationNumber && registrationNumber.length == 8) {
      setIsFormOK(true);
    } else {
      setIsFormOK(false);
    }
  }, [registrationNumber]);

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['rgba(142,29,27,1)', 'rgba(59,34,38,1)', 'rgba(59,34,38,1)', 'rgba(142,29,27,1)']}
        style={styles.main}
        start={[0, 1]}
        end={[0, 0]}
      >
        <LogoImage></LogoImage>

        <WelcomeDescription text="MAS ANTES DE TUDO, VAMOS PRECISAR DO SEU NÚMERO DE MATRÍCULA."></WelcomeDescription>
        <WelcomeDescription text="ELE SERÁ UTILIZADO PARA SALVAR SEU PROGRESSO DURANTE TODA A NOSSA JORNADA."></WelcomeDescription>

        <View style={{marginTop: 30, marginHorizontal: '10%'}}>
          <CustomTextInput placeholder={'EX: 12345678'} upperText="Nº DE MATRÍCULA:" state={registrationNumber} setState={setRegistrationNumber} maxLength={8} keyboardType={'numeric'}></CustomTextInput>
          {error &&
            <Text style={{ color: 'red', fontSize: 16, textAlign: 'center', fontWeight: 800, paddingTop: 10 }}>{error}</Text>
          }

          <CustomButton text="CONFIRMAR" action={() => login()} disabled={!isFormOK}></CustomButton>
        </View>
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
      marginTop: 30
    },
    container: {
      flex: 1,
      backgroundColor: 'rgb(142,29,27)'
    },
    main: {
      flex: 1,
      paddingTop: 80,
      paddingBottom: 80
    },
    upperText: {
      color: 'white',
      alignSelf: 'center',
      fontSize: 20,
      marginTop: 20
  }
});
