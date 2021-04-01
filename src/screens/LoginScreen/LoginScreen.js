import React, { useReducer, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../styles';
import { firebase } from '../../firebase/config'
import { useSelector, useDispatch} from "react-redux"

import userReducer from '../../redux/reducer';
import * as actionTypes from '../../redux/actionTypes';
import * as actions from '../../redux/actions';

export default function LoginScreen({navigation}) {

    // const [state, dispatch] = useReducer(userReducer, {
    //                                                     email: '',
    //                                                     password: ''
    //                                                 })

    const dispatch = useDispatch();

    const password = useSelector(state => state.password);
    const email = useSelector(state => state.email);
    // const [email, dispatch] = React.useReducer(useReducer, {email})
    // const [password, dispatch] = React.useReducer(useReducer, {password})

    console.log("on Loginscreen")

    const onLoginPress = () => {
        dispatch(actions.loginUser(email, password))
        navigation.navigate('Home')
      
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
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => dispatch({ type: actionTypes.UPDATE_EMAIL, payload: text })}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Passwort'
                    onChangeText={(text) => dispatch({ type: actionTypes.UPDATE_PASSWORD, payload: text })}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Einloggen</Text>
                </TouchableOpacity>
                <SafeAreaView style={styles.footerView}>
                    <Text style={styles.footerText}>
                        Wie bitte? Du hast noch keinen Account? 
                        <Text onPress={() => navigation.navigate('Registration') } style={styles.footerLink}>
                            Registrieren
                        </Text>
                    </Text>
                </SafeAreaView>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
