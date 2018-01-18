/**
 * Created by Marcin on 18.01.2017.
 */
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import login from './login';
import register from './register';
import layout from './layout';
import loan from './loan';
// test

export default combineReducers({
    routing,
    login,
    register,
    layout,
    loan
});