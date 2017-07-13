import React from 'react'

const TodoList = ({ text, completed, onToggle, onRemove }) => {
  return (
    <li className="todo-item" >
      <input onChange={onToggle} type="checkbox" />
      <span className={completed === false? "item-content" : "item-content item-content-done"}>{text}</span>
      <em>{completed}</em>
      <span onClick={onRemove} className="del-item">X</span>
    </li>
  )
}

export default TodoList