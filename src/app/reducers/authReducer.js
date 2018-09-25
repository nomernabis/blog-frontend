import { SIGNIN_REQUESTED, SIGNIN_SUCCESS, SIGNIN_ERROR,
        SIGNUP_REQUESTED, SIGNUP_SUCCESS, SIGNUP_ERROR, CLEAR_ERRORS} from '../actions/authActions'

function auth(state={ isFetching: false, key: null, errors: null, response: null }, action){
    switch (action.type) {
        case SIGNIN_REQUESTED:
        case SIGNUP_REQUESTED:
            return Object.assign({}, state, {isFetching: action.isFetching})
        case SIGNIN_SUCCESS:
            return Object.assign({}, state, {isFetching: action.isFetching, token: action.token})
        case SIGNUP_SUCCESS:
            return Object.assign({}, state, {isFetching: action.isFetching, response: action.response })
        case SIGNIN_ERROR:
        case SIGNUP_ERROR:
            return Object.assign({}, state, {isFetching: action.isFetching, errors: action.errors})
        case CLEAR_ERRORS:
            return Object.assign({}, state, { errors: action.errors})
        default:
            return state
    }
}


export default auth
