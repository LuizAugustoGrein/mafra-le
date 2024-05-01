import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, React } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from 'react-native';
import { useCallback, useEffect, useState, useContext } from 'react';
import CustomButton from '../components/CustomButton';
import WelcomeDescription from '../components/WelcomeDescription';
import LogoImage from '../components/LogoImage';
import { CustomTextInput } from '../components/CustomTextInput';
import * as ScreenOrientation from "expo-screen-orientation";

import { useNavigation } from '@react-navigation/native';

import { useFocusEffect } from '@react-navigation/native';

import { AuthContext } from '../contexts/auth';

export default function NamePage () {

    const { updateName } = useContext(AuthContext);

    const [name, setName] = useState();

    const [isFormOK, setIsFormOK] = useState(false);

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
        if (name && name.length > 6) {
          setIsFormOK(true);
        } else {
          setIsFormOK(false);
        }
    }, [name]);

    return (
        <View style={styles.container}>
        <LinearGradient
            colors={['rgba(142,29,27,1)', 'rgba(59,34,38,1)', 'rgba(59,34,38,1)', 'rgba(142,29,27,1)']}
            style={styles.main}
            start={[1, 0]}
            end={[0, 0]}
        >
            <Text style={styles.title}>Como você se chama?</Text>
            <View style={styles.nameForm}>
                <CustomTextInput placeholder={'Seu nome completo.'} state={name} setState={setName} maxLength={100} ></CustomTextInput>
                <CustomButton text="Confirmar" action={() => updateName(name)} disabled={!isFormOK} ></CustomButton>
            </View>
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
        flex: 1
    },
    title: {
        textAlign: 'center',
        marginTop: 50,
        color: 'white',
        fontSize: 25
    },
    nameForm: {
        width: '60%',
        alignSelf: 'center'
    },
    confirmButton: {
        backgroundColor: 'green',
        marginRight: 40,
        padding: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    confirmButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    }
});
