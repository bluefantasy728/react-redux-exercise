import React from 'react'

import TodoList from './TodoList.jsx'
import AddTodo from './addTodo.jsx'

import './style.css'

export default () => {
    return (
        <div>
            <AddTodo />
            <div className="todos">I am todo!!!</div>
            <TodoList />
        </div>
        
    )
}