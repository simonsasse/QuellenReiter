import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    container: {
        margin: 0,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    text: {
        color: 'white',
        fontSize: 30,
        margin: 30
    },
    smallText: {
        color: 'white',
        fontSize: 20,
        margin: 30,
        marginBottom:5,
        marginTop:5
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
    smallInput: {
        padding:10,
        paddingRight:50,
        marginLeft:30,
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10
    },
    button: {
        backgroundColor: 'black',
        borderWidth: 1,
        padding:10,
        borderColor: 'white',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    greenButton: {
        backgroundColor: 'green',
        borderWidth: 1,
        padding:10,
        borderColor: 'white',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    smallButton: {
        backgroundColor: 'black',
        borderWidth: 1,
        padding:10,
        borderColor: 'white',
        marginRight: 30,
        marginTop: 10,
        marginLeft: 'auto',
        height: 48,
        borderRadius: 5,
        alignSelf: "flex-end",
        alignItems: "flex-end",
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
