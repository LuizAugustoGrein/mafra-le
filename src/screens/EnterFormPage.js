import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import WelcomeDescription from '../components/WelcomeDescription';
import LogoImage from '../components/LogoImage';
import { CustomTextInput } from '../components/CustomTextInput';

export default function EnterFormPage () {
  return (
    <View>
      <LogoImage></LogoImage>

      <WelcomeDescription text="Mas antes de tudo, vamos precisar do seu número de matrícula e série que está inserido atualmente."></WelcomeDescription>
      <WelcomeDescription text="Ele será utilizado para salvar seu progresso durante toda a nossa jornada."></WelcomeDescription>

      <View style={{marginTop: 30, marginHorizontal: '10%'}}>
        <CustomTextInput placeholder={'Ex: 12345'} upperText="Nº da matrícula:"></CustomTextInput>
        <CustomTextInput placeholder={'Escolha uma opção'} upperText="Série:"></CustomTextInput>

        <CustomButton text="Continuar"></CustomButton>
      </View>
      
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
