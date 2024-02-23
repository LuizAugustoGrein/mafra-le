import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HomePage from './src/screens/HomePage';
import EnterFormPage from './src/screens/EnterFormPage';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(142,29,27,1)', 'rgba(59,34,38,1)', 'rgba(59,34,38,1)', 'rgba(142,29,27,1)']}
        style={styles.main}
        start={[0, 1]}
        end={[0, 0]}
      >
        {/* <EnterFormPage></EnterFormPage> */}
        <HomePage></HomePage>
       
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(142,29,27)'
  },
  main: {
    flex: 1,
    paddingTop: 80
  }
});
