// REDUX
import configureStore from './src/redux/store';
import {Provider} from 'react-redux';
import './src/redux/reducer'

import 'react-native-gesture-handler';
import React, { useEffect, useState , useReducer, useSelector} from 'react'
import { firebase } from './src/firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { LoginScreen, HomeScreen, RegistrationScreen, SplashScreen , SettingScreen} from './src/screens'
import { Image } from 'react-native'
import styles from './src/screens/styles';
import {decode, encode} from 'base-64'
import Ionicons from 'react-native-vector-icons/Ionicons';
// import SwitchNavigator from './src/SwitchNavigator';
// if (!global.btoa) {  global.btoa = encode }
// if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const store = configureStore();

// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true,
// };

// const initialState = {};
// const store = createStore({userReduce}, initialState);

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance, //since we are using Firestore
// };

export default function App(props) {



  console.log("app started.")
  // const [loading, setLoading] = useState(true)
  // const [isAuthenticated, setAuthenticated] = useState(false)

//   const [state, dispatch] = useReducer(rootReducer, {   
//                                                               isAuthenticated: false
//                                                           })
// const isAuthenticated = useSelector( state => auth.isAuthenticated );

  const { isAuthenticated, isVerifying } = props;
  console.log("vor userEffekt")

  // useEffect(() => {
  //   const usersRef = firebase.firestore().collection('users');

  //   console.log(usersRef)
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       usersRef
  //         .doc(user.uid)
  //         .get()
  //         .then((document) => {
  //           const userData = document.data()
  //           setLoading(false)
  //           setUser(userData)
  //         })
  //         .catch((error) => {
  //           setLoading(false)
  //         });
  //     } else {
  //       setLoading(false)
  //     }
  //   });
  // }, []);
  // console.log("nach userEffekt")

 
  // if (loading) {
  //   return (
  //     <Image
  //           style={styles.logo}
  //           source={require('./assets/logo_w_alpha_text.png')}
  //     />
  //   )
  // }
  // console.log("nach if loading")

  // const HomeNav = () => 
  //     <Tab.Navigator 
  //       screenOptions={({ route }) => ({
  //         tabBarIcon: ({ focused, color, size }) => {
  //           let iconName;

  //           if (route.name === 'Home') {
  //             iconName = focused ? 'planet' : 'planet-outline';
  //           } else if (route.name === 'Setting') {
  //             iconName = focused ? 'hammer' : 'hammer-outline';
  //           }

  //           // You can return any component that you like here!
  //           return <Ionicons name={iconName} size={size} color={color} />;
  //         },
  //       })}
  //       tabBarOptions={{
  //         labelStyle: { fontSize: 16, marginTop: 0 },
  //         tabStyle: { width: 100, 
  //                     marginBottom: Platform.OS === 'android' ? 10 : 0},
  //         style: { backgroundColor: 'black',
  //                 borderTopWidth: 0,
  //               marginBottom: Platform.OS === 'android' ? 10 : 0},
  //     }} > 
  //       <Tab.Screen name="Home">
  //         {props => <HomeScreen {...props} extraData={user} />}
  //       </Tab.Screen>
  //       <Tab.Screen name="Setting">
  //         {props => <SettingScreen {...props} extraData={user} />}
  //       </Tab.Screen>
  //     </Tab.Navigator>
     

  // const changeName = () => 
  //   firebase.firestore().collection('users')
  //           .doc(this.user.uid)
  //           .update({
  //               fullName: fullName,
  //           })
  //           .then(() => {
  //               console.log("Username updated.");
  //           });

  const HomeNav = () => 
  <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'planet' : 'planet-outline';
        } else if (route.name === 'Setting') {
          iconName = focused ? 'hammer' : 'hammer-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      labelStyle: { fontSize: 16, marginTop: 0 },
      tabStyle: { width: 100, 
                  marginBottom: Platform.OS === 'android' ? 10 : 0},
      style: { backgroundColor: 'black',
              borderTopWidth: 0,
            marginBottom: Platform.OS === 'android' ? 10 : 0},
  }} > 
    <Tab.Screen name="Home">
      {props => <HomeScreen {...props} extraData={user} />}
    </Tab.Screen>
    <Tab.Screen name="Setting">
      {props => <SettingScreen {...props} extraData={user} />}
    </Tab.Screen>
  </Tab.Navigator>

    return (
      
        <Provider store={store}>
           <NavigationContainer>
            <Stack.Navigator 
              screenOptions={{
              headerShown: false,
              cardStyle: { backgroundColor: 'black' },
              style: { backgroundColor: 'black' }
            }}>
            { isVerifying ? (
              <Stack.Screen name="Splash" component={SplashScreen} />
            ) : isAuthenticated ? (
              <Stack.Screen name="Home" children={HomeNav}/>
            ) : (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Registration" component={RegistrationScreen} />
              </>
            )}
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    )
}
