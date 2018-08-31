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
import reducer from './app/reducers.js'

const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

store.dispatch(fetchPosts())
    .then(() => console.log(store.getState()))
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
