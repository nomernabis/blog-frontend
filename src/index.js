require('./assets/stylesheets/styles.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import { BrowserRouter } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { fetchPosts } from './app/actions.js'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import posts from './app/reducers/postReducer'
import auth from './app/reducers/authReducer'

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({auth, posts})

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
