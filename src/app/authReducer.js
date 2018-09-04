import { LOGIN_REQUESTED, LOGIN_RECEIVED } from './actions'

function auth(state={isFetching: false, response: {}}, action){
    switch (action.type) {
        case LOGIN_REQUESTED:
            return Object.assign({}, state, {isFetching: action.isFetching})
        case LOGIN_RECEIVED:
            return Object.assign({}, state, {isFetching: action.isFetching, response: action.response})
        default:
            return state
    }
}

export default auth
