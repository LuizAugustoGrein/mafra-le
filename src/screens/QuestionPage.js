import { StyleSheet, Text, View, ScrollView, React } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useCallback, useEffect, useState, useContext } from 'react';
import WelcomeDescription from '../components/WelcomeDescription';
import * as ScreenOrientation from "expo-screen-orientation";

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

  const [currentStep, setCurrentStep] = useState(1);

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
    console.log('response: ', response);
  }, [response]);

  useEffect(() => {
    if (pendingQuestions.length > 0) {
      setCurrentQuestion(pendingQuestions[0]);
    }
    // console.log(pendingQuestions);
  }, [pendingQuestions]);

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
            <Text style={{ fontSize: 30, fontWeight: 600, paddingBottom: 20 }}>{currentQuestion.title}</Text>
            <Text style={{ fontSize: 20, fontWeight: 400 }}>{currentQuestion.description}</Text>
            <TouchableOpacity onPress={() => { setCurrentStep(2) }} style={{ backgroundColor: currentQuestion.button_color, padding: 15, borderRadius: 15, position: 'absolute', bottom: 25, marginLeft: 25, marginRight: 25, width: '90%', alignSelf: 'center'  }}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: 600, textAlign: 'center'}}>Vamos lá</Text>
            </TouchableOpacity>
          </View>
        </>
      }
      {(currentStep == 2) &&
        <>
          <View style={styles.contentColumn}>
            <Text style={{ fontSize: 22, fontWeight: 600, paddingBottom: 25, textAlign: 'center' }}>{currentQuestion.questions[0].question}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {currentQuestion.questions[0].answers.map((answer, index) => (
                <TouchableOpacity 
                  onPress={() => { setResponseRight(answer.is_right); setResponse(answer.id); }}
                  key={index} 
                  style={[
                    { backgroundColor: '#E5EFCC', padding: 10, borderRadius: 15, width: '45%', alignSelf: 'center', marginBottom: 20, borderWidth: 3, borderColor: '#E5EFCC' },
                    (answer.id == response) ? { borderWidth: 3, borderColor: '#555'} : {}
                  ]}>
                  <Text style={{ color: 'black', fontSize: 20, textAlign: 'center'}}>{answer.response}</Text>
                </TouchableOpacity>
              ))}
            </View>
            

            <TouchableOpacity 
              disabled={!response} 
              onPress={() => answerQuestion(response)} 
              style={[
                { backgroundColor: '#BD2F0A', padding: 15, borderRadius: 15, position: 'absolute', bottom: 25, marginLeft: 25, marginRight: 25, width: '90%', alignSelf: 'center'  },
                (!response) ? { backgroundColor: '#b85f67' } : {}
              ]}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: 600, textAlign: 'center'}}>Confirmar</Text>
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
            <Text style={{ fontSize: 35, fontWeight: 600, paddingTop: 30, paddingBottom: 50, textAlign: 'center', color: 'red' }}>RESPOSTA INCORRETA</Text>
            <Text style={{ fontSize: 25, textAlign: 'center', width: '90%', alignSelf: 'center' }}>Não se preocupe, todos nós cometemos erros. O importante é aprender com eles e continuar tentando. Você está no caminho certo!</Text>

            <TouchableOpacity
              onPress={() => setCurrentStep(1)} 
              style={[
                { backgroundColor: '#BD2F0A', padding: 15, borderRadius: 15, position: 'absolute', bottom: 25, marginLeft: 25, marginRight: 25, width: '90%', alignSelf: 'center'  }
              ]}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: 600, textAlign: 'center'}}>Tentar novamente</Text>
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
            <Text style={{ fontSize: 35, fontWeight: 600, paddingTop: 80, paddingBottom: 50, textAlign: 'center', color: 'green' }}>VOCÊ ACERTOU!</Text>

            <TouchableOpacity
              onPress={() => {
                updatePendingQuestions();
                setLoading(true);
                setTimeout(function() {
                  if (pendingQuestions[0].questions.length > 1) {
                    setCurrentStep(2);
                  } else {
                    setCurrentStep(1);
                  }
                  setLoading(false);
                }, 250); 
              }} 
              style={[
                { backgroundColor: '#BD2F0A', padding: 15, borderRadius: 15, position: 'absolute', bottom: 25, marginLeft: 25, marginRight: 25, width: '90%', alignSelf: 'center'  }
              ]}>
                {(loading) ?
                  <ActivityIndicator size="small" color="white" style={{ padding: 5 }} />
                  :
                  <Text style={{ color: 'white', fontSize: 25, fontWeight: 600, textAlign: 'center'}}>Continuar</Text>
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
    imageColumn: {
        flex: 0.3,
    },
    contentColumn: {
        flex: 0.7,
        backgroundColor: 'white',
        padding: 25
    }
});
