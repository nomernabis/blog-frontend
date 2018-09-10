import fetch from 'cross-fetch'
const API_URL = 'http://localhost:8000/'
const POSTS = 'posts/'
const LOGIN = 'auth/'


export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts() {
    return {
        type: REQUEST_POSTS
    }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(posts){
    return {
        type: RECEIVE_POSTS,
        posts: posts,
        receivedAt: Date.now()
    }
}

export function fetchPosts(){
    return function (dispatch){
        dispatch(requestPosts())
        return fetch('http://localhost:8000/posts/', {method: 'get', mode: 'no-cors'})
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(json =>
                dispatch(receivePosts(json.posts))
            )
    }
}

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
const loginRequested = () => ({
    type: LOGIN_REQUESTED,
    isFetching: true
})

export const LOGIN_RECEIVED = 'LOGIN_RECEIVED'
const loginReceived = (key) => ({
    type: LOGIN_RECEIVED,
    isFetching: false,
    key
})

export const LOGIN_ERROR = 'LOGIN_ERROR'
const loginError = (errors) => ({
    type: LOGIN_ERROR,
    isFetching: false,
    errors
})

export function login(credentials){
    const {username, password} = credentials
    return function (dispatch){
        dispatch(loginRequested())
        return fetch(API_URL + LOGIN,
             { method: 'post',
               headers: { "Content-Type": "application/json; charset=utf-8" },
               body: JSON.stringify({username, password})})
            .then(response => response.json(),
             error => console.log('login error', error))
             .then(json => {
                if(json.key){
                    localStorage.setItem('key', json.key)
                    dispatch(loginReceived(json.key))
                } else {
                    dispatch(loginError(json))
                }
              }
            )
    }
}
