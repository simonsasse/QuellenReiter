import { firebase } from '../../firebase/config'
import '@firebase/firestore';
import React, { useState } from 'react'
import { Text, SafeAreaView, TextInput, TouchableOpacity, NativeModules } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../styles';
export default function SettingScreen(props) {

    const [tempName, setTempName] = useState('')

    const changeName = (name) => {
        setTempName('');
        firebase.firestore().collection('users')
            .doc(props.extraData.id)
            .update({
                fullName: name,
            })
            .then(() => {
                console.log(props.extraData);
            });
        props.extraData.fullName = name;
    }

    const resetQuests = (name) => {

        // add list of all quests to userdata
        firebase.firestore().collection('users')
            .doc(props.extraData.id)
            .update({
                playedQuests: firebase.firestore.FieldValue.delete(),
            })
            .then(() => {
                console.log("quests for "+name+" reset.");
            });
    }

    const signOutPress = () => {
        firebase.auth()
            .signOut()
            .then(() => console.log('User signed out!'));
            NativeModules.DevSettings.reload();
    }
            
    console.log("on SettingScreen")
    console.log(tempName)
    return (
                <SafeAreaView style={styles.container}>
                    <KeyboardAwareScrollView
                        style={{ flex: 1, width: '100%' }}
                        keyboardShouldPersistTaps="always">
                        <Text style={styles.text}>Einstellungen</Text>
                        <Text style={styles.smallText}>Ändere deinen Nutzernamen:</Text>
                        <SafeAreaView style={{ flexDirection: 'row', width: '100%' }}>
                            <TextInput 
                                style={styles.smallInput}
                                placeholder='Wie sollen wir dich nennen?'
                                placeholderTextColor="#aaaaaa"
                                onChangeText={(text) => setTempName(text)}
                                value={tempName}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                            <TouchableOpacity
                                style={styles.smallButton}
                                onPress={() => changeName(tempName)}>
                                <Text style={styles.buttonTitle}>ändern</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        <Text style={styles.smallText}>Ändere deinen Nutzernamen:</Text>
                        <SafeAreaView style={{ flexDirection: 'row', width: '100%' }}>
                            <TouchableOpacity
                                style={styles.smallButton}
                                onPress={() => resetQuests(tempName)}>
                                <Text style={styles.buttonTitle}>Gespielte Fragen zuruecksetzen.</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => signOutPress()}>
                            <Text style={styles.buttonTitle}>Log dich aus!</Text>
                        </TouchableOpacity>
                    </KeyboardAwareScrollView>
                </SafeAreaView>
    )
}
