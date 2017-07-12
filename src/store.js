import {createStore} from 'redux'
import {reducer as todoReducer} from './Todo/index.js'

export default createStore(todoReducer)