import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import styles from '../styles';
export default function SettingScreen() {
    console.log("on SettingScreen")

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Settings</Text>
        </SafeAreaView>
    )
}
