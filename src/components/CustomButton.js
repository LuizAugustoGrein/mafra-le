import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CustomButton({text, action = () => {}}) {
  return (
    <View style={styles.center}>
        <TouchableOpacity style={styles.primaryButton} onPress={action}>
        <Text style={styles.primaryButtonText}>{text}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: 'red',
    width: 'auto',
    alignSelf: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 40
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700'
  },
  center: {
    alignSelf: 'center'
  }
});
