import { StyleSheet, Image } from 'react-native';

export default function LogoImage () {
  return (
    <Image
        source={require('../../assets/mafra.png')}
        style={styles.logoImage}
    />
  );
}

const styles = StyleSheet.create({
    logoImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 30
    },
});
