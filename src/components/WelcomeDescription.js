import { StyleSheet, Text } from 'react-native';

export default function WelcomeDescription({text}) {
  return (
    <Text style={styles.welcomeDescription}>{text}</Text>
  );
}

const styles = StyleSheet.create({
    welcomeDescription: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        padding: 8
    }
});
