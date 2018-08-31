import fetch from 'cross-fetch'

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
                dispatch(receivePosts(json.results))
            )
    }
}
