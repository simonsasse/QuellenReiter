import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../styles';
import { firebase } from '../../firebase/config'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';

export default function RegistrationScreen({navigation}) {
    const verifyEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [fullName, setFullName] = useState('')
    const [uName, setUName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [registerElement, setRegisterElement] =   useState(<TouchableOpacity
                                                                style={styles.button}
                                                                onPress={() => alert("So kommst du nicht rein!")}>
                                                                <Text style={styles.buttonTitle}>Her mit deinen Daten.</Text>
                                                            </TouchableOpacity>);
    console.log("on Registrationscreen")

    useEffect(() => {
        setUName(uName.replace(/[^A-Za-z0-9_.-]/,''))
    }, [uName])

    useEffect(() => {

        console.log("unique name changed.")
        var userRef = firebase.firestore().collection('users');
        userRef.where('uName', '==', uName).get()
        .then(snapshot => {
            // check name length
            if(uName.length < 5){
                setRegisterElement( <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => alert("So kommst du nicht rein!")}>
                                        <Text style={styles.buttonTitle}>Nutzername zu kurz...</Text>
                                    </TouchableOpacity>);
            }
            //check user name exists
            else if (!snapshot.empty){
                setRegisterElement(<Text style={styles.smallText}>Nutzername nicht mehr zu haben...</Text>);
            }
            //check email adress
            else if(!verifyEmail.test(email)){
                setRegisterElement( <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => alert("So kommst du nicht rein!")}>
                                        <Text style={styles.buttonTitle}>Email nicht valide...</Text>
                                    </TouchableOpacity>);
            }
            // check password length
            else if(password.length < 8){
                setRegisterElement( <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => alert("So kommst du nicht rein!")}>
                                        <Text style={styles.buttonTitle}>Passwort zu kurz...</Text>
                                    </TouchableOpacity>);
            }
            // check password length
            else if(password != confirmPassword){
                setRegisterElement( <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => alert("So kommst du nicht rein!")}>
                                        <Text style={styles.buttonTitle}>Passwörter nicht identisch...</Text>
                                    </TouchableOpacity>);
            }
            else if (snapshot.empty) {
            console.log("name does not exist")
            setRegisterElement(<TouchableOpacity
                                    style={styles.greenButton}
                                    onPress={() => onRegisterPress()}>
                                    <Text style={styles.buttonTitle}>Account erstellen</Text>
                                </TouchableOpacity>);
            } 
        })
            
    }, [email, uName, password, confirmPassword]);
    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const restrictChar = (e) => {
        console.log(e)
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                    uName
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo_w_alpha_text.png')}
                />
                {registerElement}
                <TextInput
                    style={styles.input}
                    placeholder='wie sollen wir dich nennen?'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='eindeutiger Nutzername'
                    placeholderTextColor="#aaaaaa"
                    onKeyPress={(char) => restrictChar(char)}
                    onChangeText={(text) => {setUName(text)}}
                    value={uName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Passwort'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Bestätige Passwort'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Du hast schon einen Account? Nice! <Text onPress={onFooterLinkPress} style={styles.footerLink}>Einloggen</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
