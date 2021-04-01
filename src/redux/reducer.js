import { combineReducers } from 'redux'
// import { firebaseReducer, firestoreReducer } from 'react-redux-firebase'
import * as actionTypes from './actionTypes';

export default function userReducer(state, action)
{
    switch(action.type)
    {
        case actionTypes.LOGIN_USER:
            return action.payload
        case actionTypes.SIGNUP_USER:
            return action.payload
        case actionTypes.UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case actionTypes.UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        case actionTypes.UPDATE_CONFIRM_PASSWORD:
            return { ...state, confirmPassword: action.payload }
        case actionTypes.UPDATE_FULLNAME:
            return {...state, fullName: action.payload}
        case actionTypes.UPDATE_UNAME:
            return {...state, uName: action.payload}
        // auth stuff
        case actionTypes.LOGIN_REQUEST:
            return {
            ...state,
            isLoggingIn: true,
            loginError: false
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
            ...state,
            isLoggingIn: false,
            isAuthenticated: true,
            user: action.user
            };
        case actionTypes.LOGIN_FAILURE:
            return {
            ...state,
            isLoggingIn: false,
            isAuthenticated: false,
            loginError: true
            };
        case actionTypes.SIGNUP_REQUEST:
            return {
            ...state,
            isLoggingIn: true,
            loginError: false
            };
        case actionTypes.SIGNUP_SUCCESS:
            return {
            ...state,
            isLoggingIn: false,
            isAuthenticated: true,
            user: action.user
            };
        case actionTypes.SIGNUP_FAILURE:
            return {
            ...state,
            isLoggingIn: false,
            isAuthenticated: false,
            loginError: true
            };
        case actionTypes.LOGOUT_REQUEST:
            return {
            ...state,
            isLoggingOut: true,
            logoutError: false
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
            ...state,
            isLoggingOut: false,
            isAuthenticated: false,
            user: {}
            };
        case actionTypes.LOGOUT_FAILURE:
            return {
            ...state,
            isLoggingOut: false,
            logoutError: true
            };
        case actionTypes.VERIFY_REQUEST:
            return {
            ...state,
            isVerifying: true,
            verifyingError: false
            };
        case actionTypes.VERIFY_SUCCESS:
            return {
            ...state,
            isVerifying: false
            };
        default:
            return null;
    }
}

// function authReducer(state, action)
// {
//     switch (action.type) {
//         case actionTypes.LOGIN_REQUEST:
//           return {
//             ...state,
//             isLoggingIn: true,
//             loginError: false
//           };
//         case actionTypes.LOGIN_SUCCESS:
//           return {
//             ...state,
//             isLoggingIn: false,
//             isAuthenticated: true,
//             user: action.user
//           };
//         case actionTypes.LOGIN_FAILURE:
//           return {
//             ...state,
//             isLoggingIn: false,
//             isAuthenticated: false,
//             loginError: true
//           };
//         case actionTypes.SIGNUP_REQUEST:
//           return {
//             ...state,
//             isLoggingIn: true,
//             loginError: false
//           };
//         case actionTypes.SIGNUP_SUCCESS:
//           return {
//             ...state,
//             isLoggingIn: false,
//             isAuthenticated: true,
//             user: action.user
//           };
//         case actionTypes.SIGNUP_FAILURE:
//           return {
//             ...state,
//             isLoggingIn: false,
//             isAuthenticated: false,
//             loginError: true
//           };
//         case actionTypes.LOGOUT_REQUEST:
//           return {
//             ...state,
//             isLoggingOut: true,
//             logoutError: false
//           };
//         case actionTypes.LOGOUT_SUCCESS:
//           return {
//             ...state,
//             isLoggingOut: false,
//             isAuthenticated: false,
//             user: {}
//           };
//         case actionTypes.LOGOUT_FAILURE:
//           return {
//             ...state,
//             isLoggingOut: false,
//             logoutError: true
//           };
//         case actionTypes.VERIFY_REQUEST:
//           return {
//             ...state,
//             isVerifying: true,
//             verifyingError: false
//           };
//         case actionTypes.VERIFY_SUCCESS:
//           return {
//             ...state,
//             isVerifying: false
//           };
//         default:
//           return null;
//       }
// }
