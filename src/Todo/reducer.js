import { ADD_TODO, TOGGLE_TODO } from './actionTypes.js'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ]

    case TOGGLE_TODO:
      
      

      ]
    default:
      return state;
  }
}
