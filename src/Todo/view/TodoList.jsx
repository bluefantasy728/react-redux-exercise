import React from 'react'
// import PropTypes from 'prop-type'

import { connect } from 'react-redux'

import TodoItem from './TodoItem.jsx'

const TodoList = ({ todos }) => {

  return (
    <ul>
      {
        todos.map((item) => (
          <TodoItem 
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
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
export default connect(mapState, null)(TodoList)

