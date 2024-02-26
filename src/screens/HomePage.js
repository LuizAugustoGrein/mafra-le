import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import WelcomeDescription from '../components/WelcomeDescription';
import LogoImage from '../components/LogoImage';

import { useNavigation } from '@react-navigation/native';

export default function HomePage () {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(142,29,27,1)', 'rgba(59,34,38,1)', 'rgba(59,34,38,1)', 'rgba(142,29,27,1)']}
        style={styles.main}
        start={[0, 1]}
        end={[0, 0]}
      >
        <LogoImage></LogoImage>

        <Text style={styles.welcomeTitle}>Bem-vindo ao</Text>

        <View style={styles.appNameWelcome}>
          <Text style={[styles.welcomeTitle, styles.welcomeTitleColoredOne]}>Mafra</Text>
          <Text style={[styles.welcomeTitle, styles.welcomeTitleColoredTwo]}> Lê</Text>
        </View>

        <WelcomeDescription text="Sua porta de entrada para um universo de leitura e conhecimento!"></WelcomeDescription>
        <WelcomeDescription text="Abra as páginas virtuais e mergulhe em um oceano de aventuras."></WelcomeDescription>
        <WelcomeDescription text="Está pronto para desbravar Mafra e se tornar o melhor leitor?"></WelcomeDescription>
        <WelcomeDescription text="Vamos juntos nessa jornada literária de descobertas e ampliação de horizontes!"></WelcomeDescription>

        <Text style={styles.confirmationText}>Você está pronto?</Text>

        <CustomButton text="Estou Pronto!" action={() => { navigation.navigate('EnterFormPage'); }}></CustomButton>
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
