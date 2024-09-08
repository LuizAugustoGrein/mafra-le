import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CustomButton({text, action = () => {}, disabled = false}) {
  return (
    <View style={styles.center}>
        <TouchableOpacity style={[styles.primaryButton, disabled && styles.disabledButton]} onPress={action} disabled={disabled}>
          <Text style={[styles.primaryButtonText, disabled && styles.disabledText]}>{text}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: 'red',
    width: 'auto',
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 30
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700'
  },
  center: {
    alignSelf: 'center'
  },
  disabledButton: {
    backgroundColor: '#b85f67',
  },
  disabledText: {
    color: '#d9c5c7'
  }
});
