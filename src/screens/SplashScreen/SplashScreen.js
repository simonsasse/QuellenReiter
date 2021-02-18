import React from 'react'
import { Image } from 'react-native'
import styles from '../styles';

export default function SplashScreen() {
    console.log("on SplashScreen")

    return (
        <Image
            style={styles.logo}
            source={require('../../../assets/logo_w_alpha_text.png')}
        />
    )
}
