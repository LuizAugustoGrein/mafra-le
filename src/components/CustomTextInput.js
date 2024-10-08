import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native";
import { useEffect, useState } from "react";

export function CustomTextInput({
    placeholder, 
    state, 
    setState,
    setCorrect = () => {},
    maxLength = null,
    upperText,
    keyboardType = 'default'
}) {

    function handleCorrectState () {
        if (!state) {
            setCorrect(false);
        } else {
            setCorrect(true);
        }
    }

    useEffect(() => {
        handleCorrectState();
    }, [state])

    return (
        <>
            <Text style={styles.upperText}>{upperText}</Text>
            <View style={styles.inputView}>
                
                <TextInput
                    style={styles.TextInput}
                    placeholder={placeholder}
                    placeholderTextColor="black"
                    value={state}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    onChangeText={(text) => setState(text)}
                />
            </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "white",
        borderRadius: 10,
        margin: 8,
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1
    },
    TextInput: {
        color: "black",
        paddingLeft: 5,
        paddingTop: 8,
        paddingBottom: 8,
        marginLeft: 20,
        width: "100%",
        fontSize: 22,
        fontWeight: "300"
    },
    upperText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 20
    }
})