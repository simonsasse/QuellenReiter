import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    container: {
        margin: 0,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white'
    },
    text: {
        color: 'white',
        fontSize: 30,
        margin: 30
    },
    logo: {
        flex: 1,
        width: 150,
        height: 150,
        alignSelf: "center",
        marginTop: 40,
        marginBottom: 40

    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: 'black',
        borderWidth: 1,
        padding:10,
        borderColor: 'white',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 20,
    },
    footerView: {
        flex: 1,
        marginTop: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    footerText: {
        alignItems: "center",
        fontSize: 16,
        color: 'white'
    },
    footerLink: {
        color: "grey",
        fontWeight: "bold",
        fontSize: 16
    }
})
