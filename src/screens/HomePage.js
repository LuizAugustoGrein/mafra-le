import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import WelcomeDescription from '../components/WelcomeDescription';
import LogoImage from '../components/LogoImage';

export default function HomePage () {
  return (
    <View>
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

      <CustomButton text="Estou Pronto!"></CustomButton>
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
    }
});
