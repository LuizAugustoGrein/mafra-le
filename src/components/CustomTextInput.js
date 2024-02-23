import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

export function CustomTextInput({
    placeholder, 
    state, 
    setState,
    setCorrect = () => {}, 
    secureTextEntry = false,
    upperText
}) {

    // const [showPassword, setShowPassword] = useState(false);

    // function handleCorrectState () {
    //     if (!state) {
    //         setCorrect(false);
    //     } else {
    //         setCorrect(true);
    //     }
    // }

    // useEffect(() => {
    //     handleCorrectState();
    // }, [state])

    // const toggleShowPassword = () => {
    //     setShowPassword((prevShowPassword) => !prevShowPassword);
    // };

    return (
        <>
            <Text style={styles.upperText}>{upperText}</Text>
            <View style={styles.inputView}>
                
                <TextInput
                    style={styles.TextInput}
                    placeholder={placeholder}
                    placeholderTextColor="black"
                    value={state}
                    // onChangeText={(text) => setState(text)}
                    secureTextEntry={(secureTextEntry && !showPassword)}
                />
            </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "white",
        borderRadius: 10,
        height: 50,
        margin: 8,
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1
    },
    TextInput: {
        color: "black",
        paddingLeft: 5,
        paddingTop: 10,
        marginLeft: 20,
        width: "100%",
        fontSize: 23,
        fontWeight: "300"
    },
    upperText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 20
    }
})