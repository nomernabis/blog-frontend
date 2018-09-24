import fetch from 'cross-fetch'

import { API_URL, LOGIN, USERS } from '../utils/constants'

export const SIGNIN_REQUESTED = 'SIGNIN_REQUESTED'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_ERROR = 'SIGNIN_ERROR'

export const SIGNUP_REQUESTED = 'SIGNUP_REQUESTED'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'


export const signinRequested = () => ({
    type: SIGNIN_REQUESTED,
    isFetching: true
})

export const signupRequested = () => ({
    type: SIGNUP_REQUESTED,
    isFetching: true
})

const SETTINGS =  {
    method: 'POST',
    headers: { "Content-Type": "application/json; charset=utf-8" }
}
export const signIn = credentials => dispatch => {
    const { username, password } = credentials
    dispatch(signinRequested())
    SETTINGS.body = JSON.stringify({username, password})
    return fetch(API_URL + LOGIN, SETTINGS)
            .then(response => response.json(), error => console.log('error', error))
            .then(json => console.log('token', json.key))
}

export const signUp = credentials => dispatch => {
    const { username, password } = credentials
    dispatch(signupRequested())
    SETTINGS.body = JSON.stringify({username, password})
    console.log(SETTINGS)
    return fetch(API_URL + USERS, SETTINGS)
            .then(response => response.json(), error => console.log('error', error))
            .then(json => console.log('regitered successfully', json))
}
