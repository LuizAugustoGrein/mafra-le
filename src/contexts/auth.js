import React, { createContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext();

function AuthProvider({children}) {

    const navigation = useNavigation();

    const [user, setUser] = useState();
    const [pendingQuestions, setPendingQuestions] = useState([]);

    async function updatePendingQuestions () {
        const response = await axios.post('https://luizgrein.com/projects/mafra-le/api/books/get-questions', {
            registration_number: user.registration_number,
            class: user.class
        });
        if (response.data.finished) {
            navigation.navigate('CompletionPage');
        } else if (response.data.length) {
            setPendingQuestions(response.data);
        }
    }
         
    async function verifyLogin (registrationNumber = null, schoolClass = null) {
        // await AsyncStorage.removeItem('registrationNumber');
        // await AsyncStorage.removeItem('schoolClass');
        if (registrationNumber && schoolClass) {
            const response = await axios.post('https://luizgrein.com/projects/mafra-le/api/users/login', {
                registration_number: registrationNumber,
                class: schoolClass
            });
            if (response.data.success) {
                setUser(response.data.user);
                await AsyncStorage.setItem('registrationNumber', registrationNumber);
                await AsyncStorage.setItem('schoolClass', schoolClass.toString());
                if (!response.data.user.avatar_skin) {
                    navigation.navigate('AvatarPage');
                } else if (!response.data.user.name) {
                    navigation.navigate('NamePage');
                } else {
                    navigation.navigate('QuestionPage');
                }
            }
        } else {
            const storageRegistrationNumber = await AsyncStorage.getItem('registrationNumber');
            const storageSchoolClass = await AsyncStorage.getItem('schoolClass');
            if (storageRegistrationNumber && storageSchoolClass) {
                const response = await axios.post('https://luizgrein.com/projects/mafra-le/api/users/login', {
                    registration_number: storageRegistrationNumber,
                    class: Number(storageSchoolClass)
                });
                if (response.data.success) {
                    setUser(response.data.user);
                    if (!response.data.user.avatar_skin) {
                        navigation.navigate('AvatarPage');
                    } else if (!response.data.user.name) {
                        navigation.navigate('NamePage');
                    } else {
                        navigation.navigate('QuestionPage');
                    }
                }
            } else {
                navigation.navigate('HomePage');
            }
        }
    }

    async function updateName (name) {
        if (user.id && name) {
            const response = await axios.post('https://luizgrein.com/projects/mafra-le/api/users/save-name', {
                registration_number: user.registration_number,
                class: user.class,
                name: name
            });
            if (response.data.success) {
                setUser(response.data.user);
                navigation.navigate('QuestionPage');
            }
        }
    }

    async function updateAvatar (avatarSkin, avatarEye, avatarHair, avatarHairColor, avatarEyebrow, avatarGlasses, avatarGlassesColor) {
        if (user.id && avatarSkin && avatarEye && avatarHairColor) {
            const response = await axios.post('https://luizgrein.com/projects/mafra-le/api/users/save-avatar', {
                registration_number: user.registration_number,
                class: user.class,
                avatar_skin: avatarSkin,
                avatar_eye: avatarEye,
                avatar_hair: avatarHair || 0,
                avatar_hair_color: avatarHairColor,
                avatar_eyebrow: avatarEyebrow,
                avatar_glasses: avatarGlasses,
                avatar_glasses_color: avatarGlassesColor
            });
            if (response.data.success) {
                setUser(response.data.user);
                navigation.navigate('NamePage');
            }
        }
    }

    async function signOut () {
       
    };

    return (
        <AuthContext.Provider value={{
            verifyLogin,
            updateName,
            updateAvatar,
            updatePendingQuestions, pendingQuestions,
            signOut, 
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;