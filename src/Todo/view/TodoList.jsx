import React from 'react'
// import PropTypes from 'prop-type'

import { connect } from 'react-redux'
import {toggleTodo, removeTodo} from '../actions.js'
import TodoItem from './TodoItem.jsx'

const TodoList = ({ todos, toggoleItem, removeItem}) => {
  return (
    <ul>
      {
        todos.map((item) => (
          <TodoItem 
            key={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={()=>{toggoleItem(item.id)}}
            onRemove={()=>{removeItem(item.id)}}
          />
        ))
      }
    </ul>
  )
}

const mapState = (state) => {
  return {
    todos: state
  }
}
const mapDispatch = (dispatch) => {
  return {
    toggoleItem: (id) => {
      dispatch(toggleTodo(id))
    },
    removeItem: (id) => {
      dispatch(removeTodo(id))
    },
  }
}

export default connect(mapState, mapDispatch)(TodoList)

