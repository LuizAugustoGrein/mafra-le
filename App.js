import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreenPage from './src/screens/SplashScreenPage';
import HomePage from './src/screens/HomePage';
import EnterFormPage from './src/screens/EnterFormPage';
import AvatarPage from './src/screens/AvatarPage';
import NamePage from './src/screens/NamePage';
import QuestionPage from './src/screens/QuestionPage';
import CompletionPage from './src/screens/CompletionPage';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar hidden={true} />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreenPage' >
          <Stack.Screen name={"SplashScreenPage"} component={SplashScreenPage} />
          <Stack.Screen name={"HomePage"} component={HomePage} />
          <Stack.Screen name={"EnterFormPage"} component={EnterFormPage} />
          <Stack.Screen name={"AvatarPage"} component={AvatarPage} />
          <Stack.Screen name={"NamePage"} component={NamePage} />
          <Stack.Screen name={"QuestionPage"} component={QuestionPage} options={{ headerLeft: null }} />
          <Stack.Screen name={"CompletionPage"} component={CompletionPage} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}