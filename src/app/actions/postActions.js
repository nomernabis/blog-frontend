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

export const POST_ADD_REQUESTED = 'POST_ADD_REQUESTED'
export const postAddRequested = () => ({
    type: POST_ADD_REQUESTED,
    isFetching: true
})

const SETTINGS =  {
    method: 'POST',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": 'Token ' + localStorage.getItem('token')
    }
}

export const addPost = data => dispatch => {
    dispatch(postAddRequested())
    let token = 'Token ' + localStorage.getItem('token')
    let settings = {method: 'POST', body: data}
    settings.headers = {"Authorization": token,}
    return fetch(API_URL + POSTS, settings)
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
                dispatch(receivePosts(json.results))
            )
    }
}
