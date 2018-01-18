/**
 * Created by Marcin on 18.01.2017.
 */
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router';

import reducer from './modules/reducers'

const middleware = applyMiddleware(promise(), thunk, createLogger(), routerMiddleware(browserHistory));

let initialState = {};

if (typeof window !== "undefined") {
    initialState = window.__REDUX_STATE__ || {};
}

export default createStore(reducer, initialState,  middleware);
