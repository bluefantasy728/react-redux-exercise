import React from 'react'
import { connect } from 'react-redux'

class TodoItem extends React.Component {
  constructor(prop, context) {
    super(prop, context)
    this.toggleItem = this.toggleItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  toggleItem(ev) {
    console.log(this.props.id)

  }

  removeItem() {

  }

  render() {
    return (
      <li className="todo-item" >
        <input onChange={this.toggleItem} type="checkbox" />
        <span className="item-content">{this.props.text}</span>
        <span onClick={this.removeItem} className="del-item">X</span>
      </li>
    )
  }
}

const mapState = (state) => {
  return {
    todos: state
  }

}

const mapDispatch = (dispatch) => {
  return {
    dispatch: 
}

export default connect(mapState, mapDispatch)(TodoItem)