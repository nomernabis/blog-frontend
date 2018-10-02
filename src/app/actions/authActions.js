import fetch from 'cross-fetch'

import { API_URL, SIGNIN, USERS } from '../utils/constants'

export const SIGNIN_REQUESTED = 'SIGNIN_REQUESTED'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_ERROR = 'SIGNIN_ERROR'

export const SIGNUP_REQUESTED = 'SIGNUP_REQUESTED'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'

export const CLEAR_ERRORS = 'CLEAR_ERRORS'


export const signinRequested = () => ({
    type: SIGNIN_REQUESTED,
    isFetching: true
})

export const signupRequested = () => ({
    type: SIGNUP_REQUESTED,
    isFetching: true
})

export const signinError = (errors) => ({
    type: SIGNIN_ERROR,
    isFetching: false,
    errors,
})

export const signupError = (errors) => ({
    type: SIGNUP_ERROR,
    isFetching: false,
    errors
})

export const signinSuccess = (token) => ({
    type: SIGNIN_SUCCESS,
    isFetching: false,
    token
})

export const signupSuccess = (response) => ({
    type: SIGNUP_SUCCESS,
    isFetching: false,
    response
})

const SETTINGS =  {
    method: 'POST',
    headers: { "Content-Type": "application/json; charset=utf-8" }
}
export const signIn = credentials => dispatch => {
    const { username, password } = credentials
    dispatch(signinRequested())
    SETTINGS.body = JSON.stringify({username, password})
    return fetch(API_URL + SIGNIN, SETTINGS).then(response => response.json(), error => { throw new Error(error) })
            .catch(error => dispatch(signinError(error)))
            .then(responseJson => {
                if(responseJson.token){
                    dispatch(signinSuccess(responseJson.token))
                } else
                if(responseJson.non_field_errors){
                    dispatch(signinError(responseJson))
                }
            })
}

export const signUp = credentials => dispatch => {
    const { username, password } = credentials
    dispatch(signupRequested())
    SETTINGS.body = JSON.stringify({username, password})
    console.log(SETTINGS)
    return fetch(API_URL + USERS, SETTINGS)
            .then(response => response.json().then(data => ({data: data, ok: response.ok})), error => console.log('error', error))
            .then(json => {
                if(json.ok){
                    dispatch(signupSuccess(json.data))
                } else {
                    dispatch(signupError(json.data))
                }
            })
}

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
    errors: {},
    response: null
})
