import React, { useEffect, useContext } from 'react';
import { View, Image } from 'react-native';

import { AuthContext } from '../contexts/auth';

export default function SplashScreenPage ({navigation}) {

    const { verifyLogin } = useContext(AuthContext);

    useEffect(() => {
        verifyLogin();
    }, []);

    return (
        <View style={styles.content}>
            <Image style={styles.image} source={require("../../assets/mafra.png")} />
            {/* <Image style={styles.loadingGif} source={require("../../assets/loading-purple.gif")} /> */}
        </View>
    );
}

const styles = {
    content: {
        paddingTop: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    image: {
        width: 175,
        height: 150,
        marginBottom: 40
    },
    loadingGif: {
        width: 150,
        position: 'absolute',
        height: 50,
        bottom: 50
    }
}