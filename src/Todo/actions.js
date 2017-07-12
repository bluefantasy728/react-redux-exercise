import {ADD_TODO} from './actionTypes.js'

let nextTodoId = 0

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId ++,
    text,
    completed: false
})