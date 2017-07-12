import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions.js'

class AddTodo extends React.Component {
  constructor(prop, context) {
    super(prop, context)
    this.state = {
      value: ''
    }
    this.onAdd = this.onAdd.bind(this)
    this.textChange = this.textChange.bind(this)
  }

  onAdd(ev) {
    let value = this.state.value;
    this.props.onAdd(value)
  }

  textChange(ev){
    
    this.setState({
      value: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.textChange} />
        <button onClick={this.onAdd}>Add</button>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatch)(AddTodo)
