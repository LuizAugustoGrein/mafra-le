import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreenPage from './src/screens/SplashScreenPage';
import HomePage from './src/screens/HomePage';
import EnterFormPage from './src/screens/EnterFormPage';
import AvatarPage from './src/screens/AvatarPage';

const Stack = createNativeStackNavigator();

import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreenPage' >
          <Stack.Screen name={"SplashScreenPage"} component={SplashScreenPage} />
          <Stack.Screen name={"HomePage"} component={HomePage} />
          <Stack.Screen name={"EnterFormPage"} component={EnterFormPage} />
          <Stack.Screen name={"AvatarPage"} component={AvatarPage} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <LinearGradient
    //     colors={['rgba(142,29,27,1)', 'rgba(59,34,38,1)', 'rgba(59,34,38,1)', 'rgba(142,29,27,1)']}
    //     style={styles.main}
    //     start={[0, 1]}
    //     end={[0, 0]}
    //   >
    //     {/* <EnterFormPage></EnterFormPage> */}
    //     <HomePage></HomePage>
       
    //   </LinearGradient>
    // </View>
  );
}