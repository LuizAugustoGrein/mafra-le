import React, { createContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext();

function AuthProvider({children}) {

    const navigation = useNavigation();

    const [loginProvider, setLoginProvider] = useState();
    const [idToken, setIdToken] = useState();
    const [accessToken, setAccessToken] = useState();

    const [user, setUser] = useState();

    const [error, setError] = useState(null);

    async function verifyDefaultLogin (email, name) {
        if (await auth().currentUser) {
            var currentUser = await auth().currentUser;
            email = currentUser.email;
            var body = {
                email: email,
                name: name
            };

            fetch('https://luizgrein.com/talkee/users/login', {
                method: 'POST',
                body: JSON.stringify(body),
            })
            .then(async (response) => {
                if (response.ok) {
                    var resp = await response.json();
                    if (!resp.error) {
                        setUser(resp);
                        setAccessToken(resp['access_token']);
                        if (resp['score'] == 0) {
                            navigation.navigate('LoggedPage', { screen: 'SelfEvaluation' });
                        } else {
                            navigation.navigate('LoggedPage', { screen: 'HomePage' });
                        }
                    } else {
                        signOut();
                        if (resp.error_code == 1101) {
                            setError(t("error-1101"));
                        }
                        navigation.navigate('Login');
                    }
                } else {
                    signOut();
                    navigation.navigate('Login');
                }
            })
        } else {
            navigation.navigate('Login');
        }
    };

    async function verifyLogin (email = null, name = null) {
        setTimeout(() => {
            navigation.navigate('HomePage')
        }, 1000)
    }

    async function signOut () {
        try {
            setUser(null);
            setLoginProvider(null);
            await GoogleSignin.signOut();
            auth().signOut();
            navigation.navigate('Login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthContext.Provider value={{
            verifyLogin,
            signOut, 
            user, setUser,
            accessToken,
            error, setError
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;