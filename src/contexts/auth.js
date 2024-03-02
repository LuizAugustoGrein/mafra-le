import React, { createContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

function AuthProvider({children}) {

    const navigation = useNavigation();

    const [user, setUser] = useState();
         
    async function verifyLogin (registrationNumber = null, schoolClass = null) {
        await AsyncStorage.setItem('registrationNumber', '');
        await AsyncStorage.setItem('schoolClass', '');
        if (registrationNumber && schoolClass) {
            // login pelo form
            await AsyncStorage.setItem('registrationNumber', registrationNumber);
            await AsyncStorage.setItem('schoolClass', schoolClass.toString());
            navigation.navigate('AvatarPage');
        } else {
            const storageRegistrationNumber = await AsyncStorage.getItem('registrationNumber');
            const storageSchoolClass = await AsyncStorage.getItem('schoolClass');
            if (storageRegistrationNumber && storageSchoolClass) {
                navigation.navigate('AvatarPage');
            } else {
                navigation.navigate('HomePage');
            }
        }
    }

    async function signOut () {
       
    };

    return (
        <AuthContext.Provider value={{
            verifyLogin,
            signOut, 
            user, setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;