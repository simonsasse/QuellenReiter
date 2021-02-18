import React from 'react'
// import RNRestart from 'react-native-restart';
import { Text, SafeAreaView, TouchableOpacity, NativeModules, KeyboardAwareScrollView } from 'react-native'
import styles from '../styles';
import { firebase } from '../../firebase/config'


export default function HomeScreen(props) {
    console.log("on Homescreen")

    return (
        <SafeAreaView style={styles.container}>
                    <Text style={styles.text}>Howdy, {props.extraData.fullName}.</Text>
        </SafeAreaView>
    )
}
