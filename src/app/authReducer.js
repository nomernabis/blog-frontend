import { LOGIN_REQUESTED, LOGIN_RECEIVED, LOGIN_ERROR } from './actions'

function auth(state={ isFetching: false, key: null, errors: null }, action){
    switch (action.type) {
        case LOGIN_REQUESTED:
            return Object.assign({}, state, {isFetching: action.isFetching})
        case LOGIN_RECEIVED:
            return Object.assign({}, state, {isFetching: action.isFetching, key: action.key})
        case LOGIN_ERROR:
            return Object.assign({}, state, {isFetching: action.isFetching, errors: action.errors})
        default:
            return state
    }
}

export default auth
