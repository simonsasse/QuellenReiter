import * as actionTypes from './actionTypes';
import { firebase } from '../firebase/config'

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updateUName = uName => {
  
    return{
        type: actionTypes.UPDATE_UNAME,
        payload: uName
    }
}

export const updateFullName = fullName => {

    return {
        type: actionTypes.UPDATE_FULLNAME,
        payload: fullName
    }
}

export const updatePassword = password => {
    return {
        type: actionTypes.UPDATE_PASSWORD,
        payload: password
    }
}

export const updateConfirmPassword = confirmPassword => {
    return {
        type: actionTypes.UPDATE_CONFIRM_PASSWORD,
        payload: confirmPassword
    }
}

// export const loginUser = () => {
//     return async (dispatch, getState) => {
//         try {
//             const { email, password } = getState().user
//             const response = await Firebase.auth().signInWithEmailAndPassword( email, password)
//             dispatch({ type: actionTypes.LOGIN_USER, payload: response.user })
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }

// export const signUpUser = () => {
//     return async (dispatch, getState) => {
//         try {
//             const {email, password, uName, fullName } = getState().user
//             const response = await Firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//             .then((response) => {
//                 const uid = response.user.uid
//                 const data = {
//                     id: uid,
//                     email,
//                     fullName,
//                     uName
//                 };

//                 const usersRef = firebase.firestore().collection('users')
//                 usersRef
//                     .doc(uid)
//                     .set(data)
//                     .then(() => {
//                         navigation.navigate('Home')
//                     })});
//                 dispatch({ type: actionTypes.SIGNUP_USER, payload: response.user });
            
//         } catch (e) {
//             console.log(e)
//         }
//     }
// }
  

// AUTHENTICATION !!

const requestLogin = () => {
    return {
      type: actionTypes.LOGIN_REQUEST
    };
  };
  
  const receiveLogin = user => {
    return {
      type: actionTypes.LOGIN_SUCCESS,
      user,
      isAuthenticated: true
    };
  };
  
  const loginError = () => {
    return {
      type: actionTypes.LOGIN_FAILURE
    };
  };

  const requestSignUp= () => {
    return {
      type: actionTypes.SIGNUP_REQUEST
    };
  };
  
  const receiveSignUp = user => {
    return {
      type: actionTypes.SIGNUP_SUCCESS,
      user
    };
  };
  
  const signUpError = () => {
    return {
      type: actionTypes.SIGNUP_FAILURE
    };
  };
  
  const requestLogout = () => {
    return {
      type: actionTypes.LOGOUT_REQUEST
    };
  };
  
  const receiveLogout = () => {
    return {
      type: actionTypes.LOGOUT_SUCCESS
    };
  };
  
  const logoutError = () => {
    return {
      type: actionTypes.LOGOUT_FAILURE
    };
  };
  
  const verifyRequest = () => {
    return {
      type: actionTypes.VERIFY_REQUEST
    };
  };
  
  const verifySuccess = () => {
    return {
      type: actionTypes.VERIFY_SUCCESS
    };
  };
  
  export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch(receiveLogin(user));
      })
      .catch(error => {
        //Do something with the error if you want!
        dispatch(loginError());
      });
  };
  
  export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(receiveLogout());
      })
      .catch(error => {
        //Do something with the error if you want!
        dispatch(logoutError());
      });
  };

  export const signUpUser = () => dispatch => {
    dispatch(requestSignUp());
        try {
            const response = firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                    uName
                };
                dispatch(receiveLogin(response.user))

                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Home')
                    })});
                dispatch({ type: actionTypes.SIGNUP_USER, payload: response.user });
            
        } catch (e) {
            console.log(e)
        }
    }
  
  export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user !== null) {
          dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
      });
  };