import { StyleSheet, Text, View, ScrollView, React } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';
import { useCallback, useEffect, useState, useContext } from 'react';
import WelcomeDescription from '../components/WelcomeDescription';
import * as ScreenOrientation from "expo-screen-orientation";

import { useNavigation } from '@react-navigation/native';

import { useFocusEffect } from '@react-navigation/native';

import { AuthContext } from '../contexts/auth';

export default function QuestionPage () {

  const { updateAvatar } = useContext(AuthContext);

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
        {/* <>
          <View style={styles.imageColumn}>
            <Image
                source={{ uri: 'https://luizgrein.com/projects/mafra-le/static/capa1.png' }}
                resizeMode='cover'
                style={{
                  height: '100%',
                  width: '100%'
                }}
            />
          </View>
          <View style={styles.contentColumn}>
            <Text style={{ fontSize: 35, fontWeight: 600, paddingBottom: 20 }}>Restaurante Animal</Text>
            <Text style={{ fontSize: 23, fontWeight: 400 }}>O livro apresenta um restaurante que atende ao paladar de diferentes animais. Por meio de divertidas rimas, conhecemos a preferência alimentar do cachorro, da pulga, do peixe, da baleia, da vaca, do besouro... Esse restaurante animal atende a gostos refinados ou esquisitos, a depender da exigência do cliente!</Text>
            <TouchableOpacity style={{ backgroundColor: '#BD2F0A', padding: 15, borderRadius: 15, position: 'absolute', bottom: 25, marginLeft: 25, marginRight: 25, width: '90%', alignSelf: 'center'  }}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: 600, textAlign: 'center'}}>Vamos lá</Text>
            </TouchableOpacity>
          </View>
        </> */}
        <>
          <View style={styles.contentColumn}>
            <Text style={{ fontSize: 30, fontWeight: 600, paddingBottom: 25, textAlign: 'center' }}>TODOS OS ANIMAIS SÃO SERES VIVOS E PRECISAM:</Text>
            <TouchableOpacity style={{ backgroundColor: '#E5EFCC', padding: 15, borderRadius: 15, width: '80%', alignSelf: 'center', marginBottom: 20 }}>
              <Text style={{ color: 'black', fontSize: 25, textAlign: 'center'}}>SE ALIMENTAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#E5EFCC', padding: 15, borderRadius: 15, width: '80%', alignSelf: 'center', marginBottom: 20 }}>
              <Text style={{ color: 'black', fontSize: 25, textAlign: 'center'}}>APENAS GANHAR CARINHO</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ backgroundColor: '#BD2F0A', padding: 15, borderRadius: 15, position: 'absolute', bottom: 25, marginLeft: 25, marginRight: 25, width: '90%', alignSelf: 'center'  }}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: 600, textAlign: 'center'}}>Confirmar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageColumn}>
            <Image
                source={{ uri: 'https://luizgrein.com/projects/mafra-le/static/capa2.png' }}
                resizeMode='cover'
                style={{
                  height: '100%',
                  width: '100%'
                }}
            />
          </View>
        </>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(142,29,27)',
      flexDirection: 'row',
    },
    imageColumn: {
        flex: 0.3,
    },
    contentColumn: {
        flex: 0.7,
        backgroundColor: 'white',
        padding: 25
    }
});
