import { StyleSheet, Text, View, ScrollView, React, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity, ActivityIndicator, BackHandler } from 'react-native';
import { useCallback, useEffect, useState, useContext } from 'react';
import WelcomeDescription from '../components/WelcomeDescription';
import * as ScreenOrientation from "expo-screen-orientation";

import SkinColor from '../avatar/SkinColor';
import Hair from '../avatar/Hair';
import Eyes from '../avatar/Eyes';
import Eyebrow from '../avatar/Eyebrow';
import Glasses from '../avatar/Glasses';

import { useNavigation } from '@react-navigation/native';

import { useFocusEffect } from '@react-navigation/native';

import { AuthContext } from '../contexts/auth';

import axios from 'axios';

export default function QuestionPage () {

  const { updatePendingQuestions, pendingQuestions, user } = useContext(AuthContext);

  const [currentQuestion, setCurrentQuestion] = useState({});

  const [response, setResponse] = useState();
  const [responseRight, setResponseRight] = useState();

  const [loading, setLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(-1);

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

  useEffect(() => {
    updatePendingQuestions();
  }, []);

  useEffect(() => {
    if (pendingQuestions.length > 0) {
      setCurrentQuestion(pendingQuestions[0]);
    }
  }, [pendingQuestions]);

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

  async function answerQuestion (resp) {
    if (responseRight) {

      await axios.post('https://luizgrein.com/projects/mafra-le/api/books/save-response', {
        registration_number: user.registration_number,
        class: user.class,
        answers_id: resp
      });

      setResponseRight(null);
      setResponse(null);
    
      setCurrentStep(4);
    } else {
      setResponseRight(null);
      setResponse(null);
  
      setCurrentStep(3);
    }
  }

  return (
    <View style={styles.container}>
      {(currentStep == -1) &&
        <>
          <View style={{ flex: 1 }}>
            <LinearGradient
              colors={['#A10000', '#FE0001', '#A10000']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1 }}
            >
              <View style={{
                position: 'absolute',
                top: 120,
                left: 20,
                flexDirection: 'column'
              }}>
                <Image
                  source={require('../../assets/coracao.png')}
                  style={{
                    width: 80,
                    height: 73,
                    marginBottom: 40
                  }}
                />
                <Image
                  source={require('../../assets/coracao.png')}
                  style={{
                    width: 80,
                    height: 73
                  }}
                />
              </View>

              <View style={{
                position: 'absolute',
                top: 120,
                right: 20,
                flexDirection: 'column'
              }}>
                <Image
                  source={require('../../assets/coracao.png')}
                  style={{
                    width: 80,
                    height: 73,
                    marginBottom: 40
                  }}
                />
                <Image
                  source={require('../../assets/coracao.png')}
                  style={{
                    width: 80,
                    height: 73
                  }}
                />
              </View>

              <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingTop: 20
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 25,
                  paddingHorizontal: 20,
                  textAlign: 'center'
                }}>
                  PARA UMA EXPERIÊNCIA MAIS FELIZ E ACOLHEDORA, CHAME SEUS PAIS, TIOS OU AVÓS PARA LER COM VOCÊ.
                </Text>
              </View>

              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  color: 'white',
                  fontSize: 30,
                  paddingHorizontal: 80,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  textShadowColor: 'black',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 1
                }}>
                  O AMOR DE UMA FAMÍLIA É O MAIOR PRESENTE DA VIDA.
                </Text>
              </View>

              <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: 30
              }}>
                <TouchableOpacity style={{
                  backgroundColor: 'white',
                  paddingVertical: 15,
                  paddingHorizontal: 30,
                  borderRadius: 15
                }}
                onPress={() => { setCurrentStep(0) }}
                >
                  <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#A10000'
                  }}>INICIAR PERGUNTAS</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </>
      }
      {(currentStep == 0) &&
        <>
          <View style={styles.container}>
            <ImageBackground
              source={require('../../assets/avatar/book-choice-background.png')}
              style={styles.imageBg}
              resizeMode="cover"
            >
              <View style={styles.previewSection}>
                  {user.avatar_hair == 2 &&
                    <Hair hairType={user.avatar_hair} hairColor={user.avatar_hair_color} skinColor={user.avatar_skin}></Hair>
                  }
                  <SkinColor skinOption={user.avatar_skin}></SkinColor>
                  <Eyebrow eyebrowColor={user.avatar_eyebrow} ></Eyebrow>
                  {user.avatar_hair != 2 &&
                    <Hair hairType={user.avatar_hair} hairColor={user.avatar_hair_color} skinColor={user.avatar_skin}></Hair>
                  }
                  <Eyes eyeColor={user.avatar_eye} ></Eyes>
                  <Glasses glassesType={user.avatar_glasses} glassesColor={user.avatar_glasses_color} ></Glasses>
              </View>
              <Image
                source={{ uri: currentQuestion.left_image }}
                style={{
                  width: 70,
                  height: 100,
                  position: 'absolute',
                  top: '35%',
                  left: '65%',
                  transform: [{ rotate: '-15deg' }]
                }}
              />
              <TouchableOpacity onPress={() => { setCurrentStep(1) }} style={{ backgroundColor: 'green', padding: 10, borderRadius: 15, position: 'absolute', bottom: 30, marginLeft: 30, marginRight: 25, width: '40%', alignSelf: 'left'  }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 600, textAlign: 'center'}}>CONTINUAR</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </>
      }
      {(currentStep == 1) &&
        <>
          <View style={styles.imageColumn}>
            <Image
                source={{ uri: currentQuestion.left_image }}
                resizeMode='cover'
                style={{
                  height: '100%',
                  width: '100%'
                }}
            />
          </View>
          <View style={styles.contentColumn}>
            <Text style={{ fontSize: 25, fontWeight: 600, paddingBottom: 10 }}>{currentQuestion.title}</Text>
            <ScrollView style={{ marginBottom: 60 }}>
              <Text style={{ fontSize: 18, fontWeight: 400 }}>{currentQuestion.description}</Text>
            </ScrollView>
            <TouchableOpacity onPress={() => { setCurrentStep(2) }} style={{ backgroundColor: currentQuestion.button_color, padding: 10, borderRadius: 15, position: 'absolute', bottom: 25, marginLeft: 25, marginRight: 25, width: '90%', alignSelf: 'center'  }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 600, textAlign: 'center'}}>VAMOS LÁ</Text>
            </TouchableOpacity>
          </View>
        </>
      }
      {(currentStep == 2) &&
        <>
          <View style={styles.contentColumn}>
            <Text style={{ fontSize: 18, fontWeight: 600, paddingBottom: 20, textAlign: 'center' }}>{currentQuestion.questions[0].question}</Text>
            <ScrollView style={{ marginBottom: 60 }}>
              {currentQuestion.questions[0].answers.map((answer, index) => (
                <TouchableOpacity 
                  onPress={() => { setResponseRight(answer.is_right); setResponse(answer.id); }}
                  key={index} 
                  style={[
                    { backgroundColor: '#E5EFCC', padding: 8, borderRadius: 15, width: '85%', alignSelf: 'center', marginBottom: 15, borderWidth: 3, borderColor: '#E5EFCC' },
                    (answer.id == response) ? { borderWidth: 3, borderColor: '#555'} : {}
                  ]}>
                  <Text style={{ color: 'black', fontSize: 16, textAlign: 'center'}}>{answer.response}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            

            <TouchableOpacity 
              disabled={!response} 
              onPress={() => answerQuestion(response)} 
              style={[
                { backgroundColor: '#BD2F0A', padding: 10, borderRadius: 15, position: 'absolute', bottom: 25, marginLeft: 25, marginRight: 25, width: '90%', alignSelf: 'center'  },
                (!response) ? { backgroundColor: '#b85f67' } : {}
              ]}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 600, textAlign: 'center'}}>CONFIRMAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageColumn}>
            <Image
                source={{ uri: currentQuestion.right_image }}
                resizeMode='cover'
                style={{
                  height: '100%',
                  width: '100%'
                }}
            />
          </View>
        </>
      }
      {(currentStep == 3) &&
        <>
          <View style={styles.contentColumn}>
            <Text style={{ fontSize: 30, fontWeight: 600, paddingTop: 20, paddingBottom: 30, textAlign: 'center', color: 'red' }}>RESPOSTA INCORRETA</Text>
            <Text style={{ fontSize: 20, textAlign: 'center', width: '90%', alignSelf: 'center' }}>NÃO SE PREOCUPE, TODOS NÓS COMETEMOS ERROS. O IMPORTANTE É APRENDER COM ELES E CONTINUAR TENTANDO. VOCÊ ESTÁ NO CAMINHO CERTO!</Text>

            <TouchableOpacity
              onPress={() => setCurrentStep(1)} 
              style={[
                { backgroundColor: '#BD2F0A', padding: 10, borderRadius: 15, position: 'absolute', bottom: 25, marginLeft: 25, marginRight: 25, width: '90%', alignSelf: 'center'  }
              ]}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 600, textAlign: 'center'}}>TENTAR NOVAMENTE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageColumn}>
            <Image
                source={{ uri: currentQuestion.right_image }}
                resizeMode='cover'
                style={{
                  height: '100%',
                  width: '100%'
                }}
            />
          </View>
        </>
      }
      {(currentStep == 4) &&
        <>
          <View style={styles.contentColumn}>
            <Text style={{ fontSize: 25, fontWeight: 600, paddingTop: 100, paddingBottom: 50, textAlign: 'center', color: 'green' }}>VOCÊ ACERTOU!</Text>

            <TouchableOpacity
              onPress={() => {
                updatePendingQuestions();
                setLoading(true);
                setTimeout(function() {
                  if (pendingQuestions[0].questions.length > 1) {
                    setCurrentStep(2);
                  } else {
                    setCurrentStep(-1);
                  }
                  setLoading(false);
                }, 250); 
              }} 
              style={[
                { backgroundColor: '#BD2F0A', padding: 10, borderRadius: 15, position: 'absolute', bottom: 25, marginLeft: 25, marginRight: 25, width: '90%', alignSelf: 'center'  }
              ]}>
                {(loading) ?
                  <ActivityIndicator size="small" color="white" style={{ padding: 2 }} />
                  :
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: 600, textAlign: 'center'}}>CONTINUAR</Text>
                }
            </TouchableOpacity>
          </View>
          <View style={styles.imageColumn}>
            <Image
                source={{ uri: currentQuestion.right_image }}
                resizeMode='cover'
                style={{
                  height: '100%',
                  width: '100%'
                }}
            />
          </View>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(142,29,27)',
      flexDirection: 'row',
    },
    imageBg: {
      flex: 1,
      position: 'relative'
    },
    imageColumn: {
        flex: 0.3,
    },
    contentColumn: {
        flex: 0.7,
        backgroundColor: 'white',
        padding: 25
    },
    previewSection: {
      height: '100%',
      marginLeft: 150
    }
});
